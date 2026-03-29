---
# Research Plan Metadata
title: "Research Plan for Profile, Bad Address Indicator UAT, September 2022"
date: 2022-09-01
last_updated: 2022-09-30
team: "Profile Team"
product: "Profile - Contact Information (Bad Address Indicator)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "When mail is returned to VA, addresses are marked as 'bad' in VA Profile. Currently 300K veterans have this flag. This effort encourages Veterans with flagged addresses to view and update or confirm their information."
  product_location: "VA.gov Profile > Contact Information section"
  user_familiarity: "New feature - adding bad address indicator alerts"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/bad-address-indicator"

# Research Design
methodology: "User Acceptance Testing (UAT)"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Confirm that BAI functionality works as expected and users can update or confirm mailing address to remove bad address flag"
  - goal_2: "Validate that included links and jumplinks function as intended"
  - goal_3: "Validate that the FAQ dropdown and bad address flag removal works as expected"

research_questions:
  - "Does the functionality work as expected?"
  - "Are Veterans able to update or confirm their mailing address and clear all alerts without any usability hurdles?"

hypotheses:
  - "Veterans will be able to easily follow the links and jump links to the Mailing address section"
  - "Veterans will be able to easily take action to update or confirm their address and clear the alerts"
  - "Veterans will be able to easily use the FAQ to learn more about confirming their address"
  - "Veterans will not encounter any bugs in the Contact information section while updating or confirming their address"

expected_outcomes: "Based on the outcome of this research study, we will either release this work to production, or make updates to correct any bugs or significant usability hurdles."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Internal recruitment"
  approach: "Internal testing with Profile team production accounts"
  
  primary_criteria:
    - "Must be LOA3 (identity verified) on VA.gov"
    - "Must be able to screenshare via Zoom"
    - "Must be comfortable providing email address used to sign into VA.gov"
    
  secondary_criteria:
    - "N/A (internal recruitment)"
    
  screener_questions:
    - question: "Are you a Profile team member willing to participate in UAT?"
      qualifying_response: "Yes"
      
participants:
  veterans: 6
  caregivers: 0
  dependents: 0
  total_recruited: 6
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "N/A"
  pilot_participant: "N/A"
  research_dates: "2022-09-15 to 2022-09-30"
  research_review_submission: "2022-09-01"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 0
  max_sessions_per_day: 6
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase the quality and reliability of VA services"
    key_results: 
      - "Logged-in users can update their personal information easily and instantly"
      - "Logged-in users have a personalized experience, with relevant and time-saving features"
      
veteran_journey_phases:
  - "Starting Up"
  - "Living Civilian Life"
  - "Taking Care of Myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/bad-address-indicator/research"
    
tags:
  - profile
  - contact-information
  - bad-address-indicator
  - uat
  - user-acceptance-testing
  - authenticated-experience
  - address-validation
  - authenticated
  - research-plan
  - "profile"
  - "contact-information"
  - "bad-address-indicator"
  - "uat"
  - "authenticated-experience"
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
