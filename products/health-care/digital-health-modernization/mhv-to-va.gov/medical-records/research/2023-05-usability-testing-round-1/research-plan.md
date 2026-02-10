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

# **Research Plan for MHV on VA.gov, Medical Records, May 2023**

## **Background**

Our project is part of the Digital Health Modernization strategy, which aims to create a centralized place for Veterans to access their health information. As part of this effort, My HealtheVet (MHV) will be moved to VA.gov. We have built a prototype of the Medical Records in MHV on VA.gov that we will be testing as part of this research study.

You can read more about our Digital Health Modernization strategy [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/product).

## **OCTO Objectives**

This research supports the following OCTO objectives:

1. Veterans can manage their health services online
2. Veterans and their families can find a single, authoritative source of information
3. Logged-in users have a personalized experience, with relevant and time-saving features

## **Veteran Journey**

This research fits into these points of a Veteran's Journey:

- Starting up
- Taking care of myself
- Retiring
- Aging

## **Research Goals**

1. Understand if Veterans can locate their medical records.
2. Identify any usability issues Veterans may experience with accessing different parts of their medical records.
3. Identify what information is helpful to Veterans in finding different parts of their medical records.
4. Evaluate the usability of the print and download functions.

## **Outcome**

The results of this study will help us determine if our designs provide the best user experience for Veterans to access their medical records and help to identify any pain points. This will inform later iterations of the design.

## **Research questions**
1) Can Veterans find the information they need to manage their health related to:
   - Labs and test results
   - Care summaries and notes
   - Allergies
   - Vaccines
   - Vitals
   - Health conditions
3) Do Veterans know how to access information within the tool that will help them understand their medical records?
4) Do Veterans know how to print/download both an individual record or list as well as their entire medical record?

## **Hypotheses**

_Hypothesis 1:_ Veterans will be able to find most of the information they need to manage their health.

_Hypothesis 2:_ Veterans will understand how to print or download their medical records.

_Hypothesis 3:_ Some of the H1s will be a barrier to some Veterans' finding their medical records.

_Hypothesis 4:_ Some of the medical terminology and acronyms will be a barrier to some Veterans' understanding and/or interpreting their medical records.

## **Methodology**

We will conduct moderated usability testing interviews in which we will ask users to navigate the prototype, observe their behavior, and ask follow-up prompts as needed.

**Location**

Data collection will be remote. We will use Zoom.

. **Research materials**

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2023-04-usability-testing-round-1/conversation-guide.md)
- [Link to mobile prototype](https://www.sketch.com/s/f6118ebb-966d-4f83-afba-f9e987b65eac/prototype/a/A4F3BED9-A319-442F-9A8C-7105FB7E01AB)
- [Link to desktop prototype](https://www.sketch.com/s/f6118ebb-966d-4f83-afba-f9e987b65eac/prototype/a/E9F3F0B1-5C09-4E1D-8659-4822D08164CE)

## **Recruitment**

**Recruitment approach**

We will partner with Perigean to recruit Veterans.

**Recruitment criteria**

We will schedule a total of 24 Veterans for an expected completion rate of 18 usability tests.

For this study, we are explicitly not recruiting assistive technology users due to the limitations of our prototype. In one or two months, when the front end environment is available, we will conduct AT specific usability tests.

**Primary criteria (must-haves)**

1. (18) Veterans, (6) Veteran's caregivers
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
4. (12) frequent MHV user, (12) never used MHV (see screener question)
5. (12) mobile users, (12) desktop/laptop/tablet

**Secondary criteria (nice-to-haves)**

1. Demographic distribution:
    - (1) American Indian or Alaska Native
    - (1) Asian
    - (4) Black or African American
    - (3) Hispanic, Latino, or Spanish origin
    - (15) White or Caucasian

**Screening questions for recruitment**

1) How often have you used My HealtheVet in the past 3 months? _Must choose "c" or "d" to be considered a frequent MHV user._

     a) not at all

     b) 1 - 4 times

     c) 5 - 10 times

     d) more than 10 times
3. What type of device will you be using to connect to Zoom?

- Desktop/Laptop?
- Smartphone: Android or iPhone?
- Tablet: Android or iPad?

_Please provide response on roster._

4. Have you shared your screen on Zoom using this device before?

_Please provide response on roster._

## **Timeline**

**Prepare**

- Pilot participant email: We will handle on our own, thank you
- Date and time of pilot session: TBD – we will handle on our own, thank you

**Research sessions**

- Planned dates of research: May 8 - June 1, 2023

**Length of sessions**

- Session length: 60 minutes
- Buffer time between sessions: 30 minutes
- Maximum Sessions per day: 4

## **Availability**

Team Availability | Time Slots (ET)
------------------|--------------
May 8, 2023       | 5:30 - 8:00 pm
May 9, 2023       | 8:00 am - 9:00 am; 10:00 - 11:00 am; 1:00 - 8:00 pm
May 11, 2023      | 8:00 am - 9:00 am; 10:00 - 12:30 pm; 1:00 - 8:00 pm
May 15, 2023      | 10:00 - 11:00 am; 11:30 - 4:00 pm
May 16, 2023      | 8:00 am - 9:00 am; 10:00 - 11:00 am; 1:00 - 8:00 pm
May 18, 2023      | 8:00 am - 9:00 am; 10:00 - 12:30 pm; 1:00 - 8:00 pm
May 30, 2023      | 8:00 am - 9:00 am; 10:00 - 11:00 am; 1:00 - 4:00 pm
Jun 1, 2023       | 8:00 am - 9:00 am; 10:00 - 12:30 pm; 1:00 - 8:00 pm

## **Team Roles**

- Moderator: Anne Costello 
- Research guide writing and task development: Anne Costello
- Participant recruiting & screening: Perigean
- Project point of contact: Anne Costello
- Participant(s) for pilot test: JB Walters,TBD
- Accessibility specialist:N/A
- Note-takers: Lexi Wunder 
- Observers: Coulton Bunney, Robyn Singleton 
