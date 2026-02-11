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

# Research Plan for Profile, Bad address indicator (BAI) UAT, September 2022

## Background  
When mail is sent to a Veteran and then returned to the VA, the address is marked as "bad" in VA Profile. The address may very well be a real, valid address, but the returned mail implies that it is no longer the right address for the veteran for whom the mail was intended. Currently, 300K veterans have the bad address indicator flag on their mailing address in VA Profile.

This effort aims to encourage Veterans with flagged addresses to view and update or confirm their information.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/bad-address-indicator).

### OCTO-DE Objectives 
We're implementing alerts to indicate the Mailing address is bad and encourage Veterans to update their information. The addition of bad address indicator alerts should help fulfill our north star objective to increase the quality and reliability of VA services by allowing Veterans to view and update their information.

These additions also address the following [OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):

-   Logged-in users can update their personal information easily and instantly
-   Logged-in users have a personalized experience, with relevant and time-saving features



## Research Goals	
The primary goal of our UAT is to confirm that the BAI functionality works as expected and users can update or confirm their mailing address to remove the bad address flag.  
- We would like to validate that included links and jumplinks function as intended.
- We would like to validate that the FAQ dropdown functions as intended.
- We would like to validate that the bad address flag is removed from the user's account as expected when an address is updated AND confirmed.
- We would like to validate that the alerts disappear as expected when an address is updated or confirmed.

### Outcome
Based on the outcome of this research study, we will either release this work to production, or make updates to correct any bugs or significant usability hurdles.

### Research questions
- Does the functionality work as expected?
- Are Veterans able to update or confirm their mailing address and clear all alerts without any usability hurdles?

### Hypothesis
- Veterans will be able to easily follow the links and jump links to the Mailing address section. 
- Veterans will be able to easily take action to update or confirm their address and clear the alerts.
- Veterans will be able to easily use the FAQ to learn more about confirming their address.
- Veterans will not encounter any bugs in the Contact information section while updating or confirming their address.

## Method	
We'll have participants go through a list of specific tasks for UAT and ask follow-up questions to get feedback on our usability-related questions. We will test this feature in production internally and work with VA Profile to trigger a bad address flag for participants' accounts.

### Location
Remote, via Zoom

### Research materials
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/uat/conversation-guide.md)

## Recruitment	
We will be conducting this research study internally without recruitment from Perigean. We will use production accounts for 6 members of the Profile team, onto which VA Profile will have placed the Bad address indicator flag.

### Recruitment criteria

We will aim for at least 6 completed sessions to finalize UAT and launch this feature. 4 of these sessions will test out “updating” an address, and 2 of the sessions will test out “confirming” an address.

#### Primary criteria (must-haves)

**All participants**

- must be LOA3 (identity verified) on VA.gov.
- must be able to screenshare via Zoom.
- must be comfortable providing the email address they use to sign into VA.gov.

## Timeline
When will the thing you are testing be finalized? 
- September 2022 (tentative)

### Research sessions
What dates do you plan to do research? 
- TBD

### Length of sessions
1 hour-long session for all 6 participants 

## Team Roles	
Please list the people who will be serving in each role. 

- Moderator: Christina Gednalske, christina.gednalske@adhocteam.us
- Research guide writing and task development (usually but not always same as moderator): Christina Gednalske
- Participant recruiting & screening:	Christina Gednalske
- Observers/Participants:	
  -  <samara.strauss@va.gov>
	-   <liz.lantz@adhocteam.us>
	-   <sharon.kasimow@gcio.com>
	-   <adam.whitlock@adhocteam.us>
	-   <tom.harrison@adhocteam.us> - Tom will correct/manage BAI flags if not displaying correctly on production accounts
	-   **Note:** If Tom is not permitted to manage BAI flag on his own, we’ll need someone from VA Profile standing by in case assistance is needed
