---
# Research Plan Metadata
title: "Research Plan for VET TEC Application (Form 22-0994), January 2019"
date: 2019-01-07
last_updated: 2019-02-28
team: "Education Services"
product: "VET TEC Application (Form 22-0994)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans applying for VET TEC education benefits need to bypass unrelated questions and complete form as easily as possible with contextual help and pre-populated data"
  product_location: "VA.gov Education section - VET TEC Application"
  user_familiarity: "New product - first digital version of Form 22-0994"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/application/vettec-0994"

# Research Design
methodology: "usability-testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand challenges Veterans face when applying for VET TEC educational benefits"
  - goal_2: "Identify what VA needs from Veterans on Form 22-0994 for valid requests"
  - goal_3: "Determine where conditional logic can display only relevant questions"
  - goal_4: "Identify helpful contextual information to ensure valid requests"

research_questions:
  - "What challenges or common pitfalls do Veterans face when attempting to apply for educational benefits?"
  - "What information does the VA need to receive from Veterans on VA Form 22-0994?"
  - "Where can we use conditional logic and branching to display only relevant questions?"
  - "What information and/or contextual help would be helpful to ensure valid requests?"

hypotheses:
  - "Presenting form in easy to use interview format will simplify the process"
  - "Displaying only relevant questions will improve Veteran experience"
  - "Pre-populating data will save Veteran time"
  - "Contextual help will guide Veterans through completing the form"
  - "Online form will increase satisfaction and confidence in applying for benefits independently"

expected_outcomes: "Understand Veteran issues when completing form to write helpful instructional copy, learn intent behind questions to encourage accurate completion"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Target Veterans interested in high-tech education with remaining education benefits"
  
  primary_criteria:
    - "Either applied for VA educational benefits before OR interested in applying"
    - "Have VA educational benefits remaining OR new applicants interested in VET TEC"
    - "Interested in pursuing education in high-tech industry"
    - "Age range 22-45 years old"
    
  secondary_criteria:
    - "Mix of new and returning education benefit users"
    - "Interest in high-tech industry training"
    
  screener_questions:
    - question: "Have you applied for VA educational benefits before?"
      qualifying_response: "Either yes or no (if no, must be interested in applying)"
    - question: "Do you have any VA educational benefits remaining?"
      qualifying_response: "Yes (for prior users)"
    - question: "Are you interested in pursuing education in the high-tech industry?"
      qualifying_response: "Yes"
    - question: "What is your age range?"
      qualifying_response: "22-45 years old"
      
participants:
  veterans: 6
  caregivers: 0
  dependents: 0
  total_recruited: 8
  completed_sessions_goal: 4
  
# Timeline & Sessions
timeline:
  pilot_date: "2019-01-16"
  pilot_participant: "Team member"
  research_dates: "2019-01-18 to 2019-02-28"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can access education benefits"
      
veteran_journey_phases:
  - "Finding something to do"
  - "Reinventing myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/application/vettec-0994/research"
    
tags:
  - "EDU: Education"
  - "AUD: Veterans"
  - "PRDT: VET-TEC"
  - "PRDT: Form-22-0994"
  - "PRDT: Education-benefits"
  - "usability-testing"
  - "user-interviews"
  - "remote-moderated"
  - "authenticated"
  - "high-tech-training"
  - "conditional-logic"
study: "VET TEC Application (Form 22-0994)"
type: "usability-testing"
---


# Sprint Research Plan #
## VA Form 22-0994 ##
January 7, 2018 – January 18, 2019

#### Problem Statement 
As a Veteran, I want to apply for VET TEC education benefits as easily as possible.  I would like to bypass any questions that are unrelated to my specific situation.

#### Solution Hypothesis
By presenting VA Form 22-0994 in an easy to use interview format, displaying only those questions that relate to the Veteran's specific situation, pre-populating data, presenting contextual help and guiding the Veteran through the process of completing the forms, Vets.gov will simplify the process of applying for education benefits. The online VA Form 22-0994 form will improve the experience of applying for educational benefits. It will save the Veteran time, increase their satisfaction with the process, and make them more confident in their ability to apply for benefits independently.

