---
# Research Plan Metadata
title: "Research Plan for Check-in Team, Check-in MVP Usability, June 2021"
date: 2021-06-11
last_updated: 2021-06-11
team: "VSA Healthcare Experience - Check-in"
product: "Patient Check-in"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans need a better way to check in for medical appointments. The current process requires Veterans to check in at a physical kiosk or with staff, which can be time-consuming and inefficient. This product is reimagining the ecosystem that allows a Veteran to check in for a medical appointment using their mobile device via va.gov."
  product_location: "VA.gov check-in experience"
  user_familiarity: "New product"
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
  - goal_1: "Test the usability and design of the proposed check-in MVP"
  - goal_2: "Understand how Veterans feel about the proposed check-in solution, particularly the multiple modalities utilized (text, then website)"
  - goal_3: "Determine what appointment information Veterans expect to review to complete check-in"

research_questions:
  - "Do Veterans understand how to check-in via their mobile device?"
  - "How do Veterans feel about the proposed check-in solution, particularly the multiple modalities utilized (text, then website)?"
  - "What appointment information are Veterans expecting to review, in order to complete check-in?"
  - "Once check-in is complete, do Veterans understand what will happen/what they should do next, or how to get help if they are having trouble checking in?"

hypotheses:
  - "Veterans will be able to complete check-in on their mobile device"
  - "Due to our authentication method, Veterans will have no problems jumping from text to website to complete check-in"
  - "Since Veterans are at the VA facility, they only need a few pieces of appointment information during the check-in process"
  - "Veterans will have enough information to know what to do next or where to go if they do have questions"

expected_outcomes: "Validate the proposed MVP check-in solution and identify any usability issues before launch"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "targeted recruitment"
  
  primary_criteria:
    - "Participants must use VA health care AND had an in-person medical appointment at a VA facility within the last two years"
    - "Participants must be willing to complete the study via a mobile device"
    - "Participants need to be able to use Zoom on their smart phone"
    - "Participants must be willing to share their smart phone screen"
    
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
    - question: "Are you willing and able to complete this study on your smart phone?"
      qualifying_response: "Yes"
    - question: "Are you able to use Zoom on your smart phone and willing to share your smart phone screen via Zoom?"
      qualifying_response: "Yes"
      
participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-06-21"
  pilot_participant: "Dillo Raju"
  research_dates: "2021-06-23 to 2021-06-29"
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
  - objective: "Logged-in users have a personalized experience"
    key_results:
      - "Improve Veteran experience with check-in"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Living civilian life"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-outline.md"
    
tags:
  - "health-care"
  - "patient-check-in"
  - "PCI"
  - "HCE"
  - "check-in"
  - "MVP"
  - "usability-testing"
  - "remote"
  - "evaluative"
  - "moderated"
  - "veterans"
  - "mobile"
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: Check-in"
study: Check-in Team, Check-in MVP Usability
type: Usability
---

# Research Plan for Check-in MVP Usability
June 2021

## Goals

### What product & team are you doing this research for?

VSA Healthcare Experience: Check-in

### Background: 

This product is reimagining the ecosystem that allows a Veteran to check-in for a medical appointment. The healthcare experience team in particular will be creating the portion of the ecosystem that enables a Veteran to utilize their mobile device to check-in (letting the VA know that they have arrived for their appointment) via va.gov.

With this round of research, we are looking to test the usability and design of the proposed MVP.

### Research questions: 

What question(s) do you hope to be able to answer after completing this research?

* Do Veterans understand how to check-in via their mobile device?
* How do Veterans feel about the proposed check-in solution, particularly the multiple modalities utilized (text, then website)?
* What appointment information are Veterans expecting to review, in order to complete check-in?
* Once check-in is complete, do Veterans understand what will happen/what they should do next, or how to get help if they are having trouble checking in?

### Hypotheses: 

* Veterans will be able to complete check-in on their mobile device.
* Due to our authentication method, Veterans will have no problems jumping from text to website to complete check-in.
* Since Veterans are at the VA facility, they only need a few pieces of appointment information during the check-in process.
* Veterans will have enough information to know what to do next or where to go if they do have questions.

## Method

### What method of research are you planning?

Remote, moderated sessions conducted on Zoom

* Usability testing using a poster, Twilio and staging.

#### Why this method? How does this methodology help you answer your research questions?

* Usability testing will allow the Veterans to walk through each step of the proposed process, so they can provide feedback to each research question.

