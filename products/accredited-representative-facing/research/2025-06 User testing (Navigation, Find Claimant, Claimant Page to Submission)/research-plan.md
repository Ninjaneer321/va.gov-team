---
# Research Plan Metadata
title: "Research Plan for Find Claimant, Claimant Page and Navigation, ARF Team, June 2025"
date: 2025-06-02
last_updated: 2025-06-02
team: "Accredited Representative Facing (ARF)"
product: "Accredited Representative Portal (ARP)"
product_area: "authenticated"
study_phase: "usability_testing"

# Background Context
background:
  problem_statement: "VSO representatives need an efficient way to find claimants, view claimant information, and submit claims within ARP. This version introduces search functionality, a Claimant Page overview, and navigation structure to streamline representative workflows."
  product_location: "Accredited Representative Portal on VA.gov"
  user_familiarity: "New product iteration - testing search, Claimant Page, and navigation features"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/README.md"
  current_solutions: "QuickSubmit, Stakeholder Enterprise Portal (SEP), third-party tools"
  key_features_tested: "Find Claimant search, Claimant Page overview, navigation menu, claim submission flow from Claimant Page"

# Research Design
methodology: "1:1 Usability test, including navigation tasks"
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
  - goal_1: "Evaluate the usability of the search. Is it clear and intuitive? What could be improved?"
  - goal_2: "Evaluate the value of the Claimant Page overview. Is the information useful? What could improve its value?"
  - goal_3: "Evaluate the clarity and value of the claim submission flow, starting from Claimant Page. What could be improved?"
  - goal_4: "Evaluate the navigation. Are the sections and their purpose clear?"

research_questions:
  - "Do people expect to land on the search page after logging in?"
  - "What do reps search by to find an individual in existing tools? What method do they prefer?"
  - "What do people expect to see next after clicking search?"
  - "Is the information on the claimant overview must have/nice to have/not needed? What other information would be helpful to see?"
  - "Are the alerts relevant and clear? What other alerts/notifications would they want to see for a claimant?"
  - "What do they expect to see next after selecting Start [Form number] submission?"
  - "Do they understand differences in how submitted files will be processed?"
  - "What would their next step be after submitting files?"
  - "Is this version of submitting a claim better and faster than their current solution? Why or why not?"
  - "When given scenarios, will a representative know which navigation section to visit, to take action?"
  - "Are the section headings clear? How confident do they feel in navigating the app?"

hypotheses:
  - "Searching by last four digits of SSN, first name and last name will feel like an appropriate amount of information to enter"
  - "Information on the claimant overview page helps answer questions the representative has about the claimant; it is useful"
  - "The solution for submitting the form through Claimant Page is perceived as an equal to QuickSubmit"
  - "Each participant can complete 75% of the navigation tasks successfully"

expected_outcomes: "This research will inform edits to Find Claimant, Claimant page, and the Claim Submission flow. It will also inform future iterations of claims submission."

# Recruitment & Participants
recruitment:
  recruiting_partner: "VSO research panel (internal)"
  approach: "Targeted recruitment from representative panel"
  screener: "No formal screener - using existing research panel"
  
  primary_criteria:
    - "4-5 VSO representatives from research panel"
    - "Those who at a minimum are familiar with QuickSubmit. They can also be familiar with other third party tools"
    - "Mix of single and cross-accredited"
    - "Mix of reps from Big 6 and county reps"
    
  secondary_criteria:
    - "Mix of experience levels with current submission and search tools"
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
  pilot_date: "2025-06-02"
  pilot_participant: "TBD from ARF team"
  research_dates: "2025-06-02 to 2025-06-06"
  research_review_submission: "2025-05-19"
  finalization_date: "2025-05-19"
  prototype_ready: "2025-05-26"
  recruitment_window: "2025-05-27 to 2025-05-30"
  analysis_start: "2025-06-02"
  synthesis_complete: "2025-06-16"
  shareout_internal: "2025-06-17"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  debrief_minutes: 10
  
# Strategic Alignment
octo_priorities:
  - objective: "VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Build tools for accredited representatives to find claimants and submit claims more effectively and efficiently"
      - "Improve navigation and information architecture for representative workflows"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Living Civilian Life"
  - "Managing Benefits"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "2025-04 Usability Test Claims Submission (search, 21-686c, submissions)"
    - "2025-04 Accredited Rep Portal pilot"
    - "2025-02 QuickSubmit Review"
  related_products:
    - "QuickSubmit"
    - "Stakeholder Enterprise Portal (SEP)"
    
tags:
  - "accredited-representative-facing"
  - "accredited-representative-portal"
  - "vso-representatives"
  - "find-claimant"
  - "search"
  - "navigation"
  - "claimant-page"
  - "claims-submission"
  - "usability-testing"
  - "authenticated"
  - "june-2025"
