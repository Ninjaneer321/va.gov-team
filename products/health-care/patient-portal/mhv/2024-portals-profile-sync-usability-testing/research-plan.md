---
# Research Plan Metadata
title: "Research Plan for [Team, Product, Date]"
date: YYYY-MM-DD
last_updated: YYYY-MM-DD
team: "[Team Name]"
product: "[Product Name]"
product_area: "[e.g., authenticated/unauthenticated]"

# Background Context
background:
  problem_statement: "[What problem is your product trying to solve?]"
  product_location: "[Where is this situated on VA.gov?]"
  user_familiarity: "[New product or iteration?]"
  product_brief_url: "[URL]"

# Research Design
methodology: "[e.g., usability testing, semi-structured interviews, card sort]"
research_format: 
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: "[Location name if applicable]"
    point_of_contact: "[Name if applicable]"
    equipment: "[Equipment details if applicable]"
  moderated: true # Options: true, false
  
# Research Goals & Questions
research_goals:
  - goal_1: "[First research goal]"
  - goal_2: "[Second research goal]"
  - goal_3: "[Third research goal]"

research_questions:
  - "[Research question 1]"
  - "[Research question 2]"
  - "[Research question 3]"
  - "[Research question 4]"
  - "[Research question 5]"

hypotheses:
  - "[Hypothesis 1]"
  - "[Hypothesis 2]"
  - "[Hypothesis 3]"

expected_outcomes: "[How will findings advance the product?]"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "[e.g., lean maximum variation]"
  
  primary_criteria:
    - "[Must-have criterion 1]"
    - "[Must-have criterion 2]"
    - "[Must-have criterion 3]"
    
  secondary_criteria:
    - "[Nice-to-have criterion 1]"
    - "[Nice-to-have criterion 2]"
    
  screener_questions:
    - question: "[Screener question text]"
      qualifying_response: "[Expected answer]"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name]"
  research_dates: "YYYY-MM-DD to YYYY-MM-DD"
  research_review_submission: "YYYY-MM-DD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1"
    key_results: 
      - "[Specific KR if applicable]"
  - objective: "Objective 2"
    key_results:
      - "[Specific KR if applicable]"
      
veteran_journey_phases:
  - "[e.g., Getting Out]"
  - "[e.g., Starting Up]"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Link to related past research]"
    
tags:
  - "[product-area]"
  - "[methodology]"
  - "[participant-type]"
  - "[research-phase]"
---

# **Research Plan for Portals, Profile Sync, January 2024**

## **Background**

As My HealtheVet migrates to VA.gov, Veterans need to sync their contact information between the two sites. Veterans may not access their profile information often after their initial set up, so they may not retain familiarity with it. We have built a prototype of the profile sync experience that we will be testing as part of this research study.

 ## **OCTO Objectives**

This research supports the following OCTO objectives:

1. Veterans can manage their health services online.
2. Veterans and their families can find a single, authoritative source of information.
3. Logged-in users have a personalized experience, with relevant and time-saving features.

## **Veteran Journey**

This research fits into these points of a Veteran's Journey:

- Starting up
- Taking care of myself
- Retiring
- Aging

## **Research Goals**

- Ascertain Veterans' understanding of the need for the sync and how the process will affect their contact information.
- Identify any usability issues Veterans may experience with syncing their email and phone numbers.

## **Outcome**

The results of this study will help us determine if our designs provide the best user experience for Veterans to sync their profiles and help to identify any pain points. This will inform later iterations of the design.

## **Research questions**

1. Can Veterans select, edit, add, remove, and verify their contact information?
2. Do Veterans understand the process of syncing their MHV and VA contact information?
  1. Do they understand why this step is necessary?
  

## **Hypothesis**

_Hypothesis 1:_ Most Veterans will successfully connect their MHV and VA contact information without assistance.

_Hypothesis 2:_ Many Veterans will struggle to understand that they will only have one set of contact information after the sync.


## **Methodology**

We will conduct moderated usability testing interviews in which we will ask users to navigate the prototype, observe their behavior, and ask follow-up prompts as needed.

## **Location**

Data collection will be remote. We will use Zoom.

