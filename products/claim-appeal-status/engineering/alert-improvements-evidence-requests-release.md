# CST Alert Improvements Evidence Requests — Release Monitoring

Feature flag: `cstAlertImprovementsEvidenceRequests`
PR: https://github.com/department-of-veterans-affairs/vets-website/pull/43557
Epic issue: department-of-veterans-affairs/va.gov-team#134900

## Release dates

- Release date: 2026-04-20
- Baseline window: 2026-04-13 to 2026-04-19
- Post-release window: 2026-04-20 to 2026-04-26

GA4 dashboard: [CST Stacked Alerts Fix Evidence Requests](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/g4xG59UTQxy8ROsnBUme5g)

The dashboard was duplicated from the Finding Claims release and rescoped for this change. On release day (Apr 20), bump the primary date range to 2026-04-20 to 2026-04-26 and the compare range to 2026-04-13 to 2026-04-19. GA4 will not accept future dates so the current setup uses Apr 13-17 vs Apr 6-10 as an interim pre-release baseline.

## What changed

When the feature flag is enabled:

- Claim cards (ClaimsListItem, StemClaimListItem, AppealListItem) replace stacked `va-alert`s with a single `va-tag-status` reading "Action may be needed"
- ClaimStatusHeader intro text changes to "Review the latest status of your claim."
- ClaimFileHeader intro text changes ("Add evidence or review files you've already uploaded for this claim." when open)
- FilesNeeded replaces the `va-alert` + `VaLinkAction "About this request"` pattern with a `va-card` + `va-critical-action` linking to the same detail page
- WhatYouNeedToDo adds a new `va-additional-info` trigger: "Why we still say 'Action may be needed' after you've responded" and new intro text
- RecentActivity renders third-party (`NEEDED_FROM_OTHERS`) items as inline text + a `<Link>` ("Learn more about this notice") instead of a `va-alert`
- FilesPage adds a new `ReviewRequestsAlert` (`va-alert` with a `va-link-action` "Review requests" → navigates to status tab) when the claim has open requests
- AdditionalEvidencePage removes inline FilesNeeded listings (users are pushed to the status tab via ReviewRequestsAlert)

## GA4 Explore tabs

Use the non-production GA4 property to validate filters before creating in the production property. All cells use Bar chart.

### Tab 1 — Baseline: sessions on claim status tab

- Goal: Confirm traffic to the status tab is stable so other metrics can be compared against a consistent denominator.
- Rows: Date
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page path `matches regex` `.*track-claims/your-claims/[0-9]+/status/?`

| Metric  | Baseline | Post-Release |
| ------- | -------- | ------------ |
| Sessions |          |              |

### Tab 2 — Baseline: sessions on claim files tab

- Goal: Confirm traffic to the files tab is stable.
- Rows: Date
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page path `matches regex` `.*track-claims/your-claims/[0-9]+/files/?`

| Metric  | Baseline | Post-Release |
| ------- | -------- | ------------ |
| Sessions |          |              |

### Tab 3 — Outbound From Files Tab

- Goal: Where do users land after leaving the claim files tab? A shift in this breakdown would flag that the new ReviewRequestsAlert is redirecting users in a new pattern.
- Rows: Page path and screen class
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page referrer `matches regex` `.*track-claims/your-claims/[0-9]+/files/?`

| Destination                                       | Baseline | Post-Release |
| ------------------------------------------------- | -------- | ------------ |
| Status tab (`/.../status`)                        |          |              |
| Additional evidence (`/.../additional-evidence`)  |          |              |
| Needed-from-you detail (`/.../needed-from-you/*`) |          |              |
| Other                                             |          |              |

### Tab 4 — Status Tab Events

- Goal: Catch-all for any unexpected event-count changes on the claim status tab that the targeted tabs don't isolate.
- Rows: Event name, Link text
- Values: Event count
- Cell Type: Bar chart
- Filters:
  - Page path and screen class `matches regex` `.*track-claims/your-claims/[0-9]+/status/?`

