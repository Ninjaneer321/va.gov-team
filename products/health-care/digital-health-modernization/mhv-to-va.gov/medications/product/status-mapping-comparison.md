# V1 vs. V2 Statuses in Meds Management Improvement (MMI) Designs

<br>
<br>

## Context
This work emerged from an internal status mapping sync on Monday, March 2, 2026, where we discussed Robyn's idea – during our last Meds UX Sync on Thursday, February 26 – that we might not need to move forward with V2 statuses after all.

## Background 
A lot has changed since we decided to move forward with V2 statuses in the autumn of 2025, from **(a)** Adrian mapping OH statuses to V1 statuses; and **(b)** the Meds Management Improvement designs being approved (which significantly alter the way that statuses are rendered to users). And taken together, it's possible that V2 statuses might no longer be necessary or worth pursuing. That's what this document is intended to explore.

## Additional Detail
One of the motivating factors in the creation of V2 statuses was consistent feedback from Veterans that V1 statuses were confusing. However, we have solved for much of this confusion in the MMI designs by:

1. Removing bolded status labels from individual medication cards
2. Simplifying the filter on the list page
3. Presenting alternative information about refill and fill progress to users via in-card progress bars and an In Progress page

**Note:** The only place of concern for V1 vs. V2 statuses from a UX design perspective is that we still surface statuses on the Meds Details pages.

## v1 pros

- v1 statuses map better to the ideal state status table that's been created for the MMI designs because they are more granular. This allows us to provide more context for a handful of statuses including:
  - Pending
  - Expired
  - Discontinued
  - Non-VA med


## v2 pros

- Matches new MMI filter on list page

## v1 cons

- We'd be working from a larger set of statuses than would be in use
- Backend statuses may not exactly match the filter on the list page

## v2 cons

- Would need to come up with statuses for the meds details pages for **four** scenarios:
  - Non-VA med
  - Renewable med that expired ≤120 days ago
  - Expired
  - Discontinued
- Would need to edit/revise **three** scenarios:
  - Refill requested too early
  - Active with no refills (available for renewal w/o SM flow)
  - Active with no refills left (available for renewal w/ SM flow)

See [v1 vs. v2 Status Chart for MMI Designs Figma table](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?node-id=8999-22897&t=PnnwqX0LyV92GHr9-4) for full breakdown of how v1 vs. v2 statuses could be employed on the site. 

 ## Visual Comparison Chart
 Here's a link to the [visual comparison chart](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?node-id=7471-19310&p=f&t=BpSyxdzQ48uGCk6f-0) in Figma. Image outlined below:

<img width="1416" height="649" alt="Screenshot 2026-03-03 at 3 45 10 PM" src="https://github.com/user-attachments/assets/7feeee0f-e0d1-4fee-8fae-2ecc12d986d0" />

<img width="1414" height="668" alt="Screenshot 2026-03-03 at 3 45 25 PM" src="https://github.com/user-attachments/assets/4e6ce640-beb7-41ea-a90d-6494465eea0e" />

<img width="1416" height="701" alt="Screenshot 2026-03-03 at 3 45 36 PM" src="https://github.com/user-attachments/assets/e74d1b03-4bb2-47a0-aa33-d755ebd2f7e1" />

## Status Mapping Benefits Regardless of V1 vs V2
xxxx

## Recommendation

- All things considered, we recommend xxxx.
