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

# Research Plan for Authenticated Experience team, Logged in homepage, March 2020

## Goals	

1. What product & team are you doing this research for?	

   - Logged in homepage, Authenticated Experience team

2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product? 	

   Prior to the launch of the redesigned VA.gov in November 2018, the logged in homepage on Vets.gov was a personalized dashboard that allowed veterans to view their in-progress applications, claims, messages, and prescriptions. When the new VA.gov launched, this dashboard was renamed My VA and moved to a different location; users' logged in homepage remained the same as the logged out homepage.

   As time has gone on, My VA has grown but scaled poorly due to the structure set by the MVP. Additionally, the logged in homepage and My VA compete for veteran attention and focus because they are largely redundant of each other. What differs is their approach — the logged in homepage is primarily a router, while My VA is very much a dashboard.

   Through [research we did over the summer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/dashboard-interviews/research-summary.md), we determined that it's time to revisit both My VA and the logged in homepage. [We have proposed conslidating these two pages into one](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md#key-takeaway-we-need-to-revisit-our-my-va-logged-in-homepage-approach) by getting rid of My VA altogether and treating the logged-in homepage as a user's personalized landing pad and router. 

   While we're sure of what we want to do, the exact approach is still undefined. We would like to complete a discovery phase in order to help us better define user behavior, expectations, and needs, as well as stakeholder needs.

3. Research questions: What question(s) do you hope to be able to answer after completing this research? 

   - Why do people come to va.gov?
     - What are their expectations?
     - How might their experience be improved with an improved logged in experience and status updates/notifications?
   - What do people do on va.gov?
     - What are the pros and cons of their experience?
     - How do people use MY VA?
     - How do people use the homepage?
     - How do people move through the site?
   - What is currently being migrated from other places onto VA.gov that Veterans would expect to find on their dashboard?
     - Which tasks are Veterans completing on other VA websites (e.g. eBenefits)?
     - What don't we know?
   - What are other websites and apps doing for logged in homepages and status updates/notifications?
     - What aren't we thinking of?
     - What don't we know?
   - How are teams other than Authenticated Experience impacted by an improved logged in homepage experience? 
     - Who are the decision makers?
     - What risks do we need to be aware of?
     - What don't we know?

4. Hypothesis: What is your hypothesis for this research? 	

## Method	

1. What method of research are you planning and why? 	

   - **A review of previous research**, in order to: 
     - Understand how we got to where we are now on VA.gov
     - Gain insights into where we can improve as it relates to the logged in homepage
     - Ensure our research project is supplemental and not redundant of previous research
   - **Analytics review** to get a better sense of how users behave at scale
   - **User interviews**, so that we can 
     - further clarify what users need and expect from a logged in homepage experience, and notifications
     - Learn from users responses to the existing logged in homepage, myVA, and a blue sky prototype
   - **Stakeholder interviews**, to 
     - Understand the impact of this work to other teams
     - Gain insight to their goals and ideas around success for a new logged in homepage experience
     - Better understand risks
     - Expand our thinking and gain insights into what we don't know yet
   - **Competitive analysis** so that we can 
     - Learn how other websites and applications provide a logged in homepage experience
     - Expand our thinking beyond the possible solutions we've already thought of

2. Where are you planning to do your research? 

   - User interviews and stakeholder interviews would be remote moderated sessions via Zoom
   - [Analytics data](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6322) will be provided by our analytics team and included in our research synthesis

3. What will you be testing? 

   TBD. We may or may not want to show users the following as discussion tools:

   - The existing logged in homepage
   - My VA
   - [This blue sky protoype of a logged in VA.gov](https://vsateams.invisionapp.com/console/share/X3WBOA3QSWR)

## Resources	

- Project Brief: 	
  Coming soon
- Convo Guide	
  [Stakeholder Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/stakeholder-interviews/conversation-guide-stakeholders.md)	
- [Mural board mapping research goals to research methods](https://app.mural.co/t/vsa8243/m/vsa8243/1584898521775/64383bc2873e8c81bdd84190e16726e20855818e)
- Synthesis	
  Coming soon	
- Lessons Learned	
  Coming soon	
- Read-Out/Results	
  - Coming soon
