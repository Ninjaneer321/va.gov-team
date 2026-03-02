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

It does not NOT currently include phase data (e.g., claimPhaseDates)

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
  
# Backend Evaluation  
*(With Code Evidence References)*

---
Backend findings goes here...
</details>

<details>
<summary><strong>Integration Alignment Analysis</strong></summary>
# Integration Analysis 

---
End-to-End compatibility assessment goes here...
</details>
