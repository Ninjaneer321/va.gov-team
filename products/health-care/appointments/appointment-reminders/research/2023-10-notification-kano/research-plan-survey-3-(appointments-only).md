---
# Research Plan Metadata
title: "Research Plan for Appointments Team, Appointment Notifications Survey 3 (Appointments-only), October 2023"
date: 2023-10-11
last_updated: 2026-02-10
team: "Appointments Team"
product: "VA Online Scheduling (VAOS) - Appointment Notifications"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans rely on different forms of notifications to manage their appointments, but staff at VA facilities use different systems to send out notifications. There could be excessive notifications, no notifications, or inconsistent notifications about the same appointment. Systems are disconnected, and we need to streamline how we send out notifications."
  product_location: "Appointment notifications across VA.gov authenticated health care experience"
  user_familiarity: "Redesign - defining future state of appointment notifications to prioritize what to build first"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/vaos-product-outline.md"

# Research Design
methodology: "survey, Kano Analysis"
research_format: 
  location: remote
  moderated: false
  
# Research Goals & Questions
research_goals:
  - goal_1: "Figure out what notifications Veterans and caregivers find the most helpful when managing their appointments and appointment-related tasks"
  - goal_2: "Prioritize what appointment notifications to build and test first"
  - goal_3: "Find out how Veterans would like to receive notifications (sent separately or combined in one email)"

research_questions:
  - "Which appointment notifications are helpful for Veterans the most and the least?"
  - "What formats (text, email, phone call, or push notifications) do Veterans prefer to receive and for which notifications?"
  - "How do Veterans feel about receiving appointments and appointment-related notifications?"

hypotheses:
  - "Veterans will have a clear opinion on the value of each notification"
  - "For a straightforward appointment (without canceling, rescheduling or other difficulties), Veterans only need 4 notifications: a reminder with pre-check-in questions, check-in, AVS, and money-related (e.g., copay and travel pay) notifications"
  - "Veterans expect to receive email, text, and phone call notifications"
  - "The modality of communication they prefer will be a personal preference"

expected_outcomes: "This research will inform updates to the appointment notifications experience and help prioritize what appointment notifications to build first."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Cohort-based recruitment targeting diverse demographics to achieve at least 35 completed responses"
  
  primary_criteria:
    - "All have a computer or mobile device and are willing to use it to complete the activity"
    - "All must have been to a VA health care facility for medical appointments for themself or a Veteran that they care for in the last 12 months"
    
  secondary_criteria:
    - "Mix of gender, age groups (18-24, 25-34, 35-44, 45-54, 55+)"
    - "Mix of education levels (High School, Some College, Associate's, Bachelors, Masters)"
    - "MyHealtheVet users preferred"
    
  screener_questions:
    - question: "Have you been to a VA healthcare facility for a medical appointment in the last 12 months?"
      qualifying_response: "Yes"
      
participants:
  veterans: 54
  caregivers: 9
  dependents: 0
  total_recruited: 63
  completed_sessions_goal: 35
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-09-29"
  pilot_participant: "Stephen Barrs"
  research_dates: "2023-10-17 to 2023-10-31"
  research_review_submission: "2023-10-11"
  
session_details:
  duration_minutes: 20
  buffer_minutes: 0
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Integrate health portal features into VA.gov"
    key_results: 
      - "Streamline appointment notification systems"
  - objective: "Enhance Veterans' personalized online experience"
    key_results:
      - "Provide relevant and timely appointment information"
      
veteran_journey_phases:
  - "Starting up"
  - "Taking care of myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/vaos-product-outline.md"
    
tags:
  - "AUD: Veterans"
  - "AUD: Caregivers"
  - "BNFT: Healthcare"
  - "PRDT: Appointments"
  - "MHV: Appointments"
  - "authenticated"
  - "survey"
  - "Kano Analysis"
  - "remote"
  - "unmoderated"
  - "notifications"
  - "appointment reminders"
  - "MyHealtheVet"
