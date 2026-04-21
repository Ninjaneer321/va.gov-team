# Platform authentication

Platform authentication covers the backend infrastructure, services, and integrations that power secure sign-in for VA.gov. The Identity team owns and maintains these components in partnership with credential service providers and VA platform teams.

**Slack channel:** [#identity-support](https://dsva.slack.com/archives/CSFV4QTKN)

---


## Current initiatives
**Objective:** Veterans access services through a secure and modern system with fewer disruptions as old infrastructure is retired.

| Initiative | Description |
|-----------|--------|
| [Oracle Health transition assistance](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/vsp/teams/Identity/Product%20Documentation/Oracle%20Health) | Support the transition of Oracle Health facilities to VA.gov authentication. |
| IAL2 for new users | Release IAL2 identity verification requirement for new users to production. |
| Sign-in Service migrations  | Moving VA services from legacy SSOe authentication to Sign-in Service. |

---

## Related components

| Component | Description |
|-----|-------------|
| Backend infrastructure | Overview of user authentication and authorization on VA.gov |
| [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/platform-authentication/sign-in-service/readme.md) | OAuth 2.0 authentication service for VA.gov |
| STS integrations | VA services that authenticate with Sign-in Service using the service account authorization flow. |
| [Security](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Documentation/Security/readme.md) | Logging and monitoring, fraud mitigation, security policies and compliance |
| [Identity policies](https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication#Authentication-LevelsofAssurance) | Standards for identity verification on the VA.gov platform |
| Frontend platform | Frontend platform experience for signing in to VA online services |

---

## External integrations
VA Platform integrations with third party service providers managed by the Identity team.
| Reference guide | Description |
|-----------|--------|
| [ID.me integration](https://depo-platform-documentation.scrollhelp.site/developer-docs/id-me) | ID.me is a credential service provider (CSP) for VA.gov applications and services. |
| [Login.gov integration](https://depo-platform-documentation.scrollhelp.site/developer-docs/login-gov) | Login.gov is a government-wide credential service provider (CSP) that allows veterans to securely access VA.gov applications and services using a unified login.  |
| [MPI integration](https://depo-platform-documentation.scrollhelp.site/developer-docs/mvi) | The Master Person Index (MPI) contains the golden record for a VA-affiliated individual (not always a Veteran) and links their identity across systems. |
| [SSOe integration](https://depo-platform-documentation.scrollhelp.site/developer-docs/ssoe) | Single Sign-on External (SSOe) is an enterprise authentication solution for external users (Veterans, caregivers, etc.) to access VA.gov applications from outside the VA network. |
