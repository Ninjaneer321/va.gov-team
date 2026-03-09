# ADR: Configurable Content by Claim Provider Type

**Status:** Proposed  
**Date:** 2026-02-24  
**Authors:** Claims Status Tool Team  
**Deciders:** [TBD]

---

## Context

The Claims Status Tool (CST) currently renders content — titles, step labels, instruction text, section headings, and help contact information — that is hardcoded for disability compensation and pension claims. As we onboard new claim providers (starting with CHAMPVA), the tool must display meaningfully different content depending on the claim type. The differences are not just cosmetic; they span every layer of the claim experience:

| Surface | Benefits Claim Example | CHAMPVA Example |
|---|---|---|
| **Detail page title** | "Claim for disability compensation" | "Application for CHAMPVA benefits" |
| **Subheading section** | "What you've claimed" + contention list | "Veteran" / "Applicants" + name lists |
| **Status header label** | "Claim status" | "Application status" |
| **Status intro text** | "Here's the latest information on your claim." | "Here's the latest information on your application" |
| **Step labels & descriptions** | 8-step process (Evidence gathering, Rating, etc.) | 4-step process (Application received, etc.) |
| **"What you need to do" empty state** | "There's nothing we need from you right now..." | Same pattern, but with application-specific wording |
| **Need Help section** | VA benefits hotline 800-827-1000 | CHAMPVA helpline 800-733-8387 |

Today, all of this content is scattered across JSX components, utility maps, and helper functions with no single point of configuration.

## Problem Statement

How do we allow the CST frontend to render different text, labels, steps, and section structures for each claim provider type — in a way that is maintainable, scalable, and does not require a full engineering cycle for every content update?

## Decision Drivers

1. **Speed to first delivery** — CHAMPVA needs to work soon; we can't wait for a full backend overhaul.
2. **Cross-platform consistency** — Both vets-website and the VA mobile app consume claim data. Configuration must live in a shared layer so both platforms render the same content without independent maintenance.
3. **Content governance** — Content changes should eventually be possible without a frontend code deploy.
4. **Developer experience** — Engineers onboarding a new provider should find a clear, declarative surface rather than hunting across dozens of files.
5. **Risk tolerance** — A phased approach is preferred over a single large migration.

---

## Current State of Hardcoded Content

### Are the steps hardcoded? Yes.

Steps and phase descriptions are fully hardcoded in two locations:

**`utils/claimPhase.jsx`** — Returns an array of 8 step objects, each with a `phase` number, `header` string, and JSX `description`. There are two variants today: `getClaimPhases(date)` for disability compensation and `getPensionClaimPhases(date)` for pension claims. Both are 8-step pipelines. A CHAMPVA claim uses a 4-step pipeline, which has no representation in this file today.

```jsx
// utils/claimPhase.jsx — today
export const getClaimPhases = date => {
  return [
    { phase: 1, header: 'Step 1: Claim received', description: (<>...</>) },
    { phase: 2, header: 'Step 2: Initial review', description: (<>...</>) },
    // ...8 total
  ];
};
```

**`utils/helpers.js`** — Contains multiple maps that translate API phase enum values into display strings:

```js
// utils/helpers.js — today
const claimPhaseTypeStepMap = {
  CLAIM_RECEIVED: 'Step 1 of 8: Claim received',
  UNDER_REVIEW: 'Step 2 of 8: Initial review',
  // ...hardcoded to 8 steps
};

const claimPhaseTypeDescriptionMap = {
  CLAIM_RECEIVED: 'We received your claim in our system.',
  // ...
};
```

There is no mechanism to swap these for a different step count or different labels per provider.

### Title generation

`generateClaimTitle()` in `utils/helpers.js` assembles the detail page title from `claim.attributes`. It supports a server-generated path (`displayTitle` / `claimTypeBase`) and a legacy client-side path. Neither path has a concept of "Application for..." vs "Claim for..." driven by provider type — the word "Claim" is baked in at line 1310:

```js
return `Claim for ${claimType}`;
```

### Detail page sections

In `ClaimDetailLayout.jsx`, the "What you've claimed" heading and `ClaimContentionList` component are unconditionally rendered:

```jsx
// ClaimDetailLayout.jsx — line 117-127
<h2 className="claim-contentions-header vads-u-font-size--h3">
  What you've claimed
</h2>
<ClaimContentionList contentions={contentions} onClick={focusHeader} />
```

