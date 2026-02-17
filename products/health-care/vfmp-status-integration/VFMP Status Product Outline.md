# Product Outline – VFMP Health Status Tool (CHAMPVA Application Status)
---

- (TBD) VFMP Status Tool epic link  

---

## Problem Statement

- How might we reduce uncertainty, duplicate submissions, and call center volume by giving CHAMPVA applicants clear post-submission status visibility and a digital path to provide missing information

## Goal
- Provide a clear, trusted, logged-in status and follow-up experience for CHAMPVA applications (starting with 10-10d) within the existing Claims Status Tool (CST), while also delivering a near-term MyVA baseline status experience.

 
## Desired User Outcomes
- Submitters can confirm their CHAMPVA application was received and is progressing
- Submitters understand when action is required and what to do next
- Submitters can upload requested supporting documentation digitally (instead of mail/fax)
- Submitters can see status for all beneficiaries (benes) included on their application
- Less anxiety-driven resubmission (“I don’t need to submit again to be safe”)
- Increased trust and satisfaction with VA communications and processing

## Undesired User Outcomes
- Users only see “Draft” or no meaningful post-submission status
- Users do not understand the difference between MyVA statuses and the VFMP Status Tool experience
- Users cannot resolve “need more information” digitally and resort to paper or original form resubmission

## Desired Business Outcomes
- Reduction in duplicate CHAMPVA applications
- Reduction in CHAMPVA call center status-check inquiries
- Faster turnaround for cases waiting on missing documentation (reduced time in suspense)
- Higher satisfaction for digital submissions compared to paper

## Undesired Business Outcomes
- Fragmented experience with multiple status tools or unclear entry points
- Regressions in existing CST functionality or performance
- Late discovery of platform, accessibility, or governance requirements
- Delivery delays due to unmanaged dependencies across systems/teams

---
## Measuring Success

<details>
 <summary>Initial KPIs and OKRs (draft/in progress)</summary>

## Veteran Pain Points

- “Where is my application?”
- “Did you lose my application? I’ll resubmit.”
- “I got a letter but don’t know what to do.”
- “My application is stuck.”
- “I don’t know what to do next.”

---

### Key Performance Indicators (KPIs)

- **Call center:** % / volume of CHAMPVA calls that are status inquiries (baseline + post-launch)  
  - Target: Measurable reduction  
  - Why it matters: Direct proxy for transparency improvement  

- **Duplicates:** Rate of duplicate CHAMPVA applications (baseline + post-launch)  
  - Target: Measurable reduction  
  - Why it matters: Core backlog driver  

- **Digital resolution rate:** % of “need more information” requests resolved via CST digital upload  
  - Includes:
    - % of users who begin upload after viewing send-back  
    - % of users who upload documentation within 7 days of request  
  - Target: Majority resolved digitally  
  - Why it matters: Measures shift from paper to digital workflow  

- **Time in suspense:** Average time waiting on documentation after send-back request  
  - Target: Measurable reduction  
  - Why it matters: Operational efficiency gain  

- **Status tool adoption & engagement:**  
  - % of CHAMPVA submitters who view status within X days  
  - % of submitters who return to view status more than once  
  - % of “need more information” users who click into the evidence request  
  - % of users who do NOT navigate to “Contact Us” after viewing status  
  - Why it matters: Early leading indicators of behavior change and trust  

- **UX confidence signal (CSAT / micro-survey):**  
  - “I understand the status of my application.”  
  - “I know what to do next.”  
  - Target: Establish baseline and demonstrate measurable improvement  
  - Why it matters: Supports OKR 3.2 and 3.3  

- **Reliability (Golden Signals):**  
  - Latency  
  - Error rate  
  - Traffic volume  
  - Saturation  
  - % of status responses returned successfully (no fallback errors)  
  - Why it matters: Supports Objective 2.1  

- **Uptime:** ≥ 99.8% incident-free uptime; no Sev 1 incidents attributable to VFMP integration  

- **Accessibility:** 0 Sev 1 / Sev 2 508 issues at launch; 100% of critical issues resolved pre-production  

---

#### Baseline KPI Values

- TBD (requires alignment on data sources, instrumentation, and reporting owners)

---

### Objectives and Key Results (OKRs)

- **Objective:** Improve transparency and reduce avoidable burden for CHAMPVA applicants  

  - Key result: Status-related calls decrease  
  - Key result: Duplicate CHAMPVA submissions decrease  
  - Key result: Increase % of evidence requests resolved digitally  
  - Key result: Establish CSAT baseline and demonstrate measurable improvement  
  - Key result: Maintain ≥ 99.8% uptime and monitor golden signals  

 </details>
 
---

## Solution Approach

### Two distinct efforts (must remain clearly separated)

#### 1) MyVA Form Status Updates (foundational, near-term)
- Purpose: provide a baseline status signal in MyVA so users aren’t left with only “Draft” after submission, or no information at all
- **In-scope (MyVA):**
  - Draft
  - Submission in progress
  - Action needed
  - Received
