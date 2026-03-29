---
# Research Plan Metadata
title: "Research Plan for Check-In St. Louis Pilot Staff Feedback, March-April 2022"
date: 2022-03-01
last_updated: 2022-03-01
team: "Check-In Experience"
product: "Check-In"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Evaluate pilot implementation of pre-check-in and mobile check-in solutions to gather feedback from staff on impact to workflows and identify improvements"
  product_location: "VA.gov check-in experience and pre-check-in"
  user_familiarity: "Iteration - evaluating pilot release"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-outline.md"

# Research Design
methodology: "semi-structured interviews"
research_format: 
  location: in-person
  in_person_details:
    facility: "St. Louis VA facilities (CBOC, Annex, and John J. Cochran Veterans Hospital)"
    point_of_contact: "Facility staff coordination"
    equipment: "Interview materials"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Gather feedback on pilot release of pre-check-in and mobile check-in from Medical Support Assistants and clinic management"
  - goal_2: "Understand staff workflow impacts and identify improvement opportunities"
  - goal_3: "Gain insights into telemedicine appointment processes and patient record flag usage"

research_questions:
  - "After a Veteran utilized the new mobile check-in solution, are they called back for their appointment without having to talk to a clerk/MSA?"
  - "What is the impact to the staff workflow when Veterans complete pre-check-in or check-in on their mobile phones?"
  - "How do Veterans and staff feel about pre-check-in and the mobile check-in solutions?"
  - "What is the current pre-registration process for telemedicine appointments, particularly telephone appointments?"
  - "How are patient record flags currently used and how would staff like to review them in the future?"

hypotheses:
  - "The pre-check-in experience improves the staff experience, since they need to review contact, NOK, and emergency contact information with fewer Veterans"
  - "Adding telemedicine appointments to pre-check-in would solve the staff pain point of reviewing pre-registration during telemedicine appointments"
  - "MSAs should have shorter lines of Veterans waiting to check in, since Veterans will utilize this solution"
  - "Staff responses will indicate that the mobile phone check-in solution is useful and does not negatively impact experience or clinical workflow"

expected_outcomes: "Findings will inform product improvements and identify successes/challenges with pilot implementation to guide rollout to additional facilities"

# Recruitment & Participants
recruitment:
  recruiting_partner: "On-site recruitment"
  approach: "Convenience sampling of staff at pilot facilities"
  
  primary_criteria:
    - "Medical Support Assistants (MSAs) at pilot facilities"
    - "Clinic management staff at pilot facilities"
    - "Staff roles involved in check-in process"
    
  secondary_criteria:
    - "Staff with varying levels of experience with new check-in solution"
    - "Staff from different clinic types"
    
  screener_questions:
    - question: "N/A - on-site recruitment"
      qualifying_response: "N/A"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "N/A"
  pilot_participant: "N/A"
  research_dates: "2022-04-25 to 2022-04-27"
  research_review_submission: ""
  
session_details:
  duration_minutes: 30
  buffer_minutes: 15
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Increase usage of digital, self-service tools"
  - objective: "Logged-in users have a personalized experience, with relevant and time-saving features"
    key_results:
      - "Decrease time to successfully complete and submit online transactions"
      
veteran_journey_phases:
  - "Taking care of myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/remote-discovery/research-plan.md"
    
tags:
  - "health-care"
  - "patient-check-in"
  - "PCI"
  - "HCE"
  - "check-in"
  - "staff-facing"
  - "pilot"
  - "St-Louis"
  - "generative"
  - "moderated"
  - "staff"
  - "feedback"
  - "semi-structured-interviews"
  - "AUD: VA Staff"
  - "BNFT: Healthcare"
  - "PRDT: Check-in"
study: Check-In St. Louis Pilot Staff Feedback
type: UAT
---

# Research Plan: St. Louis Visit to Gather Feedback on Pilot from Staff
March 2022

## Background
The check-in team is reimagining the experience between a Veteran scheduling a medical appointment and having their appointment. In particular, we are creating portions of the ecosystem that enable a Veteran to:
- review and confirm the following information prior to an appointment (also known as pre-check-in):
  - confirming the appointment.
  - reviewing contact information.
  - reviewing next of kin information.
  - reviewing emergency contact information.
  - answer health questionnaires (future feature).
