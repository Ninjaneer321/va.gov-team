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

# Research Plan for ARF Team, Accredited Representative Portal, Single Accredited VSOfficers, 21-22 Accept/Decline User Testing, 03/2024

## Background

The Accredited Representative Facing Team is seeking to re-envision the Accredited Representative experience so that they can more seamlessly and accurately help Veterans with their VA interactions, including helping Veterans apply for, manage, and update their VA benefits.

Our initial focus is on the process of accepting the power of attorney (POA) given in Form 21-22 which appoints a Veterans Service Organization (VSO) as a Veteran’s representative, giving them POA.

### OCTO Priorities

**Grow digital submissions** / Focus on the needs of accredited representatives, and the Veterans who work with them: After years of focusing exclusively on Veterans who want to interact directly with VA, we will build tools for Veterans who want to work with accredited representatives, and the reps who support those Veterans. In doing so, we will redirect to VA.gov traffic currently going through eBenefits and Stakeholder Enterprise Portal (SEP).

Full list of [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md).

### Veteran Journey

Any/all points when a Veteran needs support filing and accessing their benefits.

## Research Goals
- Understand the usability of the **single accredited Veteran Service Officer** Accredited Representative (ARP) 21-22 flow on desktop.
- Information about current POA process and caseload will help determine improvements to the authenticated landing page and POA views to decrease cognitive load and facilitate smoother decision making.

### Outcome
* User testing will inform adjustments to the ARP 21-22 flow to improve usability.
* Feedback about the unauthenticated and authenticated ARP tool will inform content strategy and exploration of additional functionality required for ARP v1.

### Research questions
- Is the purpose and audience for the ARP landing page clear? Is the content valuable or is anything missing?
- Does the sign-in experience meet VSOffs expectations?
- What information is most valuable to VSOffs on the authenticated landing page? Is any information missing?
- Are navigation categories within ARP clear?
- Are there any challenges with finding and accepting a specific Veteran’s 21-22 request?
- Is information about the Veteran/claimant sufficient for making a decision about a 21-22 request? Is there any information missing?
- What functionality is missing from the 21-22 accept/decline flow?

### Hypotheses
- File number and SSN will be the most desired Veteran search functions
- VSOffs want visibility into the system working, such as confirmation an accepted 21-22 has been processed and they now have access to the e-Folder

## Methodology

**Semi-structured interviews** / The interviewer will ask the representative a series of questions to understand users’ current 21-22 process, from filling it out to submission, with a focus on understanding current pain points and mental models. 

**Usability testing** / Accredited representatives will be asked to engage with a prototype of Accredited Representative Portal (ARP) to test usability, understandability of content, and desirability of features.

### Location
Online, over Zoom. Point of contact is Renata Keck, UX Researcher/Designer.

### Research materials
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/2024-03%20Single%20Accredited%20Testing/conversation-guide.md)
- [Recruitment plan](https://docs.google.com/document/d/14xLcuD5Pq67qmnpiY8_r7t7x00bprE2xSviJUOreY5U/edit#heading=h.dneu68fnw65f)
- [Veterans Service Officer 21-22 accept/decline prototype](https://www.figma.com/proto/C3sdnDf8anVqXVdmiCWwq8/%F0%9F%9A%A7-Accredited-Rep-Facing?page-id=0%3A146&type=design&node-id=437-34553&viewport=104%2C1305%2C0.05&t=NPr6SMchXdOO5N4R-8&scaling=min-zoom&starting-point-node-id=437%3A34553&hotspot-hints=0&hide-ui=1)
- [Note taking and debrief Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711575270185/83b03fe96dcafe9f42b206e0dc3efbfd2457c1f2?sender=u8cf3f08a008c2b61ad621433)

## Recruitment
Our target audience is 8 Veterans Service Officers (with expectations of speaking to 5) who are accredited through a single Veterans Service Organization (VSOrg) and whose primary role is to work directly with Veterans and claimants. Our goal is to have an even split between junior and more senior or experienced VSOffs.

### Recruitment approach
Recruitment for this study will focus on Veterans Service Officers (VSOffs) who are accredited with a single Veterans Service Organization (VSOrg). Our understanding is that the majority of singly accredited VSOffs are employed through a Big 6 VSOrg. Understanding how these officers differ from those who hold multiple accreditations may uncover differences in work flows that the ARP tool will need to account for. 

**Recruitment criteria**

3-4 VSOffs from each group, ideally 8 Officers total

Primary criteria (must-haves)
- Mixture of novice and experienced users
- Accredited through a single Veterans Service Organization
- Must work in a role that primarily interacts with Veterans and claimants

Secondary criteria
- Mixture of Veterans and non-Veterans
- Accredited through a variety of different Veterans Service Organizations

## Timeline
- [x] 03/20 Research plan, conversation guide and recruitment strategy prepared
- [x] 03/25 Artifacts updated to reflect team feedback, submitted to PO and Enablement for review
- [x] 04/02 Pilot session completed
- [x] 04/02 - 04/03 Start recruitment
- [x] 04/15 - 04/26 Conduct sessions
- [x] 04/15 - 04/30 Data analysis
- [x] 05/01 - 05/08 Reporting
- [x] 05/?? Final presentation

Timeline is an estimation and will be updated if needed. Dependencies that may impact this timeline include:
- Prototype completion
- Review process with direct team and VA enablement
- Recruitment

Link to ARF [design/research roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705012017021/1d76cf5fe7c9aab8ee495159f04a4e45853cdae8?wid=0-1709217745477)

### Length of sessions
- Session length: 75 minutes
- Buffer time between sessions: 30-45 minutes
- Maximum sessions per day: 3

### Availability
- Monday-Friday: 10am - 6pm Eastern

### Team Roles
- **Moderators:** Rebecca Blakiston, Renata Keck and Kristen Faiferlick will rotate moderating responsibilities.
- **Research guide writing and task development:** Renata Keck
- **Participant recruiting & scheduling:** Renata Keck and Rebecca Blakiston will coordinate scheduling (using Zoom Scheduler). For users with firewall concerns, recruitment messaging will prompt them to schedule directly with Renata Keck.
- **Project point of contact**: Renata Keck
- **Notetakers:** Rebecca, Renata and Kristen will rotate note taking responsibilities.
- **Observers:** TBD
- **Pilot:** Rebecca (moderator), Renata (lead notetaker), Kristen, Gabe, and Emily (observers/secondary notetakers), Mike Marinos (participant)
