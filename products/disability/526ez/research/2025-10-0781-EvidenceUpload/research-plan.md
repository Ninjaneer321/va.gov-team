---
# Research Plan Metadata
title: "Research Plan for Pathways Team, Form 21-0781 Evidence Upload, September 2025"
date: 2025-09-01
last_updated: 2025-10-17
team: "Disability Benefits - Pathways Team"
product: "Form 21-0781 Evidence Upload"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans opting into form 0781 for mental health conditions lack a specific section to upload supporting evidence. Without correct evidence, claims can be delayed in adjudication or result in denial. Current design has all evidence uploaded at the end of 526EZ regardless of condition type."
  product_location: "Authenticated section within Form 21-526EZ disability compensation application on VA.gov"
  user_familiarity: "Iteration on existing product - Veterans currently upload documents at end of form; this creates dedicated section prioritizing mental health evidence first, then other supporting documents"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/issues/114046"

# Research Design
methodology: "semi-structured interviews with usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Gather feedback on the instructional content on each page"
  - goal_2: "Evaluate the effectiveness of the formatting and visual hierarchy of the information presented"
  - goal_3: "Evaluate whether users are able to navigate through the document upload sections"
  - goal_4: "Understand how users think through uploading evidence in support of their conditions"

research_questions:
  - "How do users react to the amount of information on each page?"
  - "What sections of the evidence orientation/document choice page do users find most valuable?"
  - "What sections do users have questions about?"
  - "Do people understand the content and that they need to upload mental health documents first?"
  - "Can users easily find and interact with interactive elements (additional info, accordion)?"
  - "Can users find specific pieces of information within interactive elements?"
  - "Is the information provided enough to support accurate decision-making?"
  - "From initial Evidence Orientation page, are users clear on next steps?"
  - "Can users successfully upload the right documents in the right sections?"
  - "Is the process of making changes to user inputs intuitive?"
  - "How do users categorize their documents and think about them in respect to their claim?"

hypotheses:
  - "Most participants will understand there are three steps to the supporting evidence upload step"
  - "Most participants will find specific guidance for uploading mental health documents helpful"
  - "Most participants will find summary screens helpful for reflecting on and confirming their upload choices"
  - "Most participants will understand document descriptions and find external links supportive"

expected_outcomes: "Better understanding of claimants' experience uploading documents. Insights on usability, language clarity, and navigability of upload flows to inform next iteration and ensure claimants can upload appropriate mental health documents separately from other conditions. Understanding of how claimants think about uploading documents generally as inspiration for future evidence upload redesign."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Maximum variation sampling targeting return claimants and new claimants with mental health conditions"
  
  primary_criteria:
    - "Return claimants who have filed a 526 and an 0781, with mental health conditions (at least 3)"
    - "Most recent application within past 5 years (paper or digital)"
    - "Claimants who have never filed for disability benefit and have mental health condition(s) (at least 4)"
    - "At least 3 participants with high school as highest education level"
    - "At least 3 participants who identify as having a cognitive disability"
    - "At least 3 participants who are 55+ in age"
    - "All participants identify as having mental health condition (PTSD, MST, or other trauma-related conditions)"
    
  secondary_criteria:
    - "No more than 3 men"
    - "At least 4 participants from rural areas"
    - "At least 4 participants from urban areas"
    - "At least 2 participants who speak another language fluently"
    
  screener_questions:
    - question: "Are you able to join the Zoom session from a smartphone?"
      qualifying_response: "Yes"
    - question: "Are you comfortable sharing your experience with mental health or traumatic experiences?"
      qualifying_response: "Yes"
    - question: "Which mental health conditions apply to you? (PTSD, MST, other trauma-related)"
      qualifying_response: "At least one condition selected"
    - question: "Do you find it difficult to remember or learn new things, focus on a task, or make decisions?"
      qualifying_response: "Yes qualifies for cognitive disability criteria"
    - question: "Have you ever filed a claim for disability benefits?"
      qualifying_response: "Yes (recruit at least 3), No (recruit at least 3)"
    - question: "If you have filed a claim, how recently did you file?"
      qualifying_response: "Within the last 5 years (recruit at least 3)"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 7
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-10-20"
  pilot_participant: "TBD"
  research_dates: "2025-10-27 to 2025-11-05"
  research_review_submission: "2025-10-17"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 60
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Key Result 1: Improve satisfaction with our web and mobile products by 5 points"
      - "Key Result 3: 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error"
      
