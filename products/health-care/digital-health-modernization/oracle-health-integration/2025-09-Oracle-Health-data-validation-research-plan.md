---
# Research Plan Metadata
title: "Research Plan for MHV Monthly Validation Test - September 2025"
date: 2025-09-15
last_updated: 2025-09-15
team: "Digital Health Modernization - Oracle Health Integration"
product: "My HealtheVet on VA.gov and VA Health and Benefits Mobile App"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Ensure that the latest features deployed to the My HealtheVet (MHV on VA.gov) and VA Health and Benefits (VAHB) platforms are functioning as intended in a real-world production environment with Oracle Health data."
  product_location: "My HealtheVet on VA.gov and VA Health & Benefits mobile app - production environment"
  user_familiarity: "Iteration - Monthly validation testing of newly deployed features"
  product_brief_url: "N/A"

# Research Design
methodology: "Moderated User Acceptance Testing (UAT)"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - "Validate that the latest deployed features on MHV and VAHB platforms perform correctly in production and meet basic acceptance criteria"

research_questions:
  - "Do the deployed features function as intended in the production environment?"
  - "Are there any functional issues, display errors, or unexpected behaviors that could impact a Veteran's ability to use the feature or could result in a patient safety issue?"
  - "Are any discrepancies observed between expected and actual behavior or between data presented in the feature vs. the clinician-facing health record?"

hypotheses:
  - "We believe the newly released features will perform reliably in production and meet acceptance criteria for broader rollout"

expected_outcomes: "Any issues identified during the test sessions will be logged and referred to the engineering team for triage and resolution. Findings will inform whether the tested features are ready for broad release to all Veterans."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Diverse sample of Veterans from Oracle Health converted VAMCs"
  
  primary_criteria:
    - "Veterans must have received care from a VAMC that has converted to Oracle Health"
    - "The Veteran must have an active ID.me or login.gov account"
    - "Must include male and female participants"
    - "Must exclude assistive technology users"
    - "Veterans enrolled in VA healthcare"
    - "Received care in past 2 years from specified Oracle Health sites"
    
  secondary_criteria:
    - "Have viewed lab or test results through MHV on VA.gov or VAHB app"
    - "Have sent/received messages with clinicians through My VA Health portal"
    - "Various types of labs, tests, procedures, and appointments in their health record"
    
  screener_questions:
    - question: "Are you a Veteran enrolled in VA healthcare?"
      qualifying_response: "Yes"
    - question: "In the past 2 years, have you received care from a VA provider at an Oracle Health converted VAMC?"
      qualifying_response: "Yes"
    - question: "Do you currently have an active VA.gov account using Login.gov or ID.me that you are able to access?"
      qualifying_response: "Yes"
    - question: "Are you comfortable providing your name, date of birth, email and sharing your screen?"
      qualifying_response: "Yes"
      
participants:
  veterans: 30
  caregivers: 0
  dependents: 0
  total_recruited: 30
  completed_sessions_goal: 15
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-09-12"
  pilot_participant: "TBD"
  research_dates: "2025-09-15 to 2025-10-10"
  research_review_submission: "2025-09-09"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 5
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "VA's digital experiences are the easiest and most efficient way to access VA healthcare and benefits"
    key_results: []
      
veteran_journey_phases:
  - "Taking Care of Myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Previous monthly validation tests"
    
tags:
  - "oracle-health"
  - "user-acceptance-testing"
  - "veterans"
  - "moderated"
  - "mhv-on-vagov"
  - "vahb-mobile-app"
  - "monthly-validation"
---

# Research Plan for MHV Monthly Validation Test – September 2025

## Background
The purpose of this monthly validation test is to ensure that the latest features deployed to the My HealtheVet (MHV on VA.gov) and VA Health and Benefits (VAHB) platforms are functioning as intended in a real-world production environment. This testing is conducted after internal QA and lower environment testing and focuses on assessing whether newly released or updated features perform reliably and as expected.

