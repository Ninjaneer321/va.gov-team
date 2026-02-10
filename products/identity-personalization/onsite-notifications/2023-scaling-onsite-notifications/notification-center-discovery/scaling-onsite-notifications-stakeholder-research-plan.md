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

# Research Plan for Authenticated Experience, Scaling Onsite Notifications Stakeholder Research 2023

## Background
The [onsite notification MVP](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/mvp#readme) launched in October 2022. This functionality does the following:

- Integrates VA.gov and VANotify, so that VA Notify can tell VA.gov when to show an on-site alert to a user.
- Elevates a single, action-oriented alert on My VA for when a user has had a new debt added to their account. Users can click for more information or dismiss the alert.

Now that we've established the initial infrastructure for VA.gov to leverage VA Notify's functionality, we are ready to determine next steps for scaling this feature.

[Link to project brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications).

### OCTO Objectives 

Scaling onsite notifications will ensure that logged-in users have a personalized experience, with relevant and time-saving features. By surfacing the most important updates and action items upon login, we can increase usage of digital, self-service tools and decrease call center volume, wait time, and time to resolution. Accomplishing these things will fulfill our north star objective of being a single, authoritative source of information that is personalized to the logged in user.

### Veteran Journey
Since Veterans can apply for and manage their benefits on VA.gov any time after getting out of the military, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.

## Research Goals	

### 1. Gather insights about action items from product owners and identify trends.

- Have other teams talked to users about how they expect to see notifications or action items represented on VA.gov?
- What relevant studies or data should we reference outside of the authenticated experience team as part of this discovery work?

### 2. Determine if there's a clear consensus on the vision for notifications on VA.gov.

- What are OCTO stakeholders expectations around how we elevate notifications on VA.gov? How strong are their opinions about the outcome of this work?
- Should notifications be surfaced within the navigation of VA.gov? If so, how?

### 3. Identify any challenges or things to consider that we were not already aware of on the Authenticated Experience team.

- If users don't see common notifications in a notification center yet because VA Notify does not yet support them (eg. new message from your doctor, or a prescription shipping), will users trust the feature?
- Are there any important factors to consider that we haven't already addressed in this study?

### Outcome
Based on our findings, we will meet as a team to discuss and write up findings and recommendations before determining any next steps. We will not be testing any prototypes with users until we have a clear path (or potential paths) forward and consensus from all OCTO leads.

## Method	
We will conduct one-on-one stakeholder interviews via Zoom with OCTO product owners:
- Chris Johnston - Portfolio lead; Currently helping out with the mobile app (Note: Julia Badillo manages Chris's calendar)
- Rachel Han - Mobile app lead
- Lauren Alexanderson, Coulton Bunney, Patrick Bateman, Kay Lawyer, and Kristen McConnell - Health leads (Note: Alicia Proctor manages Lauren's calendar)
- Dave Conlon - Sitewide lead
- Matt Self - Benefits lead
- Mikki Northuis - IA/Nav lead
- Chante Lantos-Swett - Account experience lead; Also leads customer support work
- Martha Wilkes - Accessibility lead
- Matt Dingee - Design lead
- Ray Wang - Platform lead

### Research materials
[Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications/notification-center-discovery/scaling-onsite-notifications-stakeholder-convo-guide.md)

## Timeline

### Research sessions
* Planned dates of research: 

### Length of sessions
* Session length: 30 minutes
	
## Team Roles	
Please list the people who will be serving in each role. 

- Moderator: Angela Agosto, angela.agosto@adhocteam.us
- Research guide writing and task development: Angela Agosto
- Project point of contact: Angela Agosto
- Note-takers: Will use Zoom transcription
- Observers (all optional):	
  - chante.lantosswett@va.gov
  - ana@adhocteam.us
  - berni.xiong@agile6.com
  - allison@cityfriends.tech
  - derrick.ellerbie@Agile6.com
  - florence.mccafferty@agile6.com
  - liz.lantz@adhocteam.us
  - Beverly.Nelson@va.gov
  - melanie.jones@oddball.io
