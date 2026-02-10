---
# Research Plan Metadata
title: "Research Plan for Login.gov Adoption Discovery, November 2022"
date: 2022-10-31
last_updated: 2022-11-04
team: "Identity Team"
product: "Login.gov Adoption"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Multiple sign-on options for accessing My HealtheVet and VA services do not meet required security standards and create user frustration and confusion. Need to migrate existing users and onboard new users to Login.gov as a compliant single sign-on credentialing platform."
  product_location: "Login/Authentication system for My HealtheVet and VA.gov services"
  user_familiarity: "New - Login.gov exists but migration pathways and adoption strategies need validation"
  product_brief_url: "N/A"

# Research Design
methodology: "mixed-methods: scenario validation, service prototype testing, contextual intercepts"
research_format: 
  location: in-person
  in_person_details:
    facility: "Tampa VA Medical Center (Primary Care Annex and Main Facility)"
    point_of_contact: "Mike Prusaitis, Kit Casey, Samara Watkiss"
    equipment: "Audio recording device, camera, pens and notebooks, research stimuli"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand how we can intervene to ensure that new generations of Veterans use Login.gov to access My HealtheVet from the start"
  - goal_2: "Understand what in-person support will enable Veterans to create and use a Login.gov account to access My HealtheVet"
  - goal_3: "Understand how the greatest number of Veterans can use multi-factor authentication options, including security keys"
  - goal_4: "Understand how setting up and maintaining shared access might work for Veterans and non-Veterans"

research_questions:
  - "At what moment or moments does it make the most sense for proactive intervention to encourage the creation of a Login.gov account?"
  - "What is the most effective way of messaging and communicating the value of Login.gov?"
  - "How can we best support the Veteran and non-Veteran roles post-initial setup of Login.gov?"
  - "During the in-person proofing process and account migration, what technical issues arise and other challenges arise for Veterans?"
  - "How might messaging, support materials, and new workflows alleviate these challenges?"
  - "How can we best explain the value and process of MFA?"
  - "Could Security keys offer a better MFA option for Veterans with unique challenges?"
  - "What options for MFA would allow more Veterans to migrate to Login.gov?"
  - "How can MFA support Veteran caregivers who need to access certain portions of Veteran information?"
  - "If given the option to opt out of using MFA, would Veterans take it?"

hypotheses:
  - "Veterans go through extensive identity proofing when applying to get VA Healthcare and acquiring their VHIC. Getting the photo for the VHIC would be appropriate moment for Veterans to proactively set up Login.gov accounts."
  - "Getting the messaging correct is key for Login.gov adoption. Messaging must help to clarify that Login.gov is a portal, not a destination, and should resonate with Veterans and MHV coordinators."
  - "Offering an in-person proofing option will increase adoption of Login.gov and make it a viable option for Veterans who are not able to complete the process online."
  - "Security keys might be an MFA option that is easier for Veterans with technology issues and disabilities to use and provide additional benefits for managing caregiver access."

expected_outcomes: "Service blueprint, recommended concepts and guidance for messaging related to how the VA can offer in-person proofing to increase the adoption of Login.gov, including supporting the user in setting up multi-factor authentication. Recommendations for interventions to encourage Veterans to create Login.gov accounts early on. Documentation of opportunities for future research and exploration."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Maximum variation across two user groups (Migration and Proactive)"
  
  primary_criteria:
    - "Migration Group (60-70%): Active My HealtheVet premium users who do not have a Login.gov account"
    - "Proactive Group (30-40%): Recently received VHIC (within 6 months), no My HealtheVet account, no Login.gov account"
    - "Diverse representation across sex, LGBTQ+, race, age, benefits, branch, education, residence, hardware, assistive technology, and cognitive impairments"
    
  secondary_criteria:
    - "Veterans who have tried and failed to set up a Login.gov account (preferred for Migration Group)"
    - "7 participants requiring caregiver assistance"
    
  screener_questions:
    - question: "Do you have a Login.gov account?"
      qualifying_response: "No"
    - question: "Do you have a My HealtheVet account?"
      qualifying_response: "Yes (Migration Group) or No (Proactive Group)"
    - question: "Have you or someone acting on your behalf logged into My HealtheVet in the last 3 months?"
      qualifying_response: "Yes (Migration Group only)"
    - question: "Do you have a VHIC (Veteran Health Identification Card)?"
      qualifying_response: "Yes (Proactive Group only)"
    - question: "When did you get your VHIC?"
      qualifying_response: "Within the last 6 months (Proactive Group only)"
      
