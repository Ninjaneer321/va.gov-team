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

# Profile enhanced military information MVP - Stakeholder Interview research plan
## Background
Legislation has been passed that requires us to increase Veteran’s access to their Individual Longitudinal Exposure Record (ILER). As VA leadership considered how to comply with the law, they identified an opportunity to improve the Veteran experience of applying for benefits by surfacing key data points about their military service.
In this MVP, our goals are to:
* Provide Veterans with access to a PDF of their ILER, so they can get this PDF anytime they need it.
* Make it easier for Veterans to apply for VA benefits by surfacing military service information that is requested in benefit application forms.
## Research Goals
A lot of work has been completed prior to our team becoming involved. The primary goal of this research is to understand that work and the decisions behind it.
### Research Questions
1. Stakeholders have a hypothesis that surfacing 8 data points will improve the Veteran experience of applying for benefits. What is driving this hypothesis, and what do we already know about these data points?
2. What can stakeholders share about the API that can generate a PDF/text version of a Veteran’s ILER?
3. What was the intention of, and reaction to, the ILER prototype the BAH team created?
4. What led to the decision that this military information belongs in the VA.gov profile?
5. Are there any other teams or stakeholders we should loop into this work?
## Research Method
This will be a remote interview conducted over Microsoft Teams

## Participants
- Facilitator: Liz Lantz
- Observers: [Authenticated Experience profile team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#team)
- Stakeholders to interview
  - Melissa Rebstock
  - Angela Allen (VADIR SME)
  - Possibly others depending on the outcome of the conversation with Melissa
