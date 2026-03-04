# ClinicalNotes Model - TIU DOCUMENT (8925) Mapping Analysis

**Date:** 2026-03-04 20:06:13  
**Analyzed File:** `lib/unified_health_data/models/clinical_notes.rb`  
**Commit:** `d3a74807c58b15ab0a66882e5aa4f214216e0947`  
**Reference Standard:** [VA FHIR StructureDefinition TiuDocument8925](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-TiuDocument8925.html)

---

## Overview

This document analyzes the `UnifiedHealthData::ClinicalNotes` Ruby model against the VA FHIR StructureDefinition for TIU DOCUMENT (8925) to identify conflicts, missing mappings, and areas for improvement.

---

## 🔴 Conflicts and Missing Mappings

### 1. Missing Critical Fields

The TIU DOCUMENT (8925) specification includes several required/important fields not present in `ClinicalNotes`:

| TIU Field | VistA Field Number | Status |
|-----------|-------------------|---------|
| `status` | Reference to TIU STATUS (8925.6) | **MISSING** |
| `patient` | Reference to PATIENT/IHS (9000001) | **MISSING** |
| `author/dictator` | -1202 | **MISSING** (only `written_by` exists) |
| `verified_by` | VERIFIED BY (-1306) | **MISSING** |
| `division` | DIVISION (-1212) | **MISSING** |
| `parent` | PARENT (-.06) | **MISSING** |
| `id_parent` | ID PARENT (-2101) | **MISSING** |
| `subject` | SUBJECT (-1701) | **MISSING** |
| `entry_datetime` | ENTRY DATE/TIME (-1201) | **MISSING** |
| `visit` | VISIT (-.03) | **MISSING** |
| `visit_type` | VISIT TYPE (-.13) | **MISSING** |
| `episode_begin_datetime` | EPISODE BEGIN DATE/TIME (-.07) | **MISSING** |
| `episode_end_datetime` | EPISODE END DATE/TIME (-.08) | **MISSING** |
| `hospital_location` | Reference to HOSPITAL LOCATION (44) | **MISSING** |
| `treating_specialty` | TREATING SPECIALTY (-1402) | **MISSING** |
| `document_type` | Reference to TIU DOCUMENT DEFINITION (8925.1) | **MISSING** |
| `ien` | Internal Entry Number (-.001) | **MISSING** |

---

### 2. Ambiguous/Unclear Mappings

| `ClinicalNotes` Attribute | Expected TIU Field | Issue |
|---------------------------|-------------------|-------|
| `name` | Likely SUBJECT (-1701) | Not clear if this is document title or subject |
| `note_type` | Should map to documentType (ref to 8925.1) | String instead of reference |
| `date` | Multiple date fields exist | Which date? Entry? Signed? Episode? |
| `date_signed` | Likely maps to signed date | Not explicitly in TIU 8925 structure, might be derived |
| `written_by` | Could be AUTHOR/DICTATOR (-1202) | Unclear distinction from signed_by |
| `signed_by` | Maps to SIGNED BY (-1502) | ✅ Likely correct |
| `note` | Maps to REPORT TEXT (-2) | ✅ Likely correct |

---

### 3. Fields Not in TIU Specification

| `ClinicalNotes` Attribute | Status |
|---------------------------|--------|
| `loinc_codes` | Not in TIU DOCUMENT (8925) - may be enrichment from external mapping |
| `sort_date` | Internal use only - derived field (OK) |
| `source` | Not in TIU DOCUMENT (8925) - appears to be vets-api addition |

---

### 4. Structural Issues

- **`loinc_codes`**: Typed as `Array` but should potentially be `Array[String]` or structured object with coding system
- **Date fields**: Multiple date attributes (`date`, `date_signed`, `admission_date`, `discharge_date`) but TIU has more specific datetime fields that aren't captured
- **Missing references**: TIU uses references to other VistA files (PATIENT, HOSPITAL LOCATION, etc.) - `ClinicalNotes` uses plain strings instead
- **No status tracking**: TIU documents have workflow status (draft, completed, amended, etc.) not captured

---

## ✅ Recommendations

### High Priority

1. **Add patient identifier**
   ```ruby
   attribute :patient_icn, String
   # or
   attribute :patient_id, String
