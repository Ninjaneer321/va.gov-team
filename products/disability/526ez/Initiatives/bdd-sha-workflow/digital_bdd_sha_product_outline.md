# Product Outline: Digital BDD with SHA Part A

## Overview

The **Digital BDD (Benefits Delivery at Discharge) with Separation Health Assessment (SHA) Part A** initiative improves the 526EZ application experience for transitioning service members by clearly informing them to upload a SHA Part A form for expedited BDD claim processing.

This addresses a critical bottleneck in the current BDD user journey where missing SHA Part A documentation causes delays in processing. By helping Transitioning Service Members understand the difference between BDD and standard claims, they can make informed actions in their 526EZ application and understand how to receive benefits faster. When SHA Part A is submitted through the 526EZ form, we expect downstream processes to more easily identify claims that should be routed through the BDD flow.

> **VBA has stated an overall intended timeline of April 2026** for rolling out the updated mandate to use VA.gov and provide the SHA.

---

## Problem Statement

- **As a Transitioning Service Member** filing a claim within the BDD window, I want to understand the SHA Part A requirement for BDD claims so that I can ensure it's included in my application.
- **As a VSR (Veterans Service Representative)**, I need Transitioning Service Members to understand BDD requirements upfront so that claims arrive with the necessary documentation (SHA Part A) for expedited processing and I can meet the 30-day processing goal.
- **As a Backend Developer**, I want to ensure that our system has a dedicated SHA Part A file upload mechanism which can be integrated into our existing payload structure for proper downstream processing.
- **As a Frontend Developer**, I want to see pages that request Transitioning Service Members to upload a SHA Part A form, so that they have more information about the BDD program and understand what actions they need to perform.
- **As a UX Designer/Researcher**, I want to confirm that Transitioning Service Members are able to navigate the 526EZ Supporting Evidence flow (with a new SHA Part A upload step) with little-to-no errors or confusion, so that they can make a more informed BDD submission with an uploaded SHA Part A form.

---

## Desired User Outcomes

- Transitioning Service Members who submit a BDD claim with a SHA Part A form uploaded will be able to get faster claims processing (~30 days) with a reduced need for back and forth with VSRs.
- Transitioning Service Members who want to have their claim processed as a BDD claim will be able to ensure their submission includes the required SHA Part A form.
- Transitioning Service Members can have more confidence that they are submitting a claim that will be processed as BDD without being surprised by any downstream delays.

## Undesired User Outcomes

- Transitioning Service Members are unaware of the requirement to upload a SHA Part A form as part of a BDD submission.
- Transitioning Service Members are unaware that they may still choose to submit a pre-discharge claim without the SHA Part A form prior to their separation date.

---

## Desired Business Outcomes

- ADC for VA.gov-submitted BDD claims will decrease from 43 days to 30 days, then 5 days.
- More (or all) VA.gov-submitted BDD claims come in with all necessary evidence to adjudicate (specifically SHA Part A).
- Overall number of BDD claims submitted on VA.gov will increase.

## Undesired Business Outcomes

- DBC team does not meet target development timeline. MVP of this feature must be completed and in production by **Monday, April 20, 2026**.

---

## Measuring Success

### Key Performance Indicators (KPIs)

**Primary KPIs:**

- Percentage of BDD users who see the new SHA Part A upload page (engagement)
- Percentage of 526EZ BDD claims submitted with an uploaded SHA (claim completeness)
- Overall volume of BDD claims submitted via VA.gov (claim volume)

**Other KPIs** _(influenced by DBC and/or across other teams)_:

- Average days of claim (ADC) for VA.gov-submitted BDD claims (Baseline: 43 days, Target: 30 days)
- Page conversion rates within Supporting Evidence section for BDD users
- CTR on "Learn more about SHA Part A" link

### Baseline KPIs

- Current percentage of VA.gov submissions that included a DBQ upload (SHA or other) at submission: **Estimated at 6%**
  - N = 216k total successful submissions through primary path, between 1/1/26 - 4/2/26
- Percentage of BDD users who view the Additional evidence upload page: **27%**
- Total VA.gov BDD Submissions (primary path) in FY2025: **18,072**
  - Average ~ **1,500 per month**
- Total BDD claims across _all intake channels_ in FY2025: **52,620**
- Current ADC for BDD claims: **43 days** (per VBA OBA; Tableau shows 37.24 days as of Nov 2025)

Other metrics to note:

- Overall Supporting Evidence flow completion rate for BDD users: **95.5%**
- CTR of "learn more about SHA Part A" link: **11.24%**

Resources:

