# Prescription Status & Computed Fields: Input → Output Use Cases

## Table of Contents

- [Purpose](#purpose)
- [Architecture](#architecture)
- [Controller-Level Status Constants](#controller-level-status-constants)
- [VistA Use Cases (All Pass-Through)](#vista-use-cases-all-pass-through)
- [Oracle Health Use Cases (All Computed from FHIR R4)](#oracle-health-use-cases-all-computed-from-fhir-r4)
- [Use Cases OH Cannot Produce (VistA-only)](#use-cases-oh-cannot-produce-vista-only)
- [Refill Remaining: OH Computation Detail](#refill-remaining-oh-computation-detail)
- [OH Gate Check Reference](#oh-gate-check-reference)
- [Consolidated Open Questions (Backend)](#consolidated-open-questions)
- [Frontend (vets-website) Status Handling](#frontend-vets-website-status-handling)
- [Consolidated Frontend Open Questions](#consolidated-frontend-open-questions)
- [Findings from Review of Sample Statuses](#findings-from-review-of-sample-statuses)

## Date
Feb 24, 2026

Note the logic described in this document can change at any time, so please refer to the latest code.

## Purpose

This document maps how prescription statuses and computed fields are determined at the vets-api backend for both VistA and Oracle Health (OH) data through the Unified Health Data (UHD) pipeline.

**Key findings:**
- **VistA values are 100% pass-through** from the upstream MHV API — vets-api performs no computation.
- **OH values are derived from FHIR R4 resources** via multi-step business logic in the Oracle Health adapter.
- The `mhv_medications_v2_status_mapping` Flipper flag is OFF — no V2 status consolidation occurs. All `disp_status` values are the original granular statuses.

## Architecture

```
Upstream API (SCDF) → UnifiedHealthData::Client
  → PrescriptionsAdapter.parse()
    ├── VistaPrescriptionAdapter.parse()         [ALL fields: pass-through]
    └── OracleHealthPrescriptionAdapter.parse()  [ALL fields: computed from FHIR]
  → Exclusion rules (PF, PD, inpatient)
  → [V2StatusMapping SKIPPED — flag is OFF]
  → V2::PrescriptionsController (filtering, sorting, metadata)
  → V2::PrescriptionDetailsSerializer → JSON API response
```

Since V2 mapping is skipped, `disp_status` and `refill_status` reach the controller and serializer exactly as the adapters set them.

## Controller-Level Status Constants

| Constant | Values |
|---|---|
| `ACTIVE_STATUSES` | `Active`, `Active: Refill in Process`, `Active: Non-VA`, `Active: On hold`, `Active: Parked`, `Active: Submitted` |
| `IN_PROGRESS_STATUSES` | `Active: Refill in Process`, `Active: Submitted` |
| `UNKNOWN_STATUS` | `Unknown` |

These constants are used in the V2 controller for three purposes:

- **`filter_count`**: A metadata hash returned alongside prescription lists. It counts how many prescriptions fall into each status bucket (e.g., `active: 12`, `expired: 3`). The frontend uses these counts to populate filter sidebar badges. `ACTIVE_STATUSES` defines which statuses count as "active."
- **"Recently Requested" list**: Prescriptions whose `disp_status` is in `IN_PROGRESS_STATUSES` (i.e., a refill has been submitted or is being processed). The frontend displays these prominently so users can see pending refill activity.
- **PD prescription sorting**: "PD" stands for prescriptions sourced from the Patient Demographics system (a pending-medication source). When `mhv_medications_display_pending_meds` is enabled, PD-sourced prescriptions are sorted to the top of the list.

---

## VistA Use Cases (All Pass-Through)

All VistA fields are pass-through — vets-api performs no computation. The upstream MHV API determines every value.

> [!TIP]
> Use the horizontal scrollbar at the bottom of the table to see all columns.

| # | Use Case | Input (`medication[]` from upstream) | Output (`disp_status`) | Output (`refill_status`) | Output (`refill_remaining`) | Output (`is_refillable`) | Output (`is_renewable`) | Output (`is_trackable`) | Notes / Questions |
|---|---|---|---|---|---|---|---|---|---|
| V1 | Active with refills available | `dispStatus: "Active"`, `refillStatus: "active"`, `refillRemaining: 3`, `isRefillable: true`, `isRenewable: false`, `isTrackable: false` | `Active` | `active` | `3` | `true` | `false` | `false` | — |
| V2 | Active, 0 refills, not expired | `dispStatus: "Active"`, `refillStatus: "active"`, `refillRemaining: 0`, `isRefillable: false`, `isRenewable: true`, `isTrackable: false` | `Active` | `active` | `0` | `false` | `true` | `false` | — |
| V3 | Active, shipped (trackable) | `dispStatus: "Active"`, `refillStatus: "active"`, `isTrackable: true` | `Active` | `active` | pass-through | pass-through | pass-through | `true` | — |
| V4 | Active: Non-VA medication | `dispStatus: "Active: Non-VA"`, `refillStatus: "active"`, `refillRemaining: 0`, `isRefillable: false`, `isRenewable: false` | `Active: Non-VA` | `active` | `0` | `false` | `false` | `false` | — |
| V5 | Active: On hold | `dispStatus: "Active: On Hold"`, `refillStatus: "hold"` | `Active: On Hold` | `hold` | pass-through | pass-through | pass-through | pass-through | — |
| V6 | Active: Parked | `dispStatus: "Active: Parked"`, `refillStatus: "activeParked"` | `Active: Parked` | `activeParked` | pass-through | pass-through | pass-through | pass-through | — |
| V7 | Refill submitted | `dispStatus: "Active: Submitted"`, `refillStatus: "submitted"`, `isRefillable: false` | `Active: Submitted` | `submitted` | pass-through | `false` | pass-through | pass-through | — |
| V8 | Refill in process | `dispStatus: "Active: Refill in Process"`, `refillStatus: "refillinprocess"`, `isRefillable: false` | `Active: Refill in Process` | `refillinprocess` | pass-through | `false` | pass-through | pass-through | — |
| V9 | Pending renewal | `dispStatus: "Pending Renewal"` or `"Renew"`, `refillStatus: "renew"` | `Pending Renewal` | `renew` | pass-through | pass-through | pass-through | pass-through | — |
| V10 | Pending new prescription | `dispStatus: "NewOrder"` or `"Pending New Prescription"`, `refillStatus: "newOrder"` | `NewOrder` | `newOrder` | pass-through | pass-through | pass-through | pass-through | VistA sends raw `"NewOrder"` as `dispStatus`. User-facing image shows "Pending New Prescription." Unclear if the frontend handles both strings. |
| V11 | Expired (recently, ≤ 120 days) | `dispStatus: "Expired"`, `refillStatus: "expired"`, `isRefillable: false`, `isRenewable: true` | `Expired` | `expired` | pass-through | `false` | `true` | `false` | — |
| V12 | Discontinued | `dispStatus: "Discontinued"`, `refillStatus: "discontinued"`, `isRefillable: false`, `isRenewable: false` | `Discontinued` | `discontinued` | pass-through | `false` | `false` | `false` | — |
| V13 | Transferred | `dispStatus: "Transferred"`, `refillStatus: "transferred"` | `Transferred` | `transferred` | pass-through | pass-through | pass-through | pass-through | — |
| V14 | Suspended | `dispStatus: "Suspended"` | `Suspended` | pass-through | pass-through | pass-through | pass-through | pass-through | Appears in VCR cassettes but not in user-facing status definitions image. **Q5:** What is the intended display? |
| V15 | Unknown | `dispStatus: "Unknown"`, `refillStatus: "unknown"` | `Unknown` | `unknown` | pass-through | pass-through | pass-through | pass-through | — |

---

## Oracle Health Use Cases (All Computed from FHIR R4)

All OH fields are computed from FHIR R4 `MedicationRequest` + contained resources.

### Active Prescriptions

| # | Use Case | FHIR Input | Output (`disp_status`) | Output (`refill_status`) | Output (`refill_remaining`) | Output (`is_refillable`) | Output (`is_renewable`) | Output (`is_trackable`) | Notes / Questions |
|---|---|---|---|---|---|---|---|---|---|
| OH1 | Active with refills, has dispenses, not expired | `status: "active"`, `numberOfRepeatsAllowed: 3`, 1 completed dispense, `validityPeriod.end` in future, no in-progress dispense, no submitted Task | `Active` | `active` | `3` (3 - max(1-1,0)) | `true` (all 7 gates pass) | `false` (gate 6: refills > 0 AND not expired) | `false` (no tracking ext) | — |
| OH2 | Active with refills, has dispenses, not expired, with tracking | Same as OH1 + `shipping-info` extension on a dispense | `Active` | `active` | `3` | `true` | `false` (gate 6) | `true` (tracking data present) | — |
| OH3 | Active, 0 refills remaining, not past expiration | `status: "active"`, `numberOfRepeatsAllowed: 2`, 3 completed dispenses, `validityPeriod.end` in future | `Active` | `active` (0 refills but not past expiration; Non-VA check fails) | `0` (2 - max(3-1,0) = 0) | `false` (gate 4: refills ≤ 0) | `true` if within 120 days of expiration (gate 6: refills exhausted) | `false` | — |
| OH4 | Active, 0 refills, past expiration, ≤ 120 days ago | `status: "active"`, 0 remaining, `validityPeriod.end` in past ≤ 120 days, not Non-VA | `Expired` | `expired` (0 refills + past expiration + not Non-VA) | `0` | `false` (gate 3: expired) | `true` (all 7 gates pass: active, VA, dispenses, end exists, within 120 days, exhausted/expired, no processing) | `false` | — |
| OH5 | Active, 0 refills, past expiration, > 120 days ago | `status: "active"`, 0 remaining, `validityPeriod.end` > 120 days past | `Discontinued` | `discontinued` (expired > 120 days) | `0` | `false` (gate 3: expired) | `false` (gate 5: outside 120-day window) | `false` | — |
| OH6 | Active, has refills, past expiration | `status: "active"`, `numberOfRepeatsAllowed: 3`, 1 completed dispense, `validityPeriod.end` in past ≤ 120 days | `Active` | `active` (past expiration but refills > 0, so `expired` branch doesn't trigger) | `3` | `false` (gate 3: expired) | `true` (gate 6: past expiration) | `false` | User sees "Active" with 3 refills but cannot refill because expired. The `expired` refill_status branch requires 0 refills AND past expiration AND not Non-VA. **Q15:** Should `disp_status` be `Expired` when past expiration regardless of refill count? |

### Active — Special Categories

| # | Use Case | FHIR Input | → `disp_status` | → `refill_status` | → `refill_remaining` | → `is_refillable` | → `is_renewable` | → `is_trackable` | Notes / Questions |
|---|---|---|---|---|---|---|---|---|---|
| OH7 | Non-VA medication | `status: "active"`, `reportedBoolean: true`, `intent: "plan"`, `category[].coding[].code: "patientspecified"` | `Active: Non-VA` | `active` (then source `NV` triggers Non-VA disp_status) | `0` (hard-coded for Non-VA) | `false` (gate 1: Non-VA) | `false` (gate 2: Non-VA) | `false` | — |
| OH8 | Active, original fill not yet dispensed | `status: "active"`, `numberOfRepeatsAllowed: 3`, **0 dispenses** | `Active` | `active` | `3` (3 - max(0-1,0) = 3) | `false` (gate 5: no dispenses) | `false` (gate 3: no dispenses) | `false` | User sees "Active" with 3 refills but cannot refill or renew. User-facing image describes this as "Active — the original fill has not begun to be filled yet." **Q10:** Can a patient request a fill through vets-api before any dispense exists? **Answer** No. [See Q10 below](#q10). |

### Refill In-Flight States

| # | Use Case | FHIR Input | → `disp_status` | → `refill_status` | → `refill_remaining` | → `is_refillable` | → `is_renewable` | → `is_trackable` | Notes / Questions |
|---|---|---|---|---|---|---|---|---|---|
| OH9 | Refill submitted (Task pending) | `status: "active"`, contained Task with `intent: "order"`, `status: "requested"`, valid `executionPeriod.start`, no dispense after task date | `Active: Submitted` | `submitted` (Task takes priority) | computed normally | `false` (gate 7: submitted) | `false` (gate 7: active processing) | `false` | — |
| OH10 | Refill in process (dispense in-progress) | `status: "active"`, most recent MedicationDispense `status: "in-progress"` | `Active: Refill in Process` | `refillinprocess` | computed from completed only | `false` (gate 6: dispense in-progress) | `false` (gate 7: active processing) | `false` | — |
| OH11 | Refill in process (dispense in preparation) | `status: "active"`, most recent dispense `status: "preparation"` | `Active: Refill in Process` | `refillinprocess` | computed from completed only | `false` (gate 6) | `false` (gate 7) | `false` | — |
| OH12 | Refill in process (dispense on-hold) | `status: "active"`, most recent dispense `status: "on-hold"` | `Active: Refill in Process` | `refillinprocess` | computed from completed only | `false` (gate 6) | `false` (gate 7) | `false` | — |
| OH13 | Task failed (refill error) | `status: "active"`, contained Task with `status: "failed"` | `Active` | `active` (Task check only looks for `requested`) | computed normally | depends on other gates | depends on other gates | `false` | A failed refill Task is silently ignored. The prescription falls back to base status (`Active`). **Q7:** Should the user see an error state when their refill request failed? |

### Provider Hold

| # | Use Case | FHIR Input | → `disp_status` | → `refill_status` | → `refill_remaining` | → `is_refillable` | → `is_renewable` | → `is_trackable` | Notes / Questions |
|---|---|---|---|---|---|---|---|---|---|
| OH14 | Provider placed on hold | `status: "on-hold"` | `Active: On hold` | `providerHold` | computed normally | `false` (gate 2: status ≠ active) | `false` (gate 1: status ≠ active) | `false` | — |

### Completed / Expired / Discontinued

| # | Use Case | FHIR Input | → `disp_status` | → `refill_status` | → `refill_remaining` | → `is_refillable` | → `is_renewable` | → `is_trackable` | Notes / Questions |
|---|---|---|---|---|---|---|---|---|---|
| OH15 | Completed, expired ≤ 120 days ago | `status: "completed"`, `validityPeriod.end` in past ≤ 120 days | `Expired` | `expired` | computed normally | `false` (gate 2: status ≠ active) | `false` (gate 1: status ≠ active) | `false` | `is_renewable` is `false` despite being within the 120-day window because gate 1 requires FHIR `status: "active"`. VistA would show `is_renewable: true` for a recently expired Rx (V11). **Q11:** Does OH use FHIR `completed` for expired Rx? If so, OH expired Rx are never renewable, diverging from VistA. |
| OH16 | Completed, expired > 120 days ago | `status: "completed"`, `validityPeriod.end` > 120 days past | `Discontinued` | `discontinued` | computed normally | `false` (gate 2) | `false` (gate 1) | `false` | — |
| OH17 | Completed, no expiration date | `status: "completed"`, no `validityPeriod.end` | `Discontinued` | `discontinued` (no expiration → discontinued) | computed normally | `false` (gate 2) | `false` (gate 1) | `false` | — |
| OH18 | Cancelled by provider | `status: "cancelled"` | `Discontinued` | `discontinued` | computed normally | `false` (gate 2) | `false` (gate 1) | `false` | — |
| OH19 | Entered in error | `status: "entered-in-error"` | `Discontinued` | `discontinued` | computed normally | `false` (gate 2) | `false` (gate 1) | `false` | — |
| OH20 | Stopped | `status: "stopped"` | `Discontinued` | `discontinued` | computed normally | `false` (gate 2) | `false` (gate 1) | `false` | — |

### Draft / Unknown

| # | Use Case | FHIR Input | → `disp_status` | → `refill_status` | → `refill_remaining` | → `is_refillable` | → `is_renewable` | → `is_trackable` | Notes / Questions |
|---|---|---|---|---|---|---|---|---|---|
| OH21 | Draft (new Rx pending approval) | `status: "draft"` | `Unknown` | `pending` | computed normally | `false` (gate 2) | `false` (gate 1) | `false` | VistA shows "Pending New Prescription" (V10) for this scenario. OH shows "Unknown." User-facing image describes "Unknown" as "a backend error" — misleading for a legitimate pending Rx. **Q2:** Should FHIR `draft` map to `Pending New Prescription`? |
| OH22 | Unknown status | `status: "unknown"` | `Unknown` | `unknown` | computed normally | `false` (gate 2) | `false` (gate 1) | `false` | — |

---

## Use Cases OH Cannot Produce (VistA-only)

| # | User-Facing Status | VistA `disp_status` | Why OH Cannot Produce | Question |
|---|---|---|---|---|
| G1 | Active: Parked | `Active: Parked` | No FHIR status or extension maps to "parked" concept | **Q3:** Does OH have an equivalent? If so, how does it appear in FHIR? |
| G2 | Pending Renewal | `Pending Renewal` / `Renew` | No FHIR mechanism to represent "renewal in progress" — OH renewals in progress show as `Active` with `is_renewable: true` or `false` depending on gates | **Q1:** When an OH renewal is in progress, what FHIR status does the upstream return? |
| G3 | Pending New Prescription | `Pending New Prescription` / `NewOrder` | FHIR `draft` maps to `Unknown`, not `Pending New Prescription` (see OH21) | **Q2:** Should FHIR `draft` map to `Pending New Prescription`? |
| G4 | Transferred | `Transferred` | No FHIR status maps to transferred | **Q16:** Does OH transfer prescriptions between facilities? If so, what FHIR data would result? |
| G5 | Suspended | `Suspended` | Not a FHIR concept | **Q5:** What is the intended user-facing display for VistA `Suspended`? |

---

## Refill Remaining: OH Computation Detail

| # | Scenario | `numberOfRepeatsAllowed` | Completed Dispenses | Formula | → `refill_remaining` | Notes / Questions |
|---|---|---|---|---|---|---|
| R1 | New Rx, no fills yet | 3 | 0 | 3 - max(0-1, 0) = 3 | `3` | R1 and R2 return the same value. Correct only if `numberOfRepeatsAllowed` means "refills after initial fill." **Q8:** Does OH define this as "refills after initial fill" or "total fills including initial"? |
| R2 | After initial fill | 3 | 1 | 3 - max(1-1, 0) = 3 | `3` | See R1 note. |
| R3 | After 1 refill (2 total fills) | 3 | 2 | 3 - max(2-1, 0) = 2 | `2` | — |
| R4 | After 3 refills (4 total fills) | 3 | 4 | 3 - max(4-1, 0) = 0 | `0` | — |
| R5 | Over-dispensed | 3 | 5 | 3 - max(5-1, 0) = -1 → max(-1, 0) | `0` | Floor at 0 prevents negative values. |
| R6 | No repeats allowed | 0 | 1 | 0 - max(1-1, 0) = 0 | `0` | — |
| R7 | Missing field | nil (default 0) | 1 | 0 - max(1-1, 0) = 0 | `0` | `numberOfRepeatsAllowed` defaults to 0 if absent. |
| R8 | Non-VA medication | any | any | hard-coded | `0` | Always 0, regardless of FHIR data. |

---

## OH Gate Check Reference

### `is_refillable` — 7 Gates (all must pass)

| Gate | Check | Fails when... |
|------|-------|-------------|
| 1 | `non_va_med?(resource)` | Not a VA prescription |
| 2 | `resource['status'] == 'active'` | FHIR status ≠ `active` |
| 3 | `prescription_not_expired?(resource)` | `validityPeriod.end` missing OR in the past |
| 4 | `extract_refill_remaining(resource).positive?` | Computed refills ≤ 0 |
| 5 | `medication_dispenses(resource).empty?` | No contained MedicationDispense resources |
| 6 | `most_recent_dispense_in_progress?(resource)` | Most recent dispense is `preparation` / `in-progress` / `on-hold` |
| 7 | `refill_status == 'submitted'` | A submitted refill task exists (prevents duplicate refill) |

### `is_renewable` — 7 Gates (all must pass)

| Gate | Check | Fails when... |
|------|-------|-------------|
| 1 | `resource['status'] == 'active'` | FHIR status ≠ `active` |
| 2 | `non_va_med?(resource)` | Not a VA prescription |
| 3 | `medication_dispenses(resource).empty?` | No dispenses exist |
| 4 | `validity_period_end_exists?(resource)` | `validityPeriod.end` is missing |
| 5 | `within_renewal_window?(resource)` | More than 120 days past expiration |
| 6 | `refills_exhausted_or_expired?(resource)` | Has refills > 0 AND not past expiration (must be one or the other) |
| 7 | `active_processing?(resource)` | Dispense `in-progress`/`preparation`, or `refill-request` extension active |

### `is_trackable` — Presence-based

`true` if any tracking data was extracted from contained MedicationDispense resources:
- Extension-based: `shipping-info` structured extension with `Tracking Number`
- Identifier-based (fallback): `identifier` with `type.text == 'Tracking Number'`

---

## Consolidated Open Questions

| # | Topic | Question | Affected Use Cases |
|---|---|---|---|
| <a name="q1"></a>Q1 | Pending Renewal in OH | When an OH renewal is in progress, what FHIR status does the upstream API return? Should the user see `Pending Renewal` instead of `Active`? | OH3, OH4, G2 |
| <a name="q2"></a>Q2 | Pending New Rx in OH | For new OH prescriptions pending approval, should FHIR `draft` map to `Pending New Prescription` instead of `Unknown`? | OH21, G3 |
| <a name="q3"></a>Q3 | Active: Parked in OH | Does OH have an equivalent concept? If so, how does it appear in FHIR? | G1 |
| <a name="q4"></a>Q4 | FHIR status coverage | Are `on-hold`, `cancelled`, `entered-in-error`, `stopped`, `draft`, `unknown` expected in production? VCR cassettes only show `active` and `completed`. | OH14, OH18–OH22 |
| <a name="q5"></a>Q5 | Suspended | What is the intended user-facing display for VistA `Suspended`? Not in the status definitions image. | V14, G5 |
| <a name="q6"></a>Q6 | NewOrder raw value | VistA sends raw `"NewOrder"` as `dispStatus`. Does the frontend handle this string, or only `"Pending New Prescription"`? | V10 |
| <a name="q7"></a>Q7 | Task failed | When a refill Task fails, should the user see an error state? Currently silently ignored, falls through to `Active`. | OH13 |
| <a name="q8"></a>Q8 | numberOfRepeatsAllowed semantics | Does OH define this as "refills after initial fill" (code assumption) or "total fills including initial"? If the latter, `refill_remaining` is off by 1. | R1–R7, all OH refill_remaining |
| <a name="q9"></a>Q9 | Refillable without expiration | Can OH prescriptions be legitimately refillable with missing `validityPeriod.end`? Gate 3 rejects them. | OH8 |
| <a name="q10"></a>Q10 | Refillable before first dispense | Can a patient request a fill through vets-api before any dispense exists? Gate 5 rejects. <br> **ANSWER**: No. Veterans can only request a refill of a medication on VA.gov and VAHB. The medication has to have at least one fill. | OH8 |
| <a name="q11"></a>Q11 | Renewable requires FHIR `active` | OH FHIR `completed` blocks renewability (gate 1). VistA allows renewal of recently expired Rx (V11). Is this divergence intentional? | OH15 vs V11 |
| <a name="q12"></a>Q12 | Trackability timing | Could OH prescriptions be "trackable" before the shipping extension is attached? VistA computes upstream (may include CMOP knowledge). | OH2 |
| <a name="q13"></a>Q13 | notRefillableDisplayMessage | Not mapped from VistA to UHD model. Serializer returns `nil`. Does the frontend need this for the UHD path? | All non-refillable |
| <a name="q14"></a>Q14 | notRenewableReason | Same gap — not mapped. Impact on frontend? | All non-renewable |
| <a name="q15"></a>Q15 | Active but expired with refills | OH6: `disp_status: Active`, `is_refillable: false` because expired. Should `disp_status` be `Expired` when past expiration regardless of refill count? | OH6 |
| <a name="q16"></a>Q16 | OH transfers | Does OH transfer prescriptions between facilities? If so, what FHIR data would that produce? | G4 |

## Frontend (vets-website) Status Handling

### Architecture Overview

The frontend uses the API response largely as-is. Prescription data flows as:

```
API Response (JSON:API)
  → RTK Query (prescriptionsApi.js) transformResponse → convertPrescription()
  → Components read: dispStatus, refillStatus, isRefillable, isRenewable, isTrackable, refillRemaining, prescriptionSource, etc.
  → getRxStatus() applies one override: Non-VA source → "Active: Non-VA"
  → StatusDropdown / ExtraDetails / ProcessList render display text and actions
```

The frontend does **not** recompute `dispStatus`, `refillStatus`, `refillRemaining`, `isRefillable`, `isRenewable`, or `isTrackable` from raw data. These fields arrive from the API as computed values and are used directly.


### Frontend Status Override Use Cases

These are cases where the frontend modifies or overrides the `dispStatus` value from the API before display.

| # | Use Case | API Input | Frontend Logic | → User Sees | Notes / Questions |
|---|---|---|---|---|---|
| FE1 | Non-VA prescription | `prescriptionSource: 'NV'`, any `dispStatus` | `getRxStatus()` overrides to `"Active: Non-VA"` | Status: "Active: Non-VA" | **Q17:** Redundant if backend already sets `dispStatus: "Active: Non-VA"`. Safety net or intended source of truth? |
| FE2 | Pending new medication | `prescriptionSource: 'PD'`, `dispStatus: 'NewOrder'` | Detected as pending; banner shown | Banner: "This is a new prescription from your provider. Your VA pharmacy is reviewing it now." | No Rx#, no "Last filled" date. **Answers Q6:** Frontend uses raw `'NewOrder'`. |
| FE3 | Pending renewal | `prescriptionSource: 'PD'`, `dispStatus: 'Renew'` | Detected as pending; banner shown | Banner: "This is a renewal you requested. Your VA pharmacy is reviewing it now." | No Rx#, no "Last filled" date. |
| FE4 | PD source, unrecognized dispStatus | `prescriptionSource: 'PD'`, `dispStatus` ≠ `'NewOrder'`/`'Renew'` | Falls through to normal display | Normal status display (no pending banner) | **Q18:** Is this scenario possible? Would display without pending treatment. |
| FE5 | Missing dispStatus | `dispStatus: null/undefined` | `getRxStatus()` returns `"None noted"` | Status: "None noted" | — |

**Source:** `util/helpers/getRxStatus.js`, `util/helpers/prescriptionMedAndRenewalStatus.js`

---

### Frontend Status Display Use Cases (V1 — `StatusDropdown`)

These map each `dispStatus` to what the user sees on the prescription details page. The `StatusDropdown` component renders the status text and an expandable "What does this status mean?" definition.

| # | Use Case | API `dispStatus` | → Displayed Status Text | → Definition (expandable) | Notes / Questions |
|---|---|---|---|---|---|
| FE6 | Active | `'Active'` | "Active" | "This is a current prescription. If you have refills left, you can request a refill now." | — |
| FE7 | Active: Non-VA | `'Active: Non-VA'` | "Active: Non-VA" | Lists Non-VA medication types (supplements, herbal remedies, OTC) | — |
| FE8 | Active: Parked | `'Active: Parked'` | "Active: Parked" | "Your VA provider prescribed this medication... But we won't send any shipments until you request it." | — |
| FE9 | Active: On Hold | `'Active: On Hold'` | "Active: On hold" | "We put a hold on this prescription..." | Casing difference: API sends `"On Hold"` (capital H), display shows `"On hold"` (lowercase h). **Q27** |
| FE10 | Active: Refill in Process | `'Active: Refill in Process'` | "Active: Refill in process" | "We're processing a fill or refill..." | — |
| FE11 | Active: Submitted | `'Active: Submitted'` | "Active: Submitted" | "We got your request to fill or refill..." | — |
| FE12 | Expired | `'Expired'` | "Expired" | "This prescription is too old to refill..." | — |
| FE13 | Discontinued | `'Discontinued'` | "Discontinued" | "You can't refill this prescription..." | — |
| FE14 | Transferred | `'Transferred'` | "Transferred" | "We moved this prescription to our My VA Health portal." | — |
| FE15 | Unrecognized / fallback | `'Suspended'`, `'Pending Renewal'`, or any other value | "Unknown" | "There's a problem with our system. You can't manage this prescription online right now." | **Q20:** False alarm for legitimate statuses like `'Suspended'`. No explicit cases for `'NewOrder'`/`'Renew'` — if `prescriptionSource` ≠ `'PD'`, these fall to "Unknown." |

**Source:** `components/shared/StatusDropdown.jsx`

---

### Frontend Action/CTA Use Cases (V1 — `ExtraDetails`)

These map each `dispStatus` (plus additional fields) to the actionable CTAs and messages the user sees. Renewal links appear only for Oracle Health prescriptions when `mhv_secure_messaging_medications_renewal_request` is enabled.

| # | Use Case | API Input | → CTA / Action Displayed | Notes / Questions |
|---|---|---|---|---|
| FE16 | Non-VA | `prescriptionSource: 'NV'` | "You can't manage this medication in this online tool." | Checked first, before `dispStatus` switch |
| FE17 | Unknown | `dispStatus: 'Unknown'` | Warning icon + "There's a problem with our system..." + pharmacy phone | — |
| FE18 | Refill in Process | `dispStatus: 'Active: Refill in Process'` | Expected fill date + "If you need it sooner, call your VA pharmacy" | Falls through to OH renewal link if eligible (see FE28–FE33) |
| FE19 | Submitted | `dispStatus: 'Active: Submitted'` | "We got your request on [date]. Check back for updates." | Falls through to OH renewal link if eligible |
| FE20 | Parked | `dispStatus: 'Active: Parked'` | "You can request this prescription when you need it." + refill button | — |
| FE21 | Expired | `dispStatus: 'Expired'` | "You can't refill this prescription. Contact your VA provider..." | Falls through to OH renewal link if eligible |
| FE22 | Discontinued | `dispStatus: 'Discontinued'` | "You can't refill this prescription. Contact your VA provider..." | No renewal link |
| FE23 | Transferred | `dispStatus: 'Transferred'` | "To manage this prescription, go to My VA Health portal." + link | — |
| FE24 | On Hold | `dispStatus: 'Active: On Hold'` | "You can't refill this prescription. Contact your VA provider..." + pharmacy phone | — |
| FE25 | Active, 0 refills | `dispStatus: 'Active'`, `refillRemaining: 0` | "You can't refill this prescription. Send a secure message..." | Falls through to OH renewal link if eligible |
| FE26 | Active, has refills | `dispStatus: 'Active'`, `refillRemaining ≥ 1`, `isRefillable: true` | Refill button (list page only) | Subject to 15-day suppression (FE36) |
| FE27 | Default / other | Any unrecognized `dispStatus` | Nothing rendered (`null`) | Silent — no CTA shown |

**Source:** `components/shared/ExtraDetails.jsx`

---

### Frontend Renewal Eligibility Use Cases (OH Only — `SendRxRenewalMessage`)

The frontend computes renewal link eligibility independently of the API's `isRenewable` field. All criteria must be met: Oracle Health prescription + feature flag ON + at least one status condition.

| # | Use Case | API Input | Status Condition Met | → Renewal Link? | Notes / Questions |
|---|---|---|---|---|---|
| FE28 | OH, API says renewable | OH Rx, `isRenewable: true` | `isRenewable === true` | Yes | Relies on API field |
| FE29 | OH, Active with 0 refills | OH Rx, `dispStatus: 'Active'`, `refillRemaining: 0`, `isRenewable: false` | Active + 0 refills (frontend override) | Yes | **Q22:** Frontend overrides `isRenewable: false`. Could enable renewal requests the backend would reject? |
| FE30 | OH, Expired within 120 days | OH Rx, `dispStatus: 'Expired'`, `expirationDate` within 120 days, `isRenewable: false` | Expired within window (frontend override) | Yes | Frontend independently computes 120-day window; could diverge from backend's computation. |
| FE31 | OH, Inactive within 120 days | OH Rx, `dispStatus: 'Inactive'`, within 120 days | Inactive within window | Dead code (V1) | **Q21:** `'Inactive'` is V2-only. Cannot appear when V2 mapping is OFF. |
| FE32 | VistA, any status | VistA Rx, any status | N/A (VistA blocked) | No | Renewal link only for Oracle Health prescriptions. |
| FE33 | OH, feature flag off | OH Rx, flag `mhv_secure_messaging_medications_renewal_request: false` | Flag check fails | No | — |

**Source:** `components/shared/SendRxRenewalMessage.jsx`

---

### Frontend Delay Detection & Refill Suppression Use Cases

These are frontend-specific computations that trigger warnings or suppress actions beyond what the API controls.

| # | Use Case | API Input | Frontend Logic | → User Sees | Notes / Questions |
|---|---|---|---|---|---|
| FE34 | Refill in Process, past fill date | `dispStatus: 'Active: Refill in Process'`, `refillDate` in past | `isRefillTakingLongerThanExpected()` | Warning alert: "Your refill is taking longer than expected" | — |
| FE35 | Submitted > 7 days ago | `dispStatus: 'Active: Submitted'`, `refillSubmitDate` > 7 days ago | `isRefillTakingLongerThanExpected()` | Warning alert: "Your refill is taking longer than expected" | **Q23 (future):** V2 consolidates these to `'In progress'`, breaking detection. Not a current issue. |
| FE36 | Refill submitted < 15 days ago | `isRefillable: true`, `refillSubmitDate` < 15 days ago | `RefillButton.wasRecentlySubmitted()` | Refill button hidden despite `isRefillable: true` | **Q24:** May extend beyond backend's suppression window. |
| FE37 | Refill submitted ≥ 15 days ago | `isRefillable: true`, `refillSubmitDate` ≥ 15 days ago | `wasRecentlySubmitted()` returns `false` | Refill button shown | — |

**Source:** `util/helpers/isRefillTakingLongerThanExpected.js`, `components/shared/RefillButton.jsx`

---

### Frontend Process List Use Cases (Refill Step Guide)

The details page renders a 3-step progress indicator for active refills. The component derives a synthetic "Shipped" state — the API never sends `dispStatus: 'Shipped'`.

| # | Use Case | API Input | → Process List State (3-step guide) | Notes / Questions |
|---|---|---|---|---|
| FE38 | Active + tracking data | `dispStatus: 'Active'`, `trackingList[0].completeDateTime` present | "Shipped" — all 3 steps completed, tracking info shown | **Q28:** Synthetic "Shipped" state. No time limit on stale tracking data (unlike 14-day tracking alert). |
| FE39 | Submitted | `dispStatus: 'Active: Submitted'` | Step 1 completed (received), Steps 2–3 pending | — |
| FE40 | Refill in Process | `dispStatus: 'Active: Refill in Process'` | Step 1 completed, Step 2 active (expected fill date), Step 3 pending | — |
| FE41 | Active, no tracking | `dispStatus: 'Active'`, no tracking data | Steps 1–2 completed, Step 3 pending ("We'll ship your refill") | — |
| FE42 | Any other status | Any non-active `dispStatus` | No process list shown | — |

**Source:** `components/shared/ProcessList.jsx`

---

### Frontend List Card Use Cases (`MedicationsListCard`)

| # | Use Case | API Input | → Status Shown? | → Rx# Shown? | → Refills Shown? | → Tracking Shown? | Notes / Questions |
|---|---|---|---|---|---|---|---|
| FE43 | Normal active | `dispStatus: 'Active'`, `prescriptionSource: 'VA'` | Yes | Yes | Yes (if `isRefillable && refillRemaining ≥ 1`) | If `trackingList` present | — |
| FE44 | Unknown status | `dispStatus: 'Unknown'` | Hidden | Hidden | No | No | **Q25:** Details page shows "Unknown" with error message, but card hides status entirely. Intentional? |
| FE45 | Non-VA | `prescriptionSource: 'NV'` | Yes ("Active: Non-VA") | Hidden | No | No | — |
| FE46 | Pending (PD source) | `prescriptionSource: 'PD'`, `dispStatus: 'NewOrder'`/`'Renew'` | Yes (pending) | Hidden | No | No | — |
| FE47 | Trackable | `dispStatus: 'Active'`, `trackingList` present | Yes | Yes | As applicable | Yes — shipped date from `trackingList[0].completeDateTime` | — |

**Source:** `components/MedicationsList/MedicationsListCard.jsx`

---

### Frontend Filtering Use Cases

Filtering is API-driven — the frontend sends filter parameters in the URL and the backend returns filtered results. No client-side filtering.

| # | Filter Label | API Parameter Sent | Statuses Included | Notes / Questions |
|---|---|---|---|---|
| FE48 | All medications | (none) | Everything | — |
| FE49 | Active | `disp_status=Active,Active: Refill in Process,Active: Non-VA,Active: On Hold,Active: Parked,Active: Submitted` | All 6 active statuses | — |
| FE50 | Recently requested | `disp_status=Active: Refill in Process,Active: Submitted` | In-flight refills only | — |
| FE51 | Renewal needed | `disp_status=Active,Expired` | ALL Active + Expired | **Q26:** Overly broad — returns Active prescriptions with refills remaining, not just those needing renewal. |
| FE52 | Non-active | `disp_status=Discontinued,Expired,Transferred,Unknown` | Inactive statuses | — |

---

### Frontend PDF/TXT Export Use Cases

| # | Use Case | Input | Status Lookup Key | → Exported Status Text | Notes / Questions |
|---|---|---|---|---|---|
| FE53 | Normal prescription | Any standard `refillStatus` | `refillStatus` in `pdfStatusDefinitions` | `dispStatus` string + definition text | Uses `refillStatus` (not `dispStatus`) for definition lookup |
| FE54 | Pending new medication | `prescriptionSource: 'PD'`, `dispStatus: 'NewOrder'` | N/A (handled first) | "Pending new prescription" + pending message | — |
| FE55 | Pending renewal | `prescriptionSource: 'PD'`, `dispStatus: 'Renew'` | N/A (handled first) | "Pending renewal" + pending message | — |
| FE56 | Unrecognized refillStatus | Unknown `refillStatus` value | No match in `pdfStatusDefinitions` | "We can't access information about this prescription right now." | New OH statuses could hit this fallback |

**Source:** `util/helpers/prescriptionMedAndRenewalStatus.js`, `util/constants.js`

### `dispStatusForRefillsLeft` Constant (Unused in Display)

The constant `dispStatusForRefillsLeft` lists `['Active', 'Active: Parked', 'Active: On Hold', 'Active: Submitted', 'Active: Refill in Process']`. Despite being exported, **no component in the frontend currently references it** in display logic. It may be legacy or used in tests only.


## Consolidated Frontend Open Questions

| # | Topic | Question | Affected Areas |
|---|---|---|---|
| Q17 | Non-VA status override | `getRxStatus()` overrides `dispStatus` to `"Active: Non-VA"` when `prescriptionSource === 'NV'`. If the backend already sets `dispStatus: "Active: Non-VA"` for Non-VA prescriptions, this is redundant. Are there cases where `prescriptionSource === 'NV'` but `dispStatus` is something other than `"Active: Non-VA"`? | `getRxStatus()`, all status display |
| Q18 | PD source with unexpected dispStatus | If `prescriptionSource === 'PD'` but `dispStatus` is neither `'NewOrder'` nor `'Renew'`, the prescription falls through to normal display. Is this scenario possible? What should the expected behavior be? | `MedicationsListCard`, `VaPrescription`, `prescriptionMedAndRenewalStatus` |
| Q19 | PD flag coupling | The `PD` prescription detection on the frontend assumes the backend's `mhv_medications_display_pending_meds` flag controls whether PD prescriptions appear in the API response. If that flag changes state, is the frontend affected? | Pending medication display |
| Q20 | Unknown status alarm | `StatusDropdown` shows "There's a problem with our system" for ANY unrecognized `dispStatus`. Legitimate statuses like `'Suspended'` would incorrectly appear as system errors. Should the fallback be less alarming? | `StatusDropdown`, V14/G5 |
| Q21 | `'Inactive'` — dead code under V1 | `SendRxRenewalMessage` checks for `dispStatus === 'Inactive'` in its 120-day expiration logic, but `'Inactive'` is a V2 status. With V2 mapping OFF, this branch is believed to be dead code. Confirm: can `dispStatus === 'Inactive'` ever appear from the API under current (V1) conditions? | `SendRxRenewalMessage` |
| Q22 | Renewal override of `isRenewable` | The frontend shows a renewal link for OH prescriptions even when `isRenewable === false` if `dispStatus === 'Active' && refillRemaining === 0` or if expired within 120 days. Could this allow renewal requests that the backend would reject? | `SendRxRenewalMessage` |
| Q23 | Delay detection vs V2 statuses (future) | `isRefillTakingLongerThanExpected()` hardcodes V1 status strings. Under V2 these would be `'In progress'`, breaking delay detection. Not a current issue (V2 mapping is OFF), but a known gap for V2 readiness. | `isRefillTakingLongerThanExpected`, `DelayedRefillAlert` |
| Q24 | 15-day refill suppression overlap | The frontend hides the refill button for 15 days after submission. The backend gates `isRefillable: false` during processing. Could the frontend suppression extend beyond the backend's — e.g., status returns to Active (backend says refillable) but frontend still suppresses for the remainder of 15 days? | `RefillButton` |
| Q25 | Unknown status on list card | The list card hides status entirely for "Unknown" prescriptions, but the details page shows it with an error message. Is hiding status on the list card intentional? | `MedicationsListCard` |
| Q26 | Broad renewal filter | V1 "Renewal needed" filter sends `disp_status=Active,Expired`, which returns ALL Active prescriptions including those with refills. Should this filter be more targeted (e.g., only Active with 0 refills + Expired)? | `filterOptions`, `MedicationsListFilter` |
| Q27 | Case sensitivity | `StatusDropdown` compares against constant values like `'Active: On Hold'` but renders text as `'Active: On hold'` (lowercase h). The comparisons rely on exact string match. If the API ever sends a different casing (e.g., `'Active: on hold'`), the match would fail and fall through to "Unknown." Is casing guaranteed by the API? | `StatusDropdown`, `ExtraDetails` |
| Q28 | Process list synthetic "Shipped" | The `ProcessList` component creates a synthetic "Shipped" state by combining `dispStatus === 'Active'` with tracking data. This means any Active prescription with tracking data shows as "shipped," even if tracking data is stale. Is there a time limit for how long tracking data should trigger the shipped display? (Note: the tracking alert on the details page uses a 14-day window, but the ProcessList does not.) | `ProcessList` |

---

## Findings from Review of Sample Statuses

Possible issues about what the user sees, evaluated against current backend + frontend logic.

> [!TIP]
> Use the horizontal scrollbar at the bottom of the table to see all columns.

| # | Reported by |Possible Issue | Current Logic | Possible Change | Action |
|---|---|---|---|---|---|
| HP1 | 2/24/2026 - Eric Spahn | IMO `isTrackable` should be true if shipped in the last 15 days regardless of status — a status change doesn't change the fact it was shipped. | Backend: OH `isTrackable` is status-independent (good) but has **no time decay** — stays `true` forever once tracking data exists. Frontend: tracking display is **status-gated** — `ProcessList`, `MedicationsListCard`, and `ExtraDetails` only show tracking when `dispStatus === 'Active'`. A prescription that ships then transitions to `Expired` or `Discontinued` loses all tracking visibility, even if the package is in transit. Related: Q28 (stale tracking). | **(1) Frontend:** Decouple tracking display from `dispStatus`. Show tracking whenever tracking data exists, regardless of status. **AND optionally (2) Backend:** Add a 15-day window to `isTrackable` based on shipped date to prevent indefinitely stale tracking. | TBD |
| HP2 | 2/20/2026 - Eric Spahn | Cancelled parent orders (cancelled upon MMR verification) should not appear in the user experience. ~20 prescriptions in test data have `Order Status: Canceled`. | Backend maps FHIR `cancelled` → `disp_status: Discontinued`. No exclusion filter exists — cancelled orders reach the frontend as `Discontinued`. The categorizer excludes `inpatient` and `pharmacy_charges` but not cancelled orders. The controller does not filter by status. | **Backend:** Filter out FHIR `cancelled` MedicationRequests in `PrescriptionsAdapter.should_exclude_prescription?`, or add a new exclusion rule — particularly for parent orders replaced by a verified child order. Need a reliable way to identify "parent order cancelled upon MMR verification" vs "provider-cancelled prescription the user should see." | TBD |
| HP3 | 2/20/2026 - Eric Spahn | Documented/Non-VA medications (source `e-HxRx`) need to be clearly differentiated in the UX as never refillable nor renewable. Examples: aspirin 81mg, carvedilol, famotidine, gabapentin, metoprolol succinate. | Backend categorizes these as `:documented_non_va` and sets `prescription_source: 'NV'`, `is_refillable: false`, `is_renewable: false`. The raw FHIR `category` array (e.g., `['community', 'patientspecified']`) is available in the response. However, `prescription_source: 'NV'` is shared with clinic-administered meds, so the frontend cannot distinguish them on that field alone. | **Frontend:** Use the `category` array to differentiate documented non-VA (`['community', 'patientspecified']`) from clinic-administered (`['outpatient']`). Display appropriate labels (e.g., "Non-VA medication" vs "Clinic-administered"). | TBD |
| HP4 | 2/20/2026 - Eric Spahn | Clinic-administered medications (e.g., cyanocobalamin injection, fluPHENAZine LAI, pneumococcal vaccine) need to be differentiated as renewable but not refillable. | Backend categorizes these as `:clinic_administered` but sets `prescription_source: 'NV'` (same as documented non-VA) and `is_refillable: false`, `is_renewable: false`. The `category` array is `['outpatient']`. **Note:** The spreadsheet says these should be renewable, but the backend currently sets `is_renewable: false` because `non_va_med?` returns `true` (gate 2 fails). | **(1) Backend:** If clinic-administered meds should be renewable, the renewability gate that blocks all non-VA meds needs an exception for `:clinic_administered`. **AND (2) Frontend:** Use `category` to display the correct label. | TBD |
| HP5 | 2/20/2026 - Eric Spahn | Inactive order statuses should override in-progress dispense statuses. Example: acyclovir 400mg has `Order Status: Completed` but `Disp Status: In progress` because a dispense was in the WQM. When the prescription becomes inactive, it should show as inactive — it will fail CMOP transmissions anyway. | When FHIR status is `completed`, the adapter calls `normalize_completed_status` which only checks the expiration date — it ignores dispense status entirely. So `completed` + in-progress dispense → `Expired` or `Discontinued` (order status wins). **However**, the spreadsheet shows `Disp Status: In progress` for this order, suggesting the upstream API may be returning a computed status that doesn't match this logic. The issue may be upstream (SCDF) not reflecting the order completion in the dispense status. | **Investigate:** Confirm whether `In progress` is coming from the upstream API directly OR being computed by the adapter. **If upstream →** data quality issue to raise with Oracle Health / SCDF team. **OR if adapter →** the `completed` branch should explicitly override any in-progress dispense indication. | TBD |
| HP6 | 2/20/2026 - Eric Spahn | FHIR `completed` orders that haven't reached their legal expiration date show as `Expired` in VA.gov. Examples: atorvastatin 20mg (expired 11/20/26, completed 11/21/25), predniSONE 20mg (expired 11/17/26, completed 12/31/25). | `normalize_completed_status` maps FHIR `completed` → `expired` when expiration date is within 120 days (or in the future). A prescription completed because all fills were used or because it was renewed still has a future expiration date, so it maps to `Expired` — misleading since it didn't expire by calendar date. | **Backend:** Distinguish "completed because expired" from "completed for other reasons" (renewed, all fills used, provider action). Consider mapping FHIR `completed` with a future expiration date to a different status (e.g., `Discontinued`) or a new status. At minimum, check whether expiration date is in the past before labeling `Expired`. | TBD |
| HP7 | 2/20/2026 - Eric Spahn | Orders not yet verified by a pharmacist should show as "Pending" instead of "Active." Example: atorvastatin 20mg routed to MMR but not yet verified. Also, the `priorPrescription` FHIR field (linking renewed Rx to predecessor) is not passed through. | No concept of "pending pharmacist verification" exists in the adapter. FHIR `active` + 0 dispenses → `disp_status: Active`, `is_refillable: false`, `is_renewable: false`. The FHIR `priorPrescription` reference is silently dropped — no field exists in the `Prescription` model. | **(1) Backend:** Map "active but never dispensed and unverified" to a pending status. Requires a FHIR signal for verification state (e.g., Task resource or extension). **AND (2) Backend:** Add `prior_prescription_id` to the model and extract `priorPrescription.reference` from FHIR. **AND (3) Frontend:** Show prior prescription in the detail view of the renewal. | TBD |
| HP8 | 2/20/2026 - Eric Spahn | Prescriptions routed to non-VA retail pharmacies (e.g., CVS) need differentiation — they will never be refillable, only renewable. Examples: acetaminophen 325mg, pioglitazone 15mg. | No field or logic identifies retail pharmacy routing. The `Prescription` model has no `dispensing_pharmacy`, `routing_pharmacy`, or `pharmacy_type` field. These prescriptions appear as regular `Active` VA prescriptions. | **(1) Backend:** Extract retail pharmacy routing information from FHIR (if available in the MedicationRequest or extensions) and expose it in the API response. **AND (2) Frontend:** Display pharmacy routing info and suppress the refill button for retail-pharmacy-routed prescriptions. | TBD |
| HP9 | 2/20/2026 - Eric Spahn | Facility name is missing for some prescriptions (hydrocortisone 1% lotion, valACYclovir 500mg) even though they have Rx numbers. Also asks: "Is this not refillable because it's missing the original fill?" | Facility name is derived from the most recent `MedicationDispense.location.display`. If no dispenses exist (original fill hasn't happened), there's no dispense to extract location from → `facility_name: nil`. Separately, `is_refillable` requires at least one dispense (gate 5), so yes — missing original fill → not refillable. These two issues share the same root cause: no dispenses exist yet. | **(1) Backend:** Consider extracting facility from the MedicationRequest itself (e.g., `requester` organization or a contained Location) as a fallback when no dispenses exist. **AND (2) UX:** Clarify to users that prescriptions without a first fill are not yet refillable. | TBD |
| HP10 | 2/20/2026 - Eric Spahn | nitroglycerin 0.3mg shows `Disp Status: In Progress` but is NOT in the Work Queue Monitor. | The adapter sets `In progress` / `Active: Refill in Process` when the most recent MedicationDispense has status `in-progress`, `preparation`, or `on-hold`. If the upstream FHIR data has such a dispense status but the prescription isn't actually in the WQM, this may be an upstream data accuracy issue — the MedicationDispense status doesn't reflect the real dispensing state. | **Investigate:** Confirm the MedicationDispense status in the raw FHIR data for this prescription. If it shows `in-progress` upstream, this is a data quality issue to raise with the Oracle Health / SCDF team. | TBD |
| HP11 | 2/20/2026 - Eric Spahn | A renewed prescription's prior order (e.g., atorvastatin 20mg OrderID 20849072835) should appear in the detail view of the new order (OrderID 20848828719) as the prior prescription that was renewed. | The FHIR `priorPrescription` reference is not extracted by the adapter. No `prior_prescription_id` field exists in the `Prescription` model. The frontend has no data to link renewal chains. (Same root cause as HP7.) | See HP7 recommendation. | TBD |

