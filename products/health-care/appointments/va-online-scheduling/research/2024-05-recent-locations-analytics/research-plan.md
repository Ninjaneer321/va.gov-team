---
# Research Plan Metadata
title: "Recent Location Analytics Research Plan for VAOS, May 2024"
date: 2024-05-01
last_updated: 2024-05-01
team: "Appointments FE"
product: "VA Online Scheduling (VAOS)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans need to be able to easily find relevant facilities when scheduling appointments. The Sort by field defaults to recent locations to surface relevant facilities and limit searching through irrelevant options."
  product_location: "VA.gov Appointments Tool - facility selection page"
  user_familiarity: "New feature iteration"
  product_brief_url: ""

# Research Design
methodology: "analytics tracking"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: false
  
# Research Goals & Questions
research_goals:
  - goal_1: "Track whether the default Sort by field is changed from Recent locations to a different option by users"

research_questions:
  - "Are users clicking on one of facilities surfaced with the default set at recent locations or selecting a different way to sort the list?"
  - "How long are users spending on the page compared to time spent before the change?"
  - "Are users leaving comments about the facility selection page and is feedback generally positive or negative?"

hypotheses:
  - "Comments about not being able to find their facility will decrease"
  - "Comments about showing locations they have not used in ages and are irrelevant to the Veteran will decrease"
  - "The use of the sort by drop down will decrease because Veterans will select one of the facilities in list with the defaulted recent locations"

expected_outcomes: "Data will assess if users are clicking on facilities surfaced with default recent locations or selecting a different way to sort the list, informing whether the feature is effective."

# Recruitment & Participants
recruitment:
  recruiting_partner: "N/A - analytics study"
  approach: "production analytics tracking"
  
  primary_criteria:
    - "All users of VAOS on VA.gov"
    
  secondary_criteria:
    - "N/A"
    
  screener_questions:
    - question: "N/A - analytics study"
      qualifying_response: "N/A"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "N/A"
  pilot_participant: "N/A"
  research_dates: "TBD - one month after feature release"
  research_review_submission: "N/A"
  
session_details:
  duration_minutes: 0
  buffer_minutes: 0
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Improve facility finding experience in appointment scheduling"
      
veteran_journey_phases:
  - "Taking care of myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Related to 2024-05-oh-scheduling research"
    
tags:
  - "health-care"
  - "appointments"
  - "VAOS"
  - "analytics"
  - "quantitative"
  - "unmoderated"
  - "veterans"
  - "authenticated-experience"
  - "scheduling"
  - "facility-selection"
  - "datadog"
  - "medallia"
  - "evaluative"
  - "post-launch"
---

# Recent location Analytics Research Plan - For VAOS, Appointments FE, 05/2024

## Background
VA Online Scheduling allows Veterans who are logged into VA.gov to schedule and manage their appointments.

On [DATE TBD] the VAOS team released a feature for users to search faciities by recent locations. The "Sort by" field will default to "recent locations" in order to surface relevant facilities for Veterans and limit the amount of searching through irrelevant options.  

## Research Goals	
Track whether the default "Sort by" field is changed from "Recent locations" to a different option by users. 

### Outcome
We'll use this data to: 
- Assess if users are clicking on one of facilities surfaced with the default recent locations or selecting a differnt way to sort the list. 


### Research questions
- Are users clicking on one of facilities surfaced with the default set at recent locations? OR are they selecting a differnt way to sort the list?
- How long are users spending on the page? (compare this with time spent on page prior to the change)
- Are users leaving comments about the facility selection page?
    - Is the feedback generally positive or negative?

### Hypothesis
- Comments about not being able to find their facility will decrease. 
- Comments about showing locations they have not used in ages and are irrelevant to the Veteran will decrease. 
- The use of the "sort by" drop down will decrease because Veterans will select one of the facilities in list with the defaulted "recent locations."

## Methodology	
In Data Dog, track:
 - The amount of time on page before and after implementing the change.
 - If the "Sort by Recent locations" is being clicked on to change the default from "Sort by Recent locations" to something else.
 - If the user does change the drop down from "recent locations", what are they changing it to?
In Medallia, we will track:
- Feedback from the two months before and after the feature is released to see if any comments surface around the changes.

## Timeline
The "Sort by Recent locations" feature was released to prod on [Date]. We'll track usage for one month after that.
