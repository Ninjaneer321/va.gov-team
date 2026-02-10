---
# Research Plan Metadata
title: "Research Plan for VSA Caregiver, Mental Model and Content Comprehension Study for 10-10CG Document Upload, November 2021"
date: 2021-11-01
last_updated: 2021-11-01
team: "VSA Caregiver"
product: "10-10CG Application for Comprehensive Assistance for Family Caregivers"
product_area: "unauthenticated"

# Background Context
background:
  problem_statement: "Currently only ~35% of uploaded documents can be accepted as legal proof for a representative to sign on behalf of the Veteran. This causes pain points for CG team staff who must process applications, contact applicants who uploaded wrong documents, and possibly work through new applications. It also delays applications and creates redundant work for applicants. Hypothesis: Applicants think uploading any document will help their application; there is a loss of connection that the purpose is to enable a legal representative to sign on behalf of the Veteran; current copy doesn't provide enough clarity about what document to upload."
  product_location: "VA.gov 10-10CG online form - document upload section"
  user_familiarity: "Third iteration of representative document upload feature"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/product-outline.md"

# Research Design
methodology: "mixed-method: user interviews, mental model exploration, content comprehension testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Better understand Caregivers' mental model of the types of proof of legal representation they are accustomed to providing"
  - goal_2: "Better understand how Caregivers think about the nomenclatures of different types of legal representative documents"
  - goal_3: "Better understand Caregivers' familiarity with health care-specific legal documents"
  - goal_4: "Validate content comprehension of the list of documents to select from for document upload"
  - goal_5: "Validate that the new copy and flow leads to more accepted documents uploaded"

research_questions:
  - "How do Caregivers know what type of proof to provide in any given situation that they will be signing on behalf of a Veteran?"
  - "What is Caregivers' mental model of the different types of legal representative documents (specifically those that have a health care stipulation)?"
  - "Does the updated copy and flow provide the information needed for the Caregiver to make a confident decision of how to answer the questions and what document to upload?"
  - "Is that the correct decision (acceptable document is uploaded when relevant)?"
  - "Does the question 'Who will sign this application for the Veteran?' create a blocker because the Caregiver thinks that being a legal representative is a requirement for the Caregiver program?"

hypotheses:
  - "We will be able to gain insight to the Caregiver mental model for providing proof of legal representation"
  - "We will gain better understanding if the terms we use are recognizable and understood"
  - "We will gain a better understanding of Caregivers' familiarity with health care-specific stipulations on a power of attorney (POA) document"
  - "The Caregiver will be able to navigate through the form without thinking that being a legal representative is a requirement for the Caregiver program"

expected_outcomes: "Validate that updated copy and flow reduces incorrect document uploads from 65% to a lower rate. Understand caregiver mental models to inform future content improvements. Confirm that caregivers don't mistakenly believe legal representation is a program requirement."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "targeted recruitment for caregivers who are legal representatives"
  
  primary_criteria:
    - "Must be a caregiver to a Veteran"
    - "Must be a Veteran's legal representative (with authority to act on behalf of Veteran or legally vested with responsibility)"
    - "At least 2 participants who have no college degree"
    - "At least 1 participant over 55"
    - "At least 1 participant 30 or under"
    - "At least 2 participants who live in a rural or remote area"
    
  secondary_criteria:
    - "50% women, 50% men"
    - "50% people who identify as an ethnicity/race other than Caucasian"
    
  screener_questions:
    - question: "Are you a caregiver to a Veteran?"
      qualifying_response: "Yes"
    - question: "Are you a Veteran's legal representative?"
      qualifying_response: "Yes - person who has authority to act on behalf of the Veteran or is legally vested with responsibility or care of the Veteran"
      
participants:
  veterans: 0
  caregivers: 10
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2021-11-09 to 2021-11-16"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 15
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans and their families can apply for all benefits online"
    key_results: "Reduce incorrect document uploads and application processing time"
  - objective: "Increase Veteran satisfaction with VA.gov Benefit use and enrollment"
    key_results: "Improved document upload success rate and reduced application delays"
  - objective: "Decrease time to process online applications"
    key_results: "Fewer incorrect documents requiring follow-up and resubmission"
      
