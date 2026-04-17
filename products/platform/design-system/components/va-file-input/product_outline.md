# va-file-input Component — Product Outline

[Mock Form Example:](https://staging.va.gov/mock-form-patterns/upload-file)

## Overview
- va-file-input is the VA Design System web component for file uploads on VA.gov forms. It is either `va-file-input` (single file) and `va-file-input-multiple`and replaces the legacy custom-React `FileField`. 
- The component owns the upload UI (drag-and-drop, preview card, progress, error, password entry for encrypted PDFs) while decryption, file-type validation, and backend submission live in the forms library and the Simple Forms API.

## Problem Statement
- Veterans upload files on dozens of VA.gov forms:  medical records, service records, proof documents, supporting evidence for disability claims, receipts, pension documentation.
- Before `va-file-input`, each forms team used the legacy `FileField` or built a React uploader, producing inconsistent UX, divergent accessibility behavior, and duplicated validation and password-handling code.
- The new `va-file-input` web component consolidates the upload UX into the VA Design System and pairs it with shared forms-library utilities. 

**How might we** Deliver a single, accessible file-input component that clearly separates presentation from business logic, supports single and multiple uploads with encrypted-PDF handling, and retires the legacy `FileField` across the VA.gov forms portfolio?

## Desired User Outcomes
- Veterans see the same file-upload UX across every VA.gov form (drag-and-drop, file card, progress, errors)
- Encrypted-PDF uploads work consistently with a clear password flow
- Screen-reader users get accurate announcements in both upload and review states 
- Multi-file uploads (e.g., supporting docs for disability claims) handle per-file errors, passwords, and document-type selection without confusion
- Error messages are specific and actionable ("The file extension doesn't match the file format", "Password cannot be blank", "File is required")

## Undesired User Outcomes
- Veterans see inconsistent file-input UX across forms
- Screen-reader users can't perceive the selected document type in review state
- Password flow traps Veterans in an unclear state when the backend rejects their password
- Multi-file uploads lose per-file context when one file fails
- Teams bypass the component and reintroduce the legacy FileField

## Desired Business Outcomes
- All VA.gov forms that accept file uploads migrate from `FileField` to `va-file-input` / `va-file-input-multiple`
- Shared forms-library utilities (`standardFileChecks`, `getFileError`, `passwordErrorState`) eliminate per-form validation duplication
- Simple Forms API owns conversion (JPG/PNG/GIF/BMP/TXT/HEIC → PDF), decryption, and Benefits Intake submission, not individual forms


## Undesired Business Outcomes
- `FileField` lingers in the codebase alongside `va-file-input` indefinitely
- Teams ship custom decryption logic in the browser instead of using platform utilities 

## Measuring Success

### Key Performance Indicators (KPIs)

*Data sources: GitHub (component-library, vets-website, vets-design-system-documentation repos), Simple Forms API logs, Lighthouse Benefits Intake metrics, Datadog upload-error rates, quarterly forms-team survey.*

| Category | Ease of Use | Service Completion | Trust/Satisfaction | Health |
|---|---|---|---|---|
| Metric | File-upload success rate | Forms migrated from `FileField` to `va-file-input` | Forms-team CSAT on component | Open P1/P2 bugs + WCAG failures closed |

#### Baseline KPI Values

| Metric | Baseline | Source | Target |
|---|---|---|---|
| Forms using `va-file-input` / `va-file-input-multiple` | TBD — enumerate against all file-upload forms | vets-website grep for `VaFileInputField` / `VaFileInputMultipleField` | 100% of file-upload forms by end of FY26 |
| Forms still using legacy `FileField` | TBD — enumerate | vets-website grep for `FileField` | 0 (deprecate `FileField`) |
| Open P1/P2 bugs | TBD — count open issues in component-library + vets-design-system-documentation | GitHub | 0 > 30 days |


### Objectives and Key Results (OKRs)
Maps to FY26 Design & Forms Systems OKRs:
- ✅ **Obj 1 (Optimize software delivery for Veteran impact)** Migrating off `FileField` removes duplicate code across every form that accepts uploads
- ✅ **Obj 2 (Operate products with high reliability and security)** — centralized validation, backend-side decryption (ADR-001), server-side conversion (ADR-003), and WCAG fixes (ADR-002, ADR-005) all harden the upload path



#### Communications
- Slack: **#platform-design-system**
- Component source: [component-library](https://github.com/department-of-veterans-affairs/component-library)


#### Team Members
- VA Product Owner: Matthew Dingee
- Program Manager: Megan Siddle (Oddball)
- Lead PM: Tricia Baker (Oddball)
- Technical Lead (Forms Library): Robert Hassell (Oddball)
- Technical Lead (Design System): Amy Leadem (Wilcore)
- Designers: Barb Denney, Dan Brady, Jeana Clark
- `va-file-input` DRI: TBD — confirm with Amy Leadem (likely component-library owner)

#### Stakeholders
- All VA.gov forms teams that accept uploads (disability 526EZ, CHAMPVA 10-10d / 10-7959a / 10-7959C, pensions, medical records, etc.)
- claim-statusteam 
- Simple Forms API / Lighthouse Benefits Intake teams
- VA accessibility office (ADR-002, ADR-005 a11y fixes)
- Teams migrating off legacy `FileField`
- CIA (content standards for error messages)
