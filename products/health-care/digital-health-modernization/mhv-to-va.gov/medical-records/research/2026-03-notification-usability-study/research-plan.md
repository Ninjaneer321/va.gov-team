---
# Research Plan Metadata
title: "Medical Records: Recency Indicators Usability Study - March 2026"
date: 2026-03-03
last_updated: 2026-03-17
team: "MHV Medical Records"
product: "Medical Records: Recency Indicators"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans struggle to find their most recent medical records results after receiving notifications. Mixed grouping, information overload, and lack of recency indicators make it difficult to locate new lab results, care notes, and other recently added records."
  product_location: "VA.gov > My Health > Medical Records"
  user_familiarity: "Iteration on existing Medical Records product"
  product_brief_url: "[[Research Review Synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2026-02_Research_Review/research-synthesis.md)"

# Research Design
methodology: "Moderated usability testing with concept exploration"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand how veterans conceptualize 'new' or 'recent' in medical records (time-based window)"
  - goal_2: "Evaluate whether landing page indicators + list page badges help veterans find recent results"
 
research_questions:
  - "How do veterans define 'new' or 'recent' when thinking about medical records? (7 days? 14 days? 30 days?)"
  - "Do landing page cards showing counts of new results provide helpful orientation before entering lists?"
  - "Are badges on list pages sufficient to identify new items, or is additional information needed?"
  - "What information do veterans need on landing page cards to decide where to click?"
  - "Does the 'breadcrumb' approach (landing page card → list page with badges → detail page) work for finding recent results?"

hypotheses:
  - "Veterans will prefer a time-based window of 7-14 days for 'new' indicators"
  - "Landing page cards showing counts will help veterans orient to where new results are located"
  - "Minimal information on cards (type + count) will be sufficient for navigation"

expected_outcomes: "Findings will inform the design of recency indicators for MVP release. We'll learn the optimal time window, required card content, and whether the breadcrumb navigation approach supports findability."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation"
  
  primary_criteria:
    - "Have accessed VA medical records online in the past 6 months"
    - "Have received lab results or care notes in the past 3 months"
    - "Mix of medical complexity (simple vs. complex medical histories)"
    
  secondary_criteria:
    - "Mix of tech comfort levels"
    - "Mix of frequency (regular vs. occasional users)"
    - "Age diversity (at least 2 participants over 55)"
    
participants:
  veterans: 9
  caregivers: 0
  dependents: 0
  total_recruited: 9
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "2026-03-28"
  pilot_participant: "[Name TBD]"
  research_dates: "2026-03-31 to 2026-04-09"
  research_review_submission: "2026-03-20"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 3: Relentlessly improve the user experience"
    key_results: 
      - "Supports delivery of at least one release that directly addresses a documented user pain point within this product"
      - "Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services"
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Medical Records Research Review Synthesis - February 2026](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2026-02_Research_Review/research-synthesis.md)"
    
tags:
  - "medical-records"
  - "usability-testing"
  - "veterans"
  - "evaluative-research"
  - "findability"
---


# Research Plan for MHV Medical Records: Notification Usability Study - March 2026

## Background 🏗️

**What problem is your product trying to solve?**

Veterans struggle to find their most recent medical records results after being notified they're available. Current issues include:
- No clear indicators for "new" or "recent" results
- Imaging buried within Labs & Tests, forcing manual scanning
- Information overload on list pages
- Unclear which category contains new information

This results in veterans:
- Clicking through multiple pages to find one new result
- Calling help desk for support (13.1% of Medallia tasks)
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
- Medallia Feedback Analysis (Q3-Q4 2025) - Documented sharp rise in "can't find" complaints post-platform switch

**Key Takeaways from Previous Research:**
- Veterans struggle with mixed grouping and navigation (imaging buried in Labs)
- They want search and filtering tools (most explicit feature request)
- Information overload is a major pain point, especially on mobile
- Veterans think in terms of appointments/facilities/conditions, not document types
- Uncertainty about record completeness erodes trust

---

### OCTO-DE Priorities

**Objective 3: Relentlessly improve the user experience**
- **Key Result 3.1:** Supports this product’s OIT portfolio (Health, Benefits, etc) in improving customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.

- **Key Result 3.2:** 100% of end-user facing C100 systems maintain a ranked list of user pain points.
  - *Research Ops Plain Language: Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services.*
  
- **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system.
  - *Research Ops Plain Language: Supports the delivery of at least one release that directly addresses a documented user pain point within this product.*