A CHAMPVA claim doesn't have contentions — it has a Veteran name and Applicant names. This section needs to be entirely swappable.

### Status header

`ClaimStatusHeader.jsx` hardcodes "Claim status" and "Here's the latest information on your claim." — these need to read "Application status" and "...your application" for CHAMPVA.

### Need Help

`NeedHelp.jsx` hardcodes the VA benefits hotline. CHAMPVA uses a different number and different hours.

---

## Options Evaluated

### Option 1: Make Fields Data-Driven (Foundation Step)

Refactor the components so that every piece of variable text — titles, section headings, step arrays, help content — is read from a structured object rather than from inline strings or per-component logic.

This is not a complete solution by itself, but it is the **necessary prerequisite** for either Option 2 or Option 3. Without this refactor, there is no clean surface to plug a configuration into.

**Concrete example — `ClaimDetailLayout.jsx`:**

```jsx
// BEFORE (today)
<h2 className="claim-contentions-header vads-u-font-size--h3">
  What you've claimed
</h2>
<ClaimContentionList contentions={contentions} onClick={focusHeader} />

// AFTER (data-driven)
// The config object tells us what section to render in the "claim info" slot
{config.claimInfoSection.type === 'contentions' ? (
  <>
    <h2 className="claim-contentions-header vads-u-font-size--h3">
      {config.claimInfoSection.heading}
    </h2>
    <ClaimContentionList contentions={contentions} onClick={focusHeader} />
  </>
) : config.claimInfoSection.type === 'applicants' ? (
  <>
    <h2 className="vads-u-font-size--h3">{config.claimInfoSection.veteranLabel}</h2>
    <ul><li>{claim.attributes.veteranName}</li></ul>
    <h2 className="vads-u-font-size--h3">{config.claimInfoSection.applicantsLabel}</h2>
    <ul>{claim.attributes.applicants?.map(a => <li key={a}>{a}</li>)}</ul>
  </>
) : null}
```

**Example — `ClaimStatusHeader.jsx`:**

```jsx
// BEFORE
<h2>Claim status</h2>
<p>Here's the latest information on your claim.</p>

// AFTER
<h2>{config.statusTab.heading}</h2>
<p>{config.statusTab.introText}</p>
```

**Example — `NeedHelp.jsx`:**

```jsx
// BEFORE
<p>Call the VA benefits hotline at <va-telephone contact="8008271000" />.</p>

// AFTER
<p>Call {config.helpSection.label} at <va-telephone contact={config.helpSection.phone} />
  {config.helpSection.tty && <> (<va-telephone contact={config.helpSection.tty} tty />)</>}.
  {config.helpSection.hours}
</p>
```

### Option 2 (Rejected): Frontend Configuration Files

One early idea was to create static config files in the vets-website codebase — one `.js` file per provider — and resolve the right config at render time based on the claim's provider key.

This was rejected because it **only solves for web**. The VA mobile app also consumes claim data and would need to independently maintain its own copy of the same configuration. Two consumers maintaining identical content in separate codebases is a recipe for drift and duplicated effort. Any approach we adopt must provide a single source of truth that both platforms can consume.

### Option 2: API-Side JSON Configuration Files (Recommended)

After Option 1 makes fields data-driven, create static `.json` configuration files in the **vets-api** codebase — one per provider — and return the appropriate config as part of the claim detail API response. This gives us the simplicity of flat config files with the cross-platform benefits of serving them from the API layer.

**File structure in vets-api:**

```
config/
  claims/
    providers/
      benefits.json     ← disability compensation & pension
      champva.json      ← CHAMPVA
```

**Example `champva.json`:**

```json
{
  "detailTitle": "Application for CHAMPVA benefits",
  "statusTab": {
    "heading": "Application status",
    "introText": "Here's the latest information on your application"
  },
  "claimInfoSection": {
    "type": "applicants",
    "veteranLabel": "Veteran",
    "applicantsLabel": "Applicants"
  },
  "steps": [
    { "phase": 1, "header": "Step 1 of 4: Application received", "description": "We received your application." },
    { "phase": 2, "header": "Step 2 of 4: Under review", "description": "We're reviewing your application." },
    { "phase": 3, "header": "Step 3 of 4: Decision", "description": "We're preparing a decision on your application." },
    { "phase": 4, "header": "Step 4 of 4: Complete", "description": "We've made a decision on your application." }
  ],
  "helpSection": {
    "label": "CHAMPVA helpline",
    "phone": "8007338387",
    "tty": "711",
    "hours": "We're here Monday through Friday, 8:05 a.m. to 7:30 p.m. ET."
  }
}
```

