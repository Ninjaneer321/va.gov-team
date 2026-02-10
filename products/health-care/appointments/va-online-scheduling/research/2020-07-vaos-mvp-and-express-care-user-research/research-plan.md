---
# Research Plan Metadata
title: "Research Plan for VAOS Team, VAOS MVP and Express Care User Research, June-July 2020"
date: 2020-07-02
last_updated: 2026-02-10
team: "VAOS Team"
product: "VA Online Scheduling - MVP and Express Care"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "With VAOSR MVP in prod and live since March 2020, it's time to perform another round of user research and testing with Veterans. This research should focus on areas in the experience that we know (through analytics and user feedback) are confusing or need iteration. Additionally, we want to collect general feedback and requests from Veterans for new VAOSR considerations in the future."
  product_location: "https://www.va.gov/health-care/schedule-view-va-appointments/"
  user_familiarity: "Iteration of VAOS MVP in production"
  product_brief_url: ""

# Research Design
methodology: "remote moderated usability research and usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand Veterans' mental model about scheduling online appointments"
  - goal_2: "Directly observe how Veterans are interacting with the VAOSR MVP"
  - goal_3: "Identify areas of confusion or high dropoff in the scheduling flow"
  - goal_4: "Understand expectations for telehealth/video appointments and Express Care"

research_questions:
  - "Do Veterans understand the login and tool instructions?"
  - "Do Veterans understand what they see on the appointments list? Is the appointments list useful to veterans?"
  - "Does the past appointments list (new feature) meet veterans' needs?"
  - "Are veterans able to cancel appointments? Are veterans having issues when trying to make cancellations? Is the experience of cancelling an appointment what they expect?"
  - "What's impacting type of care dropoff? Does type of care offerings meet veterans' expectation for online scheduling?"
  - "What's impacting the high dropoff rate of veterans on the Facilities page?"
  - "Why are we seeing 10% dropoff rate on Select a time/date calendar page? Is there UX/interaction issues or confusion?"
  - "What are veterans expectations for telehealth/video appointments through VAOSR? What are veterans issues for telehealth/video appointments through VAOSR?"
  - "Do Veterans hit certain roadblocks in their scheduling experience in new VAOSR? What are those roadblocks?"
  - "What, if any, messaging options do veterans expect to have available to them while scheduling an appointment online? Who do veterans expect to be able to message with in this scenario?"

hypotheses:
  - "DEPO has repeatedly heard from Veteran participants that it is difficult to complete forms online due to certain conditions, which contributes to frustration when trying to complete tasks such as online scheduling"
  - "Users have information overload when reading information on Schedule and View VA Appointments and the scheduling tool landing page"
  - "Users have information overload when viewing their VA appointments list page"
  - "Users have information overload on VA schedule an appointment page"
  - "Users have information overload/confusion as they are going through the flow to schedule an appointment"
  - "Users are looking for, but can't find a specific appointment type, either because it is not listed/supported by online scheduling, at that location, or the user has a different name for the appointment type than what is listed"
  - "Users are looking for a specific location, but can't find the specific location they have in mind, either because the location isn't listed or it is listed using a different name/nested within a category they are unfamiliar with"
  - "Users are looking for a specific provider, but can't find the specific provider they have in mind"
  - "Users are confused by the different look/feel, if this is new to them. Easily give up, rather than trying to figure it out"

expected_outcomes: "Identify specific areas for improvement in VAOS MVP based on user feedback and observed behavior patterns. Validate Express Care prototype concepts."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment"
  
  primary_criteria:
    - "Have an MHV Premium, DS Logon, or ID.me identity-proofed account"
    - "Be enrolled in VA healthcare"
    - "Be registered at one or more VA healthcare system that is still using VistA to manage schedules"
    
  secondary_criteria:
    - "Veterans with recent scheduling experience"
    
  screener_questions:
    - question: "Are you enrolled in VA healthcare?"
      qualifying_response: "Yes"
      
participants:
  veterans: 18
  caregivers: 0
  dependents: 0
  total_recruited: 18
  completed_sessions_goal: 15
  
