

## Prompt:
Some lab results in the My HealtheVet (MHV) user interface are missing important/requited attributes, or displaying the wrong values in the attributes.  See the attached screen shots.

<img width="608" height="578" alt="urea nitrogen card" src="https://github.com/user-attachments/assets/05dbf923-3222-4814-a6ec-04df35997e4e" />
<img width="596" height="156" alt="Laboratory procedure list" src="https://github.com/user-attachments/assets/5b903fe3-3ed7-4646-a4c2-19ab3297339c" />
<img width="504" height="421" alt="Laboratory procedure detail" src="https://github.com/user-attachments/assets/42f9c9db-b9a0-401f-b4fc-0c0578611332" />
<img width="580" height="107" alt="chem 7 list" src="https://github.com/user-attachments/assets/44121966-e63c-49af-aa92-2f55a8b4ba33" />


Given the VHA FHIR implementation guide at https://www.bing.com/ck/a?!&&p=141b162a8d3b0a6af389e8b2ecc4fd331e7644ba60fc1d19561a0fe8011ed276JmltdHM9MTc3NDQ4MzIwMA&ptn=3&ver=2&hsh=4&fclid=2896cf54-4a21-697f-1adf-d9714ba7680d&psq=vha+fhir+implementation&u=a1aHR0cHM6Ly9kZXBhcnRtZW50LW9mLXZldGVyYW5zLWFmZmFpcnMuZ2l0aHViLmlvL3ZhLWZoaXItY29wLW1hcHNldC1pZy8

AND 

Given that it is possible to obtain VistA data from JSON returned by the following VPR endpoints:
1.	Accessions: https://hdrclucds-di.hdr.vaec.va.gov/repositories.med.va.gov/fpds/accessions?_type=json&clientName=FtP&max=100&requestId=SmokeTest_Lab_XML&nationalId=1014135410V826374&clientRequestInitiationTime=2014-05-30T09%3A30%3A10.5 

2. Panels:  https://hdrclucds-di.hdr.vaec.va.gov/repositories.med.va.gov/fpds/panels?_type=json&clientName=FtP&max=100&requestId=SmokeTest_Lab_XML&nationalId=1014135410V826374&clientRequestInitiationTime=2014-05-30T09%3A30%3A10.5 

3. Labs: https://hdrclucds-di.hdr.vaec.va.gov/repositories.med.va.gov/fpds/labs?_type=json&clientName=FtP&max=100&requestId=SmokeTest_Lab_XML&nationalId=1014135410V826374&clientRequestInitiationTime=2014-05-30T09%3A30%3A10.5 

4. Notes: https://hdrclucds-di.hdr.vaec.va.gov/repositories.med.va.gov/fpds/document?_type=json&clientName=FtP&max=100&requestId=SmokeTest_Lab_XML&nationalId=1014135410V826374&clientRequestInitiationTime=2014-05-30T09%3A30%3A10.5 

Can you:

1. Review the SCDF v2 MHV code in /vets-api/ and /vets-website

2. identify why some values are missing or wrong in the user interface, what values should be presented for each given type of lab (chemistry/hematology, microbiology, etc.) 

3. Tell us how to fix them?



# MHV Lab Results — Missing/Wrong Values Analysis

**Date:** March 26, 2026
**Repository:** `department-of-veterans-affairs/vets-website`
**Primary File:** `src/applications/mhv-medical-records/reducers/labsAndTests.js`

---


## Table of Contents