veteran_journey_phases:
  - "Starting up - Attending to health needs"
  - "Taking care of myself"
  - "Putting down roots"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/README.md"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/eFolders_Migration"
    
tags:
  - "BNFT: Disability"
  - "AUD: Veterans"
  - "PRDT: Form 21-0781"
  - "PRDT: Form 21-526EZ"
  - "DSC: Form"
  - "DSC: Accordion"
  - "DSP: Ask users for files"
  - "HDW: Smartphone"
  - "authenticated"
  - "remote"
  - "moderated"
  - "usability-testing"
  - "semi-structured-interviews"
  - "mental-health"
  - "evidence-upload"
  - "PTSD"
  - "MST"
  - "cognitive-disability"
---

# Research Plan for 0781 Upload Documents, Disability Benefits, Pathways Team, September 2025

## Background 🏗️

At the present, all Veterans upload their documents as supporting evidence of their claim in one step at the very end of VA form 21-526 EZ, the application Veterans use to apply for disability compensation benefits. Veterans who opt into form 0781, which supports claims for mental health conditions, do not currently have a specific section that walks them through the process of uploading documents to support those conditions. 

We are enabling Veterans to submit evidence to support their mental health conditions within the 526\. We are using existing design patterns for uploading files, so this research will mainly focus on content comprehension and navigation. 

*What problem is your product trying to solve?*

Although opting into the 0781 form is optional, once the Veteran does so, they need to provide evidence to support their stated mental health conditions. If the Veteran doesn’t provide the correct evidence, it can delay adjudication or result in their claim being denied. Additionally if the Veteran doesn’t provide enough of the right kind of evidence, the VBA will not be equipped to follow up on these items, leading to their claim being denied. 
 

### Where is your product situated on VA.gov? (ex: auth vs. unauth)

Authenticated


### What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?

Veterans are currently uploading documents in the last step of the form. This section is meant to capture all documents for all types of conditions, regardless of whether or not they have opted into the 0781\. Our design proposal uses existing design patterns to create additional pages to support the submission of appropriate evidence to support mental health conditions. 

### Product Brief

