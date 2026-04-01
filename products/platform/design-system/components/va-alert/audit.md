# `va-alert` Usage Audit — vets-website

Audit of every `<va-alert>` and `<VaAlert>` usage across vets-website and the forms library (platform/forms-system), cataloged by content type for content modeling purposes.

---

## Summary stats

| Status | Approx. count |
|---|---|
| `error` | ~45 files |
| `warning` | ~35 files |
| `info` | ~20 files |
| `success` | ~12 files |
| `continue` | 3 files |
| dynamic / passed as prop | ~10 files |

**Total distinct files with alert usage: ~100+**

### Prop usage patterns observed

| Prop | How commonly used | Notes |
|---|---|---|
| `uswds` | Very common | Present on most modern usages |
| `visible` | Very common | Explicit boolean visibility control |
| `closeable` + `close-btn-aria-label` | Common | Many missing `close-btn-aria-label` when closeable |
| `slim` | Occasional | EZR, ArrayField, ContactInfo, UploadType2ErrorAlertSlim, EmergencyCareAlert, FieldHasBeenUpdated |
| `background-only` | Occasional | OracleHealth alerts, SingleFieldLoadFailAlert, SmMigratingFacilitiesAlerts |
| `full-width` | Rare | CommunityCareWarningBanner, EmergencyCareAlert |
| `set-focus` | Rare | ApiErrorNotification, RefillAlert |
| `role="alert"` / `role="status"` | Rare | Travel Pay, MHV Medical Records |
| `data-dd-action-name` | MHV apps only | Datadog action tracking |
| `onCloseEvent` | Common on dismissible | DebtNotificationAlert, ContactListMigrationAlert, CredentialRetirementAlerts, TravelWarningAlert |

---

## Content grouped by message type

The groupings below are organized by semantic message type — useful for determining which alerts are candidates for shared JSON content files vs. app-specific content.

---

### 1. System / server errors

Generic errors caused by backend failure. High reuse candidate.

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| HCA | `FormAlerts/ServerErrorAlert.jsx` | "Something went wrong on our end" | "We're sorry. Something went wrong on our end. Please try again." | `error` |
| HCA | `FormAlerts/SubmissionErrorAlert.jsx` | "We didn't receive your online application" | "We're sorry. Something went wrong when you tried to submit..." | `error` |
| Caregivers | `FormAlerts/GeneralErrorAlert.jsx` | "Something went wrong" | "We're sorry. Something went wrong on our end. Please try again later." | `error` |
| Caregivers | `FormAlerts/SubmissionErrorAlert.jsx` | "We didn't receive your online application" | "We're sorry. Something went wrong when you tried to submit your application. You won't be able to resubmit the form online." | `error` |
| Rated Disabilities | `ServerError.jsx` | "We're sorry. Something went wrong on our end." | Two paragraphs + helpdesk phone | `error` |
| EZR | `FormAlerts/ServerErrorAlert.jsx` | From content key `alert-server-title` | From content key `alert-server-message` | `error` |
| EZR | `FormAlerts/SubmissionErrorAlert.jsx` | From content key `alert-submission-title` | From content key `alert-submission-primary-message` | `error` |
| Representative Appoint | `SubmissionError.js` | "We couldn't generate your form" | "Select the 'Continue' button to retry" | `error` |
| VAOS | `referral-appointments/ErrorAlert.jsx` | "We're sorry. We've run into a problem." | Conditional error message | `error` |
| MHV Medical Records | `TimeoutAlertBox.jsx` | "We can't load this page right now" | System error + refresh instructions + support numbers | `error` |
| MHV Medications | `ApiErrorNotification.jsx` | Dynamic error message template | Apology + conditional pharmacy CTA | `error` |
| Travel Pay | `SubmissionErrorPage.jsx` | "Something went wrong on our end" | Error message about travel reimbursement + BTSSS link | `error` |
| Travel Pay | `ClaimErrorPage.jsx` | "Something went wrong on our end" | Dynamic description + link | `error` |
| Personalization | `VeteranStatusPageLevelError.jsx` | "This page isn't working right now" | "Something went wrong on our end. Refresh this page or try again later." | `warning` |
| Personalization | `LoadFail.jsx` | "This page isn't working right now." | "We're sorry. Something went wrong on our end..." | `warning` |

