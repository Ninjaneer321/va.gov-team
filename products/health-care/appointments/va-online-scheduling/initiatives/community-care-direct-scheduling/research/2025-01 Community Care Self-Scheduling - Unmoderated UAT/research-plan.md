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

# Research Plan - Community Care Self-Scheduling - Unmoderated UAT

## Background

**The Cleland Dole Act** addresses Veteran homelessness, access to care, community care, mental health, research, telehealth, prostate cancer, provider oversight and transparency, long-term care, rural health, benefits, information technology and more. 

**Self-Scheduling and Community Care Self-scheduling Pilot Program**
- As a congressional mandate under the Cleland-Dole Act, VA must address the following for Veterans by the end of 2024:

Self-scheduling appointments
- Allows Veterans seeking for primary care, specialty care, and mental health care under the Veteran’s Community Care Program to self-schedule, modify, and cancel appointments directly online
- Allows VA to expand capabilities of an existing appointment self-scheduling technology or purchase a new appointment self-scheduling technology

The pilot program MVP will allow Veterans at pilot sites to self-schedule optometry appointments using Appointments on va.gov once a referral is approved. They will also have the ability to cancel and reschedule those appointments.

**This UAT study aims to get Veteran feedback on the Community Care self-scheduling pilot process and ensure that Veterans were able to complete the process successfully. These results will inform if future iterations are needed ahead of releasing to more sites.**

### OCTO Priorities
The Community Care Self-Scheduling initiative aligns with the following OCTO-DE Priorities:
- Objective 1: Our digital experiences are the best way to access VA health care and benefits.

### Veteran Journey
This research corresponds to the following points of the Veteran journey:
- Taking care of myself

## Research Goals

### Outcome
This study will give us insight into if Veterans from pilot sites were able to successfully and easily complete the Community Care Self-Scheduling process, as well as capture any feedback they have about the process. 

### Research Questions
- Will users be able to complete the Community Care Self-Scheduling process successfully?


### Hypotheses
- Will users be able to complete the Community Care Self-Scheduling process successfully?
  - Hypothesis: If users make an attempt to complete the self-scheduling process, then they should be able to successfully schedule without assistance.


## Method
This research will be conducted as an unmoderated survey study using Optimal Workshop. To recruit Veterans from the pilot sites, we will add information and a link on the confirmation page of the Community Care Self-Scheduling flow. This will lead to a tailored Perigean registration form so that Perigean can easily identify the participants who are eligible to complete our UAT survey for this product.

**Staff script/interception:**
When CC scheduling staff contact Veterans and ask them if they would like to opt in to self-scheduling, we’ll have them ask Veterans if they’re interested in providing feedback on the process and, if so, to look out for a link at the end of the scheduling process to register to provide feedback at veteranusability.us. 

### Location
Tests will be conducted online at the participant’s leisure. 

### Research Materials
- [Survey link](https://touchpoints.app.cloud.gov/touchpoints/1e89e0df)
- [Custom recruitment registration](https://docs.google.com/forms/d/e/1FAIpQLSeaLpeM0yudkRVQsJzOFRW8yqVqH-f4DKNkXoxxDfP0cRSMCw/viewform)

## Recruitment
1 cohort, 5 participants each, total 5 responses. Minimum threshold of 3 completed responses.

### Primary criteria (must-haves)

#### ALL Cohort participants
- All must have a computer or mobile device and are willing to use it to complete the activity.
- All must have opted in to participate in the Community Care self-scheduling pilot. 
- All must have used the unique registration form leading from the Community Care self-scheduling feature.

## Timeline

### Pilot session
- TBD

### Kickoff with Perigean
- Completed

### Start date
TBD

## Team Roles
Steven Straily (steven.straily@agile6.com) will serve as primary researcher and project point of contact for this study.
Christina Gednalske (christina.gednalske@adhocteam.us) is a secondary point of contact.

## Appendix
### Appendix Item A: Script for MSAs to offer UAT survey

Once you complete your online scheduling, there will be a link where you can provide feedback on the confirmation page.

Through that link, there will be an initial registration survey, and then a feedback survey for the Community Care pilot you participated in. Each activity usually takes about 10-15 minutes to complete. You can start anytime from your smartphone, laptop, or any device with an Internet connection.

We won't share any information or feedback linked to your name or other personal details.

After you've completed the second survey providing feedback, you will receive compensation from our recruitment partner.


