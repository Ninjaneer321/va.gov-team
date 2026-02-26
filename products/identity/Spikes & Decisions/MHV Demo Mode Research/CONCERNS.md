# MHV Demo Mode — Security Concerns & Decisions

This document tracks security concerns raised during the design of Demo Mode, along with decisions and mitigations agreed upon.

---

## 1. Client-Side Password Is Not Real Security

**Risk Level**: Medium

**Concern**: The plan stores a SHA-256 hash of the demo password as a Webpack `DefinePlugin` constant (`__DEMO_PASSWORD_HASH__`). This means:
- The hash is embedded in the public JavaScript bundle — anyone can extract it with DevTools
- SHA-256 is fast; a simple password can be brute-forced offline in seconds
- A user can skip the password entirely by running `sessionStorage.setItem('demoMode', 'true')` in the console

**Question**: Is the password purely to prevent accidental discovery, or must it withstand a motivated attacker? If the latter, a server-side gatekeeper would be necessary.

**Decision**: **Speed bump only.** The password prevents accidental discovery by non-technical users. It is accepted that a developer could bypass it via the browser console or DevTools. No server-side gatekeeper required. The client-side SHA-256 hash approach in the plan is sufficient for this threat model.

---

## 2. Mock Data in the Production Bundle

**Risk Level**: Medium

**Concern**: Importing mock data modules directly means Webpack bundles them into production JavaScript:
- Every VA.gov user downloads demo mock data (increased bundle size)
- Mock data exposes internal API response structures, endpoint paths, and data schemas — free reconnaissance for attackers
- If mock data contains patterns resembling real PII/PHI formats (even fake SSNs, ICNs), it could raise compliance concerns

**Question**: Has the team considered lazy-loading via dynamic `import()` after demo activation? Or serving mock data from a lightweight endpoint?

**Decision**: **Dynamic `import()`.** Mock data will be code-split into a separate Webpack chunk that is only fetched when demo mode activates. Normal users never download it. This mirrors the VA Mobile App's approach of saved mock JSON files, but adapted for the web bundler. The existing mocked-auth dev-only mode is not sufficient for stakeholders — they need this working on production. Implementation note: the demo activation flow should `await import('./mock-data')` before redirecting to `/my-health`, so mock route registration completes before any API calls fire.

---

## 3. Modifying the Core `apiRequest()` Function

**Risk Level**: High

**Concern**: `apiRequest()` is the single most security-critical function in the frontend (CSRF, session management, OAuth refresh, credentials). Adding a demo-mode guard means:
- Every API call in production evaluates `isDemoMode()` (a `sessionStorage` read)
- A bug in the demo guard could short-circuit real API calls for real users
- The demo code path becomes a permanent attack surface in a security-critical function

**Question**: Would an adapter/wrapper pattern be preferable — where demo mode replaces the API module reference at the app entry point, keeping the real `apiRequest()` untouched?

**Decision**: **Service Worker intercept (preferred).** Do not modify `apiRequest()`. Instead, register a Service Worker during demo activation that intercepts all fetch requests matching VA API URL patterns and returns mock data. This is completely decoupled from application code — zero changes to any existing source files. The SW also handles FlipperClient's raw `fetch()` calls, which eliminates Concern #5 (`window.fetch` monkey-patching) as well. Fallback order if SW proves infeasible: adapter/wrapper pattern > modify `apiRequest()` as last resort. Implementation note: demo activation must `await navigator.serviceWorker.ready` before redirecting to `/my-health`.

---

## 4. `localStorage.hasSession` Side Effects

**Risk Level**: Medium

**Concern**: Setting `localStorage.setItem('hasSession', 'true')` tricks the real auth flow, but `localStorage` is origin-scoped (not tab-scoped like `sessionStorage`):
- If a trainer has a real VA.gov session in another tab, demo exit's `removeItem('hasSession')` would log them out of their real session
- If demo exit fails (browser crash), `hasSession` remains `true` with no real session — causing confusing "session expired" errors

**Question**: Should a separate storage key (e.g., `demoSession`) be used instead of hijacking the real `hasSession` flag?

**Decision**: **Accept the risk, document the limitation.** Use the real `hasSession` key alongside a `demoMode: true` flag in `localStorage`. The `demoMode` flag lets demo-aware code distinguish demo sessions from real ones. Known limitation: if a trainer has a real VA.gov session open in another tab, exiting demo mode will clear `hasSession` and may disrupt it. This is acceptable because trainers are unlikely to be logged into a real Veteran account simultaneously, and the use case is training/demos on shared workstations.

---

## 5. `window.fetch` Monkey-Patching in Production

**Risk Level**: Medium

**Concern**: Patching `window.fetch` globally (even narrowly for feature toggles) in production:
- CSP or future browser security features could interfere
- Other libraries or VA web components calling `fetch` could be inadvertently affected
- Race conditions during page load could miss the original reference or double-patch

**Question**: Could FlipperClient accept an optional fetch adapter, or could feature toggles be injected directly into the Redux store before FlipperClient initializes?

**Decision**: **Resolved by Concern #3.** The Service Worker approach eliminates this concern entirely. The SW intercepts all network requests at the browser level — including FlipperClient's raw `fetch()` calls to `/v0/feature_toggles`. No monkey-patching of `window.fetch` is needed. The SW will match the feature toggle URL pattern and return mock toggle values just like any other intercepted API call.

