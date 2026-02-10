---
# Research Plan Metadata
title: "Research Plan for [Team, Product, Date]"
date: YYYY-MM-DD
last_updated: YYYY-MM-DD
team: "[Team Name]"
product: "[Product Name]"
product_area: "[e.g., authenticated/unauthenticated]"

# Background Context
background:
  problem_statement: "[What problem is your product trying to solve?]"
  product_location: "[Where is this situated on VA.gov?]"
  user_familiarity: "[New product or iteration?]"
  product_brief_url: "[URL]"

# Research Design
methodology: "[e.g., usability testing, semi-structured interviews, card sort]"
research_format: 
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: "[Location name if applicable]"
    point_of_contact: "[Name if applicable]"
    equipment: "[Equipment details if applicable]"
  moderated: true # Options: true, false
  
# Research Goals & Questions
research_goals:
  - goal_1: "[First research goal]"
  - goal_2: "[Second research goal]"
  - goal_3: "[Third research goal]"

research_questions:
  - "[Research question 1]"
  - "[Research question 2]"
  - "[Research question 3]"
  - "[Research question 4]"
  - "[Research question 5]"

hypotheses:
  - "[Hypothesis 1]"
  - "[Hypothesis 2]"
  - "[Hypothesis 3]"

expected_outcomes: "[How will findings advance the product?]"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "[e.g., lean maximum variation]"
  
  primary_criteria:
    - "[Must-have criterion 1]"
    - "[Must-have criterion 2]"
    - "[Must-have criterion 3]"
    
  secondary_criteria:
    - "[Nice-to-have criterion 1]"
    - "[Nice-to-have criterion 2]"
    
  screener_questions:
    - question: "[Screener question text]"
      qualifying_response: "[Expected answer]"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name]"
  research_dates: "YYYY-MM-DD to YYYY-MM-DD"
  research_review_submission: "YYYY-MM-DD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1"
    key_results: 
      - "[Specific KR if applicable]"
  - objective: "Objective 2"
    key_results:
      - "[Specific KR if applicable]"
      
veteran_journey_phases:
  - "[e.g., Getting Out]"
  - "[e.g., Starting Up]"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Link to related past research]"
    
tags:
  - "[product-area]"
  - "[methodology]"
  - "[participant-type]"
  - "[research-phase]"
---

# Lighthouse Document Upload Migration Planning

**Non-technical TLDR: after we sucessfully submit a Form 526 Submission to EVSS, we send a number of supplmentary documents to support that submission. Those documents currently get sent to an EVSS document upload endpoint; we need to update the code in vets-api to upload them to a new Lighthouse endpoint instead.**

