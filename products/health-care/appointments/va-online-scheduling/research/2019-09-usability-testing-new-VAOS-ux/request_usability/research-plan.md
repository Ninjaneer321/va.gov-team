---
# Research Plan Metadata
title: "Research Plan for VAOS Request Flows: Community Care and VA, September 2019"
date: 2026-02-10
last_updated: 2026-02-10
team: "VA Online Scheduling"
product: "VA Online Scheduling (VAOS)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "VAOS needs improved UX/UI and integration of drive time eligibility. Two years after USDS improvements, the tool requires enhancements for discoverability, accessibility, and usability, especially with new Community Care flows under Mission Act and upcoming Cerner EHR migration."
  product_location: "VA.gov authenticated health tools - VA Online Scheduling (migrating from mobile portfolio)"
  user_familiarity: "Iteration with significant new features (Community Care, drive time eligibility)"
  product_brief_url: "products/health-care/appointments/va-online-scheduling/"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Evaluate strategy of only showing Veterans options they have access to"
  - goal_2: "Test new Community Care flows and type of care selection"
  - goal_3: "Identify content needs for decision support throughout scheduling process"

research_questions:
  - "How does our strategy of only showing Veterans options that they have work within VAOS work w/r/t user flow?"
  - "Are users aware of VAOS?"
  - "What is the user's goal or mental process for scheduling an appointment?"
  - "Do the new user interface components introduce any pain points or confusion?"
  - "What content is needed to facilitate decision support at key moments in the appointment scheduling process?"

hypotheses:
  - "Presenting Veterans with options that they do not have and dead ends is a terrible user experience. Rerouting the flows to avoid dead ends and trying to avoid presenting Veterans with options they do not have will improve the user experience, confidence in the application, and satisfaction with this tool"
  - "Veterans may still have limited exposure to VAOS and may not know all of the things they can do in it. Some of the suggested improvements to the user flows may help Veterans understand their options better"
  - "Provider and location are the primary drivers for an appointment and may be the primary drivers for scheduling online. Type of care is a VA construct and may require additional support"
  - "The confirm address and choose VA location flow as it stands right now will introduce pain points"
  - "Ryan's new proposal for the date and time selection tool will be more intuitive than the pick three dates and times option now"
  - "By introducing community care where we have (after type of care selection) we are reducing complexity"
  - "The phrase pending makes more sense than requested appointment, and Veterans understand that further action is needed before this is secure"
  - "Content is needed to improve comprehension and context throughout the application"

expected_outcomes: "Get feedback on new UI options and flows using mock data before building too much, ensuring Community Care integration works smoothly"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment"
  
  primary_criteria:
    - "Veterans who currently have VA healthcare"
    - "Participants who have some exposure to community care"
    - "Veterans who have used the online scheduling tool before (ideally)"
    
  secondary_criteria:
    - "Mix of demographics and geographic locations"
    
  screener_questions:
    - question: "Do you currently have VA healthcare?"
      qualifying_response: "Yes"
    - question: "Have you used Community Care services?"
      qualifying_response: "Preferred but not required"
      
participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2019-08-26"
  pilot_participant: "Team member"
  research_dates: "2019-09-09 to 2019-09-13"
  research_review_submission: "2019-09-06"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 10
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Expand access to Community Care scheduling"
  - objective: "Mission Act implementation"
    key_results:
      - "Successful Community Care integration into VAOS"
      
veteran_journey_phases:
  - "Living Civilian Life"
  - "Taking Care of Myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "products/health-care/appointments/va-online-scheduling/research/"
    
tags:
  - AUD: Veterans
  - BNFT: Healthcare
  - PRDT: VAOS
  - MHV: Appointments
  - DSP: Appointments
  - usability-testing
  - remote-moderated
  - community-care
  - Mission-Act
  - appointment-requests
  - drive-time-eligibility
  - type-of-care
---

# Research Plan for VAOS Request Flows: Community Care and VA, Sept 9-13

## Goals

1. What product & team are you doing this research for? 
This is for the VA Online scheduling tool. We are proposing a number of user experience and user interface improvements. We are also proposing solutions to incorporate drive time eligibility. 

2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 

