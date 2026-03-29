---
# Research Plan Metadata
title: "Research Plan for Benefits Team, Supplemental Claims Discovery, June 2022"
date: 2022-06-01
last_updated: 2022-06-01
team: "Benefits Team"
product: "Supplemental Claims (20-0995) Discovery"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans file Supplemental Claims when their disability compensation claim is denied and new and relevant evidence is needed. Currently there is no way to digitally submit a Supplemental Claim apart from uploading a PDF. VBA predicts the PACT Act legislation will result in up to 7.5 million additional supplemental claims over next ten years."
  product_location: "VA.gov - Future Supplemental Claims submission process"
  user_familiarity: "New product - exploring digital Supplemental Claims process following PACT Act"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Supplemental-Claims"

# Research Design
methodology: "discovery research - SME interviews, stakeholder interviews, form audit"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand Veteran needs around applying for disability compensation through a Supplemental Claim"
  - goal_2: "Identify opportunities to optimize actions and decisions that lead to favorable claims outcomes related to PACT Act"
  - goal_3: "Gather SME and stakeholder insights to inform digital SC product design"

research_questions:
  - "What are the biggest challenges for Decision Reviews?"
  - "What is considered new and relevant evidence?"
  - "Can we learn from efforts where VA presumptively connected Veterans to a claim (e.g., Blue Water Navy)?"
  - "What are biggest challenges Veterans face when filing supplemental claims?"
  - "What are biggest challenges adjudicators face in approving claims?"
  - "Where are opportunities to pre-fill, automate or presumptively connect Veteran claims?"
  - "How does communication with Veteran typically happen during supplemental claims processing?"

hypotheses:
  - "Veterans will benefit by having a clear pathway to file a supplemental claim on VA.gov"
  - "Digital SC process will help Veterans achieve goal of being compensated for disability incurred while serving within reasonable time"
  - "Personalizing the experience and reducing cognitive burden will improve speed, usability, and reduce factors contributing to unfavorable decisions"

expected_outcomes: "Produce prioritized recommendations for modernizing Supplemental Claims application with potential optimizations for Veterans under PACT Act"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Direct recruitment"
  approach: "Purposive sampling of SMEs, stakeholders, and collaborative teams"
  
  primary_criteria:
    - "Subject matter experts on Supplemental Claims"
    - "Stakeholders (Matt Self, Shawna Hein, Paul Shute)"
    - "Collaborative team members from Lighthouse, Benefits Automation, Contact Center, Content/IA"
    
  secondary_criteria:
    - "VSOs and adjudicators for research review and form audit"
    
  screener_questions:
    - question: "Role and experience with Supplemental Claims process"
      qualifying_response: "SME or stakeholder involvement"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 12
  
# Timeline & Sessions
timeline:
  pilot_date: "N/A"
  pilot_participant: "N/A - SME interviews"
  research_dates: "2022-06-01 to 2022-06-28"
  research_review_submission: "2022-05-15"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase the usage and throughput of VA services"
    key_results: 
      - "Support anticipated 7.5M additional PACT Act supplemental claims over 10 years"
  - objective: "Decrease the time Veterans spend waiting for an outcome"
    key_results:
      - "Improve speed and usability of SCs"
      - "Reduce cognitive burden in appealing claims decisions"
  - objective: "Increase the quality and reliability of VA services"
    key_results:
      - "Reduce factors contributing to unfavorable decisions"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Managing primary care and chronic health issues"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/lighthouse-ux/tree/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery"
    - "OCTO research with VSOs (June 2022)"
    
tags:
  - "supplemental-claims"
  - "discovery"
  - "SME-interviews"
  - "decision-reviews"
  - "PACT-Act"
  - "20-0995"
  - "stakeholder-research"
---

# Research Plan for Supplemental Claims
## OCTO Objectives
## North Stars
- Increase the usage and throughput of VA services
- Decrease the time Veterans spend waiting for an outcome
- Increase the throughput of favorable supplemental claims
## Specific Goal	
Veterans and their families can claim disability benefits faster and more accurately, leading to more favorable outcomes. 
## Veteran Journey
Services and products coming out of this effort would support Taking Care of Myself, specifically managing primary care and chronic health issues in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf).

