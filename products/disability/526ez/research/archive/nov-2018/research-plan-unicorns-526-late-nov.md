---
# Research Plan Metadata
title: "Research Plan for Unicorns Team, Disability Compensation (Form 21-526EZ), Structured Data Experiment, November 2018"
date: 2018-11-15
last_updated: 2026-02-10
team: "Unicorns"
product: "Disability Compensation (Form 21-526EZ)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The VA.gov Form 21-526EZ is expanding to support all claims types (not just increases). The team is releasing an all-claims path with text entry for new conditions, but is experimenting with a more structured data approach that could provide accurate mapping to VA contention claim IDs, potentially speeding development. The team needs to validate whether Veterans can navigate a taxonomy-based approach without excessive burden."
  product_location: "VA.gov, Disability Benefits, File for Disability Compensation"
  user_familiarity: "iteration"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Determine if structured conditional questions can guide Veterans to provide accurate condition data without excessive burden"
  - goal_2: "Validate that pay waiver questions help Veterans make the correct choice regarding military retirement pay vs. VA compensation"
  - goal_3: "Assess whether the condition taxonomy is both clear to Veterans and consistent enough for confident data mapping"

research_questions:
  - "Can we ask questions in a way that provides accurate mapping to contention claim IDs without overly burdening the Veteran?"
  - "Are the pay waiver questions helping Veterans get to the correct choice?"
  - "Is the taxonomy clear enough for Veterans to comfortably provide accurate answers?"
  - "Is the taxonomy consistent and knowable enough for confident guidance?"
  - "Do Veterans understand the conditional branching logic as they progress through condition selection?"

hypotheses:
  - "Conditional questions pattern (similar to wizards used elsewhere on site) can guide Veterans to accurate data entry"
  - "Veterans can navigate a complex taxonomy if the questions are clearly worded and logically structured"
  - "The structured approach will reduce ambiguity compared to free-text entry"
  - "Pay waiver questions, when clearly explained, will help Veterans make informed decisions"

expected_outcomes: "Validate whether structured conditional questions for selecting disability conditions are viable. If successful, this approach could improve claim processing speed and accuracy. Findings will inform the decision to implement structured data collection versus simpler text entry."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Fresh perspectives preferred"
  
  primary_criteria:
    - "Veterans (fresh eyes preferred, but not excluding those with compensation claim experience)"
    - "Diverse age range"
    - "Basic familiarity with online forms"
    
  secondary_criteria:
    - "Mix of those familiar and unfamiliar with disability compensation process"
    - "Variation in tech comfort levels"
    
  screener_questions:
    - question: "Have you used online forms in the past year?"
      qualifying_response: "Yes"
      
participants:
  veterans: 6
  caregivers: 0
  dependents: 0
  total_recruited: 8
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "2018-11-26"
  pilot_participant: "TBD"
  research_dates: "2018-11-26 to 2018-11-30"
  research_review_submission: "2018-11-15"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their benefits online"
    key_results: 
      - "Enable accurate, efficient disability claim submission online"
      - "Improve claim processing speed through structured data"
      - "Reduce claim development time due to clearer condition information"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Taking Care of Myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/archive/sep-oct-2018"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Disability"
  - "BNFT: Finances"
  - "PRDT: disability-526ez"
  - "DSC: Form"
  - "DSC: Form - Radio Button"
  - "DSC: Form - Select"
  - "DSP: Ask users for a single response"
  - "DSP: Ask users for multiple responses"
  - "DSP: Contextual Help"
  - "usability-testing"
  - "authenticated"
  - "conditional-logic"
  - "taxonomy"
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
