 # 1-Year Sequenced Plan: Cross-Tool Health Notification Infrastructure
* **Date**: April 2026
* **Source**: Claude/Copilot analysis of vets website capabilities + sequenced plan for making improvements to move the needle toward north-star user experience for personalized, notification-driven health portal. 
* **Scope**: VA.gov (vets-website) + VAHB Mobile App shared backend
* **Goal**: Build a backend-first notification and health-summary infrastructure that benefits both VA.gov and the VAHB mobile app without requiring mobile app releases for each improvement.

Note: this is a direct copied/pasted output from AI agent analysis, and has not been validated/verified with engineers as of 4/7/26. 
---
## Guiding Principles
Based on codebase analysis, three architectural truths drive this plan:
1. **Backend-first**: The VAHB mobile app shares the same `vets-api` backend. Every notification-relevant computation pushed into the API automatically benefits both web and mobile — avoiding the mobile app release cycle problem entirely. Frontend code on VA.gov is easily deployed; mobile app changes require users to download updates.
2. **Extend, don't replace**: The existing `GET /v0/onsite_notifications` system (`src/applications/personalization/common/actions/notifications.js`) already has fetch, dismiss, template-based routing, Redux integration, and a `VaNotification` web component. It just needs more template types and a richer backend.
3. **Lightweight summaries first, full data second**: Today, every count (unread messages, upcoming appointments, refillable prescriptions) requires fetching the full list and computing client-side. A single backend summary endpoint would dramatically improve performance for both web and mobile.
---
## Quarter 1 (Months 1–3): Backend Summary API + Notification Template Foundation
### Month 1: Design & Build `GET /v0/health_summary` Backend Endpoint
**Goal**: Create a single lightweight vets-api endpoint that returns pre-computed counts for all health tools.
**Proposed response shape:**
```json
{
  "data": {
    "type": "health_summary",
    "attributes": {
      "unreadMessageCount": 3,
      "upcomingAppointmentCount": 2,
      "nextAppointmentDatetime": "2026-05-15T14:00:00Z",
      "prescriptionsReadyForRefill": 1,
      "prescriptionsInTransit": 0,
      "refillAlertCount": 0,
      "newLabResultCount": 0,
      "pendingTravelClaims": 1,
      "lastUpdated": "2026-04-07T17:00:00Z"
    }
  }
}
```
**Why backend**:
- Today, My VA's `Dashboard.jsx` fires **6+ independent `useEffect` hooks** sequentially — appointments, messages, debts, claims, forms, rating. Each is a full list fetch. A single summary endpoint eliminates this.
- The VAHB mobile app gets the same benefit with zero app-release-dependent changes.
- The SM folder endpoint (`GET /my_health/v1/messaging/folders?page=1&per_page=999&useCache=false`) already returns `unreadCount` per folder — the backend just needs to aggregate it.
- VAOS `GET /vaos/v2/appointments?start=...&end=...&statuses[]=booked` returns the full appointment list — a backend count query against the same data is trivial.
**Caching strategy**: Backend should cache this summary for 60–120 seconds (TTL), invalidated on writes. This mirrors the `keepUnusedDataFor: 60` already used in VAOS's RTK Query setup (`src/applications/vaos/redux/api/vaosApi.js`).
---
### Month 2: Register Health Notification Templates in On-Site Notifications
**Goal**: Extend the existing `onsite_notifications` system with health-specific templates.
**Current state**: Only one template type is in production — debt notifications (`templateId: '7efc2b8b-...'`). The `Notifications.jsx` component hard-filters to this one ID.
**New templates to register** (in vets-api `onsite_notifications` system):
| Template ID | Trigger | Headline | Deep Link |
|---|---|---|---|
| `health-new-message` | New SM message received | "You have a new message" | `/my-health/secure-messages/thread/{messageId}` |
| `health-appointment-reminder` | Appointment in <24hrs | "Upcoming appointment tomorrow" | `/my-health/appointments/{appointmentId}` |
| `health-rx-shipped` | Prescription status → shipped | "Your prescription has shipped" | `/my-health/medications/prescription/{prescriptionId}` |
| `health-lab-result` | New lab result available | "New lab result available" | `/my-health/medical-records/labs-and-tests/{labId}` |
| `health-travel-pay-update` | Travel claim status change | "Travel claim status updated" | `/my-health/travel-pay/claims/{claimId}` |

