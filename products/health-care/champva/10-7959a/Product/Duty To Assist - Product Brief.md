# ChampVA Claims Duty to Assist - Initiative Brief

- **Last updated:** 2.16.26
- **Author:** Andrea M

---

## Overview

This initiative adds Duty to Assist (DTA) functionality to the ChampVA Claims Enhanced Claims flow on VA.gov. The Enhanced Claims flow currently allows users to submit additional documents for previously filed claims or reopen denied claims with supporting documentation. This iteration will enable beneficiaries to digitally indicate that they need VA assistance in gathering required documentation from their providers — fulfilling the VA's congressionally mandated Duty to Assist obligation through a digital channel.

By digitizing the DTA request process, this initiative eliminates the need for beneficiaries to mail in DTA-related correspondence, cutting approximately one week or more from the claims timeline. Submissions flagged for DTA will be routed to the appropriate team within DocMP (the downstream document storage and work queue system used by the claims team) so staff can determine what additional assistance is needed.

---

## Outcome Summary

Provide ChampVA beneficiaries with a clear, digital path to request VA assistance in gathering documentation needed for their reimbursement claims, reducing processing delays and ensuring DTA-flagged submissions are correctly routed to the appropriate claims team for follow-up.

---

## Related/Associated Resources

- [Link to Enhanced Claims Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112008)
- [Link to ChampVA Claims Product Outline - Enhanced Claims] ⚠️ NEEDS INPUT
- [Link to DTA Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/126751)

---

## Problem

**What is the problem and who is affected?**

ChampVA beneficiaries who are unable to obtain necessary supporting documentation from their healthcare providers currently have no digital way to notify VA that they need assistance. The VA has a congressional mandate — the Duty to Assist — to help beneficiaries gather required evidence for their claims. Today, beneficiaries who need this help must communicate their request through paper mail, which adds at least a week of delay to an already lengthy claims process. This affects beneficiaries who:

- Have submitted a reimbursement claim but lack required supporting documents from their providers
- Have received a sendback letter or denial and cannot independently obtain the necessary documentation
- Are unaware that the VA is obligated to help them gather this information

**Why do you think the problem is occurring?**

- The current Enhanced Claims digital flow does not include a mechanism for beneficiaries to indicate they need DTA support
- DTA requests are handled through paper-based workflows, adding unnecessary time to the process
- There is no digital flagging or routing mechanism in DocMP to identify and direct DTA-related submissions to the correct team
- Beneficiaries may not be aware of the VA's Duty to Assist obligation or how to invoke it

**How does this initiative help further OCTO-DE's mission and goals?**

This initiative directly supports OCTO-DE's mission by digitizing a previously paper-only process, making VA's digital experience the fastest and most efficient way for beneficiaries to request assistance with their claims. It reduces processing time, ensures proper routing of requests, and fulfills a congressional mandate through a modern digital channel.

---

## OKR Alignment

### Program OKRs

**Objective 1: All form experiences that are digitized help the Veteran or family members get their benefits faster.**

- **KR1 — Removing the mail room and scanners from the enrollment process reduces overall processing time.** Digitizing the DTA request eliminates paper mail from this workflow, removing the mailroom step and cutting approximately one week or more from claims processing time.
- **KR2 — Faster intake helps applicants and VA identify opportunities to address application problems sooner.** Digital DTA submissions are immediately routed to the correct team in DocMP, enabling staff to begin assisting beneficiaries sooner rather than waiting for mailed correspondence to arrive and be processed.

**Objective 2: The digital forms experience allows for Veterans and their family members to find and access benefits faster than manual methods.**

- **KR1 — Applicants prefer the digital experience over manually mailing the form.** Providing a digital DTA option gives beneficiaries a clear alternative to mailing sendback letters, encouraging adoption of the digital channel.

**Objective 3: Our solution will work to ensure that an accurate status of the transaction is given to the Veteran or family member.**

- **KR1 — Errors due to hand-written applications decrease.** Digital DTA submissions are structured and flagged consistently, reducing misrouted or unclear requests that occur with handwritten paper submissions.

### VES FY26 OKRs

**Objective 1: Optimize product delivery for Veteran impact**

- **1.1** This product brief documents the product vision, problem statement, and KPIs for this initiative.

**Objective 3: Quantifiably improve the user experience**

- **3.1** This initiative directly addresses a documented beneficiary pain point — the inability to digitally request DTA support — and quantifies the expected impact through reduced processing time and successful routing metrics.

---

## Measuring Success

### Key Performance Indicators (KPIs)

**Data source:** [TBD — e.g., DocMP reporting, VA.gov Datadog, Google Analytics] ⚠️ NEEDS INPUT

**Objective: Beneficiaries will successfully submit DTA-flagged requests through the digital channel**

- **Result #1:** 100% of DTA-flagged digital submissions are correctly routed to the appropriate team in DocMP

**Objective: Digital DTA submissions will reduce claims processing time**

