---
# Research Plan Metadata
title: "Research Plan for Veteran Facing Forms Team, Review Page Hub and Spoke Model, Fall 2024"
date: 2024-09-15
last_updated: 2024-09-15
team: "Veteran Facing Forms Team"
product: "Form Review Page Pattern"
product_area: "authenticated, unauthenticated"

# Background Context
background:
  problem_statement: "Current review page has numerous bugs requiring re-architecting, 508 defects, and doesn't follow 'one thing per page' principle in editing. Testing new 'hub and spoke' model where users edit single form pages and return to review page, reducing cognitive load and improving accessibility."
  product_location: "VA.gov forms system - platform-wide pattern"
  user_familiarity: "Iteration - new architecture for existing review page functionality"
  product_brief_url: "https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/Review%20Page/Product%20Outline.md"

# Research Design
methodology: "moderated usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Evaluate the usability of the 'hub and spoke' model for the form review process for AT-using Veterans"
  - goal_2: "Validate that Veterans can successfully understand complex patterns on review page (file upload, list and loop) and edit responses"
  - goal_3: "Validate that Veterans can successfully answer new questions required due to changing an answer during review"

research_questions:
  - "Can Veterans successfully navigate the 'hub and spoke' editing flow?"
  - "Do Veterans understand how to edit a single page and return to review?"
  - "Can Veterans handle conditional questions that appear after editing?"
  - "How do Veterans interact with complex patterns like file upload on review page?"
  - "Are edit links and error states accessible to AT users?"

hypotheses:
  - "The 'hub and spoke' model will reduce cognitive load compared to navigating through entire chapters"
  - "Veterans will successfully edit single pages and return to review page"
  - "AT users will be able to navigate the new review page pattern accessibly"
  - "Veterans will understand how to handle conditional questions during review"

expected_outcomes: "Validate new review page architecture meets usability and accessibility standards before platform-wide implementation"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "targeted recruitment for assistive technology users"
  
  primary_criteria:
    - "Veterans who use assistive technology (screen readers, magnification)"
    - "Experience completing forms online"
    - "Mix of AT types (JAWS, NVDA, VoiceOver, ZoomText)"
    
  secondary_criteria:
    - "Diverse age range"
    - "Various form experiences"
    
  screener_questions:
    - question: "Do you use assistive technology to access the internet?"
      qualifying_response: "Yes"
      
participants:
  veterans: 5
  caregivers: 0
  dependents: 0
  total_recruited: 6
  completed_sessions_goal: 4
  
# Timeline & Sessions
timeline:
  pilot_date: "2024-10-14"
  pilot_participant: "TBD"
  research_dates: "2024-10-21 to 2024-11-01"
  research_review_submission: "2024-10-07"
  
session_details:
  duration_minutes: 90
  buffer_minutes: 30
  max_sessions_per_day: 2
  
# Strategic Alignment
octo_priorities:
  - objective: "Our digital experiences are the best way to access VA health care and benefits"
    key_results: []
  - objective: "Our platforms are the best way to deliver products at VA"
    key_results: []
      
veteran_journey_phases:
  - "Serving"
  - "Getting Out"
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
  - "Dying"
    
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

# Research Plan for Veteran Facing Forms Team, Review Page, Fall 2024

## Background
In [numerous studies](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/Product/Review%20Page/Research) new variations of the review page have been presented to users, but the work has never been completed or considered successful. In it's current state, the review page has numerous bugs that require re-architecting the entire page and flow. The page also has numerous 508 defects. And, as the VA Design System has evolved, there is a desire to practice the "one thing per page" principle in the editing process as well.

To that end, we are proposing a new variation of the review page that we call the "hub and spoke" model. Unlike previous studies, our prototype will allow users to edit the contents of a single form page back on the original form page, and after the edits are made, they will return to the review page. If there are conditional pages that are required based on those edits, the user will go to these new pages before returning to the review page. Previous studies have had users have to navigate through an entire chapter to edit a single page in a form flow.

In this study, we seek to understand how Veterans interact with the "hub and spoke" model of the review page, and what their expectations are in answering new questions they may encounter based on their edits.  We hope the results from the study will help inform a new design for the review page process that is usable, scalable, and accessible.

Particularly, we hope to
- Reduce cognitive load on users wanting to review or change their answers after they've walked through an entire form flow.
- Make it easier for users to edit or change answers.
- Build in accessible features so that any edit links and error states are accessible by default.

Participants will walk through a code prototype on staging.