**Why this approach**: The template system is already wired end-to-end: backend creates notifications → `fetchNotifications()` fetches them → `notificationsReducer` stores them → `VaNotification` renders them with dismiss support. Adding templates requires zero new frontend infrastructure. The mobile app can read the same `/v0/onsite_notifications` endpoint.
---
### Month 3: Create Generic Notification Renderer + Refactor Notifications.jsx
**Goal**: Replace the hardcoded debt-only filter with a template registry pattern on the frontend.
**Current problem**: `Notifications.jsx` does `notifications.filter(n => n.attributes.templateId === debtTemplateId)` — it literally ignores all non-debt notifications.
**Change**: Build a template→component mapping:
```javascript
// src/applications/personalization/common/constants/notificationTemplates.js
const NOTIFICATION_TEMPLATES = {
  [DEBT_TEMPLATE_ID]: { component: DebtNotification, category: 'financial' },
  [NEW_MESSAGE_TEMPLATE_ID]: { component: MessageNotification, category: 'health' },
  [APPOINTMENT_TEMPLATE_ID]: { component: AppointmentNotification, category: 'health' },
  [RX_SHIPPED_TEMPLATE_ID]: { component: PrescriptionNotification, category: 'health' },
  [LAB_RESULT_TEMPLATE_ID]: { component: LabResultNotification, category: 'health' },
  [TRAVEL_PAY_TEMPLATE_ID]: { component: TravelPayNotification, category: 'health' },
};
```
The existing `VaNotification` component (used in `TestNotification.jsx` and `DebtNotification.jsx`) already supports `headline`, `href`, `symbol`, `closeable`, and `onCloseEvent` — so each notification type just maps to different props on the same component.
**Also build**: An `OtherNotification.jsx` component already exists (`src/applications/personalization/common/components/OtherNotification.jsx`) as a pattern for claim status updates — extend this pattern for each health template.
---
## Quarter 2 (Months 4–6): Integrate Summary Counts into My VA + MHV Secondary Nav
### Month 4: Wire `GET /v0/health_summary` into My VA Dashboard
**Goal**: Replace the 5+ independent API calls in `Dashboard.jsx` with a single summary fetch for the health section.
**Current pain** (from `src/applications/personalization/dashboard/components/Dashboard.jsx`):
```javascript
// Each of these is a separate useEffect → separate API call → separate loading state
useEffect(() => { fetchConfirmedFutureAppointments(); }, [...]);
useEffect(() => { fetchUnreadMessages(); }, [...]);
```
**New approach**: A single RTK Query hook (following the pattern established in `src/applications/mhv-medications/api/prescriptionsApi.js`):
```javascript
const { data: healthSummary, isLoading } = useGetHealthSummaryQuery();
```
This replaces the manual Redux thunks that fetch appointments and messages separately for the My VA dashboard context.
**Kept as-is**: The individual tool pages (VAOS, SM, Medications) continue using their own detailed endpoints. The summary endpoint is **only** for dashboard/notification contexts.
---
### Month 5: Add Badge Counts to MHV Secondary Nav
**Goal**: Show unread/action-needed counts on the shared MHV secondary nav tabs.
**Target component**: `MhvSecondaryNavItem` (`src/platform/mhv/secondary-nav/components/MhvSecondaryNavItem.jsx`). Currently renders plain text titles. Add an optional `count` prop:
```jsx
// MhvSecondaryNavItem.jsx — add badge
{count > 0 && (
  <span className="mhv-nav-badge" aria-label={`${count} items need attention`}>
    {count}
  </span>
)}
```
**Data source**: The `health_summary` endpoint from Month 4. The `MhvSecondaryNav` container (`src/platform/mhv/secondary-nav/containers/MhvSecondaryNav.jsx`) would call `useGetHealthSummaryQuery()` and pass counts to each nav item:
| Nav Item | Badge Source |
|---|---|
| Messages | `unreadMessageCount` |
| Appointments | `upcomingAppointmentCount` (next 24hrs only) |
| Medications | `prescriptionsReadyForRefill` |
| Records | `newLabResultCount` |

**Why this matters**: The MHV secondary nav is the **shared chrome** across all 5 health tools. It's in `src/platform/mhv/` (platform-level, not app-level) so badges here are visible from any tool. The `IconCTALink` in My VA already has a `dotIndicator` prop behind the `myVaNotificationDotIndicator` toggle — this establishes precedent.
---
### Month 6: Backend Notification Triggers (vets-api Workers)
**Goal**: Build the backend jobs that actually create `onsite_notifications` records when health events occur.
**Implementation** (all in vets-api, not vets-website):
- **New message**: When MHV SM Patient API delivers a new message, create a notification record with `template_id = health-new-message` and `metadata = { messageId }`.
- **Appointment reminder**: Scheduled job runs hourly, finds appointments in the next 24 hours that haven't had a reminder notification created, creates one per appointment.
- **Rx shipped**: When the prescription status transitions to "Active: Shipped" (or tracking info becomes available), create a notification.
- **Lab result**: When PHR refresh detects a new lab result (new entries in the extract), create a notification.
- **Travel pay**: When claim status changes (via BTSSS API callback), create a notification.

