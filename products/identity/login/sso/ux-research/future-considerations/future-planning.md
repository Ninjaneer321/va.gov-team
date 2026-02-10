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

# Research Plan for SSO-Login, SSOe, March 26, 2020

## Goals
### What product & team are you doing this research for?
- SSO-Login Team
- Outbound SSOe (single sign-on from VA.gov to other VA sites)


### Background
VA.gov aims to provide a unified digital portal with access to all VA services. In certain instances, however, Veterans are directed out of the VA.gov platform in order to message their healthcare provider (MHV), check on the status of benefits claims (eBenefits), or access health tools that have moved to My VA Health (Cerner). When users need to navigate between multiple platforms to access benefits and tools, they are in many cases asked to re-authenticate each time. This results in a fragmented experience that may discourage users from interacting with the VA online. The goal of SSOe is seamless navigation for any user redirected between health tools or benefits housed on multiple platforms.

We have split up outbound (from VA.gov) and inbound (to VA.gov) launches. This testing will test outbound SSOe.  


### Research questions
- Do users understand what single sign on is?
- Do they have any questions or concerns about it?
- Do users have questions or concerns about SSO after navigating through flows between multiple VA sites?


### Hypothesis
- Users will understand the benefit of SSO  after they experience it, and hopefully understand it from the plain language used in SSO communication modal
- Users might not stop to read the modal unless we direct them to
- Users may not notice the redirects that SSO brings to their sign in experience

### Method
- User acceptance testing
- Remote moderated, via Zoom
- Testing from staging.va.gov.
- This type of testing will allow us to observe how users react to SSOe as its happening. Much of the work on SSOe is back-end development work with no discernable change to the end user experience. However, we want to validate that end users do not feel their experience is negatively influenced in any way by SSOe. We especially want to ask users to go through flows where we are aware there are some small UX inconsistencies, and ensure the UX solves we have developed for these moments in the SSO experience do not cause significant confusion for end users. 

### Participants and Recruitment
#### Participant criteria
- 8-10 participants
- Participants of all ages. At least 2 participants over 65.
- From all across United States
- All participants should have used My HealtheVet and eBenefits at least once
- At least 3 participants that use My HealtheVet and eBenefits regularly (regularly = 6x/year or more)

#### What is your recruitment strategy?
WIP

### Timeline
#### Dates
WIP

#### Stimuli for testting
WIP on when will be ready 

#### Length of Sessions
- 30 minutes

#### Availability
WIP

#### Pilot
WIP

### Team Roles
Please list the people who will be serving in each role. Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker

Moderator: Bridget Hapner

Research guide writing and task development (usually but not always same as moderator): Bridget Hapner

Participant recruiting & screening: TBD

Project point of contact: Bridget Hapner

Participant(s) for pilot test: TBD

Note-takers: Alexis James, Ambika Roos

Observers: TBD
