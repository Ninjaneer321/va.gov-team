---
# Research Plan Metadata
title: "Research Plan for Compare Functionality for CT Redesign, June 2021"
date: 2021-06-14
last_updated: 2026-02-10
team: "Booz Allen (Education Service/OIT)"
product: "GI Bill Comparison Tool"
product_area: "unauthenticated"

# Background Context
background:
  problem_statement: "The Booz Allen team has been working on a re-design of the GI Bill Comparison Tool. One of the major updates for the re-design was to add functionality to enable users to compare schools. The team has created this new functionality and would like to test the design with users to see how well it performs."
  product_location: "GI Bill Comparison Tool"
  user_familiarity: "Iteration - redesign with new compare functionality"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/redesign/ct-redesign-discovery_product-outline.md"

# Research Design
methodology: "Remote moderated usability testing in staging environment"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - "Test the new compare functionality to see how well it performs with users"
  - "Observe how users interact with the compare drawer, navigation, and comparison page"
  - "Identify what data fields are most important to users when comparing schools"

research_questions:
  - "Do users notice the Comparison drawer?"
  - "Is comparison drawer behavior effective when the user conducts multiple searches to select schools?"
  - "How many schools do users think they can compare at once?"
  - "Are users able to easily navigate between the search results, the comparison drawer and the comparison page?"
  - "How do users interact with the interface when they need to conduct multiple searches?"
  - "Which components/pages do users prefer to use to add or remove schools from the comparison? Are they able to do this effectively?"
  - "What data fields are users interested in comparing? Which ones are most important? Any fields they aren't interested in? Any additional others they would want to see?"
  - "Do users notice the sticky header?"
  - "Do users believe the sticky header is useful?"
  - "Do users notice the 'Highlight differences' functionality?"
  - "Do users find the 'Highlight differences' functionality useful?"

hypotheses:
  - "Users will be able to easily find, select and compare schools that they are interested in"
  - "The fields being compared are important to users and will be useful in determining which school they would like to attend"

expected_outcomes: "Validate that the compare functionality enables users to effectively compare schools and identify any usability issues with the design, content, and flow"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted sampling based on school enrollment status"
  
  primary_criteria:
    - "Have started attending school in Fall 2020 or Spring 2021, OR be looking to start school in 2021"
    - "4 non-Veteran beneficiaries (spouse or children), 8 Veterans"
    - "50% using Chapter 33 Post-9/11 benefits"
    - "50% using VR&E, Chapter 30 Montgomery Bill or Chapter 35"
    
  secondary_criteria:
    - "Age range: 16 - 65"
    - "Gender: Mix"
    - "Branch of service: Mix"
    - "Geography: Geographically dispersed across USA"
    
  screener_questions:
    - question: "Have you started attending school in Fall 2020 or Spring 2021, or are you looking to start school in 2021?"
      qualifying_response: "Yes"
    - question: "What VA education benefit are you using or planning to use?"
      qualifying_response: "Chapter 33 Post-9/11, VR&E, Chapter 30 Montgomery Bill, or Chapter 35"
      
participants:
  veterans: 8
  caregivers: 0
  dependents: 4
  total_recruited: 12
  completed_sessions_goal: 12
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-06-14"
  pilot_participant: "TBD"
  research_dates: "2021-06-16 to 2021-06-18"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results: "Improve GI Bill school selection and comparison experience"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Finding Something to Do"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/redesign/ct-redesign-discovery_product-outline.md"
    
tags:
  - "AUD: Veterans"
  - "AUD: Dependents"
  - "AUD: Spouses"
  - "PRDT: GI Bill Comparison Tool"
  - "BNFT: Education"
  - "BNFT: GI Bill"
  - "RESRCH: Usability"
  - "RESRCH: Remote"
  - "DSC: Comparison"
  - "DSC: Drawer"
  - "DSC: Sticky header"
  - "DSP: Compare"
  - "education"
  - "school-comparison"
  - "compare-functionality"
---

# Research Plan for Compare Functionality for CT Redesign
As a designer I need to create a research plan to share with my team.	 	
## Goals	
1. What product & team are you doing this research for?	

- Booz Allen research for Education Service/OIT

2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 	

- The Booz Allen team has been working on a re-design of the GI Bill Comparison Tool. One of the major updates for the re-design was to add functionality to enable users to compare schools. The team has created this new functionality and would like to test the design with users to see how well it performs.

3. Research questions: What question(s) do you hope to be able to answer after completing this research? 

Compare Drawer:
 - Do users notice the Comparison drawer?
 - Is comparison drawer behavior effective when the user conducts multiple searches to select schools?
 - How many schools do users think they can compare at once?
 
 Navigation:
 - Are users able to easily navigate between the search results, the comparison drawer and the comparison page?
 - How do users interact with the interface when they need to conduct multiple searches?
 - Which components/pages do users prefer to use to add or remove schools from the comparison?  Are they able to do this effectively?

