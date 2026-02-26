# MHV Demo Mode — Alternatives Analysis

> **Purpose**: Evaluate whether a client-side demo mode on va.gov is the right approach, and explore alternatives that may better serve the use cases with fewer security trade-offs.

---

## The Core Question

Does it make sense to build a client-side demo mode that serves mock data on the live `va.gov` domain?

**Short answer: The use cases are real, but a fully client-side demo mode on a `.gov` domain carries a phishing risk that cannot be technically mitigated (see CONCERNS.md Concern 7). There are alternative approaches — some already partially built — that may serve the same use cases with a better risk profile.**

---

## Who Needs This and Why

From the use cases table in README_2.md, there are three distinct user groups with different needs:

| User Group | Need | Real Auth Possible? |
|---|---|---|
| **Clinical staff / trainers** | Show clinicians how MHV features appear to Veterans | No — they don't have Veteran accounts |
| **MHV Coordinators** | Walk a Veteran through prescription refills, messaging, etc. | Yes — the Veteran is present and can log in |
| **Non-clinical stakeholders / leadership** | Live demo for meetings and presentations | No — no Veteran accounts available |

The critical insight: **only the first and third groups actually need mock data.** MHV Coordinators already guide Veterans using the Veteran's own account — this is their current workflow.

---

## Approaches Evaluated

### Approach A: Client-Side Demo Mode (Current README_2.md Plan)

**How it works**: Service Worker intercepts all API calls on the live va.gov site and returns mock data from code-split JS bundles. No server-side changes.

**Strengths**:
- No backend work required
- Mirrors the proven VA mobile app pattern
- Quick to implement and ship
- Each MHV app already has mock data in `mocks/api/` directories

**Weaknesses**:
- **Phishing risk is the primary concern** (CONCERNS.md Concern 7). A bad actor can direct Veterans to `va.gov/demo`, strip the demo banner via DevTools, and use the trust of a `.gov` domain to social-engineer real PII. This risk cannot be mitigated client-side.
- Mock data, demo logic, and the Service Worker are all inspectable and modifiable by anyone with browser DevTools
- No server-side audit trail for demo activations
- Adds permanent demo-mode code paths to the production frontend

**Verdict**: Viable technically but questionable in scope and value. Building a client-side demo mode for only 4-6 MHV applications on a 90+ application platform is a narrow solution that introduces permanent production code paths, a Service Worker, and a phishing attack surface — all for a training use case that has better alternatives (Approaches B and D). A fully client-side demo on va.gov only makes strong sense if the scope expands significantly (e.g., a full `demo.va.gov` subdomain with server-side rendering). For the current MHV-only scope, the cost-to-risk ratio does not favor this approach.

---

### Approach B: Extend Existing Mocked Authentication to Production

**What already exists**: The `mocked_authentication` module in vets-api (`modules/mocked_authentication/`) is a fully functional server-side system:
- Real PKCE OAuth flow with `client_id: vamock`
- Server-side mock user profile selection UI (Ruby/Rails engine)
- Profile data stored in JSON files on the server (`vets-api-mockdata` repo)
- MPI mock data support
- Credential selection page with profile preview
- Currently gated to `localhost` and `development` environments only (routes disabled on staging via `Settings.vsp_environment`)

The client-side (`src/applications/login/containers/MockAuth.jsx`) triggers a real OAuth flow with `client_id: vamock`, which routes to the server-side mocked auth module. The server presents a profile selection dropdown, the trainer picks a mock user, and the server completes the OAuth flow with mocked credentials. This produces a real (mocked) session — all auth checks pass naturally.

**The gap**: Mocked authentication gives you a fake **session/identity**, but it does **not** mock downstream MHV API responses. When MHV apps call `/my_health/v1/prescriptions`, that hits the real MHV backend, which has no data for the mock user. So you'd still need one of:

- **(B1) Hybrid: Mocked Auth + Client-Side SW Mock Data** — Use mocked auth for the login, then the Service Worker for MHV API responses. Auth is server-gated; data is client-side.
- **(B2) Fully Server-Side Mock Data** — Add mock data routing in vets-api for MHV endpoints when the session belongs to a mock user. Most secure, but significant backend engineering.
- **(B3) Pre-Populated Test Data in Real MHV Systems** — Create actual test patient records in MHV backends for specific mock user ICNs. No frontend mocking needed, but requires cross-team coordination.

