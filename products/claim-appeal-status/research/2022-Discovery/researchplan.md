---
# Research Plan Metadata
title: "Research Plan for Claim Status Tool Discovery, July 2022"
date: 2022-07-01
last_updated: 2022-07-01
team: "Benefits Team 1"
product: "Claim Status Tool"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "CST does not provide enough meaningful information about claim status or identify action items Veterans could take to accelerate VA's decision-making process"
  product_location: "Claim Status Tool on VA.gov"
  user_familiarity: "Iteration of existing tool"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product%20Outline%20-%20Draft.docx"

# Research Design
methodology: "semi-structured interviews"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand more nuance and context around key findings from previous research"
  - goal_2: "Understand current pain points and areas of opportunity for CST"
  - goal_3: "Determine where CST work left off and where Squad 1 should start"

research_questions:
  - "What nuances exist around previous research findings?"
  - "What are current pain points with the Claim Status Tool?"
  - "What areas of opportunity exist for improving CST?"
  - "How can CST be more useful for Steps 7-10 of the claim filing user journey?"

hypotheses:
  - "CST isn't robust enough to communicate nuances in claim status"
  - "There is some way to make CST more useful for certain actions Veterans need to take to accelerate adjudication"
  - "CST could better support Steps 7-10 of the claim filing user journey"

expected_outcomes: "After identifying ways CST could be more useful and robust for Veterans, the team will prioritize and develop strategies for implementing improvements"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Internal team and SMEs"
  approach: "Interviews with SMEs and collaborative team members"
  
  primary_criteria:
    - "SMEs with knowledge of CST usability issues"
    - "Team members with VSO research experience"
    - "Team members with previous CST research experience"
    - "OCTO research team members"
    - "Lighthouse UX team members"
    
  secondary_criteria:
    - "Michel McDonald (usability issues)"
    - "Melinda Bernardo Cuerda (VSO research)"
    - "Shawna Hein (CST research)"
    - "Emily Theis (OCTO research)"
    - "Shannon Ford (Lighthouse UX)"
    
  screener_questions:
    - question: "Do you have experience with CST research or usability?"
      qualifying_response: "Yes"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 6
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2022-07-15 to 2022-07-31"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase the usage and throughput of VA services"
    key_results: "Making CST more reliable will incentivize Veterans and VSOs to utilize VA.gov more"
  - objective: "Decrease the time Veterans spend waiting for an outcome"
    key_results: "More informative CST will help Veterans take actions that expedite claims processing"
  - objective: "Increase the quality and reliability of VA services"
    key_results: "CST improvements will significantly improve quality of VA services"
      
veteran_journey_phases:
  - "Taking Care of Myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/SummaryCSTresearchOct2021/Summary%20CST%20Research%2C%20Oct%202021.pdf"
    - "CST Research Summary (2021) - Research with VSOs, quantitative analysis, co-design and usability sessions"
    - "https://www.notion.so/2022-June-PACT-Act-VSO-research-Report-2b1faf024d9643cd899ba0f8a00d3d3b"
    
tags:
  - "AUD: Veterans"
  - "AUD: VA Staff"
  - "BNFT: Disability"
  - "PRDT: Claim-status-tool"
  - "semi-structured-interviews"
  - "discovery"
  - "authenticated"
---

# Research Plan for Claim Status Tool

Skyler Schain · Designer/Researcher

July 2022

## Background
The Claim Status Tool (CST) is meant to provide vets with a comprehensive understanding of the status of their claims and appeals. Benefits Team 1 is working to improve the level of detail and information available in the tool. Past research has shown that CST does not provide enough meaningful information about the status of claims in progress.
As a veteran applying for disability benefits or filing various forms of disagreements/appeals for past decisions, it is often difficult to know the status of my claim and to identify action items I could take to accelerate the VA’s decision-making process, so that I can receive the benefits I earned, including compensation that will help me meet my basic needs.

[CST Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product%20Outline%20-%20Draft.docx)

### OCTO Objectives 
If improved in the ways we intend, CST will help with all of OCTO’s objectives: 
- Increase the usage and throughput of VA services. 
  - Making CST a more reliable and informative tool will incentivize vets and VSOs to utilize VA.gov more than currently for claim filing
- Decrease the time Veterans spend waiting for an outcome
  - With a more informative CST, our hope is that vets will be able to more easily take actions that will expedite claims processing
- Increase the quality and reliability of VA services
  - CST improves will significantly improve the quality of VA services

This effort also aligns with the OCTO vision statement, in particular its emphasis on providing more accurate self-service data to vets filing claims and appeals:

_Every Veteran is guaranteed access to self service benefits and accurate data._

### Veteran Journey
Services and products coming out of this effort would support Taking Care of Myself, specifically Managing primary care and chronic health issues in the Veteran Journey Map.

### Previous Research
- [CST Research Summary (2021)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/SummaryCSTresearchOct2021/Summary%20CST%20Research%2C%20Oct%202021.pdf)
  - Research with VSOs (Aug 2021)
  - Quantitative analysis
  - Co-design and usability sessions
  - Competitive analysi
- [OCTO Research with VSOs (2022)](https://www.notion.so/2022-June-PACT-Act-VSO-research-Report-2b1faf024d9643cd899ba0f8a00d3d3b)

### Research Goals
- Understand more nuance/context around some of the key findings of the previous research
- Understand current pain points and areas of opportunity for current CST
- Understand where the CST work left off and determine where we (Squad 1) should start 

### Outcome
After successfully identifying ways in which CST could be more useful and robust for vets, our team will prioritize and develop strategies for implementing these improvements, working with other VA teams as necessary. 

### Participant
Phase 1: SMEs and Collaborative Team Members
- Michel McDonald (usability issues)
- Melinda Bernardo Cuerda (VSO research by Mina F.)
- Shawna Hein (CST research)
- Emily Theis (OCTO research)
- Shannon Ford (Lighthouse UX)
- Matt Self (Sync on what we learn in the above)

### Hypothesis
CST isn't robust enough to communicate nuances in the claim status, or certain actions the vet needs to take to accelerate adjudication. There is some way to make CST more useful for Steps 7-10 of the claim filing user journey.

### Method
Semi-structured interviews

### Location
Remote
