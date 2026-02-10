---
# Research Plan Metadata
title: "Research Plan for VSA 10-10CG, Sign as Representative and Document Upload, January 2022"
date: 2021-10-01
last_updated: 2026-02-10
team: "VSA 10-10 Team"
product: "10-10CG Caregiver Application"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Currently only ~35% of uploaded documents can be accepted as legal proof for a representative to sign on behalf of a Veteran. This causes pain points for both processing staff and applicants who may need to resubmit applications."
  product_location: "10-10CG form on VA.gov"
  user_familiarity: "Iteration - improving existing representative workflow and document upload feature"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - "Validate the usability of the updated representative workflow"
  - "Validate if the new design and copy is likely to improve the percentage of accepted documents (Participants are aware that a medical stipulation is necessary)"
  - "Validate that this question will not cause applicants to drop-off"
  - "Validate that the updated design/copy better connects the representative question to the signature"

research_questions:
  - "Are participants uploading a document that can be legally accepted to give them the authority to sign this application on behalf of the Veteran?"
  - "Are participants confused by any particular aspect of the representative workflow?"
  - "Does the current representative workflow stop users from completing the form?"
  - "Are participants clear that the reason for the document upload is to enable them to sign as a representative on behalf of the Veteran?"

hypotheses:
  - "Participants will be able to navigate through the form relatively easily, but still might have confusion about what type of document is acceptable in this situation"
  - "Participants will have a greater understanding that the document required is one that gives the representative the legal power to make medical decisions on behalf of the Veteran"
  - "Participants will have an improved mental connection of the representative question and document upload to application signature"

expected_outcomes: "Findings will inform immediate adjustments to the representative workflow to improve document acceptance rates and reduce application processing delays"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "targeted recruitment"
  
  primary_criteria:
    - "Must be a caregiver to a Veteran (at least 3 participants)"
    - "OR must be a Veteran who has a caregiver (at least 2 participants)"
    - "At least 2 participants must be a Veteran's legal representative"
    - "Must have laptop/desktop and be willing to complete test on device (prototype not available for mobile)"
    - "Must be able to use Zoom, locate and use chat function, and share screen"
    
  secondary_criteria:
    - "50% women, 50% men"
    - "50% people who identify as an ethnicity/race other than Caucasian"
    - "At least 1 participant 35 or under and 1 participant over 55"
    - "At least 1 participant without a college degree"
    - "At least 1 participant who lives in a rural or remote area"
    
  screener_questions:
    - question: "Are you a caregiver to a Veteran?"
      qualifying_response: "Yes"
    - question: "Are you a Veteran who has a caregiver?"
      qualifying_response: "Yes"
    - question: "Are you a Veteran's legal representative?"
      qualifying_response: "Yes (prioritize at least 2)"
      
participants:
  veterans: 2
  caregivers: 3
  dependents: 0
  total_recruited: 8
  completed_sessions_goal: 5-6
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2022-01-18 to 2022-01-19"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 15
  max_sessions_per_day: 8
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans and their families can apply for all benefits online"
  - objective: "Increase Veteran satisfaction with VA.gov Benefit use and enrollment, across all business lines"
  - objective: "Decrease time to successful complete and submit online transactions"
  - objective: "Decrease time to process online applications (vs. paper)"
      
veteran_journey_phases:
  - "Getting out"
  - "Taking care of myself"
  - "Retiring"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/1010cg-mvp/Usability%20Study-Sign%20as%20Representative-%20February%202021"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/1010cg-mvp/Sign-as-Rep-Round2-Usability-April%202021"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/1010cg-mvp/Sign-as-a%20Rep-Round3-Oct2021/Content%20specific%20research"
    
tags:
  - "AUD: Caregivers"
  - "AUD: Veterans"
  - "PRDT: 10-10CG"
  - "PRDT: Caregiver application"
  - "BNFT: Healthcare"
  - "DSP: Forms"
  - "usability-testing"
  - "representative-workflow"
  - "document-upload"
  - "authenticated-experience"
  - "legal-documentation"
---

# Research Plan: VSA 10-10, Sign as a representative and upload legal document 10-10CG form, January 2022

## Background

This study is being conducted by the VSA 10-10 team (previously Caregiver team).	

The Caregiver team launched the digitized 10-10CG form October 1, 2020. Early in 2021 the team added functionality that allows a Veteran’s legal representative to be identified and documentation (e.g. health care power of attorney) to be optionally uploaded. 

