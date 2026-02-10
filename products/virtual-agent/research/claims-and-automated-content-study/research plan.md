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

# Virtual Agent Claims and Automated Content Study Research Plan, 10/25/2021

As a researcher I want to create a research plan so Perigean can recruit the correct users for our research study.	

## Goals

**1. What product & team are you doing this research for?**

This research is for the VA-Virtual Agent team for the Virtual Agent product. 	

**2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?** 	

The virtual agent/chatbot will be accessible on Va.gov around June 2022. Veterans will be able to access the chatbot from a link on Contact Us page. The virtual agent’s goal is to respond to inquiries using Va.gov content as the source of information. It will also provide personalized answers to queries such as claim and appeals status. This project is part of the larger Omnichannel strategy (led by VEO) to give veterans seamless access to information, self-service tools, and time-saving outcomes. 

**3. Research questions: What question(s) do you hope to be able to answer after completing this research?** 	

We hope to gather the following qualitative insights: 


**1.** How did you feel about the login experience?

**2.** How do you feel about the introduction? 

**3.** How do you feel about the warnings and disclaimers you see here? 

**4.** Are there any actions that the bot expects you to take? 

**5.** What information did you wish to see about your claim? 

**6.** Based on the information you have seen about your claim, what action will you take next? 

**7.** How many choices is the bot offering you?

**8.** When the bot tells you it does not have the answer, how does it make you feel? 

**9.** After reading the response, did you have the information you needed to take the next step to complete your task?

**10.** How do you feel about the quality of the response you received? Quality refers to your satisfaction with the accuracy of responses. Were you given the correct link? Was your question answered? 

**11.** How do you feel about the voice and tone of the response you received?

**12.** If the chatbot couldn't answer your question but could connect you to a live agent chat, would you prefer that over speaking by phone with the VA help desk/contact center?

**13.** Based on your experience today, are you willing to use the chatbot again?

**14.** What additional feature to the chatbot would improve your experience?

**15.** Do you have any other feedback you'd like to share?


**Hypothesis: What is your hypothesis for this research?** 	

The focus of this study is to determine the following points:

- If the structure of automated content (Drupal) from VA.gov helps or complicates a Veterans ability to answer a question or solve a problem
- If there is critical information missing from the claims/appeals chatbot experience
- If the visual display of buttons, conversation rules (e.g., non-deviation from topic), and other interaction points cause friction for the Veteran 
- How the Veteran feels about chatbot disclaimers such as records retention and crisis management
- How important is it for the Veteran to be able to surface a human agent


## Method
**1.	What method of research are you planning?**	

Remote Moderated

We want to conduct a moderated study utilizing a prototype hosted on staging environments. 

_The instructions to send to confirmed participants:_

Thank you for participating in this study. We know your time is valuable, and your feedback will help us build better products to serve you. We are exploring how a virtual agent/chatbot may help you find answers on Va.gov. To help us understand this, we created a prototype for you to test. 

A couple of things to know: 

- This is a prototype, an early version of the product. Some features may not work perfectly. 
- During your session, please interact with the chatbot - only. Other links, buttons and/or forms will be available to you, but we only need your input on the chatbot. 
- Please use a browser like Chrome, Firefox and Safari and NOT IE11
- This prototype requires signing in to Va.gov. We will provide you with login information during the moderated session.

Thank you for participating!

**2.	Why this method? How does this methodology help you answer your research questions?** 	

The prototype is still in development. A moderated study will allow us to get the feedback we need while mitigating possible technical frustrations for the Veteran in real-time. In addition, we can use mocks instead of the prototype if the prototype is unavailable or lack the required technical capabilities implemented in time for the session. 

**3.	Where are you planning to do your research? *If in person, mention the location, point of contact, arrangements, etc. If online, mention which tool you'll be using (GTM, Join.me, etc.)*	**

Strictly Online

**4.	What will you be testing? *(Design mocks, card sort, prototype, page, content, etc.)* **	

We will be gathering feedback on the product at staging.va.gov/virtual-agent-study/, and for some cases, we may utilize a visual mock/wireframe. 

**5.  If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)**	

Zoom.

## Participants and Recruitment
**1.	Participant criteria: What are you looking for in a participant?**	  

**Primary criteria / Must have** - what absolutely must be true in order to run your study? The clearer you can write this criteria, the easier it is to find matches for your study. (i.e. if your study will only work if you're talking to Veterans who have My HealtheVet premium accounts, mention that here. OR, if you are using a prototype tool that will not work well with screen readers, mention that as well.) 

- We require 7 participants

For technology requirements:

- Device: Has used computers and Internet; we will be having users test on their desktop/laptop where possible, and share their screens. 
- Browser: Using a browser like Chrome, Firefox and Safari - no IE11 users

**Secondary criteria / Would like to have** - what other criteria would strengthen your results?

n/a

**2.	What is your recruitment strategy?** 	

- Perigean

## When?

**1.	Timeline: What dates do you plan to do research?** 	

We would like to start sessions on November 8, 2021. 

**2.	Prepare: When will the thing you are testing be ready? (Goes without saying, but should be a few days before testing will begin.)**

Yes, the main product will be ready at staging.va.gov/virtual-agent-study/. Any necessary mocks will be ready as well. 

**3. Length of Sessions**

45 minutes. 

**4.	Availability: If applicable, when would you like sessions scheduled?**

To start on Nov 8 and to end when 7 participants have been interviewed.

**5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

Week of 11/01: Luciana Morais, Shane Strassberg, Alina Murphy, Ian Santarinala, Jacob Gacek.


## Team Roles

- Moderator: Shane Strassberg; shane.strassberg@omb.eop.gov; Luciana Morais; luciana.morais@va.gov
- Research guide writing and task development: Shane Strassberg & Luciana Morais
- Participant recruiting & screening: Perigean
- Project point of contact: Shane Strassberg 
- Participant(s) for pilot test: Veterans, caregivers, family members
- Observers: Luciana Morais (luciana.morais@va.gov), Alina Murphy (amurphy@thoughtworks.com), Ian Santarinala (ian.santarinala@thoughtworks.com),Jacob Gacek (jacob.gacek@thoughtworks.com) other developers on the team as needed.

## Resources
- Project Brief: 	
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/product_outline.md 
- Conversation Guide:
Not needed as unmoderated controlled study
- Read-Out/Results	
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/virtual-agent/research


