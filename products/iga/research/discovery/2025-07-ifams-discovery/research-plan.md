---
# Research Plan Metadata
title: "Research Plan for IGA - iFAMS Integration, August 2025"
date: 2025-05-12
last_updated: 2025-05-12
team: "Identity Governance and Administration (IGA)"
product: "Saviynt Enterprise Identity Cloud - iFAMS Integration"
product_area: "internal-tools"

# Background Context
background:
  problem_statement: "VA acquired Saviynt Enterprise Identity Cloud to replace fragmented and manual identity processes across VA systems. Individual applications like iFAMS previously built their own limited access provisioning/deprovisioning processes which are often manual, cumbersome, non-standardized, and error prone. The challenge is ensuring that Saviynt meets operational needs of application administrators and does not disrupt existing workflows."
  product_location: "Internal VA identity management system - Integrated Financial and Acquisition Management System (iFAMS)"
  user_familiarity: "New product - transition from manual processes to enterprise IGA tool"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iga/"

# Research Design
methodology: "semi-structured-interviews"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Identify administrators' expectations, desired outcomes, and concerns with Saviynt's provisioning/deprovisioning capabilities"
  - goal_2: "Evaluate the effectiveness of current communication and documentation provided regarding Saviynt integration"
  - goal_3: "Identify patterns in user roles and responsibilities that influence their experiences and interactions with provisioning/deprovisioning"

research_questions:
  - "How do iFAMS administrators perceive their current experience with provisioning/deprovisioning?"
  - "How do iFAMS administrators prioritize system requirements?"
  - "What expectations do iFAMS administrators have for the new tool?"

hypotheses:
  - "Administrators will expect Saviynt to simplify and standardize provisioning/deprovisioning, reducing manual effort"
  - "Concerns will center around potential disruptions to existing processes, and the complexity of transitioning from legacy systems"
  - "Administrators will require clear visibility into access workflows, reliable automation, and minimal disruption to existing responsibilities to consider the integration successful"
  - "Administrators will identify communication and documentation as key factors in their integration experience"

expected_outcomes: "Findings will help ensure that the Saviynt integration addresses the practical needs of iFAMS administrators. Insights will inform design and development decisions, guide documentation efforts, and reduce risks of adoption barriers"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Internal - iFAMS and contract leadership"
  approach: "Targeted recruitment of application owners, managers, and technical POCs with roles ranging across hierarchy from practitioners (System Accountants) to leadership (Division/Section Chief)"
  
  primary_criteria:
    - "Application owners for iFAMS"
    - "Managers responsible for provisioning/deprovisioning"
    - "Technical POCs for identity management"
    
  secondary_criteria:
    - "Mix of practitioner and leadership roles"
    - "Experience with current manual provisioning processes"
    
  screener_questions:
    - question: "What is your current role related to iFAMS provisioning/deprovisioning?"
      qualifying_response: "Application owner, manager, technical POC, or system accountant"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 8
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-05-19"
  pilot_participant: "TBD"
  research_dates: "2025-05-20 to 2025-06-12"
  research_review_submission: "2025-05-12"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Improve VA internal tools and processes for efficiency and security"
    key_results: 
      - "Standardize identity provisioning/deprovisioning across VA enterprise"
      - "Reduce manual effort and errors in access management"
      
veteran_journey_phases:
  - "N/A - Internal VA staff tool"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "IGA Discovery Research"
    
tags:
  - "AUD: VA Staff"
  - "AUD: Administrators"
  - "PRDT: Identity Governance"
  - "PRDT: Saviynt"
  - "PRDT: iFAMS"
  - "semi-structured-interviews"
  - "discovery"
  - "remote"
  - "moderated"
  - "internal-tools"
  - "identity-management"
  - "provisioning"
  - "deprovisioning"
  - "prioritization-exercise"
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
