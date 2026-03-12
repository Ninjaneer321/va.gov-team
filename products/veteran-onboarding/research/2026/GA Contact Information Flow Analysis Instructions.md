# Google Analytics Exploration Configuration
## Missing Contact Information Flow

This document describes the current configuration of the Google Analytics explorations used to analyze the Missing Contact Information flow.

Each tab represents a different part of the user journey and tracks specific events or page interactions.

---

# Tab 1 — Add Your Contact Information Alert

## Purpose
Measures interaction with the **"Add your contact information" alert** on the MyVA homepage.

## Segment Comparison
MyVA Homepage

## Rows
Link Text

## Values
Event Count

## Filters
Link text exactly matches the API call associated with the alert.

## Interpretation
This tab measures the **number of times users click the alert prompting them to add missing contact information**.

Important notes:
- This tracks **click interaction only**.
- It does not measure whether the user successfully updates their contact information.

---

# Tab 2 — Contact Information Page Views

## Purpose
Measures **page views within the contact information flow**.

## Rows
Page Path and Screen Class

## Values
Views

## Filters
Applied to limit results to pages within the contact information flow.

## Interpretation
This tab measures **how often each page in the contact information flow is viewed**.

These metrics represent:
- Total views
- Not interactions or actions taken

Because the main contact information page is both:
- The **entry point to the flow**
- A page users return to during navigation

It will typically have the **highest view count**.

---

# Tab 3 — Saves on Contact Information Page

## Purpose
Measures **save actions taken from the contact information page**.

## Segment Comparison
Contact Information Page

## Rows
API Names

## Values
Event Count

## Interpretation
This tab records the number of times users successfully **save updated contact information from the contact information page**.

Examples include:
- Saved mobile phone
- Saved email
- Saved mailing address

These represent **completed actions** rather than page visits.

---

# Tab 4 — Saves Anywhere on VA

## Purpose
Measures **contact information saves across the entire VA platform**, not only within the missing contact information flow.

## Rows
API Name

## Values
Event Count

## Interpretation
This tab provides the total number of contact information updates occurring across VA.gov.

Examples include:
- Mobile phone saves
- Email saves
- Mailing address saves
- Work phone saves

This dataset allows comparison between:

- Saves triggered from the **missing contact information flow**
- Saves occurring anywhere across VA.gov

---

# Tab 5 — Confirmation Page Behavior

## Purpose
Measures **user actions after reaching the confirmation page** following a successful contact information update.

## Segment Comparison
Confirmation Page

## Rows
Link Text

## Values
Event Count

## Interpretation
This tab shows **what users click after completing the contact information update flow**.

Examples include navigation actions such as:
- Returning to VA
- Opening notification settings
- Returning to profile pages

This helps understand **user behavior immediately after completing the flow**.

---

# Tab 6 — Profile Page Activity

## Purpose
Tracks broader **profile-related activity events**.

## Rows
Data Layer Event Name

## Values
Event Count

## Filters
Event name exactly matches the API call.

## Interpretation
This tab records system-level events such as:

- Profile saves
- Profile deletes
- Profile failures

This tab currently serves as **background activity tracking** and is not actively used in reporting.

---

# Sampling Considerations

Some explorations may return **sampled results when querying large datasets**.

If sampling occurs, results should be interpreted as **directional rather than exact counts**.

Sampled results remain useful for:
- Identifying behavior patterns
- Understanding relative distribution of events
- Exploring user flows

However, sampled datasets should not be used for:
- Official reporting
- KPI measurement
- Exact conversion rates

For precise analysis, unsampled data should be queried from the analytics export or data warehouse.
