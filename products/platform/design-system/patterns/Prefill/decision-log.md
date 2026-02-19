# Prefill Pattern - Decision Log
Last updated: 12/16/2025

This document outlines the key design decisions made for implementing [Prefill pattern](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system/src/js/patterns/prefill). These Architecture Decision Records (ADRs) capture the context, decisions, and consequences of our design choices to ensure consistency and provide guidance for future development.


- [ADR: 001 - Success Alert messages](#ADR-001---Success-Alert-messages)
- [ADR: 002 - Optional vs Required label](#ADR-002---Optional-vs-Required-label)
- [ADR: 003 - Minimal header back button](#ADR-003---Minimal-header-back-button)
- [ADR: 004 - Option to update only mailing address to either form or profile](#ADR-004---Option-to-update-only-mailing-address-to-either-form-or-profile)
- [ADR: 005 - Routing behavior](#ADR-005---Routing-behavior)
- [ADR: 006 - Replace platform component ContactInfo component with Prefill ContactInfo](#ADR-006---Replace-platform-component-ContactInfo-component-with-Prefill-ContactInfo)
- [ADR: 007 - Error summary alert](#ADR-007---Error-summary-alert)




## ADR 001 - Success Alert messages

### Status: Complete

- Date issue raised:12/15/2025
- Decision date:

### Context
Currently the success alerts are within the card, the designs show the alerts on above the cards. 

### Decision
Move success alerts outside of the card.

### Consequences

### Open Questions
N/A

## ADR 002 - Optional vs Required label

### Status: Complete

- Date issue raised:12/15/2025
- Decision date:

### Context
Currently the cards show if a section is Optional, to keep with the design patterns, we are changing this to show required.

### Decision
Show required next to required questions, and removed optional next to questions

### Consequences


### Open Questions
N/A

## ADR 003 - Minimal header back button

### Status: Complete

- Date issue raised:12/15/2025
- Decision date:

### Context
If the form is using minimal header and the user is editing a card from the edit page, the back link takes the user away from the form.  We are proposing to take the user back to the card page. 

### Decision
Update breadcrumb on edit pages, so they return to the previous page.

### Consequences


### Open Questions
N/A

## ADR 004 - Option to update only mailing address to either form or profile

### Status: Complete

- Date issue raised:12/15/2025
- Decision date:

### Context
Give users the option to select if they want to update their mailing address for the form or their profile. Use cases for this is for temporary addresses when the user is away from their permanent home address but would want to get a prescription refill in their current mailing address.

### Decision
Add radio that allows users to select whether they want changes on profile or form

### Consequences

### Open Questions
Do we want to implement this option for any other editable prefill sections?

## ADR 005 - Routing behavior

### Status: Complete

- Date issue raised:1/15/2026
- Decision date:

### Context
The API calls within the prefill pages require that a user follow the Happy Path (clicking the Continue buttons to proceed through the form). If the user enters the URL of a form page directly, or if they navigate to a form page and hit the refresh button, data from the SiP endpoint gets lost.

### Decision
Introduce logic that reroutes the user to the /intro page if they do either of the above to enforce the happy path.

### Consequences


### Open Questions
N/A

### ADR 006 - Replace platform component ContactInfo component with Prefill ContactInfo

### Status: Proposed

- Date issue raised:2/18/2026
- Decision date:

### Context

### Decision


### Consequences


### Open Questions
N/A

### ADR 007 - Error summary Alert

### Status: Proposed

- Date issue raised:
- Decision date

### Context
When discussing how multiple errors would be surfaced if there are several areas with required fields missing, the error summary experimental ticket was brought up to address possible focus issues. Currently the error only shows within the card itself, with the card state changed to error.

### Decision


