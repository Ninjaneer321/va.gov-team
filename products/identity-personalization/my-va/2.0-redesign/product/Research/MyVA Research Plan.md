---
# Research Plan Metadata
title: "My VA Redesign Preference Testing, November 2020"
date: 2020-11-01
last_updated: 2020-11-01
team: "Authenticated Experience"
product: "My VA 2.0 Redesign"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Compare two mobile versions of My VA dashboard redesign to determine which direction makes most sense to users"
  product_location: "My VA dashboard on VA.gov"
  user_familiarity: "Major redesign iteration testing"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md"

# Research Design
methodology: "Remote moderated preference testing"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Compare two mobile versions (A and B) of My VA dashboard redesign"
  - goal_2: "Determine which page structure (scrolling vs navigation) affects ease of visibility"
  - goal_3: "Assess if users can quickly find information they are looking for"

research_questions:
  - "Do Veterans prefer design version A or B?"
  - "Is there any confusion caused by the status update styles in A vs B design?"
  - "Can people find what they're looking for on the dashboard?"
  - "Does the placement of the disability rating make sense to users?"
  - "What information is important for them to see first?"
  - "How do people think the new dashboard compares to current MyVA?"

hypotheses:
  - "Version A will be slightly more successful than version B due to less cognitive load"
  - "Overall users will be able to see and understand the update section"
  - "People will want to see more detailed personalized information than what is shown"
  - "The new myVA dashboard layout will overall be intuitive and scan-able"

expected_outcomes: "Determine which design direction to pursue for the My VA redesign"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Maximum variation sampling"
  
  primary_criteria:
    - "Eligible for or receive VA health care, have active or past claims, or receive VA benefits"
    
  secondary_criteria:
    - "At least 1 iOS mobile device owner"
    - "At least 1 Android mobile device owner"
    - "At least 2 women"
    - "At least 1 person of color"
    - "At least 1 person with disability rating of 70% or greater"
    - "At least 1 person with cognitive consideration (PTSD or TBI)"
    
  screener_questions:
    - question: "Are you eligible for/receive VA health care, have active or past claims or receive any benefits from the VA?"
      qualifying_response: "Yes"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2020-11-19"
  pilot_participant: "Jonathan Nelson"
  research_dates: "2020-11-20 to 2020-11-30"
  research_review_submission: "2020-11-10"
  
session_details:
  duration_minutes: 75
  buffer_minutes: 30
  max_sessions_per_day: 8
  
# Strategic Alignment
octo_priorities:
  - objective: "Logged-in users can update their personal information easily and instantly"
    key_results: 
      - "Improved personalized dashboard experience"
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results:
      - "Consolidated dashboard view"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/discovery-summary.md"
    
tags:
  - "my-va"
  - "preference-testing"
  - "mobile"
  - "authenticated-experience"
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

