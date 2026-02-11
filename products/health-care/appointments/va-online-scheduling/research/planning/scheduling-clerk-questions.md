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

General Process Questions

-   What's the process you go through when someone requests an appointment?
-   What information do you see from the VAOS request? Of that information, what do you use? What is helpful?
-   What else would be helpful to ask veterans but isn't in our prototypes?
-   If you could change anything about what VAOS tells you about requests, what would it be?

Provider-based scheduling

-   We've seen in our testing that veterans think PC doctors / relationship doctors would be in the provider flow we've prototypes. Is it reasonable based on facility-level business rules (must have been seen within last x months) for us to say that we could show all available providers?
-   Could we surface community care providers?
-   What happens when someone requests an appointment with a provider via Secure Messaging? Where does that request go and how do you fulfill it?

Express Care

-   Tell us everything you can about Express Care :)
-   Is EC always a video / telehealth visit?
-   Is EC always with a member of your PACT?
-   Is there a difference between an Express Care appointment and a telehealth appointment with your PACT for Primary Care?
-   Is it always same-day? How far in advance can you book & cancel
-   How do you fulfill an Express Care appointment request?
-   Is it true that you need a PACT in order to book an EC appointment?
-   Are there any other eligibility requirements for EC? How do you ensure someone is eligible?
-   Are there Express Care primary / secondary stop codes?

Stop Codes

-   How do you use secondary stop codes?
-   Do secondary stop codes matter when scheduling an appointment?
-   Should we be showing veterans primary stop code buckets or secondary stop code-based care types?

Clinics

-   What specific inputs do you get from veterans selecting a clinic in direct scheduling?
-   What are the params that are relevant when setting up a clinic?
-   What data points are relevant when deciding which clinic to book someone in?

Direct Scheduling

-   Does the reason for coming in / care type make a difference in the allotted duration of an appointment?
-   What happens when a veteran books herself into the wrong clinic?
-   What is your workflow when someone direct-schedules? Is there follow-up / clean-up work that you need to do to ensure the appointment was booked directly?
-   How often are direct-scheduled appointments 'good to go'?
-   Is 'purpose of visit' helpful in this flow (Routine, new issue, etc.)?

Appointment Request

-   Are veterans guaranteed to get a date / time around their requests?
-   What is the TaT for scheduling an appointment
-   What rules do you adhere to when deciding times / dates for an appointment?
-   What is your process of back-and-forth with veterans?
-   Do you use the AM vs PM preferences when calling veterans back?
-   What is the best way to get in touch with veterans?
-   Is 'purpose of visit' helpful in this flow (Routine, new issue, etc.)?
-   Do you use the 'other purpose' field for anything when a veteran selects 'other' for the 'request purpose' fileld?

Telehealth / VA Video
-   Is there a way for us to determine which clinics support video appointments?
-   What do you do when someone requests a video visit?

Canceling

-   What happens when you get a request to cancel an appointment?
-   What are some of the rules around cancellation? E.g., time ahead of appointment, etc.

Community Care

-   Do you schedule appointments for community care? How does that process work?
-   What are the Community Care preferences screens used for; are they useful to you?
-   Who schedules Community Care appointments?
