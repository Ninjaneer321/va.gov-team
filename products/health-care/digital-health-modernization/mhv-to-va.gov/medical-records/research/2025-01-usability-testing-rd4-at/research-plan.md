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

# Research Plan for MHV on VA.gov, Medical Records, January 2025

## Background

Our project is part of the Digital Health Modernization strategy, which aims to create a centralized place for Veterans to access their health information. As part of this effort, My HealtheVet (MHV) will be moved to VA.gov. We initially built and tested a prototype of Medical Records in MHV on VA.gov. We conducted usability studies and collected feedback that informed iterations on the website. In this round of testing within a live environment, we will assess some previously tested and newly developed domains with Veterans who are dependent upon assistive technology.

You can read more about our Digital Health Modernization strategy [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/product).

## OCTO Objectives

This research supports the following OCTO objectives:

1. Veterans can manage their health services online
2. Veterans and their families can find a single, authoritative source of information
3. Logged-in users have a personalized experience, with relevant and time-saving features

## Veteran Journey

This research fits into these points of a Veteran's Journey:

- Starting up
- Taking care of myself
- Retiring
- Aging

## Research Goals

1. Identify any usability issues AT-dependent Veterans may experience in understanding their Medical Records Settings, Microbiology, Pathology, and Radiology Results, Vitals, Allergies, and Download your medical record.  
2. Understand AT-dependent Veterans’ needs and expectations within Medical Records.

## Outcome

The results of the usability portion of the study will help us determine if our designs provide the best user experience for Veterans to access their medical records and help to identify any pain points. The results of the generative portion of the study will uncover Veterans’ behaviors and expectations when accessing their Medical Records. Both usability and generative findings will inform future iterations of designs.

## Research questions

1. Can Veterans who use assistive technology find the information they need to manage their healthcare related to:

- Medical Records Settings
- Microbiology, Pathology, and Radiology Results
- Vitals
- Care Summaries and Notes
- Allergies
- Download your medical records

1. What are Veterans’ reactions to the new experience in which they review their records on screen?
2. What are the goals, expectations, and experiences within Medical Records for Veterans who use assistive technologies?

## Hypothesis

_Hypothesis 1:_  Most Veterans who use assistive technology will be able to access and understand information about their medical records to manage their health.

_Hypothesis 2:_ Most Veterans who use assistive technology will have positive reactions to the new experience in which they access their records on screen.

## Methodology

We will conduct interviews and moderated usability testing sessions in which we will ask users to navigate a live environment while we observe their behavior, and ask follow-up prompts as needed.  

## Location

Data collection will be remote. We will use Zoom.

## Research materials

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2025-01-usability-testing-rd4-at/conversation-guide.md)

