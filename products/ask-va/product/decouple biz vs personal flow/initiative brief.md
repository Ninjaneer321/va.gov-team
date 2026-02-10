# Ask VA: Initiative Brief for Decoupling Business vs. Personal Form Flows
This document provides an overview of the Ask VA initiative to implement a new **Business vs. Personal Form Flow**. (language may be updated following discussions with CAIA)

To view **Ask VA's Product Outline** go here, [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Product%20outline.md).

| Initiative Start Date | Initiative Launch Date | CC Kick-off Submission Date |
|----------|----------|----------|
| 2025 | TBD | TBD/Feb2026 |

**Jump to:**
- [Overview](#overview)
- [Problem statement](#problem-statement)
- [Outcomes](#Outcomes)
- [Measuring success](#measuring-success)
- [Release plan](#release-plan)
- [Team and VA partners](#team-and-va-partners)

## Overview
Ask VA users submit questions about VA benefits and services at, [Ask VA](https://www.va.gov/contact-us/ask-va/introduction).

In 2025 the Ask VA team executed a [Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/design/User%20research/2025-10%20Form%20and%20Inbox%20Usability%20Study). 
Key findings support implementing enhancements to the current form flow to distiguish entry points (CTAs) between Ask VA personal users and Ask VA business users.

We are currently distinguishing between personal and business users with the following language in our design mocks.  Ask VA team has been advised by CAIA that content review and guidance will be provided during the collaboaration cycle.
<img width="925" height="897" alt="image" src="https://github.com/user-attachments/assets/ca587c06-3a7d-44f8-be04-062b9eb270bc" />


Current Figma designs, https://www.figma.com/design/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Future-exploration?node-id=2033-121709&t=MIbYsLljnUqjPvqP-4

## Problem statement
**Background**

Ask VA users are interanlly classified by two distinct personas, using Ask VA as a personal user or a business user/veteran liaison.  The current user experience does not promote an obvious distinction between these two users and offers categories and topics that are not relevant for the different user types.  The existing UI experience leads to user confusion on how to complete the form to submit a question.   Additionally, because the two user types are entangled throughout the existing experience there is back end code complexity that should be reduced.

|User Type|Primary Issues|
|:---|:---|
|Personal User|Category and topic lists offer selection reassurance to this user, but the amount of current options causes overload to the user.|
|Business User|Category and topic lists are burdonsome because this user repeats the same selection(s) when using Ask VA.|
|Business User|Current required fields are not neccessary for this user to submit inquiries (i.e. - subject field), forcing additional and duplicative data entry which reduces the user's workflow efficiency.|

**End State Solution**

Decouple the existing form flow into two distinct personal and business user form flows.  Implement a business user form flow tailored to business user needs with focus on minimizing repetative data entry.  Implement a personal user form flow tailored to personal user needs with focus on user experience assurance while reducing category and topic lists overload.

## Outcomes
- **User Experience Outcomes**: Users have a more personalized experience to submit their questions and an easy interaction with the Ask VA application so that they can submit inquiries more effieciently.
-  **Functional Outcomes**:  Ask VA application enhanced experience is easily adoptable to the different user types, personal user and business user.
- **Business Outcomes**: Improved form usablility and increase of inquiry submission completion. `what are we tracking in DD now as it relates to users falling off the form and where?`

  ## stephanie updating outcomes, previous updates lost while GH issues were happeneing ##

### User Experience Outcomes
|Outcome|Description|
|:---|:---|
|Personalized Experience|Users can easily and quickly submit their questions with an experience that is tailored to being a personal user or a business user.|

### Functional Outcomes
|Outcome|Description|
|:---|:---|
|Ask VA application enhancements are adoptable |User adoption to personal vs. business entry points is intuitive and functional|

### Business Outcomes
|Outcome|Description|
|:---|:---|
|Improved form usability|Decreased abandon rate while completing Ask VA question.|need to understand this better `what are we tracking in DD now as it relates to users falling off the form and where?`
|Improved user satisfaction|Users are more satisfied with Ask VA.|
|Improved trust in VA|Users trust VA and VA services more.|

## Measuring success
Objectives and Key results (OKRs) help us measure success of specific targeted objectives for a specific initiative or time period. 

This initiative aligns with the following 2025 OCTO OKRs: 
- Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.
   - Key result 1 (Satisfaction): Improve satisfaction with our web and mobile products by 5 points.
 
## Quantitative Monitoring
|Key result|Baseline (ask.va.gov)|After X months|
|:---|:---|:---|
|Satisfaction|January 2025: 23%|x|

## Qualitative Monitoring
|Key result|Baseline (ask.va.gov)|After X months|
|:---|:---|:---|
|Increase of positive qualitative feedback|Dec 25 - 7% |x|

## Release plan (to be determined)
[input release plan]

## Ask VA Team and VA Partners
### Ask VA Team
|Role|Assigned|Contact|
|:---|:---|:---|
|Product Owner (OCTO)|Becky Phung|becky.phung@va.gov|
|Delivery Lead|Megan Salerno|megan.salerno@va.gov|
|Product Manager|Stephanie Vargo|stephanie.vargo@va.gov|
|Technical Lead|Jerek Shoemaker|jerek.shoemaker@va.gov|
|AI Lead/Engineer|Matt Floyd|matthew.floyd@va.gov|
|Frontend Engineer|Walker Marlatt|walker.marlatt@va.gov|
|Backend Engineer|Alex Castillo|alex.castillo2@va.gov|
|UX Research Lead|Elena Naids|elena.naids@va.gov|
|UX Design Lead|Danielle Oppendike|danielle.oppendike@va.gov|

### VA Partners
|Role|Assigned|Contact|
|:---|:---|:---|
|Product Owner (VES, AVA CRM)|Natalie Morales|natalie.morales@va.gov|
|Project Executive Sponsor(VEO)|Kathleen Reavy|kathleen.reavy@va.gov|
|Product Owner(VEO)|Jaime Rocha|jaime.rocha@va.gov|
