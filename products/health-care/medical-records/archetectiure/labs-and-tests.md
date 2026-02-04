# Labs and tests architecture

## Key terms

- v1 == current version of the API, this is what is live in production
- v2 == next version of the API, for this case this is SCDF

## Diagram

![diagram](./assets/labs-and-tests.drawio.png)

## Data Sources per lab and test type

### PHR

| Data Source | Lab/Test Types          |
| ----------- | ----------------------- |
| CDS         | Chemistry, Hematology   |
| HDR/VIA     | Microbiology, Pathology |
| VIA         | Imaging                 |

### SCDF

| Data Source | Lab/Test Types                                                  | Patient Type |
| ----------- | --------------------------------------------------------------- | ------------ |
| CDW         | Chemistry, Hematology                                           | Vista        |
| HDR/VIA     | Chem/Hem, Microbiology, Surgical, Cytology, Electron Microscope | Vista        |
| CVIX        | Imaging                                                         | Vista        |
| CVIX        | Imaging                                                         | OH           |
| OH          | All Types for OH patients                                       | OH           |

## Filter Rules

### vets-api

- **Status**: Only show `DiagnosticReport` and `Observation` that have a status of one `["final", "amended", "corrected", "appended"]`
- Must have **code** (`code.coding[]`) AND either **encoded data or valid observations**
  - `encodedData` is the `presentedForm` field on `DiagnosticReport`
  - Valid observations are `Observation` resources that have a value in one of these fields: (anything not listed below is considered invalid)
    - `valueQuantity`
    - `valueCodeableConcept`
    - `valueString`
    - `valueDateTime`

### Existing PHR Rules

| Filter Rule                               |     Chemistry/Hematology (CDS)      |      Microbiology (VIA)      |      Pathology (VIA)      |
| ----------------------------------------- | :---------------------------------: | :--------------------------: | :-----------------------: |
| **Lab Type Restriction**                  |              "CH" only              |          "MI" only           |   "CY", "SP", "EM" only   |
| **Facility Access Control**               |             ✅ Required              |          ✅ Required          |        ✅ Required         |
| **36-Hour Hold Period**                   |   ✅ Based on Report Complete Date   | ✅ Based on Final Report Date | ✅ Based on Completed Date |
| **COVID Test Exemption from Hold**        |       ✅ NLT codes bypass hold       |              ❌               |             ❌             |
| **Previously Loaded Exemption from Hold** |    ✅ History check bypasses hold    |              ❌               |             ❌             |
| **Status Filter**                         | "X" (Reject) excluded at test level |             None             |    Must be "COMPLETED"    |
| **Missing/Invalid Date Handling**         |        Continues processing         |          ❌ Skipped           |         ❌ Skipped         |
| **Required: stationNumber**               |            ✅ (lab level)            |              ✅               |             ✅             |
| **Required: status**                      |         ✅ (test level only)         |              ❌               |             ❌             |
| **Orphan Prevention**                     |   ✅ Hierarchical (Lab→Panel→Test)   |       ❌ Flat structure       |     ❌ Flat structure      |
| **Data Source**                           |              CDS (HDR)              |         VIA (VistA)          |        VIA (VistA)        |

### Existing SCDF Rules

# Labs & Tests Filtering Logic Summary

This document summarizes the filtering logic applied to lab and test data across different data sources in the MHV SCDF pipeline.

## Overview

Labs and tests are filtered at multiple levels in the data pipeline:

1. **Supplier/Source Level** - Filters applied when fetching data from backend systems
2. **Normalizer Level** - Filters applied during FHIR transformation

---

## Data Sources

| Source        | API Type | Backend System |
| ------------- | -------- | -------------- |
| HDR VPR       | REST     | VistA          |
| Oracle Health | FHIR R4  | Cerner         |
| CDS           | SOAP     | VistA          |

---

## HDR VPR Labs Filtering

### Supplier-Level: Hold Time Filtering

The HDR VPR lab supplier can delay release of recent lab results using a configurable "hold time".

