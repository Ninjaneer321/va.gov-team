# GA4 Alert Tracking Implementation Review

**Ticket:** [#115763](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115763)  
**Branch:** `115763-MHV-Portal-GA4-Alert-Tracking`  
**Date:** 2026-04-15  
**Prepared for:** Platform Lead Engineer Review

---

## Executive Summary

Add GA4 (`recordEvent`) and Datadog RUM (`datadogRum.addAction`) tracking to all alerts across MHV portal, VAOS, and Travel Pay applications. Analysis identified **66 alerts** across **7 applications**, with approximately **80% compatible** with a shared hook approach.

### Recommendation
Create a shared `useAlertTracking` hook in `src/platform/mhv/hooks/` to standardize tracking across ~54 alerts, with wrapper component and documented manual patterns for the remaining ~12 complex cases.

---

## Scope & Inventory

### Application Coverage

| App | Dedicated | Inline | Skipped | Complete | Needs Fix | **To Implement** |
|-----|-----------|--------|---------|----------|-----------|------------------|
| mhv-landing-page | 6 | 0 | 0 | 5 | 1 | **1** |
| mhv-secure-messaging | 13 | 5 | 2 | 0 | 0 | **16** |
| mhv-medications | 6 | 6 | 1 | 0 | 0 | **11** |
| mhv-medical-records | 9 | 5 | 2 | 0 | 0 | **12** |
| mhv-supply-reordering | 6 | 2 | 0 | 0 | 0 | **8** |
| vaos | 9 | 3 | 2 | 0 | 0 | **10** |
| travel-pay | 8 | 2 | 2 | 0 | 0 | **8** |
| **TOTAL** | **57** | **23** | **9** | **5** | **1** | **66** |

### Landing Page Status (Reference Implementation)

| Component | recordEvent | datadogRum | Status |
|-----------|-------------|------------|--------|
| AlertVerifyAndRegister | ✅ | ✅ | Complete |
| AlertAccountApiAlert | ✅ | ✅ | Complete |
| AlertDownloadSuccess | ✅ | ✅ | Complete |
| AlertUnregistered | ✅ | ✅ | Complete |
| AlertDownloadAccessTrouble | ✅ | ✅ | Complete |
| **AlertErrorBoundry** | ✅ | ❌ | **Missing datadogRum** |

---

## Required Tracking Pattern

### GA4 Event (recordEvent)

```js
recordEvent({
  event: 'nav-alert-box-load',
  action: 'load',
  'alert-box-headline': headline,      // String: actual headline text
  'alert-box-status': status,          // 'error' | 'warning' | 'info' | 'success'
});
```

### Datadog RUM Action

```js
datadogRum.addAction('Showed Alert Box: {AlertName}');
```

### Reference Implementation

```jsx
// src/applications/mhv-landing-page/components/alerts/AlertVerifyAndRegister.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { default as recordEventFn } from '~/platform/monitoring/record-event';
import { datadogRum } from '@datadog/browser-rum';

const AlertVerifyAndRegister = ({ recordEvent, testId }) => {
  const headline = 'Verify your identity';

  useEffect(
    () => {
      recordEvent({
        event: 'nav-alert-box-load',
        action: 'load',
        'alert-box-headline': headline,
        'alert-box-status': 'warning',
      });
      datadogRum.addAction('Showed Alert Box: Verify And Register');
    },
    [headline, recordEvent],
  );

  return <VerifyAlert headingLevel={2} dataTestId={testId} />;
};

AlertVerifyAndRegister.defaultProps = {
  recordEvent: recordEventFn,
  testId: 'mhv-alert--verify-and-register',
};
```

---

## Existing Platform Infrastructure

### Available Exports

```js
// GA4 tracking - already available
import { recordEvent, recordEventOnce } from '@department-of-veterans-affairs/platform-monitoring';

// Datadog RUM - direct import
import { datadogRum } from '@datadog/browser-rum';

// Datadog logging utility
import { dataDogLogger } from 'platform/monitoring/Datadog';

// MHV hooks - already exported
import { useDatadogRum, setDatadogRumUser } from '@department-of-veterans-affairs/mhv';
```

### Existing Pattern: useOhMigrationAlertMetric (Reference)

```js
// src/platform/mhv/hooks/useOhMigrationAlertMetric.js
// Uses ref guard to prevent duplicate tracking - we should follow this pattern
const useOhMigrationAlertMetric = ({ alertName, isVisible, ... }) => {
  const hasLogged = useRef(false);  // ← REF GUARD
  
  useEffect(() => {
    if (isVisible && !hasLogged.current) {
      dataDogLogger({ message: `OH Migration Alert Rendered: ${alertName}`, ... });
      hasLogged.current = true;
    }
  }, [isVisible, alertName, ...]);
};
```

### Existing (Unused): recordAlertLoadEvent

```js
// src/platform/mhv/components/MhvAlertConfirmEmail/recordAlertLoadEvent.js
// ⚠️ Hardcoded to 'warning' status - limited usefulness
// ⚠️ Not exported from @department-of-veterans-affairs/mhv
// ⚠️ Zero actual usages
const recordAlertLoadEvent = headline => {
  recordEvent({
    event: 'nav-alert-box-load',
    action: 'load',
    'alert-box-headline': headline,
    'alert-box-status': 'warning',  // ← HARDCODED
  });
  datadogRum.addAction(`VaAlert load event: ${headline}`);
};
```

---

## Alert Pattern Analysis

### Pattern Compatibility Matrix

| Pattern | Count | Hook Compatible | Notes |
|---------|-------|-----------------|-------|
| **Static headline + status** | ~25 | ✅ Yes | Simplest case |
| **Props-driven headline** | ~12 | ✅ Yes | Pass props to hook |
| **Computed headline (ternary)** | ~7 | ✅ Yes | Compute before hook call |
| **Focus management useEffect** | ~6 | ✅ Yes | Hook coexists with focus effect |
| **Simple conditional render** | ~4 | ✅ Yes | Use `isVisible` param |
| **Redux-managed alerts** | ~3 | ⚠️ Partial | Track in Redux action instead |
| **Render prop / HOC** | ~4 | ⚠️ Partial | Use wrapper component |
| **Multi-return page branches** | ~5 | ❌ No | Manual inline tracking |

### Implementation Approach by Category

| Category | Count | Approach | Effort |
|----------|-------|----------|--------|
| Simple dedicated components | ~35 | `useAlertTracking` hook | Low |
| Config/computed dedicated | ~7 | Hook with computed values | Low |
| Simple inline alerts | ~12 | `useAlertTracking` hook | Low |
| Render prop / HOC | ~4 | `TrackedAlert` wrapper | Medium |
| Redux-managed | ~3 | Track in Redux action | Medium |
| Multi-return page branches | ~5 | Manual inline tracking | High |
| **TOTAL** | **66** | | |

---

## Proposed Solution

### Option A: Create useAlertTracking Hook (Recommended)

**Location:** `src/platform/mhv/hooks/useAlertTracking.js`

```js
import { useEffect, useRef } from 'react';
import { recordEvent } from '@department-of-veterans-affairs/platform-monitoring';
import { datadogRum } from '@datadog/browser-rum';

/**
 * Tracks alert display events to GA4 and Datadog RUM exactly once per mount.
 * Uses ref guard to prevent duplicate tracking on re-renders.
 *
 * @param {Object}  options
 * @param {string}  options.headline   - Alert headline text (for GA4 tracking)
 * @param {string}  options.status     - Alert status: 'error' | 'warning' | 'info' | 'success'
 * @param {string}  options.alertName  - Human-readable alert identifier (for Datadog action)
 * @param {boolean} [options.isVisible=true] - Whether the alert is currently rendered/visible
 *
 * @example
 * // Basic usage
 * useAlertTracking({
 *   headline: 'Verify your identity',
 *   status: 'warning',
 *   alertName: 'Verify And Register',
 * });
 *
 * @example
 * // With conditional visibility
 * useAlertTracking({
 *   headline: errorMessage,
 *   status: 'error',
 *   alertName: 'API Error',
 *   isVisible: !!errorMessage,
 * });
 */
const useAlertTracking = ({
  headline,
  status,
  alertName,
  isVisible = true,
}) => {
  const hasTracked = useRef(false);

  useEffect(
    () => {
      if (isVisible && !hasTracked.current && headline) {
        // GA4 tracking
        recordEvent({
          event: 'nav-alert-box-load',
          action: 'load',
          'alert-box-headline': headline,
          'alert-box-status': status,
        });

        // Datadog RUM action
        datadogRum.addAction(`Showed Alert Box: ${alertName}`);

        hasTracked.current = true;
      }
    },
    [isVisible, headline, status, alertName],
  );
};

export default useAlertTracking;
```

**Export from platform:**

```js
// src/platform/mhv/exportsFile.js
export { default as useAlertTracking } from './hooks/useAlertTracking';
```

### Option B: TrackedAlert Wrapper Component (For Render Props)

**Location:** `src/platform/mhv/components/TrackedAlert.jsx`

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import useAlertTracking from '../hooks/useAlertTracking';

/**
 * Wrapper component for tracking alerts in render prop / HOC patterns
 * where hooks cannot be directly called.
 */
const TrackedAlert = ({ headline, status, alertName, children }) => {
  useAlertTracking({ headline, status, alertName });
  return <>{children}</>;
};

TrackedAlert.propTypes = {
  alertName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
};

export default TrackedAlert;
```

**Usage in render prop pattern:**

```jsx
// DegradationWarning.jsx
<DowntimeNotification>
  {({ status }) =>
    status === down ? (
      <TrackedAlert
        headline="You may have trouble starting a claim right now"
        status="warning"
        alertName="Degradation Warning"
      >
        <va-alert status="warning" visible>
          <h2 slot="headline">You may have trouble starting a claim right now</h2>
          ...
        </va-alert>
      </TrackedAlert>
    ) : null
  }
</DowntimeNotification>
```

### Option C: Redux Action Tracking (For Redux-Managed Alerts)

For components like `AlertBackgroundBox` where alerts come from Redux:

```js
// In Redux action file
import { recordEvent } from '@department-of-veterans-affairs/platform-monitoring';
import { datadogRum } from '@datadog/browser-rum';

export const addAlert = (alertType, alertContent, alertName) => dispatch => {
  // Track when alert is added to state
  recordEvent({
    event: 'nav-alert-box-load',
    action: 'load',
    'alert-box-headline': alertContent,
    'alert-box-status': alertType,
  });
  datadogRum.addAction(`Showed Alert Box: ${alertName}`);

  dispatch({ type: ADD_ALERT, payload: { alertType, alertContent } });
};
```

---

## Usage Examples

### Example 1: Simple Alert Component

```jsx
// Before
const FutureAppointmentAlert = () => (
  <va-alert status="warning" visible>
    <h2 slot="headline">We need to wait to file your claim</h2>
    ...
  </va-alert>
);

// After
import { useAlertTracking } from '@department-of-veterans-affairs/mhv';

const FutureAppointmentAlert = () => {
  useAlertTracking({
    headline: 'We need to wait to file your claim',
    status: 'warning',
    alertName: 'Future Appointment',
  });

  return (
    <va-alert status="warning" visible>
      <h2 slot="headline">We need to wait to file your claim</h2>
      ...
    </va-alert>
  );
};
```

### Example 2: Props-Driven Headline

```jsx
// Before
const DownloadSuccessAlert = ({ type }) => (
  <VaAlert status="success" visible>
    <h2 slot="headline">{type || 'Download'} started</h2>
    ...
  </VaAlert>
);

// After
import { useAlertTracking } from '@department-of-veterans-affairs/mhv';

const DownloadSuccessAlert = ({ type }) => {
  const headline = `${type || 'Download'} started`;

  useAlertTracking({
    headline,
    status: 'success',
    alertName: 'Download Success',
  });

  return (
    <VaAlert status="success" visible>
      <h2 slot="headline">{headline}</h2>
      ...
    </VaAlert>
  );
};
```

### Example 3: Conditional Alert

```jsx
// Before
const ErrorNotification = ({ error }) => {
  if (!error) return null;
  return (
    <va-alert status="error" visible>
      <h2 slot="headline">{error.message}</h2>
    </va-alert>
  );
};

// After
import { useAlertTracking } from '@department-of-veterans-affairs/mhv';

const ErrorNotification = ({ error }) => {
  useAlertTracking({
    headline: error?.message,
    status: 'error',
    alertName: 'Error Notification',
    isVisible: !!error,
  });

  if (!error) return null;
  return (
    <va-alert status="error" visible>
      <h2 slot="headline">{error.message}</h2>
    </va-alert>
  );
};
```

---

## Unit Testing Pattern

### Hook Test

```jsx
// src/platform/mhv/tests/hooks/useAlertTracking.unit.spec.jsx
import React from 'react';
import { render } from '@testing-library/react';
import sinon from 'sinon';
import { expect } from 'chai';
import * as platformMonitoring from '@department-of-veterans-affairs/platform-monitoring';
import useAlertTracking from '../../hooks/useAlertTracking';

const TestComponent = ({ headline, status, alertName, isVisible }) => {
  useAlertTracking({ headline, status, alertName, isVisible });
  return <div data-testid="test-component">Test</div>;
};

describe('useAlertTracking', () => {
  let recordEventStub;

  beforeEach(() => {
    recordEventStub = sinon.stub(platformMonitoring, 'recordEvent');
  });

  afterEach(() => {
    recordEventStub.restore();
  });

  it('fires recordEvent exactly once on mount', () => {
    render(
      <TestComponent
        headline="Test headline"
        status="warning"
        alertName="Test Alert"
      />,
    );

    expect(recordEventStub.calledOnce).to.be.true;
    expect(recordEventStub.firstCall.args[0]).to.deep.include({
      event: 'nav-alert-box-load',
      action: 'load',
      'alert-box-headline': 'Test headline',
      'alert-box-status': 'warning',
    });
  });

  it('does not fire on re-render', () => {
    const { rerender } = render(
      <TestComponent
        headline="Test headline"
        status="warning"
        alertName="Test Alert"
      />,
    );

    rerender(
      <TestComponent
        headline="Test headline"
        status="warning"
        alertName="Test Alert"
      />,
    );

    expect(recordEventStub.calledOnce).to.be.true; // Still once
  });

  it('does not fire when isVisible is false', () => {
    render(
      <TestComponent
        headline="Test headline"
        status="warning"
        alertName="Test Alert"
        isVisible={false}
      />,
    );

    expect(recordEventStub.called).to.be.false;
  });
});
```

### Component Test Pattern

```jsx
// In each alert component's unit test
import sinon from 'sinon';
import { render } from '@testing-library/react';

describe('FutureAppointmentAlert', () => {
  it('fires tracking event on mount', () => {
    const recordEvent = sinon.spy();
    // Mock the useAlertTracking hook or test via integration
    render(<FutureAppointmentAlert />);

    // Verify GA4 event was tracked
    expect(recordEvent.calledOnce).to.be.true;
  });
});
```

---

## Implementation Order

| Phase | Scope | Files | Estimate |
|-------|-------|-------|----------|
| 0 | Create hook + wrapper + tests | 3 | 2-3 hours |
| 1 | mhv-landing-page fix | 1 | 30 min |
| 2 | mhv-supply-reordering | 8 | 2 hours |
| 3 | travel-pay | 8 | 2 hours |
| 4 | mhv-medications | 11 | 3 hours |
| 5 | mhv-medical-records | 12 | 3 hours |
| 6 | vaos | 10 | 3 hours |
| 7 | mhv-secure-messaging | 16 | 4 hours |
| **TOTAL** | | **66** | **~20 hours** |

---

## Verification Instructions

### Local Development

```bash
# Start dev server
yarn watch --env entry=mhv-landing-page

# In browser console, check tracking fires:
# 1. Open DevTools > Console
# 2. Navigate to page with alert
# 3. Look for dataLayer.push call with 'nav-alert-box-load'
```

### GA4 DebugView

1. Enable DebugView in GA4 Admin panel
2. Navigate to page with alert
3. Look for event: `nav-alert-box-load`
4. Verify parameters: `action`, `alert-box-headline`, `alert-box-status`

### Datadog RUM Explorer

1. Navigate to: `https://app.datadoghq.com/rum/explorer`
2. Filter: `@action.name:"Showed Alert Box:*"`
3. Verify action names match expected pattern

---

## Risks & Considerations

| Risk | Mitigation |
|------|------------|
| Duplicate tracking on re-render | Ref guard in hook prevents this |
| Missing headline (null/undefined) | Hook checks for `headline` before tracking |
| Conditional alerts firing when hidden | `isVisible` parameter controls tracking |
| Redux-managed alerts | Track in Redux action, not component |
| Render prop patterns | TrackedAlert wrapper component |
| Breaking existing datadogRum | Check for existing calls, don't duplicate |

---

## Questions for Platform Lead

1. **Location:** Should the hook live in `src/platform/mhv/hooks/` or a more generic location like `src/platform/monitoring/hooks/`?

2. **Export strategy:** Add to existing `@department-of-veterans-affairs/mhv` exports, or create new package?

3. **Deprecation:** Should we deprecate the unused `recordAlertLoadEvent` utility?

4. **Rollout:** Implement all at once, or phased by application?

5. **Testing:** Unit tests per component, or integration tests that verify tracking actually fires?

6. **Redux alerts:** Acceptable to track in Redux actions instead of components for ~3 cases?

---

## Files to Create/Modify

### New Files
- `src/platform/mhv/hooks/useAlertTracking.js`
- `src/platform/mhv/components/TrackedAlert.jsx`
- `src/platform/mhv/tests/hooks/useAlertTracking.unit.spec.jsx`
- `src/platform/mhv/tests/components/TrackedAlert.unit.spec.jsx`

### Modified Files
- `src/platform/mhv/exportsFile.js` (add exports)
- 66 alert components across 7 applications

---

## Appendix: Full Alert Inventory

See [ga4-alert-tracking-spec.md](./ga4-alert-tracking-spec.md) for complete checklist with file paths.
