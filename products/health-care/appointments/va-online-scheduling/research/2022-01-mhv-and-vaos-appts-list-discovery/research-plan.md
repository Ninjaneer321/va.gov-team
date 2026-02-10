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

# Research plan for VAOS and MHV appointments list discovery

## Background

VA Online Scheduling allows Veterans to request and schedule health care appointments if they are logged in to VA.gov. It is one [channel](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/design/scheduling-channels-touchpoints.md) Veterans can use to schedule appointments.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/product/vaos-product-guide.pdf)

### OCTO Objectives 

This research supports the following [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):
* Veterans and their families can find a single, authoritative source of information
* Logged-in users have a personalized experience, with relevant and time-saving features

Increase 📈
* Veteran satisfaction with VA.gov: by providing an appointments list that meets Veteran expectations and needs.

Decrease 📉
* Call center volume, wait time, and time to resolution: by providing the right information about appointments when Veterans need it

### Veteran Journey
Veterans may interact with VAOS at different stages across the [veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):

Starting up
* MTM: Attending to health needs

Taking care of myself
* MTM: Recognizing and addressing mental health needs
* MTM: Managing health issues

Putting down roots
* Maintaining my emotional health
* Engaging VA to access benefits and services

Retiring
* MTM: Taking care of my health
* MTM: Managing my declining health

## Research Goals	
During this study we hope to learn: 
* What Veterans find helpful and/or what's confusing in the current iteration of the appointments list in both MHV and VAOS.
* What Veterans who are familiar with MHV find confusing when viewing their appointments in VAOS.

We also hope to validate a design path for the VAOS appointments list.

### Outcome
The VAOS team will use this research to identify anything lacking in the VAOS appointment list. Based on this we will develop designs to improve the content and interactions of the appointment list.

We will also validate a concept for a more condensed desktop view of the VAOS appointment list. This early feedback will help us decide how to rework these designs.

### Research questions

* What information do Veterans need in an appointments list to make it useful?
* What will be confusing when transitioning from the MHV appointments list to VAOS?

### Hypothesis

Veterans largely use the MyHealtheVet appointments list to understand and manage their health care appointments. We believe, as more Veterans transition to VAOS to do the same tasks, they may be confused by content and interactions that are different between the two lists.

## Method	

First, we'll run a **contextual inquiry** by asking participants to access the MHV appointments list and VAOS appointments list, and observe how they use those features.

Then we'll run a **concept test** by showing participants a concept of the VAOS home page on desktop and asking them questions about how this might change their experience.

### Location

This will be a moderated remote study, over Zoom.

### Research materials

- [Conversation guide](conversation-guide.md)
- [Home page concept](https://www.figma.com/proto/MNanAQBGzQbRJeb89d1OVz/VAOS-IN-Reschedule-and-home?node-id=102%3A17230&scaling=min-zoom&page-id=0%3A5282&starting-point-node-id=109%3A18580)
	
## Recruitment	

### Recruitment approach

Perigean to recruit Veterans for this study.

### Recruitment criteria

12 Veterans who are active users of MyHealtheVet.

**Primary criteria (must-haves)**

Participants must be active users of MyHealtheVet appointments:
- **Screener question (yes/no):** Have you logged in to MyHealtheVet to view your appointments in the last 6 months? 
- **Screener question (yes/no):** Are you willing to sign in to My HealtheVet during this study so our research team can learn how you use this tool? We will not record any of your personal health information; the focus of this study is to learn how you use this tool.
Participants must answer yes to both questions to qualify for the study.     

**Secondary criteria (nice-to-haves)**

Please aim for the targets below to recruit a representative sample of Veterans for this study. Each number represents the minimum number of Veterans to recruit for (based on 12 participants).

- At least 6 Veterans aged 55-64
- At least 6 Veterans who have a cognitive disability
- At least 3 people of color
- At least 3 Veterans living in rural areas
- At least 3 Veterans with no degree
- At least 3 Veterans with an Other than honorable discharge
- At least 3 Veterans of immigrant origin
- At least 2 women
- At least 1 Veteran who identifies as LGBTQ+

[Recruitment checker for this study](https://docs.google.com/spreadsheets/d/1reptCqEkF4EYzNI0uLRuLhgLsnKN97-JyO1Z9m1WQ-M/edit?usp=sharing)

## Timeline
We'll kick off the recruiting for this study Wednesday, January 26, 2022

### Prepare
All materials will be complete by Tuesday, January 25, 2022

Please indicate the date and name of a mock participant for a pilot session. 
- Pilot participant: Brian Lloyd
- Date and time of pilot session: Monday, January 24, 2022 at 10AM PT
- We will not need Perigean's support or attendance at the Pilot session.

### Research sessions
We plan to run the research sessions between Wednesday, January 26, and Friday, February 4th.

### Length of sessions
- Each session will be 1 hour.
- Please leave at least a 15m buffer between sessions.

### Availability

Monday-Friday 11 AM-10 PM EST
	
## Team Roles		
- Moderator: Peter Russo - peter.russo@adhocteam.us
- Research guide writing and task development: Peter Russo
- Participant recruiting & screening: Perigean
- Project point of contact: Peter Russo
- Participant(s) for pilot test: Brian Lloyd	
- Note-takers:
	- Perigean - we're not recording these sessions so will need verbatim notes
	- Ciera Maddox - ciera.maddox@adhocteam.us 
- Observers: 
	- Leah de la Costa - leah.delacosta@adhocteam.us
	- Lauren Ernest - lauren.ernest@adhocteam.us
	- Jeff Roof - jeff.roof@adhocteam.us
	- Andrea Perez - andrea.perez@bylight.com
	- Natalie Hill - natalie.hill@adhocteam.us
	- Lauren Russell - lauren.russell@adhocteam.us
	
