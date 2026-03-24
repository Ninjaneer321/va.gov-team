---
# Research Plan Metadata
title: "UAT for My VA Redesign 2.0, June 2021"
date: 2021-06-01
last_updated: 2021-06-01
team: "Authenticated Experience"
product: "My VA 2.0 Redesign"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Testing the new My VA page to reduce redundancy with homepage, elevate personally relevant information, scale gracefully, prioritize wayfinding, and effectively use visual space"
  product_location: "My VA dashboard on VA.gov"
  user_familiarity: "Major redesign of existing My VA page"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md"

# Research Design
methodology: "User Acceptance Testing (UAT)"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Test My VA loading sections properly for LOA3 users"
  - goal_2: "Verify disability rating, claims, health care, and benefits sections display correctly"
  - goal_3: "Confirm all links and navigation work as expected"

research_questions:
  - "Is My VA loading all sections when it should be for LOA3 users?"
  - "Can users get to My VA from the VA.gov homepage?"
  - "Do disability rating, name tag, claims, health care, and benefits sections display correctly?"
  - "Do all links work properly?"
  - "Do error states display correctly when applicable?"

hypotheses:
  - "My VA will work as expected, but we will discover some bugs that we did not previously know about"

expected_outcomes: "Identify and fix bugs before launching the new My VA page to all users"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Targeted recruitment for specific user scenarios"
  
  primary_criteria:
    - "5 participants with VA health care eligibility"
    - "5 participants with active claims or appeals"
    - "3 participants with current disability rating"
    - "All participants must be LOA3 (identity verified) on VA.gov"
    
  secondary_criteria:
    - "Ability to screenshare via Zoom"
    
  screener_questions:
    - question: "Can you access your VA.gov profile without being prompted to verify your identity?"
      qualifying_response: "Yes"
      
participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2021-06-22"
  pilot_participant: "TBD"
  research_dates: "2021-06-22 to 2021-06-29"
  research_review_submission: "2021-06-15"
  
session_details:
  duration_minutes: 30
  buffer_minutes: 30
  max_sessions_per_day: 8
  
# Strategic Alignment
octo_priorities:
  - objective: "Logged-in users can update their personal information easily and instantly"
    key_results: 
      - "Improved personalized dashboard experience"
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results:
      - "Consolidated My VA dashboard"
      
veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research%20V2/MyVA2-research-plan.md"
    
tags:
  - my-va
  - uat
  - user-acceptance-testing
  - redesign
  - my-va-2.0
  - authenticated-experience
  - personalization
  - dashboard
  - disability-rating
  - claims
  - health-care
  - benefits
  - LOA3
  - research-plan
---

# Research Plan for My VA UAT

## Goals
1. **What product & team are you doing this research for?**

This UAT will be conducted by the authenticated experience team for the new My VA page. 

2. **Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?**

The [My VA redesign](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/README.md) effort aims to:

- **Reduce redundancy** — Specifically, we should reduce redundancy between the My VA dashboard and the VA.gov homepage. This will happen in phases. As we redesign and re-launch the My VA dashboard, this frees up the homepage to be less task-management focused. As the homepage evolves away from a task management focus, it will be less redundant with My VA so both the homepage and My VA will have their own clear, unique purposes. However, in order for the homepage to evolve, we have to redesign My VA first.
- **Elevate personally relevant information** — Users should more easily be able to scan/evaluate their information.
- **Scale gracefully** — Our designs should allow for future updates and expansion, as new features are being added to VA.gov all the time.
- **Prioritize wayfinding** — We should make it easy for users to find the My VA dashboard.
- **Effectively use visual space** — We should avoid a single-column, "content page" approach. Design updates should more effectively employ the design system and update it as needed.

We have wrapped up QA for this re-design on staging, and we are preparing for UAT.

3. **Research questions: What question(s) do you hope to be able to answer after completing this research?** 

My VA has many details in each section that we need to test, so I have broken out the research questions into specific sections.

**General**

- Is My VA loading all sections when it should be? (LOA3)
- Is My VA NOT showing when it's NOT supposed to be? (Can't match records)
- Can a user get to My VA from the VA.gov homepage? (from main nav link and through user dropdown link)

**Disability rating/Nametag**

- Is My VA loading properly with the users name, military badge (if applicable) and disability rating (if applicable)?
- If a user has a disability rating is it showing the correct information?
- If a user has a disability rating is it linking to the correct place?
- If we can't connect to a users disability rating information, is it displaying the correct alternative link?

**Claims and appeals**

- If a user is LOA3 and has active claims, is the claims and appeals section displayed?
- If a user is LOA3 and has NO active claims, is the claims and appeals section NOT displayed?
- If the claims section is loading, is the correct spinner/content displayed?
- If the claims section loads for too long, is the correct messaging displayed?
- Is the correct/most recent claim being displayed in the grey box?
- Does the link in the grey box link to the correct claim?
- Is the link to the claims tool working properly?
- If a user does not have any claims updates in the past 30 days, is the correct messaging displayed?
- If there is an error connecting to the claims database does the correct message display?

**Health care**

