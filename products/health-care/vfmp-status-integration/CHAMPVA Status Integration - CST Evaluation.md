# CHAMPVA Status Integration – CST Frontend Evaluation  
*(With Code Evidence References)*

---

## Table of Contents

- [Purpose](#purpose)
- [1. How CST Currently Displays a Claim](#1-how-cst-currently-displays-a-claim)

# Purpose

This document evaluates whether CHAMPVA claim statuses can be displayed clearly and accurately within the existing Claim Status Tool (CST) frontend.

Simple explanation:  
We are checking if CHAMPVA claims will “fit” into CST without confusing users or breaking how CST currently works.

This document includes direct references to CST frontend files identified during code review.

---

# 1. How CST Currently Displays a Claim

When a user opens a claim in CST, they see:

1. A status label near the top
2. A horizontal progress bar (timeline)
3. A “Recent Activity” section
4. Alerts such as “We need more information from you”

These UI elements are driven by specific frontend files.

---

## What is the “Timeline”?

The timeline is the horizontal progress bar at the top of the claim page.

Example:

Initial Review → Evidence Gathering → Review → Preparation for Decision → Complete

Technical definition:  
The timeline step is determined using `claimPhaseDates.phaseType` from the API response.

Code Evidence:
- `src/applications/claims-status/utils/claimPhase.jsx`  
  (Defines phase step arrays for compensation-style claims)
- `src/applications/claims-status/components/ClaimPhaseStepper.jsx`  
  (Renders the progress bar using the phase array)
- `src/applications/claims-status/utils/helpers.js`  
  (Maps backend phaseType values to UI steps)

Simple explanation:  
The timeline is the progress bar that shows where the claim is in its journey.

---

## What is a “Phase”?

A phase is one of the steps in the progress bar.

Examples in compensation claims:
- Initial Review
- Evidence Gathering
- Review
- Preparation for Decision
- Complete

Technical meaning:  
The backend provides `claimPhaseDates.phaseType`, which is mapped in `helpers.js` and displayed through `ClaimPhaseStepper.jsx`.

Code Evidence:
- `claimPhase.jsx` → Static milestone definitions  
- `helpers.js` → Phase mapping logic  
- `ClaimPhaseStepper.jsx` → Visual rendering

Simple meaning:  
A phase is one step in the claim journey.

---

## What is a “Compensation-Style Lifecycle”?

CST was originally built for VA Compensation claims.

Compensation claims typically move forward in predictable steps:
1. Received
2. Evidence Gathering
3. Review
4. Preparation for Decision
5. Complete

Technical meaning:  
The static phase arrays in `claimPhase.jsx` assume this forward-moving structure.

Code Evidence:
- `utils/claimPhase.jsx` → Fixed step arrays  
- `helpers.js` → Phase ordering logic  

Simple meaning:  
CST expects claims to follow a structured step-by-step path.

This assumption matters because CHAMPVA may not follow the same exact path.

---

# 2. What is “Status”?

Status is the overall state of the claim.

Examples:
- PENDING
- COMPLETE

Technical meaning:  
Frontend reads `status` from claim attributes and may conditionally render UI states.

Code Evidence:
- `helpers.js` → Status mapping utilities  
- `ClaimOverview.jsx` → Displays status label

Simple meaning:  
Status is the high-level state, separate from the progress bar step.

---

# 3. What is a “Bucket”?

In this document, “bucket” means a user-facing status label.

Example CHAMPVA buckets:
- Action Needed
- In Progress
- Complete Denied

Technical meaning:  
Multiple backend states may map into one visible UI label.

Simple meaning:  
A bucket is just the label the user sees.

---

# 4. CHAMPVA Status Model

CHAMPVA user-facing buckets:

- Draft
- Submission in Progress
- Action Needed
- In Progress
- Complete
- Complete Denied

CHAMPVA status data comes from:
- Health Apps
- DOCMP / PEGA
- VES

Code Context for Multi-Provider:
- `lib/benefits_claims/providers/provider_registry.rb`
- `app/controllers/v0/concerns/multi_provider_support.rb`
- `lib/benefits_claims/responses/claim_response.rb`

(Simple meaning: Backend merges multiple sources and sends unified claim data to frontend.)

---

# 5. Compatibility Review (With Code Context)

---

## Draft

Meaning:
User started but did not submit.

CST today:
CST primarily renders submitted claims.

Code Evidence:
- `BenefitsClaimsController#index`
- No draft-specific logic in `claims-status` frontend components.

Risk:
Draft may not belong in CST without special handling.

Risk Level: Medium

---

## Submission in Progress

Meaning:
Submitted but intake processing not complete.

CST Handling:
Would likely map to earliest phase in `claimPhase.jsx`.

Code Evidence:
- `claimPhase.jsx` → Defines first milestone
- `helpers.js` → Determines active phase

Risk:
May look identical to compensation “Received.”

Risk Level: Medium

---

## Action Needed

Meaning:
User must upload something.

CST Support:
Uses:
- `documentsNeeded`
- `developmentLetterSent`
- `trackedItems`

Code Evidence:
- `helpers.js` → documentsNeeded logic
- `ClaimOverview.jsx`
- `ClaimStatus.jsx` → TrackedItems rendering

Compatibility:
Strong fit.

Risk Level: Low

---

## In Progress

Meaning:
Claim under review.

CST Mapping:
Maps to middle phase steps.

Code Evidence:
- `claimPhase.jsx`
- `helpers.js` phase mapping
- `ClaimPhaseStepper.jsx`

Risk:
CHAMPVA step semantics may differ from compensation semantics.

Risk Level: Low to Medium

---

## Complete

Meaning:
Claim finished.

CST Mapping:
- `status = COMPLETE`
- `closeDate` displayed

Code Evidence:
- `ClaimOverview.jsx`
- `helpers.js` → Final phase logic

Compatibility:
Strong fit.

Risk Level: Low

---

## Complete Denied

Meaning:
Claim closed with denial or ineligibility.

CST today:
Displays Complete.
Does not prominently highlight denial reason at claim header.

Reason data would likely be shown through `trackedItems`.

Code Evidence:
- `ClaimStatus.jsx` → Activity rendering
- `helpers.js` → Status label mapping

Constraint:
No strong UI pattern for denial reasoning at top of page.

Risk Level: High

---

# 6. Role-Based Visibility

CHAMPVA may require:
- Sponsor vs dependent view differences

CST today:
No role-based conditional rendering found in:
- `ClaimOverview.jsx`
- `ClaimStatus.jsx`
- `ClaimPhaseStepper.jsx`

Simple:
CST assumes a single user view.

Risk:
Frontend changes required for role-based display.

---

# 7. Frontend Constraints Summary

1. Static compensation-style progress steps (`claimPhase.jsx`)
2. Phase mapping tightly coupled to compensation semantics (`helpers.js`)
3. No native Draft support
4. Denial reasons not first-class at claim header
5. No role-based UI logic

---

# 8. Reuse Opportunities

1. Timeline component reusable (`ClaimPhaseStepper.jsx`)
2. Status badge reusable
3. TrackedItems model flexible
4. Multi-provider backend architecture supports data expansion

---

# 9. Open Questions for Product / UX

1. Should Draft claims appear in CST?
2. Should Complete Denied have stronger visual treatment?
3. Should denial reasons appear near page header?
4. Does CHAMPVA require role-specific UI views?

---

# 10. Preliminary Conclusion

Technically:
CHAMPVA claims can be integrated into CST.

However, there are UX risks around:

- Early lifecycle states
- Denial clarity
- Progress bar semantics
- Role-based differences

Final validation should occur after reviewing Figma designs.