#### Research Questions

The research is designed to answer the following questions:
 
* What challenges or common pitfalls do Veterans face when attempting to apply for educational benefits?
* What information does the VA need to receive from Veterans on VA Form 22-0994 to ensure that valid requests for educational benefits are approved?
* Where can we use conditional logic and branching to display only those questions that are relevant to the Veteran?
* What information and/or contextual help would be helpful on VA Form 22-0994 to ensure valid requests are approved?

#### What knowledge will make us feel like the research process has been successful?

Learning about the issues Veterans encounter when completing the form will help us write instructional copy to help them complete the form correctly. 

In addition, learning the intent behind each question will allow us to write the application in a way that encourages accurate and thorough completion of the form, including non-required questions.    

#### What kinds of users do we need to talk to answer our questions?

The following users have been identified:
* Veterans
* VA Business Stakeholder / IPT Team Members
* College Veterans Office Representatives
* VSOs 

#### What specific questions do we need to ask on our Usability Testing screener to get the right kinds of users to test the form?

In addition to the standard questions, which ensure a representative mix of participants, the screener should include the following questions and responses:
1.	Have you applied for VA educational benefits before? 
   * If yes, to Question 3
   * If no, to Question 2
2.	Are you interested in applying for VA educational benefits?
   * If yes, to Question 4
   * If no, end
3.	Do you have any VA educational benefits remaining? 
   * If yes, to Question 4
   * If no, end
4.	Are you interested in pursuing education in the high-tech industry? 
   * If high-tech, to Question 5
   * If other, determine applicability before Question 5
5.	What is your age range?  
   * If 22-45 years old, would you like to participate?
   * If other, end

#### What kind of user research do we want to conduct?

The following research methods will be used:
* Structured Interview with:
o	Veterans 
o	VA Business Stakeholders / IPT Team Members
o	College Veterans Office Representatives 
o	VSOs

* Moderated Usability Testing of a high-fidelity prototype with:
o	1-2 College Veterans Office Representatives
o	1-2 VSOs
o	4 to 6 Veterans

#### What testing and recording tools do we need to run the research sessions?

Remote Interviews will be recorded via WebEx
Usability test sessions will be recorded via WebEx
In-person notes will be taken by hand and/or on a computer. 

#### What artifacts do we need to support the research effort?

For the interviews, the following artifacts will be developed:
* Veteran Script
* Stakeholder / IPT Team Script/Questionnaire
* College Veterans Office Representatives Script/Questionnaire
* VSO Script/Questionnaire?

The interview scripts will be ready by: 1/16/2018

For the usability testing, the following artifacts will be developed:
* A high-fidelity, clickable InVision prototype
* Veteran Test Script
* Claims Examiner / VSO / CVOR Test Script

The InVision prototype will be ready by: 2/1/2019

The test scripts will be ready by: 2/8/2019

#### Who will fill the team roles?
* Screener writers: Theresa McMurdo, Amy Knox
* Recruiter: Perigean
* Conversation guide writer: Theresa McMurdo, Amy Knox
* Prototype Designer: Cindy Cruz
* Moderator: Theresa McMurdo, Amy Knox
* Note-taker: Theresa McMurdo, Amy Knox and Cindy Cruz
* Observers: UX Team
* Research readout writer: Theresa McMurdo or Amy Knox

#### When do we want to conduct the testing?
Interviews 
* Interviews will be conducted during the 2nd week of Sprint 12 (1/14/2019 – 1/18/2019) 
* Interview times will be based on participant availability.

Usability Testing of the Prototype 
* Usability Testing will be conducted during the 1st week of Booz Sprint 15 
(2/11/2019 – 2/15/2019) 
* Usability Testing timeslots will be: 9AM, 11AM, 1PM, 3PM, 5PM, 7PM
* Each session will last no longer than 45 minutes
* A debrief among team members will be held immediately after each session.
* The findings from usability testing will be synthesized once all sessions have occurred and a findings report will be made.

#### When do we need to start recruiting?

Interview Recruiting needs to be complete by: 1/11/2019

Usability Testing Recruiting needs to be complete by: 2/8/2019