participants:
  veterans: 20
  caregivers: 7
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 10

# Timeline & Sessions
timeline:
  pilot_date: "2022-10-20"
  pilot_participant: "alicia.spanswick@frogdesign.com"
  research_dates: "2022-10-31 to 2022-11-04"
  research_review_submission: "2022-10-03"
  
session_details:
  duration_minutes: 90
  buffer_minutes: 60
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: "Increase successful login completion and reduce authentication barriers"
  - objective: "Veterans and their families trust the security accuracy and relevancy of VA.gov"
    key_results: "Implement secure compliant authentication system with Login.gov"
      
veteran_journey_phases:
  - "Starting up: Attending to health needs"
  - "Retiring: Taking care of my health"
  - "Aging: Managing my declining health"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Login.gov adoption discovery research findings.md (same directory)"
    
tags:
  - "AUD: Veterans"
  - "AUD: Caregivers"
  - "BNFT: Healthcare"
  - "PRDT: Login.gov"
  - "PRDT: My-HealtheVet"
  - "DSP: Help users to sign in"
  - "DSP: Help users to recover from an error"
  - "semi-structured-interviews"
  - "scenario-validation"
  - "service-design"
  - "contextual-inquiry"
  - "in-person"
  - "multi-factor-authentication"
  - "identity-proofing"
  - "accessibility"
  - "security-keys"
---

# Research Plan: Login.gov Adoption Discovery
November 2022

## Background
Currently there are multiple ways to sign on and access My HealtheVet (MHV) and other VA services.  These login options do not all meet required security standards and also create user frustration and confusion.  Through our research we hope to explore how the VA can most successfully migrate existing users, and onboard new user to Login.gov (which is a compliant, single sign-on credentialing platform). While Login.gov does currently exist, our research hopes to uncover the best ways to support Veterans, non-Veteran roles, and VA staff in this transition.  

### OCTO Objectives 

- Veterans can manage their health services online 
- Veterans and their families trust the security accuracy and relevancy of VA.gov  

### Veteran Journey
Although being able to use Login.gov to securely access My HealtheVet and other VA services is relevant throughout a Veteran’s journey, we are particularly focused on a few life stages and their corresponding moments that matter. We are interested in proactively intervening with Veterans who are starting-up and attending to health needs to make sure they are able to create a Login.gov account they will use to access My HealtheVet going forward. We are also focused on Veterans who are retiring and taking care of their health, and Veterans who are aging and managing their declining health to make sure they have clear and technically-feasible options to transition their access to My HealtheVet to Login.gov and ID.me. 

Are there moments that matter?  
- Starting-up: Attending to heath needs 
- Retiring: Taking care of my health 
- Aging: Managing my declining health 

## Research Goals	

1. Understand how we can intervene to ensure that new generations of Veterans use Login.gov to access My HealtheVet from the start.
2. Understand what in-person support will enable Veterans to create and use a Login.gov account to access My HealtheVet.
3. Understand how the greatest number of Veterans can use multi-factor authentication options, including security keys.
4. Understand how setting up and maintaining shared access might work for Veterans and non-Veterans. 

### Outcome
Coming out of our research we will create a service blueprint, recommended concepts and guidance for messaging related to how the VA can offer in-person proofing to increase the adoption of Login.gov, including supporting the user in setting up multi-factor authentication and using a Login.gov account to access My HealtheVet. We will also provide recommendations for interventions to encourage Veterans to create Login.gov accounts early on and use that exclusively to access My HealtheVet. Additionally, we will document opportunities for future research and exploration.  

### Research questions

1. Understand how we can intervene proactively to ensure that new generations of Veterans use Login.gov or ID.me to access MHV from the beginning. 
* At what moment or moments does it make the most sense for proactive intervention to encourage the creation of a Login.gov account? 
* What is the most effective way of messaging and communicating the value of Login.gov? 
* How can we best support the Veteran and non-Veteran roles post-initial setup of Login.gov?

