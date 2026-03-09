# Access VA on VA.gov - Identity concerns

## Current Understanding 
Access VA authentication is expected to move off legacy SSOe and into ICAM’s External SSO infrastructure. External SSO (Okta) will fully replace SSOe and own authentication initiation and redirect without requiring VA.gov USiP configuration.
- AccessVA is transitioning from IAM SSOe (IBM Security Verify Access) to ICAM External SSO (Okta).
- A new static VA.gov content page (“AccessVA tools and services”) will replace the legacy AccessVA landing page.
- Application links will be updated to direct users through the External SSO authentication flow as each app migrates.

### Synthesis
If the new flow does not require VA.gov to initiate or manage OAuth, and all redirect handling is fully owned by ICAM External SSO, then additional frontend work from Identity may not be required.
  
## Identity Concerns

### Identity Scope Clarifications
VA.gov Identity owns:
- Unified Sign-in Page (USiP)
- OAuth initiation
- Sign-in Service routing and post-authentication redirects
- Application configuration registry
- Verification enforcement (e.g., IAL2)
- Authentication monitoring within VA.gov

### Risks
Until engineering validation occurs, the following risks remain unconfirmed:
- Misalignment of OAuth initiation responsibility
- Redirect incompatibility
- Missing application configuration requirements
- Inconsistent verification enforcement
- Loss of login attribution or monitoring
- Unexpected behavior when legacy AccessVA infrastructure is retired

### Purpose of this Document
This document is not opposition to the migration strategy. It purely for due diligence from the Identity team to ensure:
- No unexpected login failures
- No redirect regressions
- No enforcement gaps
- No post-launch rework

To ensure alignment, a brief technical validation would confirm:
1. Who initiates OAuth?
2. Where is the source of truth for redirect URLs?
3. How are application identifiers passed?
4. How are failed login attempts attributed?
5. Does VA.gov need to be aware of these apps in configuration?
6. How does IAL2 enforcement behave in this model (if required)?
7. What happens to the page below when legacy Access VA infrastructer retires? <img width="1431" height="554" alt="Screenshot 2026-02-27 at 3 15 40 PM" src="https://github.com/user-attachments/assets/d5f3d21f-5936-4580-b696-00575772f9c8" />