---

# Research Plan for [Appointments team, Appointment notifications, October 2023]

## Background
The appointments team is thinking of ways to better the future appointment notifications, which is a crucial part of the authenticated experience for managing their health. We know that Veterans rely on different forms of notifications to be on top of managing their appointments, and staff at VA facilities use different systems to send out notifications. There could be excessive notifications, no notifications, or inconsistent notifications about the same appointment. From past studies, we know that systems are disconnected, and we need to streamline how we send out notifications, which requires additional technical discovery. The focus of this research is to understand Veterans’ preferences on appointment notifications, define the desired future state of appointment notifications, and prioritize what notifications experience the appointment team should build first.

[Link to appointments product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/vaos-product-outline.md).

### OCTO Priorities 
This research supports:

- Integrate health portal features into VA.gov
- Enhance Veterans' personalized online experience

### Veteran Journey
This research fits into these points of a Veteran’s journey: 

- Starting up
- Taking care of myself
- Retiring
- Aging

## Research Goals	
The focus of this study is to figure out what notifications Veterans and caregivers find the most helpful for them when managing their appointments and appointment-related tasks so that our team can prioritize what to build and test first among the list of notifications below.

Here’s a list of appointment notifications that include what exists today and what we expect Veterans might need: 
- Routine reminders to schedule appointments (e.g., annual physical exam)
- Request submitted
- Appointments successfully scheduled confirmation (with dates, time, and location and how to modify)
- Referral
- Appointments denied or for some reason could not be scheduled (with next steps, and why (e.g., community care eligibility requirements)
- Unable to contact Veterans to discuss the appointment
- Reminder for upcoming appointments
- Notify early appointment slot openings
- Confirm and fill out pre-check-in and any questionnaires
- Cancellation by VA
- Cancellation confirmation by Veterans
- Any changes to appointments
- Reschedule confirmation
- Updates on pending appointments
- Check-in reminder
- Checked in confirmation
- Next steps for failed check-in
- File for travel reimburse
- Travel claims submission confirmation (submission confirmation and failed submission with next steps)
- Travel claim approved
- AVS ready to view
- Outstanding co-pay bills

The second goal is to find out how Veterans would like to receive notifications, for example, notifications can be sent separately, or notifications can be combined and sent in one email. 

### Outcome
This research will inform updates to the appointment notifications experience and help prioritize what appointment notifications to build first.

### Research questions
1. Which appointment notifications are helpful for Veterans the most and the least?
2. What formats (text, email, phone call, or push notifications) do Veterans prefer to receive and for which notifications?
3. How do Veterans feel about receiving appointments and appointment-related notifications?

### Hypothesis
- Veterans will have a clear opinion on the value of each notification.
- For a straightforward appointment (without canceling, rescheduling or other difficulties), Veterans only need 4 notifications. They include a reminder with pre-check-in questions, check-in, AVS, and money-related (e.g., copay and travel pay) notifications.
- Veterans expect to receive email, text, and phone call notifications.
  - The modality of communication they prefer will be a personal preference.

## Methodology	

#### [Survey - Kano Analysis](https://foldingburritos.com/blog/kano-model/)

Using Optimal Workshop, we will conduct an unmoderated Kano analysis study in which participants are invited by email to participate. After accepting the invitation, participants will be sent a link to a survey activity that contains, respectively, 20-25 questions  (or less than 15 mins) for Veterans and caregivers that may experience when getting appointment notifications. 

We would like to get complete responses from at least 35 Veterans, in distinct cohorts of fewer than 10 participants per cohort (per PRA). Each cohort will access the study using a unique URL. 

### Location
This will be a survey that participants fill out remotely and asynchronously. 

### Research materials

- [Cohort 1](https://dj540s05.optimalworkshop.com/questions/33i56qgt?token=1)
- [Cohort 2](https://dj540s05.optimalworkshop.com/questions/33i56qgt?token=2)
- [Cohort 3](https://dj540s05.optimalworkshop.com/questions/33i56qgt?token=3)
- [Cohort 4](https://dj540s05.optimalworkshop.com/questions/33i56qgt?token=4)
- [Cohort 5](https://dj540s05.optimalworkshop.com/questions/33i56qgt?token=5)
- [Cohort 6](https://dj540s05.optimalworkshop.com/questions/33i56qgt?token=6)
- [Cohort 7](https://dj540s05.optimalworkshop.com/questions/33i56qgt?token=7)

## Recruitment	
We will work with Perigean to handle the recruitment, scheduling, and compensation of Veterans and caregivers. 

### Recruitment approach
We will ask Perigean to recruit 63 people using the cohorts below to get at least 35 completes.

### Recruitment criteria
**All participants must have:**
- All have a computer or mobile device and are willing to use it to complete the activity.
- All must have been to a VA health care facility for medical appointments for themself or a Veteran that they care for in the last 12 months.


|Total requested|Completed sessions|
|:-------------:|:----------------:|
|       63      |         35       | 

### Cohort Description

|                |Cohort 1|Cohort 2|Cohort 3|Cohort 4|Cohort 5|Cohort 6|Cohort 7|
|----------------|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
|***SEX***       |        |        |        |        |        |        |        |                 
|Male            |        |   9    |        |        |        |        |        |        
|Female          |    9   |        |        |        |        |        |        |            
|       ---      |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |  
|***Age***       |        |        |        |        |        |        |        |           
|18-24 yo        |        |        |    4   |        |        |        |        |        
|25-34 yo        |        |        |    5   |        |        |        |        |      
|35-44 yo        |        |        |        |    4   |        |        |        |       
|45-54 yo        |        |        |        |   5     |        |        |        |       
|55+ yo          |        |        |        |        |     9  |        |        |          
|       ---      |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |  
|***Role*** |        |        |        |        |        |        |        |        
|Veteran    |     9   |   9     |     9   |   9     |    9    |        |   9    |    
|Caregiver    |        |        |        |        |        |    9    |        |      
|       ---      |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |  
|***Education*** |        |        |        |        |        |        |        |        
|High School     |        |        |        |        |        |        |  3     |    
|Some College    |        |        |        |        |        |        |  1     |      
|Associate's     |        |        |        |        |        |        |  1      |      
|Bachelors       |        |        |        |        |        |        |   2     |       
|Masters         |        |        |        |        |        |        |   2    |     
|       ---      |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |  
|***Log In*** |        |        |        |        |        |        |        |        
|MyHealtheVet     |   7     |    7    |    7    |    7    |   7     |        |  7     |    


### Screener questions
1. Have you been to a VA healthcare facility for a medical appointment in the last 12 months?
   	- Yes *(go onto question 2)*
   	- No *(disqualify)*

## Timeline
- 9/29: Pilot session (scheduled and done)
- 10/11: Kristen reviews for approval (approved)
- 10/1: Submit to research ops for approval
- Kickoff meeting with Perigean request 

### Prepare
A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: stephen.barrs@va.gov
* Date and time of pilot session: 9/29/2023

### Research sessions
* Survey will be open for 2 weeks, with the starting date (as soon as Perigean sends out emails). 

### Length of sessions
* This is an asynchronous online survey. Participants are expected to spend no more than 20 minutes.
	
## Team Roles	
- Research plan and survey writing:	Jenny Wang (yizhen.wang@va.gov), Nina Anusavice (nina.anusavice@va.gov)
- Participant recruiting & screening:	Perigean
- Project point of contact:	Kristen McConnell (kristen.mcconnell@va.gov), Katherine Lawyer (katherine.lawyer@va.gov), Jenny Wang (yizhen.wang@va.gov), Nina Anusavice (Nina.Anusavice@va.gov)
- Participant(s) for pilot test: Stephen Barrs (stephen.barrs@va.gov)
