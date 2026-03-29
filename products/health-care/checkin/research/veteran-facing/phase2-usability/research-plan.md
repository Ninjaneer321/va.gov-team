---
# Research Plan Metadata
title: "Research Plan for Check-in Team, Check-in Phase 2 Usability, August 2021"
date: 2021-08-11
last_updated: 2021-08-11
team: "VSA Healthcare Experience - Check-in"
product: "Patient Check-in"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans checking in for appointments need enhanced security and the ability to manage multiple appointments in one day. In prior research, half of Veterans were concerned that check-in only utilized their phone number to verify identity. Additionally, over half of Veterans at pilot sites have more than one appointment on any given day and cannot check in with the MVP scope."
  product_location: "VA.gov check-in experience"
  user_familiarity: "iteration"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-outline.md"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Test the usability and design of proposed phase 2 features: addition of last name and last 4 of SSN as identity verification data points"
  - goal_2: "Test the ability for Veterans to check-in if they have multiple appointments in one day"
  - goal_3: "Test showing a check-in status for each appointment"

research_questions:
  - "Does the addition of last name and last 4 of SSN help the Veterans feel more secure about utilizing this check-in solution?"
  - "Do Veterans understand how to check-in for 1 appointment via their mobile device when they have multiple appointments in one day?"
  - "Do Veterans find value in seeing an itinerary of all their appointments for the day?"
  - "Is the information provided in said itinerary sufficient, too much, or too little?"
  - "Do the actions on the itinerary page align with Veteran expectations?"
  - "Are the check-in appointment statuses helpful to Veterans?"
  - "Would Veterans find repeating this process multiple times per day burdensome or easy?"

hypotheses:
  - "The additional identity verification data points help alleviate some of the earlier security concerns heard from Veterans"
  - "Adding the capability to check in for multiple appointments throughout the day will not impact a Veterans ability to complete check-in for an individual appointment"
  - "The combination of a daily itinerary and statuses for each appointment will help provide clarity to the Veteran throughout their day at the medical facility"
  - "The Veteran might have additional expectations on what they could see or do on the itinerary, such as check-in for all their appointments for the day at once"
  - "Veterans might not initially understand why they have to repeat this process multiple times per day"

expected_outcomes: "Validate that phase 2 features improve security perception and enable check-in for multiple appointments"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "targeted recruitment"
  
  primary_criteria:
    - "Participants must use VA health care AND had an in-person medical appointment at a VA facility within the last two years"
    - "Participants must be willing to use Zoom and screen share from their laptop"
    - "Participants must be willing to bring their smart phone to use during the study"
    - "At least 6 participants should have an iOS smart phone"
    - "At least 6 participants should have an Android smart phone"
    
  secondary_criteria:
    - "At least 1 woman"
    - "At least 1 person of color"
    - "At least 1 participant 35 or under and 1 participant over 55"
    - "At least one person that does not have a college degree"
    - "At least one person that has no college experience"
    - "At least one person who lives in a rural or remote area"
    - "At least one person who lives in a major metropolitan area"
    - "At least one participant that has identified cognitive impairments and/or functional disabilities"
    - "At least one non-native English speaker"
    
  screener_questions:
    - question: "Does the following statement describe you? I currently use VA health care AND had an in-person medical appointment at a VA facility within the last two years."
      qualifying_response: "Yes"
    - question: "Do you have a smart phone?"
      qualifying_response: "Yes"
    - question: "What type of smart phone do you have?"
      qualifying_response: "iOS or Android"
    - question: "Are you able to use Zoom and screen share on your laptop, yet also bring your smart phone to utilize during the study?"
      qualifying_response: "Yes"
      
participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-08-17"
  pilot_participant: "Corey Parker"
  research_dates: "2021-08-18 to 2021-08-24"
  research_review_submission: ""
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 5
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Increase use of digital self-service tools"
  - objective: "Veterans and their families trust the security, accuracy and relevancy of VA.gov"
    key_results:
      - "Improve perceived security of check-in"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Living civilian life"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/mvp-usability/research-findings.md"
    
tags:
  - "health-care"
  - "patient-check-in"
  - "PCI"
  - "HCE"
  - "check-in"
  - "phase-2"
  - "usability-testing"
  - "remote"
  - "evaluative"
  - "moderated"
  - "veterans"
  - "mobile"
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: Check-in"
study: Check-in Team, Check-in Phase 2 Usability
type: Usability
---