Unlike usability testing, this format resembles user acceptance testing (UAT), where the moderator guides participants through tasks to validate functional correctness. Each month’s session will evaluate a subset of newly deployed features selected based on feature readiness and availability at the time of testing. Feature selection will be finalized at the moderator’s discretion.

## OCTO-DE Priorities
VA’s digital experiences are the easiest and most efficient way to access VA healthcare and benefits.

## Veteran Journey
Taking care of myself – Maintaining my health

## Research Goals

### Goals
Validate that the latest deployed features on MHV and VAHB platforms perform correctly in production and meet basic acceptance criteria.

## Outcome
Any issues identified during the test sessions will be logged and referred to the engineering team for triage and resolution. Findings will inform whether the tested features are ready for broad release to all Veterans.

## Research Questions
-	Do the deployed features function as intended in the production environment?
-	Are there any functional issues, display errors, or unexpected behaviors that could impact a Veteran’s ability to use the feature or could result in a patient safety issue?
-	Are any discrepancies observed between expected and actual behavior or between data presented in the feature vs. the clinician-facing health record?

## Hypotheses
We believe the newly released features will perform reliably in production and meet acceptance criteria for broader rollout.

## Methodology
Moderated validation sessions will be conducted remotely with Veterans using production-deployed features set behind feature flags. Participants will perform predefined tasks related to available features, guided by a moderator. Sessions will focus on verifying feature functionality rather than gathering usability insights. The moderator will document observations and outcomes.

If necessary, clinical or technical staff may observe or participate in sessions to help validate feature behavior or data consistency, depending on the nature of the features being tested.

## Location
- [X] Remote
- [ ] In-person

## Research Materials

For moderated interviews:
Conversation guide will be attached to submission

## Recruitment

### Recruitment Approach
We will recruit 30 Veterans who meet the criteria outlined below. Participants will be selected to reflect diversity in device type, demographics, and healthcare usage patterns.

### Recruitment Criteria
List the total number and type (Veterans, caregivers, etc.) of participants for this study:
- Veterans: [25-30]
- Caregivers: [0]
- Dependents: [0]
- Ideal Completed Total: [10–15]

### Criteria:
Veterans must have received care from a VAMC that has converted to Oracle Health. This list includes:
- Washington
- Mann-Grandstaff VA Medical Center in Spokane, Washington
- Jonathan M. Wainwright Memorial VA Medical Center in Walla Walla, Washington
- VA Central Ohio Health Care System in Columbus, Ohio
- Roseburg VA Health Care System in Roseburg, Oregon
- VA Southern Oregon Rehabilitation Center and Clinics in White City, Oregon
- Captain James A. Lovell Federal Health Care Center in North Chicago, Illinois

**Additional Necessary Criteria**
- The Veteran must have an active ID.me or login.gov account that they are able to easily access
- The sample must include male and female participants
- The sample must exclude assistive technology users

### Screening Questions:
1. Are you a Veteran enrolled in VA healthcare?
   - Yes
   - No
→ If No, disqualify from study
 
2. In the past 2 years, have you received care from a VA provider (not community care) at one of the following VA Medical Centers (Mann-Grandstaff VA Medical Center, Jonathan M. Wainwright Memorial VA Medical Center, VA Central Ohio Health Care System, Roseburg VA Health Care System, VA Southern Oregon Rehabilitation Center and Clinics, Captain James A. Lovell Federal Health Care Center)?
   - Yes
   - No
→ If No, disqualify from study

3. Do you currently have an active VA.gov account using Login.gov or ID.me that you are able to access?
   - Yes
   - No
→ If No, disqualify from study
 
4. Have you viewed lab or test results through My HealtheVet on VA.gov or VA Health & Benefits app?
   - Yes
   - No

5. As part of this study, we will ask you to share some basic information (your name, date of birth, and the email you use to log in to VA.gov). We’ll also ask you to share your screen on your mobile device or computer while you navigate your health record. Are you comfortable providing this information and sharing your screen?
   - Yes
   - No
