# Sign-in experience

The sign-in experience covers the end-to-end flow Veterans and beneficiaries use to authenticate on VA.gov and the VA mobile app. This includes the credential selection, identity verification, multi-factor authentication, and session management steps that connect users to VA services.

**Slack channel:** [#sign-in-experience](https://dsva.slack.com/archives/C078GBPDMGB)

---

## Overview

The sign-in experience is the entry point to VA online services. When it works well it goes unnoticed. When it fails, Veterans may be blocked from accessing benefits, support costs increase, and trust in VA erodes. The Identity team owns the frontend components and authentication flows that make up this experience, in partnership with credential service providers Login.gov and ID.me.

---


## Current initiatives

| Initiative | Brief |
|-----------|--------|
| Sign-in looping  | Investigation and product improvements to reduce silent errors. |
| Data mismatch errors | Leverage sign-in service data to improve UX and address the root cause of errors. |
| Quarterly sign-in pulse | Analyze qualitative and quantitative data to monitor dissatisfaction with sign-in. |


---

## Support reference
| Reference type | Descripion |
|-----------|--------|
| [Product guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/product%20guides%20for%20contact%20center) | Product and troubleshooting guide for Platform Support |
| [Sign-in errors](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Troubleshooting_logging/Authentication_Errors#readme) | Error states and recovery flows |
| [System recovery plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/System%20Recovery%20Procedures/USiP_SRP.md#system-recovery-plan---unified-sign-in-page-usip)| Incident response and system recovery plan.


## Technical reference

| Component | Description |
|-----|-------------|
| [Unified Sign-In Page (USIP)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/unified-sign-in-pages#unified-sign-in-page-usip-design-details) | Entry point for VA services authenticating through VA.gov |
| [Verify](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Frontend/applications/verify.md) | Identity verification experience |
| [Terms of Use](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Frontend/applications/terms-of-use.md) | Terms of Use page and acceptance flow |
| [Session timeout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Troubleshooting_logging/Authentication_Errors/005.md#session-expired) | Session timeout behavior and inactivity modal |
| [Maintenance banners](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Frontend/downtime-banners.md) | Sign-in maintenance and outage messaging |

---

## Research

- [January 2026 - Dissatisfaction discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2026-01%20dissatisfaction%20discovery/2026-01%20Dissatisfaction%20Discovery%20-%20Research%20Findings.md)
