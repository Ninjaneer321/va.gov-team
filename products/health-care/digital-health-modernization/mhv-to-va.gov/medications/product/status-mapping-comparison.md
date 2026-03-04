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

### Launch sequencing detail

For implementation and risk management, we are planning to launch the MMI designs **before** any V2 status activation (if we decide to do V2 later).

This sequencing matters because releasing two major changes at the same time (new MMI UX + new status model) makes it much harder to isolate root causes if errors occur. If something breaks in production, we need to know whether the issue came from:

- the new MMI design changes,
- the V2 status grouping/mapping changes, or
- an interaction between both.

By launching MMI first with V1, we reduce debugging ambiguity and can validate one variable at a time. In practical terms, this means we will need to map MMI designs to V1 statuses for launch regardless, and then evaluate V2 as a separate follow-on change.

## V1 Pros

- V1 statuses map better to the ideal state status table that's been created for the MMI designs because they are more granular. This allows us to provide more context for several prescription scenarios that still need to be captured in the MMI designs including:
  - Pending
  - Expired
  - Discontinued
  - Non-VA med

- V1 supports more precise “taking longer than expected” logic:
  - Submitted medications and refill-in-process medications can follow different timing expectations

- V1 minimizes launch risk because this level of detail is already what current behavior is built around
- Therefore, we will still need to map the list page filter to V1 scenarios for MMI launch.


## V2 Pros

- Creates cleaner label-to-filter parity (for example, "In progress" filter matches "In progress" status)
- Uses a smaller set of status labels

## V1 Cons

- We'd be working from a larger set of statuses than would be in use
- Backend statuses may not exactly match the filter on the list page
  - Explanation: the filter labels shown to Veterans are simplified, but the backend may use multiple `dispStatus` to decide what appears under one label.
  - Example: a single list filter like "Active" can include several backend statuses (such as Active, Active: Submitted, and Active: Refill in Process).
  - Why this matters: the experience can still be correct for users, but label-to-status matching is not always a strict 1:1 relationship.

## V2 Cons

- Would need to come up with statuses for the meds details pages for **four** scenarios: Non-VA med; Renewable med that expired ≤120 days ago; Expired; Discontinued
  - Explanation: under V2, several different real-world situations can share the same broad label, so we need extra details-page language to explain what the Veteran should do next.
  - Why this matters: without that added explanation, Veterans may see the same label but need different actions.
- Would need to edit/revise **three** scenarios: Refill requested too early; Active with no refills (available for renewal w/o SM flow); Active with no refills left (available for renewal w/ SM flow)
  - Explanation: these are already designed/written around current V1 behavior, so V2 would require content and logic updates to keep instructions accurate.
  - Why this matters: this adds scope across UX, engineering, and QA close to launch.

See [V1 vs. V2 Status Chart for MMI Designs Figma table](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?node-id=8999-22897&t=PnnwqX0LyV92GHr9-4) for full breakdown of how V1 vs. V2 statuses could be employed on the site. 

 ## Visual Comparison Chart
 Here's a link to the [visual comparison chart](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?node-id=7471-19310&p=f&t=BpSyxdzQ48uGCk6f-0) in Figma. Image outlined below:

<img width="1416" height="649" alt="Screenshot 2026-03-03 at 3 45 10 PM" src="https://github.com/user-attachments/assets/7feeee0f-e0d1-4fee-8fae-2ecc12d986d0" />

<img width="1414" height="668" alt="Screenshot 2026-03-03 at 3 45 25 PM" src="https://github.com/user-attachments/assets/4e6ce640-beb7-41ea-a90d-6494465eea0e" />

<img width="1416" height="701" alt="Screenshot 2026-03-03 at 3 45 36 PM" src="https://github.com/user-attachments/assets/e74d1b03-4bb2-47a0-aa33-d755ebd2f7e1" />

## Status Mapping Benefits Regardless of V1 vs V2

Even if we stick with V1, the V1 status mapping clarification work we've been doing still gives us important long-term value:

1. **Cross-system consistency remains useful**
   - Status mapping artifacts help normalize data across VistA and Oracle Health sources.
   - Visual artifacts designed ensure all scenarios that could occur are accounted for in MMI designs.

2. **The V2 path can always be pursued later**
   - We can still continue on with V2 status mapping, after MMI launch, when we **(a)** have more capacity; and **(b)** are able to better control our testing environment.

3. **MMI improvements still deliver value without V2 activation**
   - The core user-facing improvements (cleaner cards, simpler filtering approach, in-progress experience) are not blocked by deferring V2.

4. **Lower risk now, flexibility later**
   - Choosing V1 now does not remove V2 as a viable path forward down the line; it simply optimizes for safety while enabling us to come back to this work if deemed valuable.

## Recommendation

- **Recommendation:** Finish our work to clarify V1 statuses; pause our V2 status mapping work; and launch MMI with **V1 statuses**. We can then revist the V2 status work, and determine if we want to move it forward again, at some point after MMI release.

- **Why this is the better choice:**
  - The initial reasons we decided to pursue V2 statuses are now largely obsolete.
  - Our MMI designs achieve much of the benefit we were hoping to gain from V2 statuses.
  - The V2 status work has introduced extreme complexity that is increasingly distracting the team.
  - The benefit we'd gain from V2 statuses isn't, at this point at least, worth the effort required to get there.

- **Why this is the safer choice right now:**
  - It allows us to keep certain detailed status contexts already used for user guidance, especially on Meds Details.
  - It reduces late-stage UX/content/QA coordination risk before MMI launch.
  - It avoids launching two major changes at once (new MMI experience + new status model), which makes troubleshooting much harder.

- **What this means for Veterans at MMI launch:**
  - Veterans still get the MMI improvements (cleaner card design, improved filtering experience, and clearer progress patterns).
  - Status language remains on the current V1 model, so behavior and guidance stay consistent while the new MMI design rolls out.
  - If we choose to pursue V2 statuses later on, and end up enabling them, it can be introduced as a separate / controlled change.

- **What this means for teams:**
  - Product/UX can focus on polishing launch-ready content instead of validating two major changes simultaneously.
  - Engineering/QA can isolate defects faster because launch variables are reduced.
  - Leadership still retains a path to test V2 later with clearer success criteria.

- **Proposed follow-up:**
  1. Finish our work to clarify V1 statuses.
  2. Confirm details-page plain-language guidance for key edge cases.
  3. Complete in-progress data readiness work (separate from the V1/V2 decision).
  4. Pause our V2 status mapping work.
  5. Launch MMI with V1 statuses.
  6. Revisit the decision to pursue V2 status after the MMI launch
  7. If it's decided to move forward with V2 statuses at that stage, create a defined test plan, success metrics, and rollback criteria.
