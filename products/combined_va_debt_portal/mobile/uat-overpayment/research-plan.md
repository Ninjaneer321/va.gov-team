---
# Research Plan Metadata
title: "Research Plan for Mobile Feature Support, Debt Portal: Overpayments in mobile app UAT, January 2026"
date: "2026-01-26"
last_updated: "2026-02-06"
team: "Mobile Feature Support"
product: "VA mobile app — Overpayments (Combined VA Debt Portal)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "The mobile app does not have any debt-related information for Veterans to access. The goal is to let Veterans see totals + details for overpayment debts in the app."
  product_location: "Authenticated section of VA Mobile App, to be added to the existing \"Payments\" tab."
  user_familiarity: "Veterans currently manage their debt on VA.gov; this will be a new addition to the mobile app."
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/Overpayment%20and%20Copayment%20Debts%20Product%20Brief.md"

# Research Design
methodology: "Moderated remote User Acceptance Testing (UAT)"
research_format:
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: "missing"
    point_of_contact: "missing"
    equipment: "missing"
  moderated: true # Options: true, false

# Research Goals & Questions
research_goals:
  - goal_1: "Verify that all elements of the Overpayments functionality operate as intended for end users with real data."
  - goal_2: "Validate that end users can successfully view, manage, and resolve overpayments using the app, meeting all criteria outlined in the defined user paths."
  - goal_3: "Confirm whether the Overpayments functionality is fully ready for production release."

research_questions:
  - "Can Veterans locate and access Overpayments information from the home screen and Payments tab?"
  - "Can Veterans review overall information for all overpayments and view overpayment details (including due dates/alerts, balances, and supporting content) as intended?"
  - "Can Veterans use help content and contact pathways (e.g., help menu, request help content) without issues?"
  - "Can Veterans successfully initiate resolution actions (make a payment, request help, dispute overpayment) and transition between the app and web as intended?"
  - "Do navigation elements (including breadcrumbs) behave as expected across key screens and flows?"

hypotheses:
  - "Users will be able to view, manage, and resolve their overpayments using the Overpayment feature."
  - "Users will access overpayment information, complete key actions, and navigate between screens without issues."
  - "The Overpayments functionality will operate correctly and meet all success criteria during user acceptance testing."

expected_outcomes: "Findings will confirm whether the Overpayments functionality is ready for production release; if success criteria are met, the team will proceed with launch and communicate readiness."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "missing"

  primary_criteria:
    - "Currently have an overpayment debt"
    - "Willing to log in to their VA account with their own credentials (priority for screen sharing)"
    - "Mix of device types: 5 iOS and 5 Android"

  secondary_criteria:
    - "A variety of types of overpayment debt among participants"
    - "Having multiple types of overpayment debt"

  screener_questions:
    - question: "Do you currently owe any of the following types of VA debt? (Select all that apply.)"
      qualifying_response: "Selects at least one overpayment debt type; does NOT select \"I do not currently owe any of the above types of VA debt.\""
    - question: "When you sign in to VA.gov and go to My VA (https://va.gov/my-va/), do you see details about \"overpayment debts\" under \"Outstanding debts\"?"
      qualifying_response: "Yes, I see a listing of 1 or more overpayment debts on VA.gov."
    - question: "Are you willing to sign in to the VA mobile app with your real credentials for the study (and share your screen if asked)?"
      qualifying_response: "Willing to log in with real credentials (prioritize those willing to share screen)."
    - question: "Are you comfortable downloading required testing tools and installing a pre-release version of the VA app (including Android \"Install Unknown Apps\" if applicable)?"
      qualifying_response: "Yes."
    - question: "Are you able to join the Zoom session from a smartphone?"
      qualifying_response: "Yes (iPhone or Android)."
    - question: "Do you usually adjust standard display settings or use accessibility features on your smartphone?"
      qualifying_response: "Any (not disqualifying)."

participants:
  veterans: 10
  caregivers: 0
  dependents: 0
  total_recruited: 10
  completed_sessions_goal: 6

