# Finding Claims Bug Bashes

**Feature flag**: `cst_claims_list_filter`

## Release Prep

**Staging URL**: https://staging.va.gov/track-claims/your-claims
**Test user**: vets.gov.user+50@gmail.com

### Test Case 1: Filter component renders with correct buttons and default

#### Steps to Reproduce
1. On the claims landing page, observe the area below the "Your claims, decision reviews, or appeals" heading.

#### Intended Outcomes
1. A segmented button component appears with three buttons: "In progress", "Closed", and "All" (in that order)
1. "In progress" is selected by default
1. The segmented button has an aria-label of "Claims status filter"
1. The "Find out why we sometimes combine claims" accordion is not present

### Test Case 2: In progress filter shows only active claims and appeals

#### Steps to Reproduce
1. On the claims landing page, confirm "In progress" is the default selected filter.
1. Observe the displayed claim and appeal cards.

#### Intended Outcomes
1. Only in-progress claims and appeals are displayed
1. No closed claims, closed appeals, or STEM claims appear (STEM claims are always closed)
1. Each displayed card shows an "In Progress" status tag
1. Sort order is retained: claims with open evidence requests first, then other in-progress claims, each sorted by most recently updated

### Test Case 3: In Progress status tag on open claim cards

#### Steps to Reproduce
1. While viewing the "In progress" filter, find a claim card that is not completed (e.g., a card showing a step like "Step 3 of 8").

#### Intended Outcomes
1. An "In Progress" label appears on the card inside the heading, before the claim title
1. The label uses the `usa-label` styling

### Test Case 4: In Progress status tag on claim detail page

#### Steps to Reproduce
1. While viewing the "In progress" filter, click "Details" on an in-progress claim card to navigate to the claim detail page.

#### Intended Outcomes
1. Below the claim title, an "In Progress" label is displayed
1. A "Last updated" date appears below the label

### Test Case 5: Closed filter shows only closed records

#### Steps to Reproduce
1. Navigate back to the claims landing page.
1. Click the "Closed" filter button.

#### Intended Outcomes
1. Only closed claims, closed appeals, and STEM claims are displayed
1. No in-progress claims or appeals appear
1. Each displayed card shows a "Closed" status tag
1. Sort order is retained within the closed group, sorted by most recently updated

### Test Case 6: Closed status tag on closed claim cards

#### Steps to Reproduce
1. While viewing the "Closed" filter, find a closed claim card (e.g., a card showing "Step 8 of 8: Claim decided").

#### Intended Outcomes
1. A "Closed" label appears on the card inside the heading, before the claim title
1. The label uses the `usa-label` styling

### Test Case 7: Closed status tag on closed appeal cards

#### Steps to Reproduce
1. While viewing the "Closed" filter, find a closed appeal card (if the test user has one).

#### Intended Outcomes
1. A "Closed" label appears on the card inside the heading, before the appeal title
1. The label uses the `usa-label` styling

### Test Case 8: Closed status tag on STEM claim cards

#### Steps to Reproduce
1. While viewing the "Closed" filter, find the "Edith Nourse Rogers STEM Scholarship application" card (if the test user has one).

#### Intended Outcomes
1. A "Closed" label appears on the card inside the heading, before the STEM claim title
1. The label uses the `usa-label` styling

### Test Case 9: Closed status tag on claim detail page

#### Steps to Reproduce
1. While viewing the "Closed" filter, click "Details" on a closed claim card to navigate to the claim detail page.

#### Intended Outcomes
1. Below the claim title, a "Closed" label is displayed
1. A "Last updated" date appears below the label
1. The "What you need to do" section is not present
1. The "What we're doing" section is not present

### Test Case 10: All filter shows all records

#### Steps to Reproduce
1. Navigate back to the claims landing page.
1. Click the "All" filter button.

#### Intended Outcomes
1. All claims, appeals, and STEM claims are displayed regardless of status
1. In-progress cards show an "In Progress" status tag
1. Closed cards show a "Closed" status tag
1. Sort order: claims with open evidence requests first, then other in-progress, then closed -- each group sorted by most recently updated

### Test Case 11: Default sort order is maintained across filters

#### Steps to Reproduce
1. Click "All" and observe the order of claims.
1. Click "In progress" and observe the order.
1. Click "Closed" and observe the order.

#### Intended Outcomes
1. Within each filter view, claims with open evidence requests appear first
1. Other claims appear next, sorted by most recently updated
1. The sort order is consistent regardless of which filter is selected

### Test Case 12: Pagination text with In progress filter

#### Steps to Reproduce
1. Click "In progress" to filter to active records.
1. Observe the pagination info text above the claim cards.

#### Intended Outcomes
1. Format is "Showing X-Y of Z in-progress records" (hyphen, no spaces around dash)
1. Text is always shown, even with fewer than 10 items (e.g., "Showing 1-2 of 2 in-progress records")

### Test Case 13: Pagination text with Closed filter

#### Steps to Reproduce
1. Click "Closed" to filter to closed records.
1. Observe the pagination info text above the claim cards.

#### Intended Outcomes
1. Format is "Showing X-Y of Z closed records"
1. Text is always shown, even with fewer than 10 items

### Test Case 14: Pagination text with All filter

#### Steps to Reproduce
1. Click "All" to show all records.
1. Observe the pagination info text above the claim cards.

#### Intended Outcomes
1. Format is "Showing X-Y of Z records" (no filter label qualifier)
1. Text is always shown, even with fewer than 10 items

### Test Case 15: Pagination resets when changing filters

#### Steps to Reproduce
1. Click "All" and navigate to page 2 (if enough records exist).
1. Click "In progress".
1. Observe the page number.
1. Click "All" again.

#### Intended Outcomes
1. Clicking "In progress" resets to page 1 of in-progress records
1. Clicking "All" resets to page 1 (does not return to page 2)
1. The URL no longer contains `?page=2`

### Test Case 16: Session memory persists selected filter

#### Steps to Reproduce
1. Click the "Closed" filter.
1. Click "Details" on a claim card to navigate to the claim detail page.
1. Click the browser back button or the breadcrumb to return to the claims list.

#### Intended Outcomes
1. The "Closed" filter is still selected
1. Only closed records are displayed

### Test Case 17: Session memory resets on new login

#### Steps to Reproduce
1. Click the "Closed" filter.
1. Log out.
1. Log back in and navigate to the claims landing page.

#### Intended Outcomes
1. The filter resets to "In progress" (the default)
1. Only in-progress records are displayed

### Test Case 18: Empty state messages per filter

#### Steps to Reproduce
1. Open Chrome DevTools > Network tab.
1. Right-click the `/benefits_claims` request > Block request URL.
1. Right-click the `/appeals` request > Block request URL.
1. Refresh the page.
1. Cycle through each filter: "In progress", "Closed", and "All".
1. Unblock the requests in DevTools when done.

#### Intended Outcomes
1. A system alert ("We can't access some of your claims or appeals right now") appears above the filter
1. The filter component still appears and functions below the alert
1. In progress filter: "We don't have any in-progress records for you in our system."
1. Closed filter: "We don't have any closed records for you in our system."
1. All filter: "We don't have any records for you in our system."

### Test Case 19: Updated "If you can't find your claim" section

#### Steps to Reproduce
1. Scroll to the bottom of the claims landing page.
1. Observe the section below the claim letters section.

#### Intended Outcomes
1. The heading reads "If you can't find your claim, decision review, or appeal"
1. A "We might still be processing it" subheading is present with text about recently submitted claims
1. A "We may have combined your claims" subheading is present with text explaining claim consolidation

---

## Staging Review Prep Testing

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