- [Background](#background)
- [Two Code Paths](#two-code-paths)
- [Issues Identified](#issues-identified)
  - [Issue 1: List shows "CHEM 7" but detail page shows "Laboratory procedure"](#issue-1-list-shows-chem-7-but-detail-page-shows-laboratory-procedure)
  - [Issue 2: "Body site tested" and "Sample tested" show the same value](#issue-2-body-site-tested-and-sample-tested-show-the-same-value)
  - [Issue 3: Result units may be incorrect or inconsistently formatted](#issue-3-result-units-may-be-incorrect-or-inconsistently-formatted)
  - [Issue 4: Reference range format inconsistency](#issue-4-reference-range-format-inconsistency)
  - [Issue 5: "Ordered by" missing on accelerated/unified records in list view](#issue-5-ordered-by-missing-on-acceleratedunified-records-in-list-view)
- [Expected Values by Lab Type](#expected-values-by-lab-type)
- [Recommended Fixes](#recommended-fixes)
  - [Frontend Changes (vets-website)](#frontend-changes-vets-website)
  - [Backend Changes (vets-api / SCDF)](#backend-changes-vets-api--scdf)
- [VPR Endpoint Reference](#vpr-endpoint-reference)
- [Key Code References](#key-code-references)

---

## Background

Some lab results in the My HealtheVet (MHV) user interface are missing important/required attributes or displaying incorrect values. This document identifies the root causes in the SCDF v2 (accelerated/unified) code path and provides recommended fixes.

### Screenshots of Issues

| Screenshot | Description |
|---|---|
| **List View** | Shows "CHEM 7" as the record name with correct date |
| **Detail View Header** | Shows "Laboratory procedure" instead of "CHEM 7" |
| **List View Link** | Shows "Laboratory procedure" as a link — should show the panel name |
| **Observation Detail** | Shows "UREA NITROGEN" with `200.0 mg/dL`, "Body site tested: SERUM" and "Sample tested: SERUM" (duplicated) |

---

## Two Code Paths

There are **two distinct rendering paths** for lab details, controlled by the `isAcceleratingLabsAndTests` feature flag in `LabAndTestDetails.jsx`:

### Path 1: Legacy (FHIR DiagnosticReport)

- Components: `ChemHemDetails`, `MicroDetails`, `PathologyDetails`
- Converter functions: `convertChemHemRecord()`, `convertMicrobiologyRecord()`, `convertPathologyRecord()`
- Data source: FHIR `DiagnosticReport` bundles from `/medical_records/labs_and_tests`

### Path 2: SCDF v2 / Accelerated / Unified (Current)

- Component: `UnifiedLabsAndTests`
- Converter function: `convertUnifiedLabsAndTestRecord()`
- Data source: Pre-flattened JSON from `/my_health/v2/medical_records/labs_and_tests`

The screenshots show the **SCDF v2 / Unified path** based on the "Laboratory procedure" display name and the flat observation structure.

---

## Issues Identified

### Issue 1: List shows "CHEM 7" but detail page shows "Laboratory procedure"

**What's happening:** The list card displays "CHEM 7" correctly, but the detail page header/link shows the generic "Laboratory procedure" instead.

**Root cause:** In `convertUnifiedLabsAndTestRecord()`, the `name` field is set directly from the backend's `display` attribute:

```javascript
// reducers/labsAndTests.js, line ~455
name: record.attributes.display,
```

The SCDF v2 backend is returning `"Laboratory procedure"` as the `display` value — a generic LOINC `code.text` fallback — instead of the actual ordered test/panel name (e.g., "CHEM 7").

In the VistA/VPR data model, the panel name ("CHEM 7") lives in the **Panels** endpoint under `orderedTests`, not always in the `labs` endpoint. The SCDF v2 API isn't propagating the panel/accession-level order name into the `display` attribute.

**Impact:** Users see a meaningless "Laboratory procedure" label instead of the clinically meaningful test name they expect.

---

### Issue 2: "Body site tested" and "Sample tested" show the same value

**What's happening:** Both "Body site tested" and "Sample tested" display "SERUM" — the same value repeated.

**Root cause:** In the VistA/VPR data model:

| Field | VistA/VPR Source | FHIR Source | Meaning |
|---|---|---|---|
| **Sample tested** | `specimen.type` | `Specimen.type.text` | Type of specimen (e.g., "SERUM", "BLOOD", "URINE") |
| **Body site** | `specimen.collection.bodySite` | `Specimen.collection.bodySite` | Anatomical collection location (e.g., "LEFT ARM", "Central Vein") |

The SCDF v2 API is populating **both** `bodySite` and `sampleTested` with the specimen type value when a distinct anatomical collection site is not available.

The `UnifiedLabAndTest.jsx` component renders both fields when `bodySite` is truthy:

```javascript
// UnifiedLabAndTest.jsx, lines ~102-120
{record.bodySite && (
  <LabelValue
    label={LABS_AND_TESTS_DISPLAY_LABELS.BODY_SITE}
    value={record.bodySite}
  />
)}
<LabelValue
  label={
    record.bodySite
      ? LABS_AND_TESTS_DISPLAY_LABELS.SAMPLE_TESTED
      : LABS_AND_TESTS_DISPLAY_LABELS.SITE_OR_SAMPLE_TESTED
  }
  value={record.sampleTested}
/>
```

**Impact:** Users see redundant, confusing information. When body site and sample tested are the same, only "Site or sample tested" should be displayed.

---

### Issue 3: Result units may be incorrect or inconsistently formatted

**What's happening:** The UREA NITROGEN result shows `200.0 mg/dL`. The unit `mg/dL` is actually correct for BUN, but there may be precision formatting concerns (200.0 vs 200).

**Root cause:** In the SCDF v2 path, the result value is a pre-formatted string from the backend:

```javascript
// Mock data example
value: {
  text: '200 mg/dL',
  type: 'Quantity',
},
```

The frontend renders `result.value.text` directly without any transformation:

```javascript
// UnifiedLabAndTestObservations.jsx, lines ~23-27
<UnifiedLabAndTestObservationDetail
  header={OBSERVATION_DISPLAY_LABELS.VALUE}
  value={result.value.text}
  ddActionName="[lab and tests - result]"
/>
```

If the unit is wrong, it originates in the VPR/VistA data or the SCDF backend transformation. The VPR `labs` endpoint returns the unit from VistA file 63 (Lab Results).

**In contrast**, the legacy path constructs the value with units from structured FHIR data:

```javascript
// reducers/labsAndTests.js, lines ~115-120
const { observationValue, observationUnit } = getObservationValueWithUnits(result);
finalObservationValue = `${observationValue} ${observationUnit}`;
```

**Impact:** Any unit errors in the source data pass through unchecked.

---

### Issue 4: Reference range format inconsistency

**What's happening:** The reference range shows `7 - 18` without units, but some records show `Normal Range: 7 - 18 mg/dL` with a prefix and units.

**Root cause:** In the **legacy path**, the converter appends units to the reference range:

```javascript
// reducers/labsAndTests.js, lines ~125-127
standardRange = isArrayAndHasItems(result.referenceRange)
  ? `${result.referenceRange[0]?.text} ${observationUnit}`.trim()
  : null;
```

In the **SCDF v2 path**, the reference range is passed through as-is from `result.referenceRange`. VistA-sourced records may include the full string (e.g., `"Normal Range: 7 - 18 mg/dL"`), while others only have the bare range (e.g., `"7 - 18"`).

**Impact:** Inconsistent presentation; some ranges include units and some don't, making it harder for users to interpret results.

---

### Issue 5: "Ordered by" missing on accelerated/unified records in list view

**What's happening:** The "Ordered by" field doesn't appear on list items for accelerated/unified records.

**Root cause:** In `LabsAndTestsListItem.jsx`, the "Ordered by" field is conditionally rendered based on `record.type`:

```javascript
// LabsAndTestsListItem.jsx, lines ~40-49
{(record.type === labTypes.CHEM_HEM ||
  record.type === labTypes.MICROBIOLOGY ||
  record.type === labTypes.RADIOLOGY ||
  record.type === labTypes.PATHOLOGY) && (
  <div data-dd-privacy="mask" data-dd-action-name>
    {`Ordered by ${record.orderedBy}`}
  </div>
)}
```

However, in the unified/accelerated path, `record.type` is set to the raw `testCode` value (e.g., `"CH"`, `"MI"`, `"SP"`):

```javascript
// reducers/labsAndTests.js, convertUnifiedLabsAndTestRecord()
type: record.attributes.testCode,
```

The `labTypes` enum uses values like `"chemistry_hematology"`, `"microbiology"`, etc. — **not** the raw test codes. So the conditional check fails and "Ordered by" is never displayed.

**Impact:** Users can't see who ordered the test in the list view for all accelerated records.

---

## Expected Values by Lab Type

### Chemistry/Hematology (CH)

| Field | VPR/VistA Source | FHIR Source | Status |
|---|---|---|---|
| **Panel/Order Name** | `panels` → `orderedTests` | `basedOn` → `ServiceRequest.code.text` | ⚠️ Shows "Laboratory procedure" fallback |
| **Date/Time Collected** | `specimen.collectedDateTime` | `effectiveDateTime` | ✅ Correct |
| **Type of Test** | Category code `CH` | `category[].coding[].code` | ✅ Shows "Chemistry and hematology" |
| **Site or Sample Tested** | `specimen.type.text` | `Specimen.type.text` | ⚠️ Conflated with body site |
| **Body Site** | `specimen.collection.bodySite` | `Specimen.collection.bodySite` | ⚠️ Shows same value as sample tested |
| **Ordered By** | `requester` Practitioner | `basedOn` → `ServiceRequest.requester` | ⚠️ Missing in list view (accelerated) |
| **Location** | `performer` Organization | `performer` → `Organization.name` | ✅ Correct |
| **Per-observation Result** | `value` + `unit` | `valueQuantity.value` + `valueQuantity.unit` | ✅ Correct (but pre-formatted) |
| **Per-observation Reference Range** | `referenceRange` | `referenceRange[].text` | ⚠️ Inconsistent formatting |
| **Per-observation Status** | `status` | `status` | ✅ Correct |
| **Per-observation Lab Comments** | Lab comments | `note[].text` | ✅ Correct |

### Microbiology (MI)

| Field | Expected Source | Status |
|---|---|---|
| **Name** | Ordered test name | ⚠️ May show generic fallback |
| **Date Collected** | `specimen.collection.collectedDateTime` | ✅ Correct |
| **Collection Sample** | `specimen.type.text` | ✅ Correct |
| **Ordered By** | `performer` (Practitioner) | ⚠️ Missing in list view (accelerated) |
| **Location** | `performer` (Organization) | ✅ Correct |
| **Date Completed** | `effectiveDateTime` | ✅ Correct |
| **Results** | Base64-decoded `presentedForm` / `encodedData` | ✅ Correct |

### Pathology (SP)

| Field | Expected Source | Status |
|---|---|---|
| **Name** | Pathology type from LOINC code | ✅ Correct |
| **Date Collected** | `specimen.collection.collectedDateTime` | ✅ Correct |
| **Site or Sample Tested** | `specimen.type.text` | ⚠️ Same body site issue |
| **Location** | `performer` (Organization) | ✅ Correct |
| **Date Completed** | `effectiveDateTime` | ✅ Correct |
| **Results** | Base64-decoded `presentedForm` / `encodedData` | ✅ Correct |

---

## Recommended Fixes

### Frontend Changes (vets-website)

#### Fix 1: Improve display name fallback in `convertUnifiedLabsAndTestRecord()`

**File:** `src/applications/mhv-medical-records/reducers/labsAndTests.js`

```javascript
// BEFORE (line ~455):
name: record.attributes.display,

// AFTER:
name:
  record.attributes.display &&
  record.attributes.display !== 'Laboratory procedure'
    ? record.attributes.display
    : (record.attributes.orderedTests ||
       record.attributes.testCodeDisplay ||
       record.attributes.display ||
       'Laboratory procedure'),
```

#### Fix 2: Don't show "Body site tested" when it matches "Sample tested"

**File:** `src/applications/mhv-medical-records/components/LabsAndTests/UnifiedLabAndTest.jsx`

```javascript
// BEFORE (lines ~102-106):
{record.bodySite && (
  <LabelValue
    label={LABS_AND_TESTS_DISPLAY_LABELS.BODY_SITE}
    value={record.bodySite}
  />
)}

// AFTER:
{record.bodySite && record.bodySite !== record.sampleTested && (
  <LabelValue
    label={LABS_AND_TESTS_DISPLAY_LABELS.BODY_SITE}
    value={record.bodySite}
  />
)}
```

Also update the label logic below it:

```javascript
// BEFORE:
label={
  record.bodySite
    ? LABS_AND_TESTS_DISPLAY_LABELS.SAMPLE_TESTED
    : LABS_AND_TESTS_DISPLAY_LABELS.SITE_OR_SAMPLE_TESTED
}

// AFTER:
label={
  record.bodySite && record.bodySite !== record.sampleTested
    ? LABS_AND_TESTS_DISPLAY_LABELS.SAMPLE_TESTED
    : LABS_AND_TESTS_DISPLAY_LABELS.SITE_OR_SAMPLE_TESTED
}
```

#### Fix 3: Apply same body site dedup logic at observation level

**File:** `src/applications/mhv-medical-records/components/LabsAndTests/UnifiedLabAndTestObservations.jsx`

Apply the same `record.bodySite !== record.sampleTested` guard at the per-observation level (around lines 43-48).

#### Fix 4: Show "Ordered by" for unified records in list view

**File:** `src/applications/mhv-medical-records/components/RecordList/LabsAndTestsListItem.jsx`

```javascript
// BEFORE (lines ~40-49):
{(record.type === labTypes.CHEM_HEM ||
  record.type === labTypes.MICROBIOLOGY ||
  record.type === labTypes.RADIOLOGY ||
  record.type === labTypes.PATHOLOGY) && (
  <div data-dd-privacy="mask" data-dd-action-name>
    {`Ordered by ${record.orderedBy}`}
  </div>
)}

// AFTER — show "Ordered by" whenever the value exists:
{record.orderedBy && record.orderedBy !== EMPTY_FIELD && (
  <div data-dd-privacy="mask" data-dd-action-name>
    {`Ordered by ${record.orderedBy}`}
  </div>
)}
```

This approach is future-proof and works for both legacy and unified record types.

---

### Backend Changes (vets-api / SCDF)

#### Fix 5: Populate `display` from ordered test/panel name

The SCDF v2 API serializer should populate the `display` attribute from the VPR `orderedTests` field or the accession's panel name, rather than falling back to the generic LOINC `code.text` value of `"Laboratory procedure"`.

**VPR source:** `panels` endpoint → `orderedTests` field contains the clinically meaningful name (e.g., "CHEM 7").

#### Fix 6: Only populate `bodySite` for distinct anatomical locations

The SCDF v2 serializer should only set `bodySite` when a distinct anatomical collection site is available from `specimen.collection.bodySite` in FHIR (or `topography` in VPR). If the body site value equals the specimen type value, set `bodySite` to `null` or omit it.

#### Fix 7: Ensure reference ranges include units consistently

The SCDF v2 backend should normalize reference range strings to always include units when available, following the pattern: `"7 - 18 mg/dL"`.

---

## VPR Endpoint Reference

The following VPR endpoints provide the underlying VistA data:

| Endpoint | Purpose | Key Fields |
|---|---|---|
| **Accessions** | Accession-level lab order info | Order name, specimen, collection info |
| **Panels** | Panel/battery groupings | `orderedTests` (e.g., "CHEM 7"), component tests |
| **Labs** | Individual lab results | Result values, units, reference ranges, status |
| **Notes/Documents** | Clinical documents (micro/path reports) | Base64-encoded report text |

### Example VPR URLs

```
# Accessions
https://hdrclucds-di.hdr.vaec.va.gov/repositories.med.va.gov/fpds/accessions?_type=json&clientName=FtP&max=100&requestId=SmokeTest_Lab_XML&nationalId={ICN}&clientRequestInitiationTime=2014-05-30T09:30:10.5

# Panels
https://hdrclucds-di.hdr.vaec.va.gov/repositories.med.va.gov/fpds/panels?_type=json&clientName=FtP&max=100&requestId=SmokeTest_Lab_XML&nationalId={ICN}&clientRequestInitiationTime=2014-05-30T09:30:10.5

# Labs
https://hdrclucds-di.hdr.vaec.va.gov/repositories.med.va.gov/fpds/labs?_type=json&clientName=FtP&max=100&requestId=SmokeTest_Lab_XML&nationalId={ICN}&clientRequestInitiationTime=2014-05-30T09:30:10.5

# Notes/Documents
https://hdrclucds-di.hdr.vaec.va.gov/repositories.med.va.gov/fpds/document?_type=json&clientName=FtP&max=100&requestId=SmokeTest_Lab_XML&nationalId={ICN}&clientRequestInitiationTime=2014-05-30T09:30:10.5
```

---

## Key Code References

| File | Purpose |
|---|---|
| `src/applications/mhv-medical-records/reducers/labsAndTests.js` | All converter functions (legacy + unified) |
| `src/applications/mhv-medical-records/containers/LabAndTestDetails.jsx` | Feature flag routing between legacy and unified paths |
| `src/applications/mhv-medical-records/components/LabsAndTests/UnifiedLabAndTest.jsx` | Unified detail view rendering |
| `src/applications/mhv-medical-records/components/LabsAndTests/UnifiedLabAndTestObservations.jsx` | Per-observation rendering in unified path |
| `src/applications/mhv-medical-records/components/RecordList/LabsAndTestsListItem.jsx` | List item rendering for all lab types |
| `src/platform/mhv/api/mocks/medical-records/labs-and-tests/accelerated.js` | Mock data for accelerated/unified path |
| `src/applications/mhv-medical-records/util/constants.js` | `labTypes` enum and `EMPTY_FIELD` constant |

### VHA FHIR Implementation Guide

- [VHA FHIR COP Mapset IG](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/)

---

## Summary of Changes Needed

| # | Type | Severity | Description |
|---|---|---|---|
| 1 | Frontend + Backend | **High** | Display name fallback — "Laboratory procedure" instead of panel name |
| 2 | Frontend + Backend | **Medium** | Body site / sample tested duplication |
| 3 | Backend | **Low** | Result units — verify source data accuracy |
| 4 | Backend | **Low** | Reference range formatting inconsistency |
| 5 | Frontend | **High** | "Ordered by" not showing in list view for unified records |


