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

# Drawer and Skeleton Loader Test Plan


## Background:

**Drawer**

A Drawer is a panel that slides in from the right edge of the screen, overlaying the main content to present secondary content without navigating away from the current view. When interacting with dense information, clinicians want to be able to view, edit, and create information so that they can easily review and navigate with the context of their current screen.

**Skeleton Loader**

The Skeleton Loader is a known pattern for interacting with dense data. The animated pattern improves the perceived waiting time and keeps the users engaged during the loading process. A Skeleton Loader uses two shapes (circles and rectangles) to display as placeholders of content while it is loading. This enables the data to load incrementally.


## Research Goals:

To assess the overall usability of the Drawer in combination with other patterns such as the skeleton loader, graphs, and other visualizations


## Outcome:

Testing the Drawer as a container with other visualizations inside of it will reveal the true capabilities and limitations of the drawer as a collapsable container.

Usability testing will inform the Data Viz team on how to improve the drawer for future iterations.


## Research Questions:

**Drawer functionality:**



1. Are users able to discover that there is more information within the drawer?
2. How do users react to basic drawer functions?
3. How do they react to the open/close animations?
4. How do users interact with the information within the drawer?
5. How do users use the drawer in conjunction with the main screen?
6. How do users react to seeing and interacting with other visualizations such as graphs within the drawer?
7. How do users react to the drawer in different screen sizes?
8. What is the ideal order of information and visualizations within the drawer?

**Skeleton Loader:**



1. Are users able to recognize that data will populate the screen?
2. Do users understand the purpose of the skeleton loader?



## Hypothesis:



* Users will react positively to the drawer because it contains a lot of useful information while keeping the context of the main screen.
* Users will want to be able to hide areas of the drawer that are not useful for them.
* Users will hardly notice the skeleton loader, reinforcing the loaders purpose.



## Methodology:

**Semi-structured interviews**

Researchers will observe clinicians using data grid on a Codespace staging environment and ask for general feedback throughout the session. All sessions will take place over Microsoft Teams and we will ask clinicians to share their thoughts as we give them a series of tasks. We will ask follow-up questions for any needed clarification. Each session will take approximately 1 hour. We aim to hold 5 sessions at a minimum.


## Recruitment:

Cold email from clinician spreadsheet.

5 VA clinicians.

Timeline:

08/05- 08/15 – Create research/conversation guide

08/08 – 08/15 – Outreach emails and begin recruitment

08/08- 08/18 – Helene to create codespace

08/19- Session test run

08/20-08/29- Usability testing session

09/01-09/05- Synthesis

09/08-09/12- Create deck and shareout

09/15-09/19- Write research report and add to repository
