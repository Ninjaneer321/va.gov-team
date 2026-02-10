---
# Research Plan Metadata
title: "Research Plan for VAOS Appointments Team, Appointments List Screenreader Usability, February 2023"
date: 2023-03-20
last_updated: 2026-02-10
team: "VA Online Scheduling (VAOS) Team"
product: "VA Online Scheduling - Appointments List"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The VA Online Scheduling team redesigned the appointment list based on Veteran feedback, but needs to validate the changes work well for low and non-sighted Veterans using screenreaders."
  product_location: "VA Online Scheduling appointments list on VA.gov"
  user_familiarity: "Redesign of existing appointment list - testing usability with screenreader users"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/appointment-list/product-outline-appointment-list-2022.md"

# Research Design
methodology: "usability-testing, accessibility-testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Improve navigation for Veterans using screenreaders"
  - goal_2: "Provide an appointment list that is easy for screenreader users to navigate"
  - goal_3: "Validate that the appointment list redesign works well for low and non-sighted Veterans"

research_questions:
  - "How do Veterans typically manage their appointments?"
  - "Does the information for each appointment make sense?"
  - "Can Veterans differentiate between appointments?"
  - "Can Veterans navigate to Past appointments?"
  - "Can Veterans navigate to Pending appointments?"
  - "What would Veterans' next steps be?"

hypotheses:
  - "Veterans using a screenreader will be able to easily navigate their appointments"
  - "Veterans using a screenreader will be able to find the information they need to attend/join their appointments"

expected_outcomes: "We will use the findings to provide an appointment list that is easy for screenreader users to navigate."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment for screenreader users with mix of advanced and beginner users"
  
  primary_criteria:
    - "12 participants that regularly use a screenreader"
    - "Have been to a VA healthcare facility for a medical appointment in the last 12 months"
    - "Have an email and password for either Login.gov or ID.me that they use to sign into VA.gov"
    - "Need to use assistive technology to use the internet (VoiceOver on iPhone, TalkBack on Android, or JAWS on computer)"
    - "Able to join Zoom session using this assistive technology"
    
  secondary_criteria:
    - "A mix of advanced and beginner screenreader users"
    
  screener_questions:
    - question: "Have you been to a VA healthcare facility for a medical appointment in the last 12 months?"
      qualifying_response: "Yes"
    - question: "Do you have an email and password for either Login.gov or ID.me that you use to sign into VA.gov?"
      qualifying_response: "Yes"
    - question: "Do you need to use assistive technology to use the internet such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer?"
      qualifying_response: "Yes"
    - question: "Are you able to join the Zoom session using this assistive technology?"
      qualifying_response: "Yes"
    - question: "Do you consider yourself an advanced or beginner screenreader user?"
      qualifying_response: "Mix of advanced and beginner"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 12
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-03-28"
  pilot_participant: "Angela Fowler"
  research_dates: "2023-03-30 to 2023-04-14"
  research_review_submission: "2023-03-20"
  
session_details:
  duration_minutes: 90
  buffer_minutes: 15
  max_sessions_per_day: 2
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results: 
      - "Provide accessible appointment information"
  - objective: "Logged-in users have a personalized experience, with relevant and time-saving features"
    key_results:
      - "Improve appointments list usability for all Veterans"
  - objective: "Increase Veteran satisfaction with VA.gov by providing an appointments list that meets Veteran expectations and needs"
  - objective: "Decrease call center volume, wait time, and time to resolution by providing the right information about appointments when Veterans need it"
      
veteran_journey_phases:
  - "Starting up"
  - "Taking care of myself"
  - "Putting down roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2022-appts-list-usability/research-findings.md"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: Appointments"
  - "MHV: Appointments"
  - "authenticated"
  - "usability-testing"
  - "accessibility-testing"
  - "remote"
  - "Accessibility"
  - "screenreader"
  - "assistive-technology"
  - "JAWS"
  - "VoiceOver"
  - "TalkBack"
  - "HDW: Desktop"
  - "HDW: Smartphone"
  - "HDW: Mobile"
---

Research plan for VAOS appointments list screenreader usability test
=============

Background
----------

VA Online Scheduling allows Veterans who are logged into VA.gov to schedule and manage their appointments.

The VA Online Scheduling team has worked to evaluate the usability of the existing appointment list. A redesign of the appointment list was created based on the [feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2022-appts-list-usability/research-findings.md) during Veteran research sessions. The usability of the redesign was then tested with Veterans and the findings were incorporated in updated designs. The VA Online scheduling team now seeks feedback from Veterans using screenreaders to validate the changes made to the appointment list for low and non-sighted Veterans. 

