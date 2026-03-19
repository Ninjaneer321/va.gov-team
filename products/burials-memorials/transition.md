# 530EZ Transition Hub

**Updated March 2026**

> The purpose of this transition document is to outline the current state of 530EZ forms' product development. It serves as a "front door" to documentation and resources collected during the course of product design and development from August 2024 through March 2026. Included are links to more specific transition hubs where you can find direct links to resources and references used during design and development. These transition docs are "point in time" documents, and may not reflect current progress, deployments or upcoming efforts.

## Table of Contents
[Product context, portfolio, and artifacts](#product-context)

[Roadmap](#roadmap)

[Features and initiatives we worked on](#Features-and-initiatives-we-worked-on)

[Design opportunities](#design-opportunities)

[Our team, VA relationships, and stakeholder meeting cadence](#Our-team-2024/25-roster)

## Product context 
- The online **530EZ** form allows Veterans to fill out and submit the application for Veterans Pension benefits. The burial allowance can help pay for a Veteran’s funeral services, burial, and transportation costs.  The applicant may be eligible for Veterans burial allowances if they are paying for the burial and funeral costs and won’t be reimbursed by any other organization, like another government agency or the Veteran’s employer.
   - [About VA Form 530EZ (Application for Burial allowance and transportation benefits)](https://www.va.gov/burials-memorials/veterans-burial-allowance/#am-i-eligible-for-allowances-t)
   - Launched on VA.gov: January 2024
   - Annual submission volume: 19,352 (2025)

### Product Goal
Make the online Burial experience as easy to complete and cohesive as possible, while ensuring that applicants provide sufficient supporting documentation to ensure that submissions are reliable and processed as quickly as possible.


#### 21-527EZ Application for Veterans Pension
The online Burial application is available in the [production environment](https://www.va.gov/burials-memorials/veterans-burial-allowance/apply-for-allowance-form-21p-530ez/introduction).  The staging environment version of the form is [here](https://staging.va.gov/burials-memorials/veterans-burial-allowance/apply-for-allowance-form-21p-530ez/introduction).

- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/burial-allowance/530-initiative-brief-2024-updates.md)
- [Form Flow (proposed)](products/burials-memorials/burial-allowance/BurialFlow.png)
- [Wireframes (proposed)](https://www.figma.com/design/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?node-id=59-960&t=yWIz3IUP2uFChYib-0) (Figma)
- [MVP Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=0-1723479332670)
- [IA/User Flow Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf?wid=522-1737736233308)
- [VBA Verification Info](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709582312238/ae3de21fd188beba8c28668ee37a31841c6203bf) (core goals, diary entries, mvp outline)
- [MVP Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/research/2025-02-dependents-verification-mvp-research)
   - [Research cohort map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1690311086208/96d5f59b299912bc8c69542e6943d5b2213b9c72)
   - [Solution exploration](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689863079145/5b97ba9ea11077f983f3413167f6324f11aa04a8)

### Product artifacts 
- [Backlog](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/39)
- [General testing plan](https://docs.google.com/spreadsheets/d/10SQSGnTPfXMFWd1OzoEhGa4y0cpn49kD4JS6liehalE/edit?gid=154291457#gid=154291457) for product updates

### Design artifacts
- [Figma Working File](https://www.figma.com/design/jpJQSCKiGegacdW4RH5uQB/21P-530EZ---Burial-Benefits?node-id=1796-26776&p=f&t=Y1Hu6A5omqkIAhw1-0)
- [February 2025 desk research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/e2eb3669205a1aca17126338d3577ff3f8ce8977/products/burials-memorials/Desk%20Research/Burial%20Benefit%20Desk%20Research%20Findings%20Presentation_PDF.pdf)
   - [[INTAKE] PBB: Burial allowance form content updates #130650](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130650)
   - [[INTAKE] Pension and burial benefits: Burial allowance content updates #123182](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123182)
- [December 2024 VSO research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/9cbf1ec5b697e301a25de2bd843fdd01d68d31a2/products/burials-memorials/burial-allowance/research/2024-09-VSO-Research/research-findings.md)
#### Design backlog tickets
- [International Phone Number Support #113576](https://github.com/department-of-veterans-affairs/va.gov-team/issues/113576)
- [Design spike: Explore content about accredited representatives #95794](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95794)

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
 
### Analytics dashboard:
- Domo (none), [general forms dashboard](https://va-gov.domo.com/page/447193050)
- Google Analytics (none)
- [Backend Stats on DataDog Dashboard]([https://vagov.ddog-gov.com/dashboard/55q-ksa-tvq/benefits---pension---527---controller?fromUser=false&refresh_mode=paused&from_ts=1759294800000&to_ts=1767247199999&live=false]
- [Backend lighthouse monitoring]([https://vagov.ddog-gov.com/dashboard/atf-ppf-aky/benefits---pension---527---benefits-intake?fromUser=true&refresh_mode=sliding&from_ts=1773157902524&to_ts=1773172302524&live=true](https://docs.google.com/spreadsheets/d/10SQSGnTPfXMFWd1OzoEhGa4y0cpn49kD4JS6liehalE/edit?gid=154291457#gid=154291457))
- [Submission reporting]([https://vagov.ddog-gov.com/dashboard/vk2-6zi-zzu/benefits-form-527-pension-benefits?fromUser=false&refresh_mode=paused&from_ts=1735711200000&to_ts=1767247199999&live=false] 
- [Pension Funnel dashboard](https://vagov.ddog-gov.com/dashboard/d59-e32-q3v?fromUser=false&refresh_mode=sliding&from_ts=1770756825443&to_ts=1773172425443&live=true)

### Team resources
- [Team Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/3) (GitHub)
- [Sprint Planning](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/35?sliceBy%5Bvalue%5D=PBB)
- [Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692908527043/0da94b7ded52e8a943d798bcb8ae39697c2fb56f?wid=120-1729780466015) (Mural)
- Ticketing
   - Team label: benefits-pension-burial
   - Product label: 530, burial
   - Workstream label: discovery, product, design, or engineering + frontend or backend

## Roadmap
### Done (recently)
- Minimal header update - The Minimal header is the latest standard header for usage in forms. The goal is to help the user focus on the task at hand. Released 3/12/26.
- Enhancements to the Burial form have focused on alignment to the latest paper form provided by VBA on December 2025.These changes have been implemented on Staging but have not been released to production yet. [See tickets related to the milestone here.](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1588)
   - We conducted several audits of the burial form to identify changes that impact the digital form and clarified requirements with VBA. [[Sharepoint] Paper form audit]()
   - [[Figma] Design enhancements](https://www.figma.com/design/jpJQSCKiGegacdW4RH5uQB/21P-530EZ---Burial-Benefits?node-id=1796-26776)

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
