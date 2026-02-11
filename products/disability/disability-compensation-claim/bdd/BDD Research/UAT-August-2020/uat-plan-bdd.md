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

# Research Plan for UAT for Benefits Delivery at Discharge (form 526)

## Goals
1. **What product & team are you doing this research for?**

This UAT will be conducted with one group of service members requesting their first disability claim before they are discharged from the miltary using the BDD tool built into the 526 flow, and a second group of service members that submit a normal claim within 1-89 days of separation.

Note that the Service Members will submit a real claim (either a normal claim or a BDD claim), and need to agree to do this in the session. We have Paul Shute and Barry Cooper in the session, that can correct anything after the submissions, if needed. 

2. **Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?**

Service members who are separating and plan to file for disability can file their claim before separation. This is done through the Veterans Affairs (VA) Benefits Delivery at Discharge (BDD) program. This program allows Service members to apply for VA disability compensation benefits prior to separation. Claims must be filed between 180 to 90 days prior to separation.  In addition to testing 90-180 days before separation, although 1-89 days before separation is not a BDD eligible claims submission, it will still be accepted by VSA and EVSS will treat it with a different EP code that is similar to "quickstart".

3. **Research questions: What question(s) do you hope to be able to answer after completing this research?** 

- Can service members within 90-180 days of separation submit a claim on VA.gov? (BDD claim)
- Can service members within 1-89 days of separation submit a claim on VA.gov? (non-BDD claim)

4. **Hypothesis: What is your hypothesis for this research?** 

- Both categories of service members will be able to submit claims and EVSS will accept them.

## Method
1.	**What method of research are you planning?**
  
  - Moderated UAT.
  - These sessions will not be recorded. 
  
2.	**Why this method? How does this methodology help you answer your research questions?** 

- We have already done integration testing with EVSS and have completed rounds of usabilty with new designs.  This testing is to determine a go/no go decision with rolling out BDD to 25%.

-Specifically we want 5 active service members, that are eligible for BDD (180-90 days from anticipated separation date), submit a real BDD claim in the UAT test. The 5 service members must understand that they are submitting a real BDD claim, be eligible and have all the necessary documents ready for the UAT sessions. They need also to be ready for a VA claim exam 45 days after they submit the claim 

-We also want 5 VA veterans, (separated 1-89 days ago) that will submit a normal claim. The 5 service members must understand that they are submitting a real claim, be a VA member and be eligible to submit a normal claim, and have all the necessary documents ready for the UAT sessions. They need also to be ready for a VA claim exam 45 days after they submit the claim 

3.	**Where are you planning to do your research?**

- Through Zoom


4.	**What will you be testing?**

- Submit a claim 1-89 days before separation.
- Submit a claim 90-180 days before separation (BDD). Test BDD functionality and the wizard that directs them to the BDD version of 526.

## Participants and Recruitment

1.	**Participant criteria: What are you looking for in a participant?**

We would like **5** participants who MUST meet the following criteria:
Required for participating in this study: 

- Participants must have a DS Logon account.
- Participants must have their Service treatment records available. 
- Participants must have any Additional evidence to support their claim available (for example Private medical records, 
or Lay statements).
- Participants must be available to report for a claim exam 45 days after filing. 
- Participants must be separating from the miltary between 90-180 days from now.
- Participants will be claiming at least one disability.
- Participants must have no problem seeing the content on the screen and hearing the moderator. 
- Participants should be able to use Zoom and not have to use a screen reader or other accessibility aid.

Nice to have requirements: 

- Good spread in demographics.
- Good spread across different levels of "tech-savviness".

We would like **5** participants who MUST meet the following criteria:
Required for participating in this study: 

- Participants must have a DS Logon account.
- Participants must have their Service treatment records available. 
- Participants must have any Additional evidence to support their claim available (for example Private medical records, 
or Lay statements).
- Participants must be available to report for a claim exam 45 days after filing. 
- Participants must be separating from the miltary between 1-89 days from now.
- Participants will be claiming at least one disability.
- Participants must have no problem seeing the content on the screen and hearing the moderator.
- Participants should be able to use Zoom and not have to use a screen reader or other accessibility aid.

Nice to have requirements:

- Spread in demographics.
- Spread across different levels of "tech-savviness".

2.	**What is your recruitment strategy?**

We will work with Perigean to recruit for this study. 

## When? 

1.	**Timeline: What dates do you plan to do research?**

We are looking to start sessions **Wednesday, Saptember 9, 2020. We will test with users September 9 and 10 and as we find participants **.

2.	**Prepare: When will the thing you are testing be ready?**

BDD should be live on production with EVSS on or about August 26, 2020. 

3. **Length of Sessions: How long do you estimate each session will be?**

We expect sessions to be 60 minutes. **Please schedule sessions for 60 minutes with a 30 minute buffer between sessions**.

4.	**Availability: If applicable, when would you like sessions scheduled?**

Between 8 am and 4pm EST.

5.	**Pilot: There will be no pilot session **



## Team Roles
**Please list the people who will be serving in each role.**

- **Moderator**: Christian Valla (cvalla@governmentcio.com)
- **Research guide writing and task development**: Christian Valla
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Christian Valla and Luke Majewski
- **Participant(s) for pilot test**: Kevin S.
- **Note-takers**: Kevin S.
- **Observers**: Luke Majewski, Anna Carey, Robin Garrison, Nick Sprinkle, Barry Cooper, Tze Lei, Paul Shute, Ed Mangimelli

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

- Luke Majewski (lmajewski@governmentcio.com)
- Christian Valla (cvalla@governmentcio.com)
- Kevin Stachura (kstachura@governmentcio.com)
- Robin Garrison (robin.garrison@adhocteam.us)
- Anna Carey (anna@adhocteam.us)
- Nick Sprinkle (nick.sprinkle@oddball.io)
- Tze Lei (tze@adhocteam.us)
- Barry Cooper (Barrett.Cooper@va.gov)
- Paul Shute (Paul.Shute@va.gov)
- Ed Mangimelli (ed.mangimelli@adhocteam.us)

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/disability-compensation-claim/bdd)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/disability-compensation-claim/bdd/BDD%20Research/UAT-August-2020)
- Notes
