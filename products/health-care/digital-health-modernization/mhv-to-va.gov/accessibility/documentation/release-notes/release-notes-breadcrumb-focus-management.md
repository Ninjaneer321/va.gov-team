# Release Notes: MHV Breadcrumb Focus Management
modified: 20260224

## Summary

Implemented a shared breadcrumb focus management hook (`useBreadcrumbFocus`) across all My HealtheVet (MHV) applications to ensure consistent, accessible focus behavior after breadcrumb navigation. When a user activates a breadcrumb link, focus is programmatically moved to the destination page's `h1` heading, improving the experience for keyboard and screen reader users.

**WCAG Criteria Addressed**:

- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html)

**Related Tickets**:

- [#130528 — Breadcrumb focus issue on Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130528)
- [#123109 — Original breadcrumb focus hook ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123109)

---

## Shared Platform Hook

| Item        | Detail                                                  |
| ----------- | ------------------------------------------------------- |
| **Hook**    | `useBreadcrumbFocus`                                    |
| **Location**| `src/platform/mhv/hooks/useBreadcrumbFocus.js`          |
| **Purpose** | Wraps each app's `onRouteChange` callback to add post-navigation focus to `h1`; provides an `onClick` handler for "click current crumb" focus behavior |
| **Exports** | `{ handleRouteChange, handleClick }`                    |

### Usage Pattern

```javascript
import useBreadcrumbFocus from 'platform/mhv/hooks/useBreadcrumbFocus';

const onRouteChange = useCallback(
  ({ detail }) => {
    history.push(detail.href);
  },
  [history],
);

const { handleRouteChange, handleClick } = useBreadcrumbFocus({
  onRouteChange,
});

// Pass to web component
<va-breadcrumbs
  onRouteChange={handleRouteChange}
  onClick={handleClick}
  [...]
/>
```
---

## Behavioral Change (All Apps)

| Scenario | Before | After |
| -------- | ------ | ----- |
| User activates a breadcrumb link | Page navigates; focus correctly moves to destination `h1` | Correct Action: No change;  | 
| User activates the current-page breadcrumb | Page does not navigate; focus remains on breadcrumb or resets to `<body>` or inconsistent behavior | Page does not navigate; Focus moves to current page's `h1` |
| Keyboard user tabs after breadcrumb activation | Next tab stop is unpredictable | Next tab stop is the element after `h1` (logical reading order) |
| Screen reader user activates breadcrumb | No announcement of new page context | `h1` is announced, providing immediate page context |

---

## Applications Updated

### 1. MHV Medical Records (`mhv-medical-records`)

| Item           | Detail |
| -------------- | ------ |
| **File**       | `src/applications/mhv-medical-records/components/MrBreadcrumbs.jsx` |
| **Integration**| `onRouteChange` wrapped via `useBreadcrumbFocus`; `handleClick` passed to `<va-breadcrumbs>` |
| **Routing**    | `useHistory().push()` (React Router v5) |
| **Tests**      | `src/applications/mhv-medical-records/tests/components/MrBreadcrumbs.unit.spec.jsx` |
| **Ticket**     | [#123109](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123109) |

### 2. MHV Medications (`mhv-medications`)

| Item           | Detail |
| -------------- | ------ |
| **File**       | `src/applications/mhv-medications/containers/RxBreadcrumbs.jsx` |
| **Integration**| `onRouteChange` wrapped via `useBreadcrumbFocus`; `handleClick` passed to `<va-breadcrumbs>` |
| **Routing**    | `useNavigate()` (React Router v6) |
| **Tests**      | `src/applications/mhv-medications/tests/containers/RxBreadcrumbs.unit.spec.jsx` |
| **Ticket**     | [#123109](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123109) |

### 3. MHV Secure Messaging (`mhv-secure-messaging`)

| Item           | Detail |
| -------------- | ------ |
| **File**       | `src/applications/mhv-secure-messaging/components/shared/SmBreadcrumbs.jsx` |
| **Integration**| `onRouteChange` wrapped via `useBreadcrumbFocus`; `handleClick` passed to `<va-breadcrumbs>` |
| **Routing**    | `useHistory().push()` (React Router v5) |
| **Tests**      | `src/applications/mhv-secure-messaging/tests/components/shared/SmBreadcrumbs.unit.spec.jsx` |
| **Ticket**     | [#123109](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123109) |

### 4. MHV Landing Page (`mhv-landing-page`)

| Item           | Detail |
| -------------- | ------ |
| **File**       | `src/applications/mhv-landing-page/components/MhvLandingPageBreadcrumbs.jsx` |
| **Integration**| `onRouteChange` wrapped via `useBreadcrumbFocus`; `handleClick` passed to `<va-breadcrumbs>` |
| **Tests**      | `src/applications/mhv-landing-page/tests/components/MhvLandingPageBreadcrumbs.unit.spec.jsx` |
| **Ticket**     | [#123109](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123109) |

### 5. VA Online Scheduling / Appointments (`vaos`)

| Item           | Detail |
| -------------- | ------ |
| **File**       | `src/applications/vaos/components/Breadcrumbs.jsx` |
| **Integration**| Existing `handleRouteChange` (which calls `history.push(relativeRouteProcessor(href))`) wrapped via `useBreadcrumbFocus`; `handleClick` passed to `<va-breadcrumbs>` |
| **Routing**    | `useHistory().push()` (React Router v5) |
| **Tests**      | `src/applications/vaos/components/Breadcrumbs.unit.spec.jsx` |
| **Ticket**     | [#130528](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130528) / [#123109](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123109) |

---
