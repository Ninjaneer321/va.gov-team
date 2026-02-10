---
# Research Plan Metadata
title: "Research Plan for VAOS Team, Phased Rollout UAT Phase 1 - View Appointments, November 2019"
date: 2026-02-10
last_updated: 2026-02-10
team: "VAOS"
product: "VA Online Scheduling"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Legacy mobile online scheduling application (mobile.va.gov) front end has been rebuilt on VA.gov. Need to validate with real users and real data that the rebuilt application works correctly in production before full rollout."
  product_location: "VA.gov health care appointments section"
  user_familiarity: "New product - rebuilding existing mobile application on VA.gov platform"
  product_brief_url: "TBD"

# Research Design
methodology: "UAT"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate that Veterans can view their upcoming appointments and appointment requests"
  - goal_2: "Confirm user flows work correctly in production with real data"
  - goal_3: "Ensure data displays correctly where it is supposed to show up"

research_questions:
  - "Are users getting through the flow?"
  - "Is the data showing up where it is supposed to show up?"
  - "Can Veterans view appointments in a way that is logical and intuitive to them?"

hypotheses:
  - "Veterans are able to view their upcoming appointments and appointment requests in a way that is logical and intuitive to them"

expected_outcomes: "Validate production readiness before broader rollout. Phased approach with Phase 1 (view appointments) followed by Phase 2 (request and schedule appointments)."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "phased UAT with specific authentication requirements"
  
  primary_criteria:
    - "Phase 1: Veterans with UPCOMING health appointments at VA"
    - "Must have MHV Premium account OR authenticated/identity-proofed ID.me account"
    - "Must have logged into VA.gov before the session with their accounts"
    - "Phase 2: Veterans enrolled in VA healthcare, some eligible for community care"
    - "Veterans who want to submit/request appointments"
    - "Ideally, veterans who have used online scheduling before or been seen at VA facility within last 2 years"
    
  secondary_criteria:
    - "Must have account details handy for the session"
    - "Email address used for VA.gov authentication needed prior to session if first-time login"
      
participants:
  veterans: 50
  caregivers: 0
  dependents: 0
  total_recruited: 50
  completed_sessions_goal: 50
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "n/a"
  research_dates: "Phase 1: 2019-11-14 onwards; Phase 2: First week of December 2019"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 30
  buffer_minutes: 15
  max_sessions_per_day: 8
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Migrate VAOS to VA.gov platform"
      - "Enable appointment viewing and scheduling online"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "TBD"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: VAOS"
  - "PRDT: Appointments"
  - "MHV: Appointments"
  - "UAT"
  - "production-testing"
  - "phased-rollout"
  - "MHV-Premium"
  - "ID.me"
  - "view-appointments"
  - "cancel-appointments"
  - "community-care"
---

# Research Plan for VAOS Phased Rollout UAT


## Goals
1. What product & team are you doing this research for?
This is for the relaunch of VAOS on VA.gov. 

2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 
The legacy mobile online scheduling application currently lives in VA's mobile store, mobile.va.gov. The front end of this application has been rebuilt on VA.gov. Key components of the application will be going live in November 2019 - view and cancel appointments, request community care appointments, request VA appointments, and self-schedule appointments. 

3. Research questions: What question(s) do you hope to be able to answer after completing this research? 
- Are users getting through the flow? 
- Is the data showing up where it is supposed to show up? 

4. Hypothesis: What is your hypothesis for this research? 
Veterans are able to view their upcoming appointments & appointment requests in a way that is logical and intuitive to them.

## Method
1.	What method of research are you planning? 
UAT in production

2.	Why this method? How does this methodology help you answer your research questions? 
We need to validate with real users using real data. 

3.	Where are you planning to do your research? *If in person, mention the location, point of contact, arrangements, etc. If online, mention which tool you'll be using (GTM, Join.me, etc.)*
Zoom 

4.	What will you be testing? *(Design mocks, card sort, prototype, page, content, etc.)* 
User flow and data flows 

5.  If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)
Zoom 

## Participants and Recruitment
1.	Participant criteria: What are you looking for in a participant?
(Mention: Number of people, ages, accessibility preferences, geographical diversity, login requirements, VA benefit requirements, familiarity with technology, etc. Keep in mind, the more requirements, the more difficult the recruit, so give ample time to ensure the right participant mix.)

First phase: 25 participants - 
- MUST be Veterans who have UPCOMING HEALTH appointments at VA (and thus have VA health). 
- MUST be Veterans who have a MHV premium account, OR an authenticated / identity-proofed ID.me account. They should have their account details handy for the session, as they will be required to sign in. 
Prior to the sessions, Veterans must log into VA.gov with their ID.me or MHV Premium accounts. 
- Veterans who have logged into VA.gov before the session with their accounts. Please tell participants to go to VA.gov and sign in with their MHV Premium or ID.me accounts prior to the session. If they have never logged into VA.gov before, VA.gov will require them to enter an email address to authenticate. We will need THAT email prior to the session. 


Second phase: 25 participants 
- Veterans who are enrolled in VA healthcare.
- Ideally, some Veterans who know that they are eligible for community care. 
- MUST be Veterans who have a MHV premium account, OR an authenticated ID.me account. 
- Veterans who have logged into VA.gov before the session with their accounts (they may need to do this beforehand). Please tell participants to go to VA.gov and sign in with their MHV Premium or ID.me accounts prior to the session. If they have never logged into VA.gov before, VA.gov will require them to enter an email address to authenticate. We will need THAT email prior to the session. 
- Veterans want to submit / request appointments. 
- Ideally, veterans should have used online scheduling before, or have been seen at a VA healthcare facility within the last 2 years.



2.	What is your recruitment strategy? 
Perigean 

## When? 
1.	Timeline: What dates do you plan to do research? 
(IF you are using the research recruiting contract, please submit 1 FULL week prior to the start of research for remote, 2+ weeks for in person.) 


2.	Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.) 

IN phases - phase 1 is ready 11/14/19
Scheduling Phase 2 for the first week of December 

3. Length of Sessions: How long do you estimate each session will be? (This helps with scheduling & thank you gifts.) e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours) 

15-30 minutes each.

4.	Availability: If applicable, when would you like sessions scheduled? **Please list exact dates and times in EASTERN Standard Time**. Please request enough dates and time slots (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.). Be as flexible as possible, cognizant that many Veterans are only available before and after working times, and live across the U.S.




5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 

## Team Roles
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 
- Moderator:
    - Lauren
    - Ryan
    - Mark (602-741-3706 / mark.greenburg@adhocteam.us, CC mark.greenburg@va.gov)
- Research guide writing and task development (usually but not always same as moderator): Lauren 
- Participant recruiting & screening: Perigean
- Project point of contact: Lauren 
- Participant(s) for pilot test: n/a
- Note-takers: Mark? Jeff Balboni, Kam, etc.  
- Observers: 
the whole group

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

## Resources
- Project Brief: 
*Project brief should live in the appropriate vetsdotgov-team product folder, simply paste a link to it here*

- Discussion Guide
*Discussion guide should live in the appropriate vetsdotgov-team product folder, simply paste a link to it here*

- Notes & Recordings
*Session notes and recordings should live in the appropriate vetsdotgov-team product folder, simply place links to them here.*

- Synthesis
*Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)* 

- Lessons Learned
*Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 

- Read-Out/Results
  - *Read-out presentation should live in the appropriate product repo and folder; paste a link to it here.* 
  - ** Don't forget to add a link to your research folder to the research tracker! [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)
