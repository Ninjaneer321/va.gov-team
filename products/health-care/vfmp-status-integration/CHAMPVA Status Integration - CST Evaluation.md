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
- [5. Buckets and Display Locations](#5-buckets-and-display-locations)
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
We are confirming that CHAMPVA application processing states align with CST’s progress stepper and decision display model without requiring structural frontend changes.

### Technical Explanation
We are validating that CHAMPVA provider statuses can be normalized into `ClaimResponse` and mapped to CST’s existing `claimPhaseDates.phaseType` structure and decision rendering components.

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

1. Application Received  
2. Evidence Gathering  
3. Evidence Review  
4. Complete  

These labels will appear in the progress stepper.

---

### Technical Explanation

The active progress step is determined by:

`claimPhaseDates.phaseType`

This value is mapped via:

- `helpers.js`
- `claimPhase.jsx`
- Rendered in `ClaimPhaseStepper.jsx`

---

### Simple Explanation

The timeline is the progress stepper showing where the application is in processing.

---

# 4. Status vs What Users See

Backend responses may include a `status` field (for example COMPLETE or PENDING).

However, users do not see raw backend status values.

In CST, users see:

- The progress step (phase)
- Decision messaging (approved, denied, ineligible)
- Eligibility decision cards

---

### Technical Explanation

The frontend consumes normalized backend fields but renders only:

- Phase labels
- Decision components
- Activity entries

---

### Simple Explanation

“Status” is internal system language. Users see progress steps and decision results.

---

# 5. Buckets and Display Locations

Bucket = 'what state group this belongs to'
Pill = 'how we visually show that state in label'

PEGA may provide the underlying status,
MyVA maps that into a bucket,
and the UI renders it inside a pill

There are two display contexts in the overall experience:

### MyVA
Displays early lifecycle states such as:

- Draft
- Submission in Progress
- Action Needed
- Received

### CST
Displays processing lifecycle via:

- Progress stepper phases
- Final decision messaging

These are not identical lists.

---

### Simple Explanation

MyVA shows early states. CST shows processing states. They align conceptually but are not the same list.

---

# 6. Backend Status Source

Status data originates from external systems, including:

- DOCMP
- VES
- Health Apps

Backend status flow:

1. External systems return raw state values.
2. `provider_registry.rb` selects the correct provider adapter.
3. The provider normalizes external data into `ClaimResponse`.
4. `ClaimResponse` includes:
   - `status`
   - `claimPhaseDates.phaseType`
   - `trackedItems`
   - Decision data
5. The frontend maps `claimPhaseDates.phaseType` to the progress stepper.

Relevant backend files:

- `lib/benefits_claims/providers/provider_registry.rb`
- `app/controllers/v0/concerns/multi_provider_support.rb`
- `lib/benefits_claims/responses/claim_response.rb`

---

### Technical Explanation

The phase displayed in CST ultimately originates from provider state values normalized into `claimPhaseDates.phaseType`.

---

### Simple Explanation

Different systems send different statuses. Backend converts them into one consistent structure before frontend displays them.

---

# 7. CHAMPVA Lifecycle Within CST

CST-visible lifecycle begins once the application enters formal processing.

Processing phases:

1. Application Received  
2. Evidence Gathering  
3. Evidence Review  
4. Complete  

The first visible phase label (Application Received vs In Progress) will follow final Content approval.

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
2. Phase mapping assumes forward progression.
3. Backend normalization must align CHAMPVA states to approved phase labels.
4. Content-approved labels must match frontend labels exactly.

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

Primary alignment tasks:

- Confirm Content-approved phase labels.
- Confirm Denied vs Ineligible terminology.
- Ensure backend `claimPhaseDates.phaseType` aligns with approved phases.

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
