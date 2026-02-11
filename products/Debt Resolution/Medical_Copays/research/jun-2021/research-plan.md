---
# Research Plan Metadata
title: "Research Plan for Debt Resolution Team, Medical Copayments Usability, June 2021"
date: 2021-06-21
last_updated: 2026-02-10
team: "Debt Resolution Team"
product: "Medical Copayments Tool"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans need access to their VA medical copay bills (Veteran Patient Statements) on VA.gov. Currently they can only access the last 6 months through AccessVA or MyHealtheVet, and Veterans expect all money owed to VA to be in a central location. The MVP is being scaled back to be a standalone tool similar to the existing Debt Portal."
  product_location: "VA.gov authenticated experience - standalone medical copayments tool"
  user_familiarity: "Iteration - testing scaled-back MVP after previous research"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/apr-2021/readout.md"

# Research Design
methodology: "Usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Test lower-fidelity mobile-view prototype to gauge how well Veterans use the tool on mobile devices"
  - goal_2: "Validate design assumptions and uncover gaps in the medical copayments MVP"
  - goal_3: "Understand if Veterans can find relevant information about their bills and resolution options"

research_questions:
  - "Is the online tool card effective at communicating the tool and its use to the Veteran?"
  - "Do Veterans understand the concept of a referred charge and what to do about it?"
  - "Do Veterans understand how their charges and payments contribute to a balance for each facility?"
  - "How do Veterans expect to be able to interact with the charges and payments table, if at all?"
  - "Are the charge details included in the table relevant and complete?"
  - "Do Veterans understand how to view and resolve their bills?"
  - "Are Veterans able to find all of the relevant information they need about their debt?"
  - "Do Veterans understand their options for resolving their bills?"
  - "Do Veterans understand who to call if they have questions?"
  - "What do Veterans think about the wizard as a means to find resolution?"

hypotheses:
  - "Veterans will find and understand the tool available on the content page"
  - "Veterans may not fully understand the referred charges and may want to know more about which charges had been referred and what it means for them"
  - "Veterans may like seeing their charges separated by facility"
  - "Veterans may be confused why they can't pay their charges for all their facilities at once"
  - "Veterans may miss the simpler link for viewing their balance details, then be confused why the wizard doesn't show more information about their balance"
  - "Veterans will be able to find the information they need about their bill balances"
  - "Veterans will be able to find and understand their options, but Veterans may be frustrated with the wizard"

expected_outcomes: "Validate design hypotheses and identify gaps to improve the Medical Copayments MVP before launch"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment for mobile device users with VA health care experience"
  
  primary_criteria:
    - "Must use VA health care (disqualify those that don't)"
    - "Must visit VA.gov using their mobile devices"
    - "Must be able to join Zoom call from mobile devices (app required)"
    - "Must have Android or iPhone (not other devices)"
    - "Must be comfortable discussing past experiences with VA Health Care copayments"
    
  secondary_criteria:
    - "At least 1 woman"
    - "At least 1 person of color"
    - "At least 1 participant 35 or under and 1 participant over 55"
    - "At least one person without college degree"
    - "At least one person with no college experience"
    - "At least one person in rural or remote area"
    - "At least one person in major metropolitan area"
    - "At least one participant with cognitive impairments/functional disabilities (TBI, PTSD, ADHD, autism, vertigo, etc.)"
    - "At least one non-native English speaker"
    
  screener_questions:
    - question: "Which of the following describes you?"
      qualifying_response: "I use VA health care (copays or no copays)"
    - question: "What kind of mobile device do you use?"
      qualifying_response: "Android or iPhone"
    - question: "Are you comfortable joining the research session from your phone using the Zoom app?"
      qualifying_response: "Yes"
      
participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-06-25"
  pilot_participant: "Linda Li"
  research_dates: "2021-07-01 to 2021-07-08"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: "Provide access to medical copay information and payment options"
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results: "Consolidate debt and copayment information in one location"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Managing primary care and chronic health issues"
  - "Managing my declining health"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/apr-2021/readout.md"
    