- [DataDog](https://vagov.ddog-gov.com/dashboard/z9b-mdx-e8r/benefits-disability-bdd?fromUser=false&offset=0&refresh_mode=yearly&from_ts=1767254400024&to_ts=1770230567246&live=true)
- [BDD Data Discovery — Current digital experiences of filling out the 526EZ](https://dsva.slack.com/docs/T03FECE8V/F0ACY4C3138)

### Objectives and Key Results (OKRs)

**Objective:** Reduce processing time for BDD claims submitted via VA.gov

**Key Results:**

- Increase percentage of BDD users who view a SHA upload step) from 27% to 100% by 26FYQ3
- Increase percentage of VA.gov submissions with an uploaded SHA from roughly 6% to 20% by 26FYQ3
- Increase in average monthly VA.gov BDD Submissions (primary path) from 1,500 to 1,875 (25%) by 26FYQ3 – contingent on VBA enforcing the mandate to have all BDD claims submitted digitally.

---

## Solution Approach

### MVP: January to April 2026

We are building a front-end solution that:

1. Is integrated within the existing Supporting Evidence upload flow (owned by Pathways Team)
2. Clearly explains:
   - What the SHA Part A form is
   - How to obtain it
   - Why it's needed for BDD processing and how not including it will affect their benefits decision timeline
   - Why they can still choose to submit without one (pre-discharge claims can still be accepted and processed as a standard claim)
   - How to upload the SHA Part A after submission (via Claims Status Tool) within the BDD window
3. Allows Transitioning Service Members to continue submitting their application with or without a SHA Part A form
4. Ensures the payload "accepts" the uploaded SHA

### Why This Approach?

Based on alignment with VBA stakeholders:

- Completely blocking users from submitting without a SHA Part A form is a non-starter; this contradicts the principle that Veterans don't need all evidence to submit a claim.
- VBA's downstream automation does some level of evidence validation to route claims as BDD or pre-discharge.
- This MVP release will allow VBA to monitor and measure claim quality and completion rates with IBM's automated E-Folder validation, and propose iterations for implementing more upstream validation to screen BDD claims.

### Out of Scope for MVP

- Changing the logic that determines how to classify 526 submissions as a BDD vs. Standard or FDC claim in the payload sent to Lighthouse.
- Document validation/verification of the SHA Part A form — this potentially requires integration of the Form Upload Tool's functionality, which expands testing scope and adds risk to the already tight development timeline.
- Changing the existing attachment ID used to categorize file uploads as a SHA Part A (L702)

### Fast-Follow Considerations

- Updating the 526 classification logic for BDD claims to include a check for the presence of an uploaded SHA Part A file.
- Document validation capabilities to verify the uploaded files are actually SHA Part A forms.

### Future Considerations

- Document validation utilizing OCR
- Updates to reflect the upcoming revisions to the SHA Part A form (assuming document validation is already implemented)

### Mobile App

No changes required; the mobile app currently directs users to the web experience for the 526EZ form. _(needs verification)_

---

## Proposed User Flow

[Figma link](https://www.figma.com/design/NKvgRtawaEMwXAYl47z49I/526---BDD-SHA-Part-A-Upload?node-id=6174-5719&t=1Ggp9o8RpJExMgpC-4)

## Proposed IPF Strategy

[Figma link](https://www.figma.com/design/NKvgRtawaEMwXAYl47z49I/526---BDD-SHA-Part-A-Upload?node-id=6083-16400&t=SrjydClDJHInmALa-4)

## Implementation Approach

See [Technical Planning](https://github.com/department-of-veterans-affairs/va.gov-team/blob/product_outline_bdd-sha-workflow/products/disability/526ez/Initiatives/bdd-sha-workflow/technical-planning.md) for high level approach

---

## Launch Strategy

**How will Veterans and others know this exists?**

- Content and front-end updates on the 526EZ BDD flow
- Coordination with VBA for broader comms

**Marketing/outreach needed:**

- Update the 526 Product Guide
- Coordinate with VBA for broader comms

## Release Plan

TBD: Link to Release Plan (with staged rollout strategy) once drafted

### Launch Dates

| Milestone          | Date           |
| ------------------ | -------------- |
| Target Launch Date | April 20, 2026 |
| Actual Launch Date | TBD            |
| Impact Review      | TBD            |

---

## Solution Narrative

**Current Status:** Planning, scoping, and discovery

**Key Decisions:**

- MVP scope will be limited to frontend changes
- Other key MVP decisions are documented in the [Super Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125577)

---

## Communications

- **GitHub Label:** disability-benefits
- **Slack Channel:** #benefits-disability

### Team Members

| Role            | Name                       |
| --------------- | -------------------------- |
| DEPO Leads      | Liz Lantz, Cory Sohrakoff  |
| PM              | Eryn Sobing                |
| Engineering     | Daniel Vu, Oren Mittman    |
| Research/Design | Irene Vailikit, Kevin Shih |

### Stakeholders

- **VBA OBA:** Alejandro Mendiolaflores
