# CHAMPVA Status Tool – Release Scope

This document outlines the planned releases for the CHAMPVA Status Tool and clarifies what capabilities are **in scope and out of scope for each release**.

The Status Tool will be delivered incrementally to allow applicants to gain visibility into their application processing while additional system integrations are completed.

---

# Release 1 — MyVA Submission Visibility

## Goal
Allow applicants to confirm that their CHAMPVA application was successfully submitted.

This release focuses on **submission-level visibility only**.

MyVA 2.0
## In Scope

- CHAMPVA applications appear in **MyVA** after submission.
- Basic application states such as:
  - Draft
  - Submission In progress
  - Received
  - Action Needed
- Compatibility with **both Old MyVA and New MyVA interfaces**.

## Out of Scope

- Application processing status
- Evidence requests
- Evidence uploads
- Eligibility information
- Decision or rejection details


MyVA 3.0
## In Scope
- Navigation from **MyVA to the CHAMPVA Status Tool**.
---

# Release 2 — PEGA Processing Status

## Goal
Allow applicants to see the **current processing state of their CHAMPVA application**.

This release integrates the Status Tool with the **PEGA Reporting API**.

## In Scope

- Backend integration with the **PEGA Reporting API**.
- Retrieval of application processing status using **form_uuid correlation**.
- Mapping PEGA workflow states to Status Tool states.
- Rendering CHAMPVA application status:
  - on the **Status Tool homepage card**
  - on the **detailed application status page**.
- Basic processing steps such as:
  - Application received
  - Application under review
  - Application completed.

## Out of Scope

- Evidence request visibility
- Evidence uploads
- Eligibility display
- Rejection reason display
- Beneficiary-level status information

---

# Release 3 — Evidence Request Visibility

## Goal
Allow applicants to see when additional documentation is required for their application.

This release integrates the Status Tool with **VES evidence request data**.

## In Scope

- Integration with **VES APIs** for evidence request information.
- Display of **evidence request indicators** in the Status Tool.
- Messaging informing applicants that additional documentation is required.

## Out of Scope

- Uploading documents through the Status Tool
- Detailed deficiency explanations
- Eligibility display
- Rejection reasoning

---

# Release 4 — Evidence Upload Capability

## Goal
Allow applicants to respond to evidence requests digitally through the Status Tool.

## In Scope

- Evidence upload UI within the Status Tool
- Backend services to process uploaded documents
- Association of uploaded documents with the correct application

## Out of Scope

- Uploads unrelated to evidence requests
- Changes to CHAMPVA document processing workflows
- Eligibility display
- Rejection reason display

---

# Release 5 — Eligibility Visibility

## Goal
Allow applicants and beneficiaries to see CHAMPVA eligibility results.

## In Scope

- Retrieval of eligibility information from **VES**
- Display of eligibility status for applicants and beneficiaries
- UI patterns for showing eligibility outcomes

## Out of Scope

- Appeals workflows
- Eligibility dispute handling
- Changes to eligibility determination logic

---

# Release 6 — Decision & Rejection Details

## Goal
Provide clear explanations when an application is denied or requires further action.

## In Scope

- Retrieval of decision outcomes from **VES**
- Mapping decision codes to user-friendly explanations
- Display of rejection reasons in the Status Tool

## Out of Scope

- Appeals submission
- Policy changes to CHAMPVA decision logic
- Appeals workflow management

---

# Key Architectural Considerations

Several system constraints influence the phased delivery of the Status Tool:

- **PEGA** provides application processing workflow status.
- **VES** provides evidence requests, eligibility information, and final decision data.
- VES currently operates on a **person-centric model rather than an application-centric model**, which introduces additional complexity for mapping beneficiaries to submissions.

These constraints require the Status Tool to separate **submission status** and **eligibility status** into different releases.

---

# Why the Status Tool Is Delivered Incrementally

Delivering the tool in phases allows the VA to:

- Provide early visibility into application processing.
- Reduce support calls about application status.
- Avoid blocking progress on external system dependencies.
- Safely integrate complex eligibility and beneficiary data.
