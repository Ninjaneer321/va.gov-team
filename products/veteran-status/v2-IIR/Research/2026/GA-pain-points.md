# Veteran Status Card — GA Pain Points

**Data range:** Mar 30, 2025 – Mar 30, 2026
**Source:** GA4 VA.gov Production
**Segment:** LOA3 (verified Veterans) unless noted
**For internal use only**

---

## Overview

This document summarizes behavioral pain points surfaced by 12 months of Google Analytics data for the Veteran Status Card product on VA.gov. All findings are drawn from four GA4 explorations: a conversion funnel, an entry path breakdown, an LOA verification split, and a card page event breakdown. These are observational findings — they indicate where problems likely exist, but qualitative research is needed to confirm root causes.

---

## 12-month baseline metrics

| Metric | Value |
|---|---|
| Total LOA3 sessions (VA.gov) | 23,245,059 |
| LOA3 Veterans who visited profile | 5,216,863 (22.4%) |
| LOA3 Veterans who reached card page | 877,380 (3.77% of all sessions) |
| Veterans who printed their card | 104,191 (11.9% of card page visitors) |
| LOA1 (unverified) sessions on card page | 45,356 (4.3% of card page traffic) |
| Accordion (FAQ) interactions on card page | 1,028,672 |
| "Learn about other types of ID cards" clicks | 77,311 |
| Sign-in navigations from card page | 106,412 |

---

## Pain points

### Pain point 1 — The military information page remains a dominant entry point

332,397 sessions (33% of all card page traffic) arrived from the military information page over 12 months. This is nearly two thirds the volume of the profile hub — the intended primary entry point — which sent 503,909 sessions. The card no longer lives on the military information page, but Veterans are consistently navigating there first to find it. This is a persistent, year-long discoverability problem indicating the card's new location has not fully landed with users.

- Military information page referrals: 332,397 sessions
- Profile hub referrals: 503,909 sessions
- Military information = 66% of profile hub volume, despite the card not living there

*Hypothesis: Veterans associate the Veteran Status Card with military service records and history, making the military information page their instinctive starting point. Navigation and IA improvements may be needed to surface the card more prominently from the profile hub.*

---

### Pain point 2 — High volume of page self-referrals suggests repeated load failures or confusion

317,173 sessions over 12 months were referred from the card page itself — meaning Veterans were returning to the same page within the same session. This is the third largest referrer source, nearly equal to the military information page. At this scale it is unlikely to be explained by bookmarks alone. The most probable causes are error states causing Veterans to reload, slow API calls requiring a refresh, or confusion about what to do after the page loads.

- Card page self-referrals: 317,173 sessions (31% of total card page traffic)
- api_call events: 1,297,793 — significantly higher than page views (1,577,143), suggesting multiple API calls per session

*Hypothesis: The card's data loading behavior may be causing Veterans to reload before the card renders, or an untracked error state is prompting them to try again. Engineering investigation of the api_call event cadence relative to page loads is recommended.*

---

### Pain point 3 — FAQ dependency is extremely high — the page is not self-sufficient

The accordion FAQ was opened 1,028,672 times against 1,577,143 page views — a 65% accordion engagement rate. Nearly two thirds of all card page visits result in a Veteran opening the FAQ to seek additional information. This rate is unusually high and indicates the page is not answering Veterans' primary questions upfront. The content Veterans need most is currently hidden behind an interaction.

- Accordion opens: 1,028,672
- Page views: 1,577,143
- Accordion engagement rate: 65%
- "Learn about other types of Veteran ID cards" clicks: 77,311 — the most clicked FAQ link

*Hypothesis: Veterans are arriving with unresolved questions about eligibility, card type, and use cases. The FAQ is filling a gap the main page content is not addressing. A content audit and page redesign — surfacing eligibility and use case information more prominently — may reduce this rate.*

---

### Pain point 4 — Significant authentication confusion — Veterans signing in from the card page

106,412 navigation clicks to "Sign in" were recorded from the card page over 12 months, alongside 51,541 login events firing directly on the page. Veterans should not need to sign in after reaching the card page — authentication is required to access the profile at all. This volume suggests a meaningful number of Veterans are reaching the card page in a partially authenticated or session-expired state.

- "Sign in" navigation clicks from card page: 106,412
- Login events on card page: 51,541
- Combined this represents approximately 10% of total card page sessions

*Hypothesis: Session timeouts, deep-link access, or authentication edge cases are landing Veterans on the card page before authentication is complete. Worth investigating with engineering to determine whether this represents a technical issue or an expected fallback pattern.*

---

### Pain point 5 — LOA1 users are spending more time on the card page than LOA3 users

45,356 unverified (LOA1) sessions reached the card page over 12 months. These Veterans cannot access their card and are routed to identity verification. However, LOA1 users averaged 51 seconds on the page compared to 49 seconds for verified LOA3 users. Unverified Veterans are spending more time on a page where they cannot complete their goal, suggesting the error or redirect state is not giving them a clear, immediate path forward.

- LOA1 sessions on card page: 45,356 (4.3% of total card page traffic)
- LOA1 average engagement time: 51 seconds
- LOA3 average engagement time: 49 seconds

*Hypothesis: The verification prompt shown to LOA1 users is not clearly communicating what they need to do next and why. A redesign of the ineligible state — with a clearer call to action for identity verification — could reduce time-on-page and improve task completion for this group.*

---

### Pain point 6 — Print rate remains the only measurable action — digital viewing is untrackable

104,191 Veterans printed their card over 12 months, an 11.9% print rate among card page visitors. There is currently no event tracking for successful digital card renders. The remaining 88.1% of card page visitors — 773,189 Veterans — took no tracked action. It is unknown how many successfully viewed their card digitally versus encountered an error. This is the most significant gap in the current measurement setup.

- Print clicks: 104,191 (11.9% of card page visitors)
- Card page visitors with no tracked action: 773,189 (88.1%)
- No current way to distinguish successful digital views from error states

*Recommended engineering ask: Add a `vsc_card_viewed` event that fires on successful card render, and a `vsc_loa_redirect` event that fires when a user is routed to identity verification. These two events would unlock the ability to measure digital viewing as a north star metric and quantify the error state population.*

---

## What is not yet measurable

The following questions cannot be answered with the current GA4 setup and require additional event tagging:

- How many Veterans successfully viewed their card digitally (no `vsc_card_viewed` event exists)
- How many Veterans were routed to identity verification due to LOA1 status (no `vsc_loa_redirect` event exists)
- Whether the modal event (9,753 occurrences) represents an error state or informational prompt — the modal type is not currently tracked
- Mobile app usage — tracked separately and not included in this analysis

---

## Recommended next steps

1. **Priority 1** — Request engineering add `vsc_card_viewed` and `vsc_loa_redirect` events to unlock north star metric tracking
2. **Priority 2** — Investigate the 317,173 self-referral sessions with engineering to determine whether a load failure or error state is the primary driver
3. **Priority 3** — Conduct a content audit of the card page to determine whether FAQ content can be surfaced inline, reducing the 65% accordion engagement rate
4. **Priority 4** — Review the sign-in flow to understand why 106,412 sessions from the card page resulted in a sign-in navigation
5. **Priority 5** — Redesign the LOA1 error or redirect state to provide a clearer path to identity verification
6. **Housekeeping** — Mark the print `link_click` event as a GA4 Key Event in Admin → Events to make it accessible in standard reports without requiring the custom exploration
