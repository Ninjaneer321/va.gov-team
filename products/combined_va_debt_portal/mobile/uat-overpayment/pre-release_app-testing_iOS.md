# Testing with pre-release app version: iOS


- _No preparation required from participants._
- _The moderator will facilitate the full installation and configuration at the start of the session._
- _Participants do not provide email addresses prior to the session._


## Preparation



1. Request public TestFlight install link from mobile engineering


## Install and set-up

*All done at the start of session while participant shares screen*

*Offer to help them turn off notifications before sharing screen (pull down from upper right, select Focus)*



1. Participant opens TestFlight link in browser
2. Download TestFlight
3. Open TestFlight to accept terms + conditions. Stop once they get to “Ready to Test” screen
4. Return to browser, install VA Health and Benefits app
    1. If they have the public version, this will install over it


## Feature flag

Some of the latest updates are behind feature flags, and you'll need to turn them on.

1. Enter Demo Mode
    * Tap the VA logo 7 times until the password field appears.
    * Password: Zhuzh-it
    * Tap Sign In to enter Demo mode.

2. Locate the Feature Flag
    * Navigate to: Profile > Settings > Developer Screen.
    * Scroll down to the Firebase section (located just below the first set of blue buttons).
    * Tap Remote Config.
      > Note: Do not tap the "Remote Config Test" blue button.
    * Toggle on the specific feature flag.
    * Confirm changes: Apply (upper right) or Apply Overrides (bottom).

3. Sign Out (Optional)
    * If you need to sign in with different credentials to test the feature, go to: 
  Home > Profile > Settings > Sign Out.


## Clean-up

1. Reinstall public version of VA app
    1. Go to app store - downloading the public version will install over the beta version
2. Uninstall TestFlight
3. Log into VA app
4. (if relevant) Turn notifications back on


## Notes



* Alternatively, we can add participants manually to TestFlight, which triggers an automated invitation email to them.
* The pre-release version of the app will replace the standard version
* Make sure they do not close any apps as they’re switching between them
* If anyone is using two devices on the Zoom call:
    * We want to disable speaker and microphone on phone; otherwise you'll always hear an echo even with the volume all the way down.
    * On the screen with the Join button, tap the speaker icon in upper right, select No audio.
    * If they're already on the call: tap the speaker icon at top right of screen to select "disconnect my audio."
* Technical pre-requisites for participants (for both iOS and Android)
    * **VA Credentials:** You have a username & password for ID.me or Login.gov and can access your two-factor authentication (text code or app).
    * _[Android only]_ **Email Access:** You can open your email directly on your mobile phone to click the test link.
    * **Testing Tools:** You are willing to download TestFlight (iOS) or Firebase App Distribution (Android).
    * **App Replacement:** If you have the standard VA app, the test version will temporarily replace it. (If you don't have the app, it will simply install as a new one). We will help you restore the original version at the end.
    * _[Android only]_ **Permissions:** You are comfortable allowing your phone to "Install Unknown Apps" within your security settings for this session.
    * **Connection:** You will be connected to WiFi during our call for a stable download.
