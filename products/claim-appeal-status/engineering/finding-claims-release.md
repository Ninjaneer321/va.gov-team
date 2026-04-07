# Finding Claims Release

**Feature flag**: `cst_claims_list_filter`

## Google Analytics Release Monitoring

[CST Claims Filter Release](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/6zMUJcZSTQCnSvzojYA7Kg)

Create or update the following GA4 Explore tabs to monitor the rollout. Record baseline and post-release values in the tables below to share with stakeholders.

- Release date: April 7, 2026
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
  - Page path and screen class contains `/track-claims/your-claims`
  - DataLayer Event Name exactly matches `int-button-segmented-click`
- Note: The GA4 event name is `button`, but that captures all button clicks on the page. Using `DataLayer Event Name = int-button-segmented-click` isolates just the segmented filter clicks. The Link text column will show "In progress", "Closed", and "All".
- What to watch for: All three labels should appear. Expect Closed and All to have the most clicks since In progress is the default.

| Filter Label | Week 1 Count | Week 2 Count | Notes |
|---|---|---|---|
| In progress | | | |
| Closed | | | |
| All | | | |

### On This Page Component Clicks

- Goal: Monitor all On This Page clicks. Confirm the new heading "If you can't find your claim, decision review, or appeal" appears and is being clicked.
- Rows: Link text
- Values: Event count
- Cell Type: Bar chart
- Filters:
  - Page path and screen class contains `/track-claims/your-claims`
  - Event name exactly matches `on_this_page`
- What to watch for: The old heading "What if I can't find my claim, decision review, or appeal?" should disappear. The new heading should appear. Overall click volume should remain stable.

| Link Text | Baseline | Post-Release | Change |
|---|---|---|---|
| Totals | 186,054 | | |
| Your claim letters | 83,360 | | |
| Your claims, decision reviews, or appeals | 80,749 | | |
| What if I can't find my claim, decision review, or appeal? | 7,990 | should be 0 | |
| If you can't find your claim, decision review, or appeal | 0 | should appear | |
| Additional services | 7,963 | | |
| Your travel reimbursement claims | 4,924 | | |
| Contact us | 1,020 | | |

### All User Events

- Goal: Broad monitoring to catch any unexpected change in standard user interactions.
- Rows: Event name, DataLayer Event Name, Link text
- Values: Event count
- Cell Type: Bar chart
- Filters:
  - Page path and screen class contains `/track-claims/your-claims`
- What to watch for: No drops in page_view, claims_view_details, or Details link clicks. `accordion` / `int-accordion-expand` events should drop to 0 (the "Find out why we sometimes combine claims" accordion was removed). New `button_segmented` events should appear.

| Event | Baseline | Post-Release | Change | Status |
|---|---|---|---|---|
| page_view | 1,977,137 | | | |
| claims_view_details | 770,451 | | | |
| link_click / Details | 311,383 | | | |
| accordion / int-accordion-expand | 98,642 | | should drop to 0 | |
| button / int-button-segmented-click | N/A (new) | | | |

### Claim Detail Page Navigation

- Goal: Confirm users are still navigating to claim detail pages at normal rates. A drop could mean the default In progress filter is hiding claims users expect to see.
- Rows: Page path and screen class
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page referrer contains `/track-claims/your-claims`
  - Page path and screen class matches regex `.*track-claims/your-claims/[0-9].*`
- What to watch for: Compare week-over-week. The regex ensures only claim detail paths (which have a numeric ID) are matched, excluding the landing page itself. GA4 "matches regex" requires full string matching, so `.*` anchors are needed on both sides.

| Metric | Baseline | Post-Release | Change | Status |
|---|---|---|---|---|
| Total sessions to claim detail pages | 284,052 | | | |

### Appeal Detail Page Navigation

- Goal: Confirm users are still navigating to appeal detail pages at normal rates. A drop could mean closed appeals (now behind the Closed filter) are harder to find.
- Rows: Page path and screen class
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page referrer contains `/track-claims/your-claims`
  - Page path and screen class contains `/track-claims/appeals/`
- What to watch for: Compare week-over-week. Appeal detail paths look like `/track-claims/appeals/A5583/status`.

| Metric | Baseline | Post-Release | Change | Status |
|---|---|---|---|---|
| Total sessions to appeal detail pages | 84,922 | | | |

### Outbound Navigation

- Goal: Ensure there is no unexpected change in where users navigate from the claims landing page.
- Rows: Page path and screen class
- Values: Sessions
- Cell Type: Bar chart
- Filters:
  - Page referrer contains `/track-claims/your-claims`
- What to watch for: Top destinations should remain stable (claim letters, claim details, My VA). No unexpected new destinations appearing in high volume.

| Top Destination | Baseline | Post-Release | Change | Status |
|---|---|---|---|---|
| / | 211,012 | | | |
| /track-claims/your-claim-letters | 149,160 | | | |
| /track-claims/your-claims | 103,828 | | | |
| /my-va/ | 70,153 | | | |
| /track-claims/your-claims/ | 25,154 | | | |

