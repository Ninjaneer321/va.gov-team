---
# Research Plan Metadata
title: "Research Plan for Claim Status Tool, Document Status, November 2024"
date: 2024-11-16
last_updated: 2024-11-16
team: "Benefits Team 1"
product: "Claim Status Tool - Document Status"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The file upload experience in the Claim Status Tool on VA.gov needs improvement, as the status of uploaded documents is unclear for Veterans. In the past, this uncertainty led to silent failures where Veterans weren't told an error occurred after upload. Although we now send emails when errors occur, we need to provide Veterans with real-time transparency into the status of their evidence submissions."
  product_location: "Claim Status Tool (CST) on VA.gov - File upload experience"
  user_familiarity: "Iteration - improving document upload status visibility and resolving silent failures"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Document%20Status%20Initiative.md"

# Research Design
methodology: "semi-structured interviews"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Evaluate whether participants can use the alerts and statuses to effectively understand different types of success and upload failures"
  - goal_2: "Identify whether Veterans recognize the connection between a failure notification email and the in-app alerts for Type 2 failures"
  - goal_3: "Identify what a Veteran expects to happen when they mail in documents"
  - goal_4: "Understand how the upload status impacts trust in the claims process"

research_questions:
  - "Is the 'In progress' state useful - do they understand that the document hasn't been completely uploaded to their claim?"
  - "Do Veterans make the connection between the email content and the in-app alerts?"
  - "Do Veterans understand what to do after seeing the email and/or in-app alerts for failed uploads?"
  - "Do Veterans feel confident in VA's ability to properly process their mailed-in documents?"
  - "What do Veterans expect to happen in CST when they mail in a document?"
  - "Do the interactions result in any concerns about deadlines or impact trust in VA?"

hypotheses:
  - "The proposed design makes it clear what the status of the uploaded document is"
  - "Veterans will know what to do in scenarios where document uploads were successful and scenarios where document uploads failed"
  - "Users will find that real-time in-app status updates enhance the overall service experience by complementing the information provided via email"
  - "Providing Veterans with clarity via in-app status updates will reduce the need for support inquiries"

expected_outcomes: "Our research will reveal whether real-time status updates are helpful to Veterans. Additionally, we aim to identify any obstacles Veterans face from receiving a failure notification to sending in their physical documents."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "maximum variation sampling"
  
  primary_criteria:
    - "Veterans must have filed a (standard, non-FDC) disability compensation claim with the VA within the past 5 years"
    - "Veterans must have uploaded files using the claim status tool on VA.gov"
    - "Must be using desktop device during the study"
    - "3 Black Veterans"
    - "3 Veterans age 55-64+"
    - "2 Veterans without a degree"
    - "2 Rural"
    - "At least 3 women Veterans"
    
  secondary_criteria:
    - "Diversity across demographics and geographies"
    
  screener_questions:
    - question: "Have you filed a disability compensation claim with the VA in the last 5 years?"
      qualifying_response: "Yes"
    - question: "Have you uploaded files using the claim status tool on VA.gov?"
      qualifying_response: "Yes"
      
participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-01-16"
  pilot_participant: "Rocio De Santiago"
  research_dates: "2025-01-20 to 2025-01-28"
  research_review_submission: "2024-11-16"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 60
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Improve transparency and trust in document upload process"
      - "Reduce support inquiries related to document status"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Silent failures research"
    - "Claim Status Tool previous studies"
    - "Document upload experience research"
    
tags:
  - "claim-status"
  - "CST"
  - "disability-compensation"
  - "document-upload"
  - "file-upload"
  - "document-status"
  - "semi-structured-interviews"
  - "prototype"
  - "silent-failures"
  - "evidence-submission"
  - "alerts"
  - "email-notifications"
  - "real-time-status"
  - "trust"
  - "authenticated-experience"
  - "benefits-portfolio"
  - "desktop"
  - "evaluative"
---

# Research Plan for Claim Status Tool, Document Status

Benefits Team 1 · November 2024

## Background

The file upload experience in the Claim Status Tool on VA.gov needs improvement, as the status of their uploaded documents is unclear for Veterans. In the past, this uncertainty has led to silent failures, where the Veteran wasn't told an error occurred at some point after upload. We now send an email to the Veteran when such an error occurs, so the failures are no longer "silent." In these improvements, we aim to provide Veterans with real-time transparency into the status of their evidence submissions. We believe this visibility will reduce anxiety, while clear and actionable feedback on failures will boost Veterans' confidence in the process and enable self-service resolution. This approach is also expected to reduce support inquiries to CST.

