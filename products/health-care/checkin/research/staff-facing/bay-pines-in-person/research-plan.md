---
# Research Plan Metadata
title: "Research Plan for Check-In Bay Pines Staff Interviews, June 2022"
date: 2022-06-02
last_updated: 2022-06-02
team: "Check-In Experience"
product: "Check-In"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Evaluate pre-check-in and check-in at additional VAMCs and test travel reimbursement integration prototypes with staff"
  product_location: "VA.gov check-in and pre-check-in experience"
  user_familiarity: "Iteration - evaluating implementation and testing new travel reimbursement integration"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-outline.md"

# Research Design
methodology: "semi-structured interviews, usability testing"
research_format: 
  location: in-person
  in_person_details:
    facility: "Bay Pines VAMC and Bay Pines CBOCs"
    point_of_contact: "Facility staff coordination"
    equipment: "Sketch prototypes for travel reimbursement"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Evaluate effectiveness of pre-check-in and check-in with MSAs at Bay Pines"
  - goal_2: "Identify strengths, pain points and opportunities for improvement within the check-in ecosystem"
  - goal_3: "Test travel reimbursement prototypes with staff to understand optimal experience for incorporating into check-in"

research_questions:
  - "What's working and not working with pre-check-in and check-in?"
  - "How often are MSAs interacting with Veterans during the check-in process?"
  - "What's been the impact on MSA workload and how comfortable are MSAs troubleshooting errors or clearing review flags?"
  - "Are MSAs using VSE-CS? If so, how is it being used and why?"
  - "When do Veterans expect to complete a travel reimbursement claim in relation to their appointment?"
  - "What steps should a Veteran have to complete for filing a travel reimbursement claim?"

hypotheses:
  - "The pre-check-in experience makes day-of check-in easier for staff since contact information has been reviewed"
  - "MSAs will have limited interaction with Veterans during check-in since Veterans are able to check-in on their smartphone"
  - "The number of applications that MSAs use to manage the check-in process will be reduced and, therefore, workload will be decreased"
  - "MSAs are comfortable with troubleshooting error messages with Veterans and know how to clear appropriate review flags in VSE"
  - "Travel clerks will indicate that the workflow in the travel reimbursement prototypes are optimal for Veterans and that no required steps are missing"

expected_outcomes: "Findings will inform check-in product improvements and validate/refine travel reimbursement integration approach"

# Recruitment & Participants
recruitment:
  recruiting_partner: "On-site recruitment"
  approach: "Convenience sampling of MSAs and travel clerks"
  
  primary_criteria:
    - "Medical Support Assistants (MSAs) at Bay Pines facilities"
    - "Travel clerks familiar with reimbursement process"
    - "Staff involved in check-in process"
    
  secondary_criteria:
    - "Staff with varying levels of experience"
    - "Clinical staff involved in check-in workflow"
    
  screener_questions:
    - question: "N/A - on-site recruitment"
      qualifying_response: "N/A"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 8
  completed_sessions_goal: 6
  
# Timeline & Sessions
timeline:
  pilot_date: "N/A"
  pilot_participant: "Kristen McConnell"
  research_dates: "2022-06-21 to 2022-06-24"
  research_review_submission: ""
  
session_details:
  duration_minutes: 30
  buffer_minutes: 15
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Increase usage of digital, self-service tools"
  - objective: "Increase completion rate of online transactions"
    key_results:
      - "Decrease time to successfully complete and submit online transactions"
      
veteran_journey_phases:
  - "Taking care of myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/staff-facing/st-louis/pilot-feedback/research-plan.md"
    
tags:
  - "health-care"
  - "patient-check-in"
  - "PCI"
  - "HCE"
  - "check-in"
  - "staff-facing"
  - "in-person"
  - "Bay-Pines"
  - "generative"
  - "moderated"
  - "staff"
  - "semi-structured-interviews"
  - "discovery"
  - "AUD: VA Staff"
  - "BNFT: Healthcare"
  - "PRDT: Check-in"
study: Check-In Bay Pines Staff Interviews
type: UAT
---

# Check-In Research Plan for In-Person Staff Interviews at Bay Pines

Date: June 2, 2022

## Background 

The Modernized Check-In Team is reimaging the experience between a Veteran scheduling a medical appointment and having their appointment. In particular, the Modernized Check-In Team has created the portion of the ecosystem that enables Veterans to utilize their smartphone to “check in” to their appointments through VA.gov, which lets the VA know the patient has arrived for their appointment. 

Check-in enables Veterans with appointments to: 

- Review and confirm their information prior to an appointment, also known as pre-check-in, which includes: 

  - Confirming their appointment
  - Reviewing their contact information 
  - Reviewing their emergency contact information
  - Reviewing their next of kin information 

- Utilize their smartphone to check-in on the day of their appointment 

<img width="1134" alt="Screen Shot 2022-06-06 at 11 19 23 AM" src="https://user-images.githubusercontent.com/101129355/172191216-3de723ac-4a5c-4f3c-acb8-c08f6ad356cd.png">

In speaking with the [Beneficiary Travel Reimbursement Path Analysis Team](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/104), we also know that travel reimbursement is being considered for integration with the check-in product. The following draft mock ups have been created to communicate the workflow: 

