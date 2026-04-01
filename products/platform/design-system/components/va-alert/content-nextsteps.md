# Content Modeling — Next Steps & Sprint Plan

Initiative: Content modeling for Design System components
Current MVP component: `va-alert`
OCTO leads: Matthew Dingee & Danielle Thierry

---

## Team meeting agenda


1. **Walk the audit findings** — show the reuse patterns ("something went wrong on our end" in 10+ apps, "verify your identity" in 3 identical places). Makes the case for why this matters without abstract argument.
2. **Align on the JSON schema shape** — the schema draft is done, but Content needs to review field names and character limits before anyone builds anything.
3. **Decide on the Figma plugin** — Ditto vs. Content Reel vs. Relay. If Ditto's CLI is the right call, someone needs to own that evaluation.
4. **Assign ownership lanes** — who writes the JSON content files (Content team), who builds the `_data` pipeline and DS docs integration (Design System team), who handles Figma setup (designer lead).
5. **Pick the second component** — don't leave the meeting without deciding this.

---

## Task breakdown and sizing

### Lane 1 — Content (Danielle's team)

| Task | Size |
|---|---|
| Write first 5 shared alert JSON files from audit shortlist | M |
| Review and approve JSON schema field names + character limits | S |
| Write VFS team content guidance doc | M |
| Define content review/PR process for new entries | S |

### Lane 2 — Design System engineering

| Task | Size |
|---|---|
| Set up `_data/content/alerts/` directory + schema | S |
| Auto-generate content catalog in component docs from `_data` | M |
| Document build-time consumption pattern for vets-website teams | M |
| Validate schema on PR (JSON schema linting in CI) | S |

### Lane 3 — Design / Figma

| Task | Size |
|---|---|
| Evaluate Ditto, Content Reel, Relay — pick one | S |
| Set up plugin + connect to DS content library | M |
| Map JSON content to Figma `va-alert` component | M |
| Write designer usage instructions | S |

---

## Sprint plan (2-week sprints)

### Sprint 1 — Foundation
- Team kickoff + decisions meeting
- Finalize and merge JSON schema
- Set up `_data/content/alerts/` structure
- Write first 3 JSON files: `alert-server-error`, `alert-submission-error`, `alert-maintenance` (highest reuse from audit)
- Figma plugin evaluation

### Sprint 2 — Alert MVP
- Write remaining 4–5 JSON files from the shortlist
- Auto-generate content catalog in DS docs
- Figma plugin setup + connect to alert content
- Build-time consumption example in vets-website (one real app as proof)

### Sprint 3 — Validation + VFS handoff
- Test with one VFS team using the content end-to-end
- Write and publish VFS instructions (dev + designer paths)
- PR process and governance docs for adding new content
- Begin second component schema

### Sprint 4 — Second component
- Full second component content model + files
- Retrospective: what worked, what to change before scaling to more components

---

## Second component recommendation: `va-telephone`

Recommended over `va-modal` or `va-banner` for these reasons:

- **Phone numbers are the purest example of the problem being solved** — written once, shouldn't change, used everywhere. They appear inside alerts, modals, cards, and pages all across vets-website.
- **Simple content model** — `number`, `label`, `type` (TTY, international, etc.), `contact-name`. Low complexity to prove the pattern a second time.
- **Already embedded in alerts** — the alert audit found `<va-telephone>` hardcoded inside many alert bodies (crisis line, help desk, health eligibility). If phone numbers were in the shared content model, alerts could reference them by ID rather than hardcoding them.
- **Drift risk is real** — Crisis Line, 1-800-MyVA411, and health eligibility numbers appear repeatedly across vets-website and are prone to going stale if a number ever changes.
- **Composability story** — alert content referencing telephone content is a strong proof point for why the JSON approach scales beyond single components.

### After `va-telephone`

`va-modal` is the logical third candidate — same headline/body/action structure as alert but with more complex interaction states. By that point the pattern will be established enough to handle the added complexity.

---

## Proposed shared JSON files (from alert audit)

Priority order based on reuse frequency across vets-website:

| File | Reuse signal |
|---|---|
| `alert-server-error.json` | 10+ apps, near-identical wording |
| `alert-submission-error.json` | HCA, Caregivers, EZR, Representative Appoint |
| `alert-maintenance.json` | HCA, EZR, Debt Letters, Letters, Direct Deposit |
| `alert-system-unavailable.json` | Claims Status, Personalization, MHV |
| `alert-data-unavailable.json` | Combined Debt Portal, Travel Pay, Profile |
| `alert-sign-in-required.json` | HCA, Profile |
| `alert-verify-identity.json` | Profile (3 instances with near-identical text) |
| `alert-download-success.json` | MHV Medical Records |
| `alert-max-items.json` | forms-system/ArrayField |
| `alert-min-items-required.json` | forms-system/arrayBuilderPatterns |
| `alert-emergency-care.json` | Facility Locator |
