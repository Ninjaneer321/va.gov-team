---
# Research Plan Metadata
title: "Research Plan for Identity Experience, Delegate Access - Caregivers (preliminary conversations), April 2025"
date: 2025-04-14
last_updated: 2025-04-14
team: "Identity Experience"
product: "Delegate Access MVP"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Caregivers are given permission by Veterans to manage the care or personal affairs of Veterans. We are having preliminary conversations with caregivers, in order to understand their digital needs and uncover any potential pain points as they navigate the VA."
  product_location: "VA.gov authentication and delegate access features"
  user_familiarity: "New - preliminary discovery research"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/delegate-access%20#initiative-outline-delegate-access-mvp"

# Research Design
methodology: "Semi-structured interviews"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Discover how caregivers are able to access Veteran services behalf of Veterans"
  - goal_2: "Explore how caregivers interact with VA.gov or other digital services"
  - goal_3: "Better understand and empathize with the caregiver journey and uncover any potential pain points as they navigate the VA"

research_questions:
  - "Which methods does the caregiver utilize to complete actions on behalf of the Veteran?"
  - "Is the caregiver given digital access?"
  - "What functions do caregivers do on behalf of the Veteran most frequently?"
  - "How is a delegate currently authorized and designated as a caregiver? What actions must the Veteran take?"
  - "How might a Veteran assign permissions for a caregiver? For what period of time is the designation active?"

hypotheses:
  - "Veterans can designate specific permissions that caregivers may have."
  - "Caregivers do not currently have access to digitally complete actions on behalf of the Veteran they are caring for."
  - "Caregivers have a desire to leverage digital tools to complete actions on behalf of Veterans."
  - "Non-digital mechanisms for accessing healthcare benefits are difficult to maneuver."
  - "With the deprecation of MHV, there has been a significant roadblock for representatives/caregivers to digitally monitor and complete actions for Veterans in their care."

expected_outcomes: "Learn about the process of how caregivers are able to complete various tasks and functions on behalf of Veterans. The focus is anything from the point of being designated by the Veteran all the way through completion of any actions behalf of a Veteran."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment of Veteran caregivers"
  
  primary_criteria:
    - "Must be a representative or delegate for a Veteran"
    - "Must have experience filing for healthcare benefits on behalf of a Veteran"
    - "Must have been in this role for at least 3 months"
    - "Must have a computer or mobile phone and be willing to complete the interview remotely"
    - "Must have a working microphone"
    
  secondary_criteria:
    - "2 persons with cognitive disabilities"
    
  screener_questions:
    - question: "Are you currently a representative or delegate for a Veteran?"
      qualifying_response: "Yes"
    - question: "Do you have experience filing for healthcare benefits on behalf of a Veteran?"
      qualifying_response: "Yes"
    - question: "For how long have you been in this role?"
      qualifying_response: "At least 3 months"
      
participants:
  veterans: 0
  caregivers: 8
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-04-10 or 2025-04-11"
  pilot_participant: "TBD"
  research_dates: "2025-04-14 to 2025-04-22"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: Create a smooth transition for Veterans from legacy to modern sign-in credentials"
    key_results: 
      - "Caregivers can seamlessly access VA services on behalf of Veterans"
  - objective: "Objective 2: Improve the Veteran sign-in experience"
    key_results:
      - "Delegate access reduces friction for caregivers managing Veteran affairs"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "MHV deprecation impact on caregivers"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/delegate-access%20#initiative-outline-delegate-access-mvp"
    
tags:
  - "AUD: Caregivers"
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: Sign-in"
  - "MHV: Personal Health Records/Medical Records"
  - "MHV: Appointments"
  - "semi-structured-interviews"
  - "generative-research"
  - "authenticated"
  - "DSP: Help users to sign in"
  - "moderated"
  - "remote"
  - "delegate-access"
  - "cognitive-disability"
  - "discovery"
---

# **Research Plan for Identity Experience, Caregivers (preliminary conversations)**

## **Background**

Caregivers are given permission by Veterans to manage the care or personal affairs of Veterans. We are having preliminary conversations with caregivers, in order to understand their digital needs and uncover any potential pain points as they navigate the VA.

* [product info](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/delegate-access%20#initiative-outline-delegate-access-mvp)

### **OCTO Identity Crew Objectives**

* Objective 1: Create a smooth transition for Veterans from legacy to modern sign-in credentials  
* Objective 2: Improve the Veteran sign-in experience.

### **Veteran Journey**

Securely accessing VA online services on behalf of a Veteran that isn’t oneself can happen at any stage in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf). But may be most likely to initiate in “starting up,” “taking care of myself,” and “aging.” The updated Sign-in page and modal will apply to everyone who signs into VA online and uses the authenticated experience.

