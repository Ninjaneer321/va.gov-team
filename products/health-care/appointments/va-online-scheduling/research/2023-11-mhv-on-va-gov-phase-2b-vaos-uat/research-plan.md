---
# Research Plan Metadata
title: "Research Plan for Appointments on MHV on VA.gov UAT - Phase 2B, November 2023"
date: 2023-11-17
last_updated: 2023-11-17
team: "VA Online Scheduling (VAOS)"
product: "VA Online Scheduling"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Test recently released features to help Veterans navigate between MHV on VA.gov and MHV, navigate to My VA Health (Cerner), navigate between details pages and appointment lists, and print appointment lists"
  product_location: "VA Online Scheduling on MHV on VA.gov"
  user_familiarity: "New navigation and print features for existing VAOS product"
  product_brief_url: "https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1667322271773/26b9a1c19e3d4f1dbcc1dba4e4218a56f0fbb75a?wid=5-1680618107842"

# Research Design
methodology: "Remote moderated UAT and mental model study"
research_format: 
  location: remote
  in_person_details:
    facility: null
    point_of_contact: null
    equipment: null
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Verify via UAT that logged in Veterans are able to utilize recently added features and data is populating as expected"
  - goal_2: "Understand Veteran's mental models as they choose a facility or provider when scheduling an appointment"

research_questions:
  - "Are participants able to navigate to the appointments feature from My VA and MHV on VA.gov?"
  - "Are participants able to navigate their appointments lists?"
  - "Can participants easily print their appointments lists?"
  - "Are users at Cerner facilities able to navigate to My VA Health?"
  - "Does the process of selecting a clinic (VistA) or provider (community care) meet participant expectations?"
  - "What other information would be helpful when scheduling with a provider or clinic?"

hypotheses:
  - "Participants will be able to easily navigate to the appointments tool from all entry points"
  - "Participants will be able to easily print a list of their appointments"
  - "Participants at Cerner facilities will be able to easily navigate to My VA Health"
  - "The process of selecting a facility, clinic, or provider during scheduling will meet participant expectations"

expected_outcomes: "Validate or improve breadcrumb and URL updates, descriptive back link navigation, print button design, and inform approach to improving scheduling process"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Purposive sampling for upcoming appointments and Cerner users"
  
  primary_criteria:
    - "All must have upcoming VA medical appointments scheduled for December 2023 or later"
    - "All must be willing to share appointment information with research team"
    - "All must use Login.gov or ID.me to sign into VA.gov"
    - "At least 2 participants with upcoming appointments at Cerner facilities"
    
  secondary_criteria:
    - "At least 4 participants on mobile device"
    - "At least 4 participants with cognitive disability"
    - "At least 2 screen reader users"
    - "At least 2 screen magnification users"
    - "At least 1 LGBTQ+ Veteran"
    - "At least 1 Native Veteran"
    - "At least 1 from rural area"
    
  screener_questions:
    - question: "Have you been to a VA healthcare facility for a medical appointment in the last 12 months?"
      qualifying_response: "Yes"
    - question: "Do you have any upcoming VA medical appointments scheduled for December 2023 or later?"
      qualifying_response: "Yes"
    - question: "Are you willing to have the research team see your upcoming VA medical appointments?"
      qualifying_response: "Yes"
    - question: "Do you have upcoming appointments at any Cerner facilities?"
      qualifying_response: "Recruit at least 2 who answer Yes"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 16
  completed_sessions_goal: 12
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-11-17"
  pilot_participant: "TBD"
  research_dates: "2023-11-30 to 2023-12-15"
  research_review_submission: "2023-11-17"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results: 
      - "Increase Veteran satisfaction with VA.gov"
  - objective: "Logged-in users have a personalized experience, with relevant and time-saving features"
    key_results:
      - "Decrease call center volume, wait time, and time to resolution"
      
veteran_journey_phases:
  - "Starting up"
  - "Taking care of myself"
  - "Putting down roots"
  - "Retiring"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling"
    
