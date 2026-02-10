---
# Research Plan Metadata
title: "Research Plan for MHV on VA.gov, Medical Records & Medications, November 2024"
date: 2024-11-01
last_updated: 2024-11-22
team: "Digital Health Modernization"
product: "Medical Records, Secure Messages, and Medications on MHV on VA.gov"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "As part of the Digital Health Modernization strategy, My HealtheVet (MHV) is being moved to VA.gov. After building and testing various iterations of Secure Messages, Medications, and Medical Records, this study assesses the new filter functionality across all three products to identify any pain points and understand how Veterans use filters to find information."
  product_location: "Figma prototypes and Codespace live environment"
  user_familiarity: "Iteration on existing products - testing new filter functionality across Medical Records, Medications, and Secure Messages"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/product"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Identify any pain points Veterans may experience in using the filter function to find their messages, medications, and medical records"
  - goal_2: "Understand how Veterans use filters to find messages, medications, and medical records"
  - goal_3: "Understand Veterans' needs and expectations for using filters within Secure Messages, Medications, and Medical Records"

research_questions:
  - "Do filters help Veterans find their messages, medications, and medical records?"
  - "How do Veterans use filters to find their messages, medications, and medical records?"
  - "What are Veterans' use cases for filters in Secure Messaging, Medications, and Medical Records?"
  - "What are Veterans' expectations for filter functionality in each product?"

hypotheses:
  - "Most Veterans will perceive the filters as helpful in all products"
  - "Most Veterans will understand the difference among the filter options in Medications"
  - "Most Veterans will find messages, medications, and medical records using the filters"
  - "Veterans will have varied use cases and thresholds for employing filters"

expected_outcomes: "Findings will help determine if filter designs provide the best user experience for Veterans to find their messages, medications, and medical records, and identify any pain points to inform future design iterations."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "diverse recruitment across device types and usage patterns"
  
  primary_criteria:
    - "9 participants must regularly use MHV"
    - "6 participants with cognitive disabilities - mild to severe"
    - "6 participants who are mobile users"
    - "4 participants who are desktop/laptop users"
    - "2 participants who are tablet users"
    - "6 participants from west of the Mississippi River (one participant per state)"
    - "6 participants from east of the Mississippi River (one participant per state)"
    - "Have not worked for the VA in the previous 5 years"
    
  secondary_criteria:
    - "Age distribution: 75+ (2), 65-74 (4), 55-64 (2), 35-54 (3), 18-34 (1)"
    - "Education: High school or less (4), Some college (3), Associate (2), Bachelor's (2), Master's+ (1)"
    - "Race/ethnicity: Black/African American (2), Hispanic/Latino (2), White/Caucasian (8)"
    - "Rural (3) and Urban (9) mix"
    
  screener_questions:
    - question: "When is the last time you used My HealtheVet?"
      qualifying_response: "Within last 18 months - recruit 9 within last 6 months"
    - question: "What device will you use to join the session?"
      qualifying_response: "Mobile (6), Desktop/Laptop (4), Tablet (2)"
    - question: "Have you been diagnosed with (formally or informally) a cognitive disability?"
      qualifying_response: "Yes - recruit 6"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2024-11-15"
  pilot_participant: "TBD"
  research_dates: "2024-11-18 to 2024-11-22"
  research_review_submission: "2024-11-11"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Enable Veterans to efficiently filter and find their messages, medications, and medical records"
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results:
      - "Centralize health information access through MHV on VA.gov with improved filtering"
  - objective: "Logged-in users have a personalized experience, with relevant and time-saving features"
    key_results:
      - "Provide effective filter functionality across health management tools"
      
veteran_journey_phases:
  - "Starting up"
  - "Taking care of myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research"
    
tags:
  - "health-care"
  - "medical-records"
  - "medications"
  - "secure-messaging"
  - "my-healthevet"
  - "mhv-on-vagov"
  - "usability-testing"
  - "filters"
  - "findability"
  - "cognitive-disability"
  - "veterans"
  - "authenticated-experience"
  - "mobile"
  - "desktop"
  - "tablet"
  - "remote-research"
  - "moderated"
  - "prototype-testing"
  - "codespace"
  - "digital-health-modernization"
  - "cross-product-study"
