---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience, My VA Benefit Payments and Debts UAT, March 2022"
date: 2022-03-01
last_updated: 2022-04-15
team: "Authenticated Experience"
product: "My VA - Benefit Payments and Debts"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans need to see payment information on their My VA dashboard as a high priority. This effort adds payment information to My VA to elevate it for logged-in Veteran's awareness."
  product_location: "My VA dashboard (authenticated area of VA.gov)"
  user_familiarity: "New feature - adding payment information section to existing My VA dashboard"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history"

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
  - goal_1: "Confirm that MVP functionality works as expected"
  - goal_2: "Validate that no major usability hurdles exist, especially with alert design changes"
  - goal_3: "Learn more about challenges experienced by people who use magnification and have cognitive considerations"

research_questions:
  - "Does the functionality work as expected?"
  - "Are Veterans able to take action on their payment or debt information without any usability hurdles?"
  - "Is it important to Veterans with debt to see the number of outstanding debts they have, or just that they have debt?"
  - "Do Veterans look for co-pay information on My VA under the health care section, or the benefit payments and debts section?"

hypotheses:
  - "Veterans will be able to easily take action on their payment and debt information from My VA"
  - "Veterans will not encounter any bugs in the Benefit payment and debt section"
  - "Veterans will not have strong opinions about whether copays are associated with benefit payments & debts or healthcare"

expected_outcomes: "Based on the outcome of this research study, we will either release our MVP to production, or update our design to correct any significant usability hurdles."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Focus on marginalized groups not included in previous usability study"
  
  primary_criteria:
    - "Must be LOA3 (identity verified) on VA.gov"
    - "Must be able to screenshare via Zoom"
    - "Must have received education benefit or compensation/pension payments from VA"
    - "Must identify as other than white or Caucasian"
    
  secondary_criteria:
    - "At least 2 people who use assistive technology other than zoom magnification"
    - "At least 3 Veterans living abroad"
    - "At least 6 Veterans who identify as Hispanic, Asian, or Native"
    
  screener_questions:
    - question: "Have you ever received an education, compensation, or pension payment from the VA?"
      qualifying_response: "Yes"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "First session participant"
  research_dates: "2022-04-12 to 2022-04-15"
  research_review_submission: "2022-03-01"
  
session_details:
  duration_minutes: 30
  buffer_minutes: 30
  max_sessions_per_day: 5
  
# Strategic Alignment
octo_priorities:
  - objective: "Move toward My VA being the one-stop shop for action items and benefit status"
    key_results: 
      - "Provide more direct, personalized routes to Veterans' most critical updates and tasks"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research"
    
tags:
  - "my-va"
  - "payment-history"
  - "uat"
  - "authenticated-experience"
---

# Research Plan for Authenticated Experience, My VA Benefit Payments and Debts UAT, March 2022

## Background
Throughout  [My VA 2.0 research and discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research)  in 2020 - 2021, the recurring theme mentioned by Veterans is that seeing payment info on their My VA dashboard is a high priority. The importance of payment information is also reflected in analytics, as viewing payments is a top interaction on VA.gov overall and is a top search term from the My VA dashboard.

This effort aims to add payment information to the My VA dashboard to be elevated for logged-in Veteran’s awareness and attention, as the MVP.

See our [product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history) for more details.

### OCTO-DE Objectives 
The addition of a payment information section should help fulfill our north star objective of moving toward My VA being the one-stop shop for action items and benefit status, so that it provides more direct, personalized routes to Veterans’ most critical updates and tasks


### Veteran Journey
Since Veterans can incur debt any time after establishing benefits with VA, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.


## Research Goals	
The primary goal of our UAT is to confirm that our MVP functionality works as expected.

As secondary goals, we’ll follow up on [our last usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md):
- We would like to validate that no major usability hurdles have been introduced during the iterations that have occurred, especially with the changes we made to the alert design.
- We would like to learn more about challenges experienced by people who use magnification, and have cognitive considerations.
- We would like to better understand whether or not it’s important to people see the number of outstanding debts they have.
- We would like to better understand Veteran expectations around co-pay information on My VA.

### Outcome
Based on the outcome of this research study, we will either release our MVP to production, or update our design to correct any significant usability hurdles people encounter.

### Research questions
- Does the functionality work as expected?
- Are Veterans able to take action on their payment or debt information without any usability hurdles?
- Is it important to Veterans with debt to see the number of outstanding debts they have, or just that they have debt?
- Do Veterans look for co-pay information on My VA under the health care section, or the benefit payments and debts section?

### Hypothesis
- Veterans will be able to easily take action on their payment and debt information from My VA.
- Veterans will not encounter any bugs in the Benefit payment and debt section.
- Veterans will not have strong opinions about whether copays are associated with benefit payments & debts or healthcare and could see it applying to either seciton.


## Method	
We'll have participants go through a list of specific tasks for UAT, and ask follow-up questions to get feedback on our usability related questions.

