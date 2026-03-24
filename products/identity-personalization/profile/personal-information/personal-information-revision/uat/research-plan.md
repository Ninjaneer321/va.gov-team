---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience - Profile, Personal Information UAT, April 2022"
date: 2022-04-01
last_updated: 2022-06-14
team: "Authenticated Experience - Profile"
product: "Profile - Personal Information (Preferred Name and Gender Identity)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans need to be addressed properly at health appointments. This effort adds Preferred name and Gender identity fields to Personal information section to mitigate improper addressing and allow Veterans to accurately describe themselves."
  product_location: "VA.gov Profile > Personal Information section"
  user_familiarity: "New fields - adding to existing Personal Information section"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/README.md"

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
  - goal_1: "Confirm that Personal information section functionality works as expected for Preferred name and Gender identity"
  - goal_2: "Evaluate whether Veterans understand what this information is and why we are asking for it"
  - goal_3: "Validate that Veterans understand it is optional to provide this information"

research_questions:
  - "Does the functionality work as expected?"
  - "Are Veterans able to update their Personal information preferences without any usability hurdles?"
  - "Do Veterans understand what this information is and why we are asking for it?"
  - "Do Veterans understand that these fields are optional?"

hypotheses:
  - "Veterans will be able to easily update their Personal information preferences"
  - "Veterans will understand why we are asking for this information and where/how the information will be used"
  - "Veterans will be able to determine whether or not this information is required"
  - "Veterans will not have strong opinions about the terminology used or order of the fields included"
  - "Veterans will not encounter any bugs in the Personal information section"

expected_outcomes: "Based on the outcome of this research study, we will either release our MVP to production, or update our designs to correct any significant usability hurdles or content/IA concerns."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Focus on LGTBQ community and marginalized groups not in previous usability study"
  
  primary_criteria:
    - "Must be LOA3 (identity verified) on VA.gov"
    - "Must be able to screenshare via Zoom"
    - "Must be comfortable providing the email address they use to sign into VA.gov"
    - "At least 33% (4) must identify as transgender"
    - "At least 33% (4) must identify as non-binary or another gender identity other than cis-gender"
    
  secondary_criteria:
    - "At least 2 people who use assistive technology other than zoom magnification"
    - "At least 3 Veterans living abroad"
    - "At least 3 Veterans with first language other than English"
    
  screener_questions:
    - question: "Do you feel comfortable reviewing a website page that asks about information related to gender identity?"
      qualifying_response: "Yes"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "2022-06-06"
  pilot_participant: "Robin Garrison (robin.garrison@adhocteam.us)"
  research_dates: "2022-06-08 to 2022-06-14"
  research_review_submission: "2022-04-01"
  
session_details:
  duration_minutes: 30
  buffer_minutes: 30
  max_sessions_per_day: 5
  
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
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/research/findings-summary.md"
    
tags:
  - profile
  - personal-information
  - uat
  - user-acceptance-testing
  - authenticated-experience
  - gender-identity
  - preferred-name
  - authenticated
  - research-plan
  - "profile"
  - "personal-information"
  - "gender-identity"
  - "uat"
  - "authenticated-experience"
---

# Research Plan for Authenticated Experience - Profile, Personal information UAT, April 2022

## Background
To mitigate issues around Veterans being addressed improperly at health appointments, our team has added two new fields to the Personal information section of the VA.gov Profile: Preferred name and Gender identity. These changes also allow Veterans to more accurately describe themselves within the VA. 

See our [product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/README.md) for more details.

### OCTO-DE Objectives 
The addition of these fields should help fulfill our north star objective to increase the quality and reliability of VA services by allowing Veterans to view and update their personal information so they have agency over how they're addressed by VA staff. Veterans will be able to more accurately define themselves within the VA.

These additions also address the following OCTO-DE goals:
- Logged-in users can update their personal information easily and instantly
- Logged-in users have a personalized experience, with relevant and time-saving features


### Veteran Journey
Since Veterans may need to add or update their information with VA at any time, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.

## Research Goals	
The primary goal of our UAT is to confirm that the Personal information section functionality works as expected and Veterans can view and update their preferences for Preferred name and Gender identity.

As secondary goals, we’ll follow up on our last [research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/research/research-plan.md) and the subsequent changes made to the designs:
- We would like to evaluate whether or not Veterans understand what this information is and why we are asking for it.
- We would like to validate that Veterans understand it is optional to provide this information. 
- We would like to validate that no major usability hurdles have been introduced during our recent iterations.

### Outcome
Based on the outcome of this research study, we will either release our MVP to production, or update our designs to correct any significant usability hurdles or content/IA concerns participants encounter.

### Research questions
- Does the functionality work as expected?
- Are Veterans able to update their Personal information preferences without any usability hurdles?
- Do Veterans understand what this information is and why we are asking for it? 
- Do Veterans understand that these fields are optional?