---

# **Research Plan for MHV on VA.gov, Medical Records & Medications, November 2024**

## **Background**

Our project is part of the Digital Health Modernization strategy, which aims to create a centralized place for Veterans to access their health information. As part of this effort, My HealtheVet (MHV) will be moved to VA.gov. We initially built and tested various iterations of Secure Messages, Medications, and Medical Records in MHV on VA.gov. We conducted usability studies and collected feedback that informed iterations on the website. In this round of usability testing we will assess the new functionality of filters in Medications and Medical Records and the latest iteration of filters in Secure Messages to explore further pain points.

You can read more about our Digital Health Modernization strategy [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/product).

### **OCTO Objectives**

This research supports the following OCTO objectives:

1. Veterans can manage their health services online
2. Veterans and their families can find a single, authoritative source of information
3. Logged-in users have a personalized experience, with relevant and time-saving features

### **Veteran Journey**

This research fits into these points of a Veteran's Journey:

- Starting up
- Taking care of myself
- Retiring
- Aging


## **Research Goals**

1. Identify any pain points Veterans may experience in using the filter function to find their messages, medications, and medical records.  
2. Understand how Veterans use filters to find messages, medications, and medical records.
3. Understand Veterans’ needs and expectations for using filters within Secure Messages, Medications, and Medical Records.

## **Outcome**

The results of the study will help us determine if our designs provide the best user experience for Veterans to find their messages, medications, and medical records and help to identify any pain points. This will inform future design iterations.

## **Research questions**

1. Do filters help Veterans find their messages, medications, and medical records?
2. How do Veterans use filters to find their messages, medications, and medical records?
3. What are Veterans’ use cases for filters in Secure Messaging, Medications, and Medical Records?
4. What are Veterans’ expectations for filter functionality in each product?

## **Hypotheses**

_Hypothesis 1:_ Most Veterans will perceive the filters as helpful in all products.

_Hypothesis 2:_ Most Veterans will understand the difference among the filter options in Medications.

_Hypothesis 3:_ Most Veterans will find messages, medications, and medical records using the filters.

_Hypothesis 4:_ Veterans will have varied use cases and thresholds for employing filters.

## **Methodology**

We will conduct moderated usability testing sessions in which we will ask users to navigate both a prototype and a live Codespace environment while we observe their behavior, and ask follow-up prompts as needed.

### **Location**

Data collection will be remote. We will use Zoom.

### **Research materials**

[Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research/2024-11-MR-SM-RX-usability-study/conversation-guide.md)