---

### Veteran Journey

**Where does your product fit into the Veteran journey?**

- `Taking Care of Myself` - Managing ongoing health conditions, following up on test results
- `Aging` - Increased medical complexity, more frequent health monitoring

---

## Research Goals 🥅

### Goals

**1.Understand how veterans conceptualize "new" or "recent" in medical records**

Learn what time window feels right (7 days? 14 days? 30 days?) and whether time-based indicators match their mental model.

**2. Evaluate whether landing page indicators + list page badges help veterans find recent results**

Test the "breadcrumb" approach: landing page cards with counts → list pages with badges → detail pages.

**3. Identify what information veterans need on cards and badges**

Determine minimal vs. optimal content for landing page cards and list page indicators.

---

### Outcome

**How will this research advance your product to the next phase in the design process?**

This research will inform the design and engineering of MVP 1 + MVP 2 for production release. Specifically, we'll learn:
- The optimal time window for "new" indicators (engineering parameter)
- Required content for landing page cards (design specification)
- Whether the breadcrumb navigation approach supports findability (design validation)

Findings will directly inform the production release addressing Use Case #1: Following Up on Recent Care (prioritized based on 3.23M page views and 42% of Medallia complaints).

---

### Research questions

**1. How do veterans define "new" or "recent" when thinking about medical records?**
- Is 7 days too short? 14 days? 30 days?
- When a badge persists after viewing, is that helpful (reminder) or confusing (feels stale)?
- What happens when the indicator goes away—is that okay or confusing?

**2. Do landing page cards showing counts of new results provide helpful orientation?**
- Do they help veterans know where to look first?
- Or do they feel like unnecessary extra clicks?
- When veterans see "You have 2 new lab results," does that help them know where to go?
- Does the card help connect to indicators on the list?

**3. What information do veterans need on landing page cards?**
- Is just the count enough ("2 new results")?
- Do they need dates ("Added in last 7 days")?
- Do they need specificity ("Chemistry Panel, Complete Blood Count")?
- Do they need categories? 

**4. Are badges on list pages sufficient to identify new items?**
- What makes a badge noticeable vs. easy to miss?
- What additional context helps (dates, "RECENT" label, icon)?

**5. Does the breadcrumb approach work for finding recent results?**
- Landing page card → list page → detail page
- Is this flow intuitive or frustrating?

---

### Hypotheses

**Hypothesis 1:** Veterans will prefer a time-based window of 7-14 days for "new" indicators, as this aligns with typical follow-up timelines after appointments.

**Hypothesis 2:** Landing page cards showing counts ("You have 2 new lab results") will provide helpful orientation, reducing aimless clicking through categories.

**Hypothesis 3:** Minimal information on cards (record type + count + time frame) will be sufficient for navigation. Veterans don't need individual record names on landing page.

**Hypothesis 4:** Badges on list pages will be more effective than landing page cards alone, as they provide specific identification of new items.

---

## Methodology 🛠️

**Moderated usability testing with concept exploration**

This method is appropriate because:
- We have a testable prototype (high-fidelity) showing the proposed approach
- We need to evaluate whether the design supports findability (evaluative)
- We want to understand mental models around "recency" (exploratory)
- The product is in the design phase, ready for concept validation before build

---

### Location

- [X] **Remote**

---

## Research materials 📔

**For moderated usability tests:**
- [Link to conversation guide]([url goes here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2026-03-notification-usability-study/conversation-guide.md)) - *In progress*
- [Link to prototype](url goes here) - *In progress, expected by March 20*

**Prototype will show:**
- Medical Records landing page with "Recent Results" cards (Labs, Care Notes)
- Cards show counts and time frame ("2 recent results - last 7 days")
- Click-through to list pages with "RECENT" badges next to recent items
- Ability to test variations in time window (7 vs. 14 days)
- Ability to test "Recent Results" layout variations

---

## Recruitment 🎯

### Recruitment approach

**Target audience:** Veterans who actively use VA online medical records

**Strategy:** Lean maximum variation sampling to ensure diversity in:
- Medical complexity (simple vs. complex histories)
- Tech comfort (low, medium, high)
- Frequency of use (occasional vs. regular)
- Age range (including 55+)

**Recruiting partner:** Perigean

---

### Recruitment criteria

### List the ideal completed sessions and total number of participants:

- `Veterans:` **9**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **9** (1.5x target for 6 completed sessions)
- `Ideal completed sessions:` **6**

