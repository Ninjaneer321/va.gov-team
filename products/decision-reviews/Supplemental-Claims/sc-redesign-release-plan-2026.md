# Supplemental Claims Redesign (20-0995) — Release Plan (DRAFT)

This release plan covers the Supplemental Claims (VA Form 20-0995) Step 3 redesign,
which replaces the team's custom list-and-loop pattern with the VA Design System
multiple-response (array builder) pattern for the VA and non-VA evidence flows.

- Engineering & Security Checklist: [decision_reviews_supplemental_claims_20-0995_2026_03_31.md](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/decision_reviews_supplemental_claims_20-0995_2026_03_31.md)
- [Collaboration Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117807)

---

## Step 1: Development

Feature toggles used for this release:

| Toggle name | Description |
| ----------- | ----------- |
| `decision_review_sc_redesign_nov2025` | When enabled, only users starting **new** Supplemental Claim applications see the new array-builder-based VA/non-VA evidence flow. In-progress applications started prior to toggle enablement remain on the legacy flow. |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process)
model, once code is in the `main` branch it will be deployed that day. The feature
toggle above gates user-visible exposure.

Before enabling the toggle in production, we will:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Complete staging validation of the full new-application flow, including 4142
  sub-flow PDF generation and evidence upload paths. Manual test notes tracked in
  the team's [Slack Canvas](https://dsva.slack.com/docs/T03FECE8V/F0ANV8G61E3).
- [ ] Hold a go/no-go meeting with the team and enablement team. During this meeting we will:
  - [ ] review the plan with our DEPO/OCTO representative
  - [ ] review the release plan with the team

## Step 3: Production rollout

### Do I need a staged rollout?

**Yes** — staged rollout is required. Although this work is primarily a refactor,
it substantially changes the user flow through Step 3 of Supplemental Claims
(the highest-traffic decision-reviews form), so both user-flow and backend
traffic impact apply.

### Define the Rollback process

- Primary rollback: disable the `decision_review_sc_redesign_nov2025` Flipper
  toggle to immediately route all new applications back to the legacy flow.
  No code deploy is required.
- In-progress applications started prior to toggle enablement always remain on
  the legacy flow, so disabling the toggle does not strand any user mid-form.
- The team will monitor the Datadog dashboards and RUM below. If a spike in submission errors, traffic anomalies, or frustration signals is detected, the on-call engineer disables the toggle and notifies the team in Slack.
- Monitoring surfaces:
  - [Benefits — Supplemental Claims Datadog dashboard](https://vagov.ddog-gov.com/dashboard/uc7-8ai-6c3/benefits---supplemental-claims)
  - [Benefits — Supplemental Claims RUM dashboard](https://vagov.ddog-gov.com/product-analytics/summary?query=%40application.id%3A2779ccc3-be87-4b2d-a757-9ff54b58761b)
  - [SC — Overall Claim Submission API traffic anomaly monitor](https://vagov.ddog-gov.com/monitors/215144)
  - [SC — Overall claim submission traffic is low](https://vagov.ddog-gov.com/monitors/539401)

### Staged Rollout

#### Rollout Planning

- Desired date range: [FILL_IN]
- How will you make the product available in production while limiting the
  number of users who can find/access it: gate exposure via the
  `decision_review_sc_redesign_nov2025` Flipper percentage rollout. Only users
  starting **new** Supplemental Claim applications are eligible; in-progress
  applications stay on the legacy flow regardless of percentage.
- Success criteria (Reference this [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/128072) for how these are calculated):
  - Form abandonment rate at SC Step 3 ≤ baseline of `11%` (targeting a 1–3% reduction over time; no regression at any stage)
  - RUM "frustration signal" share at Step 3 trending at or below the pre-launch baseline (75% of frustration-tagged sessions involved Step 3)
  - SC overall claim submission API traffic within learned anomaly bounds (per Datadog monitor 215144) and above the static low-traffic threshold (monitor 539401)
  - Sidekiq error rate on `DecisionReviews::Form4142Submit` and
    `DecisionReviews::SubmitUpload` ≤ pre-launch baseline
- Links to the dashboards showing success-criteria metrics:
  - [Benefits — Supplemental Claims Datadog dashboard](https://vagov.ddog-gov.com/dashboard/uc7-8ai-6c3/benefits---supplemental-claims)
  - [Benefits — Supplemental Claims RUM dashboard](https://vagov.ddog-gov.com/product-analytics/summary?query=%40application.id%3A2779ccc3-be87-4b2d-a757-9ff54b58761b)
  - WIP conversion-rate monitor: <https://github.com/department-of-veterans-affairs/va.gov-team/issues/135884>
- Who is monitoring the dashboards?:
    - PM @mcarterA6
    - PO @amylai-va,
    - Engineers:
      - @asiisii
      - @dfitchett
      - @james-taggart-kind

### Stage A: Canary — 1% of users

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users: 1%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per success criteria): [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?: [FILL_IN]

### Stage B: 25% of users

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users: 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per success criteria): [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?: [FILL_IN]

### Stage C: 50% of users (optional)

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users: 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per success criteria): [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?: [FILL_IN]

### Stage D: 75% of users (optional)

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users: 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per success criteria): [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?: [FILL_IN]

### Stage E: 100% of users

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users: 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per success criteria): [FILL_IN]
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges?: [FILL_IN]

## Post Launch metrics

### 1-week results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual — SC Step 3 abandonment rate: [FILL_IN] (baseline `11%`)
- Post-launch KPI 2 actual — share of frustration-tagged RUM sessions at Step 3: [FILL_IN] (baseline `75%`)
- Post-launch KPI 3 actual — SC submission success rate / API error rate: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges?: [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual — SC Step 3 abandonment rate: [FILL_IN] (baseline `11%`)
- Post-launch KPI 2 actual — share of frustration-tagged RUM sessions at Step 3: [FILL_IN] (baseline `75%`)
- Post-launch KPI 3 actual — SC submission success rate / API error rate: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges?: [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
   Tracked: [[Eng] Remove SC Redesign feature toggle code #130773](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130773).
