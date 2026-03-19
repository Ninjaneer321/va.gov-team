# Spike: Staging Environment with Test Accounts as Demo Mode

## Is this a viable option for demo mode? Why or why not?

**Verdict: Not viable.**

---

## Research Findings

### 1. Environments are build-time, not runtime

`__BUILDTYPE__` is injected via Webpack `DefinePlugin` at compile time (`config/webpack.config.js`). A production build cannot behave like staging — the API URLs, OAuth client IDs, eAuth URL prefixes, and feature flag sources are all baked in at build time. There is no runtime switch.

Relevant constants per environment (`src/site/constants/environments-configs.js`):
- **Staging**: `BASE_URL: https://staging.va.gov`, `API_URL: https://staging-api.va.gov`
- **Production**: `BASE_URL: https://www.va.gov`, `API_URL: https://api.va.gov`

Environment utility helpers (`src/platform/utilities/environment/index.js`) like `isStaging()` and `isProduction()` evaluate the baked-in `__BUILDTYPE__` constant — they cannot be overridden at runtime from a redirect page.

---

### 2. Feature flags differ per environment and cannot be shared

The platform uses Flipper for feature flags (`src/platform/utilities/feature-toggles/flipper-client.js`). Flipper is a separate service instance per environment. Staging and production maintain completely independent flag configurations with no sync mechanism.

At build time, four environment-based toggles are also auto-generated and merged into Redux state:

```js
{
  develop: environment.isDev(),
  localhost: environment.isLocalhost(),
  notProduction: !environment.isProduction(),
  staging: environment.isStaging(),
  production: environment.isProduction()
}
```

These are hardcoded to the build target. A staging build will always have `staging: true` and `production: false`, regardless of what URL a user navigated from. Any feature gated on these values will behave differently on staging than on production. The ticket's concern — "staging may not reflect production due to different feature flag configurations" — is structurally unavoidable.

---

### 3. Authentication and OAuth config differs per environment

Auth configuration is split into environment-specific files (`src/platform/user/authentication/config/staging.config.js` vs `prod.config.js`). These differ in:

- Which identity providers (CSPs) are enabled
- OAuth client IDs and secrets (different per environment)
- Whether verification is required
- eAuth URL prefixes (`sqa.` for staging, empty for prod — `src/platform/utilities/sso/constants.js`)

A redirect from `www.va.gov` to `staging.va.gov` would drop the user into an entirely different auth stack. Test accounts that authenticate on staging cannot be used on production, and vice versa.

---

### 4. No secure in-band method to distribute credentials

The ticket identifies the need for a "secure method to distribute usernames/passwords outside GitHub." No such mechanism exists in the current platform. Options would require external tooling (e.g., a shared secrets vault), and any approach that embeds or passes credentials via URL introduces significant security risk (credential exposure in browser history, server logs, and referrer headers).

---

### 5. Staging is not a stable demo environment

Staging receives continuous deployment from merged PRs. It is a QA/CI environment, not a controlled demo environment. It is subject to:

- Broken builds from in-progress work
- Data resets
- Feature flag configurations that intentionally differ from production
- Shared test account state collisions across concurrent users

A demo audience hitting staging on any given day may encounter an unstable or broken experience with no recourse.

---

### 6. The redirect page itself solves none of the above

A dedicated page on `va.gov` that links or redirects to `staging.va.gov` is technically trivial to build, but it only addresses discoverability. It does not resolve:

- The build-time environment separation
- Feature flag divergence
- Auth config differences
- Credential distribution security
- Staging instability

The redirect page would be a thin wrapper around an environment that is fundamentally unsuitable for demo use.

---

## Summary

| Concern | Finding |
|---|---|
| Can a production build behave like staging? | No — `__BUILDTYPE__` is set at compile time |
| Do staging and production share feature flag config? | No — Flipper is a separate service per environment |
| Are auth flows and OAuth clients the same? | No — environment-specific config files with different client IDs and CSP rules |
| Is there a secure way to distribute test credentials? | No existing mechanism; external tooling required |
| Is staging stable enough for demos? | No — continuous deployment target, shared state, data resets |
| Does the redirect page solve any of these problems? | No — it only addresses discoverability |
