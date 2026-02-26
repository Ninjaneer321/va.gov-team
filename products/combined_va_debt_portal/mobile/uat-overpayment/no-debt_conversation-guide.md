# Conversation Guide for UAT Overpayments in the VA Mobile App: No Debt testers

This guide is for our testers who do not have any overpayment debt, where we need to test the empty state of this feature. We are doing our own recruitment through OCTO Veterans instead of going through Perigean.


### Starting the session

> [!TIP]
> - In the Attendees section, make sure everyone except the participant is on mute.
> - In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked.
> - Check your screen sharing setup and share permissions for participants.
> - When the participant is ready, begin the session with the following intro:

</details>

## Intro

Thanks for joining today. I'm Emily, and I've got [NAME] who will be taking notes.

A few logistics:
- I'm going to send you a link to download the pre-release app build momentarily.
- You’ll sign in to the app with your real credentials
- We'll be looking at the new debt portal in the app, confirming that things are showing properly when someone does NOT have any debt.

Are you okay if we record this today for any of our team members to watch later?

## Set-up

First, I'd like you to share your screen.

_References_:
- [Screen sharing iOS](https://depo-platform-documentation.scrollhelp.site/research-design/iphone-start-screen-share)
    - Swipe the moderator's video off to the side
- [Screen sharing Android](https://depo-platform-documentation.scrollhelp.site/research-design/android-start-screen-share)
    - Swipe moderator's video off to the side
    - Select Zoom from Permissions: “Display over other apps permission,” then go back to Zoom
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

We'll need to use a few apps for this set-up process. First we're going to install TestFlight. This is the app we'll go through to get the pre-release version of the VA app. Tap "View in app store" and then download the app.

Now open it up, and I'll have you accept the terms and conditions.

_[stop once they reach "ready to test" screen]_

Now please return to your browser by going back to the screen we were at before. Install the VA app. This is going to install over the original VA app, and I'll make sure you reinstall it once we're done.

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

Tap "Get started."

_[confirm that email they selected is what is showing in the corner; if not have them switch accounts]_

Download the app tester.

Now we need to make some permission changes.
- _[optional explanation]_ Google Play is the standard way apps are sent to Android phones. This app is safe, but because the version we’re testing today is still in development, it hasn't gone through Google’s final review yet, and therefore it’s blocked by default. We need to adjust some settings to allow you to download it, and we’ll make sure to get your phone back to the way it was once we’re finished.

Open Google Play Store.
- Tap the profile icon in the upper right
- Tap Settings
- Tap About
- Where it says "Play Store version" — tap that seven times until a notice comes up.
    - _[confirm notice "you are now a developer"]_
- Scroll back up and tap General
- Tap "Developer options"
- Toggle on "Internal app sharing"

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

- Google Sheet: [Spreadsheet: Test paths and success criteria - Overpayment UAT ("No debt" tab)](https://docs.google.com/spreadsheets/d/1xfHJGzPQJaIeO-uPp8D4aboEO-qSDvBVp0b5QABg_5Q/edit?gid=197481224#gid=197481224)
- Excel Spreadsheet on VA network: [Spreadsheet: Test paths and success criteria - Overpayment UAT](https://dvagov.sharepoint.com/:x:/r/sites/vamobilefeaturesupport/Shared%20Documents/2026-01%20UAT%20Overpayment/Test%20paths%20and%20success%20criteria%20-%20Overpayment%20UAT.xlsx?d=w1b926b3759974de4989a59acbded0343&csf=1&web=1&e=sqGrc5)


## Phone clean-up

That was it! Thank you so much for walking us through your app.

I'm now going to help you return your phone to the way it was.

<details>
<summary>Android guidelines 🤖</summary>

- Uninstall the VA app
    - _[option 1]_ Go to your home screen and find the app icon. Press and hold, then drag up to the top to Uninstall.
    - _[option 2]_ Go to your home screen and find the app icon. Press and hold, tap App info. Tap Uninstall.
    - _[option 3]_ Open Google Play Store. Tap profile photo, tap "Manage apps and device," tap "Manage" and select "VA app" to delete.
- Uninstall Firebase app
- Install standard VA app
- Toggle off "Internal app sharing"
    - Open Google Play Store, tap profile photo, tap General, tap Developer options.
- Reset any other security settings you changed
- Log back into VA app (if they want help)
- _[if relevant]_ Turn notifications back on
    _[pull down from top, select Do Not Disturb]_

</details>

<details>
<summary>iOS guidelines 🍎</summary>

- Reinstall public version of the VA app
    - Open the app store to find the app. This will install over the beta version
- Uninstall TestFlight
    - Go to home screen to find app. Press and hold, then tap Remove App.
- Log back into VA app (if they want help)
- _[if relevant]_ Turn notifications back on
    _[pull down from upper right, select Focus]_

</details>
