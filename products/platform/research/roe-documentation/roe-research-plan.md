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

# **Research Plan - Rules of Engagement (ROE)** 

## **Goals**

Our goal is to 1) understand the landscape of documentation of ROEs and how they are being used today 2) define requirements for a template to document ROEs that establish how VFS and VSP teams interact throughout the product development lifecycle.  

Background: 

- VSP teams currently organically develop and document ROEs. 
- [ROE documentation in Github and Zenhub (as of 10/9) ](https://docs.google.com/spreadsheets/d/1woGoEFrnkQpyV9zaDcuiLzLX9hDDAgG9jOn1tDWB38w/edit?usp=sharing)

Insights we hope to derive in asking these questions:

**Findability**

- Do people know ROEs exist for their practice area?
- Can people find them when they need them?
- How do people find them today?
- Are teams who are aware of ROEs more likely to exhibit the behavior outlined in them?
- What will make teams more likely to find and follow the ROE’s?

**Effectiveness**

- What information is useful in an ROE (per practice area)?
- Are VSP Team members fluent on ROEs across all areas, and thus know how VSP functions as a whole? Would people be able to say “oh, that’s not the way we do it here” if they saw a VFS team doing something that’s not aligned with our ROE?
- What practice areas still need to create an ROE?


## **Hypothesis**

- ROE documents will provide VFS teams with relevant, valuable information.
- ROEs help teams operate in alignment with VSP objectives.
- VFS teams don’t know about then which contributes to them not following the way we’d like to work together.



## **Method**

- Survey VSP team members regarding ROE documents.

  - Tool: Optimal Sort
- 8 remote interviews with 4 VFS teams, 2 people from each 

  - Tool: Zoom to record

We will use surveys to measure the gaps in understanding and completion of ROE documents. Interviews will allow us to ask qualitative questions and gain a deep understanding of the effectiveness of ROEs throughout the VFS user journey. 



## **Research Questions**

**Survey questions for VSP team members:**

- What team are you on?

  - Analytics & Insights

- Content & IA

  - Triage

- Product Support

  - Tools & Improvements

- Operations

- What is your practice area?

  - Accessibility
  - Analytics
  - Contact Center
  - Content
  - Design
  - Engineering
  - Information Architecture
  - Product Management
  - Triage
  - Operations
  - QA
  - Research

- Without searching, do you think an ROE document exists for your practice area?

  - Yes
  - No
  - I don’t know

- Have you ever contributed to an ROE? 

  - Yes
  - No
    - If yes, how did you decide what to include?

- Are VFS teams using your docs?

  - Yes

  - No

  - I don’t know

    - If yes/no/don’t know: how do you know?

      

**Interview questions for VFS team members:**

- How long have you worked on veteran-facing tools?
- What do a Rules of Engagement document mean to you?
- What would you expect from this type of document?
- Have you worked with a Rules of Engagement document before?
  - If yes, were they helpful?
- Are you aware that an ROE for your practice area exists? 
  - If yes, have you read it before? 
- Have you gone back to refer to it at any point in the process?
- What prompted you to go back to it?
  - Were you able to find it again?
- Was it helpful? Did you find what you were looking for? 
  - If not, what was missing? What questions did you still have after? What steps did you take to get your remaining questions answered?
- What would you add or change, if anything?
- Do you feel that having this document helped the process go more smoothly with the VSP team? How? 



## **Participants and Recruitment**

**Survey**
We will send a survey to all VSP team members



**Interviews**

We will recruit the following VFS team participants for 30 min interviews:

- VSA, Authenticated Experience Team  
  - Samara Strauss - UX Designer DSVA (VSA-Authenticated Experience AUTHD-EXP)
  - 1 volunteer (ask product manager - Justin Pickett)

- ByLight User Notifications Team 
  - 2 volunteers (ask Dorothy Biederman)

- VAOS, Online Scheduling Team 
  - Mark Greenburg - Product Manager
  - 1 volunteer (ask Mark for another volunteer)

- Benefits + Memorials 
  - Silvio Luthi - Engineer
  - Kevin Statura - Designer
                

## **When?**

Start interviews with VFS and VSP teams October 17 - 29, 2019. 



## **Team Roles**

Moderator: Naomi Marcussen

Research guide writing and task development: James Chasia, Naomi Marcussen

Participant recruiting: James Chasia, Naomi Marcussen, Emily Waggoner, Rachael Roueche

Project point of contact: James Chasia, Naomi Marcussen

Participant(s) for pilot test: Emily Waggoner

Note-takers: James Chasia, Emily Waggoner, Crystabel Reiter (1 notetaker per session - trade off per session)

Observers: James Chasia, Emily Waggoner, Crystabel Reiter



## **Resources**

Synthesis

[Spreadsheet](https://docs.google.com/spreadsheets/d/1IT0rJth32UCKFk2ZQ1_O2zANORXSjo9jlirQviIu-Eg/edit#gid=0)

[User Journey]

(https://miro.com/welcomeonboard/6FqPBxPwrzhHscFji7RBl6gy6Dz3bCOOvP754XYsvAbAjr8WmVVAOCV6mE35ZfZB)

Research Readout
