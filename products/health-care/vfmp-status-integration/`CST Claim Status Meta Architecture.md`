# Dynamic CST Configuration Layer: `claimStatusMeta`

## Executive Summary

The Claims Status Tool (CST) now uses a configuration-driven architecture to display claim status information. Instead of hardcoding content for each claim type, content such as status messages, filing instructions, contact information, and next steps is defined in JSON files and delivered through the API alongside each claim. The frontend reads this content and renders the appropriate UI automatically.

This work was introduced during the CHAMPVA CST integration and is designed to be reused by any future claim provider. Adding a new provider no longer requires custom UI development — it requires a JSON config file, a backend builder, and a feature flag if gating is needed.

The feature is currently gated behind the `cst_champva_custom_content` feature flag for CHAMPVA claims. Lighthouse claims use the same system without a flag.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Backend](#backend)
  - [JSON Config Files](#1-json-config-files)
  - [ConfigLoader](#2-configloader)
  - [Provider Claim Builders](#3-provider-claim-builders)
- [Feature Flag](#feature-flag)
- [Frontend](#frontend)
  - [withClaimStatusMetaIfEnabled](#1-withclaimstatusmetaifenabled)
  - [Where the Guard Is Applied](#2-where-the-guard-is-applied)
  - [Component-to-Config-Key Mapping](#3-component-to-config-key-mapping)
- [Provider Comparison](#provider-comparison)
- [Adding a New Provider](#adding-a-new-provider)
- [Key File Index](#key-file-index)

---

## Architecture Overview

```
[ JSON config file ]
        ↓
[ ConfigLoader (backend) ]
        ↓
[ Provider ClaimBuilder ]  ←  merges runtime data (user name, applicants, status)
        ↓
[ ClaimResponse → serialized JSON API ]
        ↓
[ GET /v0/benefits_claims or /v0/benefits_claims/:id ]
        ↓
[ withClaimStatusMetaIfEnabled (frontend) ]  ←  gates on feature flag
        ↓
[ Container / Component reads claimStatusMeta fields ]
```

---

## Backend

### 1. JSON Config Files

Config files live at:

```
config/benefits_claims/claim_status_meta/
  ivc_champva/
    default.json
  lighthouse/
    default.json
```

Each file is a JSON object whose top-level keys map directly to UI sections. The `default` variant is used unless a provider specifies otherwise. Adding a new variant (e.g., `extended.json`) is supported by the loader with no code changes.

---

### 2. `ConfigLoader`

**File:** `lib/benefits_claims/claim_status_meta/config_loader.rb`

```ruby
BenefitsClaims::ClaimStatusMeta::ConfigLoader.load(provider: :ivc_champva)
BenefitsClaims::ClaimStatusMeta::ConfigLoader.load(provider: :lighthouse)
```

| Behavior | Detail |
|---|---|
| **File resolution** | `config/benefits_claims/claim_status_meta/{provider}/{variant}.json` |
| **Development / test** | File is read fresh on every call |
| **Production** | Parsed result is cached in `Rails.cache` under `benefits_claims/claim_status_meta/{provider}/{variant}` |
| **Return value** | Always a deep copy — callers can safely mutate dynamic fields without poisoning the cache |
| **Error handling** | Raises `ArgumentError` if the file is missing or contains invalid JSON |

---

### 3. Provider Claim Builders

#### IVC CHAMPVA — `lib/benefits_claims/providers/ivc_champva/claim_builder.rb`

The CHAMPVA builder enriches the base config with runtime data before returning it:

1. Calls `ConfigLoader.load(provider: :ivc_champva)` to get a mutable copy of the config
2. Injects `detail.sectionGroups` — the authenticated Veteran's name and each applicant's name pulled from the `IvcChampvaForm` records
3. Sets `whatWeAreDoing.currentStatus` to the normalized backend status
4. Returns `nil` (skips the block entirely) if the `cst_champva_custom_content` Flipper flag is **disabled** for that user

**Status normalization from raw Pega values:**

| Raw Pega status | Normalized |
|---|---|
| `processed`, `manually processed` | `vbms` |
| `error`, `failed`, `rejected`, `submission failed` | `error` |
| anything else | `pending` |

If the config file fails to load, the method returns `{}` and logs the error — the claim is still served without meta content rather than failing.

#### Lighthouse — `lib/benefits_claims/providers/lighthouse/builders/claim_status_meta_builder.rb`

The Lighthouse builder is simpler and fully static:

- Calls `ConfigLoader.load(provider: :lighthouse)`, freezes the result, and maintains its own cache at `benefits_claims/providers/lighthouse/claim_status_meta`
- Returns a deep copy — no runtime enrichment; all content comes directly from the JSON file
- The Lighthouse config uses both `phaseTypeMap` (8-step phase-based flow) and `statusMap` (5-step status-based flow), reflecting the two display modes Lighthouse supports

#### How builders are wired in

Both providers call their respective builder from within `build_claim_response`, setting `claim_status_meta:` on the `ClaimResponse` DTO. That DTO is serialized to JSON API and returned by the `/v0/benefits_claims` endpoints.

```ruby
# IVC CHAMPVA
BenefitsClaims::Responses::ClaimResponse.new(
  ...
  claim_status_meta: build_claim_status_meta(records, status, user),
  ...
)

# Lighthouse
{
  ...
  claim_status_meta: Builders::ClaimStatusMetaBuilder.build
}
```

---

## Feature Flag

**Backend flag name:** `cst_champva_custom_content` (Flipper)  
**Frontend key:** `cstChampvaCustomContent` — registered in `src/platform/utilities/feature-toggles/featureFlagNames.json`

This flag gates the CHAMPVA config path at two independent levels:

| Layer | When flag is OFF |
|---|---|
| **Backend** (`IvcChampva::ClaimBuilder`) | `build_claim_status_meta` returns `nil`; `claimStatusMeta` is absent from the API response |
| **Frontend** (`withClaimStatusMetaIfEnabled`) | Strips `claimStatusMeta` from claim attributes before any component reads it |

The double-gate ensures that even if the backend somehow returns the field, the frontend will not render CHAMPVA-specific UI until the flag is enabled.

> **Note:** Lighthouse claims are not feature-flag gated. `claimStatusMeta` is always included for Lighthouse claims.

---

## Frontend

### 1. `withClaimStatusMetaIfEnabled`

**File:** `src/applications/claims-status/utils/claimStatusMeta.js`

```js
export const withClaimStatusMetaIfEnabled = (claim, cstChampvaCustomContentEnabled) => { ... }
```

This utility is the entry point for all container-level decisions about whether to use meta-driven content. It returns:

- The **original claim unchanged** — if the flag is on, or if the claim is a non-CHAMPVA provider (Lighthouse claims always pass through unchanged)
- A **copy of the claim with `claimStatusMeta` deleted** — if the claim is a CHAMPVA provider claim but the flag is off

CHAMPVA claims are identified by `claim.attributes.provider` matching the set `{ 'ivc_champva', 'ivcchampvabenefitsclaimsprovider' }`.

---

### 2. Where the Guard Is Applied

Every major CST container applies `withClaimStatusMetaIfEnabled` before rendering:

| Container / Component | Role |
|---|---|
| `containers/ClaimStatusPage.jsx` | Status tab — switches between CHAMPVA closed-claim UI and default closed-claim UI |
| `containers/OverviewPage.jsx` | Overview tab — switches between config-driven `ClaimPhaseStepper` and legacy `ClaimTimeline` |
| `containers/FilesPage.jsx` | Files tab — switches between simple CHAMPVA layout and standard multi-file UI |
| `containers/YourClaimsPageV2.jsx` | Claims list — strips meta for CHAMPVA claims when flag is off |
| `components/ClaimDetailLayout.jsx` | Layout shell — reads `detail` section for page title and section headings |

---

### 3. Component-to-Config-Key Mapping

Each UI component reads a specific slice of `claimStatusMeta`. This table maps components to the config keys they consume:

| Component | `claimStatusMeta` key(s) consumed |
|---|---|
| `ClaimDetailLayout` | `detail.pageTitle`, `detail.sectionTitle`, `detail.sectionGroups` |
| `ClaimStatusHeader` | `statusHeader.label`, `statusHeader.intro` |
| `WhatYouNeedToDo` | `whatYouNeedToDo.title`, `whatYouNeedToDo.emptyState` |
| `WhatWeAreDoing` | `whatWeAreDoing.statusMap[status]`, `whatWeAreDoing.phaseTypeMap[phaseType]`, `whatWeAreDoing.currentStatus` |
| `ClaimOverviewHeader` | `overview.title`, `overview.description` |
| `ClaimPhaseStepper` | `overview.steps`, `overview.currentStepPrefix` |
| `OverviewPage` | `overview.currentStepByStatus[status]` |
| `ClaimsListItem` | `listCard.title`, `listCard.receivedLabel`, `listCard.decisionLetterLabel` |
| `ChampvaClosedAlert` | `closedAlert.title`, `closedAlert.description` |
| `ChampvaNextSteps` | `nextSteps.title`, `nextSteps.items` |
| `NeedHelp` | `help.phone`, `help.tty`, `help.hours`, `help.intro`, `help.askVa` |
| `ClaimFileHeader` / `OtherWaysToSendYourDocuments` | `files.headerTitle`, `files.description`, `files.options`, `files.confirmation` |
| `FilesPage` | `files.simpleLayout` (boolean layout toggle) |
| `RecentActivity` | `whatWeAreDoing.statusMap`, `overview` (CHAMPVA only) |

---

## Provider Comparison

| Dimension | Lighthouse | IVC CHAMPVA |
|---|---|---|
| **Config file** | `lighthouse/default.json` | `ivc_champva/default.json` |
| **Builder** | `Lighthouse::Builders::ClaimStatusMetaBuilder` | `IvcChampva::ClaimBuilder` |
| **Runtime enrichment** | None — purely static | Yes — injects Veteran name, applicant names, current status |
| **Status model** | `phaseTypeMap` (8-step) and `statusMap` (5-step) | `statusMap` only: `pending`, `vbms`, `error` |
| **Feature flag gated** | No — always included | Yes — `cst_champva_custom_content` |
| **Overview steps** | Not configured (uses legacy timeline) | 2-step process; step 1 supports a `{date}` placeholder |
| **Files section** | Not configured | 3 submission options (online, mail, fax) + confirmation |
| **Closed-claim UI** | `ClosedClaimAlert` + `Payments` + `NextSteps` | `ChampvaClosedAlert` + `ChampvaNextSteps` |
| **Help section** | Phone only | Phone + TTY (inline) + Ask VA link |

---

## Adding a New Provider

Follow these steps to add a new provider to the config-driven system:

### Step 1 — Create the config file

```
config/benefits_claims/claim_status_meta/{provider_name}/default.json
```

Model it on `ivc_champva/default.json`. Include only the sections your UI needs — unused keys are simply ignored by components.

### Step 2 — Create or update a ClaimBuilder

In your provider's builder, load the config and attach it to the `ClaimResponse` DTO:

```ruby
require 'benefits_claims/claim_status_meta/config_loader'

def self.build_claim_status_meta(...)
  base_meta = BenefitsClaims::ClaimStatusMeta::ConfigLoader.load(provider: :your_provider_name)
  # inject runtime fields here
  base_meta
rescue ArgumentError => e
  Rails.logger.error('[YourProvider] Failed to load metadata config', { message: e.message })
  {}
end
```

Then set `claim_status_meta: build_claim_status_meta(...)` in your `ClaimResponse` initialization.

### Step 3 — Register the provider on the frontend (if flag-gated)

If the new provider should be feature-flag gated, add its provider string to `CHAMPVA_PROVIDERS` in `src/applications/claims-status/utils/claimStatusMeta.js`:

```js
const CHAMPVA_PROVIDERS = new Set([
  'ivc_champva',
  'ivcchampvabenefitsclaimsprovider',
  'your_new_provider',  // add here
]);
```

If the provider should always be active (like Lighthouse), no change to this file is needed.

### Step 4 — Add and wire a feature flag (if needed)

1. Register the flag in `src/platform/utilities/feature-toggles/featureFlagNames.json`
2. Read it in `mapStateToProps` in the relevant containers
3. Pass it to `withClaimStatusMetaIfEnabled`

### Step 5 — Write a config spec

Model on `spec/lib/benefits_claims/claim_status_meta/ivc_champva_default_config_spec.rb`. At minimum, assert that each expected top-level key is present and that required nested fields have values.

---

## Key File Index

| File | Purpose |
|---|---|
| `lib/benefits_claims/claim_status_meta/config_loader.rb` | Shared JSON loader and cache layer |
| `config/benefits_claims/claim_status_meta/ivc_champva/default.json` | CHAMPVA content config |
| `config/benefits_claims/claim_status_meta/lighthouse/default.json` | Lighthouse content config |
| `lib/benefits_claims/providers/ivc_champva/claim_builder.rb` | CHAMPVA builder — enriches config with runtime data |
| `lib/benefits_claims/providers/lighthouse/builders/claim_status_meta_builder.rb` | Lighthouse builder — static config only |
| `src/applications/claims-status/utils/claimStatusMeta.js` | Frontend gating utility and CHAMPVA provider check |
| `src/applications/claims-status/containers/ClaimStatusPage.jsx` | Status tab — CHAMPVA vs. default closed-claim branching |
| `src/applications/claims-status/containers/OverviewPage.jsx` | Overview tab — config-driven step rendering |
| `src/applications/claims-status/containers/FilesPage.jsx` | Files tab — simple layout toggle |
| `src/applications/claims-status/containers/YourClaimsPageV2.jsx` | Claims list — per-claim meta gating |
| `src/applications/claims-status/components/ClaimDetailLayout.jsx` | Layout shell — reads `detail` section |
| `spec/lib/benefits_claims/claim_status_meta/ivc_champva_default_config_spec.rb` | Contract spec for CHAMPVA config |
