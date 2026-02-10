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

# Research Plan for HMI team, Secure Messaging, September/ October 2022

## Background
Our project is part of the Digital Health Modernization strategy, which aims to create a centralized place for Veterans to access their health information. As part of this effort, My HealtheVet (MHV) will be moved to VA.gov. We developed and tested a prototype of what Secure Messaging in MHV on VA.gov could look like on desktop and on a mobile device in June and July, 2022 (see [this folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/SecureMessaging_Round1_Usability) for more information). Updates were made to the prototype based on user feedback. In this round 2 of usability testing, we will assess (1) whether the updates improved user experiences, and (2) test additional functionality that we were unable to test in round 1. 

You can read more about our Digital Health Modernization strategy [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/product).

### Veteran Journey
This research fits into these points of a Veteran's Journey:
- Starting up
- Taking care of myself
- Retiring
- Aging

## Research Goals 	
The goals of this study are to:
- identify major usability or content issues with the current prototype of secure messaging in MHV on VA.gov
- identify major usability issues with untested components
- assess user experiences with updated content that aims to protect Veterans' safety

### Research questions

_Finding a message:_

1. Do Veterans understand that the Search function only searches within a particular folder? How does this affect their behaviors?

2. Do Veterans expect the Search function to search within message attachments and threads? How does this affect their behaviors?

_Organizing messages:_

3. Do Veterans understand how to create folders? How to store messages in folders? Rename or delete folders?

4. Do Veterans value the folder functionality?

_Replying to a message:_

5. How do users reply to a message in the updated prototype? Do users understand the additional reply functionality? 

6. Do Veterans understand how to attach a file to a message?

_Patient safety:_

7. Do Veterans notice and understand the information about who to call in case of an emergency and how quickly to expect a response from their providers?

8. Do they notice and understand this information at the same rate as the previous version (with banner)?

_Untested components:_ 

9. Do users understand how to use the following non-validated components: 
	- Tertiary buttons
	- Toolbar
	- Attach and Remove buttons

### Hypothesis
With the updated prototype, Veterans will understand how to find, organize, and reply to messages from their healthcare providers, and will not be put at additional risk of adverse outcomes based on the updated patient safety content. 

## Method
We will conduct moderated usability testing interviews with 9 users, in which we will ask users to navigate the prototype, observe their behavior, and ask follow-up prompts as needed. 

### Location
Data collection will be remote. We will use Zoom. 

### Research materials
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/usabilitytesting/conversation-guide.md)

Prototype to be tested (to be linked)

## Recruitment

### Recruitment approach
We will partner with Perigean to recruit Veterans. All efforts will be made to recruit a diverse sample, with participants backgrounds ranging across age, abilities, and ethnicities. We will keep track of participant demographic information (identified gender, age, ethnicity, cognitive abilities) and other relevant information (whether the Veteran has used MyHealtheVet before; whether the Veteran uses VA healthcare) in an encrypted Google Sheet that will be stored on the Ad Hoc Google Drive. 

## Recruitment criteria
We will schedule a total of 24 Veterans for an expected completion rate of 18-20 usability tests. 

**Primary criteria (must-haves)**
- All must have been to a VA health care facility for a medical appointment in the last 12 months
- At least 12 participants must regularly use Secure Messaging
- At least 12 participants must not use MyHealtheVet
- At least 12 participants who are mobile users
- At least 12 participants who are desktop users

**Secondary criteria (nice-to-haves)**
- 12 participants over the age of 55 years
- 12 participants with cognitive disabilities
- 6 participants who identify as women
- 4 participants from rural locations
- 4 participants without a college degree
- 4 participants of immigrant origin
- 4 Black participants
- 4 Latinx participants
- 3 Biracial participant
- 2 Asian participant
- 2 Native participant
- 2 LGBTQ+ participants
