---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience, Notifications MVP UAT, August 2022"
date: 2022-08-01
last_updated: 2022-08-31
team: "Authenticated Experience"
product: "My VA - Onsite Notifications MVP"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans expect to see personalized information upon login, including time-sensitive notifications at the top of the page. This effort adds a notifications MVP to My VA to elevate critical tasks."
  product_location: "My VA dashboard (authenticated area of VA.gov)"
  user_familiarity: "New feature - adding notifications MVP to existing My VA dashboard"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications"

# Research Design
methodology: "User Acceptance Testing (UAT)"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Confirm that MVP functionality works as expected"
  - goal_2: "Validate that no major usability hurdles exist with alert design changes"
  - goal_3: "Test notifications with screen reader users to validate information presentation"

research_questions:
  - "Does the functionality work as expected?"
  - "Are Veterans able to easily take action on their notifications and dismiss them?"
  - "Do screen reader users feel the information is presented in line with their mental model?"
  - "Are notifications displayed as intended when triggered in VA Notify with appropriate timestamps?"

hypotheses:
  - "Users will notice the Notifications section upon login before proceeding on the page"
  - "Users will be able to easily take action on their notifications from My VA and dismiss them"
  - "Users will not encounter any bugs in the Notifications section"
  - "Screen reader users will feel that the information is presented in line with their mental model"
  - "The current warning alert component will cause some confusion about whether notifications are system errors or personalized action items"

expected_outcomes: "Based on the outcome of this research study, we will either release our MVP to production, or update our design to correct any significant usability hurdles."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Internal recruitment"
  approach: "Internal veterans and employees with disabilities"
  
  primary_criteria:
    - "Must be LOA3 (identity verified) on VA.gov"
    - "Must either be veterans, have a cognitive disability, OR use assistive technology"
    - "Must be able to screenshare via Zoom"
    - "Must be comfortable providing the email address they use to sign into VA.gov"
    
  secondary_criteria:
    - "N/A (internal recruitment)"
    
  screener_questions:
    - question: "Are you a veteran, have a cognitive disability, OR use assistive technology to access VA.gov?"
      qualifying_response: "Yes to at least one"
      
participants:
  veterans: 6
  caregivers: 0
  dependents: 0
  total_recruited: 6
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2022-08-15 to 2022-08-31"
  research_review_submission: "2022-08-01"
  
session_details:
  duration_minutes: 30
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Move toward My VA being the one-stop shop for action items"
    key_results: 
      - "Provide more direct, personalized routes to Veterans' most critical updates and tasks"
      
veteran_journey_phases:
  - "Starting Up"
  - "Living Civilian Life"
  - "Taking Care of Myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md"
    
tags:
  - "my-va"
  - "notifications"
  - "uat"
  - "authenticated-experience"
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
