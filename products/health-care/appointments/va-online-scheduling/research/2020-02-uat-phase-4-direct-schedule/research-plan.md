---
# Research Plan Metadata
title: "Research Plan for VAOS Team, Direct Scheduling UAT, January-February 2020"
date: 2020-01-31
last_updated: 2026-02-10
team: "VAOS Team"
product: "VA Online Scheduling"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The legacy mobile online scheduling application currently lives in VA's mobile store, mobile.va.gov. The front end of this application has been rebuilt on VA.gov. Key components of the application will be going live in 2020 - view and cancel appointments, request community care appointments, request VA appointments, and self-schedule appointments."
  product_location: "VA.gov health care appointments"
  user_familiarity: "Relaunch of VAOS on VA.gov"
  product_brief_url: ""

# Research Design
methodology: "UAT (User Acceptance Testing)"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate that users can successfully complete the direct scheduling flow in production"
  - goal_2: "Verify that data is displaying correctly in the system"
  - goal_3: "Ensure Veterans can self-schedule primary care appointments in a logical and intuitive way"

research_questions:
  - "Are users getting through the flow?"
  - "Is the data showing up where it is supposed to show up?"

hypotheses:
  - "Veterans are able to self-schedule primary care appointments in a way that is logical and intuitive to them."

expected_outcomes: "Validate with real users using real data that the direct scheduling functionality works as intended in production."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment for UAT"
  
  primary_criteria:
    - "MUST be Veterans who are enrolled in VA healthcare"
    - "MUST be Veterans who have received primary care at a VA facility in the past"
    - "MUST be Veterans who need to schedule a Primary Care appointment at their local VA facility"
    - "MUST be Veterans who have a MHV premium account, OR an authenticated/identity-proofed ID.me account"
    
  secondary_criteria:
    - "Veterans who have used online scheduling before"
    - "Veterans who have been seen at a VA healthcare facility within the last 2 years"
    
  screener_questions:
    - question: "Do you need to schedule a Primary Care appointment at your local VA facility?"
      qualifying_response: "Yes"
      
participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 15
  
# Timeline & Sessions
timeline:
  pilot_date: ""
  pilot_participant: "n/a"
  research_dates: "2020-01-31 to 2020-02-07"
  research_review_submission: ""
  
session_details:
  duration_minutes: 45
  buffer_minutes: 30
  max_sessions_per_day: 8
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Enable online scheduling of VA appointments"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Living civilian life"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Previous VAOS UAT phases"
    
tags:
  - "PRDT: VA-online-scheduling"
  - "BNFT: Healthcare"
  - "DSP: Appointments"
  - "appointments"
  - "scheduling"
  - "UAT"
  - "user-acceptance-testing"
  - "direct-schedule"
  - "primary-care"
  - "MHV"
  - "authenticated"
  - "veterans"
  - "VAOS"
  - "health-care"
  - "production-testing"
---

# Research plan for UAT #4 / VAOS DIRECT SCHEDULING - Jen-Feb 2020 


## Goals
1. What product & team are you doing this research for?
This is for the relaunch of VAOS on VA.gov. 

2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 
The legacy mobile online scheduling application currently lives in VA's mobile store, mobile.va.gov. The front end of this application has been rebuilt on VA.gov. Key components of the application will be going live in 2020 - view and cancel appointments, request community care appointments, request VA appointments, and self-schedule appointments. 

3. Research questions: What question(s) do you hope to be able to answer after completing this research? 
- Are users getting through the flow? 
- Is the data showing up where it is supposed to show up? 

4. Hypothesis: What is your hypothesis for this research? 
Veterans are able to self-schedule primary care appointments in a way that is logical and intuitive to them.

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

~15 participants
- MUST be Veterans who are enrolled in VA healthcare.
- MUST be Veterans who have received primary care at a VA facility in the past
- MUST be Veterans who need to schedule a Primary Care appointment at their local VA facility
- MUST be Veterans who have a MHV premium account, OR an authenticated / identity-proofed ID.me account. They should have their account details handy for the session, as they will be required to sign in. 
Prior to the sessions, Veterans must log into VA.gov with their ID.me or MHV Premium accounts. 
- Veterans who have logged into VA.gov before the session with their accounts. Please tell participants to go to VA.gov and sign in with their MHV Premium or ID.me accounts prior to the session. If they have never logged into VA.gov before, VA.gov will require them to enter an email address to authenticate. **We will need Perigean to provide THAT email prior to the session.** 
- Ideally, veterans should have used online scheduling before, or have been seen at a VA healthcare facility within the last 2 years.

2.	What is your recruitment strategy? 
Perigean 

## When? 
1.	Timeline: What dates do you plan to do research? 
(IF you are using the research recruiting contract, please submit 1 FULL week prior to the start of research for remote, 2+ weeks for in person.) 
- sessions to ideally start late January (week of 27th, realistically maybe the 31st) and going through the following week.

2.	Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.) 
- It's ready now.

Note: sessions should be 45 minutes each, at least 30 mins between sessions 

4.	Availability: If applicable, when would you like sessions scheduled? **Please list exact dates and times in EASTERN Standard Time**. Please request enough dates and time slots (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.). Be as flexible as possible, cognizant that many Veterans are only available before and after working times, and live across the U.S.

10am-1pm, 2pm-6pm, Eastern 1/31 - 2/7

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