## **Research materials**

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/patient-portal/mhv/2024-portals-profile-sync-usability-testing/conversation-guide.md)
- [Link to desktop prototype](https://xd.adobe.com/view/bb4e69af-0a9e-438a-a29a-27144a60bad4-ee1d/?fullscreen&hints=off)
- [Link to mobile prototype](https://xd.adobe.com/view/3f0be2b9-a4f6-4626-a4b4-e6de216d6525-6a58/?fullscreen&hints=off)

## **Recruitment**

### **Recruitment approach**

We will partner with Perigean to recruit Veterans.

###  **Recruitment criteria**

We will schedule a total of 24 Veterans for an expected completion rate of 18 usability tests.

For this study, we are explicitly not recruiting assistive technology users due to the limitations of our prototype.

**Primary criteria (must-haves)**

1. (24) Veterans
2. Age distribution:
  - (5) 75+
  - (8) 65 – 74
  - (4) 55 – 64
  - (5) 35 – 54
  - (2) 18 – 34
3. Education distribution:
  - (7) High School graduate or equivalent or less
  - (6) Some college, no degree
  - (3) Associates degree (occupational or academic)
  - (5) Bachelor's degree
  - (3) Masters degree or higher
4. Demographic distribution:
  - (1) American Indian or Alaska Native
  - (1) Asian
  - (4) Black or African American
  - (3) Hispanic, Latino, or Spanish origin
  - (15) White or Caucasian
5. (6) Rural, (18) Urban
6. (12) mobile users, (12) desktop/laptop/tablet
7. (12) frequent MHV users, (6) infrequent MHV users, (6) non MHV user (see screener question)
8. (4) with Cognitive Disability (see screener question)

**Screening questions for recruitment**

1. How often have you used My HealtheVet in the past 6 months?

    a) not at all - [_non MHV user]_

    b) 1 - 4 times. - [_infrequent MHV user]_

    c) 5 - 10 times - _[frequent MHV user]_

    d) more than 10 times - _[frequent MHV user]_

2. Have you been diagnosed with (formally or informally) a cognitive disability? This includes any intellectual disability, ADHD, Autism Spectrum Disorder, severe, persistent mental illness, brain injury, stroke, Alzheimer's disease and other dementias, or others not listed.

   a) _Yes (Recruit 4 – proceed to question 3)_

   b) _No (Recruit 20)_

3. Based on your response to the previous question, how would you rate the severity of your cognitive disability? (Recruit all answers)

    a) Mild - (Symptoms have a limited effect on daily life)
  
    b) Moderate – (Symptoms make daily life much more difficult than my peers.)

    c) Severe - (Symptoms make daily life extremely difficult and I require assistance.)

    d) I prefer not to answer

    e) Not applicable

4. What type of device will you be using to connect to Zoom?

    a) Desktop/Laptop?
   
    b) Smartphone: Android or iPhone?
   
    c) Tablet: Android or iPad?

6. Have you shared your screen on Zoom using this device before?

## **Timeline**

### **Prepare**

- Pilot participant email: We will handle on our own, thank you
- Date and time of pilot session: TBD – we will handle on our own, thank you

### **Research sessions**

- Planned dates of research: January 11, 2023 – January 23, 2023

### **Length of sessions**

- Session length: 60 minutes
- Buffer time between sessions: 30 minutes
- Maximum Sessions per day: 4

### **Availability**

| Day | Date | Times (Eastern time zone) |
| --- | --- | --- |
| Friday | January 12 | 9:00 am – 8:00 pm |
| Tuesday | January 16 | 9:00 am – 8:00 pm |
| Wednesday | January 17 | 9:00 am – 8:00 pm |
| Thursday | January 18 | 9:00 am – 8:00 pm |
| Friday | January 19 | 9:00 am – 5:00 pm |

Additional days if needed

| Day | Date | Times (Eastern time zone) |
| --- | --- | --- |
| Monday | January 22 | 9:00 am – 8:00 pm |
| Tuesday | January 23 | 9:00 am – 8:00 pm |

## **Team Roles**

- Moderator: Ade Ajayi, Anne Costello Kennedy 
- Research guide writing and task development: Anne Costello Kennedy
- Participant recruiting & screening: Perigean
- Project point of contact: Anne Costello Kennedy 
- Participant(s) for pilot test: TBD
- Accessibility specialist: N/A
- Note-takers: Ben Caldwell 
- Observers: Joel Calumpong 
