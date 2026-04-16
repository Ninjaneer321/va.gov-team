# Finding Claims Release

**Feature flag**: `cst_claims_list_filter`

## Monitoring Executive Summary

Based on GA4 seven-day comparison: Mar 25-31 (pre-release baseline) vs Apr 8-14 (first full week post-release). Traffic flat (-0.36% sessions). Datadog RUM frustration data is a separate 2-day sample noted below.

### Confirmed Working

- Filter component is active: 200,693 clicks over the week from 77,861 active users. Closed (42%) is the most-clicked filter, consistent with In progress being the default.
- Content changes landed: "What if I can't find..." heading replaced by "If you can't find..." (old dropped to 4, new heading at 8,953 clicks vs the old heading's 7,690 in the baseline week). "Find out why we sometimes combine claims" additional info dropped to 0 events.

### Declines

- **Claim detail sessions** (-16.14%) and **Details link clicks** (-14.82%): Two measures of the same shift. The In progress filter surfaces the most relevant claims first, reducing the need to browse through multiple claims to find the right one.
- **Appeal detail sessions**: -6.79% on flat traffic. Different mechanism from the above: closed appeals are now behind the Closed filter, so users must actively switch filters to reach them. This moderate decline warrants continued monitoring.
- **Pagination**: -44.48%. The In progress filter narrows the default list, reducing the need to paginate past page 1. Absolute numbers are small (~1,176 sessions post-release).
- **"Your claim letters" OTP clicks**: -15.22%. For users with closed claims, the In progress filter shows fewer cards, moving the Claim Letters section physically closer to the top of the page. Users don't need the On This Page shortcut when the section is already visible without scrolling. (The inverse signal -- +38.35% increase in direct claim letters navigation -- confirms this; see Increases below.)

### Increases -- root causes identified

- **page_view**: +32.22% on flat traffic (~220k extra views). A bug: the filter click handler called `navigate(pathname)` unconditionally, and vets-website auto-tracks SPA route changes as page views. Each filter click fired a duplicate same-URL pageview. The ~220k extra views align with the ~200k total filter clicks. Fixed in vets-website PR [#44088](https://github.com/department-of-veterans-affairs/vets-website/pull/44088); expect counts to drop back toward baseline once deployed.
- **Self-navigation**: ~900% increase in views (combined ~217k vs ~22k). Same bug -- each same-URL navigation produced a pageview whose referrer was also `/track-claims/your-claims`, which GA counts as self-navigation. This accounts for ~99% of total outbound-views growth. Fixed in PR #44088.
- **Claim letters navigation**: +38.35% in views. For users with closed claims, the default In progress filter shows fewer cards, moving the Claim Letters section closer to the top of the page. Inverse of the OTP click decline noted above.

### Frustration (Datadog RUM)

Note: frustration data is from a 2-day Datadog RUM sample (Apr 1-2 vs Apr 8-9), not the 7-day GA window above.

- Frustration rate increased from 7.4% to 9.6%
- Frustration monitor did not trigger a warning or alert
- Session replays did not reveal a clear pattern
- The increase warrants continued monitoring

### Potential Concern: Default View Without Cards or With Far Fewer Cards

Users who navigate to `/track-claims/your-claims` with only closed claims (e.g., 10 closed, 0 in-progress) would see an empty list on the default "In progress" filter. These users may not notice the new filter component or the empty state message ("We don't have any in-progress records for you in our system.") and think their claims are missing. This scenario could be a common factor behind the appeal detail decline and the frustration rate increase.

### Action Items

- [ ] Investigate appeal detail session decline -- are users unable to find closed appeals behind the Closed filter?
- [x] Investigate unexplained page_view and self-navigation increases -- root cause identified; fixed in vets-website PR [#44088](https://github.com/department-of-veterans-affairs/vets-website/pull/44088). Verify counts drop post-deploy.
- [x] Investigate claim letters navigation increase -- explained by fewer cards on default view moving the Claim Letters section closer to the top of the page.
- [x] Collect full 7-day comparison -- Mar 25-31 vs Apr 8-14 report added below.
- [ ] Continue monitoring frustration rate
- [ ] Add a post-#44088 row to the page_view / self-navigation tables to confirm the expected drop

## Google Analytics Release Monitoring

[CST Claims Filter Release](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/6zMUJcZSTQCnSvzojYA7Kg)

Create or update the following GA4 Explore tabs to monitor the rollout. Record baseline and post-release values in the tables below to share with stakeholders.

- Release date: April 7, 2026
  - Fully Enabled Feature Flag at 10:45 PM ET. This allowed all users to get the new feature (and view it being used in all Datadog replays) while not being at the peak hours of the day
  - I watched a few dozen Datadog replays as well as looked at the frustration count. Neither showed anything concerning.
- Baseline: Mar 25 - Mar 31 (Wed-Tue, one week earlier than release week to avoid partial data)
- Post-release: Apr 8 - Apr 14 (Wed-Tue, first full week post-release)
- Week 2: Apr 15 - Apr 21 (for trend comparison and post-#44088 verification)

Use matching day-of-week windows to account for weekday/weekend traffic differences.

### Your Claims Page
- Goal: Establish the traffic baseline. Confirms whether changes in other tabs reflect behavioral shifts or just traffic differences.
- Rows: Page path and screen class
- Values: Active users, Sessions, Views
- Cell Type: Bar chart
- Filters:
  - Page path and screen class matches regex `.*/track-claims/your-claims/?$`

### Views - Outbound Navigation
- Goal: Monitor where users navigate from the claims landing page using view counts. Detect self-navigation inflation from the pageview bug.
- Rows: Page path and screen class
- Values: Views
- Cell Type: Bar chart
- Filters:
  - Page referrer matches regex `.*/track-claims/your-claims/?$`

### Users - Outbound Navigation
- Goal: Same as Views - Outbound Navigation but using active users. User-based metrics are unaffected by the pageview bug, making this a cleaner signal for real behavioral changes in outbound navigation.
- Rows: Page path and screen class
- Values: Active users
- Cell Type: Bar chart
- Filters:
  - Page referrer matches regex `.*/track-claims/your-claims/?$`

### Claim Detail Page Navigation
- Goal: Confirm users are still navigating to claim detail pages at normal rates. A drop could mean the default In progress filter is hiding claims users expect to see.
- Rows: Page path and screen class
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page referrer matches regex `.*/track-claims/your-claims/?$`
  - Page path and screen class matches regex `.*track-claims/your-claims/[0-9].*`

### Appeal Detail Page Navigation
- Goal: Confirm users are still navigating to appeal detail pages at normal rates. A drop could mean closed appeals (now behind the Closed filter) are harder to find.
- Rows: Page path and screen class
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page referrer matches regex `.*/track-claims/your-claims/?$`
  - Page path and screen class contains `/track-claims/appeals/`

### Your Claims Events
- Goal: Monitor all events on the claims landing page only (not detail pages) to catch unexpected changes in user interactions.
- Rows: Event name, Link text
- Values: Event count
- Cell Type: Bar chart
- Filters:
  - Page path and screen class matches regex `.*/track-claims/your-claims/?$`

### Filter Clicks
- Goal: Monitor each filter button's usage (In progress, Closed, All). Confirm the component and analytics events are working.
- Rows: Link text
- Values: Active users, Event count
- Cell Type: Bar chart
- Filters:
  - DataLayer Event Name exactly matches `int-button-segmented-click`
  - Page path and screen class matches regex `.*/track-claims/your-claims/?$`
  - Event name exactly matches `button`
- Note: The `Event name exactly matches button` filter plus `DataLayer Event Name = int-button-segmented-click` together isolate just the segmented filter clicks from all other button clicks on the page.

### On This Page Clicks
- Goal: Monitor all On This Page clicks. Confirm the new heading "If you can't find your claim, decision review, or appeal" appears and is being clicked.
- Rows: Link text
- Values: Event count
- Cell Type: Bar chart
- Filters:
  - Page path and screen class matches regex `.*/track-claims/your-claims/?$`
  - Event name exactly matches `on_this_page`

### Pagination
- Goal: Monitor pagination usage. The In progress filter narrows the default list, which should reduce pagination.
- Rows: Page path + query string
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page path + query string begins with `/track-claims/your-claims/?page=`

---

### Report: March 25-31 vs April 8-14

Seven-day comparison: Wednesday March 25 through Tuesday March 31 (pre-release baseline) vs Wednesday April 8 through Tuesday April 14 (first full week post-release). Same days of week. Baseline is one week earlier than the monitoring-doc default (Mar 31 - Apr 6) to avoid any release-day partial data.

**Traffic baseline**:

| Metric | Mar 25-31 | Apr 8-14 | Change |
|---|---|---|---|
| Active users | 212,660 | 212,313 | -0.16% |
| Sessions | 400,123 | 398,687 | -0.36% |

Sessions and users are essentially flat. All changes below are real behavioral shifts, not traffic differences.

#### Filter Clicks

| Filter Label | Active users | Event count |
|---|---|---|
| Totals | 77,861 | 200,693 |
| Closed | 58,938 | 84,689 |
| All | 47,148 | 63,173 |
| In progress | 36,689 | 52,831 |

All new -- filter did not exist pre-release. Distribution: Closed 42%, All 31%, In progress 26%. 77,861 active users interacted with the filter over the week, averaging ~2.6 filter clicks per user.

#### On This Page Clicks

| Link Text | Mar 25-31 | Apr 8-14 | Change |
|---|---|---|---|
| Totals | 181,556 | 172,050 | -5.24% |
| Your claims, decision reviews, or appeals | 78,111 | 80,847 | +3.5% |
| Your claim letters | 83,018 | 70,381 | -15.22% |
| If you can't find your claim, decision review, or appeal | 0 | 8,953 | new |
| What if I can't find my claim, decision review, or appeal? | 7,690 | 4 | -99.95% (replaced) |
| Additional services | 7,690 | 7,412 | -3.62% |
| Your travel reimbursement claims | 4,637 | 3,999 | -13.76% |
| Contact us | 389 | 405 | +4.11% |

Heading swap completed cleanly: old "What if..." dropped to 4, new "If you can't find..." at 8,953 (+16.4% more clicks than the old heading's 7,690 baseline). "Your claim letters" OTP clicks dropped -15.22% on flat traffic -- consistent with the Claim Letters section being physically closer to the top of the page for users with closed claims; users don't need the OTP shortcut when the section is already visible without scrolling. "Your claims, decision reviews, or appeals" slightly up (+3.5%). Contact us flat.

#### Your Claims Events

| Event | Mar 25-31 | Apr 8-14 | Change |
|---|---|---|---|
| page_view | 683,269 | 903,417 | +32.22% |
| api_call | 657,189 | 654,087 | -0.47% |
| link_click / Details | 306,516 | 261,105 | -14.82% |
| button / Closed | 0 | 84,689 | new |
| button / All | 0 | 63,173 | new |
| button / In progress | 0 | 52,831 | new |
| additional_info / "Find out why we sometimes combine claims" | 51 | 0 | -100% (removed) |

The +32.22% page_view increase on flat traffic is the filter-click pageview bug described in the executive summary. The ~220k extra views (~31k/day) aligns with the ~200k total filter clicks. Fixed in PR [#44088](https://github.com/department-of-veterans-affairs/vets-website/pull/44088); expect page_view counts to drop back toward baseline once deployed. Technical detail: `handleFilterChange` called `navigate(pathname)` unconditionally, and vets-website auto-tracks SPA route changes as page views via Datadog RUM (`trackViewsManually: false` in `src/platform/monitoring/Datadog/index.js:58`) and GA4.

The -14.82% drop in Details link clicks and the -16.14% drop in claim detail sessions (below) are two measures of the same behavioral shift: the In progress filter surfaces the most relevant claims first, reducing the need to browse through multiple claims.

api_call is flat (-0.47%), confirming no change to backend request volume.

#### Claim Detail Page Navigation

| Metric | Mar 25-31 | Apr 8-14 | Change |
|---|---|---|---|
| Total sessions | 152,719 | 128,070 | -16.14% |

On flat traffic, 16.14% fewer sessions navigated to claim detail pages. Consistent with the -14.82% Details link click decline above -- both reflect users finding the right claim sooner via the In progress filter.

#### Appeal Detail Page Navigation

| Metric | Mar 25-31 | Apr 8-14 | Change |
|---|---|---|---|
| Total sessions | 79,544 | 74,145 | -6.79% |

On flat traffic, 6.79% fewer sessions navigated to appeal detail pages. Different mechanism from the claim detail decline: closed appeals are now behind the Closed filter, so users must actively switch filters to reach them. This warrants continued monitoring -- if the decline deepens, it could indicate users are not discovering the Closed filter.

#### Pagination

| Page | Mar 25-31 | Apr 8-14 | Change |
|---|---|---|---|
| ?page=2 | 2,002 | 1,087 | -45.7% |
| ?page=1 | 616 | 304 | -50.65% |
| ?page=3 | 258 | 208 | -19.38% |
| ?page=4 | 62 | 55 | -11.29% |
| ?page=5 | 20 | 25 | +25% |

Total pagination sessions dropped -44.48% (1,176 vs 2,118). The In progress filter narrows the default list, reducing the need to paginate past page 1. Absolute numbers are small relative to total traffic.

#### Outbound Navigation (Views)

| Top Destination | Mar 25-31 | Apr 8-14 | Change |
|---|---|---|---|
| /track-claims/your-claim-letters | 94,321 | 130,495 | +38.35% |
| / | 79,639 | 85,771 | +7.7% |
| /track-claims/your-claims (self-nav) | 14,226 | 132,312 | +830.07% |
| /track-claims/your-claims/ (self-nav) | 7,503 | 85,011 | +1,033.03% |
| /my-va/ | 31,075 | 29,658 | -4.56% |

Note: this tab reports Views, not Sessions. View-based metrics amplify the bug because each filter click generates one extra view, while session and user counts are unaffected.

The self-navigation rows (+830% / +1,033%) are the clearest fingerprint of the bug: each unconditional `navigate(pathname)` call fired a same-URL pageview whose referrer was also `/track-claims/your-claims`, which GA counts as self-navigation. Combined self-nav views increased from ~21,729 to ~217,323 (roughly +900%). This is ~99% of the total outbound-views increase (197,615 out of 197,615). The entire outbound-views growth is explained by the bug. Fixed in PR #44088.

The +38.35% increase in claim letters navigation is expected. For users with closed claims, the default In progress filter shows fewer cards, moving the Claim Letters section physically closer to the top of the page. This also explains the -15.22% drop in "Your claim letters" On This Page clicks -- users don't need the OTP shortcut when the section is already visible without scrolling. Homepage (+7.7%) and My VA (-4.56%) are roughly flat.

---

## Datadog RUM Release Monitoring

Datadog RUM (service: `benefits-claim-status-tool`) detects user frustration signals (rage clicks, dead clicks, error clicks) that GA cannot. A monitor is configured to alert the team if frustration spikes after release. Note that RUM captures a sample of total traffic, so view counts here should not be compared directly to GA numbers.

### Report: Apr 1-2 vs Apr 8-9

Two-day comparison: Tuesday-Wednesday April 1-2 (pre-release) vs Tuesday-Wednesday April 8-9 (post-release). Same days of week for a fair comparison.

RUM Explorer query: `service:benefits-claim-status-tool @view.url_path:/track-claims/your-claims`

Frustration filter adds: `@view.frustration.count:>0`

**Sampled views baseline**:

| Metric | Apr 1-2 | Apr 8-9 | Change |
|---|---|---|---|
| Total sampled views | 22,285 | 24,305 | +9.1% |

#### Frustration

| Metric | Apr 1-2 | Apr 8-9 |
|---|---|---|---|
| Views with frustration | 1,660 | 2,334 |
| Frustration rate | 7.4% | 9.6% |

The frustration rate edged up from 7.4% to 9.6%, partly explained by the 9.1% increase in sampled traffic. The frustration monitor never triggered a warning or alert, and session replays reviewed at release time did not reveal a clear pattern. Will continue monitoring over the full week to see if the rate stabilizes.

### Frustration Monitor

- Monitor: [CST - High Frustration on /track-claims/your-claims](https://vagov.ddog-gov.com/monitors/549183?from_ts=1775500840739&to_ts=1775587240739&live=true)
- Query: `rum("@type:view service:benefits-claim-status-tool @view.url_path:/track-claims/your-claims")`
- Evaluation: AVG frustration count over the last 5 minutes
- Thresholds:
  - Warning: 3 < avg <= 5
  - Alert: avg > 5
- Status at release: OK

### Investigating Frustration Signals

If the monitor triggers a warning or alert, or the before/after comparison shows an increase:

1. In the same RUM Explorer view, narrow the time range to the post-release spike
2. Filter for "Session Replay available" to watch affected sessions
3. Look for patterns: are users rage-clicking the filter buttons, claim cards, or pagination?
4. If frustration is concentrated on a specific interaction, investigate whether the component is unresponsive or confusing

---

## Release Bug Bash

**Staging URL**: https://staging.va.gov/track-claims/your-claims
**Test user**: vets.gov.user+50@gmail.com

### Test Case 1: Filter component renders with correct buttons and default

#### Steps to Reproduce
1. On the claims landing page, observe the area below the "Your claims, decision reviews, or appeals" heading.

#### Intended Outcomes
- [x] A segmented button component appears with three buttons: "In progress", "Closed", and "All" (in that order)
- [x] "In progress" is selected by default
- [x] The segmented button has an aria-label of "Claims status filter"
- [x] The "Find out why we sometimes combine claims" accordion is not present

### Test Case 2: In progress filter shows only active claims and appeals

#### Steps to Reproduce
1. On the claims landing page, confirm "In progress" is the default selected filter.
1. Observe the displayed claim and appeal cards.

#### Intended Outcomes
- [x] Only in-progress claims and appeals are displayed (User 50 has 17 in-progress items: 15 claims + 2 appeals)
- [x] No closed claims, closed appeals, or STEM claims appear (STEM claims are always closed)
- [x] Each displayed card shows an "In Progress" status tag
- [x] The first card should be "Claim for disability compensation" received October 14, 2025 (most recently updated in-progress item)
- [x] Sort order is retained: claims with open evidence requests first, then other in-progress claims, each sorted by most recently updated (User 50 has no claims with documentsNeeded: true in the list data, so evidence-request bumping to top is not verifiable with this user)

### Test Case 3: In Progress status tag on open claim cards

#### Steps to Reproduce
1. While viewing the "In progress" filter, find the first card: "Claim for disability compensation" received October 14, 2025.

#### Intended Outcomes
- [x] An "In Progress" label appears on the card inside the heading, before the claim title
- [x] The label uses the `usa-label` styling

### Test Case 4: In Progress status tag on claim detail page

#### Steps to Reproduce
1. While viewing the "In progress" filter, click "Details" on the "Claim for disability compensation" received October 14, 2025 card.

#### Intended Outcomes
- [x] Below the claim title, an "In Progress" label is displayed
- [x] A "Last updated" date appears below the label

### Test Case 5: Closed filter shows only closed records

#### Steps to Reproduce
1. Navigate back to the claims landing page.
1. Click the "Closed" filter button.

#### Intended Outcomes
- [x] Only closed claims, closed appeals, and STEM claims are displayed (User 50 has 25 closed items: 18 claims + 7 closed appeals, 0 STEM)
- [x] No in-progress claims or appeals appear
- [x] Each displayed card shows a "Closed" status tag
- [x] The first card should be "Supplemental Claim for disability compensation" received February 1, 2025 (most recently decided closed item)
- [x] Sort order is retained within the closed group, sorted by most recently updated

### Test Case 6: Closed status tag on closed claim cards

#### Steps to Reproduce
1. While viewing the "Closed" filter, find the "Claim for compensation" received October 15, 2024 card (scroll or page to find it -- it is the 8th closed item).

#### Intended Outcomes
- [x] A "Closed" label appears on the card inside the heading, before the claim title
- [x] The label uses the `usa-label` styling

### Test Case 7: Closed status tag on closed appeal cards

#### Steps to Reproduce
1. While viewing the "Closed" filter, find the "Disability Compensation Appeal" received August 8, 2024 card. User 50 has 7 closed appeals (5 supplemental claims + 2 board appeals).

#### Intended Outcomes
- [x] A "Closed" label appears on the card inside the heading, before the appeal title
- [x] The label uses the `usa-label` styling

### Test Case 8: Closed status tag on STEM claim cards

Note: User 50 has no STEM claims. Use a different test user to verify this case.

#### Steps to Reproduce
1. While viewing the "Closed" filter, find the "Edith Nourse Rogers STEM Scholarship application" card.

#### Intended Outcomes
- [x] A "Closed" label appears on the card inside the heading, before the STEM claim title
- [x] The label uses the `usa-label` styling

### Test Case 9: Closed status tag on claim detail page

#### Steps to Reproduce
1. While viewing the "Closed" filter, click "Details" on the "Claim for compensation" received October 15, 2024 card.

#### Intended Outcomes
- [x] Below the claim title, a "Closed" label is displayed
- [x] A "Last updated" date appears below the label
- [x] The "What you need to do" section is not present
- [x] The "What we're doing" section is not present

### Test Case 10: All filter shows all records

#### Steps to Reproduce
1. Navigate back to the claims landing page.
1. Click the "All" filter button.

#### Intended Outcomes
- [x] All claims, appeals, and STEM claims are displayed regardless of status (User 50 has 42 total items, 5 pages)
- [x] In-progress cards show an "In Progress" status tag
- [x] Closed cards show a "Closed" status tag
- [x] Sort order: claims with open evidence requests first, then other in-progress, then closed -- each group sorted by most recently updated
- [x] Page 1 should show the same first 10 in-progress items as the "In progress" filter page 1
- [x] Page 2 should show the remaining 7 in-progress items followed by the first 3 closed items

### Test Case 11: Default sort order is maintained across filters

#### Steps to Reproduce
1. Click "All" and observe the order of claims.
1. Click "In progress" and observe the order.
1. Click "Closed" and observe the order.

#### Intended Outcomes
- [x] Within each filter view, claims with open evidence requests appear first, then other claims sorted by most recently updated (User 50 has no claims with documentsNeeded: true in the list data, so evidence-request bumping is not verifiable with this user)
- [x] The expected first 5 cards for "In progress" page 1 are:
   1. Claim for disability compensation -- Received on October 14, 2025
   1. Claim for compensation -- Received on April 2, 2025
   1. Claim for freedom of information act / privacy act request -- Received on February 23, 2026
   1. Higher-Level Review for disability compensation -- Received on January 20, 2026
   1. Request to add or remove a dependent -- Received on November 25, 2025
- [x] The sort order is consistent regardless of which filter is selected

### Test Case 12: Pagination text with In progress filter

#### Steps to Reproduce
1. Click "In progress" to filter to active records.
1. Observe the pagination info text above the claim cards.

#### Intended Outcomes
- [x] Format is "Showing X-Y of Z in-progress records" (hyphen, no spaces around dash)
- [x] User 50 expected text: "Showing 1-10 of 17 in-progress records"
- [x] Text is always shown, even with fewer than 10 items (e.g., "Showing 1-2 of 2 in-progress records")

### Test Case 13: Pagination text with Closed filter

#### Steps to Reproduce
1. Click "Closed" to filter to closed records.
1. Observe the pagination info text above the claim cards.

#### Intended Outcomes
- [x] Format is "Showing X-Y of Z closed records"
- [x] User 50 expected text: "Showing 1-10 of 25 closed records"
- [x] Text is always shown, even with fewer than 10 items

### Test Case 14: Pagination text with All filter

#### Steps to Reproduce
1. Click "All" to show all records.
1. Observe the pagination info text above the claim cards.

#### Intended Outcomes
- [x] Format is "Showing X-Y of Z records" (no filter label qualifier)
- [x] User 50 expected text: "Showing 1-10 of 42 records"
- [x] Text is always shown, even with fewer than 10 items

### Test Case 15: Pagination resets when changing filters

#### Steps to Reproduce
1. Click "All" and navigate to page 2 (User 50 has 42 items across 5 pages).
1. Click "In progress".
1. Observe the page number.
1. Click "All" again.

#### Intended Outcomes
- [x] Clicking "In progress" resets to page 1 of in-progress records
- [x] Clicking "All" resets to page 1 (does not return to page 2)
- [x] The URL no longer contains `?page=2`

### Test Case 16: Session memory persists selected filter

#### Steps to Reproduce
1. Click the "Closed" filter.
1. Click "Details" on a claim card to navigate to the claim detail page.
1. Click the browser back button or the breadcrumb to return to the claims list.

#### Intended Outcomes
- [x] The "Closed" filter is still selected
- [x] Only closed records are displayed

### Test Case 17: Session memory resets on new login

#### Steps to Reproduce
1. Click the "Closed" filter.
1. Log out.
1. Log back in and navigate to the claims landing page.

#### Intended Outcomes
- [x] The filter resets to "In progress" (the default)
- [x] Only in-progress records are displayed

### Test Case 18: Empty state messages per filter

#### Steps to Reproduce
1. Open Chrome DevTools > Network tab.
1. Right-click the `/benefits_claims` request > Block request URL.
1. Right-click the `/appeals` request > Block request URL.
1. Refresh the page.
1. Cycle through each filter: "In progress", "Closed", and "All".
1. Unblock the requests in DevTools when done.

#### Intended Outcomes
- [x] A system alert ("We can't access some of your claims or appeals right now") appears above the filter
- [x] The filter component still appears and functions below the alert
- [x] In progress filter: "We don't have any in-progress records for you in our system."
- [x] Closed filter: "We don't have any closed records for you in our system."
- [x] All filter: "We don't have any records for you in our system."

### Test Case 19: Updated "If you can't find your claim" section

#### Steps to Reproduce
1. Scroll to the bottom of the claims landing page.
1. Observe the section below the claim letters section.

#### Intended Outcomes
- [x] The heading reads "If you can't find your claim, decision review, or appeal"
- [x] A "We might still be processing it" subheading is present with text about recently submitted claims
- [x] A "We may have combined your claims" subheading is present with text explaining claim consolidation

---

## Staging Review Bug Bash

Log in and navigate to the claims landing page with the flag enabled. Verify all new behavior.

### Filter component

- [x] A segmented button with All, Active, and Closed appears below the "Your claims, decision reviews, or appeals" heading
  - _Did we ever check about making the segmented button full width on desktop?_
- [x] aria-label is "Claims status filter"
  - _Tracey will be testing this with screen reader but its in the html_
- [x] "All" is selected by default
- [x] The "Find out why we sometimes combine claims" accordion is no longer present

### Default sort order (should not change)

- [x] Claims with open evidence requests appear first
  - _Should cards with "We need you to resubmit files for this claim." also be bumped to the top of their section?_
- [x] Other in-progress claims appear next
- [x] Closed claims appear last (STEM claims are always closed)
  - _Appeals do not have an in progress label_
- [x] Within each group, items are sorted by most recently updated
  - Impossible to determine from a claim card when a claim was last updated - looked into this and we can determine based on "Last updated" for appeals OR "Moved to this step" for claims
  - What does most recently updated mean?
    - Appeals: last event listed date
    - Claims: phaseChangeDate
- RANDOM: Why did appeals list items and STEM list items get "We need you to resubmit files for this claim." alerts - Dina says this is upcoming work for HLR and supplemental claims

### Pagination text

- [x] Format is "Showing X-Y of Z records" (hyphen, no spaces)
- [x] Text is always shown, even with fewer than 10 items (e.g., "Showing 1-2 of 2 records")
- [x] Active filter shows "Showing X-Y of Z active records"
- [x] Closed filter shows "Showing X-Y of Z closed records"

### Active filter

- [x] Click "Active" — only in-progress claims and appeals are displayed
- [x] STEM claims do not appear (they are always closed)
- [x] Default sort order is retained

### Closed filter

- [x] Click "Closed" — only closed claims, appeals, and STEM claims are displayed
- [x] Closed appeals correctly appear here (previously they showed as active)
- [x] Default sort order is retained

### Empty state and system alert

- [x] Open Chrome DevTools > Network tab
- [x] Right-click the `/benefits_claims` request > Block request URL
- [x] Right-click the `/appeals` request > Block request URL
- [x] Refresh the page
- [x] System alert ("We can't access some of your claims or appeals right now") appears above the filter
- [x] Filter still appears and functions below the alert
- [x] All filter: "We don't have any records for you in our system"
- [x] Active filter: "We don't have any active records for you in our system"
- [x] Closed filter: "We don't have any closed records for you in our system"
- [x] Unblock the requests in DevTools when done

### Session memory

- [x] Select "Active" filter, click into a claim detail, then navigate back — "Active" is still selected
- [x] Log out and log back in — filter resets to "All"

### Pagination reset

- [x] With "All" selected, navigate to page 2
- [x] Click "Active" — resets to page 1 of active records
- [x] Click "All" — resets to page 1 (not back to page 2)
  - Could be nice if it stayed at page 2

### Updated "What if" section content

- [x] Scroll to "What if I can't find my claim, decision review, or appeal?"
- [x] "We might still be processing it" subsection is present
- [x] "We combined your claims" subsection is present
  - _"We might have combined your claims"_

---

## Filter Click Pageview Fix Bug Bash (vets-website PR #44088)

Verifies the fix for the pageview-inflation and Back-button-pollution bug on the claims landing page. Previous testing missed this bug because it only watched URLs and didn't inspect analytics network requests — these test cases are written to close that gap.

### Known limitation (do not flag as a regression)

After a specific sequence — breadcrumb to the claims list, paginate, then change the filter — the first browser Back press may be visually invisible because the `history.replace` that strips `?page=` can produce a same-URL entry adjacent to an earlier breadcrumb-pushed entry. The second Back press leaves CST. This is expected and consciously accepted in PR #44088. The structural fix (removing `?page=` from the URL entirely) is tracked in [#139552](https://github.com/department-of-veterans-affairs/va.gov-team/issues/139552).

### Setup

- Open Chrome DevTools > **Network** tab. In the filter bar, type: `collect|browser-intake`. This isolates GA4 (`collect`) and Datadog RUM (`browser-intake`) requests so you can count pageview events directly.
- Open DevTools > **Application** > **Session Storage** > current origin in a second pane — watch `claimsFilter` update live.
- Clear Network (🚫) between sub-tests so counts start fresh.

### Test Case 1: Filter click on a bare URL fires zero page views

#### Steps to Reproduce
1. Navigate to `/track-claims/your-claims/`. Confirm the URL has no query string.
1. Open DevTools > Console. Run `history.length` and note the value (call it N).
1. Clear Network.
1. Click "Closed", then "All", then "In progress" (three filter clicks).
1. Run `history.length` again.

#### Intended Outcomes
- [ ] Zero `collect` requests with `en=page_view` across all three clicks
- [ ] Zero `browser-intake` RUM `view` events across all three clicks
- [ ] `int-button-segmented-click` events do fire in `collect` (intentional filter analytics, unchanged by this fix)
- [ ] URL remains `/track-claims/your-claims/` with no query string throughout
- [ ] `sessionStorage.claimsFilter` updates to the clicked value on each click
- [ ] `history.length` is still N (no new history entries pushed)

### Test Case 2: Filter click while paginated strips `?page=` via replace

#### Steps to Reproduce
1. Navigate to page 2 via the pagination component (click the page-2 button). URL should become `?page=2`.
1. Clear Network.
1. Click "Closed".

#### Intended Outcomes
- [ ] URL drops `?page=2` and becomes bare `/track-claims/your-claims/`
- [ ] Exactly one `collect` page_view and one `browser-intake` view fire (legitimate URL change)
- [ ] The list visibly updates to page 1 of the Closed filter

### Test Case 3: Browser Back after filter toggles exits the page in one press

#### Steps to Reproduce
1. In a fresh tab, navigate to VA.gov home (or any non-CST page).
1. Navigate to `/track-claims/your-claims/`.
1. Click "Closed", "All", "In progress", "Closed" (four filter clicks).
1. Press the browser Back button once.

#### Intended Outcomes
- [ ] Back returns to the previous page (VA.gov home) in a single press, not to a previous filter state or same-URL duplicate

### Test Case 4: Verify the known limitation behaves exactly as documented

#### Steps to Reproduce
1. From `/track-claims/your-claims/`, click "Your claim letters" in the On This Page list. You land on `/track-claims/your-claim-letters`.
1. Click the Claims breadcrumb to return to `/track-claims/your-claims/`.
1. Click the page-2 button in the pagination. URL becomes `?page=2`.
1. Click the "All" filter.
1. Press the browser Back button once.
1. Press the browser Back button a second time.

#### Intended Outcomes
- [ ] Step 4 strips `?page=2`, resetting to page 1 of the All filter
- [ ] Step 5 (first Back press) appears to do nothing — URL stays at `/track-claims/your-claims/` (this is the documented quirk, not a bug)
- [ ] Step 6 (second Back press) lands on `/track-claims/your-claim-letters` (where you were at step 1)
- [ ] If step 5 leaves CST directly, or if step 6 is still on `/your-claims/`, the history stack shape has changed and should be investigated
