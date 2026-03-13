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
- Updated form flow to produce Aug 2022 version of pdf on Aug 13, 2024.
- Send [674-only claims from VA.gov directly to RBPS](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97875) rather than flagging them for manual processing on March 21, 2025.
- Completed concept testing for the [MVP prototype](https://www.figma.com/design/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?node-id=59-960&t=yWIz3IUP2uFChYib-0) of dependent verification tool. Intent is to capture “no changes to dependents” through an online tool on VA.gov and submit a 21-0538 (dependent verification) form on the Veteran’s behalf.
- [Met with CAIA](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84170) in January 2025 to discuss [IA of dependent experience](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=91-1737736233308) and [improvement opportunities](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=522-1737736233308).

### Now
- Test and release [updated form flow](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1292) to use v3 design system components, improve user experience, and comply with current accessibility requirements. See general testing guidelines [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/form_updates/general_testing_plan.md).
   - The form updates have gone through a final [Collaboration Cycle staging review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74059) stage gate, and there are a [handful of launch-blocking issues](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1253) that need to be addressed (see launch-blocking label).
   - The initial release was postponed due to ongoing issues with some of the new v3 design system components, but workarounds were implmented where needed. Given the time invested in fixing or working around the component limitations, we ran out of runway to complete end-to-end testing with OBI/RBPS stakeholders, so the release was delayed. We have developed workarounds for the following issues, and tickets have been submitted to fix the component-related issues at the Platform level:
      - [#103781](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103781): Validation error
      - [#103778](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103778): Remove additional info (this workflow needs to be reviewed)
      - [#103783](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103783): Button imposter component
      - [#103784](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103784): File input imposter component
  - Post release, an [accessibility audit needs to be requested from the VA 508 Office](https://depo-platform-documentation.scrollhelp.site/developer-docs/request-support-from-the-va-508-office#RequestsupportfromtheVA508office-AuditRequest). This is required even if no accessibility issues were found during the Staging Review. Once the audit has been requested, add a comment to the [collab cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74059) with the 508 ticket number and close the collab cycle review ticket.
- Build out [MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md#whatre-you-building) of dependent verification tool to capture “no changes to dependents” and auto-submit a 21-0538 form. ([milestone for this project](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1409)).
- Add claim submission in-progress email and update confirmation email to align with requirements from Zero Silent Failure initiative. Seperate existing confirmation email into seperate emails for each claim submission type. ([milestone for this project](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1420))
- [Migrate to RESTful APIs](https://github.com/department-of-veterans-affairs/va.gov-team/issues/91282)
- [Migrate](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83272) off of depreciated document upload API.

### Next
* Update marriage history to VADS pattern
	* Design spec: [Figma](https://www.figma.com/design/9JKK5Eo43uJWEr66JPiebc/WIP---21P-527EZ---Pension-Benefits?node-id=14174-6517) (Note: May need input from C/IA)
	* Engineering tickets:
		* [Previous Marriages - Multiple Page List & Loop Pattern #109093](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109093)
		* [Pension | Marriage Info - Current Marriage #103928](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103928)
		* [Current Spouse Marital History - Multiple Page List & Loop Pattern #109092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109092)
* Apply pre-fill pattern
	* Design spec: [Figma]()
	* Engineering ticket: [Pension | Apply pre-fill pattern #111588](https://github.com/department-of-veterans-affairs/va.gov-team/issues/111588)
* Remove 65+ age question from flow
	* Engineering ticket: [PBB | Backend: Implement removal 65+ age question from flow #134365](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134365)

### Future
- Add the ability to [download a pdf of the submitted claim](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/13?sliceBy%5Bvalue%5D=ND%2FD+ZSF+%7C+Stage+5+%28Confirmation+page+full+update%29) from the confirmation page (as part of the Zero Silent Failure initiative). This work was put on hold until another team implements a solution.
- Work with MyVA to update the [status card](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status#status-in-myva) shown to claimants as part of the Zero Silent Failure initiative.
- Integrate dependent management into the MyVA profile experience. ([milestone for this project](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102346))
- Integrate dependent parent form (21-509) into 686/674 form flow on VA.gov. ([discovery ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102348))
- Expand functionality of dependency verification tool (21-0538) to capture "yes, I have changes to my dependents). (No existing tickets, but there is a [general milestone](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1409).)
- Explore reminders for life events ([discovery ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102351))


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
- Frontend Engineer: Todd Rizzolo | sean.midgley3@va.gov / todd.rizzolo@adhocteam.us
- Frontend Engineer: Dakota Larson | dakota.larson@va.gov / dakota.larson@oddball.io
- QA Engineer: Jon Keister | jonathan.keister@va.gov / jonathan.keister@oddball.io

### VA Leads
- Product Crew Lead: Sanja Bajovic | Sanja.Bajovic2@va.gov
- Engineering Crew Lead: Sanja Bajovic | Sanja.Bajovic2@va.gov
- Design Crew Lead: Dene Gabaldon | dene.gabaldon@va.gov

### VBA stakeholders
|Name|Title|Office|Email|Description|
|----|-----|------|-----|-----------|
|Kevin Schneider |Senior Automation Strategist |Office of Benefits Automation (OBA) | Kevin.schneider1@va.gov |SME on dependency claim submissions and dependency verification.|
|David Reis |Senior Automation Strategist| Office of Benefits Automation (OBA)|david.reis@va.gov |Kevin’s backup. SME on dependency claim submissions and dependency verification. Expert on VBMS diary entries.|
|Kayce White|Program Analyst|Compensation Services|Kayce.White@va.gov|SME on form pdfs. Manages the pdf forms. Makes updates to the pdfs, fixes fields and formatting.|
|Linda Ciston|Contractor|RBPS|linda.ciston@va.gov |RBPS expert, retired from VA, but still works limited hours.|
|Bahaeddin (Baha) Abukhaled|Contractor|RBPS |BahaEddin.AbuKhaled@va.gov | Linda’s replacement. RBPS SME.|
|I. Tara L.|Program Analyst|OBI|tara.i@va.gov|Project Manager of sorts. Organizes testing with OBI/RBPS resources.|
|Elizabeth Reeher|Contractor||elizabeth.reeher@va.gov|Project manager|
|Yvette Allmond|Management Analyst|Office of Mission Support|yvette.allmond@va.gov | Source for providing unlocked pdf files that can be edited by VA.gov.|

#### Reoccuring Stakeholders Meetings
- [Bi-weekly Dependents Design Sync](https://dsva.slack.com/docs/T03FECE8V/F0839KD75K8) with Kevin, design/research, product, and VA Leads
- Bi-weekly Product Sync with VA Leads, product manager, and delivery lead
- Weekly engineering sync with VA Engineering Crew Lead and team Engineering Lead
- [Weekly design sync](https://dsva.slack.com/docs/T03FECE8V/F0839KD75K8) with VA Design Crew Lead, team design/researchers, product manager