Although we have resolved the major pain point of silent failures and made Veterans aware of processing issues with their files, we want to provide background information on what we considered silent failures and describe how they impacted Veterans.

Silent failures occur when a Veteran submits a document, but it fails to reach downstream services or record owners. In the past, Veterans were not notified of these issues. This lack of real-time updates created confusion, delayed corrective actions, increased support inquiries, and led to repeated failed attempts.

[Link to initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Document%20Status%20Initiative.md).

### OCTO Priorities 

Which [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) does this research support? Work with your VA lead and product manager as needed.

* Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

### Veteran Journey
* This work supports a Veteran whenever they are filing a disability compensation claim, which could occur across a wide swath of the Veteran journey, ranging all the way from "Getting out" to "Aging."

## Research Goals

1. Evaluate whether participants can use the alerts and statuses to effectively understand different types of success and upload failures.
2. Identify whether Veterans recognize the connection between a failure notification email and the in-app alerts for Type 2 failures.
3. Identify what a Veteran expects to happen when they mail in documents
4. Understand how the upload status impacts trust in the claims process

### Outcome

Our research will reveal whether real-time status updates are helpful to Veterans. Additionally, we aim to identify any obstacles Veterans face from receiving a failure notification to sending in their physical documents.

### Research questions

1. Is the "In progress" state useful - do they understand that the document hasn't been completely uploaded to their claim?
2. Do Veterans make the connection between the email content and the in-app alerts
3. Do Veterans understand what to do after seeing the email and/or in-app alerts for failed uploads?
4. Do Veterans feel confident in VA's ability to properly process their mailed-in documents? What do Veterans expect to happen in CST when they mail in a document?
5. Do the interactions result in any concerns about deadlines or impact trust in VA?

### Hypotheses

* The proposed design makes it clear what the status of the uploaded document is.
* Veterans will know what to do in scenarios where document uploads were successful and scenarios where document uploads failed.
* Users will find that real-time in-app status updates enhance the overall service experience by complementing the information provided via email, offering additional clarity and reassurance during the document upload process.
* Providing Veterans with clarity via in-app status updates will reduce the need for support inquiries.

## Methodology	
Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. 

Semi-structured interviews

### Location
Remote on Zoom

### Research materials

For moderated usability tests: 
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-11-Document-Status/converstation-guide.md)
- [Prototype [Figma]](https://www.figma.com/proto/m1Xt8XjVDjZIbliCYcCKpE/Document-status-(formerly-silent-failures)?page-id=2771%3A20256&node-id=3110-56951&viewport=172%2C935%2C0.14&t=uNSW6uI6bRfPATaC-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3110%3A56951)
	
## Recruitment	

### Recruitment approach
The intended audience is Veterans who at some point filed a disability compensation claim with VA in the last 5 years.

We intend to use Maximum Variation Sampling as a recruitment strategy. Below is the demographic breakdown of participants we would like:

10 total participants:

* 3 Black Veterans
* 3 Veterans age 55-64+
* 2 Veterans without a degree
* 2 Rural
* At least 3 women Veterans
* The participants must be using a desktop device during the study.


#### Primary criteria (must-haves)
- Veterans must have filed a (standard, non-FDC) disability compensation claim with the VA within the past 5 years.

#### Screener questions
- Have you filed a disability compensation claim with the VA in the last 5 years? **Should be yes**
- Have you uploaded files using the claim status tool on VA.gov?

### Pilot
A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: Rocio De Santiago
* Date and time of pilot session: Jan. 16, 2025 at 2 PM

### Research sessions
* Planned dates of research: Jan. 20-24 and 27, 28 2025

### Length of sessions

* Session length: 1 hour
* Buffer time between sessions: 1 hour 
* Maximum Sessions per day: 3 sessions per day

### Availability

Monday - Friday: 9 AM ET - 3:30 PM ET
	
## Team Roles	

- Moderator: Gary Homidas
- Research guide writing and task development: Gary Homidas, Skyler Schain
- Participant recruiting & screening: Perigean
- Project point of contact: Gary Homidas, Jacob Worrell
- Participant(s) for pilot test: Rocio De Santiago
- Accessibility specialist (for sessions where support for assistive technology may be needed):	David Kennedy
- Note-takers/Observers: Skyler Schain, Jacob Worrell, David Kennedy, Peri McLaren, Jerek Shoemaker, Sam Cormier, Julie Strothman