### Hypothesis
- Veterans will be able to easily update their Personal information preferences.
- Veterans will understand why we are asking for this information and where/how the information will be used.
- Veterans will be able to determine whether or not this information is required.
- Veterans will not have strong opinions about the terminology used or order of the fields included.
- Veterans will not encounter any bugs in the Personal information section.

## Method	
We will be conducting remote, moderated interviews using Zoom. The sessions will be moderated using VA.gov. We'll have participants go through a list of specific tasks for UAT, and then ask follow-up questions to get feedback on our content/IA related questions.

### Location
Remote, via Zoom

### Research materials
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/uat/conversation-guide.md)

## Recruitment	
Our intended audience for this research are Veterans who are part of the LGTBQ community. We'll use Perigean to recruit them.

We are intentionally focusing our recruitment criteria on the marginalized groups we didn't speak with during our last [usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/research/findings-summary.md).

### Recruitment criteria

Please recruit 12 participants for 6 completed sessions.

#### Primary criteria (must-haves)

**All participants**

- must be LOA3 (identity verified) on VA.gov. **Participants will likely not know what this means, so please confirm this prior to testing.** 
	- This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. 
	- If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. 
	- If they can see any sections in profile **other than Account Security**, they are LOA3 and can participate in testing.

- must be able to screenshare via Zoom. Prior to the session, please confirm:
	- They're comfortable sharing their screen after they've logged into VA.gov. Information will be viewable to the moderator and any observers.
	- They have Zoom downloaded prior to the session and they know how to screenshare. 
	- **If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.**
	- **Qualifier:** Are you willing to share your screen with our moderator after you log in to VA.gov? The session will take you to a section of VA.gov where your Personal information will be viewable. (Answer should be yes to qualify)

- Must be comfortable providing the email address they use to sign into VA.gov. We need this information 2-3 days before the study begins in order to give participants access to the prototype in production.

**Inclusion:**
- At least 33% (4) of participants must identify as transgender
- At least 33% (4) of participants must identify as non-binary or another gender identity other than cis-gender
- At least 50% of participants must identify as Hispanic, Native American, or Asian
- 50% of participants should identify as other than male
- At least 50% of participants should identify as having a cognitive disability
- At least 50% of participants should be younger than 55

**Screener questions**
  
- We want to make sure everyone who participates in a feedback session knows exactly what to expect so you can decide if you’re comfortable participating. This study involves reviewing a part of VA.gov that helps Veterans view and update information related to gender identity. Feedback from Veterans like you will help us make sure that this section will meet your needs and is easy to use. Do you feel comfortable reviewing a website page that asks about information related to gender identity?
  - No (don't recruit)
  - Yes (ask the next question)

- Do you feel comfortable discussing why you would or would not update your own information?
  - No (don't recruit)
  - Yes (recruit)

#### Secondary criteria (nice-to-haves)
##### Inclusion:
- 2 people who use assistive technology other than zoom magnification (such as screen readers, sighted keyboard users, hearing aids, or voice recognition)
- At least 3 participants with a first language other than English (please note that sessions will be held in English)
- At least 3 Veterans living abroad (please work with researcher to coordinate time zones)
- At least 2 Veterans with other than honorable discharge
- At least 3 Veterans who have an immigrant origin

##### Geographic distribution:
- 4 participants from the east coast
- 4 participants from the midwest
- 4 participants from the west coast

## Timeline
### Prepare
When will the thing you are testing be finalized? 
- Finalized with minor updates in progress

Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:robin.garrison@adhocteam.us
	* Please invite adam.whitlock@adhocteam.us as well
* Date and time of pilot session: 
  * 6/6/2022 - 2:30pm EST

### Research sessions
What dates do you plan to do research? 
- 6/8/2022 - 6/14/2022

### Length of sessions
Sessions will be 30 minutes with 30 minutes in between sessions. Please schedule no more than 5 sessions per day.

### Availability

| Date       | Times (Eastern) |
| ---------- | --------------- |
| 6/8/2022 | 11:30am - 8pm |	
| 6/9/2022 | 11:30am - 3pm |
| 6/10/2022 | 9am - 6:30pm |
| 6/13/2022 | 11:30am - 8pm |
| 6/14/2022 | 11:30am - 8pm |

## Team Roles	
Please list the people who will be serving in each role. 

- Moderator: 
	- Christina Gednalske, christina.gednalske@adhocteam.us
	- Angela Agosto (angela.agosto@adhocteam.us) and Liz Lantz (liz.lantz@adhocteam.us) may moderate sessions before 11:30am EST
- Research guide writing and task development (usually but not always same as moderator): Christina Gednalske
- Participant recruiting & screening: Perigean
- Project point of contact: Christina Gednalske
- Participant(s) for pilot test: TBD
- Note-takers: Perigean
- Observers:	
  - samara.strauss@va.gov
  - sharon.kasimow@gcio.com
  - adam.whitlock@adhocteam.us
  - liz.lantz@adhocteam.us
  - tom.harrison@adhocteam.us
  - mark.dewey@gcio.com
  - angela.agosto@adhocteam.us
 