| Property              | Default         | Purpose                                      |
| --------------------- | --------------- | -------------------------------------------- |
| `holdTime`            | `""` (disabled) | ISO-8601 duration (e.g., `PT36H` = 36 hours) |
| `holdTimeTargetField` | `resulted`      | Field to evaluate for hold time              |

**Logic**: Only include labs where the `resulted` date is BEFORE the hold time threshold.

**Source**: [`HoldTimeUtils.java`](../mhv-functions-catalog/supplier/mhv-hdr-vpr-lab-supplier/src/main/java/gov/va/mhv/hdr/fn/supplier/lab/util/HoldTimeUtils.java)

### Normalizer-Level: Status & Category Filtering

#### Chemistry/Hematology (CH) Labs

| Filter | Criteria               | Effect                    |
| ------ | ---------------------- | ------------------------- |
| Type   | `type = "CH"`          | Only Chemistry/Hematology |
| Status | `status = "completed"` | Only completed labs       |

**Source**: [`LabNormalizerConfiguration.java#L250`](../mhv-functions-catalog/function/mhv-hdr-vpr-lab-normalizer-function/src/main/java/gov/va/mhv/hdr/fn/function/lab/LabNormalizerConfiguration.java#L250)

#### Non-CH Labs (Microbiology, Pathology, Cytology, Electron Microscopy)

| Filter   | Criteria                                   | Effect                           |
| -------- | ------------------------------------------ | -------------------------------- |
| Status   | `statusName = "completed"`                 | Only completed labs              |
| Category | `categoryCode != "urn:va:lab-category:CH"` | Excludes CH (handled separately) |

**Source**: [`LabNormalizerConfiguration.java#L289`](../mhv-functions-catalog/function/mhv-hdr-vpr-lab-normalizer-function/src/main/java/gov/va/mhv/hdr/fn/function/lab/LabNormalizerConfiguration.java#L289)

---

## Oracle Health Labs Filtering

### Source-Level: FHIR Query Filtering

| Parameter               | Value                          | Effect                        |
| ----------------------- | ------------------------------ | ----------------------------- |
| `searchParams.category` | `laboratory`                   | Only laboratory observations  |
| `fhirFilterBy`          | `Observation.basedOn.exists()` | Only observations with orders |

**Source**: [`application.yml`](../mhv-stream-applications/source/mhv-oh-lab-source/src/main/resources/application.yml)

### Normalizer-Level: Status Filtering

#### DiagnosticReport Status Filter

| Included Statuses | Excluded Statuses  |
| ----------------- | ------------------ |
| `final`           | `registered`       |
| `amended`         | `cancelled`        |
| `corrected`       | `entered-in-error` |
| `appended`        | `unknown`          |
| `preliminary`     |                    |
| `partial`         |                    |

#### Observation Status Filter

| Included Statuses | Excluded Statuses  |
| ----------------- | ------------------ |
| `final`           | `registered`       |
| `amended`         | `cancelled`        |
| `corrected`       | `entered-in-error` |
| `preliminary`     | `unknown`          |

**Source**: [`LabNormalizerConfiguration.java`](../mhv-functions-catalog/function/mhv-oh-lab-normalizer-function/src/main/java/gov/va/mhv/oh/fn/function/lab/LabNormalizerConfiguration.java)

---

## Complete Filtering Summary Table

| Source  | Level      | Filter Type | Criteria                                                  | Effect                              |
| ------- | ---------- | ----------- | --------------------------------------------------------- | ----------------------------------- |
| HDR VPR | Supplier   | Hold Time   | `resulted` date before threshold                          | Delays recent results               |
| HDR VPR | Normalizer | Status      | `status = "completed"`                                    | Excludes incomplete labs            |
| HDR VPR | Normalizer | Category    | CH processed separately from MI/SP/CY/EM                  | Different handling paths            |
| OH      | Source     | FHIR Query  | `category = laboratory`                                   | Only lab observations               |
| OH      | Source     | FHIR Filter | `Observation.basedOn.exists()`                            | Only observations with orders       |
| OH      | Normalizer | DR Status   | final, amended, corrected, appended, preliminary, partial | Excludes cancelled/entered-in-error |
| OH      | Normalizer | Obs Status  | final, amended, corrected, preliminary                    | Excludes registered/cancelled       |

---

## Lab Categories (HDR VPR)

| Code | Category             | Data Type       | Handling                              |
| ---- | -------------------- | --------------- | ------------------------------------- |
| `CH` | Chemistry/Hematology | Discrete values | Processed via `mapAccessionsToFhir()` |
| `MI` | Microbiology         | Narrative text  | Processed via `mapLabsToFhir()`       |
| `SP` | Surgical Pathology   | Narrative text  | Processed via `mapLabsToFhir()`       |
| `CY` | Cytology             | Narrative text  | Processed via `mapLabsToFhir()`       |
| `EM` | Electron Microscopy  | Narrative text  | Processed via `mapLabsToFhir()`       |

---

## Key Takeaways

1. **Incomplete labs are excluded** - Only `completed` (HDR VPR) or `final`/`amended`/`corrected` (OH) labs are included
2. **Cancelled and entered-in-error labs are excluded** - These statuses are filtered out at the normalizer level
3. **Hold time feature** - HDR VPR supports delaying release of very recent results (configurable)
4. **Category-based routing** - Chemistry/Hematology labs are handled differently from Microbiology/Pathology labs in HDR VPR

---

## Action Items: vets-api v2 Alignment with v1

### Gap Analysis

| Feature                           | PHR (v1) Has                                 | SCDF (v2) / vets-api Status      | Action Needed                                                               |
| --------------------------------- | -------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------- |
| **36-Hour Hold Period**           | ✅ Date-field specific per lab type           | ⚠️ Handled at SCDF Supplier level | Verify SCDF hold time is configured to `PT36H` and date field logic matches |
| **COVID Test Exemption**          | ✅ NLT codes bypass hold (Chem/Hem)           | ❌ Not implemented                | Add NLT code detection to bypass hold for COVID tests                       |
| **Previously Loaded Exemption**   | ✅ History check bypasses hold                | ❌ Not implemented                | Add check if lab was previously loaded to bypass hold                       |
| **Facility Access Control**       | ✅ Required                                   | ❓ Unclear                        | Verify facility access is enforced at vets-api or upstream                  |
| **Orphan Prevention**             | ✅ Hierarchical (Lab→Panel→Test) for Chem/Hem | ❓ Unclear                        | Add validation that Observations are linked to DiagnosticReports            |
| **Status "X" (Reject) Exclusion** | ✅ Excluded at test level                     | ⚠️ Relies on SCDF normalizer      | Verify SCDF excludes rejected status                                        |

### Priority

| Priority | Feature                     | Risk if Missing                                       |
| -------- | --------------------------- | ----------------------------------------------------- |
| 🔴 High   | COVID Test Exemption        | COVID results delayed 36 hours when they shouldn't be |
| 🔴 High   | Facility Access Control     | Potential unauthorized data access                    |
| 🟡 Medium | Previously Loaded Exemption | User confusion - labs they've seen before get hidden  |
| 🟡 Medium | Orphan Prevention           | Orphaned observations displayed without context       |

### Recommended vets-api v2 Additions

```ruby
# Pseudocode for vets-api filtering additions

# 1. COVID Test Exemption (bypass hold for NLT codes)
def covid_test_exempt?(observation)
  COVID_NLT_CODES.include?(observation.code&.coding&.first&.code)
end

# 2. Previously Loaded Check (bypass hold if seen before)
def previously_loaded?(resource, patient_icn)
  # Check cache/database for prior retrieval
  LabHistory.exists?(patient_icn: patient_icn, resource_id: resource.id)
end

# 3. Orphan Prevention (ensure observations belong to diagnostic reports)
def valid_observation_hierarchy?(observation, diagnostic_reports)
  diagnostic_reports.any? { |dr| dr.result&.include?(observation.reference) }
end

# 4. Facility Access Control
def patient_has_facility_access?(patient, facility_id)
  patient.facilities.include?(facility_id)
end
```

---

*Last updated: January 29, 2026*
