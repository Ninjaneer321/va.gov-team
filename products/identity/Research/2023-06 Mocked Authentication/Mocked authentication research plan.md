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

# Research Plan for Core Identity, Mocked Authentication, Usability Testing

## Background

Mocked Authentication is an alternate authentication flow on local and development builds of VA.gov, which allows users to test and develop downstream features without the need to authenticate with a real credential provider. Users are able to select the test account they'd like to authenticate as, without the need for a user name or password.
- [product brief](https://docs.google.com/document/d/1EgNWdbA5CxlVkXEPehPHvIK_0pi-6hbwc3WdPQ-aPS4/edit#heading=h.rxzwaqqmtlro)


## Research Goals

- Test the usability of the [current Mocked Authentication product](https://dev.va.gov/sign-in/mocked-auth)
- Find solutions for the current known issues around error messages
- Develop product backlog


### Research questions

- What changes should be made before broad use of this product?
- What changes can be put in the backlog for a possible future iteration?


## Methodology

Remote usability testing will evaluate the prototype with participants who are engineers on VA.gov.

## Research materials

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0a00164e8c062cdff20d4b65d3e3e698955eb522/products/identity/Research/2023-06%20Mocked%20Authentication/Mocked%20authentication%20conversation%20guide.md)
- [Product link](https://dev.va.gov/sign-in/mocked-auth)


## Recruitment

We will recruit 3-4 VFS developers from other teams. We’ll first check with a couple developers that Joe and Trevor recommend, who might be interested. We’ll direct message them in slack with:
> Hi [NAME]! The Identity Core team is working on gathering information to better understand and improve the Mock Authentication experience. We are looking for developers to participate in a short usability test.
>
> Joe and Trevor from the team recommended that we reach out to you. Sessions will be about 30-45 minutes. Would you be willing to set aside some time to test with us?

If we don’t reach 3 participants, we’ll post a message in DSVA slack channel #general and cross post in #accountexp-authexp and #vsp-identity. The slack message we’ll use:

>Looking for developer input
>
>The Identity Core team is working on gathering information to better understand and improve the Mock Authentication experience. We are looking for participants to take part in a short usability test. Sessions will be about 30-45 minutes. Please leave a comment here or DM Clayton Zook if you would be willing to set aside some time to test with us next week 

### Recruitment criteria

- 3-4 VFS developers/engineers who are likely users of this product

## Timeline

- Recruiting: June 21 - June 26
- Pilot: June 26
- Sessions: Last week of June to first week of July



## Team Roles
- Moderator: Clayton Zook, Amanda Porter
- Research guide writing and task development: Clayton Zook
- Project point of contact: Clayton Zook
- Recruiting: Amanda Porter
- Note-takers: Amanda Porter, Charlye Tran, Clayton Zook
