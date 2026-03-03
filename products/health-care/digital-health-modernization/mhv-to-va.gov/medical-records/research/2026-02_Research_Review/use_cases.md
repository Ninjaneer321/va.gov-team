# Medical Records Findability Research Synthesis
**Research Period:** 2022-2025 (sources analyzed Feb 2026)  https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2026-02_Research_Review
**Researcher:** Laura Simpson
**Status:** Complete - Recommendations made

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
## Why Case #1?
**Highest Impact Pages**
- 3.25M Landing page views
- 3.23M Labs page views
**Addresses biggest pain points**
- 42% of Medallia tasks are trying to view/download imaging
- After platform switchover: 90% rise in 'can't find' complaints 6 months after platform switch
**Solutions can be used to build the other use cases**
Solving for findability will set a information architecture foundation for tackling the other use cases.
---
