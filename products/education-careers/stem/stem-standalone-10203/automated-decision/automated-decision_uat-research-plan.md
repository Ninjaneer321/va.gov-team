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

# UAT Research Plan for STEM Scholarship (22-10203) Automated Decision

## Goals	
1. What product & team are you doing this research for?
   VA.gov Education (#vsa-education) team is preparing to release new functionality to be incorporated to the STEM Scholarship application on VA.gov that would provide "automated denial" decisions upon submission of the application.
2. Background: This enhancement to the STEM Scholarship form is being made in an effort to reduce the number of applications that require processing by the Buffalo RPO. Historically, there have been a high percentage of ineligible applications that require processing because the application itself is relatively simple to complete and the potential payoff is high (up to $30,000). There are a few required fields within the application that on their own indicate an individual's eligibility and these are the fields we are utilizing to trigger an automated denial. In addition, we are also planning to the addition of a POA indicator to the spool file reports to be processed by the Buffalo RPO
3. Research questions:
   1. Are applicants being automatically denied as expected? Are they receiving appropriate communication upon automatic denial?
   2. Are applicants able to view the status of their application on VA.gov?
   2. Are any applicants being automatically denied who should not be?
   3. Is the spool file being updated for applicants based on whether or not they have POA associated with their VA.gov profile?
4. Hypothesis: Applicants are being denied as expected, receiving appropriate email communication upon automatic denial, and able to view their application status on VA.gov

## Method	
1.	What method of research are you planning? Remote moderated user acceptance testing with Veterans on Production 	
2.	Why this method? We are unable to complete testing on staging due to limitations of EVSS test data located there. With this, the best way to test that the functionality is working as expected is with Veterans on Production through submissions of actual applications. 
3.	Where are you planning to do your research? Via webconference and screenshare (Zoom)
4.	What will you be testing? The live 22-10203 application  	
5.  If remote: What tool do you plan to use? Zoom via Perigean

## Participants and Recruitment	
1.	Participant criteria: What are you looking for in a participant?	  
(Mention: Number of people, ages, accessibility preferences, geographical diversity, login requirements, VA benefit requirements, familiarity with technology, etc. Keep in mind, the more requirements, the more difficult the recruit, so give ample time to ensure the right participant mix.)	

We are hoping to recruit 10 total participants: 
- ~~8~~ 5 ineligible particiapnts 
   - Of the ~~8~~ 5 ineligible, we'd like at least 3 of them to have Power of Attorneys on file with LTS/VA.gov
- 2 eligible participants

More specifically: 
- ~~3 Ineligible participants due to program type --~~
- 5 Ineligible participants due to remaining entitlement
- 2 Eligible participants

~~3 Ineligible applicants (ineligible due to program of study)~~
- You must have one of these free accounts to log in to VA.gov during the testing session:~~
   - ~~A premium My HealtheVet account, or~~
   - ~~A DS Logon account (used for eBenefits and milConnect), or~~
   - ~~A verified ID.me account that you can create here on VA.gov~~
- ~~Have applied for Post-9/11 GI Bill Benefits (Chapter 33)~~
- ~~Received a decision from the VA on your application  (Chapter 33)~~
- ~~One of the following: ~~
    - ~~Currently enrolled in a higher education program that is **NOT** in the field of Science, Technology, Engineering, or Math (STEM) OR ~~
    - ~~You've already earned a STEM bachelor’s degree and are pursuing a teaching certification that is **NOT** in the field of Science, Technology, Engineering, or Math (STEM)~~
- ~~Less than 6 months of benefit entitlement remaining. To check this:~~
   - ~~Navigate to https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/~~
   - ~~Sign into your account~~
   - ~~Review your remaining entitlement (in months and days) for your post-9/11 (chapter 33) GI Bill benefit~~
- ~~Do you have a Power of Attorney on record on VA.gov?~~


5 Ineligible applicants (ineligible due to chapter 33 entitlement remaining)
- You must have one of these free accounts to log in to VA.gov during the testing session:
   - A premium My HealtheVet account, or
   - A DS Logon account (used for eBenefits and milConnect), or
   - A verified ID.me account that you can create here on VA.gov
- Have applied for Post-9/11 GI Bill Benefits
- Received a decision from the VA on your application
- Meet one of the following criteria: 
   - Currently enrolled in a higher education program that IS in the field of Science, Technology, Engineering, or Math (STEM program list: https://benefits.va.gov/gibill/docs/fgib/STEM_Program_List.pdf) OR
   - You've already earned a STEM bachelor’s degree and are pursuing a teaching certification that is in the field of Science, Technology, Engineering, or Math (STEM) (STEM program list: https://benefits.va.gov/gibill/docs/fgib/STEM_Program_List.pdf)
- More than 6 months of benefit entitlement remaining. To check this:
   - Navigate to https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/
   - Sign into your account
   - Review your remaining entitlement (in months and days) for your post-9/11 (chapter 33) GI Bill benefit
- Do you have a Power of Attorney on record on VA.gov?

3 Ineligible participants (from the two groups above) with a Power of Attorney
- Do you have a Power of Attorney on Record on VA.gov (this is a criteria we are currently investigating to see if there is a way   for participants to verify prior to participating in our sessions). 

2 Eligible 
- You must have one of these free accounts to log in to VA.gov:
   - A premium My HealtheVet account, or
   - A DS Logon account (used for eBenefits and milConnect), or
   - A verified ID.me account that you can create here on VA.gov
- Have applied for Post-9/11 GI Bill Benefits
- Received a decision from the VA on your application
- Meet one of the following criteria: 
   - Currently enrolled in a higher education program that IS in the field of Science, Technology, Engineering, or Math (STEM program list: https://benefits.va.gov/gibill/docs/fgib/STEM_Program_List.pdf) OR
   - You've already earned a STEM bachelor’s degree and are pursuing a teaching certification that is in the field of Science, Technology, Engineering, or Math (STEM) (STEM program list: https://benefits.va.gov/gibill/docs/fgib/STEM_Program_List.pdf)
- Utilizing your post-9/11 GI Bill Benefits to pay for your program of study
- Less than 6 months of benefit entitlement remaining. To check this:
   - Navigate to https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/
   - Sign into your account
   - Review your remaining entitlement (in months and days) for your post-9/11 (chapter 33) GI Bill benefit
- Do you have a Power of Attorney?

Please list your participant criteria in two categories-
1. **Primary criteria / Must have** - what absolutely must be true in order to run your study? The clearer you can write this criteria, the easier it is to find matches for your study. (i.e. if your study will only work if you're talking to Veterans who have My HealtheVet premium accounts, mention that here. OR, if you are using a prototype tool that will not work well with screen readers, mention that as well.) 

### All Criteria listed above are required. No additional required criteria. 

2. **Secondary criteria / Would like to have** - what other criteria would strengthen your results?
None (all are primary)

2.	What is your recruitment strategy? 	
Plan to draw from the existing recruiting contract - Perigean

## When? 	
1.	Timeline: What dates do you plan to do research? 	
March 15-18 

2.	Prepare: When will the thing you are testing be ready? 
March 12

3. Length of Sessions: How long do you estimate each session will be? 
30 minutes with a 15 minute buffer time between sessions. 

4.	Availability: If applicable, when would you like sessions scheduled? 
15 minute buffer between sessions
All times below in EST: 
- March 15 - 11AM - 3PM; 4PM - 5PM
- March 16 - 10AM - 1:30PM; 3PM - 5PM
- March 17 - 10AM - 5PM
- March 18 - 12PM - 2PM; 3PM-5PM

5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 	
March 12

## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Desiree Turner (turner_desiree@bah.com)
- Research guide writing and task development (usually but not always same as moderator):	Desiree Turner (turner_desiree@bah.com)
- Participant recruiting & screening: Perigean
- Project point of contact: Desiree Turner (turner_desiree@bah.com)
- Participant(s) for pilot test:	TBD
- Note-takers:	Dan Shawkey (shawkey_daniel@bah.com), Darrell Neel (shawkey_daniel@bah.com), Amy Knox (knox_amy@bah.com), Jen Jones (jones_jennifer2@bah.com), Emma Waters (waters_emma@bah.com), Will McCormack (mccormack_will@bah.com)
- Observers: Dan Shawkey (shawkey_daniel@bah.com), Darrell Neel (shawkey_daniel@bah.com), Amy Knox (knox_amy@bah.com), Jen Jones (jones_jennifer2@bah.com), Emma Waters (waters_emma@bah.com), Will McCormack (mccormack_will@bah.com)

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

## Resources	
- Project Brief: 	
*Project brief should live in the appropriate va.gov-team product folder, simply paste a link to it here*	
*Discussion guide should live in the appropriate va.gov-team product folder, simply paste a link to it here*	
- https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/stem/stem-standalone-10203/automated-decision/automated-decision_uat-convo-guide_eligible.md
- https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/education-careers/stem/stem-standalone-10203/SCO%20&%20Entitlement%20UAT/conversation-guide_ineligible.md
*Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)* 	
- Lessons Learned	
*Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 	
- Read-Out/Results	
  - *Read-out presentation should live in the appropriate product repo and folder; paste a link to it here.* 	
  - ** Don't forget to add a link to your research folder to the research tracker! [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)
