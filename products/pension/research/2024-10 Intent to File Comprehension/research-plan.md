---
# Research Plan Metadata
title: "Research Plan for [Team, Product, Date]"
date: YYYY-MM-DD
last_updated: YYYY-MM-DD
team: "[Team Name]"
product: "[Product Name]"
product_area: "[e.g., authenticated/unauthenticated]"

# Background Context
background:
  problem_statement: "[What problem is your product trying to solve?]"
  product_location: "[Where is this situated on VA.gov?]"
  user_familiarity: "[New product or iteration?]"
  product_brief_url: "[URL]"

# Research Design
methodology: "[e.g., usability testing, semi-structured interviews, card sort]"
research_format: 
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: "[Location name if applicable]"
    point_of_contact: "[Name if applicable]"
    equipment: "[Equipment details if applicable]"
  moderated: true # Options: true, false
  
# Research Goals & Questions
research_goals:
  - goal_1: "[First research goal]"
  - goal_2: "[Second research goal]"
  - goal_3: "[Third research goal]"

research_questions:
  - "[Research question 1]"
  - "[Research question 2]"
  - "[Research question 3]"
  - "[Research question 4]"
  - "[Research question 5]"

hypotheses:
  - "[Hypothesis 1]"
  - "[Hypothesis 2]"
  - "[Hypothesis 3]"

expected_outcomes: "[How will findings advance the product?]"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "[e.g., lean maximum variation]"
  
  primary_criteria:
    - "[Must-have criterion 1]"
    - "[Must-have criterion 2]"
    - "[Must-have criterion 3]"
    
  secondary_criteria:
    - "[Nice-to-have criterion 1]"
    - "[Nice-to-have criterion 2]"
    
  screener_questions:
    - question: "[Screener question text]"
      qualifying_response: "[Expected answer]"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name]"
  research_dates: "YYYY-MM-DD to YYYY-MM-DD"
  research_review_submission: "YYYY-MM-DD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1"
    key_results: 
      - "[Specific KR if applicable]"
  - objective: "Objective 2"
    key_results:
      - "[Specific KR if applicable]"
      
veteran_journey_phases:
  - "[e.g., Getting Out]"
  - "[e.g., Starting Up]"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Link to related past research]"
    
tags:
  - "[product-area]"
  - "[methodology]"
  - "[participant-type]"
  - "[research-phase]"
---

# **Research Plan for Pension Benefits, Intent to File Comprehension, October 2024**

## **Background**

[Link to Pension’s Intent to File UX Strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/design/pension-itf-ux-strategy.pdf)

Since relaunching the web-based version of VA Form 21P-527EZ in January 2024, the Pension team has shifted its focus to identifying opportunities to further improve the online filing experience for Veterans. One of these opportunities for improvement is adding intent to file (ITF) functionality to the online pension application to help Veterans maximize their potential benefits.

The 526 disability compensation team has done [extensive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/Intent%20to%20file%20Research/ITF%20Research%20Summary.md) that identified known pain points that Veterans encounter around intent to file. While technical blockers have been resolved so that Veterans can start their claims process regardless of endpoint availability, the Pension team has an opportunity to build on their recommendations in a holistic redesign. 

To gather a holistic view, the Pension team conducted a [baseline audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-05%20Intent%20to%20File%20Audit.md) of the Veteran’s intent to file experience across VA.gov. We validated that the benefits of intent to file are often described inconsistently, hard to find, or obfuscated by the complexity of their claims timeline. However, we still lack the Veterans’ perspective to inform an ideal experience. 

This study aims to establish Veterans’ expectations, and evaluate how content design might reduce confusion and instill confidence in their application journey. We hypothesize that these content-related learnings will be broadly applicable to the intent to file experience across VA.gov.

### **OCTO Priorities**

This research supports the following [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md):

* Objective 1: Our digital experiences are the best way to access VA health care and benefits

### **Veteran Journey**

This research maps to the following stages of the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):

* Taking care of self  
* Putting down roots  
* Retiring

## **Research Goals**

The goals of this research study are to:

1. Validate when and how intent to file messaging might be effective for Veterans and evaluate the usability of the proposed content and experience 
   * When and where would information about the ITF date and its purpose be of benefit to Veterans?  
   * What does a Veteran expect to see after starting their application \[clicks *Start the pension application*\]?  
   * What aspects of the flow provide clarity or cause confusion?  
     * What questions or concerns do Veterans have about intent to file?  
     * What action do Veterans take (i.e. file an ITF or not) and what is their stated reasoning?  
   * Is the call to action to start an application clear and compelling?   
   * Do Veterans understand how the intent to file process impacts their potential benefits?

2. \[Secondary\] Understand Veterans’ expectations after an ITF is created

   * What information, if any, are Veterans seeking about an ITF after one is created?

     * \[If they are seeking additional information\] Why?

   * Where do Veterans expect ITF information to live after their intent to file is established? 

   * How might they troubleshoot if that information is not available?

3. \[Secondary\] Understand Veterans' existing mental model (if any) of ITF and their barriers to taking action to starting an application   
   * Are Veterans familiar with the intent to file process? What are Veterans' perceptions of the ITF process?  
     * What information or experiences have shaped their perceptions of ITF and the ITF process?  
   * What are Veteran perceptions of and exposure to intent to file?   
     * How is this similar and/or different for Veterans who have and have not filed a claim before?  
     * Do Veterans have clarity of the benefits and impact of ITF and how they might need to use the ITF date in the future?

### **Outcomes**

We anticipate that this research will:

