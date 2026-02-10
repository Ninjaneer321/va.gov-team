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

﻿
# Research Plan

## Research Goals
- Evaluate the usability of the new self-service API key management flow.
- Identify any points of confusion or friction in the three-step key generation process.
- Validate whether the "one thing per page" pattern supports clear decision-making.
- Understand users’ mental models around key naming, environment selection, and revocation.

## Research Questions
- Do users understand the purpose of API keys and the implications of managing them?
- Can users confidently complete the steps to generate a key?
- Does the environment suffix behavior in the key naming step make sense to users?
- Do users understand that they will only see the full API key once, and that it won’t be accessible again after they leave the page?
- Do users understand what happens after a key is generated, and how to manage inactive keys?
- Is the interface accessible and aligned with user expectations for security-sensitive workflows?

## Participants
3 - 5 service team members who currently use or are responsible for API integrations (mix of technical and non-technical roles)

### Ideally include:

- One technical contact (or engineer)
- One business contact
- One user who rotates API keys infrequently

## Methodology

- Remote moderated usability testing
- 30-minute sessions via Zoom
- Participants will interact with a clickable Figma prototype
- Researcher will ask open-ended questions and prompt task completion
- Sessions will be recorded (with consent) for analysis


## Prototype Tasks

### Generate an API Key

- Step 1: Select an environment
- Step 2: Name the key (suffix behavior will be observed)
- Step 3: Review choices and confirm generation

### Interpret inactive key display
- Observe if users understand why only one inactive key per environment is shown

### Revoke an active key
- Identify if the user feels confident revoking a key and understands what happens after

## Success Indicators
- Users complete the flow without backtracking or asking for clarification
- Users describe the suffix naming behavior as helpful or intuitive
- Participants correctly explain the system’s behavior regarding inactive keys
- No major accessibility or comprehension issues are observed

