---
# Research Plan Metadata
title: "Research Plan for Core Identity, Mocked Authentication, Usability Testing"
date: 2023-06-26
last_updated: 2023-06-26
team: "Core Identity Team"
product: "Mocked Authentication"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Mocked Authentication is an alternate authentication flow on local and development builds of VA.gov, which allows users to test and develop downstream features without the need to authenticate with a real credential provider. Need to improve usability and address known issues with error messages."
  product_location: "https://dev.va.gov/sign-in/mocked-auth (development environment)"
  user_familiarity: "Iteration - improving existing developer tool"
  product_brief_url: "https://docs.google.com/document/d/1EgNWdbA5CxlVkXEPehPHvIK_0pi-6hbwc3WdPQ-aPS4/edit#heading=h.rxzwaqqmtlro"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Test the usability of the current Mocked Authentication product"
  - goal_2: "Find solutions for the current known issues around error messages"
  - goal_3: "Develop product backlog"

research_questions:
  - "What changes should be made before broad use of this product?"
  - "What changes can be put in the backlog for a possible future iteration?"

hypotheses:
  - "Developers will find the current mocked authentication flow generally usable but will identify specific pain points"
  - "Error messages will be a primary source of confusion or frustration"
  - "Developers will have suggestions for improvements that can be prioritized into a product backlog"

expected_outcomes: "Identify critical usability issues that need immediate fixing and create a prioritized backlog of improvements for future iterations of Mocked Authentication"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Direct recruitment via Slack"
  approach: "targeted recruitment of VFS developers"
  
  primary_criteria:
    - "3-4 VFS developers/engineers who are likely users of this product"
    - "Must have experience developing on VA.gov"
    - "Familiar with or have used authentication testing tools"
    
  secondary_criteria:
    - "Variety of teams represented"
    - "Different levels of experience with mocked authentication"
    
  screener_questions:
    - question: "Are you a VFS developer who works with VA.gov authentication?"
      qualifying_response: "Yes"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 4
  completed_sessions_goal: 3
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-06-26"
  pilot_participant: "TBD"
  research_dates: "2023-06-26 to 2023-07-07"
  research_review_submission: "2023-06-20"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 15
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans and their families trust the security, accuracy, and relevancy of VA.gov"
    key_results: 
      - "Improve developer tools to enable better authentication testing"
  - objective: "Platform improvements for development efficiency"
    key_results:
      - "Reduce developer friction in testing authenticated features"
      
veteran_journey_phases:
  - "N/A - Developer tool"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Research"
    
tags:
  - "PRDT: Sign-in"
  - "PRDT: Mocked Authentication"
  - "usability testing"
  - "developer experience"
  - "authentication"
  - "testing tools"
  - "internal tools"
  - "development"
  - "identity"
  - "AUD: Developers"
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
