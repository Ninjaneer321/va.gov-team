---
# Research Plan Metadata
title: "Research Plan for [Team, Product, Date]"
date: YYYY-MM-DD
last_updated: YYYY-MM-DD
team: "[Team Name]"
product: "[Product Name]"
product_area: "[e.g., authenticated/unauthenticated]"

# Background Context
background:
  problem_statement: "[What problem is your product trying to solve?]"
  product_location: "[Where is this situated on VA.gov?]"
  user_familiarity: "[New product or iteration?]"
  product_brief_url: "[URL]"

# Research Design
methodology: "[e.g., usability testing, semi-structured interviews, card sort]"
research_format: 
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: "[Location name if applicable]"
    point_of_contact: "[Name if applicable]"
    equipment: "[Equipment details if applicable]"
  moderated: true # Options: true, false
  
# Research Goals & Questions
research_goals:
  - goal_1: "[First research goal]"
  - goal_2: "[Second research goal]"
  - goal_3: "[Third research goal]"

research_questions:
  - "[Research question 1]"
  - "[Research question 2]"
  - "[Research question 3]"
  - "[Research question 4]"
  - "[Research question 5]"

hypotheses:
  - "[Hypothesis 1]"
  - "[Hypothesis 2]"
  - "[Hypothesis 3]"

expected_outcomes: "[How will findings advance the product?]"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "[e.g., lean maximum variation]"
  
  primary_criteria:
    - "[Must-have criterion 1]"
    - "[Must-have criterion 2]"
    - "[Must-have criterion 3]"
    
  secondary_criteria:
    - "[Nice-to-have criterion 1]"
    - "[Nice-to-have criterion 2]"
    
  screener_questions:
    - question: "[Screener question text]"
      qualifying_response: "[Expected answer]"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name]"
  research_dates: "YYYY-MM-DD to YYYY-MM-DD"
  research_review_submission: "YYYY-MM-DD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1"
    key_results: 
      - "[Specific KR if applicable]"
  - objective: "Objective 2"
    key_results:
      - "[Specific KR if applicable]"
      
veteran_journey_phases:
  - "[e.g., Getting Out]"
  - "[e.g., Starting Up]"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Link to related past research]"
    
tags:
  - "[product-area]"
  - "[methodology]"
  - "[participant-type]"
  - "[research-phase]"
---

# Research Plan for Lovell Federal Experience Testing, June 2022

## Background
The Lovell Federal Facility services both VA beneficiaries as well as DoD/TRICARE beneficiaries.

However, the unauthenticated top tasks for these beneficiaries are accomplished in separate locations, making the experience confusing. Additionally, there is content that is specific to each type of location that needs to be separated for clarity and conciseness.

Veterans are already familiar with the modernized location design, however, the split between the VA beneficiaries locations and content, and the DoD/TRICARE beneficiaries locations and content will be a new experience for them.

This bespoke health care system research is building upon earlier VAMC research.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2022-2023-lovell/lovell-initiative-brief.md).

