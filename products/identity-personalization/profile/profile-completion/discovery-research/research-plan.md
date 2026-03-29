---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience, Profile Completion, Summer 2024"
date: 2024-06-01
last_updated: 2024-06-30
team: "Authenticated Experience - Profile"
product: "Profile Completion"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Profile completion is an opportunity to increase engagement with VA.gov and improve VA's communication with Veterans. Veterans need to complete contact information to enable better communication."
  product_location: "VA.gov Profile (authenticated area)"
  user_familiarity: "New feature - MVP focused on completing contact information"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-completion"

# Research Design
methodology: "Collaborative research with IIR team - feedback session"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Better understand what Veterans think about providing contact information to VA"
  - goal_2: "Learn how MVP design impacts the Veterans experience of managing contact information"

research_questions:
  - "Is anything confusing about the workflow we're proposing?"
  - "What is the Veteran mental model around sharing contact information with VA?"
  - "Are the benefits of providing information clear to people?"
  - "Are our entry points and calls to action effective (particularly from the profile)?"
  - "How do Veterans react to a guided flow that gives them specific step numbers?"
  - "What do Veterans expect from 'remind me later' and 'finish this later' functionality?"
  - "Is it clear to Veterans that each piece of contact information is optional?"

hypotheses:
  - "Veterans will understand the guided workflow for profile completion"
  - "Veterans will appreciate having clear steps to complete their contact information"
  - "There may be concerns about providing contact information that we need to address through clear benefit statements"

expected_outcomes: "We'll use this outcomes from this research to inform design and content iterations on our profile completion flow."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Collaborated with IIR team recruitment"
  approach: "Piggyback on IIR team's planned study"
  
  primary_criteria:
    - "Must be Veterans"
    - "Recruited by IIR team for their study"
    
  secondary_criteria:
    - "N/A - using IIR team recruitment"
    
  screener_questions:
    - question: "N/A - coordinated with IIR team"
      qualifying_response: "N/A"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2024-06-15 to 2024-06-30"
  research_review_submission: "2024-06-01"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Enhance Veterans' personalized online experience"
    key_results: 
      - "Increase profile completion and engagement"
      - "Improve VA communication with Veterans through complete contact information"
      
veteran_journey_phases:
  - "Starting Up"
  - "Living Civilian Life"
  - "Taking Care of Myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/research%20plan%202024.md"
    
tags:
  - profile
  - profile-completion
  - discovery
  - authenticated-experience
  - personalization
  - onboarding
  - authenticated
  - research-plan
  - "profile"
  - "profile-completion"
  - "discovery"
  - "usability-testing"
  - "authenticated-experience"
---

# Research notes for Authenticated Experience, Profile Completion, Summer 2024

## Background
The Innovate, Iterate, and Run (IIR) team has initiated work to improve the Veteran experience of getting started with VA.gov. As a branch of that work, the profile team determined profile completion is an opportunity to increase engagement with VA.gov and improve VA’s communication with Veterans. 

With this research, we want to get reactions and feedback to our initial MVP concept, which is focused on completing contact information. 

We’ll collaborate with the IIR team and join on their planned study to get this feedback at the end of the sessions they’re conducting.  If they lead the research, they could include aspects of this document, and our conversation guide suggestions to submit for research, rather than having 2 separate research plans and conversation guides.

Relevant documentation:
- [Profile completion project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-completion)
- [IIR research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/research%20plan%202024.md)
- [Conversation guide suggestions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/profile-completion/discovery-research/conversation-guide.md)

## Research Goals	
1. We want to better understand what Veterans think about providing contact information to VA.
2. We want to learn how our MVP design impacts the Veterans experience of managing their contact information with VA.
### Outcome
We’ll use this outcomes from this research to inform design and content iterations on our profile completion flow
## Research questions
1. Is anything confusing about the workflow we’re proposing, especially considering there are other editable parts of the profile we’re not highlighting for them to complete?
   - Do people comment on other parts of the profile? 	
2. What is the Veteran mental model around sharing contact information with VA?
   - Is there any resistance or hesitation to providing contact information? If so, what is contributing to this?
   - Are the benefits of providing information clear to people?
3. Are our entry points and calls to action effective (particularly from the profile)? 
   - How do they fit in with the IIR team’s CTA?
   - Note: need to understand IIR teams tasks and how the person will look at their prototype
4. How do Veterans react to a guided flow that gives them specific step numbers?
5. What do Veterans expect from  “remind me later” and “finish this later” functionality?
6. Is it clear to Veterans that each piece of contact information is optional?
   - Specifically, how do they react to that checkbox that says “I don’t want to provide this” (or “skip” whatever we call it)
7. What concerns, if any, do Veterans have about being able to dismiss this workflow?

## Prototype

The whole prototype lives in a Profile Completeness collection in the VA.gov applications codepen team account.  I don’t know how to link to a collection but anyone with access to this team should easily be able to find it.

The flow can start from the [profile hub](https://cdpn.io/pen/debug/OJYxMLK) or [the contact information page](https://cdpn.io/pen/debug/BaewjZo) 

### Notes
- I purposely didn’t include a header or footer since that’s not part of what we’re testing.  If we want to add that, should be pretty easy to add an import from another pen across these files.
- We don’t know exactly what the “remind me later”  or “skip this” functionality should be, and hope that research participants can share expectations to inform how that should work.
- Any link that points to a page we don’t care about getting feedback on goes to a “thank you. Please wait” page. The moderator can instruct the participant to use their back button to go to the last page and prod to figure out what they were trying to do.
### Known issues:
- Icons aren’t working for some reason.  Specifically, noticed the following are not displaying:
  - Close icon in the alerts
  - Checkmark in the checkbox component
  - Caret for the additional info component (on contact information pages and first page of the flow)
- I see a weird flash when you click the link in the alert on the contact information page to start the flow
- The “go back” and “continue” buttons in the flow are actually `<a>` elements. This is not accessible but I don’t know how to write javascript to make the buttons go to the correct codepen links. Up to the team how they want to proceed
## Next steps
The IIR team will coordinate with the profile team to incorporate this into the study.