# Timeline & Sessions
timeline:
  pilot_date: "missing"
  pilot_participant: "Michael Harmer, Janelle Finnerty, Ian Hilton"
  research_dates: "missing"
  research_review_submission: "missing"

session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3

# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits."
    key_results:
      - "Improve satisfaction with our web and mobile products by 5 points."
      - "100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error."
  - objective: "missing"
    key_results:
      - "missing"

veteran_journey_phases:
  - "Starting Up (Moment: Balancing Finances)"
  - "Taking Care of Myself (Moment: Maintaining my health)"
  - "Putting Down Roots (Moment: Maintaining my financial, social, and emotional health)"
  - "Retiring (Moment: Taking care of my health)"
  - "Aging (Moment that Matters: Managing my declining health)"

# Research Repository Tracking
related_research:
  previous_studies:
    - "missing"

tags:
  - "authenticated"
  - "uat"
  - "veterans"
  - "mobile"
---




	# Research Plan for Mobile Feature Support, Debt Portal: Overpayments in mobile app UAT, January 2026

## Background 🏗️

This study is a User Acceptance Test (UAT) for the VA mobile app’s Overpayments experience. The goal of this UAT is to confirm that the Overpayments feature is ready for production release by validating that the experience works as intended for Veterans using real account data in a pre-release build of the app.

Benefit overpayment debt can occur when a Veteran receives more compensation than they are entitled to at that moment, and it is handled by the Veterans Benefits Administration (VBA). Examples of overpayments include changes a dependent status (e.g. from a divorce) and receiving education benefits for a class and then dropping the class.

Veterans who have benefit overpayment debt can currently access overpayment information through the authenticated experience on VA.gov. The VA mobile app does not currently provide debt-related information or actions. This release introduces Overpayments as the first debt capability in the mobile app (Copays will be released separately at a later date).

`What problem is your product trying to solve?`

The mobile app does not have any debt-related information for Veterans to access. The goal is to let Veterans see totals and details for overpayment debts in the app.
  
`Where is your product situated on the VA Mobile App?`

In the authenticated section of VA Mobile App, added to the existing "Payments" tab.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

Veterans currently manage their debt on VA.gov; this will be a new addition to the mobile app.

`Product Brief`
[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/Overpayment%20and%20Copayment%20Debts%20Product%20Brief.md)


### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.


### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

Where does your product fit into the Veteran journey?
Are there moments that matter?
	
- `Starting Up (Moment: Balancing Finances)`
- `Taking Care of Myself (Moment: Maintaining my health)`
- `Putting Down Roots (Moment: Maintaining my financial, social, and emotional health)`
- `Retiring (Moment: Taking care of my health)`
- `Aging (Moment that Matters: Managing my declining health)`


## Research Goals 🥅	

The purpose of this User Acceptance Testing (UAT) study is to verify that all elements of the Overpayments functionality operate as intended for Veterans using real data. Unlike usability testing, UAT focuses on confirming that features work as expected, rather than on users’ ability to find or discover them.

Specifically, this study will validate that end users can successfully view, manage, and resolve overpayments using the app, meeting all criteria outlined in the defined user paths.

  
### Outcome

Findings from this research will confirm whether the Overpayments functionality is fully ready for production release. If all success criteria are met, we will proceed with launch and communicate readiness to stakeholders. If any issues are identified, we will prioritize and resolve them before deployment.


### Test paths and success criteria

<details>
<summary>Click to view UAT Success Criteria Table</summary>

