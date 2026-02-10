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

# Recent location Analytics Research Plan - For VAOS, Appointments FE, 05/2024

## Background
VA Online Scheduling allows Veterans who are logged into VA.gov to schedule and manage their appointments.

On [DATE TBD] the VAOS team released a feature for users to search faciities by recent locations. The "Sort by" field will default to "recent locations" in order to surface relevant facilities for Veterans and limit the amount of searching through irrelevant options.  

## Research Goals	
Track whether the default "Sort by" field is changed from "Recent locations" to a different option by users. 

### Outcome
We'll use this data to: 
- Assess if users are clicking on one of facilities surfaced with the default recent locations or selecting a differnt way to sort the list. 


### Research questions
- Are users clicking on one of facilities surfaced with the default set at recent locations? OR are they selecting a differnt way to sort the list?
- How long are users spending on the page? (compare this with time spent on page prior to the change)
- Are users leaving comments about the facility selection page?
    - Is the feedback generally positive or negative?

### Hypothesis
- Comments about not being able to find their facility will decrease. 
- Comments about showing locations they have not used in ages and are irrelevant to the Veteran will decrease. 
- The use of the "sort by" drop down will decrease because Veterans will select one of the facilities in list with the defaulted "recent locations."

## Methodology	
In Data Dog, track:
 - The amount of time on page before and after implementing the change.
 - If the "Sort by Recent locations" is being clicked on to change the default from "Sort by Recent locations" to something else.
 - If the user does change the drop down from "recent locations", what are they changing it to?
In Medallia, we will track:
- Feedback from the two months before and after the feature is released to see if any comments surface around the changes.

## Timeline
The "Sort by Recent locations" feature was released to prod on [Date]. We'll track usage for one month after that.
