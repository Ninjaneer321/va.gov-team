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

# Virtual Agent Controlled Study Research Plan, 5/17/2021

As a researcher I want to create a research plan so Perigean can recruit the correct users for our research study.	

## Goals

1. What product & team are you doing this research for?	

This research is for the VA-Virtual Agent team for the Virtual Agent product. 	

2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 	

The virtual agent/chatbot will eventually be hosted on Va.gov. Exact location(s) to be determined. Ultimately, the virtual agent’s goal is to provide responses based on existing Va.gov content. This project is part of the larger Omnichannel strategy (led by VEO) to provide veterans with seamless access to information. 

3. Research questions: What question(s) do you hope to be able to answer after completing this research? 	

We hope to gather the following qualitative insights: 

1. The chatbot answered my questions accurately a) All of the time; b) Most of the time, c) Some of the time; d) The chatbot did not answer any of my questions accurately; e) I don't know.

2. The chatbot understood what I was trying to ask a) Yes; b) No; c) Somewhat 

3. After reading the response, did you have the information you needed to take the next step to complete your task?

4. If the chatbot wasn’t able to answer your question, how did that make you feel?

5. The chatbot can answer both general questions (for example, location of a VA facility) and personal questions (your benefit status). However, you must sign into va.gov for the chatbot to answer personal questions. How do you prefer to use this chatbot? a) I would prefer to sign in, so I can get answers to personal questions. b) I would prefer not to sign in, even if it means I cannot get personalized answers. c) I don't know. 

6. Would you sign into va.gov so that you could ask sensitive questions like your benefits status, or would you prefer to NOT to sign in and just ask general questions (i.e. location of VA facility)? 

7. After reading the response, did you have the information you needed to take the next step to complete your task?

8. How do you feel about the voice of the response you received? Voice refers to the personality of the chatbot (friendly, chatty, dry, etc.)

9. How do you feel about the tone of the response you received? Tone refers to the style of response (professional, bureaucratic, casual, etc.) 

10. How do you feel about the quality of the response you received? Quality refers to your satisfaction with the accuracy of responses. Were you given the right link? Was your question answered? 

11. How often do you speak with a VA help desk/contact center to help you resolve an issue? Daily, several times a week, weekly, monthly, every few months, yearly

12. What were some of the reasons you have called a VA help desk/contact center in the past?

13. How can a chatbot help you reduce how often you call the VA?

14. Based on your experience today, are you willing to use the chatbot again?

15. Do you have any other feedback you'd like to share?


Hypothesis: What is your hypothesis for this research? 	

The focus of this study is to understand general usage and mental models rather than validate a specific hypothesis. However, we are exploring the following assumptions:

- More Veterans will attempt to find information that requires authentication (e.g., claims-status). 
- We will see a high number of questions that the bot has not yet been trained to answer. 
- There is a niche-market for this product. We wonder if:
    -  Caretakers (likely more women) may give a higher satisfaction rating, or be more interested in a virtual agent/chatbot. 
    -  Veterans who may be seeking anonymity (e.g., LGBTQ+, housing or food insecurity, mental-health crisis) may be more comfortable   utilizing this tool over speaking with a human. 
- Veterans will attempt to sign in order to use the bot for their specific information.
- Veterans will want the chatbot to transfer their conversation directly to a human agent. 
- Veterans will expect that the chatbot cannot answer in depth questions. 


## Method
1.	What method of research are you planning? 	

Remote unmoderated

We would like to conduct an unmoderated controlled study where participants are invited to participate in the study by email and are sent a link to the chatbot on Staging.va.gov, a feedback link as well as a validation code.  

After using the application, participants click on the link to capture feedback (likely on Optimal Workshop) and then enter in a validation code (likely on Optimal Workshop) so we can track who has participated and so participants can be compensated.  

_The instructions to send to confirmed participants:_

