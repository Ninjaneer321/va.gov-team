# Testing with pre-release app version: Android

- _No preparation required from participants._
- _The moderator will facilitate the full installation and configuration at the start of the session._
- _Participants do not provide email addresses prior to the session._


## Preparation



1. Request public Firebase install link from mobile engineering


## Install and set-up

*All done at the start of session while participant shares screen*

*Offer to help them turn off notifications before sharing screen (pull down from top, select Do Not Disturb)*



1. Participants opens Firebase link on phone, enters email address (one that can be accessed on phone)
2. Open link from email on phone (from: VA Health and Benefits…)
    1. Tap Get Started
    2. Make sure email is the one they typed in
    3. Download app tester
3. Enable permissions to install a pre-release version
    1. Google Play - profile photo - Settings - About
    2. Tap “Play Store version” seven times until you see the notice that you are a developer.
    3. Scroll up and tap General - Developer options - toggle “Internal app sharing” on
4. Return to email browser, select Done
5. (if required) Uninstall standard version of app
6. Download the release and install


## Clean-up



1. Uninstall test build of VA app
2. Uninstall Firebase
3. Install standard VA app
4. Toggle off “Internal app sharing” 
    1. Play Store: profile - general - developer options
5. Reset any other security settings (e.g. auto blocker, install unknown apps)
6. Log into VA app
7. (if relevant) Turn notifications back on


## After the session



1. Remove their email address from Firebase so they don’t continue to get email updates


## Notes



* Alternatively, we can add participants manually to Firebase, which triggers an automated invitation email to them.
* The pre-release version of the app will replace the standard version
* Make sure they do not close any apps as they’re switching between them
* Explanation for changing permissions to share with participants: 
    * Google Play is the standard way apps are sent to Android phones. This app is safe, but because the version we’re testing today is still in development, it hasn't gone through Google’s final review yet, and therefore it’s blocked by default. We need to adjust some settings to allow you to download it, and we’ll make sure to get your phone back to the way it was once we’re finished.
* Troubleshooting changing permissions
    * Some phones have another layer of protection that prevents users from downloading unknown apps
        * Phone Settings - Security and privacy - Auto blocker
        * Phone Settings - Apps - Special Access - Install unknown apps - Chrome - Allow from this source
    * Problem with turning on "Internal app sharing"
        * Clear cache: Phone Settings - Apps - Google Play Store - Storage and cache - Clear cache
* There is no simple "off" switch for turning on developer mode within Google Play Store
    * The only way to hide it again is to Clear Storage/Data for the Google Play Store app. This resets the Play Store settings back to its original state, so it would wipe out custom settings.
    * Having this mode on gives access to the developer options menu, but otherwise doesn’t change anything.
    * Recommendation: It is safer to leave developer mode on rather than risk resetting a Veteran’s personalized Play Store settings.
* Technical pre-requisites for participants (for both iOS and Android)
    * **VA Credentials:** You have a username & password for ID.me or Login.gov and can access your two-factor authentication (text code or app).
    * _[Android only]_ **Email Access:** You can open your email directly on your mobile phone to click the test link.
    * **Testing Tools:** You are willing to download TestFlight (iOS) or Firebase App Distribution (Android).
    * **App Replacement:** If you have the standard VA app, the test version will temporarily replace it. (If you don't have the app, it will simply install as a new one). We will help you restore the original version at the end.
    * _[Android only]_ **Permissions:** You are comfortable allowing your phone to "Install Unknown Apps" within your security settings for this session.
    * **Connection:** You will be connected to WiFi during our call for a stable download.
