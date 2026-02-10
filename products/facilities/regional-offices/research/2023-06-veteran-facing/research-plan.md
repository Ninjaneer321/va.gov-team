---
# Research Plan Metadata
title: "Research Plan for VBA Regional Office Facility Pages Usability Testing, August 2023"
date: 2023-08-14
last_updated: 2023-08-14
team: "Facilities Team"
product: "VBA Regional Office Facility Pages"
product_area: "unauthenticated"

# Background Context
background:
  problem_statement: "VBA regional office websites need to be modernized to replace legacy pages maintained in Teamsite, providing better support for mobile usage, accessibility, and a consistent content model."
  product_location: "VA.gov - VBA regional office facility pages"
  user_familiarity: "Iteration - modernized design for existing pages"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/regional-offices"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Get user feedback on the new modernized design for VBA regional office sites"
  - goal_2: "Understand what Veterans know about VA regional benefit offices and what tasks they expect to do there"
  - goal_3: "Validate that Veterans understand which services are available, how services are delivered, and how to prepare for visits"

research_questions:
  - "What do Veterans and others know about VA regional benefit offices?"
  - "What tasks do Veterans and others expect to do at VA regional benefit offices?"
  - "Do Veterans and others understand which services are available at this location (categories, service offerings, multiple locations)?"
  - "Do Veterans and others understand how services are delivered (in-person/virtual/phone, with/without appointments, hours of operation)?"
  - "What feedback do Veterans and others have on content, organization, and length of the regional benefit office web page?"
  - "How do Veterans and others react to seeing 2 phone numbers and which would they use?"

hypotheses:
  - "Veterans and others will understand what they can do at a VA benefit office from the new web page"
  - "Veterans and others will understand how services are delivered at this location from the new web page"
  - "Veterans and others will understand how to prepare for a visit to a VA benefit office from the new web page"
  - "Veterans and others will know what to do if they don't find the kind of help they need on the new web page"

expected_outcomes: "Learnings will help refine the design of the pages before piloting an MVP with 7 sites"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "lean maximum variation with focus on mobile users"
  
  primary_criteria:
    - "ALL have a smartphone to use for the session with Zoom and screen share capability"
    - "4 have never visited a VA benefit office"
    - "3 have visited in the past 6 months"
    - "4 have visited more than 6 months ago"
    - "At least 4 people with a cognitive disability (e.g., TBI)"
    
  secondary_criteria:
    - "At least 4 people who are age 55 or older"
    - "At least 2 people 35 or under"
    - "At least 3 people of color"
    - "At least 2 women"
    - "At least 3 people who live in Continental District states"
    - "At least 2 people who don't have any degree or vocational training after high school"
    - "At least 2 people who live in a rural or remote area"
    - "At least 2 people who are LGBTQ+"
    
  screener_questions:
    - question: "Have you ever visited a VA benefit office?"
      qualifying_response: "Mix of never, past 6 months, more than 6 months ago"
    - question: "Do you find it difficult to remember or learn new things, focus on a task, or make decisions?"
      qualifying_response: "Yes (recruit 4 with cognitive disability)"
    - question: "Have you downloaded Zoom to smartphone and know how to screen share?"
      qualifying_response: "Yes (recruit 11, disqualify if no)"
      
participants:
  veterans: 8
  caregivers: 0
  dependents: 3
  total_recruited: 11
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-08-23"
  pilot_participant: "barbara@adhocteam.us, diem.mooney@adhocteam.us, greg.monahan@adhocteam.us"
  research_dates: "2023-08-28 to 2023-09-05"
  research_review_submission: "2023-08-14"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 60
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase the usage and throughput of VA services"
    key_results: []
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results: []
  - objective: "Veterans and their families trust the security, accuracy, and relevancy of VA.gov"
    key_results: []
      
veteran_journey_phases:
  - "Getting out"
  - "Starting up"
  - "Taking care of myself"
  - "Putting down roots"
  - "Retiring"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/363"
    
tags:
  - "PRDT: facilities"
  - "PRDT: facility-locator"
  - "BNFT: disability"
  - "BNFT: career-employment-education"
  - "BNFT: family-member-benefits"
  - "AUD: veterans"
  - "AUD: family-members"
  - "AUD: caregivers"
  - "RESRCH: usability"
  - "RESRCH: remote"
  - "RESRCH: moderated"
  - "HDW: smartphone"
  - "vba"
  - "regional-offices"
  - "facility-pages"
  - "modernization"
  - "mobile"
  - "accessibility"