Thank you for participating in this study. We know your time is valuable, and your feedback will help us build better products to serve you. We are exploring how a virtual agent/chatbot may help you find answers on Va.gov. To help us understand this, we created a prototype for you to test. 

A couple of things to know: 

- This is a prototype, an early version of the product. Some features may not work perfectly. 
- Please interact with the chatbot - only. Other links, buttons and/or forms will be available to you, but we only need your input on the chatbot. 
- Please use a browser like Chrome, Firefox and Safari and NOT IE11
- Spend at least 10 minutes engaging (asking questions, reading responses etc.) with the chatbot. 
- We will be able to read what you type to the chatbot, so please do not type any personal information that can be used to identify you.
- When you are done, please click on the link in this email, which will take you to a page where you can provide feedback. Feel free to be as honest as possible on what your experience was like with the product.

Thank you for participating!

2.	Why this method? How does this methodology help you answer your research questions? 	

An unmoderated study prevents bias. We need Veterans to engage with the virtual agent in as close to a realistic setting as possible, so that we can learn how they actually interact with a virtual agent when no one is providing support or guiding their thoughts. 

However, we have a small sample-size moderated study with disabled Veterans in the works. Details for that study will be provided in that study’s research plan. 

3.	Where are you planning to do your research? *If in person, mention the location, point of contact, arrangements, etc. If online, mention which tool you'll be using (GTM, Join.me, etc.)*	

Strictly Online

4.	What will you be testing? *(Design mocks, card sort, prototype, page, content, etc.)* 	

We will be gathering feedback on the product at staging.va.gov/virtual-agent-study/

5.  If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)	

We plan to use Optimal Workshop to capture feedback.

## Participants and Recruitment
1.	Participant criteria: What are you looking for in a participant?	  

1. **Primary criteria / Must have** - what absolutely must be true in order to run your study? The clearer you can write this criteria, the easier it is to find matches for your study. (i.e. if your study will only work if you're talking to Veterans who have My HealtheVet premium accounts, mention that here. OR, if you are using a prototype tool that will not work well with screen readers, mention that as well.) 

We require 100 participants, with 10 participants in each pods or segment:

Veterans:

Segment #1: 10 participants who are female Veterans 
- For this demographic, aim for an equal number of participants across age brackets and conflicts/periods of service - so Korean Conflict, Vietnam Era, Persian Gulf, Afghanistan, Iraq.

Segment #2: 10 participants who are male Veterans 
- For this demographic, aim for an equal number of participants across age brackets and conflicts/periods of service - so Korean Conflict, Vietnam Era, Persian Gulf, Afghanistan, Iraq.

Non-Veterans:

Segment #3: 10 participants who are people close to Veterans 
- Can be female caretakers, male caretaker or family members (i.e. dependents)

Usage related segments:

- Segment #4: 10 participants who are new to va.gov (2 years or less) 

- Segment #5: 10 participants who are casual, infrequent users of va.gov (once a year)

- Segment #6: 10 participants who are frequent users (i.e. dependent on claims etc. or who visit va.gov daily or weekly) 

Location:

- Segment #7: 10 participants who live in urban centers 

- Segment #8: 10 participants who live in suburban or rural areas 

Marginalized populations:

- Segment #9: 10 participants who identify as LGBTQ+  

- Segment #10: 10 participants who are experiencing economic insecurity - (i.e. experiencing homelessness/housing insecure, food insecurity, either currently or previously in their time as a Veteran post-discharge from service).  

- Links for Optimal Workshop:

Segment #1: 10 participants who are female Veterans.:  
https://adhoc.optimalworkshop.com/questions/chatbot1 

Segment #2: 10 participants who are Male Veterans
https://adhoc.optimalworkshop.com/questions/chatbot2 

Segment #3: 10 participants who are people close to Veterans
https://adhoc.optimalworkshop.com/questions/chatbot3 

Segment #4: 10 participants who are new to va.gov (2 years or less) 
https://adhoc.optimalworkshop.com/questions/chatbot4 

Segment #5: 10 participants who are casual, infrequent users of va.gov (once a year)
https://adhoc.optimalworkshop.com/questions/chatbot5 

Segment #6: 10 participants who are frequent users 
https://adhoc.optimalworkshop.com/questions/chatbot6 

Segment #7: 10 participants who live in urban centers
https://adhoc.optimalworkshop.com/questions/chatbot7

Segment #8: 10 participants who live in suburban or rural areas
https://adhoc.optimalworkshop.com/questions/chatbot8 

Segment #9: 10 participants who identify as LGBTQ+ 
https://adhoc.optimalworkshop.com/questions/chatbot9 

Segment #10: 10 participants who are experiencing economic insecurity 
https://adhoc.optimalworkshop.com/questions/chatbot10 


For technology requirements:

- Login: no login requirements.  
- Device: Has used computers and Internet; we will be having users test on their desktop/laptop where possible
- Browser: Using a browser like Chrome, Firefox and Safari - no IE11 users

2. **Secondary criteria / Would like to have** - what other criteria would strengthen your results?

n/a

2.	What is your recruitment strategy? 	

- Perigean

## When?

**1.	Timeline: What dates do you plan to do research?** 	

We would like to start the research on June 1st and run it until 100 participants are met. 

**2.	Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.)**

