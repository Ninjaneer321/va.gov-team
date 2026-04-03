# Product Outline: Supplemental Claim (VA Form 20-0995)

**Last updated:** 2026-04-03

---

## Overview

The Supplemental Claim form (VA Form 20-0995) allows Veterans to request a review of a prior VA disability compensation decision by providing new and relevant evidence. It is the highest-volume decision review pathway on VA.gov, with over 32,000 supplemental claims filed each month — more than double the combined volume of Board Appeals and Higher-Level Reviews.

A Supplemental Claim is appropriate when a Veteran has new and relevant evidence that wasn't previously considered, or when there has been a change in law or VA policy that may affect the claim. Unlike a Higher-Level Review (which re-examines existing evidence), a Supplemental Claim requires new evidence and is reviewed by a different reviewer.

The digital form on VA.gov replaces the paper submission process, reducing processing time and Veteran burden. The form has been live since its initial launch in spring 2023 and has undergone multiple iterative improvements.

- **VA.gov URL:** https://www.va.gov/decision-reviews/supplemental-claim/
- **Form URL:** https://www.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/
- **Physical form:** [VA Form 20-0995 (PDF)](https://www.vba.va.gov/pubs/forms/VBA-20-0995-ARE.pdf)
- **Staging:** https://staging.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/

---

## Team Communications

- **Government lead:** Amy Lai
- **Slack channel:** [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- **GitHub labels:** `team-DRAGONS`, `Decision-Reviews-Team`, `SC`

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

### VBA Subject Matter Experts

| Name | Role | Email |
|------|------|-------|
| Andrew Gray | Senior Automation Strategist, VBA OBA | andrew.gray@va.gov |
| Alejandro Mendiolaflores | Senior Analyst, VBA OBA | alejandro.mendiolaflores@va.gov |

---

## Problem

Veterans who disagree with a VA disability compensation decision and have new and relevant evidence need to file a Supplemental Claim. The digital form on VA.gov currently presents several challenges:

- **Evidence collection complexity:** Veterans must identify and provide evidence from multiple sources — VA medical records, private (non-VA) providers, and personal documents. The current evidence collection flow uses an older UI pattern that makes it difficult to manage multiple facilities and providers.
- **Legal and procedural confusion:** The form includes legal content (e.g., 5103 Notice of Evidence Needed, Form 4142 authorization for private records) that is unfamiliar to most claimants. Various fields and checkboxes can trigger actions with unclear consequences.
- **High abandonment rate:** 54.3% of Veterans who start a Supplemental Claim abandon the form before submitting — the highest abandonment rate among all three decision review pathways.
- **Wrong pathway selection:** Some Veterans file a Supplemental Claim when a claim for increase (526EZ) would be more appropriate, or vice versa. This leads to unfavorable decisions and wasted time.
- **Duplicate submissions:** Veterans sometimes submit the same claim both online and by mail because they're unsure whether the digital submission was received.

### Evidence

- SC abandonment rate (54.3%) significantly exceeds HLR (37.1%) and Board Appeal (40.9%)
- Over 32,000 SCs filed monthly, making even small improvements high-impact
- Research consistently finds evidence collection is the most confusing part of the form
- Qualitative feedback shows Veterans struggle with VA terminology and form instructions
- Veterans sometimes file SCs without new evidence, resulting in denial

---

## Desired User Outcomes

- Veterans can complete and submit a Supplemental Claim online without needing professional help
- Veterans understand what constitutes "new and relevant evidence" before they begin
- Veterans can easily manage evidence from multiple VA and non-VA sources
- Veterans understand the 4142 authorization process for private medical records
- Veterans receive confirmation that their submission was received
- Veterans who don't have new evidence are directed to other appropriate options (HLR, claim for increase)

## Undesired User Outcomes

- Veterans abandon the form because the evidence collection process is too confusing
- Veterans submit without adequate new evidence, leading to an unfavorable decision
- Veterans file a Supplemental Claim when a different pathway would be more appropriate
- Veterans are confused by legal language and give up
- Veterans submit duplicate claims by mail because they don't trust the digital process

---

## Desired Business Outcomes

- Increase in digital form submissions relative to paper
- Reduction in form abandonment, particularly at the evidence collection step
- Reduction in submissions that lack new and relevant evidence
- Reduction in duplicate submissions
- Reduction in claim processing errors caused by incomplete or malformed submissions
- Faster claim processing enabled by structured, validated digital data

## Undesired Business Outcomes

- Increase in error-prone or incomplete submissions
- Increase in duplicate submissions
- Veterans filing SCs when a different form type would be more appropriate
- Increased burden on call centers from form-related questions

---

## Measuring Success

### Key Performance Indicators (KPIs)

| KPI | Baseline | Target | Data Source |
|-----|----------|--------|------------|
| Form abandonment rate | 54.3% | Decrease | [Domo](https://va-gov.domo.com/page/447193050) |
| Successful vs. unsuccessful submissions | Tracked | Maintain/improve | [Datadog](https://vagov.ddog-gov.com/) |
| % digital form submissions vs. paper | Tracked | Increase | [Domo](https://va-gov.domo.com/page/447193050) |
| Evidence upload success rate | Tracked | Maintain/improve | [Datadog](https://vagov.ddog-gov.com/) |
| Duplicate submission rate | Tracked | Decrease | [Domo](https://va-gov.domo.com/page/447193050) |
| Medallia satisfaction score | Tracked | Increase | Medallia |

### OKRs

- **Objective:** Make it easy and intuitive for Veterans to submit a Supplemental Claim with new and relevant evidence online
  - **KR:** Decrease form abandonment rate, particularly at the evidence collection step
  - **KR:** Increase number of successful digital SC submissions
  - **KR:** Decrease contact center calls requesting assistance with the form
  - **KR:** Decrease duplicate submissions

---

## Solution Narrative

### Current State

The Supplemental Claim form on VA.gov allows Veterans to:
1. Verify their personal and contact information (with optional housing risk and MST indicator questions)
2. Select contestable issues from their claims history
3. Acknowledge the Notice of Evidence Needed (5103)
4. Identify evidence sources: VA medical records, private (non-VA) medical records, and personal evidence uploads
5. Authorize release of private medical records (Form 4142/4142a) if applicable
6. Review and submit the form

The form integrates with the Lighthouse Appeals API for contestable issues retrieval and submission. An Intent to File (ITF) is automatically created at the start of the form to protect the Veteran's effective date.

### Key Technical Details

- **Frontend:** React-based form built on the VA.gov Forms System
- **Backend:** vets-api (Ruby on Rails) integrating with Lighthouse Decision Reviews API
- **Submission flow:** Form data → vets-api → Lighthouse Appeals API → generates PDF → Central Mail / Benefits Intake API
- **Secondary forms:** 4142/4142a (private records authorization) generated and submitted alongside the primary form
- **Monitoring:** Datadog dashboards for submission tracking, error rates, and processing status; Grafana dashboards for claims and appeals alerts
- **Feature flags:** Used for staged rollouts

### Form Structure (Chapters)

1. **Veteran Information** — name, SSN, DOB, housing risk, contact info, primary phone
2. **Issues for Review** — contestable issues selection, issue summary, opt-in for legacy appeals
3. **New and Relevant Evidence** — 5103 notice, facility types, VA medical records, private medical records (with 4142 authorization), evidence upload, evidence summary
4. **VHA Indicator** — MST option and VHA notification (added 2025)
5. **Review and Submit**
6. **Confirmation**

### History

| Date | Milestone | Source |
|------|-----------|--------|
| 2022 | Initial discovery and development | [Initial Discovery Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Supplemental-Claims/Research/2022-06-Initial-Discovery) |
| Early 2023 | MVP usability testing | [MVP Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/MVP%20Usability%20Research/research-findings.md) |
| Spring 2023 | Initial launch on VA.gov (staged rollout March–May 2023) | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/release-plan-draft.md) |
| Early 2023 | PACT Act research and updates | [PACT Act Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/1222-PACT-Act/research-findings.md) |
| March 2025 | Spring 2025 updates: housing risk, MST/VHA indicator, facility types, 5103 notice updates | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/sc-updates-release-plan-2025.md) |
| June 2025 | 4142 form update (2018 PDF → 2024 PDF) | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/sc-4142-update-release-plan-2025.md) |
| Oct 2024 | SC 2024 updates usability research (11 participants) | [Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/0924-2024-SC-Updates/research-findings.md) |
| 2025–2026 | Ongoing maintenance by DRAGONS team | GitHub project board |

---

## Current Initiatives

### Providers Redesign (SC Step 3 Evidence Collection) — Active

**Collaboration Cycle:** [#117807](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117807)
**Epic:** [#114573](https://github.com/department-of-veterans-affairs/va.gov-team/issues/114573)
**Staging review target:** April 17, 2026

Migrating the VA medical records and private (non-VA) provider evidence collection sections from the legacy list-loop pattern to the VADS array builder pattern. This redesign:
- Provides a clearer summary view of added evidence sources
- Enables better per-item editing of facility/provider details
- Adds structured fields for conditions treated and treatment dates
- Improves the 4142 authorization flow for private records
- Aligns with current VA Design System patterns

Known VADS dependencies tracked in [#138378](https://github.com/department-of-veterans-affairs/va.gov-team/issues/138378).

### File Upload Improvements — Next Priority

Next on the SC product roadmap after the providers redesign ships.

### Known Issues

A known issues ticket is being assembled for staging review.

---

## Assumptions and Risks

- **Value Risks:** Improving the evidence collection flow will reduce abandonment and improve submission quality
- **Usability Risks:** The array builder pattern is newer and less battle-tested than the list-loop pattern; usability must be validated
- **Technical Feasibility Risks:** Upstream API availability (Lighthouse); 4142 PDF generation reliability; evidence upload size and format constraints
- **Organizational Risks:** OGC review required for form content changes; coordination with VBA on intake process changes; VADS component maturity (some components at "Use with caution" status)

---

## Stakeholders

| Office/Department | Role |
|-------------------|------|
| Veterans Benefits Administration (VBA) | Claims processing, form requirements, field guidance |
| Office of General Counsel (OGC) | Legal review of form content |
| Lighthouse (Appeals API) | API integration partner |
| OCTO-DE | Platform governance |
| CAIA (Content, Accessibility, IA) | Content review and IA design |

---

## Research

- [Initial Discovery (2022-06)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Supplemental-Claims/Research/2022-06-Initial-Discovery)
- [MVP Usability Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/MVP%20Usability%20Research/research-findings.md)
- [PACT Act Research (2022-12)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/1222-PACT-Act/research-findings.md)
- [SC 2024 Updates Research (2024-09)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/0924-2024-SC-Updates/research-findings.md)
- [Decision Reviews cross-product research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/research)

---

## Screenshots

### Form entry point
_TODO: Add screenshot of the Supplemental Claim landing page_

### Form flow
_TODO: Add screenshot of form in progress_

---

## Links and Dashboards

- [Domo KPI Dashboard](https://va-gov.domo.com/page/447193050)
- [Grafana — Claims and Appeals](https://grafana.vfs.va.gov/d/WxQ9lkUGz/claims-and-appeals-alerts?orgId=1&from=now-7d&to=now)
- [Grafana — Supplemental Claims](https://grafana.vfs.va.gov/d/ejdUuxTVk/sc-supplemental-claims-dashboard?orgId=1)
- [Datadog](https://vagov.ddog-gov.com/)
- [Figma designs](https://www.figma.com/design/2LGebZcUuu5Iqh4QLPII6A/Supplemental-Claims-(VA-0995)?node-id=0-1)
- [Supplemental Claims flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/supplemental-claims-flow.md)
- [SC frontend overview (engineering)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/engineering/SC_frontend_overview.md)
- [SC architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/engineering/SC_architecture.md)
- [SC frontend details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/engineering/SC_frontend_details.md)

---

#### Communications

- **Team Name:** DRAGONS
- **GitHub Label(s):** `team-DRAGONS`, `Decision-Reviews-Team`, `SC`
- **Slack channel:** [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- **Product POCs:** Amy Lai, Christian Crumlish

---

## Incident Response

- **Primary POC:** Christian Crumlish (Product Manager)
- **Engineering POCs:** Grace Xu (Eng Lead), Jerry Sea, Randi Mays
- **Dashboards:**
  - [Datadog](https://vagov.ddog-gov.com/)
  - [Grafana — Supplemental Claims](https://grafana.vfs.va.gov/d/ejdUuxTVk/sc-supplemental-claims-dashboard?orgId=1)
  - [Staging](https://staging.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/)
