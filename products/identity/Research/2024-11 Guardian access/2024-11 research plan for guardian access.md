---
# Research Plan Metadata
title: "Research Plan for Identity Experience, guardian access - combined plan"
date: 2024-11-01
last_updated: 2024-11-01
team: "Identity Experience"
product: "Guardian Access and Delegate Management"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Court Appointed Guardians are legally designated individuals responsible for managing care or personal affairs of Veterans who are unable to do so due to incapacity or disability. Need to enable guardian access to VA services on behalf of Veterans with both short-term and long-term solutions."
  product_location: "VA.gov - Guardian/Delegate access system and audit logs"
  user_familiarity: "New product to enable guardian access to Veterans' VA accounts and services"
  product_brief_url: "https://docs.google.com/document/d/123ZPnTLfpjIOn3nFoOeMW5LGo5c7nKUA_HEF6m6dOqo/edit?tab=t.0#heading=h.z7tap4bgvhyp"

# Research Design
methodology: "Semi-structured interviews with two cohorts"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Discover how delegates access VA.gov on behalf of Veterans"
  - goal_2: "Specifically interested in court appointed guardians user group, their needs and hurdles"
  - goal_3: "Explore how folks might be interested in interacting with audit logs"
  - goal_4: "Answer questions about and verify understanding of the complete user journey"

research_questions:
  - "How do guardians get connected to a Veteran through the VA after being court appointed?"
  - "How do guardians learn about how to sign into a Veteran's account whom they are guardian over?"
  - "What is the VA process for deregistering or offboarding as a guardian for a Veteran?"
  - "What are delegate users' needs and expectations around audit logs?"

hypotheses:
  - "H1: After being appointed by a court, a guardian must file paperwork with the VA in order to act on behalf of a Veteran for VA business"
  - "H2: Someone at the VA explains to a new guardian the process of how to interact with the VA to conduct business on behalf of a Veteran"
  - "H3: Guardians with new guardianship over a Veteran without an MHV account are being told they aren't eligible to access benefits online for the Veteran they're responsible for"

expected_outcomes: "Learn about the process of how guardians gain access to Veteran's VA account and information. The focus is anything from the point of being appointed by a court through acting on behalf of a Veteran for VA business and through no longer being a guardian for a Veteran."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Self-recruitment for VA employees, Perigean for guardians"
  approach: "Two cohorts - VA employees who help establish guardian access, and court-appointed guardians"
  
  primary_criteria:
    - "Cohort 1: Must be VA employee in position where they help guardians working on behalf of Veterans"
    - "Cohort 2: Must be some type of Guardian or caregiver in charge of Veterans health and/or financials"
    - "Preference to court appointed guardians"
    - "Must have computer or mobile phone and willing to complete sessions on device"
    - "Must be willing to share web browser window on Zoom"
    - "Must have working microphone and Zoom downloaded"
    
  secondary_criteria:
    - "Limited cohort sizes expected - not specifically targeting underrepresented groups"
    
  screener_questions:
    - question: "Cohort 1: Do you ever help court appointed guardians gain access to a Veteran's VA account?"
      qualifying_response: "Yes"
    - question: "Cohort 2: Have you been legally appointed as a guardian over a Veteran's health or financials?"
      qualifying_response: "Yes or No (also asking if they manage/help Veteran manage health or finances)"
      
participants:
  veterans: 0
  caregivers: 6
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 9
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "Cohort 1: Early December 2024, Cohort 2: Mid to late January 2025"
  research_review_submission: "2024-11-20"
  
session_details:
  duration_minutes: 30
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Create a smooth transition for Veterans from legacy to modern sign-in credentials"
    key_results: 
      - "Enable guardian access as part of improved sign-in experience"
  - objective: "Improve the Veteran sign-in experience"
    key_results:
      - "Enable delegate access to VA services on behalf of Veterans"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://dsva.slack.com/archives/C04MM3WJN1E/p1731011590686949 - account/audit history design images"
    
tags:
  - "identity"
  - "guardian-access"
  - "delegate-access"
  - "caregivers"
  - "court-appointed-guardian"
  - "audit-logs"
  - "account-access"
  - "authentication"
  - "semi-structured-interviews"
  - "generative-research"
  - "remote"
  - "moderated"
  - "VA-employees"
  - "guardians"
  - "two-cohorts"
---

# **Research Plan for Identity Experience, guardian access \- combined plan**

## **Background**

Court Appointed Guardians are legally designated individuals responsible for managing the care or personal affairs of Veterans who are unable to do so for themselves due to incapacity or disability. We are looking at both short-term and long-term solutions to enable guardian access to VA services on behalf of Veterans

* [product info](https://docs.google.com/document/d/123ZPnTLfpjIOn3nFoOeMW5LGo5c7nKUA_HEF6m6dOqo/edit?tab=t.0#heading=h.z7tap4bgvhyp)

### **OCTO Identity Crew Objectives**

* Objective 1: Create a smooth transition for Veterans from legacy to modern sign-in credentials  
* Objective 2: Improve the Veteran sign-in experience.

### **Veteran Journey**

Securely accessing VA online services on behalf of a Veteran that isn’t oneself can happen at any stage in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf). But may be most likely to initiate in “starting up,” “taking care of myself,” and “aging.” The updated Sign-in page and modal will apply to everyone who signs into VA online and uses the authenticated experience.