# Research Plan for Check-in Phase 2 Usability
August 2021

## Goals

### What product & team are you doing this research for?

VSA Healthcare Experience: Check-in

### Background: 

This product is reimagining the ecosystem that allows a Veteran to check-in for a medical appointment. The healthcare experience team in particular will be creating the portion of the ecosystem that enables a Veteran to utilize their mobile device to check-in (letting the VA know that they have arrived for their appointment) via va.gov.

With this round of research, we are looking to test the usability and design of our proposed phase 2 features:
- the addition of last name and last 4 of SSN as identity verification data points.
- the ability for Veterans to check-in if they have multiple appointments in one day.
- showing a check-in status for each appointment.

In prior research, half of the Veterans were concerned that check-in only utilized their phone number to verify they were the right person checking in. We also found out that last name and last 4 digits of SSN were commonly asked to verify identity within current check-in workflows.

We analyzed appointment data (particularly looking at our proposed pilot site...Martinsburg WV) and found over half of Veterans have more than one appointment on any given day. With our MVP scope, those Veterans would not be able to complete check-in. We want to recify that in Phase 2.

### Research questions: 

What question(s) do you hope to be able to answer after completing this research?

* Does the addition of last name and last 4 of SSN help the Veterans feel more secure about utilizing this check-in solution?
* Do Veterans understand how to check-in for 1 appointment via their mobile device when they have multiple appointments in one day?
* Do Veterans find value in seeing an itinerary of all their appointments for the day?
* Is the information provided in said itinerary sufficient, too much, or too little? 
  * Particularly, are Veterans interested in seeing appointments that are past the time where they can check-in?
* Do the actions on the itinerary page align with Veteran expectations? Are there things that Veterans expect to be able to do from an itinerary page that they aren't able to do?
* Are the check-in appointment statuses helpful to Veterans?
* Would Veterans find repeating this process multiple times per day (for each appointment if they had multiple appts) burdensome or easy?

### Hypotheses: 

* The additional identity verification data points help alleviate some of the earlier security concerns that we heard from Veterans.
* Adding the capability to check in for multiple appointments throughout the day will not impact a Veterans ability to complete check-in for an individual appointment.
* The combination of a daily itinerary and statuses for each appointment will help provide clarity to the Veteran throughout their day at the medical facility.
* The Veteran might have additional expectations on what they could see or do on the itinerary, such as check-in for all their appointments for the day at once.
* Veterans might not initially understand why they have to repeat this process multiple times per day.

## Method

### What method of research are you planning?

Remote, moderated sessions conducted on Zoom

* Usability testing using a poster, Twilio and interactive UX Pin Prototype.
* We will employ the laptop hugging method to enable easier transition and observations from the poster to text portion of the workflow.

#### Why this method? How does this methodology help you answer your research questions?

* Usability testing will allow the Veterans to walk through each step of the proposed process, so they can provide feedback to each research question. The laptop hugging method allows us to better simulate the physical poster starting point of the workflow, then eloquently transition to/observe the rest of the workflow (text and va.gov). For instance, users will be able to scan the QR code.

#### Where are you planning to do your research? 

Online, through Zoom

#### What will you be testing? 

Poster design announcing that Veterans can check-in via their phone. Twilio will recreate the texting experience, which will link to a UX Pin prototype (which will mimic the va.gov portion of the experience), so the Veteran can complete check-in.

## Participants and Recruitment

### Participant criteria: 

What are you looking for in a participant?

#### Primary criteria / Must have:

