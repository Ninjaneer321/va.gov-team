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

# Research Plan for Identity, Terms of Use, 2023-07

## Background
VA would like everyone utilizing VA.gov and it's surrounding sites and services to be presented with a unified version of the Terms and Conditions that they will have to agree to in order to continue utilizing the authenticated experience
- [product info](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/terms%20and%20conditions)


### OCTO Objectives 

- Veterans and their families can apply for all benefits online
- Veterans can manage their health services online
- Veterans and their families trust the security, accuracy, and relevancy of VA.gov


### Veteran Journey

Securely accessing VA online services can happen at any stage in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf). The updated Terms of Use will apply to every who signs into VA online and uses the authenticated experience.

## Research Goals	

- Explore veterans thinking around terms of use, both in general and as it relates to VA.gov
- Understand how the sign in experience would be affected with a terms of use page interrupting the flow 
- Test the usability of a prototype for updated terms of use


### Outcome

Learn what pain points the current design has with various audiences - especially since this page will be a precursor to continuing to use the authenticated experience, we need the design to be as smooth and usable as possible for everyone.


### Research questions

- Does the prototype allow users to successfully understand the updated Terms of Use?
- Are folks able to successfully complete this page in order to move onto the authenticated experience?
- Is there a substantial usability difference between certain language and design options?
- What changes would make the prototype more helpful or more usable?


### Hypothesis

- Veterans will be familiar with terms of use from other sites and and apps
- Veterans will see needing to agree to an updated terms with VA as a nuisance
- Veterans will opt to click past this as quickly as possible, including by not reading any long paragraphs, so they can move on to their task at hand.


## Methodology	

Remote usability testing will evaluate the prototype with participants. We’ll use Perigean’s Zoom account for these remote sessions. We plan to test with both mobile and desktop users and with assistive tech users.


### Research materials 

- [Conversation guide - no AT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-07%20Terms%20of%20Use/2023-08%20Terms%20of%20Use%20conversation%20guide.md)
- [Conversation guide - screen reader](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-07%20Terms%20of%20Use/2023-08%20Terms%20of%20Use%20convo%20guide%20-%20screen%20reader.md)
- [Desktop prototype](https://www.figma.com/proto/Fhw9P7r6pyaCGXRmolruoQ/Terms-of-Use?page-id=0%3A1&type=design&node-id=1-493&viewport=2258%2C66%2C0.29&t=px4EPLKK2RGRhdS3-1&scaling=scale-down&starting-point-node-id=1%3A493&mode=design)
- [Mobile prototype](https://www.figma.com/proto/Fhw9P7r6pyaCGXRmolruoQ/Terms-of-Use?page-id=0%3A1&type=design&node-id=319-274&viewport=2258%2C66%2C0.29&t=px4EPLKK2RGRhdS3-1&scaling=scale-down&starting-point-node-id=319%3A274&mode=design)
- [Screen reader prototype](https://www.figma.com/proto/Fhw9P7r6pyaCGXRmolruoQ/Terms-of-Use?type=design&node-id=381-31&t=6Iu86HTNhe9kB8yC-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=381%3A31)
	
## Recruitment	

### Recruitment approach

We will use Perigean to recruit Veterans for this moderated study. We are looking to include as participants some historically under represented groups for this:

- Assistive Tech users (screen zoom, and screen reader in particular)
- mobile users
- cognitive disabilities

### Recruitment criteria

15 Veterans for at least 12 completed sessions


**Primary criteria (must-haves)**
All participants:
- Must have a computer or mobile phone and be willing to complete their sessions on this device
- Must be willing to share a web browser window on the Zoom call
- Must have a working microphone
- Must have Zoom downloaded to their computer prior to the session and know how to share their screen
- In addition our primary product criteria includes:
   - Must be veterans
   - Must have signed into VA.gov in the last 6 months, for any reason


Our primary diversity and inclusion criteria:
- 5 mobile users (none of these can be screen reader users)
- 8 total desktop users which includes
   - 5 sighted desktop users
   - 3 screen reader users
- 2 cognitive disabilities

We've split these into 3 cohorts
- [Cohort 1: sighted desktop](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/356)
   - 5 computer (desktop or laptop) users of VA.gov
   - 5 who will join the session on desktop or laptop
   - 1 cognitive disability
   - 1 who self-identifies race as other than white
- [Cohort 2: sighted mobile](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/357)
   - 5 mobile users of VA.gov
   - 5 who will join the session on mobile
   - 1 cognitive disability
   - 1 who self-identifies race as other than white
- [Cohort 3: screen reader desktop](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/358)
   - 3 screen reader participants
      - at least 1 who is less experienced using screen reader
      - at least 1 who is more experienced using screen reader 
   - 3 (all) joining session on desktop


### Screener Questions

- These are noted in each recruitment request ticket per cohort

## Timeline

### Prepare

- Pilot participant email:
- Date and time of pilot session:

Screen reader practice session:
- Accessibility specialist email:
- Date and time of SR practice session: 

### Length of sessions
- Cohort 1 and 2: sighted participants
   - Session length: **60-minute** sessions 
   - Session buffer: **60-minute breaks** in between
   - Max sessions per day: 4
- Cohort 3: screen reader participants
   - Session length: **90-minute** sessions 
   - Session buffer: **60-minute breaks** in between
   - Max sessions per day: 2

  
### Availability
- **Aug 16 - 25**
- please hold Aug 24th/25th in case of needed make ups sessions, to the extent possible.

Team Availability | Time (EST)
------------------|--------------
Mon | 9am - Noon, 1 - 7 pm
Tue | 9am - Noon, 1 - 7 pm
Wed | 9am - Noon, 1 - 7 pm
Thur| 9am - Noon, 1 - 7 pm
Fri | 9am - Noon, 1 - 5 pm

Pilot Session | Time (EST)
--------------|----------
 Aug 9 | 1:30pm
 Aug 10 | 3pm
	
## Team Roles	
- Moderators: Clayton Zook, Amanda Porter, Charlye Tran
- Research guide writing and task development: Clayton Zook
- Participant recruiting & screening: Perigean
- Project point of contact: Clayton Zook
- Participant(s) for pilot test: Lisa Lindsey
- Accessibility specialist (for sessions where support for assistive technology may be needed): tbd
- Note-takers: Clayton Zook, Amanda Porter, Charlye Tran
- Observers: Tom Black, Mike King, Amber Parsley
- Team member emails:
clayton.zook@oddball.io
ajohnson@clarityinnovates.com
charlye@bluetiger.digital
thomas.black2@va.gov
Mike.King@oddball.io
aparsley@clarityinnovates.com