**API-side config loader (Ruby):**

```ruby
# app/services/claims/provider_config.rb
class Claims::ProviderConfig
  CONFIG_DIR = Rails.root.join('config', 'claims', 'providers')

  def self.for(provider_key)
    path = CONFIG_DIR.join("#{provider_key}.json")
    path = CONFIG_DIR.join('benefits.json') unless path.exist?
    JSON.parse(path.read)
  end
end
```

**Serializer integration:**

```ruby
# In the claim serializer
attribute :providerConfig do |claim|
  Claims::ProviderConfig.for(claim.claim_provider)
end
```

**API response shape:**

```json
{
  "data": {
    "id": "12345",
    "type": "claim",
    "attributes": {
      "claimProvider": "champva",
      "status": "IN_PROGRESS",
      "providerConfig": {
        "detailTitle": "Application for CHAMPVA benefits",
        "statusTab": {
          "heading": "Application status",
          "introText": "Here's the latest information on your application"
        },
        "steps": [
          { "phase": 1, "header": "Step 1 of 4: Application received", "description": "..." }
        ],
        "helpSection": {
          "label": "CHAMPVA helpline",
          "phone": "8007338387",
          "hours": "Monday through Friday, 8:05 a.m. to 7:30 p.m. ET."
        }
      }
    }
  }
}
```

Frontend components then read config from the API response — no static imports:

```jsx
// ClaimDetailLayout.jsx
export default function ClaimDetailLayout(props) {
  const { claim } = props;
  const config = claim.attributes.providerConfig;
  const claimTitle = config.detailTitle;
  // ...
}
```

**Pros:**
- **Single source of truth** — web and mobile both read config from the same API response; no duplication.
- Still simple flat files — no database, no admin UI, no migrations.
- Onboarding a new provider is: create a JSON file, deploy vets-api.
- Content changes are visible in a PR diff and go through standard code review.
- Clean upgrade path — swapping flat files for a DB lookup later only changes the implementation of `ProviderConfig.for()`, not the API contract or any frontend code.

