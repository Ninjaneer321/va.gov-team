# Prescription Status & Computed Fields: Input → Output Use Cases

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
| OH8 | Active, original fill not yet dispensed | `status: "active"`, `numberOfRepeatsAllowed: 3`, **0 dispenses** | `Active` | `active` | `3` (3 - max(0-1,0) = 3) | `false` (gate 5: no dispenses) | `false` (gate 3: no dispenses) | `false` | User sees "Active" with 3 refills but cannot refill or renew. User-facing image describes this as "Active — the original fill has not begun to be filled yet." **Q10:** Can a patient request a fill through vets-api before any dispense exists? |

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



