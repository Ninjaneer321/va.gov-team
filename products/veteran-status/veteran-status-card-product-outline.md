# Veteran Status Card Product Outline

[Staging URL](https://staging.va.gov/profile/veteran-status-card)

Test Users - Link coming soon

[Documentation of Current Production Experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/use-cases.md)




---

## Overview
The Veteran Status Card is a digital ID on VA.gov and the VA: Health & Benefits mobile app that Veterans can use to prove their Veteran status to businesses and organizations offering Veteran discounts — without the need to carry around their DD-214, military ID, or other physical document. The card displays the Veteran's name, branch of service, latest service period dates, DoD ID number, and disability rating while intentionally omitting other sensitive information.

## Problem Statement
Veterans frequently need to prove their Veteran status to access discounts at retailers, restaurants, travel providers, and other businesses. The existing methods — carrying a physical DD-214, military ID, VHIC, or state-issued ID with a Veteran designation — are inconsistent across businesses, inconvenient to carry, and raise privacy concerns when Veterans are asked to hand over documents containing SSNs, birthdates, etc. Additionally, not all Veterans can are able to obtain those other forms of IDs either.

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

- As of April 2026, any LOA3-verified Veteran whose Title 38 eligibility is "Confirmed" via the Lighthouse Veteran Service History & Eligibility API can view and print their Veteran Status Card on VA.gov and the VA: Health & Benefits app. The card lives at its own dedicated page (`/profile/veteran-status-card`) on web and is available in the app on the home page or under profile, with consistent card content and error/ineligibility messaging across both.
- Veterans who are "Not Confirmed" see tailored warning or error messaging based on the reason (`NOT_TITLE_38`, `MORE_RESEARCH_NEEDED`, `PERSON_NOT_FOUND`, missing DoD ID / service history, or API error), directing them to the Defense Manpower Data Center or the National Archives where appropriate.
- The card intentionally omits SSN and date of birth, and includes the Veteran's name, branch of service, service dates, DoD ID number, and disability rating (if available). A printable PDF is available on VA.gov if Veterans would like to print it out.
- The current initiative in flight is to combine the Lighthouse API with the pre-2025 VA Profile API + custom discharge-code logic, so Veterans who come back as "Not Confirmed" from Lighthouse get a second check against VA Profile. This is expected to modestly raise access rates by recovering users with unknown or edge-case discharge statuses, without weakening the Title 38 standard for users who are confidently eligible.

### Supporting research

- [MVP Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-status/v1/Research)
- [Link to all other research]([https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/Research/Veteran%20Status%20Card%20Research%20Findings.md](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-status/v2-IIR/Research))
  
### Initiatives

- Mobile App Feature Affinity (DoD ID + DOB removal) | Released 2024 | [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/mobile-app-feature-affinity-product-outline.md)
- Lighthouse Title 38 Eligibility API Switch | Released February 2025 | Epic?
- New Home & UX Redesign (dedicated page, FAQ, Profile Hub + Name Tag links) | Released July 2025 | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v2-IIR/web-redesign-release-plan.md)
- Dual-API Eligibility Logic (Lighthouse + VA Profile fallback) | In flight | Super epic?

---

## Launch Strategy

Each Veteran Status Card initiative has been rolled out behind a feature flag with a staged rollout (canary → 5–10% → 25% → 50% → 75–100%) rather than through public marketing or email/text campaigns. Datadog dashboards were monitored at each stage and the feature flag could be disabled at any point if error rates or unexpected behavior spiked.

The current dual-API eligibility logic initiative will follow the same pattern: develop behind a feature flag, validate in staging against a broad set of test users covering each eligibility outcome, run a moderated UAT with OCTO Veterans in production, and then stage the rollout while watching for changes in the CONFIRMED / NOT CONFIRMED distribution and API error rates. No Veteran-facing marketing or announcements are planned, since the change is transparent to Veterans who were already eligible and only affects Veterans whose eligibility was previously inconclusive.

---

## Solution Narrative

### Current Status
- Dual-API eligibility logic (Lighthouse + VA Profile fallback) is in flight.

### Key Decisions
- Prior to 2025, eligibility was determined by VA Profile API data plus custom discharge-code logic. Access rates sat around 70% on web. In January 2025, the CVE team (then IIR) switched to the Lighthouse Veteran Service History & Eligibility API, which uses the Title 38 definition of Veteran. Access rates rose to ~80% on web and ~96% on mobile (mobile being higher due to traffic volume and user demographics, not a technical difference).
- In April 2025, after review with Chris Johnston and Melissa Rebstock, the team decided the long-term approach should combine both APIs: check Lighthouse first, and if a user comes back "Not Confirmed," fall back to VA Profile data — but with updated custom logic that only excludes "Dishonorable" discharge statuses (whereas the pre-2025 logic also excluded "Bad Conduct" and "Under Other Than Honorable Conditions"). This is the initiative currently in flight.
- In July 2025, the Veteran Status Card was moved out of the Military Information page and into its own dedicated page at `/profile/veteran-status-card`. A new Profile Hub card and a new Name Tag banner link were added for discoverability, an FAQ accordion was added to the page, the card design was updated (reordered fields, refined styling, replacing service dates with "Veteran since" where applicable), and the client-side PDF download was retained.
- The decision was made to intentionally omit SSN and date of birth from the card based on research (Dec 2024) showing Veterans were uncomfortable sharing that information with businesses, and that the information wasn't needed for the card's primary purpose (proving Veteran status for discounts).
- The decision to pursue cross-platform feature affinity — same card content, same error/ineligibility messaging on web and mobile — was driven by research showing Veterans were confused and frustrated by inconsistent experiences between VA.gov and the VA: Health & Benefits app. The mobile app team implements the mobile side; CVE implements the web side and coordinates on API, content, and design.
- The Veteran Status Card is intended to eventually replace the physical Veteran ID Card (VIC). Decommissioning the VIC is a stakeholder goal (VEO team) rather than a CVE deliverable, but future VSC work (mobile wallet integration, potential photo inclusion) is being considered with that end state in mind.

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
