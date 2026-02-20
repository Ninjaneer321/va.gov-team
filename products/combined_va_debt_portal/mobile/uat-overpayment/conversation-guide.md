---
title: "Conversation Guide for VA Mobile App Team, Debt Portal (Overpayments UAT), 2026-01-29"
author:  "Emily DeWan"
date_created:  "2026-01-26"
last_modified: "2026-02-11"
tags: 
  - "AUD: Veterans"
  - "PRDT: Debt-portal"
  - "HDW: Smartphone"
  - "DSP: Content Presentation"
  - "DSC: Button"
  - "DSC: Links"
  - "moderated"
  - "uat"
description: "A moderated UAT conversation guide for testing the VA mobile app’s Debt Portal overpayment experience, validating that key screens, navigation, and actions display and behave correctly in a pre-release build."
---


# Conversation Guide for UAT Overpayments on Mobile App

## Moderator logistics 📋✅

<details><summary>steps</summary>

### 2-3 days before the session

> [!NOTE]
> Review VA Platform's [Research Checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-checklist).

`List and complete any project-specific setup tasks for this study below:`

- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

### Day of the session

> [!TIP]
> - Use [#feedback-backchannel](https://dsva.slack.com/messages/C40B45NJK/details/) in Slack for real-time feedback from observers.
> - Mute your Slack notifications.
> - Send out the [observer instructions](https://depo-platform-documentation.scrollhelp.site/research-design/Observer-guidelines.1622311177.html) to your observers (Slackbot will do this for you if you type "observer instructions" into [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel)).

### Starting the session

> [!TIP]
> - In the Attendees section, make sure everyone except the participant is on mute.
> - In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked
> - Check your [screensharing setup] and share permissions for participants.
> - When the participant is ready, begin the session with the following intro*

</details>


## Intro - 5 minutes

Thank you so much for joining today. My name is Emily, and [NAME] here will be taking notes. I also have a couple other colleagues in the digital waiting room who would like to observe, but we’ll get to that momentarily.

I want to review a few things to make sure you're okay with what will happen in this session

* You indicated that you have a current overpayment debt. _[reference type of debt they selected in screener]_
    * Can you briefly tell me about it?
    * Are you able to see the details of this debt when you log in to your VA account on the website?

_[NOTE] Potential ending spot if it's clear they do not have a current overpayment_

* Today, we’re testing a pre-release version of the VA app specifically to check the Debt Portal before it's released to the public. We want to make sure that every button you press results in the correct information being shown on screens.
    * Are you okay with logging in with your real username and password for this test?
    * Nothing you do here will affect your VA benefits in any way. We also not going to be doing anythat that will affect your overpayments.
    * I'll be asking you to share your screen which will show your personal debt records. 
        * Are you okay with sharing your screen with us?
    * If you would like to stop the session or do not want to show us something at any time, that's no problem. Please let me know.

_[NOTE] Potential ending spot if they are not comfortable logging in with their credentials_

* I'll be helping you download a test version of the app. If you currently have the VA app on this phone, this test version will replace it. I'll help you restore the original version once you're done.
    * You're on a mobile phone now? Is it an iPhone or an Android?
    * You have your username and password ready to log into the app? [ID.me or Login.gov and can access your two-factor authentication - text code or app]
    * [Android only] You have access to your email account here on this phone?
    * [Android only] We will need to temporarily adjust some security settings to install this version of the app. I'll walk you through resetting things once we're done.
* Are you connected to WiFi? [If not, are they able to be?]
    * It will be faster for the downloads if you are.
* I have [number] colleagues who are interested in observing this session to better understand the Veteran experience. Would you be okay with them observing?
    * If no: Use Slack to kindly ask the observers to leave the Zoom.
    * If yes: Admit observers.
    * Then, ask the notetaker and observers to give a brief, camera-on introduction, like their first name and position with VA.gov. 
    * Once complete, ask the notetaker and observers to turn off their cameras for the remainder of the session to save bandwidth
* If you would be okay with it, we would like to record this session today, but let me explain things first before you consent. 
    * Any reporting I do from this would not use your name or personal details.
    * I will pause the recording when you are entering your password so that your login details are not captured.
    * Knowing this, are you comfortable with me recording the session?
    * Once we record I'm going to ask again just so it's on the record.

Start recording.

* I have started recording. I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?


## Set-up

First, I'd like you share your screen.

_References_:
- [Screen sharing iOS](https://depo-platform-documentation.scrollhelp.site/research-design/iphone-start-screen-share)
    - Swipe moderator's video off to the side
- [Screen sharing Android](https://depo-platform-documentation.scrollhelp.site/research-design/android-start-screen-share)
    - Swipe moderator's video off to the side
    - Select Zoom from Permissions - “Display over other apps permission”, then go back to Zoom
- App install link for iOS (TestFlight) 🚧
- App install link for Android (Firebase) 🚧
- [iOS directions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/pre-release_app-testing_iOS.md) for guiding them through the download and set-up
- [Android directions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/pre-release_app-testing_android.md) for guiding them through the download and set-up

### iOS set-up 🍎

<details>
<summary>iOS guidelines</summary>

Would you like to turn off your notifications while we're going through everything? I can walk you through this if you'd like.

_[pull down from upper right, select Focus]_

I'm going to send you a link through the Zoom chat. Please go ahead and open that.

_[send install link]_

We'll need to use a few apps for this set-up process. First we're going to install TestFlight. This is the app we'll go through to get the pre-release version of the VA app. Tap "view in app store" and then download the app.

Now open it up, and I'll have you accept the terms and conditions.

_[stop once they reach "ready to test" screen]_

Now please return to your browser back to the screen we were at before. Install the VA app. This is going to install over the original VA app, and I'll make sure you reinstall it once we're done.

Now I'll have you log in with your username and password. I'm going to pause the recording while you're doing that.

_[pause recording]_

_[after they reach authenticated home screen]_

Great! I'm going to resume the recording now, and we'll get started with testing.

_[resume recording]_

</details>

### Android set-up 🤖

<details>
<summary>Android guidelines</summary>

Would you like to turn off your notifications while we're going through everything? I can walk you through this if you'd like.

_[pull down from top, select Do Not Disturb]_

I'm going to send you a link through the Zoom chat. Please go ahead and open that.

_[send install link]_

We'll need to use a few apps for this set-up process. First we're going to install Firebase. This is the app we'll go through to get the pre-release version of the VA app. 

Enter your email address. You'll be opening an email on this phone momentarily which will get you to the app download.

_[make note of email address to be removed from Firebase after the test]_

Now switch to your email app and open an email from VA Health and Benefits.

Tap "get started."

_[confirm that email they selected is what is showing in the corner; if not have them switch accounts]_

Download the app tester.

Now we need to make some permission changes.
- _[optional explanation]_ Google Play is the standard way apps are sent to Android phones. This app is safe, but because the version we’re testing today is still in development, it hasn't gone through Google’s final review yet, and therefore it’s blocked by default. We need to adjust some settings to allow you to download it, and we’ll make sure to get your phone back to the way it was once we’re finished.

Open Google Play Store.
- Tap on the profile on the upper right
- Tap Settings
- Tap About
- Where is says "play store version" - tap that seven times until a notice comes up.
    - _[confirm notice "you are now a developer"]_
- Scroll back up and tap General
- Tap Developer Options
- Toggle on "internal app sharing"

Now return to the email app. _[most likely browser within the email]_ Tap Done.

Now I'll have you download the app. _[if standard version is already there, uninstall first]_

Go ahead and install.

Now I'll have you log in with your username and password. I'm going to pause the recording while you're doing that.

_[pause recording]_

_[after they reach authenticated home screen]_

Great! I'm going to resume the recording now, and we'll get started with testing.

_[resume recording]_

</details>

## Test paths

Now I'm going to ask you to go to various parts of the app where I'll be checking to see that elements appear correctly.

_Moderator will follow the test paths outlined in the spreadsheet. Both versions contain the same information._

- Google Sheet: [Spreadsheet: Test paths and success criteria - Overpayment UAT](https://docs.google.com/spreadsheets/d/1xfHJGzPQJaIeO-uPp8D4aboEO-qSDvBVp0b5QABg_5Q/edit?gid=312390165#gid=312390165)
- Excel Spreadsheet on VA network: [Spreadsheet: Test paths and success criteria - Overpayment UAT](https://dvagov.sharepoint.com/:x:/r/sites/vamobilefeaturesupport/Shared%20Documents/2026-01%20UAT%20Overpayment/Test%20paths%20and%20success%20criteria%20-%20Overpayment%20UAT.xlsx?d=w1b926b3759974de4989a59acbded0343&csf=1&web=1&e=sqGrc5)


## Phone clean-up

That was it! Thank you so much for walking us through your app.

I'm now going to help you return your phone to the way it was.

<details>
<summary>Android guidelines🤖</summary>
- Uninstall the VA app
    - _[option 1]_ Go to your home screen and fine the app icon. Long press and drag up to the top to Uninstall.
    - _[option 2]_ Go to your home screen and fine the app icon. Long press and tap App info. Tap Uninstall.
    - _[option 3]_ Open Google Play Store. Tap profile photo, tap "manage apps and device," tap "manage" and select VA app to delete.
- Uninstall Firebase app
- Install standard VA app
- Toggle off "internal app sharing"
    - Open Google Play Store, Tap profile photo, tap General, tap Developer options.
- Reset any other security settings you changed
- Log back into VA app (if they want help)
- _[if relevant]_ Turn notifications back on
    _[pull down from top, select Do Not Disturb]_

</details>

<details>
<summary>iOS guidelines🍎</summary>
- Reinstall public version of the VA app
    - Open the app store to find the app. This will install over the beta version
- Uninstall TestFlight
    - Go to home screen to find app. Long hold, tap Remove App.
- Log back into VA app (if they want help)
- _[if relevant]_ Turn notifications back on
    _[pull down from upper right, select Focus]_

</details>

## Consent to use video clips

- I want to circle back and re-confirm: Are you okay with us sharing anonymized video clips from today’s session with VA partners?
- Is there any part of our conversation you would NOT want included?


## Thank-You and Closing - X minutes

We really appreciate you taking the time to help us test the app. This step is so crucial to getting this app ready for everyone to use.

Perigean will be sending you a thank you note with a little blurb that you can pass along to other Veterans you may know to provide them the chance to participate in future research studies.

Thank you so much again, and enjoy the rest of your day!


# Emergency Exit 🚨

[Emergency guidance](https://depo-platform-documentation.scrollhelp.site/research-design/research-safety-and-emergency-exit-strategies#ResearchSafetyandEmergencyExitStrategies-Sampleexitstrategies)

If needing to exit the session

1. "If for any reason and at any time you want to stop the session, please let me know. You will not lose your stipend or be penalized in any way if we need to stop."
2. “I’ve just learned that the prototype we were planning on using today is having some technical issues, so we will have to end this session early.”
3. Thank them profusely for their feedback or for making the time to talk to you.

---

## After You Save This Convo Guide ✅

- [ ] Complete the YAML frontmatter at the top of this file using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md)
- [ ] Review alignment with your research plan tags
- [ ] Update the last_modified date

