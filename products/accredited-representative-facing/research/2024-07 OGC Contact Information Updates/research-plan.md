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

