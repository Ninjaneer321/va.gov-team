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

# Research Plan for Direct Deposit UAT

## Goals
1. **What product & team are you doing this research for?**

This UAT will be conducted by the authenticated experience team for the direct deposit feature.

2. **Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?**

The website/dragons teams began development on direct deposit functionality on VA.gov back in March 2019. We  temporarily paused this project early in July, but not until we'd already completed user testing and development. As of 8/16/19, VBA leadership informed us that we needed to get direct deposit for comp & pen live on VA.gov as soon as possible so we have just started QA'd for this feature on staging, and we are preparing for UAT.

3. **Research questions: What question(s) do you hope to be able to answer after completing this research?** 

- Is direct deposit showing in people's profiles when it is supposed to?
- Is direct deposit NOT showing when it's NOT supposed to?
- For people who are supposed to see direct deposit, is their information being correctly pulled in from the backend?
- For people who are supposed to see direct deposit, can they update their information?

4. **Hypothesis: What is your hypothesis for this research?** 

- Direct deposit will work as expected.

## Method
1.	**What method of research are you planning?**
  
  - Moderated UAT.
  
2.	**Why this method? How does this methodology help you answer your research questions?** 

- We need to test that direct deposit is working on production before launching it to everyone.

3.	**Where are you planning to do your research?**

- GTM.

4.	**What will you be testing?**

- We will be testing direct deposit functionality on production (beta).

## Participants and Recruitment

1.	**Participant criteria: What are you looking for in a participant?**

We would like **5** participants who must meet the following criteria:

- First and foremost, participants **must receive compensation & pensions payments from the VA**. Please confirm this prior to sessions. If they do not receive these payments, they can not do testing.
- Participants must be LOA3 (identity verified) on VA.gov. **Participants will likely not know what this means**, so please confirm this prior to testing. This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. If they can see the profile, they are LOA3 and can participate in testing.
- Be able to screenshare via GTM. Please confirm with them that they have GTM downloaded prior to the session and they know how to screenshare. If they can not get GTM working, there is no interview portion of this research and they will not be able to participate.

2.	**What is your recruitment strategy?**

We will work with Perigean to recruit for this study.

## When? 

1.	**Timeline: What dates do you plan to do research?**

We are looking to start sessions **Wednesday, September 4, 2019**.

2.	**Prepare: When will the thing you are testing be ready?**

Direct deposit will be live on production behing a feature flag on **Tuesday, September 3, 2019**.

3. **Length of Sessions: How long do you estimate each session will be?**

We expect sessions to only be 10 – 15 minutes. **Please schedule sessions for 30 minutes with a 30 minute buffer between sessions**.

4.	**Availability: If applicable, when would you like sessions scheduled?**

FYI — **Arthur Green (agreen@governmentcio.com) will be conducting these sessions**. His availability is as follows:

- **Wednesday, September 4**: 8:30 am – 2:00 pm ET
- **Thursday, September 5**: 8:30 am – 2:00 pm ET
- **Friday, September 6**: 8:30 am – 1:30 pm ET
- **Monday, September 9**: 8:30 am – 3:00 pm ET

5.	**Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

- **Tuesday, September 3, 2019**

## Team Roles
**Please list the people who will be serving in each role.**

- **Moderator**: Arthur Green (agreen@governmentcio.com)
- **Research guide writing and task development**: Samara Strauss
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Samara Strauss and Arthur Green
- **Participant(s) for pilot test**: TBD
- **Note-takers**: Emily Waggoner
- **Observers**: Listed below

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

- Arthur Green (agreen@governmentcio.com)
- Lisa Koenigsberg (lisa.koenigsberg@va.gov)
- Justin Pickett (jpickett@governmentcio.com)
- Erik Hansen (erik@adhocteam.us)
- Tze Lei (tze@adhocteam.us)
- Lihan Li (lihan@adhocteam.us)
- Amen Ra (ara@governmentcio.com)
- Nick Sullivan (nick.sullivan@adhocteam.us)
- Chris Johnston (christopher.johnston2@va.gov)
- Emily Waggoner (emily@adhocteam.us)

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/UAT/conversation-guide.md)
- Notes
