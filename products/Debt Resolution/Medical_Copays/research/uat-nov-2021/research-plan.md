---
# Research Plan Metadata
title: "Research Plan for Medical Copay Tool MVP UAT, November 2021"
date: 2021-11-03
last_updated: 2026-02-10
team: "Debt Resolution Team"
product: "Medical Copay Tool (MVP)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The Medical Copay Tool is the next product to move towards unifying Veteran VA debt into a modern, consolidated experience. The MVP displays a list of Veteran's balance(s) at each VA health care facility, with access to monthly statements (PDF) and information about paying or requesting financial help."
  product_location: "VA.gov authenticated experience - Medical Copay Tool"
  user_familiarity: "New product launch - UAT for MVP"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/Product_Outline_Medical_Copays.md"

# Research Design
methodology: "User Acceptance Testing (UAT)"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate Medical Copay Tool functionality works as expected in production before launch"
  - goal_2: "Test with real users since pre-prod environment testing is not available"
  - goal_3: "Identify unexpected bugs or issues with production implementation"

research_questions:
  - "Does the 'Your current copay balances' page load the Veteran's list of facilities visited in the past 2 years with corresponding balances?"
  - "Does the empty state load when it should?"
  - "Are unauthenticated users redirected to the content page?"
  - "Does the correct number of facilities on the Veteran's record load?"
  - "Is facility data correctly displayed (facility name, location, balance amount, date to pay)?"
  - "Do facilities with $0 copay balance load correctly?"
  - "Does the contact information for facilities load?"
  - "Does the 'Updated on' date match the most recent statement?"
  - "Does the correct number of statements load with correct dates?"
  - "Is the correct account number displayed under payment accordions?"
  - "Does the statement download functionality work?"
  - "Does the downloaded statement match the corresponding data on detail page?"

hypotheses:
  - "The Medical Copay Tool's functionality will work as expected, but we may discover unexpected bugs"

expected_outcomes: "Validate production functionality and identify any bugs before full launch to all Veterans"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment for varied VA health care enrollment and copay statement scenarios"
  
  primary_criteria:
    - "2 participants not enrolled in VA health care"
    - "8 participants enrolled in VA health care with varying copay scenarios"
    - "All participants must be LOA3 (identity verified) on VA.gov"
    - "All must be comfortable providing last four of SSN for verification"
    - "All must be comfortable providing email address used to sign into VA.gov (2-3 days before study)"
    - "Must be able to screenshare via Zoom"
    
  secondary_criteria:
    - "At least one person who uses assistive technology (AT) such as specialized keyboards"
    
  screener_questions:
    - question: "Are you enrolled in VA health care?"
      qualifying_response: "Mix of yes and no responses"
    - question: "Have you received a VA copay statement since October 1st, 2021?"
      qualifying_response: "Mix of responses for different scenarios"
    - question: "Can you confirm you are LOA3 (identity verified) on VA.gov?"
      qualifying_response: "Yes - can access VA.gov profile without being prompted to verify identity"
      
participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-12-03"
  pilot_participant: "Craig Wheeler"
  research_dates: "2021-12-07 to 2021-12-10"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 30
  buffer_minutes: 15
  max_sessions_per_day: 6
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: "Launch Medical Copay Tool to provide access to copay balances and statements"
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results: "Consolidate debt and copayment information in modern, unified experience"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Managing primary care and chronic health issues"
  - "Managing my declining health"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/jun-2021/research-plan.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/apr-2021/research-plan.md"
    
tags:
  - "AUD: Veterans"
  - "PRDT: Medical Copays"
  - "PRDT: Debt Portal"
  - "BNFT: Healthcare"
  - "UAT"
  - "user-acceptance-testing"
  - "remote-research"
  - "authenticated-experience"
  - "payment"
  - "debt-resolution"
  - "financial-management"
  - "pre-launch"
---

# MCP's MVP UAT Research Plan

November 2021 

## Goals

### What product & team are you doing this research for?

This UAT will be conducted by the Debt Resolution teamfor the Medical Copay Tool (MVP)

### Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?

The Medical Copay Tool is the next product to move towards the goal of unifying Veteran VA debt into a modern, consolidated experience similar to what a consumer may experience with products such as Quicken Loans or Chase portals.

The MVP will display a list of the Veteran's balance(s) at each of their VA health care facility(s).Veterans will be able to access and download each facility's monthly statement (PDF) and learn more about either paying their balance or requesting financial help.

### Research questions: What question(s) do you hope to be able to answer after completing this research?

#### General

* Does the 'Your current copay balances' page load the Veteran's list of facilities visited in the past 2 years and their corresponding balances, including those with $0 balances?
* Does the 'Your current copay balances' page load the empty state when it should?
* If a user is unauthenticated and accesses the tool itself, are they redirected to the content page? Can a user access the tool through the content page?

#### Your current debts

* Does the correct number of facilities on the Veteran's record load?
* Is the following data correctly displayed for each balance:
   * Facility name and location
   * Balance amount
   * Date to pay balance or request financial help
