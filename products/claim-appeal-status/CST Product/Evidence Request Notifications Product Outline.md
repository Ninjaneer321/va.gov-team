# Evidence Request Notifications Product Outline

---

## Overview
During the benefit claim development, VA may request the Veteran to provide additional evidence in support of their claim. Currently, a Veteran may learn about an evidence request by:

1. periodically checking the Claim Status Tool on VA.gov and in the VA mobile app for new evidence requests, or
2. reviewing the claim letter when it arrives by mail

It can take several days or even over a week before Veterans learn about these evidence requests, since they're not notified immediately when the request is made.

It is also important to note that when VA requests additional information (evidence) from a Veteran to support their claim, VA suspends processing for ~30 days, waiting to receive the requested evidence.

The sooner a Veteran learns of an evidence request(s), the sooner they can gather the requested information and submit it to VA, and the sooner VA can make a decision on their claim, potentially reducing the Average Days to Complete (ADC) by weeks per claim.

## Problem Statement
Currently, Veterans are not promptly notified when the VA requests additional evidence for their benefits claims, relying instead on manual checking their account or receiving mailed notifications that can take days or over a week to arrive. This delay slows the Veterans ability to respond evidence requests, while the VA pauses claim processing for approximately 30 days awaiting the requested information. As a result, avoidable notification gaps contribute to longer claim resolution times and increased Average Days to Complete (ADC). In some cases, missed evidence request responses may also result in Veterans receiving lower benefit determinations than they may otherwise be entitled to.
 
## User stories
- As a Veteran, I want to be notified immediately when the VA requests additional evidence so that I can take action as soon as possible
- As a Veteran, I want to receive notifications through my preferred channel (SMS, email, or push) so that I don’t miss important updates

Development of notifications should be prioritized by reach / impact as follows:
1. Email
2. Mobile Push Notifications
3. SMS

### User Stories - Stretch Goals
- As a Veteran, I want to control how often and through which channels I receive notifications so that they fit my preferences
- As a Veteran, I want to receive Evidence Request reminders if I haven’t responded yet so that I don’t forget to submit required evidence

### Desired User Outcomes
- Veterans are immediately aware when additional evidence is requested for their claim
- Veterans can respond to evidence requests quickly and confidently
- Veterans experience reduced anxiety and uncertainty during the claims process
- Veterans submit required evidence within the requested timeframe
- Veterans receive claim decisions faster
- Veterans maximize the benefits they are eligible for by providing complete evidence
- Veterans feel informed, supported, and in control of their claims process


### Undesired User Outcomes
- Veterans feel overwhelmed or stressed by frequent or poorly timed notifications
- Veterans ignore or opt out of notifications due to perceived noise or lack of relevance
- Veterans experience accessibility barriers (e.g., unclear messaging, channel limitations)
- Veterans lose trust if notifications are inaccurate, delayed, or duplicated
- Veterans are suspicious of notifications (perceived as phishing attempts)
  
### Desired Business Outcomes
- The % of Veterans responding to a first-party evidence request within a week increases by x% percentage points (as of August 2025: ~20% of Veterans respond to first-party requests within a week)
- We see a reduction in ADC for disability claims
- Reduced Average Days to Complete (ADC) for claims
- Fewer claims stalled due to missing or delayed evidence
- Improved claim processing efficiency and throughput
- Reduced need for follow-up outreach or duplicate requests
- Improved accuracy and completeness of claim decisions
- Reduced rework, appeals, and supplemental claims due to incomplete evidence
- Higher Veteran satisfaction and trust in the claims process
- Lower administrative burden associated with manual status checks and inquiries


### Undesired Business Outcomes
- Increased notification volume leads to alert fatigue, reducing effectiveness
- Higher inbound support volume due to confusion or unclear instructions
- No meaningful reduction in ADC despite increased communication (i.e., noise without impact)
- Additional operational burden to manage notification systems without ROI
- Increased equity gaps if certain Veteran populations are less able to receive/respond to notifications
- Risk of eroding trust if notifications are inaccurate, delayed, or perceived as spam

---
## Technical Dependencies for Evidence Request Notifications as of 4/2/2026
At a high level, these are the technical dependencies for Evidence Request Notifications (in order from upstream → downstream):

* BIP / BEP / BGS → The Benefits Integration Events team would create a custom event from their system triggered by the availability of a development letter containing one or more evidence requests.
* EventBus / EventBusGateway → The EventBus team would define a new Kafka event and topic to integrate with the new evidence request events
* EventBusGateway → Benefits Management Tools team would add a consumer for the new event, and map the events to new VA Notify templates per channel (email/push/SMS)
* Vets-api → Benefits Management Tools team would extend the LetterReadyNotification infrastructure to deliver the new evidence request notifications to the Veterans via calls to VA Notify

See this [flow diagram] (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/event-bus-notify/Data%20Flow%20Diagram.md) for decision letter emails as a basic model for these new downstream events

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
- *Does your solution include the VA Health and Benefits mobile application? Explain why or why not.*

### Supporting research

- *Is this work supported by user research?* 
  - *If this work **is supported by user research**, please cite the user research by providing links to our [VA.gov research repo](https://github.com/department-of-veterans-affairs/va.gov-research-repository)*
  - *If this work is **not supported by existing user research**, will this work include user research?*
    - *If this work **will include user research**, please briefly state what you hope to learn from that research.*
    - *If this work **does not cite nor include user research**, please state why and be prepared to defend your decision.*

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions
- For SMS we were assigned one number for all benefit notifications. When applying for the number we advocated for 2 or 3 numbers. Here is the [document](https://docs.google.com/document/d/1W7owSE-URAhX9hjI0oPKNPeoq7Y7XzGuwKtU_QjAgKw/edit?usp=sharing) we put to gether explaining the use cases for each number and reasoning for the multiple numbers
- We are only going to send an initial email notification for now and we will consider sending reminders later.
- We are not including the alternative link to copy and paste, just including the universal link to keep the email simple and reduce confusion. If we do decide to include the copy and paste option, here are[ exploratory designs](https://www.figma.com/design/db26JCYXJtaakOdG4TiNXN/Notifications-BMT?node-id=4025-11098&t=r1FXtPxmVxeeiM4i-11).
- We are omitting a due date because multiple possible dates could confuse veterans about when their evidence is actually due. However, since the research identified the lack of a clear deadline as the biggest gap, and without one, veterans may deprioritize action, we should explore other ways to effectively communicate urgency.
- We can’t have “Action needed” in the subject line because the guidance says: If it’s a post-submission failure notification (part of the zero silent failures initiative), start the subject line with “Action needed”. [Content guide](https://design.va.gov/content-style-guide/email-and-text-notifications)

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: 
 - Engineering:
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
