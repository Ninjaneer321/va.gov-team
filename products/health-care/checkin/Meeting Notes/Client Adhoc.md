# Community care kick-off discussion
**Date:** March 5, 2026, 3:05 PM ET

---

## Agenda Items
- Are we limited to optometry and primary care at launch, or could more care types be added before June? If so, which ones?
-   - .
- What's the actual June deadline, is there a specific date, or by end of June?
-   -.
- 


# CC Pilot — Current Site Transition Discussion
**Date:** March 3, 2026, 3:30 PM ET

---

## Pre-Meeting Context (Slack Discussion)

Kay proposed two options for what to do with the current CC pilot sites while we shift focus to the new combined scheduling experience:

- **Option 1:** Turn off everything - veterans at current pilot sites go back to the same view as non-pilot sites
- **Option 2:** Keep approved referral info visible, turn off scheduling, direct veterans to call the VA community care office

Lee confirmed the backend already returns the referring facility phone number — no backend changes needed. Kristen mentioned an existing design for the call-to-schedule scenario. Lee estimated the work as one FE component/page + integration tests.

---

## Meeting Discussion

### Usage Data at Current Pilot Sites
- Thousands of people see the referrals and requests page, but that view is combined with appointment data
- **209 people** clicked into a referral detail in the past month at the current pilot sites
- **~7 people** tried to take action on a referral in the past week
- In the most recent week, nobody went beyond clicking into referral details

### Decision: Turn Off Scheduling, Keep Referral Info, Add Banner
- Turn off the scheduling flow from the referral detail page via feature flag
- Keep the referral list and detail pages visible, surfacing approved referral info still has value based on research
- Add a banner informing users that online scheduling is being turned off
- Refer to the Oracle Health cutover banners for wording examples

### Banner Details
- Banner goes up when scheduling is turned off
- Stays up for approximately 3-4 weeks
- Consensus that it's easier to turn off and add a banner than to build out a halfway solution

### Technical Notes
- Pilot sites are hardcoded
- Feature flag can stop users from entering the scheduling flow from referral details
- Front-end change for the banner is not a heavy lift

---

## Decisions Made

- Rejected Option 2 (call to schedule) — creates another dead end
- Will turn off scheduling at current pilot sites via feature flag
- Referral list and detail pages remain visible
- Banner notification will be displayed for 3-4 weeks informing users of the change
- UX to reference Oracle Health cutover banners for wording

## Next Steps

- [ ] Await VHA concurrence before implementing
- [ ] UX to design the banner (reference OH cutover banners for wording)
- [ ] Do NOT turn off the feature until VHA approval is received
- [ ] Create ticket(s) for banner implementation and feature flag update
