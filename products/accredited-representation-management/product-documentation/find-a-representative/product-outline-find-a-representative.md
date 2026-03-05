# **Product Outline: Find a Representative**

**Team**: Accredited Representation Management

Product URL: [Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep)

Main entry points:
1. [VA.gov homepage](https://www.va.gov/)
2. [Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/) (landing page)


## **Overview**

Create a user-friendly, accessible tool for Veterans to search for an accredited representative on VA.gov. This experience is intended to mirror the search functionality of older, external tools: [OGC's Accreditation Search](https://www.va.gov/ogc/apps/accreditation/index.asp) and [eBenefits](https://www.ebenefits.va.gov/ebenefits/vso-search).


## **Problem Statement**

There is not currently an experience on VA.gov for Veterans to find a representative. The current experience happens either in person (referrals) or on older systems (eBenefits, OGC Accreditation Search) which do not provide a great user experience: confusing errors, dead ends, and inconsistent user flows.

**How might we enable Veterans to find an accredited representative on VA.gov?**


## **Desired User Outcomes**

1. Veterans can search for accredited representatives on VA.gov and filter by location and representative type (VSOs, attorneys and claims agents)
2. Veterans have a clear understanding of the different types of representatives (VSOs, attorneys and claims agents)


## **Desired Business Outcomes**

1. Increase the functionality of VA.gov to support searching for accredited representatives
2. Reduce the time it takes for Veterans to find an accredited representative
3. Expedite the deprecation of the legacy eBenefits platform by delivering replacement services


## **Assumptions**

1. Veterans are interested in searching for an accredited representative on VA.gov that is in their area
2. Veterans are more likely to appoint VSOs, than accredited attorneys and claims agents
3. Veterans would like to connect with a representative (either in person or virtually) to feel out their character and competency before proceeding to appoint them

---
## **Measuring Success**

**Datadog Dashboards**
1. [Find a Representative](https://vagov.ddog-gov.com/dashboard/55d-sc2-bxi/arm-find-a-representative?fromUser=false&refresh_mode=sliding&from_ts=1736986754401&to_ts=1739578754401&live=true)

**Domo Dashboards**
1. [Accredited Representation Managment](https://va-gov.domo.com/page/1897070864) - User trends for Veteran-facing products related to accredited representatives

## **Release History**

#### Version 1.0 (MVP) | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-1.0.md)

Targeted to release in December 2023, but a "No Go" was determined after discovering the representative contact information in search results was only ~50% accurate. 

#### Version 2.0 | [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-2.0.md) and [Demo Video](https://dvagov.sharepoint.com/:v:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/Product%20Information/Product%20Demo%20Recordings/Find%20a%20Representative%20Demo.mov?csf=1&web=1&e=AaVq9f)

Released to 100% of users on March 13, 2024. This version included a Report Outdated Information feature, when users encountered inaccurate representative contact information in search results.

A landing page "Get help from a VA accredited representative or VSO" (rooted in the Resources and Support section of VA.gov) was also published, and this content page includes a link to the Find a Representative tool ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-2.0.md)).

**Note**: The Report Outdated Information feature was removed on July 24, 2024 per a requrest from leadership. To continue to address inaccurate representative contact information, the team began exploring bulk contact updates. 

---

### Next Steps

### Version 3.0 | Release Date TBD

Introducing search filters, for users to refine their search results based on the representative's associated VSO. [WIP Figma designs for Find a Representative 3.0](https://www.figma.com/design/bzbwObT9hiItve0q3cQX9c/ARM---Find-and-Appoint-a-Representative?node-id=0-19109&p=f&t=9UDkWLdMS1C7DVfU-0)
   
### Known Bugs
Some bugs have been identified for our Production experience. These have not yet been addressed due to lower priority, feel free to prioritize + address as needed.

[Known bugs are stored in this view of the Github project board](https://github.com/orgs/department-of-veterans-affairs/projects/1180/views/41). 

### Redirect Goals

There may be an opportunity to redirect the following OGC Accreditation Search pages to Find a Representative, if there are no downstream effects. **Before proceeding with this redirect, connect with OGC and GCLAWS stakeholders to understand if any tools rely on this webpage.**
1. https://www.va.gov/ogc/apps/accreditation/index.asp
2. https://www.va.gov/ogc/apps/accreditation/accredpeople.asp (and all child pages)

Reference: [IA redirect plan - Sharepoint](https://dvagov.sharepoint.com/:w:/r/sites/SitewideCAIA/_layouts/15/Doc.aspx?sourcedoc=%7B203EE57C-1260-4A20-9981-40A7396FB36A%7D&file=0.0%20Redirect%20plan.docx&action=default&mobileredirect=true)

### Future Ideas
Longer term ideas are stored in our[ARM Future Ideas](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Accredited%20Representation%20Management/ARM%20Future%20Ideas.docx?d=wfe95a788166e4670bfda5a59798550d7&csf=1&web=1&e=7iFIw0) document.

---
## **Supporting Documentation**

1. [Decision and Change Log: Find a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/decision-change-log-find-a-representative.md)
2. [Find a Representative Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/technical-documentation/product-playbook-incident-response-plan.md)
3. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/find-a-representative/contact-center) (with screenshots)
4. [View documentation on Swagger](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/): Put the following in the Swagger search field - `https://dev-api.va.gov/representation_management/v0/apidocs`

## **Communications**

1. **Team Name**: Accredited Representative Crew
2. **GitHub Label**: ar-crew
3. **Slack channel**: ##benefits-accredited-rep-crew
4. **DEPO Lead**: Jennifer Bertsch