[Link to mobile prototype](https://www.figma.com/proto/SGP1z2LejUWqDZyT61po5J/Medical-Records---Phase-1?node-id=11764-21653&node-type=frame&t=L6hXstnl2Q64Whv3-0&scaling=min-zoom&content-scaling=fixed&page-id=9865%3A41799&starting-point-node-id=11764%3A21653&show-proto-sidebar=1)

[Link to desktop prototype](https://www.figma.com/proto/SGP1z2LejUWqDZyT61po5J/Medical-Records---Phase-1?node-id=11764-21766&node-type=frame&t=L6hXstnl2Q64Whv3-0&scaling=min-zoom&content-scaling=fixed&page-id=9865%3A41799&starting-point-node-id=11764%3A21766&show-proto-sidebar=1)

[Link to Codespace](https://jubilant-space-palm-tree-wpw45v5g9562p6q-3001.app.github.dev/my-health/secure-messages/inbox/)

## **Recruitment**

### **Recruitment approach**

We will partner with Perigean to recruit Veterans.

### **Recruitment criteria**

We will schedule a total of 12 Veterans for an expected completion rate of 8 usability sessions.

Please make sure that ALL participants are willing to complete the session **on the device they specified when recruited** and:

- During the session, are willing to share their screen
- Are willing to be on camera (on desktop/laptop)
- Have a working microphone and camera on their device
- Have not worked for the VA in the previous 5 years.

## **Criteria for participants (12)**

- 9 participants must regularly use MHV (see screener)
- 6 participants with cognitive disabilities – mild to severe (see screener)
- 6 participants who are mobile users (see screener)
- 4 participants who are desktop/laptop users (see screener)
- 2 participants who are tablet users (see screener)
- 6 participants from west of the Mississippi River (one participant per state)
- 6 participants from east of the Mississippi River (one participant per state)

1. Age distribution:
   
    a. (2) 75+

    b. (4) 65 – 74

    c. (2) 55 – 64

    d. (3) 35 – 54

    e. (1) 18 – 34

3. Education distribution:

    a. (4) High School graduate or equivalent or less

    b. (3) Some college, no degree

    c. (2) Associate degree (occupational or academic)

    d. (2) Bachelor's degree

    e. (1) Master's degree or higher
   
5. Demographic distribution:
   
    a. (0) American Indian or Alaska Native

    b. (0) Asian

    c. (2) Black or African American

    d. (2) Hispanic, Latino, or Spanish origin

    e. (8) White or Caucasian
   
7. Residence:

    a. (3) rural

    b. (9) urban

## **Screener**

1. When is the last time you used HealtheVet?
   
    a. Within the last month _(recruit 3)_
       
    b. Within the last 3 - 6 months _(recruit 3)_
       
    c. Within the 7 – 18 months _(recruit 3)_

    _(Recruit 3 among the following answers:)_

   d. More than 18 months
      
   e. I don’t know
      
   f. I don’t use My HealtheVet
     
6. How do you usually access My HealtheVet?

    a. My HealtheVet website on a computer/tablet

    b. My HealtheVet website on a phone

    c. VA Mobile App

    d. My HealtheVet on VA.gov website on a computer/tablet

    e. My HealtheVet on VA.gov website on a phone

    f. I do not use My HealtheVet
       
8. What device will you use to join the session?
   
    a. Desktop/Laptop _(recruit 4)_

    b. Mobile phone – Android _(recruit 3)_

    c. Mobile phone – iPhone _(recruit 3)_

    _(Recruit 2 among the following answers:)_

     d. Tablet – Android
   
     e. Tablet – iPad

1. Have you been diagnosed with (formally or informally) a cognitive disability? This may include any intellectual disability, ADHD, Autism Spectrum Disorder, severe, persistent mental illness, brain injury, stroke, Alzheimer's disease and other dementias, or others not listed.

    a. Yes _(recruit 6)_

    b. No _(recruit 6)_
   
   
4. Based on your response to the previous question, how would you rate the severity of your cognitive disability?

    a. Mild - Symptoms have a limited effect on daily life.

    b. Moderate – Symptoms make daily life much more difficult than my peers.

    c. Severe - Symptoms make daily life extremely difficult and I require assistance.

    d. I prefer not to answer _(do not count as cognitive disability)_

    e. Not applicable – I do not have a cognitive disability _(do not count as cognitive disability)_

## Timeline

### **Prepare**

- Pilots: We will schedule our own, thank you.

### **Research sessions**

- Planned dates of research: **November 18 – November 22, 2024**

### **Length of sessions**

- Session length: 1 hour
- Buffer time between sessions: 30 minutes

### **Availability**

| **Day** | **Team Availability** | **Time Slots (Eastern Time Zone)** |
| --- | --- | --- |
| Monday | November 18, 2024 | 8:30am – 5:00pm |
| Tuesday | November 19, 2024 | 8:30am – 5:00pm |
| Wednesday | November 20, 2024 | 8:30am – 4:00pm. |
| Thursday | November 21, 2024 | 8:30am – 5:00pm |
| Friday | November 22, 2024 | 8:30am – 12:00pm |

Note: Please do not schedule more than 4 sessions per day.

## **Team Roles**

Moderator: Mel Stern, Anne  Costello Kennedy

Research guide writing and task development: Anne Costello Kennedy, Mel Stern

Participant recruiting & screening: Perigean

Project point of contact: Anne Costello Kennedy 

Accessibility specialist: N/A

Participants for pilot test: TBD – we will do this ourselves, thank you.

Note-takers: TBD

Observers: Marci McGuire, Kaitlin Fink, Lexi Wunder, Justine Chou, Joel Calumpong, Emily Taylor