---

# Research Plan for Find Claimant, Claimant Page and Navigation

June 2025

## Background

The Accredited Representative Facing (ARF) Team is building an Accredited Representative Portal (ARP) that will allow Veteran Service Organization (VSO) representatives to submit online any claim and supporting evidence to the VA. Currently, representatives mail, fax, use QuickSubmit, Stakeholder Enterprise Portal (SEP) or third-party tools to submit claims and evidence.

In this version of ARP that we are testing, representatives search for a specific claimant which then leads them to a Claimant Page. From this page they can submit a claim, view claimant information, view representation requests, or view claimant’s submission history. In this version, the navigation only shows “Find Claimant,” “Representative requests,” and “Help,” with “Your recent history” as part of a dropdown menu underneath the representative’s name.

## Research Goals

* Evaluate the usability of the search. Is it clear and intuitive? What could be improved?
* Evaluate the value of the Claimant Page overview. Is the information useful? What could improve its value?
* Evaluate the clarity and value of the claim submission flow, starting from Claimant Page. What could be improved?
* Evaluate the navigation. Are the sections and their purpose clear?

## Research Questions

Goal: Evaluate the usability of the search. Is it clear and intuitive? What could be improved?

* Do people expect to land on the search page after logging in?
* What do reps search by to find an individual in existing tools? What method do they prefer?
* What do people expect to see next after clicking “search?”

Goal: Evaluate the value of the Claimant Page overview. Is the information useful? What could improve its value?

* Is the information on the claimant overview must have/nice to have/not needed? What other information would be helpful to see?
* Are the alerts relevant and clear? What other alerts/notifications would they want to see for a claimant?

Goal: Evaluate the clarity and value of the claim submission flow, starting from Claimant Page. What could be improved?

* What do they expect to see next after selecting “Start [Form number] submission”?
* Do they understand differences in how submitted files will be processed?
* What would their next step be after submitting files?
* Is this version of submitting a claim better and faster than their current solution? Why or why not?

Goal: Evaluate the navigation. Are the sections and their purpose clear?

* When given scenarios, will a representative know which navigation section to visit, to take action? (Note: The following question(s) would be asked prior to giving the participant scenarios for Find Claimant and Claimant page.)
* Are the section headings clear? How confident do they feel in navigating the app?

## Hypotheses

Representatives will find

* Searching by last four digits of SSN, first name and last name will feel like an appropriate amount of information to enter.
* Information on the claimant overview page helps answer questions the representative has about the claimant; it is useful.
* The solution for submitting the form through Claimant Page is perceived as an equal to QuickSubmit.
* Each participant can complete 75% of the navigation tasks successfully.

## Outcome

This research will inform edits to Find Claimant, Claimant page, and the Claim Submission flow. It will also inform future iterations of claims submission.

## Methodology

1:1 Usability test, including navigation tasks.

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
* Those who at a minimum are familiar with QuickSubmit. They can also be familiar with other third party tools.
* Mix of single and cross-accredited
* Mix of reps from the “Big 6” and county reps

## Timeline

Timeline is an estimation and will be updated if needed. Representative availability might impact this timeline.

### Estimated research length: ~4 to 5 weeks

### Research sessions

* Planned dates of research: Week of 6/2/2025

### Length of sessions

* Session length: 1 hour
* Buffer time between sessions: 30 minutes
* Maximum Sessions per day: 3

### Week of May 19

* Finalize research plan
* Draft and share conversation guide for asynchronous feedback
* Identify who to recruit (expect to email 9-10 reps)
* Hold time on key team member calendars for sessions

### Week of May 26

* Finalize conversation guide
* Finalize prototype for testing
* Send recruitment emails starting 4/27 (day after Memorial day)
* Set up slack channel for this testing session
* Confirm sessions and request for observer + notetaker signups
* Schedule 10 minutes post session for debriefs
* Identify backup moderators

### Week of June 2

* Confirm sessions and request for observer + notetaker signups
* Hold sessions
* Start analysis and synthesis
* If possible, share early findings with internal working team

Week of June 9

* Synthesize data
* Draft report

Week of June 16

* Shareout report with immediate team by June 17, decide on whether or not to share with other stakeholders. Shareout may take place end of the prior week.

## Team Roles

* Moderators: Laura Paradis, Kate Albee, Eva Heintzelman or Jennifer Seipel as backup
* Research guide writing and task development: Laura Paradis, Kate Albee
* Participant recruiting & scheduling: Kate Albee
* Project point of contact: Laura Paradis
* Notetakers: Laura Paradis, Kate Albee, Eva Heintzelman
* Observers: ARF team members (especially those on the claims submission workstream), Enablement team
