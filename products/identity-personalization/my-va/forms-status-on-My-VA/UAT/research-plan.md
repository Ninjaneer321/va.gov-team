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

# 2024-10 UAT Forms Status on My VA Research Plan

## Background

To test the success of the form status implementation, there is a dilemma in finding participants who have already submitted one of the seven forms that are part of the MVP and having their test sessions expedited. Due to this, the team has uncertainty on proceeding with a formal UAT process - can we achieve goals realistically, and how much time/resources will be required to make it happen? 

On August 28, 2024, the My VA team held internal discussions as well as a meeting with Perigean to talk through the challenges of recruiting Veterans for this UAT effort. 

Based on those conversations, there were two possible paths we could take moving forward:

1. Starting a "rolling research recruitment" with Perigean in which we actively recruit participants and get them in sessions quickly. Perigean has recommended alloting multiple weeks for this in order to ensure we get enough participants.

  - If we took this approach, we are likely looking at a delayed rollout to Production, with uncertain ability to really test both of the standard statuses that can appear for users (submission in progress, received).
  - Shannon Housel had recommended that we plan on hour long sessions just to account for technical difficulties, while cautioning that users may unintentionally report in screeners that they have done one of the eight forms when they have not.

2. Relying instead on QA in Staging, as well as attempting to get assistance from internal OCTO users of VA.gov with UAT using their own personal accounts.

  - Recruiting internally would have its own challengers.
  - QA and internal UAT alone could not be sufficient.
 
The decision was made at the beginning of September 2024 to proceed with the second option.


### OCTO-DE Objectives 

This effort supports the OCTO priorities:

- Veterans and their families can apply for all benefits online

- Logged-in users can easily track applications, claims, or appeals online
  
- Increased usage of digital, self-service tools


### Veteran Journey

This effort relates to the range of steps for Veterans after they leave the service, as forms can be submitted throughout their lives.

## Research Goals	
The primary goal of our UAT is to confirm that functionality works as expected.

### Outcome
Based on the outcome of this research study, we will either release the updates to production and/or update our design to correct any issues with functionality.

### Research questions

- Do form statuses display as intended?
- (if in scope) Can PDF copies of forms be downloaded?

### Hypothesis
Functionality will work as intended.

## Method	
We'll have participants go through a list of specific tasks for UAT. We will test in production using a feature flipper.

### Location
Remotely, via Zoom.

### Research materials
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/UAT/UAT-conversation-guide.md)

## Recruitment	

We are recruiting internal Veteran participants from OCTO and USDS to perform UAT testing in Production with their personal va.gov accounts. This is being done via outreach on Slack. 

### Recruitment criteria

Any Veteran who is, or has very recently, submitted one of the seven forms that are part of the forms status MVP. 


## Timeline
### Prepare

When will the thing you are testing be finalized? 

- All engineering work will be completed after September 10, 2024, testing will be completed by October 12.

### Research sessions
What dates do you plan to do research? 

- The week of October 10, 2024. 

### Length of sessions
Sessions will be 45 minutes, but tasks are expected to take less time than that.

### Availability

The week of October 10, 2024. 

## Team Roles	
Please list the people who will be serving in each role. 

- Moderator: Matt Marino (matt.marino@adhocteam.us)
- Research guide writing and task development: Matt Marino
- Participant recruiting: Matt Marino
- Project point of contact: Matt Marino
- Participant(s): Participants are volunteers from USDS
- Note-takers: Jeana Clark
- Observers: AJ Jakabcin, Jeana Clark, Mike Marinos