---

# Research Plan for Usability Testing, VBA Facility pages Veteran-Facing, August 2023

## Background

VBA regional office websites are being modernized in order to replace the legacy pages maintained in Teamsite. This effort is intended to incorporate a consistent content model, as well as provide better support for mobile usage and accessibility.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/regional-offices)

[Link to card in research repo](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/363)

### OCTO Objectives

This research aligns with the following [OCTO Objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme).

North Stars:
1. Increase the usage and throughput of VA services

Goals:
1. Veterans and their families can find a single, authoritative source of information
1. Veterans and their families trust the security, accuracy, and relevancy of VA.gov

Increase:
- Usage of digital, self-service tools
- Benefit use and enrollment
- Veteran satisfaction with VA.gov

Decrease:
- Call center volume, wait time, and time to resolution

### Veteran Journey 
There are many potential touchpoints between the Veteran and benefits from the VBA throughout the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):
- Getting out (Engaging VA to access benefits and services)
- Starting up (Finding something to do, Finding a place to live)
- Taking care of myself (Managing primary care and chronic health issues > Disability Compensation)
- Putting down roots (Revisiting housing, Taking care of my family, Saving for my retirement, Engaging VA to access benefits and services)
- Retiring (Finding additional sources of income)

## Research Goals	
The purpose of this research is to **get user feedback on the new modernized design for VBA regional office sites**.

### Outcome
Learnings will help refine the design of the pages before piloting an MVP with 7 sites.

### Research questions
#### Before seeing the prototype:
1. What do Veterans (and others) know about VA regional benefit offices?
1. What tasks do Veterans (and others) expect to do at VA regional benefit offices?

#### From the prototype:
3. Do Veterans (and others) understand **which services** are available at this location?
     1. Categories of services *(i.e., Veteran benefits, Family member & caregiver benefits, Service member benefits, Other services)*  
      10. Service offering accordions that have multiple locations inside them 
      8. What if they _don't_ find an applicable service on the page? 
    
1. Do Veterans (and others) understand **how** services are delivered at this location?
     1. In-person, virtual, or by phone (do people open the appointments accordion unprompted?)
     1. With or without appointments (any comments about location of appointments information?)
     2. Hours of operation--for the office _vs._ only for a specific service
     3. Hours of operation--2 sets of hours in a single day (i.e., morning and afternoon but closed for lunch hour), comment about one of the days
     1. Notice different hours/appointments per service *vs.* regional office in general?


12. What feedback do Veterans (and others) have on **content, organization, and length** of the regional benefit office web page?
     1. Do Veterans (and others) interact with any of the *Prepare for your visit* accordions?
     1. Do Veterans (and others) interact with any of the 3 action links near the top of the page? If so, which ones?
     1. How do Veterans (and others) react to seeing 2 phone numbers? Which phone number would they use and why? What do they expect when they call?

### Hypotheses
1. Veterans (and others) will understand **what they can do** at a VA benefit office from the new web page.
1. Veterans (and others) will understand **how services are delivered** at this location from the new web page.
2. Veterans (and others) will understand **how to prepare** for a visit to a VA benefit office from the new web page.
3. Veterans (and others) will know **what to do if they _don't_ find** the kind of help they need on the new web page.

## Method	
We will conduct **usability testing** to guide research participants through a click-through prototype. We would like most participants to be on mobile devices. We will be unable to accommodate screen reader users because the prototype won't be accessible.

Sessions will be conducted over Zoom, and we would like **Zoom transcripts please**. 

