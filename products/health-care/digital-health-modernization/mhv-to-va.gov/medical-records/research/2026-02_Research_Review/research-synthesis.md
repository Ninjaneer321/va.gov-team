# Medical Records Findability Research Synthesis
**Research Period:** 2022-2025 (sources analyzed Feb 2026)  
**Researcher:** Laura Simpson
**Status:** Complete - Recommendations made

---

## Executive Summary

We synthesized 16 research sources (studies, Medallia feedback, analytics, mobile app reviews) spanning 2022-2025 to understand Medical Records findability problems. 

**Key Outcomes:**
- 5 validated insights about findability blockers
- 4 use cases prioritized by frequency and impact
- Recommendation to prioritize Use Case #1: Following Up on Recent Care

**Next Steps:**  

Concept Designs on Use Case #1 beginning 3/2/2025. Plan for Usability Study on Concept Designs, with a synthesis delivery on April 15.
---
## Use Cases Identified

We identified 4 use cases, prioritized by frequency (from analytics + research):

### 1. Following Up on Recent Care [HIGHEST PRIORITY]
**What veterans want to accomplish:**  
Quickly review their latest health updates/results after receiving a notification

**Hypothesis**
Veterans are experiencing navigational friction, because the current structure of the records page doesn't align with Veterans mental model.
**Problems blocking them:**
- Navigational friction across multiple domains
- Users are brought to a landing page without any additional context
- No clear “what’s new” or recency indicators
- Unclear which category contains new information
- Notification doesn’t deep link to the specific result

**Evidence:**
- Page views: 3.23M Labs & Test Results, 2.62M detail clicks
- Medallia: 13.1% trying to "view labs/results," 42% trying to view/download imaging
- Primary use case from research: "understand and/or monitor health"

### 2. Understanding a Care Episode [HIGH PRIORITY]
**What veterans want to accomplish:**  
Veterans want to pull all the records from a specific care episode.
**Hypothesis**
Veterans are having organizational issues with medical record fragmentation, because the data is siloed by domain rather than grouped by episode
**Problems blocking them:**
- Records are fragmented by type (labs, imaging, notes) rather than grouped by episode
- No temporal or facility-based grouping
- Unclear timeline of what happened during the episode
- Must manually hunt across multiple categories to reconstruct a care episode

**Evidence:**
- Medallia: 36.5% of tasks categorized as "Other Medical Records (general look up)" - suggests broad, context-based searches beyond specific record types
- VA.gov generative research (2022-2025): Appointments, facilities, and practice/condition identified as natural anchors - veterans think by episode/context, not document type
- Use case research: "Check current and/or past appointments" as a context for accessing records
- Medallia (post-switch): "Terminology & placement confusion" - language doesn't match how veterans think about their care experiences
- Help desk: "Where do I see labs?" questions suggest veterans are looking for records by context (recent appointment) not by type

### 3. Sharing with a Specialist [HIGH PRIORITY]
**What veterans want to accomplish:**  
Veterans want to share specific records related to a diagnosis with a new specialist
**Hypothesis**
Veterans are running into a fragmentation problem because medical records are split by domain (labs, imaging, notes) rather than by condition/diagnosis/time.
**Problems blocking them:**
- Records are split by domain (labs, imaging, notes) rather than organized by condition
- No way to filter by health condition or diagnosis
- Manual hunting across multiple pages to gather condition-specific records
- Uncertainty about what's relevant vs. complete

**Evidence:**
- Medallia: 42% of tasks trying to view/download imaging - likely for specialist referrals and outside care
- Page views: 537k visits to "Download Medical Records Reports" page - indicates sharing/external use
- Use case research: "Identify evidence that can be used to obtain benefits" purpose - shows need to locate specific records by claim/condition
- VA.gov generative research: Veterans anchor on "practice/condition" as a natural organizing principle
- Medallia pain point: "No search/filter and unclear grouping in Medical Records" - can't narrow to condition-specific records

