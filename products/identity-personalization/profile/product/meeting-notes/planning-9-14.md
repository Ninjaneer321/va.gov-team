---
# Research Plan Metadata
title: "Research Plan for identity-personalization, identity-personalization, 2026-03-23"
date: 2026-03-23
last_updated: 2026-03-23
team: "identity-personalization"
product: "identity-personalization"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Planning meeting notes for Profile product development"
  product_location: "VA.gov Profile"
  user_familiarity: "TBD - New product or iteration?"
  product_brief_url: "TBD - Add product brief URL if available"

# Research Design
methodology: "Planning meeting"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "TBD - Extract from research plan"
  - goal_2: "TBD - Extract from research plan"

research_questions:
  - "TBD - Extract from research plan"

hypotheses:
  - "TBD - Extract from research plan if available"

expected_outcomes: "TBD - How will findings advance the product?"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "TBD"
  
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  research_dates: "TBD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "TBD"

veteran_journey_phases:
  - "TBD"
    
# Research Repository Tracking
tags:
  - profile
  - planning
  - meeting-notes
  - identity-personalization
---

## Profile Grooming Notes 9/14/2022:

- Does anyone want to look at the current sprint board? Any concerns about the workload or commitments? No.
- BAI completed and Accessibility tickets are the highest priority for upcoming sprint
- New FE developer will be joining the team (GCIO hire)

### Tickets Review
**Christina:**
Ready to conduct UAT on BAI
Documentation for connected apps

**Adam:**
Update contact info screen - BAI. Should be wrapped up today
Documentation
Accessibility
Alert
Flipping feature flags (super easy effort)

**Tom:**
- #47040 - Notification Settings documentation may be done, just needs to be reviewed by Sharon.
- #46338 - Military Address Bug is caused by data coersion in VA Profile.  Tom has spoken with with Ian McEwan (from VA Profile team) about this. Not sure if there’s anything for us to do; this is probably work for VA Profile.  Need to discuss further with VA Profile team.  

**Liz:**
No tickets

### Accessibility Discussion:

*Overview:* The conversation around this work has been ongoing for a year or so. This is not just for Profile but across va.gov. The idea is to edit one thing per page. 

*Goal:* Reduce cognitive load, help low vision users, makes error handling simpler. 

*Notes:* Not 100% sure it's appropriate for Profile in all cases. Profile is already very simple so it could be a good use case to test this process. Address validation could probably benefit from this exercise. We could do a study where we recruit people with cognitive disabilities, lower levels of education, or people on mobile to see what kind of editing problems they have on Profile.
Do we have analytics that can help us see how often people are running into issues editing things on Profile?
Example from the VAOS team - https://design.va.gov/patterns/help-users-to/complete-a-sub-task 
Have we heard any feedback from users on accessibility? No, most issues found were from our own teams. However, we’ve never taken users through complex flows.
Research to validate if we have any problems that need to be addressed
- Next steps - Liz to do some research planning

### Accessibility Audit:
Defect 4 - would be a large effort on the engineering side but it comes up often in accessibility audits. This would also require some design effort as well. Sharon and Samara to touch base offline to discuss priorities. Samara is good with us prioritizing this over other work if needed.
