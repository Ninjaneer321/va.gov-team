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

# Identity Slackbot announcement

Summary of communication and messaging to announce the new Slackbot support process.

## General Plans

1. We will send this announcement to the following channels, 1 week prior, 1 day prior, and day of launch:
    1. #vfs-change-announcements
    2. #vfs-all-teams
    3. #vsp-identity
    4. To be decided:
        1. Vfs-Backend or FE channels?
        2. Product channel?
2. This announcement will be made in the next 2 ToT (Dates to be decided)
3. We will prepare [answers for questions we think we’re most likely to be asked](https://docs.google.com/document/d/1RJR9LIpcYq09QvHiEvpAxG9Hy5TdeTNmk5pKaYW4f98/edit#heading=h.jgbsdsdd4lj5).
4. We will create [user documentation](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/79906) to publish in Github with step-by-step instructions on how to submit a ticket to the Slackbot.
5. We’ll draft proposed updates for the [Slack canvas](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/79921) to provide details about the Slackbot support process and link to our documentation about how to submit a request.

## Slack Notification

**Attention:** Identity team has a new support Slackbot

**What's happening:** Starting on April TBD, VA teams will [request support from the Identity team through our new Slackbot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/Identity-Slackbot-documentation.md). This includes any questions about [user authentication](https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication) for VA.gov and its services and tools.

To get help from our team:

- Navigate to [#vsp-identity](https://dsva.slack.com/archives/CSFV4QTKN).
- Type the [/identity-support] command.
- Select your issue type.
- Provide more details and review self-service documentation.

**Impact:** use the Slackbot for new requests going forward. An engineer or product manager will follow up on the request within 1 business day. Urgent requests impacting Veterans on production servers will get a response within 1 hour.

**Documentation:** review our [Github documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/Identity-Slackbot-documentation.md) for details on how to submit a new support request.

**Questions:** post questions about this new policy here on Slack or reach out to our team in #vsp-identity.

## Slack Canvas updates

### Proposed updates

The Identity team manages [user authentication](https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication) for VA.gov and its services and tools. Learn more about [Identity products and services](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity) and [our team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/identity-team-charter.md).

**Support resources**

- Read our [authentication troubleshooting documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Troubleshooting_logging/troubleshooting_signin.md) to resolve common errors.
- Learn more about our [Sign-in Service (SiS)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service) and how to get started.
- To get help from our team, [submit a request to our support Slackbot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/Identity-Slackbot-documentation.md) by typing /identity-support.
- Schedule time to [meet with our team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/identity-office-hours.md) to discuss any questions.

**Our team**

- Product managers: Mike King (Mike.King@oddball.io) and Jim Connelly (jim.connelly@oddball.io).
- VA point of contact: Tom Black (thomas.black2@va.gov) and Samara Strauss (samara.strauss@va.gov).

Have you worked with the Identity team before? [Share your feedback](https://dj540s05.optimalworkshop.com/questions/52low0ey) 🙏

### Current Slack canvas content (not yet published)

- [Documented in our Identity Bot Slack workspace only](https://testidentitybotapp.slack.com/canvas/C06593XK5U1).
- [Link to doc.](https://docs.google.com/document/d/1wmSnKzSFD7QTexoLRfutBGEUvM8scM-qn_nklZrnyUo/edit#heading=h.pquhpjodqw6j)
    - Not yet published.
    - Doesn’t mention Slackbot, emphasizes manual Github process.
    - Has outdated details about office hours.
- Link to [Github issue](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/79921) to publish Canvas