# Timeline & Sessions
timeline:
  pilot_date: "2020-07-01"
  pilot_participant: "Melissa Schaff"
  research_dates: "2020-07-02 to 2020-07-17"
  research_review_submission: ""
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 6
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Reduce friction in appointment scheduling"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Living civilian life"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/july-2020-user-research/vaosr-june-conversation-guide.md"
    
tags:
  - "PRDT: VA-online-scheduling"
  - "BNFT: Healthcare"
  - "DSP: Appointments"
  - "appointments"
  - "scheduling"
  - "usability-testing"
  - "MVP"
  - "express-care"
  - "appointments-list"
  - "cancel-appointments"
  - "type-of-care"
  - "facilities"
  - "calendar"
  - "telehealth"
  - "authenticated"
  - "veterans"
  - "VAOS"
  - "health-care"
  - "user-research"
---

# Research Plan for - VAOS Team on VA.gov, VAOSR, June & July 2020

As a designer I need to create a research plan to share with my team.	(This should be filled out and maintained by the designer on the team & can be cross-linked and referenced in any issues.) 	

## Goals	

1. What product & team are you doing this research for?	
   - VAOSR on VA.gov
2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 	
   With VAOSR MVP in prod and live since March 2020, it's time to perform another round of user research and testing with Veterans.
   This research should focus on areas in the experience that we know (through analytics and user feedback) are confusing or need iteration. Additionally, we want to collect general feedback and requests from Veterans for new VAOSR considerations in the future.
3. Research questions: What question(s) do you hope to be able to answer after completing this research? 
   1. Do Veterans understand the login and tool instructions?
   2. Do Veterans understand what they see on the appointments list? Is the appointments list useful to veterans? 
   3. Does the "past appointments" list (new feature) meet veterans' needs?
   4. Are veterans able to cancel appointments? Are veterans having issues when trying to make cancellations? Is the experience of cancelling an appointment what they expect?
   5. What's impacting "type of care" dropoff?  Does "type of care" offerings meet veterans' expectation for online scheduling?
   6. What's impacting the high dropoff rate of veterans on the "Facilities" page?
   7. Why are we seeing 10% dropoff rate on 'Select a time/date' calendar page? Is there UX/interaction issues or confusion?
   8. What are veterans expectations for telehealth/video appointments through VAOSR? What are veterans issues for telehealth/video appointments through VAOSR?
   9. Do Veterans hit certain roadblocks in their scheduling experience in new VAOSR? What are those roadblocks?
   10. What, if any, messaging options do veterans expect to have available to them while scheduling an appointment online? Who do veterans expect to be able to message with in this scenario?
4. Hypothesis: What is your hypothesis for this research? 	
   - *DEPO has repeatedly heard from Veteran participants that it is difficult to complete forms online due to certain conditions, which contributes to frustration when trying to complete tasks such as online scheduling*
   - Users have information overload when reading information on [Schedule and View VA Apppointments](https://www.va.gov/health-care/schedule-view-va-appointments/) and the scheduling tool landing page
   - Users have information overload when viewing their VA appointments list page
   - Users have information overload on VA schedule an appointment page
   - Users have information overload/confusion as they are going through the flow to schedule an appointment
     - Users are looking for, but can't find a specific appointment type, either because it is not listed/supported by online scheduling, at that location, or the user has a different name for the appointment type than what is listed
     - Users are looking for a specific location, but can't find the specific location they have in mind, either because the location isn't listed or it is listed using a different name/nested within a category they are unfamiliar with
     - Users are looking for a specific provider, but can't find the specific provider they have in mind
   - Users are confused by the different look/feel, if this is new to them. Easily give up, rather than trying to figure it out 	

## Method	
1.	What method of research are you planning? 	
   - Remote moderated usability research and usability testing mid-fidelity prototypes
2.	Why this method? How does this methodology help you answer your research questions? 
   - We need to learn from Veterans their mental model about scheduling online appointments
   - We need to directly observe how Veterans are interacting with the VAOSR MVP
3.	Where are you planning to do your research? *If in person, mention the location, point of contact, arrangements, etc. If online, mention which tool you'll be using (GTM, Join.me, etc.)*	
   - Zoom
4.	What will you be testing? *(Design mocks, card sort, prototype, page, content, etc.)* 
   - VAOSR MVP: https://www.va.gov/health-care/schedule-view-va-appointments/
   - Express Care Prototype: https://vsateams.invisionapp.com/share/U9XQMY2GS5V#/screens
5.	If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)	
   - Zoom

