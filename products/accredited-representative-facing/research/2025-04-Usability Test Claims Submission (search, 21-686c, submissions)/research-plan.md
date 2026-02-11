---
# Research Plan Metadata
title: "Research Plan for Claims Submission v1 (686c) Usability Testing, ARF Team, April 2025"
date: 2025-04-14
last_updated: 2025-04-14
team: "Accredited Representative Facing (ARF)"
product: "Accredited Representative Portal (ARP)"
product_area: "authenticated"
study_phase: "usability_testing"

# Background Context
background:
  problem_statement: "VSO representatives need a modern, efficient way to submit claims and evidence online. Currently, they mail, fax, or use legacy tools. ARP v1 enables digital submission of form 21-686c (Add Dependents) with PDF download, upload, and submission history tracking."
  product_location: "Accredited Representative Portal on VA.gov"
  user_familiarity: "New product iteration - testing v1 of claims submission feature with 686c form"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/README.md"
  current_solutions: "Mail, fax, QuickSubmit, Stakeholder Enterprise Portal (SEP), third-party tools"

# Research Design
methodology: "Semi-structured interviews and concept testing"
research_format: 
  location: remote
  platform: "Microsoft Teams"
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Evaluate usability and value of ARP's 686c claim submission. Is it intuitive, clear, and easy to use? What could be improved?"
  - goal_2: "Evaluate the usability and value of a submissions history view. What is valuable for a representative to reference at a glance? What could be improved?"
  - goal_3: "Understand how representatives, including cross-accredited ones, typically submit 686c and other forms. How could this impact future designs?"

research_questions:
  - "What are the initial expectations of ARP form submission?"
  - "Can representatives complete tasks quickly and efficiently through this design, or could it be improved?"
  - "Is the information and amount of instruction clearly presented throughout the flow, or are there any points of confusion?"
  - "Are the multiple file upload instructions clear?"
  - "Is the navigation clear?"
  - "How does our v1 686c submission compare to their current solutions?"
  - "Are the statuses and their meaning clear in submission history?"
  - "How does the submission history view compare to their current solution?"
  - "What is a must-have, nice-to-have, and not needed for a submission history view?"
  - "What does their workflow look like?"
  - "What tools do they use and why?"
  - "How does cross-accreditation impact how they submit claims, if at all?"

hypotheses:
  - "The v1 claims submission tool is intuitive and easy to use"
  - "The v1 solution for submitting 686c is not valuable in the current state because it does not auto-establish in VBMS"
  - "The submission history view helps give confidence in ARP, but representatives will not need all information shown in the prototype"
  - "The level of instruction provided is unnecessary"

expected_outcomes: "This research will inform any edits to the Claims Submission v1 design to improve its ease and clarity. It will also inform future iterations of claims submission."

# Recruitment & Participants
recruitment:
  recruiting_partner: "VSO research panel (internal)"
  approach: "Targeted recruitment from representative panel"
  screener: "No formal screener - using existing research panel"
  
  primary_criteria:
    - "4-5 VSO representatives from research panel"
    - "Lean toward those who use QuickSubmit, include 1-2 reps who have not used QuickSubmit"
    - "Cross accredited representatives"
    - "Mix of reps from Big 6 and county reps"
    
  secondary_criteria:
    - "Mix of experience levels with current submission tools"
    - "Geographic diversity across states"
    
  screener_questions: []
      
participants:
  vso_representatives: 5
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 5
  completed_sessions_goal: 4
  participant_type: "VSO representatives (accredited)"
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-04-14"
  pilot_participant: "TBD from ARF team"
  research_dates: "2025-04-14 to 2025-04-18"
  research_review_submission: "2025-03-31"
  finalization_date: "2025-03-31"
  prototype_ready: "2025-04-07"
  recruitment_window: "2025-04-07 to 2025-04-11"
  analysis_start: "2025-04-14"
  synthesis_complete: "2025-04-28"
  shareout_internal: "2025-04-28"
  shareout_stakeholders: "2025-05-05"
  final_upload: "2025-05-05"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  debrief_minutes: 10
  
# Strategic Alignment
octo_priorities:
  - objective: "VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Build tools for accredited representatives to submit claims and supporting documentation more effectively and efficiently"
      - "Redirect traffic from SEP and QuickSubmit to reduce the number of VA tools representatives use"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Living Civilian Life"
  - "Managing Benefits"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "2025-02 QuickSubmit Review"
    - "2025-04 Accredited Rep Portal pilot"
  related_products:
    - "QuickSubmit"
    - "Stakeholder Enterprise Portal (SEP)"
    - "Form 21-686c (Add Dependents)"
    
tags:
  - "accredited-representative-facing"
  - "accredited-representative-portal"
  - "vso-representatives"
  - "claims-submission"
  - "form-21-686c"
  - "usability-testing"
  - "concept-testing"
  - "authenticated"
  - "april-2025"
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
