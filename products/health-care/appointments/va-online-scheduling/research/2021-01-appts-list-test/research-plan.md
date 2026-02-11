---
# Research Plan Metadata
title: "Research Plan for VAOS, Appointments List, January 2021"
date: 2021-01-19
last_updated: 2026-02-10
team: "VA Online Scheduling (VAOS)"
product: "VA Online Scheduling"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "As a Veteran who uses VA online scheduling, I want to be able to manage all my appointments from a single place which includes preparing for upcoming appointments, printing specific details about appointments, reviewing past appointments, and rescheduling appointments. The VA online scheduling home page displays all of a Veteran's upcoming VA and Community Care appointments. This list of appointments can become very long, which makes it difficult to scan the list and understand key important details about upcoming appointments, like the date, time, and location of a given appointment."
  product_location: "VA.gov appointments - VAOS home page/appointments list"
  user_familiarity: "Iteration"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/homepage-refresh/homepage-refresh-initiative-2021.md"

# Research Design
methodology: "Usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Test if a thumbnail view of appointments, organized by month, gives Veterans enough information to plan ahead for their appointments at a high level"
  - goal_2: "Validate that Veterans can easily get the details for their individual appointments"
  - goal_3: "Determine if Veterans can easily navigate between appointments and the appointments list"

research_questions:
  - "Do users find the information on the static landing page helpful?"
  - "Can they easily start managing their appointments?"
  - "Do users understand that they can click the thumbnail view to get to the detail page?"
  - "Does the thumbnail information help them scan the appointments list?"
  - "Can they distinguish between appointment types (video, express care, phone, canceled)?"
  - "Can they find appointments that aren't in the upcoming list (past, requested)?"
  - "Do they understand what the requested appointments are?"
  - "Can they easily find/understand the date/time for their appointments?"
  - "Can Veterans easily navigate between an appointment and the appointments list?"
  - "Can Veterans easily reschedule an appointment?"

hypotheses:
  - "Veterans will easily be able to find appointments they need"
  - "Veterans will understand they can click an appointment to get more details"
  - "Veterans will be frustrated that the type of care is not shown"

expected_outcomes: "Validation that the new appointments list design helps Veterans scan and understand their appointments more easily, and identification of any usability issues"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "lean maximum variation"
  
  primary_criteria:
    - "5 Veterans who have VA health care"
    
  secondary_criteria:
    - "Some veterans who have used MyHealtheVet as their primary scheduling tool"
    - "Representative of all branches of the Armed Forces"
    - "An even split of men and women"
    - "At least one person in each age bracket: 18-30, 31-50, 50+"
    - "At least one participant with disability rating of 30% or greater"
    
  screener_questions:
    - question: "TBD"
      qualifying_response: "TBD"
      
participants:
  veterans: 5
  caregivers: 0
  dependents: 0
  total_recruited: 5
  completed_sessions_goal: 5
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-01-19"
  pilot_participant: "Emily Waggoner"
  research_dates: "2021-01-21 to 2021-01-26"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 15
  max_sessions_per_day: 5
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase Veteran satisfaction with VA.gov"
    key_results: 
      - "Improve appointments list usability"
  - objective: "Decrease time to successfully complete online transactions"
    key_results:
      - "Make appointment management easier"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Living civilian life"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "products/health-care/appointments/va-online-scheduling/research/2020-07-vaos-mvp-and-express-care-user-research/research-findings.md"
    - "products/health-care/appointments/va-online-scheduling/research/2020-10-cc-provider-selection-usability/research-findings.md"
    
tags:
  - "AUD: Veterans"
  - "PRDT: Appointments"
  - "PRDT: VAOS"
  - "PRDT: Health care"
  - "RESRCH: Usability"
  - "DSC: List"
  - "DSC: Card"
  - "DSP: Content presentation"
  - "authenticated"
  - "appointments-list"
---

# Research Plan for VAOS Appointments List, January 2021

