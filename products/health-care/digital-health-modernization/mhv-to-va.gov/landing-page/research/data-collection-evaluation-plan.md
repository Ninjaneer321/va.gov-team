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

# **Data Collection Evaluation Plan**

## **Background**

This evaluation plan outlines how the Cartography team will measure and track real-world use of products under the Cartography team's purview including MHV home page and the portal's secondary navigation and breadcrumbs. 

### **Objectives**

- Surface clues for what MHV users are finding most and least valuable and/or usable on the MHV home page and within the portal
- Measure and track voluntary adoption of MHV on VA.gov
- Understand what else MHV users are doing on VA.gov
  
## **KPIs**

**Must have**

| **Theme**| **Question** | **Metric** | **Currently tracking** | **Link to ticket** | **Link to instructions** | 
| --- | --- | --- | --- | --- | ---- |
| Engagement | What are the top tasks on the MHV landing page? | Click (engagement/conversion rate); Top tasks | GA4| No | 
| Navigation and findability | what % of users use secondary nav across the entire portal? |Click analytics| Datadog; GA4 |No|[Link to ticket](https://app.zenhub.com/workspaces/mhv-on-vagov-landing-page-62619a987d74510018ecc546/issues/gh/department-of-veterans-affairs/va.gov-team/89719)|
| Navigation and findability | What methods are using to navigate the portal?| Clicks on breadcrumbs, links on MHV landing page, Secondary nav engagement| Yes | ---||
| Navigation and findability | How are users getting to the landing page? (What are the rates of users who click try-me banners versus those who login to get to MHV?) | Account activity logs from DAT team: # of clicks from the discrete locations in MHV classic. Reverse path exploration in GA4 using my/health/. what proportion are coming from specific links? |  | --- | [Link to ticket](https://app.zenhub.com/workspaces/mhv-on-vagov-landing-page-62619a987d74510018ecc546/issues/gh/department-of-veterans-affairs/va.gov-team/89722)|
| User segmenting | What is the ratio of new versus returning users to MHV LP? | Segmented reports in GA4 |  | --- ||
| Usability and ease | How many users choose to go back to the national portal? In which tools are users clicking that link the most? | Clicks on Go-back links (3); Pull into excel, month to month (# of clicks in each) | | Yes | [Link to ticket](https://app.zenhub.com/workspaces/mhv-on-vagov-landing-page-62619a987d74510018ecc546/issues/gh/department-of-veterans-affairs/va.gov-team/89113)|

**Nice to have** 

| **Theme**| **Question** | **Metric** | **Tools** | **Currently tracking**| 
| --- | --- | --- | --- | --- |
| Navigation and findability| What are the most common ways users get to the LP? And how do rates compare for first time try-ers vs. return users | Path exploration | GA4 |  --- | 
| Usability and ease | Are MHV nat'l users accessing more VA benefits since integration? | Path exploration | -- | -- |
| Navigation and findability | Are we seeing an uptick in health-related searches? | Search terms throughout site | GA4 | --- | 
| User segmenting | What can we learn about first time tryers vs. tryers that return vs. those who tried and never returned? | -------- | ----- | ------- | ----------| 
| User segmenting | How many tools do users make use of in a single session? How does that compare with national portal stats? | Analytics channel | GA4 | ----- | 
| User segmenting | Do Veterans use more than one tool per session? | Page views per session | ---- | ---- | 
| Findability | How much of the page is being looked at by Veterans? | Page view percentages by scroll depth | ---- | ---- | 
| Access to help | How many Veterans call the My HealtheVet help desk when they need support?| Help desk | ---- | --- |
| Ease of use | Do we have latency or other data loading issues? | ---- | Page load times | ---- | ----- | 


## **Data Source Point People**

| **Tool** | **Team Members** |
| --- | --- |
| Google Analytics | Florence McCafferty, Jonathan Nelson, Sara Sterkenburg, Wesley Rowe |
| Medallia | Kat Brinkley, Florence McCafferty, Jonathan Nelson, Sara Sterkenburg |
| Domo | Wesley Rowe | Florence McCafferty |
| Datadog | Kat Brinkley, Florence McCafferty, Jonathan Nelson, Sara Sterkenburg, Wesley Rowe |