### 4. Comprehensive Records for new PCP [MEDIUM HIGH PRIORITY]
**What veterans want to accomplish:**  
Veterans want to share relevant records for a new PCP. They need a comprehensive view of their health history that is well organized.
**Hypothesis**
Veterans are struggling with fragmented medical records across domains (Labs, Imaging, Care Notes, Conditions, Vitals, Vaccines) because there is no organization to create a cohesive understanding of conditions, imaging, labs and care notes.
**Problems blocking them:**
- Records fragmented across multiple domains (Labs, Imaging, Care Notes, Vitals, Vaccines, Health Conditions)
- No perception of "bundle everything" or "complete history" option
- Uncertainty about completeness - are all records included?
- Unclear what a comprehensive record set should contain

**Evidence:**
- Behavioral (moderated studies): Veterans download/print "just in case" because they lack confidence they can retrieve records later - suggests completeness concerns
- Medallia pain point: "Missing or incomplete records" - veterans report frustration with gaps, exacerbated by information overload
- MR Quarterly Metrics: Veterans report "missing or incomplete data," frustration exacerbated by navigation issues
- Use case research: "Identify evidence that can be used to obtain benefits" - need comprehensive documentation for claims
---

## Research Sources

### Primary Sources
1. VA.gov User Studies (2022-2025) - 8 studies
    - 2022‑09 Discovery (informational interviews)
    - 2022‑11 Generative research (card sort + interviews) — focal baseline
    - 2023‑05 Usability Round 1 (prototype)
    - 2024‑03 Usability Round 2 (AT vs. non‑AT)
    - 2024‑08 Usability Round 3 (AT)
    - 2024‑10 Findability study (contextual inquiry; MyChart comparison)
    - 2024‑11 Filters study (MR, Secure Messages, Medications)
    - 2025‑01 Usability Round 4 (AT; Settings, Download, Imaging)
2. Medallia Survey Feedback (1/2025-4/2025 6/2025-12/2025)
3. MR Quarterly Metrics Reports (Q2-Q4 2025)
4. VA Mobile App User Research & Reviews (Sept 2025)
    - Monthly Mobile App User Research: App Store review synthesis: Medical Records feedback, Sept 2025
    - Prioritization Analysis (Medications, Allergies, Immunizations): Detailed findings, user prioritization
    - User Expectations from Homepages (Mobile Research): Observation notes 
5. DataDog Medical Records Page Views - Jan 2025-Feb 2025



---

## Key Insights

### Insight #1: Veterans struggle with navigation and mixed grouping of record types

**USER TASK BLOCKED:** Find a specific lab, imaging, or note quickly

**EVIDENCE:**
- Medallia (Jun-Sept 2025): Sharp rise in "can't find" complaints post-switch
- Medallia (Jan-Apr 2025): "Imaging mixed with labs" emerging as pain point
- Help Desk: Users report needing multiple pages to locate single records
- Mobile app reviews: "Missing labs/test results," inability to download

**USER QUOTES:**
- "Why are my imaging results mixed in with my labs? I just want to see each type separately."
- "Labs and test results are missing. I can't download anything—makes it really hard to keep track."

---
### Insight #2: Information overload is a major pain point

**USER TASK BLOCKED:** Quickly scan a long list to find relevant records

**EVIDENCE:**
- MR Quarterly Metrics (Aug-Oct 2025): "Information overload" explicitly reported, exacerbated by navigation issues
- Mobile feedback: Information "flowing off the screen"
- Medallia: Users request more navigation tools (search, filtering) to manage volume

**USER QUOTES:**
- "MR Quarterly Metrics (Aug-Oct 2025): "There’s just too much data here—I can’t find what I need with all these results jammed together."
- Mobile Feedback: "It feels like everything is just flowing off the screen. Wish I could just see what matters."
---
### Insight #3: Veterans naturally think in terms of appointments, facilities, and conditions (not document types) a.k.a Anchoring

**USER TASK BLOCKED:** Navigate to records using their mental anchors

**EVIDENCE:**
- VA.gov generative research (2022-2025): Appointments, facilities, and practice/condition identified as natural anchors
- Medallia (post-switch): "Terminology & placement confusion" — language doesn't match expectations
- Help desk: "Where do I see labs?" vs. system organized by document type

