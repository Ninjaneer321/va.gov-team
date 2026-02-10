---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience Team, Direct Deposit UAT, September 2019"
date: 2026-02-10
last_updated: 2026-02-10
team: "Authenticated Experience"
product: "Direct Deposit"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Direct deposit for compensation & pension needs to launch on VA.gov as quickly as possible per VBA leadership directive. UAT is required to validate functionality on production before full release."
  product_location: "VA.gov Profile - Direct Deposit section (production beta)"
  user_familiarity: "New feature completing validation testing before public launch"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md"

# Research Design
methodology: "UAT"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Validate that direct deposit is displaying correctly for eligible users in production"
  - goal_2: "Verify that direct deposit information is being correctly pulled from backend systems"
  - goal_3: "Test that users can successfully update their direct deposit information on production"

research_questions:
  - "Is direct deposit showing in people's profiles when it is supposed to?"
  - "Is direct deposit NOT showing when it's NOT supposed to?"
  - "For people who are supposed to see direct deposit, is their information being correctly pulled in from the backend?"
  - "For people who are supposed to see direct deposit, can they update their information?"

hypotheses:
  - "Direct deposit will work as expected on production"

expected_outcomes: "Confirm that direct deposit functionality works correctly on production before full public launch"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment for production testing"
  
  primary_criteria:
    - "Must receive compensation & pension payments from the VA"
    - "Must be LOA3 (identity verified) on VA.gov"
    - "Must be able to screenshare via GoToMeeting"
    
  secondary_criteria:
    - "Comfortable with technology"
    
  screener_questions:
    - question: "Do you receive compensation & pension payments from the VA?"
      qualifying_response: "Yes"
    - question: "Can you sign into VA.gov and access your profile without being prompted to verify your identity?"
      qualifying_response: "Yes"
      
participants:
  veterans: 5
  caregivers: 0
  dependents: 0
  total_recruited: 5
  completed_sessions_goal: 5
  
# Timeline & Sessions
timeline:
  pilot_date: "2019-09-03"
  pilot_participant: "TBD"
  research_dates: "2019-09-04 to 2019-09-09"
  research_review_submission: ""
  
session_details:
  duration_minutes: 15
  buffer_minutes: 30
  max_sessions_per_day: 4
  
# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their VA benefits online"
    key_results: 
      - "Launch secure direct deposit management on VA.gov"
  - objective: "Improve security and reduce fraud"
    key_results:
      - "Migrate sensitive transactions to 2FA-protected platform"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Direct Deposit Usability Testing June 2019"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Disability"
  - "BNFT: Pension"
  - "PRDT: Direct-deposit"
  - "PRDT: Profile"
  - "DSP: Authenticated-experience"
  - "UAT"
  - "remote"
  - "production-testing"
  - "beta"
  - "financial-information"
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
