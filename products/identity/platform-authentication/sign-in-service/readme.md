# Sign-in Service (SiS)

Sign-in Service is Identity team's OAuth 2.0 authentication service for VA.gov. It provides a reliable, faster sign-in experience for Veterans and enables VA applications to authenticate users through a standardized set of endpoints. 

For VFS teams looking to learn more about the integration process, review our [SiS onboarding documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service#sign-in-service-sis-overview). 

**Slack channel:** [#identity-support](https://dsva.slack.com/archives/CSFV4QTKN)

---

## Integration guides
If you're a developer who's ready to start building, use the [quickstart guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs#sign-in-service-sis).

| Type | Description |
|-----|-------------|
| [Cookie OAuth guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types/Client%20Auth%20(User)/auth_flows/cookie_oauth.md) | PKCE authorization flow for web applications |
| [API OAuth guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types/Client%20Auth%20(User)/auth_flows/api_oauth.md) | PKCE authorization flow for mobile and API clients |
| [Private key JWT guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types/Client%20Auth%20(User)/auth_flows/private_key_jwt.md) | PKCE-variant  authorization flow leveraging a client-managed private key |
| [Service account guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types/Service%20Account%20Auth%20(STS)/README.md) | API-to-API authorization flow |
| [Device SSO Token Exchange](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types/Client%20Auth%20(User)/auth_flows/device_sso_token_exchange.md) | Single sign-on for creating a new session to continue using the application across clients |

---

## Technical reference

| Type | Description |
|-----|-------------|
| [Authentication types](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types) | Technical reference for configuration setups, flow diagrams, specific endpoint requests and response formats. |
| [Postman documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/identity_postman.md) | Documentation for a postman collection that can be used to test different Idenitity-relevant routes. |
| [Example SiS Sinatra client template](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Identity%20Team%20Integrations/SiS%20Example%20App) | A lightweight client written in Sinatra to model a Sign in Service integration. |
| [Example SiS Ruby client template](https://github.com/department-of-veterans-affairs/sign-in-service-rb) | A lightweight client written in Ruby to model a Sign in Service integration. |
| [Example SiS Javascript client template](https://github.com/department-of-veterans-affairs/sign-in-service-client-js) | A lightweight client written in Javascript to model a Sign in Service integration. |

---

## Support reference

| Type | Description |
|-----|-------------|
| [Error documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Troubleshooting/errors.md) | Reference for Sign-in Service errors. |
| [Frequently asked questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Troubleshooting/SiS%20FAQ.md) | Common questions for applications teams integrating their application with SiS. |

---

## For Identity team members

- [Engineering documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs)
- [Internal documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/vsp/teams/Identity/Product%20Documentation/Sign%20In%20Service)
- [Internal runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/System%20Recovery%20Procedures/SiS_SRP.md)
---

## Release notes

- [2025-05 - Users can navigate across multiple clients on mobile web without signing in again](https://dsva.slack.com/archives/C04KXPXL4/p1746706027659859)