- This superepic serves as our brief: [Help Veterans provide evidence to support their mental health statement (0781) and all other conditions in a single section of the Disability form (526) \#114046](https://github.com/department-of-veterans-affairs/va.gov-team/issues/114046)

### [**OCTO-DE Priorities**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md)

**Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.**

* Key Result 1: Improve satisfaction with our web and mobile products by 5 points.  
* Key Result 3: 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

## Research Goals 🥅  


* Goal 1: Gather feedback on the **instructional content** on each page.  
* Goal 2: Evaluate the effectiveness of the **formatting and visual hierarch**y of the information presented.  
* Goal 3: Evaluate whether users are able **navigate through** the document upload sections.   
* Goal 4: Understand **how users think through uploading evidence** in support of their condition(s).

 

***Outcome***

This research will give us a better understanding of claimants’ understanding and experience of uploading documents in support of their claim. We expect to find insights on the usability, language clarity, and navigability of the upload flows. These insights will inform the next iteration of  the evidence section in our online form to ensure claimants can upload the appropriate documents related to their mental health conditions separately from their other conditions. We are also hoping to understand how claimants think about uploading documents generally, as inspiration for a future evidence upload redesign project.

### Research questions

**Goal 1: Gather feedback on the instructional content on each page.**

* How do users react to the amount of information on each page?  
* What sections of the evidence orientation/document choice page do users find the most valuable?  
* What sections of the evidence orientation/document choice do users have questions about?  
* Do people understand the content?   
* Do people understand that they need to upload mental health related documents first and then other documents afterwards? 

**Goal 2: Evaluate the effectiveness of the formatting and visual hierarchy of the information presented**

* Can a user easily find and interact with the interactive elements (additional info, accordion)? Are they interested in pursuing information contained in these elements?  
* Can a user find specific pieces of information within the interactive elements (document type)?  
* Is the information provided enough to support users’ accurate decision-making?

**Goal 3: Evaluate whether users are able navigate through the document upload sections.** 

* From the initial Evidence Orientation page, are users clear on the next steps?  
* Can users successfully make it through the upload section, uploading the right documents in the right sections?  
* Is the process of making changes to user inputs intuitive?

**Goal 4: Understand how users think through uploading evidence in support of their condition(s).** 

* How do users categorize their documents?   
* How do users think about their documents in respect to their claim?

**Hypotheses**

* Most participants will be able to understand that there are three steps to the supporting evidence upload step.  
* Most participants will find it helpful that there is specific guidance for uploading documents to support mental health conditions  
* Most participants will find the summary screens helpful for reflecting on and confirming their upload choices  
* Most participants will understand the document descriptions, and will find the external links to be supportive in their understanding

## **Methodology 🛠️**

We propose semi-structured user interviews and observations for this study. This research will be moderated remotely on Zoom to support screen sharing. 

Although the design is high-fidelity and fairly refined, we are proposing a discovery-leaning methodology so that we can gather stories that users create about the content that they are seeing. We are choosing not to do an unmoderated usability study because the process of uploading condition-appropriate documentation is highly specific to the individual; setting up a study like this would take an immense amount of preparation that does not feel appropriate at this time. However, as part of this semi-structured approach, the researcher may ask participants to complete certain small tasks. These tasks will be followed with questions to understand the why behind the participant's choices and understanding. 

### **Location**

Remote, Zoom

## **Research materials 📔**

* [Conversation Guide](https://docs.google.com/document/d/1__VmGqotZ0a1VN6CE21tmM_85DknxqPj4LGNQZTHRyg/edit?tab=t.0#heading=h.riux8c4sekhk)
* [Link to prototype](https://www.figma.com/proto/9idAmDRkCyDwJ7hTemJgAV/0781---Evidence-Upload?node-id=832-42129&p=f&t=40SnOZdBIfa2TSeB-0&scaling=min-zoom&content-scaling=fixed&page-id=803%3A39449&starting-point-node-id=832%3A42129&show-proto-sidebar=1)
* [Original figma file](https://www.figma.com/design/9idAmDRkCyDwJ7hTemJgAV/0781---Evidence-Upload?node-id=803-39449&p=f&t=40SnOZdBIfa2TSeB-0)

## **Recruitment 🎯**

### **Recruitment approach**

* Veterans: 12  
* Caregivers: 0  
* Dependents: 0  
* Total: 12  
* Ideal completed sessions: 7

### **Primary criteria (must-haves)**

* Return claimants who have filed a 526 and an 0781, with mental health conditions  
  * Their most recent application should be within the past 5 years  
  * Applications can be paper or digital  
  * We are looking for at least 3 participants in this category  
* Claimants who have never filed for a disability benefit and have a mental health condition(s) 
  * This group can also include those who have started the process but never completed filing  
  * We are looking for at least 4 participants in this category  
* At least 3 participants whose highest level of education completed is high school  
* At least 3 participants who identify as having a cognitive disability  
* At least 3 participants who are 55+ in age  
* All participants should identify as having a mental health condition such as PTSD, Military sexual trauma, or other mental health conditions related to a traumatic event, such as depression or anxiety

#### **Secondary criteria (nice-to-haves)**

* Gender  
  * No more than 3 men  
* Geographic distribution  
  * At least 4 participants from rural areas  
  * At least 4 participants from urban areas  
* Language
  * At least 2 participants who also speak another language fluently


#### **Additional screener questions to accompany the initial screener questions**

*Familiarity with technology*
* Are you able to join the Zoom session from a smartphone, such as a Samsung Galaxy or Apple iPhone? Any kind of smartphone will work as long as it connects to the internet.
  * Response options: yes or no. (Answering yes would qualify the participant.)
 
_Mental health conditions_
* We’re asking Veterans to share their experience with us so that we can improve the process of filing claims related to traumatic events. However, we know it can be difficult to talk about these topics. We’ll ask you questions about filling out a VA mental health form, which could involve sharing some limited details about your own mental health or traumatic experiences. Are you comfortable sharing your experience with us?
  * Yes [Recruit]
  * No [Do not recruit]
 
* Which of the following conditions apply to you? You can check multiple types.
  * PTSD [Recruit at least 1]
  * Military sexual trauma (MST) [Recruit at least 1]
  * Other mental health conditions related to a traumatic event, such as depression or anxiety [Recruit at least 1]
  * None of the above [do not recruit]  
    
*Cognitive disabilities*
* Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
  * Response options: yes or no. (Answering yes would qualify the participant for cognitive disability criteria.)

* Have you ever filed a claim for disability benefits?
  * Yes [recruit at least 3]
  * No [recruit at least 3]
    
* If you have filed a claim, how recently did you file?
  * Within the last 5 years [Recruit at least 3]
  * Over 5 years ago [do not recruit]
  * I have never filed a claim [Recruit at least 3]


## **Timeline 🗓️**

##  **Optional Kick-off Call with Perigean**

* Suggested dates and times:   
  * 10/20 12:00PM \- 5pm EST  
  * 10/21 12:00PM \- 5pm EST

## **Prepare**

* Pilot 1  
  * Pilot facilitator name: Momo Miyazaki  
  * Pilot participant name: TBD 
  * Date and time of pilot session: TBD 
* Pilot 1  
  * Pilot facilitator name: Amy Goldman  
  * Pilot participant name: TBD 
  * Date and time of pilot session: TBD

### **Research sessions**

* Planned dates of research: 10/27 \- 11/05

### **Length of sessions**

* Session length: 1 hour  
* Buffer time between sessions: 1 hour  
* Maximum Sessions per day: (We all have limits \- how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?) 3 per day

### **Availability**

Please prioritize scheduling participants during this first week. 
* 10/27, Monday, 12:00PM \- 8pm EST  
* 10/28, Tuesday, 12:00PM \- 8pm EST  
* 10/29, Wednesday, 12:00PM \- 8pm EST 
* 10/30, Thursday, 12:00PM \- 8pm EST (9-12 if needed)  
* 10/31, Friday, 12:00PM \- 8pm EST (9-12 if needed)

Second week if needed:
* 11/03, Monday, 12:00PM \- 8pm EST  
* 11/04, Tuesday, 12:00PM \- 8pm EST  
* 11/05, Wednesday, 12:00PM \- 8pm EST 

## **Team Roles 🕵️👩‍💻👩‍🔬**

* Moderator: Momo Miyazaki, Amy Goldman  
* Research guide writing and task development (usually but not always same as moderator): Momo Miyazaki  
* Participant recruiting & screening: Perigean  
* Project point of contact: Momo Miyazaki  
* Accessibility specialist (for sessions where support for assistive technology may be needed): TBD  
* Note-takers:  Amy Goldman, Momo Miyazaki, Brent Schneider  
* Observers: To be determined a week before research

## **Approvals ✅**
Reviewed by Liz Lantz on 10-17-2025
Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]

## 