### Tab 5 — Review Requests Clicks (new)

- Goal: Measure engagement with the new ReviewRequestsAlert that redirects users back to the status tab when they have open evidence requests. Should be 0 pre-release and >0 post-release.
- Rows: Link text
- Values: Active users, Event count
- Cell Type: Bar chart
- Filters:
  - DataLayer Event Name `exactly matches` `nav-link-click`
  - Page path and screen class `matches regex` `.*track-claims/your-claims/[0-9]+/files/?`
  - Link text `exactly matches` `Review requests`

| Metric                    | Baseline | Post-Release |
| ------------------------- | -------- | ------------ |
| "Review requests" clicks  |          |              |

### Tab 6 — Action Needed Info Expand (new)

- Goal: Measure how often users expand the new "Why we still say Action may be needed after you've responded" additional-info on the status tab.
- Rows: Link text
- Values: Event count
- Cell Type: Bar chart
- Filters:
  - Page path and screen class `matches regex` `.*track-claims/your-claims/[0-9]+/status/?`
  - Event name `exactly matches` `additional_info`

Note: the claim status tab has no other `va-additional-info` in this change, so filtering by page + event name is sufficient. If another additional-info lands on the status tab, tighten the filter with a Link text match on the trigger text.

| Metric        | Baseline | Post-Release |
| ------------- | -------- | ------------ |
| Event count   |          |              |

### Tab 7 — About This Request Clicks (removed)

- Goal: Verify the old `va-link-action` "About this request" (inside the FilesNeeded `va-alert`) drops to 0 post-release. This event fires from the status tab and the additional evidence page; the FilesNeeded rewrite replaces it with a `va-critical-action` that emits no component-library-analytics event.
- Rows: Page path + query string
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - DataLayer Event Name `exactly matches` `nav-link-click`
  - Link text `exactly matches` `About this request`

| Metric                       | Baseline | Post-Release (expect 0) |
| ---------------------------- | -------- | ----------------------- |
| "About this request" clicks  |          |                         |

## Interactions GA cannot track

These rely on Datadog RUM (see section below) or are undetectable via web analytics.

- `va-tag-status` on claim cards — pure visual, no events
- `va-critical-action` in FilesNeeded — wraps a styled `<a>` in shadow DOM with no `component-library-analytics` event
- React Router `<Link>` "Learn more about this notice" in RecentActivity — no VA component event; surface-level clicks only visible to RUM
- Intro text changes (ClaimStatusHeader, ClaimFileHeader) — no interaction to measure
- "Requested for you" label on third-party requests in RecentActivity — display-only

## Datadog RUM

The claims-status app has RUM enabled (`ClaimsStatusApp.jsx` `useBrowserMonitoring({ toggleName: 'cstUseDataDogRUM', service: 'benefits-claim-status-tool' ... })`). Use RUM to cover the gaps above.

Suggested RUM dashboards / monitors:

- Click events on `a.action-link` inside `va-critical-action` on the claim status tab — confirms users continue to click through to the evidence request detail page at or above the pre-release rate for `VaLinkAction "About this request"`.
- Click events on the React Router `Link` "Learn more about this notice" in RecentActivity — surfaces engagement with third-party requests now that the `va-alert` wrapping is removed.
- Frontend error rate on the status tab, files tab, and additional evidence page during the rollout window — ensure no regressions from the new conditional rendering.

| RUM signal                                                         | Baseline | Post-Release |
| ------------------------------------------------------------------ | -------- | ------------ |
| Clicks on `va-critical-action` link (status tab)                   |          |              |
| Clicks on "Learn more about this notice" link (status tab)         |          |              |
| Frontend error rate, status tab                                    |          |              |
| Frontend error rate, files tab                                     |          |              |
| Frontend error rate, additional evidence page                      |          |              |
