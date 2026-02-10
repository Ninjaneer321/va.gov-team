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

# Research plan for IGA - iFAMS Integration, August 2025
## Background 🏗️
The VA recently acquired licenses for Saviynt Enterprise Identity Cloud, a Software-as-a-Service (SaaS) tool for Identity Governance and Administration (IGA). Saviynt will replace fragmented and manual identity processes across VA systems. Prior to this acquisition, VA had no enterprise-wide IGA tool. Instead, individual applications sometimes built their own limited access provisioning and deprovisioning processes, which are often manual, cumbersome, non-standardized, and error prone. 

The transition to Saviynt will require integrating applications such as Integrated Financial and Acquisition Management System (iFAMS), so that identity provisioning and deprovisioning is streamlined, secure, and consistent across the enterprise. The challenge is ensuring that Saviynt meets the operational needs of application administrators and does not disrupt existing workflows. 

This study will explore administrators’ expectations, concerns, and needs related to the integration, so that development teams can implement Saviynt in a way that best supports their work. 

## Research Goals 🥅
1. Identify administrators’ expectations, desired outcomes, and concerns with Saviynt’s provisioning/deprovisioning capabilities. 
2. Evaluate the effectiveness of current communication and documentation provided regarding Saviynt integration. 
3. Identify patterns in user roles and responsibilities that influence their experiences and interactions with provisioning/deprovisioning. 

### Outcome
Findings from this research will help ensure that the Saviynt integration addresses the practical needs of iFAMS administrators. Insights will inform design and development decisions, guide documentation efforts, and reduce risks of adoption barriers. 

#### Research questions
1. How do iFAMS administrators perceive their current experience with provisioning/deprovisioning? 
2. How do iFAMS administrators prioritize system requirements? 
3. What expectations do iFAMS administrators have for the new tool? 

#### Hypotheses

1. Administrators will expect Saviynt to simplify and standardize provisioning/deprovisioning, reducing manual effort. 
2. Concerns will center around potential disruptions to existing processes, and the complexity of transitioning from legacy systems. 
3. Administrators will require clear visibility into access workflows, reliable automation, and minimal disruption to existing responsibilities to consider the integration successful. 
4. Administrators will identify communication and documentation as key factors in their integration experience. 

### Methodology 🛠️
We will conduct a remote, moderated semi-structured conversation with 8 participants that operate in roles that range from accountants to managers. We will schedule individual sessions with each participant and use virtual collaboration tools to conduct the sessions. These 1-1 sessions help us expand the view of the team’s challenges. We will collect unbiased feedback and probe for more details about previously reported issues. The first half of the session will consist of generative questions about their current process.  

We will use the second half to conduct a prioritization exercise to rank the importance of the requirements heard in recent teamwide working sessions with iFAMS users. This activity helps define the requirements beyond the working sessions. We will list each requirement on a digital whiteboard and ask them to sort them in order of priority (most important to least important). If a requirement is not listed, we will ask them to list it and take note of the participant’s unique entry. Then, we will aggregate this data to uncover patterns and prioritize next steps for the product team. 

#### Location
Interviews will be conducted remotely via Teams. 
 
### Research materials 📔
[Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/single-sign-on/research/IGA/iFAMS-discovery-research-convo-guide.md)

### Recruitment 🎯
We will be recruiting applications owners, managers, and technical POCs. 

#### Recruitment approach
This list of participants was provided to the team by iFAMS and contract leadership. Their roles range the hierarchy. Most of these roles represent practitioners (System Accountants), with only a few members in leadership (Division/Section Chief). 

#### Research sessions
Planned dates of research: 05/20 - 06/12 (duration is contingent on participant availability)

#### Length of sessions
- Session length: 60 minutes

#### Team Roles 🕵️👩‍💻👩‍🔬
- Moderator: Lauren Russell
- Research guide writing and task development: Lauren Russell
- Participant recruiting & screening: Jonathan Gilmore, Kerry Laake, Alfonso Saldana
- Project point of contact: Lauren Russell
- Accessibility specialist: N/A
- Note-takers: Ciera Maddox
- Observers: N/A


Approvals ✅
- Reviewed by [Felecia Becerra, Team Lead] on [05-12-2025]
