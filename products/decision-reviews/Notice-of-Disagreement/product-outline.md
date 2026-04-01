# Product Outline: Request a Board Appeal (VA Form 10182)

**Last updated:** 2026-03-30

---

## Overview

Request a Board Appeal (VA Form 10182), commonly known as a Notice of Disagreement (NOD), enables Veterans to appeal a VA claims decision by requesting review from the Board of Veterans' Appeals (BVA). This is one of three decision review pathways available under the Appeals Modernization Act (AMA), alongside Supplemental Claims (VA Form 20-0995) and Higher-Level Reviews (VA Form 20-0996).

The digital form on VA.gov allows Veterans to complete and submit a Board Appeal without mailing a paper form. The form has been live on VA.gov since its initial launch and has undergone iterative improvements since.

- **VA.gov URL:** https://www.va.gov/decision-reviews/board-appeal/
- **Physical form:** [VA Form 10182 (PDF)](https://www.va.gov/vaforms/va/pdf/VA10182.pdf)
- **Staging:** https://staging.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182

---

## Team Communications

- **Government lead:** Amy Lai
- **Slack channel:** [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- **GitHub labels:** `team-DRAGONS`, `Decision-Reviews-Team`, `NOD`

### Core Team

| Name | Role | Email |
|------|------|-------|
| Amy Lai | Product Owner, Gov't Lead | amy.lai2@va.gov |
| Christian Crumlish | Product Manager | ccrumlish@kindsys.us |
| Grace Xu | Engineering Lead | gxu@kindsys.us |
| Jerry Sea | Full Stack Engineer | jsea@kindsys.us |
| Randi Mays | Full Stack Engineer | rmays@kindsys.us |
| Kyra Berman-Gestring | UX Researcher/Designer | kyra.berman-gestring@agile6.com |
| Lauren Dawson | UX Researcher/Designer | lauren.dawson@agile6.com |
| Tracy Tran | Accessibility Engineer | tracy.tran@agile6.com |
| Cindy Lackey | Content Designer/Strategist | cindy.lackey@coa.solutions |
| Pam Macalintal | Delivery Manager | pam.macalintal@agile6.com |

---

## Problem

Veterans who disagree with a VA claims decision can request a Board Appeal, where a Veterans Law Judge reviews their case. The digital form experience on VA.gov currently presents several challenges:

- **Poor navigation:** VA.gov does not provide clear navigation for Veterans interested in submitting a Board Appeal, resulting in confusion about how to find the form and no clear entry point into critical content about this decision review option.
- **Lack of transparency:** Veterans cannot preview the digital form in advance and don't know what they will be asked to provide or how long the task will take.
- **Confusion between pathways:** Veterans often struggle to distinguish between a Board Appeal and a Higher-Level Review, leading to selection of the wrong pathway.
- **Deadline and eligibility confusion:** Veterans have difficulty keeping track of filing deadlines and understanding which issues are contestable.
- **Duplicate submissions:** Veterans sometimes submit the same appeal by mail and digitally because they are unsure whether the digital submission was received.

### Evidence

Research conducted by the Decision Reviews team (documented in the [V2 Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/V2-initiative-brief-draft.md), circa 2023) revealed that the online experience does not adequately respond to the mental model Veterans have about how a Board Appeal can or cannot meet their needs. Key contributing factors include conflicting information from external research sources, lost or delayed correspondence letters, and a poor-quality initial claim experience that carries over misconceptions into the appeals process.

---

## Desired User Outcomes

- Veterans can complete and submit the Board Appeal form online for all contention types (not just disability)
- Veterans have considered all three AMA decision review pathways before deciding to apply for a Board Appeal
- Veterans understand what is required of the application process before starting
- Veterans are confident in the quality of their submission
- Veterans receive timely confirmation that their submission was received

## Undesired User Outcomes

- Veterans enter the form and leave because they realize it's not the right form for them
- Veterans select issues that are not eligible (outside the filing deadline) without a reason for extension
- Veterans submit duplicate applications by mail or digitally because they are unsure if the form was received
- Veterans miss a deadline and have to restart the claims process
- Veterans stop the process because they don't have a way to explain their reason for appealing
- Veterans switch to the paper form because of a mismatch between paper and digital versions

---

## Desired Business Outcomes

- Each Veteran's appeal is timely docketed and tracked throughout the appeals process
- Each Veteran receives a timely hearing by a Veterans Law Judge upon request
- Each Veteran receives a timely decision on their appeal
- Reduction in error-prone submissions
- Reduction in duplicate submissions
- Increase in digital form submissions relative to paper

## Undesired Business Outcomes

- Increase in error-prone or incomplete submissions
- Increase in duplicate submissions
- Increase in hearing selections that contribute to longer decision times

---

## Measuring Success

### Key Performance Indicators (KPIs)

| KPI | Baseline | Target | Data Source |
|-----|----------|--------|------------|
| % digital form submissions | 39% (per V2 initiative brief, ~2023) | Increase | [Domo](https://va-gov.domo.com/page/447193050) |
| % early abandonments (at Veteran Details step) | 42% (per V2 initiative brief, ~2023) | Decrease | [Domo](https://va-gov.domo.com/page/447193050) |
| % late abandonments (at contestable issues step) | 44% (per V2 initiative brief, ~2023) | Decrease | [Domo](https://va-gov.domo.com/page/447193050) |
| % duplicate submissions | TBD | Decrease | [Domo](https://va-gov.domo.com/page/447193050) |
| % long-timeline hearing selections | TBD | Decrease | [BVA Dashboard](https://www.bva.va.gov/bva/decision-wait-times.asp) |
| Successful vs. unsuccessful submissions | TBD | Maintain/improve | [Datadog](https://vagov.ddog-gov.com/) |
| Medallia satisfaction score | TBD | Increase | Medallia |

> **Note:** Baseline percentages above were documented in the [V2 Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/V2-initiative-brief-draft.md) (circa 2023) and should be re-validated against current Domo data.

### OKRs

- **Objective:** Make it easy and intuitive for Veterans to submit a Board Appeal online
  - **KR:** Increase number of successful digital NOD submissions
  - **KR:** Decrease early and late form abandonment rates
  - **KR:** Decrease in contact center calls requesting assistance with the form
  - **KR:** Decrease in duplicate submissions

---

## Solution Narrative

### Current State

The Board Appeal form on VA.gov allows Veterans to:
1. Verify their personal and contact information
2. Select contestable issues from their claims history
3. Choose a review option (direct review, evidence submission, or hearing)
4. Request a hearing with a Veterans Law Judge (if applicable)
5. Review and submit the form

The form integrates with the Lighthouse Appeals API for contestable issues and submission. Submitted forms are processed by the Board of Veterans' Appeals (BVA).

### Key Technical Details

- **Frontend:** React-based form built on the VA.gov Forms System
- **Backend:** vets-api (Ruby on Rails) integrating with Lighthouse Decision Reviews API
- **Submission flow:** Form data is submitted to Lighthouse, which generates a PDF and submits to BVA/Central Mail
- **Monitoring:** Datadog dashboards for submission tracking, error rates, and processing status
- **Feature flags:** Used for staged rollouts and A/B testing

### History

| Date | Milestone | Source |
|------|-----------|--------|
| Pre-2022 | Initial development, building on HLR patterns | [Original readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/readme.md) |
| ~2022 | Digital form launched on VA.gov | Original readme (exact date to be verified) |
| ~2023 | V2 initiative brief drafted with post-launch improvement recommendations | [V2 Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/V2-initiative-brief-draft.md) |
| 2025-2026 | Ongoing maintenance by DRAGONS team: failure notification emails, form submission status visibility, Lighthouse API migration | GitHub project board |

> **Note:** Early history dates are approximate. See the original readme and V2 initiative brief for additional context.

---

## Current Initiatives

- **Form submission status visibility:** Enabling Veterans to view the status of their submitted Board Appeal on the MyVA dashboard
- **Failure notification emails:** Alerting Veterans when a submission fails processing, so they can resubmit
- **Lighthouse Appealable Issues API migration:** Transitioning to updated Lighthouse API endpoints
- **Decision Reviews Onramp:** Helping Veterans choose the right decision review pathway before entering a form

---

## Assumptions and Risks

- **Value Risks:** Changes to navigation and in-form guidance will result in increased submissions and reduced abandonment
- **Usability Risks:** Simplifying content and providing better guidance will reduce confusion that leads to form abandonment
- **Technical Feasibility Risks:** Upstream API availability (Lighthouse) and data reliability; site performance impacts
- **Organizational Risks:** BVA intake processes need to align with digital form changes; OGC review required for form content changes

---

## Stakeholders

| Office/Department | Contact |
|-------------------|---------|
| Board of Veterans' Appeals (BVA) | Primary stakeholder for appeals processing |
| Office of General Counsel (OGC) | Legal review of form content |
| Lighthouse (Appeals API) | API integration partner |
| OCTO-DE | Platform governance |

---

## Research

- [NOD stakeholder interviews](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Notice-of-Disagreement/notes/stakeholder-interviews)
- [NOD use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/nod-use-cases.md)
- [Decision Reviews research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/research)
- [V2 Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/V2-initiative-brief-draft.md)

---

## Screenshots

### Form entry point
_TODO: Add current screenshot of the Board Appeal landing page_

### Form flow
_TODO: Add screenshot of form in progress_

---

#### Communications

- **Team Name:** DRAGONS
- **GitHub Label(s):** `team-DRAGONS`, `Decision-Reviews-Team`, `NOD`
- **Slack channel:** [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- **Product POCs:** Amy Lai, Christian Crumlish

---

## Incident Response

- **Primary POC:** Christian Crumlish (Product Manager)
- **Engineering POCs:** Grace Xu (Eng Lead), Jerry Sea, Randi Mays
- **Dashboards:**
  - [Datadog - Board Appeals](https://vagov.ddog-gov.com/)
  - [Staging](https://staging.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182)

---

<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
