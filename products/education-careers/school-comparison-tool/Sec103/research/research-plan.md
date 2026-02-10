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

# Research Plan for Section 103
As a designer I need to create a research plan to share with my team.	(This should be filled out and maintained by the designer on the team & can be cross-linked and referenced in any issues.) 

## Goals	
1. What product & team are you doing this research for?	
Booz Allen research for Education Services / OIT. 

2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 

Chapter 31/33 Veterans and beneficiaries experienced financial difficulties, have gone into debt, and were dropped from classes due to delayed payments by VA to their schools.  In response to this, PL 115-407 Section 103 was passed, requiring institutions receiving GI Bill benefits to allow beneficiaries to continue attending their classes if they have sufficient proof of eligibility for their education benefits on file. 

Schools may require proof of GI Bill eligibility in the form of:
 - Certificate of Eligibility (COE) or
 - Certificate of Eligibility (COE) and additional criteria

An indicator of Section 103 compliance was added under the Institution Summary section of each school profile within the GIBCT tool along with supporting, contextual content that explains the indicator, its relevance and what it means for the prospective student.  The researchers need to test the effectiveness of the design.
	
3. Research questions: What question(s) do you hope to be able to answer after completing this research? 
 - What is the findability of the Section 103 indicator and its associated content?
 - Do users understand the Section 103 issue and its resolution?
 - Is the modal an effective way of conveying Section 103 information?
 - Do users understand and know how to comply with the school's requirements for Section 103 protection?
 - How usable is the Section 103 functionality for individuals who use screen readers?
 - What, if any, interest do individuals have in "learning more" about Transition Act / Sec. 103?
 - Will users require more information be provided to them about Section 103 beyond what is already conveyed? 

4. Hypothesis: What is your hypothesis for this research? 
 - When users find the Section 103 control, the content will effectively communicate the issue of delayed VA payments and its resolution.

## Method	
1.	What method of research are you planning? 	
  - Remote, moderated usability testing in a demo or stagins environment using Zoom. 	
  	
2.	Why this method? How does this methodology help you answer your research questions? 	
  - Researchers need to test the accessibility of certain aspects of the site.  Additionally, they need to know if users can find the Section 103 control as it is new functionality.
  
3.	Where are you planning to do your research? 
   - Online using Zoom 	
   
4.	What will you be testing?
   - Page, content and accessibility
   
5.  If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)	
   - Zoom
   
## Participants and Recruitment	
1.	Participant criteria: What are you looking for in a participant?

6-8 participants
Generally, GI Bill beneficiaries impacted by VA late payments to institutions during Fall 2018, some of whom regularly use assistive tech for wev=b browsing 

A mix of the following:
 - 3-4 GI Bill beneficiaries using Post-9/11 or CH31 Active Duty benefits during Fall 2018 impacted by late VA payments
 - 3-4 GI Bill beneficiaries using Post-9/11 or CH31 Active Duty benefits during Fall 2018, who regularly use a screen reader for web browsing. Or, if there aren't enough of these individuals, expanding this criteria to GI Bill beneficiaries who've used Post-9/11 or CH31 Active Duty benefits in the last 5 years, who regularly use a screen reader for web browsing. 
 
Age Range: 18-45

Geography: Geographically dispersed across US

VA Benefit requirement: Ch 33, Post-9/11 GI Bill or Ch 31 (Vocational Rehabilitation) Education benefits

Technology: Access to a computer, preferably running Google Chrome browser; Assistive technologies, if needed

Familiarity with technology: Any

Accessibility preference: 3-4 participants using screen reader for web browsing

Login requirements: None
	
2.	What is your recruitment strategy? 	
 - Recruitment will be performed by Perigean Technologies

## When? 	
1.	Timeline: What dates do you plan to do research? 	
 - April 21st - 23rd
 	
2.	Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.) 
 - Expecting work to be complete by April 15 or 16th
 
3. Length of Sessions: How long do you estimate each session will be? (This helps with scheduling & thank you gifts.) e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours) 	
 - 45 minutes
 - 1 hour for individuals using assistive tech
 
4.	Availability: If applicable, when would you like sessions scheduled? **Please list exact dates and times in EASTERN Standard Time**. Please request enough dates and time slots (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.). Be as flexible as possible, cognizant that many Veterans are only available before and after working times, and live across the U.S.	

 - Tuesday, April 21st from 8 AM - 6 PM
 - Wednesday, April 22nd from 8 AM - 5 PM
 - Thursday, April 23rd from 8 AM - 6 PM
 
5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 

- Monday, April 20th
- Team member: TBD

## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Amy Knox; 301.254.0907; knox_amy@bah.com
- Research guide writing and task development (usually but not always same as moderator): Booz UX team	
- Participant recruiting & screening: Perigean Technologies
- Project point of contact: Amy Knox
- Participant(s) for pilot test:	
- Note-takers: Cindy Cruz cruz_cindy@bah.com; Jen Jones jones_jennifer2@bah.com
- Observers:	Brian Grubb brian.grubb@va.gov; Desiree Turner turner_desiree@bah.com; Joe Preisser joseph.preisser@va.gov; Joe Welton joseph.welton@va.gov; Will McCormack mccormack_will@bah.com; Lauren Anderson lauren.alexanderson@va.gov; Lacey Higley lacey.higley@va.gov; Matt Self matthew.self2@va.gov; Dan Shawkey shawkey_daniel@bah.com; Darla VanNieukerk darla.vannieukerk@va.gov; Tammy Hurley tammy.hurley1@va.gov
	
## Resources	
- Project Brief: 	
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/Sec103/product-outline.md	
- Convo Guide	
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/Sec103/research/discussion-guide.md	
- Synthesis	
https://app.mural.co/t/bahdigitalexperience6902/m/bahdigitalexperience6902/1587053279523/e66fd766f4dc8823ab9149af634e2cb5fdb50a43?sender=jonesjennifer26349 	
- Lessons Learned	
N/A 	
- Read-Out/Results	
  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/Sec103/research/GIBCT-Sec103-Readout-2020430.pdf
