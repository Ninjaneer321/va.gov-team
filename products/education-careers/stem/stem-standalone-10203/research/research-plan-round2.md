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

# Research Plan for STEM - Round 2
As a designer I need to create a research plan to share with my team.	(This should be filled out and maintained by the designer on the team & can be cross-linked and referenced in any issues.) 	
## Goals	
1. What product & team are you doing this research for?	
- Booz Allen research for Education Services / OIT
2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 	

Currently, Veterans applying for the Rogers STEM Scholarship to extend their CH33 benefits must use the 22-1995 form (Request for Change of Program or Place of Training). The addition of STEM scholarship questions to this form was a temporary solution while decisions on a stand-alone form were made.

During the initial implementation of the STEM Scholarship application as part of the 22-1995, an issue arose where a high number of ineligible people (>80% of applicants) were applying for the scholarship, resulting in significant work for the application processors. Steps were taken to address that as part of the 22-1995, and an integral part of the new form is to continue to drive the number of ineligible submissions down.

To address the above, the STEM Scholarship application was re-designed and tested with users.  Testing showed that the application was easy for applicants to fill out, but a few recommendations were made to further improve the design and reduce the number of ineligible applicants.  Changes included providing an applicant's remaining entitlement to them earlier in the process and revising some content to make the application requirements clearer.  These recommendations have been incorporated into the design and researchers need to test the effectiveness of the revisions.

3. Research questions: What question(s) do you hope to be able to answer after completing this research? 

Intro page
  - Do unauthenticated participants know to scroll to the bottom of the intro screen to start the application?
  - Do authenticated participants know to scroll down to the bottom of the intro page to start application?

New entitlement alerts
  - Is the entitlement warning alert on the intro page effective at deterring ineligible, authenticated applicants from beginning the application?
  - Are entitlement warning alerts effective at deterring ineligible, authenticated applicants from submitting an application [eg. alert on STEM summary page]?
  - Do applicants expect an application grace period (beyond the 6 months) when they may be close to exhausting their GI Bill benefit?
  - What, if any, modifications are needed for entitlement check functionality to ensure it is effective?  

Ineligibility alerts
  - How do non-Chapter 33 participants react to the new, benefit-specific summary page?
  - How do participants who aren't eligible due to being enrolled in a non-STEM program react to eligibility alerts?
  
Ineligibile applicants
  - For "ineligible" participants, how many say they would still apply? Why?
  - For "ineligible" participants, where do they think they should land when they leave the form on non-eligibility summary pages?

 Prefilled school data
 - Do users have questions surrounding the prefilling of school data? (School name, city, state)


  

4. Hypothesis: What is your hypothesis for this research? 	
 - When a user is ineligible, the user will realize or be informed of their ineligibility early in the process and will not want to continue the application.
 
## Method	
1.	What method of research are you planning? 	
  - Remote moderated usability testing 	
  	
2.	Why this method? How does this methodology help you answer your research questions?
  - Researchers need to watch users interact with the form and see their reaction to alerts and content changes to ensure that changes made to the original design are effective.  
3.	Where are you planning to do your research? 
- Online using Zoom

4.	What will you be testing? *(Design mocks, card sort, prototype, page, content, etc.)* 	
- We will be testing content and flow using high fidelity prototypes

5.  If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)
  - Zoom 
  
## Participants and Recruitment	
1.	Participant criteria: What are you looking for in a participant?	
- Target of 9 participants, but recruiting 11 participants to account for any missed / no-show sessions
- Participants with 7-18 months of entitlement remaining for their education benefits
  - 6-8 individuals using Chapter 33 benefits
      - 4-5 are currently pursuing an undergraduate degree in Science, Technology, Engineering, or Math (STEM)
      - 2-3 are currently pursuing an undergraduate degree in a non-STEM program
  - 2-3 individuals who are currently using Montgomery GI Bill, Transfer of Entitlement (TOE) or Post-Vietnam Era Veterans' Educational Assistance Program (VEAP)
      - Individuals are enrolled in an undergraduate degree program
- Age Range: 18-65
- Geography: Geographically dispersed across US
- Gender: All
- VA Benefit requirement: See note above
- Technology: Access to a computer, preferably running Google Chrome browser 
- Familiarity with technology: Any

2.	What is your recruitment strategy? 	
- Recruitment will be performed by Perigean Technologies	

## When? 	
1.	Timeline: What dates do you plan to do research? 	
- July 7 - 9, 2020 	

2.	Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.) 	
- By COB July 2, 2020

3. Length of Sessions: How long do you estimate each session will be? 	
- 30 minutes

4.	Availability: If applicable, when would you like sessions scheduled? **Please list exact dates and times in EASTERN Standard Time**. Please request enough dates and time slots (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.). Be as flexible as possible, cognizant that many Veterans are only available before and after working times, and live across the U.S.	
  - Tuesday, July 7: 8:30 - 9:30 AM; 11 AM - 12 PM;12:30 - 1:30 PM; 3 - 4 PM;
  - Wednesday, July 8: 8:30 - 9:30 AM; 10 - 11 AM; 12:30 - 1:30 PM; 3 - 4 PM;
  - Thursday, July 9: 9:30 - 10:30 AM; 11 AM - 12 PM; 12:30 - 1:30 PM;


5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 	
- July 6, 2020

## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Amy Knox; 301.254.0907; knox_amy@bah.com
- Research guide writing and task development (usually but not always same as moderator): Booz Allen UX team
- Participant recruiting & screening: Perigean Technologies
- Project point of contact: Amy Knox
- Participant(s) for pilot test:
- Note-takers: Cindy Cruz cruz_cindy@bah.com; Jen Jones jones_jennifer2@bah.com
- Observers: Luke Tickner, lucas.tickner@va.gov; Brian Grubb brian.grubb@va.gov; Desiree Turner turner_desiree@bah.com; Joe Preisser joseph.preisser@va.gov; Joe Welton joseph.welton@va.gov; Will McCormack mccormack_will@bah.com; Lauren Anderson lauren.alexanderson@va.gov; Lacey Higley lacey.higley@va.gov; Matt Self matthew.self2@va.gov; Dan Shawkey shawkey_daniel@bah.com; Darla VanNieukerk darla.vannieukerk@va.gov; Tammy Hurley tammy.hurley1@va.gov; Darrell Neel neel_darrell@bah.com	

## Resources	
- Project Outline: 	https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/stem
 
- Convo Guide:  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/stem/stem-standalone-10203/research/discussion-guide-round2.md

- Synthesis	
*Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)* 	
- Lessons Learned	
*Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 	
- Read-Out/Results https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/stem/stem-standalone-10203/research/STEM-R2-10203-Research-Readout-202007.pdf
  - ** Don't forget to add a link to your research folder to the research tracker! [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)
