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

# Draft: Research Plan for Search & Discovery Team, Resources and Support, Submit Feedback Tool 2.0
Jan 2022

## Background
Resources and support (R&S) contains tier 2 content (benefit-adjacent content). The Submit Feedback Tool was introduced to R&S article pages last year with the option to rate articles as either good or bad. As a part of the Submit Feedback Tool 2.0 product initative, once a user rates an article as 'bad', we would like to implement a way for users to report the reason why they rated the page poorly. We would also like these issues to be actionable and easily accessible for the content owners so that improvements can be easily made.

We would like to make improvements to the layout of R&S article pages. Overall, links on R&S articles do not have a high engagement rate. CTA had the highest click through rate and Tags had the lowest click through rate. Participants in the <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/learning-center-mvp-findings-summary.md">last R&S research study</a> did not see tags as clickable. <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/2021-Aug-research-study/research-findings.md">Previous research</a> has shown that users are hesitant to click on R&S because the name and we would like to further explore that issue as well. "Value and Purpose" was also identified as a top issue during our <a href="https://github.com/department-of-veterans-affairs/va.gov-team/issues/32746#issuecomment-970466533">roadmap session</a>.

- <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/initiatives/2022-01-outside-submissions/discovery.md">Discovery: Resources and Support Article Pages</a>

- <a href="https://github.com/department-of-veterans-affairs/va.gov-team/issues/32746#issuecomment-970466533">Resources and Support Roadmap Session Summary</a>

- <a href="https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research">Learning Center Original Reseach Folder</a>
	- <a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/learning-center-mvp-findings-summary.md">Learning Center Moderated Usability Study</a>

[Link to product brief coming soon]

### OCTO Objectives 
Improving Resources and Support will allow Veterans and those in their support system to find information on utilizing their VA.gov account, gaining supplemental information on benefits, and easily find links to apply for benefits or make changes to their account.

### Veteran Journey
Resources and support impacts the Veteran journey from Starting up and all phases thereafter.

## Research Goals and Questions	

### 1. Validate that users are able to easily use the Submit Feedback Tool to rate the article page and report an appropriate problem.
- Are users able to find where they can report feedback?
- What do users expect to see after they submit feedback?
- In what situation would a user rate this page? Why would they rate it 'good', why would they rate it 'bad'?
- Does the wording make sense? If not, what should it say?
- Do the options under "Report a problem' make sense to users?
- What other types of problems would they expect to report?
- What do users think about the amount of issues presented to them? Is the amount overwhelming?
- What are their perceptions on the difference between this feedback tool and Medallia?
- **Content creator question:** 
	- What type of feedback is helpful and actionable to them?
	- How can we make this feedback more accessible to them?

### 2. Are users able to easily navigate and discover additional content on the article pages?
- Are CTAs clear to the user?
- What do users think of the "Related information" section?
- What do users think of the "Va benefits" section?
- What do users think of the "Tags" section?
- Do users utilize a search bar on the article pages?
- Do users utilize list of topic links on the article pages?


### 3. Is the name "Resources and support" a helpful title that tells users what they will find?
Previous usability studies have shown that participants have felt that "Resources and support" was not indicative of the content available and it prevented them from clicking the link.
- What do users think of the title, "Resources and support"?
- If users do not feel like "Resources and support" reflects what they find on the section, what else would they name it?


### Outcome
We will confirm whether:
- Updates allow users to provide feedback which will inform content editors on changes that can be made to improve R&S articles
- Updates to R&S article pages improve navigation and discoverability of more R&S articles
- The name "Resources and support" accurately informs users of what content they will find


### Hypothesis

- Users will not know that tags are clickable
- The tags currently used, such as 'All Veterans', are not helpful
- Users will be more likely to use a topics link section that search bar to look for another article
- Users will understand how to report an issue after rating an article as 'bad'
- Users will not find that the name "Resources and support" reflects the type of content on the tool


## Method	
We'll conduct remote usability testing over Zoom using a prototype.

### Location
Zoom

### Research materials
*Note: your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.*

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

For moderated interviews:
- [Link to conversation guide](url goes here) 

For moderated usability tests: 
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

For [unmoderated testing:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/unmoderated-research-guidance.md) 
- [Link to email with instructions](url goes here)
- [Link to prototype or OptimalSort session for group A](url goes here)
- [Link to prototype or OptimalSort session for group B](url goes here)

If recruiting outside of Perigean’s participant database:
- [Link to recruitment flyer](url goes here)
	
## Recruitment	

### Recruitment approach
We will recruit Veteran participants using a lean maximum variation strategy. We'll leverage Perigean's recruiting services to find our participants.

### Recruitment criteria
Schedule 16 Veterans for a minimum of 8 successfully completed sessions.

**Primary criteria (must-haves)**

- 50% of participants should be able to participant from a desktop device.

- 50% of participants should be able to participate from a mobile phone.



**Secondary criteria (nice-to-haves)**

**Gender**
- 8 women, 8 men

**Inclusion**
- 3 participants who use assistive technology (e.g. screen reader, magnification)
- 10 participants who identify as other than white
- 5 participants who identify as other than straight/heterosexual and cisgender
- 8 participants age 55+
- 8 participants who identify as having a cognitive disability
- 5 participants who do not have a college degree
- 5 participants who live in a rural area


## Timeline
If you are using Perigean to recruit please submit 1 FULL week prior to the start of research for remote research, 2+ weeks for in person. 

### Prepare
When will the thing you are testing be finalized? (Goes without saying, but should be a few days before testing will begin.)

Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 

### Research sessions
What dates do you plan to do research? 

### Length of sessions
How long do you estimate each session will be? (This helps with scheduling & thank you gifts.) e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours. 
Specify if you want Perigean to schedule the sessions with buffer time (15 minutes recommended) to allow for participants who can't make it on time, or if you might go over time.

### Availability
When would you like sessions scheduled? Please list exact dates and times in EASTERN Standard Time. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 
Please request enough dates and time slots for the number of requested participants. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.). 
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Megan Gayle	
- Research guide writing and task development (usually but not always same as moderator): Megan Gayle	
- Participant recruiting & screening: Perigean	
- Project point of contact: Megan Gayle	
- Participant(s) for pilot test: TBD	
- Note-takers: Perigean
- Observers:
	- nicole.leonard@gcio.com
	- tyler.simoni@gcio.com
**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**	

