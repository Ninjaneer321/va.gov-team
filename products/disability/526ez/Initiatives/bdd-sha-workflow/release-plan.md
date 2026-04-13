<!-- markdownlint-disable MD024 -->

# Release Plan Template

So! You're thinking about how you want to launch your product. You know you'll perform usability testing and QA the heck out of it in staging, both critical components of product development. But they don't tell you how people will naturally use your product when you're not there to guide them to it, how any submitted data will get to VA, whether that data will be easy or difficult for VA to process, whether people will be likely to submit duplicates, abandon partway through, or encounter bugs unique to the production environment. All of which could be very detrimental to users, which is the antithesis of what we're here to do.

So: **how might we craft a release plan to test our product "in the wild" at a smaller scale, and learn how Veterans will actually use it, and what problems it actually might have or create, and then fix/adjust before going live to millions of VA.gov users?**

Though issues in production happen, follow this template to minimize the chances and the effects of production issues.

## When to use this release plan

If you answer yes to any of the questions below, you'll need to create a release plan using this template.

- Does the feature you are working on moderately or significantly affect the Veteran experience of the product?
- Does the feature you are working on change the structure of the underlying data?
- Does the feature's backend or downstream interactions change?
- Is this a brand new experience for a Veteran?

The team should develop this plan in parallel with the development of the feature your team is creating.

## How to use this release plan

1. Create a release plan using this template in your feature documentation. Optionally, remove the extra text from the template.
2. Fill out all the details below.
3. Review the release plan with the team and your OCTO before [releasing your app to production](#step-3-production-rollout).

---

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name                                             | Description                                                                                                      |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| disability_526_new_bdd_sha_enforcement_workflow_enabled | If enabled, Form 21-526EZ will show new UI to encourage veterans to upload a Separation Health Assessment (SHA). |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day.

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [x] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Do I need a staged rollout?

**Yes**, a staged rollout is required unless you can confidently answer "yes" to all of the following:

- This change does not add substantial new functionality to VA.gov
- This change does not impact user flows through tasks
- This change does not affect traffic to backend services

_Example_: a change to a page's text content **could skip** staged rollout

_Example_: a minor visual redesign to a page that doesn't affect user flows **could skip** staged rollout

_Example_: adding a new field to an existing form **could skip** staged rollout

_Example_: a new feature on an existing application that creates new backend traffic **needs staged rollout**

_Example_: a significant change to how users navigate an existing form **needs staged rollout**

_Example_: a feature that will route significantly more users (and therefore more backend traffic) to an existing application **needs staged rollout**

#### Exceptions

Currently, [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are the primary tool VSP provides for facilitating staged rollout. If feature toggles don't work for your use case, you can request an exception from staged rollout in Staging Review.

| Feature type                        | Possible with feature toggles? |
| ----------------------------------- | ------------------------------ |
| New feature in existing application | Yes                            |
| New application                     | Yes                            |
| Static content changes              | Doable but tricky              |
| URL redirects                       | No                             |

DEPO VSP / OCTO leads can approve other exceptions to this requirement.

### Define the Rollback process

Even though your feature has been tested and ready, production is still a different environment than staging. You'll need to create a rollback plan if things go wrong. Usually, this is as simple as a feature toggle flip. Be as specific as possible.

Our PM, technical lead, and assigned DataDog monitor for the sprint will monitor analytics. If they see a spike in
errors or unexpected behavior, they will contact the engineering team to get the engineer to disable the `disability_526_new_bdd_sha_enforcement_workflow_enabled`
toggle.

Monitoring is available on the following dashboard:
[Benefits - Form 526 Disability Compensation Product Insights Dashboard](https://vagov.ddog-gov.com/dashboard/ygg-v6d-nza/benefits-form-526-disability-compensation-product-insights?fromUser=false&refresh_mode=sliding&from_ts=1776008408687&to_ts=1776094808687&live=true)

Alarms from monitoring are sent to the following Slack channel:
[#benefits-disability-notifications](https://dsva.slack.com/archives/C05URMLM09Z)

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

**_No UAT Testing will be performed; testing was done extensively as part of a Bug Bash and Staging Review in the staging
environment._**

- Desired date range or test duration: N/A
- Desired number of users: N/A
- How you'll recruit the right production test users: N/A
- How you'll conduct the testing: N/A
- How you'll give the test users access to the product in production w/o making it live on VA.gov: N/A

#### Results

- Number of users: N/A
- Number of bugs identified / fixed: N/A
- Was any downstream service affected by the change?: yes/no, N/A
- Types of errors logged: N/A
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges?: N/A
- If yes, what: N/A

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: 4/20/26 - 4/27/26
- How will you make the product available in production while limiting the number of users who can find/access it: Flipper flag with user-based staggered rollout.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like _abandonment rate < 20%_, _reported contact center calls < 2 calls_, _error rate < 5%_, etc.\]
  - 0 new alerts

Monitoring is available on the following dashboard:
[Benefits - Form 526 Disability Compensation Product Insights Dashboard](https://vagov.ddog-gov.com/dashboard/ygg-v6d-nza/benefits-form-526-disability-compensation-product-insights?fromUser=false&refresh_mode=sliding&from_ts=1776008408687&to_ts=1776094808687&live=true)

Alarms for Form 21-526EZ are available in the following filter:
[service:disability-application](https://vagov.ddog-gov.com/monitors/manage?q=service%3Adisability-application&p=1)

Alarms from monitoring are sent to the following Slack channel:
[#benefits-disability-notifications](https://dsva.slack.com/archives/C05URMLM09Z)

- Who is monitoring the dashboard(s)?: Daniel Vu, Andrew Rodiek, Joedy Felts, Damian Jimenez

_The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs._

### Stage A: Canary - 10% of users

_Test a small Veteran population to ensure any obvious bugs/edge cases are found._

The recommended progression is 1% → 25% → 100%. However, VFS teams have flexibility to add more increments to mitigate risk.

#### Planning

- Length of time: 2 Days, starting 4/20/26
- Percentage of Users (and roughly how many users do you expect this to be): 10%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

_Test a larger user population to ensure larger usage patterns expose no issues._

#### Planning

- Length of time: 2 Days, Starting 4/22/26
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users (optional)

_Test a larger user population to ensure larger usage patterns expose no issues._

#### Planning

- Length of time: 2 Days, Starting 4/24/26
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 100% of users

#### Planning

- Length of time: 2 Days, Starting 4/27/26
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
