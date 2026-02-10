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

# Research Plan for Unicorns – 526 – Late Nov

## Goals
1. This is supporting the 526 modernization project
2. Background: Currently, the only comprehensive online path to file disability Comp claims is on eBenefits. We have released an _Increase Only_ path on va.gov. We are now working on the next iteration. The most significant change coming is the ability to tell VA about new conditions that the Veteran would like compensation for. We are releasing all claims with a text entry based pattern for adding new conditions, but we are experimenting with more structured data approaches. 
3. Research questions:
    - Can we ask questions in a way that will let us provide accurate mapping to contention claim IDs (which should speed development) without overly burdening the Veteran?
    - Are the pay waiver questions helping Veterans get to the correct choice?
4. Hypothesis: We hope to leverage the conditional questions pattern that we have used in some wizards on the site, to guide the Veteran to provide accurate data to VA. There are two hurdles to clear:
   1. Can we make the taxonomy clear enough to the Veteran to comfortably get to accurate answers?
   2. Is the taxonomy consistent and knowable enough that we can be confident in the path that we are guiding the Veteran down?

## Method
1.	What method of research are you planning? 
    - **Sample Methodologies**: *Usability testing*
    - **Also mention:** *Remote moderated*
2.	Why this method? 
   *The tree we have to get people through is complex, but it's not a pure IA exercise, the structure **and** the how matter. It will increase our understanding to have a human there to redirect and be able to dig deeper into problems.*
3.	Where are you planning to do your research? *GoToMeeting*
4.	What will you be testing? *Clickable prototype*

## Participants and Recruitment
1.	Participant criteria: What are you looking for in a participant?
  *5–6 people. I don't think experience with compensation claims is totally necessary, and fresh eyes might be a plus. But I would not exclude anyone because they have made a claim.*

2.	What is your recruitment strategy? *Perigean, please*


## When? 
1.	Timeline: *End of November* 

2.	Prepare: *Prototype under development, shooting for Nov 26*

3.	Availability: *I can be pretty flexible. I will provide hour blocks when I get a target week from recruiting* 

4.	Pilot: *Planning to run through as soon as prototype is finished, on or before Nov 26* 

## Team Roles
Please list the people who will be serving in each role.
- Moderator: Alex Taylor
- Research guide writing and task development (usually but not always same as moderator): Alex Taylor
- Participant recruiting & screening:
- Project point of contact: Alex Taylor 
- Participant(s) for pilot test: TBD
- Note-takers: Dawn Muñoz
- Observers: Andrea Schnieder

## Resources
- Project Brief: 
  [Disability Compensation Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability) 
- Discussion Guide
  *Discussion guide should live in the appropriate vetsdotgov-team product folder, simply paste a link to it here*
- Notes & Recordings
  *Session notes and recordings should live in the appropriate vetsdotgov-team product folder, simply place links to them here.*
- Synthesis
  *Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)* 
- Lessons Learned
  *Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 
- Read-Out/Results
  - *Read-out presentation should live in the appropriate vetsdotgov-team product folder; paste a link to it here.* 
  - ** Don't forget to add a link to your research folder to the [research tracker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)!
