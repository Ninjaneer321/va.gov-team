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

# Research Plan - Facility Selection Variant Test

Peter Russo, Sr. UX Designer
peter.russo@adhocteam.us

Lauren Ernest, Product Manager
lauren.ernest@adhocteam.us

July 27, 2021

[Slide deck](./Variant%20Test%20Overview%20_%20Sorting%20Facilities.pdf)

## Problem
Veterans are more often than not registered at more than one VA facility. It can be confusing for them when they have to select from a list of facilities that they are registered at. The list can be overwhelming and may include facilities they no longer visit to receive care (e.g. moved to another state" /></kbd>.

Currently, in the VA request flow, approximately 74% of users who land on the facility's page move to the next step. We want to raise the completion rate on this page and increase the speed at which those who complete the page move on to the next step.

## Hypothesis
We believe that if we provide simpler interactions and clearer language on the facility selection page, Veterans will be able to more easily understand their options.

- Help them complete the facility selection step more quickly, whether they move on to the next step, or drop-off
- Help them complete the step successfully slightly more often

## Control - Facility Selection Page

### Content

- Heading 1 includes type of care
- Includes Heading 2 for sort type when sorted by home address or current - location
- Body copy describes list
- Additional copy for CTA for 
- Displays home address reference

<kbd><image alt="alt text" width="200" src="images/facility-select-variant-overview.png" /></kbd>


<kbd><image alt="alt text" width="200" src="images/facility-select-variant-overview-1.png" /></kbd>

### Sort by home address
- Default when user has home address in Profile
- Can choose to sort by current location
- Cannot choose to sort alphabetically
- Nearest to farthest from address displayed

<kbd><image alt="alt text" width="400" src="images/facility-select-variant-overview-2.png" /></kbd>

### Sort by current location
- Never a default
- Selection made from sort by home address
- Can choose to sort by home address
- Cannot choose to sort alphabetically
- Nearest to farthest from geolocation

<kbd><image alt="alt text" width="400" src="images/facility-select-variant-overview-3.png" /></kbd>

### Current location blocked
- Alert displays
- Sort remains by home address

<kbd><image alt="alt text" width="400" src="images/facility-select-variant-overview-4.png" /></kbd>

### Sort alphabetically
- Default when user doesn’t have home address in Profile
- Cannot choose another sort option
- A to Z

<kbd><image alt="alt text" width="400" src="images/facility-select-variant-overview-5.png" /></kbd>

## Variant - Facility Selection Page

### Content
- Simplified Heading 1
- Heading 1 doesn’t include type of care
- Simplified intro copy

<kbd><img alt="alt text" width="400" src="images/facility-select-variant-overview-6.png" /></kbd>

### Sort by home address
- Default when user has home address in Profile
- Nearest to farthest from address displayed
- Can choose to sort by current location or alphabetically

<kbd><img alt="alt text" width="400" src="images/facility-select-variant-overview-7.png" /></kbd>

### Sort by current location
- Never a default
- Nearest to farthest from geolocation
- Can choose to sort by home address or alphabetically

<kbd><img alt="alt text" width="400" src="images/facility-select-variant-overview-8.png" /></kbd>

### Current location blocked
- Alert displays
- No results
- Can update browser settings and retry
- Can choose another sort option  

<kbd><img alt="alt text" width="400" src="images/facility-select-variant-overview-9.png" /></kbd>

### Sort alphabetically
- Default when user doesn’t have home address in Profile
- A to Z
- Can choose to sort by current location
- Cannot choose to sort by home address

<kbd><img alt="alt text" width="400" src="images/facility-select-variant-overview-10.png" /></kbd>
