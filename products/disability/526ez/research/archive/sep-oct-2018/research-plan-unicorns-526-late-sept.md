---
# Research Plan Metadata
title: "Research Plan for Unicorns Team, Disability Compensation (Form 21-526EZ), New Disabilities Flow, September 2018"
date: 2018-09-15
last_updated: 2026-02-10
team: "Unicorns"
product: "Disability Compensation (Form 21-526EZ)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The initial VA.gov Form 21-526EZ MVP only supports increase claims for rated disabilities. Veterans need the ability to add new disability conditions as part of their claims, which is more complex territory. The team needs to validate new approaches for collecting new disabilities and related supporting evidence including PTSD statements (Form 21-0781) and treatment records (Form 21-4142)."
  product_location: "VA.gov, Disability Benefits, File for Disability Compensation"
  user_familiarity: "iteration"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/readme.md"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate methods for collecting new disability conditions within the Form 21-526EZ flow"
  - goal_2: "Test the integration of PTSD-specific questions (Form 21-0781) into the overall claim flow"
  - goal_3: "Assess whether assigning conditions to treatment locations works in the composite supporting evidence flow"

research_questions:
  - "How does the list and loop pattern work for adding new disabilities?"
  - "Are the follow-up questions for each disability clear and appropriate?"
  - "Does the Form 21-0781 (PTSD statement) fit sensibly into this flow?"
  - "Does assigning conditions to treatment locations work logically in the supporting evidence flow?"
  - "Can Veterans successfully complete the Form 21-4142 (authorization to release medical records) within this context?"

hypotheses:
  - "The list and loop pattern will allow Veterans to efficiently add multiple new disability conditions"
  - "Integrating PTSD-specific questions contextually will be clearer than presenting them as a separate form"
  - "Veterans will understand how to associate their conditions with treatment locations and medical records"
  - "The composite flow will reduce cognitive load compared to separate, disconnected forms"

expected_outcomes: "Validate the new disabilities flow and identify any usability issues before expanding beyond the increase-only MVP. Findings will inform the design of the full claim submission experience including complex supporting evidence collection."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Diversity in age and disability compensation experience"
  
  primary_criteria:
    - "Veterans with some experience with disability compensation (filed or considered filing)"
    - "Diverse age range"
    - "Mix of disability ratings"
    
  secondary_criteria:
    - "At least one participant with PTSD claim experience"
    - "Variation in tech comfort levels"
    
  screener_questions:
    - question: "Have you filed or considered filing for VA disability compensation?"
      qualifying_response: "Yes"
      
participants:
  veterans: 6
  caregivers: 0
  dependents: 0
  total_recruited: 8
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "2018-09-15"
  pilot_participant: "Alastair Dawson"
  research_dates: "2018-09-24 to 2018-10-05"
  research_review_submission: "2018-09-15"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their benefits online"
    key_results: 
      - "Enable Veterans to file complete disability claims online (not just increases)"
      - "Reduce complexity and confusion in disability claims process"
      - "Improve claim accuracy and reduce development time"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Taking Care of Myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/archive"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Disability"
  - "PRDT: disability-526ez"
  - "DSC: Form"
  - "DSC: Form - Text Area"
  - "DSP: Ask users for multiple responses"
  - "DSP: Ask users for files"
  - "DSP: Help users to check answers"
  - "usability-testing"
  - "authenticated"
  - "list-and-loop"
---

# Research Plan for Unicorns 526 – New Disabilities et al
(This should be filled out and maintained by the designer on the team & can be cross-linked and referenced in any issues.) 

## Goals
1. Unicorns is looking for feedback on methods to collect new disabilities as part of a 526 application 
2. Background: We have an MVP out there that only deals with increase for rated disabilities. Adding new disabilities (and still dealing with increase claims) is new more complicated territory.
3. Research questions: We have some new approaches that need validation
   1. How does list and loop work for new disabilities? 
      1. Are our follow-up questions sound?
   2. Does the 781 fit sensibly into this flow?
   3. Does assigning conditions to treatment locations work in the composite supporting evidence flow?
   4. Maybe 781/4142 walkthrough as well
4. Hypothesis: 

## Method
1.	What method of research are you planning? 
    - Moderated usability feedback with live forms

## Participants and Recruitment

1. Participant criteria: 5–6 people
    1. Some experience with disability comp
    2. Diverse age range

## When? 
1. Timeline: As soon as practical
2. Prepare: From a functionality standpoint, we could probably do this today. But we will be adding more things this sprint that would be great to get eyes on
3. Availability: If applicable, when would you like sessions scheduled? Please list exact dates and times. Please request enough dates and time slots. Be as flexible as possible, cognizant that many Veterans are only available before and after working times, and live across the U.S.
4. Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? (Ideally this should not be someone on your team). 

## Team Roles
Please list the people who will be serving in each role.
- Moderator: Alex Taylor

- Research guide writing: Alex Taylor

- Participant recruiting & screening: Lauren Alexanderson

- Project point of contact: Dawn Munoz

- Participant(s) for pilot test: Alastair Dawson

- Note-takers: Dawn Munoz et al

- Observers:  alastair@adhocteam.us, alex@adhocteam.us, andrea.schneider@va.gov, chris.valarida@adhocteam.us, dawn@adhocteam.us, evangeline@adhocteam.us, jeff@adhocteam.us, mark.greenburg@adhocteam.us, paul.shute@va.gov, peggy@thesocompany.com, silvio@adhocteam.us

  

## Resources
- Project Brief: 
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/readme.md
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
