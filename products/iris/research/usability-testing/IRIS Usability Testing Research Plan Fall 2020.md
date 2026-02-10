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

# Usability Testing Research Plan for IRIS redesign, Fall 2020

As a designer I need to create a research plan to share with my team to ensure the usability testing is testing the right things at the right time to validate the right assumptions.	

## Goals

1. What product & team are you doing this research for?	

This usability testing will be on the IRIS redesigned product and this document will go into the goals more at the tasks and questions during the testing.  We want to ensure that the redesigned IRIS experience is an improvement on the existing product.

2. Background: 
Briefly, what is the background on this product? What would a new person on the team need to know about this product?

Please view more in the [product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iris/IRIS-product-brief.md)

3. Research questions: 
What question(s) do you hope to be able to answer after completing this research? 

We have research questions which we’ll use usability testing to answer.  The goal is to understand what, if any, we need to change before releasing the redesigned IRIS within our scope (i.e. not testing the VA Design Library per se).  We also want to explore topics such as Customer Satisfaction & Trust, Findability and (Task) Service Completion, three key factors that the Analytics team has indicated are goals for products within the VA. 

We also foresee multiple usability studies for IRIS because of our development roadmap:

- Testing the IRIS form: validating the work done so far
- Testing the full IRIS experience: validating the rest of the backlog stories ncluding Help text,  File attachments etc.

See conversation guide for details questions and tests.

Exit questions

We would also ask questions at the end of the session from earlier in this document (‘Did the number of chapters/pages of the form feel like the right length?’). We may also use the System Usability Scale (i.e. 'I found the system unnecessarily complex') but may leave off until final usability test which tests the whole experience.

## Method	

1.	What method of research are you planning? 	

Usability testing with a link to the site on Staging via remote moderated research.  Because our product has conditional logic we want to test users with a version that is as high fidelity as possible.
  	
2.	Why this method? How does this methodology help you answer your research questions?

We want to run our redesigned product by our end users to ensure we're building the right thing in the right way at the right time - the right set of features and ensure that it's accessible.  Usability testing and an interview about their interactions with a product will allow us to answer research questions and validate our assumptions about the product we’re building.

3.	Where are you planning to do your research? 
Remotely via Zoom because of COVID-19.

4.	What will you be testing?

We will be testing with a version of the product on Staging. 

5.  If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)
We will be using Zoom.


## Participants and Recruitment


1. **Primary criteria / Must have** 

1.	Participant criteria:

- what absolutely must be true in order to run your study? The clearer you can write this criteria, the easier it is to find matches for your study. (i.e. if your study will only work if you're talking to Veterans who have My HealtheVet premium accounts, mention that here. OR, if you are using a prototype tool that will not work well with screen readers, mention that as well.)

We would like to find Veterans (or their family members, but ideally Veterans) who have used the IRIS form in the past year.

Our preference is to test with the same users we originally interviewed at the start of the project to see if this addresses their pain points and because we have built rapport with these people, but are open to testing with others. 

We will work with Perigean who will identify users with an aim to have sessions with 15 users (to recruit 15 with an anticipation some may cancel).

We want to ensure at least 1 participant is a person with a disability or cognitive challenges.

Participants must be able to use Zoom, locate and use the chat function in Zoom, and to share their screen through Zoom and ideally have Zoom downloaded and installed on their laptop and phone ahead of time.  We plan to test on both Web and mobile if possible.

If Zoom isn't available we can default to GoToMeeting if people have it installed on their computer/laptop beforehand.

2.	What is your recruitment strategy? 

We will work with Perigean who will identify users with an aim to have sessions with 10 users.


## When?

1.	Timeline: What dates do you plan to do research? 	
(If you are using the research recruiting contract, please submit 1 FULL week prior to the start of research for remote, 2+ weeks for in person.) 	

We would like to conduct this research post Thanksgiving.

2.	Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.)

- Version on Staging which will allow users to interact with a live form, with possible Invision prototype we could screen share.

3. Length of Sessions: How long do you estimate each session will be?

These sessions will likely be one hour to allow for a relaxed conversation and the actual usability tests.

4.	Availability: If applicable, when would you like sessions scheduled? 

- Dec. 14th to 18th; can continue to Dec. 22nd to Dec. 23th as necessary.

- Availability Monday to Friday 9 - 5 EST 

- We would like it limit it to about 3 sessions per day maximum, with at least ½ hour in between each session (i.e. no back to back interviews).  If we have 4 sessions on a day because that's the only time, that's fine as long as there is at least 1/2 hour in between them.



5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 
	
We will pilot with the TW team internally to prepare for the session.


## Who - Team Roles	
- Moderator: Rachel M. Murray, UX Designer at TW
- Research: Rachel M. Murray, UX Designer at TW
- Participant recruiting & screening: Perigean
- Project point of contact: Laura Prietula
- Participant(s) for pilot test: see above
- Note-takers: ThoughtWorks team	
	Katie Ho, kho@thoughtworks.com
	Ramya Ramesh, ramyar@thoughtworks.com

- Observers: Interested parties in the VA
	Chante Lantos Swett, Chante.LantosSwett@va.gov


## Resources	

- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iris/IRIS-product-brief.md )
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/iris/Usability%20Testing/IRIS%20Usability%20Testing%20Conversation%20Guide%20Fall%202020.md)
