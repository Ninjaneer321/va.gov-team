# GA4 Alert Tracking Implementation Spec

**Ticket:** [#115763](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115763)  
**Branch:** `115763-MHV-Portal-GA4-Alert-Tracking`  
**Created:** 2026-04-15

---

## Overview

Add GA4 (`recordEvent`) and Datadog RUM (`datadogRum.addAction`) tracking to all alerts across MHV portal applications, VAOS, and Travel Pay.

### Pattern Reference

```jsx
// src/applications/mhv-landing-page/components/alerts/AlertVerifyAndRegister.jsx
import { default as recordEventFn } from '~/platform/monitoring/record-event';
import { datadogRum } from '@datadog/browser-rum';

useEffect(() => {
  recordEvent({
    event: 'nav-alert-box-load',
    action: 'load',
    'alert-box-headline': headline,
    'alert-box-status': 'warning', // error | warning | info | success
  });
  datadogRum.addAction('Showed Alert Box: {AlertName}');
}, [headline, recordEvent]);
```

---

## Implementation Checklist

### Legend
- [ ] Not started
- [x] Complete
- [~] Skipped (wrapper/container, no direct alert)
- [!] Partial (needs fix)

---

## 0. MHV Landing Page (6 dedicated) - REFERENCE IMPLEMENTATION

| # | Status | Component | File | recordEvent | datadogRum | Notes |
|---|--------|-----------|------|-------------|------------|-------|
| 0.1 | [x] | `AlertVerifyAndRegister` | [components/alerts/AlertVerifyAndRegister.jsx](src/applications/mhv-landing-page/components/alerts/AlertVerifyAndRegister.jsx) | ✅ | ✅ | Pattern reference |
| 0.2 | [x] | `AlertAccountApiAlert` | [components/alerts/AlertAccountApiAlert.jsx](src/applications/mhv-landing-page/components/alerts/AlertAccountApiAlert.jsx) | ✅ | ✅ | |
| 0.3 | [x] | `AlertDownloadSuccess` | [components/alerts/AlertDownloadSuccess.jsx](src/applications/mhv-landing-page/components/alerts/AlertDownloadSuccess.jsx) | ✅ | ✅ | |
| 0.4 | [x] | `AlertUnregistered` | [components/alerts/AlertUnregistered.jsx](src/applications/mhv-landing-page/components/alerts/AlertUnregistered.jsx) | ✅ | ✅ | |
| 0.5 | [x] | `AlertDownloadAccessTrouble` | [components/alerts/AlertDownloadAccessTrouble.jsx](src/applications/mhv-landing-page/components/alerts/AlertDownloadAccessTrouble.jsx) | ✅ | ✅ | |
| 0.6 | [!] | `AlertErrorBoundry` | [components/alerts/AlertErrorBoundry.jsx](src/applications/mhv-landing-page/components/alerts/AlertErrorBoundry.jsx) | ✅ | ❌ | **MISSING datadogRum** |

**Subtotal: 6 items (5 complete, 1 needs datadogRum fix)**

---

## 1. MHV Secure Messaging (13 dedicated + 5 inline)

### Dedicated Alert Components

| # | Status | Component | File | Alert Status |
|---|--------|-----------|------|--------------|
| 1 | [ ] | `AlertBackgroundBox` | [components/shared/AlertBackgroundBox.jsx](src/applications/mhv-secure-messaging/components/shared/AlertBackgroundBox.jsx) | Dynamic |
| 2 | [ ] | `BlockedTriageGroupAlert` | [components/shared/BlockedTriageGroupAlert.jsx](src/applications/mhv-secure-messaging/components/shared/BlockedTriageGroupAlert.jsx) | Error/Warning |
| 3 | [ ] | `CareTeamNameChangeAlert` | [components/shared/CareTeamNameChangeAlert.jsx](src/applications/mhv-secure-messaging/components/shared/CareTeamNameChangeAlert.jsx) | Info |
| 4 | [ ] | `OHSyncStatusAlert` | [components/shared/OHSyncStatusAlert.jsx](src/applications/mhv-secure-messaging/components/shared/OHSyncStatusAlert.jsx) | Warning |
| 5 | [ ] | `ContactListMigrationAlert` | [components/shared/ContactListMigrationAlert.jsx](src/applications/mhv-secure-messaging/components/shared/ContactListMigrationAlert.jsx) | Warning |
| 6 | [ ] | `CannotReplyAlert` | [components/shared/CannotReplyAlert.jsx](src/applications/mhv-secure-messaging/components/shared/CannotReplyAlert.jsx) | Warning |
| 7 | [ ] | `OracleHealthMessagingIssuesAlert` | [components/shared/OracleHealthMessagingIssuesAlert.jsx](src/applications/mhv-secure-messaging/components/shared/OracleHealthMessagingIssuesAlert.jsx) | Warning |
| 8 | [ ] | `MigratedMessageAlert` | [components/shared/MigratedMessageAlert.jsx](src/applications/mhv-secure-messaging/components/shared/MigratedMessageAlert.jsx) | Warning |
| 9 | [ ] | `SmMigratingFacilitiesAlerts` | [components/shared/SmMigratingFacilitiesAlerts.jsx](src/applications/mhv-secure-messaging/components/shared/SmMigratingFacilitiesAlerts.jsx) | Warning/Error |
| 10 | [ ] | `StaleMessageAlert` | [components/shared/StaleMessageAlert.jsx](src/applications/mhv-secure-messaging/components/shared/StaleMessageAlert.jsx) | Info |
| 11 | [ ] | `InProductionEducationAlert` | [components/shared/InProductionEducationAlert.jsx](src/applications/mhv-secure-messaging/components/shared/InProductionEducationAlert.jsx) | Info |
| 12 | [~] | `SmAlert` | [components/shared/SmAlert.jsx](src/applications/mhv-secure-messaging/components/shared/SmAlert.jsx) | N/A (wrapper) |
| 13 | [~] | `DismissibleAlert` | [components/shared/DismissibleAlert.jsx](src/applications/mhv-secure-messaging/components/shared/DismissibleAlert.jsx) | N/A (wrapper) |

### Inline Alerts

| # | Status | Location | Alert Status | Headline |
|---|--------|----------|--------------|----------|
| 14 | [ ] | [containers/Compose.jsx#L185](src/applications/mhv-secure-messaging/containers/Compose.jsx#L185) | Error | "We're sorry. Something went wrong on our end" |
| 15 | [ ] | [containers/FolderThreadListView.jsx#L288](src/applications/mhv-secure-messaging/containers/FolderThreadListView.jsx#L288) | Error | Dynamic folder error |
| 16 | [ ] | [components/Dashboard/DashboardUnreadMessages.jsx#L38](src/applications/mhv-secure-messaging/components/Dashboard/DashboardUnreadMessages.jsx#L38) | Info | Unread messages |
| 17 | [ ] | [components/MessageList/FolderHeader.jsx#L105](src/applications/mhv-secure-messaging/components/MessageList/FolderHeader.jsx#L105) | Warning | "We can't load your care team list" |
| 18 | [ ] | [components/MessageList/FolderHeader.jsx#L189](src/applications/mhv-secure-messaging/components/MessageList/FolderHeader.jsx#L189) | Warning | Oracle Health messaging |

**Subtotal: 16 items (2 skipped wrappers)**

---

## 2. MHV Medications (6 dedicated + 6 inline)

### Dedicated Alert Components

| # | Status | Component | File | Alert Status |
|---|--------|-----------|------|--------------|
| 19 | [ ] | `RefillAlert` | [components/RefillPrescriptions/RefillAlert.jsx](src/applications/mhv-medications/components/RefillPrescriptions/RefillAlert.jsx) | Dynamic |
| 20 | [ ] | `RxRenewalMessageSuccessAlert` | [components/shared/RxRenewalMessageSuccessAlert.jsx](src/applications/mhv-medications/components/shared/RxRenewalMessageSuccessAlert.jsx) | Success |
| 21 | [ ] | `RxRenewalDeleteDraftSuccessAlert` | [components/shared/RxRenewalDeleteDraftSuccessAlert.jsx](src/applications/mhv-medications/components/shared/RxRenewalDeleteDraftSuccessAlert.jsx) | Success |
| 22 | [ ] | `OracleHealthTransitionAlerts` | [components/shared/OracleHealthTransitionAlerts.jsx](src/applications/mhv-medications/components/shared/OracleHealthTransitionAlerts.jsx) | Error |
| 23 | [ ] | `DelayedRefillAlert` | [components/shared/DelayedRefillAlert.jsx](src/applications/mhv-medications/components/shared/DelayedRefillAlert.jsx) | Warning |
| 24 | [~] | `StatusAlertBanner` | [components/shared/StatusAlertBanner.jsx](src/applications/mhv-medications/components/shared/StatusAlertBanner.jsx) | N/A (custom banner) |

### Inline Alerts

| # | Status | Location | Alert Status | Headline |
|---|--------|----------|--------------|----------|
| 25 | [ ] | [containers/PrescriptionDetails.jsx#L243](src/applications/mhv-medications/containers/PrescriptionDetails.jsx#L243) | Info/Warning | Pending prescription review |
| 26 | [ ] | [containers/Prescriptions.jsx#L266](src/applications/mhv-medications/containers/Prescriptions.jsx#L266) | Error | Failed stations error |
| 27 | [ ] | [components/shared/TrackingInfo.jsx#L15](src/applications/mhv-medications/components/shared/TrackingInfo.jsx#L15) | Info | Tracking information |
| 28 | [ ] | [components/shared/PrintDownloadCard.jsx#L94](src/applications/mhv-medications/components/shared/PrintDownloadCard.jsx#L94) | Error | Print error |
| 29 | [ ] | [components/shared/PrintDownloadCard.jsx#L121](src/applications/mhv-medications/components/shared/PrintDownloadCard.jsx#L121) | Warning | Browser print warning |
| 30 | [ ] | [components/shared/ApiErrorNotification.jsx#L8](src/applications/mhv-medications/components/shared/ApiErrorNotification.jsx#L8) | Error | API error |

**Subtotal: 11 items (1 skipped custom banner)**

---

## 3. MHV Medical Records (9 dedicated + 5 inline)

### Dedicated Alert Components

| # | Status | Component | File | Alert Status |
|---|--------|-----------|------|--------------|
| 31 | [ ] | `AccessTroubleAlertBox` | [components/shared/AccessTroubleAlertBox.jsx](src/applications/mhv-medical-records/components/shared/AccessTroubleAlertBox.jsx) | Error |
| 32 | [ ] | `InfoAlert` | [components/shared/InfoAlert.jsx](src/applications/mhv-medical-records/components/shared/InfoAlert.jsx) | Info |
| 33 | [ ] | `ScdfImagesReadyAlert` | [components/shared/ScdfImagesReadyAlert.jsx](src/applications/mhv-medical-records/components/shared/ScdfImagesReadyAlert.jsx) | Success |
| 34 | [ ] | `DownloadSuccessAlert` | [components/shared/DownloadSuccessAlert.jsx](src/applications/mhv-medical-records/components/shared/DownloadSuccessAlert.jsx) | Success |
| 35 | [ ] | `MissingRecordsWarningAlert` | [components/shared/MissingRecordsWarningAlert.jsx](src/applications/mhv-medical-records/components/shared/MissingRecordsWarningAlert.jsx) | Warning |
| 36 | [ ] | `TimeoutAlertBox` | [components/shared/TimeoutAlertBox.jsx](src/applications/mhv-medical-records/components/shared/TimeoutAlertBox.jsx) | Error |
| 37 | [ ] | `DuplicateRecordsAlert` | [components/shared/DuplicateRecordsAlert.jsx](src/applications/mhv-medical-records/components/shared/DuplicateRecordsAlert.jsx) | Info |
| 38 | [~] | `AlertSection` | [components/DownloadRecords/AlertSection.jsx](src/applications/mhv-medical-records/components/DownloadRecords/AlertSection.jsx) | N/A (container) |
| 39 | [~] | `JobsCompleteAlert` | [components/shared/JobsCompleteAlert.jsx](src/applications/mhv-medical-records/components/shared/JobsCompleteAlert.jsx) | N/A (content) |

### Inline Alerts

| # | Status | Location | Alert Status | Headline |
|---|--------|----------|--------------|----------|
| 40 | [ ] | [containers/ScdfRadiologyImagesList.jsx#L108](src/applications/mhv-medical-records/containers/ScdfRadiologyImagesList.jsx#L108) | Error | Image request error |
| 41 | [ ] | [components/DownloadRecords/MissingRecordsError.jsx#L9](src/applications/mhv-medical-records/components/DownloadRecords/MissingRecordsError.jsx#L9) | Error | Missing records |
| 42 | [ ] | [components/DownloadRecords/DownloadFileType.jsx#L538](src/applications/mhv-medical-records/components/DownloadRecords/DownloadFileType.jsx#L538) | Error | "No records found" |
| 43 | [ ] | [components/shared/NewRecordsIndicator.jsx#L83](src/applications/mhv-medical-records/components/shared/NewRecordsIndicator.jsx#L83) | Info | "New records available" |
| 44 | [ ] | [components/shared/NewRecordsIndicator.jsx#L109](src/applications/mhv-medical-records/components/shared/NewRecordsIndicator.jsx#L109) | Warning | Stale records warning |

**Subtotal: 12 items (2 skipped containers)**

---

## 4. MHV Supply Reordering (6 dedicated + 2 inline)

### Dedicated Alert Components

| # | Status | Component | File | Alert Status |
|---|--------|-----------|------|--------------|
| 45 | [ ] | `AlertNoSuppliesForReorder` | [components/alerts/AlertNoSuppliesForReorder.jsx](src/applications/mhv-supply-reordering/components/alerts/AlertNoSuppliesForReorder.jsx) | Warning |
| 46 | [ ] | `AlertReorderAccessExpired` | [components/alerts/AlertReorderAccessExpired.jsx](src/applications/mhv-supply-reordering/components/alerts/AlertReorderAccessExpired.jsx) | Warning |
| 47 | [ ] | `AlertNoRecordForUser` | [components/alerts/AlertNoRecordForUser.jsx](src/applications/mhv-supply-reordering/components/alerts/AlertNoRecordForUser.jsx) | Warning |
| 48 | [ ] | `AlertServerError` | [components/alerts/AlertServerError.jsx](src/applications/mhv-supply-reordering/components/alerts/AlertServerError.jsx) | Error |
| 49 | [ ] | `AlertDeceased` | [components/alerts/AlertDeceased.jsx](src/applications/mhv-supply-reordering/components/alerts/AlertDeceased.jsx) | Warning |
| 50 | [ ] | `VerifiedPrefillAlert` | [components/VerifiedPrefillAlert.jsx](src/applications/mhv-supply-reordering/components/VerifiedPrefillAlert.jsx) | Info |

### Inline Alerts

| # | Status | Location | Alert Status | Headline |
|---|--------|----------|--------------|----------|
| 51 | [ ] | [pages/contactInformation.jsx#L14](src/applications/mhv-supply-reordering/pages/contactInformation.jsx#L14) | Info | Contact info notice |
| 52 | [ ] | [containers/ConfirmationPage.jsx#L60](src/applications/mhv-supply-reordering/containers/ConfirmationPage.jsx#L60) | Success | Order confirmation |

**Subtotal: 8 items**

---

## 5. VAOS - Appointments (8 dedicated + 3 inline)

### Dedicated Alert Components

| # | Status | Component | File | Alert Status |
|---|--------|-----------|------|--------------|
| 53 | [ ] | `BackendAppointmentServiceAlert` | [appointment-list/components/BackendAppointmentServiceAlert.jsx](src/applications/vaos/appointment-list/components/BackendAppointmentServiceAlert.jsx) | Error |
| 54 | [ ] | `BackendProviderServiceAlert` | [new-appointment/components/ProviderSelectPage/BackendProviderServiceAlert.jsx](src/applications/vaos/new-appointment/components/ProviderSelectPage/BackendProviderServiceAlert.jsx) | Error/Warning |
| 55 | [ ] | `TypeOfCareAlert` | [new-appointment/components/TypeOfCarePage/TypeOfCareAlert.jsx](src/applications/vaos/new-appointment/components/TypeOfCarePage/TypeOfCareAlert.jsx) | Info |
| 56 | [ ] | `UpdateAddressAlert` | [new-appointment/components/TypeOfCarePage/UpdateAddressAlert.jsx](src/applications/vaos/new-appointment/components/TypeOfCarePage/UpdateAddressAlert.jsx) | Warning |
| 57 | [ ] | `LoadProvidersErrorAlert` | [new-appointment/components/CommunityCareProviderSelectionPage/LoadProvidersErrorAlert.jsx](src/applications/vaos/new-appointment/components/CommunityCareProviderSelectionPage/LoadProvidersErrorAlert.jsx) | Error |
| 58 | [ ] | `NoProvidersAlert` | [new-appointment/components/CommunityCareProviderSelectionPage/NoProvidersAlert.jsx](src/applications/vaos/new-appointment/components/CommunityCareProviderSelectionPage/NoProvidersAlert.jsx) | Info |
| 59 | [ ] | `CernerTransitionAlert` | [components/CernerTransitionAlert.jsx](src/applications/vaos/components/CernerTransitionAlert.jsx) | Warning |
| 60 | [~] | `InfoAlert` | [components/InfoAlert.jsx](src/applications/vaos/components/InfoAlert.jsx) | N/A (wrapper) |
| 61 | [~] | `StatusAlert` | [components/StatusAlert.jsx](src/applications/vaos/components/StatusAlert.jsx) | N/A (has different tracking) |

### Inline Alerts

| # | Status | Location | Alert Status | Headline |
|---|--------|----------|--------------|----------|
| 62 | [ ] | [components/VideoLink.jsx#L28](src/applications/vaos/components/VideoLink.jsx#L28) | Info | Video appointment details |
| 63 | [ ] | [referral-appointments/pages/CompleteReferral.jsx#L112](src/applications/vaos/referral-appointments/pages/CompleteReferral.jsx#L112) | Info | Referral details |
| 64 | [ ] | [referral-appointments/pages/ReviewAndConfirm.jsx#L343](src/applications/vaos/referral-appointments/pages/ReviewAndConfirm.jsx#L343) | Various | Review confirmation |

**Subtotal: 10 items (2 skipped wrappers)**

---

## 6. Travel Pay (8 dedicated + 2 inline)

### Dedicated Alert Components

| # | Status | Component | File | Alert Status |
|---|--------|-----------|------|--------------|
| 65 | [ ] | `FutureAppointmentAlert` | [components/alerts/FutureAppointmentAlert.jsx](src/applications/travel-pay/components/alerts/FutureAppointmentAlert.jsx) | Warning |
| 66 | [ ] | `ForbiddenAlert` | [components/alerts/ForbiddenAlert.jsx](src/applications/travel-pay/components/alerts/ForbiddenAlert.jsx) | Warning |
| 67 | [ ] | `OutOfBoundsAppointmentAlert` | [components/alerts/OutOfBoundsAppointmentAlert.jsx](src/applications/travel-pay/components/alerts/OutOfBoundsAppointmentAlert.jsx) | Warning |
| 68 | [ ] | `AppointmentErrorAlert` | [components/alerts/AppointmentErrorAlert.jsx](src/applications/travel-pay/components/alerts/AppointmentErrorAlert.jsx) | Error |
| 69 | [ ] | `ErrorAlert` | [components/alerts/ErrorAlert.jsx](src/applications/travel-pay/components/alerts/ErrorAlert.jsx) | Error |
| 70 | [ ] | `VerifyIdentityAlert` | [components/alerts/VerifyIdentityAlert.jsx](src/applications/travel-pay/components/alerts/VerifyIdentityAlert.jsx) | Warning |
| 71 | [~] | `ReviewPageAlert` | [components/complex-claims/pages/ReviewPageAlert.jsx](src/applications/travel-pay/components/complex-claims/pages/ReviewPageAlert.jsx) | N/A (review) |
| 72 | [~] | `DownTimeWindowAlert` | [containers/DownTimeWindowAlert.jsx](src/applications/travel-pay/containers/DownTimeWindowAlert.jsx) | N/A (wrapper) |

### Inline Alerts

| # | Status | Location | Alert Status | Headline |
|---|--------|----------|--------------|----------|
| 73 | [ ] | [components/DegradationWarning.jsx#L17](src/applications/travel-pay/components/DegradationWarning.jsx#L17) | Warning | Service degradation |
| 74 | [ ] | [components/ClaimDetailsContent.jsx#L30](src/applications/travel-pay/components/ClaimDetailsContent.jsx#L30) | Dynamic | Claim details |

**Subtotal: 8 items (2 skipped)**

---

## Summary

| App | Dedicated | Inline | Skipped | Complete | Partial | **To Implement** |
|-----|-----------|--------|---------|----------|---------|------------------|
| mhv-landing-page | 6 | 0 | 0 | 5 | 1 | **1** (fix) |
| mhv-secure-messaging | 13 | 5 | 2 | 0 | 0 | **16** |
| mhv-medications | 6 | 6 | 1 | 0 | 0 | **11** |
| mhv-medical-records | 9 | 5 | 2 | 0 | 0 | **12** |
| mhv-supply-reordering | 6 | 2 | 0 | 0 | 0 | **8** |
| vaos | 9 | 3 | 2 | 0 | 0 | **10** |
| travel-pay | 8 | 2 | 2 | 0 | 0 | **8** |
| **TOTAL** | **57** | **23** | **9** | **5** | **1** | **66** |

---

## Verification Instructions

### Prerequisites
- Access to GA4 (Google Analytics 4) dashboard
- Access to Datadog RUM dashboard
- Local dev environment with `yarn watch` running

### Step 1: Local Development Verification

1. **Start local server:**
   ```bash
   yarn watch --env entry=mhv-landing-page
   ```

2. **Open browser DevTools → Console**

3. **Navigate to a page with an alert** (e.g., verify identity alert)

4. **Check console for recordEvent call:**
   ```js
   // In console, filter for "recordEvent" or check Network tab for analytics calls
   ```

5. **Check Datadog RUM action:**
   ```js
   // In console:
   window.DD_RUM && window.DD_RUM.getInternalContext()
   ```

### Step 2: GA4 Verification (DebugView)

1. **Enable GA4 DebugView:**
   - Open GA4 dashboard → Admin → DebugView
   - Or add `?_gl=1*debug*` to URL

2. **Install GA Debugger Chrome extension** (alternative)

3. **Trigger an alert on the page**

4. **In GA4 DebugView, look for:**
   - Event name: `nav-alert-box-load`
   - Parameters:
     - `action`: `load`
     - `alert-box-headline`: (the headline text)
     - `alert-box-status`: `error` | `warning` | `info` | `success`

5. **Verify in GA4 Reports:**
   - Reports → Engagement → Events
   - Filter by event name: `nav-alert-box-load`
   - Check event count and parameters

### Step 3: Datadog RUM Verification

1. **Access Datadog RUM Dashboard:**
   - Navigate to: `https://app.datadoghq.com/rum/explorer`

2. **Filter by action:**
   - Search: `@action.name:"Showed Alert Box:*"`

3. **Verify action details:**
   - Action name matches pattern: `Showed Alert Box: {AlertName}`
   - Check session context, user info, timestamp

4. **Create a monitor (optional):**
   - Set up alert for unusual spikes in specific alert types

### Step 4: Unit Test Verification

Each alert component should have a unit test that:

```jsx
import sinon from 'sinon';
import { render } from '@testing-library/react';

describe('AlertComponent', () => {
  it('fires recordEvent exactly once on mount', () => {
    const recordEvent = sinon.spy();
    render(<AlertComponent recordEvent={recordEvent} />);
    
    expect(recordEvent.calledOnce).to.be.true;
    expect(recordEvent.firstCall.args[0]).to.deep.include({
      event: 'nav-alert-box-load',
      action: 'load',
    });
  });

  it('does not fire recordEvent on re-render', () => {
    const recordEvent = sinon.spy();
    const { rerender } = render(<AlertComponent recordEvent={recordEvent} />);
    rerender(<AlertComponent recordEvent={recordEvent} />);
    
    expect(recordEvent.calledOnce).to.be.true; // Still once, not twice
  });
});
```

### Step 5: E2E Cypress Verification (Optional)

```js
// In Cypress test
cy.window().then((win) => {
  cy.spy(win.dataLayer, 'push').as('dataLayerPush');
});

// Trigger alert
cy.get('[data-testid="some-alert-trigger"]').click();

// Verify
cy.get('@dataLayerPush').should('have.been.calledWith', 
  Cypress.sinon.match.has('event', 'nav-alert-box-load')
);
```

---

## Implementation Order (Recommended)

0. **mhv-landing-page** (1 fix) - Add missing datadogRum to AlertErrorBoundry
1. **mhv-supply-reordering** (8 items) - Smallest, good for validating pattern
2. **travel-pay** (8 items) - Similar size, different team ownership
3. **mhv-medications** (11 items) - Medium complexity
4. **mhv-medical-records** (12 items) - PR #38612 has partial reference
5. **vaos** (10 items) - Some existing tracking to integrate with
6. **mhv-secure-messaging** (16 items) - Largest, save for last

---

## Notes

- **Wrapper components** (SmAlert, DismissibleAlert, InfoAlert): Skip tracking in the wrapper; track in the specific alert that uses it
- **Dynamic headlines**: Use the actual rendered text, not a generic identifier
- **Conditional alerts**: Only fire tracking when the alert is actually rendered/visible
- **useEffect dependencies**: Include `recordEvent` and any dynamic values (headline) in deps array
