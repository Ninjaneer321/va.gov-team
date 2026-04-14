# Research Plan for MHV Medical Records: Recency Indicators Usability Study - March 2026

## Background 🏗️

**What problem is your product trying to solve?**

Veterans struggle to find their most recent medical records results after being notified they're available. Medical records access represents 13.1% of all Medallia contacts, indicating this is a high-volume, high-friction area.

Current issues include:
- No clear indicators for "new" or "recent" results
- Imaging buried within Labs & Tests, forcing manual scanning
- Information overload on list pages
- Unclear which category contains new information

This results in Veterans:
- Clicking through multiple pages to find one new result
- Feeling frustrated and overwhelmed (42% of Medallia complaints)

**Where is your product situated on VA.gov?**

VA.gov > My Health > Medical Records (authenticated experience)

**What is Veterans' familiarity with this tool? Is this a new product or an iteration on an existing one?**

Iteration on existing Medical Records product. Veterans are familiar with accessing records online, but findability problems worsened after the 2025 platform switchover.

**Product Brief**

[MHV on Va.gov Medical Records Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records#mhv-on-vagov-medical-records-product-outline)
    
---

### Related Research 🔍

**Previous Studies:**
- [Medical Records User Research Review Synthesis - February 2026](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2026-02_Research_Review) - Synthesized 16 sources identifying 5 key insights and 4 use cases
- [VA.gov Generative Research (2022-2025)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2022-10_Generative-research/2022-11-medical-records-readout.md) - Identified appointments, facilities, and conditions as natural anchors
- Medallia Feedback Analysis (Q3-Q4 2025) - Documented sharp rise in "can't find" complaints post-platform switch (90% volume increase in complaint count)

**Key Takeaways from Previous Research:**
- Some Veterans struggle with mixed grouping and navigation (imaging buried in Labs)
- Some express wanting search and filtering tools (most explicit feature request)
- Information overload is a major pain point, especially on mobile
- Some Veterans think in terms of appointments/facilities/conditions, not document types
- Uncertainty about record completeness erodes trust

---

### OCTO-DE Priorities

**Objective 3: Relentlessly improve the user experience**
- **Key Result 3.1:** Supports this product's OIT portfolio (Health, Benefits, etc) in improving customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.

- **Key Result 3.2:** Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services.

- **Key Result 3.3:** Supports the delivery of at least one release that directly addresses a documented user pain point within this product.

---

### Veteran Journey

**Where does your product fit into the Veteran journey?**

- `Taking Care of Myself` - Managing ongoing health conditions, following up on test results
- `Aging` - Increased medical complexity, more frequent health monitoring

---

## Research Goals 🥅

### Goals

**1. Understand how Veterans conceptualize "new" or "recent" in medical records**

Learn what time window feels right (7 days? 14 days? 30 days?) and whether time-based indicators match their mental model.

**2. Evaluate whether landing page indicators + list page badges help Veterans find recent results**

Test the "breadcrumb" approach: landing page cards with counts → list pages with badges → detail pages.

**3. Identify what information Veterans need on cards and badges**

Determine minimal vs. optimal content for landing page cards and list page indicators.

**4. Assess whether Veterans can discover and use the updated date filter to find specific past results.**

Evaluate whether the accordion-style date filter is discoverable, intuitive, and effective when Veterans need to locate a specific historical record, and identify any interaction barriers that could signal accessibility concerns.

---

### Outcome

**How will this research advance your product to the next phase in the design process?**

This research will inform the design and engineering of MVP 1 + MVP 2 for production release. Specifically, we'll learn:
- The optimal time window for "new" indicators (engineering parameter)
- Required content for landing page cards (design specification)
- Whether the breadcrumb navigation approach supports findability (design validation)
- Whether the updated accordion date filter is discoverable and usable for finding historical results (accessibility pattern validation)

Findings will directly inform the production release addressing Use Case #1: Following Up on Recent Care (prioritized based on 3.23M page views and 42% of Medallia complaints).

---

### Research questions

**RQ1: What characteristics signal "new" or "recent" to Veterans in their medical records?**
- What do Veterans care about that tells them something is new or recent?
- Is it time-based (7 days, 14 days, 30 days)? Event-based (since my appointment)? User-based (since I last looked)?
- When something is marked as "recent" but they've already seen it, is that helpful (reminder) or confusing (feels stale)?

> Maps to: Task 1 (recency mental model probes on list page), Task 2 (time window exploration)

**RQ2: What navigation tactics help Veterans orient themselves to new information?**
- Do counts of new results help them understand where to look? ("You have 2 new lab results")
- What else helps them orient themselves to what's new?
- What navigation patterns reduce cognitive load when scanning for recent items?

> Maps to: Task 1 (landing page entry), Task 1.5 (Recent Results section structure)

**RQ3: What information helps Veterans orient, navigate, and understand new medical records?**
- What helps them decide where to click?
- What reduces information overload?
- Is summary information enough, or do they need specific details upfront?

> Maps to: Task 1 (exploration of card content), Task 1.5 (section structure)

**RQ4: What types of visual information help Veterans identify what's new?**
- Do badges, dates, sorting, or other visual cues help them understand what's new?
- What combination of visual communication (icons, hierarchy, labels) helps them scan quickly?
- Where do their eyes go first when looking for new items?

> Maps to: Task 1 (observing scanning behavior on landing page and list page), Task 1.5 (badge labeling and visual cue discussion)

**RQ5: Can Veterans connect information presented in different contexts?**
- Do Veterans recognize the same information when presented on a landing page vs. a list page? (Recognition and recall)
- Does seeing a summary ("2 new results") help them identify those items on a detail list?
- Do they notice connections between information in different places, or does each page feel isolated?

> Maps to: Task 1 (landing page card → list page flow, context transfer question), Task 1.5 (partial coverage understanding, trust & confidence)

**RQ6: Can Veterans use the updated filter pattern to locate specific past results?**
- Can they discover the filter control without prompting?
- Is the accordion interaction intuitive?
- Do the date range options match how they think about past care?
- Are there interaction barriers that suggest accessibility concerns?

> Maps to: Task 3 (filter discovery, accordion usability, date-range selection)

---

### Hypotheses

**Hypothesis 1:** Veterans will prefer a time-based window of 7-14 days for "Recent" indicators, as this aligns with typical follow-up timelines after appointments.

**Hypothesis 2:** Landing page cards showing counts ("You have 2 new lab results") will provide helpful orientation, reducing aimless clicking through categories.

**Hypothesis 3:** Minimal information on cards (record type + count + time frame) will be sufficient for navigation. Veterans don't need individual record names on landing page.

**Hypothesis 4:** "Recent" Badges on list pages will be more effective than landing page cards alone, as they provide specific identification of new items.

**Hypothesis 5:** Veterans will be able to use the accordion filter to narrow results by date range, but may need a moment to discover the control. Once found, the interaction will be completable without assistance for most participants.

---

## Methodology 🛠️

**Moderated usability testing with concept exploration**

This method is appropriate because:
- We have a testable prototype (high-fidelity) showing the proposed approach
- We need to evaluate whether the design supports findability (evaluative)
- We want to understand mental models around "recency" (exploratory)
- The product is in the design phase, ready for concept validation before build

The filter task evaluates a pattern change from dropdown to accordion for date filtering. This task provides a preliminary usability signal on the updated accessible pattern.

We will use a **GitHub Codespace** (coded prototype) instead of Figma because Figma is not accessible to screen readers. The coded prototype must be complete and included in the Research Ops submission before the study can begin.

---

### Location

Video interviews over Zoom (60 minutes for non-AT participants, 90 minutes for AT participants)

---

## Research materials 📔

**For moderated usability tests:**
- [Link to conversation guide](conversation-guide.md)
- [Link to coded prototype (GitHub Codespace)](url goes here) - *In progress, URL TBD*

**Prototype will show:**
- Medical Records landing page with "Recent Results" cards (Labs, Care Notes)
- Cards show counts and time frame ("2 new results - last 7 days")
- Click-through to list pages with "RECENT" badges next to recent items
- Click-through to list pages with "RECENT" Indicators next to recent items

> **Note:** The coded prototype is currently being built by the lead UX designer. 

---

## Recruitment 🎯

### Recruitment approach

**Target audience:** Veterans who actively use VA online medical records, including Veterans who use assistive technology (AT).

**Strategy:** We are aiming for a **50/50 split between AT and non-AT participants**. Lean maximum variation sampling to ensure diversity in:
- AT vs. non-AT use
- Medical complexity (simple vs. complex histories)
- Tech comfort (low, medium, high)
- Frequency of use (occasional vs. regular)
- Age range (including 55+)

**AT types to test:** Screen readers and screen magnification (desktop/laptop)

**Recruiting partner:** Perigean

> **Note on recruitment survey:** There is a limit to how many questions Perigean can include in the Calendly screener survey. Consider a tiered approach (Tier 1 questions for all participants; Tier 2 AT-specific questions for those who indicate AT use). Provide a copy or link to the recruitment survey to Perigean before the kickoff call so both parties can review it together.

> **AT participant vetting:** If there are any questions about whether a recruited AT participant meets the qualification criteria, contact the ADE team via their Slack channel. ADE can vet AT participants for appropriateness.

---

### Recruitment criteria

We want to schedule 15 participants for sessions; for 10 completed sessions minimum.

### List the ideal completed sessions and total number of participants:

- `Veterans:` **15**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **15** (1.5x target for 10 completed sessions)
- `Ideal completed sessions:` **10**

**AT / non-AT breakdown (approximate 50/50 split):**
- `AT participants (screen reader or screen magnification):` **~7-8**
- `Non-AT participants:` **~7-8**

---

### Primary criteria (must-haves)

**All participants must meet these criteria:**

- Have accessed VA medical records online (VA.gov or My HealtheVet) in the past 6 months
- Have received lab results OR care notes in the past 3 months
- At least 3 participants with complex medical histories (multiple ongoing conditions, frequent appointments)
- At least 3 participants with simple medical histories (occasional care, few conditions)

**AT participants (approximately 7-8):**
- Must use a screen reader or screen magnifier every time they access the internet
- Must be willing to join the session using their screen reader or screen magnification software
- Must have been using their AT for at least 1 year
- Must use a desktop or laptop for the session (this study is desktop/laptop only for AT participants)

---

### Secondary criteria (nice-to-haves)

- Mix of tech comfort levels (at least 2 with low tech comfort among non-AT participants)
- Mix of frequency: at least 2 who access records monthly or more, at least 2 who access quarterly
- At least 2 participants age 55+
- At least 1 mobile-primary user among non-AT participants (accesses records mainly on phone/tablet)
- Geographic diversity

---

## Screener Questions 📋

> **Note:** These questions are organized in a tiered approach. Tier 1 questions apply to all participants. Tier 2 (AT-specific) questions apply only to participants who indicate AT use in Tier 1.

### Tier 1 Screener Questions (All participants)

**1. Do you receive VA healthcare benefits?**

- **Qualifying response:** Yes
- **Disqualifying response:** No

---

**2. Have you accessed your VA medical records online in the past 6 months?**

This includes using VA.gov (My Health section) or My HealtheVet to view lab results, care notes, imaging, or other medical information.

- **Qualifying response:** Yes
- **Disqualifying response:** No

---

**3. Have you received lab results OR visit summaries/care notes from the VA in the past 3 months?**

Lab results include bloodwork, urinalysis, or other lab tests. Visit summaries and care notes are records of your appointments with VA providers.

- **Qualifying response:** Yes, I have received lab results OR care notes in the past 3 months
- **Disqualifying response:** No, I have not received either in the past 3 months

---

**4. How would you describe your current health situation?**

- **Option A:** I have multiple ongoing health conditions and see VA providers regularly (at least monthly)
- **Option B:** I have one or two health conditions and see VA providers occasionally (a few times per year)
- **Option C:** I am generally healthy and see VA providers for routine care only

**Qualifying response:** Mix - Recruit at least 3 from Option A, at least 3 from Options B or C

---

**5. How comfortable are you with technology and using websites or apps?**

- **Option A:** Very comfortable - I use technology daily and rarely need help
- **Option B:** Somewhat comfortable - I can usually figure things out but sometimes need help
- **Option C:** Not very comfortable - I often need help with technology

**Qualifying response:** Mix - Recruit at least 2 from Option C (low tech comfort) among non-AT participants

---

**6. How often do you access your VA medical records online?**

- **Option A:** Weekly or more often
- **Option B:** Monthly (a few times a month)
- **Option C:** A few times per year
- **Option D:** Rarely

**Qualifying response:** Mix - Recruit at least 2 from Options A or B (frequent users), at least 2 from Options C or D (occasional users)

---

**7. Do you use a screen reader or screen magnifier every time you use the Internet?** We ask this because we want to make sure that our website works for people who rely on these technologies.

- **Option A:** Yes *(proceed to Tier 2 AT screener questions below)*
- **Option B:** No *(this participant is a non-AT recruit; skip Tier 2 questions)*

---

### Tier 2 Screener Questions (AT participants only)

*Ask these questions only to participants who answered "Yes" to Question 7 above.*

---

**AT-1. Are you willing to join the Zoom session using your screen reader or screen magnifier?**

- **Qualifying response:** Yes
- **Disqualifying response:** No *(DISQUALIFY)*

---

**AT-2. How long have you been using your screen reader or screen magnifier?**

- **Option A:** Less than 1 year *(DISQUALIFY)*
- **Option B:** At least 1 year *(QUALIFY; ask next question)*

---

**AT-3. What is the name of the screen reader or screen magnifier technology that you will use during the Zoom session?** *(Open text field — RECORD response)*

- If they say a non-digital tool (e.g., "magnifying glass"), *DISQUALIFY*
- If they say "JAWS", "NVDA", "VoiceOver", "TalkBack", or "Narrator", *RECORD as **screen reader user** and RECRUIT*
- If they say "ZoomText", "Magnifier", "Zoom", or "Magnification", *RECORD as **screen magnifier user** and RECRUIT*
- If they say "increase font size" or "zoom in the browser", ask what percentage they zoom to. If 200% or greater, *RECORD as **screen magnifier user** and RECRUIT*
- If unsure whether someone qualifies, contact ADE via their Slack channel for vetting guidance.

---

**AT-4. For this session, you will need a desktop or laptop computer with Zoom installed that can screen share and has a working microphone. Are you able to use a desktop or laptop for this session?**

- **Qualifying response:** Yes
- **Disqualifying response:** No *(DISQUALIFY for AT sessions; this study tests AT on desktop/laptop only)*

---

## Timeline 🗓️

### Prepare

> **Note:** After submission to Research Ops, allow approximately **7 days for review and approval**. The coded prototype (GitHub Codespace) **must be complete and included** in the Research Ops submission — it cannot be submitted without it.

**Prototype:** Currently being built by the lead UX designer. Timeline is TBD. Research sessions cannot be scheduled until the prototype is complete and approved.

**Pilot sessions:** Plan for **1-2 screen reader pilots** and **1 screen magnification pilot**. ADE accessibility specialists can run pilot sessions with AT participants.


**Pilot session details:**
- `Pilot participant name:` TBD - coordinate with ADE team
- `Date and time of pilot session:` TBD (pending prototype completion and Research Ops approval; screen reader and magnification pilots can be coordinated with ADE after Cindy Merrill returns April 23)

### Recruitment approach with Perigean

We will partner with Perigean to recruit Veterans. We request a 30-minute kickoff meeting with Perigean to align on recruitment criteria, AT screener questions, and the tiered survey approach.

**Before the Perigean kickoff call:** Provide Perigean with a copy or link to the recruitment survey so both parties can review the screener questions (including AT-specific questions) ahead of the call.

> **Note for Perigean:** Please schedule **different time slot lengths** for AT vs. non-AT sessions:
> - AT sessions: **90 minutes**
> - Non-AT sessions: **60 minutes**

**Proposed kickoff call times:**
TBD (pending prototype completion)

---

### Research sessions

- `Planned dates of research:` TBD (pending prototype completion and Research Ops approval)

---

### Length of sessions

- `Session length:` **90 minutes for AT participants; 60 minutes for non-AT participants**
  - AT sessions are longer to account for assistive technology setup, slower navigation, and additional AT warm-up questions.
- `Buffer time between sessions:` 30 minutes
- `Maximum Sessions per day:` 3

---

### Availability

**Please list exact dates and times in EASTERN Standard Time:**

TBD (pending prototype completion and Research Ops approval)

---

## Team Roles 🕵️👩‍💻👩‍🔬

- `Moderator:` **Laura Simpson**
- `Research guide writing and task development:` **Laura Simpson**
- `Participant recruiting & screening:` **Perigean**
- `Project point of contact:` **Laura Simpson** and **Jonathan Nelson**
- `Accessibility specialist (for AT sessions):` **ADE Team** — An ADE accessibility specialist will join AT sessions to make observations about the assistive technology and provide technical support. See the [ADE intake ticket #138956](https://github.com/department-of-veterans-affairs/va.gov-team/issues/138956) for coordination details.
- `Note-takers:` TBD
- `Observers:`
  - **[TBD]**
  - **[TBD]**
  - **[TBD]**
  - **[TBD]**

---

## Approvals ✅

- `Reviewed by [OCTO Product Owner] on [MM-DD-YYYY]` - *Pending*
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]` - *Pending*

---
