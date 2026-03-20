# Spike: Staging Environment with Test Accounts as Demo Mode

## Overview

Using `staging.va.gov` with pre-provisioned test accounts is the lowest-effort path to a demo mode — no new code, no new infrastructure, and real application behavior out of the box. The tradeoffs are real but manageable.

---

## What This Approach Offers

| Benefit | Detail |
|---|---|
| Zero implementation cost | No code changes required — staging already exists and test accounts are already maintained |
| Real application behavior | Trainees interact with the actual UI, not a mock or simplified facsimile |
| Real data shapes | API responses reflect actual backend behavior, not hand-crafted fixtures |
| Familiar tooling | No new infrastructure for engineers to maintain; leverages existing QA environment |
| Fast to stand up | Distributing access is a matter of sharing credentials and a URL |

---

## Tradeoffs and Risks

### 1. Staging may not reflect what users see on production

`__BUILDTYPE__` is injected at compile time via Webpack `DefinePlugin` (`config/webpack.config.js`). Staging and production are separate builds — API URLs, OAuth client IDs, eAuth URL prefixes, and feature flag sources are all baked in. There is no runtime switch.

Environment utility helpers like `isStaging()` and `isProduction()` (`src/platform/utilities/environment/index.js`) resolve to constants at build time. A staging build will always behave like staging, regardless of how a user arrived there.


---

### 2. Feature flag configurations are independent and will diverge

The platform uses Flipper for feature flags (`src/platform/utilities/feature-toggles/flipper-client.js`). Staging and production run entirely separate Flipper instances with no sync mechanism. Additionally, four build-time toggles are hardcoded per environment:

```js
{
  develop: environment.isDev(),
  localhost: environment.isLocalhost(),
  notProduction: !environment.isProduction(),
  staging: environment.isStaging(),
  production: environment.isProduction()
}
```

Features gated on these values will structurally behave differently on staging than on production.


---

### 3. Auth flows differ from production

Auth configurations are environment-specific. Differences include:

- Which identity providers (CSPs) are enabled
- OAuth client IDs (different per environment)
- Whether identity verification is required
- eAuth URL prefixes (`sqa.` for staging vs. empty for prod — `src/platform/utilities/sso/constants.js`)


---

### 4. Staging is a live QA environment, not a controlled demo environment

Staging receives continuous deployment from every merged PR. It is intentionally unstable by design. Risks on any given demo day include:

- Broken builds from in-progress work
- Data resets
- Shared test account state collisions if multiple people use the same credentials concurrently


---

## Credential Distribution

This demo mode is intended for VA internal employees to use when teaching non-technical veterans how to access their benefits and navigate VA.gov. For that audience, test account credentials can be distributed via VA email — institutionally controlled, already familiar, and appropriate for the use case.

If a no-credential option is preferred, `dev.va.gov` supports mocked-auth (`/sign-in/mocked-auth`), which lets users sign in by selecting a pre-seeded mock profile with no username or password required. The tradeoff is that `dev.va.gov` is less stable and has even less production fidelity than staging. A version of mocked-auth adapted for staging could be explored, but would require engineering work.

---

## Summary

| Factor | Assessment |
|---|---|
| Implementation cost | Low — no code changes required |
| Fidelity to production UI | Moderate — mostly accurate, structurally diverges on feature flags and auth |
| Stability | Variable — subject to continuous deployment and data resets |
| Maintenance burden | Low for engineering; operational burden for whoever manages credentials and monitors staging |

## Verdict

**Viable with accepted tradeoffs.** Staging is a practical starting point for VA internal training. The main limitations are staging/production divergence on feature flags and auth, and the inherent instability of a continuously deployed QA environment. It is best suited for scenarios where "close enough to production" is acceptable and trainers can absorb an occasional disruption.

If the training program requires high fidelity, consistent availability, or production-identical feature coverage, a purpose-built demo mode would be a better fit.
