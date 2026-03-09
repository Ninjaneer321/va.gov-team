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

# Results Page 2.0: UAT Plan

# Background Context
background:
  problem_statement: "Results Page 2.0 usability testing revealed usability issues and areas for improvement, which we have implemented into the product in staging. All of the implemented changes are validated by research and have undergone QA. We are conducting UAT to ensure that the redesigned tool is working as expected before launch. This is our final development stage before our TAP pilot begins with DoD."
  product_location: "Discover Your Benefits (staging)"
  user_familiarity: "Iteration - Improvements to Discover Your Benefits"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2022-audit"

# Research Design
methodology: "User Acceptance Testing (UAT) with usability validation"
research_format: Internal usability testing
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Confirm that all functionality works as expected with updates (with exception of known workaround for filter collapse on mobile in Safari)"
  - goal_2: "Verify that all sorting and filtering work as expected, with special attention to mobile"
  - goal_3: "Confirm that redesigned content works as expected with no usability issues"

research_questions:
  - "Does the functionality work as expected?"
 - “Are there significant unknown usability issues?”

hypotheses:
  - "Veterans will not encounter any unknown bugs on Discover Your Benefits"
  - "Veterans will be able to easily navigate sort, filter, and benefit content features on the Results page."

expected_outcomes: "Based on the outcome of this research study, we will either release the updates to production and/or update our design to correct any significant usability hurdles people encounter."

# Recruitment & Participants
recruitment:
    approach: "Internal recruitment"
  
# Timeline & Sessions
timeline:
  research_dates: "3/9/2026-3/11/2026"
   
session_details:
  duration_minutes: 45
  buffer_minutes: 30
  max_sessions_per_day: 4
  
