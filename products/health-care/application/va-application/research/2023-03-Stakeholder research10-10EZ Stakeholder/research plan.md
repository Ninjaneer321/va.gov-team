---
# Research Plan Metadata
title: "Research Plan for Health Enrollment Team, 10-10EZ Stakeholder Research, March 2023"
date: 2023-03-15
last_updated: 2023-03-15
team: "Health Enrollment Team"
product: "10-10EZ Health Care Application"
product_area: "unauthenticated"

# Background Context
background:
  problem_statement: "Veterans seeking to apply for VA health care face a lengthy online application (10-10EZ) with high cognitive load and information burden. OCTO is exploring options to reduce this burden by expanding Short Form flow to more Veterans and exploring integrations with IRS for income data and other systems for household data."
  product_location: "VA.gov health care application (10-10EZ)"
  user_familiarity: "Existing form that has been online for 6 years, recently updated with Short Form flow for Veterans with 50%+ disability rating"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/EZ(R)%20Update%20Capabilities/10-10EZR%20Product%20Brief%20(standalone%20form).md"

# Research Design
methodology: "semi-structured interviews"
research_format: 
  location: remote
  in_person_details:
    facility: null
    point_of_contact: null
    equipment: null
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Identify additional scenarios that can be eligible for Short Form flow (no household info needed)"
  - goal_2: "Identify any additional updates needed for the Military Service pages, and appetite to remove the question"
  - goal_3: "Learn about integration efforts with IRS or other data sources"
  - goal_4: "Learn more about HEC processes to determine eligibility and enrollment"
  - goal_5: "Learn more about pain points expressed by HEC and Veterans"

research_questions:
  - "What other scenarios, besides >50% disability rating, can allow a Veteran to skip the Household section (financials)?"
  - "How might we reduce the amount of information needed to determine eligibility and enroll a Veteran into health care?"
  - "What is the bare minimum information needed for HEC processing?"
  - "How is the additional military information used when processing an application?"
  - "What outside sources (apart from the application) are used to verify Veteran information?"
  - "What are some of the main reasons a Veteran is denied eligibility and/or enrollment?"
  - "What are some of the pain points experienced by Veterans and HEC staff?"

hypotheses:
  - "Additional scenarios beyond 50% disability rating exist that would allow Veterans to skip financial information"
  - "HEC stakeholders have specific requirements for minimum data needed to process applications"
  - "Integration with external data sources like IRS could reduce Veteran burden"
  - "Military service information may not be critical for all eligibility determinations"

expected_outcomes: "This data will help our team better understand requirements of the HEC processing team, identify our next iteration for Short Form flow, and consider questions to ask for integration efforts."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Direct recruitment"
  approach: "Purposive sampling of HEC stakeholders"
  
  primary_criteria:
    - "VA health care eligibility and enrollment SMEs"
    - "Stakeholders within VA business offices responsible for 10-10EZ processing"
    
  secondary_criteria:
    - "Representatives from multiple HEC locations"
    - "Staff with different roles in the enrollment process"
    
  screener_questions:
    - question: "Do you work with VA health care eligibility and enrollment?"
      qualifying_response: "Yes"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 5
  completed_sessions_goal: 3
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-03-20"
  pilot_participant: "Internal team member"
  research_dates: "2023-03-22 to 2023-04-05"
  research_review_submission: "2023-03-15"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 30
  max_sessions_per_day: 2
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase the usage and throughput of VA services"
    key_results: 
      - "Increase completion rate of online transactions"
      - "Increase percent of applications submitted online (vs. paper)"
  - objective: "Decrease the time Veterans spend waiting for an outcome"
    key_results:
      - "Reduce time from application to enrollment decision"
      
veteran_journey_phases:
  - "Getting out"
  - "Starting up"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Previous 10-10EZ research and Short Form flow implementation"
    
tags:
  - "PRDT: 10-10EZ"
  - "PRDT: Health-care-application"
  - "AUD: Stakeholders"
  - "AUD: HEC-staff"
  - "BNFT: Healthcare"
  - "BNFT: PACT-Act"
  - "RESRCH: Stakeholder-interviews"
  - "RESRCH: Semi-structured"
  - "RESRCH: Remote"
  - "RESRCH: Moderated"
  - "RESRCH: Discovery"
