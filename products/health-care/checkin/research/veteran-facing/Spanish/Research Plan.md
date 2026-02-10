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

# Research Plan for Spanish Pre-check-in and Check-in  
Aug 2022

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

The check-in team is creating portions of the ecosystem that enable a Veteran to use their mobile device to pre-check in and check in for a medical appointment via VA.gov. Based on the previous research with [veterans and staff members](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/staff-facing/st-louis/pilot-feedback/CIE%20St%20Louis%20Pilot%20Veterans%20Research%20Report.pdf), we heard that this may decrease the long waiting time for some busy clinics if it functions adequately. 

With this round of research, we are looking to gather feedback on the pilot release of Spanish content and the language toggle from Veterans through remote usability testing.  

To date, there are only a few studies that look into Veterans and their family members who speak Spanish as their primary language. Within this study, we want to understand Spanish-speaking Veterans:
- perceive pre-check-in and check-in experience
- validate if the translated Spanish content meets plain language standards
- review the current toggle design pattern and test the new toggle design

In this research study, we also want to:

1. Ensure the translated experience meets plain language standards for Spanish-speaking Veterans and bilingual staff
2. Understand the current check-in experience of Spanish–English bilingual veterans and their family members
3. Identify suitable toggle design for partially translated content (not site-wide).
4. Gather user feedback about simplified header and footer

### Outcome
We will apply insights from this research to improve and iterate on the pre-check-in and check-in experience for Spanish-speaking Veterans and Caregivers. These improvements will be included in the subsequent releases of the check-in experience. 

### Research questions
- What are the needs and pain points of bilingual Veterans and their caregivers?
	- What is their demographic information? (age, familiarity with technology, language proficiency, etc.)
- Are there any family members who also use Check-in/Pre-Check-in? (for example, assisting the patient or the family member who is also a VA patient?) If yes, what are their needs?
- What is users' language preference when using Check-in/Pre-Check-in?
- Is there additional  content that’s preferred? 

- How easy-to-understand is the Spanish translation for bilingual  Veterans and caregivers?

- How well does the proposed toggle design meet Veteran expectations? 


- How clear is the Spanish pre-check-in and check-in experience for bilingual  Veterans and their families with LEP?


### Hypothesis
We hypothesize: 
- Veterans and family members with low English proficiency (LEP) may have specific content needs that may be missing in the current experience
- The Spanish content may be accurate,  but may not meet  plain language standards of Veterans.
- Veterans find the original toggle design discoverable but confusing. 
- Veterans don't need to frequently switch their language using the toggle.
- Veterans may prefer to have the toggle at the bottom as long as we provide clear hints about where to find it.
- Only first-time users need to see a notification indicating there is now a language toggle

## Method	
Remote, moderated sessions over zoom with bilingual Spanish-English Veterans and/or caregivers. 
The study includes two parts. 

**Part 1 - Understand  pain points and assess Spanish translated content**
- - Semi-structured interviews
- User feedback translated Spanish content
- Screenshots of Spanish translated content will be shown to during feedback

**Part 2 - Understand toggle design expectations**
- Impression testing of the two different toggle designs  in the pre-check-in user flow and the check-in user flow
- Usability testing of toggle designs using sketch prototypes on the Veteran’s mobile device.
Sketch will be used

To manage the length of each session, participants will be divided into two of the above parts. 


### Location
Remote sessions conducted over Zoom. 

### Research materials

Will be provided later. 
	
## Recruitment	

### Recruitment approach
Our intended audience for this research include Veterans and caregivers. We will use Perigean to recruit participants.<br>
We will use a lean maximum variation inclusive research strategy.

### Recruitment criteria

Primary criteria (must-haves) 
 
18 participants in total, 9 for each part. (for a minimum of 10 completed sessions in total)
 
Participants must:
- Participants must be a Veteran or the family member or family caregiver of a Veteran.
- We’d like a minimum of 8 veteran participants.
- Participants must speak Spanish and a reasonable level of English proficiency. 
How well [do you/does your family member or caregiver] speak English?
     - Not at all (Disqualify)
     - Not well (Disqualify)
     - Well (Qualify)
     - Very well (Qualify)
- At least 2 person who doesn’t have a college degree (to include enlisted Veterans)
- At least 2 person who has identified cognitive impairments and/or functional disabilities. Examples of diagnoses that may align with this would be Traumatic Brain Injury (TBI), Post-Traumatic Stress Disorder (PTSD), Attention-Deficit/Hyperactivity Disorder (ADHD), autism, and vertigo. Other conditions may be aphasia, dyslexia, dyscalculia, distractibility, memory loss, reading difficulties, low tolerance for cognitive overload, and intellectual/adaptive functioning challenges such as learning and problem-solving.
- Participants must be willing to complete the study via a mobile device.

Secondary criteria (would like to have) 
- Numbers based upon the [VA Recruitment Checker](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1440553662)
 
## Timeline

1. Timeline: Our goal is to do this research the week of August 29th, 2022
1. Prepare: The prototypes will be ready a few days before the study begins.
1. Length of Sessions: How long do you estimate each session will be? 
     1. 45-minute sessions 
     1. 30-minute buffer between sessions
1. Availability: Between 9EST and 4EST Monday to Friday. 
1. Pilot: August 24, 2022
	
## Team Roles	

Please list the people who will be serving in each role. Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. 
- Moderator: Ya-chin Tsao <yaching.tsao@civicactions.com>   and Nira Datta (nira.datta@civicactions.com)
- Research guide writing and task development: Nira Datta and Ya-ching Tsao
- Participant recruiting & screening: Perigean
- Project point of contact: Lori Pusey (lori.pusey@agile6.com)
- Participant(s) for pilot test:TBD
- Note-takers: Perigean
- Observers:
	- Stephen Barrs (Stephen.Barrs@va.gov)
	- Martha Wilkes (Martha.Wilkes@va.gov)
	- Zach Park (zach.park@agile6.com)
	- Gaurav Gupta (ggupta@kindsys.us)
	- KanchanaDevi Suriyamoorthy (ksuriyamoorthy@kindsys.us)
	- Sarah Knopp (sarah.knopp@agile6.com)
	- Adrian Rollett (adrian.rollett@agile6.com)
	- Bethany Dunfield (bethany.dunfield@civicactions.com)
	- Brian Seek (brian.seek@civicactions.com)
	- Ben Brasso (ben.brasso@agile6.com)

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-outline.md)
- [Convo Guide Discussion guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/pre-check-in-usability/conversation-guide.md)
- Synthesis Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)
- Lessons Learned Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.
- Read-Out/Results
  - Read-out presentation should live in the appropriate product repo and folder; paste a link to it here.
- Don't forget to add a link to your research folder to the research tracker! https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md
