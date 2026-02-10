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

# Research Plan for Authenticated Experience/Personalization: Candidate Address - Override

## Goals
1.  **What product & team are you doing this research for?**

Address Override.  Authenticated Experience/Personalization.

2.  **Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?**

Vet360 is providing Address Validation.  There are several situations where the Veteran will need to make choices in order to properly select a more accurate address option or to override provided options.

This is sometimes due to the situations where Pitney Bowes Spectrum address database has not yet caught up to the cartographical realities of the US housing market,  and the Veteran should be able to confirm that "yes, this is actually a real address."

This Address Override feature requires UX in various places to allow the Veteran to complete their address edit workflow easily and accurately.
  1. Veteran enters accurate address.  If the entered address matches the database address with the highest Confidence Score, the updated address displays on the UI.
  2.  Veteran enters inaccurate address.  The UI will display the entered address and up to 3 address suggestions and allow the Veteran to edit the entered address or the Veteran is required to select 1 address to continue to complete the update.
  3.  Veteran enters inaccurate address that the database cannot identify.  The UI will display the entered address with no address suggestions and allow the user to edit the address or continue with the address override.
  
  We have clickable prototypes that map out each of the mentioned UX scenarios and we need user testing to answer several questions regarding the usability of the workflow and UI.

3.  **Research questions: What question(s) do you hope to be able to answer after completing this research?** 

- Is the messaging clear to the Veteran about their entered address if the system does not recognize it?
- Is it clear to the Veteran on how to proceed by selecting their entered address or an address suggestion?
- Is it clear to the Veteran what to do when the system has no address suggestions to display?
- Is it clear to the Veteran on how to edit their entered address?
- Is it clear to the Veteran that they can go back to the address suggestion screen before they confirm the address update?
- Does it cause the Veteran any confusion if the 'Continue/Update/Cancel' buttons on the mobile form?
- Is it clear to the Veteran that the address has been updated or cannot be updated?

4.  **Hypothesis: What is your hypothesis for this research?**

- Veterans will understand how to edit their mailing address from their profile
- Veterans will understand why we display the alert if the system does not recognize their entered address
- Veterans will find it easier to make a choice if we select the best address suggestion option by default
- Veterans will be able to complete the process and feel confident their address has been updated


## Method
1.	**What method of research are you planning?** 
  
Usability testing with high fidelity prototypes. 
  
2.	**Why this method? How does this methodology help you answer your research questions?**

This usability testing will help us understand if there are any pain points or confusing elements to the 'update mailing address' workflow and how we can better optimize the UX.

3.	**Where are you planning to do your research?**

This research will be done remotely, using GoTo Meeting.

4.	**What will you be testing?** *(Design mocks, card sort, prototype, page, content, etc.)* 

InVision Prototype

5.  **If remote: What tool do you plan to use**

GoTo Meeting

## Participants and Recruitment
1.	**Participant criteria: What are you looking for in a participant?**

We need **3 participants** that meet the following criteria:

- People who have previously used VA.gov
- People who receive at least one benefit from the VA
- People who are able to download and use the GoToMeeting app. This user testing will have a screensharing component and we can not work with participants who are not able to use GTM.

We would also like at least one participant that is:
- A woman
- A person of color
- 35 or under
- 55 or older

2.	**What is your recruitment strategy?** 

We will work with Perigean to recruit for this research study.

## When? 

1.	**Timeline: What dates do you plan to do research?** 

We would like to conduct research between **Wednesday, November 13 and Friday, November 15.**

2.	**Prepare: When will the thing you are testing be ready?**

Prototype and conversation guide will be ready by **Tuesday, November 5**.

3. **Length of Sessions: How long do you estimate each session will be?** 

Please schedule sessions for **60 minutes** with a 30 minute buffer in between.

4.	**Availability: If applicable, when would you like sessions scheduled?** **Please list exact dates and times in EASTERN Standard Time**. 

- Wednesday, November 13: 8:30 AM ET – 5:30 PM ET (last session starting no later than 4:30)
- Thursday, November 14: 9:00 AM ET – 11:45 AM; 2:00 PM – 5:30 PM ET (last session starting no later than 4:30)
- Friday, November 15: 8:30 ET – 5:00 ET (last session starting no later than 4:00)

5.	**Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with?**

I can run a pilot Tuesday, 11/12.

## Team Roles

Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 
- Moderator: Samara Strauss
- Research guide writing and task development (usually but not always same as moderator): Samara Strauss
- Participant recruiting & screening: Perigean
- Project point of contact: Samara Strauss
- Participant(s) for pilot test: N/A
- Note-takers: Perigean
- Observers: Justin Pickett (jpickett@governmentcio.com ), Erik Hansen (erik@adhocteam.us), Arthur Green (agreen@governmentcio.com), Lisa Koenigsberg (Lisa.Koenigsberg@va.gov), Brad Conley (bconley@governmentcio.com), Dan Hinze (dan.hinze@adhocteam.us)

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

## Resources
- Project Brief
- Discussion Guide
- Notes
- Synthesis

## Approved
- Yes this is approved by Lauren Alexanderson Oct. 17, 2019 . [Associated Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2326)