**USER QUOTES:**
- VA.gov Generative Research: "I remember my last labs were after my cardiology appointment at the DC center. That’s how I look for results."
- Medallia (post-switch): "Why do they call it ‘document type’? I need my blood test from last week’s appointment." 

---
### Insight #4: Veterans want search and filtering but we don't have it

**USER TASK BLOCKED:** Narrow down records by what matters (date, type, condition, provider)

**EVIDENCE:**
- Medallia (Jun-Sept 2025): "Underpowered filters/search" — veterans explicitly ask for type/date filters
- MR Quarterly Metrics: "Search and navigation" top feature request
- Mobile app: Low engagement (3/5 rating) partly due to missing search/filter capabilities
- User feedback: "I just want to see my lab test..." — implies need to filter noise

**USER QUOTES:**
- Medallia (Jun-Sept 2025): "Filter by test type would save me so much time—a long list doesn’t help."  
- Mobile App: "If I can’t filter or search, I end up scrolling forever and still miss things."

---
### Insight #5: Veterans are uncertain about record completeness

**USER TASK BLOCKED:** Trust that all records are present before making decisions

**EVIDENCE:**
- Behavioral: Veterans download/print "just in case" — suggests lack of confidence in retrieval
- MR Quarterly Metrics: Veterans report "missing or incomplete data," frustration exacerbated by information overload
- Medallia: Users report difficulty confirming what's available vs. missing

**USER QUOTES:**
- Medallia: "How do I know this is all my info? Sometimes things seem incomplete."  
- Behavioral (moderated studies): "I always download or print my records, just in case something’s not here."

---


## Recommendations

### Priority: Start with Use Case #1 (Following Up on Recent Care)

**Rationale:**
- **Highest volume:** 3.23M Labs page views, 2.62M detail clicks
- **Highest friction:** 42% of Medallia tasks, sharp rise in complaints
- **Likely feasible:** Core needs (recency and notification) seem technically achievable

**Next Steps:**
1. Engineering feasibility check (what's possible with current data structure)
2. Concept exploration (spotlight cards vs. roll-up vs. badges)
3. Usability Testing of Concepts 

**Timeline:** 
User Research Review Completed February 
Concept Exploration: Mar 2-
User Research Planning:Mar 2-
User Research Testing: Mar - Apr 7th
User Research Synthesis:Apr 8 - Apr 14
---

## Supporting Materials

- [Key Insights Summary](https://www.figma.com/board/VGam7fvRjylCKJlAmXlIvI/UR-Research-Review-1-26?node-id=202-224&t=W0dLVTIBEAcTz0y3-4)
- [Research Gaps and Questions](https://www.figma.com/board/VGam7fvRjylCKJlAmXlIvI/UR-Research-Review-1-26?node-id=196-103&t=W0dLVTIBEAcTz0y3-4)
- [Medallia Top Tasks and Pain Points](https://www.figma.com/board/VGam7fvRjylCKJlAmXlIvI/UR-Research-Review-1-26?node-id=286-193&t=W0dLVTIBEAcTz0y3-4)
- [Data Dog and Monthly Metrics Jan 2026-Feb 2026](https://www.figma.com/board/VGam7fvRjylCKJlAmXlIvI/UR-Research-Review-1-26?node-id=306-839&t=W0dLVTIBEAcTz0y3-4)

---

## Project History

- **Feb 5, 2026:** Initial synthesis shared with stakeholders
- **Feb 12, 2026:** Validated 5 insights with Product/Design leads
- **Feb 20, 2026:** Aligned on Use Case #1 prioritization
- **March 4, 2026:** Research plan finalized

---

## Related Work

- [Top Tasks and Painpoints](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2026-02_Research_Review/Top_Tasks_and_Pain_Points.md)
- [Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2026-02_Research_Review/2026-02_Use_Cases.md)


---

## Questions or Feedback?

Contact: Laura Simpson / Laura.Simpson3@va.org / @laurasimpson-A6