- **Result #1:** Average time from DTA request to claims team acknowledgment decreases by at least 1 week compared to paper-based DTA requests
- **Result #2:** Zero increase in error rates for DTA-flagged submissions

| Product KPI | Baseline | Target | Post-Launch 1 week | Post-Launch 1 month |
|---|---|---|---|---|
| DTA-flagged submissions (digital) | NEW | [TBD] | | |
| DTA submissions correctly routed in DocMP | NEW | 100% | | |
| Average time from DTA request to team acknowledgment | [TBD — current paper baseline] | -7 days | | |
| Errors on DTA submissions | NEW | 0 errors | | |
| Enhanced Claims form abandonment rate | [TBD] | No increase | | |

---

## Discovery

### Assumptions/Risks

**Value Risks (will people use it):**

- Beneficiaries are aware of the Duty to Assist and will use the digital option when they need help gathering documentation
- The volume of DTA requests is sufficient to justify the development effort
- Beneficiaries will trust the digital channel to handle their DTA requests effectively
- **Validation:** Review historical volume of paper-based DTA requests; user research with beneficiaries who have previously needed DTA support

**Usability Risks (can people figure out how to use it):**

- The DTA option is clearly presented within the Enhanced Claims flow without causing confusion for users who do not need DTA support
- Beneficiaries understand when to select the DTA option versus submitting additional documents themselves
- The language used to describe DTA is plain and understandable
- **Validation:** Usability testing of the updated Enhanced Claims flow with the DTA option

**Technical Feasibility Risks (can we build it with available tech/data):**

- DocMP can support tagging/flagging logic to identify and route DTA-flagged submissions to the correct team
- The Enhanced Claims flow can be extended to include the DTA indicator without significant rework
- **Validation:** Technical assessment with the DocMP team on routing/flagging capabilities

**Organizational Viability Risks/Constraints (will there be a positive organizational impact):**

- The DTA claims team within DocMP has the capacity and workflow to handle digitally routed DTA requests
- Business partners agree on the definition of what constitutes a DTA-eligible submission in the digital context
- **Validation:** Coordination with DTA team leads and DocMP stakeholders

---

## What You're Building

### In Scope

- Add a DTA indicator/option within the Enhanced Claims resubmission flow, allowing beneficiaries to check a box or otherwise indicate they need assistance gathering documentation
- Include clear content and instructions explaining the Duty to Assist and when to use this option
- Ensure DTA-flagged digital submissions are tagged and routed appropriately in DocMP to the dedicated DTA team
- Responsive design consistent with existing Enhanced Claims flow patterns

### Out of Scope

- DTA support within initial ("shoebox") ChampVA claims submissions — this requires separate discovery and prioritization
- Multi-claim submissions
- Adding an Other Health Insurance (OHI) subform
- Large-scale redesign of the ChampVA claims form
- Changes to DocMP's internal workflow or UI beyond receiving flagged submissions

---

## Launch Planning

### Incident Response

- The ChampVA Enhanced Claims flow is currently in production; this initiative adds the DTA indicator and routing functionality
- Monitoring will use existing [TBD — Datadog dashboards, etc.] ⚠️ NEEDS INPUT
- If errors or issues are discovered post-launch, the DTA feature can be disabled via feature toggle, reverting the Enhanced Claims flow to its previous state
- Triage and resolution will be fast-tracked to complete within 1–3 days
- **Main POCs:**
  - Andrea Merrill (PM)
  - Renata Keck (Lead Designer)
  - Premal Shah (VA PO)

### Timeline

| Milestone | Target Date |
|---|---|
| Design completion | [TBD] |
| Development complete | [TBD] |
| Integration testing with DocMP routing | [TBD] |
| Staging review | [TBD] |
| Launch | [TBD] |

**Initiative Launch Dates**

- **Target Launch Date:** [TBD]
- **Actual Launch Date:** TBD

---

## Screenshots

### Before
[Current Enhanced Claims flow screenshot] ⚠️ NEEDS INPUT

### After
TBD

---

## Communications

**Where will you discuss this initiative?**

- **Team Name:** Health Applications Team
- **GitHub Label(s):** 10-7959a
- **Slack channel:** #health-apps
- **Product POCs:** Premal Shah, Andrea Merrill

---

## Stakeholders

**What offices/departments are critical to make this initiative successful?**

- **Office/Department:** [TBD — e.g., DSD, DocMP team] ⚠️ NEEDS INPUT
- **Contact(s):** [TBD] ⚠️ NEEDS INPUT

---

## Dependencies

| Dependency | Owner | Status |
|---|---|---|
| DocMP tagging/flagging logic for DTA routing | [TBD — DocMP team] | ⚠️ NEEDS INPUT |
| Business partner confirmation on DTA-eligible submission criteria | [TBD] | ⚠️ NEEDS INPUT |
| Content/IA review for DTA instructions and language | [TBD] | ⚠️ NEEDS INPUT |
