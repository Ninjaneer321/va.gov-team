---
# Research Plan Metadata
title: "Research Plan for Unicorns 526 Add New Contention, February 2019"
date: 2026-02-10
last_updated: 2026-02-10
team: "Unicorns"
product: "Form 21-526EZ (Disability Compensation Application)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Adding new disabilities to a 526 application is complex territory. The MVP only handles increases for rated disabilities. Veterans face a complex decision tree to add new conditions with many different claimable disabilities and inconsistent naming/categorization."
  product_location: "VA.gov authenticated benefits tools - Disability Compensation (Form 526EZ)"
  user_familiarity: "New feature expansion beyond MVP (MVP only handled increases)"
  product_brief_url: "products/disability/526ez/"

# Research Design
methodology: "survey"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: false
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate question structure approach for adding new conditions"
  - goal_2: "Test complex conditional logic flow for disability selection"
  - goal_3: "Ensure Veterans can navigate to correct disability categories quickly"

research_questions:
  - "How does question structure work for adding a new condition?"
  - "Are people able to get to the right place as quickly as they can?"

hypotheses:
  - "The conditional logic survey approach can effectively test the complex decision tree for adding new disabilities"
  - "Veterans will be able to navigate the question structure to find appropriate disability categories"

expected_outcomes: "Validate the information architecture and conditional logic approach before implementation, ensuring Veterans can successfully add new conditions through an intuitive flow"

# Recruitment & Participants
recruitment:
  recruiting_partner: "DSVA recruitment support"
  approach: "Unmoderated survey distribution"
  
  primary_criteria:
    - "Veterans who may have an interest in disability compensation"
    - "Minimum 20 participants"
    
  secondary_criteria:
    - "Ideal participant count closer to 100 for statistical significance"
    
  screener_questions:
    - question: "Are you interested in or have you filed for VA disability compensation?"
      qualifying_response: "Yes or considering it"
      
participants:
  veterans: 100
  caregivers: 0
  dependents: 0
  total_recruited: 100
  completed_sessions_goal: 20
  
# Timeline & Sessions
timeline:
  pilot_date: "2019-01-21"
  pilot_participant: "9 team members"
  research_dates: "2019-01-28 to 2019-02-28"
  research_review_submission: "2019-01-25"
  
session_details:
  duration_minutes: 15
  buffer_minutes: 0
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can apply for benefits online"
    key_results: 
      - "Expand 526 functionality beyond increases"
  - objective: "Improve disability claims experience"
    key_results:
      - "Enable Veterans to add new conditions successfully"
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Putting Down Roots"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "products/disability/526ez/research/"
    
tags:
  - AUD: Veterans
  - BNFT: Disability
  - PRDT: Form 21-526EZ
  - DSP: Forms-system
  - DSC: Form-controls
  - survey
  - remote-unmoderated
  - tree-testing
  - information-architecture
  - conditional-logic
  - disability-claims
  - new-conditions
---

# Research Plan for Unicorns 526 – Add New Contention
(This should be filled out and maintained by the designer on the team & can be cross-linked and referenced in any issues.) 

## Goals
#### 1. What product & team are you doing this research for?
Unicorns is looking for feedback on methods to collect new disabilities as part of a 526 application.
#### 2. Background:
We have an MVP out there that only deals with increase for rated disabilities.
Adding new disabilities (and still dealing with increase claims) is new more complicated territory. There are many different disabilities that can be claimed and the tree to get users through is complex.
#### 3. Research questions:
We have some new approaches that need validation.
   a. How does question structure work for adding a new condition?
   b. Are people able to get to the right place as quickly as they can?
   
## Method
#### 1.	What method of research are you planning?**
   **Sample Methodologies**: Survey (effectively testing the IA through the survey, similar to a tree test)
   **Also mention:** Remote unmoderated
#### 2.	Why this method?
The tree we have to get people through to add a new condition is complex and requires conditional logic. We first tried a tree test (using Treejack on Optimal Sort) but found the tool wasn't the most intuitive for the complexity we needed to test. We want to test this unmoderated so we can gather more participants and have more data to analyze.*
#### 3.	Where are you planning to do your research?
SurveyMonkey
#### 4.	What will you be testing?**
A SurveyMonkey prototype of a conditional logic flow.


## Participants and Recruitment
#### 1.	Participant criteria: What are you looking for in a participant?
  Our participants are Veterans who may have an interest in comp. Minimum 20 participants, ideal would be closer to 100.
#### 2.	What is your recruitment strategy? TBD. Working with DSVA to develop.

## When? 
#### 1.	Timeline:
~~**End of January 2019**~~ End of January 2019 through end of February 2019 (we hit a few recruitment blockers which extended our timeline).
#### 2.	Prepare:
Prototype is ready and shareable link is created.
#### 3.	Availability:
Not applicable because we are using an unmoderated test.
#### 4.	Pilot:
Piloted test with 9 team members at the end of the week of January 21.
