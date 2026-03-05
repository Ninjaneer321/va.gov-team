# **Product Outline: Appoint a Representative (VA Forms 21-22 and 21-22a)**

**Team**: Accredited Representation Management

Product URL: [Request help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/appoint-rep)

Main entry points:
1. [Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/) (landing page)
2. [About VA Form 21-22](https://www.va.gov/find-forms/about-form-21-22/)
3. [About VA Form 21-22a](https://www.va.gov/find-forms/about-form-21-22a/)


## **Overview**

Create a user-friendly, accessible tool for Veterans to digitally complete a 21-22 or 21-22a form, with the ultimate goal of appointing an accredited VSO, Attorney or Claims Agent online. This experience is intended to mirror the search functionality of the older, external tool[ eBenefits](https://www.docstomarkdown.pro/convert-markdown-to-google-docs-online/%5Burl%5D\(https://www.ebenefits.va.gov/ebenefits/vso-search\)).


## **Problem Statement**

There is not currently an experience on VA.gov for Veterans to appoint a representative. The current experience happens either in person (offline) or through an older system (eBenefits) which does not provide a great user experience: confusing errors, dead ends, and inconsistent user flows.

**How might we enable Veterans to appoint a representative on VA.gov and provide clear instructions and expectations around next steps?**


## **Desired User Outcomes**

1. Veterans can select a VSO, attorney or claims agents on VA.gov for new representation.
4. Veterans can submit a VA Form 21-22 (requesting Power of Attorney) on VA.gov, to Veteran Service Organizations that are accepting online submission.
5. Veterans can submit a VA Form 21-22a (requesting Power of Attorney) on VA.gov, to VA accredited attorneys or claims agents that are accepting online submission.
6. For representatives that are not accepting online submission:
   1. Veterans can fill out VA Form 21-22 and 21-22a on VA.gov and download a completed PDF.
   2. Veterans will be given guidance on next steps, including obtaining a representative signature and submitting their form outside of VA.gov (in person, via mail, through an online tool like QuickSubmit).


## **Assumptions**

1. Veterans are interested in appointing a representative online through VA.gov
2. Veterans would prefer to complete a form online, compared to printing the form out and completing it by hand

---

## **Measuring Success**

**Datadog Dashboards**
1. [Appoint a Representative](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative?fromUser=false&offset=0&refresh_mode=monthly&from_ts=1751353200032&to_ts=1753980942350&live=true)

**Domo Dashboards**
1. [Accredited Representation Managment](https://va-gov.domo.com/page/1897070864) - User trends for Veteran-facing products related to accredited representatives
2. [VA.gov Forms KPIs](https://va-gov.domo.com/page/447193050) - for tracking our Appoint a Representative form experience (21-22/21-22a)

## **Release History**

#### Version 1.0 (PDF Generation, MVP) | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/release-plan-appoint-a-representative-1.0.md) and [Demo Video](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Appoint%20a%20Representative%20-%20PDF%20Generation%20Demo.mp4?csf=1&web=1&e=Z6NxVn)

Released to 100% of users on January 23, 2025. Appoint a Representative 1.0 (MVP) mirrors the VA Form 21-22 / 21-22a digital form-fill functionality on eBenefits, but with a more consistent and intuitive experience that lives directly on VA.gov. 

#### Version 2.0 (Online Submission of 21-22) | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/release-plan-appoint-a-representative-2.0.md) and [Demo Video](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Appoint%20a%20Representative%20-%20Online%20Submission%20Demo.mp4?csf=1&web=1&e=6fZuue)

Released to 100% of users on March 25, 2025. Appoint a Representative 2.0 enabled Veterans to submit VA Form 21-22 directly on VA.gov, so representatives can respond immediately to the POA request in the Accredited Representative Portal and, if accepted, establish the Power of Attorney relationship in the Veteran's VBMS eFolder within minutes (not days or weeks). Online submission is avaialble for LOA3 Veteran users, who choose to appoint a participating Veteran Service Organizations online.

See the [Appoint a Rep Planning Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714785369605/65b1ce20d08478615fe2ef8c347cf19305cbffab) for additional context including: user flows, page names, sub-URLs, and specifics for each version.

## Current Risks

### Appoint a Representative is capturing a Veteran email address that is not aligned with Profile.
Veterans may update the email address they’d like to use for receiving email notifications but because this update isn’t syncing to Profile, Lighthouse will continue to use the Profile email address for the ”Accept” email notification (and the Veteran may miss this email update).

Integrating the "[prefill pattern](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled)" into Appoint a Representative, where updates in the form flow are reflected in Profile, would resolve this risk.

**Status**: Implementing the prefill pattern to address this risk is a Q2 2026 priority.

### Form Versioning Discrepancy Between VA.gov and Lighthouse

At the end of the online submission experience, users are provided with a copy of their completed VA Form 21-22. This download is the most up-to-date version of the form, but upon acceptance by the representative, Lighthouse will uploade an older version of VA Form 21-22 (pre-Oct 2023 updates) to the eFolder in VBMS when establishing the POA relationship. 

The October 27,2023 updates to VA Forms 21-22 and 21-22a include...

1. 21-22 form updates:
   1. Field 11a "Claimant's Date of Birth" in Section II has been added
2. 21-22a form updates:
   1. Field 11 "Claimant's Date of Birth" in Section II has been added
   2. Field 19 "Authorization for Disclosure to Affiliated Personnel" has been added to allow additional authorization for
      1. All associate attorneys, claims agents and support staff affiliated with the representative
      2. Individually named administrative employees of the representative
         
Lighthouse has confirmed that an older version of the PDF will not be an issue; confirmed by LH Benefits & Appeals APIs Crew Engineer Drew Fisher ([Slack message](https://dsva.slack.com/archives/C063D0M76HX/p1706308610572019?thread_ts=1706119737.834139&cid=C063D0M76HX)).

But there is an OCTO goal of keeping VA Forms up to date and this scenario puts that goal at risk.

**Status**: Lighthouse has begun thinking about this update, timeline TBD. [Slack conversation](https://dsva.slack.com/archives/C05SUUM4GAW/p1771521504314689)

---

## **Recommended Next Steps**

### Implement the VADS "Prefill" pattern
The current implementation leans on text-input components that are pre-populated with Profile information, but any edits do not get routed back to Profile.

Updating the pages related to capturing contact information for the Veteran (and related non-Veteran claimant, when applicable) to use the [prefill pattern](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled) will align with VADS form standards and ensure any updates are also updated in the user's Profile. When implementing the prefill pattern, recommending the Appoint a Representative experience also requires LOA3 authentication, to avoid maintaining two separate experiences (unauth and auth). 

### Expanding the online submission of VA Form 21-22
Currently a handful of VSOs are able to accept the online submission of VA Form 21-22 as a "pilot" initiative. As the pilot expands, or even comes to and end, there will be a need to [enable online submission for additional VSOs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/enabling-online-submission-for-vsos.md). 

### Enabling the online submission of VA Form 21-22a
To enable the online submission of VA Form 21-22a, for appointing accredited attorneys and claims agents, the following will need to be considered:
1. UX Research to better understand how attorneys and claims agents establish POA with claimants, including expectations and pain points that can be factored into the current Appoint a Representative experience.
2. Product discovery to understand if there are additional checks by the VA when processing the 21-22a (compared to VA Form 21-22). 
3. Technical discovery to understand how to implement online submission of VA Form 21-22a, using [Lighthouse's Power of Attorney services around auto-establishment](https://developer.va.gov/explore/api/benefits-claims/docs?version=current). 


### Known Bugs
Some bugs have been identified for our Production experience. These have not yet been addressed due to lower priority, feel free to prioritize + address as needed.

[Known bugs are stored in this view of the Github project board](https://github.com/orgs/department-of-veterans-affairs/projects/1809/views/27). 

### Future Ideas
Longer term ideas are stored in our [ARM Future Ideas](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/ARM%20Future%20Ideas.docx?d=wfe95a788166e4670bfda5a59798550d7&csf=1&web=1&e=7iFIw0) document.

---
## **Supporting Documentation**

1. [Enabling Online Submission for VSOs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/enabling-online-submission-for-vsos.md)
2. [Required Form Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/required-form-fields.md)
3. [Decision and Change Log: Appoint a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/decision-change-log-appoint-a-representative.md)
4. [Appoint a Representative Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/technical-documentation/product-playbook-incident-response-plan.md)
5. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative/contact-center) (with screenshots)
6. [Appoint a Rep Planning Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714785369605/65b1ce20d08478615fe2ef8c347cf19305cbffab) (with user flow and IA notes)
7. [View documentation on Swagger](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/): Put the following in the Swagger search field - `https://dev-api.va.gov/representation_management/v0/apidocs`
8. Lighthouse API documentation for the Power of Attorney services -- [Dev](https://dev-developer.va.gov/explore/api/benefits-claims/docs?version=current) and [Production](https://developer.va.gov/explore/api/benefits-claims/docs?version=current)
   1. [Lighthouse's planning Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705440431964/42ea71b5405cda62ed44e95794facd94d8d266a0?sender=ubac5f0487f25bc4431288699) which gives insight into the Power of Attorney services and the related systems
9. [Accredited Representative Portal - Form 21-22 / Manage Power of Attorney Requests - Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/manage-poa-requests/product-outline-21-22-poa-requests.md)

## **Communications**

1. **Team Name**: Accredited Representative Crew
2. **GitHub Label**: ar-crew
3. **Slack channel**: ##benefits-accredited-rep-crew
4. **DEPO Lead**: Jennifer Bertsch
