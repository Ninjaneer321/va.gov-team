---
# Research Plan Metadata
title: "Research Plan for IAM with eBenefits, Benefits & Memorials 1, April 2020"
date: 2020-04-20
last_updated: 2026-02-10
team: "Benefits & Memorials 1"
product: "eBenefits"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "eBenefits is implementing Identity Access Management protocols to allow Veterans, their dependents, and VSOs to use multiple credentials (DS Logon, ID.me, MHV) to log in to eBenefits and complete tasks."
  product_location: "eBenefits platform"
  user_familiarity: "Iteration on existing eBenefits sign-in functionality"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/benefit-letters/IAM%20conversation%20guide.md"

# Research Design
methodology: "User Acceptance Testing (UAT), remote moderated observation"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Verify that Identity Access Management (IAM) protocols work properly for eBenefits"
  - goal_2: "Validate that users with different credential types (DS Logon, ID.me, MHV) can successfully log in to eBenefits"
  - goal_3: "Confirm users can access benefit letters after logging in with various credentials"

research_questions:
  - "Can a user with DS Logon Premium successfully log in and access benefit letters?"
  - "Can a user with ID.me credentials successfully log in and access benefit letters?"
  - "Can a user with My HealtheVet (MHV) Premium successfully log in and access benefit letters?"
  - "Can dependents with various credential types successfully log in and access information?"
  - "Can users create new ID.me credentials and successfully complete tasks?"

hypotheses:
  - "Users will be able to successfully log in to eBenefits using DS Logon Premium, ID.me, or MHV Premium credentials"
  - "The IAM implementation will allow Veterans and dependents to access benefit letters regardless of credential type used"
  - "Users who create new ID.me credentials during the session will be able to immediately use them to access eBenefits"

expected_outcomes: "Verification that the IAM code works properly and users can complete tasks with multiple credential types, informing deployment decisions for the authentication system."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment based on specific credential requirements"
  
  primary_criteria:
    - "Veterans or dependents with existing DS Logon Premium accounts where Veteran is receiving disability payments"
    - "Veterans or dependents with existing ID.me accounts where Veteran is receiving disability payments"
    - "Veterans or dependents with existing My HealtheVet (MHV) Premium accounts where Veteran is receiving disability payments"
    
  secondary_criteria:
    - "Veterans or dependents with DS Logon but willing to create new ID.me credentials during session"
    - "Access to computer for testing"
    - "No restrictions on age or geographic diversity"
    
  screener_questions:
    - question: "Do you have an existing DS Logon Premium, ID.me, or My HealtheVet Premium account?"
      qualifying_response: "Yes, with specified credential type"
    - question: "Are you or the Veteran you're associated with currently receiving disability payments from the VA?"
      qualifying_response: "Yes"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 12
  total_recruited: 24
  completed_sessions_goal: 24
  
# Timeline & Sessions
timeline:
  pilot_date: "2020-04-20"
  pilot_participant: "No pilot planned - verification testing with specific steps"
  research_dates: "2020-04-20 to 2020-04-24"
  research_review_submission: "2020-04-10"
  
session_details:
  duration_minutes: 30
  buffer_minutes: 0
  max_sessions_per_day: 8
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Enable secure access to VA services"
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results:
      - "Streamline authentication across VA platforms"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Previous eBenefits authentication research"
    
tags:
  - "PRDT: eBenefits"
  - "PRDT: Benefit-letters"
  - "BNFT: Disability"
  - "AUD: Veterans"
  - "AUD: Dependents"
  - "DSP: Help users to sign in"
  - "DSP: Identity"
  - "DSC: Logged in homepage"
  - "RESRCH: Remote"
  - "RESRCH: Moderated"
  - "RESRCH: UAT"
  - "AUTH: Login"
  - "AUTH: DS Logon"
  - "AUTH: ID.me"
  - "AUTH: MHV"
---

