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

# Research Plan for Claims Submission v1 (686c) Usability Testing

April 2025

## Background

The Accredited Representative Facing (ARF) Team is building an Accredited Representative Portal (ARP) that will allow Veteran Service Organization (VSO) representatives to submit online any claim and supporting evidence to the VA. For v1 of ARP’s claim submission feature, we are allowing representatives to submit form 21-686c Add Dependents and view their submission history.

To submit a form 21-686c, we expect that users start from the form submissions landing page and download a PDF of the selected form, fill it out, upload the form and evidence and then submit. They will be able to confirm their submission on the final page of the form upload and view their prior submissions for all claimants.

## Research Goals

* Evaluate usability and value of ARP’s 686c claim submission. Is it intuitive, clear, and easy to use? What could be improved?
* Evaluate the usability and value of a submissions history view. What is valuable for a representative to reference at a glance? What could be improved?
* Understand how representatives, including cross-accredited ones, typically submit 686c and other forms. How could this impact future designs?

## Research Questions

Goal: Evaluate usability and value of ARP’s 686c claim submission. Is it intuitive, clear, and easy to use? What could be improved?

* What are the initial expectations of ARP form submission?
* Can representatives complete tasks quickly and efficiently through this design, or could it be improved?
* Is the information and amount of instruction clearly presented throughout the flow, or are there any points of confusion?
* Are the multiple file upload instructions clear?
* Is the navigation clear?
* How does our v1 686c submission compare to their current solutions?

Goal: Evaluate the usability and value of a submissions history view. What is valuable for a representative to reference at a glance? What could be improved?

* Are the statuses and their meaning clear?
* How does the submission history view compare to their current solution?
* What is a must-have, nice-to-have, and not needed for a submission history view?

Goal: Understand how representatives, including cross-accredited ones, typically submit 686c and other forms. How could this impact future designs?

* What does their workflow look like?
* What tools do they use and why?
* How does cross-accreditation impact how they submit claims, if at all?

## Hypotheses

Representatives will find

* The v1 claims submission tool is intuitive and easy to use
* The v1 solution for submitting 686c is not valuable in the current state because it does not auto-establish in VBMS
* The submission history view helps give confidence in ARP, but representatives will not all information shown in the prototype
* The level of instruction provided is unnecessary

## Outcome

This research will inform any edits to the Claims Submission v1 design to improve its ease and clarity. It will also inform future iterations of claims submission.

## Methodology

Semi-structured interviews and concept testing.

### Location

Remote sessions, over Teams

## Recruitment

### Recruitment approach

VSO representatives are our primary audience. We will be utilizing our VSO research panel to fulfill criteria. There will be no screener.

### Recruitment criteria

* 4-5 VSO representatives
* From [our representative panel](https://dvagov.sharepoint.com/%3Ax%3A/r/sites/vaabdvro/_layouts/15/doc2.aspx?sourcedoc=%7B6%5B%E2%80%A6%5Dp_ParticipantPanel.xlsx&action=default&mobileredirect=true)

Primary criteria

* 4-5 people
* Lean toward those who use QuickSubmit in the past, and include 1-2 reps who have not used QuickSubmit
* Cross accredited
* Mix of reps from the “Big 6” and county reps

Reps reaching out to

1. Ivette Orozco, Utah, iorozco@utah.gov
2. James Garvey, Ohio, jpgarvey@starkcountyohio.gov
3. ~~Crystal Miller, North Carolina,~~ ~~crystal.miller@mecklenburgcountync.gov~~ ~~(Unavailable, but could reach out to one of her team mates)~~
4. Gary Smith, New York, garysmith@steubencountyny.gov
5. ~~Joe Pratt, Nevada,~~ ~~prattj@veterans.nv.gov~~ ~~(Unavailable)~~
6. Karl Hauser, Michigan, hauserk@clareco.net
7. Diane Moncrief, Ilinois, diane.n.moncrief@outlook.com
8. Brandy Jean Thornton, Hawaii, bthornton@dav.org
9. ~~Yvette Mason, California,~~ ~~ymason@co.slo.ca.us~~ ~~(Unavailable)~~
10. \_\_\_\_\_\_\_\_\_\_\_
11. ~~David West, California,~~ ~~david.west@nevadacountyca.gov~~
12. Christopher Cowser, California, christopher.cowser@va.gov

## Timeline

Timeline is an estimation and will be updated if needed. Representative availability might impact this timeline.

### Estimated research length: ~4 to 5 weeks

### Research sessions

* Planned dates of research: Week of 4/13/2025

### Length of sessions

* Session length: 1 hour
* Buffer time between sessions: 30 minutes
* Maximum Sessions per day: 3

### Week of March 31

* Finalize research plan
* Draft and share conversation guide for asynchronous feedback
* Identify who to recruit (expect to email 9-10 reps)
* Hold time on key team member calendars for sessions

### Week of April 7

* Finalize conversation guide
* Finalize prototype for testing
* Send recruitment emails starting 4/7 through 4/11
* Set up slack channel for this testing session
* Confirm sessions and request for observer + notetaker signups
* Schedule 5-10 minutes post session for debriefs
* Identify backup moderators

### Week of April 14

* Confirm sessions and request for observer + notetaker signups
* Hold sessions
* Start analysis and synthesis

Week of April 21 (both Kate and Laura are OOO during parts of this week)

* Synthesize data

Week of April 28

* Synthesize data
* Shareout report with immediate team, decide on whether or not to share with other stakeholders

Week of May 5 (tbd)

* Shareout report with broader stakeholders
* Upload final report and artifacts to SP and github

## Team Roles

* Moderators: Laura Paradis, Kate Albee, Marisa Dominguez as backup
* Research guide writing and task development: Laura Paradis, Kate Albee
* Participant recruiting & scheduling: Kate Albee
* Project point of contact: Laura Paradis
* Notetakers: Laura Paradis, Kate Albee, Eva Heintzelman
* Observers: ARF team members (especially those on the claims submission workstream), Enablement team