## Research Goals
The goal of this discovery is to 
- Understand Veteran needs around applying for disability compensation through a Supplemental Claim (SC)
- Identify opportunities to optimize the actions and decisions that lead to favorable claims outcomes for a subset of the Veteran population related to the Honoring our Promise to Address Comprehensive Toxics Act of 2021 ([PACT Act](https://enchanting-fossa-083.notion.site/PACT-Act-Overview-for-Presumptive-Claims-RRD-b8da586e2b1f4ff38a76c672a0b37a68#94f8b7c860324764890ecc6b5d3fd01f)).

## Background
Veterans file Supplemental Claims when their claim for disability compensation is denied and new and relevant evidence is needed. The Supplemental Claim Decision Review type is the most widely used DR. Currently there is no way to digitally submit a Supplemental Claim apart from uploading a PDF.  The Lighthouse API team has done work to support building a Veteran facing experience to file a Supplemental Claim.  

The findings from this effort will produce prioritized recommendations for modernizing the Supplemental Claims application with potential optimizations for Veterans that fall under the PACT Act.


[PACT Act Legislation](https://enchanting-fossa-083.notion.site/PACT-Act-Overview-for-Presumptive-Claims-RRD-b8da586e2b1f4ff38a76c672a0b37a68#94f8b7c860324764890ecc6b5d3fd01f): _VBA predicts the PACT Act legislation will result in up to ~7.5 million additional supplemental claims being submitted in the next ten years. The anticipated volume of presumptive claims being added to the existing claims processing backlog is a major concern for VBA._


## Hypothesis

Veterans will benefit by having a clear pathway to file a supplemental claim on VA.gov, helping them achieve the goal of being compensated for their disability incurred while serving within a reasonable amount of time. 

## Goals 
* Personalize the experience for Veterans appealing via Supplemental Claims
* Improve speed and usability of SCs
* Reduce cognitive burden involved in appealing claims decisions
* Reduce factors that contribute to unfavorable decisions


## Previous Research
* [Lighthouse Supplemental Claims Discovery](https://github.com/department-of-veterans-affairs/lighthouse-ux/tree/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery/2021-09-Supplemental-Claims-Discovery-Administrators)
    * Admins
    * VSOs
    * Veterans
* [OCTO research with VSOs](https://www.notion.so/2022-June-PACT-Act-VSO-research-Report-2b1faf024d9643cd899ba0f8a00d3d3b) (2022)


## Research Questions

**Phase 1: SMEs and Collaborative Teams**
* What are the biggest challenges for Decision Reviews?
* What is considered new and relevant evidence?
* Can we learn from any efforts where the VA was able to presumptively connect Veterans to a claim? [ i.e. Blue Water Navy ]
* Can we learn from other benefit automation efforts?
* How does this work relate to the personalization initiative?

**Phase 2: Form audit, technical discovery and research gap assessment**
* What are the biggest challenges Veterans face when filing supplemental claims?
* What are the biggest challenges adjudicators face in approving claims?
* What is considered new and relevant evidence?
* Where are the opportunities to pre-fill, automate or presumptively connect Veteran claims?
* How does communication with the Veteran typically happen during supplemental claims processing?

## Methods

**Phase 1:** Remote subject-matter experts (SME), collaborative team members  and review of past research conducted with administrative staff at the VA involved with intaking, processing and deciding Supplemental Claims.   
[Conversation Guide SME](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/conversationguide_SME.md)

Methods also include:
* Stakeholder interviews
* Collaborative benefit team syncs 
* Design and content system process discovery 
* Past research review


**Phase 2:** Past research review and form audit exercise with internal teams to understand pain points around the processing and filing Supplemental Claims. We will also identify gaps and opportunities for research with Veterans.  
Methods also include:
* Technical Discovery
* [Form audit and journey mapping ](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1653490344368/8a035f7639e54b70edb4dc7002cae95967c36d1a?sender=uf4e8628bdc7dc81e50353314)


## Participants 

**PHASE 1: Subject Matter Experts (SMEs) and Collaborative Team Members**

Stakeholders 
* Matt Self
* Shawna Hein
* Paul Shute
* TBD

Collaborative Teams
* Lighthouse Benefits Crew (ongoing)
* Benefits Automation Crew (ongoing)
* Contact Center
* Content/IA Team (ongoing)

**PHASE 2: Processing and Filing Claims**  
* Internal teams technical discovery
* Adjudicator and representative research review and form audit exercise
* Gap analysis to define further research

## Schedule

**Phase 1: June 1-15**

Outcomes: 
* We identify borrowed learnings about Veteran pain points.
* We define what can be reused from existing infrastructure and components.

**Phase 2: June 15-28**

Outcomes:
* We identify unique learnings about Veteran pain points.
* We define hypotheses about value that we want to validate.
* We define assumption tests to execute.


## Team Roles
* Study prepared by: Pamela Hastings
* Interviewer/Moderator: Pamela Hastings
* Observers: Various team members, Sade Ragsdale
* Recruiting: TBD, Sarah Ortiz Shields
* Notetakers: Sarah Ortiz Shields, team members


## Resources:
* [PACT Act Overview](https://enchanting-fossa-083.notion.site/PACT-Act-Overview-for-Presumptive-Claims-RRD-b8da586e2b1f4ff38a76c672a0b37a68#94f8b7c860324764890ecc6b5d3fd01f)
* [Lighthouse API Work on Supplemental Claims](https://community.max.gov/pages/viewpage.action?spaceKey=VAExternal&title=Supplemental+Claim+-+Initiative+Brief)
* [Lighthouse research on Supplemental Claims](https://github.com/department-of-veterans-affairs/lighthouse-ux/tree/master/Benefits%20and%20Appeals%20Research/2022-01-Supplemental%20Claims-Discovery)
* [Supplemental Claim Process Diagram ](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1654096034291/25f4086b638b48828941c4d6aa330f1df1c9527a?sender=uf4e8628bdc7dc81e50353314)(Lighthouse)
* [Decision Review Historical Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/research/readme.md) (may not include all)
* [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/research-review) (Platform)


- [Conversation Guide SME](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/conversationguide_SME.md)
- Synthesis	
- Lessons Learned	
- Read-Out/Results	