**Cons:**
- Content changes still require a vets-api PR, review, and deploy (though this is lighter than a frontend deploy since it's just a JSON file).
- Increases the claim detail API response payload size.
- The `providerConfig` schema must be agreed upon across web and mobile teams so both can consume it.

**Optimization note (future):** The provider config is static per provider and does not change between requests. Clients could cache the config locally by provider key after the first fetch to avoid re-transmitting it on every claim detail request. This is a straightforward optimization but is not required for initial delivery — the config payload is likely only a few KB of text. We can revisit caching if payload size or request volume becomes a concern.

### Option 3: Database-Backed Configuration (Future)

Instead of flat JSON files in the repo, store provider configurations in a new `claim_provider_configs` table in the vets-api database. The API contract (returning `providerConfig` in the claim response) stays exactly the same — only the backing store changes.

**Pros:**
- Content updates without any code deploy.
- Could support an admin interface (similar to Flipper for feature flags) for content management.

**Cons:**
- Significantly more engineering effort (new DB table, serializer, admin UI, migrations).
- **Governance is a real risk**: Who can edit production content? Do we need preview/staging? A publishing pipeline? Audit trail? This is effectively building a lightweight CMS.
- The config structure must be forward-compatible — adding a new section type later is a schema migration, not just a new React component.

---

## Decision

We recommend a **phased approach**:

### Phase 1 — Make fields data-driven (Option 1)

Refactor components to read all variable text from a `config` object rather than from inline strings. This is the prerequisite regardless of where the config ultimately lives. Estimated effort: 1–2 sprints.

Key files to touch:
- `ClaimDetailLayout.jsx` — title, "What you've claimed" section
- `ClaimStatusHeader.jsx` — heading, intro text
- `ClaimsListItem.jsx` — card title, step text
- `WhatWeAreDoing.jsx` — step labels, descriptions, link text
- `NeedHelp.jsx` — phone, hours, label
- `utils/claimPhase.jsx` — step arrays
- `utils/helpers.js` — phase maps, title generation

### Phase 2 — API-side JSON config files (Option 2)

Create per-provider `.json` config files in vets-api and return `providerConfig` in the claim detail response. Both vets-website and the mobile app consume the same config from the API — no frontend-specific mapping needed. Estimated effort: 1 sprint after Phase 1.

This phase requires coordination between frontend and API teams to agree on the `providerConfig` schema, and between web and mobile teams to ensure both can consume it.

### Phase 3 — Database-backed config (Option 3, future)

Migrate the backing store from flat JSON files to a database table once governance questions are answered: Who owns content? What's the review/approval workflow? Is there a staging environment for content preview? Because the API response contract (`providerConfig` in the claim payload) stays the same, this migration is invisible to frontend consumers. This phase should be driven by a product decision about content ownership, not by engineering alone.

---

## Consequences

**Positive:**
- CHAMPVA can launch with a lightweight, low-risk approach (flat JSON files) that doesn't require a database or admin UI.
- Web and mobile consume the same config from the API — no cross-platform content drift.
- New providers follow a clear, repeatable pattern: create a JSON file in vets-api, deploy.
- The Phase 1 refactor improves code quality regardless of whether Phase 3 ever happens — scattered hardcoded strings become a single, testable surface.
- The API response contract (`providerConfig`) is stable across all three phases. Phase 2 → 3 is an invisible backend migration; no frontend or mobile changes needed.

**Negative:**
- Phase 2 still requires a vets-api PR and deploy for content updates (though this is a lighter lift than a frontend deploy — it's just editing a JSON file).
- Phase 2 introduces a small increase in API response payload size per claim detail request.
- Phase 3 introduces operational complexity (admin UI, governance, migrations) if/when pursued.

**Risks:**
- If Phase 3 governance is never resolved, we stay on Phase 2 indefinitely. This is acceptable — it's still a major improvement over the status quo.
- The `providerConfig` schema must be designed carefully and agreed upon across web and mobile teams before Phase 2 ships. Changes to the schema later will require coordination across both consumers.
- Phase 2 requires the API to return a `claimProvider` key (or equivalent) on every claim so the config loader can resolve the right file. This field must be available from the upstream claim source.

---

## Appendix: Inventory of Hardcoded Content That Must Become Configurable

| File | Content | Current Value (Benefits) | CHAMPVA Equivalent |
|---|---|---|---|
| `helpers.js` L1310 | Detail page title pattern | `Claim for ${claimType}` | `Application for CHAMPVA benefits` |
| `ClaimDetailLayout.jsx` L118 | Claim info section heading | `What you've claimed` | `Veteran` / `Applicants` |
| `ClaimDetailLayout.jsx` L120 | Claim info section body | `<ClaimContentionList>` | Name list |
| `ClaimStatusHeader.jsx` L27 | Status tab heading | `Claim status` | `Application status` |
| `ClaimStatusHeader.jsx` L29 | Status intro | `Here's the latest information on your claim.` | `...on your application` |
| `claimPhase.jsx` L6–144 | Step array (8 steps) | Disability-specific steps | 4-step CHAMPVA process |
| `helpers.js` L54–67 | Phase-to-step label map | `Step 1 of 8: Claim received` | `Step 1 of 4: Application received` |
| `helpers.js` L95–111 | Phase description map | Disability-specific descriptions | CHAMPVA-specific descriptions |
| `WhatWeAreDoing.jsx` L48 | "What we're doing" card | Step label + description + "Learn more" | Same pattern, different content |
| `WhatYouNeedToDo.jsx` L28 | Empty state message | `There's nothing we need from you right now...` | Application-specific variant |
| `NeedHelp.jsx` L35 | Help phone number | `8008271000` | `8007338387` |
| `NeedHelp.jsx` L35 | Help hours | `Monday through Friday, 8:00 a.m. to 9:00 p.m. ET` | `Monday through Friday, 8:05 a.m. to 7:30 p.m. ET` |
| `ClaimsListItem.jsx` L96 | Card subtitle pattern | `Received on ${date}` | Same (likely) |
| `ClaimsListItem.jsx` L101 | Communications text | `We sent you a development letter` | TBD per CHAMPVA requirements |