Compare page:
- What data fields are users interested in comparing?
    - Which ones are most important?
    - Any fields they aren't interested in?
    - Any additional others they would want to see?
- Do users notice the sticky header?
- Do users believe the sticky header is useful?
- Do users notice the "Highlight differences" functionality?
- Do users find the "Highlight differences" functionality useful?

4. Hypothesis: What is your hypothesis for this research? 

- Researchers believe that users will be able to easily find, select and compare schools that they are interested in.  We believe that the fields being compared are important to users and will be useful in determining which school they would like to attend.

## Method	
1.	What method of research are you planning? 	
  - Remote moderated usability testing in a staging environment	
  	
2.	Why this method? How does this methodology help you answer your research questions? 	
 - Remote moderated usability testing will allow us to observe how users interact with the compare functionality. We will be able to see what the user looks at, clicks on and how they expect the functionality to work. It also allows researchers to ask questions about what the user is thinking as they are completing the tasks to gain better insight into their thoughts, actions and expectations.

3.	Where are you planning to do your research? 
 - Online using Zoom
 
4.	What will you be testing?
 - We will be testing the design, content and flow of the screens.
 
5.  If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)	
 - Zoom
 
## Participants and Recruitment	
1.	Participant criteria: What are you looking for in a participant?	  
- Recruit 12 participants	

Please list your participant criteria in two categories-
1. **Primary criteria / Must have** 

Participants should either:

 - Have started attending school in Fall 2020 or Spring 2021
 - Be looking to start school in 2021
 
Military status of participants: - 4 non-Veteran beneficiaries (spouse or children), 8 Veterans

VA Benefit requirement:
- 50% using Chapter 33 Post-9/11 benefits
- 50% using VR&E, Chapter 30 Montgomery Bill or Chapter 35
    
2. **Secondary criteria / Would like to have** - what other criteria would strengthen your results?

- Age range: 16 - 65
- Gender: Mix
- Branch of service: Mix
- Geography: Geographically dispersed across USA

2.	What is your recruitment strategy? 	
 - Recruitment will be performed by Perigean Technologies
	

## When? 	
1.	Timeline: What dates do you plan to do research? 	
 - June 16 - 18th, 2021
 
2.	Prepare: When will the thing you are testing be ready? 
 - June 14th, 2021
 
3. Length of Sessions: How long do you estimate each session will be? 
 - 45 minutes
 
4.	Availability: If applicable, when would you like sessions scheduled? 

 - Wed, June 16: 9-9:45 AM; 10:15-11 AM; 1 - 1:45 PM; 2:15 - 3 PM
 - Thurs, June 17: 9-9:45 AM; 10:15-11 AM; 1 - 1:45 PM; 3:15 - 4 PM
 - Fri, June 18: 9-9:45 AM; 10:15-11 AM; 1 - 1:45 PM; 2:15 - 3 PM

6.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 
 - Monday, June 14th, 2021
 
## Team Roles	
Please list the people who will be serving in each role.  	
- Moderator:	Jen Jones; 843.214.6081; jones_jennifer2@bah.com
- Research guide writing and task development (usually but not always same as moderator):	Booz Allen UX team
- Participant recruiting & screening:	Perigean Technologies
- Project point of contact:	Jen Jones
- Participant(s) for pilot test:	
- Note-takers:	Amy Knox knox_amy@bah.com; Emma Waters waters_emma@bah.com;
- Observers:	Brian Grubb brian.grubb@va.gov; Desiree Turner turner_desiree@bah.com; Joe Preisser joseph.preisser@va.gov; Will McCormack mccormack_will@bah.com; Matt Self matthew.self2@va.gov; Dan Shawkey shawkey_daniel@bah.com; Darla VanNieukerk darla.vannieukerk@va.gov; Tammy Hurley tammy.hurley1@va.gov; Darrell Neel neel_darrell@bah.com; Louise Wright louise.wright1@va.gov; Laurel Lawrence Lawrence_laurie@bah.com; Eric Dickman eric.c.dickman@accenturefederal.com; Shamik Desai Shamik.Desai@va.gov

## Resources	
- Project Brief: 	
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/redesign/ct-redesign-discovery_product-outline.md	
- Convo Guide	
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/redesign/research/usability-testing-june2021/discussion-guide.md	
- Synthesis	
https://app.mural.co/t/bahdigitalexperience6902/m/bahdigitalexperience6902/1623780668827/7720e9acd7f8c80fcb293c2462916a1370a53001?sender=jonesjennifer26349 	
- Lessons Learned	
*Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 	
- Read-Out/Results	
  - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/redesign/research/usability-testing-june2021/CT-Redesign-CompareReadout-20210628.pdf 	
  