veteran_journey_phases:
  - "Getting Out"
  - "Taking Care of Myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/1010cg-mvp/Usability%20Study-Sign%20as%20Representative-%20February%202021"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/1010cg-mvp/Sign-as-Rep-Round2-Usability-April%202021"
    - "https://docs.google.com/presentation/d/1--9sY2qcPrxxmkSvJDUH5uShFyMgxCi3/edit?usp=sharing&ouid=106781647419399937562&rtpof=true&sd=true"
    
tags:
  - "AUD: Caregivers"
  - "PRDT: 10-10CG"
  - "BNFT: Family Member Benefits"
  - "mental-model"
  - "content-comprehension"
  - "user-interviews"
  - "document-upload"
  - "legal-representation"
  - "power-of-attorney"
  - "healthcare-decisions"
  - "remote"
  - "moderated"
  - "HDW: Desktop"
---

# Research Plan: VSA Caregiver, Mental model and Content-specific comprehension study for the 10-10CG document upload, November 2021

## Background

This study is being conducted by the VSA Caregiver team.	

The Caregiver team launched the digitized 10-10CG form October 1, 2020. Early in 2021 the team added functionality that allows a Veteran’s legal representative to be identified and documentation (e.g. health care power of attorney) to be optionally uploaded. There have been 3 iterations of this design.

Currently only ~35% of uploaded documents can be accepted and provide the necessary legal proof for a representative to sign on behalf of the Veteran. This causes pain points for both the staff in the field and for applicants.
- Pain point for CG team in the field that must process the applications, contact each applicant who uploads the wrong document, and possibly work through a new application with them

- Pain point for applicants as it could delay their application and create redundant work AKA filling out a whole new application

Our hypothesis for this problem is:
- Applicants think that uploading (any) document will help support their application

- There is currently a loss of connection that the purpose of uploading a document is to enable a legal representative to sign on behalf of the Veteran

- The current copy does not provide enough clarity to upload the correct document.
  -  The document must include a health care-related decision-making stipulation
  -  The Veteran is temporarily or permanently unable to make health care decisions for themselves
  -  Marriage and driver's licenses cannot be accepted as a legal representation document

### OCTO Objectives 

- Veterans and their families can apply for all benefits online
- Increase Veteran satisfaction with VA.gov Benefit use and enrollment, across all business lines
- Decrease time to successful complete and submit online transactions
- Decrease time to process online applications (vs. paper)

### How this research maps to the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)
- Getting out
- Taking care of myself
- Retiring 


## Goals

The goals of this research study are to: 

- Better understand Caregivers' mental model of the types of proof of legal representation they are accustomed to providing
- Better understand how Caregivers think about the nomenclatures of different types of legal representative documents 
- Better understand Caregivers' familiarity of health care-specific legal documents
- Validate content comprehension of the list of documents to select from for document upload
- Validate that the new copy and flow leads to more accepted documents uploaded

### Research questions

The research questions we want to address are: 

- How do Caregivers know what type of proof to provide in any given situation that they will be signing on behalf of a Veteran?
- What is Caregivers' mental model of the different types of legal representative documents? (specifically those that have a health care stipulation) 
- Does the updated copy and flow provide the information needed in order for the Caregiver to make a confident decision of how to answer the questions and what document to upload?
  -  Is that the correct decision (acceptable document is uploaded when relevant)?
- Does the question "Who will sign this application for the Veteran?" create a blocker because the Caregiver thinks that being a legal representative is a requirement for the Caregiver program?

### Hypothesis: 
- We will be able to gain insight to the Caregiver mental model for providing proof of legal representation
- We will gain better understanding if the terms we use are recognizeable and understood
- We will gain a better understanding of Caregivers' familiarity with health care-specific stipulations on a power of attorney (POA) document. 
- We think that the Caregiver will be able to navigate through the form without thinking that being a legal representative is a requirement for the Caregiver program.
 