### Research materials
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/regional-offices/research/2023-06-veteran-facing/conversation-guide.md)
- [Link to prototype](https://www.figma.com/proto/8RYmYfVGS9CUfZbomH5lBe/VBA-Regional-Office-Prototype?page-id=0%3A1401&node-id=3-10371&starting-point-node-id=3%3A10371&hotspot-hints=0&t=8GbxK22Cd8eh2AUJ-1)
	
## Recruitment

Ask Perigean to recruit **8 Veterans and 3 family members and/or caregivers** of Veterans who meet the below criteria in order to get **8 completed sessions**, which are also in this [recruitment intake ticket](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/362). 

### Required criteria 

- ALL have a smartphone to use it for the session and...
  - Have Zoom downloaded to their smartphone prior to the session and know how to share their screen
  - Be willing to share over Zoom a web browser window on their smartphone
  - Have a working microphone on their smartphone
- 4 have **never visited a VA benefit office**, 3 have **visited in the past 6 months**, and 4 have **visited more than 6 months ago**
- At least 4 people with a cognitive disability (e.g., TBI)
- At least 4 people who are age 55 or older
- At least 2 people 35 or under
- At least 3 people of color
- At least 2 women
- At least 3 people who **live in states that are in the Continental District** (MT, WY, CO, ND, SD, NE, KS, OK, TX, MN, or IA)
- At least 2 people who don't have any degree or vocational training after high school 
- At least 2 people who live in a rural or remote area
- At least 2 people who are LGBTQ+

### Screening Questions
1. Have you ever visited a VA benefit office? (These VA facilities can help Veterans and families get benefits; they include Regional Benefit Offices, Veteran Readiness and Employment Offices, VetSuccess On Campus, and VA Regional Benefit Satellite Offices. They are different from VA Medical Centers, clinics, and Vet Centers.)
     1. No, never *(RECRUIT 4)*
     1. Yes, in the past 6 months *(RECRUIT 3)*
     2. Yes, more than 6 months ago *(RECRUIT 4)*

1. What time zone are you located in? *(RECORD)*

1. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these. 
     1. No
     2. Yes *(RECRUIT 4 and RECORD as having a cognitive disability)*

1. Have you downloaded the Zoom app to your smartphone, do you know how to screen share, and do you have a working microphone on your phone?
     1. No *(disqualify)*
     2. Yes *(RECRUIT 11)*

1. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.
     1. No  
     1. Yes *(RECRUIT 2)*


## Timeline

### Prepare
Before recruitment starts, I would like to **request a kickoff call with Perigean** to align on recruitment criteria and terminology for screener questions in the survey and emails that will be sent to Veterans. Alexis Logsdon (alexis.logsdon@a1msolutions.com) and Dave Pickett (dave.pickett@civicactions.com) are available for a kickoff call during any of these times: 
- **Aug 17: 12-5 ET**
- **Aug 18: 10-5 ET**

**Prior to the kickoff call, we would like a link or screenshot of the recruitment survey** for this study so we can review it beforehand.

We will schedule three **pilot tests**:
- Pilot 1: **Aug 23 at 1-2 ET** with barbara@adhocteam.us
- Pilot 2: **Aug 24 at 12-1 ET** with diem.mooney@adhocteam.us
- Pilot 3: **Aug 24 at 4-5 ET** with greg.monahan@adhocteam.us


### Research sessions
* Planned dates of research: **Aug 28 - Sept 5** 

We would like to request that **Perigean calls each participant** to remind them about the session, in addition to emailing them. And please include the session time **in each participant's own time zone** (from a screener question).

### Length of sessions
* Session length: 1 hour
* Buffer time between sessions: 1 hour
* Maximum sessions per day: 3

### Availability

Team Availability | Time Slots (ET)
------------------|--------------
Aug 28, 2023 | 10-11 am, 12-1, 3-4, 5-6 pm 
Aug 29, 2023 | 10-11 am, 12-1, 3-4, 5-6 pm 
Aug 30, 2023 | 10-11 am, 12-1, 3-4, 5-6 pm 
Aug 31, 2023 | ~10-11 am~, 12-1, 3-4, 5-6 pm 
Sept 1, 2023 | 10-11 am, 12-1, 3-4, 5-6 pm  
Sept 5, 2023 | 10-11 am, 12-1, **3-4** pm 

## Team Roles	
Please list the people who will be serving in each role.  	
- Moderator: Alexis Logsdon (alexis.logsdon@a1msolutions.com) 
- Research guide writing and task development: Cindy Merrill / Alexis Logsdon
- Participant recruiting & screening: Perigean	
- Project point of contact: Alexis Logsdon / Cindy Merrill (only until Aug 25)
- Participant(s) for pilot test: barbara@adhocteam.us, diem.mooney@adhocteam.us, and greg.monahan@adhocteam.us
- Note-takers: Perigean	(in github)
- Observers: Jordan Wood (jordan.wood@civicactions.com), Michelle Middaugh (suzanne.middaugh@va.gov), Jane Xiong (jane@cityfriends.tech), Dave Pickett (dave.pickett@civicactions.com). Observers will need to sign up so we can limit the number of observers per session, and the sign up sheet will be shared with Perigean so they can add observers' email addresses to individual sessions.

## Approvals
- Michelle Middaugh (PO) on Aug 14, 2023
- Shannon Ford (VA Research Ops) on Aug 14, 2023
