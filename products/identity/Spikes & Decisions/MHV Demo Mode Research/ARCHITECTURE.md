# MHV Demo Mode — Technical Architecture

> **Purpose**: Consolidated technical plan for implementing Demo Mode on vets-website, incorporating all decisions from the security review (CONCERNS.md). Modeled after the VA mobile app's demo mode pattern, adapted for the web platform.
>
> **Key architectural decisions from security review**:
> - **Service Worker** for API interception — do NOT modify `apiRequest()` (CONCERNS.md #3)
> - **Dynamic `import()`** for mock data — code-split, not in main bundle (CONCERNS.md #2)
> - **`localStorage.demoMode`** flag alongside `hasSession` (CONCERNS.md #4)
> - **No `window.fetch` monkey-patching** — SW handles all fetches including feature toggles (CONCERNS.md #5)
> - **Phishing risk requires VA security stakeholder sign-off** before production deployment (CONCERNS.md #7)

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Activation Flow](#activation-flow)
3. [Service Worker Design](#service-worker-design)
4. [Mock Data Registry](#mock-data-registry)
5. [Mock Data Adapters (Per-App)](#mock-data-adapters)
6. [Authentication Handling](#authentication-handling)
7. [Feature Toggle Handling](#feature-toggle-handling)
8. [Demo Banner](#demo-banner)
9. [Exit Flow](#exit-flow)
10. [File Structure](#file-structure)
11. [Implementation Phases](#implementation-phases)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│  Browser Tab                                                │
│                                                             │
│  ┌──────────┐    ┌──────────────┐    ┌───────────────────┐  │
│  │ /demo    │───▶│ Password     │───▶│ activateDemo()    │  │
│  │ app      │    │ gate         │    │ - set localStorage │  │
│  └──────────┘    └──────────────┘    │ - register SW      │  │
│                                      │ - await SW ready    │  │
│                                      │ - dynamic import()  │  │
│                                      │   mock data         │  │
│                                      │ - populate SW cache │  │
│                                      │ - redirect /my-health│ │
│                                      └───────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Service Worker (demo-sw.js)                          │   │
│  │                                                      │   │
│  │  fetch event listener:                               │   │
│  │  1. Match request URL against mock route registry    │   │
│  │  2. If match → return mock Response (with delay)     │   │
│  │  3. If no match → passthrough to network             │   │
│  │                                                      │   │
│  │  Mock route registry (populated via postMessage):    │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │ GET  /v0/user                    → mock user   │  │   │
│  │  │ GET  /v0/feature_toggles         → mock toggles│  │   │
│  │  │ GET  /my_health/v1/prescriptions → mock Rx     │  │   │
│  │  │ POST /my_health/v1/messaging/... → mock msg    │  │   │
│  │  │ ...80+ routes across MHV apps                  │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ MHV Applications (UNMODIFIED)                        │   │
│  │                                                      │   │
│  │  apiRequest('/my_health/v1/prescriptions')           │   │
│  │       │                                              │   │
│  │       ▼                                              │   │
│  │  window.fetch(url) ──▶ intercepted by SW ──▶ mock    │   │
│  │                                                      │   │
│  │  Components render mock data normally.               │   │
│  │  They have no awareness of demo mode.                │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ DemoBanner (persistent)                              │   │
│  │ "DEMO MODE — This is not real Veteran data"   [Exit] │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Core Principle

Identical to the VA mobile app: **components don't know they're in demo mode.** The interception is transparent at the network layer. The mobile app intercepts at the API abstraction (`call()` function); we intercept one level lower at the Service Worker (browser network layer). The effect is the same — all `fetch()` calls, including `apiRequest()` and FlipperClient's raw `fetch()`, are intercepted without modifying any existing source code.

---

## Activation Flow

```
Trainer visits va.gov/demo
        │
        ▼
┌─────────────────────┐
│  DemoGateway.jsx    │
│  Password prompt    │
└────────┬────────────┘
         │ correct password
         ▼
┌─────────────────────────────────────────┐
│  activateDemo()                         │
│                                         │
│  1. localStorage.setItem('demoMode',    │
│     'true')                             │
│  2. localStorage.setItem('hasSession',  │
│     'true')                             │
│  3. Register Service Worker             │
│     navigator.serviceWorker.register(   │
│       '/demo-sw.js')                    │
│  4. await navigator.serviceWorker.ready │
│  5. const mocks = await import(         │
│       './mock-data-registry')           │
│  6. sw.postMessage({                    │
│       type: 'LOAD_MOCK_ROUTES',         │
│       routes: mocks.allRoutes           │
│     })                                  │
│  7. await confirmation message from SW  │
│  8. window.location.href = '/my-health' │
└─────────────────────────────────────────┘
```

### Step-by-step

1. **Password check**: Hash user input with SHA-256, compare against `__DEMO_PASSWORD_HASH__` (Webpack DefinePlugin constant). This is a speed bump only (CONCERNS.md #1).

2. **Set localStorage flags**:
   - `demoMode: 'true'` — demo-aware code checks this flag
   - `hasSession: 'true'` — triggers the existing auth flow in `Main.jsx` to call `apiRequest('/user')`, which the SW intercepts

3. **Register Service Worker**: `demo-sw.js` is a standalone file in the build output (not bundled by Webpack). It listens for `fetch` events and matches against registered mock routes.

4. **Wait for SW activation**: `navigator.serviceWorker.ready` resolves when the SW is active and controlling the page. This is critical — redirecting before the SW is ready means the first API calls would hit the real network.

5. **Dynamic import mock data**: `await import('./mock-data-registry')` triggers Webpack to load the code-split chunk containing all mock route definitions and data. This chunk is only fetched during demo activation — normal users never download it.

6. **Send mock routes to SW**: The mock data registry is sent to the SW via `postMessage`. The SW stores it in memory and uses it to match incoming fetch requests.

7. **Await SW confirmation**: The SW sends a message back confirming the routes are loaded. Only then do we redirect.

8. **Redirect to `/my-health`**: The MHV landing page loads normally. `Main.jsx` checks `localStorage.hasSession`, calls `apiRequest('/user')`, the SW intercepts it and returns the mock user profile. The app proceeds as if a real user is logged in.

---

## Service Worker Design

### `demo-sw.js`

```js
// This file lives at the root of the build output (not bundled by Webpack).
// It must be served from the site root to have scope over all va.gov paths.

let mockRoutes = [];
let isActive = false;

// Route matching: convert Express-style patterns to regex
function compileRoute(method, pattern) {
  const paramNames = [];
  const regexStr = pattern
    .replace(/:(\w+)/g, (_, name) => {
      paramNames.push(name);
      return '([^/]+)';
    })
    .replace(/\//g, '\\/');
  return {
    method: method.toUpperCase(),
    regex: new RegExp(`^${regexStr}(\\?.*)?$`),
    paramNames,
  };
}

// Match an incoming request against registered routes
function matchRoute(method, pathname) {
  for (const route of mockRoutes) {
    if (route.method !== method.toUpperCase()) continue;
    const match = pathname.match(route.compiled.regex);
    if (match) {
      const params = {};
      route.compiled.paramNames.forEach((name, i) => {
        params[name] = match[i + 1];
      });
      return { route, params };
    }
  }
  return null;
}

// Listen for mock route data from the main thread
self.addEventListener('message', (event) => {
  if (event.data.type === 'LOAD_MOCK_ROUTES') {
    mockRoutes = event.data.routes.map((route) => ({
      ...route,
      compiled: compileRoute(route.method, route.pattern),
    }));
    isActive = true;
    // Confirm routes are loaded
    event.source.postMessage({ type: 'MOCK_ROUTES_LOADED' });
  }

  if (event.data.type === 'DEACTIVATE_DEMO') {
    mockRoutes = [];
    isActive = false;
    // Unregister self
    self.registration.unregister();
  }
});

// Intercept fetch requests
self.addEventListener('fetch', (event) => {
  if (!isActive) return; // passthrough when not in demo mode

  const url = new URL(event.request.url);

  // Only intercept VA API calls (not static assets, analytics, etc.)
  const isApiCall =
    url.pathname.startsWith('/v0/') ||
    url.pathname.startsWith('/v1/') ||
    url.pathname.startsWith('/my_health/') ||
    url.pathname.startsWith('/data/');

  if (!isApiCall) return; // passthrough

  const result = matchRoute(event.request.method, url.pathname);

  if (!result) return; // no mock registered — passthrough to real network

  event.respondWith(
    new Promise((resolve) => {
      // Simulate network latency (300ms like mobile app)
      setTimeout(() => {
        // Call the mock handler with extracted params and query string
        const queryParams = Object.fromEntries(url.searchParams);
        let responseData;

        if (typeof result.route.handler === 'function') {
          responseData = result.route.handler(result.params, queryParams);
        } else {
          responseData = result.route.data;
        }

        resolve(
          new Response(JSON.stringify(responseData), {
            status: result.route.status || 200,
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      }, 300);
    }),
  );
});

// Claim clients immediately on activation
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
```

### Key design decisions

- **URL prefix filtering**: Only intercepts paths starting with `/v0/`, `/v1/`, `/my_health/`, `/data/`. Static assets, analytics pings, Sentry errors, and web component loads all pass through untouched.
- **300ms simulated delay**: Matches the mobile app. Prevents UI from rendering "too fast" which looks unnatural.
- **Passthrough for unregistered routes**: If an API call doesn't have a mock route registered, it falls through to the real network. This means we can incrementally add mock coverage without breaking anything.
- **`clients.claim()` on activation**: Ensures the SW takes control of the current page immediately after registration, rather than waiting for a navigation.

### Service Worker scope

The SW file must be served from the site root (`/demo-sw.js`) to intercept requests across all `/my-health/*` paths. In the vets-website build, this means the file needs to be copied to the build output root (not bundled by Webpack).

---

## Mock Data Registry

The mock data registry is the central mapping of API endpoints to mock responses. It's built as a single ES module that aggregates registrations from each MHV app.

### `src/platform/demo-mode/mock-data-registry.js`

```js
// This module is the dynamic import() entry point.
// Webpack code-splits everything imported from here into a separate chunk.

import { userRoutes } from './mocks/user-profile';
import { featureToggleRoutes } from './mocks/feature-toggles';
import { medicationRoutes } from '../../applications/mhv-medications/mocks/demo';
import { messagingRoutes } from '../../applications/mhv-secure-messaging/mocks/demo';
import { medicalRecordsRoutes } from '../../applications/mhv-medical-records/mocks/demo';
import { landingPageRoutes } from '../../applications/mhv-landing-page/mocks/demo';
import { supplyRoutes } from '../../applications/mhv-supply-reordering/mocks/demo';

export const allRoutes = [
  ...userRoutes,
  ...featureToggleRoutes,
  ...medicationRoutes,
  ...messagingRoutes,
  ...medicalRecordsRoutes,
  ...landingPageRoutes,
  ...supplyRoutes,
];
```

### Route definition format

Each route is a plain object. This format is serializable via `postMessage` to the Service Worker (handler functions are serialized as source strings and reconstructed in the SW, or pre-evaluated into static data).

```js
// For static data:
{
  method: 'GET',
  pattern: '/my_health/v1/prescriptions',
  data: { data: [...], meta: { pagination: { ... } } },
}

// For dynamic handlers (params/query-dependent):
{
  method: 'GET',
  pattern: '/my_health/v1/prescriptions/:id',
  handler: (params, query) => {
    return prescriptionsData.find(rx => rx.id === params.id);
  },
}
```

**Important constraint**: Since mock data is sent to the SW via `postMessage`, function handlers cannot be serialized directly. Two approaches:

1. **Pre-evaluate all routes to static data** at registration time (simpler, covers 90% of cases)
2. **Keep handler logic in the SW itself** by embedding a route-to-data lookup table in the SW message, with simple param substitution logic in the SW

The recommended approach is **option 1** — pre-evaluate. Most handlers simply look up data by ID or return a static list. Generate the full response objects at import time and send them as serializable data.

For the ~10% of routes that need dynamic behavior (pagination, filtering), embed the data set and let the SW perform simple array slicing based on query params.

---

## Mock Data Adapters

Each MHV app creates a `mocks/demo/index.js` that imports from the existing `mocks/api/` data and exports the route definition array.

### Adapter strategy by data format

The existing mock data uses several export patterns. Here's how each maps to the demo route format:

| Existing Pattern | Example | Adapter Strategy |
|---|---|---|
| **Plain object export** | Secure Messaging `allFolders` | Use directly as `data` field |
| **Generator function** | Medications `generateMockPrescriptions()` | Call once at import time, use result as `data` |
| **Handler with `req.params`** | Medical Records `single(req, res)` | Extract the data lookup logic, map to `handler(params, query)` |
| **Handler with `req.query`** | Medications pagination | Pre-generate full dataset, let SW slice by page/per_page |
| **JSON file import** | `vamc-ehr.json` | Import directly as `data` |

### Example: Medications adapter

```js
// src/applications/mhv-medications/mocks/demo/index.js

import {
  generateMockPrescriptions,
  mockPrescriptionDocumentation,
} from '../api/mhv-api/prescriptions';

// Pre-generate the dataset at import time
const allPrescriptions = generateMockPrescriptions(null, 27);

const findPrescription = (params) => {
  const rx = allPrescriptions.data.find(
    (p) => p.id === params.id,
  );
  return { data: rx };
};

export const medicationRoutes = [
  {
    method: 'GET',
    pattern: '/my_health/v1/prescriptions',
    data: allPrescriptions,
  },
  {
    method: 'GET',
    pattern: '/my_health/v1/prescriptions/:id',
    // This will be pre-evaluated per known ID at registration
    lookup: { dataSet: 'prescriptions', key: 'id' },
  },
  {
    method: 'GET',
    pattern: '/my_health/v1/prescriptions/list_refillable_prescriptions',
    data: {
      data: allPrescriptions.data.filter(
        (rx) => rx.attributes.isRefillable,
      ),
    },
  },
  {
    method: 'GET',
    pattern: '/my_health/v1/prescriptions/:id/documentation',
    data: mockPrescriptionDocumentation(),
  },
  {
    method: 'PATCH',
    pattern: '/my_health/v1/prescriptions/:id/refill',
    data: { status: 200 },
    status: 200,
  },
];
```

### Example: Secure Messaging adapter

```js
// src/applications/mhv-secure-messaging/mocks/demo/index.js

import folders from '../mocks/folders';
import messages from '../mocks/messages';
import recipients from '../mocks/recipients';
import categories from '../mocks/categories';

export const messagingRoutes = [
  {
    method: 'GET',
    pattern: '/my_health/v1/messaging/folders',
    data: folders.allFolders,
  },
  {
    method: 'GET',
    pattern: '/my_health/v1/messaging/folders/:folderId',
    data: folders.oneFolder,
  },
  {
    method: 'GET',
    pattern: '/my_health/v1/messaging/folders/:folderId/threads',
    data: folders.allThreads,
  },
  {
    method: 'GET',
    pattern: '/my_health/v1/messaging/messages/:id',
    data: messages.singleMessage,
  },
  {
    method: 'GET',
    pattern: '/my_health/v1/messaging/recipients',
    data: recipients.allRecipients,
  },
  {
    method: 'GET',
    pattern: '/my_health/v1/messaging/messages/categories',
    data: categories.allCategories,
  },
  // ... remaining routes
];
```

---

## Authentication Handling

### How it works (zero auth code changes)

The existing auth flow is exploited transparently:

1. `activateDemo()` sets `localStorage.hasSession = 'true'`
2. When `/my-health` loads, `Main.jsx` sees `hasSession` and calls `apiRequest('/user')`
3. `apiRequest()` calls `fetch(API_URL + '/v0/user')` — the SW intercepts this
4. SW returns the mock user profile (LOA3, all MHV services)
5. `mapRawUserDataToState()` processes it normally into Redux
6. All MHV auth checks pass: `currentlyLoggedIn: true`, `loa.current: 3`, services include `rx`, `messaging`, `health-records`

### Mock user profile

```js
// src/platform/demo-mode/mocks/user-profile.js

export const mockDemoUser = {
  data: {
    id: '',
    type: 'users_scaffolds',
    attributes: {
      services: [
        'facilities',
        'user-profile',
        'rx',
        'messaging',
        'health-records',
        'medical-records',
        'mhv-account-creation',
      ],
      account: { accountUuid: 'demo-user-uuid' },
      profile: {
        email: 'demo.user@example.com',
        firstName: 'Demo',
        middleName: null,
        lastName: 'User',
        birthDate: '1950-01-01',
        gender: 'M',
        verified: true,
        loa: { current: 3, highest: 3 },
        multifactor: true,
        signIn: { serviceName: 'logingov', accountType: null },
      },
      vaProfile: {
        status: 'OK',
        birthDate: '19500101',
        familyName: 'User',
        gender: 'M',
        givenNames: ['Demo'],
        isCernerPatient: false,
        facilities: [{ facilityId: '979', isCerner: false }],
        vaPatient: true,
        mhvAccountState: 'OK',
      },
      veteranStatus: {
        status: 'OK',
        isVeteran: true,
        servedInMilitary: true,
      },
      inProgressForms: [],
      prefillsAvailable: [],
      vet360ContactInformation: {},
    },
  },
};

export const userRoutes = [
  {
    method: 'GET',
    pattern: '/v0/user',
    data: mockDemoUser,
  },
  {
    method: 'GET',
    pattern: '/v0/user/credential_emails',
    data: {
      data: {
        credentialEmails: [
          { email: 'demo.user@example.com', credentialType: 'logingov' },
        ],
      },
    },
  },
];
```

### AutoSSO bypass

`AutoSSO.jsx` manages SSO keep-alive by calling `/v0/sessions/custom/keepalive`. In demo mode, the SW intercepts this call and returns a success response. No modification to `AutoSSO.jsx` is needed — the SW handles it transparently.

```js
// Added to the platform routes in mock-data-registry
{
  method: 'GET',
  pattern: '/v0/sessions/custom/keepalive',
  data: { status: 200 },
  status: 200,
},
```

---

## Feature Toggle Handling

FlipperClient uses raw `fetch()` (not `apiRequest()`) to poll `/v0/feature_toggles`. Since the Service Worker intercepts all fetch calls, this is handled transparently — no `window.fetch` patching needed (CONCERNS.md #5).

```js
// src/platform/demo-mode/mocks/feature-toggles.js

export const featureToggleRoutes = [
  {
    method: 'GET',
    pattern: '/v0/feature_toggles',
    data: {
      data: {
        type: 'feature_toggles',
        features: [
          // MHV Medications
          { name: 'mhv_medications_display_allergies', value: true },
          { name: 'mhv_medications_display_pending_meds', value: true },
          { name: 'mhv_medications_management_improvements', value: true },
          { name: 'mhv_medications_display_documentation_content', value: true },
          { name: 'mhv_medications_display_grouping', value: true },
          // MHV Secure Messaging
          { name: 'mhv_secure_messaging_filter_accordion', value: true },
          { name: 'mhv_secure_messaging_recipient_opt_groups', value: true },
          { name: 'mhv_secure_messaging_read_receipts', value: true },
          // MHV Medical Records
          { name: 'mhv_accelerated_delivery_enabled', value: true },
          { name: 'mhv_accelerated_delivery_allergies_enabled', value: true },
          { name: 'mhv_accelerated_delivery_conditions_enabled', value: true },
          { name: 'mhv_accelerated_delivery_vital_signs_enabled', value: true },
          { name: 'mhv_accelerated_delivery_vaccines_enabled', value: true },
          { name: 'mhv_accelerated_delivery_labs_and_tests_enabled', value: true },
          // MHV Landing Page
          { name: 'mhv_landing_page_personalization', value: true },
          // General
          { name: 'mhv_bypass_downtime_notification', value: true },
          // ... additional toggles as needed
        ],
      },
    },
  },
];
```

The FlipperClient polls every 5000ms. Each poll hits the SW and gets the same mock response — no network traffic, no performance impact.

---

## Demo Banner

```jsx
// src/platform/demo-mode/DemoBanner.jsx

import React from 'react';
import { deactivateDemo } from './index';

export default function DemoBanner() {
  const isDemoActive = localStorage.getItem('demoMode') === 'true';

  if (!isDemoActive) return null;

  return (
    <div
      role="status"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        backgroundColor: '#FAD980',
        color: '#1B1B1B',
        textAlign: 'center',
        padding: '8px 16px',
        fontWeight: 'bold',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <span>
        DEMO MODE — This is not real Veteran data.
        VA will never ask you to visit this page.
      </span>
      <button
        type="button"
        onClick={deactivateDemo}
        style={{
          background: '#112E51',
          color: '#FFFFFF',
          border: 'none',
          padding: '4px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Exit Demo Mode
      </button>
    </div>
  );
}
```

Rendered conditionally in `src/platform/site-wide/index.js` — the only existing file that needs a small addition (~5 lines) to mount the banner when `localStorage.demoMode === 'true'`.

---

## Exit Flow

```
Trainer clicks "Exit Demo Mode"
        │
        ▼
┌─────────────────────────────────┐
│  deactivateDemo()               │
│                                 │
│  1. Send DEACTIVATE_DEMO to SW  │
│     (SW unregisters itself)     │
│  2. localStorage.removeItem(    │
│     'demoMode')                 │
│  3. localStorage.removeItem(    │
│     'hasSession')               │
│  4. window.location.href = '/'  │
└─────────────────────────────────┘
```

Other exit paths:
- **Tab close**: `localStorage` persists, but without the SW registered on next visit, `hasSession` triggers a real `/user` call which fails and clears the session normally.
- **Navigate to `/demo`**: Can restart with a fresh demo session.

Known limitation (CONCERNS.md #4): If the trainer has a real VA.gov session in another tab, clearing `hasSession` may disrupt it. This is accepted and documented.

---

## File Structure

### New files

```
src/
├── platform/
│   └── demo-mode/
│       ├── index.js                    # activateDemo(), deactivateDemo(), isDemoMode()
│       ├── mock-data-registry.js       # Aggregates all app mock routes (dynamic import entry)
│       ├── DemoBanner.jsx              # Persistent demo indicator + exit button
│       └── mocks/
│           ├── user-profile.js         # Mock LOA3 user with all MHV services
│           └── feature-toggles.js      # Consolidated MHV feature toggle values
│
├── applications/
│   ├── demo/
│   │   ├── manifest.json              # { rootUrl: "/demo", entryFile: "./app-entry.jsx" }
│   │   ├── app-entry.jsx              # Standard vets-website app entry
│   │   └── DemoGateway.jsx            # Password form + activateDemo() call
│   │
│   ├── mhv-medications/
│   │   └── mocks/demo/index.js        # Medication route definitions
│   │
│   ├── mhv-secure-messaging/
│   │   └── mocks/demo/index.js        # Messaging route definitions
│   │
│   ├── mhv-medical-records/
│   │   └── mocks/demo/index.js        # Medical records route definitions
│   │
│   ├── mhv-landing-page/
│   │   └── mocks/demo/index.js        # Landing page route definitions
│   │
│   └── mhv-supply-reordering/
│       └── mocks/demo/index.js        # Supply reordering route definitions

# At build output root (not in src/):
demo-sw.js                              # Service Worker file (copied during build)
```

### Existing files modified

| File | Change | Lines |
|---|---|---|
| `src/platform/site-wide/index.js` | Mount `DemoBanner` when `localStorage.demoMode === 'true'` | ~5 |
| `config/webpack.config.js` | Add `__DEMO_PASSWORD_HASH__` DefinePlugin constant + copy `demo-sw.js` to build output | ~5 |

**Total existing files modified: 2** (down from 3 in the original plan — `apiRequest()` and `AutoSSO.jsx` are no longer touched).

---

## Implementation Phases

| Phase | What | Existing Files Modified | New Files Created | Description |
|---|---|---|---|---|
| **1. Service Worker** | `demo-sw.js` | 0 | 1 | Route matching, fetch interception, postMessage API. Can be tested standalone with hardcoded routes. |
| **2. Core module** | `src/platform/demo-mode/` | 0 | 3 | `index.js` (activate/deactivate), `mocks/user-profile.js`, `mocks/feature-toggles.js`. |
| **3. Entry app** | `src/applications/demo/` | 0 | 3 | `manifest.json`, `app-entry.jsx`, `DemoGateway.jsx`. Password gate + activation flow. |
| **4. Mock registry** | `mock-data-registry.js` | 0 | 1 | Dynamic import entry point. Initially just user + feature toggles. |
| **5. Banner** | `DemoBanner.jsx` + site-wide mount | 1 | 1 | Visual indicator + exit button. |
| **6. App mocks** | Per-app `mocks/demo/index.js` | 0 | 5 | Adapt existing mock data to route definition format. **Parallelizable** — one developer per app. |
| **7. Build config** | `webpack.config.js` | 1 | 0 | `DefinePlugin` constant + copy SW to output. |

### Milestone checkpoints

- **After Phase 4**: Proof of concept. Visit `/demo`, enter password, redirect to `/my-health`, see mock user name in the header. MHV apps show "loading" or errors (no app mocks yet).
- **After Phase 6**: Full demo. All MHV apps render with mock data. Feature toggles active. Trainers can click through the full MHV experience.
- **After Phase 7**: Production-ready build. Pending VA security stakeholder sign-off (CONCERNS.md #7).

---

## Variant: Hybrid with Mocked Authentication (Approach B1)

If the team chooses Approach B1 from ALTERNATIVES.md (extending the existing `mocked_authentication` vets-api module to production), the architecture changes as follows:

| Component | Approach A (pure client-side) | Approach B1 (hybrid) |
|---|---|---|
| **Auth gate** | Client-side password in DemoGateway.jsx | Server-side mocked auth module (existing) |
| **Session** | Fake `localStorage.hasSession` | Real (mocked) OAuth session token |
| **`/v0/user` response** | SW returns mock user | vets-api returns mock user (already built) |
| **MHV API responses** | SW returns mock data | SW returns mock data (same) |
| **Feature toggles** | SW returns mock toggles | SW returns mock toggles (same) |
| **Files modified in vets-api** | 0 | ~2 (enable routes in prod, add access control) |
| **Service Worker** | Same | Same |
| **Mock data adapters** | Same | Same |

The Service Worker, mock data registry, per-app adapters, DemoBanner, and exit flow are **identical** in both approaches. The only difference is whether auth is handled client-side or server-side. This means the client-side work is reusable regardless of which approach is chosen — the auth layer is swappable.