[Link to UX research and design hub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/facility-locator/product-transition-doc/feature-docs/lovell-federal-health.md#vsa-lovell-federal-health-ux-research-and-design-hub).

### OCTO Objectives 

North Star
* Increase the usage and throughput of VA services

Goals
* Veterans and their families can apply for all benefits online
* Veterans can manage their health services online
* Veterans and their families can find a single, authoritative source of information
* Veterans and their families trust the security accuracy and relevancy of VA.gov

Numbers
* Increasing
  * Usage of digital, self- service tools
  * Veteran satisfaction with VA.gov
* Decreasing
  * Time from online benefit discovery to benefit delivery

### Veteran Journey
[Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

Getting Out
* Engaging VA to access benefits and services

Starting Up
* Attending to health needs (Moment that Matters)

Taking Care of Myself
* Recognizing and addressing mental health needs (Moment that Matters)
* Managing primary care and chronic health issues (Moment that Matters)
* Maintaining my health

Putting Down Roots
* Engaging VA to access benefits and services

Retiring
* Taking care of myself (Moment that Matters)

Aging
* Managing my declining health (Moment that Matters)

## Research Goals	

The primary goals of this research are to determine:
* Whether Veterans and dual-eligible Veterans know where they can receive care at Lovell Federal Health Care Center.
* Whether participants notice and understand the informational alert.
* Whether dual-eligible Veterans understand when to use the VA health care experience vs. the TRICARE health care experience.

### Outcome

This research will help to determine whether the design solution is understood by Veterans and dual-eligible Veterans, or if additional iterations are needed.

### Research questions

* Will Veterans and dual-eligible Veterans know where they can receive care at Lovell Federal Health Care Center?
* Will participants notice and understand the informational alert?
* Will dual-eligible Veterans understand when to user the VA health care experience vs. the TRICARE health care experience?

### Hypothesis

We already know that Veterans are familiar with a location experience that does not separate out locations by type of beneficiary.
We already know that research has been conducted on the existing VAMC experience.

* Veterans and dual-eligible Veterans will be able to identify whether the page they are on is for VA or TRICARE health care beneficiaries.
* The informational alerts helps Veterans and dual-eligible Veterans understand whether they're viewing VA or TRICARE health information, and to navigate to the other experience, if desired.

Veterans are familiar with a location experience that does not separate the experience by beneficiary, but they will be able to identify which health care they need and where they can find it.

## Method	
Research Method:
* Usability testing.
* We will not be testing with screen readers because the designs are in UXPin, the design has been reviewed by the collaboration cycle, and the foundation of the VAMC pages have already been tested.
* Not testing on mobile because the VAMC pages have already been tested on mobile during the VAMC redesign testing.

Includes task flows from specific starting points:
* [Lovell VA beneficiary system page](https://preview.uxpin.com/85c0c5e5501b4c222f4d37bfdd4d6eb59dd93386#/pages/150395163/simulate/no-panels) 
* [Lovell TRICARE beneficiary system page](https://preview.uxpin.com/85c0c5e5501b4c222f4d37bfdd4d6eb59dd93386#/pages/150395168/simulate/no-panels)
* [VA Lovell location](https://preview.uxpin.com/85c0c5e5501b4c222f4d37bfdd4d6eb59dd93386#/pages/150395164/simulate/no-panels) 
* [TRICARE Lovell location](https://preview.uxpin.com/85c0c5e5501b4c222f4d37bfdd4d6eb59dd93386#/pages/150395169/simulate/no-panels) 

### Location

Research sessions will be held remotely using Zoom, and will be recorded.

### Research materials

For moderated usability tests: 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2022-2023-lovell/lovell-conversation-guide.md)
- [Link to prototype](https://preview.uxpin.com/85c0c5e5501b4c222f4d37bfdd4d6eb59dd93386#/pages/150395163/simulate/sitemap)
	
## Recruitment	

### Recruitment approach

Using Perigean recruiting, we would like to schedule 20 participants to reach our goal of observing 10 participants.

### Recruitment criteria

**Primary criteria (must-haves)**

* At least 5 participants must be enrolled in only VA health care
* At least 5 participants must be retired from active duty and actively enrolled in VA health care and TRICARE health care.
* Laptop or desktop computer only
  * For this study, mobile devices may introduce technical difficulties, or make it more difficult for participants to complete the task, so we are limited participants to laptop or desktop computers only.
* Be able to screenshare via Zoom
  * Please confirm beforehand that participant is able to use Zoom, and is familiar with screen sharing
* At least 2 participants under 35 years old
* At least 2 participants over 55 years old
* At least 2 participant with cognitive disabilities
* At least 5 participants with no college degree or professional certificates
* At least 5 participants of color

**Secondary criteria (nice-to-haves)**

* Mix of Veterans and Caregivers
* All genders
* A mix of rural and urban participants

## Timeline

### Prepare

Design mock up is ready for testing.

Please indicate the date and name of a mock participant for a pilot session. (Perigean to schedule pilot session and participant.)
* Pilot participant email:
* Date and time of pilot session: 

### Research sessions

Monday, June 6, 2022 - Friday, June 10, 2022

### Length of sessions

Sessions should be scheduled for 45 minutes, with the expectation that they will likely run 30 minutes.
The goal is for 2 sessions per day, with at least 15 minutes between sessions.

### Availability

Monday, June 6: 1:00pm ET - 6:00pm ET<br>
Tuesday, June 7: 3:00pm ET - 7:00pm ET<br>
Wednesday, June 8: 9:00am ET - 12:00pm ET<br>
Thursday, June 9: 2:00pm ET - 6:00pm ET<br>
Friday, June 10: 10:00am ET - 1:00pm ET<br>
	
## Team Roles	

Moderator: Val Runde<br>
Research guide writing and task development: Val Runde<br>
Participant recruiting & screening: Perigean<br>
Project point of contact: Val Runde<br>
Participant(s) for pilot test: Jay Darnell (jay.darnell@civicactions.com), Perigean to set up pilot test<br>
Note-takers: Perigean<br>
Observers: Michelle Middaugh [optional] (michelle.middaugh@adhocteam.us), Dave Conlon (david.conlon@va.gov) [optional], Steve Tokar (steve.tokar@va.gov) [optional], Jenny Heiland-Leudtke (Jennifer.Heiland-Luedtke@va.gov) [optional], Jeff Grandon (Jeffrey.Grandon@va.gov) [optional], Suzanne Gray (suzanne.gray@civicactions.com) [optional], Steve Wirt (steve.wirt@civicactions.com) [optional], Ethan Teague (ethan.teague@civicactions.com) [optional], Max Antonucci (max.antonucci@agile6.com) [optional], Jay Darnell (jay.darnell@civicactions.com) [optional]
