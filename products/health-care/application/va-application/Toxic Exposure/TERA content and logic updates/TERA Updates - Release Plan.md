# 10-10EZ Veteran health care application Toxic Exposure Content update and Question Branching Logic - Release Plan 
- Last updated: 10/25/2024


## Step 1: Development


Feature toggle

| Toggle name | Description |
| ----------- | ----------- |
| hca_tera_branching_enabled | Enables branching logic for the Toxic Exposure questionset in the Health Care Application |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
  - [x] [Link to Test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-1010EZ-TERA-branching-logic-update.md)
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

- PM and Data Analyst will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the Engineering team to disable the toggle and begin triage.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration:
     - N/A
- Desired number of users:
     - N/A
- How you'll recruit the right production test users:
     - N/A
- How you'll conduct the testing:
     - N/A
- How you'll give the test participants access to the product in production w/o making it live on VA.gov:
     - N/A

#### Results

- N/A

### Phase II: Staged Rollout (also known as unmoderated production testing)

#### Rollout Planning

- Desired date range: [FILL_IN]
- How will you make the product available in production while limiting the number of users who can find/access it: [FILL_IN].
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
>## Measuring Success
>
>### Objective: Update the 10-10EZ, so Veterans are asked to provide relevant Toxic Exposure details while applying for VA health care.
>
>#### **Key Result #1:** A 25% reduction of user engagement time spent within the TERA questions
>
>Data source - [Google Analytics (GA4) Dashboard](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/dZ_qMurmRZiGKuFENIthOQ)
>
>| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
>|------------- |---------|-------------- |-------------- |-------------- |
>|Avg Engagement time per session in the military section |3m 2s (182 seconds)| 2m 16s (136.5 seconds)  | TBD | TBD |
>
>
>#### **Key Result #2:** Reduction of Medallia feedback mentioning being asked irrelevant questions
>
>Data source - Monthly Medallia survey results
>
>
>
- Links to the dashboard(s) showing traffic metrics:
     - Data source - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - Data source for errors - [Sentry Logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- Who is monitoring the dashboard(s)?:
     - Product Manager - Alex Seelig, Heather Justice
     - Data Analyst - Luis Simauchi

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): [FILL_IN]% (*Recommendation: select a percentage that targets ~500 users, or at most 10%*)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 75% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

>## Measuring Success
>
>### Objective: Update the 10-10EZ, so Veterans have the opportunity to provide Toxic Exposure details while applying for VA health care.
>
>#### **Key Result #1:** 50% of Veterans who visit this page will answer Yes to provide TERA information
>
>Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
>
>| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
>|------------- |---------|-------------- |-------------- |-------------- |
>|Veterans who answered Yes to providing TERA info |N/A| 50% | TBD | TBD |
>
>
>#### **Key Result #2:** 75% of Veterans who said Yes to providing TERA information will provide info in at least one TERA question
>
>Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
>
>| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
>|------------- |---------|-------------- |-------------- |-------------- |
>|Veterans answer Yes to Cleanup or Response |N/A| TBD | TBD | TBD |
>|Veterans answer Yes to Service in Gulf War |N/A| TBD | TBD | TBD |
>|Veterans answer Yes to Combat Operations |N/A| TBD | TBD | TBD |
>|Veterans answer Yes to Agent Orange |N/A| TBD | TBD | TBD |
>|Total Veterans that provided an answer to at least one question |N/A| 75% | TBD | TBD |
>
- Links to the dashboard(s) showing "success criteria" metrics:
     - Data source - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - Data source for errors - [Sentry Logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- Who is monitoring the dashboard(s)?:
     - Product Manager - Alex Seelig, Heather Justice
     - Data Analyst - Luis Simauchi

- Length of time:
     - 03/06/2024
- Percentage of Users (and roughly how many users do you expect this to be):
     - 100% of all Veterans
     - about 300 submissions per day


#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

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
