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

# Research Plan - 2022-10 Patient Check In ID Verification - SSN4 Text Input vs. Date of Birth (DoB) Memorable Date Comparison

## Product brief

The Patient Check In (PCI) product is reimagining the ecosystem that allows a Veteran to check in for a VA medical appointment. The Modernized Check-In Experience Team created the portion of the ecosystem that enables a Veteran to utilize their mobile device to “check in” through VA.gov. I.e., letting clinic staff know that the patient has arrived for their appointment.

Improvements to Low Risk One Time Authentication (LoROTA), the authentication method for PCI, will be required based on feedback from VA Profile Team and VA security requirements. One of those security improvements is to remove the use of SSN4 (DSC: Text input) as an authentication variable and begin using Date of Birth (DoB) ([DSC: Memorable date](https://design.va.gov/components/form/memorable-date)), as soon as possible. 

### Technical security improvements

- Remove use of SSN and begin using DOB as prompted attribute
- Hash the SSN and DOB in LoROTA datastore
- Only populate LoROTA data when it is about to be presented to the Veteran. The initial LoROTA record creation will not contain any PHI/PII
- Proactively remove LoROTA entries as soon as possible – if the record needs to be retained until the time of the appointment, remove all unneeded PHI/PII
- Authentication attempts are currently limited to 3 tries – enhance this to delete the associated LoROTA entry when auth fails

## Release plan 

We are planning to release the memorable date component into Patient Check In next week (July 30, 2023). Our plan is to test the new memorable date component with 10% (~500 per day) of users initially, while the other 90% will verify their identification to Patient Check In using their last name, last 4 of their SSN, which does not use the memorable date component.

Here's how we intend to track success and performance:

- % failed of memorable date component for Pre Check In
- % failed of memorable date component for Check In
- % success of memorable date component for Pre Check In
- % success of memorable date component for Check In

And, we'll compare those same numbers to the existing identification method for the same date range.

Our plan is to check on this data hourly for the first day. If the new memorable date component's performance is significantly less than the existing method, then we'll stop using it and evaluate next steps.

However, if the performance is in a similar range compared to the existing method for 5-7 days, then we'll expand it to more users.

### Related artifacts

- [Update smartphone check-in R&S article to align with new identity verification method ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44692)
- [Communication to VA DST](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44383#issuecomment-1192815643)
- [Communication for % user rollout per date](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44383#issuecomment-1204258067)

## Research goals 

Our goal is to ensure that the new identify verification method (e.g., memorable date) is as successful as the existing method (e.g., last name, last 4 SSN). However, it's worth noting that this "test" is an apple to oranges comparison since the data a Veteran uses to verify will be different. But, we think the comparison is still relevant.

## Research artifacts

- [Release notes with screenshots of component changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/detailed-release-notes/lorota-security-updates.md)


