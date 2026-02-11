---
# Research Plan Metadata
title: "Research Plan for VAOS Team, UAT Phase 3 Community Care, January 2020"
date: 2020-01-01
last_updated: 2026-02-10
team: "VA Online Scheduling"
product: "VA Online Scheduling (VAOS)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Validate that Veterans can successfully schedule community care requests and make direct appointments through the relaunched VAOS on VA.gov using real data in production."
  product_location: "VA.gov VAOS application"
  user_familiarity: "Relaunch - VAOS front end rebuilt from legacy mobile.va.gov application"
  product_brief_url: ""

# Research Design
methodology: "user acceptance testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate that Veterans can successfully complete the scheduling flow in production"
  - goal_2: "Verify that data is displaying correctly throughout the application"
  - goal_3: "Test both community care requests and direct appointment scheduling functionality"

research_questions:
  - "Are users getting through the flow?"
  - "Is the data showing up where it is supposed to show up?"

hypotheses:
  - "Veterans are able to schedule community care requests and make direct appointments in a way that is logical and intuitive to them."

expected_outcomes: "Validation that VAOS functions correctly in production with real Veteran data before full launch"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Purposive sampling for UAT with specific eligibility requirements"
  
  primary_criteria:
    - "Must be Veterans enrolled in VA healthcare"
    - "Must have upcoming health appointments at VA"
    - "Must know they are eligible for community care/CHOICE"
    - "Must have MHV Premium account OR authenticated ID.me account"
    - "Must want to submit or request an appointment"
    - "Must have logged into VA.gov with their accounts prior to session"
    
  secondary_criteria:
    - "Ideally Veterans who have used online scheduling before"
    - "Ideally Veterans seen at VA healthcare facility within last 2 years"
    
  screener_questions:
    - question: "Do you have upcoming health appointments at VA and are enrolled in VA healthcare?"
      qualifying_response: "Yes"
    - question: "Do you know if you are eligible for community care/CHOICE?"
      qualifying_response: "Yes"
    - question: "Do you have a MHV Premium account or authenticated ID.me account?"
      qualifying_response: "Yes"
      
participants:
  veterans: 30
  caregivers: 0
  dependents: 0
  total_recruited: 30
  completed_sessions_goal: 30
  
# Timeline & Sessions
timeline:
  pilot_date: ""
  pilot_participant: ""
  research_dates: "2020-11-16 to 2020-11-23"
  research_review_submission: ""
  
session_details:
  duration_minutes: 45
  buffer_minutes: 30
  max_sessions_per_day: 8
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Increase online appointment scheduling adoption"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Managing my declining health"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "VAOS UAT Phase 1"
    - "VAOS UAT Phase 2"
    
tags:
  - "VAOS"
  - "appointments"
  - "user-acceptance-testing"
  - "UAT"
  - "veterans"
  - "community-care"
  - "healthcare"
  - "scheduling"
  - "authenticated-experience"
  - "production-testing"
  - "validation"
  - "MHV"
  - "direct-scheduling"
---

# Research plan for UAT - January 2020 


## Goals
1. What product & team are you doing this research for?
This is for the relaunch of VAOS on VA.gov. 

2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 
The legacy mobile online scheduling application currently lives in VA's mobile store, mobile.va.gov. The front end of this application has been rebuilt on VA.gov. Key components of the application will be going live in 2020 - view and cancel appointments, request community care appointments, request VA appointments, and self-schedule appointments. 

3. Research questions: What question(s) do you hope to be able to answer after completing this research? 
- Are users getting through the flow? 
- Is the data showing up where it is supposed to show up? 

4. Hypothesis: What is your hypothesis for this research? 
Veterans are able to schedule community care requests and make direct appointments in a way that is logical and intuitive to them.

## Method
1.	What method of research are you planning? 
UAT in production

2.	Why this method? How does this methodology help you answer your research questions? 
We need to validate with real users using real data. 

3.	Where are you planning to do your research? *If in person, mention the location, point of contact, arrangements, etc. If online, mention which tool you'll be using (GTM, Join.me, etc.)*
GoToMeeting 

4.	What will you be testing? *(Design mocks, card sort, prototype, page, content, etc.)* 
User flow and data flows 

5.  If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)
GoToMeeting  

## Participants and Recruitment
1.	Participant criteria: What are you looking for in a participant?
(Mention: Number of people, ages, accessibility preferences, geographical diversity, login requirements, VA benefit requirements, familiarity with technology, etc. Keep in mind, the more requirements, the more difficult the recruit, so give ample time to ensure the right participant mix.)

First phase: 15 participants - 
- MUST be Veterans who have UPCOMING HEALTH appointments at VA (and thus have VA health). 
- MUST be Veterans who know they are eligible for community care/CHOICE. 
- MUST be Veterans who have a MHV premium account, OR an authenticated / identity-proofed ID.me account. They should have their account details handy for the session, as they will be required to sign in. 
Prior to the sessions, Veterans must log into VA.gov with their ID.me or MHV Premium accounts. 
- Veterans who have logged into VA.gov before the session with their accounts. Please tell participants to go to VA.gov and sign in with their MHV Premium or ID.me accounts prior to the session. If they have never logged into VA.gov before, VA.gov will require them to enter an email address to authenticate. **We will need Perigean to provide THAT email prior to the session.** 
- MUST be Veterans who want to submit or request an appointment. 
- Ideally, veterans should have used online scheduling before, or have been seen at a VA healthcare facility within the last 2 years.


Second phase: 15 participants 
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

45 minutes each, at least 30 mins between sessions 

4.	Availability: If applicable, when would you like sessions scheduled? **Please list exact dates and times in EASTERN Standard Time**. Please request enough dates and time slots (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.). Be as flexible as possible, cognizant that many Veterans are only available before and after working times, and live across the U.S.

9am-12pm, 1pm-4pm, 5pm-6pm Eastern 11/16, 11/17, 11/21, 11/22, 11/23


5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 

## Team Roles
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 
- Moderator:
    - Mark (602-741-3706 / mark.greenburg@adhocteam.us, CC mark.greenburg@va.gov)
- Research guide writing and task development (usually but not always same as moderator): Lauren 
- Participant recruiting & screening: Perigean
- Project point of contact: Lauren 
- Participant(s) for pilot test: n/a
- Note-takers: Jeff Balboni, Kam, etc.  
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