**Strengths**:
- Authentication is server-side — not bypassable via DevTools
- Access control can be enforced server-side (password, IP allowlist, feature flag)
- Server-side audit logging of demo sessions is reliable
- Builds on existing, tested infrastructure
- Mock user profiles are not exposed in the client bundle

**Weaknesses**:
- Does not solve the MHV API data problem on its own — needs B1, B2, or B3
- Requires vets-api changes and deployment to enable routes in production
- The phishing concern (CONCERNS.md Concern 7) is reduced but not eliminated if B1 is used
- B2 requires significant backend engineering across multiple MHV API domains
- B3 requires coordination across VA backend teams and ongoing data maintenance

**Verdict**: The strongest foundation for a secure demo mode. The mocked auth infrastructure is already built and proven. The decision is which sub-approach (B1/B2/B3) to pair it with for MHV data.

---

### Approach C: Dedicated Mock Users with Real MHV Data

**How it works**: Create actual test user accounts across VA systems (MPI, MHV, VistA) with pre-populated health data — real prescriptions, messages, medical records, appointments. These accounts authenticate through real credential providers (Login.gov/ID.me test accounts) and hit real MHV backends.

**Strengths**:
- The most realistic experience — everything is real except the user identity
- Zero mock data infrastructure to build or maintain on the frontend
- No phishing risk — the experience is identical to a real Veteran's
- No client-side demo code in production at all
- No Service Worker, no bundle size impact, no code changes

**Weaknesses**:
- **Requires significant cross-team coordination**: VA Identity, MPI, MHV backend, VistA, and potentially Oracle Health teams must all create and maintain test accounts
- Test data goes stale — prescriptions expire, appointments pass, messages age out
- Ongoing maintenance burden to keep test data realistic and current
- May not be feasible if MHV production backend systems don't support test/synthetic patients
- Limited to pre-configured scenarios — can't easily demo edge cases on the fly
- **Compliance and audit risks**: Synthetic/test patient records in a government production system raise concerns around data integrity, accreditation, and audit trails. Test accounts could be accidentally surfaced in real clinical workflows or reporting.
- These production test accounts already exist — and the limitations and risks associated with them are a primary driver for why the "Demo Mode" concept was requested in the first place

**Verdict**: These accounts already exist but carry compliance, audit, and maintenance burdens that make them insufficient as a demo solution — which is exactly why this project was initiated.

---

### Approach D: Guided Onboarding Walkthrough (intro.js / Shepherd.js)