## Participants and Recruitment	
1. Participant criteria: What are you looking for in a participant?	
   - 15-20 participants	
   - Must meet all of the following criteria:
      - Have an MHV Premium, DS Logon, or ID.me identity-proofed account; and
      - Be enrolled in VA healthcare; and
      - Be registered at one or more VA healthcare system that is still using VistA to manage schedules
2. What is your recruitment strategy? 	
   Perigean	

## When? 	
1.	Timeline: What dates do you plan to do research?
   ASAP: would like to begin as early as 7/1 or 7/2 for test session
(IF you are using the research recruiting contract, please submit 1 FULL week prior to the start of research for remote, 2+ weeks for in person.) 	
2.	Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.) 	
   Tuesday, 6/30/2020
3. Length of Sessions: How long do you estimate each session will be? (This helps with scheduling & thank you gifts.) e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours) 
   60 minutes (1 hour)
4.	Availability: If applicable, when would you like sessions scheduled? **Please list exact dates and times in EASTERN Standard Time**. Please request enough dates and time slots (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.). Be as flexible as possible, cognizant that many Veterans are only available before and after working times, and live across the U.S.
</br>
   Thursday, 7/2</br>
      1:00 PM - 6:00 PM EST</br>
   Monday, 7/6</br> 
      1:00 PM - 4:00 PM</br> 
   Tuesday, 7/7</br> 
      1:00 PM - 3:00 PM</br> 
   Wednesday, 7/8</br>
      9:00 AM - 5:00 PM EST</br>
   Thursday, 7/9</br>
      1:00 PM - 5:00 PM EST</br>
   Friday, 7/10</br>
      11:00 AM - 6:00 PM EST</br>
   Monday, 7/13</br> 
      1:00 PM - 4:00 PM</br> 
   Wednesday, 7/15</br>
      9:00 AM - 5:00 PM EST</br>
   Thursday, 7/16</br>
      9:00 AM - 5:00 PM EST</br>
   Friday, 7/17</br>
      11:00 AM - 6:00 PM EST</br>
5.Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?</br>
Wednesday, 7/1/2020</br>
	9:00 AM - 12:30 PM EST</br>
	2:00 PM - 5:00 PM EST</br>
Thursday, 7/2</br>
	1:00 PM - 6:00 PM EST

## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Melissa Schaff ([melissa.j.schaff2@omb.eop.gov](mailto:melissa.j.schaff@omb.eop.gov))
- Research guide writing and task development (usually but not always same as moderator): Melissa Schaff ([melissa.j.schaff2@omb.eop.gov](mailto:melissa.j.schaff@omb.eop.gov))
- Participant recruiting & screening: Perigean 
- Project point of contact: Melissa Schaff ([melissa.j.schaff2@omb.eop.gov](mailto:melissa.j.schaff@omb.eop.gov))
- Participant(s) for pilot test: Melissa Schaff ([melissa.j.schaff2@omb.eop.gov](mailto:melissa.j.schaff@omb.eop.gov))
- Note-takers: Perigean
- Observers: 
  Melissa Schaff ([melissa.j.schaff2@omb.eop.gov](mailto:melissa.j.schaff@omb.eop.gov))
  Lauren Alexanderson ([lauren.alexanderson@va.gov](mailto:lauren.alexanderson@va.gov))
  Ryan Thurwell ([ryan.thurlwell@va.gov](mailto:ryan.thurlwell@va.gov))
  Lenae Storey ([lenae.storey@adhocteam.us](mailto:lenae.storey@adhocteam.us))

## Resources	
- Project Brief: 	
  *Project brief should live in the appropriate va.gov-team product folder, simply paste a link to it here*	
- Convo Guide	https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/july-2020-user-research/vaosr-june-conversation-guide.md
  *Discussion guide should live in the appropriate va.gov-team product folder, simply paste a link to it here*	
- Synthesis	
  *Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)* 	
- Lessons Learned	
  *Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 	
- Read-Out/Results	
  - *Read-out presentation should live in the appropriate product repo and folder; paste a link to it here.* 	
  - ** Don't forget to add a link to your research folder to the research tracker! [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)
