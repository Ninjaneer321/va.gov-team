# Research Plan Metadata
title: "CDS Task Manager Use Cases and Post Launch Enhancements, February 2026"
date: 2026-02-04
last_updated: 2026-04-09
team: "CDS Task Manager"
product: "CDS Task Manager"
product_area: "Task List, Task Detail"

# Background Context
background:
  problem_statement: "Clinical providers within the VA are burdened by disjointed systems, information silos and disruptive alerting that introduce friction in clinical workflows. Task Manager provides a centralized locationion for clincial teams to track, monitor, prioritize , coordinate and action on their clinical tasks."
  product_location: "https://cds.med.va.gov/cds-console/tm"
  user_familiarity: "launched July 2025"
  product_brief_url: "https://confluence.devops.va.gov/spaces/VA/pages/68690296/Task+Management+MVP+Hypothesis+-+Final"

# Research Design
methodology: "semi-structured interviews, contextual inquiry"
research_format: 
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: "[Location name if applicable]"
    point_of_contact: "[Name if applicable]"
    equipment: "[Equipment details if applicable]"
  moderated: true # Options: true, false
  
# Research Goals & Questions
research_goals:
  - goal_1: "When it comes to your role at VA, what types of work involve managing tasks? These can be tasks you're managing individually, or tasks you're coordinating with team members."
  - goal_2: "For the workflows you're looking to manage: What type of tasks are involved? Who's typically involved with this work? How are they involved in this work?"

research_questions:
  - "Can you share a little bit about your overall experience with creating tasks? What’s working? What can be improved?"
  - " Can you share a little bit about your overall experience with tracking and monitoring tasks? What’s working? What can be improved?"
  - "Can you share a little bit about your overall experience with task follow-up, updates and follow-through? What's working? What can be improved?"
  - "With regard to the task list, what columns do you find to be relevant and useful? What might be missing?"
  - " With regard to the task details, what fields do you find to be relevant and useful? What fields are missing?"

hypotheses:
  - "The current object model (relationship between tasks, teams and members) may not meet the needs of all teams using task manager."
  - "Some PACT teams may want to share tasks across departments."
  - "Some teams may want to support a more 'pull-based' workflow, in which tasks as pulled from a common pool of unassigned tasks."
  - "User workflows may require additional ways to categorize and organize tasks, including potentially more detailed statuses or ways to label tasks."
  - "Currently all task details are entered in manually. Users may wish for ways to accelerate their task creation flow with bulk task creation, templatization."

expected_outcomes: "Insights about use cases and workflows, and feedback about product pain points and bright spots will help uncover feature gaps, and future ideas for enhancements."

# Recruitment & Participants
recruitment:
  recruiting_partner: "n/a"
  approach: "broad representation across variety of clinical roles, weighting recruitment toward those in Nursing roles (mirroring application use by role)"
  
  primary_criteria:
    - "Currently using task manager as a tool for managing and coordinating tasks"
    - "Exploring task manager as a tool for managing and coordinating tasks"
    
  secondary_criteria:
    - "n/a"
    
  screener_questions:
    - question: "n/a"
      qualifying_response: "n/a"
      
participants:
  Nursing: 10
  Admin / Ops: 6
  Behavioral Health: 4
  Pharmacy: 3
  Physician: 1
  total_recruited: 45 (rolling)
  completed_sessions_goal: 24
  
# Timeline & Sessions
timeline:
  pilot_date: "n/a"
  pilot_participant: "n/a"
  research_dates: "2026-02-04 to 2026-03-13"
  research_review_submission: "2026-02-02"
  
session_details:
  duration_minutes: 45-60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1"
    key_results: 
      - "Key Result 1: Improve satisfaction with our web and mobile products by 5 points."
      
veteran_journey_phases:
  - "Starting up"
  - "Taking care of myself"
  - "Reinventing Myself"
  - "Putting down roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "n/a"
    
tags:
  - "health-care"
  - "clinical-decision-support"
  - "CDS"
  - "task-manager"
  - "post-launch"
  - "generative"
  - "remote"
  - "moderated"
  - "clinicians"
  - "staff-facing"
  - "enhancements"
  - "AUD: VA Staff"
  - "BNFT: Healthcare"
