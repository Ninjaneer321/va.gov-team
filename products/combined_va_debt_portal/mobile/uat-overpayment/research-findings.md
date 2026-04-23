---
title: "Debt Portal: Overpayments in mobile app UAT Research Findings"
product: "Overpayments in mobile app"
team: "Mobile Feature Support"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2026-04-22"
researchers:
  - "Emily DeWan - UX Researcher"
  - "Natasha Huckleberry - UX Desginer"
research_goals:
  - "We were aiming to confirm whether the Overpayments functionality is fully ready for production release. With all success criteria met, we will proceed with launch and communicate readiness to stakeholders."
  - "The purpose of this User Acceptance Testing (UAT) study was to verify that all elements of the Overpayments functionality operate as intended for Veterans using real data."
  - "Specifically, this study validated that Veterans can successfully view, manage, and resolve overpayments using the app, meeting all criteria outlined in the defined user paths."
methodology:
  - "moderated remote User Acceptance Testing (UAT) sessions with Veterans"
devices_used:
  desktop: 0
  tablet: 0
  smartphone: 6
  assistive_technology: 0
participants_total: 6
demographics:
  veterans: 6
  service_members: 0
  caregivers: 0
  family_members: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 0
    "35-44": 3
    "45-54": 0
    "55-64": 2
    "65+": 0
    unknown: 1
  education:
    high_school: 1
    some_college: 0
    associates: 0
    bachelors: 2
    masters: 3
    doctorate: 0
    unknown: 0
  location:
    urban: "unknown"
    rural: "unknown"
    unknown: "unknown"
  race:
    white: 4
    black: 2
    hispanic: 0
    biracial: 0
    asian: 0
    native: 0
  disability:
    cognitive: "unknown"
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "The Overpayments feature is ready for release; all functional test paths passed with 100% success using live participant data."
  - "UAT Issue (Bug): Copy/paste adds an extra “$” when transitioning to pay.va.gov"
  - "UAT Issue (Bug): Spacing issue on details page."
recommendations:
  - 'On the "Pay online" screen, remove the dollar sign from the copied text for the balance.'
  - 'Reorder the details on the "Pay online" screen to match the sequence of fields on pay.va.gov.'
  - "Provide information on the original cause of the overpayment."
  - "Clearly communicate the specifics of benefit reductions and repayment plans, including when and by how much."
  - "Consolidate overpayment-related communications and actions so Veterans can see the full story in one place (across VA.gov and the mobile app)."
kpi_alignment:
  - "Total number of views and overall app volume"
  - "Total number of clicks on \"Make a Payment\" and external VA.gov links"
  - "Total number of error alerts shown to the user"
  - "Total number of clicks on \"Copy\" buttons"
  - "Total number of clicks on empty states"
outcomes:
  user: "Veterans want to easily view and manage their benefit overpayments in the app to understand what they owe and why."
  business: "Increase debt visibility via the mobile app to ensure Veterans are aware of money owed and can take immediate action."
opportunity_areas:
  - "n/a"
further_research_needed:
  - "Veterans with multiple overpayments: Recruitment did not yield participants with more than one active debt. Further observation is needed to ensure the list and detail views remain clear and manageable for users with a high volume of concurrent overpayments."
  - "Wider variety of overpayment types: While the app supports various debt categories, testing was limited to the specific debts held by the recruited participants. Further validation is needed for Veterans with other supported debt types to ensure consistent understanding of terminology. One Veteran had education overpayments, and the remaining five had disability overpayments."
  - "Error state interactions: Because all participants successfully completed their tasks with 100% accuracy, we were unable to observe how Veterans respond to system-generated error messages or \"service down\" alerts."
  - "Broader demographic representation: The findings are based on a small UAT sample; future studies could target specific demographics not represented in this round to ensure the feature meets the needs of the entire Veteran population."
underserved_groups_missing:
  - "Cognitive Disability"
  - "Rural"
  - "No degree"
  - "Other than honorable"
  - "Immigrant origin"
  - "Expat (living abroad)"
  - "Hispanic, Latino, or Spanish origin"
  - "Biracial"
  - "Asian"
  - "Native Hawaiian or other Pacific Islander"
  - "First Nations (Canada)"
  - "Native, American Indian or Alaska Native"
  - "Gay, lesbian, or bisexual"
  - "Transgender"
  - "Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman"
