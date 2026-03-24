---
# Research Plan Metadata
title: "Research Plan for CDS Data Visualization, Data Grid, 2024"
date: 2024-01-01
last_updated: 2024-01-01
team: "Clinical Decision Support Collaborative (CDSC) Data Visualization Team"
product: "CDS Data Grid Pattern"
product_area: "CDS Console"

# Background Context
background:
  problem_statement: "Data Grid is an interactive table pattern that allows clinicians to view and interact with large datasets. Currently in development for use within CDSC applications including Lung Cancer Screening and Task Manager."
  product_location: "CDS Console - Multiple applications"
  user_familiarity: "New pattern - establishing design pattern for large dataset interaction"
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
  - goal_1: "Validate usability of data grid pattern for large dataset interaction"
  - goal_2: "Test effectiveness of interactive table features for clinician workflows"
  - goal_3: "Identify improvements needed before implementation across CDS applications"

research_questions:
  - "How effectively can clinicians interact with large datasets using the data grid?"
  - "Do the interactive features support clinical decision-making workflows?"
  - "What usability issues emerge when working with dense tabular data?"
  - "How does the data grid compare to existing data table solutions clinicians use?"

hypotheses:
  - "Data grid will improve clinician ability to work with large datasets efficiently"
  - "Interactive features will reduce time spent navigating and filtering data"
  - "Pattern will be intuitive for clinicians familiar with EHR data tables"

expected_outcomes: "Validated data grid pattern with implementation guidance for Lung Cancer Screening, Task Manager, and other CDS applications"

# Recruitment & Participants
recruitment:
  recruiting_partner: "CDSC research participant database"
  approach: "targeted recruitment"
  
  primary_criteria:
    - "VA clinicians who regularly work with patient data tables"
    - "Users of Lung Cancer Screening or Task Manager preferred"
    
  secondary_criteria:
    - "Mix of clinician roles"
    - "Various experience levels with CDS tools"
    
  screener_questions:
    - question: "Do you regularly work with patient data tables in your clinical workflow?"
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
  pilot_date: "2024-02-01"
  pilot_participant: "TBD"
  research_dates: "2024-02-05 to 2024-02-25"
  research_review_submission: "2024-01-25"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 15
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Establish standardized CDS design patterns"
    key_results: 
      - "Validated data grid pattern for CDS applications"
      
veteran_journey_phases: []
clinician_workflow_stages:
  - "Reviewing patient lists and datasets"
  - "Filtering and sorting clinical data"
  - "Making decisions based on tabular information"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "CDS data visualization pattern research"
    
tags:
  - "health-care"
  - "clinical-decision-support"
  - "CDS"
  - "data-visualization"
  - "data-grid"
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

# Data Grid Usability Testing Research Plan

Data Grid | Data Visualization Team


# Background:

Data Grid is a pattern that consists of an interactive table that allows clinicians to view and interact with large datasets. Currently, data grid is still in development and will be used within the CDSC applications. This is a new pattern that is currently being used in Lung Cancer Screening and Task Manager.


# Research Goals:

To assess the overall usability of the Data Grid and to observe how clinicians use Data Grid.

Better understand the specific needs, behaviors, and workflows of clinicians when using Data Grid and identify areas of improvement for future iterations.


# Outcome:



* Testing the usability of Data Grid will help our team identify any areas for improvement and opportunities to grow the functionalities of Data Grid to ultimately optimize clinician workflow and user experience.
* Observational activities and interview questions will allow our team to deep dive into particular features of the Data Grid such as the toolbar and filtering capabilities.
* Observational activities will shed light to the shortcomings (if any) of responsive features.


# Research Questions:

**Toolbar**

We want to ask questions and observe how clinicians search for data using the search functionality in the toolbar. We want to observe the entire workflow of what prompts clinicians to search for something and what actions they take based on the results of the search. Furthermore, we want to understand how clinicians are filtering the results. By understanding how clinicians use the toolbar, we hope to identify areas for improvement.



* How are users prioritizing the table search in relation to the individual column search fields?
* Are users getting the expected experience around the search functionality?
* How are users filtering table data? Are they able to recognize if filters are active?

**Table**

We want to understand how clinicians interact with and navigate the data grid table and see how they find key data. We’re interested to see if and how clinicians use the various table functionalities such as pinning, sorting, and filtering.



* How do clinicians use the pinning functionality (if at all)? What are some use cases where they would use pinning?
* How do clinicians use column searches compared to the toolbar search?
* How do clinicians use the sorting functionality? What are some use cases where they would use sorting.
* How do clinicians update/edit cell values?


# Hypotheses:



* Users will recognize data grid from using similar patterns and will be able to complete tasks with general ease.
* Users will successfully find information that they are tasked to search for but the double layered search may cause some confusion.


# Methodology:

**Semi-structured interviews**

Researchers will observe clinicians using data grid on a Codespace staging environment and ask for general feedback throughout the session. All sessions will take place over Microsoft Teams and we will ask clinicians to share their thoughts as we give them a series of tasks. We will ask follow-up questions for any needed clarification. Each session will take approximately 1 hour. We aim to hold 5 sessions at a minimum.


# Locations:

Remote via Microsoft Teams. We will adhere to EST.


# Research Materials:



* Conversation guide


# Recruitment:

Cold email clinicians on the SharePoint Research Participant Database.


# Timeline:

04/21 - 04/25 Research plan and conversation guide prepared

04/28 - 05/02 Outreach emails created and begin recruitment

05/05 - 05/09 Developers prepare Codespace 

05/12 - 05/23 Conduct testing sessions

05/26 - 05/30 Synthesis

06/02 - 06/06 Prepare deck and share out


# Team Roles:

Research conversation guide writing and task development: Ben Nguyen; Juan Pasten

Project point of contact: Juan Pasten; Ben Nguyen

Note-takers/Observers: Juan Pasten; Ann Laidlaw; Helene McCarron 