**Content modeling note:** "Something went wrong on our end" / "We're sorry. Something went wrong on our end." appears with minor variations across at least 10+ apps. Strong candidate for a shared `alert-server-error.json` and `alert-submission-error.json`.

---

### 2. Maintenance / downtime

Scheduled or unscheduled outage notices.

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| HCA | `FormAlerts/DowntimeWarning.jsx` | "The health care application is down for maintenance" | Maintenance message with `<va-telephone>` + hours | `warning` |
| HCA | `FormAlerts/PerformanceWarning.jsx` | "This application may not be working right now" | Alternative contact info + links | `warning` |
| EZR | `FormAlerts/DowntimeWarning.jsx` | From content key `alert-downtime-title` | From content key `alert-downtime-message` | `warning` |
| Debt Letters | `Alerts.jsx` (DowntimeMessage) | "Nightly tool maintenance" | Maintenance 12:30a–3a ET | `error` |
| Personalization Profile | `DowntimeBanner.jsx` | "We can't show your [section] information right now." | Maintenance notification with formatted end time | `warning` |
| Direct Deposit | `TemporaryOutage.jsx` (CustomMessaging) | "You can't manage your direct deposit information online right now" | Scheduled maintenance date/time + HelpDeskContact + hours | `warning` |
| Direct Deposit | `TemporaryOutage.jsx` (default) | "Direct deposit information isn't available right now" | Maintenance notice with refresh/retry instructions | `warning` |
| Letters | `systemDownMessage.jsx` | "We're sorry. Our system is temporarily down while we fix a few things." | "Please try again later." + link to VA.gov | `warning` |
| Claims Status | `ServiceUnavailableAlert.jsx` | Dynamic heading | "We're sorry. There's a problem with our system. Refresh this page or try again later." | `warning` |

**Content modeling note:** Strong candidate for `alert-maintenance.json` and `alert-system-unavailable.json` with a dynamic date/time slot for the maintenance window.

---

### 3. Authentication / sign-in required

Alerts prompting users to sign in or verify identity.

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| HCA | `FormAlerts/LoginRequiredAlert.jsx` | "Please sign in to review your information" | Paragraph + `<va-button text="Sign in to VA.gov">` | `error` |
| HCA | `FormAlerts/SaveTimeSipAlert.jsx` | About signing in to save time | Benefits of early sign-in | `info` |
| HCA | `FormAlerts/CheckAppStatusAlert.jsx` | "Have you already applied for VA health care before?" | `<va-button>` to sign in and check status | `info` |
| Personalization Profile | `CredentialRetirementAlerts.jsx` (AccountSecurityLoa1CredAlert) | "Verify your identity with Login.gov or ID.me to manage your profile information" | Paragraphs + links | `continue` |
| Personalization Profile | `CredentialRetirementAlerts.jsx` (SignInEmailAlert) | (none) | Paragraphs + credential setup link | `continue` |
| Direct Deposit | `VerifyIdentity.jsx` | "Verify your identity with Login.gov or ID.me to change your direct deposit information online" | Multi-paragraph instructions + phone numbers | `continue` |
| Verify | `UnifiedVerify.jsx` | (none — body only) | "You're verified" + paragraphs | `success` |

**Content modeling note:** "Verify your identity with Login.gov or ID.me" appears in at least 3 places with near-identical text. Candidate for `alert-verify-identity.json` and `alert-sign-in-required.json`.

---

### 4. Success / confirmation

Alerts confirming a user action was completed.

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| Appeals Shared | `ConfirmationAlert.jsx` | Dynamic `{alertTitle}` | `{children}` | `success` |
| Appeals Shared | `ConfirmationDecisionReviews.jsx` | Dynamic `{alertTitle}` | `{alertContent}` | `success` |
| Personalization Profile | `FieldHasBeenUpdated.jsx` | (none — slim) | Dynamic `{text}` | `success` |
| MHV Medical Records | `DownloadSuccessAlert.jsx` | "${type \|\| 'Download'} started" | "Check your device's downloads location for your file." | `success` |
| COE | `AvailableAlert.jsx` | "You've been given a COE" | Request date + reference number | `success` |
| COE | `EligibleAlert.jsx` | "You've been given an automatic COE" | Eligibility explanation + reference number | `success` |
| Enrollment Verification | `EnrollmentVerificationAlert.jsx` | "Your enrollment is currently verified" | — | `success` |

