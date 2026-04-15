# 1095-B Tax Form Product Outline

[Staging URL](https://staging.va.gov/records/download-your-irs-1095-b/)

[Test Users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/1095b-test-users.md) 

[Documentation of Current Production Experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/v2-IIR/use-cases.md) 




---

## Overview
The 1095-B Tax Form product on VA.gov enables Veterans enrolled in VA healthcare to securely sign in and download their IRS Form 1095-B — proof of minimum essential health coverage — as a PDF or plain-text file, eliminating the need to call the VA or wait for a mailed replacement copy.

## Problem Statement
Veterans and dependents enrolled in VA healthcare are required by law to receive an IRS Form 1095-B, which proves they had qualifying health coverage for the tax year. Prior to this product, the VA had no digital channel for delivering this form: it was printed and mailed at a cost of approximately $4 million per year. When Veterans lost their form or needed a copy for a state with an individual coverage mandate, they had to call the VA, make a request to a representative, and then wait again for a physical reprint to arrive by mail — a multi-day delay during an already time-sensitive tax filing season.

How might we make the 1095-B tax form instantly and reliably accessible to Veterans through a secure digital experience on VA.gov — without requiring them to call or wait?

## Desired User Outcomes

- Veterans can sign in to VA.gov, navigate to the Records hub, and immediately download their current and prior-year 1095-B forms as a PDF or plain-text file.
- Veterans who call the VA seeking a form are directed by call center representatives to self-serve on VA.gov, resolving their need without a reprint.
- Veterans with disabilities or limited digital literacy can access the form through an accessible, plain-language experience that meets accessibility needs.
- Veterans know exactly why they do or do not have a 1095-B available (e.g., CHAMPVA, not enrolled) without needing to call.

## Undesired User Outcomes

- Veterans encounter confusing or contradictory messages that lead them to call the VA unnecessarily.
- Veterans with accessibility needs cannot successfully complete the download task.

## Desired Business Outcomes

- A measurable reduction in printing and sending forms each tax season compared to prior years.
- Reduced cost burden on the Health Eligibility Center (HEC) call center during peak tax season (January–April).
- A reliable, low-maintenance product that can be updated annually with minimal engineering effort.

## Undesired Business Outcomes

- An increase in call volume or reprints during the tax season, indicating Veterans cannot find or trust the digital experience.
- A product that requires significant engineering resources each year simply to add the next tax year template.
- Backend data inaccuracies that cause Veterans to receive incorrect coverage information, creating compliance or legal risk.

---
## Measuring Success


### Key Performance Indicators (KPIs)

1. Download Adoption Rate: 50% of users who visited the page and saw download links, clicked at least one of the download links.
2. Call Center Volume: The number of 1095-B related calls goes down year over year.
3. CSAT Score: The CSAT score stays above 75% satisfaction each month.
4. Error Rate: The number of system errors on the available-forms endpoint stays under 1%.

#### KPI Reporting
|               |                         |                    |            |            |
| ------------- | ----------------------- | ------------------ | ---------- | ---------- |
|               | Download Adoption Rate  | Call Center Volume | CSAT Score | Error Rate |
| January 2026  |                         |                    |            |            |
| February 2026 |                         |                    |            |            |
| March 2026    |                         |                    |            |            |
| April 2026    |                         |                    |            |            |
| May 2026      |                         |                    |            |            |
| June 2026     |                         |                    |            |            |


---

## Assumptions
1. The Enrollment System API provides accurate, complete coverage data for all enrolled Veterans. If the data is incomplete or stale, Veterans will see incorrect or missing forms, potentially generating more call volume rather than reducing it.
2. Veterans who need their 1095-B form are motivated enough to sign in with a verified (LOA3) account. Veterans who have not yet identity-verified may not complete the process without additional guidance.
3. Call center representatives at HEC will actively redirect callers to VA.gov once the digital product is live and reliable. Without this coordination, the reduction in prints/sends will be limited.
4. Annual tax year template updates can be handled with minimal engineering effort by the team responsible for this product.
5. CHAMPVA beneficiaries will continue to be handled separately and are out of scope for this product at this time.

## Solution Approach

- As of March 2026, a Veteran is able to view the past three years of 1095-B tax forms if they were enrolled in VA healthcare all three years. We are only displaying the last three years because that is the minimum amount to meet legislative requirements.
- Right now, CHAMPVA beneficiaries are unable to view their 1095-B tax forms. There needs to be a data migration and API update from the Enrollment System team for VA.gov to be able to retrieve their tax forms in the same way. CHAMPVA beneficiaries still get their forms by mail.
- Currently there is no 1095-B experience on the VAHB mobile app.

### Supporting research

- [Link to all research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/1095b-tax-form/research)

### Initiatives

- MVP Digital Access | Released March 2025 | [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/1095b-tax-form/v2-IIR/mvp-initiative-brief.md)
- Moving to an API | Released September 2025 | [Epic](https://va.ghe.com/software/va-cve/issues/1525)
- Adding 2025's Tax Form | Released December 2025 | [Epic](https://va.ghe.com/software/va-cve/issues/2097)
- Showing Previous Years Forms | Released March 2026 | [Epic](https://va.ghe.com/software/va-cve/issues/2096)
- No current initiatives in flight

--- 

## Launch Strategy

The MVP was launched with no public marketing or communications. The primary awareness channel was HEC call center representatives, who were briefed to redirect Veterans seeking reprints to VA.gov.

In January 2026, email and text campaigns went out to all Veterans enrolled in healthcare to let them know that their 2026 tax forms were ready and would only be accessible digitally on VA.gov - they would no longer be printing and sending physical forms. A Veteran would need to call and request a physical form if they wanted one.

---

## Solution Narrative

### Current Status
- No initiatives in flight

### Key Decisions
- For the MVP release in March 2025, it was decided that we would use the architecture that a prior team had started building but never launched. This architecture did not use an API to retrieve the tax data but instead relied on batch uploads from the Enrollment System stored in S3 buckets that vets-api would ingest.
- We knew that we needed to display historical tax forms to Veterans and agreed with the Enrollement System that we could only do that if there were an API to retrieve the tax data. The Enrollement System added a new endpoint to their already existing API which we connected to in September 2025.
- Because these tax forms are reliant on the IRS templates, there is a manual process that needs to be followed yearly to upload the latest IRS tax form template to vets-api. 
- It was decided that only the past three years of forms would be displayed on VA.gov because that is the minimum needed to meet legislative requirements.
- Because the MVP was released in March 2025, the Health Eligibility Center decided that for 2026, they would not send out any physical forms. So starting in 2026, the primary way Veterans received their tax forms was by accessing them on VA.gov. If Veterans wanted a physical one, they had to call in and request one.
- CHAMPVA beneficiaries can also be enrolled in VA healthcare but their tax forms do not display on VA.gov at this time. To be able to display their forms on VA.gov, a data migration needs to happen by the Enrollment System and then the API tax data endpoint we use needs to be adjusted by the Enrollment System team. If all of that happens, CHAMPVA beneficiares should be able to view their tax forms automatically without VA.gov having to do anything - will need to test to verify.

---
   
## Screenshots

### Before
- [MVP Release](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1411-2461&t=2v396WuriYwXnlYs-0)

### After
- [Previous Years Release](https://www.figma.com/design/cP7JJ9ExBtn2jNax9cfinA/1095-B?node-id=1033-5125&p=f&t=nMpOkSdtQtA5JYn5-0) (What's Currently in Production)
  
---

#### Communications

<details>

- Team Name: Core Veteran Experiences (CVE)
- GitHub Label: team-CVE
- Slack channel: [#cve-product-teams-public](https://dsva.slack.com/archives/C05RJS5DANT)
- Product POCs: Megan Commons
- Stakeholders: David Conlon, Angela Fulton

</details>

#### Team Members

<details>
 
 - DEPO Lead: David Conlon
 - PM: Megan Commons
 - Engineering: Kris Pethtel
 - Research/Design: Raquel Eisele
 
</details>


#### Stakeholders

<details>
 
- Health Eligibility Center | POC: Angela Fulton
- Enrollment System | POC: Joshua Faulkner
 
</details>
