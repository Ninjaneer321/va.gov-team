# Bug Bash Guide — Finding Claims

**Staging URL**: https://staging.va.gov/track-claims/your-claims
**Feature flag**: `cst_claims_list_filter`
**Test user**: vets.gov.user+50@gmail.com / 308SsNrLgPv5

---

## Section 1: Feature Flag OFF (no changes from main)

Log in and navigate to the claims landing page with the flag disabled. Verify the legacy experience is unchanged.

### Filter area

- [ ] No segmented filter (All / Active / Closed) is visible
- [ ] "Find out why we sometimes combine claims" accordion is present below the "Your claims, decision reviews, or appeals" heading
- [ ] Clicking the accordion expands to show combined claims explanation

### Claims list

- [ ] All claims, appeals, and STEM claims are displayed in a single unfiltered list
- [ ] Sort order: claims with open evidence requests first, then other in-progress, then closed — each sorted by most recently updated
- [ ] Claim cards, appeal cards, and STEM claim cards render correctly

### Pagination

- [ ] Pagination text uses an em dash with spaces (e.g., "Showing 1 ‒ 10 of 40 events")
- [ ] Pagination text and controls only appear when there are more than 10 items
- [ ] If 10 or fewer items, no pagination text or controls are shown
- [ ] Page navigation works and URL updates with `?page=X`

### Empty state

- [ ] If the user has no claims, an info-style alert shows "You do not have any submitted claims" and "This page shows only completed claim applications."

### System alert

- [ ] If a service is unavailable, a warning alert appears above the claims list (e.g., "We can't access some of your claims or appeals right now")

### "What if" section

- [ ] "What if I can't find my claim, decision review, or appeal?" has a single paragraph about processing time
- [ ] No "We combined your claims" subsection is present
- [ ] No "We might still be processing it" subheading is present

---

## Section 2: Feature Flag ON (new experience)

Log in and navigate to the claims landing page with the flag enabled. Verify all new behavior.

### Filter component

- [ ] A segmented button with All, Active, and Closed appears below the "Your claims, decision reviews, or appeals" heading
- [ ] aria-label is "Claims status filter"
- [ ] "All" is selected by default
- [ ] The "Find out why we sometimes combine claims" accordion is no longer present

### Default sort order (should not change)

- [ ] Claims with open evidence requests appear first
- [ ] Other in-progress claims appear next
- [ ] Closed claims appear last (STEM claims are always closed)
- [ ] Within each group, items are sorted by most recently updated

### Pagination text

- [ ] Format is "Showing X-Y of Z records" (hyphen, no spaces)
- [ ] Text is always shown, even with fewer than 10 items (e.g., "Showing 1-2 of 2 records")
- [ ] Active filter shows "Showing X-Y of Z active records"
- [ ] Closed filter shows "Showing X-Y of Z closed records"

### Active filter

- [ ] Click "Active" — only in-progress claims and appeals are displayed
- [ ] STEM claims do not appear (they are always closed)
- [ ] Default sort order is retained

### Closed filter

- [ ] Click "Closed" — only closed claims, appeals, and STEM claims are displayed
- [ ] Closed appeals correctly appear here (previously they showed as active)
- [ ] Default sort order is retained

### Empty state and system alert

- [ ] Open Chrome DevTools > Network tab
- [ ] Right-click the `/benefits_claims` request > Block request URL
- [ ] Right-click the `/appeals` request > Block request URL
- [ ] Refresh the page
- [ ] System alert ("We can't access some of your claims or appeals right now") appears above the filter
- [ ] Filter still appears and functions below the alert
- [ ] All filter: "We don't have any records for you in our system"
- [ ] Active filter: "We don't have any active records for you in our system"
- [ ] Closed filter: "We don't have any closed records for you in our system"
- [ ] Unblock the requests in DevTools when done

### Session memory

- [ ] Select "Active" filter, click into a claim detail, then navigate back — "Active" is still selected
- [ ] Log out and log back in — filter resets to "All"

### Pagination reset

- [ ] With "All" selected, navigate to page 2
- [ ] Click "Active" — resets to page 1 of active records
- [ ] Click "All" — resets to page 1 (not back to page 2)

### Updated "What if" section content

- [ ] Scroll to "What if I can't find my claim, decision review, or appeal?"
- [ ] "We might still be processing it" subsection is present
- [ ] "We combined your claims" subsection is present
