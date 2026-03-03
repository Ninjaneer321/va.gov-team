# UX Pros & Cons of V1 vs. V2 Statuses in the Meds Management Improvement (MMI) Designs

**Note:** One of the motivating factors in the creation of v2 statuses was consistent feedback from Veterans that v1 statuses were confusing. However, we have solved for much of this confusion in the MMI designs by:

1. Removing bolded status labels from individual medication cards
2. Simplifying the filter on the list page
3. Presenting alternative information about refill and fill progress to users via in-card progress bars and an In Progress page

**Note:** The only place of concern for v1 vs. v2 statuses from a UX design perspective is that we still surface statuses on the meds details pages.

## V1 Pros

- v1 statuses actually map better to the ideal state status table that's been created for the MMI designs.
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
 
## Recommendation

- All things considered, we recommend xxxx.
