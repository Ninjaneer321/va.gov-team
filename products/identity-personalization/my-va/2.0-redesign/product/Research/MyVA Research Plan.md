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

# Research Plan for VSA Authenticated Experience: MyVA Redesign November 2020

## Goals
This research is to compare two mobile versions of the My VA dashboard re-design and gain feedback on the preferred wireframe direction.  Each version (A and B) contains the same information, just structured differently. We are trying to understand which direction makes the most sense to users. This includes:

- overall, is there enough relevant information on the dashboard to be valuable
- can the user quickly find the information that they are looking for 
- does the page structure (scrolling vs navigation) affect ease of visibility
- can the user easily access and understand any personal updates (claims, health care, or forms)
- how easily can the user navigate to the sections they are looking for
- is the new dashboard layout more effective than the current MyVA page

*Note - This is a preference test, **not** an A/B test

## Background
Our goal is to create a My VA dashboard design that will improve the online experience for Veterans, by better integrating Veteran-provided data onto the My VA dashboard. Our MVP will focus on surfacing their health care and claims information into widgets and notifications to help Veterans access their critical information and to take action on status updates.

- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md) 
- [Personalization 2.0 discovery write-up (2019)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md)
- [Logged-in homepage discovery write-up (Spring 2020)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/discovery-summary.md)

## Research questions

### Overall questions
- Do Veterans prefer design version A or B?
- Is there any confusion caused by the status update styles in A vs B design?
- Can people find what they're looking for on the dashboard?
- Does the placement of the disability rating make sense to users?
- In the claims and health care sections, do users understand what is being displayed? Is it enough information?
- What information is important for them to see first?
- What information related to health care, claims and applications/benefits do users want to see?
- Is any information missing on the dashboard?
- Do users expect to see more information on a desktop view?
- How do people think the new dashboard compares to the current MyVA?
- What updates are most important to users?
- Do people want to see all of their most recent updates?

### A Design specific questions

- Does the dashboard layout/structure feel intuitive?
- Do people understand what the updates to their dashboard are?
- Do users want to see updates grouped all together?

### B Design specific questions
- Does the dashboard layout/structure feel intuitive?
- Do people understand what the updates to their dashboard are?
- Do users want to see updates in each specific section?
- Can people easily find what they are looking for with information collapsed in accordions?


## Hypothesis & assumptions
* Version A will be more slightly more successful than version B.
Version A has all of the status updates elevate to the top of the page, and we hypothesize it will have less of a cognitive load. Version A has a long scrolling page design so all information is readily accessed, instead of being buried. However, both designs will be of value to the veterans as far as having accesss to thier updates and other important health care and claims information.

Other assumptions include:

- Overall users will be able to see and understand the update section
- People will want to see more detailed personalized information than what is shown (i.e. upcoming appointments)
- The new myVA dashboard layout will overall be intuitive and scan-able

## Method
We will conduct remote moderated usability testing via Zoom using the Perigean contract. This method will allow us to share a high-fidelity wireframe prototype (mobile A & B versions).

## Participants and Recruitment

Recruit for 12 sessions (8 fulfilled sessions showing each user versions A & B) using the following criteria:

### Must have for participants

* Are you eligible for/recieve VA health care, have active or past claims or recieve any benefits from the VA? (pass = yes)
    * If participants with health care, claims or benefits are too difficult to recruit for, then expand to having logged-in to va.gov within the last year.

### Good to have for participants
* At least one iOS mobile device owner
* At least one Android mobile device owner
* At least 2 women
* At least 1 person of color
* At least 2 participants 35 or under and 1 participant over 55
* At least 1 participant who currently receives VA health care
* At least one person with a disability rating of 70% or greater
* At least one person with an identified cognitive consideration of PTSD or TBI
 

### Recruitment requirements
* All participants must use a mobile device.
* The participants have Zoom downloaded **on their phone** prior to the session
* The participants know how to screen-share.

We will not be able to accommodate non-sighted users due to the prototype technology.

## Timeline 	
#### Desired Timeline: November 20-30, 2020 

Please schedule sessions for 75 minutes with a 30 minute buffer between sessions.

Team Availability | Time (EST)
------------------|--------------
November 20, 2020 | 11am - 6pm ET
November 23, 2020 | 11am - 6pm ET
November 24, 2020 | 11am - 6pm ET
November 25, 2020 | 11am - 3pm ET
November 30, 2020 | 11am - 6pm ET
	
Mobile Pilot Sessions (1 total sessions, 2 mobile, A vs B): Jonathan Nelson, jonathan.nelson@adhocteam.us on November 19, 2020 | 3:30pm - 4:45pm ET

## Team Roles
* Moderator: Tressa Furner & Cassandra Allen (tressa.furner@adhocteam.us, callen@governmentcio.com) 
* Research guide writing and task development: Cassandra Allen, Tressa Furner
* Participant recruiting & screening: Perigean
* Project point of contact: Samara Strauss
* Participant(s) for pilot test: November TBD
* Note-takers: Perigean
* Observers: Matt Shea (matt.shea@adhocteam.us), Samara Strauss (Samara.Strauss@va.gov), Erik Hansen (erik@adhocteam.us), Lihan Li (lihan@adhocteam.us), Shawna Hein (shawna@adhocteam.us), Sandra Hallie (shallie@governmentcio.com), Ryan Thurlwell (ryan.thurlwell@va.gov), Bridget Hapner (bridget@adhocteam.us), Meli Manak (meli.manak@adhocteam.us), Josh Kim (josh.kim@adhocteam.us), Lauren ALexanderson (lauren.alexanderson@va.gov), Meg Peters (meg.peters@va.gov), Emily Mann (emily.mann1@va.gov), Kimberly McManus <Kimberly.McManus@va.gov>; Marian Adly (Adly, Marian H. <Marian.Adly@va.gov>)
 
## Resources
* [Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md)
* [Prototype A](https://vsateams.invisionapp.com/share/EDZFDJ7UWTC#/437719085_myVA_Mobile_A)
* [Prototype B](https://vsateams.invisionapp.com/share/HDZFDLY3WEZ#/437720005_myVA_Mobile_B)
* [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/identity-personalization/my-va/2.0-redesign/product/Research/MyVA-conversation-guide.md)
* Research Findings

