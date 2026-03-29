# Missing Contact Information Flow
## Recommended GA Explorations to Build

This document outlines **additional analyses to build in GA4 Explorations** for the Missing Contact Information flow.

Each section includes:
- The **product question**
- **What analysis to build**
- **How to configure the exploration**

---

# 1. Alert → Contact Info Page Conversion

## Key Question
Do users who click the **“Add your contact information”** alert actually enter the contact information flow?

## Exploration Type
Funnel Exploration

## Steps

Step 1  
Event Name = alert click event

Step 2  
Page Path contains:

`contact-information`

## Metrics
- Users
- Completion rate
- Drop-off rate

## Output
Conversion rate from alert click to contact page visit.

---

# 2. Full Contact Info Update Funnel

## Key Question
Where do users drop off during the contact information update process?

## Exploration Type
Funnel Exploration

## Steps

1. Alert click event  
2. Contact information page view  
3. Edit contact field page  
4. Save event  
5. Confirmation page view

## Configuration

Contact page filter:

`page path contains contact-information`

Edit page filters:

- edit-mobile-phone  
- edit-email  
- edit-mailing-address  

Save events:

- profile_saved_mobile_telephone  
- profile_saved_email  
- profile_saved_mailing_address  

Confirmation page filter:

`page path contains confirmation`

Enable:
- Open funnel
- Elapsed time

## Output
- Funnel completion rate
- Drop-off at each step
- Average time to completion

---

# 3. Most Frequently Updated Fields

## Key Question
Which contact fields are users updating most often?

## Exploration Type
Free Form Exploration

## Rows
Event Name

## Values
Event Count

## Filter

`event name contains profile_saved`

## Output
Ranking of fields by update frequency.

Example events:

- profile_saved_mobile_telephone  
- profile_saved_email  
- profile_saved_mailing_address  
- profile_saved_work_phone  

---

# 4. Impact of the Missing Contact Info Flow

## Key Question
What percentage of total VA contact updates come from this flow?

## Exploration Type
Free Form Exploration

## Step 1 — Flow Updates

Filter:

`page path contains contact-information`

Event:

`profile_saved*`

## Step 2 — All VA Updates

Filter:

`event name contains profile_saved`

## Calculation

Flow Updates / Total Updates

## Output
Percentage of platform contact updates driven by this experience.

---

# 5. Post-Confirmation Behavior

## Key Question
Where do users go after completing the contact information update?

## Exploration Type
Path Exploration

## Starting Point

Confirmation page

Filter:

`page path contains confirmation`

## Nodes
- Next page path
- Link text

## Output
Most common next pages visited after completion.

---

# 6. Page-Level Drop-Off

## Key Question
Which pages in the contact information flow have the highest exit rates?

## Exploration Type
Path Exploration

## Starting Point

`contact-information` page

## Track
- Edit pages
- Save events
- Exit nodes

## Output
Pages with the highest abandonment rates.

---

# 7. Time to Completion

## Key Question
How long does it take users to complete the contact information update?

## Exploration Type
Funnel Exploration

## Steps

1. Alert click  
2. Contact page view  
3. Save event  

Enable:

Elapsed time

## Output
- Median completion time
- Average completion time

---

# 8. Device Behavior Differences

## Key Question
Do users behave differently on mobile vs desktop?

## Exploration Type
Free Form Exploration

## Rows
Device Category

## Values
Event Count

## Compare
- Save events
- Page views
- Confirmation views

## Output
Differences in completion behavior by device type.

---

# 9. Save Failure Monitoring

## Key Question
Are users encountering errors when saving contact information?

## Exploration Type
Free Form Exploration

## Rows
Event Name

## Values
Event Count

## Filter

`event name contains failure`

## Compare
Save events vs failure events.

## Output
Failure rate:

Failures / Saves

---

# Summary

Additional analyses should focus on:

1. Alert conversion into the flow
2. Full update funnel completion
3. Field update frequency
4. Product impact on platform updates
5. Post-completion navigation
6. Page-level abandonment
7. Completion time
8. Device differences
9. Save failure monitoring