**Critical design decision**: Include the deep link target ID in the notification metadata (e.g., `{ "messageId": "12345" }`). The frontend template registry maps `templateId` → component, and the component reads the metadata to construct the deep link. This means the `href` on `VaNotification` is dynamically constructed:
```
/my-health/secure-messages/thread/{notification.attributes.metadata.messageId}
```
**Mobile benefit**: The VAHB mobile app can read the same `/v0/onsite_notifications` with the same metadata and construct its own native deep links to the corresponding screens. No mobile app code change needed for new notification types — just new template IDs that map to existing screens.
---
## Quarter 3 (Months 7–9): Read State, Notification Center, Performance
### Month 7: Backend "Last Seen" Timestamps
**Goal**: Enable "new since last visit" tracking server-side, so both web and mobile can show accurate "new" counts.
**New vets-api model**: `user_health_tool_visits` table:
| Column | Type | Example |
|---|---|---|
| `user_uuid` | UUID | `abc123` |
| `tool_name` | String | `secure_messages` |
| `last_seen_at` | DateTime | `2026-07-15T10:00:00Z` |

**New endpoints**:
- `PATCH /v0/health_tools/{tool_name}/mark_seen` — updates `last_seen_at` to now
- The `health_summary` endpoint now uses these timestamps to compute `newLabResultCount` and similar "new since last visit" counts **server-side**.
**Why backend**: Medical records currently has **no server-side "new" concept** — `NewRecordsIndicator` (`src/applications/mhv-medical-records/components/shared/NewRecordsIndicator.jsx`) is entirely session-scoped, comparing pre-refresh and post-refresh lists. A backend timestamp means "new labs" persists across sessions and works on mobile.
**Frontend change**: Each tool's root container calls `markSeen` on mount:
```javascript
// e.g., in SM's App.jsx on mount:
dispatch(markToolSeen('secure_messages'));
```
---
### Month 8: Notification Center Page
**Goal**: A dedicated `/my-health/notifications` page showing all health notifications in one place.
**Implementation**: A new route in the MHV health tools area, listing all undismissed `onsite_notifications` with health-category templates, grouped by date. Uses the same `fetchNotifications()` action from `src/applications/personalization/common/actions/notifications.js` and the same `VaNotification` component.
**Added to MHV secondary nav**: A 6th item in `mhvSecNavItems` (from `MhvSecondaryNav.jsx`):
```javascript
{
  title: 'Notifications',
  icon: 'notifications',
  href: '/my-health/notifications/',
  badge: totalNotificationCount,
}
```
**Dismiss all**: Add a "Dismiss all" action that `PATCH`es each notification, using the same `dismissNotificationById` pattern from `src/applications/personalization/common/actions/notifications.js`.
---
### Month 9: Performance Optimization — Parallel Fetching + Stale-While-Revalidate
**Goal**: Optimize the summary endpoint caching and parallelize remaining fetches.
**RTK Query migration**: Create a shared `healthApi` RTK Query instance (following the pattern from `src/applications/mhv-medications/api/prescriptionsApi.js` and `src/applications/vaos/redux/api/vaosApi.js`):
```javascript
export const healthApi = createApi({
  reducerPath: 'healthApi',
  baseQuery: ...,
  keepUnusedDataFor: 120, // 2 minutes
  refetchOnMountOrArgChange: 60, // refetch if data is > 60s old on mount
  endpoints: builder => ({
    getHealthSummary: builder.query({ query: () => '/v0/health_summary' }),
    getNotifications: builder.query({ query: () => '/v0/onsite_notifications' }),
  }),
});
```
RTK Query provides:
- **Automatic deduplication**: Multiple components requesting `getHealthSummary` share a single in-flight request.
- **Cache tag invalidation**: When a user sends a message or books an appointment, invalidate the summary cache.
- **Stale-while-revalidate**: Show cached counts immediately, refetch in background.
**Metrics to track**: Compare Datadog RUM page load times for My VA before/after, particularly the "time to first meaningful paint" for the health care section.
---
## Quarter 4 (Months 10–12): Push Notifications, Cross-Platform Parity, Polish
### Month 10: Real-Time Push via WebSocket or Polling
**Goal**: Notifications appear without page refresh.
**Approach**: Server-Sent Events (SSE) or polling for the web. The `health_summary` endpoint already supports polling at 60-second intervals. For more immediacy:
- **Option A (simpler)**: Poll `GET /v0/health_summary` every 60 seconds while the user is on any `/my-health/*` page. RTK Query's `pollingInterval` option makes this trivial.
- **Option B (more complex, better UX)**: Add SSE endpoint `GET /v0/health_events/stream` that pushes notification events. The MHV secondary nav subscribes and updates badge counts in real-time.
**Mobile**: The VAHB app already uses push notifications. The same backend notification-creation jobs from Month 6 can trigger VA Notify push notifications in parallel with creating `onsite_notifications` records. This is entirely a backend concern.
---
### Month 11: Notification Preferences (Backend)
**Goal**: Let Veterans control which notification types they receive.
**New vets-api model**: `notification_preferences` table:
| Column | Type | Example |
|---|---|---|
| `user_uuid` | UUID | `abc123` |
| `template_category` | String | `health-messages` |
| `channel` | String | `onsite` |
| `enabled` | Boolean | `true` |