---

## Research Plan for 10-10EZ Stakeholders 
### Background
The VA currently has a digitized version of the 10-10EZ available on VA.gov, which has been online for about 6 years.  This form has gone through recent updates, specifically Short Form flow, to improve the process for Veterans who meet certain eligibility requirements (disability rating of 50% or higher) and do not need to provide financial information.
OCTO is considering options to reduce the cognitive load and information burden from the Veteran, while still providing HEC staff the information needed to determine health care eligibility and enroll the Veteran:
- solutions to expand Short Form flow to more Veterans
- solutions to integrate with IRS for Income data
- solutions to integrate with other systems that store Household data (Spouse, Dependents)

In this first round of research, we want to explore details around PACT Act, and additional scenarios in which a Veteran would not need to provide their Financial information. This would help us determine if we can provide a quick, low-effort solution to increase the percentage of Veterans who are eligible for the Short Form flow.  It will also help us determine if further updates are needed to the Military Service pages, including removing the additional service history checkbox page.


### OCTO Objectives
The outcomes of this research support the OCTO north stars:
- Increase the usage and throughput of VA services.
- Decrease the time Veterans spend waiting for an outcome.

### Research Goals
#### Primary Goals
- Identify the additional scenarios that can be eligible for Short Form flow (no household info needed)
- Identify any additional updates needed for the Military Service pages, and appetite to remove the question

#### Secondary goals
- Learn about integration efforts with IRS or other data sources
- Learn more about HEC processes to determine eligibility and enrollment
- Learn more about pain points expressed by HEC and Veterans

### Outcome
This data we gather through this research will help our team: 
- Better understand the requirements of the HEC processing team to enroll Veterans
- Identify our next iteration for Short Form flow
- Consider questions to ask for integration efforts

### Research questions
#### Primary goals
##### HEC stakeholders - Short form flow
- What other scenarios, besides >50% disability rating, can allow a Veteran to skip the Household section (financials)?
- How might we reduce the amount of information needed to determine eligibility and enroll a Veteran into health care? 
- Can you tell us more about the other qualifying factors? (based on service history scenarios)
- What is the bare minimum information needed for HEC processing?
- How does information beyond the bare minimum help make decisions to determine eligibility? 

##### HEC stakeholders - Military information
- How is the additional military information used when processing an application?
- What additional experiences could be listed here that would help guide the applicant to the Short Form flow?
- If additional PACT experiences were listed here, how would that information be used?
- If this page were not part of the data being sent for processing, how would that impact the determination of eligibility and/or enrollment?-

#### Secondary goal 
##### Integrations
- What outside sources (apart from the application) are used to verify Veteran information?
- Do any integrations exist today?
- How is the data from outside sources used?
- Does the data from these outside sources supercede the Veteran application input?
- What is the process for confirming income information with the IRS?  (as mentioned in the on-page content).
- Is there a general timeline for this during the enrollment process?
- Can any of this burden be automated or front-lifted to help add speed to decision for the Veteran?

##### Pain Points
- What are some of the main reasons a Veteran is denied eligibility and/or enrollment?
- What are some of the pain points experienced by Veterans who call into the support center?
- What are some of the pain points experienced by the HEC staff?

### Methodology
We’ll conduct semi-structured, moderated 30-60 minute interviews.  This will allow our team to speak directly with the stakeholders and get answers to specific questions, while leaving the conversation open for follow-up questions and discussion around information as we learn it.

Since VA prefers Teams over Zoom, we’ll conduct these interviews using Teams. - TBD

If we find that people are not able to join an interview, we will turn our conversation guide into a survey they can complete asynchronously. 

### Recruitment approach
Our intended audience for this research are VA health care eligibility and enrollment SMEs and stakeholders within the VA business offices responsible for 10-10EZ Veteran health care application processing. 

### Research materials
Conversation guide

### Timeline
Our timeline will be largely dependent on participant availability and responsiveness. Ideally, we would like to conduct research dates TBD.
- Length of sessions
- Session length: 
- Buffer time between sessions:  
- Maximum Sessions per day: 

### Team Roles
Please list the people who will be serving in each role. Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker
- Research guide writing and task development: 
- Moderator: 
- Participant recruiting: 
- Project point of contact: 
- Note-taker: 
- Observers: 
