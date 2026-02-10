---
# Research Plan Metadata
title: "Research Plan for Unicorns 526 Contention Automation, July 2019"
date: 2026-02-10
last_updated: 2026-02-10
team: "Unicorns"
product: "Form 21-526EZ (Disability Compensation Application)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The 526 form uses a text box with fuzzy matching to match Veteran-entered conditions to a taxonomy. Veterans must manually select from dropdown matches, and unselected text is submitted as-is. The CTO's office developed a plain language parsing API that can analyze free text and match it to VA Contention IDs with high confidence."
  product_location: "VA.gov authenticated benefits tools - Disability Compensation (Form 526EZ)"
  user_familiarity: "Significant UX change to condition entry system"
  product_brief_url: "products/disability/526ez/"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Test new automated contention matching system using plain language parsing API"
  - goal_2: "Determine necessary feedback to make Veterans comfortable with automated matching"
  - goal_3: "Identify guidance needed for Veterans to trust the automated process"

research_questions:
  - "What feedback is necessary to make the Veteran comfortable that they are doing the right thing?"
  - "What guidance do we need to provide to make Veterans comfortable with the process?"

hypotheses:
  - "We don't need to ask Veterans to make a choice. We can take their language and assign a contention without further intervention"
  - "Veterans will be comfortable with automated contention matching if proper feedback is provided"

expected_outcomes: "Document approach for automated contention matching for evaluation by successor team, determining if automation can replace manual selection without requiring Veteran intervention"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment including accessibility"
  
  primary_criteria:
    - "5-8 Veterans"
    - "At least one assistive device user"
    - "Mix of Veterans with experience applying for disability compensation and those considering it"
    
  secondary_criteria:
    - "Good representation across age and gender"
    
  screener_questions:
    - question: "Have you applied for disability compensation or are you thinking about it?"
      qualifying_response: "Yes"
    - question: "Do you use assistive technology to access websites?"
      qualifying_response: "At least one participant should answer yes"
      
participants:
  veterans: 8
  caregivers: 0
  dependents: 0
  total_recruited: 8
  completed_sessions_goal: 5
  
# Timeline & Sessions
timeline:
  pilot_date: "2019-07-08"
  pilot_participant: "Team member"
  research_dates: "2019-07-10 to 2019-07-11"
  research_review_submission: "2019-07-05"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can apply for benefits online"
    key_results: 
      - "Improve accuracy of disability condition matching"
  - objective: "Reduce burden on Veterans during claims process"
    key_results:
      - "Automate contention matching to eliminate manual selection"
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Putting Down Roots"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "products/disability/526ez/research/archive/feb-2019/research-plan.md"
    
tags:
  - AUD: Veterans
  - BNFT: Disability
  - PRDT: Form 21-526EZ
  - DSP: Forms-system
  - DSC: Form-controls
  - DSC: Text-input
  - usability-testing
  - remote-moderated
  - accessibility
  - automation
  - natural-language-processing
  - contention-matching
  - disability-claims
  - prototype-testing
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

