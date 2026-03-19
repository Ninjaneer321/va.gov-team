# Engineering and Security Checklist

## Instructions

Your document should be brief and high-level.  Please keep it to a single page.  Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

Some of the items below may not apply to your work--that's okay.  You may not be able to fill in some items that _do_ apply to your work--that's also okay.  If you don't have answers, please come to the Architecture Intent ready to ask questions.

More information about Engineering and Security standards is available in the [Launch-Blocking Security Issues section](https://depo-platform-documentation.scrollhelp.site/getting-started/platform-security-and-authority-to-operate-ato#PlatformSecurityandAuthoritytoOperate(ATO)-Launch-BlockingSecurityIssues) of the [Platform Security and Authority to Operate document](https://depo-platform-documentation.scrollhelp.site/getting-started/platform-security-and-authority-to-operate-ato) on Platform website.

## Engineering Checklist

- Product description
    + Brief overview of motivation for the change from an engineering & security point of view
    + Link to Collaboration Cycle Request issue **(Ask VA will have multiple iterations of this initiative and will include all CC links for reference, not every CC requires an architecture intent review)**,
    + [CC Request Iteration 1 - Arch intent not required](https://github.com/department-of-veterans-affairs/va.gov-team/issues/133300)
- UX design description
    + For user-facing changes, link to UX prototype or wireframes if available, [Wireframes](https://www.figma.com/design/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Future-exploration?node-id=2552-36644&t=FxIyQxbSty9sEKdG-1)
    + Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]
- Frontend changes
    + Identify any significant code changes.  Does this add a new function, or substantially refactor existing code?
    + Identify any new design system components needed or changes to current components, none
    + Does this update change shared code?
    + Describe any product analytics being gathered.  How will errors in the FE system be detected?
- Backend changes
    + Does the project introduce any new or unusual infrastructure dependencies?
    + Does the project introduce any new connections or exchanges of new information types with other systems? (e.g. "new" meaning a new connection of type of information not already present in `vets-api`)
    + Do you need to poll any APIs for status?  How is API success or failure determined?
    + Are you handling all failure and error cases while in custody of your users's data?
    + Does this update change shared code?
    + What information will be captured in logs or metrics?
    + Does this project/update involve user-uploaded data? Are user-uploaded files being scanned for viruses?
    + Does this project/update generate intermediate or "temporary" files during processing? If so, where and how are the temporary files materialized? What is the cleanup/removal process or mechanism?
- Internal API changes
    + List new or modified APIs in `vets-api`
    + Are you deprecating or removing any APIs?
    + Do you have API documentation?
    + Describe expected call patterns
    + Are there new endpoints or services that require rate limiting or throttling?
    + Are there any third party integrations, and how are they vetted?
    + Are there any new scheduled/cron jobs? If so, how are their intervals and impact considered? (especially with regard to periods of higher traffic or times when Sidekiq and infrastructure is already handling a high volume of jobs?)
    + Is schema validation enforced (ex: using the vets-json-schema repo)?
- External API changes
    + List new or modified APIs for upstream or external systems
    + Describe expected call patterns
    + What PII or PHI will be transmitted to/from the external systems?
- Background jobs
    + List any required background processing
    + Describe error and dead letter handling
- Data storage
    + Describe new or modified databases, tables or columns
    + Describe indexes and constraints
    + Identify PII and PHI and where and how it will be stored, processed, expired and deleted
    + Is this change introducing a large or new volume of data?
    + Do these changes impact database or caching layers (ex: Redis, Postgres)? Do the changes have implications for data volume, memory, or CPU usage to consider?
    + Does this project/update expect to persist information? What is the expiration policy for data added to the system? What is the cleanup/removal process or mechanism?
- Libraries and dependencies
    + List new or updated dependencies
- Metrics, logging, observability, alerting
    + Identify key areas to monitor
    + Are you introducing any custom metric tags? Have you considered their cost and potential cardinality? High cardinality = higher cost
    + Are there any sensitive data risks with logging?
- Infrastructure and network changes
    + List any changes or additions
- Test strategy
    + Describe automated, manual and user acceptance test strategy
    + Describe required test data and test user accounts
- Rollout plan
    + List scope of any feature flags
    + Identify other teams to coordinate with
    + Describe rollback plan
- Internal administration tasks
    + What maintenance or administration tasks do you anticipate will need to be performed periodically?
    + Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.)
- AI Governance
    + Identify if the software meets the [definition for an AI Use Case](https://dvagov.sharepoint.com/:u:/r/sites/oitchiefaiofficerteam/SitePages/AI-Inventory.aspx?csf=1&web=1&e=TBIcEf)
    + If the software qualifies as an AI Use Case, submit an [AI Use Case Intake Form](https://dvagov.sharepoint.com/:u:/r/sites/oitchiefaiofficerteam/SitePages/AI-Inventory.aspx?csf=1&web=1&e=TBIcEf)

---

## Security Review Checklists

Please complete all of Part 1 before submitting for Architechture Intent Review. Part 2 will be due before Staging Review. 

---

## Part 1: Architecture Review Checklist

*Purpose: Validate security design decisions before implementation begins*

### 1. Product Overview

- [x] **Problem Statement**: What problem does this product/feature solve?

## Problem statement
**Background**

Ask VA users are internally classified by two distinct personas, using Ask VA as a personal user or a business user/veteran liaison.  The current user experience does not promote an obvious distinction between these two users and offers categories and topics that are not relevant for the different user types.  The existing UI experience leads to user confusion on how to complete the form to submit a question.   Additionally, because the two user types are entangled throughout the existing experience there is back end code complexity that should be reduced.

It is not clear to a business user the form options that should be selected to ensure their inquiry is categorized as "business" vs. "personal" so that it is routed property to AVA CRM agents

Current [business vs. personal rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields,%20options%20and%20labels/Business%20vs.%20Personal.md) (unknown to the Ask VA user).

|User Type|Primary Issues|
|:---|:---|
|Personal User|Category and topic lists offer selection reassurance to this user, but the amount of current options causes overload to the user.|
|Business User|Category and topic lists are burdonsome because this user repeats the same selection(s) when using Ask VA.|
|Business User|Current required fields are not neccessary for this user to submit inquiries (i.e. - subject field), forcing additional and duplicative data entry which reduces the user's workflow efficiency.|

**End State Solution**

Decouple the existing form flow into two distinct personal and business user form flows.  Implement a business user form flow tailored to business user needs with focus on minimizing repetative data entry.  Implement a personal user form flow tailored to personal user needs with focus on user experience assurance while reducing category and topic lists overload.

- [ ] **Scope Definition**: Which portions of the architecture are in-scope for this review?

### 2. Authentication & Authorization

- [ ] Is this feature authenticated or unauthenticated?
- [ ] If authenticated, document the authentication flow in the sequence diagram
- [ ] What authorization model is used (RBAC, ABAC, etc.)?

**Authenticated Experience Team Questions**
- [ ] Are you adding a product or feature to My VA or profile?
- [ ] Will your product write back or read from any information in profile?
- [ ] Do any of your APIs integrate with My VA or profile?

If you answered yes to any of the Authenticated Experience Team Questions, please contact the Authenticated Experience Team via their slack channel, [#accountexp-authexp](https://dsva.slack.com/archives/C909ZG2BB)

### 3. Data Classification

- [ ] What data is collected or used?
- [ ] Is PHI (Personal Health Information) captured?
  - [ ] Encryption approach documented
- [ ] Is PII (Personally Identifiable Information) captured?
  - [ ] Encryption approach documented
- [ ] Is other PI (Personal Information) captured?
  - [ ] Can sensitive information be scrubbed?

### 4. Cookies & Session Management

- [ ] Are cookies being used?
  - [ ] New cookies: Justify why existing cookies cannot be reused
  - [ ] Modified cookies: Document the changes
  - [ ] Existing cookies: Confirm intended behavior

### 5. API Endpoints

- [ ] List all new application endpoints (front-end and back-end)
- [ ] For each endpoint, document:
  - [ ] Potential abuse scenarios by unauthorized parties
  - [ ] Mitigation plan for each abuse scenario

### 6. Logging Strategy

- [ ] Is new logging data being captured?
  - [ ] What data is captured?
  - [ ] How is it captured?
  - [ ] Where is it stored?
  - [ ] Confirm no sensitive data in logs

### 7. Security Approach

- [ ] Document security implementations considered
- [ ] Document the chosen approach with rationale
- [ ] Identify any new libraries or components not yet in the codebase
  - [ ] Selection criteria and justification

### 8. AI Governance
- [ ] Does this software meet the [definition of AI](https://dvagov.sharepoint.com/:u:/r/sites/oitchiefaiofficerteam/SitePages/AI-Inventory.aspx?csf=1&web=1&e=TBIcEf) to be included in the AI Use Case Inventory?
    - [ ] If yes, please list the AI Use Case ID and date of submission to the AI Inventory. The AI Governance team will provide you an AI Use Case ID via email upon submission of the [AI Use Case Intake form](https://dvagov.sharepoint.com/:u:/r/sites/oitchiefaiofficerteam/SitePages/AI-Inventory.aspx?csf=1&web=1&e=TBIcEf). If you have other questions, contact [OITAIInventory@va.gov](mailto:OITAIInventory@va.gov)

---

### Required Artifacts for Architecture Review

| Artifact | Requirements |
|----------|--------------|
| **Architecture Diagram** | Show in-scope components, internal dependencies, external dependencies, and security approach rationale |
| **Sequence Diagram** | Include all authentication steps for authenticated experiences |
| **Data Flow Diagram** | Document: data collection points, storage locations and encryption, transfer methods and encryption, access permissions (read/read-write), audit trail |
| **API Documentation** | Swagger/OpenAPI spec with new endpoints explicitly identified |
| **Release Plan** | "Planning" sections completed for Phase I, Phase II, and Go Live |
| **Product Outline** | Link to product outline document |

---

## Part 2: Staging Review Checklist

*Purpose: Verify security implementation and operational readiness before deployment*

### 1. Implementation Verification

- [ ] Confirm architecture diagram matches implementation
- [ ] Confirm data flows match approved design
- [ ] Verify all API endpoints match documentation

### 2. Security Controls Validation

- [ ] PHI encryption implemented and verified
- [ ] PII encryption implemented and verified
- [ ] Sensitive data scrubbing functional
- [ ] Cookie implementation matches design
- [ ] Authentication/authorization working as designed

### 3. Monitoring & Detection

- [ ] Dashboards configured to identify and debug application issues
- [ ] Compromise detection mechanisms in place
- [ ] Process isolation verified
  - [ ] Document process and privilege level
  - [ ] Document additional credentials available to process
- [ ] Source/runtime compromise detection capability

### 4. Incident Response Readiness

- [ ] Incident Response Plan documented
- [ ] Points of contact identified for:
  - [ ] Your system
  - [ ] Dependent VA back-ends
- [ ] Code disable/rollback procedure documented
- [ ] Security vulnerability fix timeline defined
- [ ] Product playbook for failure modes (if applicable)

### 5. Logging Verification

- [ ] Logging implemented as designed
- [ ] Log storage location confirmed
- [ ] No sensitive data in logs verified
- [ ] Audit trail functional

### 6. Special Considerations

- [ ] Any additional security concerns to highlight?

### 7. AI Governance

- [ ] If this is an AI Use Case, provide the AI Use Case ID and the Impact Determination from AI Governance

**If this AI Use Case is designated as High-Impact, also provide these artifacts:**
- [ ] AI Impact Assessment and Risk Mitigation Plan
- [ ] AI Lead certification attesting this use case meets all required risk management practices and has been cleared to deploy into production

---

### Required Artifacts for Staging Review

| Artifact | Requirements |
|----------|--------------|
| **Incident Response Plan** | Complete with POCs and vulnerability fix timeline |
| **Dashboard Links** | Functional monitoring dashboards |
| **Code Links** | GitHub links scoped to relevant changes |
| - Front-end | |
| - Back-end | |
| - DevOps | |
| **Updated Release Plan** | All sections complete |
| **Product Outline** | Updated with incident response info and playbook |

---

## Quick Reference: Review Stage Mapping

| Topic | Architecture | Staging |
|-------|:------------:|:-------:|
| Problem/scope definition | :heavy_check_mark: | |
| Security approach decisions | :heavy_check_mark:| |
| Data classification | :heavy_check_mark:| |
| API threat modeling | :heavy_check_mark: | |
| Authentication design | :heavy_check_mark: | |
| Cookie design | :heavy_check_mark: | |
| Architecture/sequence/data flow diagrams | :heavy_check_mark: | |
| Implementation verification | | :heavy_check_mark: |
| Monitoring/dashboards | | :heavy_check_mark: |
| Incident response plan | | :heavy_check_mark: |
| Code links | | :heavy_check_mark: |
| Compromise detection | | :heavy_check_mark: |
| Process isolation verification | | :heavy_check_mark: |


## Where to put this checklist and what to name it

This document should be in markdown and should be shared in this location:
[va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist)

Name the file in the following format:
[team]-[application]-[date]

Team and application should match your Collab Cycle Request ticket (so we know who you are). Date should be supplied in the format MMDDYYYY. All Collab Cycle Request tickets can be found in the [Collaboration Cycle Reviews GH project](https://github.com/orgs/department-of-veterans-affairs/projects/998/views/1). 

Once you've dropped this checklist into this folder, please update your Collab Cycle Request ticket with the location as well as a link to your user data flow document.
