# CHAMPVA Status Integration – CST Evaluation
<details>
<summary><strong>CST Frontend Evaluation</strong></summary>

# Frontend Evaluation  
*(Final Unified Version – Frontend Evaluation with UX Q&A Integrated)*

---

## Table of Contents

- [Purpose](#purpose)
- [1. Scope Clarification (Confirmed by UX)](#1-scope-clarification-confirmed-by-ux)
- [2. How CST Currently Displays an Application](#2-how-cst-currently-displays-an-application)
- [3. Timeline and Phases (Clarified)](#3-timeline-and-phases-clarified)
- [4. Status vs What Users See](#4-status-vs-what-users-see)
- [5. Buckets and Display Locations](#5-buckets-and-display-locations)
- [6. Backend Status Source (Clarified)](#6-backend-status-source-clarified)
- [7. CHAMPVA Lifecycle Within CST](#7-champva-lifecycle-within-cst)
- [8. Complete / Denied / Ineligible](#8-complete--denied--ineligible)
- [9. Role-Based Visibility](#9-role-based-visibility)
- [10. Frontend Constraints Identified](#10-frontend-constraints-identified)
- [11. Reuse Opportunities](#11-reuse-opportunities)
- [12. Final Conclusion](#12-final-conclusion)

---

# Purpose

This document evaluates whether CHAMPVA **applications** can be displayed correctly within the existing Claim Status Tool (CST) frontend.

### Simple Explanation
We are confirming that CHAMPVA application processing states align with CST’s progress bar and decision display model without requiring structural frontend changes.

### Technical Explanation
We are validating that CHAMPVA provider statuses can be normalized into `ClaimResponse` and mapped to CST’s existing `claimPhaseDates.phaseType` structure and decision rendering components.

---

# 1. Scope Clarification (Confirmed by UX)

## Questions and Answers – Alyssa

**Q: Should Draft applications appear in CST?**  
A: No. Draft appears only in MyVA. CST begins once the application is received and processing.

**Q: Are we working on CHAMPVA claims?**  
A: No. This effort applies to CHAMPVA applications only. Claims are a later effort.

**Q: Does CHAMPVA require role-specific UI views?**  
A: No.

**Q: Should Complete Denied have stronger visual treatment?**  
A: A denial treatment already exists in the design.

---

## Resulting Scope

- DRAFT, SUBMISSION IN PROGRESS, ACTION NEEDED, and RECEIVED are **MyVA-only states**
- CST begins once the application is formally received in processing
- No role-based UI logic required
- Denied presentation already defined
- This effort applies to CHAMPVA applications only

### Simple Explanation
CST only handles formal processing and final decisions. Early lifecycle states belong to MyVA.

---

# 2. How CST Currently Displays an Application

When a user opens an application in CST, they see:

1. A decision or status summary near the top  
2. A horizontal progress bar (timeline)  
3. A Recent Activity section  
4. Decision cards for eligibility outcomes  

These UI elements are driven by:

- `src/applications/claims-status/utils/claimPhase.jsx`
- `src/applications/claims-status/components/ClaimPhaseStepper.jsx`
- `src/applications/claims-status/utils/helpers.js`
- `ClaimOverview.jsx`
- `ClaimStatus.jsx`

---

# 3. Timeline and Phases (Clarified)

## Question – Chantale

**Q: Can you expand on the timeline and examples of the horizontal progress bar you are referencing?**

### Answer

The timeline refers to the horizontal progress bar displayed at the top of the CST application detail page.

Under current Content review, the CHAMPVA phases are:

1. Application Received  
2. Evidence Gathering  
3. Evidence Review  
4. Complete  

These are the labels that will appear in the progress bar.

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

The timeline is the progress bar showing where the application is in processing.

---

# 4. Status vs What Users See

## Question – Chantale

**Q: To confirm, what you are defining as "Status" isn't going to be displayed to users, is that correct? People are going to see the bucket instead?**

### Answer

Correct.

Backend includes a field like `status`. However, users do NOT see raw backend status values.

In CST, users see:

- The progress step (phase)
- Decision messaging (approved, denied, ineligible)
- Eligibility decision cards

---

### Technical Explanation

The frontend consumes normalized backend values but renders:

- Phase labels
- Decision components
- Activity entries

---

### Simple Explanation

“Status” is internal system language. Users see progress steps and decision results.

---

# 5. Buckets and Display Locations

## Question – Chantale

**Q: We need to confirm the user buckets. And there are two places people will see the buckets, so I'm not sure if it's one cohesive list.**

### Answer

There are two display contexts.

### MyVA
Displays early lifecycle buckets:

- Draft
- Submission in Progress
- Action Needed
- Received

### CST
Displays processing lifecycle via:

- Progress bar phases
- Final decision messaging

They are not identical lists.

---

### Simple Explanation

MyVA shows early states. CST shows processing states. They align conceptually but are not the same list.

---

# 6. Backend Status Source (Clarified)

## Question – Chantale

**Q: Can you help me understand from the backend where these statuses are being pulled from?**

### Answer

Backend status flow:

1. External systems return raw states (DOCMP, VES, Health Apps)
2. `provider_registry.rb` selects the correct provider adapter
3. Provider normalizes external data into `ClaimResponse`
4. `ClaimResponse` includes:
   - `status`
   - `claimPhaseDates.phaseType`
   - `trackedItems`
   - decision data
5. Frontend maps `claimPhaseDates.phaseType` to the progress bar

Backend files:

- `lib/benefits_claims/providers/provider_registry.rb`
- `app/controllers/v0/concerns/multi_provider_support.rb`
- `lib/benefits_claims/responses/claim_response.rb`

---

### Technical Explanation

The phase displayed in CST originates from provider states normalized into `claimPhaseDates.phaseType`.

---

### Simple Explanation

Different systems send different status formats. Backend converts them into one consistent shape before frontend displays them.

---

# 7. CHAMPVA Lifecycle Within CST

Based on UX confirmation, CST-visible lifecycle begins once the application enters formal processing.

Phases:

1. Application Received  
2. Evidence Gathering  
3. Evidence Review  
4. Complete  

---

## Clarification – Chantale

**Q: Draft will not show up in CST and status starts at In Progress, but this needs to be confirmed.**

### Resolution

Draft does not show in CST (confirmed by Alyssa).  
The first visible phase label (Application Received vs In Progress) will follow Content-approved terminology.

---

### Simple Explanation

CST starts after submission, once processing begins. The exact wording of the first step will be finalized by Content.

---

# 8. Complete / Denied / Ineligible

## Questions – Chantale

**Q: Completed Denied may show up as Ineligible, but this needs to be confirmed.**  
**Q: Denial reasons are a phase 2 implementation and there is a desire to show this information.**

### Answers

- Final terminology (Denied vs Ineligible) will follow Content approval
- Denial reasons will appear as text copy on the decision card (Phase 2)
- Structural rendering does not change

---

## Confirmation – Alyssa

Denied applications already have a defined visual treatment.

---

### Technical Explanation

Decision rendering occurs in:

- `ClaimOverview.jsx`
- `ClaimStatus.jsx`

Final phase is activated and decision components are rendered.

---

### Simple Explanation

Denied applications will show decision cards with eligibility results. The exact label depends on Content.

---

# 9. Role-Based Visibility

## Questions – Chantale

**Q: Role based visibility is unlikely but needs to be confirmed and documented.**  
**Q: Need to confirm role specific UI. It may be more authentication vs role.**

## Confirmation – Alyssa

Role-specific UI views are NOT required.

### Clarification

Authentication context may affect access, but the UI layout does not change based on sponsor vs dependent role.

---

### Simple Explanation

All users see the same interface.

---

# 10. Frontend Constraints Identified

1. CST uses predefined milestone arrays
2. Phase mapping assumes forward progression
3. Backend normalization must align CHAMPVA states to approved phase labels
4. Content-approved labels must match frontend labels exactly

Removed risks:

- Draft visibility in CST
- Submission in Progress in CST
- Role-based UI differences
- Denial header placement redesign

---

# 11. Reuse Opportunities

1. Timeline component reusable
2. Decision card component reusable
3. Status summary reusable
4. Backend provider normalization supports integration without frontend redesign

---

# 12. Final Conclusion

CHAMPVA applications can integrate into CST without structural frontend changes.

Primary alignment tasks:

- Confirm Content-approved phase labels
- Confirm Denied vs Ineligible terminology
- Ensure backend `claimPhaseDates.phaseType` aligns with approved phases

With scope clarified and UX questions addressed, integration risk is low.

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