# Research Plan for IAM with eBenefits (which will verify access to Letters on eBenefits)
As a product owner, I need to create a research plan to share with my team.	
## Goals	
1. What product & team are you doing this research for?	Benefits & Memorials 1 and eBenefits
2. Background: eBenefits is putting Identity Access Management protocols in place to allow Veterans, their dependents, and VSO's to use multiple credentials to log in to eBenefits. We would like to work with users to verify that the work that was done allows users to log in and complete tasks, as identified in scenarios below.
3. Research questions: What question(s) do you hope to be able to answer after completing this research? Can a user log in successfully and obtain the desired outcome for each scenario 	
4. Hypothesis: What is your hypothesis for this research? Testing to verify that IAM works properly	
## Method	
1.	What method of research are you planning? 	
  Remote moderated observation where the user will be given specific steps to follow 
  	
2.	Why this method? How does this methodology help you answer your research questions? 	It will allow us to validate if the IAM code worked when a user can complete the task
3.	Where are you planning to do your research? Remote
4.	What will you be testing? Access to eBenefits	
5.  If remote: What tool do you plan to use? Zoom	
## Participants and Recruitment	
1.	Participant criteria: What are you looking for in a participant?	There are specific login requirements as follows:

--Veteran with existing DS Logon Premium account and is receiving benefit payments from the VA

--Non-Veteran dependent with existing DS Logon Premium account and where the Veteran is receiving disability payments from the VA

--Veteran with existing ID.me account where the Veteran is receiving disability payments from the VA

--Non-Veteran dependent with existing ID.me and where the Veteran is receiving disability payments from the VA

--Veteran with existing My Healthy Vet (MHV) Premium account where the Veteran is receiving disability payments from the VA

--Non-Veteran dependent with existing MHV Premium account and where the Veteran is receiving disability payments from the VA

--Veteran with DS Logon but no existing ID.me credential where the Veteran is receiving disability payments from the VA, and the Veteran will be willing to create and ID.me credential

--Non-Veteran dependent with DS Logon but no existing ID.me credential where the Veteran is receiving disability payments from the VA, and the dependent will be willing to create and ID.me credential

We'd like to get ~3 people for each of these login requirements. There are no restrictions on age, geographic diversity, but the person will need access to a computer.

2.	What is your recruitment strategy? 	
Existing recruiting contract

## When? 	
1.	Timeline: What dates do you plan to do research? 	
Desired start date for research sessions is April 20, 2020 for one week
2.	Prepare: When will the thing you are testing be ready? April 10, 2020
3. Length of Sessions: How long do you estimate each session will be? 30 minutes maximum
4.	Availability: If applicable, when would you like sessions scheduled? **Please list exact dates and times in EASTERN Standard Time**. Any time that works for the Veteran or the dependent during the week of April 20	
5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 	As this is more of a verification with specific steps to follow, I don't think we need to pilot it
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator:	Andrea Schneider (andrea.schneider@va.gov; 301-537-4450)
- Research guide writing and task development (usually but not always same as moderator):	Andrea Schneider
- Participant recruiting & screening:	Perigean POC?
- Project point of contact:	Andrea Schneider
- Participant(s) for pilot test:	
- Note-takers:	Michael Walker ("Walker, Michael (Insignia)" <Michael.Walker10@va.gov>)
- Observers:	("Rive, Courtney R. (Insignia)" <Courtney.Rive@va.gov>), "Raparthi, Mahesh (CSRA)" <Mahesh.Raparthi@va.gov>, "Bogale, Epharm S. (ERPi)" <Epharm.Bogale@va.gov>, "Beehler, Dale" <Dale.Beehler@va.gov>

## Resources	
- Project Brief: 	
*Project brief should live in the appropriate va.gov-team product folder, simply paste a link to it here*	
- Convo Guide	- https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/benefit-letters/IAM%20conversation%20guide.md

*Discussion guide should live in the appropriate va.gov-team product folder, simply paste a link to it here*	
- Synthesis	
*Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)* 	
- Lessons Learned	
*Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 	
- Read-Out/Results	
  - *Read-out presentation should live in the appropriate product repo and folder; paste a link to it here.* 	
  - ** Don't forget to add a link to your research folder to the research tracker! [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)
