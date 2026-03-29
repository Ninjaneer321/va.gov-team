---
# Research Plan Metadata
title: "eBenefits Rated Disabilities / View Dependents Usability Testing"
date: 2019-11-18
last_updated: 2026-03-23
team: "eBenefits"
product: "Rated Disabilities and View Dependents"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Rated Disabilities and View Dependents are migrating from eBenefits to VA.gov with technical and UI redesign to conform to VA.gov Design System. Need to validate new tools page layout with cards for displaying information and right-hand help sidebar."
  product_location: "VA.gov authenticated tools area"
  user_familiarity: "Migration of existing eBenefits features to new VA.gov design patterns"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/issue-briefs/profile-dependents.md"

# Research Design
methodology: "Usability Testing"
research_format:
  location: remote
  moderated: true

# Research Goals & Questions
research_goals:
  - goal_1: "Determine expected baseline usage frequency and utility for Rated Disabilities and View Dependents screens"
  - goal_2: "Assess the utility and readability of card components for individual disability ratings and dependents"
  - goal_3: "Note usability issues transitioning from legacy eBenefits to new VA.gov configurations"

research_questions:
  - "Can Veterans quickly identify their Total Combined Disability Rating and awarded/unawarded dependents?"
  - "Is information displayed in a clear and understandable manner using cards?"
  - "Is the navigation into and out of the screens adequate?"
  - "Do Veterans expect a relationship between the Disabilities and Dependents screens?"
  - "What platform do participants use to access VA.gov?"

hypotheses:
  - "The Rated Disabilities and View Dependents screens will test well against their basic function of displaying information"
  - "Screen layout and card arrangements will prove adequate, text will be clear to most users"
  - "The lack of sidebar navigation may jar users, who will be inclined to back-button to previous screens"
  - "Rated Disabilities will be lightly used by Veterans who have instant recall of their TDR"
  - "View Dependents will be used occasionally when there is a change of status or investigating benefits payment changes"

expected_outcomes: "Clear verdict regarding the usability of the Rated Disabilities and View Dependents screens and the underlying tools page template, with actionable path forward to refine these tools for maximum clarity and effectiveness"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Standard recruitment"
  
  primary_criteria:
    - "10 Veterans with various service backgrounds"
    - "Total Rated Disability of 30% or greater"
    - "3-4 Veterans with Total Rated Disability of 80% or greater and cognitive disabilities"
    - "Have or had dependents; received or applied for dependents benefits"
    - "Computer access and basic computer literacy"
    
  secondary_criteria:
    - "Geographically diverse"
    - "All genders"

participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 10

# Timeline & Sessions
timeline:
  pilot_date: "2019-11-13"
  pilot_participant: "TBD"
  research_dates: "2019-11-18 to 2019-11-26"
  research_review_submission: "2019-11-08"
  
session_details:
  duration_minutes: 30
  buffer_minutes: 30
  max_sessions_per_day: 5

# Strategic Alignment
octo_priorities:
  - objective: "Veterans can manage their health services online"
    key_results: 
      - "Migrate eBenefits features to VA.gov"
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Putting down roots"

# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/issue-briefs/profile-rated-disabilities.md"
  conversation_guide: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/research/disabilities-dependents-usability-1119/disabilities-dependents-usability-convo-guide.md"
  prototypes:
    - "https://xd.adobe.com/view/0db723ac-52ff-48b3-4877-9d5882cb2e1f-7b86/"
    - "https://xd.adobe.com/view/852342af-36f7-41b6-7e04-29c9ca8b210e-f312/"

# Team
moderator: "James Adams"
notetaker: "Various as available"
observers: "Jason Wolf, Steve Kovacs, Shawna Hein, Kathleen Crawford, Micah Chiang, Jesse Cohn, Jennifer Strickland, Emily Waggoner, Peggy Gannon"

