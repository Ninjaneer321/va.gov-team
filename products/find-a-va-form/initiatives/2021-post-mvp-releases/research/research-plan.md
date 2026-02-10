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

# Research Plan: Find a Form PDF Downloading
 	
## Goals	
The goals of this research are to 
1. Better understand how Veterans download VA PDF forms and what challenges they encounter.
1. Get feedback on designs for advising users to download a PDF form and then open it with Acrobat, instead of viewing it in a web browser. We want to assess the performance of three different design options for providing instructions.

## Background
Some browsers enable PDFs to be viewed directly instead of needing to first be downloaded. Many VA forms are in PDF format and need to be filled out in Acrobat in order to save the information entered and use a digital signature. Our challenge is how to advise users to download the forms to their device and then open them in Acrobat, when the details of how to do that vary by the specific form and the user's operating system, browser, settings by file type, and whether they have Acrobat Reader installed. We are aware of the following use cases:
- Form downloads when you click the link
- Form opens in browser when you click the link
  - You can't fill out the form
  - You can fill out the form but can't save it
  - You can fill out the form but can't do the digital signature
- Downloaded form won't open when you click on it
- Browser displays a "Please wait" message 

In addition, we suspect that users who are less proficient with technology may encounter more problems that they are unable to resolve on their own.

## Research questions
- How intuitive is the download process with the new instructions? What issues arise (with the interace and/or specific forms)?
  - Do users click on the new instructions link?
  - Do users have difficulty navigating back to the Find a Form page from the instructions?
  - Do users download the form?
  - Do some users not notice the download notification/file at the bottom of the browser window?
  - Are there any difficulties in finding the file to open it? 
  - Does the file always open in Acrobat?
  - What are users' reactions to auto-download? 
- Are participants able to save and/or digitally sign the forms? 
- Do different download behaviors from different forms (e.g., auto-downloading ones vs. not) cause issues for users?
- What is the success rate of participants downloading forms from each of the three design options? Is one more effective than the others? 

## Hypotheses
- The new instructions will enable people of diverse technical abilities, ages, and disabilities to download and open PDF forms in Acrobat. 
- The new instructions will enable people of diverse technical abilities, ages, and disabilities to save and digitally sign PDF forms. 
- The new instructions will alleviate issues with forms that have different download behaviors.
- Instructions at the top of the list of forms will be missed when they scroll off the screen.
- Instructions repeated above every form download link will get ignored or be annoying, especially to users of screen readers. 

## Method	
We will conduct remote moderated research sessions via Zoom. Participants will be asked some interview questions about their past usage of VA forms, and then will be given some tasks involving several forms to download (selected by Marci McGuire):
- 10-2850c (most downloaded, has digital signature)
- 10-0003k (has digital signature)
- 20-0968 (not hosted on VA.gov)
- 20-0995 (one of most downloaded, can fill out in browser, hosted inside VA.gov)

Participants will access the forms using the Find a Form page on Staging: https://staging.va.gov/find-forms/. 

Half of the participants will see one version of the Find a Form page, and the other participants will see a different version. Here are the two versions:
- Instructions at the top of the list of forms 
- Instructions repeated above every form download link

## Participants and Recruitment	
Ask Perigean to recruit 15 Veterans in order to get 10 completed sessions using the following criteria:

### Must have for participants
- At least 5 people who use the Chrome web browser on a computer
- At least 4 participants over 60 (i.e., in age group 55-64 or older)
- At least 3 people with a cognitive disability (e.g., TBI)

### Good to have for participants
- At least 2 people who use a screen reader
- At least 2 people of color
- At least 1 woman
- At least 1 participant 35 or under
- At least 2 people who don't have any degree or vocational training after high school (to include enlisted Veterans)
- At least 1 person that has a college degree (to include officer Veterans)
- At least 2 people who live in a rural or remote area
- At least 1 person who lives in a major metropolitan area
- At least 1 non-native English speaker

### Recruitment requirements for ALL participants
- Have a computer, tablet, or smartphone and be willing to be complete their interview on one of those devices
- During the session, be willing to share a new web browser window on their device 
- Have a working microphone on their device
- Have Zoom downloaded to their device prior to the session and know how to share their screen

### Additional questions to ask in the screener
- What kind of device will you be joining on and are willing to share a browser window on--computer, tablet, or smartphone?  
- What web browser do you use on that device? (e.g., Chrome, Edge, Internet Explorer, Firefox, Safari) 

## Timeline
#### Desired Timeline: July 27-30, 2021 
**60-minute** sessions with at least **30-minute breaks** in between 

Team Availability | Time (EST)
------------------|--------------
July 27, 2021 | Noon - 3 pm, 4 - 8 pm
July 28, 2021 | 1:30 - 3 pm, 4 - 8 pm
July 29, 2021 | Noon - 3 pm, 4 - 8 pm
July 30, 2021 | 2 - 3 pm, 4 - 8 pm

Pilot Sessions | Time (EST)
---------------|----------
July 22, 2021  |  5:30 pm (angela.fowler@adhocteam.us)
July 23, 2021  |  4:30 pm (robin.garrison@adhocteam.us)

## Team Roles	
- Moderator:	Cindy Merrill (cindy.merrill@adhocteam.us)
- Research guide writing and task development:	Cindy Merrill (cindy.merrill@adhocteam.us)
- Participant recruiting & screening:	Perigean
- Project point of contact:	Cindy Merrill (cindy.merrill@adhocteam.us)
- Participant(s) for pilot test:	Angela Fowler (angela.fowler@adhocteam.us), Robin Garrison (robin.garrison@adhocteam.us)
- Notetakers:	Perigean. If can't do after hours, Cassandra Allen can cover 5-8 pm EST (cassandra.allen@gcio.com)
- Observers:	John Hashimoto (john.hashimoto@va.gov), Marci McGuire (marci.mcguire@gcio.com), Cassandra Allen (cassandra.allen@gcio.com), Zach Morel (zach.morel@gcio.com)
 
## Resources	
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/conversation-guide.md)	
- [Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md)	

## Approvals
Plan reviewed and approved by Lauren Alexanderson on July 22, 2021
