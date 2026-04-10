# Finding Claims Release

**Feature flag**: `cst_claims_list_filter`

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

#### Filter Clicks

| Filter Label | Apr 1 | Apr 8 |
|---|---|---|
| Closed | N/A | 18,277 |
| All | N/A | 13,445 |
| In progress | N/A | 12,454 |

Users are actively engaging with the filter. Closed has the most clicks (41%), which is expected since In progress is the default. The total of 44,176 filter interactions on day one indicates strong adoption.

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
| accordion / int-accordion-expand | 8 | 12 | negligible |
| button / int-button-segmented-click | N/A | 44,176 | new |

The +36% page_view increase (45,686 additional views) is almost exactly explained by the 44,176 filter clicks. Each filter click calls `navigate()` to reset pagination, which triggers a new page_view event. This is expected behavior, not a traffic increase.

The -13% drop in Details link clicks (7,575 fewer) could indicate that the default In progress filter helps users find their relevant claims faster, requiring fewer click-throughs. Alternatively, this could be normal day-to-day variation. Worth monitoring over the full week to confirm the trend.

Accordion events remain negligible on the landing page (8 to 12) -- these are site-wide banner/footer accordions only.

#### Claim Detail Page Navigation

| Metric | Apr 1 | Apr 8 | Change |
|---|---|---|---|
| Total sessions | 53,580 | 50,605 | -5.5% |

Slight decrease in claim detail navigation. The default In progress filter shows the most relevant claims first, so users may be finding their claims with fewer clicks. A -5.5% change is within normal day-to-day variation. No sign that the filter is hiding claims users need.

#### Appeal Detail Page Navigation

| Metric | Apr 1 | Apr 8 | Change |
|---|---|---|---|
| Total sessions | 15,348 | 14,177 | -7.6% |

Slight decrease in appeal detail navigation. Closed appeals are now behind the Closed filter, so a small decrease is plausible if some users haven't discovered the filter yet. However, -7.6% on a single day is within normal variation. Worth monitoring -- if this trend continues over the full week, it could indicate users are having trouble finding closed appeals.

#### Outbound Navigation

| Top Destination | Apr 1 | Apr 8 | Change |
|---|---|---|---|
| /track-claims/your-claim-letters | 14,579 | 20,624 | +41% |
| / | 13,912 | 14,048 | +1% |
| /track-claims/your-claims (combined with trailing slash) | 15,862 | 21,457 | +35% |
| /my-va/ | 5,100 | 5,077 | -0.5% |
| /contact-us/ | 128 | 123 | -4% |

The +41% increase in claim letters navigation is notable.

The +35% increase in self-navigation (/track-claims/your-claims) is expected -- filter clicks trigger `navigate()` to reset pagination, generating additional navigation events.

Homepage, My VA, and Contact us are all flat, confirming no disruption to normal navigation patterns and no frustration signal.

---

## Datadog RUM Release Monitoring

Datadog RUM (service: `benefits-claim-status-tool`) detects user frustration signals (rage clicks, dead clicks, error clicks) that GA cannot. A monitor is configured to alert the team if frustration spikes after release.

### Before/After Frustration Comparison

Use the RUM Explorer to compare frustration levels before and after release:

1. Open the [RUM Explorer with frustration filter](https://vagov.ddog-gov.com/rum/sessions?query=@type:view%20service:benefits-claim-status-tool%20@view.url_path:/track-claims/your-claims%20@view.frustration.count:%3E0&agg_m=count&agg_m_source=base&agg_t=count&fromUser=true&viz=stream&from_ts=1775496671753&to_ts=1775669471753&live=true)
2. Switch to Timeseries view and set the time range to cover both the baseline and post-release periods
3. Eyeball the chart for a visible increase in frustration count after the release timestamp (April 7, 10:45 PM ET)
4. If the post-release frustration level looks noticeably higher than the baseline, investigate using the steps below

| Metric | Baseline | Post-Release | Change | Status |
|---|---|---|---|---|
| Views with frustration (`@view.frustration.count:>0`) | | | | |

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
