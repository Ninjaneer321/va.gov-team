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

[DRAFT]

# How VSP does user research

## DEPO Platform Users

The audience for the DEPO platform is _not_ Veterans. We are designing for:
- VFS teams (product managers, engineers, designers, content writers, QA specialists, accessibility specialists, researchers)
- Dependent/Platform-adjacent teams (CMS, Lighthouse)
- DEPO product owners

Because we support and collaborate with them daily, it can be easy to forget that they are our users. 

There are a few exceptions to this group of users (Identity team, Contact Center team, some of the Product Support team's work). Reach out to the design leads if you need a hand figuring out who exactly your audience is.

We should be conducting **generative user research** with all of these groups as part of discovery to help guide our product decisions, and **evaluative usability** testing to make sure the things we’re making are working.

## User research process

DEPO has written up a [process for doing research with Veterans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-process.md), but there are some different details to consider for doing research with VFS teams, which will be outlined in this document.


- Make a plan
- Recruit participants
- Conduct sessions
- Synthesize data
- Read out results

### 1. Make a plan
---
#### Get organized

Create a folder in the relevant product directory to house the research documents. Follow [these instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md#naming-conventions) for naming your files and folders in Github.

Put all project-related research in this folder, including:
- Research plan
- Conversation guide
- Session notes
- Synthesis
- Readout

Create a research epic to track the work in Zenhub. Tag Emily Waggoner, Naomi Marcussen, and Kevin Hoffman on the epic for awareness.

#### Write a research plan

Filling out the research plan will guide you through decisions about your research:

- What are your goals?
- What methodology will you use? (More on that below.)
- Who do you want to talk to?
- What is your timing?
- Who will do what during the sessions?

If you have a designer on your team, they should fill out this plan. 

Copy the [VSP Research Plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/research/planning-resources/vsp-research-plan-template.md) into a new markdown file in your research folder and answer all the questions. If you need help making any decisions, reach out to Naomi, Emily, or Kevin.

#### Write a conversation guide

Once you’ve filled out your research plan, write a conversation guide. Use the [VSP Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/research/planning-resources/vsp-conversation-guide-template.md) template as a starting place. Whoever the moderator will be should generally write the conversation guide. (If you have a designer on your team, they should usually be the moderator.)

A conversation guide is a script that organizes how you’d like each user research session to go. The moderator should plan to use it during each session and read directly from it. Feel free to go off-script and follow the natural flow of the conversation.

These are most commonly used in synchronous research sessions, but can be adapted as a set of instructions to be given to the user asynchronously if necessary.

**Pro tips:**
- When drafting questions, write down every question you can think of and get input from all team members. Organize later.
- When organizing, start with high level and general questions, then get more specific
- Always begin with an intro that sets the stage of the project and session (start with the intro included in the template)


#### Choosing a methodology

Defining your research goals (as you write your research plan) will help you select a methodology (or a combination of them). In order to answer your research questions, you’ll need to get information somehow, but how? And what kind of information?

**Are you looking for...**

**... Quantitative or qualitative data?**
- Qualitative data: observational findings that identify tasks as easy or hard to complete
- Quantitative data: in the form of one or more metrics (such as task completion rates or task times) that reflect whether the tasks were easy to perform

**... Behavioral or attitudinal information?**
- Behavioral: What people do
- Attitudinal: What people say, how they feel

**... Formative or evaluative information?**
- Formative: Starting from scratch, understanding a problem, discovery
- Evaluative: You have a thing to test and want to know how it performs

**How would you like to gather this information? What would be most effective?**
- Synchronously: Researcher is present and moderates the data gathering
- Asynchronously: Researcher is not present, data gathering is unmoderated



### Recruit participants


### Conduct sessions


### Synthesize data


### Read out results


