---
# Research Plan Metadata
title: "Research Plan for AVS on VA.gov MVP, May 2023"
date: 2023-06-06
last_updated: 2023-06-06
team: "Digital Health Modernization"
product: "After Visit Summary (AVS) on VA.gov"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "After Visit Summaries (AVS) promote patient-centered outpatient care, summarize medical information, enhance communication, and engage patients in their care. Veterans currently receive printed AVS at clinics or view PDFs on My HealtheVet. We want to create an AVS experience on VA.gov that meets Veteran expectations and provides value."
  product_location: "Appointments section and Care Summaries & Notes section on VA.gov"
  user_familiarity: "New product - MVP testing"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Get feedback from Veterans and caregivers on the After Visit Summary MVP about ease of use and how well it met expectations"
  - goal_2: "Understand if Veteran/caregivers understand the information displayed within the AVS"
  - goal_3: "Understand what notifications Veterans expect to get about AVS"

research_questions:
  - "Can Veterans/caregivers easily find the AVS within the Appointments section and/or the Care Summaries & Notes section?"
  - "Are any sections or terms displayed within the AVS confusing to Veterans/caregivers?"
  - "Is there any information missing that Veterans/caregivers expect to see in an AVS?"
  - "Is there information displayed that Veterans/caregivers weren't expecting to see?"
  - "What notifications about AVS are helpful to Veterans?"
  - "What information do Veterans expect in an AVS notification?"
  - "Do Veterans want to receive one notification for each AVS or one notification for all appointments in one day?"

hypotheses:
  - "Veterans and caregivers will be able to locate the AVS within the Appointments section and/or the Care Summaries & Notes section"
  - "Some Veterans and Caregivers will use different terms than those displayed in the AVS for at least some of the medical terms"
  - "Some Veterans and Caregivers will not understand all of the medical terms without support"
  - "Some Veterans and Caregivers will have clear insights into what notifications and information within each notification would be beneficial to them"

expected_outcomes: "We will apply insights from this research to improve and iterate on the VA.gov AVS experience."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "diverse sample across age, abilities, and ethnicities"
  
  primary_criteria:
    - "Mix of Veterans and caregivers"
    - "Diverse age distribution"
    - "Diverse education levels"
    - "Diverse racial and ethnic backgrounds"
    
  secondary_criteria:
    - "Geographic diversity"
    - "Mix of urban and rural"
    
  screener_questions:
    - question: "Recruitment criteria details in recruitment ticket"
      qualifying_response: "See recruitment request ticket"
      
participants:
  veterans: 10
  caregivers: 2
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-06-06"
  pilot_participant: "Stephen Barrs"
  research_dates: "2023-06-14 to 2023-06-22"
  research_review_submission: "2023-06-06"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Veterans can access and understand their After Visit Summaries online"
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results:
      - "Centralized health information access on VA.gov"
  - objective: "Logged-in users have a personalized experience, with relevant and time-saving features"
    key_results:
      - "Personalized AVS experience with relevant appointment information"
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/research/AVS%20UT%20presentation%20%209-15-16%20final.pdf"
    
tags:
  - "AUD: Veterans"
  - "AUD: Caregivers"
  - "BNFT: Healthcare"
  - "MHV: After-Visit-Summary"
  - "MHV: Medical-Records"
  - "PRDT: MHV-on-VA.gov"
  - "PRDT: Appointments"
  - "RESRCH: Usability"
  - "RESRCH: Remote"
  - "RESRCH: Prototype"
  - "HDW: Mobile"
  - "authenticated"
  - "care-summaries"
  - "appointment-summary"
  - "medical-documentation"
  - "digital-health-modernization"
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
