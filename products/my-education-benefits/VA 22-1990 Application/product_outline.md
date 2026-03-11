
# Rudisill - VA Form 22-1990 Update to Include Multiple Benefit Eligibility
---

## Overview

The My Education Benefits team is looking to streamline the Veteran experience further by expanding the capability of the 22-1990 online education application. Updated functionality will allow beneficiaries who may be eligible for multiple benefits to be informed of their eligibility details in real time and apply for them online. 

## Problem Statement

Education benefits can be hard to navigate for the Veteran population due to stipulations of eligibility criteria and changes in their circumstances or service information; this becomes more complicated when legislation changes impact eligibility criteria. The Rudisill court decision has had a major impact on a Veteran's eligibility by allowing them to receive eligibiity under multiple benefits. Eligible Veterans need an easy and accessible way to view their eligibility translated to GI Bill benefits in real time and be able to apply for them.  
 
## Desired User Outcomes

- Veterans eligible for multiple benefits will have the same application options as Veterans who are eligible for a single benefit, by expanding the existing claims application approval process and UI application.
- Veterans will be able to maximize the benefits they are entitled to through this application.
- Veterans will be able to easily understand and make a decision about their GI Bill benefits that best fits their circumstances and education goals.

## Undesired User Outcomes

- Veterans may have a maximum of 6 eligibility options to choose from which has the potential to cause fatigue and increased mental load when applying for benefits.

## Desired Business Outcomes

- The updated application flow aims to help Veterans easily understand their eligibility options, provide a recommendation (that both aligns with their goals and maximizes their entitlement), and in some cases gives the Veteran an immediate decision. Ultimately, streamlining the Veteran education application experience. 

   
## Undesired Business Outcomes

- Users may have increased fatigue when applying due to the potential maximum number of eligibility options.
  - Business logic will be well considered to ensure we providing the best recommendation for users. We will provide clear instruction and clear descriptions so that users have the neccessary information to choose the best eligibility option.

---

## Assumptions

The following assumptions have been made when creating our solution:
- Users have some understanding of the education application they are using and the benefits they are intending to apply for.
- Users have an existing VA.gov or Login.gov account and have authenticated, allowing us to calculcate their eligibilty options from their service history.


## Solution Approach

- We've updated the functionality for an existing application to account for Veterans who may be eligible for multiple benefits. By iterating on an existing flow, we can leverage:
  - The existing UI to reduce the development time
  - The existing entry points to the form
  - The existing claim adjudication logic to give users an instant decision, when applicable, reducing wait times and ultimately streamlining the application process

- We have developed a solution that:
  - Presents information we have on file back to the Veteran, to build their trust in the form
  - Prefills contact information and direct deposit information, if it exists in Veteran's VA profile, to reduce fatigue
  - Asks questions about the Veteran's education goals, that will inform the recommended eligibility option 
  - Provide a recommended eligibility option, to help guide Veterans in their decision making and reduce mental fatigue
  - Clearly displays eligibility options and provides a comparison table in another window to help digest and understand the trade-offs between options

### Supporting research
   
- The Rudisill court decision impacts past, current, and future GI Bill beneficiaries. The HCD team conducted user research for the [Dual Benefit Eligibility Tool](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/1334#issuecomment-3382801010) with an intended goal of understanding how Veterans interact with a tool, designed for past beneficiaries, that givees them the opportunity to reverse their previous relinquishment and customize their remaining service days for additional GI Bill benefits. Findings related to Veteran's understanding of Rudisill, common education benefit terminology, and education goals were leveraged when updating the 22-1990 form flow.

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

[Rudisill VA Form 22-1990 Updates - Desktop.pdf.zip](https://github.com/user-attachments/files/25920432/Rudisill.VA.Form.22-1990.Updates.-.Desktop.pdf.zip)



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
