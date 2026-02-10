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

# **How to GA4: Data Collection Evaluation Plan**

### **Base explore report**

As a starting point, create an explorer report that contains the following dimensions:
- Page path and screen class
- Heading
- Event name
- Link text
- DataLayer Event Name
- Link location

And add the following metrics:
- Views
- Views per user
- Active users
- Event count
- Event count per user
- Sessions

Add values:
- Event count
- Event count per user

With the above dimensions and metrics, one can run reports for many of the data we want to track. However, at this point, no data will populate within the report. Follow the instructions below for each metric to add to and change the base report into something useable.

## **Set up explore reports to track our eval plan metrics**
Start with the base report described above.


### What are the most clicked links on the landing page? Which are least clicked?

Add rows: 
- Heading
- Link text
- Event name

Add values:
- Event count
- Event count per user
- Active users

Add filters:
- Page path and screen class exactly matches regex: "/my-health|/my-health/"
- Event name exactly matches regex: "link_click|navigation|outbound_link"

Notes
- This report will include a few random links from the sitewide footer. You can just ignore those links.
- If you want to see highest clicks per area of the page, i.e. Which cards have the highest clicks?, then change dropdown Nested Rows to yes. To get highest clicks to lowest irrespective of their location on the page, change dropdown Nested Rows to no. 



### How are users navigating the portal, i.e. breadcrumbs, landing page, secondary nav?


#### On which pages do breadcrumbs get most clicks? And which breadcrumb link texts get the most clicks? Or, how many clicks on breadcrumbs throughout the portal?

Add rows: 
- Page path and screen class
- Link text

Add filters: 
- Page path and screen class begin with "/my-health"
- Event name exactly matches "breadcrumb"

Notes
- If you want to see the report sorted by pages with highest clicks, set Nested Rows to yes. To see report sorted by highest click per breadcrumb, irrespective of the page, set Nested Rows to no.
- To see which breadcrumb link text and url combination gets the most clicks throughout the portal, remove Page path and screen class from Rows.
  

#### Which secondary nav link gets the most clicks throughout the portal? Or, how many clicks does each secondary navigation link receive? Or, how many total clicks does the secondary navigation receive?

Add rows: 
- Link text

Add filters: 
- Page path and screen class begin with "/my-health"
- Datalayer event name exactly matches "nav-mhv-secondary"


#### Which secondary nav link on which page gets the most clicks? Or, where do users click the secondary nav the most?

Add rows: 
- Link text
- Page path and screen class

Add filters: 
- Page path and screen class begin with "/my-health"
- Datalayer event name exactly matches "nav-mhv-secondary"

Notes:
- This will create a report sorted by page-link combo with greatest number of clicks (Nested rows: No)
- Create a report sorted by secondary nav link text with most clicks by switching Nested rows to yes

#### What percent of users use secondary nav across the entire portal?

Use the report created just to find number of clicks on secondary nav throughout the portal. The total event count is the numerator for this metric.

The denominator, portal views, can be fetched with the following report. 

Add filters: 
- Page path and screen class begin with "/my-health"

#### How are users getting to the landing page?


#### What is the ratio of new versus returning users?


#### How many users chose to go back to the national portal? In which tools are users clicking to go back the most? 


**Nice to have** 


#### Segment based on first time try-ers vs. return users 


#### Are we seeing a change in health-related searches?


#### How many tools do users make use of in a single session?