Yes, the product will be ready at staging.va.gov/virtual-agent-study/

**3. Length of Sessions**

There is no set length of session. However, we would prefer if participants spend at least 10 minutes trying the virtual agent.

**4.	Availability: If applicable, when would you like sessions scheduled?**

To start on June 1st and to end when reliable data for 100 participants is met. 

**5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

Week of 5/21: Luciana Morais, Shane Strassburg, Rachel M. Murray, Katie Ho


## Team Roles

- Moderator: Shane Strassberg; shane.strassberg@omb.eop.gov Note that since users will be using the product on their own we won’t have a formal moderator
- Research guide writing and task development: Shane Strassberg and Rachel Murray (rachel.murray@thoughtworks)
- Participant recruiting & screening: Perigean
- Project point of contact: Shane Strassberg
- Participant(s) for pilot test: Veterans, caregivers, family members
- Observers: Luciana Morais (luciana.morais@va.gov), Katie Ho (kho@thoughtworks.com), Ian Santarinala (ian.santarinala@thoughtworks.com), Rachel M. Murray (rachel.murray@thoughtworks.com).  

## Resources
- Project Brief: 	
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/product_outline.md 
- Conversation Guide:
Not needed as unmoderated controlled study
- Read-Out/Results	
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/virtual-agent/research

- Links for Optimal Workshop
    - Segment #1: 10 participants who are female Veterans https://adhoc.optimalworkshop.com/questions/chatbot1 
    - Segment #2: 10 participants who are Male Veterans https://adhoc.optimalworkshop.com/questions/chatbot2 
    - Segment #3: 10 participants who are people close to Veterans https://adhoc.optimalworkshop.com/questions/chatbot3 
    - Segment #4: 10 participants who are new to va.gov (2 years or less)  https://adhoc.optimalworkshop.com/questions/chatbot4 
    - Segment #5: 10 participants who are casual, infrequent users of va.gov (once a year) https://adhoc.optimalworkshop.com/questions/chatbot5 
    - Segment #6: 10 participants who are frequent users  https://adhoc.optimalworkshop.com/questions/chatbot6 
    - Segment #7: 10 participants who live in urban centers https://adhoc.optimalworkshop.com/questions/chatbot7
    - Segment #8: 10 participants who live in suburban or rural areas https://adhoc.optimalworkshop.com/questions/chatbot8 
    - Segment #9: 10 participants who identify as LGBTQ+ https://adhoc.optimalworkshop.com/questions/chatbot9 
    - Segment #10: 10 participants who are experiencing economic insecurity  https://adhoc.optimalworkshop.com/questions/chatbot10 

