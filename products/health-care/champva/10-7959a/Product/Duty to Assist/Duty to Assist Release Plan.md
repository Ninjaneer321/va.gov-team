# 10-7959a ChampVA Claims Duty to Assist Release Plan

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the feature toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| tbd | If enabled, shows the Duty to Assist indicator option within the ChampVA Enhanced Claims resubmission flow (10-7959a) |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day.

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work with downstream or dependent systems (DocMP/Pega) proactively to ensure that DTA routing and flagging logic is ready before the feature hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

PM and PO will monitor analytics. If they see a spike in errors, routing failures, or unexpected behavior, they will work with the team to get the FE engineer to disable the feature toggle, reverting the Enhanced Claims flow to its previous state. Triage and resolution will be fast-tracked to complete within 1–3 days.

### Phase I: Moderated Production Testing (UAT)

#### Planning

- Desired date range or test duration: TBD
- Desired number of users: TBD
- How you'll recruit the right production test users: TBD (Perigean or equivalent)
- How you'll conduct the testing: User/Usability Interviews
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Staging

#### Results

- Number of users: [FILL_IN]
- Number of bugs identified / fixed:
  - [FILL_IN] : list
  - [FILL_IN] : of
  - [FILL_IN]: Tickets of bugs/changes
- Was any downstream service affected by the change?: yes/no | N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]
- If yes, what: [FILL_IN]

### Phase II: Staged Rollout (Unmoderated Production Testing)

We recommend that the rollout plan has five stages, each increasing the number of users. This plan is a strongly recommended guideline but should only be deviated from for precise reasons.

#### Rollout Planning

- Desired date range: TBD (targeting launch ~April 8, 2026)
- How will you make the product available in production while limiting the number of users who can find/access it: Feature Toggle
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - 100% of DTA-flagged digital submissions correctly routed to the appropriate team in DocMP
  - Zero errors on DTA-flagged submissions
  - Enhanced Claims form abandonment rate shows no increase
  - Callback/submission error rate < 1%
- Links to the dashboard(s) showing "success criteria" metrics: [IVC ChampVA Claims Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/tgw-7ju-ywy/ivc-champ-va-10-7959a-claims-form-dashboard) will be monitored by the team
- Who is monitoring the dashboard(s)?: IVC Forms Team / Health Applications Team

### Stage A: Canary

*Test a small user population to ensure any obvious bugs or edge cases are found, particularly around DTA flagging and DocMP routing.*

#### Planning

- Length of time: 24 hours, >0 submits
- Percentage of Users (and roughly how many users do you expect this to be): 1–5%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 10% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 10%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

- Length of time: Monitor at least 7 days and review any findings
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post Launch Metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users: [FILL_IN]
- DTA-flagged submissions (digital) actual: [FILL_IN]
- % of DTA-flagged submissions correctly routed in DocMP actual: [FILL_IN]
- Enhanced Claims form abandonment rate actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- DTA-flagged submissions (digital) actual: [FILL_IN]
- % of DTA-flagged submissions correctly routed in DocMP actual: [FILL_IN]
- Average time from DTA request to team acknowledgment actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results? (e.g., expanding DTA support to initial "shoebox" ChampVA claims submissions)
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
