# Veteran Status Card Product Outline

[Staging URL](https://staging.va.gov/profile/veteran-status-card)

Test Users - Link coming soon

[Documentation of Current Production Experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/use-cases.md)




---

## Overview
The Veteran Status Card is a digital ID on VA.gov and the VA: Health & Benefits mobile app that Veterans can use to prove their Veteran status to businesses and organizations offering Veteran discounts — without the need to carry around their DD-214, military ID, or other physical document. The card displays the Veteran's name, branch of service, latest service period dates, DoD ID number, and disability rating while intentionally omitting other sensitive information.

## Problem Statement
Veterans frequently need to prove their Veteran status to access discounts at retailers, restaurants, travel providers, and other businesses. The existing methods — carrying a physical DD-214, military ID, VHIC, or state-issued ID with a Veteran designation — are inconsistent across businesses, inconvenient to carry, and raise privacy concerns when Veterans are asked to hand over documents containing SSNs, birthdates, etc. Additionally, not all Veterans are able to obtain those other forms of IDs either.

How might we give Veterans a single, trustworthy, easy-to-access digital Veteran Status Card that they can confidently show to businesses in place of a physical ID?

## Desired User Outcomes

- Veterans can sign in to VA.gov or the VA: Health & Benefits app and quickly find, view, and show their Veteran Status Card to a business to claim a discount.
- Veterans see a consistent card design and user flow across web and mobile, so the experience is familiar regardless of which platform they use.
- Veterans who aren't eligible for the card (or whose records need research) see clear, actionable messaging explaining why and what to do next, rather than an empty or confusing state.
- Veterans can print out a version of their card if they prefer or need a physical copy for a specific use case.
- Veterans' feel confident presenting the card because it doesn't contain sensitive information (SSN, date of birth).

## Undesired User Outcomes

- Veterans cannot find the card on VA.gov or the mobile app, or encounter inconsistent experiences between the two platforms.
- Veterans who are eligible are incorrectly shown an ineligibility or error message and are unable to use the card.
- Veterans encounter error messaging that is vague or doesn't tell them how to resolve the issue, leading them to call the VA or give up.
- Businesses reject the card because it doesn't look official enough or doesn't contain the information they expect.

## Desired Business Outcomes

- The Veteran Status Card becomes the primary digital ID Veterans use to prove their status, reducing reliance on the Veteran ID Card (VIC).
- Access rates (the percentage of signed-in Veterans who can successfully view their card) steadily increase as eligibility logic and upstream data improve.
- The product is reliable and low-maintenance, requiring minimal engineering resources to keep running once launched.

## Undesired Business Outcomes

- Access rates stagnate or decline, indicating eligible Veterans are being shut out by upstream data issues or overly strict logic.
- An increase in support calls or complaints about the card, indicating Veterans cannot find, trust, or successfully use the digital experience.
- Incorrect data appears on a Veteran's card, creating trust and compliance risk.

---

## Measuring Success


### Key Performance Indicators (KPIs)

1. Access Rate (VA.gov): 85% of signed-in LOA3 users who visit the Veteran Status Card page successfully see their card (vs. an error or ineligibility message).
2. Access Rate (Mobile): 95% of signed-in LOA3 users who visit the Veteran Status screen successfully see their card (vs. an error or ineligibility message).
3. CSAT Score: The CSAT score stays above 75% satisfaction each month (this is only captured for the VA.gov experience).
4. Error Rate: Non-200 responses from the Veteran Service History & Eligibility API stay under 1%.
5. PDF Download Engagement: Track the number of clicks on "Print your Veteran Status Card (PDF)" as a proxy for Veterans who want a physical copy.

#### KPI Reporting
|                |                     |                        |                 |                       |                     |                   
| -------------- | ------------------- | ---------------------- | --------------- | --------------------- | ------------------- |
|                | Access Rate (Web)   | Access Rate (Mobile)   | Error Rate      | CSAT Score            | PDF Download Clicks | 
| January 2026   |                     |                        |                 |                       |                     |
| February 2026  |                     |                        |                 |                       |                     |
| March 2026     |                     |                        |                 |                       |                     |
| April 2026     |                     |                        |                 |                       |                     |
| May 2026       |                     |                        |                 |                       |                     |
| June 2026      |                     |                        |                 |                       |                     |


---

## Assumptions
1. The Lighthouse Veteran Service History & Eligibility API provides accurate Title 38 eligibility data for Veterans. When the API returns "Not Confirmed" or errors, downstream logic and messaging are the only tools to help Veterans understand why and what to do next.
2. Veterans who need their Veteran Status Card are willing to sign in with a verified (LOA3) identity-verified account. Veterans who haven't identity-verified will not be able to access the card.
3. Businesses that offer Veteran discounts will accept the digital card as valid proof of status — either visually, or in combination with a photo ID. Acceptance varies by business, and some may still require other verification.
5. Cross-platform feature affinity between web and mobile can be maintained as long as both teams coordinate on API, content, and design changes in advance.
6. The current card design meets Veterans' expectations for legitimacy. Research validated this in December 2024, but perceptions may shift if acceptance at businesses remains inconsistent.

## Solution Approach

- As of April 2026, any LOA3-verified Veteran whose Title 38 eligibility is "Confirmed" via the Lighthouse Veteran Service History & Eligibility API can view and print their Veteran Status Card on VA.gov and the VA: Health & Benefits app. The card lives on its own dedicated page (`/profile/veteran-status-card`) on VA.gov and is available in the mobile app on the home page or under profile, with consistent card content and error/ineligibility messaging across both platforms.
- Veterans who are "Not Confirmed" see tailored warning or error messaging based on the reason (`NOT_TITLE_38`, `MORE_RESEARCH_NEEDED`, `PERSON_NOT_FOUND`, missing DoD ID / service history, or API error), directing them to the Defense Manpower Data Center or the National Archives where appropriate.
- The card intentionally omits SSN and date of birth, and includes the Veteran's name, branch of service, service dates, DoD ID number, and disability rating (if available). A printable PDF is available on VA.gov if Veterans would like to print it out.
- A current initiative is in flight is to use a combination of the Lighthouse Veteran Service History & Eligibility API and the VA Profile API, so Veterans who come back as "Not Confirmed" from Lighthouse get a second check against VA Profile. This is expected to modestly raise access rates and increase the accuracy of who should be able to access the card.

### Supporting research

- [MVP Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-status/v1/Research)
- [Link to all other research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-status/v2-IIR/Research)
  
### Initiatives

- Add ineligibility/error messages to mobile app | Released 2024
    - Ineligibility/error messages did not exist on mobile app prior to this - the Veteran Status button didn't show up at all if someone wasn't eligible
- Update design on both VA.gov and mobile app | Released July 2025
    - Prior to this, the Veteran Status Card lived on the `/profile/military-information` page on VA.gov and was only viewable as a downloadable PDF
    - Prior to this, the Veteran Status Card looked different on the mobile app
- Switch to Lighthouse Veteran Servicey History & Eligibility API to determine card access on both VA.gov and mobile app | Released January 2025
    - [See documentation on eligibility logic here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/ineligibility-error-messaging-logic.md)
- Shared Service for Va.gov & mobile app + Dual-API Eligibility Logic | In Progress | [Epic](https://va.ghe.com/software/va-cve/issues/1625)
    - A shared service is being created so VA.gov and mobile app don't have to keep logic up to date in two different places
    - Logic is being updated to further increase accuracy and increase access rates
        - [See documentation on eligibility logic here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/ineligibility-error-messaging-logic.md)
- Digital Wallet capabilities | On hold
    -  There is a desire to give users the ability to add their card to their digital wallet. [Designs have been made](https://www.figma.com/design/AobGKkBvIiDuYXR2QqkytC/IIR-Veteran-Status?node-id=5067-54707&p=f&t=P0uDTI9djKZIiclB-0) but the priority has been getting the eligibility logic accurate and then we can revisit this initiative.

---

## Launch Strategy

Each Veteran Status Card initiative has been rolled out behind a feature flag with a staged rollout (canary → 5–10% → 25% → 50% → 75–100%) rather than through public marketing or email/text campaigns. Datadog dashboards were monitored at each stage and the feature flag could be disabled at any point if error rates or unexpected behavior spiked. Mobile app and VA.gov teams coordinated together to release updates together

The current shared service + dual-API eligibility logic initiative will follow the same pattern: develop behind a feature flag, validate in staging against a broad set of test users covering each eligibility outcome, run a moderated UAT with OCTO Veterans in production, and then a staged rollout while watching for changes in the CONFIRMED / NOT CONFIRMED distribution and API error rates. No Veteran-facing marketing or announcements are planned, since the change is transparent to Veterans who were already eligible and only affects Veterans whose eligibility was previously inconclusive.

---

## Solution Narrative

### Current Status
- CVE and MFS Teams are working together to complete the Shared Service + Dual-API Eligibility Logic initiative. Estimated release is summer 2026.

### Key Decisions
- Prior to 2025, eligibility was determined by looking at VA Profile API discharge status data. Access rates sat around ~70% on VA.gov. In January 2025, the experience was switched to look at the Lighthouse Veteran Service History & Eligibility API, which uses the Title 38 definition of Veteran. Access rates rose to ~80% on VA.gov and ~96% on mobile (mobile being higher due to traffic volume and user demographics, not a technical difference in logic). 
- In April 2025, after review with stakeholders, the team decided the long-term approach should combine data from two APIs: check Lighthouse first, and if a user comes back "Not Confirmed," fall back to VA Profile SSC data. This is part of the initiative currently in flight and relies heavily on business and stakeholder decisions to determine who is eligible for a card. 
- The decision was made to intentionally omit date of birth from the card based on research (Dec 2024) showing Veterans were uncomfortable having personal information displayed on the card, and that the information wasn't needed for the card's primary purpose (proving Veteran status for discounts). Veterans were mixed about having their disability rating on the card and that may be removed evetually. Disability rating was initially added at the request of stakeholders.
- Because of ongoing logic changes, it was decided that VA.gov and mobile app should be referencing one source of truth for logic so that any future logic updates only have to happen once in vets-api - updates would then automatically be consumed by VA.gov and the mobile app. This is part of the initiative currently in flight (shared service). 

---
   
## Screenshots

### Before
- [MVP VA.gov designs](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3002-45054&t=Cg2uMVkOSyoaeGWq-0)
- [MVP mobile app designs](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3002-45041&t=Cg2uMVkOSyoaeGWq-0)
- [Current VA.gov designs](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3019-394102&t=Cg2uMVkOSyoaeGWq-0)
- [Current mobile app designs](https://www.figma.com/design/dm2KXJmeJEgCNKrDgIq8ko/Profile---Vet-Status-Card?node-id=3019-393583&t=Cg2uMVkOSyoaeGWq-0)

### After
- [Upcoming VA.gov designs](https://www.figma.com/design/wFavpgKzRyeDjVEVMkA8du/Profile---Letters-and-documents?node-id=4182-139173&t=1Hic1TDYVvh3MVqS-0)
- [Upcoming mobile app designs](https://www.figma.com/design/wFavpgKzRyeDjVEVMkA8du/Profile---Letters-and-documents?node-id=4182-140715&t=1Hic1TDYVvh3MVqS-0)
  
---

#### Communications

<details>

- Team Name: Core Veteran Experiences (CVE)
- GitHub Label: team-CVE
- Slack channel: [#cve-product-teams-public](https://dsva.slack.com/archives/C05RJS5DANT)
- Product POCs: Megan Commons
- Stakeholders: David Conlon, Melissa Rebstock

</details>

#### Team Members

<details>
 
 - DEPO Lead: David Conlon
 - PM: Megan Commons
 - Engineering: Adam King, Jesse Berman
 - Research/Design: David Pearl
 
</details>


#### Stakeholders

<details>
 
- DEPO | POC: David Conlon
- VIC Program | POC: Melissa Rebstock
 
</details>
