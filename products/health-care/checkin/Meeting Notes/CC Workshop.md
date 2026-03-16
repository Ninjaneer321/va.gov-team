## CC Combined Scheduling — Hydra + Orion Workshop
## March 16, 2026

### Context / Goals for Workshop

- Three full sprints to mid-May — very tight timeline with scope still not fully defined
- Goal for the week: document what is feasible in the timeline, outline trade-offs and dependencies, and present a recommendation to Kay and Kristen by end of week
- Collab cycle: traditional process not feasible in this timeline — Kay working with platform to streamline or leverage existing CC pilot collab cycle artifacts
- Follow-up workshop sessions scheduled: Tuesday 1PM ET and Wednesday (Kristen to meet with mobile team Wednesday 3:30 ET)

---

### Engineering POCs Confirmed

| Team | BE | FE |
|------|----|----|
| Hydra | Lee | Chad |
| Orion | John, Tony | Simi |
| Big Dips | Brad (if needed) | — |

---

### Scope Confirmations

- **Care types:** Optometry and Primary Care only
- **Pilot sites:** Charleston, SC and Atlanta, GA
- **EHR type:** VistA only — Cerner/Oracle Health explicitly out of scope for this pilot (simplifies API calls significantly)
- **No request flow** — if veteran can't find what they need online, they call the CC provider or the VA directly
- **No sorting questions** — assumed cleared since starting from an approved consult
- **No patient-indicated date entry** — whatever date/time veteran selects will be passed as the preferred date field on the back end automatically
- **Self-referral (PSDS) patients** — out of scope for MVP

---

### UX Status / Explorations

UX teams did independent explorations over the prior week and shared them live during the workshop. Key themes:

**Agreed overall flow (reached consensus):**
Referral list → Referral detail → Provider/clinic list (combined CC + VA) → Time selection → Review → Confirm

No extra screens unless contact info screen is needed (still TBD).

**The key open design question: the provider list page**
Two main approaches being explored:

1. **Hunt and peck (fallback / bare minimum):** Show providers/clinics sorted by distance, no availability surfaced upfront. Veteran selects a provider, then sees available times. Uses existing components, minimal API calls. Worse UX but technically safer.

2. **Next available surfaced upfront (ideal):** Show first available time for each provider/clinic directly in the list so veteran can compare and schedule without drilling in. Better UX but requires solving the API latency problem first.

**UX options being developed (to present to Kay):**
- Option A: Hunt and peck — distance sort only, no availability shown upfront
- Option B: Middle ground — surface availability within constraints (limited time range, limited facilities, pagination)
- Option C: Ideal — full next available surfaced with progressive loading or lazy loading

UX agreed to build out all three options in FigJam to present trade-offs clearly.

**Provider list design considerations discussed:**
- Provider/clinic as the primary "object" (not date/time) — general consensus this is the right mental model
- Show 5 providers at a time with "show more" pagination
- "See more times" drilling into a specific provider
- If loading takes too long, degrade gracefully to distance-sorted list without availability
- Loading state: consider showing specific progress messaging (e.g., "checking availability...") rather than a generic spinner, especially if latency is unavoidable
- Lazy/progressive loading discussed but flagged as too risky to commit to for mid-May — implementation complexity is high

**Data questions for provider list items:**
- VA clinic "name" data is not great — patient-friendly names are often room/floor numbers
- Facility address vs. clinic address distinction matters for distance display
- Need to confirm with business: do we show email/phone for the appointment? Can we default from veteran profile or do we need a separate screen?
- Appointment reason: default to "from referral" or pass referral number — no decision needed from veteran

---

### Technical Deep Dive — VA Clinic API Call Chain

Walked through the four API calls required to surface VA clinic availability:

**Step 1: Facilities call**
- Input: user facility ID (parent)
- Returns: parent + child facilities veteran is registered at
- Latency: ~0.6 seconds
- Called once per workflow
- **Mitigation:** If referring facility ID is available in the referral object (it is — just not currently used), we may only need to call for one facility. Also possible to pre-cache Charleston and Atlanta facility data since this is a limited pilot.