* Inform messaging and design strategy for the intent to file experience, for the online pension application as well as VA.gov as a whole  
* Deepen our understanding of Veteran perceptions and comprehension of the intent to file process

### **Hypotheses**

* Leading intent to file messaging with its benefits will encourage Veterans to start their application. 

  * Why? Because if the benefits are clear and compelling, we hypothesize that Veterans will be motivated to take action to reserve an earlier effective date.

* Veterans will feel confident about continuing their application when intent to file expiration is described in proximity to action-oriented next steps.

  * Why? Because Veterans are concerned about intent to file expiry but need clarity on when they need to complete their application and why.

* Veterans may hesitate to continue their application if they are first introduced to intent to file immediately after clicking “*Start the Pension application*”.

  * Why? Because Veterans may expect to start filling out an application after clicking “*Start the Pension application*”, not to be introduced to a new process.

## **Methodology**

For this study, we will be facilitating semi-structured interviews with Veterans. We will utilize a combination of open-ended questions and conversation stimuli in the form of prototypes of proposed designs for specific ITF-related scenarios within the online pension application.

**Core scenarios:**

1. An authenticated and identity-verified (LOA2/3) Veteran starts a new pension application; a new ITF is created.  
2. An authenticated and identity-verified (LOA2/3) Veteran returns to an in-progress pension application; they have an existing ITF. 

\#1 and \#2 comprise the expected user journey, with the explicit assumptions that the application is available and that the ITF endpoint is available. Other variants or scenarios to potentially test include:

* Error scenario: An authenticated Veteran returns to a new **or** in-progress pension application; on the backend, VA.gov is failing or taking too long to check for an existing ITF.

### **Location**

These research sessions will be conducted remotely via Zoom.

### **Research Materials**

Research materials for moderated interviews include:

* [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-10%20Intent%20to%20File%20Comprehension/conversation-guide.md)
* [Conversation stimuli](https://www.figma.com/design/9JKK5Eo43uJWEr66JPiebc/Pension-Claim-Form-21P-527EZ?node-id=7792-315420&t=JJuSb4B8GOIfITEL-4) 

## **Recruitment**

### **Recruitment approach**

Using Perigean to recruit, we would like to schedule 10 participants in order to achieve 6-8 completed sessions. We are aiming to have roughly 50% of our participants participate via desktop and 50% participate via mobile device.

### **Recruitment criteria**

Primary criteria (must-haves)

* Half of participants **have** filed a compensation or pension claim on VA.gov before  
* Half of participants **have not** filed a compensation or pension claim on VA.gov before

Demographic must-haves

* At least 50% of participants are over the age of 55  
* Roughly 50% primarily mobile users  
  * For users that indicate they are primarily mobile users, confirm that they are able to join the session via their mobile device

Secondary demographic criteria (nice-to-haves)

* At least one with an identified cognitive disability  
* 30% people of color  
* 25% live in a rural area  
* 25% without a degree  
* 17% with immigrant origins  
* 10% women

Screener Questions:

1. Have you filed a disability compensation or benefits claim on VA.gov before? If you have filed a healthcare claim but not a disability compensation or benefits claim, select “No”  
   1. Response options: yes or no (We are aiming for a \~50/50 split in how this question is answered)  
2. How do you primarily access VA.gov? \[Note for Perigean: We want to ensure that participants are able to join from the device that they indicate primarily using to access VA.gov  
   1. Response options (We are aiming for a \~50/50 split in how this question is answered)  
      1. On a desktop computer or laptop  
      2. On a mobile device, such as a smartphone or tablet  
3. If a participant answers “On a desktop computer or laptop” in Q4:  
   1. Are you able to join the Zoom session from a desktop or laptop computer? (Answering no would disqualify the participant)  
4. If a participant answers “On a mobile device, such as a phone or tablet” in Q4:  
   1. Are you able to join the Zoom session from either a tablet or smartphone, such as a Samsung Galaxy or Apple iPhone? Any kind of smartphone will work as long as it connects to the internet. (Answering no would disqualify the participant)
5. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.  
   1. Response options: yes or no (We are aiming for 1-2 participants who answer yes)  
6. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.  
   1. Response options: yes or no (We are aiming for 1-2 participants who answer yes)  

## **Timeline**

### **Research sessions**

Planned dates of research: First half of October

Research scheduled to start the week of 10/7 until 6-8 sessions are completed. 

### **Length of sessions**

Session length: 1 hour

Buffer time between sessions: 30 minutes

Maximum Sessions per day: 3

### **Availability**

|                 |         |       |
| --------------- | ------- | ----- |
| Date            | Time    | Notes |
| Tuesday, 10/8   | 11-5 ET |       |
| Wednesday, 10/9 | 11-5 ET |       |
| Thursday, 10/10 | 11-5 ET |       |
| Friday, 10/11   | 11-5 ET |       |
| Tuesday, 10/15  | 11-5 ET |       |


## **Team Roles**

Moderators: 

* Elisabeth Chin ([elisabeth.chin@coforma.io](mailto:elisabeth.chin@coforma.io)) 

* Daniela Jones ([daniela.jones@coforma.io](mailto:daniela.jones@coforma.io))

Research guide writing and task development: Same as above

Participant recruiting & screening:  

* Perigean

Project point of contact: Elisabeth Chin ([elisabeth.chin@coforma.io](mailto:elisabeth.chin@coforma.io)); Daniela Jones ([daniela.jones@coforma.io](mailto:daniela.jones@coforma.io))

Participant(s) for pilot test: TBD
