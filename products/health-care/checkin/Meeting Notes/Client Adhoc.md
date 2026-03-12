## Community Care Combined Scheduling-Stakeholder Sync
## March 12, 2026

### Initiative Goals (Confirmed???)

- Allow veterans to see community care and VA direct care options for an appointment in one place and self-schedule online via va.gov or VA Health and Benefits mobile app
- Starting with approved referrals in **optometry and primary care** only
- Expand to additional care types in phases over 6–12 months
- **Target launch date: May 15, 2026** at two pilot sites
- **Pilot sites: Charleston and Atlanta**
  - Charleston already piloting integrated staff scheduling view, aligns well
  - Both are VistA sites (Oracle Health out of scope)

---

### The Core Problem (Discussed at Length)

The current CC scheduling process has a circular dependency:
- EPS requires a referral number to book an appointment
- HSRM does not publish a referral number until a provider is selected and entered by staff
- This forces staff to call the veteran first, select a provider together, enter it in HSRM to get a referral number, then return to EPS to complete the booking

This is what drives the manual phone call and the current "wacky" process.

**Key clarification:** A referral number IS actually generated in HSRM as soon as a Community Care consult is submitted, it just isn't published or accessible yet at that point.

---

### Proposed Solution (Rick / EPS Team)

Generate (or surface) the referral number at the start of the consult process so that:
1. Veterans can see all available community care providers within 25 miles without a provider needing to be pre-selected
2. When a veteran picks a provider and time slot and clicks confirm, EPS automatically generates the authorization eliminating the need for staff to do that manually
3. The referral number placeholder is already there; it just needs to be surfaced earlier in the workflow

**Result:** No phone call required. Staff administrative work is eliminated. Veteran picks their own provider.

Rick confirmed: **no new auth/API integration required** for this approach.

---

### MVP Scope for May 15 (Agreed????)

**In scope:**
- Veterans with an **already-approved CC consult** (CC eligibility already determined, consult already submitted) will see a combined view of:
  - Available community care providers within 25 miles for their care type
  - Available VA clinic options at the facility where the referral originated (Charleston or Atlanta)
- Veteran self-schedules online no staff phone call
- If a CC provider is not digitally connected (no online grid), surface their contact info so the veteran can call directly
- Care types: **optometry and primary care only**
- In-person appointments only (no telehealth for MVP)
- VA clinic options follow existing direct scheduling eligibility logic (to be confirmed)

**Out of scope for May:**
- Self-referring patients (PSDS flow) requires sorting questions, being handled separately
- Sorting questions for optometry (not required when starting from an approved consult)
- New entry points on My VA / MHV landing pages
- Calendar redesign / fixes
- Travel info on provider list
- Expanding to additional care types
- Full provider list (all EPS providers, not just referred one) future iteration

**Mobile app:**
- Still targeting May 15 but scope unconfirmed

---

### Discussion Points

**Sorting questions:**
- For MVP starting from an approved consult, sorting questions are NOT required, the patient has already been identified as CC eligible
- If self-referral (PSDS) is added in the future, sorting questions would be required online
- Mia and TT have different interpretations of whether PSDS patients should be able to self-schedule without a consult — being taken offline with OCTO

**VA clinic eligibility logic:**
- Current va.gov logic requires an established patient relationship between the veteran and a specific clinic for most specialty types
- This may conflict with the goal of showing all available optometry clinics to a new patient coming in via CC consult
- Mia flagged this should be consistent: if a patient can walk in new to optometry (PSDS), they should be able to self-schedule new as well
- To be discussed offline with OCTO logic may need to be adjusted for pilot sites

**Non-digitally connected providers:**
- Rick proposed: if a veteran selects a provider without a digital grid, surface their contact information so the veteran can call to schedule themselves
- This keeps the veteran in control without requiring a staff phone call

---

### Open Items / Blockers Flagged

- [ ] **K&K** to write up confirmed MVP scope + blockers + dependencies and distribute after this meeting

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