2. Understand what in-person support will enable Veterans who have technical or other challenges to create a Login.gov account and use Login.gov to access their MHV account. 
* What is the most effective way of messaging and communicating the value of Login.gov and the need to migrate to using Login.gov to access MHV?  
* During the in-person proofing process and account migration, what technical issues arise and other challenges arise for Veterans?  
* How might messaging, support materials, and new workflows alleviate these challenges? 

3. Understand how we can make multi-factor authentication usable for the greatest number of Veterans. 
* How can we best explain the value and process of MFA? 
* Could Security keys offer a better MFA option for Veterans with unique challenges? 
* What options for MFA would allow more Veterans to migrate to Login.gov? 
* How can MFA support Veteran caregivers who need to access certain portions of Veteran information? 
* If given the option to opt out of using MFA, would Veterans take it? 

### Hypotheses

We know that Veterans go through extensive identity proofing when applying to get VA Healthcare and acquiring their VHIC. We belief that the while getting the photo for the VHIC would be appropriate moment for Veterans to proactively set up Login.gov accounts.    

We believe that getting the messaging correct is key for Login.gov adoption and use after adoption. Messaging must help to clarify that Login.gov is a portal, and not a destination so as to remove confusion. Additionally, communications should resonate with Veterans and MHV coordinators, and illuminate the benefits so that the efforts are more welcomed and positively perceived. Our research should provide insight into what resonates with Veterans and what is distracting or off-putting. 

We know that many Veterans choose to use in-person proofing to upgrade their MHV account to premium. We believe that offering an in-person proofing option will increase adoption of Login.gov and make it a viable option for Veterans who are not able to complete the process online. We want to validate this belief and explore how much of the process needs to be in person and what kind of support is needed. 

For compliant identity proofing, MFA is required. Unfortunately, current MFA options present challenges to Veterans with technology issues, and disabilities. We hypothesize that security keys might be an MFA option that is easier for these Veterans to use and provide some additional benefits for managing caregiver access. 

## Method	

We are planning to use several research methods including: 

1. Scenario Validation (Evaluative) - Here we will present Veterans with a scenario that presents a possible approach to creating a Login.gov account and accessing MHV. At various points throughout the scenario will stop to gauge if the Veteran finds the proposed solution useful, clear and appropriate, as well as surfacing concerns or challenges.  

2. Service Prototype Testing (Evaluative) – We will use this in conjunction with the scenario to walk the Veteran through a service prototype of how they would in-person proof, set up MFA (including security keys), and secure a Login.gov account at a VA facility. From here we can better evaluate the workflow and support needed. 

3. Intercepts (Evaluative) – These will be contextual intercepts at a VA facility.  We will share various messaging options around how Login.gov is explained as well as its use and benefits. We hope to understand how to make the messaging clear, effective, received positively, memorable, and likely to result in the desired action of using Login.gov. 

### Location

We will conduct research in-person. We hope to meet our recruitment targets with participants who can meet at us at one of two (2) VA Medical Centers. A secondary goal would be to have one of these Medical Centers be Tier 1 and one of them be Tier 3.

- VA Medical Center in Continental United States 1: TBD (Tier 1)
- VA Medical Center in Continental United States 2: TBD (Tier 3) 