Two years ago, 5 members of the USDS team worked on improving discoverability, accessibility, and usability of VAOS. This tool, which currently lives in the mobile portfolio, is an essential access point to requesting appointments online - both at the VA and for Community Care, as of the 6/6 release of the Mission Act. This will also be an important tool as VA migrates its EHR to Cerner, as it has the potential to be the access point for all scheduling for Veterans. 

In this usability testing, we want to see how Veterans respond to the new Community Care flows, the type of care flow, and some of the user experience/user interface changes. In future sessions we will test out the new provider flow as well. 

3. Research questions:  

- RQ1: How does our strategy of "only showing Veterans options that they have" work within VAOS work w/r/t user flow? 
- RQ2. Are users aware of VAOS?
- RQ3: What is the user's "goal" or "mental process" for scheduling an appointment? 
- RQ4: Do the new user interface components introduce any pain points or confusion? 
- RQ5: What content is needed to facilitate decision support at key moments in the appointment scheduling process?  

4. Hypotheses: 
-  Presenting Veterans with options that they do not have and dead ends is a terrible user experience. Rerouting the flows to avoid dead ends and trying to avoid presenting Veterans with options they do not have will improve the user experience, confidence in the application, and satisfaction with this tool. 
- Veterans may still have limited exposure to VAOS and may not know all of the things they can do in it. Some of the suggested improvements to the user flows may help Veterans understand their options better.
- "Provider" and "location" are the primary drivers for an appointment and may be the primary drivers for scheduling online. "Type of care" is a VA construct and may require additional support. 
- The confirm address and choose VA location flow as it stands right now will introduce pain points. 
- Ryan's new proposal for the date and time selection tool will be more intuitive than the pick three dates and times option now. 
- By introducing community care where we have (after type of care selection) we are reducing complexity.
- The phrase "pending" makes more sense than "requested" appointment, and Veterans understand that further action is needed before this is secure. 
- Content is needed to improve comprehension and context t/o the application. 



## Method

1. What method of research are you planning? 
Usability testing with high-fidelity prototypes; Remote moderated

2. Why this method? How does this methodology help you answer your research questions? 
We want to expose users to a bunch of new UI options and get feedback using mock data and mock flows. 

3. Where are you planning to do your research? 
Online using GoToMeeting

4. What will you be testing?
InVision prototype

## Participants and Recruitment

1. Participant criteria: What are you looking for in a participant?
- 10 people 
- Veterans MUST have VA healthcare.
- Participants who have some exposure to community care
- Ideally, Veterans have used the online scheduling tool before. 

2. What is your recruitment strategy? 
Perigean recruiting contact

## When? 

1. Timeline: What dates do you plan to do research? 
September 9-13, 2019

2. Prepare: When will the thing you are testing be ready? 
It is ready 

3. Length of Sessions: How long do you estimate each session will be? 
1 Hour

4. Availability: If applicable, when would you like sessions scheduled?
8AM-8PM



5. Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 
August 26–27


## Team Roles

Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers.** 

- Moderator: Lauren Alexanderson, lauren.alexanderson@va.gov, 7813663643
- Research guide writing and task development (usually but not always same as moderator): lauren Alexanderson
- Participant recruiting & screening: Brian Moon & Shannon Bildstein
- Project point of contact: 
- Participant(s) for pilot test:
- Note-takers:
Perigean
- Observers:
Ryan Thurlwell
Carolyn Williams
Mark Greenburg
Peggy Gannon
Dave Mazik
Alastair Dawson
Jeff Balboni
Judy Mercado
Stephen Barrs
Steve Eaton
Mike Ramirez
Kam Karshenas
Narin Ratana 
Tony Williams
Nathan Dister 
Jennie McGibney 
Julia Elman 

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

## Resources

- Project Brief: 
  *Project brief should live in the appropriate vetsdotgov-team product folder, simply paste a link to it here*
- Discussion Guide
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/research/aug19-usability-testing-new-ux/convo-guide-VAOS.md

- Synthesis
  *Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)* 
- Lessons Learned
  *Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 
- Read-Out/Results
  - *Read-out presentation should live in the appropriate product repo and folder; paste a link to it here.* 
  - ** Don't forget to add a link to your research folder to the [research tracker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)