tags:
  - "VAOS"
  - "appointments"
  - "UAT"
  - "MHV-on-VA-gov"
  - "navigation"
  - "print"
  - "cerner"
  - "authenticated"
  - "veterans"
  - "health-care"
---

# Research Plan for Appointments on MHV on VA.gov UAT

## Background

VA Online Scheduling allows Veterans who are logged into VA.gov to schedule and manage their appointments.

The VAOS team recently released features to help Veterans:
- Navigate between MHV on VA.gov and MHV.
- Navigate to My VA Health (Cerner).
- Navigate between the details pages and their appointment lists.
- Print their appointment lists.

This study will test that those features are meeting Veteran's needs.

Additionally, we want to generate some insights around how Veterans choose facilities or providers. This will help inform our approach to improving these flows in future initiatives.

Also see:
- Phased Rollout for MHV on VA.gov - [Phase 1B](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1667322271773/26b9a1c19e3d4f1dbcc1dba4e4218a56f0fbb75a?wid=5-1680618107842)
- [Phase 1B user flow](https://www.figma.com/file/0wG5mpi760FGvVh89phapu/User-flow-for-MHV-Portal-to-Appointments?type=whiteboard&node-id=935-2137&t=1fcwxkJG1yqTgL37-4)
- [New appointments list navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/navigation-link/add-navigation-links-mhv.md)
- [Add Cerner navigation option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/cerner-navigation-mhv-on-va.gov/cerner-navigation-initiative-brief.md)
- [Print appointment list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/print-appointment-list/initiaitve-brief-print-appointment-list.md) 

### OCTO Priorities 

This research supports the following [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):

- Veterans and their families can find a single, authoritative source of information
- Logged-in users have a personalized experience, with relevant and time-saving features

Increase 📈

-   Veteran satisfaction with VA.gov: by providing an after visit summary, a print functionality on the appointment list page, and ease of navigation with updated breadcrums.

Decrease 📉

-   Call center volume, wait time, and time to resolution: by providing the right information about appointments when Veterans need it.

### Veteran journey

Veterans may interact with VAOS at different stages across the [veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):

Starting up

-   MTM: Attending to health needs

Taking care of myself

-   MTM: Recognizing and addressing mental health needs
-   MTM: Managing health issues

Putting down roots

-   Maintaining my emotional health
-   Engaging VA to access benefits and services

Retiring

-   MTM: Taking care of my health
-   MTM: Managing my declining health

## Research goals

**UAT:** Verify via UAT that logged in Veterans are able to utilize recently added features and data is populating as expected.

**Mental Model Study:** Understand Veteran's mental models as they choose a facility or provider when scheduling an appointment. 

### Research questions

**UAT:**
1. Are participants able to navigate between to the appointments feature from My VA and MHV on VA.gov?
1. Are participants able to navigate their appointments lists?
1. Can participants easily print their appointments lists?
1. Are users at Cerner facilities able to navigate to My VA Health?

**Mental Model Study**
1. Does the process of selecting a clinic (VistA) or provider (community care) meet participant expectations?
1. What other information would be helpful when scheduling with a provider or clinic?

### Outcome

We will use the _UAT_ findings to validate or improve:
- the breadcrumb and URL updates for MHV on VA.gov.
- the descriptive back link navigation on the details pages.
- the print button design.

We will use the _mental model study_ findings to:
- better understand participant expectations around facility and clinic selection.
- better understand participant expectations around community care provider selection.
- identify pain points or potential improvements, and use this to inform our approach to improving the scheduling process.

### Hypotheses

1. Participants will be able to easily navigate to the appointments tool from all entry points.

2. Participants will be able to easily print a list of their appointments. 

3. Participants at Cerner facilities will be able to easily navigate to My VA Health.

4. The process of selecting a facility, clinic, or provider during scheduling will meet participant expectations.

## Method

We'll run a moderated test in two parts: an evaluative UAT study and a generative mental model study.

### Location

Remote, over Zoom.

### Research materials

- [Conversation guide](conversation-guide.md)
- [Task tracker](https://docs.google.com/spreadsheets/d/1i4vXL-1MkC-QhdzWUneLyfaopI5UL0JPAI7uHux90DE/edit#gid=0)
- [Observer Signup sheet](https://docs.google.com/spreadsheets/d/1psKVN-csDpXjvwFOEgGBUAdCzaF9M_Ua27pujRqaNzQ/edit?usp=sharing)
- [Mural board for observer notes](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1689954776087/f9c46f95011f1ba2bbe090a71496336e8cf98718?sender=ab46bdc2-9241-4530-b4ae-5f5482510528)

## Recruitment

### Recruitment approach

Perigean will:
- recruit 16 total participants for this study.
- schedule a brief kickoff call to run through the recruitment criteria before recruiting.

### Recruitment criteria

**Primary criteria**

All participants must have upcoming appointments at the time of the study:

**Screener Q1:** Have you been to a VA healthcare facility for a medical appointment in the last 12 months?
```
   - Yes (Go onto Screener question 2)
   - No (Disqualify)
```

**Screener Q2:** Do you have any upcoming VA medical appointments scheduled for December 2023 or later?
```
   - Yes (Go onto Screener question 3)
   - No (Disqualify)
```

All participants must be willing to log into their account and share information about their appointments with the research team.

**Screener Q3:** Are you willing have the research team see your upcoming VA medical appointments during the study? Any personal health information you share will be redacted from the study.
```
   - Yes (Go onto Screener question 4)
   - No (Disqualify)
```
**Screener Q4:** Do you have an email and password for either Login.gov or ID.me that you use to sign into VA.gov?

```
   - Yes (Go onto Screener question 5)
   - No (Disqualify)
```
At least 2 participants must have upcoming appointments at facilities that use the Cerner EHR.

**Screener Q5:** Do you have upcoming appointments at any of the following facilities?
- Mann-Grandstaff VA Medical Center in Spokane, Washington
- Jonathan M. Wainwright Memorial VA Medical Center in Walla Walla, Washington
- VA Central Ohio Healthcare System in Columbus, Ohio  
- Roseburg VA Health Care System in Roseburg, Oregon
- VA Southern Oregon Rehabilitation Center and Clinics in White City, Oregon

**Secondary criteria:**

- At least 4 participants who attend sessions on a mobile device.
- At least 4 participants with a cognitive disabilty
- At least 2 Screenreader users
- At least 2 screen magnification users
- At least 1 LGBTQ+ Veteran
- At least 1 Native Veteran
- At least 1 who lives in a rural area

## Timeline

### Prepare

Test materials will be finalized by November 17th, 2023

Pilot participant email: TBD
Date and time of pilot session: TBD

### Research sessions

Research sessions will begin on or after Nov.30th, 2023

### Length of sessions

1 hour.

### Availability

Monday - Friday, 8:00 am - 5:00 pm EST

NOT AVAILABLE:
- Tuesday, 28 Nov 8:00 am - 2:00 pm EST
- Wednesday, 29 Nov All Day


Please add a 30 minute buffer between sessions.

Please do not schedule more than 3 sessions per day.

## Team roles


-   Moderators: 
    - Melissa Lefevre melissa.lefevre@adhocteam.us
    - Ciera Maddox ciera.maddox@adhocteam.us
    - Peter Russo peter.russo@adhocteam.us

-   Research guide writing and task development 
    - Melissa Lefevre melissa.lefevre@adhocteam.us
    - Ciera Maddox ciera.maddox@adhocteam.us
    - Peter Russo peter.russo@adhocteam.us

-   Participant recruiting & screening: Perigean

-   Project point of contact: Peter Russo peter.russo@adhocteam.us

-   Participant(s) for pilot test: TBD

-   Note-takers:
    - Melissa Lefevre melissa.lefevre@adhocteam.us
    - Ciera Maddox ciera.maddox@adhocteam.us
    - Peter Russo peter.russo@adhocteam.us

-   Observers: 
    - Jeff Roof jeff.roof@adhocteam.us
    - Kristen McConnell Kristen.Mcconnell@va.gov
    - Sara Sterkenberg sara.sterkenburg@adhocteam.us

