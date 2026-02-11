---
# Research Plan Metadata
title: "Research Plan for Accredited Representative Facing Team, OGC Contact Information Updates, 07/2024"
date: 2024-07-01
last_updated: 2024-07-01
team: "Accredited Representative Facing (ARF) Team"
product: "Accredited Representative Portal (ARP) - Contact Information Management"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Updating contact information for VSO Representatives in the accredited representative directory is cumbersome and manual, with VA's Office of General Counsel (OGC) updating entries upon email request. This process needs to be streamlined to reduce errors and save time."
  product_location: "Accredited Representative Portal on VA.gov, connecting to Find a Representative directory"
  user_familiarity: "New feature - contact information self-service updates"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing"

# Research Design
methodology: "semi-structured interviews, concept testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Determine requirements for email address field(s) and understand different email addresses representatives use for different purposes"
  - goal_2: "Determine requirements for address field(s) and how many address fields are needed"
  - goal_3: "Determine permissions for VSO Representatives and certifying officials for updating contact information"
  - goal_4: "Determine if public-facing VSO directories are a reliable source of truth for contact information"

research_questions:
  - "What different email addresses do representatives have, and do they use different email addresses for different purposes (e.g. VA vs. client communications)?"
  - "How many address fields do we need to provide, and what should distinguish one address from another?"
  - "Are certifying officials the only ones who can update a VSO Representative's information?"
  - "Are public-facing VSO directories accurate, and do they include location and phone number?"
  - "What are the workflows and policies for updating contact information in different VSO organizations?"

hypotheses:
  - "Representatives use different email addresses for VA communications vs. client communications"
  - "Multiple address fields may be needed for physical office, mailing, and remote work locations"
  - "Certifying officials will need primary permission to update representative information"
  - "Public VSO directories vary in accuracy and completeness"

expected_outcomes: "Research will inform the design of a self-service contact information update feature in ARP that reduces errors, speeds up the process, and saves OGC time. Findings will determine field requirements, permission models, and validation approaches for contact information management."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Direct recruitment via OGC and NOVA"
  approach: "Targeted recruitment of VSO certifying officials, attorneys, and claims agents"
  
  primary_criteria:
    - "VSO certifying officials (accredited and non-accredited)"
    - "Accredited attorneys and claims agents"
    - "Representatives from state, tribal, and Big 6 VSOs"
    
  secondary_criteria:
    - "Cross-accredited attorneys or agents"
    - "Representatives with different organizational structures"
    
  screener_questions:
    - question: "What is your role in your organization?"
      qualifying_response: "Certifying official, accredited attorney, or accredited claims agent"
    - question: "What type of organization do you work with?"
      qualifying_response: "VSO (Big 6, state, tribal), law firm, or claims agent firm"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  accredited_representatives: 10
  vso_certifying_officials: 6
  attorneys_claims_agents: 5
  total_recruited: 11
  completed_sessions_goal: 9
  
# Timeline & Sessions
timeline:
  pilot_date: "2024-07-15"
  pilot_participant: "TBD"
  research_dates: "2024-07-22 to 2024-08-02"
  research_review_submission: "2024-07-01"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Our digital experiences are the best way to access VA health care and benefits"
    key_results: 
      - "Key Result 2: Number of transactions processed during our products have increased by 25%"
      - "Key Result 3: All new products have a faster transaction time than those they replaced"
      - "Key Result 4: No transactions accepted by our products have a fatal error"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "2024-02 User Interviews"
    - "2024-03 Single Accredited Testing"
    - "2024-05 NACVSO Research"
    - "Current state map: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717174574592"
    
tags:
  - "accredited-representative-facing"
  - "accredited-representative-portal"
  - "semi-structured-interviews"
  - "concept-testing"
  - "contact-information"
  - "representative-directory"
  - "find-a-representative"
  - "vso-certifying-officials"
  - "attorneys"
  - "claims-agents"
  - "OGC"
  - "self-service"
  - "permissions"
  - "profile-management"
  - "big-6-vso"
  - "state-vso"
  - "tribal-vso"
  - "NOVA"
---

# Research Plan for Accredited Representative Facing Team, OGC Contact Information Updates, 07/2024<a id="research-plan-for-accredited-representative-facing-team-ogc-contact-information-updates-072024"></a>

## Background<a id="background"></a>

