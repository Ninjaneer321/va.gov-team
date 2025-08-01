# Project outline: Forms Status on My VA MVP

**Last updated: June 2, 2025 - updated links for figma, added launch date range for pdf support**

This initative is a collabortion between the Authenticated Experience My VA team and the Veteran Facing Forms team.

### Communications & Resources

- **GitHub Label**: authenticated-exp; my-va-dashboard; forms-status
- **Slack channel**: veteran-facing-forms or accountexp-authexp
- **Development Epic**: [#81849](https://github.com/department-of-veterans-affairs/va.gov-team/issues/81849)
- **PDF Feature & All benefits intake api forms support Epic:**[#109605](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109605) - note, the original epic only offered support for some forms, this epic expands that capability to all forms that use the benefits intake API.
- **Collab Cycle Epic**: [#80272](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80272)
- **Veteran Facing Forms [outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Product/2024-05%20VFF%20and%20My%20VA%20Form%20Submission%20Research/Product%20Outline%20Confirmation.md)**


### Roles

[Please see the My VA product outline for the current My VA team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#roles).

### Table of Contents

- [Overview](#overview)
- [Problems](#problems)
- [Solution approach](#solution-approach)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Security](#security)
- [Measuring Success](#measuring-success)
- [Key deliverables](#key-deliverables)
- [Key Dates](#key-dates)
- [Screenshots](#screenshots)

## Overview

Over the past several months there have been issues with Veterans seemingly submitting a digital form or application and that form then failing to actually make its way into the VA processing system for review. This has been referred to as "silent failures" - the user receives no indication that an error occurred because the process and time between the user clicking submit on their form and the form actually travleling through the Benefits Intake API and making its way into Central Mail can be lengthy.

The Authenticated Experience My VA team is partnering with the Veteran Facing Forms team to address the challenges Veterans face in not knowing there is an error with their form. It is out of scope for our team to address problems with Central Mail.

This work in alignment with [OCTO-DE 2024 priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md) and supports Objective 1: Our digital experiences are the best way to access VA health care and benefits. This initiative is also in alignment with the [OCTO Benefits Portfolio prioritization framework](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705375308356/7e8c7aa4102f88511e577cf51f9092cc1f8bba8a?sender=u5423c3b2d59df3d2f5882779) by supporting category 2: Silent submission failure: _A Veteran believes an online transaction (form, evidence, etc.) has been successfully sent to VA, but it silently desappeared instead._ 

## Problems

There are three problems we are trying to solve for:

1. Forms that travel through the Benefits Intake API and into Central Mail can be accepted but don't always make it to the System of Record. When the form submission fails to reach the intended destination, the user is unaware and potentially under the assumption that their form submission is being worked on.
2. User expectations are not properly set such that they would know when to follow up with the VA if they have not received any status on their submission.
3. Forms not related to a claim or appeal that are saved "in progress" show up in draft status on My VA in the Benefit applications drafts section, but then are not shown to the user anywhere on VA.gov once that form is submitted. The next contact the user may get from the VA would be when the form was processed. Leaving a potentially long gap between submission and the next communication from the VA.

## Solution approach
There are two (potentially three) major components of work to address these problems:

1. Revising the form confirmation page for forms using the Benefits Intake API to convey to the user that their form submission is pending until it reaches the system of record (i.e. not fully received). -- _to be handled by the VFF team_
2. Conveying the current status, which we can obtain by polling the Benefits Intake API post-submission, to the user on My VA. -- _to be handled by Auth Exp My VA team_
3. TBD - updates to notifications via and in partnership with VA Notify so that updates are triggered to Veterans with these status changes as well.

### The MVP will target the following forms:
|Form ID| Form Title | Definition | What happens post submission?|
|---|----|----|---|
|21-4142 & 21-4142a (These are combined together)| Request Private Medical Facilities | Use this form if you want to give VA permission to request your medical records and information from non-VA sources to support your benefit claim.|  |
|21-0966 | Intent to file | Use this form if you plan to file a disability or pension claim. If you notify VA of your intent to file and they approve your claim, you may be able to get retroactive payments. Retroactive payments are payments for the time between when VA processed your intent to file and when VA approved your claim. An intent to file sets a potential start date (or effective date) for your benefits.|  |
| 21-10210 | Lay/witness Statement | Use this form to submit a formal statement to support your VA claim—or the claim of another Veteran or eligible family member. People also sometimes call this statement a “buddy statement.” | |
| 21-0845 | Authorization to Release third party information | Use this form if you want VA to release information from your VA records with a non-VA (third-party) individual or organization. This may include information about your VA claims or benefits. | |
| 21-0972 | Alternate Signer | Use this form if you’re signing a VA benefits application or related form on behalf of someone else. This form certifies you as an alternate signer for the Veteran or non-Veteran with a VA claim (also called the claimant).| |
| 21P-0847 | Request to be a substitute claimant | Use this form if someone you’re connected to dies before VA finishes processing their VA claim and you want to continue their claim.|
| 20-10207 | Priority Processing | Use this form to request that VA process your claim faster due to certain situations. One of these descriptions must be true: <br/>- You’re homeless or at risk of becoming homeless, **or** <br/>- You’re experiencing extreme financial hardship (such as loss of your job or a sudden decrease in income), **or** <br/>- You have ALS (amyotrophic lateral sclerosis), also known as Lou Gehrig’s disease, **or** <br/>- You have a terminal illness (a condition that can’t be treated), **or** -<br/>You have a Very Seriously Injured or Ill (VSI) or Seriously Injured or Ill (SI) status from the Defense Department (DOD) (this status means you have a disability from a military operation that will likely result in your discharge from the military),**or**or <br/>-You’re age 85 or older, or <br/>-You’re a former prisoner of war, **or** <br/>-You received the Medal of Honor or the Purple Heart award| |
| 20-10206 | Request personal records  | Use this form to request personal compensation, pension or benefit records | |


### **Functionality & Scope**

**My VA**
- Updated heading for the Benefit Applications section to "Benefit applications and forms"
- Status cards in Benefit applications and forms section on My VA for the following statuses: submission in progress, action needed, received
- Accordion component for "why don't you see your form"
- Download functionality on My VA (pending reusability from VFF work)
- Display logic: cards appear for 60 days and then disappear, user does not have dismiss capability
- Updated copy for submitted/pending confirmation notification; stretch goal to include new notification for error (dependpent on VA Notify scheduling)


**VFF**
- Updated confirmation page for the specific forms outlined for MVP (see above)

### **Out of Scope**
- Changes to Central Mail
- On My VA:
   - Changes to the Claims and Appeals section
   - Definitions of statuses
   - "what's next component"
   - "onsite notification" element at the top of the page (will pursue for post-mvp)


## User Outcomes

### Desired User Outcomes

- Veterans are more aware of the status of their forms after they have clicked "submit."

### Undesired User Outcomes
 
- Veterans are confused about the status of their forms before they are received for review and processing by VA.

## Business Outcomes

### Desired Business Outcomes

- Reduce silent submission failures, in alignment with the OCTO Benefits Portfolio Prioritization Framework.

### Undesired Business Outcomes

- Create more confusion around form status and failures/errors.

## Security
- Security playbook: [Forms Status security playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/launch-materials/forms-status-on-my-va-security-playbook.md)
- [System monitoring playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/auth-experience/playbooks/monitoring.md#system-monitoring-playbooks)


## Measuring Success
The primary goal of this MVP is to reduce silent submission failures in the form/application submission process.

## Key deliverables

- [Technical discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/technical-discovery.md)
- [Figma designs /](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2049-36392) [user flow](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=0-7641&p=f&t=o3kG1zB7BNF9SzFu-0)
- [Original Epic](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/forms-status-on-My-VA#project-outline-forms-status-on-my-va-mvp)
- [PDF Feature & All benefits intake api forms support Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109605) - note, the original epic only offered support for some forms, this epic expands that capability to all forms that use the benefits intake API.    

### Key Dates

- April 2024: Kick-off
- April 18, 2024: Design Intent
- May 21, 2024: Midpoint Review
- May 29, 2024: CAIA a11y Pilot
- June 2024: Usability Study
- September 24, 2024: QA
- October 4, 2024: Staging Review
- October 10, 2024: internal UAT
- October 17, 2024: Begin phased launch (25%)
- October 21, 2024: Launch to 100%
- June 2025: Enhance with PDF download capability 
   
## Screenshots

### Before
**Benefit Application Drafts section on My VA**
![Screenshot 2024-05-07 at 10 43 12 AM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/5a368769-c25a-4b25-b1eb-ed4ba9089f9d)

**VFF confirmation page**
TK

### After
**Benefit Applications and Forms section on My VA**

<img width="360" alt="Screenshot 2024-10-29 at 10 08 16 AM" src="https://github.com/user-attachments/assets/cf862267-88f5-48fc-87df-a0b8f303fac2">


**VFF confirmation page**

<img width="400" alt="Screenshot 2024-11-03 at 8 52 55 PM" src="https://github.com/user-attachments/assets/13dd727a-a96b-46e7-83e5-2c860af0a86f">