## **Research Goals**

* Discover how caregivers are able to access Veteran services behalf of Veterans
* Explore how caregivers interact with VA.gov or other digital services  
* Better understand and empathhize with the caregiver journey and uncover any potential pain points as they navigate the VA

### **Outcome**  
Learn about the process of how caregivers are able to complete various tasks and functions on behalf of Veterans. The focus is anything from the point of being designated by the Veteran all the way through completion of any actions behalf of a Veteran.

### **Research questions**
  
- Which methods does the caregiver utilize to complete actions on behalf of the Veteran?
  - Is the caregiver given digital access?
- What functions do caregivers do on behalf of the Veteran most frequently?
- How is a delegate currently authorized and designated as a caregiver?  What actions must the Veteran take?
- How might a Veteran assign permissions for a caregiver? For what period of time is the designation active?

### **Hypotheses**

- H1: Veterans can designate specific permissions that caregivers may have.
- H2: Caregivers do not currently have access to digitally complete actions on behalf of the Veteran they are caring for.
- H3: Caregivers have a desire to leverage digital tools to complete actions on behalf of Veterans.
- H4: Non-digital mechanisms for accessing healthcare benefits are difficult to maneuver.
- H5: With the deprecation of MHV, there has been a significant roadblock for representatives/caregivers to digitally monitor and complete actions for Veterans in their care.
  
## **Methodology**

- Interview caregivers who have completed various actions on behalf of Veterans
- Interview VA personnel who interact with Veteran healthcare benefits.

### **Research materials**

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/delegate-access%20/Research/caregiver_conversation_guide.md) 

## Recruitment	

### Recruitment approach

We will use Perigean to recruit Veteran representatives who are representatives for Veterans that require assistance with accessing their healthcare benefits  for this moderated study. 

### Recruitment criteria

12 for at least 8 completed sessions

**Primary criteria (must-haves)**
All participants:
- Must have a computer or mobile phone and be willing to complete the interview remotely
- Must have a working microphone
- In addition our primary product criteria includes:
   - Must be a representative for a Veteran for at least 3 months.
   - Must have completed a healthcare action on behalf of a Veteran.
- Use of Zoom or sharing of a screen is not necessary for this study.

Our primary diversity and inclusion criteria:
- 2 persons cognitive disabilities

### Screener Questions

- Are you currently a representative or delegate for a Veteran?  (Yes)
- Do you have experience filing for healthcare benefits on behalf of a Veteran?
- For how long have you been in this role?

## Timeline

### Prepare

- Pilot participant email:
- Date and time of pilot session:

Screen reader practice session:
- Accessibility specialist email:
- Date and time of SR practice session: 

### Length of sessions
   - Session length: **45-minute** sessions 
   - Session buffer: **30-minute breaks** in between
   - Max sessions per day: 4
  
### Availability
- **April 14 - 22**
- Please hold April 21st/22nd in case of needed make ups sessions, to the extent possible.

Team Availability | Time (EST)
------------------|--------------
Mon | 9am - Noon, 1 - 7 pm
Tue | 9am - Noon, 1 - 7 pm
Wed | 9am - Noon, 1 - 7 pm
Thur| 9am - Noon, 1 - 7 pm
Fri | 9am - Noon, 1 - 5 pm

Pilot Session | Time (EST)
--------------|----------
 April 10 | 1:30pm
 April 11 | 3pm

## **Team Roles**

* Moderators: Charlye Tran, Clayton Zook
* Research guide writing and task development: Charlye Tran, Clayton Zook 
* Project point of contact: Charlye Tran 
* Note-takers: Clayton Zook, Joelle Wells, Megan Driscoll  
* Observers: Samara Strauss, Tom Black, Joelle Wells, Lainey Trahan  
* Team member emails:  
  * [clayton.zook@oddball.io](mailto:clayton.zook@oddball.io)  
  * [charlye@bluetiger.digital](mailto:charlye@bluetiger.digital)  
  * [megan@bluetiger.digital](mailto:megan@bluetiger.digital)
  * [joelle.wells@oddball.io](mailto:joelle.wells@oddball.io)
  * samara.strauss@  (full email not included here)
  * thomas.black2@   (full email not included here)


## Reviewers

This plan has been reviewed by: 
* Identity Experience team members: Joelle Wells, Clayton Zook
* VA PO for Identity Experience team: Samara Strauss
* Research review: Shane Strassberg
