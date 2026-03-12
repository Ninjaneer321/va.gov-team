# Google Analytics Documentation — Missing Contact Information Flow

## Purpose

This document explains how to interpret and use the Google Analytics explorations related to the **Missing Contact Information flow** in VA.gov. These tabs measure user interaction with prompts to update contact information, navigation within the contact information pages, and successful saves of updated information.

The dataset is organized into **six tabs**, each measuring a different type of user behavior.

---

# Tab 1 — Alert Clicks (Add Your Contact Information)

## Description

This tab measures interaction with the **“Add your contact information” alert** shown to users when required contact details are missing.

## What is Measured

- Event: **Click on the alert**
- Metric: **Event count**

This represents how many times users **clicked the alert prompting them to update contact information**.

## Important Notes

- This tab measures **clicks only**, not whether the user actually updated their information.
- A click does not guarantee completion of the flow.

---

# Tab 2 — Contact Information Page Views

## Description

This tab records **page views within the contact information flow**.

## What is Measured

- Metric: **Total page views**
- These are **views only**, not interactions.

## Key Page

`myVA-welcome-va-setup/contact-information`

This page typically has the **highest number of views** because:

- It is the **entry point to the contact information flow**
- Users return here when navigating backward in the flow

## Other Pages in This Dataset

Examples include:

- Edit mobile phone
- Edit mailing address
- Edit email
- Mailing address
- Confirmation page

Additional pages may exist and should be explored to confirm full coverage of the flow.

---

# Tab 3 — Saves on Contact Information Page

## Description

This tab tracks **when users save updated contact information from the contact information page**.

## What is Measured

Save events including:

- `profile_saved_mobile_telephone`
- `profile_saved_mailing_address`
- `profile_saved_email`

These represent **successful saves of updated contact information**.

## Events to Ignore

The following events are not relevant to this analysis:

- `not set`
- `get-vo-users`

---

# Tab 4 — Saves Anywhere on VA

## Description

This tab tracks **contact information saves across the entire VA platform**, not only the missing contact information flow.

## Metrics

Examples include:

- Total profiles saved
- Total mobile phones saved
- Total emails saved
- Total addresses saved
- Total telephones saved
- Total work phones saved

## Purpose

This dataset allows comparison between:

- Contact updates triggered by the **missing contact information flow**
- All contact updates across VA.gov

This enables calculation of **the percentage of total contact information updates driven by this experience**.

---

# Tab 5 — Post-Confirmation Click Behavior

## Description

This tab measures **what users click after reaching the confirmation page**.

The confirmation page appears after users successfully save updated contact information.

## Common Next Actions

Examples include:

- Go back to VA
- Go to notification settings
- Return to profile

Additional actions can be explored in this dataset.

---

# Tab 6 — Profile Activity Over Time

## Description

This tab tracks broader profile activity events.

## Events Included

- Profile saves
- Profile deletes
- Profile save failures

## Current Status

This tab **is not currently used for reporting**, but it provides historical event tracking if deeper analysis is required.

---

# Sampling Considerations

Google Analytics explorations may apply **sampling when querying large datasets**.

In the current dataset:

- Approximately **15% of events are being sampled**.

## Implications

Sampling provides **directional insight rather than exact counts**.

The data is generally reliable for:

- Pattern discovery
- Relative comparisons
- Behavioral insights

However, sampling should be avoided for:

- Official reporting
- Exact conversion rates
- KPI measurement
- Product impact metrics

When precise metrics are required, **unsampled data should be requested or queried from the raw analytics export (e.g., BigQuery)**.
