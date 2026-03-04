# **March/03/2026**
## Key Outcomes

The team is pivoting to provider connection work for a June deadline, switching from the current pilot approach. Pilot sites are changing—Marion, Salisbury, and Puget Sound will be replaced with two new sites, though official notification timing and transition details remain unclear.

---

## Decisions Made

- **Priority shift:** Development focus moved to provider connection/selection functionality this week.
- **Technical approach:** Veterans will select providers directly by location and care type, eliminating complex NPI matching logic.
- **Pilot site change:** Current three pilot sites will be replaced with two new sites (already briefed to Congress in Four Corners).

## Progress & Completed Work

- **First successful end-to-end test:** A veteran successfully scheduled an appointment through the full workflow during last week's call with pilot site.
- Veteran feedback was positive after follow-up call.
- Minor issue: Provider's paper schedule wasn't synced with electronic scheduling software, but appointment slot was correctly available in system.

## Technical Work In Progress

- **This week's spike:** Review EPS endpoints and verify configuration from previous half-implementation.
- **Provider selection workflow:** Pull user location, match to care type, return filtered provider list with provider service IDs required for appointment slot API calls.
- **Reduced complexity:** No new auth connections needed; simpler than previous CCRA NPI matching approach.
- Front-end pages expected to be ready before back-end implementation.
- Work will be fully demoable once complete.

## Blockers & Risks

- **Scope uncertainty:** Multiple meetings scheduled this week to clarify June pilot scope and requirements.
- **Pilot transition unclear:** No guidance yet on whether to maintain current pilot support during June build-out or turn off immediately.
- **Site notification pending:** Waiting for official approval to notify current pilot sites of change to avoid wasted outreach efforts.
- **Travel canceled:** Previously planned pilot site visits are canceled.

## Pending Confirmation

- Exact scope and timeline details for June delivery.
- Whether current pilot remains active during new development or gets turned off.
- Official notification process and timing for current pilot sites.
- Impact on tomorrow's scheduled pilot site meeting.

## Action Items

| Owner | Action |
|---|---|
| Lee | Review EPS endpoints and configuration this week |
| Mike & team | Internal meetings later this week to define June pilot scope and requirements |
| Leadership/IVC | Clarify pilot transition strategy and site notification timing |
| Team | Follow-up discussions Thursday with Kay and Kristen on pilot changes |

## Next Steps

1. Continue with tomorrow's pilot site meeting (not canceled yet).
2. Thursday meeting with Kay and Kristen to discuss pilot transition.
3. Additional internal meetings this week to flesh out June scope.