### Location
Remote, via Zoom

### Research materials
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/uat/uat-conversation-guide.md) 

## Recruitment	
Our intended audience for this research is BIPOC Veterans who have payments and debt with VA. We'll use Perigean to recruit them.

We'll focus our recruitment criteria on the marginalized groups we didn't speak with during [our last usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md).

### Recruitment criteria

Please recruit 12 participants for 6 completed sessions.

#### Primary criteria (must-haves)

**All participants**

- must be LOA3 (identity verified) on VA.gov. **Participants will likely not know what this means, so please confirm this prior to testing.** 
	- This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. 
	- If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. 
	- If they can see any sections in profile **other than Account Security**, they are LOA3 and can participate in testing.

- must be able to screenshare via Zoom.Prior to the session, please confirm:
	- They're comfortable sharing their screen after they've logged into VA.gov.  Financial information will be viewable to the moderator and any observers.
	- They have Zoom downloaded prior to the session and they know how to screenshare. 
	- **If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.**
	- **Qualifier:** Are you willing to share your screen with our moderator after you log in to VA.gov? The session will take you to a section of VA.gov where your VA financial information will be viewable. (Answer should be yes to qualify)

- Must be comfortable providing the email address they use to sign into VA.gov. We need this information 2-3 days before the study begins in order to give participants access to the prototype in production.
  
- Must have received education benefit or compensation/pension payments from the VA. Screener question:
   - Have you ever received an education, compensation, or pension payment from the VA?
   - Answering yes would qualify the participant for the study.

- Must identify as other than white or Caucasian

**Participant groups**
    
- 4 participants who have received payments from the VA in the past, but have not received a payment in the last month. Screener question (as a follow-up to the first screener above):
	- Have you received a payment in the last 30 days? 
	- Answering no would qualify the participant to meet this criteria.
- 75% of participants should identify as other than male 
- At least 50% of participants should identify as having a cognitive disability
- At least 50% of participants should be younger than 55
- 6-8 participants should have at least one outstanding VBA debt. VBA debts include: CH 33/Post-9/11 GI Bill, Compensation & Pension, CH 34, and CH 35 debts: Screener questions:
  
  1. Veterans can have debt with VA, usually as a result of a VA overpayment.  Debts include: CH 33/Post-9/11 GI Bill, Compensation & Pension, CH 34, and CH 35 debts. **Do you currently have an outstanding debt balance with VA, not including health care related debt (like co-pays)?** 
  2. Do you have health care related debt with VA?
  
  - Answering yes to question **1 AND 2** would qualify the participant for the study.
  - Answering yes **only to question 2** would disqualify the participant from the study.
- 4 participants should regularly use zoom magnification tools and be able to participate on a desktop device. Screener question:
	- Do you use screen magnification tools (for example, ZoomText, fusion) on your desktop or laptop computer?
	- Answering yes would qualify the participant for the study.
#### Secondary criteria (nice-to-haves)
##### Inclusion:
- 2 people who use assistive technology other than zoom magnification (such as screen readers, sighted keyboard users, hearing aids, or voice recognition)
- At least 3 Veterans living abroad (please work with researcher to coordinate timezones)
- At least 6 Veterans who identify as Hispanic, Asian, or Native
- At least 2 Veterans with other than honorable discharge
- At least 3 Veterans who have an immigrant origin

##### Geographic distribution:
- 4 participants from the east coast
- 4 participants from the mid-west
- 4 participants from the west coast

## Timeline
### Prepare
When will the thing you are testing be finalized? 
April 18, 2022 (tentative)

Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: TBD - Since we have very specific crtieria and were unable to find someone who meets it ourselves, we will use the first session as the test pilot. Please schedule only one person on the first day so we can make any necessary adjustments.
* Date and time of pilot session: 
  * TBD

### Research sessions
What dates do you plan to do research? 
4/12/2022 - 4/15/2022

### Length of sessions
Sessions will be 30 minutes with 30 minutes in between sessions. Please schedule no more than 5 sessions per day.

### Availability

| Date       | Times (Eastern) |
| ---------- | --------------- |
| 4/12/2022 | 9am - any time |	
| 4/13/2022 | 9am - 3pm |
| 4/14/2022 | 9am - any time |
| 4/15/2022 | 9am - any time |

## Team Roles	
Please list the people who will be serving in each role. 

- Moderator: Angela Agosto, angela.agosto@adhocteam.us
- Research guide writing and task development (usually but not always same as moderator): Liz Lantz
- Participant recruiting & screening:	Perigean
- Project point of contact: Liz Lantz and Angela Agosoto
- Participant(s) for pilot test:	TBD
- Note-takers: TBD
- Observers:	
  - samara.strauss@va.gov
  - heather.justice@adhocteam.us
  - lihan@adhocteam.us
  - taylor.mitchell@gcio.com
  - liz.lantz@adhocteam.us
  - christina.gednalske@adhocteam.us
