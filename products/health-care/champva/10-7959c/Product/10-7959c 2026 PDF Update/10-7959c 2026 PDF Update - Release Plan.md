## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description                                                  |
|-------------|--------------------------------------------------------------|
| -- | If enabled shows the digital form experience for form 10-7959c with the new Medicare chapter |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.


## Step 3: Production rollout

### Define the Rollback process

Our PM and PO will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the engineering team to get the FE engineer to disable the toggle.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- This release will not include UAT

### Phase II: Staged Rollout (also known as unmoderated production testing)

This rollout aligns with the release plan:
- **2.4 – 10%**
- **2.5 – 50%**
- **2.6 – 100%**

#### Rollout Planning

- Desired date range: 02/24/2025 - 03/07/2025
- How will you make the product available in production while limiting the number of users who can find/access it: feature toggle.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - upload error rate < 5%
  - zero silent failures
  - callback error rate < 1%
- Links to the dashboard(s) showing "success criteria" metrics: [ivc-champva-forms](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms?fromUser=false&refresh_mode=weekly&from_ts=1734391252265&to_ts=1734709253529&live=true)
- Who is monitoring the dashboard(s)?: IVC Forms Team

### Stage A: Release 2.4 – 10% of users – 02/25/2025

*Initial production rollout to validate core functionality and catch obvious issues.*

#### Planning

- Length of time: 24–48 hours
- Percentage of Users: 10%

#### Results

- Number of submits: [FILL_IN]
- Error rate: [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: Release 2.5 – 50% of users – mm/dd/yyyy

*Expanded rollout to validate behavior at scale and monitor downstream impacts.*

#### Planning

- Length of time: 2 days
- Percentage of Users: 50%

#### Results

- Number of submits: [FILL_IN]
- Error rate: [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: Release 2.6 – 100% of users – mm/dd/yyyy

*Full production rollout.*

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users: 100%

#### Results

- Number of submits: [FILL_IN]
- Error rate: [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]
