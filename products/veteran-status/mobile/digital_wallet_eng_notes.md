# Digital Wallet

This document covers the architecture, pass flow, and implementation details for the Digital Wallet feature in the VA Health and Benefits (VAHB) mobile app. The feature allows Veterans to add their Veteran Status Card (VSC) to Apple Wallet or Google Wallet directly from the app.

Apple Wallet and Google Wallet are covered in separate sections below, as the two platforms differ significantly in their pass formats, update mechanisms, certificate requirements, and infrastructure.

NOTE: This document is to cover the research done so far and may not be an accurate representation of any app or POC that is currently live or demoable. 

---

## Apple Wallet

### Overview

The Apple Wallet integration uses an app-mediated refresh model. The pass itself is static — it cannot call the VA backend or receive push updates on its own. All data updates are initiated by the user through the VAHB mobile app, which requests a freshly signed `.pkpass` from the backend and presents it to Apple Wallet for installation or replacement. [[#960]](https://va.ghe.com/software/va-mobile-feature-support/issues/960)

This approach was chosen for its security properties: there are no persistent credentials stored on-device, no device-to-user linkage outside the authenticated app session, and the pass signing key never leaves the backend. It aligns with zero-trust and least-privilege principles. [[#960]](https://va.ghe.com/software/va-mobile-feature-support/issues/960)

### Architecture

- The pass format is Apple's `.pkpass`. [[#846]](https://va.ghe.com/software/va-mobile-feature-support/issues/846)
- Pass generation uses the `passbook2` Ruby gem on the backend. [[#846]](https://va.ghe.com/software/va-mobile-feature-support/issues/846)
- The pass does **not** use a `webServiceURL` or `authenticationToken`. Apple's push-based WebService protocol is intentionally not implemented. [[#960]](https://va.ghe.com/software/va-mobile-feature-support/issues/960)
- A consistent `serialNumber` per Veteran ensures that when a new pass is installed, Apple Wallet replaces the existing VSC pass rather than creating a duplicate. [[#960]](https://va.ghe.com/software/va-mobile-feature-support/issues/960)
- `associatedStoreIdentifiers` is included in the pass, which causes Apple Wallet to display an "Open App" button on the pass, deep-linking the user back into the VAHB app. [[#960]](https://va.ghe.com/software/va-mobile-feature-support/issues/960)

### Pass Flow [[#960]](https://va.ghe.com/software/va-mobile-feature-support/issues/960)

#### 1. Install and Link Pass
- After a successful ID.me login in the app, the user can add their VSC to Apple Wallet. 
- The app requests a freshly signed `.pkpass` from the backend. 
- The pass includes `associatedStoreIdentifiers` pointing to the VAHB app so Apple Wallet can display an "Open App" button on the card.
- The app presents the Apple Wallet add sheet (`PKAddPassesViewController`) for the user to confirm installation. The pass can be refreshed at any time via the "Refresh Wallet Card" button on the Veteran Status Card screen in the app.

#### 2. Initiate Refresh from Wallet
- If the user views their VSC in Apple Wallet and taps "Open App": 
  - Apple Wallet deep-links into the VSC section of the VAHB app using either a Universal Link or the App Store ID link.
  - The app opens directly to the Veteran Status Card screen.

#### 3. Authenticate and Update
- If the user is not already logged in, they complete ID.me authentication. 
- Once authenticated, the app fetches current VSC data from local or backend sources and requests a freshly signed `.pkpass` from the backend. 
- The app presents the Wallet add/replace sheet (`PKAddPassesViewController`) for the user to confirm.

#### 4. Replace in Wallet
- Because the pass uses a consistent `serialNumber` for that user, Apple Wallet replaces the existing VSC pass rather than adding a duplicate. 
- The user sees their updated card in Apple Wallet immediately.

#### 5. Future Updates
- The user can refresh their VSC at any time by navigating to the Veteran Status Card screen in the app and tapping the "Refresh Wallet Card" button. 
- The VA will not proactively notify the user that their card may be out of date. It is the Veteran's responsibility to decide when to refresh — for example, after a name change, a disability rating update, or a change in period of service. [[#798]](https://va.ghe.com/software/va-mobile-feature-support/issues/798)

### Security [[#960]](https://va.ghe.com/software/va-mobile-feature-support/issues/960)

- No persistent credentials or device-to-user linkage are stored on-device. 
- All updates occur inside the authenticated app environment. 
- The pass signing key remains protected on the backend at all times. 
- There is no background communication between the pass and the VA backend. 

### Detecting Pass Installation State

On iOS, PassKit exposes a native API to check whether a specific pass is installed on the current device. In React Native, this is accessible via the `react-native-wallet-manager` library, which wraps the native PassKit check without requiring a custom native bridge. [[#977]](https://va.ghe.com/software/va-mobile-feature-support/issues/977)

The app calls `hasPass(passTypeIdentifier, serialNumber)`, which mirrors Apple's `PKPassLibrary.pass(withPassTypeIdentifier:serialNumber:)`. If the pass exists on the device it returns `true`; otherwise `false`. [[#977]](https://va.ghe.com/software/va-mobile-feature-support/issues/977)

**Data required:** [[#977]](https://va.ghe.com/software/va-mobile-feature-support/issues/977)
- `passTypeIdentifier` — the VA's Apple pass type ID (e.g., `pass.com.va.veteran-status-card`).
- `serialNumber` — the serial number issued to this user, returned by the backend when the pass is created and stored in the app.

> **Note:** This check is device-specific. `PKPassLibrary` only knows about passes installed on the current device. If a user adds the pass on one device and opens the VAHB app on a different device, the app will incorrectly show "Add to Wallet" rather than "Installed." This is a known constraint of Apple's PassKit API. [[#977]](https://va.ghe.com/software/va-mobile-feature-support/issues/977)

### Frontend PoC Branch

```
POC/847-apple-digital-wallet
```

---

## Google Wallet

### Overview

The Google Wallet integration uses a server-initiated update model. The pass is a Generic Pass object defined by a pass class and a pass object. The pass class controls the visual template and layout; the pass object contains the Veteran's individual data. When a user initiates a refresh from within the VAHB app, the backend calls Google's Wallet API directly to update the pass. [[#804]](https://va.ghe.com/software/va-mobile-feature-support/issues/804)

Like the Apple implementation, there is no proactive staleness detection. The VA will not notify the user that their card may be out of date — it is the Veteran's responsibility to decide when to refresh. [[#798]](https://va.ghe.com/software/va-mobile-feature-support/issues/798)

### Architecture

- The pass format is Google's Generic Pass. [[#804]](https://va.ghe.com/software/va-mobile-feature-support/issues/804)
- The backend uses the `google-apis-walletobjects_v1` Ruby gem to communicate with Google's Wallet API. [[#804]](https://va.ghe.com/software/va-mobile-feature-support/issues/804)
- Pass objects are signed using JWT-based authentication via the VA's Google service account. [[#804]](https://va.ghe.com/software/va-mobile-feature-support/issues/804)
- A consistent `objectId` (or equivalent unique identifier) per Veteran ensures that when a pass is updated, Google Wallet updates the existing VSC pass in place rather than creating a duplicate.
- `AppLinkData` is included in the pass class, which causes Google Wallet to display an "Open VA mobile app" button on the front of the card. This button text is capped at 30 characters. The current leading option is **"Open VA mobile app"** — final copy is pending a team decision. [[#974]](https://va.ghe.com/software/va-mobile-feature-support/issues/974)
- The pass class is not managed through the Google Pay & Wallet Console UI. It is handcrafted as JSON and applied via Google's REST APIs using the VA's service account credentials. Any future changes to the pass class layout must go through the same process.
- The pass class template is defined using `ClassTemplateInfo` objects: `CardTemplateOverride` controls the front of the pass and `DetailsTemplateOverride` controls the pass details view. [[#966]](https://va.ghe.com/software/va-mobile-feature-support/issues/966)
- Google Wallet displays passes in a list view when the app is first opened, showing a miniature version of each pass. This view can be customized using `ListTemplateOverride` — the team should decide whether to implement this from a UX perspective. [[#966]](https://va.ghe.com/software/va-mobile-feature-support/issues/966)

### Pass Flow

#### 1. Install and Link Pass
- After a successful ID.me login in the app, the user can add their VSC to Google Wallet. [[#804]](https://va.ghe.com/software/va-mobile-feature-support/issues/804)
- The app calls the backend, which generates a signed Generic Pass object using the VA's Google service account credentials. [[#804]](https://va.ghe.com/software/va-mobile-feature-support/issues/804)
- `AppLinkData` is included in the pass class to display the "Open VA mobile app" button on the front of the card in Google Wallet. [[#974]](https://va.ghe.com/software/va-mobile-feature-support/issues/974)
- The app presents the Google Wallet save flow for the user to confirm installation.

#### 2. Initiate Refresh from Google Wallet
- If the user views their VSC in Google Wallet and taps "Open VA mobile app": [[#974]](https://va.ghe.com/software/va-mobile-feature-support/issues/974)
  - Google Wallet deep-links back into the Veteran Status Card screen of the VAHB app using the link defined in `AppLinkData`.
  - The app opens directly to the Veteran Status Card screen.
- Because there is no mechanism in Google Wallet to detect whether a pass is out of date, the "Open VA mobile app" button is the primary path for a user to initiate a refresh. [[#974]](https://va.ghe.com/software/va-mobile-feature-support/issues/974)

#### 3. Authenticate and Update
- If the user is not already logged in, they complete ID.me authentication.
- Once authenticated, the app displays the Veteran Status Card screen with a "Refresh Wallet Card" button.
- The user taps the button, the app calls the backend, and the backend calls `PUT /google/:id` with the updated VSC data using the VA's Google service account credentials via the `google-apis-walletobjects_v1` API client. [[#804]](https://va.ghe.com/software/va-mobile-feature-support/issues/804)

#### 4. Replace in Wallet
- Because each user's pass object uses a consistent `objectId` (or equivalent unique identifier), Google Wallet updates the existing VSC pass in place rather than creating a duplicate.
- The user sees their updated card in Google Wallet.

#### 5. Future Updates
- The user can refresh their VSC at any time by navigating to the Veteran Status Card screen in the app and tapping the "Refresh Wallet Card" button.
- The VA will not proactively notify the user that their card may be out of date. It is the Veteran's responsibility to decide when to refresh — for example, after a name change, a disability rating update, or a change in period of service. [[#798]](https://va.ghe.com/software/va-mobile-feature-support/issues/798)

### Security

- No persistent credentials or device-to-user linkage are stored on-device.
- All updates occur inside the authenticated app environment.
- The VA's Google service account credentials remain protected on the backend at all times. [[#804]](https://va.ghe.com/software/va-mobile-feature-support/issues/804)
- The VAHB Mobile App's SHA-1 certificate fingerprint is registered in the Google Pay & Wallet Console under App Permissions. This was added from the Google Play Console under App Integrity > App Signing. As long as the SHA-1 remains the same, this does not need to be modified going forward. [[#899]](https://va.ghe.com/software/va-mobile-feature-support/issues/899)

### Detecting Pass Installation State

Google does not expose a client-side API equivalent to Apple's `PKPassLibrary`. The app cannot query Google Wallet directly to determine whether a pass is installed. [[#978]](https://va.ghe.com/software/va-mobile-feature-support/issues/978)

The recommended approach is for the backend to query Google's Wallet API directly using the `genericobjects.get` endpoint:

```
GET https://walletobjects.googleapis.com/walletobjects/v1/genericObject/{resourceId}
```

- If the object exists, Google returns the full pass object — the backend tells the app the pass is installed.
- If the object does not exist, Google returns a `404` — the backend tells the app the pass is not installed.

This approach requires a new backend endpoint (e.g., `GET /google/pass_status`) that the app calls with the authenticated user's identifier. The backend constructs the `objectId`, calls `service.get_genericobject(object_id)` via the existing `google-apis-walletobjects_v1` setup, and returns a simple `{ installed: true/false }` response.

> **Note:** Unlike Apple's device-specific check, querying Google's Wallet API reflects the pass state at the account level — meaning it will correctly show "Installed" across all of a user's Android devices, not just the one they originally used to add the pass.

**Reference:** [Google Wallet genericobjects.get](https://developers.google.com/wallet/generic/rest/v1/genericobject/get)

### Known UX Constraints

The following constraints were identified during the PoC and should be reflected in UX design: [[#966]](https://va.ghe.com/software/va-mobile-feature-support/issues/966)

- There is no native way to add a "Details" button to the front of the pass. This element should be removed from the UX design.
- Visual separators between sections of the pass details are not supported by Google Wallet and should be removed from the UX design.
- The "Need to fix an error?" section currently uses phone and TTY links via HTML, which display awkwardly and are not officially supported. The team should consider replacing these with `LinksModuleData`, which would allow for cleaner and more prominent call buttons. The Starbucks pass is a useful reference for how this pattern looks in practice.

### Frontend PoC Branch

```
POC/807-google-digital-wallet
```

---

## Backend PoC

### Repository

[https://va.ghe.com/software/mobile-wallet-poc](https://va.ghe.com/software/mobile-wallet-poc)

### Hosting

The PoC backend is currently hosted on Railway. Alex owns the Railway account — reach out to him directly to gain access. Dave and Michael currently have access. [[Dave Knowledge Transfer]](https://docs.google.com/document/d/15_-Z-40VtfJNWNKlWWPsmtdCBRS1ghH0WzgnC-QU1KA/edit?tab=t.0#heading=h.h6fpske38gyc)

### Backend notes
- 

### Key Backend Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/apple` | Create Apple Wallet pass |
| `POST` | `/google` | Create Google Wallet pass |
| `PUT` | `/google/:id` | Update Google Wallet pass |
| `POST` | `/google/create_or_update_class` | Create or update Google Wallet pass class |
| `GET` | `/google/get_class` | Get current pass class definition |
| `GET` | `/admin/passes` | List all passes |
| `POST` | `/admin/passes/:id/trigger_update` | Manually trigger a pass update |
| `DELETE` | `/admin/passes/:id` | Delete a pass |
| `GET` | `/admin/devices` | List registered devices |

### Google Cloud Console

Currently, only Dave and Alex have access to the Google Cloud Console. Reach out to core mobile if changes are needed or if another person requires access. There should be nothing to action here until the team is ready to move to a production service account. [[Dave Knowledge Transfer]](https://docs.google.com/document/d/15_-Z-40VtfJNWNKlWWPsmtdCBRS1ghH0WzgnC-QU1KA/edit?tab=t.0#heading=h.h6fpske38gyc)

The `va-mobile-app` project in the Google Cloud Console is where the `mfs-wallet-poc-service-account@va-mobile-app.iam.gserviceaccount.com` service account is configured. This service account has Wallet API permissions and includes a private key that allows the PoC to create and update the pass class and sign pass object JWTs. The private key is stored in Railway as a base64-encoded environment variable called `GOOGLE_APPLICATION_CREDENTIALS_B64`. [[Dave Knowledge Transfer]](https://docs.google.com/document/d/15_-Z-40VtfJNWNKlWWPsmtdCBRS1ghH0WzgnC-QU1KA/edit?tab=t.0#heading=h.h6fpske38gyc)

### Google Pay & Wallet Console

The Google Pay & Wallet Console serves several functions relevant to this project: [[Dave Knowledge Transfer]](https://docs.google.com/document/d/15_-Z-40VtfJNWNKlWWPsmtdCBRS1ghH0WzgnC-QU1KA/edit?tab=t.0#heading=h.h6fpske38gyc)

- **Pass classes** — This is where Google pass classes are created and managed.
- **Business profile** — The VA will eventually need to complete their business profile here and request publishing access before moving out of demo mode.
- **Test accounts** — Test email accounts can be added here for testing passes in demo mode. The tester must sign into Google Pay on a real physical Android device with one of these allowlisted email addresses for pass installation to work. Testing is not possible on an emulator. [[#899]](https://va.ghe.com/software/va-mobile-feature-support/issues/899)
- **App Permissions** — The VAHB Mobile App's SHA-1 certificate fingerprint is registered here. It was sourced from the Google Play Console under App Integrity > App Signing. This should not need to be modified as long as the SHA-1 remains the same. [[#899]](https://va.ghe.com/software/va-mobile-feature-support/issues/899)
- **User access** — Additional team members can be granted Admin or Developer access from this console.

> **Note:** Google provides a pass object JSON validator in this console, but it did not function reliably during the PoC — even after multiple rounds of support from Google.

### Testing Notes

- Every attempt to add a new pass during testing must use a new DoD number. Otherwise the backend returns cached pass data. [[#807]](https://va.ghe.com/software/va-mobile-feature-support/issues/807)
- To reset Google Wallet state on a test device, clear the app data via `adb`: [[#807]](https://va.ghe.com/software/va-mobile-feature-support/issues/807)

```bash
adb -s <DeviceSerialNumber> shell pm clear com.google.android.apps.walletnfcrel
```