## Methodology 
Mixed-method interview and mental model: open-ended questions, directed storytelling, provide ratings on a scale, and be asked to talk through mockups.


Tools: Zoom, [Mural](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1635267785345/2f0d4a4b46eb79c94cf93bcd0adb65ec8348554f?sender=u6ad375c1c8425e5bfec67027)

For more details, please see: [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/1010cg-mvp/Sign-as-a%20Rep-Round3-Oct2021/Content%20specific%20research/content-comprehension-conversation%20guide.md#conversation-guide-vsa-caregiver-mental-model-and-content-specific-comprehension-study-for-the-10-10cg-document-upload-november-2021)

Recruiting: Perigean contract


## Participants and Recruitment

We would like to work with Perigean to recruit for 5-6 **fulfilled sessions**. Therefore, we request that 10 sessions be scheduled.  

**Must have for participants**

- At least 2 participants who have no college degree 
- At least 1 participant over 55
- At least 1 participant 30 or under
- At least 2 participants who lives in a rural or remote area

All participants must answer yes to the following questions:

- Are you a caregiver to a Veteran? 

- Are you a Veteran’s legal representative? 
  - If confused, provide this explanation: A representative is a person who, under applicable law, has authority to act on behalf of the Veteran or who is legally vested with the responsibility or care of the Veteran. Being next of kin or being married to the veteran does not automatically constitute legal representation.


**Strive to have for participants**

- 50% women, 50% men
- 50% people who identify as an ethnicity/race other Caucasian



**Recruitment requirements**
 
- All must have a laptop/desktop and be willing to be complete the test on said laptop/desktop (no mobile devices for this study)
- Participants must be able to use Zoom, locate and use the chat function in Zoom, and to share their screen through Zoom.


## Timeline 

**Desired Timeline: November 9-12, 2021**

Session length: 1 hour

Please leave 15 minutes in between each session.


Team Availability | Time (EST)
------------------|--------------
November 9, 2021 | 8:00am - 2:00pm EST
November 10, 2021 | 8:00am - 9:00am EST and 11:00am - 1:00pm EST
November 11, 2021 | 8:00am - noon EST and 2:00pm - 6:00pm EST
November 12, 2021 | 10:30am - 5:00pm EST
_If needed:_  November 15, 2021 | 8:00am - 2:00pm EST
_If needed:_  November 16, 2021 | 8:00am - 5:00pm EST

## Team Roles	

- Moderator: Dene Gabaldon (dene.gabaldon@adhocteam.us)
- Research guide writing and task development: same as moderator
- Participant recruiting & screening: Perigean
- Project point of contact: Same as moderator
- Note-takers: None necessary 
- Observers: George Chewning (george.chewning@va.gov), Jen Sorensen (jen.sorensen@adhocteam.us)

## Resources
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/1010cg-mvp/Sign-as-a%20Rep-Round3-Oct2021/Content%20specific%20research/content-comprehension-conversation%20guide.md#conversation-guide-vsa-caregiver-mental-model-and-content-specific-comprehension-study-for-the-10-10cg-document-upload-november-2021)
- [Mural board](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1635267785345/2f0d4a4b46eb79c94cf93bcd0adb65ec8348554f?sender=u6ad375c1c8425e5bfec67027) for research
- Design iteration [overview presentation](https://docs.google.com/presentation/d/1--9sY2qcPrxxmkSvJDUH5uShFyMgxCi3/edit?usp=sharing&ouid=106781647419399937562&rtpof=true&sd=true)
- Sign as a rep [usability test 1](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/1010cg-mvp/Usability%20Study-Sign%20as%20Representative-%20February%202021)
- Sign as a rep [usability test 2](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/1010cg-mvp/Sign-as-Rep-Round2-Usability-April%202021)
