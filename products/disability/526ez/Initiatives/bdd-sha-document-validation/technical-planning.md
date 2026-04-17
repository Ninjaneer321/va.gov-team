# BDD SHA Document Validation Technical Project Documentation

| Area                          | Description                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------- |
| **Project Goal**              | Increase the number of uploads of the SHA Part A document for veterans who qualify for BDD program |
| **Super Epic**                | TODO                                                                                               |
| **Current State of Document** | In Progress                                                                                        |
| **Stakeholders**              | Daniel Vu, Eryn Sobing                                                                             |
| **Assigned Team**             | Team 5                                                                                             |

# **High Level Overview**

VA Form 21-526EZ allows veterans to apply for disability compensation through VA.gov. The form is active in the production environment and continues to receive updates.

The Benefits Delivery at Discharge program (“BDD”) allows veterans to apply for compensation benefits 180 to 90 days before discharge and allows for an expedited adjudication process. In addition to the timeframe condition, the veteran is expected to include a Separation Health Assessment (“SHA”, commonly referred to as “SHA Part A”) as part of their claim. 

Work was delivered in April 2026 to improve the overall UI/UX of uploading a SHA by ensuring that there is a dedicated
upload page for the SHA. The work being introduced here will build upon that work by adding "Document Validation", which
will warn the service member if they are potentially uploading an incorrect document.

# **Foundational Knowledge**

A new BDD SHA upload experience was delivered in April 2026. It includes two new pages dedicated to the SHA

1. An Intro Page

![SHA Intro Page](./images/bdd-sha-intro-page.png)

2. An Upload Page

![SHA Upload Page](./images/bdd-sha-upload-page.png)

Right now, the veteran can upload "any" document into the upload page and the system will assume that the document is a
SHA. It is submitted with an attachment id of "L1839", signifying it is a "DBQ - Separation Health Assessment (SHA) - Part A".

Here is screenshot of how the document will appear in VBMS in the veteran's eFolder.

![Example of the SHA in VBMS](./images/bdd-sha-efolder.png)

Today, the "existence" or "non-existence" of a SHA does not impact technical systems. The service member is allowed to
choose to not upload a SHA. They are warned throughout the experience if they do not upload the SHA, but the claim type
or status does not change based on this. However, it can cause delay in their adjudication and impact their consideration
for the BDD program.

Likewise, uploading a document that is not actually a SHA can delay their adjudication and impact their consideration for
the BDD program.

There is another VA.gov tool called "Simple Form Upload" that demonstrates a document validation pattern that Form
21-526EZ can replicate. Upon uploading a document, if that document does not match expected criteria, the Simple Form
Upload will show an alert warning the user that this may be the incorrect document.

![Example of the Simple Forms Upload Warning](./images/simple-forms-upload.png)

The solution used there is fairly simple: The uploaded file has all of its text extracted through an Optical Character
Recognition (OCR) library and then we check if the name of the form is included within that text. There is no pattern
recognition or machine-learning; it's just whether or not the name of the form / id of the form is detectable.

Fortunately, the SHA includes a footer which always includes the text "Separation Health Assessment (SHA) Disability
Benefits Questionnaire - Part A". An example of a blank SHA can be found [here](https://www.benefits.va.gov/compensation/docs/sha_dbq_part_a_self-assessment.pdf).

# **Anticipated Technical Challenges**

There are certain challenges that should be accounted for.

- **Meeting Baseline Levels of Submissions:** Although we want to increase form submissions for BDD-qualified veterans
  that include the SHA Part A document, we cannot “hard block” the veteran from submitting Form 21-526EZ and lowering
  our overall levels of submissions. Thus, a solution that guides the veteran through a “soft block” is advised.
- **Multiple Files Can Be Uploaded:** As part of the initial delivery of the new BDD SHA workflow, we allowed the
  veteran to upload up-to 20 files. Fortunately, the footer for the SHA is on every page so we should be good. But
  we should still ensure that our UX accounts for only showing one total warning and considering whether we want to
  reshow the warning if they've closed it but uploaded another potentially incorrect document
- **Differences in Upload Library for Simple Form Upload vs Form 21-526EZ:** The Simple Form Upload tool and Form 21-526
  utilizes fundamentally different attachment uploading libraries (Shrine vs CarrierWave, respectively). The underlying
  libraries for parsing the attachment and extracting the text can be reutilized, but the way that it is invoked will
  need to account for idioms of Shrine vs CarrierWave.