- utilize their mobile device to check-in (letting the VA know that they have arrived for their appointment) for a medical appointment via VA.gov. 

With this round of research, we are looking to gather feedback on the pilot release from staff across the St. Louis area. We are also interested in gaining insights into how to connect telemedicine appointments to pre-check-in and display patient record flags. Lastly, we want to know the current process and challenges surrounding appointment notifications. This study will be conducted on-site in conjunction with a [Veteran study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/StLouis-pilot-feedback/research-plan.md). Going on-site allows us to quickly interview many more Medical Support Assistants (MSA) and clinic management members compared to remote interviews. 

We were also able to coordinate one Zoom call with a few MSAs. The [insights from that call](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/staff-facing/st-louis/pilot-feedback/session-notes/Mar9-zoomcall.md) will be added to this study.


### OCTO Objectives
This research supports the following objectives:
- Veterans can manage their health services online
- Logged-in users have a personalized experience, with relevant and time-saving features
- Increase the completion rate of online transactions
- Increase usage of digital, self-service tools 
- Decrease time to successfully complete and submit online transactions

### Veteran Journey
The veteran check-in for a medical appointment fits within the "Taking Care of Myself" of the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf).

## Research goals/questions
- After a Veteran utilized the new mobile check-in solution, are they called back for their appointment without having to talk to a clerk/MSA?
- What is the impact to the staff workflow when Veterans complete pre-check-in or check-in on their mobile phones?
  - Do staff have to answer any questions about the pre-check-in experience?
  - How would adding telemedicine appointments to the pre-check-in experience impact staff?
- How do Veterans and staff feel about pre-check-in and the mobile check-in solutions?
- What is the current pre-registration process for telemedicine appointments, particularly telephone appointments?
- What challenges are staff experiencing related to telemedicine appointments, particularly telephone appointments?
- How are patient record flags currently used?
  - How would staff like to review patient record flags in the future?
- Expand our understanding of the ecosystem in which VA facilities communicate important appointment information to Veterans across the entire scheduling experience.
- Create a map of this ecosystem that will provide teams working across it with a shared understanding of all these systems.

### Hypothesis
- The pre-check-in experience improves the staff experience, since they need to review contact, NOK, and emergency contact information with fewer Veterans.
- Adding telemedicine appointments to pre-check-in would solve the staff pain point of reviewing pre-registration during telemedicine appointments.
- The Veterans will successfully check in via their mobile phone, because the clerk and clinical staff will know the Veteran is in the waiting room without needing to speak directly to them. As a result, a nurse or other clinical staff will call the Veteran back for their appointment without first talking to an MSA.
- MSAs should have shorter lines of Veterans waiting to check in, since Veterans will utilize this solution. 
- MSAs should only have to check-in Veterans who 
  - prefer to check-in in-person, 
  - need to have their insurance reviewed, or 
  - need contact, NOK, or emergency contact information updated.
- The number of applications that staff utilize to manage check-in should be reduced and the other impacts to their workflow should be minimal.
- Staff responses will indicate that the mobile phone check-in solution is useful and does not negatively impact experience or clinical workflow.
- Gathering necessary pre-registration and other information prior to a telemedicine appointment, particularly phone, can be difficult.
- Properly displaying patient record flags is very important to staff.
- We believe Veterans receive inconsistent notifications because:
  - The set of tools facilities may use to help Veterans keep track of appointments are numerous, making them difficult to manage.
  - Automated notifications that come from these systems are not connected, resulting in duplication.
  - Facilities can each create a unique process for notifications, which leads to inconsistencies.

### Location
The research will be conducted at a CBOC, Annex, and certain departments within John J. Cochran Veterans Hospital.
	
### Methodology and recruitment
- During the same on-site trip as [this Veteran study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/StLouis-pilot-feedback/research-plan.md), work with the site to schedule time to observe and interview staff members in the clinics that are utilizing pre-check-in and mobile check-in solutions.
- Try to gather feedback and observations from as many staff and roles as possible during the visit

## Timeline
Research: 2-3 full days onsite during the week of April 25th.

## Team Roles	
- Moderator: TBD (2-3 team members) 
- Research guide writing and task development: Kristen McConnell


## Notes
The appointment notification questions are also related to this [VAOS study](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2021-10%20Notifications%20service%20map%20workshop/research-plan.md).