**How it works**: After a real Veteran authenticates, offer an optional guided tour overlay — tooltips, highlights, step-by-step walkthrough — that explains each section of the MHV interface. Libraries like [intro.js](https://introjs.com/) or [Shepherd.js](https://shepherdjs.dev/) provide this capability out of the box.

A trainer or MHV Coordinator sitting with a Veteran would say "let me show you how to refill your prescriptions" and trigger the walkthrough, which highlights each UI element in sequence with explanatory text.

**Strengths**:
- **No mock data whatsoever** — shows the Veteran's real data with educational overlays
- **Zero phishing risk** — requires real authentication, displays real data, no fake anything
- **Directly addresses the MHV Coordinator use case** — "guide a Veteran through prescription refills" is exactly what a walkthrough does
- No security concerns — no demo mode, no mock data, no Service Worker, no auth bypass
- **Enhances the actual product for all Veterans**, not just trainers — any user can take a self-guided tour
- Well-established UX pattern with mature libraries
- Can be triggered on first visit (onboarding) or on-demand from a "Take a tour" button

**Weaknesses**:
- **Does not serve the "leadership demo" use case** — requires a logged-in Veteran account with real data
- **Does not serve the "clinical staff training" use case** — clinicians don't have Veteran accounts
- Only shows whatever data the logged-in user actually has — can't demo scenarios the user lacks (e.g., "this is what a pending prescription looks like" if they have no pending prescriptions)
- Requires building tour step definitions for each MHV app (element selectors, step text, ordering)
- Tour content must be maintained as UI evolves — selector changes break tour steps

**Verdict**: Excellent for MHV Coordinators and general Veteran onboarding. Does NOT replace demo mode for clinical training and leadership demos where no real Veteran account is available. Should be considered as a **complement** to any demo approach, not a replacement.

---

## Comparison Matrix

| Criteria | A: Client-Side Demo | B: Mocked Auth (hybrid B1) | C: Real Test Accounts | D: Guided Walkthrough |
|---|---|---|---|---|
| Serves clinical staff training | Yes | Yes | Yes | No |
| Serves MHV Coordinator guidance | Yes | Yes | Yes | **Yes (best fit)** |
| Serves leadership demos | Yes | Yes | Yes | No |
| Phishing risk on va.gov | **HIGH** | Medium | None | None |
| Backend work required | None | Medium | High | None |
| Frontend work required | High | Medium | None | Medium |
| Cross-team coordination | None | Low (Identity team) | **High (many teams)** | None |
| Data maintenance burden | Low | Low | **High** | Low |
| Mock data in client bundle | Yes (code-split) | Yes (code-split) | No | No |
| Existing infra to build on | Partial (app mocks) | **Yes (mocked auth module)** | No | No |
| Server-side access control | No | **Yes** | Yes | N/A |
| Server-side audit trail | No | **Yes** | Yes | N/A |
| Time to implement | Weeks | Weeks + vets-api deploy | Months | Weeks |

---

## Recommendation

No single approach serves all three user groups perfectly. The strongest strategy is a **combination of Approaches B and D**, supplemented by static educational materials.

### For MHV Coordinators (guiding Veterans): Approach D — Guided Walkthrough

This is the highest-value, lowest-risk option. MHV Coordinators are already sitting with Veterans who are logged into their own accounts. A guided walkthrough overlay is the natural UX for "show me how to refill my prescriptions." It requires no mock data, has no security risk, and improves the product for all users — not just trainers.

### For Clinical Staff Training & Leadership Demos: Approach B1 — Mocked Auth + Service Worker

Use the existing `mocked_authentication` server-side module as the auth gate (extended to production behind server-side access control), combined with the client-side Service Worker for MHV API mock data. This gives you:
- **Server-controlled access** — demo password and profile selection happen server-side, not in a client-side JS bundle
- **Real OAuth session** — the mock user has a legitimate (mocked) session token, so all platform auth checks pass naturally without any auth bypass code
- **Client-side MHV data** — the Service Worker serves mock prescriptions, messages, records, etc., but only after server-side auth succeeds
- **Server-side audit logging** — every demo session activation is logged in vets-api

The phishing risk from CONCERNS.md Concern 7 still applies to B1 (mock data on a `.gov` domain) and still requires VA security stakeholder sign-off. However, the risk is reduced compared to pure Approach A because the entry point is server-gated and auditable.

### For Veteran Self-Service After Appointments: Static Educational Materials

The in-clinic demo (Approaches B/D) addresses the trainer's need, but not the Veteran's need to **remember what they were shown once they get home**. A guided walkthrough or live demo is ephemeral — once the appointment ends, the Veteran is on their own. Supplementary materials should be considered:

- **YouTube video walkthroughs** — Screen recordings showing how to refill prescriptions, send secure messages, view medical records, etc. Veterans can rewatch at their own pace. Low cost to produce and maintain.
- **Printable pamphlets / quick-start guides** — Step-by-step instructions with annotated screenshots that clinicians hand to Veterans. Accessible to Veterans without strong digital literacy.
- **In-app help links** — Link to the above materials from within the MHV apps themselves (e.g., a "Need help?" link to the relevant video).

These are not a replacement for a live demo, but they extend the value of a clinic visit well beyond the appointment itself.

### Why Not Approach A (Pure Client-Side Demo)

Building a client-side demo mode for 4-6 MHV applications on a 90+ application platform is a narrow solution with disproportionate risk and cost. It introduces permanent demo code paths in production, a Service Worker on a government domain, and a phishing attack surface — all for a use case that Approaches B and D handle with a better risk profile. Pure client-side demo only becomes compelling at a much larger scope (e.g., a dedicated `demo.va.gov` subdomain with server-side rendering for the full VA.gov experience).

---

## What This Means for the Current Plan

1. **CONCERNS.md Concern 7 (phishing) must be formally accepted** by VA security stakeholders before any approach that shows mock data on va.gov ships to production. This applies to both Approach A and B1.

2. **The mocked auth module is an underutilized asset.** It already handles the hardest part (server-side auth with mock users) and is tested. Extending it to production is less risky than building an entirely new client-side auth bypass.

3. **The guided walkthrough (Approach D) should be built regardless** of which demo approach is chosen. It's the right solution for MHV Coordinators, it improves the product for all Veterans, and it carries zero security risk.

4. **The README_2.md implementation plan remains largely valid** for whichever approach is chosen — the Service Worker mock data layer, dynamic `import()`, mock data registry, and DemoBanner are all reusable. The main difference is whether auth is handled client-side (Approach A) or server-side (Approach B1).
