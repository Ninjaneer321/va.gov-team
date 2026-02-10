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

# Research plan for "Find help on Contact us" study
**Jump to:**
- [Background](#background)
- [Research goals](#research-goals)
- [Methodology](#methodology)
- [Recruitment](#recruitment)
- [Timeline](#timeline)
- [Research sessions](#research-sessions)
- [Team roles](#team-roles)
- [Approved by](#approved-by)
- [Appendix](#appendix)
  
## Background 
The Contact us page ([va.gov/contact-us](va.gov/contact-us)) helps people get answers to questions about VA benefits and services by connecting people to the following types of customer support channels: self-service, live agent, and asynchronous agent.

We stood up the Contact us page quickly in 2020 and have made ad-hoc updates since then. It consistently gets the lowest customer satisfaction scores compared to other pages on VA.gov. As of 2024, its CSAT score is around 20%. VA.gov's overall CSAT score is around 60%. 

- View these scores in the [VA.gov CSAT Score Dashboard](https://va-gov.domo.com/page/1545882322).
- [View the product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/veteran%20support%20crew/Contact%20us%20page/Product/Product%20outline.md) for ‘Contact us’. 

### OCTO Priorities 
 This research supports the following OCTO FY24 priority:
* Better experiences: Our digital experiences are the best way to access VA health care and benefits.
  
### Veteran Journey
The Contact us page can support Veterans at any stage of the Veteran journey because it connects Veterans to VA support channels. For example, Veterans at any stage could call the MyVA411 main information line for information about login issues.

Some support channels may matter more to Veterans depending on where they’re at too. For example, a Veteran at the **Starting up** stage might want to call the GI Bill hotline for questions about their education benefits.

## Research Goals	
Our research goals are to:  
-	Understand whether people can find the right support (answers or channels) to resolve their issues
-	Understand how people choose phone numbers
-	Understand what people expect on the Contact us page
  
### Outcome
We already know there are different ways other websites and mobile apps have approached effective support experiences. We’ll use this research to inform how we’ll update the Contact us page.

### Research questions    
Understand whether people can find support (answers or contact information) to resolve their issues:
-	Can people find the answers they need online before deciding to contact VA directly? 
-	How do people navigate within the page to find answers?
-	Do the headings help people find answers? 
-	Do the headings help people find contact information?
-	Do people know which links to select? Do they seem confused? 
-	Can people get their issues resolved on the pages they’re directed to from ‘Contact us’?
-	Which support channels do people prefer? Why? 
-	How does the order of contact channels on the page affect people’s experience?
  
Understand how people choose phone numbers:
-	How do people find phone numbers on Contact us?
-	How do people decide which phone number they need?
-	What phone number details are useful to decide which phone number they need? Which details don’t help people find phone numbers?
  
Understand what people expect on the Contact us page:
-	Why do people use the Contact us page? 
-	What information are they looking for?
-	What tasks are they hoping they can do on the page?
  
### Hypotheses
1.	Most of the time, people will be able to find general answers to questions online.
2.	It will be more difficult for people to find personalized answers online.
3.	People will primarily use the headings to navigate to each section to find answers or contact information.
4.	People will prefer different contact channels in different contexts. For example, if people aren't confident they know which phone number to call, then people will prefer online tools for support. If people feel confident that a phone agent will be able to answer their question, then people will prefer phone calls for support.
5.	People will choose more direct phone numbers rather than general lines to avoid being transferred.
6.	People won’t be highly confident they’re choosing the right phone number with current phone number details.  
7.	People primarily use Contact us to look for ways to contact VA (like phone numbers).
8.	People don’t expect to find answers to questions from Contact us.
   
## Methodology	
This a remote moderated usability study over Zoom for the current Contact us page in VA.gov's production environment at va.gov/contact-us. 

We’ll ask users to consider how they would use Contact us to find answers or customer support in two scenarios in which they have questions about: 
-	Creating a Login.gov account
-	Increasing disability compensation for an existing condition
  
### Research materials
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/veteran%20support%20crew/Contact%20us%20page/User%20research/09-2024%20Find%20help%20on%20Contact%20us/Conversation%20guide.md)
- [Link to Contact us page in VA.gov production](https://www.va.gov/contact-us/)
  
## Recruitment	
### Recruitment approach
We will work with Perigean to recruit 12 Veterans, targeting a total of 10 completed sessions. 

### Recruitment criteria
For more details about our criteria, refer to our [Recruitment ticket](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/662).

|# of participants|Criteria|
|:--|:--|
|Exactly 12|Are Veterans|
|Exactly 6| Have looked for answers on VA.gov in the past year |
|Exactly 6| Have looked for contact information on VA.gov in the past year |
|Exactly 6|Are willing to join from a mobile device|
|Exactly 6|Are willing to join from a desktop device|
|At least 6|Are over 55 years old|
|At least 6|Have a cognitive disability or consideration|
|At least 3|Are rural|
|At least 3|Don't have a degree|
|At least 2|Identify as Black|
|At least 1|Identify as Hispanic|
|At least 1| Identify as Biracial|
|At least 1|Identify as Asian|
|At least 1|Identify as Native|
|At least 1|Identify as a gender other than male|
|At least 1|Identify as LGBTQ+|

## Timeline
|Date|Milestone|
|:--|:--|
|Friday, August 30|✅ Research review submitted|
|~~Wednesday, September 4~~Friday, August 30|✅ Research review approved|
|Thursday, September 5| ✅ Pilot session|
|Monday, September 9 - Thursday, September 19| ✅ Research sessions|
|Monday, September 23 - ~~Tuesday, September 24~~ Thursday, September 26| ✅ Analysis|
|~~Wednesday, September 25 - Friday, September 27~~ Friday, September 27 - Tuesday, October 1 |✅ Synthesis|
|~~Monday, September 30~~ Wednesday, October 2|✅ Discuss recommendations|
|~~Wednesday, October 2~~ Tuesday, October 22|✅Share findings and recommendations|

## Pilot session
Perigean does **not** need to set up our pilot session. Becky will schedule and add participants herself.
- Pilot participant: Gene Dreyband, yevgeny.dreyband@va.gov from VA
- Date and time of pilot session: September 5 at 12pm EST
  
## Research sessions
- Planned dates of research: Monday, September 9 - Thursday, September 19
- Length of sessions: 1 hour
- Buffer between sessions: 30 minutes
- Maximum sessions per day: 3 sessions
  
### Availability
We will provide 24 time slots, with the aim to book 12 sessions. 
**We’d also like to request that Perigean calls each participant to remind them about the session, in addition to emailing them. Please include the session time in each participant's respective time zone (from their address).**
|Date|Timeslots (EST)|
|:--|:--|
|Monday, September 9|11:30am-12:30pm, 2:30-3:30pm, 5:30-6:30pm|
|Tuesday, September 10|11:30am-12:30pm, 2:30-3:30pm, 4-5pm|
|Wednesday, September 11|1-2pm|
|Thursday, September 12|1-2pm, 4-5pm, 5:30-6:30pm|
|Friday, September 13|11:30am-12:30pm, 1-2pm|
|Monday, September 16|11:30am-12:30pm, 2:30-3:30pm, 5:30-6:30pm |
|Tuesday, September 17|11:30am-12:30pm, 5-6pm |
|Wednesday, September 18|11:30am-12:30pm, 1-2pm, 2:30-3:30pm, 4-5pm, 5:30-6:30pm|
|Thursday, September 19|4-5pm, 5:30-6:30pm|

 ## Team Roles		
- Moderator: Becky Phung (becky.phung@va.gov)
- Research guide writing and task development: Becky Phung
- Participant recruiting & screening: Perigean
- Project point of contact: Becky Phung	
- Participant(s) for pilot test: Gene Dreyband
- Accessibility specialist (for sessions where support for assistive technology may be needed): We won't have a specialist for this study.
- Note-takers: We will need Perigean to take notes for all sessions.
- Observers: Becky will add observers to the invites herself.
  
We will limit sessions to no more than 5 people, including 1 participant, 1 moderator, 1 notetaker, 2 observers.

## Approved by:
- Shane Strassberg, VA Research Ops on August 30, 2024