**Endpoints**:
- `GET /v0/notification_preferences` — returns current preferences
- `PATCH /v0/notification_preferences` — update preferences
**UI**: A settings section within `/my-health/notifications` or linked from VA.gov profile notification settings. This is a lightweight form — no RJSF or forms-system needed.
**Mobile benefit**: Same preference API is consumed by VAHB mobile app's notification settings screen. One preference change applies to both web and mobile.
---

### Month 12: Audit, Cleanup, Documentation, and Rollout
**Goal**: Full production rollout with monitoring.
**Tasks**:
1. **Remove legacy parallel fetches**: Phase out the individual `useEffect` calls in `Dashboard.jsx` that fetch appointments and messages separately, fully replacing with the summary endpoint.
2. **Feature flag cleanup**: Remove the `myVaNotificationDotIndicator`, `myVaEnableNotificationComponent`, and `myVaHideNotificationsSection` toggles once the new system is stable.
3. **Datadog dashboards**: Track notification delivery rate, dismiss rate, click-through rate, and summary endpoint latency.
4. **Accessibility audit**: Ensure badge counts on `MhvSecondaryNavItem` meet WCAG 2.2 AA — `aria-label` on badge, screen reader announcements for count changes, no reliance on color alone.
5. **Documentation**: Update the copilot instruction files for `mhv-secure-messaging`, `mhv-medical-records`, `mhv-medications`, and `personalization` with the new notification patterns.
---

## Architecture Summary: What Lives Where
| Layer | What | Benefits |
|---|---|---|
| **vets-api (backend)** | `health_summary` endpoint, notification templates, trigger jobs, `last_seen` timestamps, preferences | Shared by web + mobile; no app release dependency |
| **vets-api (backend)** | `onsite_notifications` extended with health templates + metadata | Same dismiss/fetch API consumed by both clients |
| **vets-website (platform)** | `healthApi` RTK Query, notification template registry, `MhvSecondaryNavItem` badge | Shared across all MHV tools |
| **vets-website (app)** | `markToolSeen()` calls in each tool's root container | Per-tool "new" tracking |
| **VAHB mobile app** | Consumes same APIs; maps `templateId` → native screens | Zero frontend changes for new notification types |
---

## Risk Mitigation
- **Feature flags throughout**: Every new piece is behind a toggle. The existing `myVaEnableNotificationComponent` pattern (`Notifications.jsx`) shows how to do this.
- **Graceful degradation**: If `health_summary` fails, fall back to individual fetches (the existing code path). The summary is an optimization, not a hard dependency.
- **Rate limiting awareness**: The medications API already notes a "6 requests per day limit to VistA" (`prescriptionsApi.js`). The backend summary endpoint should aggregate from cached/pre-computed data, not make live calls to upstream systems on every request.
- **Incremental rollout**: Months 1–3 are backend-only with zero user-visible changes. Months 4–6 add subtle UI enhancements. Months 7–12 build toward the full vision. Each quarter delivers standalone value.
---

## Quarterly Milestone Checklist
### Q1: Backend Foundation
- [ ] `GET /v0/health_summary` endpoint designed, implemented, and deployed
- [ ] Health notification templates registered in `onsite_notifications`
- [ ] Frontend notification template registry replaces hardcoded debt filter
### Q2: Dashboard + Nav Integration
- [ ] My VA dashboard uses `health_summary` instead of 5+ separate fetches
- [ ] MHV secondary nav shows badge counts on Messages, Appointments, Medications, Records
- [ ] Backend workers create notifications for messages, appointments, Rx, labs, travel pay
### Q3: Read State + Notification Center
- [ ] "Last seen" timestamps tracked server-side per tool
- [ ] Dedicated Notification Center page at `/my-health/notifications`
- [ ] RTK Query `healthApi` with stale-while-revalidate caching deployed
### Q4: Real-Time + Preferences + Polish
- [ ] Polling or SSE for real-time notification updates
- [ ] Notification preferences API and UI
- [ ] Legacy fetch cleanup, feature flag removal, full documentation
