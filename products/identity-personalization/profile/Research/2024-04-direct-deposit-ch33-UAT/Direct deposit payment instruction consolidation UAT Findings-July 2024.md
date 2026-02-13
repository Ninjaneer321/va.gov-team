---
title: "Direct Deposit Payment Instruction Consolidation UAT Research Findings"
product: "Profile - Direct Deposit"
team: "Authenticated Experience Profile Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2024-07-31"
researchers:
  - "Profile Team Researcher"
research_goals:
  - "Confirm that the Direct Deposit section of Profile functions as intended for users who sign in with ID.me or Login.gov and have direct deposit set up with bank information"
  - "Validate that users can view and edit correct direct deposit information for compensation & pension and education benefits"
  - "Verify that information returned from the API matches what is populated on screen"
  - "Confirm safeguards for invalid routing/account numbers and character limits are working correctly"
methodology:
  - "User Acceptance Testing (UAT)"
  - "Remote moderated sessions via Zoom with screen sharing"
devices_used:
    desktop: 5
    tablet: 0
    smartphone: 0
    assistive_technology: 0
participants_total: 5
demographics:
  veterans: 5
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 1
    "35-44": 2
    "45-54": 0
    "55-64": 0
    "65+": 2
    unknown: 0
  education:
    high_school: 0
    some_college: 0
    associates: 0
    bachelors: 0
    masters: 0
    doctorate: 0
    unknown: 5
  location:
    urban: 0
    rural: 0
    unknown: 5
  race:
    white: 3
    black: 0
    hispanic: 2
    biracial: 0
    asian: 0
    native: 0
  disability:
    cognitive: 0
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
  - "All 5 participants successfully completed all 10 UAT tasks for direct deposit functionality"
  - "Direct deposit information displayed correctly for users with compensation & pension benefits, education benefits, or both"
  - "Email confirmations were successfully received after editing direct deposit information"
  - "API data correctly matched information populated on screen"
  - "Safeguards for invalid routing/account numbers and character limits functioned as expected"
  - "Some confusion expressed about Account Security page naming and content clarity"
recommendations:
  - "Consider more research on perception of Account Security page with larger participant pool"
  - "Investigate whether 'Sign in security' might be clearer terminology than 'Account Security'"
  - "Evaluate making Account Security content dynamic based on sign-in method"
kpi_alignment:
  - "Successful UAT validation of direct deposit consolidation feature"
outcomes:
  user: "Veterans can successfully view and manage their direct deposit information for both education and compensation & pension benefits in one consolidated Profile section"
  business: "Direct deposit payment instruction consolidation functions as designed with proper validation and safeguards in place"
opportunity_areas:
  - "Account Security page naming and content presentation could be improved for clarity"
further_research_needed:
  - "Conduct broader study on Account Security page perception with structured methodology and larger sample size"
underserved_groups_missing:
  - "Women Veterans"
  - "LGBTQ+ Veterans"
  - "Veterans with cognitive disabilities"
  - "Veterans using assistive technology"
  - "Rural Veterans"
  - "Urban Veterans"
secondary_research:
  - "UAT testing"
synthesis_tools_used:
  - "Remote Zoom sessions"
  - "Task completion tracking"
---

# Direct deposit payment instruction consolidation UAT Findings, July 2024

## Who we talked to
We successfully tested 5 participants (out of 7), including 3 internal Veterans (the pilot participant as well as two others). We also had 2 participants who did not finish their sessions due in one case to technical difficulties, and in the other a lack of comfort with the tasks of the session. The original plan was to fully test 6 participants, but due to difficulty recruiting participants as well as time constraints, the research was deemed to be complete after only 5 (this is why internal participants were the majority of people tested).

### Demographics:

Man | 39 years old | Hispanic, Latino, or Spanish origin

Man | 77 years old | White

Man | 40 years old | Hispanic, Latino, or Spanish origin

Man | 34 years old | White

Man | 43 years old | White

## Research Goals	
The primary goal of our UAT is to confirm that the Direct Deposit section of the Profile functions as intended for users who sign in with `ID.me` or `Login.gov` and who have direct deposit set up with their bank information. 

Specifically, this research will be looking to validate the following use cases:
- Participants view and edit the correct direct deposit information in their account for all three user scenarios, and receive email confirmations:
	- Veterans with education benefits and compensation & pension
	- Veterans with just education benefits
	- Veterans with just compensation & pension
- We are able to confirm that the information being returned from the API matches what is being populated for users on the screen.
- We are able to confirm that the following safeguards in place are working correctly:
	- invalid routing/account numbers cannot be saved
	- numbers over/under the character limit are unable to be saved

## Methodology 
While sharing their screen in remote (Zoom) interviews, participants will complete specific tasks as part of UAT to either demonstrate that Direct Deposit, Profile is functioning as expected.

### Location
Remote via Zoom

### Research materials

[Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-04-direct-deposit-ch33-UAT/research-plan.md)

[Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-04-direct-deposit-ch33-UAT/conversation-guide.md)

## Tasks and Outcomes

All 5 participants successfully completed all 10 tasks they were given. With the two other participants, one never began testing at all and the other could not proceed after completing the initial task of logging into their account. 

[Session conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-04-direct-deposit-ch33-UAT/conversation-guide.md) (task list)

### Tasks 1-9 Findings

For the first 9 tasks, completion of the task given was all that was being tested. All participants completed every task, with no additional findings to report. 

### Task 10 Findings

For the final task, users were asked about their perceptions of the Account Security page in Profile:

> "For the last task today, I’d like to direct your attention to the sidebar menu to your left. What do you expect you’d find on that page if you clicked on Account Security?

> "Alright, let’s click on it and take a look. (Participant shares expectations and impressions.)

#### Pilot participant:

- Mentioned account security might not be clear to everyone, stated it's more about signing in: stated they believed the language used might be better if it references sign in, "'Sign in security', "dont really know what use their is for me " (and then mentioned that was because they were already signed in, and already has MFA enabled).

#### P3

- No takeaways

#### P7

- Initially did not interpret that account security did not have modifiable options on the page itself

#### P9

- "This is confusing", "this is taxing", Content isn't dynamic (as in: it doesn't change based on sign-in method) - link is, but not the other content.
- "The thing at the bottom makes me feel good."
- Mentioned because there are multiple login methods, burden is on the user to know which.

#### P14

- Said that they would assume 'account security'is for something local instead of id.me.
- Likes that it showed identity is verified, MFA enabled.

### Recommendations

Considering we had limited participants and structure with the final task, more time should be spent on investigating perception of the Account Security page. The findings from this UAT study are not enough to advise any specific recommendations. 