→ If No, disqualify from study

6. Please indicate which of the following labs, tests, or procedures may exist in your health record (select all that apply):
   - Chest X-ray
   - Colonoscopy
   - COVID-19 PCR or Antigen Test
   - Mammogram
   - Pap Smear
   - Surgery
   - Biopsy
   - Evaluation for a Heart Issue
   - None of the above

7. Please indicate which of the following appointment types you have had in the past (select all that apply):
   - Video at a VA facility
   - Video at home
   - Video at ATLAS locations
   - Video on GFE
   - Claim exam
   - Canceled by Veteran
   - Canceled by staff
   - None of the above

8. Have you sent or received messages with clinicians or groups of clinicians through the My VA Health portal?
   - Yes
   - No

## Timeline

### Kick-off Meeting
- Friday afternoon, 9/12, or
- Anytime Monday, 9/15


### Research Sessions
Planned dates of research: Weeks of September 15th through October 10th

Session length: 1 hour

Buffer time between sessions: 5 min

Maximum sessions per day: 4 sessions

### Availability:

**Week of Sep 15–19, 2025:**
 
- Wed Sep 17, 08:00 AM to 11:00 AM
- Wed Sep 17, 12:00 PM to 04:00 PM
- Thu Sep 18, 11:00 AM to 04:00 PM
- Fri Sep 19, 08:00 AM to 12:00 PM

**Week of Sep 22–26, 2025:**
 
- Mon Sep 22, 11:00 AM to 04:00 PM
- Tue Sep 23, 08:00 AM to 12:00 PM
- Tue Sep 23, 01:00 PM to 04:00 PM
- Wed Sep 24, 08:00 AM to 01:00 PM
- Wed Sep 24, 02:00 PM to 04:00 PM
- Thu Sep 25, 11:00 AM to 04:00 PM
- Fri Sep 26, 08:00 AM to 12:00 PM
- Fri Sep 26, 01:00 PM to 04:00 PM

**Week of Sep 29–Oct 3, 2025:**
 
- Mon Sep 29, 11:00 AM to 04:00 PM
- Tue Sep 30, 08:00 AM to 12:00 PM
- Tue Sep 30, 01:00 PM to 04:00 PM
- Wed Oct 1, 11:00 AM to 04:00 PM
- Thu Oct 2, 08:00 AM to 12:00 PM
- Thu Oct 2, 01:00 PM to 04:00 PM
- Fri Oct 3, 08:00 AM to 11:00 AM
- Fri Oct 3, 01:00 PM to 04:00 PM

**Week of Oct 6–10, 2025:**
 
- Mon Oct 6, 08:00 AM to 12:00 PM
- Mon Oct 6, 01:00 PM to 04:00 PM
- Tue Oct 7, 11:00 AM to 04:00 PM
- Wed Oct 8, 08:00 AM to 12:00 PM
- Wed Oct 8, 01:00 PM to 04:00 PM
- Thu Oct 9, 08:00 AM to 12:00 PM
- Thu Oct 9, 01:00 PM to 04:00 PM
- Fri Oct 10, 08:00 AM to 12:00 PM
- Fri Oct 10, 01:00 PM to 04:00 PM

### Team Roles
**Moderators:** Matt Sternberg, Victoria Borland

**Research guide writing and task development:** Matt Sternberg

**Participant recruiting & screening:** Perigean

**Project point of contact:** Matt Sternberg, Robyn Singleton

**Accessibility specialist (if needed):** None

**Note-takers:** TBD

**Observers:** To be confirmed via signup sheet owned by Moderator, no more than 2 observers per session 

**Approvals**
Reviewed by [Robyn Singleton] on [09-09-2025]

Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]

<img width="468" height="633" alt="image" src="https://github.com/user-attachments/assets/a4d24245-55b0-4448-a111-a9296f9fd593" />
