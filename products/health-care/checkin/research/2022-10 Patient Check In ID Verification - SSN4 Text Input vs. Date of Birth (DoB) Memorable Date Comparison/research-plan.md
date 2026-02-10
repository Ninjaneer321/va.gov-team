---
# Research Plan Metadata
title: "Research Plan for Patient Check In ID Verification - SSN4 Text Input vs. Date of Birth (DoB) Memorable Date Comparison, October 2022"
date: 2022-10-01
last_updated: 2023-07-30
team: "Modernized Check-In Experience Team"
product: "Patient Check-In (PCI)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Improvements to Low Risk One Time Authentication (LoROTA) are required based on feedback from VA Profile Team and VA security requirements. Security improvements include removing the use of SSN4 (text input) as an authentication variable and begin using Date of Birth (memorable date) as soon as possible."
  product_location: "VA.gov - Mobile check-in authentication"
  user_familiarity: "iteration"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin"

# Research Design
methodology: "A/B testing via phased rollout"
research_format: 
  location: remote
  moderated: false
  
# Research Goals & Questions
research_goals:
  - goal_1: "Ensure that the new identity verification method (memorable date) is as successful as the existing method (last name, last 4 SSN)"
  - goal_2: "Validate security improvements to LoROTA while maintaining user experience quality"
  - goal_3: "Monitor performance metrics to compare authentication success rates between methods"

research_questions:
  - "Does the memorable date component perform as well as the existing SSN4 text input method?"
  - "What are the failure and success rates for memorable date component compared to existing method?"
  - "Are there any significant usability issues with the memorable date component during authentication?"

hypotheses:
  - "The memorable date component will have similar or better authentication success rates compared to SSN4 text input"
  - "Veterans will be able to successfully authenticate using their date of birth without significant difficulty"
  - "The security improvements will not negatively impact user experience"

expected_outcomes: "Successful transition from SSN4 to Date of Birth authentication method while maintaining or improving authentication success rates and meeting security requirements."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Production users via phased rollout"
  approach: "Phased rollout starting at 10% of users (~500 per day), expanding based on performance"
  
  primary_criteria:
    - "Veterans using Patient Check-In on VA.gov"
    - "Real-world production users"
    - "Phased rollout approach for gradual testing"
    
  secondary_criteria:
    - "N/A - Production rollout"
    
  screener_questions:
    - question: "N/A - Production rollout"
      qualifying_response: "N/A"
      
participants:
  veterans: 500
  caregivers: 0
  dependents: 0
  total_recruited: 500
  completed_sessions_goal: 500
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-07-30"
  pilot_participant: "10% production users"
  research_dates: "2023-07-30 to 2023-08-13"
  research_review_submission: "2022-10-01"
  
session_details:
  duration_minutes: 5
  buffer_minutes: 0
  max_sessions_per_day: 500
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: "Improve security while maintaining usability"
  - objective: "Increase completion rate of online transactions"
    key_results: "Maintain or improve authentication success rates"
      
veteran_journey_phases:
  - "Taking care of myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/issues/44692"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/issues/44383"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/detailed-release-notes/lorota-security-updates.md"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: Check-in"
  - "DSC: Form"
  - "DSP: Ask users for dates"
  - "DSC: Memorable date"
  - "DSC: Text input"
  - "authentication"
  - "security"
  - "A/B-testing"
  - "phased-rollout"
  - "identity-verification"
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


