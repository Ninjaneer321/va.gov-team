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

# Research Plan for AVS on VA.gov MVP May, 2023

<br/>

## Background
After Visit Summaries (AVS) serve many purposes*, including:
-	Promote patient-centered, outpatient care
-	Summarize medications, appointments, tests, patient education material and other instructions
-	Enhance communication
-	Engage patients in their care
-	Improve recall of medical instructions
-	Meet electronic health record Meaningful Use criteria

Within VA today, Veterans at certain clinics are handed a printed AVS when leaving their appointment, providers can review an AVS with them during their appointment from CPRS, and select Veterans can view a PDF version of AVS on My HealtheVet. Now, we want to create an AVS experience on VA.gov. 

Past user research on [the existing PDF AVS]( https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/research/AVS%20UT%20presentation%20%209-15-16%20final.pdf), helpdesk feedback on MHV Liferay’s AVS, health apartment discovery studies that included AVS, and medical journal articles were reviewed to understand:
-	Veteran expectations on what constitutes an AVS
-	AVS’s value to a Veteran

*Purposes copied from [AVS User Guide]( https://github.com/department-of-veterans-affairs/va.gov-team/blob/0eebafe247417bf1249b8b1917a69d180ccf69fe/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/After-Visit-Summary-User%20Guide-1.2.pdf)

### OCTO Objectives
This research supports the following OCTO objectives: 
1. Veterans can manage their health services online
2. Veterans and their families can find a single, authoritative source of information
3. Logged-in users have a personalized experience, with relevant and time-saving features

### Veteran Journey
This research fits into these points of a Veteran's Journey:
- Taking care of myself
- Retiring
- Aging

## Research Goals 	
The purpose of this research is to get feedback from Veterans and caregivers on the After Visit Summary MVP about ease of use and how well it met expectations. 
 
Additionally, we want to know if:
- if Veteran/caregivers understand the information displayed within the AVS
- what notifications Veterans expect to get about AVS

### Outcome
We will apply insights from this research to improve and iterate on the VA.gov AVS experience.

### Research questions
- Can Veterans/caregivers easily find the AVS within the Appointments section and/or the Care Summaries & Notes section?
- Are any sections or terms displayed within the AVS confusing to Veterans/caregivers?
- Is there any information missing that Veterans/caregivers expect to see in an AVS? or information displayed that Veterans/caregivers weren't expecting to see?
- What notifications about AVS are helpful to Veterans?
  - What information do Veterans expect in an AVS notification?
  - Do Veterans want to receive one notification for each AVS or one notification for all appointments in one day?

### Hypotheses
_Hypothesis 1:_ Veterans and caregivers will be able to locate the AVS within the Appointments section and/ore the Care Summarires & Notes section.

_Hypothesis 2:_ Some Veterans and Caregivers will use different terms than those displayed in the AVS for at least some of the medical terms. 

_Hypothesis 3:_ Some Veterans and Caregivers will not understand all of the medical terms without support. 

_Hypothesis 4:_ Some Veterans and Caregivers will have clear insights into what notifications and information within each notification would be beneficial to them.

## Method

### Interviews
This research will be conducted as a remote moderated user research study that utilizes a [prototype](https://www.figma.com/proto/VHHxvo1QA1ndWc0TBhfkNq/Add-After-Visit-Summary?page-id=2%3A3&type=design&node-id=1233-16119&viewport=-892%2C210%2C0.4&scaling=scale-down&starting-point-node-id=1233%3A16119) built for mobile devices. Participants will be asked to complete specific tasks for usability testing and asked follow-up questions to gain understanding of expectations and satisfaction.

### Location
Data collection will be remote and conducted using Zoom. 


## Research Materials
-  [AVS MVP Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/research/2023-04-MVP-Usability/conversation%20guide.md)
-  [AVS MVP Prototype](https://www.figma.com/proto/VHHxvo1QA1ndWc0TBhfkNq/Add-After-Visit-Summary?page-id=2%3A3&type=design&node-id=1233-16119&viewport=-892%2C210%2C0.4&scaling=scale-down&starting-point-node-id=1233%3A16119)
-  [AVS MVP Notetaker Participant Transcripts Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/research/2023-04-MVP-Usability/transcripts)

## Recruitment

### Recruitment approach
We will partner with Perigean to recruit Veterans. All efforts will be made to recruit a diverse sample, with participants backgrounds ranging across age, abilities, and ethnicities. 

### Perigean Kick-off Meeting
June 6th at 12:00 p.m. with the following attendees:

 - Kristen McConnell UX Lead (kristen.mcconnell@va.gov)
 - Nina Anusavice UX Designer (nina.anusavice@va.gov)

## Recruitment criteria
[Link to recruitment request ticket](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/326)

  

   



## Timeline

### Prepare
- Pilot: June 6, 2023

### Research sessions
* Planned dates of research: June 14-22, 2023

### Length of sessions
* Session length: 1 hour
* Buffer time between sessions: 30 minutes

### Availability
| Team Availability |  Time Slots (ET) |
| ----------- | ----------- |
|June 14, 2023  | 9:30 a.m. - 2:00 p.m. (last session can start at 2:00 p.m.)|
|June 15, 2023  | 9:30 a.m. - 4:00 p.m. (last session can start at 4:00 p.m.)  |
|June 16, 2023  | 11:00 a.m. - 4:00 p.m. (last session can start at 4:00 p.m.)|
|June 20, 2023  | 9:30 a.m. - 12:00 p.m. (last session can start at 12:00 p.m.), and 2:30 p.m. (last session can start at 2:30 p.m.)|
|June 21, 2023  | 9:30 a.m. - 2:30 p.m. (last session can start at 2:30 p.m.)  |
|June 22, 2023  | 9:30 a.m. - 12:45 p.m. (last session can start at 12:45 p.m.)  |

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
- Kristen McConnell	
- Nina Anusavice

**Participant Recruiting & Screening:**	
- Perigean

**Participant for Pilot Test:**
- Stephen Barrs (stephen.barrs@va.gov)

**Note-takers:**
- Perigean

**Observers:**	
  - Adrian Rollett (adrian.rollett@va.gov)
  - Peter Russo (peter.russo@adhocteam.us)
  - Ciera Maddox (ciera.maddox@adhocteam.us)
  - Jeff Roof (jeff.roof@adhocteam.us)
  - Leah De La Costa (leah.delacosta@adhocteam.us)
  - Kay Laywer (katherine.lawyer@va.gov)

## Approvals
- Reviewed and approved by **Shane Strassberg on** ?