Currently only ~35% of uploaded documents can be accepted and provide the necessary legal proof for a representative to sign on behalf of the Veteran. This causes pain points for both the staff in the field and for applicants.
- Pain point for CG team in the field that must process the applications, contact each applicant who uploads the wrong document, and possibly work through a new application with them

- Pain point for applicants as it could delay their application and create redundant work AKA filling out a whole new application

Our hypothesis for this problem is:
- Applicants think that uploading (any) document will help support their application
- There is currently a loss of connection that the purpose of uploading a document is to enable a legal representative to sign on behalf of the Veteran
- Applicants are clear that it should be a legal document that says that the representative can make **medical decisions** on behalf of the Veteran.

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

The goals of this user research study are to: 

- Validate the usability of the updated representative workflow.
- Validate if the new design and copy is likely to improve the percentage of accepted documents (Participants are aware that a medical stipulation is necessary).
- Validate that this question will not cause applicants to drop-off.
- Validate that the updated design/copy better connects the representative question to the signature.

### Research questions

The research questions we want to address are: 

- Are participants uploading a document that can be legally accepted to give them the authority to sign this application on behalf of the Veteran?
- Are participants confused by any particular aspect of the representative workflow?
- Does the current representative workflow stop users from completing the form?
- Are participants clear that the reason for the document upload is to enable them to sign as a representative on behalf of the Veteran?

### Hypothesis: 
- Participants will be able to navigate through the form relatively easily, but still might have confusion about what type of document is acceptable in this situation.
- Participants will have a greater understanding that the document required is one that gives the representative the legal power to make medical decisions on behalf of the Veteran.
- Participants will have an improved mental connection of the representative question and document upload to application signature.


## Methodology 

A task-based usability study will be conducted with UXPin, remotely with Zoom using the Perigean contract. 


## Participants and Recruitment

We would like to work with Perigean to recruit for 5-6 **fulfilled sessions**. Therefore, we request that 8 sessions be scheduled.  

**Must have for participants**

All participants must be yes to one of the following questions:

- Are you a caregiver to a Veteran?  (must recruit at least 3)

or

- Are you a Veteran who has a caregiver? (must recruit at least 2)


**Must have for at least 2 participants:** 

- Are you a Veteran’s legal representative? 
  - If confused, provide this explanation: A representative is a person who, under applicable law, has authority to act on behalf of the Veteran or who is legally vested with the responsibility or care of the Veteran. Being next of kin or being married to the veteran does not automatically constitute legal representation.


**Good to have for participants**
 
- 50% women, 50% men
- 50% people who identify as an ethnicity/race other Caucasian
- At least 1 participant 35 or under and 1
- At least 1 participant over 55
- At least 1 participant that does not have a college degree 
- At least 1 participant who lives in a rural or remote area


**Recruitment requirements**
 
- All must have a laptop/desktop and be willing to be complete the test on the device (prototype is not available for mobile)
- Participants must be able to use Zoom, locate and use the chat function in Zoom, and to share their screen through Zoom.


## Timeline 

**Desired Timeline: TBD**

Session length: 45 minutes 

Please leave 15 minutes in between each session.

Notetaking: Please designate someone from Perigeon to take notes

Team Availability | Time (EST)
------------------|--------------
January 18, 2022 | 10:00am - 7:00pm EST
January 19, 2022 | 2:00pm - 7:00pm EST



## Team Roles	

- Moderator: Dene Gabaldon (dene.gabaldon@adhocteam.us)
- Research guide writing and task development: same as moderator
- Participant recruiting & screening: Perigean
- Project point of contact: Same as moderator
- Note-takers:Perigeon
- Observers: George Chewning (george.chewning@va.gov), Sharon Kasimow (sharon.kasimow@gcio.com), Lisa Zapson (lisa.zapson@adhocteam.us), James Childers (james.childers@gcio.com)

## Resources
- Design iteration [Sketch mockup](https://www.sketch.com/s/5a676881-7aa8-4054-9b6e-34d86ced43d8/p/6F53EA53-0D5E-46F7-B420-CF62EA0167CE)
- [Prototype UX Pin link]([Prototype link](https://preview.uxpin.com/3bf6496017f55041a94c2cfc8009c35dad5a79f2#/pages/137666459/simulate/no-panels?mode=i)
)
- Sign as a rep [usability test 1](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/1010cg-mvp/Usability%20Study-Sign%20as%20Representative-%20February%202021)
- Sign as a rep [usability test 2](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/1010cg-mvp/Sign-as-Rep-Round2-Usability-April%202021)
- Content specific research [Mental model and Content-specific comprehension study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/1010cg-mvp/Sign-as-a%20Rep-Round3-Oct2021/Content%20specific%20research)