**Content modeling note:** "Download started" / "Check your device's downloads location" is reusable across MHV apps. Candidate for `alert-download-success.json`.

---

### 5. Data unavailable / records not found

Alerts shown when a service can't return user data.

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| Combined Debt Portal | `AlertCard.jsx` | "We can't access your overpayment records right now" / "We can't access your copay records right now" | "We're sorry. Something went wrong on our end. Check back soon." + contact info | `error` |
| Combined Debt Portal | `ComboAlerts.jsx` (Error) | "We can't access your overpayment and copay records right now" | — | `error` |
| Combined Debt Portal | `ComboAlerts.jsx` (Zero) | "You don't have any outstanding overpayments or copay bills" | — | `info` |
| Debt Letters | `Alerts.jsx` (ErrorAlert) | "Your debt letters are currently unavailable." | — | `error` |
| Debt Letters | `Alerts.jsx` (NoDebtLinks) | "You don't have any VA debt letters" | — | `error` |
| MHV Medical Records | `AccessTroubleAlertBox.jsx` | Conditional download or records access failure message | "We're sorry. We can't..." + contact/support numbers | `error` |
| Personalization Profile | `AccountBlocked.jsx` | "We can't show your information" | Paragraphs with help desk phone/TTY + hours | `warning` |
| Direct Deposit | `DirectDepositBlocked.jsx` | "We can't show your financial information" | Paragraphs with help desk phone/TTY | `warning` |
| Travel Pay | `ErrorAlert.jsx` | "We're sorry, we can't access your travel claims right now" | System error + BTSSS portal link + phone + facility locator | `error` |
| Travel Pay | `ForbiddenAlert.jsx` | "We can't find any travel claims for you" | Paragraph + list | `warning` |
| Personalization Dashboard | `benefit-application-drafts/Error.jsx` | "We can't show your forms and applications right now..." | "We're working to fix this problem. Check back later." | `warning` |
| Letters | `NoAddressBanner.jsx` | "We don't have a valid address on file for you" | Directing to profile contact information page | `warning` |
| Personalization Profile | `MissingContactInfoAlert.jsx` | "We don't have your contact information" / "We don't have your mobile phone number" | Dynamic + links | `warning` |
| Rated Disabilities | `MVIError.jsx` | Dynamic (trouble matching veteran records) | Three paragraphs + VA medical center locator link | `warning` |

**Content modeling note:** "We can't access your [x] right now" is one of the most repeated patterns across the codebase. Could be a parametric `alert-data-unavailable.json` with a `{resource}` slot.

---

### 6. Form validation / inline errors

Alerts within forms flagging missing or invalid input.

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| Claims Status | `UploadType2ErrorAlert.jsx` | Dynamic `{HEADING}` | List of failed file submissions | `error` |
| Claims Status | `UploadType2ErrorAlertSlim.jsx` | (slim — no headline) | "We need you to resubmit files for this claim." | `error` |
| Caregivers | `FormAlerts/SecondaryRequiredAlert.jsx` | "You need to add a Family Caregiver" | "Select Back to add a Primary Caregiver..." | `error` |
| Platform / forms-system | `ArrayField.jsx` | (slim) | "You've entered the maximum number of items allowed." | `warning` |
| Platform / forms-system | `arrayBuilderPatterns.jsx` | (slim) | "You must add at least one {nounSingular} for us to process this form." | `warning` |
| Platform / forms-system | `ContactInfo.jsx` | (slim) | "We still don't have your ${list}. Please edit and update the field." | `error` |
| Appeals Shared | `NeedsMissingInfoAlert.jsx` | "We're missing some of your personal information" | Contact DMDC support with phone + hours | `error` |
| EZR | `FormAlerts/PreferredFacilityAlert.jsx` | "You can't update your information using this online form" | Two paragraphs + link | `error` |
| Income & Asset Statement | `TrustSupplementaryFormsAlert.jsx` | "Additional documents needed" | "You added a trust but didn't upload documents..." + doc list | `info` |

**Content modeling note:** The platform forms-system slim alerts ("maximum number of items", "must add at least one") are already centralized in the platform layer — these are the closest existing model to what content modeling proposes.

