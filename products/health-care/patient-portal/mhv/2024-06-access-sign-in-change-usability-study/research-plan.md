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

# **Research Plan for MHV Access, Sign in Changes, June 2024**

## **Background**

Protecting Veterans’ personal information is paramount, so the VA is mandating sign in changes to take affect January of 2025 in which access to My HealtheVet will be limited to ID.me or Login.gov. To prepare for that, Veterans are being encouraged to retire their My HealtheVet user IDs and passwords.

### **OCTO Objectives**

This research supports the following OCTO objectives:

1. Veterans can manage their health services online.
2. Veterans and their families can find a single, authoritative source of information.
3. Logged-in users have a personalized experience, with relevant and time-saving features.

### **Veteran Journey**

This research fits into these points of a Veteran's Journey:

- Starting up
- Taking care of myself
- Retiring
- Aging

## **Research Goals**

- Ascertain Veterans’ understanding of the content that communicates the sign in changes.
- Identify any usability issues Veterans may experience with sign in messaging and interactions.

### **Outcome**

The results of this study will help us determine if our designs provide the best user experience for Veterans to make changes to their sign in options and help to identify any pain points. This will inform later iterations of the design.

## **Research Questions**

1. Do Veterans understand the process and consequence of removing their MHV user ID and password?
2. Do Veterans understand that they must have Login.gov or ID.me account before retiring their MHV user ID and password?
3. Do Veterans know what to do if they blocked their Login.gov or ID.me accounts?  

## **Hypothesis**

_Hypothesis 1:_ Some Veterans will understand the process and consequence of retiring their MHV user ID and password.

_Hypothesis 2:_ Many Veterans will struggle to follow the instructions for retiring their MHV user ID and password.

_Hypothesis 3:_ Most participants will understand how to unblock their accounts.

## **Methodology**

We will conduct moderated usability testing interviews in which we will ask users to navigate the prototype, observe their behavior, and ask follow-up prompts as needed.

### **Location**

Data collection will be remote. We will use Zoom.

### **Research materials**

[Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/patient-portal/mhv/2024-06-access-sign-in-change-usability-study/conversation-guide.md)
  
[Link to desktop prototype](https://xd.adobe.com/view/ad9d2a77-35b3-4431-a4a7-9f7193a19237-f8ce/?fullscreen&hints=off)

[Link to mobile prototype](https://xd.adobe.com/view/bd995580-93ca-408f-a0ae-485f37f44b63-e8ca/?fullscreen&hints=off)

## **Recruitment**

### **Recruitment approach**

We will partner with Perigean to recruit Veterans.

### **Recruitment criteria**

We will schedule a total of 18 Veterans for an expected completion rate of 15 usability tests.

For this study, we are explicitly not recruiting assistive technology users due to the limitations of our prototype.

### **Primary criteria (must-haves)**

1. (18) Veterans
2. Age distribution:
    - (4) 75+
    - (6) 65 – 74
    - (3) 55 – 64
    - (4) 35 – 54
    - (1) 18 – 34
3. Education distribution:
    - (6) High School graduate or equivalent or less
    - (5) Some college, no degree
    - (2) Associates degree (occupational or academic)
    - (3) Bachelor's degree
    - (2) Masters degree or higher
4. Demographic distribution:
    - (0) American Indian or Alaska Native
    - (1) Asian
    - (3) Black or African American
    - (2) Hispanic, Latino, or Spanish origin
    - (12) White or Caucasian
5. (5) Rural, (13) Urban
6. (9) mobile users, (9) desktop/laptop (no tablets)
7. (6) very frequent MHV users,(3) frequent MHV users,(6) infrequent MHV users,(3) non MHV users (see screener question)
8. (4) with Cognitive Disability (see screener question)
9. No VA employees (current or within past 5 years)

### **Screening questions for recruitment**

1. How often have you used My HealtheVet in the past 6 months?

    a) not at all - \[_non MHV user\]_ _(recruit 3)_

    b) 1 - 4 times. - \[_infrequent MHV user\]_ _(recruit 6)_

    c) 5 - 10 times - _\[frequent MHV user\]_ _(recruit 3)_

    d) more than 10 times - _\[very frequent MHV user\]_ _(recruit 6)_

2. Have you been diagnosed with (formally or informally) a cognitive disability? This includes any intellectual disability, ADHD, Autism Spectrum Disorder, severe, persistent mental illness, brain injury, stroke, Alzheimer's disease and other dementias, or others not listed.

    a) Yes _(recruit 4)_
   
    b) No _(recruit 14)_

1. Based on your response to the previous question, how would you rate the severity of your cognitive disability? _(Recruit all answers)_  
    a) Mild - (Symptoms have a limited effect on daily life)
   
    b) Moderate – (Symptoms make daily life much more difficult than my peers.)
   
    c) Severe - (Symptoms make daily life extremely difficult and I require assistance.)
    
    d) I prefer not to answer
   
    e) Not applicable
   
7. What type of device will you be using to connect to Zoom?

    a) Desktop/Laptop? _(recruit 9)_

    b) Smartphone: Android or iPhone? _(recruit 9)_

    c) Tablet: Android or iPad? _(do not recruit)_

1. Have you shared your screen on Zoom using this device before?

## **Timeline**

### **Prepare**

- Pilot participant email: We will handle on our own, thank you
- Date and time of pilot session: TBD – we will handle on our own, thank you

### **Research sessions**

- Planned dates of research: June 18 – June 28, 2024

### **Length of sessions**

- Session length: 60 minutes
- Buffer time between sessions: 30 minutes
- Maximum Sessions per day: 4

### **Availability**

| Day | Date | Times (Eastern time zone) |
| --- | --- | --- |
| Tuesday | June 18 | 10:00 am – 6:00 pm |
| Thursday | June 20 | 10:00 am – 6:00 pm |
| Friday | June 21 | 10:00 am – 6:00 pm |
| Tuesday | June 25 | 10:00 am – 6:00 pm |
| Friday | June 28 | 12:00 pm – 5:00 pm |

### **Team Roles**

- Moderator: Melissa Ashton, Anne Costello Kennedy 
- Research guide writing and task development: Anne Costello Kennedy
- Participant recruiting & screening: Perigean
- Project point of contact: Anne Costello Kennedy 
- Participant(s) for pilot test: TBD
- Accessibility specialist: N/A
- Note-takers: Ben Caldwell
- Observers: Joel Calumpong 