## Key Takeaways
* The mobile team did a lot of the hard work for us
* Once we implement some shared base functionality and a roadmap for "Canary" style rollouts we can work on this concurrently
* BDD Instructions would be a simple, low risk and easy to rollout first job to migrate.
* The Form 0781/a job should ideally be broken up into two jobs (it's a blocker for [creating a mailer to send the veteran if the upload fails](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80042) ), but doesn't _have_ to be to migrate to Lighthouse
* SubmitUploads (Veteran-supplied evidence): the infrastructure around receiving and validating Veteran-uploaded evidence is complicated and in some cases namespaced around EVSS. If we don't care about the namespacing and confusion it could cause, we may not need to change anything but we should consider the implications. I've documented this in detail below.
* In additon to the complex conventions around storing Veteran-uploaded evidence, we are using an additional document validation paradigm (`EVSSDocumentClaimDocument` and `LighthouseDocument`) which I believe we have to continue to use and which we should be aware of and understand for this project. I have also documented this in detail below.

## Project Scope

The following Vets API Sidekiq jobs currently upload Form 526-related documents to EVSS via the [`EVSS::DocumentsService`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/documents_service.rb) :
* [`SubmitForm0781`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/disability_compensation_form/submit_form0781.rb) (submits Form 0781 and/or Form 0781a depending on how the veteran filled out the PTSD questions)
* [`SubmitUploads`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/disability_compensation_form/submit_uploads.rb) (name is a misnomer, actually uploads a single Veteran-supplied evidence document, one runs per document) 
* [`Upload BDD Instructions`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/disability_compensation_form/upload_bdd_instructions.rb) (more or less a static cover sheet we always send with Form 526; it never changes)

We need to update each of these jobs to use the `POST /documents` endpoint on [`Lighthouse's Benefits Documents API service`](https://dev-developer.va.gov/explore/api/benefits-documents/docs?version=current) instead.

_Note: this behaivor was initially implemented by myself in [this draft PR](https://github.com/department-of-veterans-affairs/vets-api/pull/13835). But having since learned a lot more about our confusing Document Upload codebase, I think some of those changes were unecessary._

## Implementation Overview

Most of the work to implement the new Lighthouse Service has already been done by the mobile team with [this API wrapper](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/configuration.rb), which takes care of all of the complex authentication required for working with the Lighthouse API.

I believe the scope of the disability benefit's teams work will include:
* Finding a way to leverage the existing [Lighthouse service wrapper the mobile team built](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_documents/configuration.rb) to send an authenticated request to the `POST /documents` endpoint. In my initial implementation I created a [Form-526 specific service wrapper](https://github.com/department-of-veterans-affairs/vets-api/pull/13835/commits/1c52362257b4f69dbca46cba8d52a18a640409ab) for that but there may be alternatives.
* However we implement the new endpoint, we should do so with DataDog logging and monitoring in mind. We should follow the "Canary" style launch strategy the "Trex" Disability Benefits Team has been using for Lighthouse migrations. TLDR this involves placing the changes behind a Flipper and slowly opening it up to more and more users, and monitoring for issues until all traffic is using the Lighthouse endpoint.
* Note we may run into failures that are unrelated to switching to Lighthouse and may exist already, so will need to consider how we account for those.
* We should implement each of the above jobs separately.
* Each job update should be built behind its own Flipper so we can implement, test, monitor, and iteratively roll them out separately.
* I don't believe making changes to the Veteran-uploaded document infrastructure is 100 percent necessary. *However, failure to do so may result in existing code being namespaced under an 'EVSS' naming convention, which may be confusing for code maintainbility going forward*. I'll expand on this below.

### (Supplemental) Current File Attachment/Document Validation Infrastructure

An unfortunate foil we need to consider when migrating the [SubmitUploads job](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/disability_compensation_form/submit_uploads.rb) (uploading Veteran-supplied evidence to Lighthouse) is the convoluted conventions in our codebase around saving and validating user-supplied documents. This is because in our case much of the model and service class infrastructure is labeled/namespaced as "EVSS".

TLDR:
* When a user uploads a file, we save it to S3 and store its metadata in a `SupportingEvidenceAttachment` record. We retrieve [that record later](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/disability_compensation_form/submit_uploads.rb#L78) when `SubmitUploads` runs so we send that document to EVSS to support a Form 526 submission.
* The storage infrastructure/conventions around `SupportingEvidenceAttachment` are all tied at the top level to a `CarrierWave::Uploader::Base` subclass, [`EVSSClaimUploaderBase`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/uploaders/evss_claim_document_uploader_base.rb).
* That file defines a few details around S3 storage, file size and PDF formatting validations. As far as I can tell all of these would also apply to an upload that will end up in Lighthouse. 


More detail:
Whenever a Veteran uploads a document through one of the few evidence prompts in the Form 526 flow on VA.gov, this is what happens under the hood:
1. The request is sent to the create endpoint that is handled by the [`V0::UploadSupportingEvidencesController`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/upload_supporting_evidences_controller.rb)
2. That controller extends a [`FormAttachmentCreate` concern](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/concerns/form_attachment_create.rb), where a create endpoint is defined and the basic behavior for saving a file to S3 is implemented. This concern is used widely across other file upload controllers in the application.
3. All metadata for document uploads to S3 is stored in the `FormAttachment` model, an STI table.
4.  The `FormAttachmentCreate` concern relies on this [`FORM_ATTACHMENT_MODEL` constant](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/concerns/form_attachment_create.rb#L36) convention, whereby the controller defines which subclass of `FormAttachment` will be created for the attachment.
5. In our case, that subclass is [`SupportingEvidenceAttachment`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/supporting_evidence_attachment.rb)
6. There is also a convention wherby each `FormAttachment` subclass defines a `ATTACHMENT_UPLOADER_CLASS`, which is the service class that defines how uploads are stored in S3
7. In our case, that attachment uploader class is [`SupportingEvidenceAttachmentUploader`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/uploaders/supporting_evidence_attachment_uploader.rb), which inherits from [`EVSSClaimUploaderBase`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/uploaders/evss_claim_document_uploader_base.rb).

`EVSSClaimUploaderBase` is in fact the [`CarrierWave::Uploader::Base` implementation](https://www.rubydoc.info/gems/carrierwave/CarrierWave/Uploader/Base) for storing these documents [via CarrierWave](https://github.com/carrierwaveuploader/carrierwave). It handles file size validations, fixing incorrect extensions in file names, and PDF formatting valdation.


### (Supplemental) EVSSClaimDocument/LighthouseDocument

Confusingly, there is another layer of document validation we are using for _all_ of the documents we are uploading to EVSS (Veteran-supplied evidence, Form 0781, Form 0781a and BDD Instructions). This is a temporary Plain Old Ruby Object with ActiveRecord functionality mixed in called [`EVSSClaimDocument`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/evss_claim_document.rb).

For Form 526 documents we are using this class to essentially do two things:
* Map metadata we will reference when building the request body for the POST to EVSS as is done [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/disability_compensation_form/submit_uploads.rb#L106)
* [Run validations](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/evss_claim_document.rb#L19) around VA document type (e.g. Buddy Statement, Dental document), extension, and PDF formatting. When we go to upload the file to EVSS, we check if it is valid and raise an error if it is not as is done [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/evss/disability_compensation_form/submit_uploads.rb#L84)

Note the mobile team created a Lighthouse version of this, [`LighthouseDocument`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/lighthouse_document.rb), which has some differences and we probably have to use in a similar way. 
