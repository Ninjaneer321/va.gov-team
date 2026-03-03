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

## V1 Pros

- V1 statuses actually map better to the ideal state status table that's been created for the MMI designs.
- At a maximum, we could look into slightly editing the status for meds that are renewable. Otherwise, all ideal state scenarios can logically use a v1 status on their meds details page.


## V2 Pros

- Matches new MMI filter on list page

## V1 Cons

- Only that we'd be working from a larger set of statuses than would be in use
- And that the backend statuses may not exactly match the filter

## V2 Cons

- Would actually need to come up with statuses for the meds details pages for **four** scenarios:
  - Non-VA med
  - Renewable med that expired ≤120 days ago
  - Expired
  - Discontinued
- And would need to edit/revise **three** scenarios:
  - Refill requested too early
  - Active with no refills (available for renewal w/o SM flow)
  - Active with no refills left (available for renewal w/ SM flow)

 ## Visual Comparison Chart
 Here's a link to the [visual comparison chart](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?node-id=7471-19310&p=f&t=BpSyxdzQ48uGCk6f-0) in Figma. Image outlined below:
 
 ![Alt text](path/to/image.png)
 
## Recommendation

- All things considered, we recommend xxxx.
