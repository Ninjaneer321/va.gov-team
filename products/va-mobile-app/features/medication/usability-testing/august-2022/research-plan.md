---
# Research Plan Metadata
title: "Research Plan for VA Mobile App Team, Pharmacy (Medication), August 2022"
date: 2022-08-17
last_updated: 2022-08-26
team: "VA Mobile App Team"
product: "VA Mobile App - Pharmacy Feature"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The VA Mobile App aims to make it easier and faster for users already engaged with the VA to complete small transactions. Following June 2022 usability testing, significant organizational changes were made to how pharmacy information is displayed. Need to validate that these changes are intuitive and still meet Veteran needs."
  product_location: "VA Mobile App - Pharmacy feature for managing prescriptions"
  user_familiarity: "Iteration - second round of usability testing after organizational changes"
  product_brief_url: "N/A"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Determine if users are able to navigate the IA, request prescription refills, and find prescriptions that they are looking for"
  - goal_2: "Identify major usability or content issues with the current designs"

research_questions:
  - "Are users able to easily find and access the refill modal?"
  - "Do users understand where requested refills go and where to find requested refills?"
  - "Are users able to successfully find prescriptions they're looking for?"
  - "Do users understand the tab structure and what items could be in the tabs?"

hypotheses:
  - "Veterans will be able to easily access the refill modal"
  - "Veterans will be able to navigate the IA, understand the tab structure, and what items could be in the tabs"

expected_outcomes: "Determine if there are any big usability concerns that Veterans experience with the designs. Inform if the currently implemented designs can be released to production or if additional refinements are needed."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "lean representative strategy for inclusive research"
  
  primary_criteria:
    - "Can join via a mobile device (tablet or phone)"
    - "Veterans with experience managing VA prescriptions using MHV or the Rx refill app"
    - "Managing prescriptions defined as: refilling, viewing history, tracking packages, or renewing VA prescriptions"
    
  secondary_criteria:
    - "8 participants 55-64+"
    - "8 participants with cognitive disabilities"
    - "4 participants from rural areas"
    - "4 participants without a degree"
    - "At least 4 participants that identify as women"
    - "At least 4 participants that identify as non-Caucasian"
    - "At least 2 participants that use assistive technology (amplified telephone, hearing aid, cochlear implant, cane, walker, guide animal, wheelchair, prosthetics)"
    
  screener_questions:
    - question: "Can you join via a mobile device (tablet or phone)?"
      qualifying_response: "Yes"
    - question: "Do you have experience managing VA prescriptions using MHV or the Rx refill app?"
      qualifying_response: "Yes"
    - question: "Have you refilled, viewed, tracked, or renewed a VA prescription?"
      qualifying_response: "Yes"
      
participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 12

# Timeline & Sessions
timeline:
  pilot_date: "2022-08-16"
  pilot_participant: "TBD"
  research_dates: "2022-08-17 to 2022-08-26"
  research_review_submission: "2022-08-10"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: "Expand mobile app transactions to include pharmacy management"
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results: "Provide consolidated pharmacy information in mobile app"
  - objective: "Logged-in users have a personalized experience, with relevant and time-saving features"
    key_results: "Enable quick prescription refill and tracking in mobile context"
  - objective: "Veterans and their families trust the security accuracy and relevancy of VA.gov"
    key_results: "Ensure accurate prescription information and secure transactions"
      
veteran_journey_phases:
  - "Starting Up: Attending to health needs"
  - "Taking Care of Myself: Managing primary care and chronic health issues"
  - "Taking Care of Myself: Recognizing and addressing mental health needs"
  - "Taking Care of Myself: Seeking support for an acute health event"
  - "Taking Care of Myself: Maintaining my health"
  - "Retiring: Taking care of my health"
  - "Aging: Managing my declining health"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "VA Mobile App Pharmacy Usability Testing June 2022"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/rx-refill/usability-testing/august-2022/conversation-guide.md"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: VA-mobile-app"
  - "MHV: Pharmacy"
  - "usability-testing"
  - "remote"
  - "mobile"
  - "HDW: Smartphone"
  - "HDW: Tablet"
  - "prescriptions"
  - "medication-management"
  - "refills"
  - "accessibility"
  - "information-architecture"
  - "navigation"