---

### 7. Cerner / Oracle Health / facility transition

Alerts related to the Oracle Health migration.

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| VAOS | `CernerTransitionAlert.jsx` | "One of your health facilities is moving to My VA Health" / "Your health facility is moving to My VA Health" | Data migration paragraphs + transition date | `warning` |
| VAOS | `MigrationInProgressError.jsx` | Scheduling unavailability message | Conditional facility info + "You'll need to call to schedule." | `warning` / `error` |
| MHV Medications | `OracleHealthTransitionAlerts.jsx` | `{config.errorHeadline}` | Blocked prescription list / can't refill message | `error` |
| MHV Secure Messaging | `SmMigratingFacilitiesAlerts.jsx` | Error phase headline | Paragraph + facility list + migration date + links | `error` |
| MHV Secure Messaging | `OracleHealthMessagingIssuesAlert.jsx` | "We're working on messages right now" | Three paragraphs + link to My VA Health | `warning` |
| MHV Secure Messaging | `OHSyncStatusAlert.jsx` | `{Alerts.OHSyncStatus.HEADLINE}` | `{Alerts.OHSyncStatus.BODY}` | `warning` |

**Content modeling note:** This cluster is highly specific to a point-in-time migration. Probably not a candidate for permanent shared content, but useful to track for consistency while the migration is active.

---

### 8. Session / timeout

Alerts related to session state.

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| MHV Medical Records | `TimeoutAlertBox.jsx` | "We can't load this page right now" | System error + refresh + support numbers | `error` |
| Check-In | `TravelWarningAlert.jsx` | (none — slim body only) | "You can still check in [travel reimbursement message]" | `warning` |

---

### 9. Travel pay specific

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| Travel Pay | `FutureAppointmentAlert.jsx` | "We need to wait to file your claim" | Waiting for appointment completion + reimbursement info link | `warning` |
| Travel Pay | `OutOfBoundsAppointmentAlert.jsx` | "Your appointment happened more than 30 days ago" | Two paragraphs about 30-day deadline | `warning` |
| Travel Pay | `AppointmentErrorAlert.jsx` | "We're sorry, we can't access your appointment details right now" | Paragraphs + BTSSS link + phone + facility finder | `error` |

---

### 10. Benefit / status specific

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| Claims Status | `ClosedClaimAlert.jsx` | "We closed your claim on [date]" or "We closed your claim" | Conditional content about decision letter | `info` |
| COE | `PendingAlert.jsx` | "We're reviewing your request" | Request date + reference number + notification info | `info` |
| Enrollment Verification | `EnrollmentVerificationAlert.jsx` (warningAlert) | Missing verifications headline | — | `warning` |
| Enrollment Verification | `EnrollmentVerificationAlert.jsx` (pausedAlert) | "Paused education payments" | — | `error` |
| GI Bill | `NewFeatureProgramsYRTAlert.jsx` | Conditional institution/programType text | Yellow ribbon + programs links | `info` |
| Pensions | `DisabilityRatingAlert.jsx` | "Consider your disability rating before you apply" | Explanation about 100% rating and pension | (none set) |
| Personalization Dashboard | `DebtNotificationAlert.jsx` | (none) | "You have new debt." + CTALink + date | `warning` |

---

### 11. Messaging / communication

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| MHV Secure Messaging | `CannotReplyAlert.jsx` | `{Alerts.Message.CANNOT_REPLY_INFO_HEADER}` | `{Alerts.Message.CANNOT_REPLY_BODY}` + compose link | `warning` |
| MHV Secure Messaging | `StaleMessageAlert.jsx` | `{Alerts.Message.STALE_REPLY_INFO_HEADER}` | Conditional VISTA/OH paragraphs + compose link | `info` |
| MHV Secure Messaging | `BlockedTriageGroupAlert.jsx` | Dynamic `{title}` | Message + `<VaLinkAction>` | Dynamic |
| MHV Secure Messaging | `ContactListMigrationAlert.jsx` | `{matchedPhaseContent.headline}` | Top node + facility list + bottom node | `warning` |
| MHV Secure Messaging | `DismissibleAlert.jsx` | Optional `{headline}` | `{children}` | Dynamic |

