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

Research Plan for Wizard Migration, VSA, November 2020
======================================================

Goals
-----

1.  What product & team are you doing this research for?
    This research is to test proposed changes to the wizard flow, which impacts both BAM teams, BAH team, and Public Websites.

2.  Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?
    We've been using the wizard pattern on Drupal content pages that guide users to forms to try to verify eligibility before they apply for a benefit. However, users who go directly to form pages via a direct URL, or a link on VA.gov, bypass the wizard and don't get this eligibility check. Some wizards, such as the 526, collect data that is then passed into the user's application.
    We're moving the wizards from Drupal content pages to the form intro pages to minimize the chance of people bypassing the wizard.

3.  Research questions: What question(s) do you hope to be able to answer after completing this research?

-   Are people still able to understand the wizard outcome in the new, simplified, icon-free design?

-   How easily do people understand where they're being routed to?

-   Are people able to find the skip link?

-   When would people want to use the skip link?

-   How easily do people understand how to start over?

-   In the education flow, do people get confused by being started on the 1990 form page from the How to apply page? 

-   How about when they're routed to a different form  from the 1990?

-   Can users get back to the wizard once they've navigated away from a form page?

-   When do users want to go back to the wizard?

-   Do people understand the wizard questions?

-   Are any of the questions confusing or unclear?

-   Are people confident they are applying for the right benefit after they take the wizard?

5.  Hypothesis: What is your hypothesis for this research?

-   People will understand the wizard outcomes, and where they're being routed to.

-   The skip and start over links will be missed by some people, but those who are interested in those  actions will easily be able to find them.

-   People will be able to complete the wizard flows on desktop and mobile with the same level of ease.

-   People will think the intro/step-list page is overwhelming.

-   People will feel more confident about completing the online benefit application because the wizard indicates they may be eligible.

-   People will find value in the wizard.

Method
------

1.  What method of research are you planning?
    Remote, moderated usability testing on an interactive prototype (made in UX Pin).

2.  Why this method? How does this methodology help you answer your research questions?
    Allowing users to interact w/ the wizards and flows will help us see first hand any usability issues they encounter with our proposed changes.

3.  Where are you planning to do your research?
    Online with Zoom

4.  What will you be testing? (Design mocks, card sort, prototype, page, content, etc.)
    UX Pin or InVision prototype

5.  If remote: What tool do you plan to use (Zoom, GoToMeeting, Webex)
    Zoom

Participants and Recruitment
----------------------------

1.  Participant criteria: What are you looking for in a participant?

-   We'd like to speak to 6-8 Veterans who have experience with education benefits, or are planning on applying for education benefits in the next 3 months.

-   We'd like for 3-4 participants to complete the session on a smartphone, and 3-4 participants to complete the session on a desktop device.

-   Please recruit 12-16 Veterans to account for no-shows; we'll cancel remaining participants once we hit our quota.

3.  Primary criteria / Must have

-   Veterans who have applied for education benefits in the last 12 months, or are planning on applying for education benefits within the next 3 months.

-   50% participants must be able to participate on a desktop/laptop

-   50% participants must be able to participant on a smartphone (iPhone, Galaxy, etc)

-   At least two participants with a disability rating of 70% or greater and identified cognitive impairments and/or functional disabilities. Examples of diagnoses that may align with this would be Traumatic Brain Injury (TBI), Post-Traumatic Stress Disorder (PTSD).

-   At least 2 participants without a college degree

-   For this session, we are unable to include:

    -   Those who use assistive technology, such as screen readers (JAWS, NVDA, VoiceOver, and ChromeVox).

    -   People with significant vision loss.

    -   People who use magnification tools.

5.  Secondary criteria / Would like to have

- 50% women, 50% men
- 50% people who identify as an ethnicity/race other Caucasian
- At least 1 participant 35 or under and 1 participant over 55
- What is your recruitment strategy?
  We'd like to have Perigean recruit our participants for this study.

When?
-----

1.  Timeline: What dates do you plan to do research? November 2-5, 2020

2.  Prepare: When will the thing you are testing be ready?
    October 29

3.  Length of Sessions: How long do you estimate each session will be?
    Sessions will be ~30 minutes; please schedule 45 minutes and allow 15 minutes between each session

4.  Availability:
    Please include both Liz and Christian on all emails; we'll be splitting up facilitation duties

-   November 2: 9am - 6pm EST

-   November 3: 9am-10am, 11:00am - 6pm EST

-   November 4: 1pm-6pm

-   November 5: 9am-10am, 1pm  - 6pm EST

1.  Pilot: Please indicate a date before your sessions begin for piloting your research.
    October 29 from 3:30 -- 4:15pm if available on Perigean Zoom account

Team Roles
----------

Please list the people who will be serving in each role.

-   Moderator: Liz Lantz (843-898-4463, liz.lantz@adhocteam.us) and Christian Valla (626-491-4488, cvalla@governmentcio.com)

-   Research guide writing and task development (usually but not always same as moderator): Liz Lantz and Christian Valla

-   Participant recruiting & screening: Perigean

-   Project point of contact: Liz Lantz

-   Participant(s) for pilot test: Robin Garrison, robin.garrison@adhocteam.us

-   Note-takers: TBD - Christian to recruit

-   Observers: Will provide list of emails via Slack to protect privacy.

Resources
---------

-   [Product epic](https://app.zenhub.com/workspaces/vsa-5dcabe208aade000013aafba/issues/department-of-veterans-affairs/va.gov-team/9665)

-   [Convo Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/how-to-apply-wizards/discovery/research/wizard-migration-convo-guide.md)

-   Synthesis - to come

-   Lessons Learned - to come

-   Read-Out/Results - to come