---

# Research Plan for VA Mobile Team, Pharmacy, 08/2022

## Background 

The VA Mobile App aims to make it easier and faster for users already engaged with the VA to complete small transactions related to their existing account. In June of 2022, we completed a round of usability testing on the first version of the pharmacy feature in the Mobile App. This was done in an effort to expand the number of transactions that can be accomplished in the app and meet Veteran needs. Output from the research resulted in significant organizational changes to how pharmacy information is displayed. We will be conducting a second round of usability testing to ensure that the organizational changes are intuitive and design still meet Veteran needs. 

## OCTO Objectives

This work supports the following objectives:

<table>
  <tr>
   <td><strong>OBJECTIVE</strong>
   </td>
   <td><strong>OBJECTIVE DESCRIPTIONS</strong>
   </td>
  </tr>
  <tr>
   <td>Objective 2
   </td>
   <td>Veterans can manage their health services online
   </td>
  </tr>
  <tr>
   <td>Objective 5
   </td>
   <td>Veterans and their families can find a single, authoritative source of information
   </td>
  </tr>
  <tr>
   <td>Objective 6
   </td>
   <td>Logged-in users have a personalized experience, with relevant and time-saving features
   </td>
  </tr>
  <tr>
   <td>Objective 7
   </td>
   <td>Veterans and their families trust the security accuracy and relevancy of VA.gov
   </td>
  </tr>
</table>


### Measures to increase

* Usage of digital, self-service tools
* Completion rate of online transactions
* Veteran satisfaction with VA.gov

### Measures to decrease

* Call center volume, wait time, and time to resolution
* Time from online benefit discovery to benefit delivery
* Time to successfully complete and submit online transactions


### Veteran Journey

[Veteran Journey Map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<table>
  <tr>
   <td><strong>PHASE</strong>
   </td>
   <td><strong>LIFE STAGE</strong>
   </td>
   <td><strong>MOMENT</strong>
   </td>
  </tr>
  <tr>
   <td>Phase 1: Serving and Separating from the Military
   </td>
   <td>Starting Up
   </td>
   <td>Attending to health needs
   </td>
  </tr>
  <tr>
   <td>Phase 2: Living Civilian Life
   </td>
   <td>Taking care of myself
   </td>
   <td>1. Recognizing and addressing   
<p>
   mental health needs 
<p>
2. Managing primary care and 
<p>
    chronic health issues 
<p>
3. Seeking support for an 
<p>
    acute health event
<p>
4. Maintaining my health
   </td>
  </tr>
  <tr>
   <td>Phase 3: Retiring and Aging
   </td>
   <td>1. Retiring
<p>
2. Aging
   </td>
   <td>1. Taking care of my health
<p>
2. Managing my declining  
<p>
    health
   </td>
  </tr>
</table>


## Research Goals

The goals of this research are to:

1. Determine if users are able to navigate the IA, request prescription refills, and find prescriptions that they are looking for 
2. Identify major usability or content issues with the current designs

### Outcome

The results of this research will help us:

* Determine if there are any big usability concerns that Veterans experience with the designs
* Inform if the currently implemented designs can be released to production or if additional refinements are needed

### Research Questions

This research will help us answer:

* Are users able to easily find and access the refill modal?
* Do users understand where requested refills go and where to find requested refills?
* Are users able to successfully find prescriptions they’re looking for?
* Do users understand the tab structure and what items could be in the tabs?

### Hypothesis

* Veterans will be able to easily access the refill modal
* Veterans will be able to navigate the IA, understand the tab structure, and what items could be in the tabs


## Method 

We will be conducting a remote moderated usability study with Veterans using a high fidelity Figma prototype. 

### Location

This research will be remote via Zoom.

### Resource Materials

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/rx-refill/usability-testing/august-2022/conversation-guide.md)

