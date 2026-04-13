## Engineering Checklist

- Product description
    + Brief overview of motivation for the change from an engineering & security point of view
        + Ask VA research outcomes support inbox enhancements. During design activities, VA Design System (VADS) guidance was identified for Ask VA to adopt the new standard for implementation.
    + Link to Collaboration Cycle Request issue
        + https://github.com/department-of-veterans-affairs/va.gov-team/issues/131991
- UX design description
    + For user-facing changes, link to UX prototype or wireframes if available
        + https://design.va.gov/components/search-filter
    + Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]
        + None
- Frontend changes
    + Identify any significant code changes.  Does this add a new function, or substantially refactor existing code?
      - Yes. We refactored existing code into modules and added unit tests to ensure reliability. Next, we added a feature toggle to keep new features hidden. Then we created parallel components for each new feature, using Test-Driven Development to update functionality piece-by-piece so that the old and new code both remain stable.
    + Identify any new design system components needed or changes to current components
      - The only change we need is for the `VaSearchFilters` design system component. Our Product owner has expressed interest in having it default to having all filteres collapsed upon page load on small screens (mobile), but the component itself is hard-coded to have them all be expanded on page load. We are investigating short-term workarounds and planning to submit a support ticket to the VADS team for a more permanent fix.
    + Does this update change shared code?
      - No
    + Describe any product analytics being gathered.  How will errors in the FE system be detected?
      - We will use DataDog RUM to gather FE error. Google Analytics and DataDog RUM are used for product analytics gathering
- Backend changes
    + Does the project introduce any new or unusual infrastructure dependencies?
      - No 
    + Does the project introduce any new connections or exchanges of new information types with other systems? (e.g. "new" meaning a new connection of type of information not already present in `vets-api`)
      - No 
    + Do you need to poll any APIs for status?  How is API success or failure determined?
      - No 
    + Are you handling all failure and error cases while in custody of your users's data?
      - Yes
    + Does this update change shared code?
      - No 
    + What information will be captured in logs or metrics?
      - N/A
    + Does this project/update involve user-uploaded data? Are user-uploaded files being scanned for viruses?
      - No 
    + Does this project/update generate intermediate or "temporary" files during processing? If so, where and how are the temporary files materialized? What is the cleanup/removal process or mechanism?
      - No 
- Internal API changes
    + List new or modified APIs in `vets-api`
      - N/A 
    + Are you deprecating or removing any APIs?
      - N/A 
    + Do you have API documentation?
      - N/A 
    + Describe expected call patterns
      - N/A 
    + Are there new endpoints or services that require rate limiting or throttling?
      - N/A 
    + Are there any third party integrations, and how are they vetted?
      - N/A 
    + Are there any new scheduled/cron jobs? If so, how are their intervals and impact considered? (especially with regard to periods of higher traffic or times when Sidekiq and infrastructure is already handling a high volume of jobs?)
      - N/A 
    + Is schema validation enforced (ex: using the vets-json-schema repo)?
      - N/A 
- External API changes
    + List new or modified APIs for upstream or external systems
      - N/A 
    + Describe expected call patterns
      - N/A 
    + What PII or PHI will be transmitted to/from the external systems?
      - N/A 
- Background jobs
    + List any required background processing
      - N/A 
    + Describe error and dead letter handling
      - N/A 
- Data storage
    + Describe new or modified databases, tables or columns
      - N/A
    + Describe indexes and constraints
      - N/A 
    + Identify PII and PHI and where and how it will be stored, processed, expired and deleted
      - N/A 
    + Is this change introducing a large or new volume of data?
      - N/A
    + Do these changes impact database or caching layers (ex: Redis, Postgres)? Do the changes have implications for data volume, memory, or CPU usage to consider?
      - N/A
    + Does this project/update expect to persist information? What is the expiration policy for data added to the system? What is the cleanup/removal process or mechanism?
      - N/A
- Libraries and dependencies
    + List new or updated dependencies
      - N/A
- Metrics, logging, observability, alerting
    + Identify key areas to monitor
    + Are you introducing any custom metric tags? Have you considered their cost and potential cardinality? High cardinality = higher cost
      - N/A
    + Are there any sensitive data risks with logging?
      - N/A
- Infrastructure and network changes
    + List any changes or additions
      - N/A
- Test strategy
    + Describe automated, manual and user acceptance test strategy
      - N/A New unit tests have been added to cover new FE components that were created as part of this initiative
    + Describe required test data and test user accounts
    + 
- Rollout plan
    + List scope of any feature flags
      - `ask_va_enhanced_inbox` - Used to enable users to view the new `/inbox` route. Also updates the `/introduction` page as that will no longer be where the Inbox components live. Updated landing page content will be displayed when the feature flag is enabled instead
    + Identify other teams to coordinate with
      - N/A
    + Describe rollback plan
      - In the case of a production issue, the `ask_va_enhanced_inbox` feature flag will be disabled. This will roll all users back to the old inbox experience
