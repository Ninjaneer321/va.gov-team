---
# Research Plan Metadata
title: "Research Plan for VAOS Self-Schedule Usability Testing, September 2019"
date: 2026-02-10
last_updated: 2026-02-10
team: "VA Online Scheduling"
product: "VA Online Scheduling (VAOS)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Self-scheduling into VA health appointments is challenging because clinics are not standardized across facilities. Clinic names are backend constructs not intended for patients, creating confusion when Veterans face 40+ clinic options. Veterans may select incorrect clinics based solely on schedule availability rather than clinical appropriateness."
  product_location: "VA.gov authenticated health tools - VA Online Scheduling"
  user_familiarity: "Rebuild/iteration of existing VAOS tool"
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
  - goal_1: "Validate choice-architecture approach of limiting self-schedule to previously-used clinics"
  - goal_2: "Evaluate new calendar UI and time selection tool usability"
  - goal_3: "Determine optimal appointment details and cancelled appointment display preferences"

research_questions:
  - "Are Veterans receptive to a choice-architecture approach of limiting self-schedule only to a clinic where a user last booked (within a set time frame for a type of care)?"
  - "How do Veterans make a choice about self-scheduling when faced with a complex list of clinics?"
  - "Is the date and time selection tool intuitive?"
  - "How much detail (which data fields) are useful to a Veteran w/r/t their appointments?"
  - "Do users find the messaging field helpful?"
  - "Is the cancelling process intuitive?"
  - "Do Veterans want to see cancelled appointments inline with other confirmed/pending appointments, or separate?"
  - "What content is needed to facilitate decision support at key moments in the appointment scheduling process?"

hypotheses:
  - "Veterans will welcome the option of having the clinic where they previously had an appointment surfaced to them for easy self-scheduling"
  - "Veterans will not be able to parse a complex list of clinics and will either quit the application or select a clinic at random that corresponds to their schedule"
  - "The new calendar-UI and time selection tool facilitates self-scheduling"
  - "Veterans need guidance on what to write in the message / reason for appointment field"
  - "Veterans will want to see cancelled appointments in a separate list for up to 90 days post appointment"
  - "For confirmed appointments, Veterans will want to see date and time of appointment, type of care, team, and location"

expected_outcomes: "Validate design recommendations before building out self-scheduling functionality, ensuring clinic selection doesn't create user confusion or incorrect appointments"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment"
  
  primary_criteria:
    - "Veterans who currently use VA health care"
    - "Veterans who have experience with the VA Online Scheduling tool"
    - "Veterans who can use iPad or Laptop with GoToMeeting enabled"
    
  secondary_criteria:
    - "Mix of demographics and locations"
    
  screener_questions:
    - question: "Do you currently use VA health care?"
      qualifying_response: "Yes"
    - question: "Have you used the VA Online Scheduling tool before?"
      qualifying_response: "Yes"
      
participants:
  veterans: 8
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2019-09-20"
  pilot_participant: "Team member"
  research_dates: "2019-09-25 to 2019-09-30"
  research_review_submission: "2019-09-20"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 8
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Increase online appointment scheduling"
  - objective: "Improve user experience of VA health tools"
    key_results:
      - "Reduce confusion in self-scheduling process"
      
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
  - self-scheduling
  - clinic-selection
  - calendar-UI
  - appointment-management
---

# Research Plan for VAOS Self-Schedule Usability

## Goals

1. What product & team are you doing this research for?

   This product is the VA Online Scheduing rebuild on VA.gov. For this study, we are specifically looking at the self-schedule flow within VA.gov and the view of confirmed/pending/cancelled appointments. 

2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 

   Self-scheduling is a challenge across both VA and DOD ecosystems because of "clinics." Clinics are a framework for scheduling appointments on the backend of many health systems. A single provider can have several different "clinics" depending on their schedules. For example, a primary care provider who sees patients at Baltimore on Mondays and DC on Wednesdays, does some Telehealth video visit appts, and distinguishes appts between routine care and new issues could have 5 different clinics. Clinics are established at a VA health system level, and there is very little standardization in how the clincis are set up, which clinics are available for self-scheduling, or how clinics are named from one facility to another. The clinic names were never intended to be visible to patients, so the names are nonsensical and cannot be easily parsed for useful information to use to make decisions about where to self-schedule an appointment. A Veteran may be shown 40 different clinics, and previous research showed that Veterans may self-schedule into an incorrect clinic to meet their needs based on appointment availability. ("I'll just pick one that works for my schedule.") Until a patient-friendly nomenclature is enforced across the VA, self-scheduling into clinics will remain a challenge. 

   This VAOS team hoped to avoid exposing the clinic names to Veterans by leveraging stop codes and other inputs (reason for appointment, type of care, etc.). For MVP, this is not possible. The team is recommending an approach of showing the Veteran the last-booked clinic by type of care to ameliorate the choice architecture. 

   The team also wants to investigate what details related to appointments are useful to Veterans in reviewing confirmed, pending, and cancelled appointments. 

