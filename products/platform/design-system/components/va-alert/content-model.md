# `va-alert` Content Modeling — Beta MVP

**Initiative:** Content modeling for Design System components
**MVP component:** `va-alert`
**OCTO leads:** Matthew Dingee & Danielle Thierry
**Related issue:** department-of-veterans-affairs/digital-experience-products#1380

---

## Problem

There is no standard place for shared content that should not change, and no way for Design System components and patterns to pull in standard, approved content that is context-specific. Content teams write a lot of content for VFS teams, and governance must ensure it meets standards — but there is no scalable system to manage or reuse that content.

---

## Hypothesis

Use JSON schema files stored in Jekyll `_data` (alongside existing labels and messages for patterns today) as a lightweight content database. Each file corresponds to a message type (e.g. `alert-maintenance.json`). Keys match component props. Content can be surfaced in Design System docs, pulled into Figma via a plugin, and consumed by web components at build time.

---

## Definition of Done

- [ ] Functional MVP defining a full set of reusable content for `va-alert`
- [ ] Figma can pull in content on demand into the component
- [ ] The web component can pull in content at build time
- [ ] Instructions for VFS teams on how to use the component to get content where it needs to be
- [ ] Guidance in component docs that lists content types and points to usage instructions

---

## Phase 1: Define the JSON schema

Create a schema that maps directly to `va-alert`'s props and slots. This is the source of truth for what a valid alert content entry looks like.

**File:** `src/_data/content/alerts/schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "VA Alert Content",
  "type": "object",
  "required": ["id", "status", "headline", "body"],
  "properties": {
    "id":               { "type": "string",  "description": "Unique key, e.g. alert-maintenance" },
    "status":           { "type": "string",  "enum": ["info", "warning", "error", "success", "continue"] },
    "headline":         { "type": "string",  "maxLength": 50 },
    "body":             { "type": "string" },
    "slim":             { "type": "boolean", "default": false },
    "closeable":        { "type": "boolean", "default": false },
    "closeBtnAriaLabel":{ "type": "string",  "description": "Defaults to 'Close {headline} notification' if omitted" },
    "fullWidth":        { "type": "boolean", "default": false, "description": "Emergency use only" }
  }
}
```

### `va-alert` prop and slot reference

| Field | Type | Content notes |
|---|---|---|
| `status` | `info \| warning \| error \| success \| continue` | Drives icon + color — a content decision |
| `headline` slot | string | ≤50 chars; expects a heading element (e.g. `<h2 slot="headline">`); not present in `slim` |
| default body slot | any | Can contain text, lists, links, action items |
| `closeBtnAriaLabel` | string | Audit for missing values — often hardcoded or absent |
| `slim` | boolean | Removes headline slot; body ≤100 chars guidance |
| `closeable` | boolean | UX/content decision — document re-show behavior |
| `fullWidth` | boolean | Emergency use only |

---

## Phase 2: Create the content files

One file per message type, stored in `_data` alongside existing pattern labels and messages.

### Proposed structure

```
src/_data/content/alerts/
  schema.json
  alert-maintenance.json
  alert-sign-in-required.json
  alert-saved-progress.json
  alert-form-error.json
  alert-session-timeout.json
```

### Example — `alert-maintenance.json`

```json
{
  "id": "alert-maintenance",
  "status": "warning",
  "headline": "System maintenance",
  "body": "Our website is down for scheduled maintenance. Please check back later.",
  "slim": false,
  "closeable": false
}
```

Keys map directly to `va-alert` props and slots — no translation layer needed.

---

## Phase 3: Audit existing alert usage in vets-website

Before defining all content types, audit what alerts are already being used across vets-website so you're modeling real content, not hypothetical.

**What to search for:**
- `<va-alert` and `<VaAlert` in vets-website
- Alert wrappers in the forms library (`platform/forms-system`)

**What to catalog per instance:**
- `status` value
- Headline text
- Body text
- Whether it's dismissible or slim
- Whether `closeBtnAriaLabel` is set

**What to decide per instance:**
- Is this app-specific content? → Not a candidate for the shared library
- Is this cross-cutting content used by multiple teams? → Good candidate for a shared JSON file

This audit produces the initial set of JSON files and surfaces accessibility gaps (missing aria labels, slim alerts with headlines, etc.).

---

## Phase 4: Surface content in Design System docs

Add a section to the `va-alert` component documentation page that:

- Lists all available content types with `id`, `status`, headline, and a rendered preview
- Links to the JSON source files in the repo
- Explains how VFS teams reference the content

Jekyll reads `_data/content/alerts/` directly and loops over files to render this automatically — no manual doc maintenance needed.

---

## Phase 5: Wire up web component at build time

The web component does not fetch JSON at runtime. The consuming app (vets-website) references content at build time.

**Flow:**
1. Content files live in the DS repo and are published (npm package or existing `_data` pipeline)
2. VFS teams import the content object and pass it as props to `<va-alert>`
3. No runtime dependency — content is baked in at build

This keeps the MVP simple without requiring a CMS or API.

---

## Phase 6: Figma integration

Using **Ditto** (recommended — has a CLI, enabling PR-based governance):

1. Map each JSON content file to a Ditto component — `id` becomes the Ditto key
2. Designers install the Ditto Figma plugin and connect to the DS content library
3. Content is pulled into `va-alert` Figma components on demand
4. Content changes flow through the same PR review process as code

### Ditto CLI content update flow

```
Content author edits JSON → PR opened → DS team reviews → merged → Ditto syncs → Figma updated
```

**Alternative plugins to evaluate:** Content Reel, Relay

---

## Phase 7: VFS team instructions

Two audiences:

### For developers
- How to install/import the content package
- How to reference a content type by `id`
- How to pass props to `<va-alert>`
- How to request a new content type (PR process and review expectations)

### For designers
- How to install and use the Figma plugin
- How to pull approved alert content into designs
- What to do when the needed content type doesn't exist yet

---

## Definition of Done — mapped to deliverables

| DoD item | How it's met |
|---|---|
| Functional MVP with reusable content | JSON schema + content files in `_data` |
| Figma can pull content on demand | Ditto plugin + CLI synced to JSON files |
| Web component pulls content at build time | vets-website imports content object, passes as props |
| Instructions for VFS teams | Docs page with separate paths for devs and designers |
| Guidance listing content types | Auto-generated from `_data` in component docs page |

---

## Out of scope for Beta

- Runtime content fetching (CMS or API)
- Drupal migration
- AI-assisted content generation (future state)
- Coverage beyond `va-alert`

---

## Repos involved

| Repo | Role |
|---|---|
| `component-library` | `va-alert` web component source, props, slots, Storybook |
| `vets-website` | Where real content strings live — apps and forms library |
| `vets-design-system-documentation` | Docs, `_data` content files, JSON schema, usage guidance |