study: "eBenefits Rated Disabilities / View Dependents Usability Testing, November 2019"
tags:
  - ebenefits
  - rated-disabilities
  - view-dependents
  - usability-testing
  - tools-page
  - card-design
  - eBenefits-migration
  - authenticated-tools
---


# Research Plan for eBenefits Rated Disabilities / View Dependents Usability Testing, November 2019

**Background:** Rated Disabilities and View Dependents are slated to migrate from the eBenefits subdomain to VA.gov. These features (tools, screens) will undergo technical and UI redesign to conform to site IA and the VA.gov Design System (VADS). While the VADS is relatively complete regarding content presentation, the system is not set to easily accommodate tools or application functionality.

During Discovery and Design, the current functionality of both Rated Disabilities and View Dependents--basically viewing tabular or listed info from EVSS--was translated to VADS structural elements and components. These screen layouts use two new pieces that were developed to align with a new "tools page" arrangement: a right-hand "help" sidebar, and light grey boxes or "cards" to list formerly tabular information. Missing from this configuration is the left-hand navigational sidebar.

## Table of Contents
- [Goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#goals)
  - [Rated Disabilities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#rated-disabilities)
  - [View Dependents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#view-dependents)
  - [Tools Page Layout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#tools-page-layout)
  - [Hypothesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#hypothesis)
  - [Guiding Questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#guiding-questions)
  - [Success Criteria](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#success)
- [Method](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#method)
- [Participants and Recruitment](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#participants-and-recruitment)
- [Timeline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#timeline)
  - [Test Session](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#test-session)
  - [Availability the Week of November 18](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#availability-the-week-of-november-18-all-times-are-est)
- [Team Member Roles](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#team-member-roles)
- [Resources](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#resources)

### Goals
#### Rated Disabilities
- Determine expected baseline usage frequency and utility for the Rated Disability screen.
- Determine if Veterans can quickly and easily recognize their Total Combined Disabiliy Rating (TCDR).
- Assess the utility and readability of "cards" for individual disability ratings.
- Determine if the text presented is clear and helpful to the understanding of the Rated Disabilities information.
- Uncover pain points, user expectations, and potential future features.

#### View Dependents
- Determine expected baseline usage frequency and utility for the Rated Disabilities screen.
- Determine is Veterans can quickly identify their Awarded and Unawarded dependents.
- Assess the utility and readability of "cards" for individual dependents.
- Determine if the text presented is clear and helpful to the understanding of the Dependents information.
- Uncover pain points, user expectations, and potential future features.

#### Tools Page Layout
- Note any usability issues transitioning from legacy eBenefits screens to new VA.gov configurations.
- Uncover the users' expectations for navigating to and away from the screens.
- Assess the effectiveness of the right-hand sidebar and determinine if the information is readily apparent
- Determine if Veterans expect a relationship--navigational, informational, etc.--between the Disabilities and Dependents screens.

#### Hypothesis
It is likely the Rated Disabilities and View Dependents screens will test well against their basic function: displaying information. The screen layout and card arrangements will prove adequate, the text will be clear to most users. The lack of sidebar navigation may jar users, who will be inclined to back-button to previous screens. Rated Disabilities will be lightly used by Veterans (who have instant recall of their TDR); View Dependents will be used occasionally when there is a change of status for a dependent, or if investigating a change in benefits payments. Veterans may want disabilities benefits tools/screen to be linked in some way.

#### Guiding Questions
- How often would users access Disabilities and Dependents screens? How would they be prompted to look?
- Can users quickly determine the purpose of the page? Can they find the TRD immediately? Are dependent details immediately apparent?
- Can users immediately find the relevant information on-screen?
- Is information displayed in a clear and understandable manner (text and components)?
- Are the "cards" and acceptable presentation of information?
- Is it clear in the View Dependents screens what the card buttons will do?
- Given a particular user path, do users have a sense of where they are in the site?
- Is there a clear recourse for users if they see inaccurate or missing information on-screen?
- Do user expect their benefits information to be clumped together?
- What other screens or information would users look for in view-disabilities or view-dependents scenarios?
- Is the navigation into and out of the screens adequate? Did they expect something different?
- What platform do participants use to access VA.gov or other VA sites? Would they consider mobile platforms?
- What other features do users expect when accessing disabilities and dependents information?

#### Success
This research effort will be successful if it points to a clear verdict regarding the usability of the Rated Disabilities and View Dependents screen--and the underlying tools page template. This does not necessarily mean the layouts and patterns are validated, rather it means there is an actionable path forward to refine these tools for maximum clarity and effectiveness. If significant re-work is required of these screens, further usability testing will follow.

### Method
Usability testing will be conducted remotely using Zoom or GoToMeeting. Veterans will be presented with high-fidelity prototype created using Adobe XD. A remote moderator will prompt users with guiding questions (from the conversation guide). Participants will be encouraged to talk through their exploration of the prototypes. Remote observers and note takers will be in attendance.

### Participants and Recruitment
Participants will be recruited via Perigean. The study will require 10 Veterans from a range of service backgrounds. Participant criteria include:
- 10 Veterans
- Various service backgrounds
- Geographically diverse
- All genders
- Computer access and basic computer literacy
- Total Rated Disability of 30% or greater
- Several Veterans (3 to 4) with Total Rated Disability of 80% or greater and cognitive disabilities
- Have or had dependents; received or applied for dependents benefits
- Because XD prototypes will be presented, there is no support for users needing adaptive equipment or software
- Sessions will run approximately 30 minutes

### Timeline
The target for research session is the week of November 18, 2019. Preparation includes participant recruitment, refining prototypes, writing the conversation guide, and a dry run test session. Target date for the test session is November 13.

#### Test Session
- Wednesday, November 13, 2019

#### eBenefits Team Availability
(Session times subject to Participants' availability)
- Monday 11/18
- Tuesday 11/19
- Wednesday 11/20
- Thursday 11/21
- Friday 11/22
- Monday 11/25
- Tuesday 11/26

### Team Member Roles
- [James Adams](jadams@governmentcio.com) [(VA Email)](james-adams2@va.gov) -- Moderator, research writer, UI designer
- [Jason Wolf](jwolf@governmentcio.com) -- eBenefits product lead
- [Steve Kovacs](steve.kovacs@va.gov) -- DSVA project point-of-contact
- [Shawna Hein](shawna@adhocteam.us) -- VSA design lead
- [Kathleen Crawford](kcrawford@governmentcio.com) -- Backend engineer
- [Micah Chiang](micha@adhocteam.us) -- Frontend engineer
- [Jesse Cohn](jesse.cohn@adhocteam.us) -- Frontend engineer
- [Jennifer Strickland](jennifer.stricklandn@adhocteam.us) -- 508 compliance
- [Emily Waggoner](emily@adhocteam.us) -- VSP platform
- [Peggy Gannon](peggy@thesocompany.com) -- VSP content
- Perigean -- Participant recruiting & screening
- Note-takers -- Various as available
- Observers -- various as available

### Resources
- [Project Brief for Disabilities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/issue-briefs/profile-dependents.md)

- [Project Brief for Dependents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/issue-briefs/profile-rated-disabilities.md)

- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/research/disabilities-dependents-usability-1119/disabilities-dependents-usability-convo-guide.md)

- [Rated Disabilities Prototype](https://xd.adobe.com/view/0db723ac-52ff-48b3-4877-9d5882cb2e1f-7b86/)

- [View Dependents Prototype](https://xd.adobe.com/view/852342af-36f7-41b6-7e04-29c9ca8b210e-f312/) (Undergoing revision.)

- [Session Notes]() (Not yet available.)

- [Research Synthesis]() (Not yet available.)

- [Research Readout]() (Not yet available.)

#### This plan approved by Lauren Alexanderson 11/08/2019.
[_Back to top_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md#research-plan-for-ebenefits-rated-disabilities--view-dependents-usability-testing-november-2019)