---

### 12. Emergency / full-width

| App | File | Headline | Body | Status |
|---|---|---|---|---|
| Facility Locator | `CommunityCareWarningBanner.jsx` | "What to know about community health care facilities" | "If you go to a community care facility, call first to confirm they can provide the care you need." | `warning` |
| Facility Locator | `EmergencyCareAlert.jsx` | (slim — no headline) | "Note: If you think your life or health is in danger, call 911 or go to the nearest emergency department right away." | `info` |

---

## Gaps and issues found

### Missing `close-btn-aria-label` on closeable alerts

The following use `closeable` but either omit `close-btn-aria-label` or pass an empty/generic value:

- `Personalization/CredentialRetirementAlerts.jsx` (SignInEmailAlert) — passes `"Close notification"` (generic)
- `Dashboard/DebtNotificationAlert.jsx` — passes `"Close notification"` (generic)
- `MHV Medications/DelayedRefillAlert.jsx` — no `close-btn-aria-label` found
- `GI Bill/NewFeatureProgramsYRTAlert.jsx` — passes `"Close notification"` (generic)
- Multiple Travel Pay files set `closeable="false"` as a string instead of a boolean

### `slim` used with a `headline` slot

- No confirmed violations found, but `UploadType2ErrorAlertSlim.jsx` naming implies it's a manual workaround for a slim-with-content case — worth verifying.

### `status` not set (defaults to `info`)

- `Pensions/DisabilityRatingAlert.jsx` (Alert 1) — no status prop set at all; relies on default
- `Pensions/FormAlerts/index.jsx` (ContactWarningAlert, ContactWarningMultiAlert, AccountInformationAlert) — no status prop set

### Dynamic / prop-drilled content (not auditable as static content)

The following pass all content as props and have no auditable static text — these are generic wrappers, not content holders:

- `VAOS/InfoAlert.jsx`
- `Appeals Shared/MessageAlert.jsx`
- `Personalization/VeteranStatusAlerts.jsx` (VeteranStatusAlert)
- `Facility Locator/Alert.jsx`
- `MHV Secure Messaging/SmAlert.jsx`
- `MHV Secure Messaging/DismissibleAlert.jsx`
- `Static Pages/CallToActionAlert.jsx`
- `Combined Debt Portal/DetailsAlert.jsx`

---

## Candidates for shared `_data/content/alerts/` JSON files

Based on reuse patterns identified above:

| Proposed file | Message type | Used in |
|---|---|---|
| `alert-server-error.json` | Generic server/system error | HCA, Caregivers, Rated Disabilities, MHV, VAOS, Travel Pay, and more |
| `alert-submission-error.json` | Form submission failure | HCA, Caregivers, EZR, Representative Appoint |
| `alert-maintenance.json` | Scheduled downtime | HCA, EZR, Debt Letters, Letters, Direct Deposit |
| `alert-system-unavailable.json` | Unscheduled outage | Claims Status, Personalization, MHV |
| `alert-data-unavailable.json` | Service can't return data | Combined Debt Portal, Travel Pay, Profile |
| `alert-sign-in-required.json` | Must be signed in | HCA, Profile |
| `alert-verify-identity.json` | Must verify identity | Profile (3 instances with near-identical text) |
| `alert-download-success.json` | File download started | MHV Medical Records |
| `alert-max-items.json` | Form array field max reached | forms-system/ArrayField |
| `alert-min-items-required.json` | Form array field min not met | forms-system/arrayBuilderPatterns |
| `alert-emergency-care.json` | 911 / emergency dept note | Facility Locator |

---

## Forms library (platform/forms-system) alerts

The platform layer already has centralized alert content — the closest existing precedent for shared content modeling:

| File | Headline | Body | Status | Slim |
|---|---|---|---|---|
| `ArrayField.jsx` | — | "You've entered the maximum number of items allowed." | `warning` | Yes |
| `arrayBuilderPatterns.jsx` | — | "You must add at least one {nounSingular} for us to process this form." | `warning` | Yes |
| `ContactInfo.jsx` (update success) | — | `{content.updated}` (dynamic) | `success` | Yes |
| `ContactInfo.jsx` (missing field error) | — | "We still don't have your ${list}. Please edit and update the field." | `error` | Yes |