- **Out of scope (MyVA):**
  - Document upload and evidence request workflows
  - Send-back letter details
  - Beneficiary-level views
  - Expanding MyVA to show additional detail after the VFMP Status Tool exists (explicitly not part of MVP)

#### 2) VFMP Health Status Tool (primary product, built on CST)
We will extend the existing **Claims Status Tool (CST)** to support CHAMPVA application status and follow-up actions using established CST architecture and UX patterns.

**MVP**: Provide CHAMPVA application status + “need more information” workflow for the authenticated **submitter**, including status for **all beneficiaries on the application**.

**In-scope (VFMP Status Tool MVP):**
- Authenticated submitter experience in CST
- Application statuses:
  - Application received
  - Need more information
  - Complete
- Generic upload for users to upload additional documentation they may have missed or forgotten
- Evidence requests / alerts triggered by send-back letters:
  - Show an alert that action is needed
  - Show descriptions of what documents are missing
  - Provide a clear CTA to respond with targeted document upload
    - Document-type dropdown **filtered** to only show documents eligible for that request
- After upload, show a **card** confirming what was provided (receipt confirmation, not acceptance)
- Submitter can view status for all benes listed on the application

**Out of scope (VFMP Status Tool MVP):**
- Email/SMS notifications for status changes
- Visibility of application status/eligibility for benes who log in but did not submit the application
- Showing rejection reason for an ineligible application (may move into scope pending feasibility)
- Showing all documents originally submitted with the application
- Editing/updating the original application after submission

## Assumptions
- Status transparency reduces anxiety-driven duplicate submissions
- “Submitter sees status for all benes on the application” is acceptable for MVP and is simpler than enabling visibility for non-submitters
- Backend systems can provide at least a minimal set of reliable status signals (received / need more info / complete)
- Send-back letters can be represented as evidence requests with a defined set of eligible document types
- MyVA can provide a baseline “is it in the system?” experience, but deeper workflow belongs in CST

--- 

## Go-to-market Strategy
- Make CHAMPVA application status discoverable within CST for eligible users
- Ensure content clearly explains:
  - Who can see status in MVP (submitter-only visibility, including all benes on that application)
- Coordinate with Contact Center guidance to reduce “where is my application” calls

## Launch Dates
- *Target Launch Date*: TBD
- *Actual Launch Date*: TBD
- *Impact Review*: 4–6 weeks post-launch (TBD)

---

## Solution Narrative

### Current Status
- CHAMPVA applications are submitted digitally, but post-submission status transparency is nonexistent
- MyVA currently shows limited statuses (often “Draft” only) for health apps forms
- The long-term solution is being built within CST using established patterns and architecture
- Research, design intent, and technical discovery are underway

### Designs
- [Figma design file](https://www.figma.com/design/OpAuMgHwnh6BNkKpW3FyqF/CHAMPVA-in-Status-Tool?node-id=15-1207&p=f&t=juN10UCPWFZLOOeF-0)

### Key Decisions
- There is **one status tool**: the Claims Status Tool (CST), extended for VFMP/CHAMPVA
- MyVA work is a **separate, foundational** effort to improve baseline status visibility
- MVP user model: authenticated **submitter** can see application status for **all benes on the application**
- MVP focuses on status visibility + send-back-driven evidence request workflows + targeted uploads

### Known Risks & Open Questions
- **Missing OHI uploads (removed from MVP):**
  - Risk: users may receive OHI-related send-backs without a clear digital resolution path; may increase confusion/resubmissions
- **Non-submitter visibility:**
  - Risk: Veteran sponsor/beneficiaries may log in and expect to see status but cannot; needs clear UX/content strategy and future plan to allow for this
- **Data reconciliation across systems:**
  - Risk: matching records across Health Apps / VES / PEGA(DOCMP) / CST may be delayed or inconsistent (identifier gaps, timing gaps)
  - Requires clear “source of truth” decisions and robust mapping/sequencing logic
  - Different IDs used by different systems

---
   
## Screenshots

### Before


### After


---

#### Communications

<details>

- Team Name: VFMP Health Status Tool
- GitHub Label(s): vfmp-status (TBD)
- Slack channel: #vfmp-health-status (TBD)
- Product POCs: Premal Shah (PO), Mike Mooney (PM)

</details>

#### Team Members

<details>
 
- PM: Mike Mooney  
- Engineering: Kenny Santiago (Eng Lead), Stephen Willis, TBD 
- Research/Design: Chantale Levert Hedgeman  
- VA UX Partners: Alyssa Li, John Riggins

</details>

#### Stakeholders

<details>
 
- OCTO Health Portfolio (VFMP)
- Claims Status Tool / BMT team
- MyVA Dashboard team
- Health Apps team
- VES / DOCMP (PEGA)
- VA Notify
- VA.gov Identity & Personalization
- C+IA / Collaboration Cycle stakeholders

</details>
