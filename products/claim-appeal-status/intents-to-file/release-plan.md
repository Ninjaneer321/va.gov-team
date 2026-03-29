# Intent to File Status Display (Claim Status Tool) Release Plan

## Overview

This release plan covers the rollout of Intent to File (ITF) status visibility in the Claim Status Tool on VA.gov. The feature adds a new page where Veterans can view their active Intents to File across all benefit types (compensation, pension, survivor). This is a read-only feature — vets-api aggregates 3 Lighthouse Benefits Claims API calls and returns active ITFs to the frontend.

## Resources
- [Collaboration Cycle Ticket #123042](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123042)
- [Architecture Intent Ticket #135672](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135672)
  - [Engineering & Security Checklist](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/Benefits%20Management%20Tools%202%20-%20Intents%20to%20File%20-%2003232026.md)
- [ITF API Spike Findings #133381](https://github.com/department-of-veterans-affairs/va.gov-team/issues/133381)
- [Product Outline (Super Epic #110236)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110236)
- [Incident Response](./incident-response.md)

## Feature Toggles

| Toggle name | Description |
| ----------- | ----------- |
| `cst_intents_to_file` | Enables the Intents to File page in CST and the aggregated ITF endpoint in vets-api |

## Dashboards and Monitoring
- vets-api:
    - [Benefits - Claim Status Tool Dashboard](https://vagov.ddog-gov.com/dashboard/8me-h86-qmb/benefits---claim-status-tool-dashboard)
- [Monitors](https://vagov.ddog-gov.com/monitors/manage?q=claim%20status%20tool)

## Rollout Planning

- **Desired date range:** _TBD - pending Architecture Intent approval_
- **How will you make the product available in production while limiting the number of users who can find/access it:**
  - We will use the `cst_intents_to_file` Flipper toggle to control the percentage of users who can access the Intents to File page and whose requests trigger the aggregated ITF endpoint.
  - Users not in the rollout will not see the ITF page link in CST (graceful hide).
- **What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:**
  - Datadog error rates for `GET /v0/intents_to_file` endpoint remain below 5%
  - No increase in Lighthouse API error rates for ITF endpoints
  - No increase in CST page load times
  - No user-reported issues via Contact Center
- **Links to the dashboard(s) showing "success criteria" metrics:**
  - [Benefits - Claim Status Tool Dashboard](https://vagov.ddog-gov.com/dashboard/8me-h86-qmb/benefits-claim-status-tool-dashboard)
- **Who is monitoring the dashboard(s)?:**
  - BMT Team 2

## Rollout Stages

### Stage A: 25% of users

25% is a safe starting point as this is a new read-only page with no write operations. The feature does not modify any existing CST functionality.

#### Planning

- Length of time: ~1 week
- Percentage of Users: 25%

#### Results

- Estimated number of users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - `GET /v0/intents_to_file` error rate: [FILL_IN]
  - CST page load time impact: [FILL_IN]
- Was any downstream service affected by the change?:
  - [FILL_IN]
- Types of errors logged:
  - [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - [FILL_IN]

### Stage B: 50% of users

_Test a larger user population to ensure larger usage patterns expose no issues._

#### Planning

- Length of time: 2 weeks
- Percentage of Users: 50%

#### Results

- Estimated number of users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - `GET /v0/intents_to_file` error rate: [FILL_IN]
  - CST page load time impact: [FILL_IN]
- Was any downstream service affected by the change?:
  - [FILL_IN]
- Types of errors logged:
  - [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - [FILL_IN]

### Stage C: 100% of users

_Full rollout after successful Stage B._

#### Planning

- Length of time: Ongoing
- Percentage of Users: 100%

## Post Launch Metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Estimated number of users: [FILL_IN]
- Post-launch KPI - Error Rates:
  - `GET /v0/intents_to_file`: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

### 1-month results

- Estimated number of users: [FILL_IN]
- Post-launch KPI - Error Rates:
  - `GET /v0/intents_to_file`: [FILL_IN]
  - Lighthouse ITF error rate: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders?
3. Which assumptions you listed in your product outline were/were not validated?
4. How might your product evolve now or in the future based on these results?
5. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
