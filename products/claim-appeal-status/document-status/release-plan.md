# Document Status Release Plan

| Toggle name                                                                                                            | Description                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [`cst_show_document_upload_status`](https://api.va.gov/flipper/features/cst_show_document_upload_status)               | Enables ability to show upload status from EvidenceSubmission table                            |
| [`cst_update_evidence_submission_on_show`](https://api.va.gov/flipper/features/cst_update_evidence_submission_on_show) | Enables ability to poll Lighthouse for up-to-date evidence submission status (backend polling) |

Dashboards and Monitoring

- [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/8me-h86-qmb/benefits-claim-status-tool-dashboard)
- [Monitors](https://vagov.ddog-gov.com/monitors/manage?q=claim%20status%20tool)
- [GA Dashboard](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/bMzsgzMCT6yazCs5H-3N_g)

#### Rollout Planning

- Desired date range: _**February 2026**_
- How will you make the product available in production while limiting the number of users who can find/access it:
  - We will leverage the existing feature toggle to control the percentage of users who will be able to access the new functionality.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Datadog error rates for claims `#index` and `#show` endpoints (consistent with the previous pages, excluding 401/403 authentication issues)
  - Low error rates <5% for `#files-we-couldnt-receive` endpoint (excluding 401/403 authentication issues)
- Links to the dashboard(s) showing "success criteria" metrics:
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/8me-h86-qmb/benefits-claim-status-tool-dashboard)
  - [RUM Dashboard](https://vagov.ddog-gov.com/rum/performance-monitoring?query=%40application.id%3A75bb17aa-34f0-4366-b196-eb11eda75425%20%40session.type%3Auser&agg_m=%40view.loading_time&fromUser=true&from_ts=1770786000000&to_ts=1771390799999&live=false)
- Who is monitoring the dashboard(s)?:
  - BMT2 Team

### Stage A: 25% of users

25% seems like a safe starting point as we are just providing a new experience in the way Veterans view these pages in the Claim Status Tool.

#### Planning

- Length of time: ~1 week
- Percentage of Users: 25%

#### Results
- Release Date: 2/11/2026 at 11a EST
- Estimated number of users:

  - Status Tab: `/track-claims/your-claims/*/status`
    - total: 208,045
    - estimated: ~52k
  - Files Tab: `/track-claims/your-claims/*/files`
    - total: 91,497
    - estimated: ~23k
  - Enabled by Feature (not estimated)
    - /track-claims/your-claims/files-we-couldnt-receive
      - total: 3

- Metrics at this stage (per your "success criteria"):
  - Backend Metrics:
    - No related errors logged for these endpoints
    - #index:
      - 4 week avg before launch: 0.336%
      - Since launch: 0.11%
    - #show:
      - 4 week avg before launch: 1.2325%
      - Since launch: 1.37%
    - #files-we-couldnt-receive:
      - No errors
  - Frontend Metrics:
    - No RUM issues (the increases in time also line up with our release of the content migration):
      - Loading times are up 4.76%, but comparable to weeks prior and still < 3s goal
      - LCP/FCP are up 1.56%, but that makes sense since we are adding content to the page
- Was any downstream service affected by the change?:
  - No
- Types of errors logged:
  - Non related to new functionality
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - None identified

### Stage B: 50% of users

_Test a larger user population to ensure larger usage patterns expose no issues._

#### Planning

- Length of time: 2 weeks
- Percentage of Users: 50%

#### Results

- Estimated number of users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - #index: [FILL_IN]
  - #show: [FILL_IN]
  - #files-we-couldnt-receive: [FILL_IN]
- Was any downstream service affected by the change?:
  - [FILL_IN]
- Types of errors logged:
  - [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - [FILL_IN]

### Stage C: 100% of users

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Estimated number of users: [FILL_IN]
- Post-launch KPI - Error Rates:
  - #index: [FILL_IN]
  - #show: [FILL_IN]
  - #files-we-couldnt-receive: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

### 1-month results

- Estimated number of users: [FILL_IN]
- Post-launch KPI - Error Rates:
  - #index: [FILL_IN]
  - #show: [FILL_IN]
  - #files-we-couldnt-receive: [FILL_IN]
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
