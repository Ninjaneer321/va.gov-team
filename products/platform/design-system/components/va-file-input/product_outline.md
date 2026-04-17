# va-file-input Component — Product Outline


## Overview
- va-file-input is the VA Design System web component for file uploads on VA.gov forms. It is either `va-file-input` (single file) and `va-file-input-multiple`and replaces the legacy custom-React `FileField`. 
- The component owns the upload UI (drag-and-drop, preview card, progress, error, password entry for encrypted PDFs) while decryption, file-type validation, and backend submission live in the forms library and the Simple Forms API.

## Problem Statement
- Veterans upload files on dozens of VA.gov forms:  medical records, service records, proof documents, supporting evidence for disability claims, CHAMPVA receipts, pension documentation.
- Before `va-file-input`, each forms team used the legacy `FileField` or built a React uploader, producing inconsistent UX, divergent accessibility behavior, and duplicated validation and password-handling code.
- The new `va-file-input` web component consolidates the upload UX into the VA Design System and pairs it with shared forms-library utilities. 

**How might we** Deliver a single, accessible file-input component that clearly separates presentation from business logic, supports single and multiple uploads with encrypted-PDF handling, and retires the legacy `FileField` across the VA.gov forms portfolio?

## Desired User Outcomes
- Veterans see the same file-upload UX across every VA.gov form (drag-and-drop, file card, progress, errors)
- Encrypted-PDF uploads work consistently with a clear password flow
- Screen-reader users get accurate announcements in both upload and review states 
- Multi-file uploads (e.g., supporting docs for disability claims) handle per-file errors, passwords, and document-type selection without confusion
- Error messages are specific and actionable ("The file extension doesn't match the file format", "Password cannot be blank", "File is required")

## Undesired User Outcomes
- Veterans see inconsistent file-input UX across forms
- Screen-reader users can't perceive the selected document type in review state
- Password flow traps Veterans in an unclear state when the backend rejects their password
- Multi-file uploads lose per-file context when one file fails
- Teams bypass the component and reintroduce the legacy `FileField` or bespoke implementations

## Desired Business Outcomes
- All VA.gov forms that accept file uploads migrate from `FileField` to `va-file-input` / `va-file-input-multiple`
- Shared forms-library utilities (`standardFileChecks`, `getFileError`, `passwordErrorState`) eliminate per-form validation duplication
- Simple Forms API owns conversion (JPG/PNG/GIF/BMP/TXT/HEIC → PDF), decryption, and Benefits Intake submission — not individual forms
- Accessibility fixes (ADR-002, ADR-005) close WCAG failures across the forms portfolio
- `disablePasswordSubmitPattern` stays scoped to `claim-status` only (ADR-006) — broader adoption is gated

## Undesired Business Outcomes
- `FileField` lingers in the codebase alongside `va-file-input` indefinitely
- Teams ship custom decryption logic in the browser instead of using platform utilities (violates ADR-001 guidance)
- `disablePasswordSubmitPattern` leaks beyond `claim-status` and creates a split password UX
- Upload failures in the multi-file path silently lose per-file state

## Measuring Success

### Key Performance Indicators (KPIs)

*Data sources: GitHub (component-library, vets-website, vets-design-system-documentation repos), Simple Forms API logs, Lighthouse Benefits Intake metrics, Datadog upload-error rates, quarterly forms-team survey.*

| Category | Ease of Use | Service Completion | Trust/Satisfaction | Health |
|---|---|---|---|---|
| Metric | File-upload success rate | Forms migrated from `FileField` to `va-file-input` | Forms-team CSAT on component | Open P1/P2 bugs + WCAG failures closed |

#### Baseline KPI Values

| Metric | Baseline | Source | Target |
|---|---|---|---|
| Forms using `va-file-input` / `va-file-input-multiple` | TBD — enumerate against all file-upload forms | vets-website grep for `VaFileInputField` / `VaFileInputMultipleField` | 100% of file-upload forms by end of FY26 |
| Forms still using legacy `FileField` | TBD — enumerate | vets-website grep for `FileField` | 0 (deprecate `FileField`) |
| File-upload success rate across forms | TBD | Simple Forms API + Datadog | ≥ 98% (excluding user-caused errors) |
| Password-protected PDF upload success rate | TBD | Simple Forms API (decryption step) | ≥ 95% when user supplies correct password |
| Conversion success rate (JPG/PNG/GIF/BMP/TXT/HEIC → PDF) | TBD | `Common::ConvertToPdf` / `BenefitsIntakeService::Utilities::ConvertToPdf` logs | ≥ 99% |
| WCAG violations in file-input components | 2 closed (ADR-002 dynamic preview, ADR-005 inert select); ongoing monitoring | axe CI + manual AT testing | 0 P1/P2 open |
| JAWS + VoiceOver verification for `<dl>` review state (ADR-005 watch item) | TBD — verify JAWS forms-mode skip and VoiceOver-Chrome announcement | Manual AT testing | Verified; documented in design.va.gov |
| Consumers of `disablePasswordSubmitPattern="true"` | 1 (`claim-status` only, per ADR-006) | Code audit | Hold at 1 unless explicitly approved |
| Open P1/P2 bugs | TBD — count open issues in component-library + vets-design-system-documentation | GitHub | 0 > 30 days |
| Forms-team CSAT on `va-file-input` | TBD — run baseline at FY26 kickoff | Quarterly forms-team survey | ≥ 4.0 / 5.0 |

