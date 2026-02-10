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

# Research Plan: MHV Coordinators and Call Center Representative - Production Test Accounts (PTAs) for Healthcare Workflow Training and Troubleshooting

## Background
This research aims to understand how My HealtheVet (MHV) coordinators and call center representatives currently utilize Production Test Accounts (PTAs) for training and troubleshooting issues, specifically focusing on two key workflows: 1. Veterans refilling prescriptions and 2. secure messaging between providers and Veterans. This round of research will NOT include testing end-to-end testing scenarios for feature development.

## Primary Research Objective
The study will provide insights to inform the potential solution of a demo mode to meet the needs of this use case to train Veters and troubleshoot/replicate issues. 

## Research Questions

### Primary Research Questions
1. **Current Usage Patterns**: How are MHV coordinators and call center representatives currently using Production Test Accounts (PTAs) for prescription refill and secure messaging training and troubleshooting? How do coordinators and call center representatives use PTAs for training on prescription refills and secure messaging?

2.  **Workflow Integration**: How do Production Test Accounts fit into MHV coordinators' existing training workflows for prescription refills and secure messaging?
   
3.  **Workarounds**: Since usage of PTAs do not indicate that all MHV coordinators use them regularly, are there workarounds that coordinators/call center representatives can utilize?
   
4.  **Pain Points**: What are the pain points and successes MHV coordinators and call center representatives experience when using Production Test Accounts for these use cases?

5. **Troubleshooting Applications**: In what specific troubleshooting scenarios do MHV coordinators and call center reps rely on Production Test Accounts for prescription refill and secure messaging issues?


## Hypotheses

### Primary Hypotheses
**H1**: MHV coordinators use production test accounts to train on standardized, repeatable aspects of both workflows (e.g., navigation, form completion, message composition).

**H2**: When issues are escalated through the call center, Tier 2 and Tier 3 representatives utilize PTAs to replicate the issues a Veteran is excperiencing in order to help them problem solve unique issues. 

**H3**: MHV coordinators and call center representatives view Production Test Accounts as a necessary tool in their day to day jobs for troubleshooting complex issues Veterans encounter.

**H4**: Secure messaging and prescription refill training is complex and requires hands on demonstration.

**H5**: Leveraging in PTAs for training correlates positively with Veteran self-sufficiency in both healthcare workflows.


## Research Methodology

### Phase 1: Discovery Research (1 sprint) with MHV Coordinators
**Approach**: Qualitative exploration through moderated interviews with observation sessions

**Methods**:
- Moderated interviews with observation sessions (45-60 minutes each)
- Target participants: At least 3 MHV coordinators who use PTAs and 3 who don't and at least 3 call center representatives who use PTAs and 3 who don't.

**Key Areas of Investigation**:
- Current Production Test Account usage patterns and frequency for both workflows.
- Specific training scenarios where Production Test Accounts are employed for prescription refills and secure messaging.
- MHV Coordinators best practices and workarounds for each workflow.
- Integration with other training tools and methods.

## Timeline
- **Week of Oct 6 and Oct 13**: Participant recruitment and scheduling
- **Week of Oct 20**: Participant Interviews

## Constraints and Considerations
- Focus limited to prescription refill and secure messaging workflows only
- Excludes end-to-end workflow testing for both use cases
- Does not include Veteran direct feedback (MHV coordinators); call center representative conversations will take place in Phase 2
- Maintains focus on training and troubleshooting applications specifically
- Secure messaging scope limited to basic send/receive functionality, excluding advanced features

This research plan provides a focused foundation for understanding current PTA usage across two key workflows in order to determine the scope and impact that the deprecation of PTAs will have on MHV coordinators and subsequently call center representatives' ability to train and assist Veterans with troubleshooting.
