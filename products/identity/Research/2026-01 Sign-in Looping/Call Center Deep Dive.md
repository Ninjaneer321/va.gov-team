# Sign-In Loop Issue Summary
**Data Period:** January 26-29, 2026 | **Total Cases:** 8

## Overview
Eight Veterans experienced sign-in looping issues where they were repeatedly returned to the sign-in page or signed out immediately after authentication. Cases primarily involved ID.me (3 cases) and Login.gov (2 cases) credentials, with 2 cases categorized as general system errors.

## Key Themes

### 1. **Sign-In Then Immediate Sign-Out Pattern**
The most consistent pattern across cases is that Veterans successfully enter credentials and complete authentication (including MFA), but are then immediately signed out or looped back to the sign-in page.

**Representative case:** "Signs in, then gets signed out" | "Caller states she is being looped when trying to sign in...signs her in and then signs her right back out"

### 2. **Post-Authentication Redirect Failures**
Several cases show issues with the redirect process after authentication, particularly with Login.gov where Veterans get stuck on intermediate pages asking them to sign out or return to VA.gov.

**Representative case:** Veteran receives code from Login.gov and sees prompt "do you want to sign out of login.gov and return to va or stay signed in" - selecting either option fails to properly sign them into VA.gov.

### 3. **Persistent Loading/Buffering Issues**
Multiple cases mention the page getting stuck in a loading state after authentication without completing the sign-in.

**Representative case:** "Upon returning to www.va.gov website continues to buffering loading with message 'Please wait while we load your application,' but application doesn't load."

### 4. **Error Messages Are Inconsistent**
- Login.gov: "We are sorry something went wrong on our end"
- ID.me via mobile app: "Error MFAL01. Something went wrong when delivering authentication code"
- Many cases report no specific error message at all

### 5. **Multi-Device/Multi-Browser Persistence**
Issues persist across different devices and browsers, suggesting the problem is not client-side:
- Occurred on PC, laptop, phone (iOS and Android)
- Persisted after switching browsers (Chrome, Edge, Safari)
- Occurred after browser maintenance (clearing cache/cookies)

## Technical Environment
- **Operating Systems:** Windows (4 cases), iOS (1 case)
- **Browsers:** Chrome, Edge, Safari mentioned (data incomplete for 5 cases)
- **Credentials:** ID.me (37.5%), Login.gov (25%), System error/unspecified (37.5%)
- **Access Points:** VA.gov homepage, MHV portal, VA Mobile App, Quick Submit

## Resolution Status
- **All cases escalated** - no immediate resolution found
- **Browser maintenance attempted in multiple cases** - universally unsuccessful
- **Device switching attempted** - universally unsuccessful
- **Browser switching attempted** - universally unsuccessful

## Critical Findings
1. **Authentication completes successfully** (Veterans enter credentials, receive MFA codes) but the **session fails to establish** on VA.gov
2. **Problem is server-side or session management related** - not resolved by client-side troubleshooting
3. **Affects multiple credential providers**, suggesting a common VA.gov session initialization issue rather than provider-specific problems
4. **Impact on access:** Veterans unable to access secure messages, Quick Submit, and general authenticated VA.gov services

## Recommended Next Steps
1. Investigate VA.gov session establishment after successful credential provider authentication
2. Review redirect handling from Login.gov and ID.me back to VA.gov
3. Examine application loading process that occurs after authentication
4. Review server logs for the specific timeframe (Jan 26-29) to identify common failure points
5. Test the complete authentication flow for Login.gov and ID.me with focus on post-authentication redirect and session creation