[Link to product brief](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/Review%20Page/Product%20Outline.md).

### OCTO Priorities 

Which [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md) does this research support? 

This research supports 2 of the 2024 OCTO Objectives: 
- Our digital experiences are the best way to access VA health care and benefits.
- Our platforms are the best way to deliver products at VA.

### Veteran Journey
Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)?
Are there moments that matter? 

Since Veterans can submit forms with VA between 180 and 90 days before separating from the military, this work impacts the Veteran journey from serving, to getting out, and all the way to dying as survivors can also file forms on their own behalf. This work especially maps to the taking care of myself part of the Veteran journey.

Key moments this research touches in the Veteran journey are:

- Engaging VA to access benefits and services
- Finding additional sources of income
- Taking care of my health
- Taking care of my family
- Planning for longer term care
- Deciding how and where to be memorialized

## Research Goals	
What are you trying to learn from this research? 

1. Evaluate the effectiveness and value of the "hub and spoke" model for the form review process for sighted and non-sighted users.
2. Understand how Veterans want to interact with content on the review page they've already reviewed mid-form (File upload and list and loop)
3. Understand the Veteran expectation for answering new questions that may be required due to changing an answer during the review process.

### Outcome
How will this research advance your product to the next phase in the design process? What will you do with your learnings?

- We believe the results from the study will help inform review page template changes for all forms moving forward

### Research questions
#### GOAL 1: Evaluate the effectiveness and value of the "hub and spoke" model for the form review process for sighted and non-sighted users.
- Are Veterans disoriented when clicking an edit link loads a new page with their form answers in editable fields?
- Do Veterans understand or expect to return to the review page after editing a single page or do they have a different expectation for what will happen after editing a single page?

#### GOAL 2: Understand how Veterans want to interact with content on the review page they've already reviewed mid-form (File upload and list and loop)
- Do Veterans think their form data is incomplete when not all of the data from the form appears on the review page for file upload and list and loop?
- Do Veterans want to delete file uploads and list and loops from the review page or can they navigate back into an edit flow and do this successfully?
- Do Veterans try to interact with the progress bar as a way to navigate through the form in a non-linear way?

#### GOAL 3.  Understand the Veteran expectation for answering new questions that may be required due to changing an answer during the review process.
- Are Veterans frustrated or confused about error/alert messages they encounter on the review page to update subsequent form fields?
- Do Veterans successfully complete the task(s) the error/alert message(s) ask them to complete? 

### Hypothesis

1. We hypothesize that Veterans will be able to navigate with ease to edit/change their answers and will return to the review page.
2. We hypothesize that while not all form content is visible on the review page, Veterans will have enough context to understand where and how to review/change/edit all of the answers in a given form flow.
3. We hypothesize that Veterans will express some frustration or negative feelings when they encounter a slew of alert/error messages on the review page to update subsequent form fields as a result of the "hub and spoke" model.


## Methodology	
We'll conduct remote usability testing over Zoom using a coded prototype on staging. This method will enable us to observe sighted and non-sighted participants filling out a form and review and edit their responses. 

- Usability testing task analysis
- Post-task and post-testing participant questions


### Location

**Location:** Remote, Zoom   
**Point of contact:** Jeana Clark   
**Equipment used for research:** Zoom, screen readers, browser of choice   

### Research materials - TBD

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

For moderated interviews:
- [Link to conversation guide](url goes here) 

For moderated usability tests: 
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)


## Recruitment	

### Recruitment approach

- **Recruit one time for 2 distinct study parts**
  - Part 1: Non-AT users - recruit 12 total participants for a total of at least 8 completed sessions
  - Part 2: AT users - recruit 8 total participants for a total of at least 5 completed sessions
- Schedule a brief kickoff call to run through the recruitment criteria before recruiting.

### Recruitment criteria

| Primary criteria (must-haves)                                                                 | Goal  |
|-----------------------------------------------------------------------------------------------|-------|
| Total Participants recruited                                                                  | 20    |
| Total completed sessions                                                                      | 13    |
| Completed sessions with Veterans that use screen readers                                      | 5     |
| Completed sessions with Veterans that identify as having cogntitive impairements              | 3     |

**Please collect basic demographic information on participants in addition to the screener questions**


### Part 1: Non-AT users

**_Recruit 12 total participants for a total of at least 8 completed sessions_**

**Primary Criteria**
- At least 4 Veterans will join from a mobile device
- At least 4 Veterans who are women
- At least 4 Veterans who are 55 or older
- At least 4 Veterans who are not Caucasian
- At least 3 Veterans with Cognitive impairments
- All participants must have zoom downloaded to their device prior to the session and know how to share their screen

