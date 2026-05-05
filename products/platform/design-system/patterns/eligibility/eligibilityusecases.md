# VA Forms — Upfront Eligibility Gates

Forms in vets-website that verify veteran eligibility before the form starts, organized by complexity of the gate.

---

## Most complex — API-driven with multiple outcome states

### HCA — Form 10-10EZ (Health Care Application)
**Path:** `src/applications/hca`

Calls `/health_care_applications/enrollment_status` with name/SSN/DOB before showing the form. Checks the VES (Veteran Enrollment System) record.

**Key files:**
- `containers/IntroductionPage.jsx` — LOA check
- `containers/IdentityPage.jsx` — enrollment status API call
- `components/IntroductionPage/EnrollmentStatus/` — outcome display components

| Outcome state | Meaning | What veteran sees |
|---|---|---|
| `enrolled` | Already enrolled | "You're already enrolled" — can still reapply |
| `inelig_not_enough_time` | < 24 months continuous service | Ineligible — blocked |
| `inelig_character_of_discharge` | Bad discharge | Ineligible — blocked |
| `inelig_guard_reserve` | Guard/Reserve, no federal activation | Ineligible — blocked |
| `inelig_champva` | Already on CHAMPVA | Ineligible — blocked |
| `inelig_not_verified` | Service documentation missing | Ineligible — blocked |
| `pending_unverified` | Service verification in progress | Pending — wait state |
| `pending_purpleheart` | Purple Heart proof needed | Pending — wait state |
| `canceled_declined` | Previously declined | Can reapply |
| `closed` | Enrollment closed | Can reapply |
| `none_of_the_above` | No VES record found | Proceed to full form |

---

### VR&E — Form 28-1900 (Chapter 31 Eligibility)
**Path:** `src/applications/vre/ch31-eligibility-entitlement`

Calls `fetchCh31Eligibility()` which checks service-connected disability rating, discharge status, eligibility termination date (ETD), and IRND date against the API.

**Key files:**
- `containers/MyEligibilityAndBenefits.jsx` — outcome display
- `containers/ProtectedEligibilityRoute.jsx` — routing gate

| Outcome | What veteran sees |
|---|---|
| Meets basic criteria | Success alert — can apply for Chapter 31 |
| Doesn't meet criteria | Warning alert — may still apply if ETD passed or 10% SC rating exists |
| Loading | Loading indicator while fetching |
| API error | Error alert with retry |

---

## Medium complexity — verification gate before form access

### Dependents — Form 21-686c/674
**Path:** `src/applications/dependents/686c-674`

Checks LOA3 first, then calls `fetchDependents()` to verify VA file number and load dependents on record.

**Key files:**
- `containers/IntroductionPage.jsx`
- `dependents-verification/components/Gateway.jsx`

| Outcome | What veteran sees |
|---|---|
| LOA1 (not verified) | VerifyAlert — must verify identity first |
| LOA3, dependents found | "Continue" — allowed to proceed |
| LOA3, no dependents on file | Info alert — "We don't have dependents info on file for you" |
| Loading | "Loading dependents..." indicator |
| API error | Error alert with retry |

---

### Education STEM — Form 22-10203
**Path:** `src/applications/edu-benefits/10203`

No API call — uses in-form question responses to gate eligibility. Checks benefit type before allowing the veteran to continue.

**Key file:** `containers/InitialConfirmEligibilityView.jsx`

| Outcome | What veteran sees |
|---|---|
| Post-9/11 GI Bill or Fry Scholarship | Eligible — continue |
| Neither | Warning: "You must be a Post-9/11 GI Bill or Fry Scholarship beneficiary to qualify" — option to exit or continue anyway |

---

## Simple — LOA gate only (no eligibility-specific API)

These forms check identity level but not program-specific eligibility.

| Form | App path | Gate | Not-eligible outcome |
|---|---|---|---|
| 22-1990e (Transfer of Entitlement) | `src/applications/toe` | LOA3 required | VerifyAlert |
| 22-5490 (Survivor Dependent Education) | `src/applications/survivor-dependent-education-benefit/22-5490` | LOA3 required | VerifyAlert |
| 21-A (Attorney/Claims Agent Accreditation) | `src/applications/accreditation/21a` | LOA3 required | VerifyAlert |
| 22-0994 (Education OJT) | `src/applications/edu-benefits/0994` | `EDUCATION_BENEFITS` service in profile | "Missing information" error + phone number (800-827-1000) |

---

## 10-10D and 10-7959C specifically

### CHAMPVA — Form 10-10D
**Path:** `src/applications/ivc-champva/10-10D`

No eligibility gate on the intro page. `App.jsx` checks the `form1010dExtended` feature flag and redirects to the extended version of the form if enabled — this is routing logic, not eligibility determination. Links to an external eligibility page rather than doing the check in-app.

| Check | What happens |
|---|---|
| `form1010dExtended` flag on + no saved form | Redirect to 10-10d-extended |
| Flag off or form in progress | Show standard 10-10D |

### CHAMPVA — Form 10-7959C (Other Health Insurance Certification)
**Path:** `src/applications/ivc-champva/10-7959C`

No upfront eligibility gate — all users proceed to the form. Targets existing CHAMPVA beneficiaries or new applicants reporting other health insurance. Uses prefill if logged in.

---

## Pattern summary

| Pattern | Forms using it |
|---|---|
| API eligibility check with multiple named outcome states | 10-10EZ, 28-1900 |
| API data fetch to verify record exists | 21-686c/674 |
| In-form question used as eligibility gate | 22-10203 |
| LOA3 identity verification only | 22-1990e, 22-5490, 21-A |
| Profile service check | 22-0994 |
| Feature flag routing (not eligibility) | 10-10D |
| No gate | 10-7959C |

---

## Common outcome states across forms

| State type | Examples |
|---|---|
| **Eligible — proceed** | VES record found, LOA3 verified, criteria met |
| **Ineligible — hard block** | HCA `inelig_*` states, STEM benefit type mismatch |
| **Ineligible — soft block** | VR&E warning (may still apply), STEM "continue anyway" option |
| **Pending** | HCA `pending_unverified`, `pending_purpleheart` |
| **Already enrolled/exists** | HCA `enrolled`, Dependents record found |
| **Identity gate** | LOA1 → VerifyAlert across most forms |
| **Loading** | API in flight — all API-driven forms |
| **Error** | API failure — retry option |