**Step 2: Eligibility call** ⚠️ BIGGEST BLOCKER
- Input: facility ID + type of care + patient ID
- Returns: whether veteran is eligible for direct scheduling at that facility
- Latency: **~32 seconds** — by far the longest call
- Called once per facility
- Root cause: currently performs a full appointment history check (past 36 months) — this is what makes it slow
- **Proposed fix:** For the referral workflow, skip the history check entirely (veteran is a new patient by definition in this flow). This requires a back-end change — need to identify the right team and get that prioritized. **High priority action item.**
- Additional idea (Steve): pre-cache facility eligibility for Charleston and Atlanta since they're known pilot sites — store facility + type of care eligibility upfront, eliminate the call entirely for pilot
- Tony's point: if a veteran already has a CC referral approved, the business has already determined eligibility — could we just assume VA facility eligibility follows? Worth raising with VHA on Thursday.

**Step 3: Clinics call**
- Input: facility ID + type of care
- Returns: list of clinics at that facility for that care type
- Latency: ~1.4 seconds per facility
- Called once per facility
- **Mitigation:** Pre-cache clinic lists for Charleston and Atlanta (same logic as facility caching). Drawback: won't reflect newly added clinics in real time, but acceptable for a time-limited pilot.

**Step 4: Clinic slots call** 
- Input: facility ID + clinic ID + start/end date range
- Returns: available appointment slots
- Latency: ~2 seconds per clinic 
- Called once per clinic — this multiplies quickly if there are many clinics
- **Mitigations being explored:**
  - Pagination (only fetch slots for visible clinics, load more on demand)
  - Reduce date range (currently fetching 2 months — try 60 days, one week, or one day for initial load)
  - Distance constraint (25 miles) to limit number of clinics
  - If referring facility ID constrains to one facility, number of clinics drops significantly
  - Parallel calls rather than sequential

**Key insight from Kristen/Kay (EPS staff UI):** EPS shows VA + CC providers in a combined view on the staff side — it fetches slots only when a scheduler selects individual providers to add. This "select then fetch" model may be worth adapting for the veteran-facing UI to reduce initial load.

**Test user note:** John was using "Judy" as test user — flagged as worst case. Kristen suggested using "Ben Morgan" as a more representative test user. John to gather additional data points.

---

### Key Technical Decisions / Recommendations Emerging

- **Restrict to referring facility only for VA options (for pilot):** If referral contains referring facility ID, only pull clinics from that one facility. Charleston and Atlanta are geographically isolated so this won't meaningfully limit veteran options.
- **Skip history check in eligibility call:** Requires back-end change — needs to be raised with scheduling product line after VHA sign-off Thursday
- **Pre-cache facility and clinic data for pilot sites:** Eliminates facilities and clinics calls entirely for Charleston/Atlanta. Risk: stale data if clinics change. Acceptable for time-limited pilot.
- **Pagination on provider list:** Show 5 at a time, fetch slots on demand
- **Degrade gracefully:** If slots can't be fetched in time, fall back to distance-sorted list without availability

---

### Open Questions / Blockers to Resolve

**Business/VHA (bring to Thursday meeting):**
- [ ] Can we skip the appointment history check for the referral workflow (new patient assumption)?
- [ ] If a veteran has an approved CC referral, can we assume they're eligible for VA direct scheduling at the same facility for the same care type? (Tony's question)
- [ ] Clinic visibility rule: show all enabled clinics vs. established patient relationship — confirmed we're opening to new patients for this pilot?
- [ ] Contact info / email / phone: require veteran to confirm or default from profile silently?
- [ ] What is the new trigger for the veteran SMS notification (replacing Consult Toolbox dropdown)?

**Engineering (internal follow-up this week):**
- [ ] Confirm: does the referral object contain the referring facility ID? Is it parent or child facility?
- [ ] Test latency with Ben Morgan (more representative test user); gather additional data points
- [ ] Investigate: if we pre-cache Charleston/Atlanta facility + clinic data, what does that implementation look like?
- [ ] Identify which back-end team owns the eligibility endpoint (avails service) and initiate conversation about removing history check for referral workflow
- [ ] Explore Wellhive: does a batch/sorted availability endpoint exist for CC providers?
- [ ] Explore shared component architecture between Hydra referral flow and Orion VA scheduling flow to avoid code duplication

**Mobile:**
- [ ] Kristen meeting with mobile team (Michelle and Ryan) Wednesday 3:30 ET — will bring whatever proposal emerges from Mon/Tue workshops

---

### Next Steps

- [ ] **UX** — Build out three flow options (hunt and peck, middle ground, ideal) in FigJam with engineering notes annotated; present Tuesday
- [ ] **Mike** — Schedule Tuesday 1PM ET follow-up workshop (same group)
- [ ] Document questions, decisions, and proposals in FigJam (temp integrated online scheduling pilot Slack canvas) as single source of truth for Kay/Kristen
- [ ] Present consolidated proposal to Kay by end of week