**Second criteiria (nice to haves)**
- At least 3 Veterans who live in a rural area
- At least 2 Veterans with no degree
  
#### Screener Question
**At least 3 Veterans must have a cogniitive disability or impairment.**

**Screener Q1:** Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to ensure that our tools work for people who live with challenges like these.
- Yes `Meets critiera for cognitive impairment`
- No `Does not meet criteria for cognitive impairment`


### Part 2: AT users

**_Recruit 8 total participants for a total of at least 5 completed sessions_**

**Primary Criteria**
- All Veterans must use assisitive technology to navigate VA.gov and be willing to use it in the session
- All Veterans mut have zoom downloaded to their device prior to the session and know how to share their screen

**Second criteiria (nice to haves)**
- At least 1 Veteran 55 or older
- At least 1 Veteran with no degree
- At least 2 Veterans who are women

#### Screener questions
**All participants must use assisitive technology to navigate VA.gov and be willing to use it in the session**

**Screener Q1:** Do you use a screen reader, such as VoiceOver on an Mac, or JAWS on a Windows computer, to navigate and manage your benefits, claims, or healthcare on [va.gov](http://va.gov/)?
   - Yes, I need a screen reader to use VA.gov `qualifying AT-user answer`
   - No, I don't use a screen reader to use VA.gov `disqualifying AT-user answer`

**(Only if yes to Q1) Screener Q2:** Please list the name of the screen reader technology you intend to use during the session.
- Open text field. Required.

**Screener Q3:** We want to make sure our prototype works for people with various levels of experience with screen readers. Please rate your experience level using a screen reader. Beginner, Novice, Advanced   
   - Beginner: I'm a new assistive technology user `disqualified from the study due to known credentialing burden`
   - Novice: I can do a lot of things by myself, but if it's complicated I ask for help `qualifying AT-user answer`
   - Advanced: I'm very comfortable doing most things on my own, it's rare for me to need help `qualifying AT-user answer`
  
**Screener Q4:** Are you willing and able to join the Zoom session AND share your screen using this screen reader?
   - Yes `qualifying AT-user answer`
   - No `disqualified from the study due to known Zoom screen share burden`

**Screener Q5:** List any any additional accommodations we can provide to assist you during the session? Add N/A if none.
- open text field. Required.

**Follow Up Call:**
Please follow up by phone with prospective participants that identified as using a screen reader with these questions and please let us know what they say. 
1. We want to confirm that you will use a screen reader
2. Will you be joining the call from a desktop/laptop machine or a phone/tablet?
3. What is the name of the screen reader technology you are using?
4. Are you comfortable joining a Zoom call and sharing your screen using your screen reader technology?
5. We’ll have an accessibility specialist on the call. Are there any other accommodations that would be helpful during this session?


## Timeline
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

Completion of at 13 successful research sessions between DATE and DATE.



### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

Before recruitment starts, we would like to request a kickoff call with Perigean to align on recruitment criteria and terminology for screener questions in the survey and emails that will be sent to Veterans. We would also like to discuss the relative priorities of recruitment criteria and how the criteria are prioritized when recruiting replacements for participants who cancel in advance.

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 


### Research sessions
* Planned dates of research: DATE and DATE
* We would like to request that Perigean calls each participant to remind them about the session, in addition to emailing them.


### Length of sessions
- Session length:
  - 1 hour for non-AT users.
  - 1.5 hours for AT-users.
- Buffer time between sessions: 60 minutes.
- Maximum Sessions per day: 3.

### Availability
Geneeral Availability (Eastern Time): (TBD revisit closer to study schedule)

- Monday: 10:00 am-5:30 pm
- Tuesday: 12:30 - 4:30 pm
- Wednesday: 12:30 - 5:00 pm
- Thursday: 12:30 - 5:00 pm
- Monday: 10:00am - 5:30pm
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Jeana Clark (jeana.clark@adhocteam.us)
- Research guide writing and task development (usually but not always same as moderator): Jeana Clark 	
- Participant recruiting & screening: Perigean
- Project point of contact: Tricia Baker	
- Participant(s) for pilot test: TBD
- Accessibility specialist (for sessions where support for assistive technology may be needed):	We would love to have CAIA support, if scheduling allows!
- Note-takers:	Tricia Baker (tricia.baker@oddball.io)
- Observers:	TBD
