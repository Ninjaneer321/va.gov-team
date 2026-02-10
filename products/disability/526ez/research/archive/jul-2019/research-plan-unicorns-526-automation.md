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

# Research plan for Unicorns, 526 (automation), Jun 28–Jul 2


## Goals

1. *What product & team are you doing this research for?*
  **Product**: 526 Contention Automation
  **Team**: Unicorns (or successor)
2. *Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?* 
  - The 526 asks Veterans to tell VA about the conditions they would like to be compensated for. Currently we present them with a text box that uses fuzzy matching to try to match what the Veteran enters with a set taxonomy of conditions. These are presented as dropdown matches that a Veteran has to click on to choose. If they do not select an option, their entered text will be submitted on the form. If they select an option, that condition replaces the Veteran entered text. 
  - We are working with a group from the CTOs office to incorporate an plain language parsing API they have developed that can analyze free text and match it to a VA Contention ID with high confidence.
  - We are planning use this tool to replace our current system and want to explore the UX implications for the Veteran.
3. *Research questions: What question(s) do you hope to be able to answer after completing this research?*
  - What feedback is necessary to make the Veteran comfortable that they are doing the right thing?
  - What guidance do we need to provide to make Veterans comfortable with the process.
4. *Hypothesis: What is your hypothesis for this research?* 
  - We think that we don't need to ask Veterans to make a choice. That we can take their language and assign a contention without further intervention.

## Method
1.	*What method of research are you planning?* 
  - Moderated, usability
2.	*Why this method? How does this methodology help you answer your research questions?* 
  - This kind of free text interaction is a pain to do in invision, et al
  - This is a tweak to existing code and can be done on a branch
3.	*Where are you planning to do your research?* 
   - Zoom
4.	*What will you be testing? (Design mocks, card sort, prototype, page, content, etc.)*
  - Coded Prototype

## Participants and Recruitment
1.  *Participant criteria: What are you looking for in a participant?*

  - 5–8 people
  - At least one assistive device user

  - A mix of Veterans with experience applying for disability compensation and those who are thinking about it
  - Good representation across age and gender.

2.  *What is your recruitment strategy?* 

  - Perigean recruiting contract

## When? 
1.  *Timeline: What dates do you plan to do research?* 

  End of June beginning of July

2.  *Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.)* 

  We are documenting approach but this will need to be evaluated and adopted or dropped by successor team

3. *Length of Sessions:* 

  Less than an hour

4.  *Availability:* 

  July 10–11

5.  *Pilot:*

  July 8-9

## Team Roles
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers.** 

- Moderator: Alex Taylor — 401-226-6317 — alex@adhoc.team
- Notetaker: Mark Greenburg — mark.greenburg@adhocteam.us

Please also invite
Andrea.Z.Schneider@omb.eop.gov,
andrea.schneider@va.gov,
ben.shyong@adhoc.team,
katelyn@adhoc.team,
mark.greenburg@adhoc.team,
peggy@thesocompany.com,
silvio@adhoc.team