---

## 6. The `/demo` URL Is Trivially Discoverable

**Risk Level**: Low

**Concern**: `/demo` will be found by automated scanners, web crawlers, the public `manifest.json`, and the public GitHub source code. The brief states "only trainers have the URL," but this is security through obscurity.

**Question**: Is discoverability actually a concern? If yes, a less guessable path or a server-side intranet gate could help. If not, the password is the only barrier — which ties back to Concern #1.

**Decision**: **Not a concern. Keep `/demo`.** Trainers/clinicians need to access demo mode from any workstation, not just behind the VA network, so the URL must be publicly reachable. Gating behind VA intranet is not feasible for the target users. The password (Concern #1) is the only barrier, and since only mock data is exposed, the risk of someone discovering the URL is minimal.

---

## 7. Phishing & Confusion Potential

**Risk Level**: HIGH — Requires stakeholder risk acceptance before launch

**Concern**: Demo mode creates a functional replica of My HealtheVet on the **real `va.gov` domain** that displays fake patient data without real authentication. This introduces an inherent and **non-mitigable** phishing/social-engineering attack surface.

### Attack Scenario

1. A bad actor directs a Veteran to `va.gov/demo` (a real government URL) and provides the demo password
2. The Veteran sees what appears to be a legitimate VA.gov health portal with patient data
3. The bad actor claims: "This shows what VA has on file for you" or "Verify your information here"
4. The bad actor uses this false trust to extract real PII (SSN, date of birth, address) through a follow-up channel (phone call, email, separate phishing page)

### Why Client-Side Mitigations Are Insufficient

Every proposed mitigation is bypassable by a technically capable attacker using browser DevTools:

| Mitigation | How it's bypassed |
|---|---|
| Demo banner / disclaimer | Remove the DOM element or hide via CSS |
| Hardcoded fake names | Modify the mock data in memory or intercept the Service Worker response |
| Watermark overlay | Delete the overlay element |
| Obviously fake SSNs/data | Replace mock JSON values in the SW or in-memory |
| Client-side logging | Block the analytics beacon, send fake data, or simply use a fresh session |

**None of these mitigations are tamper-proof because the entire demo mode runs client-side.** A bad actor with basic web development knowledge can make demo mode indistinguishable from a real logged-in session.

### Amplifying Factors Specific to VA.gov

- **Government trust**: `va.gov` is a `.gov` domain — Veterans inherently trust it more than commercial sites. A demo page on `va.gov` carries the implicit authority of the U.S. government.
- **Target population**: Veterans, especially older Veterans, may be less likely to recognize a social-engineering attack originating from a `.gov` URL they've been told to visit.
- **Use case context**: The stated use cases include MHV Coordinators guiding Veterans through the portal and clinicians demonstrating features. If a bad actor impersonates a coordinator and says "go to va.gov/demo," it mirrors a legitimate workflow — making it harder for Veterans to distinguish real guidance from a scam.
- **No server-side audit trail**: Since demo mode is entirely client-side, VA has no reliable way to detect or investigate phishing campaigns using the demo page. Activation logs can be faked or suppressed.

### What Demo Mode Does NOT Expose

To be clear, demo mode does **not**:
- Expose any real Veteran data (all data is mock)
- Provide access to any backend systems
- Allow any write operations to real VA infrastructure
- Store or transmit any user input to VA servers

The risk is not data breach — it is **social engineering leverage** from hosting an interactive fake health portal on a trusted government domain.

### Recommendation

Implement best-effort client-side mitigations (persistent banner, disclaimers, clearly fake mock identities) as deterrents against casual misuse. However, these **must not be presented as security controls** — they are trivially removable.

**This risk requires a formal risk acceptance decision by VA security stakeholders before demo mode is deployed to production.** The decision should weigh:
- The training/demo value to clinicians, MHV Coordinators, and leadership (see Use Cases table in README_2.md)
- The phishing risk inherent to running a fake health portal on `va.gov`
- Whether alternative approaches (separate domain, server-rendered demo, video recordings) adequately serve the use cases

**Decision**: **Risk documented. Requires VA security stakeholder sign-off before production deployment.** Best-effort mitigations (banner, disclaimers, fake names) will be implemented but are acknowledged as non-tamper-proof. This concern cannot be fully resolved through technical means alone — it is an inherent consequence of running client-side demo mode on a trusted government domain.

---

## Summary

| # | Concern | Risk | Decision |
|---|---------|------|----------|
| 1 | Client-side password hash | Medium | **Speed bump only** — no server-side gate needed |
| 2 | Mock data in prod bundle | Medium | **Dynamic `import()`** — code-split, loaded only on activation |
| 3 | Modifying `apiRequest()` | High | **Service Worker intercept** — zero changes to `apiRequest()` |
| 4 | `localStorage.hasSession` hijack | Medium | **Accept risk** — use real key + `demoMode` flag, document limitation |
| 5 | `window.fetch` monkey-patch | Medium | **Resolved by #3** — SW intercepts all fetches including FlipperClient |
| 6 | `/demo` URL discoverability | Low | **Not a concern** — trainers need public access, password is the gate |
| 7 | Phishing/confusion potential | **HIGH** | **Requires VA security stakeholder sign-off** before production deploy |
