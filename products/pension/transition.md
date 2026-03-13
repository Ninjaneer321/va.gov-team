# 527EZ Transition Hub

**Updated March 2026**

> The purpose of this transition document is to outline the current state of 527EZ forms' product development. It serves as a "front door" to documentation and resources collected during the course of product design and development from January 2024 through March 2025. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development. These Transition Docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.

## Table of Contents
[Product context, portfolio, and artifacts](#product-context)

[Roadmap](#roadmap)

[Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)

[Design opportunities](#design-opportunities)

[Our team, VA relationships, and stakeholder meeting cadence](#Our-team-2024/25-roster)

## Product context 
- The online **527EZ** form allows Veterans to fill out and submit the application for Veterans Pension benefits. If the applicant is a wartime Veteran and  at least 65 years old, or if they have a permanent and total disability, they may be eligible. Their income and net worth need to be within certain limits.
   - [About VA Form 530EZ (Application for Veterans Pension)](https://www.va.gov/forms/21p-527ez/)
   - Re-launched on VA.gov: 1/31/2024
   - Annual submission volume: 10,665 (2025)
   - Current pdf version on VA.gov: DEC 2025

### Product Goal
Make the online pension experience as easy to complete and cohesive as possible, while ensuring that Veterans provide sufficient supporting documentation to ensure that submissions are reliable and processed as quickly as possible.


#### 21-527EZ Application for Veterans Pension
The online pension application is available in the [production environment](https://www.va.gov/pension/apply-for-veteran-pension-form-21p-527ez/introduction).  The staging environment version of the form is [here](https://staging.va.gov/pension/apply-for-veteran-pension-form-21p-527ez/introduction).

- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/527EZ-reactivation-initiative-brief.md)
- [Form Flow (proposed)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1716382766670)
- [Wireframes (proposed)](https://www.figma.com/design/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?node-id=59-960&t=yWIz3IUP2uFChYib-0) (Figma)
- [MVP Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1723479332670)
- [IA/User Flow Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=522-1737736233308)
- [VBA Verification Info](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf) (core goals, diary entries, mvp outline)
- [MVP Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research/2025-02-dependents-verification-mvp-research)
   - [Research cohort map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1690311086208/96d5f59b299912bc8c69542e6943d5b2213b9c72)
   - [Solution exploration](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689863079145/5b97ba9ea11077f983f3413167f6324f11aa04a8)

### Product artifacts 
- [Backlog](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/39)
- [General testing plan](https://docs.google.com/spreadsheets/d/1mZCnm1Cc6lBIGRIjxw5FzmHa9yQRDBfHquKKLsNlHfo/edit?gid=2009661867#gid=2009661867) for product updates

### Design artifacts
- Design [readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/design/README.md)
- [Page/User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1687976281975/2a9c6ca9ea6d955afa7977c777bbb72b15280903?sender=u934f98f179a86c76e6ee9592)
- [Wireframes and page designs](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=8-9&mode=design&t=kcdjZspxOR8ocdvT-0)
- Staging users

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
 
### Latest Discovery Research
- [Research Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research)
- [General Dependents Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research/2023-09-dependents-research)
- [Dependency Verification Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research/2025-02-dependents-verification-mvp-research)

### Analytics dashboard:
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
   - Product label: 527, pension
   - Workstream label: discovery, product, design, or engineering + frontend or backend

## Roadmap
### Done (recently)
- Pension - 100% service-connected disability alert - Updated Pension service-connected disability alerts to include "100% service-connected disability rating" to avoid confusion with applicants that have non-service connected disability conditions. Released 2/1/26.
- Minimal header update - The Minimal header is the latest standard header for usage in forms. The goal is to help the user focus on the task at hand. Released 3/12/26.
- BPDS for Pension - VA.gov now sends tructured JSON data directly to BPDS. POI then retrieves and uses this data for processing, eliminating the need to perform OCR on submitted PDF forms. Released January 2026.
-  0969 Post MVP improvements (closely adjacent form) - Improvements to the content and format of the Income and Asset statement focused on plain language updates and content chunking to ease form filling burden. Released 3/4/26.


### Now
- BPDS for 0969 and 530 (closely adjacent forms to Pension) - For 0969 and 530 applications, VA.gov will sendstructured JSON data directly to BPDS. POI then retrieves and uses this data for processing, eliminating the need to perform OCR on submitted PDF forms.



## Features and initiatives we worked on
This table includes links to the individual feature directory and the latest iteration (doc or code) in design or development.
|Feature|Completed|
|-------|---------|
|Implemented backup submission pathway|Oct 5, 2023|
|Supported [Code Yellow 1](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue%20label%3Acode-yellow%20label%3Adependents-benefits) (find and rememdiate failed claims). Started March 2023 and closed Aug 2024.|Aug 24, 2024|
|[Updated VA.gov to submit the Aug 2022 version of the 686c pdf](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1292?closed=1) (instead of the Sep 2018 pdf)|Aug 13, 2024|
|[Updated VA.gov to submit the Oct 2021 version of the 674 pdf](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1292?closed=1) (instead of the Jun 2019 pdf)|Aug 13, 2024|
|[Implemented “action needed” emails to alert Veterans of a claim failure](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1418?closed=1)|Nov 12, 2024|
|[Updated annual net worth value from $155,356 to $159,240.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96647) It needs to be manually updated every year by November 30. Ticket to automate update is [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96876).| Dec 2, 2024|
|[Update 686/674 form to v3 components](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/form_updates/Initiative-Brief-686-674-Form-Updates.md)| Mar 2025|
|User research on dependency verification tool prototype|Feb/Mar 2025|

## Design opportunities
This is a collection of notes on design work that we started and set aside for various reasons. It should help add context if picked up again.
### Improving the unreimbursed care and medical expenses step

#### Problem it solves  
Applicants often don’t understand what medical expenses to report and end up estimating and/or reporting expenses that are not retroactively reimbursed, not considered recurring, and in many cases are not eligible for reimbursement. This is the #2 reason why claims go into development.
#### What we did
* 2024
	* Conducted a [usability test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024%2002%20Pension%20Usability%20Evaluation/research-findings.md) of the pension form's MVP, documented findings related to this step
* 2025
	* Conducted [VSO research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/pension/research/2024-09%20527EZ%20VSO%20Research) to further understand pain points in the application process
	* [Explored potential designs](https://www.figma.com/design/9JKK5Eo43uJWEr66JPiebc/WIP---21P-527EZ---Pension-Benefits?node-id=5699-15179) and language changes (before multiple page list-and-loop pattern was established)
* 2026
	* Reviewed historical artifacts and the digitized 8416 to propose recommendations
#### Why it was stopped
This work has historically been deprioritized for several reasons. The multiple page list-and-loop pattern was being formalized, our priorities shifted to digitizing the 0969 form, and the BIO Huntridge team took on digitizing the 8416, which is redundant to this step's requirements. 
#### Next steps
* Collaborate with C/IA to further define care expenses vs. medical expenses
	* Evaluate Veterans' comprehension of this distinction
* Apply the [multiple page list-and-loop](https://design.va.gov/patterns/ask-users-for/multiple-responses) pattern to the step
* Review our [design brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/design/unreimbursed-care-and-medical-expenses-brief.md) for more details and recommended enhancements

### Embedding the 0969 in the pension form
#### Problem it solves  
Veterans don’t complete the required income and asset statement with their pension application, which leads to their claim going into development for additional evidence. This is the #3 reason why claims go into development.
#### What we did
* An audit to compare the 0969 form with the **Financial information** step in the pension application
* Addressed and resolved questions with VBA for clarification
* Met from the 526 team and the 1010-D team for their approaches to forms-within-forms and what they've learned from it
* Identified features for an MVP and potential enhancements
All of these notes are available in a [Mural board here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745620624724/70ee36c200a3b66b426c33aa189dcdcc5a4a0192?wid=0-1763522503702)  .
#### Why it was stopped  
We conducted discovery relatively recently and wanted to avoid partial design or implementation for this large initiative.
#### Next step
* Review our [design brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/embedded-0969-brief.md#design-brief--embedding-the-0969-into-the-527ez) and its recommended scope to define an MVP. This document includes both design enhancements and spikes to evaluate technical feasibility and approach.

### Update marriage history list-and-loop

#### Problem it solves  
Similar to the unreimbursed medical expenses step, the step to report current and previous marriages is outdated. The VADS design system has since released a marriage history pattern.
#### What we did
* Reviewed the VADS marriage history pattern to ensure it was applicable and relevant to our use case
* Developed [design specs](https://www.figma.com/design/9JKK5Eo43uJWEr66JPiebc/WIP---21P-527EZ---Pension-Benefits?node-id=14174-6517) to document new flows and pages, using the multiple page list-and-loop

#### Why it was stopped
Due to implementation 
#### Next steps
* Validate new content with C/IA and/or VBA (although nearly all of the content was taken from VADS, there are some questions that were not covered in the pattern)
*  Implement flows according to design specifications

## Collab Cycle Artifacts
- [Dependent Verification](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83353) | [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md) | [CAIA Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84170)
- [Dependent form updates](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74059) | [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/form_updates/Initiative-Brief-686-674-Form-Updates.md) | [CAIA Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75068)
- [CAIA Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89314) for dependent card updates

### Our team 2024/25 roster
- Delivery Lead: Ahn Platt | anh.platt@va.gov/ anh.platt@coforma.io
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
