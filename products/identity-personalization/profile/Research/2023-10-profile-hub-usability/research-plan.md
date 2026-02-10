---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience Profile team: Profile Hub usability study, October 2023"
date: 2023-10-02
last_updated: 2023-10-05
team: "Authenticated Experience - Profile"
product: "VA.gov Profile - Profile Hub"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Current Profile structure sends users directly to first section (Personal information), causing navigation issues: users miss the Profile menu, search for content already in Profile, and screen reader users encounter 'hubless spoke' accessibility problem where H2 appears before H1 in DOM."
  product_location: "VA.gov Profile - new hub/landing page at va.gov/profile"
  user_familiarity: "Iteration - restructuring Profile navigation with new true landing page/hub"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/hub/mvp/README.md"

# Research Design
methodology: "usability testing with coded prototype"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Evaluate the effectiveness of the Profile Hub page in helping people complete common tasks"
  - goal_2: "Evaluate how well the proposed navigation changes perform across participant types (sighted and AT) and screen sizes (desktop and mobile)"
  - goal_3: "Assess whether hub structure resolves information architecture and accessibility issues"

research_questions:
  - "How effective is the structure and hierarchy of the hub page?"
  - "Is the hub page scannable/consumable by sighted and AT participants?"
  - "How effective are the section overviews in giving users the gist of what's within each one?"
  - "Do participants resort to using Search to complete any tasks?"
  - "How useful are the deep links? Are they confusing?"
  - "How well does the proposed navigation concept perform across all users and screen sizes (i.e., a menu-less hub page with navigable sections)?"
  - "Is it disorienting to sighted and/or AT participants to go from an overview-style page with no nav menu to an individual section with side navigation menu?"
  - "Does it introduce friction for mobile users to scroll the hub page's section overviews without the benefit of a menu?"
  - "Are there any differences in usability between large and small screens?"
  - "To what extent would veterans look in their authenticated menu for links to dependents and letters?"
  - "Where within their profile would veterans expect to find emergency contact and next of kin information?"

hypotheses:
  - "Providing short overviews (accompanied by key deep links) of each section will reduce the need for people to search from any profile section for content that lives within their Profile"
  - "Improving the page hierarchy will make the Profile content more scannable for sighted mobile users"
  - "Creating a true landing page for Profile will give people who use screen readers the context they need to understand what's in their Profile and resolve the confusing experience of landing on a page that doesn't match the label on the link they clicked"
  - "All participants will find the hub's section overviews helpful in completing common tasks and will not resort to using search"
  - "All participants will be fine without a sidebar nav menu on the hub page and won't be confused by having a sidebar nav menu appear within sections"
  - "AT participants in particular will find the hub's structure clear and are able to understand the contents within the Profile"
  - "Participants using a mobile device will not find it inconvenient to scroll to see the hub's overviews of each section"