- If a user is enrolled in health care, is the health care section displayed?
- If a user is NOT enrolled in health care, is the health care section hidden?
- Is My VA linking to the correct MHV account?
- If a user has upcoming appointments in the next 30 days, is the next appointment displaying correctly in the grey box?
- Is the link to manage all appointments linking to the appointments tool?
- If a user does not have upcoming appointments in the next 30 days, is the correct messaging displayed?
- If a user does not have any upcoming appointments is the correct link displayed?
- If a user has unread messages, is the correct number of unread messages displaying?
- If a user does not have unread messages is the correct link being displayed?
- Does the messages link go to the messaging tool?
- Do the prescriptions, medical records, and test results links display correctly and work properly?
- If there is an error connecting to a users health care, does the correct messaging show?
- If there ais an error connecting to appointment information, does the correct messaging show? 

**Apply for VA benefits**

- Is Apply for VA benefits showing in My VA? (it should always show)
- Is the 'What benefits does VA offer?' faq dropdown working properly?
- Are the links for each benefit in the faq dropdown working properly?
- If a user has applications in progress, are the applications showing correctly?
- Does the link to continue an application take the user to the correct application?
- If a user does NOT have applications in progress, is the correct messaging displayed?
- Is the health care benefits blurb showing appropriately? (Should show if a user does NOT have health care or was denied, should not show if a user is enrolled in healthcare)
- If a user is not enrolled in health care, does the link to 'Learn how to apply for VA health care' work correctly?
- Is the disability compensation blurb showing appropriately?
- Does the link to 'Learn how to file a VA disability claim' work correctly?
- Is the education benefits blurb showing appropriately (Should show if a user is not currently recieiving payments for education benefits)
- Does the link to 'Learn how to apply for education benefits' work correctly?

4. **Hypothesis: What is your hypothesis for this research?** 

- My VA will work as expected, but we will discover some bugs that we did not previously know about.

## Method
1.	**What method of research are you planning?**
  
  - Moderated UAT.
  
2.	**Why this method? How does this methodology help you answer your research questions?** 

- We need to test that the new My VA page is working properly on production before launching it to everyone.

3.	**Where are you planning to do your research?**

- Zoom.

4.	**What will you be testing?**

- We will be testing the new My VA functionality on production (beta).

## Participants and Recruitment

1.	**Participant criteria: What are you looking for in a participant?**

We would like **10** total participants.

- We will need **5** participants who are eligible/currently recieve health care from the VA. Please confirm this prior to sessions.

- We will need **5** participants who have active claims or appeals. Please confirm this prior to sessions. 

- At least **3** participants must currently have a disability rating. (This may or may not overlap with users who have claims/appeals and/or health care) Please confirm this prior to sessions.

- All participants must be LOA3 (identity verified) on VA.gov. **Participants will likely not know what this means**, so please confirm this prior to testing. This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. If they can see the profile, they are LOA3 and can participate in testing.

- Be able to screenshare via Zoom. Please confirm with them that they have Zoom downloaded prior to the session and they know how to screenshare. If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.

2.	**What is your recruitment strategy?**

We will work with Perigean to recruit for this study.

## When? 

1.	**Timeline: What dates do you plan to do research?**

We are looking to start sessions **June 22, 2021**.

2.	**Prepare: When will the thing you are testing be ready?**

 **It is currently ready - it will be behind a feature flag that we will turn on for users.**

3. **Length of Sessions: How long do you estimate each session will be?**

We expect sessions to only be 15-30 minutes. **Please schedule sessions for 30 minutes with a 30 minute buffer between sessions**.

4.	**Availability: If applicable, when would you like sessions scheduled?**

FYI — **Tressa Furner (tressa.furner@adhocteam.us) will be conducting these sessions**. Her availability is as follows:

- **10-6 pm ET June 22, 23**
- **12-6 pm ET June 24**
- **10-6 pm ET June 25, 28, 29**

5.	**Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

- **TBD, this will likely happen the morning of June 22, will update tomorrow. **

## Team Roles
**Please list the people who will be serving in each role.**

- **Moderator**: Tressa Furner (tressa.furner@adhocteam.us)
- **Research guide writing and task development**: Tressa Furner
- **Participant recruiting & screening**: Perigean
- **Project point of contact**: Tressa Furner or Ana Jakabcin
- **Participant(s) for pilot test**: TBD
- **Note-takers**: TBD
- **Observers**: 
- Tressa Furner (tressa.furner@adhocteam.us)
- Samara Strauss (samara.strauss@va.gov)
- Erik Hansen (erik@adhocteam.us)
- Taylor Mitchell (will add email tomorrow)
- Ana Jakabcin (ana@adhocteam.us)

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

- Tressa Furner (tressa.furner@adhocteam.us)
- Samara Strauss (samara.strauss@va.gov)
- Erik Hansen (erik@adhocteam.us)
- Taylor Mitchell (will add email tomorrow)
- Ana Jakabcin (ana@adhocteam.us)

## Resources
- [Project Brief](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/identity-personalization/my-va/2.0-redesign/README.md)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/uat/MyVA-uat-conversation-guide.md)
- [Notes]()
- [Findings]()
