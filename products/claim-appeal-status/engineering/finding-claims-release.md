# Finding Claims Release

**Feature flag**: `cst_claims_list_filter`

## Monitoring Executive Summary

Based on two days of post-release data (Apr 8-9 vs Apr 1-2). Data sources: GA4 and Datadog RUM.

### Confirmed Working

- Filter component is active: 44,176 clicks on day 1, 34,764 on day 2. Closed (42%) is the most-clicked filter, consistent with In progress being the default.
- Content changes landed: "What if I can't find..." heading replaced by "If you can't find..." (1,498/1,396 went to 1, new heading now at 1,648/1,528 clicks). "Find out why we sometimes combine claims" additional info dropped to 0 events.

### Declines

- **Appeal detail sessions**: -7.6% (day 1, flat traffic) and -22.92% raw / -17% normalized (day 2). Closed appeals are now behind the Closed filter. Users who arrive with only closed claims would see an empty "In progress" list by default and may not notice the filter or the empty state message.
- **Details link clicks**: -13% (day 1) and -21.83% raw / -16% normalized (day 2).
- **Pagination**: -28% (day 1) and -47% (day 2). Fewer users are paginating past page 1.

### Increases

- **page_view**: +36% (day 1, flat traffic) and +22.58% (day 2). **Cause:** `YourClaimsPageV2.handleFilterChange` called `navigate(pathname)` unconditionally on every filter click, and vets-website auto-tracks SPA route changes as page views via Datadog RUM (`trackViewsManually: false` in `src/platform/monitoring/Datadog/index.js:58`) and GA4. Each filter click fired a same-URL pageview — roughly one per `int-button-segmented-click` event. Fixed in vets-website PR [#44088](https://github.com/department-of-veterans-affairs/vets-website/pull/44088); expect counts to drop by ~44k/day once deployed to production.
- **Self-navigation** (+35% day 1 / +109% day 2): **Same root cause.** Each filter-click-induced same-URL `navigate` produced a pageview whose `referrer` was also `/track-claims/your-claims`, which is exactly what the self-navigation metric counts. The earlier note that "testing confirmed this is not caused by filter clicks" was incorrect — the test missed that Datadog/GA4 auto-track history changes regardless of whether the URL visibly differs. Expect this metric to normalize alongside page_view after PR #44088 ships.
- **Claim letters navigation**: +41% (day 1) and +29% (day 2). Likely caused by less content on the page as closed claims are moved into the Closed tab.

### Frustration (Datadog RUM)

- Frustration rate increased from 7.4% to 9.6% (Apr 1-2 vs Apr 8-9)
- Frustration monitor did not trigger a warning or alert
- Session replays did not reveal a clear pattern
- The increase warrants continued monitoring

### Potential Concern: Default View Without Cards or With Far Fewer Cards

Users who navigate to `/track-claims/your-claims` with only closed claims (e.g., 10 closed, 0 in-progress) would see an empty list on the default "In progress" filter. These users may not notice the new filter component or the empty state message ("We don't have any in-progress records for you in our system.") and think their claims are missing. This scenario could be a common factor behind the appeal detail decline and the frustration rate increase. (Note: the self-navigation increase mentioned above is now attributed to the filter-click pageview bug, not a user behavior change, and will be resolved by PR #44088.)

### Action Items

- [ ] Investigate appeal detail session decline -- are users unable to find closed appeals behind the Closed filter?
- [x] Investigate unexplained page_view and self-navigation increases — root cause identified; fixed in vets-website PR [#44088](https://github.com/department-of-veterans-affairs/vets-website/pull/44088). Verify counts drop post-deploy.
- [x] Investigate claim letters navigation increase (+41% / +29%)
- [ ] Continue monitoring frustration rate over the full week
- [ ] Collect full 7-day comparison (Apr 1-7 vs Apr 8-14) for a more conclusive analysis
- [ ] Add a post-#44088 row to the page_view / self-navigation tables to confirm the expected drop

## Google Analytics Release Monitoring

[CST Claims Filter Release](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/6zMUJcZSTQCnSvzojYA7Kg)

Create or update the following GA4 Explore tabs to monitor the rollout. Record baseline and post-release values in the tables below to share with stakeholders.

- Release date: April 7, 2026
  - Fully Enabled Feature Flag at 10:45 PM ET. This allowed all users to get the new feature (and view it being used in all Datadog replays) while not being at the peak hours of the day
  - I watched a few dozen Datadog replays as well as looked at the frustration count. Neither showed anything concerning.
- Baseline: Mar 31 - Apr 6 (7 days before release)
- Post-release: Apr 7 - Apr 13 (first 7 days after release)
- Week 2: Apr 14 - Apr 20 (for trend comparison)

Use matching day-of-week windows to account for weekday/weekend traffic differences. Tables below use "Baseline" and "Post-release" as shorthand for these periods.

### Filter Clicks

- Goal: Monitor each filter button's usage (In progress, Closed, All). Confirm the component and analytics events are working. Assess how users interact with the filter.
- Rows: Link text
- Values: Event count
- Cell Type: Bar chart
- Filters:
  - DataLayer Event Name exactly matches `int-button-segmented-click`
  - Page path and screen class matches regex `.*track-claims/your-claims/?`
- Note: The GA4 event name is `button`, but that captures all button clicks on the page. Using `DataLayer Event Name = int-button-segmented-click` isolates just the segmented filter clicks. The Link text column will show "In progress", "Closed", and "All".

### On This Page Clicks

- Goal: Monitor all On This Page clicks. Confirm the new heading "If you can't find your claim, decision review, or appeal" appears and is being clicked.
- Rows: Link text
- Values: Event count
- Cell Type: Bar chart
- Filters:
  - Page path and screen class matches regex `.*track-claims/your-claims/?`
  - Event name exactly matches `on_this_page`

### Your Claims Events

- Goal: Monitor all events on the claims landing page only (not detail pages) to catch unexpected changes in user interactions.
- Rows: Event name, DataLayer Event Name, Link text
- Values: Event count
- Cell Type: Bar chart
- Filters:
  - Page path and screen class matches regex `.*track-claims/your-claims/?`

### Claim Detail Page Navigation

- Goal: Confirm users are still navigating to claim detail pages at normal rates. A drop could mean the default In progress filter is hiding claims users expect to see.
- Rows: Page path and screen class
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page referrer contains `/track-claims/your-claims`
  - Page path and screen class matches regex `.*track-claims/your-claims/[0-9].*`

### Appeal Detail Page Navigation

- Goal: Confirm users are still navigating to appeal detail pages at normal rates. A drop could mean closed appeals (now behind the Closed filter) are harder to find.
- Rows: Page path and screen class
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page referrer contains `/track-claims/your-claims`
  - Page path and screen class contains `/track-claims/appeals/`

### Outbound Navigation

- Goal: Ensure there is no unexpected change in where users navigate from the claims landing page.
- Rows: Page path and screen class
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page referrer matches regex `.*track-claims/your-claims/?`

---

### Report: April 1 vs April 8

Single-day comparison: Wednesday April 1 (pre-release) vs Wednesday April 8 (first full day post-release). Same day of week for a fair comparison.

**Traffic baseline**:

| Metric | Apr 1 | Apr 8 | Change |
|---|---|---|---|
| Total sessions | 69,696 | 69,782 | +0.12% |

Sessions were essentially identical. All behavioral changes below are real shifts in user behavior from the feature, not traffic differences.

#### Filter Clicks

| Filter Label | Apr 1 | Apr 8 |
|---|---|---|
| Totals | N/A | 44,176 |
| Closed | N/A | 18,277 |
| All | N/A | 13,445 |
| In progress | N/A | 12,454 |

Users are actively engaging with the filter. Closed has the most clicks (41%), which is expected since In progress is the default -- users who want to see closed claims must actively click.

#### On This Page Clicks

| Link Text | Apr 1 | Apr 8 | Change |
|---|---|---|---|
| Totals | 33,594 | 31,568 | -6% |
| Your claim letters | 15,253 | 12,845 | -16% |
| Your claims, decision reviews, or appeals | 14,468 | 14,925 | +3% |
| What if I can't find my claim, decision review, or appeal? | 1,498 | 1 | replaced |
| If you can't find your claim, decision review, or appeal | 0 | 1,648 | new |
| Additional services | 1,405 | 1,354 | -4% |
| Your travel reimbursement claims | 883 | 706 | -20% |
| Contact us | 81 | 79 | -2% |

The heading swap from "What if I can't find..." to "If you can't find..." completed cleanly (old dropped to 1, new at 1,648). The new heading is getting +10% more clicks than the old one (1,648 vs 1,498). Contact us is flat, indicating no user confusion.

#### Your Claims Events

| Event | Apr 1 | Apr 8 | Change |
|---|---|---|---|
| page_view | 127,799 | 173,485 | +36% |
| link_click / Details | 56,489 | 48,914 | -13% |
| additional_info / int-additional-info-collapse / "Find out why we sometimes combine claims" | 51 | 0 | -100% (removed) |
| button / int-button-segmented-click | N/A | 44,176 | new |

The +36% page_view increase on flat traffic (+0.12% sessions) is unexplained. Filter clicks do not trigger page_view events (verified in codebase -- `navigate()` calls dispatch `UPDATE_ROUTE` but this is not wired to fire analytics events in claims-status).

The -13% drop in Details link clicks is a real behavioral change on flat traffic.

The "Find out why we sometimes combine claims" additional info component dropped to 0 events, confirming it was successfully removed.

#### Claim Detail Page Navigation

| Metric | Apr 1 | Apr 8 | Change |
|---|---|---|---|
| Total sessions | 53,580 | 50,605 | -5.5% |

On flat traffic, 5.5% fewer sessions navigated to claim detail pages. This aligns with the -13% Details click drop -- the In progress filter surfaces the most relevant claims first, reducing the need to click through multiple claims.

#### Appeal Detail Page Navigation

| Metric | Apr 1 | Apr 8 | Change |
|---|---|---|---|
| Total sessions | 15,348 | 14,177 | -7.6% |

On flat traffic, 7.6% fewer sessions navigated to appeal detail pages. Closed appeals are now behind the Closed filter. Worth monitoring over the full week -- if this trend continues, it could indicate users are having trouble finding closed appeals.

#### Pagination

| Page | Apr 1 | Apr 8 | Change |
|---|---|---|---|
| ?page=2 | 359 | 253 | -29.5% |
| ?page=1 | 115 | 65 | -43.5% |
| ?page=3 | 47 | 46 | -2.1% |

Pagination to early pages dropped significantly. With the In progress filter narrowing the list, fewer users need to paginate past page 1 to find their claims. Total pagination sessions are small (~530 pre-release, ~384 post-release) relative to overall traffic.

#### Outbound Navigation

| Top Destination | Apr 1 | Apr 8 | Change |
|---|---|---|---|
| /track-claims/your-claim-letters | 14,579 | 20,624 | +41% |
| / | 13,912 | 14,048 | +1% |
| /track-claims/your-claims (combined with trailing slash) | 15,862 | 21,457 | +35% |
| /my-va/ | 5,100 | 5,077 | -0.5% |
| /contact-us/ | 128 | 123 | -4% |

The +41% increase in claim letters navigation is a real behavioral change on flat traffic. The cause is unclear from GA data alone.

The +35% increase in self-navigation is unexplained. Filter clicks do not trigger page_view or navigation events in GA (verified in codebase).

Homepage, My VA, and Contact us are all flat, confirming no disruption to normal navigation patterns.

### Report: April 2 vs April 9

Single-day comparison: Thursday April 2 (pre-release) vs Thursday April 9 (second full day post-release). Same day of week.

**Traffic baseline**:

| Metric | Apr 2 | Apr 9 | Change |
|---|---|---|---|
| Total sessions | 71,296 | 66,408 | -6.86% |

Unlike Apr 1 vs 8 where traffic was flat, Apr 9 had meaningfully fewer sessions. Raw percentage changes below overstate the behavioral impact -- the normalized change (adjusted for -6.86% traffic) is noted where significant.

#### Filter Clicks

| Filter Label | Apr 2 | Apr 9 |
|---|---|---|
| Totals | N/A | 34,764 |
| Closed | N/A | 14,585 |
| All | N/A | 10,908 |
| In progress | N/A | 9,271 | Distribution remains consistent with day 1 (Closed 42%, All 31%, In progress 27%). Lower absolute numbers than Apr 8 (44,176) align with the lower session count.

#### On This Page Clicks

| Link Text | Apr 2 | Apr 9 | Change |
|---|---|---|---|
| Totals | 33,475 | 29,863 | -10.79% |
| Your claims, decision reviews, or appeals | 14,809 | 13,811 | -6.74% |
| Your claim letters | 14,851 | 12,504 | -15.8% |
| If you can't find your claim, decision review, or appeal | 0 | 1,528 | new |
| What if I can't find my claim, decision review, or appeal? | 1,396 | 1 | replaced |
| Additional services | 1,401 | 1,260 | -10.06% |
| Your travel reimbursement claims | 941 | 677 | -28.06% |
| Contact us | 70 | 77 | +10% |

Heading swap remains clean (old: 1,396 to 1, new: 1,528). Most decreases are proportional to the -6.86% session drop. Contact us ticked up slightly (+10%) but absolute numbers are small (70 to 77) -- not a meaningful signal.

#### Your Claims Events

| Event | Apr 2 | Apr 9 | Change |
|---|---|---|---|
| page_view | 126,866 | 155,515 | +22.58% |
| link_click / Details | 57,509 | 44,954 | -21.83% |
| button / int-button-segmented-click | N/A | 34,764 | new |

Page view increase (+22.58%) on lower traffic (-6.86% sessions) is unexplained. The Details click drop (-21.83%) is larger than Apr 1 vs 8 (-13%). Adjusted for the -6.86% session drop, the normalized Details decrease is approximately -16%.

#### Claim Detail Page Navigation

| Metric | Apr 2 | Apr 9 | Change |
|---|---|---|---|
| Total sessions | 51,412 | 47,173 | -8.25% |

Adjusted for the -6.86% session drop, the normalized claim detail decrease is approximately -1.5%. Consistent with Apr 1 vs 8 (-5.5%).

#### Appeal Detail Page Navigation

| Metric | Apr 2 | Apr 9 | Change |
|---|---|---|---|
| Total sessions | 17,015 | 13,115 | -22.92% |

This is a significant drop. Adjusted for the -6.86% session drop, the normalized appeal detail decrease is approximately -17%. This is much larger than Apr 1 vs 8 (-7.6%) and warrants investigation. Closed appeals are now behind the Closed filter, and this second day of data strengthens the signal that users may be having difficulty finding their appeal detail pages.

#### Pagination

| Page | Apr 2 | Apr 9 | Change |
|---|---|---|---|
| ?page=2 | 351 | 180 | -48.7% |
| ?page=1 | 121 | 40 | -66.9% |
| ?page=3 | 50 | 36 | -28% |

Pagination dropped more sharply on day 2 than day 1. Total pagination sessions fell from ~528 to ~278 (-47%), compared to -28% on day 1. The In progress filter narrows the list, so fewer users need to paginate.

#### Outbound Navigation

| Top Destination | Apr 2 | Apr 9 | Change |
|---|---|---|---|
| /track-claims/your-claim-letters | 14,558 | 18,847 | +29.46% |
| / | 13,692 | 13,297 | -2.88% |
| /track-claims/your-claims (combined with trailing slash) | 8,724 | 18,243 | +109% |
| /my-va/ | 4,826 | 4,660 | -3.44% |

Self-navigation increased +109%. Cause unclear -- filter clicks do not trigger navigation events in GA (verified in codebase). Claim letters navigation continues to increase (+29.46%), consistent with day 1 (+41%).

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
- Notifications: Slack `#benefits-management-tools-claim-status-tool-alerts`, William Phelps, Nathan Thomas
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
