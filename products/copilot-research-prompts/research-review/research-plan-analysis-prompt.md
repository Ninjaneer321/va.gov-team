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

# Research Plan Analysis Prompt Template

## Overview
This document provides a reusable GitHub Copilot prompt template for analyzing completed research plans. Its purpose is to guide researchers in evaluating each section of the plan, identifying strengths, gaps, and opportunities for improvement. By using this prompt, researchers can ensure their studies are robust, aligned with objectives, and set up for actionable insights.

## How to Use This Template
Follow these steps to use the reusable prompt effectively:

1. **Complete the Research Plan**: Ensure all sections of the research plan template are filled in with the necessary information.
2. **Open Copilot Chat**: Use GitHub Copilot to assist with analysis.
3. **Copy and Paste the Prompt**: Copy the reusable prompt (provided below) into the Copilot chat.
4. **Analyze Each Section**: Work through each section of the research plan, using the questions in the prompt to guide your analysis. Provide detailed and thoughtful responses.
5. **Iterate as Needed**: Use the insights from Copilot to refine your research plan and address any gaps or misalignments.

---

## Reusable Copilot Prompt Template

```
Follow the below instructions. Only check the codebase on the master branch of the va.gov-team repository. If a referenced hyperlink does not contain a path on the master branch of the va.gov-team repository, do not include it, but do try to find and include the correct path.

#### **1. Background Analysis**
* "Summarize the problem this product is trying to solve. Highlight any assumptions or gaps that might need further exploration."
* "Identify where the product is situated on VA.gov and discuss why this placement is suitable or not."
* "Evaluate the familiarity of Veterans with this tool. Are there potential challenges in adoption based on its novelty or iteration?"
* "Review the linked product brief and summarize the key takeaways for this research."

#### **2. OCTO-DE Priorities Alignment**
* "Analyze how this research aligns with the specified OCTO priorities. Are there any areas of misalignment or missed opportunities?"
* "Evaluate the relevance of each key result to the research goals. Suggest ways to strengthen alignment if needed."

#### **3. Research Goals and Outcomes**
* "Assess the clarity and focus of the stated research goals. Are they specific, measurable, and achievable?"
* "Evaluate the proposed outcome: How will the research advance the product? Are there additional outcomes that should be considered?"

#### **4. Research Questions**
* "Examine the research questions and their alignment with the stated goals. Are they actionable and likely to yield meaningful insights?"
* "Suggest additional or alternative questions to address potential gaps in the study."

#### **5. Hypotheses**
* "Analyze the hypotheses for clarity and relevance to the study goals. Are they grounded in prior knowledge and assumptions?"
* "Identify any biases that might be inherent in the hypotheses and suggest ways to mitigate them."

#### **6. Methodology**
* "Evaluate the appropriateness of the chosen methodology for the research goals and design maturity."
* "Suggest alternative or complementary methods if there are gaps or limitations in the proposed approach."

#### **7. Recruitment Criteria**
* "Analyze the recruitment approach and criteria. Are they inclusive and aligned with the study's objectives?"
* "Ensure the total number of requested participants is 1.5x the number of ideal completed sessions."
* "Evaluate the balance between primary and secondary criteria. Are there opportunities to simplify or expand the criteria to improve participation?"

#### **8. Timeline Feasibility**
* "Assess the proposed research timeline. Are the preparation, session lengths, and buffer times realistic?"
* "Ensure the number of available time slots is at least 2x the total number of requested participants."
* "Identify potential risks or challenges in meeting the timeline and suggest mitigations."

#### **9. Reference Past Research**
* "Search the [products folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products) for any past research findings that could bolster this research plan’s goals, hypotheses, and questions."
* "For each relevant past research finding, include a hyperlink to the referenced document so the researcher can review and assess its appropriateness for their plan."
* "Summarize how each referenced finding could inform or strengthen this research plan."

#### **General Prompt for Final Analysis**
* "Based on the completed research plan, synthesize the key strengths, potential risks, and areas requiring additional attention. Provide actionable recommendations to enhance the study’s design and impact."
```
---

## Notes
This prompt template is designed to be comprehensive yet flexible. Researchers should adapt it to the specifics of their study, focusing on the most relevant sections and questions. By using this tool, you can ensure a thorough evaluation of your research plan, leading to more effective and impactful studies.