secondary_research:
  - "Previous Study: Mobile App Debt Portal: Overpayments and Copayments Research Findings, September 2025 (link mentioned in report)"
synthesis_tools_used:
  - "spreadsheets"
tags:
  - "AUD: Veterans"
  - "BNFT: Finances"
  - "PRDT: Debt-portal"
  - "HDW: Smartphone"
  - "DSP: Content Presentation"
  - "DSP: Contextual Help"
  - "DSC: Links"
  - "DSC: Accordions"
  - "user-acceptance-test"
  - "UAT"
  - "evaluative"
---


# Debt Portal: Overpayments in mobile app UAT Research Findings

**Office of the CTO - Digital Experience (OCTO-DE), Mobile app Overpayments, Mobile Feature Support**

**Date:** 04/22/2026

**Contacts:** Emily DeWan - UX Researcher, Natasha Huckleberry - UX Desginer
<!-----
**[Research Readout (PDF)](link-here)**  🚧
*Add a link to your research readout deck, if available.*
----->

**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations and Next Steps](#user-content-recommendations-and-next-steps)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)


## Research Goals

This touches a few areas of the Veteran's journey where managing debt is involved.
[See the Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)  

- `Starting Up (Moment: Balancing Finances)`
- `Putting Down Roots (Moment: Maintaining my financial, social, and emotional health)`

We were aiming to confirm whether the Overpayments functionality is fully ready for production release. With all success criteria met, we will proceed with launch and communicate readiness to stakeholders. 

The purpose of this User Acceptance Testing (UAT) study was to verify that all elements of the Overpayments functionality operate as intended for Veterans using real data. Unlike usability testing, UAT focuses on confirming that features work as expected, rather than on users’ ability to find or discover them.

Specifically, this study validated that Veterans can successfully view, manage, and resolve overpayments using the app, meeting all criteria outlined in the defined user paths.

## Test paths and success criteria

<details>
<summary>Click to view UAT Success Criteria Table</summary>

| Category | Screen | Activity | Success |
|:---|:---|:---|:---|
| Elements on home | Home | See the number of overpayments on home screen | Activity card "Overpayments" shows "n overpayments" where "n" is the quantity of current overpayment debts |
|  |  | Tap "Overpayments" card | "Overpayments" card opens overpayment list view |
| Breadcrumbs | Overpayments list | Tap breadcrumb: Payments | Breadcrumb returns to Payments |
| Elements on Payments | Payments tab | Locate all payment information | "Overpayments" card lists total amount due and total quantity of debts |
|  |  | Tap "Overpayments" card | "Overpayments" card opens overpayment list view |
| Elements on list view | Overpay list | Review card of each overpayment | Each debt card shows:<br>• name of debt<br>• current balance<br>• message |
| Elements on list view | Overpay list | Help menu from list screen | Help menu opens via drawer |
|  |  |  | Help menu displays <br>• instructions for calling Debt Management Center<br>• 3 phones numbers<br>• link to Ask VA |
|  |  | Links on help screen | Three phone numbers |
|  |  |  | "Go to Ask VA" opens in browser |
|  |  |  | Help menu is closed via "close" CTA |
| Resolve from list view | Overpay list | Activate Resolve overpayment menu from list screen | Four menu options:<br>• Make a payment<br>• Request help<br>• Dispute overpayment<br>• Cancel |
|  |  |  | "Cancel" closes menu |
| Resolve from list view : Make a payment | Overpay list | Resolve overpayment: select Make a Payment | "Make a payment" from "Resolve overpayment" opens "Pay online" screen |
| Resolve from list view : Make a payment | Pay online | Confirm details on "Pay online" screen | Details are correct for debt:<br>• Current balance<br>• Receivable ID (education) File number (all other debts)<br>• Payee number<br>• Person entitled<br>• Deduction code |
|  |  | Select "What these terms mean" | "What these terms mean" opens in drawer and closes |
|  |  | Select "Pay on pay.va.gov" | "Pay on pay.va.gov" link triggers "Leave the mobile app?" alert |
|  |  |  | "Leave" opens pay.va.gov in browser |
| Resolve from list view : Make a payment | Pay online / pay.va.gov | Switch from browser back to app | Switching between app and browser keeps location for both |
|  |  | Copy elements from pay screen and paste in pay.va.gov | Copy/paste works for each detail [long hold to paste]<br>• Reset on pay.va.gov |
| Breadcrumbs | Make a payment from list | Pay online >> Overpayments | Breadcrumb returns to Overpayment list |
| Resolve from list view : Request help | Overpay list | Resolve overpayment: select Request help | "Request help" from "Resolve overpayment" opens "How to get financial help" screen |
| Resolve from list view : Request help | How to get financial help | Open "How to get financial help" accordion | "How to get financial help" lists<br>• details on getting help<br>• link to "Request help to this overpayment" |
|  |  |  | "Request help with this overpayment" link triggers "Leave the mobile app?" alert if tapped |
|  |  |  | "Leave" opens FSR in browser |
|  |  | Close "How to get financial help" | "How to get financial help" closes |
|  |  | Open "Questions on overpayment" accordion | "Questions on overpayment" lists<br>• info for calling the Debt Management Center<br>• 3 phone numbers<br>• Go to Ask VA |
|  |  |  | Phone numbers open alerts with option to call if tapped |
|  |  |  | "Go to Ask VA" link triggers "Leave the mobile app?" alert if tapped |
|  |  |  | "Leave" opens Ask VA in browser |
|  |  | Close "Questions on overpayment" | "Questions on overpayment" closes |
| Breadcrumbs | Request help from list | How to get financial help (List) >> Overpayments | Breadcrumb returns to Overpayment list |
| Resolve from list view : Dispute payment | Overpay list | Resolve overpayment: dispute overpayment | "Dispute overpayment" from "Resolve overpayment" opens "Dispute overpayment" screen |
| Resolve from list view : Dispute payment | Dispute overpayment | Open "Start an overpayment dispute" | "Start an overpayment dispute" link triggers "Leave the mobile app?" alert |
|  |  |  | "Leave" opens Dispute your VA debt in browser |
| Breadcrumbs | Dispute overpayment from list | Dispute overpayments (List) >> Overpayments | Breadcrumb returns to Overpayment list |
| Elements on detail view | Overpay detail | Review card of each overpayment | Each debt card shows:<br>• name of debt<br>• current balance<br>• message |
|  |  | Help menu from detail screen | Help menu opens via drawer |
|  |  |  | Help menu displays <br>• instructions for calling Debt Management Center<br>• 3 phones numbers<br>• link to Ask VA |
|  |  | Links on help screen | Three phone numbers |
|  |  |  | "Go to Ask VA" opens in browser |
|  |  |  | Help menu is closed via "close" CTA |
|  |  | Debt details | Detail view shows:<br>• Date of first notice<br>• Original debt amount |
|  |  | History | If history is available, show "Debt history" accordion with date and action |
|  |  |  | "Debt history" opens and closes |
|  |  | Download | If letter is available, show "Download debt letters" accordion |
|  |  |  | "Download debt letters" opens and closes |
|  |  |  | Download link triggers file download |
| Breadcrumbs | Overpayments detail | Tap breadcrumb: Overpayments | Breadcrumb returns to Overpayment list |
| Resolve from detail view | Overpay detail | Activate Resolve overpayment menu from detail screen | Four menu options:<br>• Make a payment<br>• Request help<br>• Dispute overpayment<br>• Cancel |
|  |  |  | "Cancel" closes menu |
| Resolve from detail view : Make a payment | Overpay detail | Resolve overpayment: select Make a Payment | "Make a payment" from "Resolve overpayment" opens "Pay online" screen |
| Resolve from detail view : Make a payment | Pay online | Confirm details on "Pay online" screen | Details are correct for debt:<br>• Current balance<br>• Receivable ID (education) File number (all other debts)<br>• Payee number<br>• Person entitled<br>• Deduction code |
|  |  | Select "What these terms mean" | "What these terms mean" opens in drawer and closes |
|  |  | Select "Pay on pay.va.gov" | "Pay on pay.va.gov" link triggers "Leave the mobile app?" alert |
|  |  |  | "Leave" opens pay.va.gov in browser |
| Resolve from detail view : Make a payment | Pay online / pay.va.gov | Switch from browser back to app | Switching between app and browser keeps location for both |
|  |  | Copy elements from pay screen and paste in pay.va.gov | Copy/paste works for each detail [long hold to paste]<br>• Reset on pay.va.gov |
| Breadcrumbs | Make a payment from detail | Pay online >> Details | Breadcrumb returns to Details |
| Resolve from detail view : Request help | Overpay detail | Resolve overpayment: select Request help | "Request help" from "Resolve overpayment" opens "How to get financial help" screen |
| Resolve from detail view : Request help | Request help | Open "How to get financial help" accordion | "How to get financial help" lists<br>• details on getting help<br>• link to "Request help to this overpayment" |
|  |  |  | "Request help with this overpayment" link triggers "Leave the mobile app?" alert if tapped |
|  |  |  | "Leave" opens FSR in browser |
|  |  | Close "How to get financial help" | "How to get financial help" closes |
|  |  | Open "Questions on overpayment" accordion | "Questions on overpayment" lists<br>• info for calling the Debt Management Center<br>• 3 phone numbers<br>• Go to Ask VA |
|  |  |  | Phone numbers open alerts with option to call if tapped |
|  |  |  | "Go to Ask VA" link triggers "Leave the mobile app?" alert if tapped |
|  |  |  | "Leave" opens Ask VA in browser |
|  |  | Close "Questions on overpayment" | "Questions on overpayment" closes |
| Resolve from detail view : Request help | Request help | Open "How to get financial help" accordion | "How to get financial help" lists<br>• details on getting help<br>• link to "Request help to this overpayment" |
|  |  |  | "Request help with this overpayment" link triggers "Leave the mobile app?" alert if tapped |
|  |  |  | "Leave" opens FSR in browser |
|  |  | Close "How to get financial help" | "How to get financial help" closes |
| Breadcrumbs | Request help from Details | Request help (Details) >> Details | Breadcrumb returns to Details |
| Resolve from detail view : Dispute payment | Overpay list | Resolve overpayment: dispute overpayment | "Dispute overpayment" from "Resolve overpayment" opens "Dispute overpayment" screen |
| Resolve from detail view : Dispute payment | Dispute overpayment | Open "Start an overpayment dispute" | "Start an overpayment dispute" link triggers "Leave the mobile app?" alert |
|  |  |  | "Leave" opens Dispute your VA debt in browser |
| Breadcrumbs | Dispute overpayment from Details | Dispute overpayments (Details) >> Details | Breadcrumb returns to Details |

</details>

## Methodology 

For this study, we conducted moderated remote User Acceptance Testing (UAT) sessions with Veterans. We met with participants over a video call and guided them through several realistic tasks related to managing overpayments. Participants used their own login credentials on a pre-release version of the app so they could see and interact with their actual data.

We chose this method because the overpayments feature was nearly finished and we needed to make sure it worked correctly with real-world information. Since earlier studies already proved that the app is easy to navigate, this round of testing focused entirely on making sure the overpayment tools functioned exactly as intended in a live environment.


## Hypotheses and Conclusions

- Users will be able to view, manage, and resolve their overpayments using the Overpayment feature.
    - **Definitely true.**
    - **Supporting evidence:** During testing, participants successfully accessed their overpayment list from the home screen and navigated to individual debt details. All users were able to initiate the resolution flows, including "Make a payment," "Request help," and "Dispute overpayment," without any functional blockers.
- Users will access overpayment information, complete key actions, and navigate between screens without issues.
    - **Definitely True** 
    - **Supporting evidence:** Participants successfully utilized breadcrumbs to navigate back to the Payments and Overpayment list views. Key information was clearly visible and understood. Users also successfully navigated the transition between the app and external browser links and returned to the app without losing their place.
- The Overpayments functionality will operate correctly and meet all success criteria during user acceptance testing.
    - **Definitely True** 
    - **Supporting evidence:** The feature met 100% of the predefined success criteria across all test paths documented in the UAT plan.


## Key Findings

**The Overpayments feature is ready for release; all functional test paths passed with 100% success using live participant data.**

During moderated sessions, Veterans successfully navigated the full lifecycle of overpayment management—from discovery on the home screen to initiating resolution flows (Payment, Dispute, and Help). Because participants used their own credentials, we were able to confirm that the app correctly displays real-world debt details, balances, and history without error.

- _Supporting data: We tested with 6 Veterans (4 on iOS and 2 and Android) who logged in using their real credentials._
- _Supporting data: Participants confirmed the accuracy of personal debt details (e.g., Receivable IDs and Payee numbers) on the "Pay Online" and "Detail" screens._

**UAT Issue (Bug): Copy/paste adds an extra “$” when transitioning to pay.va.gov**

When Veterans copy the payment amount (or dollar value) from the Pay Online screen in the app and paste it into pay.va.gov, the pasted value includes an extraneous dollar sign (“$”), which can require manual cleanup and may cause entry/validation errors.

- Impact: Adds friction and increases risk of incorrect payment entry.

**UAT Issue (Bug): Spacing issue on details page.**

There was a slight spacing issue on the details page between the card and the accordion. 


## Additional Insights

1. **Insight:** “Pay online” details don’t match the pay.va.gov layout  
   - Participants can copy key fields from the app’s Pay Online screen, but the balance (shown first in the app) appears much farther down the page on pay.va.gov after other details.

2. **Insight:** Veterans want clearer details on how the debt will be resolved  
   - Participants wanted the app to show what to expect when resolving the debt, especially payment plan amounts and benefit reduction/offset details (how much and when it starts).
   - > _"I don't remember what I'm supposed to be paying every month, and I think it [benefit reduction] kicks in the next payment, but I'm not sure. It'd be nice to see that here." - P7_
   - > _"If it could show a breakdown of what my payments could be, I’d want to see that in the app." - P9_

3. **Insight:** Veterans want transparency about why the overpayment exists  
   - Today, physical letters are the only place Veterans can get the detailed explanation for why the debt was created. Participants said they would like that same information available in the app, so they don’t have to rely on mail to understand what happened.
   - > _"It doesn’t tell you really why on the app… You do get a letter in the mail… just to have a little explanation." - P4_
   - > _"They’ll send a physical copy stating what the debt is and how to resolve it… I’m quicker to go to an app than open up mail." - P9_

4. **Insight:** Veterans can’t easily confirm the current state of their debt (missing activity + unclear “Last updated”)  
   - One Veteran demonstrated how hard it is to confirm the full status of a single overpayment across channels. She described multiple follow-on communications and actions (e.g., submitting a forgiveness/waiver request, receiving responses, applying for a payment plan), but could not find a complete record of those items anywhere. During the session, she searched across va.gov (including Claims and Letters) and still couldn’t locate evidence of the paperwork she had filed, only a partial set of VA-issued letters.
   - > _"So, I know I have more letters than what’s listed here. I’m not sure what type of letters are being pulled, but I know I’ve gotten more than one letter." - P12_
   - > _"Yeah, this date is definitely not right then, because it’s just tying it to one letter, and there’s other letters missing. The confusion now is saying it’s updated - updated by who?" - P12_
   - This gap also made the “Last updated” label feel unreliable. She wanted it to indicate who updated the debt (VA vs. Veteran action) and what specifically happened. While she could reconstruct the timeline from memory, she didn’t want to have to rely on that; she wanted all related communications and actions visible in one place.
   - Another Veteran noticed that the “Last updated” date appeared to reflect the original demand letter date, even though her overpayment balance had increased multiple times since that letter.


## Recommendations and Next Steps

1. **Recommendation:** On the "Pay online" screen, remove the dollar sign from the copied text for the balance.
   - _Supporting evidence: The balance copies with a dollar sign (e.g., $100.00). Since the currency field on pay.va.gov already includes a dollar sign, pasting results in duplicate characters (e.g., $$100.00)._
   - **Next Step:** Update the app to copy only the numbers, not the currency symbol.
   - **Status:** DONE: [Ticket](https://va.ghe.com/software/va-mobile-feature-support/issues/1303)

2. **Recommendation:** Reorder the details on the "Pay online" screen to match the sequence of fields on pay.va.gov.
   - _Supporting evidence: The current app layout places the balance at the top, but the pay.va.gov form requires it further down the page. Matching the sequence reduces cognitive load and scrolling._
   - **Next Step:** Consulted with the Financial Management team and decided to maintain the current app layout. Keeping the balance at the top provides essential context for the Veteran. We will monitor user feedback after launch to determine if the field order causes any significant friction.
   - **Status:** DEFERRED / ON HOLD
   
3. **Recommendation:** Provide information on the original cause of the overpayment.
   - _Supporting evidence: Veterans expressed a strong desire for more transparency regarding why the debt exists. They know this information is provided in the physical debt letters, but it's not directly within the app._
   - **Next Step:** This is a known issue that the Financial Management team intends to address, though the timeline is TBD. We have linked this research to the existing Epic to advocate for the Veteran's perspective. We will also continue to track the related ticket already in our team's backlog to ensure this remains a priority for future development.
   - **Status:** BLOCKED / FUTURE WORK: [Ticket](https://va.ghe.com/software/va-mobile-feature-support/issues/389) / [Super Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/52762)

4. **Recommendation:** Clearly communicate the specifics of benefit reductions and repayment plans, including when and by how much.
   - _Supporting evidence: Veterans who rely on these payments to manage monthly budgets need to know exactly which upcoming payment will be impacted and the specific amount to be deducted. Participants also wanted visibility into repayment plan terms (amounts, timing, and status)._
   - **Next Step:** We want to start working with the Financial Management team to see how we can show these details in the app. Their research also shows that Veterans need this, but neither team has looked into the technical side yet. We hope to partner with their engineers soon to see what information is available and start designing what these "Resolution Details" will look like.
   - **Status:** FUTURE WORK : [Ticket](https://va.ghe.com/software/va-mobile-feature-support/issues/1359)

5. **Recommendation:** Consolidate overpayment-related communications and actions so Veterans can see the full story in one place (across VA.gov and the mobile app).
   - _Supporting evidence: One Veteran demonstrated how difficult it was to piece together the status of a single overpayment. Both the app and VA.gov showed only a partial set of VA-issued letters, and she could not find any record of the requests/paperwork she had submitted, which made it hard to confirm the current state of the debt._
   - **Next Step:** We want to work with the Financial Management team to show the entire history of a debt in one place. Both teams want to build a single timeline that includes every letter sent by the VA and every form sent back by the Veteran. We need to find out what data is available and then design one view that tells the full story of the overpayment.
   - **Status:** FUTURE WORK


## Product User and Business Outcomes

### Desired User Outcome 
Veterans want to easily view and manage their benefit overpayments in the app to understand what they owe and why.

- This research confirms that Veterans can successfully use the app to identify specific overpayments and navigate resolution flows (Pay, Dispute, Help) without error. By validating the feature with live data, we've proven the app provides the clarity users need to manage their financial obligations confidently.

### Desired Business Outcome
Increase debt visibility via the mobile app to ensure Veterans are aware of money owed and can take immediate action.

- This research validates that the mobile app is an effective, functional channel for debt awareness. Because all participants successfully completed the core tasks using real-world data, the business can be confident that launching this feature will provide a convenient, self-service way for Veterans to resolve debts and reduce reliance on manual support.


## Key Performance Indicators

### Total number of views and overall app volume
This research confirms that overpayment screens load correctly for Veterans using live credentials. By validating that 100% of participants could access their debt list and details, we have verified these screens are functionally ready to contribute to app volume metrics.

### Total number of clicks on "Make a Payment" and external VA.gov links
Testing confirmed all resolution buttons (Pay, Request Help, Dispute) successfully trigger external browser alerts. This validates that users can technically reach the intended destinations to resolve debts.

### Total number of error alerts shown to the user
UAT established a baseline of zero functional errors across all 89 test criteria. This confirms that the current build is stable and the error-handling logic prevents unexpected alerts during standard overpayment tasks.

### Total number of clicks on "Copy" buttons
We confirmed the copy functionality successfully transfers data strings to the clipboard. Monitoring this metric will assess how often users rely on this feature to complete their journey on pay.va.gov.

### Total number of clicks on empty states
We confirmed the app correctly pulls and displays "empty states" for Veterans without active debt. Testing with 2 Veterans verified that this data is accurate and communicates the absence of debt effectively.
- [Report - UAT Overpayments: empty state](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/empty-state_no-debt_results-conversation-guide.md)


## Further research needed

While this UAT confirmed the core functionality of the Overpayments feature, there are several secondary scenarios that were within the study scope but were not represented in the final recruitment sample:

- **Veterans with multiple overpayments:** Recruitment did not yield participants with more than one active debt. Further observation is needed to ensure the list and detail views remain clear and manageable for users with a high volume of concurrent overpayments.
- **Wider variety of overpayment types:** While the app supports various debt categories, testing was limited to the specific debts held by the recruited participants. Further validation is needed for Veterans with other supported debt types to ensure consistent understanding of terminology. One Veteran had education overpayments, and the remaining five had disability overpayments.
- **Error state interactions:** Because all participants successfully completed their tasks with 100% accuracy, we were unable to observe how Veterans respond to system-generated error messages or "service down" alerts. 
- **Broader demographic representation:** The findings are based on a small UAT sample; future studies could target specific demographics not represented in this round to ensure the feature meets the needs of the entire Veteran population.


## Appendix

### Research documents
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/Overpayment%20and%20Copayment%20Debts%20Product%20Brief.md)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/conversation-guide.md)


### Tools and documents used for Synthesis

- [Interview transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/combined_va_debt_portal/mobile/uat-overpayment/transcripts)
- [Session notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/session_notes.md)
- [Spreadsheet of test paths and success criteria](https://dvagov.sharepoint.com/:x:/r/sites/vamobilefeaturesupport/Shared%20Documents/2026-01%20UAT%20Overpayment/Test%20paths%20and%20success%20criteria.xlsx?d=w75ea5f86688f4386bbd1c5ff2196da9f&csf=1&web=1&e=1RKmKm)
- [Spreadsheet of transcripts, quotes, tags, and insights](https://dvagov.sharepoint.com/:x:/r/sites/vamobilefeaturesupport/Shared%20Documents/2026-01%20UAT%20Overpayment/Transcripts%20-%20tags%20-%20quotes%20-%20insights.xlsx?d=w579e62bd4cf8476486ea835a89a40828&csf=1&web=1&e=SGWio9)

_Note: some documents are stored in SharePoint where you may need to request permission to view_
  
### Pages and applications used

Pre-release app builds
- [for iOS (TestFlight)](https://testflight.apple.com/join/RrO0Cw2q)
- [for Android (Firebase)](https://appdistribution.firebase.dev/i/2e876a3d15d8784c)

Directions on using pre-release app builds
- [for iOS (TestFlight)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/pre-release_app-testing_iOS.md)
- [for Android (Firebase)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/pre-release_app-testing_android.md)


### Secondary research

**Previous Study:**
- [Mobile App Debt Portal: Overpayments and Copayments Research Findings, September 2025
](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/research-findings.md)


> [!IMPORTANT]
> **After completing the demographic information below and saving this file**, use the [GitHub Copilot Research Findings Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/research-findings-frontmatter-completion-prompt.md) to automatically populate the YAML frontmatter section at the top of this document with: 
> - Participant demographics (counts, age ranges, education levels, etc.)
> - Key findings and recommendations
> - Research goals and methodology
> - Appropriate research repository tags
>
> The prompt will parse the demographic data from this section and structure it correctly for the frontmatter's nested YAML format. 

### Research participants 

#### Recruitment criteria

Primary criteria (must-haves)

- `Currently have an overpayment debt`
- `6 on iOS devices` / `6 on Android devices`
    - Each platform can be a mix of phone and tablet, though tablet users are not required
- `Be willing to log in to their VA account with their own credentials`
    - Priority given to those who are willing to share their screens

Secondary criteria (nice-to-haves)

- `A variety of types of overpayment debt among participants`
- `Participants who have multiple overpayment debts`


#### Demographics 

We talked to **6 participants.**

Audience segment:
* Veterans: 6
* Caregivers: 0
* Family members of a Veteran: 0  

Gender:
* Male: 2
* Female: 4

LGBTQ+:
* Transgender: unknown
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: unknown
* Gay, lesbian, or bisexual: unknown

Devices used during study: 
* Desktop: 0
* Tablet: 0
* Smart phone: 6
* Assistive Technology: 0

Age:
* 25-34: 0
* 35-44: 3
* 45-54: 0
* 55-64: 2
* 65+: 0
* Unknown: 1

Education:
* High school degree or equivalent: 1
* Some college (no degree): 0
* Associate's degree, trade certificate or vocational training: 0
* Bachelor's degree: 2
* Master's degree: 3
* Doctorate degree: 0
* Unknown: 0

Geographic location:
* Urban: unknown
* Rural: unknown
* Unknown: unknown

Race:
* White: 4
* Black: 2
* Hispanic: 0
* Biracial: 0
* Asian: 0
* Native: 0

Disability and Assistive Technology (AT):
* Cognitive: unknown
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


#### Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
- Cognitive Disability
- Rural
- No degree
- Other than honorable
- Immigrant origin
- Expat (living abroad)
- Hispanic, Latino, or Spanish origin
- Biracial
- Asian
- Native Hawaiian or other Pacific Islander
- First Nations (Canada)
- Native, American Indian or Alaska Native
- Gay, lesbian, or bisexual
- Transgender
- Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman

### Recruitment of underserved groups in [Study name]

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/supporting-files/VA%20Recruitment%20checker.png)

#### A more accessible version of the table in the above image

| Demographic | Category | Target % | Target # | # in Study | Target Achieved? | p1 | p2 | p3 | p4 | p5 | p6 | p7 | p8 | p9 | p10 | p11 | p12 |
|---|---|---:|---:|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|
| All participants | Total | n/a | n/a | 12 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| Assistive Tech (AT) users | Total | n/a | n/a |  | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| No-show participants | Total | n/a | n/a | 4 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| Age 55-64+ | General | 50% | 6 | 3 | no | 0 | 0 | 0 | 1 | N | 0 | 1 | 0 | 0 | N | 0 | 1 |
| Cognitive Disability | General | 50% | 6 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mobile user | General | 50% | 6 | 8 | yes | 1 | 1 | N | 1 | N | 1 | 1 | N | 1 | N | 1 | 1 |
| Rural | General | 25% | 3 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| No degree | General | 25% | 3 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Other than honorable | General | 21% | 3 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Immigrant origin | General | 17% | 3 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Women | General | 10% | 2 | 5 | yes | 1 | 0 | N | 0 | 0 | 1 | 0 | 0 | 1 | N | 1 | 1 |
| Expat (living abroad) | General | .4% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Black or African American | Race | 15% | 2 | 3 | yes | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | N | 0 | 1 |
| Hispanic, Latino, or Spanish origin | Race | 12% | 2 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Biracial | Race | 3.9% | 1 | 1 | yes | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Asian | Race | 2.7% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Native Hawaiian or other Pacific Islander | Race | .3% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| First Nations (Canada) | Race | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Native, American Indian or Alaska Native | Race | 1.6% | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Gay, lesbian, or bisexual | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Transgender | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman | LGBTQ+ | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Beginner AT User | AT | 50% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Experienced AT User | AT | 50% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Desktop Screen Reader (SR) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Mobile Screen Reader (SR) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Magnification/Zoom | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N | 0 | 0 |
| Speech Input Tech (Siri, Dragon) | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Hearing Aids | AT | 20% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Sighted Keyboard | AT | 10% | 0 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Captions | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Switch Device | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Braille Reader | AT | n/a | 1 | 0 | no | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