---

## Datadog RUM Release Monitoring

### Frustration Signals (Rage Clicks)

- [Datadog Monitor for Frustration Signals](https://vagov.ddog-gov.com/monitors/549183?from_ts=1775500840739&to_ts=1775587240739&live=true)

---

## Release Bug Bash

**Staging URL**: https://staging.va.gov/track-claims/your-claims
**Test user**: vets.gov.user+50@gmail.com

### Test Case 1: Filter component renders with correct buttons and default

#### Steps to Reproduce
1. On the claims landing page, observe the area below the "Your claims, decision reviews, or appeals" heading.

#### Intended Outcomes
- [ ] A segmented button component appears with three buttons: "In progress", "Closed", and "All" (in that order)
- [ ] "In progress" is selected by default
- [ ] The segmented button has an aria-label of "Claims status filter"
- [ ] The "Find out why we sometimes combine claims" accordion is not present

### Test Case 2: In progress filter shows only active claims and appeals

#### Steps to Reproduce
1. On the claims landing page, confirm "In progress" is the default selected filter.
1. Observe the displayed claim and appeal cards.

#### Intended Outcomes
- [ ] Only in-progress claims and appeals are displayed (User 50 has 17 in-progress items: 15 claims + 2 appeals)
- [ ] No closed claims, closed appeals, or STEM claims appear (STEM claims are always closed)
- [ ] Each displayed card shows an "In Progress" status tag
- [ ] The first card should be "Claim for disability compensation" received October 14, 2025 (most recently updated in-progress item)
- [ ] Sort order is retained: claims with open evidence requests first, then other in-progress claims, each sorted by most recently updated (User 50 has no claims with documentsNeeded: true in the list data, so evidence-request bumping to top is not verifiable with this user)

### Test Case 3: In Progress status tag on open claim cards

#### Steps to Reproduce
1. While viewing the "In progress" filter, find the first card: "Claim for disability compensation" received October 14, 2025.

#### Intended Outcomes
- [ ] An "In Progress" label appears on the card inside the heading, before the claim title
- [ ] The label uses the `usa-label` styling

### Test Case 4: In Progress status tag on claim detail page

#### Steps to Reproduce
1. While viewing the "In progress" filter, click "Details" on the "Claim for disability compensation" received October 14, 2025 card.

#### Intended Outcomes
- [ ] Below the claim title, an "In Progress" label is displayed
- [ ] A "Last updated" date appears below the label

### Test Case 5: Closed filter shows only closed records

#### Steps to Reproduce
1. Navigate back to the claims landing page.
1. Click the "Closed" filter button.

#### Intended Outcomes
- [ ] Only closed claims, closed appeals, and STEM claims are displayed (User 50 has 25 closed items: 18 claims + 7 closed appeals, 0 STEM)
- [ ] No in-progress claims or appeals appear
- [ ] Each displayed card shows a "Closed" status tag
- [ ] The first card should be "Supplemental Claim for disability compensation" received February 1, 2025 (most recently decided closed item)
- [ ] Sort order is retained within the closed group, sorted by most recently updated

### Test Case 6: Closed status tag on closed claim cards

#### Steps to Reproduce
1. While viewing the "Closed" filter, find the "Claim for compensation" received October 15, 2024 card (scroll or page to find it -- it is the 8th closed item).

#### Intended Outcomes
- [ ] A "Closed" label appears on the card inside the heading, before the claim title
- [ ] The label uses the `usa-label` styling

### Test Case 7: Closed status tag on closed appeal cards

#### Steps to Reproduce
1. While viewing the "Closed" filter, find the "Disability Compensation Appeal" received August 8, 2024 card. User 50 has 7 closed appeals (5 supplemental claims + 2 board appeals).

#### Intended Outcomes
- [ ] A "Closed" label appears on the card inside the heading, before the appeal title
- [ ] The label uses the `usa-label` styling

### Test Case 8: Closed status tag on STEM claim cards

Note: User 50 has no STEM claims. Use a different test user to verify this case.

#### Steps to Reproduce
1. While viewing the "Closed" filter, find the "Edith Nourse Rogers STEM Scholarship application" card.

#### Intended Outcomes
- [ ] A "Closed" label appears on the card inside the heading, before the STEM claim title
- [ ] The label uses the `usa-label` styling

### Test Case 9: Closed status tag on claim detail page

#### Steps to Reproduce
1. While viewing the "Closed" filter, click "Details" on the "Claim for compensation" received October 15, 2024 card.

#### Intended Outcomes
- [ ] Below the claim title, a "Closed" label is displayed
- [ ] A "Last updated" date appears below the label
- [ ] The "What you need to do" section is not present
- [ ] The "What we're doing" section is not present

### Test Case 10: All filter shows all records

#### Steps to Reproduce
1. Navigate back to the claims landing page.
1. Click the "All" filter button.

#### Intended Outcomes
- [ ] All claims, appeals, and STEM claims are displayed regardless of status (User 50 has 42 total items, 5 pages)
- [ ] In-progress cards show an "In Progress" status tag
- [ ] Closed cards show a "Closed" status tag
- [ ] Sort order: claims with open evidence requests first, then other in-progress, then closed -- each group sorted by most recently updated
- [ ] Page 1 should show the same first 10 in-progress items as the "In progress" filter page 1
- [ ] Page 2 should show the remaining 7 in-progress items followed by the first 3 closed items

### Test Case 11: Default sort order is maintained across filters

#### Steps to Reproduce
1. Click "All" and observe the order of claims.
1. Click "In progress" and observe the order.
1. Click "Closed" and observe the order.

#### Intended Outcomes
- [ ] Within each filter view, claims with open evidence requests appear first, then other claims sorted by most recently updated (User 50 has no claims with documentsNeeded: true in the list data, so evidence-request bumping is not verifiable with this user)
- [ ] The expected first 5 cards for "In progress" page 1 are:
   1. Claim for disability compensation -- Received on October 14, 2025
   1. Claim for compensation -- Received on April 2, 2025
   1. Claim for freedom of information act / privacy act request -- Received on February 23, 2026
   1. Higher-Level Review for disability compensation -- Received on January 20, 2026
   1. Request to add or remove a dependent -- Received on November 25, 2025
- [ ] The sort order is consistent regardless of which filter is selected

### Test Case 12: Pagination text with In progress filter

#### Steps to Reproduce
1. Click "In progress" to filter to active records.
1. Observe the pagination info text above the claim cards.

#### Intended Outcomes
- [ ] Format is "Showing X-Y of Z in-progress records" (hyphen, no spaces around dash)
- [ ] User 50 expected text: "Showing 1-10 of 17 in-progress records"
- [ ] Text is always shown, even with fewer than 10 items (e.g., "Showing 1-2 of 2 in-progress records")

### Test Case 13: Pagination text with Closed filter

#### Steps to Reproduce
1. Click "Closed" to filter to closed records.
1. Observe the pagination info text above the claim cards.

#### Intended Outcomes
- [ ] Format is "Showing X-Y of Z closed records"
- [ ] User 50 expected text: "Showing 1-10 of 25 closed records"
- [ ] Text is always shown, even with fewer than 10 items

### Test Case 14: Pagination text with All filter

#### Steps to Reproduce
1. Click "All" to show all records.
1. Observe the pagination info text above the claim cards.

#### Intended Outcomes
- [ ] Format is "Showing X-Y of Z records" (no filter label qualifier)
- [ ] User 50 expected text: "Showing 1-10 of 42 records"
- [ ] Text is always shown, even with fewer than 10 items

### Test Case 15: Pagination resets when changing filters

#### Steps to Reproduce
1. Click "All" and navigate to page 2 (User 50 has 42 items across 5 pages).
1. Click "In progress".
1. Observe the page number.
1. Click "All" again.

#### Intended Outcomes
- [ ] Clicking "In progress" resets to page 1 of in-progress records
- [ ] Clicking "All" resets to page 1 (does not return to page 2)
- [ ] The URL no longer contains `?page=2`

### Test Case 16: Session memory persists selected filter

#### Steps to Reproduce
1. Click the "Closed" filter.
1. Click "Details" on a claim card to navigate to the claim detail page.
1. Click the browser back button or the breadcrumb to return to the claims list.

#### Intended Outcomes
- [ ] The "Closed" filter is still selected
- [ ] Only closed records are displayed

### Test Case 17: Session memory resets on new login

#### Steps to Reproduce
1. Click the "Closed" filter.
1. Log out.
1. Log back in and navigate to the claims landing page.

#### Intended Outcomes
- [ ] The filter resets to "In progress" (the default)
- [ ] Only in-progress records are displayed

### Test Case 18: Empty state messages per filter

#### Steps to Reproduce
1. Open Chrome DevTools > Network tab.
1. Right-click the `/benefits_claims` request > Block request URL.
1. Right-click the `/appeals` request > Block request URL.
1. Refresh the page.
1. Cycle through each filter: "In progress", "Closed", and "All".
1. Unblock the requests in DevTools when done.

#### Intended Outcomes
- [ ] A system alert ("We can't access some of your claims or appeals right now") appears above the filter
- [ ] The filter component still appears and functions below the alert
- [ ] In progress filter: "We don't have any in-progress records for you in our system."
- [ ] Closed filter: "We don't have any closed records for you in our system."
- [ ] All filter: "We don't have any records for you in our system."

### Test Case 19: Updated "If you can't find your claim" section

#### Steps to Reproduce
1. Scroll to the bottom of the claims landing page.
1. Observe the section below the claim letters section.

#### Intended Outcomes
- [ ] The heading reads "If you can't find your claim, decision review, or appeal"
- [ ] A "We might still be processing it" subheading is present with text about recently submitted claims
- [ ] A "We may have combined your claims" subheading is present with text explaining claim consolidation

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
