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

# Research Plan: Understanding Developer and Product Manager Testing Workflows with Production Test Accounts (PTAs)


## Description

This research aims to understand how developers and product managers on VA.gov product teams currently validate features throughout their development lifecycle. We'll focus on their use of production test accounts, testing practices in lower environments (staging, development), and overall workflow patterns. This understanding will help identify pain points, inefficiencies, and opportunities to improve the testing and validation process for teams building features that serve Veterans.

The research will involve speaking directly with developers and product managers across different product teams to gather insights about their current practices, tools, and challenges when validating features before they reach Veterans.

## Research Questions

**Primary Questions:**
- How do developers and product managers currently use production test accounts in their feature validation process?
- What testing activities happen in staging and other lower environments versus production?
- What does the typical workflow look like from feature development to validation?

**Secondary Questions:**
- What challenges or friction points exist in the current testing workflow?
- How do teams coordinate testing activities across different environments?
- What types of features or scenarios are most difficult to test with current approaches?
- How confident do teams feel about feature quality when releasing to Veterans?
- What workarounds or unofficial processes have teams developed?

## Hypotheses

1. **Production test accounts are heavily relied upon** - Teams depend on production test accounts more than ideal because lower environments don't adequately replicate production conditions or data scenarios.

2. **Environment inconsistencies create workflow friction** - Differences between staging and production environments force teams to do significant validation work in production, creating risk and inefficiency.

3. **Testing workflows vary significantly across teams** - Different product teams have developed their own approaches and workarounds, leading to inconsistent practices and knowledge gaps.

4. **Current processes create confidence gaps** - Teams lack confidence in their ability to fully validate features before release, particularly for complex user scenarios or edge cases.

## Recruitment
Various product teams that have access to PTAs currently.
At least 1 VISTA team
My VA Health person if possible
MHV product team ? 
VFS product team - VA.gov
Lighthouse team - VA.gov and an additional system 
A mix of product managers, developers, QA/test engineers, researchers