## Problem statement
As a Veteran who uses VA online scheduling, I want to be able to manage all my appointments from a single place which includes preparing for upcoming appointments, printing specific details about appointments, reviewing past appointments, and rescheduling appointments.	

## Goals	
The VA online scheduling home page displays all of a Veteran's upcoming VA and Community Care appointments. This list of appointments can become very long, which makes it difficult to scan the list and understand key important details about upcoming appointments, like the date, time, and location of a given appointment. This problem was identified during the [Express Care research in July 2020](https://github.com/department-of-veterans-affairs/va.gov-team/products/health-care/appointments/va-online-scheduling/research/2020-07-vaos-mvp-and-express-care-user-research/research-findings.md).

We believe that if we provide a "thumbnail" view of appointments, organized by month, that will give Veterans enough information to plan ahead for their appointments at a high level, as long as they can easily get the details for their individual appointments. This belief is based on the success of similar appointments work done by the VA Mobile team, as well as the success of a partial test of this functionality during the [Community Care research in December 2020](https://github.com/department-of-veterans-affairs/va.gov-team/products/health-care/appointments/va-online-scheduling/research/2020-10-cc-provider-selection-usability/research-findings.md).

## Research questions

**Static Landing Page**
- Do users find the information on this page helpful?
- Can they easily start managing their appointments?

**Home Page/Appointments List**
- Do users understand that they can click the thumbnail view to get to the detail page?
- Does the thumbnail information help them scan the appointments list?
- Can they distinguish between appointment types?
    - Video appointments
    - Express care
    - Phone appointments
    - Canceled appointments
- Can they their find appointments that aren't in the upcoming list?
    - Past
    - Requested
- Do they understand what the requested appointments are?
- Can they easily find/understand the date/time for their appointments?
- Can Veterans easily navigate between an appointment and the appointments list?

**Rescheduling**
- Can Veterans easily reschedule an appointment?

## Hypotheses
- Veterans will easily be able to find appointments they need.
- Veterans will understand they can click an appointment to get more details.
- Veterans will be frustrated that the type of care is not listed shown.

## Method		
This will be a remote moderated usability test with high-fidelity prototypes. We believe that the best way to determine if the new list is easy to scan and understand is by observing veterans interact with it in as close to a real-world situation as possible.

## Participants and Recruitment	

**Primary criteria / Must have**

- 5 Veterans who have VA health care.

**Secondary criteria / Would like to have**
- Some veterans who have used MyHealtheVet as their primary scheduling tool
- Representative of all branches of the Armed Forces
- An even split of men and women
- At least one person in each of the following age brackets: 18-30, 31-50, 50+.
- At least one participant to have a disability rating of 30% or greater.

**Recruitment**
We will ask for Perigean support in recruiting and taking notes.

## When? 	
We plan on running this research between Thursday January 21st and Tuesday January 26, 2021. The prototype should be ready by Tuesday, January 19th, and we'll plan to do a pilot study that same day.

We expect each session to take around 45 minutes, and would like 15 minutes after each session to process notes.

Availability (all times in ET/GMT-05)

| Date      | Available times                   |
| --------- |----------------------------------|
| 01/21 Thu | 11am-9pm              |
| 01/22 Fri | 11am-9pm                         |
| 01/25 Mon | 11am-4pm           |
| 01/26 Tue | 11am-9pm |

The Pilot is scheduled for 01/19/21 at 3p.m. ET with Emily Waggoner

## Team Roles	
- Moderator: Peter Russo - 510-529-9874 - peter.russo@adhocteam.us	
- Research guide writing and task development: Peter Russo
- Participant recruiting & screening: Perigean
- Project point of contact:	Peter Russo
- Participant(s) for pilot test: Emily Waggoner
- Note-takers: Perigean
- Observers:
    - Lauren Ernest - lauren.ernest@adhocteam.us

## Resources	
- [Project brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/homepage-refresh/homepage-refresh-initiative-2021.md)
- [Conversation guide](conversation-guide.md)
