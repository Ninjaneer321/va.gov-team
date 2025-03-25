# Initiative outline: DS Logon retirement at VA

**Last Updated: March 25, 2025 -- Samara created outline**
     
## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Project timeline](#project-timeline)
- [Analytics](#analytics)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design-and-ux)


## POCs
- **Slack channel**: [Sign-in transition](https://dsva.slack.com/channels/secure-sign-in-transition)

## Overview

In July 2024, VA publicly announced its decision to retire the My HealtheVet user ID and password and use of the DS Logon credential at VA. Instead, VA would only continue to support two modern, NIST-compliant credentials -- Login.gov and ID.me -- going forward.

Between July 2024 and March 2025, VA engaged in an organization-wide campaign to migrate about 1M MHV users to Login.gov and ID.me. As of 3/6/2025, the MHV user ID and password option has been completely removed from VA web and mobile properties. 

VA is now focusing on its effort to deprecate the DS Logon credential at VA after 9/30/2025. **DS Logon will remain in use at the Department of Defense**.

## User Problem Statement

- As a Veteran, I need to be able to quickly and easily login to VA web properties to manage my health and benefits.
- As a Veteran, I need to sign up for a Login.gov or ID.me account, having previously used the MHV or DSL credentials to login to VA web properties.

## Business goals

- Reduce the number of people using the My HealtheVet user ID and password to zero.
- Improve security and reduce fraud risk by retiring the My HealtheVet user ID and password.
- Simplify the VA sign-in experience by reducing supported credential service providers from four to two.

## Project timeline

TBD

## Analytics

- [Datadog: Authentication stats](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1739303027604&to_ts=1741895027604&live=true)
- [Domo: Sign-in transition dashboard](https://va-gov.domo.com/page/1862108618?userId=367226722)
- [Datadog: Interstitial metrics](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&index=*&refresh_mode=paused&from_ts=1737125001775&to_ts=1737139401775&live=false&tile_focus=3815395182095420)

### OCTO 2025 OKRs

#### OKR2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.
- **O2.1**: 100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential.

### User data

|Metric|Baseline (March 2025)|September 2025|
|------|--------------------|-----------------|
|Total active DS Logon users in the last 24 months|TBD|TBD|
|Total DS Logon users active in the last 24 months without Login.gov or ID.me|TBD|TBD|
|DS Logon users active in the last 24 months with Login.gov|TBD|TBD|
|DS Logon users active in the last 24 months with ID.me|TBD|TBD|

### Usage metrics

|Metric|Baseline (March 2025)|September 2025|
|------|--------------------|-----------------|
|% authentications happening through DS Logon|TBD|TBD|
|% authentications happening through Login.gov|TBD|TBD|
|% authentications happening through ID.me|TBD|TBD|
|Number of people using DS Logon|TBD|TBD|
|% of people using DS Logon|TBD|TBD|

## Backend

(Link relevant backend docs)

## Frontend

(Link relevant frontend docs)

## Design and UX

(Link relevant design docs)