---

### Primary criteria (must-haves)

**All participants must meet these criteria:**

- Have accessed VA medical records online (VA.gov or My HealtheVet) in the past 6 months
- Have received lab results OR care notes/visit summaries in the past 3 months
- At least 3 participants with complex medical histories (multiple ongoing conditions, frequent appointments)
- At least 3 participants with simple medical histories (occasional care, few conditions)

---

### Secondary criteria (nice-to-haves)

- Mix of tech comfort levels (at least 2 with low tech comfort)
- Mix of frequency: at least 2 who access records monthly or more, at least 2 who access quarterly
- At least 2 participants age 55+
- At least 1 mobile-primary user (accesses records mainly on phone/tablet)
- Geographic diversity

---

## Screener Questions 📋

**1. Have you accessed your VA medical records online in the past 6 months?**

This includes using VA.gov (My Health section) or My HealtheVet to view lab results, care notes, imaging, or other medical information.

- **Qualifying response:** Yes
- **Disqualifying response:** No

---

**2. Have you received lab results OR visit summaries/care notes from the VA in the past 3 months?**

Lab results include bloodwork, urinalysis, or other lab tests. Visit summaries and care notes are records of your appointments with VA providers.

- **Qualifying response:** Yes, I have received lab results OR care notes in the past 3 months
- **Disqualifying response:** No, I have not received either in the past 3 months

---

**3. How would you describe your current health situation?**

- **Option A:** I have multiple ongoing health conditions and see VA providers regularly (at least monthly)
- **Option B:** I have one or two health conditions and see VA providers occasionally (a few times per year)
- **Option C:** I am generally healthy and see VA providers for routine care only

**Qualifying response:** Mix - Recruit at least 3 from Option A, at least 3 from Options B or C

---

**4. How comfortable are you with technology and using websites or apps?**

- **Option A:** Very comfortable - I use technology daily and rarely need help
- **Option B:** Somewhat comfortable - I can usually figure things out but sometimes need help
- **Option C:** Not very comfortable - I often need help with technology

**Qualifying response:** Mix - Recruit at least 2 from Option C (low tech comfort)

---

**5. How often do you access your VA medical records online?**

- **Option A:** Weekly or more often
- **Option B:** Monthly (a few times a month)
- **Option C:** A few times per year
- **Option D:** Rarely

**Qualifying response:** Mix - Recruit at least 2 from Options A or B (frequent users), at least 2 from Options C or D (occasional users)

---

## Timeline 🗓️

### Prepare

**Prototype finalized:** March 20, 2026(loose goal)

**Pilot session:**
- `Pilot participant name:` [TBD - send in Slack channel]
- `Date and time of pilot session:` March 28, 2026, 2:00 PM EST

---

### Research sessions

- `Planned dates of research:` March 31 - April 9, 2026

---

### Length of sessions

- `Session length:` 60 minutes
- `Buffer time between sessions:` 30 minutes
- `Maximum Sessions per day:` 3

---

### Availability

**Please list exact dates and times in EASTERN Standard Time:**

- 3/27, Friday, Pilot Sessions (Team Only)
- 3/31, Tuesday, 9:00 AM-12:00 PM, 1:00 PM-2:00 PM EST
- 4/1, Wednesday, 9:00 AM-12:00 PM, 1:00 PM-4:00 PM EST
- 4/2, Thursday, 9:00 AM-12:00 PM, 1:00 PM-2:00 PM EST
- 4/3, Friday, 9:00 AM-12:00 PM, 1:00 PM-4:00 PM EST
- 4/6, Monday, 9:00 AM-12:00 PM, 1:00 PM-2:00 PM EST
- 4/7, Tuesday, 9:00 AM-12:00 PM, 1:00 PM-2:00 PM EST
- 4/8, Wednesday, 9:00 AM-12:00 PM, 1:00 PM-4:00 PM EST
- 4/9, Thursday, 9:00 AM-12:00 PM, 1:00 PM-2:00 PM EST


---

## Team Roles 🕵️👩‍💻👩‍🔬

- `Moderator:` **Laura Simpson**
- `Research guide writing and task development:` **Laura Simpson**
- `Participant recruiting & screening:` **Perigean**
- `Project point of contact:` **Laura Simpson** and **Jonathan Nelson**
- `Accessibility specialist:` **Sara Horton**
- `Note-takers:` **Jonathan Nelson**
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