#### Where are you planning to do your research? 

Online, through Zoom

#### What will you be testing? 

Poster design announcing that Veterans can check-in via their phone. Twilio will recreate the texting experience, which will link to va.gov (staging), so the Veteran can complete check-in.

## Participants and Recruitment

### Participant criteria: 

What are you looking for in a participant?

#### Primary criteria / Must have:

* 15 participants (for a minimum of 8 completed sessions)
  * Participants must use VA health care AND had an in-person medical appointment at a VA facility within the last two years (disqualify those that don't)
  * Participants must be willing to complete the the study via a mobile device, need to be able to use Zoom on their smart phone, and must be willing to share their smart phone screen (disqualify those that aren't)
* Please screen participants based on these questions:
  * Does the following statement describe you? I currently use VA health care AND had an in-person medical appointment at a VA facility within the last two years.
    1. Yes (Qualify)
    2. No (Disqualify)
  * Do you have a smart phone?
    1. Yes (Qualify)
    2. No (Disqualify)
  * Are you willing and able to complete this study on your smart phone?
    1. Yes (Qualify)
    2. No (Disqualify)
  * Are you able to use Zoom on your smart phone and willing to share your smart phone screen via Zoom?
    1. Yes (Qualify)
    2. No (Disqualify)
* Please confirm participants have Zoom downloaded prior to the session and they know how to screen share
* Note:
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

* Jun 23 - 29

### When will the thing you are testing be ready?

June 11

### Length of Sessions: How long do you estimate each session will be? 

_(This helps with scheduling & thank you gifts.) e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours. Specify if you want Perigean to schedule the sessions with buffer time (15 minutes recommended) to allow for participants who can't make it on time, or if you might go over time._

* 1 hour sessions, 30 minute buffer between sessions

### Availability: If applicable, when would you like sessions scheduled? 

Please list exact dates and times in EASTERN Standard Time. Please request enough dates and time slots (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.). Be as flexible as possible, cognizant that many Veterans are only available before and after working times, and live across the U.S. Specify how much time you want between sessions, if any.

* Wed, June 23; 9 am - 1 pm ET, 5 - 7 pm ET
* Thu, Jun 24; 9 am - 12:30 EST, 1:30 - 5 pm ET
* Fri, Jun 25; 9 - 10:30 am EST, Noon - 2 pm ET, 3:30 - 5 pm ET
* Mon, Jun 28; 9 - 10:30 am ET, 12:30 - 1:30 pm ET, 3:30 - 5 pm ET
* Tue, Jun 29; 9 - 10 am ET, 11:30 - 5 pm ET

### Pilot: Please indicate a date before your sessions begin for piloting your research. 

* Monday, June 21; 10 - 11 am ET

### Which member of the design team will you pilot your research with?

  * Dillo Raju ([draju@governmentcio.com](draju@governmentcio.com))

## Team Roles

* Moderator: Kristen McConnell ([kristen.mcconnell@adhocteam.us](mailto:kristen.mcconnell@adhocteam.us))
* Research guide writing and task development (usually but not always same as moderator): Kristen McConnell
* Participant recruiting & screening: Perigean
* Project point of contact: Corey Parker ([jparker@governmentcio.com](mailto:jparker@governmentcio.com)) 
* Participant(s) for pilot test: Dillo Raju ([draju@governmentcio.com](draju@governmentcio.com))
* Note-takers: Perigean
* Observers: 
  * Corey Parker
  * Dillo Raju
  * Patrick Bateman ([Patrick.Bateman@va.gov](mailto:Patrick.Bateman@va.gov))
  * Mark Dewey ([mdewey@governmentcio.com](mdewey@governmentcio.com))
  * Stephen Barrs ([Stephen.Barrs@va.gov](Stephen.Barrs@va.gov))
  * Julia Snyder ([Julia.Snyder@va.gov](mailto:Julia.Snyder@va.gov))
  * Danielle Johnson ([Danielle.Johnson13@va.gov](mailto:Danielle.Johnson13@va.gov))

## Resources

* [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-outline.md)
* [Convo Guide Discussion guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/mvp-usability/conversation-guide.md)
* [Synthesis document](https://app.mural.co/t/vsa8243/m/vsa8243/1625079366895/f1363142396561f67e55f596ab3be49ccc343e0b?sender=uc940f53ad96ac0203d6d3631)
* [Research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/mvp-usability/research-findings.md)
