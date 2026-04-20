# Alert Improvements Evidence Requests Release

Feature flag: `cstAlertImprovementsEvidenceRequests`
Epic issue: [Alert Improvements: Evidence Requests - stacked alerts #119389](https://github.com/department-of-veterans-affairs/va.gov-team/issues/119389)
PR: [CST 134900 Stacked Alerts Evidence Requests Alert Improvements #43557](https://github.com/department-of-veterans-affairs/vets-website/pull/43557)
Google Analytics dashboard: [CST Stacked Alerts Fix Evidence Requests](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/g4xG59UTQxy8ROsnBUme5g)

## Release Plan

- [ ] 4-20-26 - Turn feature flag to 100%
- [ ] 4-21-26 - Datadog report: release day vs. the same day one month ago
- [ ] 4-22-26 - GA + Datadog report: first full day (Apr 21) vs. the same day one month ago
- [ ] 4-23-26 - GA + Datadog report: first two full days (Apr 21–22) vs. the same days one month ago
- [ ] 4-28-26 - GA + Datadog report: full week (Apr 21–27) vs. the same week one month ago

## What changes

When the feature flag is enabled:

### Your Claims page

- Claim (`ClaimsListItem`), appeal (`AppealListItem`), and STEM (`StemClaimListItem`) cards show a single "Action may be needed" warning tag. The tag replaces stacked blue ("We requested more information from you...") and red ("We need you to resubmit files for this claim.") alerts.

### Claim status tab

- Intro text (`ClaimStatusHeader`) changes from "Here's the latest information on your claim." to "Review the latest status of your claim."
- "What you need to do" (`WhatYouNeedToDo`) adds an intro paragraph when open requests exist: "We identified this information as needed to support your claim. We accept responses after the request date, but it may delay your claim."
- "What you need to do" adds a new expandable "Why we still say 'Action may be needed' after you've responded" when the card shows the tag but no open requests exist (`documentsNeeded = true` AND `filesNeeded` is empty)
- Evidence requests (`FilesNeeded`) render as cards with a "Requested by [date]" critical-action button, replacing the yellow warning alert with an "About this request" link
- Third-party requests in Recent Activity (`RecentActivity`, `NEEDED_FROM_OTHERS` items) show a "Requested for you" tag, body text, and a "Learn more about this notice" inline link — replacing the blue info alert with an "About this notice" link

### Claim files tab

- Intro text (`ClaimFileHeader`, open claims only) changes from "If you need to add evidence, you can do that here..." to "Add evidence or review files you've already uploaded for this claim."
- The files tab (`FilesPage`) shows a new "Review your requests" alert above the upload form when open requests exist, with a "Review requests" link back to the status tab
- The additional evidence page (`AdditionalEvidencePage`) no longer renders FilesNeeded (yellow) or FilesOptional (blue) listings; users are redirected to the status tab via the alert above

## GA Dashboard Tabs

### Your Claims - Sessions

Traffic on the Your Claims page. Unexpected spikes may indicate a bug prompting users to refresh; drops may indicate users aren't returning to the page.

- Rows: Page path and screen class
- Values: Active users, Sessions, Views
- Filters:
  - Page path and screen class `matches regex` `/track-claims/your-claims/?$`

### Your Claims - Events

All events on the Your Claims page. Claim cards switched from stacked alerts to a single tag, but the Details link behavior did not change — watch for a swing in Details clicks, which could mean the new tag changed how users decide which card to open.

- Rows: Event name, Link text
- Values: Event count
- Filters:
  - Page path and screen class `matches regex` `/track-claims/your-claims/?$`

### Status - Sessions

Traffic on the claim status tab. Unexpected spikes may indicate a bug prompting users to refresh; drops may indicate users aren't returning to the page.

- Rows: Page path and screen class
- Values: Active users, Sessions, Views
- Filters:
  - Page path and screen class `matches regex` `/track-claims/your-claims/[0-9]+/status/?$`

### Status - Events

All events on the claim status tab. Several changes land here at once — the signals below indicate which events should rise, drop to zero, or newly appear.

- Rows: Event name, Link text
- Values: Event count
- Filters:
  - Page path and screen class `matches regex` `/track-claims/your-claims/[0-9]+/status/?$`

Signals to watch:

- "Why we still say 'Action may be needed' after you've responded" (new expandable section)
  - Expected direction: 0 → >0
  - Why: a new explanation shows on the status tab when the "Action may be needed" tag is still on the card but no open requests exist
  - Note: this only appears in a narrow case, so counts will be modest
- "Learn more about this notice" link
  - Expected direction: near 0 → >0
  - Why: new link replacing an older blue alert for third-party requests in the Recent Activity section
- "About this notice" link
  - Expected direction: drops to 0
  - Why: the old blue alert in Recent Activity is replaced by plain text and the new "Learn more about this notice" link above
  - Note: the files tab has a separate "About this notice" link with the same name; filter by page path to isolate the status tab
- "Requested by [date]" critical-action button
  - Expected direction: 0 → >0
  - Why: new action button on each evidence request card, replacing the yellow alert with its "About this request" link
  - Note: this button's clicks may not appear in GA at all. If counts don't show up, use Datadog RUM to track them instead.
- "About this request" link
  - Expected direction: drops to 0
  - Why: the old yellow alert is replaced by the new card with a critical-action button
  - Note: the additional evidence page on the files tab fires the same event; filter by page path to isolate the status tab

### Status - As Referrer

Where users go after leaving the claim status tab. Evidence-request detail pages (`/.../needed-from-you/*`) are the main destination — expect roughly unchanged traffic there since both the old "About this request" link and the new "Requested by [date]" button route users to the same place. A meaningful drop could indicate the new button is less discoverable than the old link.

- Rows: Page path and screen class
- Values: Sessions
- Filters:
  - Page referrer `matches regex` `.*track-claims/your-claims/[0-9]+/status/?$`

### Files - Sessions

Traffic on the claim files tab. Unexpected spikes may indicate a bug prompting users to refresh; drops may indicate users aren't returning to the page.

- Rows: Page path and screen class
- Values: Active users, Sessions, Views
- Filters:
  - Page path and screen class `matches regex` `/track-claims/your-claims/[0-9]+/files/?$`

### Files - Events

All events on the claim files tab. Two links were removed from the additional evidence page, and a new "Review requests" link was added to the top of the tab — the signals below track those changes.

- Rows: Event name, Link text
- Values: Event count
- Filters:
  - Page path and screen class `matches regex` `/track-claims/your-claims/[0-9]+/files/?$`

Signals to watch:

- "Review requests" link
  - Expected direction: 0 → >0
  - Why: a new alert on the files tab points users back to the status tab when open requests exist
- "About this notice" link
  - Expected direction: drops to 0
  - Why: the optional-documents section that contained these links was removed from the additional evidence page
- "About this request" link
  - Expected direction: drops to 0
  - Why: the evidence-request cards that contained these links were removed from the additional evidence page

### Files - As Referrer

Where users go after leaving the claim files tab. Expect an increase in traffic to the status tab because the new "Review requests" link routes users there.

- Rows: Page path and screen class
- Values: Sessions
- Filters:
  - Page referrer `matches regex` `.*track-claims/your-claims/[0-9]+/files/?$`

## Datadog RUM

Datadog RUM (service: `benefits-claim-status-tool`) detects frustration signals (rage clicks, dead clicks, error clicks) that GA cannot. RUM captures a sample of total traffic, so view counts are not directly comparable to GA numbers.

Base RUM Explorer query: `service:benefits-claim-status-tool @view.url_path:/track-claims/your-claims`

Frustration filter adds: `@view.frustration.count:>0`

To isolate the pages affected by this release, narrow the query with:

- Claim status tab: `@view.url_path:/track-claims/your-claims/*/status`
- Claim files tab: `@view.url_path:/track-claims/your-claims/*/files`

### What to report

For each comparison window, report:

- Sampled views for the window (context for any rate changes — a big swing could just be traffic)
- Views with frustration and the resulting frustration rate
- Change in frustration rate in percentage points from the comparison window
- Notes on any session replays spot-checked when the rate moves meaningfully
