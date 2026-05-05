# VA Patterns Library 2025 - 2026

## Overview
The VA Patterns Library documents repeatable solutions for multi-component user flows on VA.gov — patterns like prefill, eligibility prompts, service history, multiple-response sets, and file inputs. Patterns sit one level above components: they combine design-system components, content standards, and interaction rules into a proven solution teams can reuse rather than reinvent.


| Component / Pattern | Description | Release Date | Links |
|---|---|---|---|
| **Prefill Pattern** | The prefill pattern tells Veterans where their information is coming from, what they can edit, and how to update what they can't. These examples make it easier to implement correctly the first time. **NOTE:** Follow `international-phone-number` channel — we have not enabled the international phone number yet, since VA Profile can't accept it at this time.<br><br>• [Prefill – Minimal workflow](https://staging.va.gov/mock-form-minimal-prefill): Shows the prefill pattern using the minimal header/footer template.<br>• [Prefill – Standard header/footer](https://staging.va.gov/mock-form-prefill/introduction): Shows the full authenticated experience with the standard VA.gov introduction page. | April 2026 | 📖 [Pattern guidance](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled) \| [Update the prefilled information guidance](#) <br> 💻 [Code (Forms library)](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/patterns/prefill/index.js) |
| **Multi file upload with document type array builder pattern** | This pattern is intended for scenarios where Veterans need to upload supporting documents and associate each file with a specific document type — such as a DD-214, birth certificate, or discharge papers. This is guidance only. There is no pre-built coded pattern at this time. Teams can implement this pattern today using a combination of the Array Builder pattern and the Single file input component.<br><br>**Examples** — See this pattern in action in the mock form:<br>• [Supporting documents — Required](https://staging.va.gov/mock-form-patterns/supporting-documents-array-required-intro))<br>• [Supporting documents — Optional](https://staging.va.gov/mock-form-patterns/supporting-documents-array-optional) | April 2026 | _Guidance only — no pre-built coded pattern._ |
| **Form Submitter Pattern** | Guidance only: This pattern helps determine two things: who is filling out the form (the person typing or writing) and who the form is about (the person who will get the benefits). Sometimes these are the same person and sometimes they are different. | January 2026 | [Guidance](https://design.va.gov/patterns/help-users-to/identify-who-is-filling-out-a-form)|
| **Branch of Service** `serviceBranchPattern` | Standardizes how Veterans select their military branch, improving data accuracy and form consistency across VA.gov applications. | October 2025 | [Guidance](https://design.va.gov/patterns/ask-users-for/service-history) |



## Problem Statement
Many VA.gov experiences share common flows (e.g., asking for service history, collecting repeated responses, prompting prefill, uploading files), but without a published patterns library each team designs and implements these independently. The result: inconsistent Veteran experiences, duplicated research, accessibility variation, and unnecessary engineering cost.

Teams also need patterns that bundle content, accessibility, and edge-case guidance — not just a Figma artifact.

**How might we** Publish and maintain a comprehensive patterns library so VA.gov teams consistently reuse proven, accessible flows instead of reinventing them per product?

## Desired User Outcomes
- Product teams find an authoritative pattern for common flows (prefill, multiple responses, service history, file upload, eligibility)
- Designers get Figma pattern files, content guidance, and accessibility considerations in one place
- Engineers get implementation-ready guidance tied to design-system components
- Patterns evolve based on real Veteran research, not one-off decisions

## Undesired User Outcomes
- Patterns diverge across products (especially high-frequency flows like prefill and file upload)
- Patterns are published but not kept current with component-library changes
- Teams bypass the patterns library because intake or updates are too slow

## Desired Business Outcomes
- Fewer one-off design and engineering reviews for repeated flows
- Reduced research duplication across product teams
- Higher Veteran task-completion rates on flows that adopt canonical patterns

## Undesired Business Outcomes
- Patterns go stale without maintenance ownership
- Team capacity overwhelmed by requests for bespoke variants
- Fragmented accessibility quality across implementations

## Measuring Success

### Key Performance Indicators (KPIs)


| Category | Ease of Use | Service Completion | Trust/Satisfaction | Health |
|---|---|---|---|---|
| [Metric](https://design.va.gov/about/metrics/) | Pattern page views on design.va.gov | Pattern adoption rate across VA.gov flows | Consumer-team CSAT for patterns | Patterns current-with-components count |

#### Baseline KPI Values

| Metric | Baseline | Source | Target |
|---|---|---|---|
| Pattern page pageviews (monthly, design.va.gov) | TBD | Google Analytics | +10% YoY |
| Pattern adoption rate | TBD | Domo adoption dashboard | ≥ 75% of applicable flows |
| Consumer-team CSAT for patterns | TBD — run baseline survey | Quarterly DS consumer survey | ≥ 4.0 / 5.0 |
| Patterns reviewed within last quarter | TBD | GitHub file metadata | 100% of published patterns |

### Objectives and Key Results (OKRs)
Maps to FY26 Design & Forms Systems OKRs:
- ✅ Obj 1 (Optimize software delivery for Veteran impact) — pattern reuse accelerates teams
- ✅ Obj 3 (Relentlessly improve user experience) — consistent Veteran flows
- ✅ Obj 4 (Empower DSD teammates) — patterns are a primary teaching artifact
- 🔄 Obj 2 (Operate products with high reliability and security) — shared a11y/content guidance reduces defects

## Assumptions
1. **Assuming** teams will reuse patterns when they are discoverable and current. 
2. **Assuming** Forms Library and component library remain stable sources of truth. 
3. **Assuming** Veteran research on existing patterns remains valid.
## Solution Approach

### Form Upload
OKRS 1.1, 1.2. 1.3 and 2.2 | Launch Date: 2/28/2025 single file input - Launch Date: 1/2026 multiple file input
- [How to add a new form to Form Upload](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/DocumentUpload_FindaForm/readme.md) 
- PDFs submitted by mail can take longer to be received and processed by the end system. By providing an alternative to mail or fax the form upload tool, on VA.gov, reduces the time it takes to be received by the intake center, and provides some validation (meta data) upon form submission for a more efficient and faster processing.
- This tool will also provide form submittors with confirmation of their submission and email notifications upon submission, received by the end system or an action needed email if there was an error
- As part of this effort we initially did an [audit of Quick Submit](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2024-02-QuickSubmit/Quick%20Submit%20Audit.pdf): The team provided an accessibility audit of QuickSubmit (not hosted by VA.gov) and found many issues with the site.  This analysis helped prompt the decision to support some of the functionality that QS supports directly on VA.gov.
- Adding multi-file input to support forms that have supporting evidence
  
### Patterns
[Mock form pattern examples](https://staging.va.gov/mock-form-patterns/introduction)
- OKR's 1.1 & 3.3
- The team successfully integrated the USWDS version 3 components and patterns into the [forms library](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/web-component-patterns). Additionally, we  developed new patterns to further enhance these resources, contributing to both the design system and forms library. As a result of our efforts, other forms teams have been able to efficiently create new forms by leveraging the patterns and components available within the forms library. This streamlined process has improved overall productivity and consistency in form development.
- [Prefill Pattern](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled) - IN PROGRESS
- [Service History Pattern](https://design.va.gov/patterns/ask-users-for/service-history)
- [Form Submitter Pattern](https://design.va.gov/patterns/help-users-to/identify-who-is-filling-out-a-form)
- [Name and Date of Birth](https://design.va.gov/patterns/ask-users-for/names) 
- [Identification information](https://design.va.gov/patterns/ask-users-for/social-security-number)
- [Relationship to Veteran](https://design.va.gov/patterns/ask-users-for/relationship)
- [Mailing address](https://design.va.gov/patterns/ask-users-for/addresses)
- [Phone and email address](https://www.figma.com/file/4A3O3mVx4xDAKfHE7fPF1U/VADS-Templates%2C-Patterns%2C-and-Forms?type=design&node-id=2988-9602&mode=design&t=G7cHyOgjfgKxCDPo-11)
- [Example form](https://staging.va.gov/mock-form-minimal-header/introduction) including the above patterns
- Conditionally revealed
- [New confirmation page with subcomponents](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/components/ConfirmationView)
- Minimal header - with [example form](https://staging.va.gov/mock-form-minimal-header/introduction) and sub components Back link
- Routes (dev only) - ability to jump to different pages within a form
- [Housing status](https://design.va.gov/patterns/ask-users-for/housing-status) Note:  This pattern also influenced Form Product owners at the VA to update the questions on 3 PDF's to match the pattern in the online form.
- [Multiple responses list & loop](https://design.va.gov/patterns/ask-users-for/multiple-responses)
- [Single response](https://design.va.gov/patterns/ask-users-for/a-single-response)

### Confirmation page in partnership with Authenticated Experience My VA team
 OKR 1.1, 1.3
 | Launched Date: 10/22/2024
- [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/2024-05%20VFF%20and%20My%20VA%20Form%20Submission%20Research/Product%20Outline%20Confirmation.md)
- In the past there have been issues with Veterans seemingly submitting a digital form or application and that form then failing to actually make its way into the VA processing system for review. This has been referred to as "silent failures" - the user receives no indication that an error occurred because the process and time between the user clicking submit on their form and the form actually traveling through the Benefits Intake API and making its way into Central Mail can be lengthy.
- Our team partnered with the Authenticated Experience My VA team to address the challenges Veterans face in not knowing there is an error with their form. It is out of scope for our team to address problems with Central Mail.
- This work in alignment with OKR 1.3 and is also in alignment with the OCTO Benefits Portfolio prioritization framework by supporting category 2: Silent submission failure: A Veteran believes an online transaction (form, evidence, etc.) has been successfully sent to VA, but it silently errored without notifying the form submitter. 
- The new confirmation page can be used out of the box for other teams building forms or add customizable sections or content as needed.  The confirmation page guidance, found in the VADS, includes help users:
-   [Keep records of their digital submission](https://design.va.gov/patterns/help-users-to/keep-a-record-of-submitted-information)
-   [Keep informed of the status of their submission](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status)

### Review Page Redesign - PLANNED WORK
[Readme](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/Review%20Page/readme.md)
OKT 1.1
- The review page has been the subject of [numerous studies](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/Product/Review%20Page/Research) and proposed revisions, but remains incomplete and unsuccessful. The page currently suffers from multiple bugs and 508 defects that necessitate a complete re-architecting of the page and its flow. Additionally, the evolution of the VA Design System has prompted a desire to implement the "one thing per page" principle in the editing process.

- A new "hub and spoke" model for the review page is proposed. In contrast to previous studies, this prototype will enable users to edit the contents of a single form page directly on the original form page, returning to the review page once edits are complete. Any conditional pages required based on these edits will be presented to the user before returning to the review page. This approach differs from previous studies, which required users to navigate through an entire chapter to edit a single page within a form flow.


#### Communications
- Slack: #platform-design-system
- Docs: design.va.gov (patterns section)

#### Team Members
- VA Product Owner: Matthew Dingee
- Program Manager: Megan Siddle (Oddball)
- Lead PM: Tricia Baker (Oddball)
- PM: Carol Wong (Oddball)
- Technical Lead (Forms Library): Robert Hassell (Oddball)
- Technical Lead (Design System): Amy Leadem (Wilcore)
- Designers: Barb Denney, Dan Brady, Jeana Clark

#### Stakeholders
- All VA.gov product teams using multi-component flows
- Forms Library consumers
- VA ADE - accessibility office
- CIA (content standards)