expected_outcomes: "What we learn will inform the direction of this proposed design concept: we will either move forward with this design, making iterations as needed, or choose not to pursue this direction"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Cohort-based recruitment for different assistive technology and device types"
  
  primary_criteria:
    - "All participants must be Veterans"
    - "Must have signed into VA.gov in the last 6 months for any reason"
    - "Must have identity-verified account on VA.gov"
    - "Must be willing to share web browser window on Zoom"
    - "Must have Zoom downloaded and know how to share screen"
    
  secondary_criteria:
    - "2 people who use screen readers on desktop"
    - "3 people who use magnification (2 must be desktop)"
    - "At least 3 people who are 55+"
    - "At least 4 people with cognitive considerations"
    - "Cohort 1: Sighted desktop users (not screen reader) - recruit 2, complete 1"
    - "Cohort 2: Mobile users (not screen reader) - recruit 3, complete 2"
    - "Cohort 3: Screen reader desktop users - recruit 3, complete 2"
    - "Cohort 4: Magnification users (desktop or mobile) - recruit 4, complete 3"
    
  screener_questions:
    - question: "Do you have an identify-verified account on VA.gov? You can check by logging into VA.gov - if you see a prompt to verify your identity once you log in, your identity is not yet verified."
      qualifying_response: "Yes qualifies"
    - question: "Do you need to use screen reader technology to use the internet, such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer?"
      qualifying_response: "Cohort-specific screening"
    - question: "Do you normally need to resize font or use a magnification tool to see your screen when you are using the internet?"
      qualifying_response: "Yes qualifies for Cohort 4"
    - question: "Do you find it difficult to remember or learn new things, focus on a task, or make decisions?"
      qualifying_response: "Need minimum of 4 people with cognitive considerations"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "2023-10-05"
  pilot_participant: "Angela Fowler"
  research_dates: "2023-10-11 to 2023-10-17"
  research_review_submission: "2023-10-02"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 60
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Increase the accessibility, reliability, and security of Veteran's digital services"
    key_results: 
      - "Resolve 'hubless spoke' accessibility issue for screen reader users"
  - objective: "Reduce the time it takes for Veterans to find, use, and receive VA services"
    key_results:
      - "Improve Profile navigation and findability through hub structure"
  - objective: "Logged-in users can update their personal information easily and instantly"
    key_results:
      - "Create clearer entry point and navigation for Profile sections"
  - objective: "Veterans and their families can find a single, authoritative source of information"
    key_results:
      - "Provide overview of all Profile sections in one place"
  - objective: "Logged-in users have a personalized experience, with relevant and time-saving features"
    key_results:
      - "Enable faster navigation to Profile features through section overviews and deep links"
      
veteran_journey_phases:
  - "Starting up"
  - "Taking care of myself"
  - "Putting down roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account#readme"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/issues/41697"
    - "https://github.com/department-of-veterans-affairs/va.gov-team/issues/40593"
    
tags:
  - "AUD: Veterans"
  - "PRDT: VA.gov Profile"
  - "PRDT: Profile-hub"
  - "research-method: usability-testing"
  - "research-method: moderated"
  - "research-method: remote"
  - "device: desktop"
  - "device: mobile"
  - "assistive-technology: screen-reader"
  - "assistive-technology: magnification"
  - "cognitive-disability"
  - "authenticated-experience"
  - "accessibility"
  - "information-architecture"
  - "navigation"
  - "DSP: Hub-and-spoke"
---

# Research Plan for Authenticated Experience Profile: Profile Hub usability study, October 11-17, 2023

## Background

