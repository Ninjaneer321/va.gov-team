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

# Research Plan for Your VA letters and documents

### **Background**  
The "[Your VA letters and documents](https://staging.va.gov/records/download-va-letters/letters)" page lets Veterans access important letters needed to verify eligibility and status for benefits. However, the page prioritizes editing the Veteran’s mailing address, and Veterans cannot view, download, or print their letters until they click the "View Letters" button at the bottom. This extra step creates unnecessary friction, making it harder for Veterans to quickly and efficiently download their benefit-related letters.

In addition, by making letter access dependent on a required mailing address, the current flow risks excluding Veterans who do not have a valid mailing address in their VA.gov profile.

### **OCTO priorities**

**Objective 1:** VA's digital experiences are the easiest and most efficient way to access VA health care and benefits

### **Veteran journey**

This work improves access to the benefit letters and other necessary service documents that Veterans need to verify their eligibility for other VA benefits.

## **Research goals**

- **Goal 1:** Verify that the new design removes barriers for Veterans trying to find, understand, and use the benefit letters.  
- **Goal 2:** Understand what motivates Veterans to get their benefit letters.  
- **Goal 3:** Understand how the mailing address requirement affects different Veteran populations.

## **Research questions**

**Goal 1: Verify that the new design removes barriers for Veterans trying to find, understand, and use the benefit letters.**

- Will Veterans feel they need to edit their address before downloading a letter?
- Do Veterans expand the accordions when looking for their letters?
- What do veterans expect when they click on a link to a benefits letter?
- What challenges do Veterans encounter when generating a customized Benefit Summary and Service Verification Letter?


**Goal 2: Understand why Veterans want benefit letters.**

- Which letters do Veterans find valuable?
- Do Veterans understand the different types of letters and why they are needed before they come to the page?
- Do Veterans understand why they need to include or exclude certain information from their Benefit Summary and Service Verification Letter?
- What do Veterans do if they don't see the letter they're looking for?


**Goal 3: Understand the impact of the mailing address requirement in downloading and viewing benefit letters.**

- What problems can result from making letter access dependent on a required mailing address?
- What happens if a Veteran doesn’t currently have a mailing address?
- Are we doing a good job communicating that this mailing address is the "latest and greatest" that appears on the Veteran's va.gov profile?
- Do Veterans expect their customized Benefit Summary and Service Verification Letter to include their current mailing address, too?


## **Outcome**

We'll use the findings from this research to improve Veterans' ability to access their benefit letters, with two main success criteria:
1. Identify any possible mailing address barriers for Veterans.
2. Enhance the customizable Benefit Summary and Service Verification Letter interface based on Veterans' real-world needs and preferences.

Success will be measured through improved task completion rates, reduced time-on-task, and qualitative feedback demonstrating that Veterans of varying technical abilities can efficiently locate, customize, and download their benefit letters without confusion.

## **Hypothesis**

- Veterans are more likely to find the letter type they need when presented with clear, concise categorization and descriptions up front rather than hidden on a secondary screen.
- Veterans who encounter the redesigned single-step page will complete the View Letters step at a rate higher than the current design. (current: 60%)
- Making the mailing address change to the VA.gov profile optional and the reasoning clear will increase download rates (current: 55%).


## **Methodology**

We will conduct remote, moderated, one-hour, semi-structured interviews and usability testing with the “Your VA benefit letters and documents” screens on the fully functioning production version. The screens will be a new, fully functional version, including the letter downloads, edit mailing address, and verify mailing address screens.

- Semi-structured interview about letter usage and experiences.
- Usability testing: Task-based usability testing on desktop and mobile devices.


### **Location**

- **Location:** Remote on Zoom
- **Point of contact:** Shawn Collins | shawn.collins@oddball.io
- **Equipment**
  - Zoom for all participants
  - Screen readers for AT participants


### **Research materials**

- Conversation guide for semi-structured interviews and usability testing.
- Link to “Your VA benefit letters and documents” page on production.


### **Recruitment approach**

10 total participants, including 2 participants who use assistive technology.

We will partner with Perigean to recruit Veterans. We request a 30-minute kickoff meeting with Perigean.


### **Recruitment criteria**

#### Primary criteria (must-haves)

- All participants must be Veterans
- Veterans who have experience with VA.gov
- Veterans who have at least received a Benefit Summary and Service Verification Letter
- 50%/50% split between desktop/mobile users
- During the session, the participant will have a stable internet connection and be willing to share a web browser window on their device.
- Have Zoom downloaded to their device before the session and know how to share their screen
- 2 of 10 participants are AT users: All must be on a computer or iOS mobile device that already utilizes screen reader technology.
  - Desktop AT user (Jaws or NVDA)  (1)
  - Mobile AT user  (iOS voice over)  (1)

#### Secondary criteria (nice-to-haves)

- 4 of 10 participants are aged 55 years or older
- 3 of 10 participants are women
- 4 of 10 participants are Hispanic, Biracial, Asian, or Native



### **Screener questions**

TBD

### **Prepare**

* Perigean Kick-off: TBD
* Pilot participant email: TBD  
* Date and time of pilot session: TBD

### **Research sessions**

TBD

### **Length of sessions**

- **Session length:** 1 hour for non-AT users / 1.5 hours for AT users
- **Buffer time between sessions:** 1 hour
- **Maximum Sessions per day:** 3 sessions per day


### **Availability**
Monday - Friday: 10 AM ET - 5:00 PM ET

## Team roles

- OCTO product owner: Amy Lai | amy.lai2@va.gov
- Moderator and point of contact: Shawn Collins | shawn.collins@oddball.io
- Research guide writing and task development:** Shawn Collins | shawn.collins@oddball.io & Julie Strothman |  julie.strothman@va.gov
- Participant recruiting & screening: TBD
- Accessibility specialist (for sessions where support for screen readers may be needed):** Trevor Pierce | trevor.pierce@oddball.io
- Observers and notetakers: TBD

