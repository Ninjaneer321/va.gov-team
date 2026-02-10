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

# Research Plan for eBenefits Migration Team, View Accredited Representative, December 2021

`DRAFT PLAN`

## Background

When a Veteran, Service Member, or one of their dependents needs help filing a claim, they can choose to appoint a Veteran Service Organization (VSO), attorney, or claims agent to act on their behalf. There are three basic functions a user needs to be able to complete: searching for an accredited representative, appointing a representative through filing a VA Form 21-22 (to appoint an organization) or VA Form 21-22a (to appoint an individual attorney or claims agent), and viewing their current representative.

Currently, searching is done through the [Office of General Counsel](https://www.va.gov/ogc/apps/accreditation/index.asp). Veterans can then submit their VA Form 21-22 through eBenefits or through a VSO, or their VA Form 21-22a through their selected Attorney or Claims Agent. Once the form has been signed by both parties and accepted by VA, the appointed representative has (limited) access to the Veteran's benefits and appeals records, and the Veteran can view their representation in eBenefits.

The View Representative "tool" is primarily informational. The Veteran can see who the VA has as their current representative, along with location and contact info for that representative. The purpose of this project is to streamline access to accredited representative information and migrate features from eBenefits to va.gov. The first piece of the functionality ready to move is the “View Accredited Representative” tool, which will allow a user authenticated on va.gov to view their current accredited representative through a standard design view tool.

While this research plan is written for the View Accredited Representative functionality, we propose testing these features together when the Search and Appoint functions are ready for testing.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-POA/README.md).


### OCTO Objectives

The View Accredited Representative tool will support the following objectives:

5. Veterans and their families can find a single, authoritative source of information

6. Logged-in users have a personalized experience, with relevant and time-saving features

7. Veterans and their families trust the security accuracy and relevancy of VA.gov



When the Search and Appoint components are added, they will also support:

1. Veterans and their families can apply for all benefits online

3. Logged-in users can easily track applications, claims, or appeals online

4. Logged-in users can update their personal information easily and instantly



### Veteran Journey

Veterans are likely to be impacted through the “getting out”, “starting up”, “taking care of myself”, and “aging” parts of their journey. This tool will matter most when Veterans need help applying for VA benefits, or when they need to appeal VA decisions.



## Research Goals

If we test the view component independent of the search and appoint components, the primary research goal will be to ensure users can view their appointed representative. We'll want to know if users are satisfied with the info presented--is it sufficient? Do they understand any next step in contacting or changing their representative.

If these features are tested together, we also seek to understand:
- How users search for accredited representatives
- How users proceed through the appoint task

### Outcome

This research will allow us to understand where there are problems in the search and appoint forms and allows us the opportunity to refine steps and content.

### Research questions
- Where do users expect to find their current representative?
- Can users quickly and easily identify their representative?
- How would users reach out to their representative? Is there sufficient information to do that?
- How do users expect to change their current representative?
- Do users understand the search options?
- Can users refine their search if they don’t find the representative they are looking for?
- Do users expect to talk with a representative before appointing them?
- Do users understand how to select a representative?
- How do users expect to submit their completed form?

### Hypothesis
- Users will initially look for information about accredited representatives in the white quadrants
- Users will expect to find their current representative in their profile.
- Users  will find the presentation satifactory, but may want additional contact info.
- Users will be able to find a link to eBenefits to update their representative but may not understand the process to do so. (For View functionality only)

After search and appoint functionality is added:
- Users will be able to link to search and appoint tool to search for new representatives.
- Users will be able to proceed through the search form but may not understand the type of representative option.

## Method
Research will be conducted through moderated, remote usability sessions.

### Location
Sessions will be conducted remotely through Zoom.

### Research materials
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-POA/research-design/usability-testing/view-rep-convo-guide.md)
- [Link to prototype](https://xd.adobe.com/view/e27b7e71-d920-4bcd-9e81-dc62a9665d5e-b728/)

## Recruitment

### Recruitment approach
Veterans will be recruited through Perigean, requesting participants that fulfill OCTO’s maximum variation strategy.

### Recruitment criteria
If we test the view functionality independently, we request 8 participants for 5 fulfilled sessions.

If we test the combined functionality, we request 12 participants for 9 fulfilled sessions.

**Primary criteria (must-haves)**
Participants must:
- Be Veterans or transitioning service members

**Secondary criteria (nice-to-haves)**
To maximize variation in our sampling, we would like to have:
- 3 users age 55-64+
- 3 users with a cognitive disability
- 2 users on mobile devices
- 2 users using assistive technology
- 1 mobile user
- 1 user with no degree
- 1 Black user
- 1 Hispanic user
- 1 LGBTQ+ user

## Timeline
TBD

### Prepare
TBD

Please indicate the date and name of a mock participant for a pilot session.

* Pilot participant email: TBD
* Date and time of pilot session: TBD


### Research sessions
TBD

### Length of sessions
If we test the view functionality independently, each session should be <30 minutes.

If we test the combined functionality, each session should be approximately 1 hour.


### Availability
TBD

## Team Roles
- Moderator: Candy Clark -- 614-507-4270 -- candy.clark@gcio.com
- Research guide writing and task development (usually but not always same as moderator): Candy Clark -- candy.clark@gcio.com
- Participant recruiting & screening: Perigean
- Project point of contact: Jason Wolf | jason.wolf@gcio.com
- Participant(s) for pilot test: TBD
- Note-takers: We request that Perigean provide a notetaker.
- Observers:
    - James Adams | james.adams@gcio.com -- eBenefits Researcher/Designer, UX manager
    - Jason Wolf | jason.wolf@gcio.com -- eBenefits product manager
    - Kathleen Crawford | kathleen.crawford@gcio.com -- Backend engineer
    - Kevin Musiorski | kevin.musiorski@gcio.com -- Backend engineer
    - Jerek Shoemaker | jerek.shoemaker@adhocteam.us -- Frontend engineer
    - Jesse Cohn | jesse.cohn@adhocteam.us -- Frontend engineer
    - Sabrina Mohamed | sabrina.mohamed@va.gov -- Product Co-Owner
    - Matt Self | matt.self2@va.gov -- Product Co-Owner
