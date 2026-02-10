---
# Research Plan Metadata
title: "Research Plan for MHV on VA.gov Medications – IPE A/B Testing June 2025"
date: 2025-06-01
last_updated: 2025-06-01
team: "Digital Health Modernization"
product: "MHV on VA.gov - Medications"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans need efficient ways to find their medications in a list. We initially built and tested an in-product education (IPE) component to help Veterans locate specific medications. This A/B testing study will determine the most effective placement and design of the IPE component to improve medication findability."
  product_location: "VA.gov - My HealtheVet on VA.gov - Medications section (authenticated experience)"
  user_familiarity: "Iteration - building on tested prototype with new IPE component variations"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications"

# Research Design
methodology: "Unmoderated prototype testing with A/B/C comparison"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: false
  testing_platform: "Optimal Workshop"
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand whether the IPE helps Veterans find their medications"
  - goal_2: "Understand whether the IPE encourages Veterans to use the filter component"
  - goal_3: "Understand where the IPE is most effective within the Medications IA on VA.gov"

research_questions:
  - "Which version of the Medications List helps Veterans find specific medications most efficiently?"
  - "Which version encourages Veterans to use the filter component?"
  - "Which version do Veterans find most intuitive and easy to use?"

hypotheses:
  - "The 'filter open' version enables Veterans to find medications more easily than other versions"
  - "The 'filter open' version promotes more frequent use of the filter"
  - "The 'filter open' version will yield lower task completion times, higher accuracy rates, higher satisfaction scores, and more positive feedback"

expected_outcomes: "The results of the study will help determine if the current designs offer the best user experience for Veterans and identify any usability pain points. This will guide future design improvements."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Mobile-only Veterans with My HealtheVet accounts"
  
  primary_criteria:
    - "Using a mobile phone to participate"
    - "Have a My HealtheVet (MHV) account"
    - "No Assistive Technology (AT) users"
    
  secondary_criteria:
    - "Experience using MHV to review medications in last 12 months (optional)"
    
  screener_questions:
    - question: "Are you using a mobile phone to participate today?"
      qualifying_response: "Yes"
    - question: "Do you have a My HealtheVet (MHV) account?"
      qualifying_response: "Yes"
    - question: "Have you used MHV to review your medications in the last 12 months?"
      qualifying_response: "Yes or No (both allowed)"
      
participants:
  veterans: 225
  caregivers: 0
  dependents: 0
  total_recruited: 225
  completed_sessions_goal: 225
  pilot_participants: 5
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-06-16 to 2025-06-22"
  pilot_participant: "5 participants to validate setup"
  research_dates: "2025-06-23 to 2025-08-09"
  research_review_submission: "2025-06-15"
  kickoff_call_dates: ["2025-06-16 10:30-11:00am ET", "2025-06-17 1:00-1:30pm ET", "2025-06-17 2:00-2:30pm ET"]
  
session_details:
  duration_minutes: 0
  buffer_minutes: 0
  max_sessions_per_day: 0
  notes: "Unmoderated study - participants complete at their convenience"
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Improve satisfaction with our web and mobile products by 5 points"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Previous IPE usability studies on Medications prototype"
    - "Medications usability testing and feedback collection studies"
    
prototype_variants:
  - variant_a: "IPE component above the filter"
  - variant_b: "IPE component below the filter"
  - variant_c: "Filter accordion expanded (IPE and sort removed)"
    
tags:
  - "health-care"
  - "medications"
  - "unmoderated-testing"
  - "A-B-testing"
  - "mobile"
  - "in-product-education"
  - "veterans"
---

# Research Plan for MHV on VA.gov Medications – IPE A/B Testing June 2025

---

## Background

Our project is part of the **Digital Health Modernization** strategy, which aims to create a centralized place for Veterans to access their health information. As part of this effort, My HealtheVet (MHV) is being moved to VA.gov.