* 15 participants (for a minimum of 8 completed sessions)
  * Participants must use VA health care AND had an in-person medical appointment at a VA facility within the last two years (disqualify those that don't)
  * Participants must be willing to use Zoom and screen share from their laptop, but also must be willing to bring their smart phone to use during the study (disqualify those that aren't)
  * At least 6 participants should have an iOS smart phone
  * At least 6 participants should have an Android smart phone
* Please screen participants based on these questions:
  * Does the following statement describe you? I currently use VA health care AND had an in-person medical appointment at a VA facility within the last two years.
    1. Yes (Qualify)
    2. No (Disqualify)
  * Do you have a smart phone?
    1. Yes (Qualify)
    2. No (Disqualify)
  * What type of smart phone do you have?
    1. iOS (Qualify a minimum of 6)
    2. Android (Qualify a minimum of 6)
  * Are you able to use Zoom and screen share on your laptop, yet also bring your smart phone to utilize during the study?
    1. Yes (Qualify)
    2. No (Disqualify)
* Please confirm participants have Zoom downloaded prior to the session and they know how to screen share
* Note, due to the use of a UX Pin prototype:
   * For this session, we are unable to include those who use assistive technology, such as screen readers (JAWS, NVDA, VoiceOver, and ChromeVox).

   * For this session, we are unable to include people with significant vision loss.

   * For this session, we are unable to include people who use magnification tools.

#### Secondary criteria / Would like to have

* At least 1 woman
* At least 1 person of color
* At least 1 participant 35 or under and 1 participant over 55
* At least one person that does not have a college degree (to include enlisted Vets)
* At least one person that has no college experience 
* At least one person who lives in a rural or remote area
* At least one person who lives in a major metropolitan area
* At least one participant that has identified cognitive impairments and/or functional disabilities. Examples of diagnoses that may align with this would be Traumatic Brain Injury (TBI), Post-Traumatic Stress Disorder (PTSD), Attention-Deficit/Hyperactivity Disorder (ADHD), autism, and vertigo. Other conditions may be aphasia, dyslexia, dyscalculia, distractibility, memory loss, reading difficulties, low tolerance for cognitive overload, and intellectual/adaptive functioning challenges such as learning and problem-solving.
* At least one non-native English speaker

## When?

### Timeline: What dates do you plan to do research? 

(IF you are using the research recruiting contract, please submit 1 FULL week prior to the start of research for remote, 2+ weeks for in person.)

* August 17 - 24

### When will the thing you are testing be ready?

August 11

### Length of Sessions: How long do you estimate each session will be? 

_(This helps with scheduling & thank you gifts.) e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours. Specify if you want Perigean to schedule the sessions with buffer time (15 minutes recommended) to allow for participants who can't make it on time, or if you might go over time._

* 1 hour sessions, 30 minute buffer between sessions

### Availability: If applicable, when would you like sessions scheduled? 

* Wed, August 18; 9 am - 11:30 EST, 1:30 - 5 pm ET
* Thurs, August 19; 11:30 am - 5 pm ET
* Fri, August 20; 9 am - 10:30 am ET, Noon - 2 pm, 3:30 pm - 5 pm ET
* Mon, August 23; 9 am - 10:45 am ET, Noon - 5 pm ET
* Tue, August 24; 9 am - 4 p.m. ET

### Pilot: Please indicate a date before your sessions begin for piloting your research. 

* Tue, August 17, 2:00 - 3:00 p.m. ET

### Which member of the design team will you pilot your research with?

  * Corey Parker ([Corey.Parker@gcio.com](mailto:Corey.Parker@gcio.com)) 

## Team Roles

* Moderator: Kristen McConnell ([kristen.mcconnell@adhocteam.us](mailto:kristen.mcconnell@adhocteam.us))
* Research guide writing and task development (usually but not always same as moderator): Kristen McConnell
* Participant recruiting & screening: Perigean
* Project point of contact: Corey Parker ([Corey.Parker@gcio.com](mailto:Corey.Parker@gcio.com)) 
* Participant(s) for pilot test: Corey Parker
* Note-takers: Perigean
* Observers: 
  * Corey Parker
  * Dillo Raju ([dillo.raju@gcio.com](dillo.raju@gcio.com))
  * Patrick Bateman ([Patrick.Bateman@va.gov](mailto:Patrick.Bateman@va.gov))
  * Mark Dewey ([Mark.Dewey@gcio.com](Mark.Dewey@gcio.com))
  * Stephen Barrs ([Stephen.Barrs@va.gov](Stephen.Barrs@va.gov))
  * Julia Snyder ([Julia.Snyder@va.gov](mailto:Julia.Snyder@va.gov))
  * Danielle Johnson ([Danielle.Johnson13@va.gov](mailto:Danielle.Johnson13@va.gov))
  * Martha Wilkes ([martha.wilkes@va.gov](mailto:martha.wilkes@va.gov))
  * Kennon Hulett ([Kennon.Hulett@adhocteam.us](mailto:Kennon.Hulett@adhocteam.us))

## Resources

* [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-outline.md)
* [Convo Guide Discussion guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/phase2-usability/conversation-guide.md)
* [Synthesis document]()
* [Research report]()

* [Related research: MVP Check in usability](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/mvp-usability/research-findings.md)
