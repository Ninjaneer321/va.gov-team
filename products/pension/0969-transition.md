# 0969 Transition Hub

**Updated March 2026**

> The purpose of this transition document is to outline the current state of 0969 forms' product development. It serves as a "front door" to documentation and resources collected during the course of product design and development from March 2025 through March 2026. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development. These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.

## Table of Contents
[Product context, portfolio, and artifacts](#product-context)

[Roadmap](#roadmap)

[Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)

[Design opportunities](#design-opportunities)

[Our team, VA relationships, and stakeholder meeting cadence](#Our-team-2024/25-roster)

## Product context 
- The online **21P-0969** form allows Veterans to fill out and submit the Income and Asset Statement for Pension or Parents’ Dependency and Indemnity Compensation (DIC) Claims. Applicants use VA Form 21P-0969 when instructed to while completing VA Forms 21P-527EZ or 21P-534EZ.  They can also submit it when you need to verify or update your income or net worth. If you need to report changes over multiple years, submit a separate VA Form 21P-0969 each year.
   - [0969 Introduction page](https://www.va.gov/supporting-forms-for-claims/submit-income-and-asset-statement-form-21p-0969/introduction)
   - Usability research (with post-MVP designs) conducted: July 2025
   - MVP launched on VA.gov: September 2025
   - Post-MVP launched on VA.gov: March 2026
   - Annual submission volume: ###
   - Current pdf version on VA.gov: MM/YYYY

### Product Goal
Make the online pension experience as easy to complete and cohesive as possible, while ensuring that Veterans provide sufficient supporting documentation to ensure that submissions are reliable and processed as quickly as possible.

#### 21P-0969 Income and Asset Statement
The online pension application is available in the [production environment](https://va.gov/supporting-forms-for-claims/submit-income-and-asset-statement-form-21p-0969/).  The staging environment version of the form is [here](https://staging.va.gov/supporting-forms-for-claims/submit-income-and-asset-statement-form-21p-0969/).
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/21P-0969-product-outline.md)
- [General testing plan](https://docs.google.com/spreadsheets/d/1mZCnm1Cc6lBIGRIjxw5FzmHa9yQRDBfHquKKLsNlHfo/edit?gid=2009661867#gid=2009661867) for product updates

### Design and research artifacts
These files capture the post-MVP designs, primarily with enhanced content as a collaboration and review with C/IA. The content changes further explain each type of income to report, how we consider dependents based on the claimant type, and improvements to the list-and-loop structure for clarity.  
- [Working design file](https://www.figma.com/design/tJhSwyQorlgdVPC2UKx1fQ/21P-0969-Pension-or-DIC-Income-and-asset-statement?node-id=452-141959&p=f&t=OM2fZ6Nf1NbpQYr7-0)
   - [Array Builder specs and semantic headings guide](https://www.figma.com/design/yFkPW92yXTgVUUNfgHekcp/Form-Pages---Array-Builder-Specs?node-id=0-1&p=f&t=nzotqqjuKmVudrfG-0)
   - [Guide to list & loop summary cards](https://www.figma.com/design/tJhSwyQorlgdVPC2UKx1fQ/21P-0969-Pension-or-DIC-Income-and-asset-statement?node-id=6058-82726&t=OM2fZ6Nf1NbpQYr7-4)
- [0969 research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2025-07%200969%20Usability%20Study/research-findings.md)
- [Q&A discovery with VBA](https://dsva.slack.com/docs/T03FECE8V/F08T9M220MS)
- [MVP vs. Post-MVP Comparison](https://www.figma.com/design/tJhSwyQorlgdVPC2UKx1fQ/21P-0969-Pension-or-DIC-Income-and-asset-statement?node-id=11016-28943)

### Engineering
- Engineering [readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/engineering/README.md)
- High level view of systems
- [Sequence Diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727757799534/c7c5f5a6dc1b8f451ecab5f02afa70a9325b93c8?sender=u070fbdc641c5ca111da83793)
- [Application Diagram](https://docs.google.com/document/d/16lfdICIMRbCTlaY4qM6nXJldpAsWBk4-l1qwL--VNCQ/edit#heading=h.guuvbv6eus3)
- [Backup submission diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1697740873991/4be42fcadc013be6b3d65bd620522ee68e8e0faf?sender=u0e8ac1d6d7681bb7e1b80558)
- Frontend developer README
- [Endpoints consumed and owned](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Dependents%20Management/Documentation/BGS%20686C-674%20Documentation.docx?d=w1707457645dc4eb191a0ea89fb73453b&csf=1&web=1&e=dvkS2w)
- Code Repository
   - [Vets-API](https://github.com/department-of-veterans-affairs/vets-api)
   - [Vets-Website](https://github.com/department-of-veterans-affairs/vets-website)

### Analytics dashboard
- Domo (none), [general forms dashboard](https://va-gov.domo.com/page/447193050)
- Google Analytics (none)
- [Backend Stats on DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/55q-ksa-tvq/benefits---pension---527---controller?fromUser=false&refresh_mode=paused&from_ts=1759294800000&to_ts=1767247199999&live=false)
- [Backend lighthouse monitoring](https://vagov.ddog-gov.com/dashboard/atf-ppf-aky/benefits---pension---527---benefits-intake?fromUser=true&refresh_mode=sliding&from_ts=1773157902524&to_ts=1773172302524&live=true)
- [Submission reporting](https://vagov.ddog-gov.com/dashboard/vk2-6zi-zzu/benefits-form-527-pension-benefits?fromUser=false&refresh_mode=paused&from_ts=1735711200000&to_ts=1767247199999&live=false) 
- [Pension Funnel dashboard](https://vagov.ddog-gov.com/dashboard/d59-e32-q3v?fromUser=false&refresh_mode=sliding&from_ts=1770756825443&to_ts=1773172425443&live=true)

### Team resources
- [Team Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/3) (GitHub)
- [Sprint Planning](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/35?sliceBy%5Bvalue%5D=PBB)
- [Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692908527043/0da94b7ded52e8a943d798bcb8ae39697c2fb56f?wid=120-1729780466015) (Mural)
- Ticketing
   - Team label: benefits-pension-burial
   - Product label: Income & Asset
   - Workstream label: discovery, product, design, or engineering + frontend or backend

## Roadmap
### Done (recently)
-  0969 Post MVP improvements (closely adjacent form) - Improvements to the content and format of the Income and Asset statement focused on plain language updates and content chunking to ease form filling burden. Released 3/4/26.

### Next
- 

#### Embedding the 0969 in the pension form
##### Problem it solves  
Veterans don’t complete the required income and asset statement with their pension application, which leads to their claim going into development for additional evidence. This is the #3 reason why claims go into development.
##### What we did
* An audit to compare the 0969 form with the **Financial information** step in the pension application
* Addressed and resolved questions with VBA for clarification
* Met from the 526 team and the 1010-D team for their approaches to forms-within-forms and what they've learned from it
* Identified features for an MVP and potential enhancements
All of these notes are available in a [Mural board here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745620624724/70ee36c200a3b66b426c33aa189dcdcc5a4a0192?wid=0-1763522503702)  .
##### Why it was stopped  
We conducted discovery relatively recently and wanted to avoid partial design or implementation for this large initiative.
##### Next step
* Review our [design brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/embedded-0969-brief.md#design-brief--embedding-the-0969-into-the-527ez) and its recommended scope to define an MVP. This document includes both design enhancements and spikes to evaluate technical feasibility and approach.

### Later
The tickets in the milestone primarily consist of front-end enhnacements to apply the latest design patterns and components to the form and small content fixes for consistency. 
[Backlog for Future 21P-0969](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1610)

## Collab Cycle Artifacts
- [Digitizing 0969 Milestone](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1531)
- [CAIA intake and epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106335)

### Our team 2024/25 roster
- Delivery Lead: Anh Platt | anh.platt@va.gov/ anh.platt@coforma.io
- Product manager: Matt Reilly | matthew.reilly1@va.gov/ matt.reilly@adhocteam.us
- Engineering Lead: Matthew Knight | matthew.knight3@va.gov / matt.knight@coforma.io
- UX Design/Research Lead: Elisabeth Chin | elisabeth.chin@va.gov / elisabeth.chin@coforma.io
- UX Design/Research: A'nita Evans | anita.evans1@va.gov / anita.evans@coforma.io
- Full Stack Engineer: Bryan Alexander | bryan.alexander@va.gov / bryan.alexander@va.gov
- Frontend Engineer: Todd Rizzolo | todd.rizzolo@va.gov / todd.rizzolo@adhocteam.us
- QA Engineer: Scott Draper | Scott.Draper@va.gov / scott.draper@adhocteam.us

### VA Leads
- Product Crew Lead: Sanja Bajovic | Sanja.Bajovic2@va.gov
- Engineering Crew Lead: Sanja Bajovic | Sanja.Bajovic2@va.gov
- Design Crew Lead: Christine Miller Kelly | Christine.millerkelly@va.gov

### VBA stakeholders
|Name|Title|Office|Email|Description|
|----|-----|------|-----|-----------|
|Daniel Gifford |Program Analyst |P&F forms team | daniel.gifford@va.gov |Key SME on Pension and Burial forms |
|Eric Henne |Lead Program Analyst| Head of P&F forms team |eric.henne@va.gov  |Key SME on Pension and Burial forms |
|Derek Uttley |Program Analyst|Data and Project Management Team |derek.uttley@va.gov |Key SME for forms, data, and analytics |
|Alex Mikuliak |Lead Architect|VBA Corp Data|mikuliak_alex@bah.com |Data and processing|


#### Reoccuring Stakeholders Meetings
- Bi weekly Design Sync with Christie design/research, product
- Bi-weekly Product Sync with VBA Leads, product manager, OCTO leads and delivery lead
- Weekly engineering sync with VA Engineering Crew Lead and team Engineering Lead
