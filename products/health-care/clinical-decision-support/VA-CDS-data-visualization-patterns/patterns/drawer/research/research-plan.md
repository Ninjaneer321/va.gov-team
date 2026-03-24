---
# Research Plan Metadata
title: "Research Plan for CDS Data Visualization, Drawer and Skeleton Loader, 2024"
date: 2024-01-01
last_updated: 2024-01-01
team: "Clinical Decision Support Collaborative (CDSC) Data Visualization Team"
product: "CDS Data Visualization Patterns"
product_area: "CDS Console"

# Background Context
background:
  problem_statement: "Clinicians working with dense information need to view, edit, and create information easily without losing context of their current screen. Need to validate drawer pattern and skeleton loader pattern for CDS applications."
  product_location: "CDS Console - Multiple applications"
  user_familiarity: "New pattern - establishing design pattern library for CDS applications"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/clinical-decision-support/VA-CDS-data-visualization-patterns"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate usability of drawer pattern for secondary content presentation"
  - goal_2: "Test effectiveness of skeleton loader for managing perceived wait time"
  - goal_3: "Identify improvements for both patterns before implementation across CDS applications"

research_questions:
  - "How effectively does the drawer pattern support clinician workflows without losing context?"
  - "Does the skeleton loader improve perceived loading time and user engagement?"
  - "How do clinicians interact with incrementally loading data?"
  - "What improvements are needed before pattern implementation?"

hypotheses:
  - "Drawer pattern will allow clinicians to access secondary information without losing primary context"
  - "Skeleton loader will reduce perceived wait time and improve user experience"
  - "Patterns will be intuitive to clinicians familiar with dense data interfaces"

expected_outcomes: "Validated design patterns with implementation guidance for CDS application teams"

# Recruitment & Participants
recruitment:
  recruiting_partner: "CDSC research participant database"
  approach: "targeted recruitment"
  
  primary_criteria:
    - "VA clinicians who use CDS applications"
    - "Experience with dense data interfaces"
    
  secondary_criteria:
    - "Mix of clinician roles (physicians, nurses, specialists)"
    - "Various experience levels with CDS tools"
    
  screener_questions:
    - question: "Do you regularly use CDS applications in your clinical workflow?"
      qualifying_response: "Yes"
      
participants:
  veterans: 0
  caregivers: 0
  clinicians: 6
  va_staff: 0
  total_recruited: 8
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "2024-01-15"
  pilot_participant: "TBD"
  research_dates: "2024-01-20 to 2024-02-10"
  research_review_submission: "2024-01-10"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 15
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Establish standardized CDS design patterns"
    key_results: 
      - "Validated patterns for CDS application teams"
      
veteran_journey_phases: []
clinician_workflow_stages:
  - "Reviewing patient information"
  - "Accessing secondary data without context switching"
  - "Managing dense data workflows"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "CDS data visualization pattern research"
    
tags:
  - "health-care"
  - "clinical-decision-support"
  - "CDS"
  - "data-visualization"
  - "drawer-pattern"
  - "design-patterns"
  - "usability-testing"
  - "remote"
  - "evaluative"
  - "moderated"
  - "clinicians"
  - "staff-facing"
  - "AUD: VA Staff"
  - "BNFT: Healthcare"
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