- Internal administration tasks
    + What maintenance or administration tasks do you anticipate will need to be performed periodically?
      - N/A
    + Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.)
      - N/A
- AI Governance
    + Identify if the software meets the [definition for an AI Use Case](https://dvagov.sharepoint.com/:u:/r/sites/oitchiefaiofficerteam/SitePages/AI-Inventory.aspx?csf=1&web=1&e=TBIcEf)
      - No
    + If the software qualifies as an AI Use Case, submit an [AI Use Case Intake Form](https://dvagov.sharepoint.com/:u:/r/sites/oitchiefaiofficerteam/SitePages/AI-Inventory.aspx?csf=1&web=1&e=TBIcEf)

---

## Security Review Checklists

Please complete all of Part 1 before submitting for Architechture Intent Review. Part 2 will be due before Staging Review. 

---

## Part 1: Architecture Review Checklist

*Purpose: Validate security design decisions before implementation begins*

### 1. Product Overview

- [x] **Problem Statement**: What problem does this product/feature solve?
    + Background

    Ask VA users want to easily and quickly view their submitted questions using; search, filter and sort tooling. The current inbox experience displays submitted questions (also referred to as "inquiries") in a grid format, with a card representing each inquiry. The cards do not display in a user friendly way,         often leaving users confused of the order their information is displayed. Users want the ability to filter their inquiries by category type, status and sort by newest to oldest or oldest to newest.

    + Solution

    Update the Ask VA inbox by implementing the VADS guidance and new standard.

- [x] **Scope Definition**: Which portions of the architecture are in-scope for this review?

    + Front end changes only.

### 2. Authentication & Authorization

- [x] Is this feature authenticated or unauthenticated?
    + Authenticated
- [x] If authenticated, document the authentication flow in the sequence diagram
- [x] What authorization model is used (RBAC, ABAC, etc.)?
    + [User Authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/auth/authentication-and-authorization-simplified.md)

**Authenticated Experience Team Questions**
- [x] Are you adding a product or feature to My VA or profile?
      - No
- [ ] Will your product write back or read from any information in profile?
      - No
- [ ] Do any of your APIs integrate with My VA or profile?
      - No

If you answered yes to any of the Authenticated Experience Team Questions, please contact the Authenticated Experience Team via their slack channel, [#accountexp-authexp](https://dsva.slack.com/archives/C909ZG2BB)

### 3. Data Classification

- [X] What data is collected or used?
      - None
- [x] Is PHI (Personal Health Information) captured?
      - No
  - [x] Encryption approach documented
        - N/A
- [x] Is PII (Personally Identifiable Information) captured?
      - No
  - [x] Encryption approach documented
        - N/A
- [x] Is other PI (Personal Information) captured?
      - No
  - [x] Can sensitive information be scrubbed?
        - N/A

### 4. Cookies & Session Management

- [x] Are cookies being used?
      - No
  - [x] New cookies: Justify why existing cookies cannot be reused
        - N/A
  - [x] Modified cookies: Document the changes
        - N/A
  - [x] Existing cookies: Confirm intended behavior
        - N/A

### 5. API Endpoints

- [x] List all new application endpoints (front-end and back-end)
      - /contact-us/ask-va/inbox
- [x] For each endpoint, document:
  - [x] Potential abuse scenarios by unauthorized parties
    - N/A The new page can only be viewed by authenticated users and there is no way to manipulate the URL to attempt to access data not owned by the logged in user
  - [x] Mitigation plan for each abuse scenario
        - N/A

### 6. Logging Strategy

- [x] Is new logging data being captured?
      - No
  - [x] What data is captured?
        - N/A
  - [x] How is it captured?
        - N/A
  - [x] Where is it stored?
        - N/A
  - [x] Confirm no sensitive data in logs
        - N/A

### 7. Security Approach

- [x] Document security implementations considered
      - N/A
- [x] Document the chosen approach with rationale
      - N/A
- [x] Identify any new libraries or components not yet in the codebase
      -  None
  - [x] Selection criteria and justification
        - N/A

### 8. AI Governance
- [x] Does this software meet the [definition of AI](https://dvagov.sharepoint.com/:u:/r/sites/oitchiefaiofficerteam/SitePages/AI-Inventory.aspx?csf=1&web=1&e=TBIcEf) to be included in the AI Use Case Inventory?
      - No
    - [x] If yes, please list the AI Use Case ID and date of submission to the AI Inventory. The AI Governance team will provide you an AI Use Case ID via email upon submission of the [AI Use Case Intake form](https://dvagov.sharepoint.com/:u:/r/sites/oitchiefaiofficerteam/SitePages/AI-Inventory.aspx?csf=1&web=1&e=TBIcEf). If you have other questions, contact [OITAIInventory@va.gov](mailto:OITAIInventory@va.gov)

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