## **Research Goals**

* Discover how delegates access VA.gov on behalf of Veterans  
  * Specifically interested in court appointed guardians user group, their needs and hurdles  
* Explore how folks might be interested in interacting with audit logs  
* Answer questions about and otherwise verify our understanding of the complete user journey

**Outcome**  
Learn about the process of how guardians gain access to Veteran’s VA account and information. The focus is anything from the point of being appointed by a court through acting on behalf of a Veteran for VA business and though no longer being a guardian for a Veteran

### **Research questions**

- How do guardians get connected to a Veteran through the VA after being court appointed?  
- How do guardians learn about how to sign into a Veteran’s account whom they are guardian over?  
- What is the VA process for deregistering or offboarding as a guardian for a Veteran?  
- What are delegate users’ needs and expectations around audit logs?

### **Hypotheses**

- H1: After being appointed by a court, a guardian must file paperwork with the VA in order to act on behalf of a Veteran for VA business  
- H2: Someone at the VA explains to a new guardian the process of how to interact with the VA to conduct business on behalf of a Veteran  
- H3: Guardians with new guardianship over a Veteran without an MHV account are being told they aren’t eligible to access benefits online for the Veteran they’re responsible for.

## **Methodology**

Interview VA personnel who help establish guardian access

Interview guardians who have or have had guardian access over a Veteran

### **Research materials**

- Conversation guide  
- If using a Figma design for [account/audit history look to these images](https://dsva.slack.com/archives/C04MM3WJN1E/p1731011590686949)

## **Recruitment**

### **Recruitment approach**

We will have 2 cohorts for this remote, moderated study. We will self-recruit a cohort of VA employees, cohort 1\. We will use Perigean to recruit a cohort of guardians, cohort 2\.

We assume that these cohorts will be limited in size, so we will not specifically target underrepresented groups in this study.

### **Recruitment criteria**

#### **Cohort 1: 4 VA employees for at least 4 completed sessions**

Primary criteria (must-haves)

All participants:

* Must have a computer or mobile phone and be willing to complete their sessions on this device  
* Must be willing to share a web browser window on the Zoom call  
* Must have a working microphone  
* Must have Zoom downloaded to their computer or phone prior to the session and know how to share their screen

In addition our primary product criteria includes:

* Must be a VA employee  
* Must be in a position where they help guardians who are working on behalf of Veterans

#### **Cohort 2: 6 guardians for at least 5 completed sessions**

Primary criteria (must-haves)

All participants:

* Must have a computer or mobile phone and be willing to complete their sessions on this device  
* Must be willing to share a web browser window on the Zoom call  
* Must have a working microphone  
* Must have Zoom downloaded to their computer or phone prior to the session and know how to share their screen

In addition our primary product criteria includes:

* Must be some type of Guardian or caregiver in charge of a Veterans health and/or financials  
* Preference to Court appointed guardians

### **Screener questions**

Cohort 1 screener questions:

1. Do you ever help court appointed guardians gain access to a Veteran’s VA account?

Cohort 2 screener questions:

1. Have you been legally appointed as a guardian over a Veteran’s health or financials?  
2. Do you manage or help a Veteran manage their health or finances?

## **Timeline**

Planned timeline

Cohort 1  
Recruiting: late Nov  
Sessions: early Dec  
Synthesis: mid to late Dec

Cohort 2  
Recruiting: early Jan  
Sessions: mid to late Jan  
Synthesis: early Feb

### **Prepare**

The prototype went through  review on TBD

Pilot Session details are TBDMidpoint

* Pilot participant email:  
* Date and time of pilot session:

### **Research sessions**

* Planned dates of research: TBD  
* Session length: 30-minute sessions  
* Session buffer: 30-minute breaks in between  
* Max sessions per day: 4

### **Availability**

**This section to be finalized for Pergiean recruiting**

Plan for the week of ##

| Team Availability | Time (EST) |
| ----- | ----- |
| Mon | 9am - 12pm and 1pm - 7pm |
| Tue | 9am - 12pm and 1pm - 7pm |
| Wed | 9am - 12pm and 1pm - 7pm |
| Thur | 9am - 12pm and 1pm - 7pm |
| Fri | 9am - 12pm and 1pm - 7pm |

## **Team Roles**

* Moderators: Clayton Zook  
* Research guide writing and task development: Clayton Zook  
* Participant recruiting & screening: Perigean  
* Project point of contact: Clayton Zook  
* Participant(s) for pilot test: tbd  
* Accessibility specialist (for sessions where support for assistive technology may be needed):  
* Note-takers: Joelle Wells  
* Observers: Samara Strauss, Tom Black, Parker Baronowski, Joelle Wells, Lainey Trahan  
* Team member emails:  
  * [clayton.zook@oddball.io](mailto:clayton.zook@oddball.io)  
  * [charlye@bluetiger.digital](mailto:charlye@bluetiger.digital)  
  * [megan@bluetiger.digital](mailto:megan@bluetiger.digital)	  
  * samara.strauss@  
  * thomas.black2@  
  * joelle.wells@oddball.io

    

## Reviewers

This plan will be reviewed by:

* VA PO for Identity, Core/Surge UX team - Samara Strauss  
* Collaboration Cycle Research Review touchpoint