***Update: This research took place at the [Tampa VA Medical Center](https://www.va.gov/tampa-health-care/). We held interviews at the Primary Care Annex and ran intercepts at the Eligibility and Enrollment offices at the Primary Care Annex and the Main Facility.***

### Research materials

- Audio recording device 
- Camera 
- Pens and notebooks 
- Research stimuli

#### Conversation guides (*Need to add links)

- Conversation Guide Scenario 1: Reactive migration and re-proofing
- Conversation Guide Scenario 2: Preliminary migration and delayed proofing
- Conversation Guide Scenario 3: Proactive migration (*Update: We did not hold any Scenario 3 scheduled interviews)
- Conversation Guide Intercepts

## Recruitment

We plan to work with Perigean to recruit a diverse group of 20 Veterans across 1-3 locations and two user groups.

***Update: We worked with Perigean and were able to recruit 10 Veterans for scheduled interviews at one location. We focused on one user group in scheduled interviews, instead of two, due to being unable to recruit Proactive users. For this reason, we focused our intercept efforts on Proactive users.***

### Recruitment approach & Screener Questions

#### Primary Criteria: 

Migration Group: 12-14 (60-70%) of participants will be representative of the “Reactive” set of Veteran users who must migrate to a new account. These participants should be a diverse group of active My HealtheVet premium users who do not have a Login.gov account. Ideally, some or all would be Veterans who have tried and failed to set up a Login.gov account.

Screener Questions: 
1. Do you have a Login.gov account? (Required: No) 
2. Have you tried to set-up a Login.gov account in the past, but have been unsuccessful? (Preferred but not required: Yes) 
3. Do you have a My HealtheVet account? (Required: Yes) 
4. Have you or someone acting on your behalf logged into My HealtheVet in the last 3 months? (Required: Yes) 

Proactive Group: 6-8 (30-40%) of participants would be representative of the “Proactive” set of Veteran users who must start from the beginning with Login.gov and do not currently have a My HealtheVet account. Ideally, these users would have recently signed up for or received a VHIC (Veteran Health Identification Card). 

Screener Question: 
1. Do you have a VHIC (Veteran Health Identification Card)? (Required: Yes) 
2. When did you get your VHIC? (Required: Within the last 6 months) 
3. Do you have a My HealtheVet account? (Required: No) 
4. Do you have a Login.gov account? (Required: No) 

Intercept Group: Participants for the intercepts do not require recruitment. Subject to approval from all relevant parties, our intention is to set up a table with stimuli in or near a waiting area, a My HealtheVet coordinator's office and/or the Eligibility and Enrollment office in VA Medical Centers where we are already conducting scheduled research interviews. Participants will be able to engage in with the stimuli and provide feedback for 5-15 minutes.

#### Recruitment criteria

|Total requested|Completed sessions|Veterans|Family Member|Caregivers|Service Members|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20|16|20|||| 

***Update: We worked with Perigean and were able to recruit 10 Veterans for scheduled interviews.***

#### Criteria breakdown  

|                |Migration: 13 total|Procative: 7 total|
|----------------|:----------:|:------:|
|***SEX***       |            |        |
|*Various*       |     4      |  1     |
|Male            | 2 minimum  |2 minimum|
|Female          | 7 minimum  |   4    |
|***LGBTQ+***    |            |        |
|*Various*       | 1 minimum  |1 minimum|
|Gay             |            |        |
|Lesbian         |            |        |
|Bisexual        |            |        |
|Asexual         |            |        |
|Transgender     |            |        |
|Non-Binary      |            |        |
|Gender-fluid    |            |        |
|Queer           |            |        |
|Two-Spirit      |            |        |
|       ---      |     ---    |   ---  |       
|***RACE***      |            |        |              
|*Various*       |      5     |    3   |
|Black           |      2     |   1    |             
|White           |            |        |                 
|Latinx          |      2     |    1   |                         
|Asian           |      2     |   1    |            
|Native          |      1     |        |               
|Pacific Islander|      1     |   1    |                 
|       ---      |     ---    |   ---  | 
|***AGE***       |            |        |
|*Various*       |      2     |    2   |
|18-24 yo        |      1     |        |
|25-34 yo        |      1     |        |
|35-44 yo        |      1     |        |
|45-54 yo        |      1     |   1    |
|55+ yo          |      7     |   4    |
|      ---       |     ---    |   ---  |
|***BENEFITS***  |            |        |
|*Various*       |       4    |    2   |
|*No Ben/Ser Exp*|       0    |    0   |
|Disability      |            |        |
|Education       |            |        |   
|Employment      |            |        |
|Finances        |            |        |
|Healthcare      |      9     |   5    |
|Housing         |            |        |
|Life Insurance  |            |        |
|Memorialization |            |        |
|Pension         |            |        | 
|       ---      |     ---    |   ---  |     
|***BRANCH***    |            |        |
|*Various*       |      3     |   2    |
|Marine Corps    |      2     |    1   |
|Army            |      2     |    1   |
|Navy            |      2     |    1   |
|Air Force       |      2     |    1   |
|Space Force     |            |        |
|Coast Guard     |            |        |
|Nat. Guard      |      2     |    1   |
|Pub Hlth Corps  |            |        |
|       ---      |     ---    |   ---  |
|***EDUCATION*** |            |        |
|*Various*       |     4      |   1    |
|Elementary      |            |        |
|Intermediate    |            |        |
|GED             |     3      |   2    |
|High School     |     3      |   2    |
|Some College    |     3      |   2    |
|Associate's     |  1 maximum |1 maximum|
|Bachelors       |  1 maximum |1 maximum|
|Masters         |  1 maximum |   0    |
|Professional    |  1 maximum |1 maximum|
|Doctoral        |  1 maximum |   0    |
|       ---      |     ---    |   ---  |
|***RESIDENCE*** |            |        |
|*Various*       |      4     |    1   |
|Urban           |      2     |    2   |
|Rural           |     7      |    4   |
|       ---      |     ---    |   ---  |
|***HARDWARE***  |            |        |
|*Various*       |     6      |   4    |
|Desktop         |            |        |
|Laptop          |            |        |
|Smartphone      |     5      |   3    |
|Tablet          |     2      |   1    |
|       ---      |     ---    |   ---  |
|***WEBSITE***   |            |        |
|*Various*       |            |        |
|VA.gov(has acct)|            |        |
|VA.gov(no acct) |            |        |
|MyHealtheVet    |            |        |
|Ebenefits       |            |        |
|       ---      |      ---   |   ---  |
|***LOGIN***     |            |        |
|*Various*       |     13     |  7     |
|DS Logon        |            |        |
|My HealtheVet   |            |        |
|ID.me           |     0      |   0    | 
|Login.gov       |     0      |   0    |
|       ---      |      ---   |   ---  |
|***ID PROOF***  |            |        |
|*Various*       |     13     |    7   |
|IAL1            |            |        |
|IAL2            |            |        |
|IAL3            |     0      |   0    |

---

#### Assistive Tech and Cognitive Impairment will apply across cohorts

|                                                             |Participants| 
|-------------------------------------------------------------|:----------:|
|***ASSISTIVE TECH***                                         |            | 
|*Various*                                                    |            |
|Font resizing/larger                                         |            |
|Screen reader                                                |      0     |
|Braille terminal                                             |      0     |
|Speech recognition sftw                                      |            |
|Speech generating device                                     |            |
|Speech to text                                               |            |
|High contrast mode                                           |            |
|Alternative keyboard                                         |            |
|Alternative mouse or stylus                                  |            |
|Keyboard only navigation (no mouse usage)                    |            |
|Switch access, head pointer, or eye tracking                 |            |
|Joystick                                                     |            |
|Teletypewriter or telecommunication device for the deaf (TTY)|      0     |
|Closed captions                                              |      0     |
|Amplified telephone                                          |            |
|Hearing aid                                                  |            |
|Cochlear implant                                             |            |
|Cane, walker, guide animal, or other walking aid             |            |
|Wheelchair                                                   |            |
|Prosthetics                                                  |            |
|Wearable tech (not prosthetic)                               |            |
|Augmentive and alternative communication device              |      0     |
|Sign language interpreter                                    |      0     |
|Speech-to-speech transliterator                              |      0     |
|Visual aids                                                  |            |
|Writing on paper                                             |      0     |
|Typing with phone or tablet and showing it to others         |      0     |
|Caregiver                                                    |      7     |
|                           ---                               |     ---    |
|***COGNITIVE IMPAIRMENT and/or FUNCTIONAL DISABILITIES***    |            |
|*Various*                                                    |     20     |
|Traumatic Brain Injury (TBI)                                 |            |
|Post-Traumatic Stress Disorder (PTSD)                        |            |
|Attention-Deficit/Hyperactivity Disorder (ADHD)              |            |
|Autism                                                       |            |
|Vertigo                                                      |            |
|Aphasia                                                      |            |
|Dyslexia                                                     |            |
|Dyscalculia                                                  |            |
|Distractibility                                              |            |
|Memory loss                                                  |            |
|Reading difficulties                                         |            |
|Low tolerance for cognitive overload                         |            |
       
## Timeline

Research Preparation and Collaboration Cycle: Oct 3 – Oct 14 
<br> Research Refinement and Pilot Interview to review protocol: Oct 17 – Oct 21 
<br> Pilot Interview: Wednesday, Oct 19 at 11:00am-12:30pm EST
<br> Research will begin Monday, Oct 24 and end Friday, Oct 28.

***Update: Due to dependencies with VA Medical Centers availability and recruitment timelines, our timeline changed:***

Research Preparation and Collaboration Cycle: Oct 3 - Oct 14
<br> Research Refinement and Pilot Interview to review protocol: Oct 17 - Oct 28
<br> Pilot Interview: Thursday, Oct 20 at 11:00am-12:10pm EST
<br> Research started Monday, Oct 31 and ended Friday, Nov 4.

### Prepare

* Pilot participant email: alicia.spanswick@frogdesign.com
* Date and time of pilot session: Wednesday, Oct 19 at 11:00am-12:30pm EST 

***Update: Our pilot participant and date change. The pilot interview took place on Thursday, Oct 20 at 11:00am-12:10pm EST.***

### Research sessions
Sessions will run between 75 and 90 minutes with each participant.  We will identify 2.5 hour windows of availability to provide a one-hour buffer between sessions.  

Research sessions will start Monday, Oct 24 and end Friday, Oct 28. We plan to have 2-3 multi-person research teams that can be distributed between 1-3 locations.

- Monday, Oct 24: 12:00pm-2:30pm, 2:30pm–5pm, 5pm-7:30pm 
- Tuesday, Oct 25: 9:30am–12pm, 12pm-2:30pm, 2:30pm–5pm, 5pm-7:30pm 
- Wednesday, Oct 26: 9:30am–12pm, 12pm-2:30pm, 2:30pm–5pm, 5pm-7:30pm 
- Thursday, Oct 27: 9:30am–12pm, 12pm-2:30pm, 2:30pm–5pm, 5pm-7:30pm
- Friday, Oct 24: 9:30am–12pm, 12pm-2:30pm 

This proposed schedule has 17 slots identified and up to 3 participants can be scheduled for each spot as long as it aligns with the location of the teams. That provides a total of 56 spots for 20 interviews. We are open to suggestions from Perigean about how to modify this schedule to maximize the ability of Veterans to participate.

***Update: Our actual schedule in the field was as follows:***

- Monday, Oct 31: 2:30-5pm (P1)
- Tuesday, Nov 1: 9:30-12pm (P2), 12pm-2:30pm (P3), 2:30-5pm (P4)
- Wednesday, Nov 2: 12pm-2:30pm (P5), 2:30-5pm (P6)
- Thursday, Nov 3: 9:30-12pm (P7), 2:30-5pm (P8)
- Friday, Nov 4: 9:30-12pm (P9), 12-2:30pm (P10)

We didn't have any overlapping interviews. We held interviews at one location.

### Length of sessions
* Session length: 75-90 minutes 
* Buffer time between sessions: 30 minutes
	
## Team

### Roles
- Moderator: Rotating
- Research guide writing and task development: Samara Watkiss
- Participant recruiting and screening: Perigean 
- Project point of contact: Samara Watkiss, Kit Casey, Mike Prusaitis
- Participant(s) for pilot test: See above
- Note-takers: Rotating
- Observers: Rotating

***Update: After December 2022, this work will move to implementation and the team will shift. If you need to contact someone about this research, contact DSVA Product Owner: John Rahaghi (john.rahaghi@va.gov) or Senior UX Researcher and Key Personnel: Tyler Gindraux (tyler@bluetiger.digital).***

### Field team

|Role|Assigned|Contact|
|:---:|:---:|:---:|
|Program Manager|Mike Prusaitis|mike.prusaitis@frog.co|
|Design Director|Kit Casey|kit.casey@frog.co|
|Associate Design Director|Samara Watkiss|samara.watkiss@frog.co|
|Senior UX Designer|Bri Mazzio|briana.mazzio@frog.co|
|Senior Strategist|Marissa Klein|marissa.klein@frog.go|
|Visual Designer|Paul Knipper|paul.knipper@frog.go|
|Senior UX Researcher|Tyler Gindraux|tyler@bluetiger.digital|
