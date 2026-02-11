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


Research Plan

# Research Plan for UAT AVS MVP on VA.gov 2024-01

<br/>

## Research Goals 	
The purpose of this UAT research is to validate if the AVS MVP feature is working as intended and whether participants can easily navigate to the AVS MVP. Are there any areas of difficulty? Are the navigation changes displaying correctly?
Are participants able to complete each of the tasks given to them? If not, what went wrong?

## Background
Within VA today, Veterans at certain clinics are handed a printed AVS when leaving their appointment, providers can review an AVS with them during their appointment from CPRS, and select Veterans can view a PDF version of AVS on My HealtheVet. Now, we want to create an AVS experience on VA.gov. 
After Visit Summaries (AVS) serve many purposes*, including:
-Promote patient-centered, outpatient care
-Summarize medications, appointments, tests, patient education material and other instructions
-Enhance communication
-Engage patients in their care
-Improve recall of medical instructions
-Meet electronic health record Meaningful Use criteria

### Outcome
We will use the findings to:
 
- Validate the After-visit summary MVP is populating with user data as intended.
- Validate the After-visit summary MVP’s interactive elements are behaving as intended.
- Validate the After-visit summary MVP is accessible for screen reader and low vision users.
- Validate breadcrumb and URL updates.
- Validate the changes to the navigation descriptive back link.


### Research questions
1.	Are participants able to navigate through the “past” appointment feature to view an existing AVS from a past appointment? Are there any areas of difficulty? Are the navigation changes displaying correctly?
2.	Do users mention that the information within the AVS is confusing when unprompted? 
3.	Does each interactive element of the AVS MVP behave as intended? 
4.	Is the information in the AVS MVP displayed as intended?
5.	Can users navigate back to another AVS with the “back to” link.
6.	Are participants able to complete each of the tasks given to them? If not, what went wrong?
7.	Can screen reader and low vision users access and easily navigate the AVS MVP? 

## Method

### Interviews
This research will be conducted as a remote moderated user research study that utilizes a [staging]() built for mobile devices. Participants will be asked to complete specific tasks for UAT and asked follow-up questions to determine if the AVS MVP is behaving as intended.

This test will include 2 versions of the AVS MVP:
Mobile
Desktop

### Location
Data collection will be remote and conducted using Zoom. 

## Research Materials
-  [AVS MVP UAT Conversation Guide]()
-  [AVS MVP UAT Staging]()
-  [UAT AVS MVP Notetaker Participant Transcripts Folder]()

## Recruitment
### Recruitment approach
We will partner with Perigean to recruit Veterans. All efforts will be made to recruit a diverse sample, with participants backgrounds ranging across age, abilities, and ethnicities. 

## Recruitment criteria
[Link to recruitment request ticket]()

### Primary criteria
**Desktop users:**
TBD participants who primarily use a desktop/laptop computer.
All participants must be able to attend sessions on their desktop/laptop computer.
All participants must have had an appointment between the dates of XX and XX.
All participants must have a healthcare provider who furnishes an after-visit summary upon completion of their healthcare appointment.
All participants must have an active MyHealtheVet account. 

**Mobile users:**
TBD participants who primarily use a tablet or other mobile device.
All participants must be able to attend sessions on a mobile device.
All participants must have had an appointment between the dates of XX and XX.
All participants must have a healthcare provider who furnishes an after-visit summary upon completion of their healthcare appointment.
All participants must have an active MyHealtheVet account.

### Secondary criteria:

- At least 4 veterans with a cognitive disability
- At least 2 Screenreader users
- At least 2 screen magnification users
- At least 1 LGBTQ+ Veteran
- At least 1 Native Veteran
 -At least 1 who lives in a rural area

### Screener Questions:

1.	Are you willing to share information of your VA.gov after-visit summary from a recent VA facility health care appointment with a VA researcher?
    - If yes, then move to question 2.
    - If no, then **do not** recruit.

2.	Have you had a VA facility healthcare appointment between the dates of TDB and TBD?
    - If yes, then move to question 3.
    - If no, then **do not** recruit.
 
3.	Does your VA facility healthcare provider offer you a printed After-visit summary upon leaving your healthcare appointment. 
    - If yes, then move to question 4.
    - If no, then **do not** recruit.

4.	Do you have a My HealtheVet account?
    - If yes, then move then recruit.
    - If no, then **do not** recruit.

     


### Perigean Kick-off Meeting
TBD
 - Kristen McConnell UX Lead (kristen.mcconnell@va.gov)
 - Nina Anusavice UX Designer (nina.anusavice@va.gov)

## Timeline:


### Research sessions:
* TBD

### Length of Sessions:
1 hour
1.5 hours for Screen readers,  low vision and cognitive disabilities
* Buffer time between sessions: 30 minutes

### Availability
TBD

## Team Roles	

**Project Point of Contact:**
- Kristen McConnell
- primary phone number: (412) 337-8216
- email; kristen.mcconnell@va.gov

**Moderator:** 
- Kristen McConnell
- primary phone number: (412) 337-8216
- email: kristen.mcconnell@va.gov

**Alternate Moderator:**
- Nina Anusavice
- primary phone number: (508) 353-5641
- email: nina.anusavice@va.gov

**Research Guide Writing and Task Development:**
- Nina Anusavice
- Kristen McConnell	

**Participant Recruiting & Screening:**	
- Perigean

**Participant for Pilot Test:**
- TBD

**Note-takers:**
- Perigean

**Observers:**	
  - Adrian Rollett (adrian.rollett@va.gov)
  - Rob Durkin (robert.durkin@va.gov)
  - Kay Laywer (katherine.lawyer@va.gov)

## Approvals
- Reviewed and approved by **Shane Strassberg on TBD** ?