### Objectives and Key Results (OKRs)
Maps to FY26 Design & Forms Systems OKRs:
- ✅ **Obj 1 (Optimize software delivery for Veteran impact)** — migrating off `FileField` removes duplicate code across every form that accepts uploads
- ✅ **Obj 2 (Operate products with high reliability and security)** — centralized validation, backend-side decryption (ADR-001), server-side conversion (ADR-003), and WCAG fixes (ADR-002, ADR-005) all harden the upload path
- ✅ **Obj 3 (Relentlessly improve user experience)** — consistent upload UX, accessible preview, accessible review state
- ✅ **Obj 4 (Empower DSD teammates)** — ADRs document the architectural boundaries so teams stop re-litigating them

## Assumptions
1. **Assuming** separation of concerns (component ↔ forms library ↔ backend) from ADRs 001/003/004 is the right long-term architecture. **If wrong:** teams will keep asking for an "all-in-one" component.
2. **Assuming** Simple Forms API remains the submission path to Lighthouse Benefits Intake for non-Benefits forms using `va-file-input`. **If wrong:** conversion/stamping behavior has to be re-homed.
3. **Assuming** the `claim-status` exception (ADR-006) stays contained — no other teams qualify. **If wrong:** the "secret" prop becomes de facto public, and the explicit-submit pattern's a11y benefit erodes.
4. **Assuming** the forms library's file-type validation (ADR-004) is sufficient for all consumers. **If wrong:** teams fork validation utilities for edge cases.
5. **Assuming** JAWS in forms mode skipping `<dl>` content (ADR-005 watch item) is acceptable in review state. **If wrong:** the review-state pattern needs further refinement.
6. **Assuming** we can retire `FileField` within FY26 once all consumers migrate. **If wrong:** we carry both indefinitely with maintenance cost on both.

## Solution Approach

### What we built (or: What this product does)

**Web component (`va-file-input` and `va-file-input-multiple`)**
Source: `@department-of-veterans-affairs/component-library` published via `react-bindings`. Renders:
- Initial drag-and-drop state with file-type hint
- Preview card after selection (static 40×40 SVG icon per ADR-002 — no dynamic PDF preview)
- Password input for encrypted PDFs (`encrypted={true}`)
- Per-file error, progress percentage, and document-type slot (multi variant)
- Review state with `<dl>`/`<dd>` for read-only document type (ADR-005)
- ~20 properties: `accept`, `maxFileSize`, `minFileSize`, `label`, `hint`, `error`, `statusText`, `encrypted`, `passwordError`, `passwordSubmissionSuccess`, `readOnly`, `required`, `headerSize`, `disablePasswordSubmitPattern` (claim-status only)
- Custom events: `vaChange`, `vaPasswordChange`, `vaPasswordSubmit`, `vaFileInputError`
- Focus hierarchy: errors → Change File button → password input → slotted content → first interactive element; focus deferred until window focus to ensure AT announcements

**Forms library (`VaFileInputField`, `VaFileInputMultipleField`)**
Source: `/platform/forms-system/src/js/web-component-fields/`. Responsibilities:
- `getFileError()` + `standardFileChecks()` — client-side validation (type/extension match, UTF-8 encoding, encryption detection)
- `passwordErrorState` — centralized manager tracking which files need passwords, per-instance error state, touched tracking
- Debounced password upload (prevents pulse uploads on every keystroke)
- Additional-input slot support (e.g., document-type select per file in the multi variant)
- Per-file error array management for the multi variant
- Network/upload error mapping to user-friendly strings

**Backend (Simple Forms API)**
- File staging via `PersistentAttachments`
- PDF decryption for password-protected files (per ADR-003)
- Format conversion — JPG, PNG, GIF, BMP, TXT, HEIC → PDF — via `Common::ConvertToPdf` and `BenefitsIntakeService::Utilities::ConvertToPdf`
- PDF validation + minimal stamping (cover pages via Benefits Intake utility)
- Submission to Lighthouse Benefits Intake