We initially built and tested a prototype of Medications in MHV on VA.gov. We conducted usability studies and collected feedback that informed iterations on the website. We also conducted usability studies on a new **in-product education (IPE)** component to evaluate participants’ ability to find specific medications. In this round of A/B testing, we will conduct further testing on the IPE component.

> [Read more about our Digital Health Modernization strategy](#)

---

## OCTO-DE Priorities

_Work with your VA lead and product manager as needed._

### Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

- **KR1:** Improve satisfaction with our web and mobile products by 5 points.

---

## Veteran Journey

Where does your product fit in the [Veteran’s journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)?

- Starting Up
- Taking Care of Myself
- Putting Down Roots
- Retiring
- Aging

---

## Research Goals

- Understand whether the IPE helps Veterans find their medications.
- Understand whether the IPE encourages Veterans to use the filter component.
- Understand where the IPE is most effective within the Medications IA on VA.gov.

---

## Outcome

The results of the study will help determine if the current designs offer the best user experience for Veterans and identify any usability pain points. This will guide future design improvements.

---

## Research Questions

1. Which version of the Medications List helps Veterans find specific medications most efficiently?
2. Which version encourages Veterans to use the filter component?
3. Which version do Veterans find most intuitive and easy to use?

---

## Hypotheses

- **Hypothesis 1:** The “filter open” version enables Veterans to find medications more easily than other versions.
- **Hypothesis 2:** The “filter open” version promotes more frequent use of the filter.
- **Hypothesis 3:** The “filter open” version will yield:
  - Lower task completion times
  - Higher accuracy rates
  - Higher satisfaction scores
  - More positive feedback

---

## Methodology

### Study Type

**Unmoderated prototype testing with post-task questions** via Optimal Workshop.

### Tasks

- Participants complete 2 tasks using 3 different Medications List prototypes.
- Researchers will:
  - Observe navigation
  - Compare task completion times
  - Evaluate satisfaction across conditions

### Prototype Variants

1. IPE component above the filter
2. IPE component below the filter
3. Filter accordion expanded (IPE and sort removed)

---

## Location

Remote testing via Optimal Workshop.

---

## Research Materials

[Link to Optimal Workshop Option A](https://dj540s05.optimalworkshop.com/prototype/1c2662f5b8d1903d6f0d479a9d110452)

[Link to Optimal Workshop Option B](https://dj540s05.optimalworkshop.com/prototype/5605flpf)

[Link to Optimal Workshop Option C](https://dj540s05.optimalworkshop.com/prototype/030190e86820aaaf75e54ec85d94e043)


[Link to task guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-06-IPE-AB-testing/task-guide.md)

---

## Recruitment

### Approach

- We will partner with **Perigean** for Veteran recruitment.

### Sample Size

- **225** mobile-only participants
- **No Assistive Technology (AT) users**
- **Pilot group**: 5 participants to validate setup and data accuracy


---

## Prescreen Questions

1. Are you using a mobile phone to participate today?
   - Yes → eligible
   - No → exclude

2. Do you have a My HealtheVet (MHV) account?
   - Yes → eligible
   - No → exclude

3. Have you used MHV to review your medications in the last 12 months?
   - Yes or No → both allowed

---

## Timeline

- **Data collection period:** Jun 23– Aug 9
- **Target completion date:** August 9, 2025 (or sooner if sample is met)

### Kickoff with Perigean

Available time slots:

- Monday June 16th 10:30-11:00am eastern
- Tuesday June 17th 1:00-1:30pm eastern
- Tuesday June 17th 2:00-2:30pm eastern

---

## Team Roles

- **Moderator:** N/A
- **Research design & task development:** Melissa Stern, Dan Van Vleck
- **Recruitment & screening:** Perigean
- **Points of contact:** Dan Van Vleck, Anne Costello Kennedy
- **Pilot testers, accessibility specialists, note-takers, observers:** N/A