Veterans can search for and find accredited representatives on va.gov through the[ accredited representative directory](https://www.va.gov/get-help-from-accredited-representative/find-rep/). Updating contact information for VSO Representatives in this directory is a cumbersome and manual process, with the VA’s Office of General Counsel (OGC) updating entries upon email request by the VSO certifying officials.[ See the current state map](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717174574592/c341950387ab12e53dc358182f0c84774e94efb2?wid=0-1717174578256).

The Accredited Representative Facing team (ARF) is designing a future state that will allow VSO certifying officials to update contact information directly in the Accredited Representative Portal (ARP). This will reduce errors, speed up the process, and save OGC time.


### OCTO priorities<a id="octo-priorities"></a>

Objective 1: Our digital experiences are the best way to access VA health care and benefits.

- Key Result 2: Number of transactions processed during our products have increased by 25%.

- Key Result 3: All new products have a faster transaction time than those they replaced.

- Key Result 4: No transactions accepted by our products have a fatal error.

After years of focusing exclusively on Veterans who want to interact directly with VA, we will build tools for Veterans who want to work with accredited representatives, and the reps who support those Veterans. In doing so, we will redirect to VA.gov traffic currently going through[ eBenefits](https://www.ebenefits.va.gov/ebenefits/homepage) and[ Stakeholder Enterprise Portal](https://www.sep.va.gov/sep/web/guest/sep) (SEP).

Full list of[ OCTO-DE priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md).


### Veteran journey<a id="veteran-journey"></a>

Any/all points when a Veteran needs support filing and accessing their benefits.


## Research Goals<a id="research-goals"></a>

### For Veterans Service Organization (VSO) Certifying Officials<a id="for-veterans-service-organization-vso-certifying-officials"></a>

| **Research goal**                                                         | **Research question**           |
| ---------------------------------------- | ---------------------------------------------------------------- |
| Determine requirements for email address field(s).                        | What different email addresses do representatives have, and do they use different email addresses for different purposes? (e.g. VA vs. client communications) |
| Determine requirements for address field(s).                              | How many address fields do we need to provide, and what should distinguish one address from another?  |
| Determine permissions for VSO Representatives and certifying officials.   | Are certifying officials the only ones who can update a VSO Representative’s information?|
| Determine if public-facing VSO directories are a reliable source of truth | Are public-facing VSO directories accurate, and do they include location and phone number? |


### For accredited Attorneys and Claims Agents<a id="for-accredited-attorneys-and-claims-agents"></a>

| **Research goal**                                                         | **Research question**           |
| ---------------------------------------- | ---------------------------------------------------------------- |
| Determine requirements for email address field(s). | What different email addresses do representatives have, and do they use different emails addresses for different purposes? (e.g. VA vs. client communications) |
| Determine requirements for address field(s).       | How many address fields do we need to provide, and what should distinguish one address from another?|


## Methodology<a id="methodology"></a>

**Semi-structured interviews /** The interviewer will ask the certifying official a series of questions to gather insight into their experiences, workflows, and policies. Questions will be customized depending upon the participant. 

**Concept testing /** The interviewer will show the certifying official some visual concepts of what updating contact information could look like in ARP. The agent, attorney or certifying official will be prompted for feedback around authentication, flow and navigation, content, and any interactive elements.


## Research Materials<a id="research-materials"></a>

- [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/research/2024-07%20OGC%20Contact%20Information%20Updates)

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/research/2024-07%20OGC%20Contact%20Information%20Updates/conversation-guide.md)

- [Prototype](https://www.figma.com/design/RbVQnV4eBl2K1Z5xRpZi7H/Contact-Info-Updating?node-id=1-19\&t=0WSpkH3Ht0TVf62P-0)

- [Note taking Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722362248367/d080d4f9e562382f54949e283031e6812e59ef59?wid=0-1711387609347\&sender=u503219bf4e47eab9c75d3838)


## Recruitment<a id="recruitment"></a>

### VSO Certifying Officials<a id="vso-certifying-officials"></a>

We want to include certifying officials that represent differences that could be relevant to our design decisions. At minimum, we want a participant from each of these categories:

1. Accredited

2. Non-accredited

3. State

4. Tribal

5. Big 6

We will select individuals from OGC’s spreadsheets and email them to invite them to participate. We anticipate 4-6 participants.


### Accredited attorneys and claims agents<a id="accredited-attorneys-and-claims-agents"></a>

We want to include attorneys and claims agents that represent differences that could be relevant to our design decisions. At minimum, we want a participant from each of these categories:

1. Accredited attorney

2. Accredited claims agent

3. Cross-accredited attorney or agent (if we can find one)

We will work directly with NOVA to identify individuals and email them to invite them to participate. We anticipate 3-5 participants.

