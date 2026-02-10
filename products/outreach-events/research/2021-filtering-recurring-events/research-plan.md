---
# Research Plan Metadata
title: "Research Plan for Public Websites, Outreach & Events, December 2021"
date: 2021-12-01
last_updated: 2026-02-10
team: "Public Websites"
product: "Outreach & Events"
product_area: "unauthenticated"

# Background Context
background:
  problem_statement: "The Outreach & Events calendar provides a flat listing of upcoming national VA events. Users need better ways to filter events by date range and view recurring events together to find events that fit their schedules and register for all events they're interested in."
  product_location: "VA.gov Outreach and Events section"
  user_familiarity: "iteration"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/product-outline.md"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Get user feedback on designs for filtering by date range"
  - goal_2: "Get user feedback on designs for viewing recurring events together"
  - goal_3: "Consider findings and recommendations to refine designs before launch"

research_questions:
  - "How intuitive is our design for filtering by date range?"
  - "What do Veterans think about the options for date range?"
  - "What do Veterans think about filtering by a specific date and a date range?"
  - "How intuitive is our design for recurring events? Do Veterans understand that the event is repeating?"
  - "Are Veterans able to register for individual events in the series of recurring events?"
  - "How do Veterans expect to look for VA events?"
  - "What kind of location information for events do Veterans want to see in the list of events? (e.g., virtual/in-person, city, address)"
  - "For in-person events, what specific information is expected? (i.e., is city enough information, or also want street address?)"

hypotheses:
  - "Veterans will understand how to use date filters to find events they are interested in"
  - "Filtering events by date will enable Veterans to find events that fit in their schedules"
  - "Seeing which events are recurring will enable Veterans to register for all events they're interested in"

expected_outcomes: "Findings will inform design refinements before launch to ensure Veterans can effectively filter and find VA events that fit their schedules."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "lean maximum variation"
  
  primary_criteria:
    - "All are Veterans"
    - "At least 2 people 55 or older"
    - "At least 2 people with a cognitive disability (e.g., TBI)"
    - "All have a smartphone and are willing to join Zoom call from their phone"
    - "All have working microphone and Zoom app downloaded, know how to share screen"
    
  secondary_criteria:
    - "At least 1 person of color"
    - "At least 1 woman"
    - "At least 1 person 35 or under"
    - "At least 2 people who don't have any degree or vocational training after high school"
    - "At least 1 person that has a college degree"
    - "At least 2 people who live in rural or remote area"
    - "At least 1 person who lives in major metropolitan area"
    - "At least 1 non-native English speaker"
    
  screener_questions:
    - question: "Are you a Veteran?"
      qualifying_response: "Yes"
    - question: "Do you have a smartphone and are you willing to join our Zoom call from your phone?"
      qualifying_response: "Yes"
      
participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 5
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-11-29"
  pilot_participant: "Keith Adkins, Dave Sukharan"
  research_dates: "2021-12-01 to 2021-12-06"
  research_review_submission: "2021-11-24"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 6
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase the usage and throughput of VA services"
    key_results: "Enable Veterans to more easily discover and register for VA events"
  - objective: "Increase the quality and reliability of VA services"
    key_results: "Provide better filtering and organization of events to improve user experience"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/products/outreach-events/initiatives/2021-filtering-recurring-events/initiative-briefing.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/research/2021-filtering-recurring-events/conversation-guide.md"
    
tags:
  - "PRDT: Outreach and Events"
  - "AUD: Veterans"
  - "usability testing"
  - "events"
  - "calendar"
  - "filtering"
  - "recurring events"
  - "date range"
  - "DSC: Filters"
  - "DSC: Calendar"
  - "DSP: Filtering"
  - "HDW: Mobile"
  - "HDW: Smartphone"
  - "accessibility"
  - "cognitive disability"
  - "remote"
  - "moderated"
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
