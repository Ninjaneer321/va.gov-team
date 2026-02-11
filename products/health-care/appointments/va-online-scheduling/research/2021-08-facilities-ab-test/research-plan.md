---
# Research Plan Metadata
title: "Research Plan for VAOS, Facility Selection A/B Test, July 2021"
date: 2021-07-27
last_updated: 2026-02-10
team: "VA Online Scheduling (VAOS)"
product: "VA Online Scheduling"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans are more often than not registered at more than one VA facility. It can be confusing for them when they have to select from a list of facilities that they are registered at. The list can be overwhelming and may include facilities they no longer visit to receive care. Currently, approximately 74% of users who land on the facility's page move to the next step. We want to raise the completion rate on this page and increase the speed at which those who complete the page move on to the next step."
  product_location: "VA.gov appointments - facility selection page during scheduling flow"
  user_familiarity: "Iteration"
  product_brief_url: "TBD"

# Research Design
methodology: "A/B test (variant comparison)"
research_format: 
  location: remote
  moderated: false
  
# Research Goals & Questions
research_goals:
  - goal_1: "Test if simpler interactions and clearer language on the facility selection page helps Veterans more easily understand their options"
  - goal_2: "Help Veterans complete the facility selection step more quickly, whether they move on to the next step or drop-off"
  - goal_3: "Help Veterans complete the step successfully slightly more often"

research_questions:
  - "Does simplified heading and intro copy improve completion rates?"
  - "Does providing alphabetical sort option improve user experience?"
  - "Does changing how current location blocked state is displayed affect completion?"
  - "Does variant increase speed of task completion on facility selection page?"
  - "Does variant increase overall completion rate of facility selection step?"

hypotheses:
  - "If we provide simpler interactions and clearer language on the facility selection page, Veterans will be able to more easily understand their options"
  - "Veterans will complete the facility selection step more quickly with simplified content"
  - "Veterans will complete the step successfully slightly more often with improved sorting options"

expected_outcomes: "Increased completion rate on facility selection page and faster task completion for those who do complete the page"

# Recruitment & Participants
recruitment:
  recruiting_partner: "TBD"
  approach: "Production A/B test"
  
  primary_criteria:
    - "Veterans registered at VA facilities"
    - "Veterans actively using VAOS to schedule appointments"
    - "Veterans with home address in Profile"
    
  secondary_criteria:
    - "Veterans without home address in Profile"
    - "Veterans registered at multiple facilities"
    
  screener_questions:
    - question: "TBD"
      qualifying_response: "TBD"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2021-08-01 to TBD"
  research_review_submission: "2021-07-27"
  
session_details:
  duration_minutes: 0
  buffer_minutes: 0
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase Veteran satisfaction with VA.gov"
    key_results: 
      - "Increase completion rate on facility selection page"
  - objective: "Decrease time to successfully complete online transactions"
    key_results:
      - "Reduce time spent on facility selection page"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Living civilian life"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "products/health-care/appointments/va-online-scheduling/research/2021-05-facilities-personalization-research/research-plan.md"
    
tags:
  - "AUD: Veterans"
  - "PRDT: Appointments"
  - "PRDT: VAOS"
  - "PRDT: Health care"
  - "DSC: List"
  - "DSC: Alert"
  - "DSC: Radio buttons"
  - "DSP: Form design"
  - "RESRCH: A/B test"
  - "RESRCH: Quantitative"
  - "authenticated"
  - "facility-selection"
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
