
# Rudisill Reconciliation - Dual Benefit Eligibility Tool Product Outline
---

## Overview

Streamlining the Veteran experience by expanding the capability of the My Education Benefits VA 22-1990 online education application to allow beneficiaries who may be eligible for multiple benefits to be informed of their eligibility details in real time and apply for them online. 

## Problem Statement

Education benefits can be hard to navigate for the Veteran population due to the variation of their circumstances; this can become more complicated when legislation changes impact eligibility criteria. Veterans who may be eligible for multiple benefits due to the Rudisill court decision, should be able to apply for the benefits they are entited to in a streamlined and accessible way. 

and may bthe existing 22-1990 online application will be updated to calculate a beneficiaries eligibility (using their profile and service data) to inform them of their potential eligibility options and apply for them within the same application flow. developed to help Veterans maximize the education benefits they are entitled to. 
 
## Desired User Outcomes

- Veterans eligible for multiple benefits will have the same application options as Veterans who are eligible for a single benefit, by expanding the existing claims application approval process and UI application.
- Veterans will be able to maximize the benefits they are entitled to through this application.


## Undesired User Outcomes

- Veterans may have a maximum of 6 eligibility options to choose from which has the potential to cause fatigue and the wrong decision when applying for benefits.

## Desired Business Outcomes

- The updated application flow aims to help Veterans understand their eligibility options, provide a recommendation to help Veterans maximize their education benefits, and give them an immediate decision streamlining the Veteran education application experience. 

   
## Undesired Business Outcomes

- Users may choose an eligibility option that does not meet their education goals.
  - Business logic will be well considered to ensure we providing the best recommendation for users. We will provide clear instruction and descriptions such that users have the neccessary to choose the best eligibility option for themselves.

---

## Assumptions

The following assumptions have been made when creating our solution:
- Users have some understanding of the education application they are using and the benefits they are intending to apply for
- Users have an existing VA.gov or Login.gov account and have authenticated, allowing us to calculcate their eligibilty options from their service history.


## Solution Approach

- We've updated the functionality for an existing application to account for Veterans who may be eligible for multiple benefits. By iterating on an existing flow, we can leverage:
  - The existing UI to reduce the development time
  - The existing entry points to the form, reducing fatigue for users
  - The existing claim adjudication logic to give users an instant decision, when applicable, reducing wait times and ultimately streamlining the application process

- We have developed a solution that:
  - Presents information we have on file for the user to them, to build their trust in the tool
  - Prefills their contact information and direct deposit information, if it is in their VA profile to reduce fatigue
  - Asks questions about their education goals, that will inform the recommended eligibility option we'll provide to them
  - Provide them with a recommended eligibility option, to help guide users in their decision making and reduce mental fatigue
  - Clearly displays eligibility options and provides a comparison table in another window to help digest and understand the trade-offs between options
  - Asks questions to gather further information about the user's goals, to better inform the recommendation we'll provide

### Supporting research
   
- N/A

--- 

## Launch Strategy
- Updates to the application instructions page

## Launch Dates
- *Target Launch Date*
  - TBD
- *Actual Launch Date* 
  - TBD
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - TBD

---
   
## Screenshots
[Rudisill - Mobile.zip](https://github.com/user-attachments/files/25695974/Rudisill.-.Mobile.zip)



---

#### Team Members

<details>

- Team Name: My Education Benefits 
- Slack channel: #my-education-benefits
- Product POCs:
  - Joanna Yu (joanna.yu@afs.com)
  - Allison Nguyen (allison.nguyen@afs.com)
  - Ryan Grueninger (ryan.grueninger@afs.com)
  - Alex Douglas (alexandra.douglas@afs.com)

</details>