tags:
  - "AUD: Veterans"
  - "PRDT: Medical Copays"
  - "PRDT: Debt Portal"
  - "BNFT: Healthcare"
  - "HDW: Mobile"
  - "HDW: Smartphone"
  - "usability-testing"
  - "remote-research"
  - "mobile-research"
  - "authenticated-experience"
  - "payment"
  - "debt-resolution"
  - "financial-management"
---

# 

# Research Plan for Debt Resolution Team, Medical Copayments Usability

As a designer I need to create a research plan to share with my team.

## Goals

### What product & team are you doing this research for?:

Debt Resolution Team's Medical Copays

### Background: 

Our team is working to bring VA medical copay bills (Veteran Patient Statements) to VA.gov. Currently, Veterans are able to access the last 6 months of their statements through AccessVA directly or by MyHealtheVet link to AccessVA. In our previous research study ([readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/apr-2021/readout.md#debt-portal-copayment-enhancement-veteran-research-readout)), we learned that Veterans do generally expect all money owed to the VA to be found in a central location. Due to the authenticated experience team not being ready to accommodate a more expansive "financial hub" as initially proposed, we are scaling the Copayments MVP back to be a standalone tool very similar to the existing benefits [Debt Portal tool](https://staging.va.gov/manage-va-debt/).  

With this round of research, we are looking to test a lower-fidelity mobile-view prototype of the Copayments MVP to gauge how well Veterans use the tool on mobile devices.

### Research questions: 

What question(s) do you hope to be able to answer after completing this research?

* Is the online tool card effective at communicating the tool and its use to the Veteran?
* Do Veterans understand the concept of a referred charge and what to do about it?
* Do Veterans understand how their charges and payments contribute to a balance for each facility?
* How do Veterans expect to be able to interact with the charges and payments table, if at all?
* Are the charge details included in the table relevant and complete?
* Do Veterans understand how to view and resolve their bills?
* Are Veterans able to find all of the relevant information they need about their debt?
* Do Veterans understand their options for resolving their bills?
* Do Veterans understand who to call if they have questions?
* What do Veterans think about the wizard as a means to find resolution?

### Hypotheses: 

* Veterans will find and understand the tool available on the content page
* Veterans may not fully understand the referred charges and may want to know more about which charges had been referred and what it means for them
* Veterans may like seeing their charges separated by facility
* Veterans may be confused why they can't pay their charges for all their facilities at once
* Veterans may miss the simpler link for viewing their balance details, then be confused why the wizard doesn't show more information about their balance
* Veterans will be able to find the information they need about their bill balances
* Veterans will be able to find and understand their options, but Veterans may be frustrated with the wizard

## Method

### What method of research are you planning?

Remote, moderated sessions conducted on Zoom

* Usability testing with a UXPin prototype designed for mobile

#### Why this method? How does this methodology help you answer your research questions?

* Usability testing will help us validate both our research hypotheses and design assumptions as well as uncover additional gaps

#### Where are you planning to do your research? 

Online, through Zoom

#### What will you be testing? 

[UXPin Prototype](https://preview.uxpin.com/361636c369f65453b4880d1445911c4d9b869349#/pages/139878811/simulate/no-panels?mode=i)

## Participants and Recruitment

### Participant criteria: 

What are you looking for in a participant?

#### Primary criteria / Must have:

* 15 participants (for a minimum of 8 completed sessions)
  * Participants must use VA health care (disqualify those that don't)
  * Participants must be people who visit VA.gov using their mobile devices
  * Participants must be able to join our Zoom call from their mobile devices (app required)
  * Up to 8 participants that receive VA health care copays
  * Up to 7 that do not receive VA health care copays
    1. Up to 4 with a disability rating of 50% or higher
    2. Up to 4 with secondary insurance that covers copayment
    3. Any that have asked for financial assistance
* Participants must be comfortable with discussing their past experiences with VA Health Care copayments
* Please screen participants based on these questions:
  * Which of the following describes you?
    1. I use VA health care and receive copays (Qualify 8 participants)
    2. I use VA health care and do not receive copays (proceed to next question)
    3. I do not use VA health care (Disqualify)
  * Why do you not receive copayment charges? (Qualify 7 total)
    1. My disability rating is 50% or higher (Qualify up to 4)
    2. My secondary insurance covers my copayment (Qualify up to 4)
    3. I asked for financial assistance (Qualify if available)
    4. None of the above (Qualify if available)
  * What kind of mobile (or tablet, if applicable) device do you use?
    1. Android
    2. iPhone
    3. Other (disqualify - too many variables for our prototypes)
  * Are you comfortable with joining the research session from your phone using the Zoom app?
    1. Yes (qualify)
    2. No (disqualify)
* Please confirm participants have Zoom downloaded prior to the session and they know how to screen share

#### Secondary criteria / Would like to have

* At least 1 woman
* At least 1 person of color
* At least 1 participant 35 or under and 1 participant over 55
* At least one person that does not have a college degree (to include enlisted Service Members)
* At least one person that has no college experience 
* At least one person who lives in a rural or remote area
* At least one person who lives in a major metropolitan area
* At least one participant who t has identified cognitive impairments and/or functional disabilities. Examples of diagnoses that may align with this would be Traumatic Brain Injury (TBI), Post-Traumatic Stress Disorder (PTSD), Attention-Deficit/Hyperactivity Disorder (ADHD), autism, and vertigo. Other conditions may be aphasia, dyslexia, dyscalculia, distractibility, memory loss, reading difficulties, low tolerance for cognitive overload, and intellectual/adaptive functioning challenges such as learning and problem-solving.
* At least one non-native English speaker

## When?

### Timeline: What dates do you plan to do research? 

* July 1 - 8

### When will the thing you are testing be ready?

June 21

### Length of Sessions: How long do you estimate each session will be? 

* Up to 1 hour, 30 minute buffer between sessions

### Availability: If applicable, when would you like sessions scheduled? 

* Thurs, July 1; 9:30am - 4:30pm EST
* Fri, July 2; 9:30am - 4:30pm ET
* Tues, July 6; 9:30am - 4:30pm EST
* Wed, July 7; 9:30am - 4:30pm EST
* Thurs, July 8; 9:30am - 4:30pm EST

### Pilot: Please indicate a date before your sessions begin for piloting your research. 

* Friday, June 25; 12:30 PM - 1:30 PM EST

### Which member of the design team will you pilot your research with?

* Linda Li ([lli@governmentcio.com](mailto:lli@governmentcio.com))

## Team Roles

* Moderator: Riley Orr ([riley@amida.com](mailto:riley@amida.com)) & Rebecca Walsh ([rebecca.walsh@adhocteam.us](mailto:rebecca.walsh@adhocteam.us)) 
* Research guide writing and task development: Riley Orr & Rebecca Walsh
* Participant recruiting & screening: Perigean
* Project point of contact: Linda Li and Leah Keeler ([lkeeler@governmentcio.com](mailto:lkeeler@governmentcio.com)) 
* Participant(s) for pilot test: Linda Li 
* Note-takers: Riley Orr & Rebecca Walsh
* Observers: 
  * Leah Keeler
  * Craig Wheeler ([cwheeler@governmentcio.com](mailto:cwheeler@governmentcio.com)) 
  * Linda Li 
  * Kevin Mircovich ([kmircovich@governmentcio.com](mailto:kmircovich@governmentcio.com)) 
  * Matt Self ([matthew.self2@va.gov](mailto:matthew.self2@va.gov)) 
  * Justin Linn ([jlinn@governmentcio.com](mailto:jlinn@governmentcio.com))
  * Troy Riser ([triser@governmentcio.com](mailto:triser@governmentcio.com)) 

## Resources

* Project Brief: Project brief should live in the appropriate va.gov-team product folder, simply paste a link to it here
* [Convo Guide Discussion guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/jun-2021/conversation-guide.md)
* Synthesis Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)
* Lessons Learned: Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.
* Read-Out/Results
  * Read-out presentation should live in the appropriate product repo and folder; paste a link to it here.\*\* Don't forget to add a link to your research folder to the research tracker! [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)
