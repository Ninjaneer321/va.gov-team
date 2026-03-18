# 0969 Transition Hub

**Updated March 2026**

> The purpose of this transition document is to outline the development and release of the 0969 form, its post-MVP state released in March 2026. It serves as a "front door" to documentation and resources collected during the course of product design and development. 

## Table of Contents
[Product context](#product-context)

[Roadmap](#roadmap)

[Design opportunities](#design-opportunities)

[Collab cycle artifacts](#collab-cycle-artifacts)

## Product context 
- The online **0969** form is a supporting document that Veterans are required to attach to their pension application depending on their answers to income and asset questions. This form requests additional detail about the Veteran and their dependents' income and asset information. There are additional use cases for this form - to attach to a DIC benefits application, or to update VA on a change in income or net worth. As such, we've built form flows for both claimant types, Veterans and their surviving family members.
   - Re-launched on VA.gov: 3/4/2026

### Product Goal
Ease the burden of Veterans applying for pension benefits to complete the 21P-0969 to avoid applications going into development. Enable Veterans to provide income, asset and net worth information in a clear, streamlined online experience. 

#### 21-527EZ Application for Veterans Pension
The online pension application is available in the [production environment](https://va.gov/supporting-forms-for-claims/submit-income-and-asset-statement-form-21p-0969/).  The staging environment version of the form is [here](https://staging.va.gov/supporting-forms-for-claims/submit-income-and-asset-statement-form-21p-0969/).
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/21P-0969-product-outline.md)

### Product artifacts 
- [Backlog]()
- [General testing plan](https://docs.google.com/spreadsheets/d/1mZCnm1Cc6lBIGRIjxw5FzmHa9yQRDBfHquKKLsNlHfo/edit?gid=2009661867#gid=2009661867) for product updates

### Design artifacts
- [Working design file](https://www.figma.com/design/tJhSwyQorlgdVPC2UKx1fQ/21P-0969-Pension-or-DIC-Income-and-asset-statement?node-id=452-141959&p=f&t=OM2fZ6Nf1NbpQYr7-0)
   - [Array Builder specs and semantic headings guide](https://www.figma.com/design/yFkPW92yXTgVUUNfgHekcp/Form-Pages---Array-Builder-Specs?node-id=0-1&p=f&t=nzotqqjuKmVudrfG-0)
   - [Guide to list & loop summary cards](https://www.figma.com/design/tJhSwyQorlgdVPC2UKx1fQ/21P-0969-Pension-or-DIC-Income-and-asset-statement?node-id=6058-82726&t=OM2fZ6Nf1NbpQYr7-4)
- [0969 research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2025-07%200969%20Usability%20Study/research-findings.md)
- [Q&A discovery with VBA](https://dsva.slack.com/docs/T03FECE8V/F08T9M220MS)

### Team resources
- [Team Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/3) (GitHub)
- [Sprint Planning](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/35?sliceBy%5Bvalue%5D=PBB)
- [Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692908527043/0da94b7ded52e8a943d798bcb8ae39697c2fb56f?wid=120-1729780466015) (Mural)
- Ticketing
   - Team label: benefits-pension-burial
   - Product label: Income & asset
   - Workstream label: discovery, product, design, research, or engineering + frontend or backend

## Roadmap
### Now
### Next

## Design opportunities
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

## Collab Cycle Artifacts
- [Digitizing 0969 Milestone](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1531)
- [CAIA intake and epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106335)