[Figma prototype](https://www.figma.com/proto/706bVo6U037GZ2TrgkL1Un/Rx-Refill-Research-Prototype?page-id=0%3A1&node-id=2%3A599&viewport=528%2C350%2C0.08&scaling=min-zoom&starting-point-node-id=2%3A599)

### Project-Specific Setup

1. Participant's should have the Zoom application downloaded on their mobile device (tablet or phone) 
    1. [Apple App Store Zoom app](https://itunes.apple.com/us/app/id546505307)
    2. [Google Play store link to the Zoom app](https://play.google.com/store/apps/details?id=us.zoom.videomeetings)
2. A link to the prototype
   * [Figma prototype](https://www.figma.com/proto/706bVo6U037GZ2TrgkL1Un/Rx-Refill-Research-Prototype?page-id=0%3A1&node-id=2%3A599&viewport=528%2C350%2C0.08&scaling=min-zoom&starting-point-node-id=2%3A599)


## Recruitment 

### Recruitment Approach

The intended audience for this research are Veterans who refill prescriptions at the VA. We will be recruiting participants through Perigean. 

We aim to be inclusive in our research and will be using the lean representative strategy to recruit participants.

[Recruitment Checker Table](https://docs.google.com/spreadsheets/d/18mEEvittUHKxFAxmvfIQgU01Y0wiTDYmAbiE-rgneCU/edit#gid=632024334)

### Recruitment Criteria 

We want to recruit 15 Veterans for the expected completion of 10-12 studies.  

#### Participant Criteria:

* Can join via a mobile device (tablet or phone) 
* Veterans with experience managing VA prescriptions using MHV or the Rx refill app
    * Managing prescriptions is defined as:
        * Refilling a VA prescription
        * Viewing VA prescription history
        * Tracking a VA prescription package
        * Renewing a VA prescription
* For inclusivity, include:
  * 8 participants 55-64+
  * 8 participants with cognitive disabilities 
  * 4 participants from rural areas
  * 4 participants without a degree
  * At least 4 participants that identify as women
  * At least 4 participants that identity as non-Caucasian
  * At least 2 participants that use assistive technology
    * Due to tool constraints, we can ONLY accommodate users who use: amplified telephone, hearing aid, cochlear implant, cane, walker, guide animal, or other walking aid, wheelchair, prosthetics
    * Do NOT recruit for users who use: high contrast mode, font resizing/larger, speech input text, screen readers, sighted keyboards, switch devices, or braille readers 


## Timeline 

### Prepare

Pilot participant email: [TBD]

Date and time of pilot session: [TBD]

### Research Sessions

We plan to run sessions from August 17th - August 26th, 2022

### Length of Sessions

1-hour sessions with 30-minute breaks between sessions and no more than 4 sessions per day. 

### Availability

Moderator is on Pacific Time, please schedule after 11 am ET to accommodate.

<table>
  <tr>
   <td><strong>SESSION DATE</strong>
   </td>
   <td><strong>AVAILABILITY </strong>
   </td>
  </tr>
  <tr>
   <td>8/17/22
   </td>
   <td>11am-3:30pm ET
<p>
5pm-7pm ET
   </td>
  </tr>
  <tr>
   <td>8/18/22
   </td>
   <td>11am-12pm ET
<p>
3pm-7pm ET
   </td>
  </tr>
  <tr>
   <td>8/19/22
   </td>
   <td>12pm-6pm ET
   </td>
  </tr>
  <tr>
   <td>8/22/22
   </td>
   <td>12pm-7pm ET
   </td>
  </tr>
  <tr>
   <td>8/23/22
   </td>
   <td>11am-12pm ET
<p>
2:30pm-7pm ET
   </td>
  </tr>
  <tr>
   <td>8/24/22 (if needed)
   </td>
   <td>12pm-7pm ET
   </td>
  </tr>
  <tr>
   <td>8/25/22 (if needed)
   </td>
   <td>11am-12pm ET
<p>
2:30pm-7pm ET
   </td>
  </tr>
  <tr>
   <td>8/26/22 (if needed)
   </td>
   <td>12pm-6pm ET
   </td>
  </tr>
</table>


## Team Roles

### Moderator

Esther Kitavi - esther@digitalfoundry.com

### Research guide writing and task development

Esther Kitavi - esther@digitalfoundry.com

### Participant recruiting & screening

Perigean

### Project point of contact

Chris Johnston - christopher.johnston2@va.gov

### Participant(s) for pilot test

[TBD]

### Note-takers

Perigean

### Observers

* Alex Taylor - alex@adhocteam.us
* Brenda Rocha - brenda@digitalfoundry.com
