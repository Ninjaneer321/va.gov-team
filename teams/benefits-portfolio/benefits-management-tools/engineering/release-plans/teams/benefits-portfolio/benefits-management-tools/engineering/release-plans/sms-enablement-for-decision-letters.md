<!-- markdownlint-disable MD024 -->
# VANotify SMS Enablement for Decision Letters Release Plan

WORK IN PROGRESS! DRAFT! NON-FINAL! ETC!

## Step 1: Development

Development was done behind a feature flag, following the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide).

| Toggle name | Description |
| ----------- | ----------- |
| [event_bus_gateway_sms_notifications](https://api.va.gov/flipper/features/event_bus_gateway_sms_notifications) | When enabled, for each non-filtered event, eventbus-gateway will call the new vets-api endpoint send_notifications which will asyncronousy send sms notifications |
| [event_bus_gateway_letter_ready_sms_notifications](https://api.va.gov/flipper/features/event_bus_gateway_letter_ready_sms_notifications) | Flag that will be used for the progressive rollout, it can be enabled for a specifc user or a percentage of actors. We will be using the icn as the determining feature |
| [event_bus_gateway_retry_sms](https://api.va.gov/flipper/features/event_bus_gateway_retry_sms) | When enabled, vets-api retries event bus gateway sms that VA Notify marks temporary-failure |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day.

Before enabling your feature toggle in production, you'll need to:

- [ ] Testing of all permutations of the feature flags. Confirm no regression in the send_email endpoint as well as correct push notifications sent. Test results documented in [#135336](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135336)
- [ ] Confirm that logging has not changed and that existing Dashboards are working
- [ ] Implement dashboard or add to existing dashboard to track sms notifications
- [ ] Confirm production template is set in eventbus gateway config
- [ ] Gather details for single user test
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
    - [ ] review the plan with your DEPO/OCTO representative.
    - [ ] review the release plan with your team.

## Step 3: Production rollout

We will be performing a progressive rollout to be able to minimize the production impact of any issues.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: [TBD]
- Desired number of users: 1
- How you'll recruit the right production test users: Seth Darr will identify a veteran who is willing to assist.
- How you'll conduct the testing: We will manually trigger the Event Bus Gateway to send a POST request to vets-api with the recruit's participant ID.
- How you'll give the test users access to the product in production w/o making it live on VA.gov: We will set the `event_bus_gateway_letter_ready_sms_notifications` to only be enabled for the recruit's icn.

#### Results

- Number of users: 
- Number of bugs identified / fixed: 
    - 
- Was any downstream service affected by the change?: 
- Types of errors logged:   
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges?: 
- If yes, what: ___

### Phase II: Staged Rollout (also known as unmoderated production testing)

#### Rollout Planning

- Desired date range: [TBD]
- How will you make the product available in production while limiting the number of users who can find/access it: By using the feature flag `event_bus_gateway_letter_ready_sms_notifications` and the `enable_percentage_of_actors` feature to enable it for a percentages of users by icn.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?
    - [ ] DataDog error rate below 5%
    - [ ] Click through rate above 5% 
        - This rate is purposely kept low due to contain the blast radius.
     - [ ] Sms notification error rate < 5% (this is slightly below with email initial delivery rates)
- Links to the dashboard(s) showing "success criteria" metrics:
    - [DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/wvx-g6k-u6c/bmt---eventbus-gateway-cloned?fromUser=false&refresh_mode=sliding&from_ts=1766512554238&to_ts=1767117354238&live=true) - Not implemented yet
    - [Google Analytics Report](https://analytics.google.com/analytics/web/?authuser=2#/analysis/a50123418p265787033/edit/eiPeenxHRBqHVePhF1M3ow?restoreUserState=true) - N/A for SMS at this time
- Who is monitoring the dashboard(s)?: BMT3 (Seth Darr)

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Percentage of Users (and roughly how many users do you expect this to be): 2% of icns

#### Results

- Number of users: ___ sms notifications sent
    - Turned on [TBD]
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5% (3.97% observed)
    - [ ] 5.90% click through rate 
        - 
    - [ ] No increase in email sending errors 
        - flag on 7.54% initial email delivery error
        - previous week 7.62% initial email delivery error
    - [ ] Push notification error rate < 5%  (0% observed)
    - [ ] Sms notification error rate < 5%  (0% observed)
- Was any downstream service affected by the change?: 
- Types of errors logged:
    - 
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?
    -

### Stage B: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Percentage of Users (and roughly how many users do you expect this to be): 10% of icns

#### Results

- Number of users: ___ sms notifications sent
    - Turned on [TBD]
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5% (3.97% observed)
    - [ ] 5.90% click through rate 
        - 
    - [ ] No increase in email sending errors 
        - flag on 7.54% initial email delivery error
        - previous week 7.62% initial email delivery error
    - [ ] Push notification error rate < 5%  (0% observed)
    - [ ] Sms notification error rate < 5%  (0% observed)
- Was any downstream service affected by the change?: 
- Types of errors logged:
    - 
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?
    -

### Stage C: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Percentage of Users (and roughly how many users do you expect this to be): 25% of icns

#### Results

- Number of users: ___ sms notifications sent
    - Turned on [TBD]
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5% (3.97% observed)
    - [ ] 5.90% click through rate 
        - 
    - [ ] No increase in email sending errors 
        - flag on 7.54% initial email delivery error
        - previous week 7.62% initial email delivery error
    - [ ] Push notification error rate < 5%  (0% observed)
    - [ ] Sms notification error rate < 5%  (0% observed)
- Was any downstream service affected by the change?: 
- Types of errors logged:
    - 
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?
    -

### Stage D: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Percentage of Users (and roughly how many users do you expect this to be): 50% of icns

#### Results

- Number of users: ___ sms notifications sent
    - Turned on [TBD]
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5% (3.97% observed)
    - [ ] 5.90% click through rate 
        - 
    - [ ] No increase in email sending errors 
        - flag on 7.54% initial email delivery error
        - previous week 7.62% initial email delivery error
    - [ ] Push notification error rate < 5%  (0% observed)
    - [ ] Sms notification error rate < 5%  (0% observed)
- Was any downstream service affected by the change?: 
- Types of errors logged:
    - 
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?
    -

### Stage E: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Percentage of Users (and roughly how many users do you expect this to be): 75% of icns

#### Results

- Number of users: ___ sms notifications sent
    - Turned on [TBD]
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5% (3.97% observed)
    - [ ] 5.90% click through rate 
        - 
    - [ ] No increase in email sending errors 
        - flag on 7.54% initial email delivery error
        - previous week 7.62% initial email delivery error
    - [ ] Push notification error rate < 5%  (0% observed)
    - [ ] Sms notification error rate < 5%  (0% observed)
- Was any downstream service affected by the change?: 
- Types of errors logged:
    - 
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?
    -

### Stage F: Canary

*Full rollout!*

#### Planning

- Percentage of Users (and roughly how many users do you expect this to be): 100% of icns

#### Results

- Number of users: ___ sms notifications sent
    - Turned on [TBD]
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5% (3.97% observed)
    - [ ] 5.90% click through rate 
        - 
    - [ ] No increase in email sending errors 
        - flag on 7.54% initial email delivery error
        - previous week 7.62% initial email delivery error
    - [ ] Push notification error rate < 5%  (0% observed)
    - [ ] Sms notification error rate < 5%  (0% observed)
- Was any downstream service affected by the change?: 
- Types of errors logged:
    - 
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?
    -
  
### Rollback process

Rollback will be done by disabling feature flags. To disable all push notifications we will set `event_bus_gateway_letter_ready_sms_notifications` to 0%.  This will ensure that all push notifications are stopped. To be thorough we can also disable the other feature flags mentioned above.

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