**Eight error states** (per `error-states.md`, 2025-10-14): file type mismatch, unsupported encrypted file, UTF-8 encoding, missing password, missing file (multi only), missing additional info (multi only), network/upload errors, internal component errors, duplicate file (multi only — note: `error-states.md` labels this as #8 alongside internal errors).

### What we're building next
- **Resolve ADR-001** — status is still "Proposed" (raised 2025-07-17). Needs a decision date and accepted status so teams stop asking for an all-in-one encryption component.
- **FileField deprecation plan** — audit consumers, publish migration guide, set EOL date
- **JAWS forms-mode + VoiceOver-Chrome verification for `<dl>` review state** (ADR-005 watch item)
- **Duplicate file handling** — `DUPLICATE_FILE_ERROR` is documented in `error-states.md` as #8 — confirm message consistency and error constant naming
- **Typo/consistency**: `MISSING_PASSWORD_ERROR` constant in `validation.js` says `"Encrypted file requires a password."` but the table in `error-states.md` reads `"Password cannot be blank. Incorrect password. Try again or delete file."` — these should be reconciled
- **Analytics baseline** — wire and validate `enableAnalytics: true` coverage across all file-input forms to get the success/failure baselines above
- **FY26 capacity** — prioritize open bugs referenced in related issues (#1874, #4704, #5196, #5849, #5851, #2027)

### What we explicitly decided NOT to include (and why)
- **Dynamic PDF preview at 40×40** — removed per **ADR-002** (2025-11-20). At 40px, content wasn't distinguishable, and dynamic previews caused inconsistent screen-reader announcements. Static generic SVG icon replaces it.
- **In-component decryption** — rejected per **ADR-001** (2025-07-17, Proposed). Research showed encryption handling varies too much across VA apps for a single built-in solution. Component owns password UI only; decryption is server-side.
- **`inert` for read-only document type** — replaced with `<dl>`/`<dd>` per **ADR-005** (2026-03-10). `inert` removed the value from the accessibility tree entirely (WCAG 1.3.1 and 4.1.2 failure).
- **`aria-readonly` on listbox/combobox roles** — evaluated and rejected during ADR-005: not a valid ARIA property on those roles, silently ignored by AT.
- **Implicit password submission as default** — rejected per ADR-006. Explicit submit button is the default for a11y reasons. `disablePasswordSubmitPattern` exists solely for `claim-status` backward compatibility and is hidden from Figma and VADS documentation.
- **File-type validation inside the component** — moved to forms library per **ADR-004** (2025-09). Keeps the component presentation-only and enables shared validation across single and multi variants.

### How this solution evolves
1. Keep retiring `FileField` — forms migrate cohort by cohort
2. Finalize ADR-001 status and publish a clear one-page "who owns what" diagram
3. Close open a11y watch items (JAWS `<dl>`, VoiceOver-Chrome `<dl>` announcement)
4. Burn down open PRs / issues in `component-library` and `vets-design-system-documentation`
5. Keep ADR-006 (`disablePasswordSubmitPattern`) scoped to `claim-status`; review each new request
6. Extend analytics and dashboard coverage so the "TBD" KPI baselines become real numbers

### Supporting Research
- `architecture-properties.md` — component property reference, password workflow, a11y features, custom events, backend processing
- `design-decisions-log.md` — six ADRs (001 Proposed 2025-07-17; 002 Accepted 2025-11-20; 003 Accepted 2025-09; 004 Accepted 2025-09; 005 Accepted 2026-03-10; 006 Accepted 2026-03-18)
- `error-states.md` — eight primary error states with triggers, messages, and implementation locations (dated 2025-10-14)
- Related PRs / issues:
  - [component-library #1874](https://github.com/department-of-veterans-affairs/component-library/pull/1874) (ADR-002)
  - [component-library #2027](https://github.com/department-of-veterans-affairs/component-library/pull/2027) (ADR-006)
  - [vets-design-system-documentation #4704](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4704), [#5196](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5196) (ADR-002)
  - [vets-design-system-documentation #5849](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5849), [#5851](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5851) (ADR-006)
- Encryption check guide: [depo-platform-documentation / checking-if-an-uploaded-pdf-is-encrypted](https://depo-platform-documentation.scrollhelp.site/developer-docs/checking-if-an-uploaded-pdf-is-encrypted)

### Initiatives
- `FileField` deprecation + migration
- ADR-001 finalization (encrypted-file scope)
- Accessibility verification for review-state `<dl>` across JAWS / VoiceOver
- Expanding analytics coverage to produce real KPI baselines

## Launch Strategy
Component releases go out through `@department-of-veterans-affairs/component-library` and are announced in #platform-design-system, the DSD release notes, and VA Forms stand-up. Breaking changes include a deprecation window and migration notes. ADR decisions are linked from release notes so teams can trace why behavior changed.

## Launch Dates
- `va-file-input` / `va-file-input-multiple` — live in production (exact launch date TBD — confirm from component-library releases)
- ADR-003 (Password Encryption) accepted: **September 2025**
- ADR-004 (File Type Validation) accepted: **September 2025**
- ADR-002 (Static PDF Thumbnail) accepted: **November 20, 2025**
- Error-states documentation snapshot: **October 14, 2025**
- ADR-005 (`<dl>` read-only display) accepted: **March 10, 2026**
- ADR-006 (`disablePasswordSubmitPattern` for claim-status) accepted: **March 18, 2026**
- ADR-001 (encrypted-file scope) decision: **still Proposed since 2025-07-17 — needs resolution**

## Solution Narrative

### Current Status
**Active, shipped, widely adopted.** Component and forms-library integration are in production. Five of six ADRs are Accepted; ADR-001 remains Proposed (status since July 2025). Architectural boundaries are clearly documented. Open items are incremental — a11y verification watch items, `FileField` migration, analytics baseline wiring, and a couple of open PRs / issues.

### Key Decisions
| Date | Decision | Rationale | ADR |
|---|---|---|---|
| 2025-07-17 (Proposed) | Component handles password UI only; decryption is server-side | Research showed too much variation across VA apps for a built-in decrypt solution; keeps component presentation-only | ADR-001 |
| 2025-09 | Password architecture distributed across component / forms library / backend | Each layer owns exactly one responsibility; passwords travel securely to backend for decryption | ADR-003 |
| 2025-09 | File-type validation lives in forms library, not component | Shared utility for single + multi variants; component stays presentation-only | ADR-004 |
| 2025-11-20 | Replace dynamic PDF preview with static 40×40 SVG icon | 40px preview was too small to be meaningful; dynamic previews caused inconsistent AT announcements | ADR-002 |
| 2026-03-10 | Use `<dl>`/`<dd>` for read-only document type in review state (not `inert`) | `inert` removed the value from the a11y tree — WCAG 1.3.1 and 4.1.2 failure | ADR-005 |
| 2026-03-18 | Add `disablePasswordSubmitPattern` prop as `claim-status`-only escape hatch | `claim-status` backend isn't set up for the new submit pattern; scope kept narrow | ADR-006 |

## Screenshots
### Before
TBD — add screenshots of legacy `FileField` and the old dynamic 40px PDF preview (pre-ADR-002) for contrast

### After
TBD — add screenshots of:
- Current `va-file-input` drag-and-drop and preview card
- Encrypted-PDF password flow
- Multi-file variant with document-type selector
- Review state with `<dl>`/`<dd>` (ADR-005)

---

#### Communications
- Slack: **#platform-design-system**
- Component source: [component-library](https://github.com/department-of-veterans-affairs/component-library)
- Forms-library integration: `/platform/forms-system/src/js/web-component-fields/` in [vets-website](https://github.com/department-of-veterans-affairs/vets-website)
- Documentation: [vets-design-system-documentation](https://github.com/department-of-veterans-affairs/vets-design-system-documentation) → design.va.gov component page
- Backend: Simple Forms API + Lighthouse Benefits Intake
- Pattern docs: `products/platform/design-system/components/va-file-input/`

#### Team Members
- VA Product Owner: Matthew Dingee
- Program Manager: Megan Siddle (Oddball)
- Lead PM: Tricia Baker (Oddball)
- PM: Carol Wong (Oddball)
- Technical Lead (Forms Library): Robert Hassell (Oddball)
- Technical Lead (Design System): Amy Leadem (Wilcore)
- Designers: Barb Denney, Dan Brady, Jeana Clark
- `va-file-input` DRI: TBD — confirm with Amy Leadem (likely component-library owner)

#### Stakeholders
- All VA.gov forms teams that accept uploads (disability 526EZ, CHAMPVA 10-10d / 10-7959a / 10-7959C, pensions, medical records, etc.)
- `claim-status` team (ADR-006 exception holder)
- Simple Forms API / Lighthouse Benefits Intake teams
- VA accessibility office (ADR-002, ADR-005 a11y fixes)
- Teams migrating off legacy `FileField`
- CIA (content standards for error messages)
