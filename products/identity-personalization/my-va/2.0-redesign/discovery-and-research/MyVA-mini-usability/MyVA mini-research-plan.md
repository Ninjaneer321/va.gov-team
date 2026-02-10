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

# Research Plan for VSA Authenticated Experience: MyVA Redesign May 2021

## Goals

The goal of this internal research study is to quickly understand if we are generally going in the right direction with what we plan to launch. Additionally, we will test if there is confusion or any major pain points with the My VA redesign.   
 
## Background

Based on past user interviews, we know people come to VA.gov to see information that is relevant to them and to complete tasks specific to their benefits. Users do not want to see links, suggestions or information that doesn't apply to them personally on their dashboard.

Our goal is to create a new My VA dashboard design that will improve the online experience for Veterans, by better integrating Veteran-provided data onto the existing My VA dashboard. The MyVA dashboard aims to surface the status and the most recent update to a users health care information, claims information, and any applications in progress. Users should also be able to quickly and easily reach the tools that allow them to manage this information. 

- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md) 
- [Personalization 2.0 discovery write-up (2019)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md)
- [Logged-in homepage discovery write-up (Spring 2020)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/discovery-summary.md)
- [MyVA Jobs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/my-va-jobs.md)

### Our approach

We will conduct an internal mini-usability study to validate overall design, discover any major pain points and potentially get some insights for some future functionality on My VA. All sessions will be run via Zoom on production using a feature flag.

### Questions we hope to be able to answer

- Does our solution present any usability hurdles?
- Does the overall layout we are launching with make sense to users?
- How can we better elevate action items on a user dashboard?

### Our hypothesis for this research study

- People will be able to find and understand their information quickly and effectively.
- There might be some confusion around how to get to specific tools. (i.e. scheduling an appointment from My VA)
- Users might want more emphasis on their specific action items.

## Method	

### What method of research are you planning? 	

This internal study will be moderated sessions on mobile via Zoom. Each will be about 15-20 min. 

#### Why?

This approach will allow us to test using users *real data* prior to launch.  Using dummy data in past sessions potentially skewed our results, and now that we are getting close to launching this design it's important we understand any holes we might have missed. We plan to do additional testing after launch as well. 

#### Where?

We will be testing on production using a feature flag via Zoom.

#### Who?

We will be recruiting internally (Ad Hoc/GCIO) for veterans who work on the VA contract. I am aiming to get a minimum of 5 participants, 8 would be ideal.