* Does the empty state load if the Veteran doesn't have a history of copay balances?
* Do facilities with a $0 copay balance load?
   * If the Veteran has received statements within the past 2 years, are they able to navigate to the details page?
   * If the Veteran hasn't received statements within the past 2 years, does the card omit the link to view the details page?
* Does the contact information for the Veteran's facility(s) load?

#### Your copay balance details

* Does the 'Updated on \[date\]' match the most recent statement?
* Does the blue status card contain the correct information:
   * Balance amount
   * Date to pay balance or request financial help
* Does the correct number of statements on the Veteran's record load? 
* Does the correct date load for each statement?
* Is the correct account number displayed under all 4 'How do I pay my VA copay bill?' accordions?
* Does the contact information for the facility load?
* Does the statement download functionality work?
* Does the downloaded statement match the corresponding data on the detail page?

### Hypothesis: What is your hypothesis for this research?

* The Medical Copay Tool's functionality will work as expected, but we may discover unexpected bugs.

### Method

#### What method of research are you planning?

* Moderated UAT

#### Why this method? How does this methodology help you answer your research questions?

* We are unable to test the functionality using a pre-prod environment, so we need to validate with real users prior to launch.

#### Where are you planning to do your research?

* Zoom

#### What will you be testing?

* We will be testing the Medical Copay Tool (Link TBD)

### Participants and Recruitment

#### Primary criteria / Must have: 

We would like **10** total participants.

* 2 participants who are not enrolled in VA health care 
* 8 participants who are enrolled in VA health care: 
   * 3 participants who haven't received a VA copay statement within the past 2 years
   * 5 participants who have received a VA copay statement since October 1st, 2021
      * 3 participants who have been to more than one VA health care facility within the past 2 years

* **All participants must be LOA3 (identity verified) on VA.gov.** Participants will likely not know what this means, so please confirm this prior to testing. This can be confirmed by having users sign into VA.gov and having them go to the VA.gov profile. If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. If they can see the profile, they are LOA3 and can participate in testing.
* All participants must be comfortable providing the last four numbers of their SSN. This information, in addition to their full name, will be sent to the Veterans Health Administration (VHA) so the participant's medical copay information shown within the tool can be verified with the participant's record.
* **All participants must be comfortable providing the email address they use to sign into VA.gov. We need this information 2-3 days before the study begins in order to give participants access to the tool in production.**
* Be able to screenshare via Zoom. Please confirm with them that they have Zoom downloaded prior to the session and they know how to screenshare. If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.

#### Secondary criteria / Nice to have:

* At least one person who uses assistive technology (AT) such as specialized keyboards

#### What is your recruitment strategy?

We will work with Perigean to recruit for this study.

### When?

#### Timeline: What dates do you plan to do research?

December 7th-10th 

#### Prepare: When will the thing you are testing be ready?

The Medical Copay Tool will be live on production behind a feature flag December 3rd.

#### Length of Sessions: How long do you estimate each session will be?

We expect sessions to only be 15-30 minutes. Please schedule sessions for 30 minutes with a 15-minute buffer between sessions.

#### Availability: If applicable, when would you like sessions scheduled?

* December 7: 10:00 a.m. -- 4:00 p.m. EST
* December 8: 10:00 a.m. -- 4:00 p.m. EST
* December 9: 10:00 a.m. -- 4:00 p.m. EST
* December 10: 10:00 a.m. -- 4:00 p.m. EST

#### Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?

* Craig Wheeler, December 3rd, 11:00 a.m. - 11:30 a.m. EST

### Team Roles

Please list the people who will be serving in each role.

* Moderator: Riley Orr
* Research guide writing and task development: Riley Orr
* Participant recruiting & screening: Perigean
* Project point of contact: Riley Orr, Rebecca Walsh, Denisa Coveyduc, or Leah Keeler
* Participant(s) for pilot test: Craig Wheeler

* Note-takers: TBD
* Observers: Rebecca Walsh, Leah Keeler, Matthew Self, Craig Wheeler, Justin Linn, Scott James, 1 VHA personnel (TBD)

List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work

* Riley Orr ([riley@amida.com](mailto:riley@amida.com))
* Rebecca Walsh ([rebecca.walsh@adhocteam.us](mailto:rebecca.walsh@adhocteam.us)) 

* Leah Keeler ([leah.keeler@gcio.com](mailto:leah.keeler@gcio.com)) 
* Denise Coveyduc ([denise.coveyduc@gcio.com](mailto:denise.coveyduc@gcio.com)) 
* Matthew Self ([matthew.self2@va.gov](mailto:matthew.self2@va.gov)) 
* Craig Wheeler ([craig.wheeler@gcio.com](mailto:craig.wheeler@gcio.com)) 
* Justin Linn ([Justin.Linn@gcio.com](mailto:Justin.Linn@gcio.com)) 

* Scott James ([scott.james@gcio.com](mailto:scott.james@gcio.com)) 
* VHA Personnel TBD

### Resources

* [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/Product_Outline_Medical_Copays.md)
* [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/research/uat-nov-2021/conversation-guide.md)
* Notes (TBD)
