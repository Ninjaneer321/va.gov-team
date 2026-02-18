# Ask VA: AI/ML Predictive Category Model Initiative	
This doc gives an overview of the **AI/ML Predictive Category Model** Ask VA initiative. View Ask VA's product outline [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Product%20outline.md).

- Previous contract team ideation, discovery/research and findings start date: July 2024
- Implement Category Model Phase 1 of 3, Launch date: May 2026

**Jump to:**
- [Overview](#overview)
- [Problem statement](#problem-statement)
- [Outcomes](#Outcomes)
- [Measuring success](#measuring-success)
- [Release plan](#release)
- [Team and VA partners](#team-and-partners)
- [Supporting Documentation](#supporting-documentation)

## Overview
Submitters have to answer many more questions in the Ask VA form than the typical contact form. We have identified an opportunity to use an AI/NLP data model to accurately predict the correct queue given question text and other variables that determine queue routing.

As a first step to test if the model is successful, we could present predicted Category to the submitter. The submitter can then simply review the prefilled information rather than answer these questions. Answers to these questions currently determine routing of the inquiry.

Originally, we thought this could also improve resolution time. After conducting an [analysis on queue and resolution time](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/prefill-nlp%20June%202025/Queue%20analysis.md), we determined that an AI model that returns an Ask VA queue given question text would likely only minimally impacts resolution time.

## Problem statement
**Background**: Only 1/3 of Veterans, family members, and other people with questions for VA who visit the current Ask VA landing page, [Ask VA](https://www.va.gov/contact-us/ask-va/introduction) end up completing the support request. User research has identified form burden as a barrier for Veterans to receiving answers to their inquiries. To expediently get Veterans the healthcare & benefits answers they deserve, VA is simplifying the process. 

**Solution**: We'll reduce unnecessary Veteran inputs by auto-classifying the categories, topics, and subtopics needed to route Veteran inquiries to the right place. This is expected to improve satisfaction and reduce friction in the direct healthcare and benefits process.

## Outcomes
- **User experience outcomes**: Ensure users have an easy and accessible interaction with Ask VA.
- **Functional outcomes**: Ensure the system operates correctly and efficiently with Ask VA.
- **Business outcomes**: Ensures increased efficiency for VA customer support. 

### User experience outcomes
|Outcome|Description|
|:---|:---|
|Quick to complete|Users complete the form quicker because they don't have to review long lists of topics.|
|Clear instructions and information|Users understand how the information was prefilled and what to do next.|

### Functional outcomes
|Outcome|Description|
|:---|:---|
|Form submission (CRM integration)|All form submissions are correctly routed and include the user's selected topic from the data model.|
|Successful integrations with data model|Ask VA receives a predicted topic(s) from the data model without a long load time.|

### Business outcomes
|Outcome|Description|
|:---|:---|
|Improved customer support efficiency|Current topic lists remain the same for agents, while users can get a better experience through reviewing predicted topic(s).|
|Improved user satisfaction|Users are more satisfied with Ask VA.|
|Improved trust in VA|Users trust VA and VA services more.|

## Measuring success
Objectives and Key results (OKRs) help us measure success of specific targeted objectives for a specific initiative or time period. 

This initiative aligns with the following 2025 OCTO OKRs: 
- Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.
   - Key result 1 (Satisfaction): Improve satisfaction with our web and mobile products by 5 points.

It also includes these OKRs: 
- Objective: Users complete the form more easily
   - Key result (Form completion rate): Increase the percentage of successfully sent questions by 5 points
   - Key result (Time to submit form): Decrease time it takes to submit the form by X
- Objective: Data model predicts topic accurately
   - Key result: Develop data model that predicts topics accurately at 80%
- Objective: Frontend communicates with data model
   - Key result: Low latency on the form page(s) that loads the data model's topic response
	
|Key result|Ask VA Baseline|After X months|
|:---|:---|:---|
|Satisfaction|Jan 26: 31%|x|
|Form completion rate Average|May 25 to Jan 26: 26% |x|
|Time to submit form|x|x|

## Release 

### Planned Milestones

|Phase|Phase Title|User Facing|Collaboration Cycle Kickoff Ticket|Launch Date|
|:---|:---|:---|:---|:---|
|Phase 1|[Implement the Category Model #2076](https://github.com/department-of-veterans-affairs/ask-va/issues/2076)|No||May 2026|
|Phase 2|[Personal Inquiry Topic Classification Pilot #2090](https://github.com/department-of-veterans-affairs/ask-va/issues/2090)|Yes||TBD|
|Phase 3|Release to a percentage of users as an alternative flow and assess metrics - iterative|Yes|N/A|TBD|

### Completion Status
|Date|Release|Type|Description|
|:---|:---|:---|:---|
|||||

## Team and partners
### Our team
|Role|Assigned|Contact|
|:---|:---|:---|
|Product Owner (OCTO), Designer|Becky Phung|becky.phung@va.gov|
|Product Manager|Stephanie Vargo|stephanie.vargo@va.gov|
|Technical Lead|Jerek Shoemaker|jerek.shoemaker@va.gov|
|AI Lead|Matt Floyd|matthew.floyd@va.gov|
|Design Lead|Danielle Oppendike|danielle.oppendike@va.gov|
|Research Lead|Elena Naids|elena.naids@va.gov|

### VA Partners
|Role|Assigned|Contact|
|:---|:---|:---|
|Product Owner (VES, AVA CRM)|Natalie Morales|natalie.morales@va.gov|
|Project Executive Sponsor (VEO)|Kathleen Reavy|kathleen.reavy@va.gov|
|Product Owner (VEO)|Jaime Rocha|jaime.rocha@va.gov|
|Data/AI Digital Corps Fellow|Lylybell Teran|lylybell.teran@va.gov

