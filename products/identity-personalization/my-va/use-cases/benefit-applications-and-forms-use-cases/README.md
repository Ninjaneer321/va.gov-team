# My VA: Forms and applications use cases 

Last updated: March 2026

* [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746474542228/c397457f63aa34d09dee9f34d785af90cd3b8b96?wid=36-1746474575795&outline=open)  
* [Figma files](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5307-57763&t=KhCgIDPMpZ6FClDG-1)  
* Integration documentation  
  * Authenticated Experience Team documentation  
    * [Authenticated Experience Team intake process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/intake.md)  
    * [Forms and applications design and content standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/my-va-design-content-standards.md#forms-and-applications)  
    * [Frontend documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md)  
    * [How to Add Form Submission Status to My VA (Any Form API)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/adding-a-form.md)  
  * Platform: [VA Forms Library \- How to set up Save In Progress (SiP)](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si)  
  * VADS: [Stay informed of their form submission status](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status)


<details><summary>Archive | How to reproduce in staging</summary>

* [User has a benefit application or form draft saved but not yet submitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-drafts.md#how-to-reproduce)  
* [User has submitted a benefit application and/or form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-and-or-forms.md#how-to-reproduce)  
* [User has no benefit applications, forms, or drafts saved](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-no-applications-forms-or-drafts.md#how-to-reproduce)

</details>

# Jump to

[Overview](#overview)

[Use cases](#use-cases)

[User does not have any in-progress or completed forms or applications (empty state)](#user-does-not-have-any-in-progress-or-completed-forms-or-applications-\(empty-state\))

[Draft](#draft)

[Submission in progress (form or application)](#submission-in-progress-\(form-or-application\))

[Received](#received)

[Action needed](#action-needed)

[Edge cases](#edge-cases)

[Flags](#flags)

[PDF download available](#pdf-download-available)

[Errors](#errors)

[Forms and applications section warning](#forms-and-applications-section-warning)

[PDF link generation error (card-level)](#pdf-link-generation-error-\(card-level\))

[PDF download error (card-level)](#pdf-download-error-\(card-level\))



# Overview 

* This documentation outlines the different use cases and statuses for **Forms and applications** on My VA. It also details edge cases, feature flags, and error states. If you’re trying to integrate a form, start here → \[link\].  
* LOA1 and LOA3 (identify verified) users can see all use cases.  
* A **Details** component with information informing users how to check their form and application statuses is always visible at the bottom of this section.

# Use cases 

## User does not have any in-progress or completed forms or applications (empty state) 

* **Description:** When a user does not have any in-progress or completed forms or applications they will see information informing them of such.  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16410&t=KhCgIDPMpZ6FClDG-1)  
* Link to UX governance documentation (TBA)

## Draft 

* **Description:** When a user has a form or application in progress, the card appears with the **DRAFT** status in the **In-progress forms** section.  
* **Format:** [Stay informed of their form submission status](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status)  
* [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16011&t=KhCgIDPMpZ6FClDG-1)  
* [Link to UX governance documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/my-va-design-content-standards.md#draft-status)


## Submission in progress (form or application) 

* **Description:** When a user has a form or application that has been submitted but not received, the card appears with the **SUBMISSION IN PROGRESS** status in the **Completed forms** section.  
* **Format:** [Stay informed of their form submission status](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status)  
* [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5307-57763&t=nUPtUt1TydCcR2Mb-1)  
* [Link to UX governance documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/my-va-design-content-standards.md#submission-in-progress-status) 


## Received  

* **Description:** When a user has a form or application that has been received by the VA, and is currently being reviewed, the card appears with the **RECEIVED** status in the **Completed forms** section.  
* **Format:** [Stay informed of their form submission status](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status)  
* [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5468-13986&t=vWzWRLiF6UjMdVlg-1)  
* [Link to UX governance documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/my-va-design-content-standards.md#received-status) 

## Action needed  

* **Description:** When there has been a downstream system error, and the user has to call for support, the card appears with the **ACTION NEEDED** status in the **In-progress forms** section.  
* **Format:** [Stay informed of their form submission status](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status)  
* [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=9301-122104&t=vWzWRLiF6UjMdVlg-1)  
* [Link to UX governance documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/my-va-design-content-standards.md#action-needed-status) 


# Edge cases 

## Flags 

### PDF download available 

Description: PDF downloads are optional, and can appear in all statuses other than DRAFT. 

* **Format:** [Stay informed of their form submission status](https://design.va.gov/patterns/help-users-to/stay-informed-of-their-application-status)  
* [Link to design](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16327&t=fWVBE4rdN5M0wajx-1)   
* [Link to UX governance documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/my-va-design-content-standards.md#submission-in-progress-status) 

To enable PDF downloads ensure the following flags are enabled:

* **my\_va\_form\_pdf\_link**: Allows the render of the PDF download UI link  
* **my\_va\_form\_submission\_pdf\_link:** Matching backend feature flag

The download link only renders when:

* The **my\_va\_form\_submission\_pdf\_link** feature toggle is enabled *and*  
* **pdf\_support** returns true from the backend  
  * /v0/my\_va/submission\_statuses is a response property

**Important:** pdfSupport should only be set to true if the form API actually generates a PDF and saves it to the designated S3 bucket. If a PDF is not generated and stored, no download URL can be retrieved, which will cause the download button to appear but fail when the user attempts to download the file.

## Errors 

### Forms and applications section warning 

* **Description**: A slim warning alert may appear at the **Forms and applications section** level when there is an issue retrieving submission status information for one or more forms. This alert is tied to the **submission status flow**, not the PDF download flow.  
* This warning is **not limited to 429 errors (Too Many Requests)**. It can appear when:  
  * The submission status request fails entirely, or  
  * Submission status data is returned with one or more errors included in the response.  
  * A 429 Too Many Requests is one example, but other **client, upstream, or service error conditions may also trigger this alert**.  
* **Status code**: 4XX and 5XX  
* [Link to design](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5350-14507&t=vSC00tzVjcFZ2rHY-1)   
* [Link to UX governance documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/my-va-design-content-standards.md#full-api-system-down-page-section-error)   
* [Link to backend documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/adding-a-form.md)

### PDF link generation error (card-level)

* **Description**: If the PDF link is unable to be generated on page load, an error message appears within the individual form card. The PDF link is hidden from this view.  
* **Status code**: 400  
* [Link to design](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=11576-36412&t=OZf0PQTkM80ZrmNE-1)   
* [Link to backend documentation](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/simple_forms_api/app/services/simple_forms_api/form_remediation/docs)

### PDF download error (card-level) 

* **Description**: If the request fails when a user attempts to download a copy of their submitted form, an error message appears within the individual form card.  
* **Status code**: 4xx (401, 403, 404, 422, etc.) Any 5xx  
* [Link to design](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=9334-14783&t=vWzWRLiF6UjMdVlg-1)   
* [Link to backend documentation](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/simple_forms_api/app/services/simple_forms_api/form_remediation/docs)

---
<details><summary>Archive | My VA: Benefits applications and forms use cases, November 2025</summary>

# My VA: Forms and applications use cases

**Last updated: November 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746474542228/c397457f63aa34d09dee9f34d785af90cd3b8b96?wid=36-1746474575795&outline=open)
- [Figma files](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5307-57763&t=KhCgIDPMpZ6FClDG-1)
- Product documentation
   - [How to add a form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/adding-a-form.md)

<details><summary>Archive | How to reproduce in staging</summary>

- [User has a benefit application or form draft saved but not yet submitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-drafts.md#how-to-reproduce)
- [User has submitted a benefit application and/or form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-and-or-forms.md#how-to-reproduce)
- [User has no benefit applications, forms, or drafts saved](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-no-applications-forms-or-drafts.md#how-to-reproduce)

</details>

# Jump to

[Phase-1, 3.0-experience-overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/README.md#phase-1-30-experience-overview)

[Common use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/README.md#common-use-cases)

[Edge cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/README.md#edge-cases)

- [Validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/README.md#validation)

- [Flags](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/README.md#flags)

- [Errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/README.md#errors)

# Phase 1, 3.0 experience overview 
- LOA1 and LOA3 (identify verified) users can see all use cases.
- This feature shows a card for any applications or forms that a user has started or completed.
   - Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.
   - **Forms and applications submitted through the Lighthouse Benefits Intake API (LH BI API)** will have a downloadable PDF on My VA, provided the PDF is available in S3. My VA does not generate PDFs, so if the file isn't stored in S3, it won't be shown.
      - Forms and applications **NOT** submitted through the LH BI API will not have a PDF shown, and will have the form name be the header for the card, as titles are not available.
   - Completed forms and PDFs only show for 60 days, at which point they disappear from My VA.
- An additional information component with information pertaining to tracking benefit applications and forms statuses is always visible at the bottom of this section unless an error is preventing the displaying of forms.


# Common use cases

## User does not have any drafts or completed forms</summary>

* **Description:** When a user does not have any form or application drafts or completed forms they will see information informing them of such, and an additional information component on what to do if they think there are missing forms.
* **Format:** See designs
* [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16410&t=KhCgIDPMpZ6FClDG-1)
* **Content:** See designs.
- **Status codes:**
  - 200 GET /v0/my_va/submission_statuses
  - 200 GET /v0/user
- **Frontend components:**
  - src/applications/personalization/dashboard/components/benefit-application-drafts/FormsAndApplications.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/MissingApplicationHelp.jsx
- **Legacy Frontend components:**
  - src/applications/personalization/dashboard/components/benefit-application-drafts/BenefitApplications.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationsInProgress.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/MissingApplicationHelp.jsx

## User has a benefit application or form draft saved but not yet submitted

* **Description:** When a user has a benefit application draft saved in progress, the card appears in the in-progress section.
* **Format:** [Card component](https://design.va.gov/components/card)
* [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16011&t=KhCgIDPMpZ6FClDG-1)
* [Link to code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md)
* **Content:** See designs
- **Status codes:**
  - 200 GET /v0/user
- **Frontend components:**
  - src/applications/personalization/dashboard/components/benefit-application-drafts/FormsAndApplications.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationCard.jsx
- **Legacy Frontend components:**
  - src/applications/personalization/dashboard/components/benefit-application-drafts/BenefitApplications.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationsInProgress.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/DraftCard.jsx


## User has submitted a benefit application and/or form not on LH BI API

* **Description:** When a user has submitted a supported application or form **not** on Lighthouse Benefits Intake API they will see a card.
   - Submission in progress and Received statuses appear in the Completed forms section.
   - Action needed statuses appear in the In-progress section.
* **Format:** [Card component](https://design.va.gov/components/card)
* [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16246&t=KhCgIDPMpZ6FClDG-1)
* [Link to code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md)
* **Content:** See designs
- **Status codes:**
  - 200 GET /v0/my_va/submission_statuses
- **Frontend components:**
  - src/applications/personalization/dashboard/components/benefit-application-drafts/FormsAndApplications.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationCard.jsx
- **Legacy Frontend components:**
  - src/applications/personalization/dashboard/components/benefit-application-drafts/BenefitApplications.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationsInProgress.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/SubmissionCard.jsx




## User has submitted a benefit application and/or form on LH BI API

* **Use case:** When a user has submitted a supported application or form on the Lighthouse Benefits Intake API, they will see a card.
   - Submission in progress and Received statuses appear in the Completed forms section.
   - Action needed statuses appear in the In-progress section.
* **Format:** [Card component](https://design.va.gov/components/card)
* [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16327&t=vSC00tzVjcFZ2rHY-1)
* [Link to code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md)
* **Content:** See designs
- **Status codes:**
  - 200 GET /v0/my_va/submission_statuses
- **Frontend components:**
  - src/applications/personalization/dashboard/components/benefit-application-drafts/FormsAndApplications.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationCard.jsx
- **Legacy Frontend components:**
  - src/applications/personalization/dashboard/components/benefit-application-drafts/BenefitApplications.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationsInProgress.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/SubmissionCard.jsx


# Edge cases

## Validation
This feature has no validation use cases.

## Flags

- `myVaFormPdfLink`: Allows the render of the PDF download UI button
- `benefitsClaimsIvcChampVaProvider`: Overrides for texts such as titles and labels

## Errors

### The API that shows forms is down
  
* **Description:** If an LOA3 user logs in and there is an error with the API that displays forms and applications, then we show an alert informing the user the information is currently unavailable. No other information shows in the section.
* **Format:** [Warning slim alert](https://design.va.gov/components/alert/#warning-alert)
* [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5350-14507&t=vSC00tzVjcFZ2rHY-1)
* **Content:** See designs 
- **Status codes:**
  - 400 GET /v0/my_va/submission_statuses
- **Frontend components:**
  - src/applications/personalization/dashboard/components/benefit-application-drafts/FormsAndApplications.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/Error.jsx
- **Legacy Frontend components:**
  - src/applications/personalization/dashboard/components/benefit-application-drafts/BenefitApplications.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationsInProgress.jsx
  - src/applications/personalization/dashboard/components/benefit-application-drafts/Error.jsx

</details>


<details><summary>Archive | My VA: Benefits applications and forms use cases, November 2024</summary>

# My VA: Applications and forms use cases

**Last updated:** November 13, 2024 - updated links

There are two different types of content that can be shown in the Benefit application and forms section of My VA: 
- __Drafts__
- __Submitted applications and forms (that are supported)__

In addition, the section may have neither drafts nor forms. 

## Overview of Drafts:

- For all of these use cases, the user must be LOA3 (identity verified). All LOA3 (and LOA1) users will see this section on My VA.
- This feature shows a card for any benefit applications that a user has started and saved but not yet submitted, or text stating that the user has no benefit applications or forms (if there are no tracked submitted forms as well).
  - Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.
- An 'accordion' component with information pertaining to tracking benefit application and form statuses is visible at the bottom of this section unless an error is preventing the display of forms.

## Common use cases:

- [User has a benefit application or form draft saved but not yet submitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-drafts.md)
- [User has a benefit application or form that's been submitted and is trackable](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-and-or-forms.md)
- [User has no benefit applications and/or forms being tracked, or drafts saved](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-no-applications-forms-or-drafts.md)

## Edge cases:

### System:
The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error (MPI error).

## Flow diagrams:
- [User flow for benefit applications and forms (including drafts) on My VA](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A7642&mode=design&t=CREOF8xG3jKa75nz-1)

## Overview of Submitted Forms:

- For all of these use cases, the user must be LOA3 (identity verified). All LOA3 (and LOA1) users will see this section on My VA.
- This feature shows a card for any benefit application or form that a user has completed and submitted __that can be tracked and displayed on My VA__, or text stating that the user has no benefit applications or forms (if there are no drafts as well).
- Submitted form cards have three different states: submission in progress, received, and action needed

</details>

