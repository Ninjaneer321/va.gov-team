---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience Profile team: Enhanced Military Information MVP - Stakeholder Interviews, September 2023"
date: 2023-09-15
last_updated: 2023-09-15
team: "Authenticated Experience - Profile"
product: "VA.gov Profile - Military Information"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Legislation requires increased Veteran access to their Individual Longitudinal Exposure Record (ILER). This creates an opportunity to improve the Veteran experience of applying for benefits by surfacing key military service data points and providing PDF access to ILER."
  product_location: "VA.gov Profile - Military Information section"
  user_familiarity: "Iteration - enhancing existing military information section with ILER access and additional data points"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information"

# Research Design
methodology: "stakeholder interviews"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand prior work and decisions that led to current enhanced military information MVP requirements"
  - goal_2: "Learn about stakeholder hypothesis that surfacing 8 data points will improve the Veteran experience of applying for benefits"
  - goal_3: "Gather information about the ILER API capabilities and BAH prototype"

research_questions:
  - "Stakeholders have a hypothesis that surfacing 8 data points will improve the Veteran experience of applying for benefits - what is driving this hypothesis, and what do we already know about these data points?"
  - "What can stakeholders share about the API that can generate a PDF/text version of a Veteran's ILER?"
  - "What was the intention of, and reaction to, the ILER prototype the BAH team created?"
  - "What led to the decision that this military information belongs in the VA.gov profile?"
  - "Are there any other teams or stakeholders we should loop into this work?"

hypotheses:
  - "Stakeholders have done prior discovery work that informed current requirements"
  - "There are technical and policy considerations that influenced the placement in Profile"
  - "The 8 data points were selected based on benefits application needs"

expected_outcomes: "Understand context and rationale behind enhanced military information MVP to inform implementation decisions and identify any gaps or additional stakeholders"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Internal VA stakeholders"
  approach: "Targeted stakeholder interviews"
  
  primary_criteria:
    - "Melissa Rebstock (stakeholder)"
    - "Angela Allen (VADIR SME)"
    - "Other stakeholders as identified during interviews"
    
  secondary_criteria:
    - "Subject matter experts familiar with ILER legislation"
    - "Technical stakeholders familiar with ILER API"
    
  screener_questions:
    - question: "N/A - internal stakeholder interviews"
      qualifying_response: "N/A"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 3
  completed_sessions_goal: 2
  
# Timeline & Sessions
timeline:
  pilot_date: "N/A"
  pilot_participant: "N/A"
  research_dates: "2023-09-15 to 2023-09-30"
  research_review_submission: "N/A"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 0
  max_sessions_per_day: 2
  
# Strategic Alignment
octo_priorities:
  - objective: "Enhance Veterans' personalized online experience"
    key_results: 
      - "Surface military service information that improves benefits application experience"
  - objective: "Increase the usage and throughput of VA services"
    key_results:
      - "Provide access to ILER as required by legislation"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Taking care of myself"
  - "Putting down roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery"
    
tags:
  - "stakeholder-research"
  - "discovery-research"
  - "PRDT: VA.gov Profile"
  - "PRDT: Profile-military-information"
  - "research-method: interviews"
  - "research-method: moderated"
  - "research-method: remote"
  - "authenticated-experience"
  - "ILER"
  - "military-service-history"
---

# Profile enhanced military information MVP - Stakeholder Interview research plan
## Background
Legislation has been passed that requires us to increase Veteran’s access to their Individual Longitudinal Exposure Record (ILER). As VA leadership considered how to comply with the law, they identified an opportunity to improve the Veteran experience of applying for benefits by surfacing key data points about their military service.
In this MVP, our goals are to:
* Provide Veterans with access to a PDF of their ILER, so they can get this PDF anytime they need it.
* Make it easier for Veterans to apply for VA benefits by surfacing military service information that is requested in benefit application forms.
## Research Goals
A lot of work has been completed prior to our team becoming involved. The primary goal of this research is to understand that work and the decisions behind it.
### Research Questions
1. Stakeholders have a hypothesis that surfacing 8 data points will improve the Veteran experience of applying for benefits. What is driving this hypothesis, and what do we already know about these data points?
2. What can stakeholders share about the API that can generate a PDF/text version of a Veteran’s ILER?
3. What was the intention of, and reaction to, the ILER prototype the BAH team created?
4. What led to the decision that this military information belongs in the VA.gov profile?
5. Are there any other teams or stakeholders we should loop into this work?
## Research Method
This will be a remote interview conducted over Microsoft Teams

## Participants
- Facilitator: Liz Lantz
- Observers: [Authenticated Experience profile team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#team)
- Stakeholders to interview
  - Melissa Rebstock
  - Angela Allen (VADIR SME)
  - Possibly others depending on the outcome of the conversation with Melissa