[Beneficiary Travel Reimbursement Prototype #1](https://www.sketch.com/s/f055a969-7909-4a63-9bb8-1dcbed216a42/a/l12VPzo/play)

[Beneficiary Travel Reimbursement Prototype #2](https://www.sketch.com/s/f055a969-7909-4a63-9bb8-1dcbed216a42/a/52Qv7ed/play)   

### OCTO Objectives 

This research plan supports the following OCTO objectives: 

- Veterans can manage their health services online
- Logged-in users have a personalized experience, with relevant and time-saving features
- Increase completion rate of online transactions
- Increase usage of digital self-service tools
- Decrease time to successfully complete and submit online transactions 

### Veteran Journey

This research plan maps to the following moment within the Veteran journey:  

<img width="1178" alt="Screen Shot 2022-06-06 at 11 08 08 AM" src="https://user-images.githubusercontent.com/101129355/172188932-7bbb1fdf-efc1-43d2-9c05-315bf1612638.png">

## Research Goals 

Our goal for this research is to utilize our [baseline research plan for the St. Louis pilot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/staff-facing/st-louis/pilot-feedback/research-plan.md) to evaluate pre-check-in and check-in at additional VAMCs. In addition, the Modernized Check-In Team is building off of the [beneficiary travel research plan](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/104) that is pointing to a potential solution that integrates travel reimbursement with check-in. Specifically, we’re looking to accomplish the following: 

- Evaluate the effectiveness of pre-check-in and check-in with MSAs
- Identify strengths, pain points and opportunities for improvement within the check-in ecosystem 
- Understand how, if at all, MSAs are using VSE-CS
- Gain insights on understanding the optimal experience for incorporating travel reimbursement into the check-in experience for Veterans 

### Research Questions

- What’s working and not working with pre-check-in and check-in? 
- What changes could help improve the check-in process?  
- How often are MSAs interacting with Veterans during the check-in process? 
- Are MSAs checking in Veterans with VSE that need help versus requiring them to use mobile check in? 
- What’s been the impact on MSA workload? 
- How often are MSAs troubleshooting errors or clearing review flags?
- How comfortable are MSAs troubleshooting errors or clearing review flags? 
- What are the issues that MSAs are helping Veterans troubleshoot?  
- What changes in MSA to clinician communication for check-in have changed?
- What changes to check-in can help improve MSA to clinician communication for check-in?  
- Are MSAs using VSE-CS? If so, how is it being used and why is it being used?  
- How do Veterans feel about pre-check-in and check-in?
- When do Veterans expect to complete a travel reimbursement claim in relation to their appointment? 
- What steps should a Veteran have to complete for filing a travel reimbursement claim? 
- What steps could be removed from the existing BTSSS process to make it easier for Veterans to file a claim?  

### Hypothesis 

1. The pre-check-in experience makes day-of check-in easier for staff since contact information, emergency contact information and next of kin information has been reviewed. 
1. MSAs will have limited interaction with Veterans during check-in since Veterans are able to check-in on their smartphone. 
1. MSAs will check Veterans in with VSE that don’t have a smartphone or have difficulty using their smartphone. 
1. MSAs will have shorter lines of Veterans waiting to be checked in. 
1. The number of applications that MSAs use to manage the check-in process will be reduced and, therefore, workload will be decreased. 
1. MSAs are comfortable with troubleshooting error messages with Veterans and know how to clear appropriate review flags in VSE. 
1. MSAs will indicate that communication between MSAs and clinicians is frictionless due to the staff applications working as intended. 
1. Travel clerks will indicate that the workflow in the travel reimbursement prototypes are optimal for Veterans and that no required steps are missing. 

## Method

This research will be conducted as in-person interviews at Bay Pines VAMC and other clinics that the Bay Pines team is able to identify. Our preference is to visit various clinics at Bay Pines VAMC and an additional two CBOCs that are scheduled during times of high appointment check-ins. 

We will ask MSAs questions from our [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/staff-facing/bay-pines-in-person/conversation-guide.md) to measure their perceptions on pre-check-in, check-in, etc. and document responses, comments, improvements, etc.  

We will also incorporate in-person usability testing on the travel reimbursement prototypes with staff familiar with this process. E.g., MSAs, travel clerks, etc. 

Two researchers will be conducting this research. In addition, at least one product owner (Stephen Barrs) from VA OCTO will be in attendance. 

### Location 

Bay Pines VAMC 
Bay Pines VAMC travel reimbursement office 
Bay Pines CBOCs

### Research Materials

[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/staff-facing/bay-pines-in-person/conversation-guide.md)<br>
[Conversation guide brainstorm for beneficiary travel (Mural)](https://app.mural.co/t/vfscie8528/m/agilesixapplications0942/1654533159772/a1b103ce14dee9165bc524443569ce962daca601?sender=u83bc52d7fa73658f84f27755)<br>
[Beneficiary Travel Reimbursement Prototype #1](https://www.sketch.com/s/f055a969-7909-4a63-9bb8-1dcbed216a42/a/l12VPzo/play)<br>
[Beneficiary Travel Reimbursement Prototype #2](https://www.sketch.com/s/f055a969-7909-4a63-9bb8-1dcbed216a42/a/52Qv7ed/play)    

## Timeline 

Travel date(s): June 21-24, 2022

## Team Roles

Moderator: Ben Brasso ([ben.brasso@agile6.com](mailto:ben.brasso@agile6.com))<br>
Research guide writing and task development: Ben Brasso<br>
Participant recruiting & screening: In-person <br>
Project point of contact: Stephen Barrs ([stephen.barrs@va.gov](mailto:stephen.barrs@va.gov)), Patrick Bateman ([patrick.bateman@va.gov](mailto:patrick.bateman@va.gov)), Lori Pusey ([lori.pusey@agile6.com](mailto:lori.pusey@agile6.com))<br>
Participants for pilot test: Kristen McConnell ([kristen.mcconnell@adhocteam.us](mailto:kristen.mcconnell@adhocteam.us))<br>
Note-takers: Lori Pusey, Kristen McConnell, Nira Datta ([nira.datta@civicactions.com](mailto:nira.datta@civicactions.com))