Prior to the launch of [Profile 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account#readme) in 2020, the Profile was designed as a single page. The goal of the Profile 2.0 work was to restructure the Profile to a multiple sections with the intent of solving a number of problems:

- address a self-imposed split between Profile and Account pages to better match peoples’ expectations
- improve the organization and findability of Profile features, especially Direct Deposit
- more effectively employ the design system to improve the readability of the page

With that launch, the URL `va.gov/profile` began redirecting veterans automatically to the first section of the Profile: Personal & Contact information. 

Personal Information & Contact Information have since become their own respective pages, however the redirect for va.gov/profile still opens to the first section of the Profile, currently `Personal information`.

While shifting to multiple sections with vertical navigation solved the problems listed above, a few information architecture and usability issues have come up as a result:

- **People are using search to find things that are already in Profile.** Our review of search analytics suggests that the navigation isn't offering enough contextual clues to users, or simply isn't being noticed. (See [Domo metrics](https://va-gov.domo.com/page/1834995012/kpis/details/203579416?userId=1539186973))
- **Collapsed Profile menu on mobile may lead people to think Personal information is all there is in Profile**. We have observed in usability testing that people often don't realize the Profile menu is collapsed, and they think the `Personal information` section is the only section of the Profile.  We think this might be one reason why we see people searching with keywords for content in sections that are already part of the Profile.
- **The current page structure breaks accessibility best practices, which makes it likely for people using screen readers to miss the Profile menu as well.** Sending people directly into `Personal information` from any Profile link causes an accessibility issue known as the [“hubless spoke”](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41697) problem. 
	- Because the Profile navigation menu appears to people using screen readers before the page’s `H1` – `Personal information` – in the DOM, this makes it difficult for screen readers to interpret and read the page structure correctly. Unless a person knows to navigate 'upwards' in the page structure after they’ve opened the page, they may never realize that there even is a navigation menu that lives above the `H1`, which increases the likelihood that the navigation could be skipped altogether if people navigate by heading, which is a common form of navigation style. (see [Profile Hub epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40593))
	- **Note that creating a true landing page for Profile will not entirely solve this accessibility issue**. Once a screen reader user navigates to any of the sections within the hub, they will run in to the same situation with the `H2` appearing before the `H1`. Our hypothesis (described below) is that starting people on the hub page will give them enough context to understand that other sections live alongside whichever section a screen reader user navigates to.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/hub/mvp/README.md#measuring-success).

### OCTO Priorities 

The Profile Hub supports the following OCTO priorities.

North stars:
- Obj. 1: Increase the accessibility, reliability, and security of Veteran’s digital services.
- Obj. 2: Reduce the time it takes for Veterans to find, use, and receive VA services.  

Goals:

4. Logged-in users can update their personal information easily and instantly
5. Veterans and their families can find a single, authoritative source of information
6. Logged-in users have a personalized experience, with relevant and time-saving features

### Veteran Journey

This research involves navigating personal information on VA.gov, and applies to any life stage in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from `Starting Up` through `Aging`.

## Research Goals	

Our goals are to:
- Evaluate the effectiveness of the Profile Hub page are in helping people complete common tasks.
- Evaluate how well the proposed navigation changes perform across participant types (sighted and AT) and screen sizes (desktop and mobile).

### Outcome
What we learn will inform the direction of this proposed design concept: we will either move forward with this design, making iterations as needed, or choose not to pursue this direction.

### Research questions

Regarding overall structure:
- How effective is the structure and hierarchy of the hub page? 
	- Is the hub page scannable/consumable by sighted and AT participants? 
- How effective are the section overviews in giving users the gist of what’s within each one?
	- Do participants resort to using Search to complete any tasks?
	- How useful are the deep links? Are they confusing?

Regarding the side navigation menu:
- How well does the proposed navigation concept perform across all users and screen sizes (i.e., a menu-less hub page with navigable  sections)?
	- Is it disorienting to sighted and/or AT participants to go from an overview-style page with no nav menu to an individual section with side navigation menu? Is the left navigation menu needed on hub page?
	- Does it introduce friction for mobile users to scroll the hub page’s section overviews without the benefit of a menu? 
	- Are there any differences in usability between large and small screens?

If time permits:
- To what extent would veterans look in their authenticated menu for links to dependents and letters?
- Where within their profile would veterans expect to find emergency contact and next of kin information?

### Hypothesis

We hypothesize that the Profile Hub will resolve the structural and organization issues detailed in the background section above by:
- Providing short overviews (accompanied by key deep links) of each section will reduce the need for people to search from any profile section for content that lives within their Profile.
- Improving the page hierarchy will make the Profile content more more scannable for sighted mobile users.
- Creating a true landing page for Profile will give people who use screen readers the context they need to understand what’s in their Profile and resolve the confusing experience of landing on a page (`Personal information`) that doesn’t match the label on the link they clicked to get there (`Profile`).

We assume that:
- All participants will find the hub’s section overviews helpful in completing common tasks and will not resort to using search to find something.
- All participants will be fine without a sidebar nav menu on the hub page and they won’t be confused by having a sidebar nav menu appear within the sections.
- AT participants in particular will find the hub’s structure clear, and are able to understand the contents within the Profile.
- Participants using a mobile device will not find it inconvenient to scroll in order to see the hub’s overviews of each section.

## Methodology	

Usability study with a coded prototype, on production behind a feature flag.

### Location
- Remote research study using Zoom

### Research materials

*Note: your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.*

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-profile-hub-usability/conversation-guide.md)
- [Link to prototype](https://staging.va.gov/profile) (Staging link, not yet on prod)

## Recruitment	

### Recruitment approach

Our research participants will be veterans, and we will use Perigean to recruit Veterans for this moderated study. 

We’d like to recruit 12 participants for a total of 8 completed sessions:

- Cohort 1: Sighted desktop users who are NOT screen reader users 
	- recruit 2, complete 1
	- recruitment request ticket for [Cohort 1](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/393)  
- Cohort 2: Mobile users who are NOT screen reader users 
	- recruit 3, complete 2
	- recruitment request ticket for [Cohort 2](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/394) 
- Cohort 3: Screen reader desktop users 
	- recruit 3, complete 2
	- recruitment request ticket for [Cohort 3](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/395) 
- Cohort 4: Magnification users (desktop OR mobile) 
	- recruit 4, complete 3 (2 must be desktop)
	- recruitment request ticket for [Cohort 4](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/396) 

### Recruitment criteria

#### Primary criteria (must-haves)

Inclusive representation:
- 2 people who use screen readers
- 3 people who use magnification
- 3 people who are 55+
- 4 people with identify as having a cognitive consideration

Additionally, all participants:
- Must be veterans
- Must have a computer or mobile phone and be willing to complete their sessions on this device
- Must be willing to share a web browser window on the Zoom call
- Must have a working microphone
- Must have Zoom downloaded to their computer or mobile phone prior to the session and know how to share their screen
- Must have signed into VA.gov in the last 6 months, for any reason

#### Screener Questions

[Each cohort will have their own recruitment request ticket]

##### Cohort 1 – Sighted desktop users who are NOT screen reader users
Recruitment request ticket for [Cohort 1](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/393) (recruit 2, complete 1)

We’d like you to review parts of the VA website that require you to log in to an identity-verified account. **Do you have an identify-verified account on VA.gov?** You can check on this by logging into VA.gov. If you see a prompt to verify your identity once you log in, your identity is **not** yet verified. 
> _Response options: yes or no (Answering `yes` would qualify the participant.)_

Do you need to use screen reader technology to use the internet, such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer?
> _Response options: yes or no (Answering `no` would qualify the participant.)_

Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that VA.gov works for people who experience these things.
> _Response option: text box (we need a minimum of 3 people with cognitive considerations, so after this requirement is met, any response is acceptable)_

##### Cohort 2 – Mobile users who are NOT screen reader users
Recruitment request ticket for [Cohort 2](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/394) (recruit 3, complete 2)

We’d like you to review parts of the VA website that require you to log in to an identity-verified account. **Do you have an identify-verified account on VA.gov?** You can check on this by logging into VA.gov. If you see a prompt to verify your identity once you log in, your identity is **not** yet verified. 
> _Response options: yes or no (Answering `yes` would qualify the participant.)_

Are you able to join the session from a smartphone such as a Samsung Galaxy or Apple iPhone? Any kind of smartphone will work as long as it connects to the internet.
> _Response options: yes or no (Answering `yes` would qualify the participant.)_

What device will you use to join the session?
> _Response option: text box_

Have you downloaded the Zoom app to your smartphone, know how to screen share, and have a working microphone on your phone?
> _Response options: yes or no (Answering `yes` would qualify the participant.)_

Do you need to use screen reader technology to use the internet, such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer?
> _Response options: yes or no (Answering `no` would qualify the participant.)_

Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that VA.gov works for people who experience these things.
> _Response option: text box (we need a minimum of 3 people with cognitive considerations, so after this requirement is met, any response is acceptable)_

##### Cohort 3 – Screen reader desktop users 
Recruitment request ticket for [Cohort 3](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/395) (recruit 3, complete 2)

We’d like you to review parts of the VA website that require you to log in to an identity-verified account. **Do you have an identify-verified account on VA.gov?** You can check on this by logging into VA.gov. If you see a prompt to verify your identity once you log in, your identity is **not** yet verified. 
> _Response options: yes or no (Answering `yes` would qualify the participant.)_

Do you need to use screen reader technology to use the internet on a desktop computer, such as VoiceOver, NVDA, or JAWS?
> _Response options: yes or no (Answering `yes` would qualify the participant.)_

We want to make sure our website works for people with various levels of experience with screen readers. Please rate your experience level using a screen reader:
> _Response options: Beginner, Intermediate, Advanced_

Are you willing to join the Zoom session using this assistive technology?
> _Response options: yes or no_ _(Answering `yes` would qualify the participant.)_

Please list the name of the screen reader technology you will use during the session.
> _Response option: text box_

Please list the type of device you will use during the session.
> _Response option: text box_

Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that VA.gov works for people who experience these things.
> _Response option: text box (we need a minimum of 3 people with cognitive considerations, so after this requirement is met, any response is acceptable)_

##### Cohort 4 –  Magnification users (desktop OR mobile)
Recruitment request ticket for [Cohort 4](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/396) (recruit 4, complete 3)

We’d like you to review parts of the VA website that require you to log in to an identity-verified account. **Do you have an identify-verified account on VA.gov?** You can check on this by logging into VA.gov. If you see a prompt to verify your identity once you log in, your identity is **not** yet verified. 
> _Response options: yes or no (Answering `yes` would qualify the participant.)_

Do you normally need to resize font or use a magnification tool to see your screen when you are using the internet? 
> _Response options: yes or no (Answering `yes` would qualify the participant.)_

What device will you use to join the session? Mobile, computer, or tablet? Mac or PC?
_Response option: text box (We need a minimum of 2 people on desktop, so after this requirement is met, mobile is acceptable)_

Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that VA.gov works for people who experience these things.
> _Response option: text box (we need a minimum of 3 people with cognitive considerations, so after this requirement is met, any response is acceptable)_

## Timeline

*Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.* 

We would like to **request a kick-off meeting with Perigean** to go over the recruitment criteria and screener questions.

Availability:
- Monday, October 2 between 9-11am Eastern
- Wednesday, October 4 between 9-11am and 3-5pm Eastern

### Prepare

- Prototype date finalized on: October 3
* Pilot participant email: Angela Fowler
* Date and time of pilot session: October 5th at 12pm Eastern

### Research sessions
* Planned dates of research: October 11 - 17

### Length of sessions

- Cohort 1 and 2: sighted participants (desktop or mobile)
    - Session length: **60-minute** sessions
    - Session buffer: **60-minute breaks** in between
    - Max sessions per day: 3
- Cohort 3: screen reader participants (desktop)
    - Session length: **90-minute** sessions
    - Session buffer: **60-minute breaks** in between
    - Max sessions per day: 2
- Cohort 4: magnification participants (desktop or mobile)
    - Session length: **60-minute** sessions
    - Session buffer: **60-minute breaks** in between
    - Max sessions per day: 3

### Availability

| Date       | Times (Eastern) |
| ---------- | --------------- |
| 10/11/2023 | 9am - 4pm; 6:30pm - 8pm |	
| 10/12/2023 | 9am - 5pm; 6pm - 8pm |
| 10/13/2023 | 9am - 5pm |
| 10/16/2023 | 9am - 3pm; 6pm - 8pm |
| 10/17/2023 | 9am - 5pm |
 
## Team Roles	

- Moderator: Pam Drouin
- Research guide writing and task development: Pam Drouin
- Participant recruiting & screening:	Perigean
- Project point of contact: Pam Drouin - pamela.drouin@a1msolutions.com
- Participant(s) for pilot test: TBD
- Accessibility specialist: TBD
- Note-taker: Team
- Observers/Participants:
  -  travis.cahill@agile6.com
  -  adam.whitlock@adhocteam.us
  -  dorothy.cummings@agile6.com
  -  liz.lantz@adhocteam.us
  -  samara.strauss@va.gov
  -  tom.harrison@adhocteam.us
