---
# Research Plan Metadata
title: "Research Plan for Decision Letter Download, September 2022"
date: 2022-09-01
last_updated: 2022-09-01
team: "Benefits Team"
product: "Claim Status Tool - Decision Letter Download"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans need to wait for physical mail to receive decision letters and have no digital access, causing delays in pursuing disagreement pathways and third-party benefit applications"
  product_location: "Claim Status Tool on VA.gov"
  user_familiarity: "New feature"
  product_brief_url: "https://docs.google.com/document/d/1RMy84KMu7mzaQznhD5vn4Q18oVlWsBYwP3hixqF3INY/edit"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Test the effectiveness of the MVF design solution for Decision Letter Download"
  - goal_2: "Ensure that the feature as designed is usable and accessible"
  - goal_3: "Validate the design before proceeding to development phase"

research_questions:
  - "How do Veterans currently experience the decision letter user journey?"
  - "Is the design proposal effective for solving the user problem of needing access to digital decision letters?"
  - "Can participants demonstrate clear understanding of why we're building this feature?"
  - "Can participants successfully interact with the Decision Letter Download feature?"

hypotheses:
  - "Veterans will demonstrate a clear understanding of the feature's purpose"
  - "Veterans will be able to interact with the feature successfully"
  - "The design will improve upon the current experience of waiting for physical mail"

expected_outcomes: "Study results will validate the Decision Letter Download MVF design. If major issues are found, iterate on the solution. If not, proceed to development phase."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Recruit underrepresented Veterans including older Veterans, mobile-first users, and Veterans of color"
  
  primary_criteria:
    - "5 mobile-first users of VA.gov"
    - "5 Veterans aged 55-64+"
    - "5 Black Veterans"
    
  secondary_criteria:
    - "Older Veterans"
    - "Veterans primarily on mobile devices"
    - "Veterans of color"
    
  screener_questions:
    - question: "Do you primarily use mobile devices to access VA.gov?"
      qualifying_response: "Yes (for 5 participants)"
      
participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2022-09-12 to 2022-09-16"
  research_review_submission: "2022-08-30"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase the usage and throughput of VA services"
    key_results: "Increase usage of VA.gov by enabling direct access to decision letters"
  - objective: "Decrease the time Veterans spend waiting for an outcome"
    key_results: "Reduce waiting time by eliminating physical mail delivery requirement"
      
veteran_journey_phases:
  - "Taking Care of Myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Multiple research studies suggest veterans want decision letter download feature"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Disability"
  - "PRDT: Claim-status-tool"
  - "usability-testing"
  - "authenticated"
  - "DSC: Button"
  - "DSC: Link"
---

# Research Plan for Decision Letter Download 

Skyler Schain · Designer/Researcher

Sep 2022

## Background
Multiple research study findings suggest that the ability to download decision letters is a feature many veterans would like included in the Claim Status Tool. Currently, veterans need to wait for their decision letters to arrive via physical mail and, if they lose them, need to request one by reaching out to a call center representative or through other online channels with transaction costs that diminish their experience.
Veterans often need to provide copies of their decision letters to a representative to pursue disagreement pathways related to the decision. In addition, some benefits provided by third-parties require a decision letter as proof of the veterans’ disability status.


[Feauture Brief](https://docs.google.com/document/d/1RMy84KMu7mzaQznhD5vn4Q18oVlWsBYwP3hixqF3INY/edit)

### OCTO Objectives 

This feature will most directly help the following OCTO objectives: 
- **Increase the usage and throughput of VA services.** 
  - If Veterans are able to access their decision letters directly from VA.gov, we hypothesize that usage of VA.gov will increase
- **Decrease the time Veterans spend waiting for an outcome**
  - By not having to wait for physical mail to arrive, we hypothesize Veterans will be informed of outcomes quicker

### Veteran Journey
These events fall mainly in the "Taking Care of Myself" portion of the Veteran Journey. 

## Research Goals	
For this research, we would like to test the effectiveness of the MVF (Minimum Viable Feature) design solution for Decision Letter Download. We would like to ensure that the feature as designed is usable and accessible.

### Outcome
We hope the study results will validate the design of the Decision Letter Download MVF. If we find major issues with the proposed design, we will iterate on the solution to fix what we've identified. If we do not, we will proceed to the development phase.

### Research questions
- Understand more about the decision letter user journey
- Assess whether the design proposal is effective for solving the user problem (i.e. needing access to the digital decision letter)

### Hypothesis
We know that Veterans anxiously await their decision letters, and that the current Claim Status Tool does not do a good job of informing them of decisions. They currently have to wait for physical mail to arrive before they know their claim decision. During the study, we hope to see participants demonstrate a clear understanding of why we're building this feature, the purpose it serves, and how to interact with it successfully. 

## Method	
Usability testing

### Location
Remote via Zoom

### Research materials

For moderated usability tests: 
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2022-08-Decision-Letter-Download/conversation-guide.md)
- [Desktop prototype](https://sketch.com/s/8b025901-295d-4929-95cc-8dbeb28454b3/a/xrJyeYl/play)
- [Mobile prototype](https://sketch.com/s/8b025901-295d-4929-95cc-8dbeb28454b3/a/QbE4YZY/play)
	
## Recruitment	

Working with Perigean to recruit Veteran participants for remote moderated study.

### Recruitment approach
Am looking to recruit underrepresented Veterans in the following areas: 
- Older Veterans
- Veterans primarily on mobile devices
- Veterans of color

For the purposes of completing the research we will not be reaching the following underrepresented groups:
- Veterans who use assistive technologies (due to using a prototype)
- Veterans w/ Cognitive Disability
- Rural Veterans
- Veterans with No degree
- Veterans with Other than honorable discharge
- Immigrant origin
- Women
- Expat (living abroad)

### Recruitment criteria
10 total Veterans. 5 on mobile and 5 on desktop. 

**Primary criteria (must-haves)**
- 5 mobile-first users of VA.gov. See "Recruitment approach" above for preferences related to recruitment of underrepresented Veterans.
- 5 Veterans aged 55-64+
- 5 Black Veterans

## Timeline
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

### Prepare
The prototype will be reviewed at the Midpoint Review on Aug 30, 2022.

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: TBD
* Date and time of pilot session: TBD

### Research sessions
* Planned dates of research: Week of September 12

### Length of sessions
* Session length: 1 hour
* Buffer time between sessions: 30 minutes

### Availability
September 12-16 (8AM–6PM).
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Skyler Schain 
- Research guide writing and task development (usually but not always same as moderator): Skyler Schain	
- Participant recruiting & screening: Perigean
- Project point of contact: Skyler Schain, Jacob Worrell	
- Participant(s) for pilot test:	
- Note-takers: TBD
- Observers: TBD