- [Link to Codespace](https://congenial-fiesta-jjp54vj7p9j3x6x-3001.app.github.dev/my-health/medical-records/)
  
## Recruitment

### Recruitment approach

We will partner with Perigean to recruit Veterans.

### Recruitment criteria

We will schedule a total of 16 Veterans for an expected completion rate of 12 usability tests.

### Criteria for AT users (16)

- 8 participants who rely 100% on a screen-reader to access digital content.
- 5 participants who rely 100% screen magnification to access digital content.
- 3 participants who rely 100% on voice command to access digital content.

### Secondary criteria (nice-to-haves)

1. Age distribution:
    - (3) 75+
    - (5) 65 – 74
    - (3) 55 – 64
    - (3) 35 – 54
    - (2) 18 – 34
2. Education distribution:
    - (5) High School graduate or equivalent or less
    - (4) Some college, no degree
    - (2) Associate degree (occupational or academic)
    - (3) Bachelor's degree
    - (2) Master's degree or higher
3. Demographic distribution:
    - (0) American Indian or Alaska Native
    - (0) Asian
    - (3) Black or African American
    - (3) Hispanic, Latino, or Spanish origin
    - (10) White or Caucasian
4. Residence:
    - (4) rural
    - (12) urban

### Screener for AT users

Please make sure that ALL participants are willing to complete the session **on the device they specified when recruited** and:

- During the session, are willing to share their screen and audio
- Have a working microphone on their device
- Depend on screen reader/Dragon voice command/magnification to access ALL digital content
- Join the session with the device they specified on their screener

1. Do you rely on Dragon voice command (NOT Siri, Google Assistant, or Alexa) for accessing ALL digital content?
    1. Yes – I need Dragon voice command to access ALL digital content _(recruit 3)_
    2. Some – I need Dragon voice command to access SOME digital content, or I only use voice command optionally _(do not recruit unless SR/Mag user)_
    3. No – I do not need Dragon voice command to access digital content. _(do not recruit unless SR/Mag user)_
2. Are you blind or severely visually impaired and rely on a screen reader (such as JAWS, VoiceOver, NVDA, or Talkback) for accessing ALL digital content?
    1. Yes – I need a screen reader to access ALL digital content _(recruit 8)_
    2. Some – I need a screen reader to access SOME digital content, or I only use Screen reader optionally _(do not recruit)_
    3. No – I do not need a screen reader to access digital content. _(do not recruit unless Dragon/Mag user)_
3. Which screen reader will you be using for the session?
    1. NVDA
    2. JAWS
    3. Voiceover
    4. Talkback
    5. Other – please specify
4. What device will you use to join the session?
    1. Desktop/Laptop - Windows
    2. Desktop/Laptop - Mac
    3. Tablet – Android (_recruit up to 1_)
    4. Tablet – iPad (_recruit up to 1_)
    5. Mobile phone – Android
    6. Mobile phone – iPhone
5. Do you rely on screen magnification of at least 400% (your view is only part of what the whole page would be at 100%) for accessing ALL digital content?
    1. Yes – I need at least 400% screen magnification to access ALL digital content _(recruit 5)_
    2. Some – I need 400% screen magnification to access SOME digital content, or I only use screen magnification optionally _(do not recruit unless SR/VC user)_
    3. No – I do not need 400% screen magnification to access digital content. _(do not recruit unless SR/VC user)_
6. What screen magnification software do you use?
    1. Zoom in Mac accessibility settings
    2. Magnifier in Windows accessibility settings
    3. Zoomtext  _(do not recruit)_
    4. Supernova
    5. Other, please specify
    6. I do not use screen magnification software _(recruit only if SR/VC user)_

&nbsp;

## Timeline – AT Users

**Prepare**

- Pilots: We will schedule our own, thank you.

**Research sessions**

- Planned dates of research: January 29 - February 5

**Length of sessions**

- 120 minutes
- Buffer time between sessions: 30 minutes
- No more than 3 sessions per day.

**Availability for AT Users**
| **Day** | **Team Availability** | **Time Slots (Eastern Time Zone)** |
| --- | --- | --- |
| Wednesday | January 29, 2025 | 8:00am – 5:00pm |
| Thursday | January 30, 2025 | 8:00am – 5:00pm |
| Friday | January 31, 2025 | 8:00am – 5:00pm |
| Monday | February 3, 2025 | 8:00am – 5:00pm |
| Tuesday | February 4, 2025 | 8:00am – 4:00pm |
| Wednesday | February 5, 2025 | 8:00am – 5:00pm |

**Availability for AT Users**
| **Day** | **Team Availability** | **Time Slots (Eastern Time Zone)** |
| --- | --- | --- |
| Thursday | February 6, 2025 | 8:00am – 5:00pm |
| Friday | February 7, 2025 | 8:00am – 5:00pm |
| Monday | February 10, 2025 | 8:00am – 5:00pm |
| Tuesday | February 11, 2025 | 8:00am – 4:00pm |
| Wednesday | February 12, 2025 | 8:00am – 5:00pm |

## Team Roles

Moderator: Mel Stern

Research guide writing and task development: Mel Stern, Anne Kennedy

Participant recruiting & screening: Perigean

Project point of contact: Mel Stern

Accessibility specialist: Riley Orr

Participants for pilot test: TBD – we will do this ourselves, thank you.

Note-takers: Melissa Ashton

Observers: Marci McGuire Kaitlin Fink, Lexi Wunder, Rianna Lloyd

| **AT Type** | **Device** |
| --- | --- |
| Dragon - Voice Command | Windows - Desktop |
| JAWS – Screen reader | Windows - Desktop |
| Voiceover - Screen reader | Mac- Desktop<br><br>iPhone – Mobile<br><br>iPad - Tablet |
| NVDA - Screen reader | Windows - Desktop |
| Talkback – Screen reader | Android – Mobile<br><br>Android – Tablet |