Also available in [Excel spreadsheet](https://dvagov.sharepoint.com/:x:/s/vamobilefeaturesupport/IQB1m_Jp5sGuTKHALblAGsyPAVh-tVxfvvirz_dKytoIFT8?e=v9Wtbm)

| Category | Screen | Activity | Success |
| :--- | :--- | :--- | :--- |
| Elements on home | Home | See the number of overpayments on home screen | Activity card "Overpayments" shows "n overpayments" where "n" is the quantity of current overpayment debts |
| Elements on Payments | Payments tab | Locate all payment information | "Overpayments" card lists total amount due and total quantity of debts |
| | | | "Overpayments" card opens overpayment list view |
| Elements on list view | Overpay list | Review overall info of all overpayments | Each debt card shows:<br>• name of debt<br>• current balance<br>• message |
| Elements on list view | Overpay list | Help menu from list screen | Help menu opens via drawer |
| | | | Help menu displays instructions for calling Debt Management Center and links to Ask VA |
| | | | Help menu is closed via "close" CTA |
| Elements on detail view | Overpay detail | Review details of overpayment detail [date] | Date updated appears at top |
| Elements on detail view | Overpay detail | Review details of overpayment detail [alert message] | Alert message shows due date where applicable |
| | | | Alert message expands with additional information |
| | | | Alert message collapses |
| Elements on detail view | Overpay detail | Review details of overpayment detail ["why might I have this debt"] | "Why might I have this overpayment balances" opens in a drawer |
| | | | message matches the type of debt |
| | | | message closes via "close" CTA |
| Elements on detail view | Overpay detail | Review details of overpayment detail [card info] | Card for current debt includes:<br>• name of debt<br>• amount of debt<br>• message |
| Elements on detail view | Overpay detail | Help menu from detail screen | Help menu opens via drawer |
| | | | Help menu displays instructions for calling Debt Management Center and links to Ask VA |
| | | | Help menu is closed via "close" CTA |
| Elements on detail view | Overpay detail | Review payment history | "Past payments" section lists up to 6 months of payments |
| | | | "Past payments" section lists:<br>• date of payment<br>• amount of payment |
| | | | Link to "all payments" appears below |
| | | | If there is no payment history, message is displayed |
| Navigation from list view | Overpay list | Select an overpayment to see details | Tapping a debt card opens the detail view for that debt |
| Navigation from list view | Overpay list | Help menu from list view | Tapping help icon opens Help drawer |
| Navigation from list view | Overpay list | Breadcrumb from overpay list | Tapping "Payments" returns user to Payments tab |
| Navigation from detail view | Overpay detail | Back to list from detail view | Tapping "Overpayments" returns user to Overpayments list view |
| | | | Tapping "Back" icon returns user to Overpayments list view |
| | | | Help menu from detail view |
| | | | Tapping help icon opens Help drawer |
| Resolve from list view | Overpay list | Resolve overpayment: pay online | "Pay online" link triggers "Leave the mobile app?" alert |
| | | | "Leave" opens Pay.gov in browser |
| Resolve from list view | Overpay list | Resolve overpayment: request help | "Request help with this overpayment" link triggers "Leave the mobile app?" alert |
| | | | "Leave" opens FSR in browser |
| Resolve from list view | Overpay list | Resolve overpayment: dispute overpayment | "Dispute overpayment" link triggers "Leave the mobile app?" alert |
| | | | "Leave" opens Dispute your VA debt in browser |
| Resolve from detail view | Overpay detail | Resolve overpayment: view and download letters | "View and download letters" button opens letters screen |
| | Notice of rights and responsibilities | Review letters screen | List of debt letters is displayed |
| | | Select a letter | Tapping a letter name triggers "Leave the mobile app?" alert |
| | | | "Leave" opens the letter as PDF in browser |
| | | Breadcrumb from letter screen | Tapping "Details" returns user to the detail view for that debt |
| Resolve from detail view | Overpay detail | Resolve overpayment: pay online | "Pay online" button from "Resolve overpayment" opens "How to pay" screen |
| | How to pay | Review "How to pay" screen | "How to pay" screen opens and closes |
| | | | "Pay online" link triggers "Leave the mobile app?" alert if tapped |
| | | | "Leave" opens Pay.gov in browser |
| Resolve from detail view | Overpay detail | Resolve overpayment: request help | "Request help with this overpayment" from "Resolve overpayment" opens "Request help" screen |
| | Request help | Review "Request help" screen | "Request help" screen opens and closes |
| | | | "Request help with this overpayment" link triggers "Leave the mobile app?" alert if tapped |
| | | | "Leave" opens FSR in browser |
| Resolve from detail view | Overpay detail | Resolve overpayment: dispute overpayment | "Dispute overpayment" from "Resolve overpayment" opens "Dispute overpayment" screen |
| | Dispute overpayment | | "Start an overpayment dispute" link triggers "Leave the mobile app?" alert |
| | Dispute overpayment | | "Leave" opens Dispute your VA debt in browser |
| Breadcrumbs | Notice of rights and responsibilities | Notice of rights and responsibilities >> Details | Breadcrumb returns to Details |
| Breadcrumbs | Overpayments Detail | Details >> Overpayments (List) | Breadcrumb returns to Overpayments |
| Breadcrumbs | Overpayments list | Overpayments (List) >> Payments | Breadcrumb returns to Payments |
| Breadcrumbs | Make a payment from Details | Pay online (Details) >> Details | Breadcrumb returns to Details |
| Breadcrumbs | Request help from Details | Request help (Details) >> Details | Breadcrumb returns to Details |
| Breadcrumbs | Dispute overpayment from Details | Dispute overpayments (Details) >> Details | Breadcrumb returns to Details |
| Breadcrumbs | Make a payment from List | Pay online (List) >> List | Breadcrumb returns to List |
| Breadcrumbs | Request help from List | Request help (List) >> List | Breadcrumb returns to List |
| Breadcrumbs | Dispute overpayment from List | Dispute overpayments (List) >> List | Breadcrumb returns to List |

</details>


### Hypotheses

- Users will be able to view, manage, and resolve their overpayments using the Overpayment feature.
- Users will access overpayment information, complete key actions, and navigate between screens without issues.
- The Overpayments functionality will operate correctly and meet all success criteria during user acceptance testing.

  
## Methodology  🛠️

This study will use moderated remote User Acceptance Testing (UAT) sessions with Veterans. Participants will join a remote session where a facilitator guides them through realistic overpayment management scenarios using a pre-release version of the app, logged in with their own credentials.

This method is appropriate because the overpayments feature is in its final phase of development and must be validated with real user data to confirm everything functions as intended. Previous usability studies have already assessed how users find and navigate the app, so this study will focus exclusively on verifying that the overpayments feature performs as expected in real-world situations.


### Location

- [X] **Remote**
- [ ] **In-person**

## Research materials 📔

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/conversation-guide.md)
- [Spreadsheet with test user flows and success criteria](https://dvagov.sharepoint.com/:x:/s/vamobilefeaturesupport/IQB1m_Jp5sGuTKHALblAGsyPAVh-tVxfvvirz_dKytoIFT8?e=v9Wtbm)

Pre-release app builds
- for iOS (TestFlight) 🚧
- for Android (Firebase) 🚧

Directions on using pre-release app builds
- [for iOS (TestFlight)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/pre-release_app-testing_iOS.md)
- [for Android (Firebase)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/pre-release_app-testing_android.md)

	
## Recruitment 🎯	

### Recruitment approach

We would like Perigean to recruit Veterans with current overpayment debt who are willing to log in to the mobile app with their real credentials.


### Recruitment criteria

Screener question 1

* Do you currently owe any of the following types of VA debt? If so, please select all that apply.
    * Medical debt [DISQUALIFY IF THIS IS THE ONLY SELECTION]
	* Post-9/11 GI Bill overpayment (books and supplies, housing, or tuition)
    * Disability compensation and pension overpayment
    * Education Ch 33-Ch1606/Ch30 Kickers
    * Chapter 34 education overpayment
    * Chapter 35 education overpayment
    * I do not currently owe any of the above types of VA debt. [DISQUALIFY]

Screener question 2

* When you sign in to VA.gov and go to My VA, do you see details about "overpayment debts" under the section "Outstanding debts"? (This is different from copay bills.)
    * Yes, I see a listing of 1 or more overpayment debts on VA.gov.
    * No, I don’t see any overpayment debt details on VA.gov [DISQUALIFY]
    * I don’t have a VA.gov account / I can’t sign in right now [DISQUALIFY]

    _NOTE: please make sure the link in question 2 is included in the invitation_

Screener question 3

* To participate in this study, you’ll need to sign in to the VA mobile app using your real Login.gov or ID.me credentials so we can confirm everything is working correctly. Please confirm if you are comfortable with this:
    * I am willing to log in to the mobile app with my real credentials and share my screen during the session. [PRIORITIZE THIS OVER NEXT ANSWER]
    * I am willing to log in to the mobile app with my real credentials, describe what I am seeing on screen, but NOT share my screen. [ONLY SELECT IF WE DON'T HAVE ENOUGH FROM PREVIOUS ANSWER]
    * I am not comfortable logging in with my real credentials for this study. [DISQUALIFY]

Screener question 4

* Participation requires downloading specific testing tools and a pre-release version of the VA app which will temporarily replace your current version. If you use an Android, you must also be comfortable temporarily adjusting your security settings to allow the installation. We will guide you through restoring the original app and returning your device to its original state at the end.
    * Yes, I am comfortable with this.
    * No, I would prefer not to change my phone settings or apps. [DISQUALIFY]

Screener question 5

* Are you able to join the Zoom session from a smartphone? Any kind of smartphone will work as long as it connects to the internet.
    * Yes, I have an iPhone where I can join the session
    * Yes, I have an Android phone where I can join the session (for example: Samsung, Google, Motorola, or LG)
    * No [DISQUALIFY]

Screener question 6

* When interacting with apps on your smartphone, do you usually adjust the standard display or use accessibility features? Please select all that apply.
    * I mostly use the phone's standard display settings.
    * I often increase the text size significantly.
    * I use screen magnification or zoom features.
    * I use a screen reader (such as VoiceOver or TalkBack).
    * Other
    * Prefer not to say

_[For Perigean's communication with participants]_ Prerequisites for participants (for both iOS and Android)

- VA Credentials: You have a username and password for ID.me or Login.gov and can access your two-factor authentication (text code or app).
- You have a current benefit overpayment debt that is visible in your VA.gov account (https://va.gov/manage-va-debt/summary)
- (Android only) Email Access: You can open your email directly on your mobile phone to click the test link.
- (Android only) Permissions: You are comfortable allowing your phone to "Install Unknown Apps" within your security settings for this session.
- Testing Tools: You are willing to download TestFlight (iOS) or Firebase App Distribution (Android).
- App Replacement: If you have the standard VA app, the test version will temporarily replace it. We will help you restore the original version at the end.
- Connection: You will be connected to WiFi during our call for a stable download.



### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **12**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **12**
- `Ideal completed sessions:` **3 on iOS, 3 on Android**

### Primary criteria (must-haves)

- `Currently have an overpayment debt`
- `6 on iOS phones` / `6 on Android phones`
- `Be willing to log in to their VA account with their own credentials`
    - Priority given to those who are willing to share their screens

#### Secondary criteria (nice-to-haves)

- `A variety of types of overpayment debt among participants`
- `Participants who have multiple types of overpayment debt`

## Timeline 🗓️

### Kick-off Call with Perigean

- `Already completed`

### Prepare

_Note: as these tests need to be conducted with real user data, the pilot tests were to practice guiding participants through set-up of the pre-release app and returning their phones to the original state._
- `Pilot participant name:` **Michael Harmer, Janelle Finnerty, Ian Hilton**
- `Date and time of pilot session:` **already completed**

### Research sessions
- `Planned dates of research:` **[Enter dates MM/DD-MM/DD]** 🚧

### Length of sessions
- `Session length:` **1 hour**
  
- `Buffer time between sessions:` **30 minutes**
  
- `Maximum Sessions per day:` **3**

### Availability 🚧
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 


> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.

- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `Add more slots as needed`
  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Emily DeWan**	
- `Research guide writing and task development (usually but not always same as moderator):` **Emily DeWan**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Natalie Davied Gibbons**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **n/a**	
- `Note-takers:` **To be assigned from the team**
- `Observers: To be added to study channel, but not added to each session's calendar event.`

  - **Natasha Huckleberry**
  - **Natalie Davied Gibbons**
  - **Emily Goodrich**
  - **Parker Baranowski**
  - **Michelle Middaugh**
  - **Dave Formanek**
  - **Kim McCaskill**
  - **Matthew Guest**
  - **Michael Harmer**
  - **Kayley Bogemann**


## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
