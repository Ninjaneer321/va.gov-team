# CHAMPVA Status Integration – CST Evaluation
<details>
<summary><strong>CST Frontend Evaluation</strong></summary>

# Frontend Evaluation  
*(Frontend Evaluation – Final Clean Version)*

---

## Table of Contents

- [Purpose](#purpose)
- [1. Scope Clarification](#1-scope-clarification)
- [2. How CST Currently Displays an Application](#2-how-cst-currently-displays-an-application)
- [3. Timeline and Phases](#3-timeline-and-phases)
- [4. Status vs What Users See](#4-status-vs-what-users-see)
- [5. Card Status Pill (CST)](#5-card-status-pill-cst)
- [6. Backend Status Source](#6-backend-status-source)
- [7. CHAMPVA Lifecycle Within CST](#7-champva-lifecycle-within-cst)
- [8. Complete / Denied / Ineligible Handling](#8-complete--denied--ineligible-handling)
- [9. Role-Based Visibility](#9-role-based-visibility)
- [10. Frontend Constraints Identified](#10-frontend-constraints-identified)
- [11. Reuse Opportunities](#11-reuse-opportunities)
- [12. Final Conclusion](#12-final-conclusion)

---

# Purpose

This document evaluates whether CHAMPVA **applications** can be displayed correctly within the existing Claim Status Tool (CST) frontend.

### Simple Explanation
We are confirming that CHAMPVA application processing states can align with CST’s progress stepper and decision display model without requiring structural frontend changes.

### Technical Explanation
We are evaluating how CHAMPVA provider status values ('pega_status') can be normalized into the existing ClaimeResponse structure mapped into CST's phase and decision rendering components.

---

# 1. Scope Clarification

The following scope has been confirmed:

- Draft, Submission in Progress, Action Needed, and early Received states belong to MyVA and do not appear in CST.
- CST begins once the application is formally received and enters processing.
- This effort applies to CHAMPVA applications only (not CHAMPVA claims).
- Role-based UI variations are not required.
- Denied applications already have a defined visual treatment.

### Simple Explanation
CST only handles formal processing and final decisions. Early lifecycle states belong to MyVA.

---

# 2. How CST Currently Displays an Application

When a user opens an application in CST, they see:

1. A decision or status summary near the top  
2. A progress stepper (timeline) displayed on the Overview tab. [Ex. in staging](https://staging.va.gov/track-claims/your-claims/600204769/overview)
3. A Recent Activity section  
4. Decision cards for eligibility outcomes  

These UI elements are driven by:

- `src/applications/claims-status/utils/claimPhase.jsx`
- `src/applications/claims-status/components/ClaimPhaseStepper.jsx`
- `src/applications/claims-status/utils/helpers.js`
- `ClaimOverview.jsx`
- `ClaimStatus.jsx`

---

# 3. Timeline and Phases

The timeline is the progress stepper displayed at the top of the CST application detail page.

Under current Content review, CHAMPVA phases are:

1. Application received  
2. Evidence gathering  
3. Evidence received  
4. Application decided  

These labels will appear in the progress stepper.

---

### Technical Explanation

CST defines a multi-step phase model used by existing claim types (e.g., Received, Evidence Gathering, Preparation for Decision, Complete).

The progress stepper renders based on phase data (steps) included in the API response.

For Lighthouse-based claims (existing CST), this phase data is provided via 'claimPhaseDates' (API field).

For CHAMPVA (IVC provider), phase data is not currently included in the benefits_claims API response. Therefore, backend mapping will be required to translate 'pega_status' values into a CST-compatible phase model.

Note: For CHAMPVA, "Evidence received" may not correspond to a direct provider status value. Phase advancement may be triggered by completion of an evidence request workflow rather than a distinct external status.

---

### Simple Explanation

The timeline is the progress stepper showing where the application is in processing.

---

# 4. Status vs What Users See

Backend responses may include a normalized `status` field (for example 'COMPLETE' or 'PENDING').

However, users do not see raw backend status values. Conceptual distinction.

In CST, users see:

- The active progress step (phase)
- Final decision messaging (approved, denied, ineligible)
- Eligibility decision cards

---

### Simple Explanation

“Status” is internal system language. Users see progress steps and final results.

---

# 5. Card Status Pill (CST)

CST displays a status pill (tag) on the claim card. Specific UI behavior.

For CHAMPVA applications:

- If backend status is 'PENDING' -> the pill displays **"In Progress"**
- If backend status is 'COMPLETE' -> the pill is hidden

The pill is derived directly from the normalized backend 'status' value. It does not represent a separate lifecycle model.

---

### Simple Explanation

The backend sends a status value.

If it is pending, the card shows **"In Progress"**

If it is complete, the pill is not shown.

---

# 6. Backend Status Source

Status data originates from external systems, including:

- PEGA/DOCMP
- VES
- Health Apps

Backend origin status + flow:

1. PEGA callback updates 'pega_status' on 'IvcChampvaForm'
2. The IVC CHAMPVA provider normalizes 'pega_status' and builds a 'ClaimResponse'
3. The benefits_claims controller returns that response to the frontend.

The current ClaimResponse for CHAMPVA includes:
- id (form_uuid)
- claim_date
- close_date (not a db column, typically derived from pega_status and updated_at)
- normalized status

It does NOT currently include phase data (e.g., claimPhaseDates)

For CHAMPVA to integrate with the CST progress stepper, backend must map 'pega_status' values into CST_compatible phase values and include them in the API response.

Relevant backend files:

- `lib/benefits_claims/providers/provider_registry.rb`
- `app/controllers/v0/concerns/multi_provider_support.rb`
- `lib/benefits_claims/responses/claim_response.rb`

---

### Technical Explanation

The phase shown in CST is derived from normalized provider state values returned by PEGA/DOCMP and VES and needs to be mapped into CST_compatible phase values on the backend.

---

### Simple Explanation

Different systems send different statuses. Backend converts them into one consistent structure before frontend displays them.

---

# 7. CHAMPVA Lifecycle Within CST

CST defines a multi-step phase model used by existing claim types.

These phase labels already exist in the CST frontend.

For CHAMPVA, activation of these steps requires backend alignment so that 'pega_status' values are translated into a CST-compatible phase model and returned in the API response.

Processing phases follow the Content-approved four-step CHAMPVA model.

---

### Simple Explanation

CST starts after submission, once processing begins. Exact wording of the first step depends on Content approval.

---

# 8. Complete / Denied / Ineligible Handling

Final user-facing terminology (Denied vs Ineligible) will follow Content approval.

Denied applications:

- Display a closure state in the final phase
- Render eligibility decision cards
- May display denial reasons as copy in Phase 2 implementation

Structural rendering in CST does not change.

---

### Technical Explanation

Decision rendering occurs in:

- `ClaimOverview.jsx`
- `ClaimStatus.jsx`

The final phase is activated and decision components are rendered.

---

### Simple Explanation

Denied applications show decision cards with eligibility results. Exact wording depends on Content.

---

# 9. Role-Based Visibility

Role-based UI variations are not required.

Authentication context may affect access permissions, but the UI layout does not change based on sponsor or dependent role.

---

### Simple Explanation

All users see the same interface.

---

# 10. Frontend Constraints Identified

1. CST uses predefined milestone arrays.
2. Phase mapping assumes ordered progression unless explicitly handled.
3. Backend normalization must align CHAMPVA states to approved phase labels.
4. Content-approved labels must match frontend labels exactly.
5. Local frontend testing cannot call external upstream systems (e.g., PEGA / VES). Development therefore depends on:
   
 - Seeded database records, or
 - Mocked API responses that match the expected JSON shape.
  
   This is a normal development constraint and does not affect production behavior.

Removed risks:

- Draft visibility in CST
- Submission in Progress in CST
- Role-based UI differences
- Denial header placement redesign

---

# 11. Reuse Opportunities

1. Timeline component is reusable.
2. Decision card component is reusable.
3. Status summary structure is reusable.
4. Backend provider normalization supports integration without frontend redesign.

---

# 12. Final Conclusion

CHAMPVA applications can integrate into CST without structural frontend changes.

We may have:
- Minor CSS adjustments
- Small Storybook updates for new status examples
- Slight mapping logic adjustments in helpers
- New or updated Redux thunk to fetch CHAMPVA data

If CHAMPVA introduces new API endpoints, corresponding Redux setup (thunks, actions, reducers) will be required to integrate that data into CST.

Currently, it appears the existing benefits_claims endpoint may be extended to support CHAMPVA (still under consideration), which would minimize additional Redux changes.

But no:
- New layout architecture
- New stepper component
- New decision rendering system
- Major state model rewrite

So it’s data alignment and plumbing work, not structural UI redesign.

Primary alignment tasks:

- Confirm Content-approved phase labels.
- Confirm Denied vs Ineligible terminology.
- Ensure CHAMPVA backend maps 'pega_status' into CST-compatible phase values so the existing progress stepper can render correctly.

With scope clarified and UX feedback incorporated, integration risk is low.

---

</details>

<details>
<summary><strong>CST Backend Evaluation</strong></summary>

<div markdown="1">

<a id="cst-backend-evaluation"></a>

## Backend Evaluation  
*(CHAMPVA — PEGA Webhook + “Documents Needed” + Audit Trail)*

---

## Table of Contents

- [Purpose](#cst-backend-purpose)
- [1. Current state of `ivc_champva_forms`](#cst-backend-current-state)
- [2. What is already working](#cst-backend-working)
- [3. What does not exist today](#cst-backend-missing)
- [4. PEGA webhook architecture (required changes)](#cst-backend-pega-architecture)
- [5. Shared identifier strategy](#cst-backend-identifiers)
- [6. Database changes required](#cst-backend-db-changes)
- [7. Audit trail — form transitions](#cst-backend-audit)
- [8. Status endpoint — handing data to the frontend](#cst-backend-status-endpoint)
- [9. Supplemental document uploads](#cst-backend-supplemental-uploads)
- [10. Feature flag strategy](#cst-backend-feature-flags)
- [11. External dependencies](#cst-backend-external-deps)
- [12. Sprint plan (backend-focused)](#cst-backend-sprint-plan)

---

<a id="cst-backend-purpose"></a>

## Purpose

Define the backend implementation plan required to support a backend-driven **“documents needed”** signal and a durable **audit trail of PEGA status transitions** for CHAMPVA forms, while preserving the already-working submission pipeline and PEGA webhook.

> Note: MPI may be used later for identity alignment, but **is explicitly out of scope for this phase**.

---

<a id="cst-backend-current-state"></a>

## 1. Current state of `ivc_champva_forms`

### Already stored today (from schema and existing integration)

- `form_uuid` (Health Apps identifier)
- `pega_status` and `case_id` (written by PEGA webhook)
- `s3_status`, `email_sent`, and standard timestamps
- (Other submission metadata may exist, but is out of scope for this plan)

### Not present today (required for CST/MyVA experience)

- `documents_required` (boolean) to tell the frontend to show/hide the post-submission upload CTA
- An audit table to retain status history (PEGA status is overwritten in place today)
- Supporting indexes for common lookup paths (e.g., `case_id`)

---

<a id="cst-backend-working"></a>

## 2. What is already working

- PEGA status webhook is implemented and updates the forms table (`case_id` + `pega_status`).
- Supporting document upload endpoint exists (`submit_supporting_documents`) for uploading additional documents.
- CHAMPVA forms are surfaced to CST through the **Benefits Claims provider pipeline** (e.g., `GET /v0/benefits_claims`), not via `modules/ivc_champva` `GET` routes.

This means we do not need to “integrate PEGA statuses” again; we only need to extend behavior around the existing flows (**audit + read contract additions + documents_required**).

---

<a id="cst-backend-missing"></a>

## 3. What does not exist today

- No persisted boolean that reliably indicates **“more documents needed”**.
- No audit history of state changes (PEGA status overwrites in place).
- No defined contract for handing an **audit list of transitions** to the frontend per form.

---

<a id="cst-backend-pega-architecture"></a>

## 4. PEGA webhook architecture (required changes)

### What stays the same

- PEGA continues to call our webhook with status updates.
- We continue to write the *current* status to `ivc_champva_forms.pega_status` (and `case_id` as provided).

### What gets added

On every webhook update, we also:

- write an **append-only audit record** capturing the transition (previous → next),
- optionally update `documents_required` based on an internal rule/mapping (see below).

### Reliability requirement

The webhook response must remain resilient:

- Audit writes must be “best effort” and should not break callback success.
- Any non-critical downstream behavior should not block webhook processing.

---

<a id="cst-backend-identifiers"></a>

## 5. Shared identifier strategy

- `form_uuid`: canonical identifier for a CHAMPVA submission as surfaced to CST (and used by the provider grouping logic).
- `case_id`: PEGA identifier used to associate downstream workflow and document routing.

> MPI: out of scope for now. We are not adding MPI lookups/fields in this phase.

---

<a id="cst-backend-db-changes"></a>

## 6. Database changes required

### `ivc_champva_forms` additions

- `documents_required` (boolean, default `false`): frontend-friendly signal indicating “Action needed: upload supporting documents”.

### Indexing additions

Add indexes for:

- `case_id` (document routing / association)
- (Optional) `form_uuid` if not already indexed and used frequently for lookups/grouping

### Audit table

Create `ivc_champva_form_transitions` to record:

- `form_uuid` (or `ivc_champva_form_id` FK if desired)
- `from_status`, `to_status`
- `source` (e.g., `PEGA`)
- `case_id` (for correlation/debugging)
- `metadata` (jsonb; optional, for payload fragments or notes)
- timestamps

---

<a id="cst-backend-audit"></a>

## 7. Audit trail — form transitions

### Why it’s required

- Today, status updates overwrite the previous value; the system loses history.
- CST/MyVA experiences typically require “Recent activity” and traceability, plus troubleshooting tooling.

### What gets logged

- Every PEGA status update:
  - `previous_pega_status`
  - `new_pega_status`
  - `received_at`
  - correlation identifiers (`case_id`, `form_uuid`)

### Failure behavior

Audit logging must be “best effort”:

- It should never cause webhook callback failures or block user flows.

---

<a id="cst-backend-status-endpoint"></a>

## 8. Status endpoint — handing data to the frontend

### Current state

- The `ivc_champva` engine routes are `POST`-only (submission, supporting docs, webhook updates).
- CST currently reads CHAMPVA “forms” via the **Benefits Claims endpoint** (`GET /v0/benefits_claims`) using the IVC CHAMPVA provider.

### Required addition (to the existing CST-facing response)

Extend the CHAMPVA provider response so it returns, per CHAMPVA item:

- `pega_status`
- `documentsRequired` (boolean)
- `case_id`
- `audits` (list of transition objects; newest-first or oldest-first, but consistent)

Example shape (conceptual):

- `data[].attributes.documentsRequired: true|false`
- `data[].attributes.champvaAudits: [{ fromStatus, toStatus, source, occurredAt, caseId }, ...]`

### Computed status for UI

The backend should compute a simplified status (MyVA/CST friendly) from:

- `documents_required` + `pega_status` (+ agreed mapping rules)

This avoids leaking raw provider strings directly into UI logic.

---

<a id="cst-backend-supplemental-uploads"></a>

## 9. Supplemental document uploads

### What exists

A post-submission supporting docs upload endpoint already exists.

### What needs to be added

Clearing “action needed”:

- After a successful supplemental upload:
  - set `documents_required = false`
  - log an audit transition/event indicating documents were submitted (source: `SYSTEM` or `UPLOAD`)

### Open behavior question

Confirm with PEGA whether supplemental uploads require:

- a new metadata signal file, or
- simply depositing files into the case’s S3 location is sufficient to trigger reprocessing.

---

<a id="cst-backend-feature-flags"></a>

## 10. Feature flag strategy

- Keep existing submission-related flags as-is.
- Add a new flag (e.g., `champva_documents_required_and_audits`) to gate:
  - writing/returning `documents_required`,
  - writing/returning the audit list (`champvaAudits`),
  - and any follow-on behavior derived from these fields.

Default: off until the contract is confirmed with CST/MyVA.

---

<a id="cst-backend-external-deps"></a>

## 11. External dependencies

Blocked items depend on PEGA confirmation:

- PEGA status vocabulary: confirm enumerated `status` values and their meaning.
- Document handling behavior: confirm whether additional signaling is required when docs are uploaded.

---

<a id="cst-backend-sprint-plan"></a>

## 12. Sprint plan (backend-focused)

### Sprint 1 — Database foundation (unblocked)

- Add `documents_required` to `ivc_champva_forms`
- Add index(es) (at minimum `case_id`)
- Create `ivc_champva_form_transitions` audit table

### Sprint 2 — Webhook + audit logging (unblocked)

- On PEGA webhook update:
  - continue updating `pega_status` + `case_id`
  - append an audit transition record (best-effort)
- Add a small mapping hook to update `documents_required` when appropriate (logic TBD)

### Sprint 3 — Handing up audits + documentsRequired to CST (unblocked)

- Extend the CHAMPVA Benefits Claims provider payload to include:
  - `documentsRequired`
  - `champvaAudits` list for each form (scoped to that `form_uuid`)
- Add tests for:
  - audit records created on webhook updates
  - audit list returned for a form via `GET /v0/benefits_claims` and/or `GET /v0/benefits_claims/:id`

</div>
</details>