3. Research questions: What question(s) do you hope to be able to answer after completing this research? 
   - Are Veterans receptive to a choice-architecture approach of limiting self-schedule only to a clinic where a user last booked (within a set time frame for a type of care)? 
   - How do Veterans make a choice about self-scheduling when faced with a complex list of clinics? 
   - Is the date and time selection tool intuitive? 
   - How much detail (which data fields) are useful to a Veteran w/r/t their appointments? 
   - Do Veterans want to see cancelled appointments in a VAOS list? Do they want those lists inline with other confirmed/pending appointments, or in a separate cancellation list? 
   -  What content is needed to facilitate decision support at key moments in the appointment scheduling process? 
   
   - Are Veterans receptive to a choice-architecture approach of limiting self-schedule only to a clinic where a user last booked (within a set time frame for a type of care)?
- How do Veterans make a choice about self-scheduling when faced with a complex list of clinics?
- Is the date and time selection tool intuitive?
- How much detail (which data fields) are useful to a Veteran w/r/t their appointments?
- Do users find the messaging field helpful? 
- Is the cancelling process intuitive? 
- Do Veterans want to see cancelled appointments inline with other confirmed/pending appointments, or separate?
- What content is needed to facilitate decision support at key moments in the appointment scheduling process?

4. Hypothesis: What is your hypothesis for this research? 
   - Veterans will welcome the option of having the clinic where they previously had an appointment surfaced to them for easy self-scheduling. 
   - Veterans will not be able to parse a complex list of clinics and will either quit the application or select a clinic at random that corresponds to their schedule. 
   - The new calendar-UI and time selection tool facilitates self-scheduling. 
   - Veterans need guidance on what to write in the message / reason for appointment field. 
   - Veterans will want to see cancelled appointments in a separate list for up to 90 days post appointment. 
   - For confirmed appointments, Veterans will want to see date and time of appointment, type of care, team, and location. 


## Method

1. What method of research are you planning? Remote moderated usability testing with high-fidelity prototypes

- Why this method? How does this methodology help you answer your research questions? 

  We need to validate our design recommendations before we build too much of this. 

2. Where are you planning to do your research? *If in person, mention the location, point of contact, arrangements, etc. If online, mention which tool you'll be using (GTM, Join.me, etc.)*

   GoToMeeting 

3. What will you be testing? *(Design mocks, card sort, prototype, page, content, etc.)* 

   InVision prototype 

4. If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)

   GoToMeeting 

## Participants and Recruitment

1. Participant criteria: What are you looking for in a participant?

   - Veterans who CURRENTLY USE VA health care. 

   - Veterans who have experience with the VA Online Scheduling tool. 
   - Veterans who can be on an iPad or Laptop with GoToMeeting enabled. 

2. What is your recruitment strategy? 
   Perigean. 

## When? 

1. Timeline: What dates do you plan to do research? 
   September 25, 26, 27, 30,

2. Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.) 

   Friday September 20

3. Length of Sessions: How long do you estimate each session will be? (This helps with scheduling & thank you gifts.) e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours) 

   1 hour

4. Availability: If applicable, when would you like sessions scheduled? **Please list exact dates and times in EASTERN Standard Time**. Please request enough dates and time slots (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.). Be as flexible as possible, cognizant that many Veterans are only available before and after working times, and live across the U.S.

   Wednesday September 25, 8-8

   Thurs Sept 26, 8am-3pm; 6pm-8pm

   Friday September 27, 8am-7pm 

   Monday September 30, 8am-4pm 

   

## Team Roles

Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 

- Moderator: Lauren Alexanderson and/or Alex Taylor
- Research guide writing and task development (usually but not always same as moderator):
- Participant recruiting & screening: Perigean
- Project point of contact: Lauren Alexanderson
- Participant(s) for pilot test:
- Note-takers: Perigean
- Observers:
  - lauren.alexanderson@va.gov
  - ryan.thurlwell@va.gov
  - alex@adhocteam.us
  - erik.hopkins@va.gov
  - steve.eaton@va.gov
  - alastair@adhocteam.us
  - narin@adhocteam.us
  - mark.greenburg@adhocteam.us
  - peggy@thesocompany.com
  - jeff@adhocteam.us 
  - judy.mercado@va.gov
  - nathan.dister@adhocteam.us
  - stephen.barrs@va.gov 
  - marcy.nadeau@va.gov
  - jennie.mcgibney@va.gov
  - kam@adhocteam.us
  - [alexander.morgan2@va.gov](mailto:alexander.morgan2@va.gov)
  - joel.russell@va.gov
  - jennie.mcgibney@va.gov
  - victor.pezzolla@va.gov
  - trevor@adhocteam.us
  - tony.williams@va.gov
  - thomas.laursen@va.gov
  - Steve.monson@va.gov
  - steven.brush@va.gov
  - robert.feldman@va.gov
  - shawn.adams@va.gov
  - Nathan.hruby@adhocteam.us
  - 

- 
