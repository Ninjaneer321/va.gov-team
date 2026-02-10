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

# Research Plan for Public Websites, Outreach & Events, Dec 2021

## Background
The Outreach & Events calendar provides a listing of upcoming national VA events that Veterans can browse and sign up to attend (without logging in). The current user experience is a flat listing of upcoming events, and we are adding the following two new capabilities:
1. Filtering events by date range
1. Viewing recurring events together

[Initiative Briefing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/products/outreach-events/initiatives/2021-filtering-recurring-events/initiative-briefing.md)

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/product-outline.md)

### OCTO Objectives 

This research supports the following [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme): 
- Increase the usage and throughput of VA services
- Increase the quality and reliability of VA services

### Veteran Journey
Outreach & Events fits into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) when Veterans find VA events to attend throughout 
- Starting up (Serving in and separating from the military)
- Living civilian life 
- Retiring and aging 

## Research Goals	
The goal of this research is to get user feedback on our designs for the following two new features:
1. Filtering by date range
2. Viewing recurring events together

### Outcome
We will consider findings and recommendations from this research to refine our designs before launch.

### Research questions
1. How intuitive is our design for filtering by date range? 
    1. What do Veterans think about the options for date range? 
    2. What do Veterans think about filtering by a specific date and a date range?
3. How intuitive is our design for recurring events? Do Veterans understand that the event is repeating?
    1. Are Veterans able to register for individual events in the series of recurring events?
4. How do Veterans expect to look for VA events?
5. What kind of location information for events do Veterans want to see in the list of events? (e.g., virtual/in-person, city, address)
    1. For in-person events, what specific information is expected? (i.e., is "city" enough information, or also want street address?)

### Hypotheses
1. Veterans will understand how to use date filters to find events they are interested in
1. Filtering events by date will enable Veterans to find events that fit in their schedules
1. Seeing which events are recurring will enable Veterans to register for all events they're interested in

## Method	
We will conduct remote moderated usability research sessions via Zoom. Research participants will be asked about their experiences with VA events, and then they will be given tasks to do using a mobile design prototype in UXPin. 

### Future research plans
*We want to include some participants who use screen readers, but we will have to wait until we can build a "working prototype" on the Staging server. At that time, we plan to iterate this research with the following additions:*
- *Research question: How accessible to screen reader users is the date range filter dropdown?*
- *Research question: How accessible to screen reader users are recurring events?*
- *Hypothesis: The designs will be accessible to Veterans who use screen readers*
- *Primary recruiting criterion: At least 2 people who use a screen reader*
- *Observer: Angela Fowler will observe sessions with participants using a screen reader*

### Research materials
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/conversation-guide.md)
- [Link to prototype](https://preview.uxpin.com/18c7e081f0105ed7f34e1b597567279bf74ffc2d#/pages/144514555/simulate/no-panels?mode=cvhidmf)


## Recruitment	

Ask Perigean to recruit **10** Veterans in order to get **5** completed sessions using the criteria below.

### Primary criteria (must-haves)
- All are Veterans
- At least 2 people 55 or older
- At least 2 people with a cognitive disability (e.g., TBI)
- All have a smartphone and are willing to to join our Zoom call from their phone 
  - All have a working microphone on their phone 
  - All have the Zoom app downloaded to their phone prior to the session and know how to share their screen
  - During the session, all are willing to share their browser window over Zoom

*PERIGEAN: In your reminder calls/emails, could you please mention that they need to **join from their smartphone**, not a computer or tablet?*

### Secondary criteria (nice-to-haves)
- At least 1 people of color
- At least 1 woman
- At least 1 person 35 or under
- At least 2 people who don't have any degree or vocational training after high school (to include enlisted Veterans)
- At least 1 person that has a college degree (to include officer Veterans)
- At least 2 people who live in a rural or remote area
- At least 1 person who lives in a major metropolitan area
- At least 1 non-native English speaker *(Please ask "What is the first language that you learned to speak as a child?" If not English, record as "non-native English speaker")*

## Timeline

### Prepare
* Pilot #1: **Nov 29 3:30-4:30 pm** ET with Keith Adkins (keith.adkins@adhocteam.us)
* Pilot #2: **Nov 30 2:30-3:30 pm** ET with Dave Sukharan (dave.sukharan@adhocteam.us)

### Research sessions
Dec 1 - Dec 6, 2021 

### Length of sessions
**60-minute sessions** with at least **30-minute breaks** in between

### Availability

Team Availability | Time (ET)
------------------|--------------
Dec 1, 2021 | Noon - 3 pm, 5 - 8 pm
Dec 2, 2021 | Noon - 3 pm, 4 - 8 pm
Dec 6, 2021 | Noon - 3 pm, 4 - 8 pm
	
## Team Roles	
- Moderator:	Cindy Merrill (cindy.merrill@adhocteam.us)
- Research guide writing and task development:	Cindy Merrill
- Participant recruiting & screening:	Perigean
- Project point of contact:	Cindy Merrill
- Participants for pilot test:	(noted above)
- Note-takers:	Perigean
- Observers:	Brian Lloyd (Brian.Lloyd@gcio.com), Cassandra Allen (cassandra.allen@gcio.com), Dave Conlon (david.conlon@va.gov), Kelson Adams (kelson.adams@gcio.com), Jim Adams (james.adams@gcio.com)

## Approvals
- Reviewed and approved by Dave Conlon (PO) on Nov 19, 2021.
- Reviewed and approved by Lauren Alexanderson on Nov 24, 2021.
