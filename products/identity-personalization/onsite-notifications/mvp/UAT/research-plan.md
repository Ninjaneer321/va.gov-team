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

# Research Plan for Authenticated Experience, Notifications MVP UAT, August 2022

## Background
Throughout [My VA 2.0 research and discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md) in 2020 - 2021, a recurring theme mentioned by Veterans is that seeing personalized information upon login, including time-sensitive notifications at the top of the page, is important. Veterans said that they expected a mix of links and widgets to complete tasks on their homepage, and want clear labels to understand next steps.

This effort aims to add a notifications MVP to the My VA dashboard to elevate the most critical tasks for veterans who are logged in and LOA3, and give them clear steps to take action on these items.

See our [product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications) for more details.

### OCTO-DE Objectives 
The addition of a notifications section will help fulfill our north star objective of moving toward My VA being the one-stop shop for action items, so that it provides more direct, personalized routes to Veterans’ most critical updates and tasks.


## Research Goals	
The primary goal of our UAT is to confirm that our MVP functionality works as expected.

- We would like to validate that no major usability hurdles have been introduced during the iterations that have occurred, especially with the changes we made to the alert design.
- We would like to test notifications with a screen reader user to validate that the information is presented in line with their mental model and they are able to act on it as intended.
- We would like to validate that when a notification is triggered in VA Notify, a user sees a notification as intended at the top of My VA with the appropriate time stamp.
- We would like to verify that if a user receives multiple notifications, they are shown as individual notifications with time stamps ordered with the newest at the top.

### Outcome
Based on the outcome of this research study, we will either release our MVP to production, or update our design to correct any significant usability hurdles people encounter.

### Hypothesis
- Users will notice the Notifications section upon login before proceeding on the page.
- Users will be able to easily take action on their notifications from My VA and dismiss them.
- Users will not encounter any bugs in the Notifications section.
- Screen reader users will feel that the information is presented in line with their mental model, and is easily understood and acted upon.
- The current warning alert component will cause some confusion about whether notifications are system errors or personalized action items.

## Method	
We'll have participants go through a list of specific tasks for UAT and ask follow-up questions to get feedback on our usability-related questions. We will test this feature in production and work with VA Notify to trigger notifications for participants.

### Location
Remote, via Zoom

### Research materials
[Conversation guide]() 

## Recruitment	
We will be conducting this research study internally without recruitment from Perigean. Our audiences will be internal veterans and employees with disabilities.

### Recruitment criteria

We will need at least 6 completed sessions to finalize UAT and launch this feature.

#### Primary criteria (must-haves)

**All participants**

- must be LOA3 (identity verified) on VA.gov.
- must either be veterans, have a cognitive disability, **OR** use assistive technology to access VA.gov.
- must be able to screenshare via Zoom.
- must be comfortable providing the email address they use to sign into VA.gov.

## Timeline
When will the thing you are testing be finalized? 
August, 2022 (tentative)

### Research sessions
What dates do you plan to do research? 
TBD

### Length of sessions
Sessions will be 30 minutes with 30 minutes in between sessions.

## Team Roles	
Please list the people who will be serving in each role. 

- Moderator: Angela Agosto, angela.agosto@adhocteam.us
- Research guide writing and task development (usually but not always same as moderator): Angela Agosto
- Participant recruiting & screening:	Angela Agosto
- Observers:	
  - samara.strauss@va.gov
  - ana@adhocteam.us
  - erica.sauve@adhocteam.us
  - taylor.mitchell@gcio.com
  - liz.lantz@adhocteam.us