Also see [Product's initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/appointment-list/product-outline-appointment-list-2022.md).

### OCTO Objectives

<!-- Check the OCTO objectives, are there any specifically about access? Or that a screenreader usability study would address? -->

This research supports the following [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):

-   Veterans and their families can find a single, authoritative source of information
-   Logged-in users have a personalized experience, with relevant and time-saving features

Increase 📈

-   Veteran satisfaction with VA.gov: by providing an appointments list that meets Veteran expectations and needs.

Decrease 📉

-   Call center volume, wait time, and time to resolution: by providing the right information about appointments when Veterans need it

### Veteran journey

Veterans may interact with VAOS at different stages across the [veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):

Starting up

-   MTM: Attending to health needs

Taking care of myself

-   MTM: Recognizing and addressing mental health needs
-   MTM: Managing health issues

Putting down roots

-   Maintaining my emotional health
-   Engaging VA to access benefits and services

Retiring

-   MTM: Taking care of my health
-   MTM: Managing my declining health

Research goals
--------------

The goal of this research is to improve navigation for Veterans using screenreaders.

### Outcome

We will use the findings to:

-   Provide an appointment list that is easy for screenreader users to navigate.

### Hypotheses

When Veterans use a screenreader on the appointment list:

-   They will be able to easily navigate their appointments.
-   They will be able to find the information they need to attend/join their appointments.

### Research Questions

**Evaluate screenreader usability and value of the appointment list redesign.**

- How do Veterans typically manage their appointments?
- Does the information for each appointment make sense?
- Can Veterans differentiate between appointments?
- Can Veterans navigate to Past appointments?
- Can Veterans navigate to Pending appointments?
- What would Veterans' next steps be?

Method
------

With screenreader participants only, we will run a moderated usability test of the appointment list. 

### Location

Remote, over Zoom.

### Research materials

For moderated usability test 
- [Conversation guide](conversation-guide.md)


Recruitment
-----------

### Recruitment approach

Perigean will recruit 12 total participants for this study.

### Recruitment criteria

**Primary criteria**

-  12 participants that regularly use a screenreader.
  
**Secondary criteria**  

- A mix of advanced and beginner screenreader users.

 
**Screener questions**
 
1. Have you been to a VA healthcare facility for a medical appointment in the last 12 months?

   - Yes (Go onto Screener question 2)
   - No (Disqualify)

2. Do you have an email and password for either Login.gov or ID.me that you use to sign into VA.gov?

   - Yes (Go onto Screener question 3)
   - No (Disqualify)

3. Please provide the email address you use for either Login.gov or ID.me that you use to sign into VA.gov.

4. Do you need to use assistive technology to use the internet such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer?

   - Yes (Go onto Screener question 5)
   - No (Disqualify)

5. Are you able to join the Zoom session using this assistive technology?

   - Yes (Go onto Screener question 6)
   - No (Disqualify)

6. Please list the name of the assistive technology or software you will use during the session.

7. Do you consider yourself an advanced or beginner screenreader user? (Advanced/Beginner)

Timeline
--------

### Prepare

Test materials will be finalized by Monday, March 20th 2023

We will not need Perigean to coordinate the Pilot session:
- Pilot participant: Angela Fowler
- Date and time of pilot session: Tuesday, March 28th 2023 at 2:30pm EST 

### Research sessions

Research session will begin on or after Thursday, March 30th 2023 and end on Thursday, April 13th.

### Length of sessions

1 hour and 30 minutes

### Availability

Team Availability | Time Slots (ET)
------------------|--------------
March 30, 2023 | 11 am - 3 pm; 3:30-7 pm
March 31, 2023 | 11 am - 3 pm; 3:30-7 pm
April 3, 2023 | 12 pm - 3 pm; 3:30-8 pm
April 4, 2023 | 12 pm - 3 pm; 3:30-5 pm
April 5, 2023 | 12 pm - 3 pm; 3:30-5 pm
April 6, 2023 | 12 pm - 3 pm; 3:30-5 pm
April 7, 2023 | 12 pm - 3 pm; 3:30-8 pm
April 10, 2023 | 12 pm - 3 pm; 3:30-8 pm
April 11, 2023 | Not Available
April 12, 2023 | Not Available
April 13, 2023 | 12 pm - 3 pm; 3:30-5 pm
April 14, 2023 | 12 pm - 3 pm; 3:30-8 pm

15 minute buffer between sessions

No more than 2 sessions per day

Team roles
----------

-   Moderator: Ciera Maddox - ciera.maddox@adhocteam.us
-   Backup moderator: Peter Russo - peter.russo@adhocteam.us
-   Research guide writing and task development: Peter Russo and Ciera Maddox
-   Participant recruiting & screening: Perigean
-   Project point of contact: Ciera Maddox - ciera.maddox@adhocteam.us
-   Participant(s) for pilot test: Angela Fowler
-   Note-takers: Peter Russo - peter.russo@adhocteam.us
-   Observers: 
    -   Kristen McConnell - kristen.mcconnell@va.gov
    -   Jeff Roof - jeff.roof@adhocteam.us
    -   Leah De La Costa - leah.delacosta@adhocteam.us
    -   Simi Abedowale - simi.adebowale@adhocteam.us
   