# **Proposed Solution**

By showing an alert on the SHA upload page when a potentially incorrect document is uploaded, we hypothesize that we
will increase the data quality of Form 21-526EZ submissions and make it easier for veterans to take the correct action.

- **Solution Summary:** Modify the existing Form 21-526EZ document upload endpoint to support validation and
  conditionally show an alert if it detects an erroneous document.
  - Change to vets-api public contract for the upload endpoint to support new form param to pass the expected form type ("SHA")
  - Change to vets-api to support OCR
  - Change to vets-website to render new alert based on result

# **Risks and Dependencies**

| Risk/Dependency                                                    | Impact | Mitigation/Contingency                                                                    |
| ------------------------------------------------------------------ | ------ | ----------------------------------------------------------------------------------------- |
| Change to public contract of vets-api                              | Medium | Reach out to leads, get their feedback. See if we need to do architecture intent for this |
| Dynamic content appearing on page; potential accessibility concern | Medium | Include accessibility specialists as part of SDLC.                                        |

# **Architecture and Design**

The technique used by the Simple Forms Upload tool is demonstrated [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/shrine/plugins/validate_correct_form.rb). In there, they pass the uploaded document to MiniMagick, which converts the file to a jpg
with specific values to improve OCR. Then, that jpg is passed to RTesseract which can extract the text content of that
file. It then checks if the form id is present in that text content.

The jpg is a temporary file; it is always deleted afterwards.

We'll need to make sure the approach can be copied over from Shrine to CarrierWave, which are the libraries used to upload
the files.

# **Technical Breakdown**

The following table demonstrates a low-level breakdown of the work that should ultimately evolve into tickets that are workable by the team.

_Medium Confidence Anticipated Level of Effort: 2 Sprints, 2 engineers_

| Number | Title                                                                    | Description | Special Notes |
| ------ | ------------------------------------------------------------------------ | ----------- | ------------- |
| 1      | Prepare Security & Engineering Checklist                                 | --          | --            |
| 2      | Create feature flag - disability_526_bdd_sha_document_validation_enabled | --          |
| 3      | Update vets-json-schema for new form id parameter                        | --          | --            |
| 4      | Update vets-api to use new form id parameter to validate document        | --          | --            |
| 5      | Update vets-website to pass new form id and render alert - low-fidelity  | --          | --            |
| 6      | Update vets-website to utilize high-fidelity mockups                     | --          | --            |
| 7      | Bug bash                                                                 | --          | --            |
| 8      | Fixes from bug bash (Allocate 3 stories)                                 | --          | --            |

# **Out of Scope**

- This will only apply to the SHA Part A document; no other documents will be included.
- This will only apply to SHA Part A documents uploaded on the new BDD SHA flow; existing SHA's uploading on the
  additional evidence page will not be included.

# **Discussions / Frequently Asked Questions**

# **Glossary / Acronyms**

| Term                                     | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Benefits Delivery at Discharge (BDD)** | Service members who are separating and plan to file for disability compensation can file their claim before separation through the Benefits Delivery at Discharge (BDD) program. The BDD program allows Service members to apply for VA disability compensation benefits between 180 to 90 days prior to separation. This timeframe permits VA to review Service Treatment Records (STRs), schedule needed exams and evaluate the claim before separation. BDD's goal is to deliver a decision within 30 days after separation. [Source](https://benefits.va.gov/BENEFITS/benefits-delivery-discharge-program.asp) |
| **Separation Health Assessment (SHA)**   | A medical assessment document completed during military service that provides clinical information for disability claims evaluation. SHA Part A is commonly referenced in the BDD process and corresponds to the DBQ (Disability Benefits Questionnaire) document type L702 in VA systems.                                                                                                                                                                                                                                                                                                                         |

# **References**

- [Form 21-526EZ](https://www.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
- [New (v3) file upload component code](https://github.com/department-of-veterans-affairs/vets-website/blob/712ab3d6cbcc07a449019d2d734ef37b758240db/src/platform/forms-system/src/js/web-component-patterns/fileInputPattern.jsx)
- [Old (v1) file upload component code](https://github.com/department-of-veterans-affairs/vets-website/blob/712ab3d6cbcc07a449019d2d734ef37b758240db/src/platform/forms-system/src/js/definitions/file.js)
- [Simple Form Upload Example](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/shrine/plugins/validate_correct_form.rb)

# **Appendix**
