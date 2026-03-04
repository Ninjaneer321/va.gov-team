# ClinicalNotes Model FHIR Compliance Analysis

**Date:** 2026-03-04  
**File Analyzed:** `lib/unified_health_data/models/clinical_notes.rb`  
**FHIR Profile:** [VA DocumentReference](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-DocumentReferenceDocumentReference.html)  
**VistA Source:** TIU DOCUMENT (File #8925)

## Executive Summary

This document analyzes the `UnifiedHealthData::ClinicalNotes` Ruby model against the VA FHIR Map Set Implementation Guide's DocumentReference profile. The analysis identifies conflicts, missing required fields, and structural differences that prevent full FHIR compliance.

---

## Current Model Structure

```ruby
module UnifiedHealthData
  class ClinicalNotes
    include Vets::Model

    attribute :id, String
    attribute :name, String
    attribute :note_type, String
    attribute :loinc_codes, Array
    attribute :date, String
    attribute :sort_date, String # Normalized date for sorting (internal use only)
    attribute :date_signed, String
    attribute :written_by, String
    attribute :signed_by, String
    attribute :admission_date, String
    attribute :discharge_date, String
    attribute :location, String
    attribute :note, String
    attribute :source, String

    default_sort_by sort_date: :desc
  end
end
```

---

## Conflicts and Missing Mappings

### 1. Missing Required FHIR Elements

The following fields are **required or must-support** in the FHIR DocumentReference resource but are missing from the model:

| Missing Field | FHIR Requirement | Description |
|--------------|------------------|-------------|
| `status` | **Required** (1..1) | Document status: `current` \| `superseded` \| `entered-in-error` |
| `type` | **Required** (1..1) | CodeableConcept with LOINC or VA-specific value set binding |
| `subject` | **Required** (1..1) | Reference to Patient resource |
| `content` | **Required** (1..*) | Array of attachments with contentType, url, or data |
| `context` | Recommended | Clinical context including encounter, period, facility |

**Impact:** Without these fields, the model cannot be serialized to a valid FHIR DocumentReference resource.

---

### 2. Field Naming and Structure Conflicts

#### 2.1 Ambiguous Date Field

**Current:**
```ruby
attribute :date, String
```

**FHIR has multiple date fields:**
- `DocumentReference.date` - When the DocumentReference was created
- `DocumentReference.context.period.start` / `.end` - Clinical time period
- `DocumentReference.authenticator` timestamp - When signed

**Conflict:** The current `date` field is ambiguous and doesn't clearly map to any specific FHIR field.

---

#### 2.2 Note Type vs. FHIR Type

**Current:**
```ruby
attribute :note_type, String # Free-text string
```

**FHIR Requirement:**
```json
{
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "11488-4",
        "display": "Consult note"
      }
    ],
    "text": "Progress Note"
  }
}
```

**Conflict:** FHIR expects a structured CodeableConcept with coded values (system, code, display), not a simple string.

---

#### 2.3 LOINC Codes Array Structure

**Current:**
```ruby
attribute :loinc_codes, Array # Unstructured array
```

**FHIR Requirement:**
```ruby
# Should be array of hashes:
[
  { system: "http://loinc.org", code: "11488-4", display: "Consult note" },
  { system: "http://loinc.org", code: "34117-2", display: "History and physical note" }
]
```

**Conflict:** The array lacks structure for FHIR Coding objects (system, code, display triplets).

---

#### 2.4 Note Content vs. FHIR Content

**Current:**
```ruby
attribute :note, String # Plain text
```

**FHIR Requirement:**
```json
{
  "content": [
    {
      "attachment": {
        "contentType": "text/plain",
        "data": "base64encoded...",
        "title": "Progress Note"
      },
      "format": {
        "system": "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
        "code": "urn:ihe:iti:xds:2017:mimeTypeSufficient"
      }
    }
  ]
}
```

**Conflict:** FHIR requires a structured array of content objects with attachment metadata, not a simple text field.

---

#### 2.5 Author and Authenticator References

**Current:**
```ruby
attribute :written_by, String # Display name
attribute :signed_by, String   # Display name
```

**FHIR Requirement:**
```json
{
  "author": [
    {
      "reference": "Practitioner/12345",
      "display": "Dr. Jane Smith"
    }
  ],
  "authenticator": {
    "reference": "Practitioner/67890",
    "display": "Dr. John Doe"
  }
}
```

**Conflict:** FHIR requires structured references to Practitioner resources, not just display names.

---

#### 2.6 Clinical Context Fields

**Current:**
```ruby
attribute :admission_date, String
attribute :discharge_date, String
attribute :location, String # Free text
```

**FHIR Requirement:**
```json
{
  "context": {
    "encounter": [
      { "reference": "Encounter/98765" }
    ],
    "period": {
      "start": "2026-01-15T08:00:00Z",
      "end": "2026-01-20T17:00:00Z"
    },
    "facilityType": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
          "code": "HOSP",
          "display": "Hospital"
        }
      ]
    },
    "practiceSetting": {
      "coding": [...]
    }
  }
}
```

**Conflict:** FHIR expects structured clinical context with encounter references, period object, and coded facility type.

---

### 3. Missing VA-Specific Mappings

Based on the VA FHIR Map Set for TIU DOCUMENT (8925), the following VistA fields should be mapped but are missing:

| VistA Field | FHIR Element | Currently Missing |
|-------------|--------------|-------------------|
| STATUS (#.05) | `DocumentReference.status` | ✓ |
| DOCUMENT CLASS | `DocumentReference.category` | ✓ |
| COSIGNER | `DocumentReference.author[1]` or extension | ✓ |
| AMENDMENT/ADDENDUM | `DocumentReference.relatesTo` | ✓ |
| PARENT DOCUMENT | `DocumentReference.relatesTo.target` | ✓ |
| VISIT LOCATION | `DocumentReference.context.facilityType` | Partial (only display name) |

---

### 4. Type and Format Issues

| Current Type | FHIR Expectation | Issue |
|--------------|------------------|-------|
| `String` for dates | ISO 8601 DateTime (e.g., `2026-03-04T14:30:00Z`) | No validation or formatting |
| `Array` for LOINC codes | `Array[Hash]` with system/code/display | Missing structure |
| Internal `sort_date` | Should not be exposed in FHIR serialization | Implementation detail leaking |

---

## Recommended Model Changes

### Proposed Updated Model

```ruby
# frozen_string_literal: true

require 'vets/model'

module UnifiedHealthData
  class ClinicalNotes
    include Vets::Model

    # Core FHIR DocumentReference fields
    attribute :id, String
    attribute :status, String # Required: current | superseded | entered-in-error
    
    # Type - maps to FHIR DocumentReference.type (CodeableConcept)
    attribute :type_code, String           # LOINC code (e.g., "11488-4")
    attribute :type_system, String         # Usually "http://loinc.org"
    attribute :type_display, String        # Human-readable type name
    attribute :type_text, String           # Original note_type text if different
    attribute :category_codes, Array       # Array of {system, code, display} for categories
    
    # Additional coding
    attribute :loinc_codes, Array          # Array of {system, code, display} hashes
    
    # Subject (patient reference)
    attribute :patient_id, String          # Maps to subject.reference (e.g., "Patient/1234")
    attribute :patient_display, String     # Maps to subject.display
    
    # Document metadata
    attribute :name, String                # Title/description (DocumentReference.description)
    attribute :date, String                # When DocumentReference was created (ISO 8601)
    attribute :date_signed, String         # When document was signed (ISO 8601)
    
    # Authors and authenticators - structured references
    attribute :authors, Array              # Array of {reference, display} hashes
    attribute :written_by, String          # Legacy: author[0].display
    attribute :author_id, String           # Legacy: author[0].reference
    
    attribute :authenticator_reference, String  # Practitioner/ID
    attribute :authenticator_display, String    # Display name
    attribute :signed_by, String                # Legacy field
    
    # Clinical context - maps to DocumentReference.context
    attribute :encounter_id, String        # context.encounter[0].reference
    attribute :period_start, String        # context.period.start (ISO 8601)
    attribute :period_end, String          # context.period.end (ISO 8601)
    
    # Facility and location
    attribute :facility_type_code, String  # context.facilityType.coding[0].code
    attribute :facility_type_system, String
    attribute :facility_type_display, String
    attribute :location, String            # Display name for backward compatibility
    
    # Content - maps to DocumentReference.content[0]
    attribute :note, String                # Backward compatibility - plain text
    attribute :content_attachments, Array  # Array of attachment objects
    attribute :content_type, String        # Default: "text/plain"
    attribute :content_format_code, String # IHE format code if applicable
    
    # Source and provenance
    attribute :source, String              # Custodian or source system
    attribute :custodian_reference, String # Organization reference
    
    # Document relationships (for amendments, addenda)
    attribute :relates_to, Array           # Array of {code, target_reference} hashes
    
    # Internal/legacy fields
    attribute :sort_date, String           # Internal use only - not exposed in FHIR
    
    # Deprecated fields (keep for backward compatibility, mark for removal)
    attribute :admission_date, String      # DEPRECATED: Use period_start
    attribute :discharge_date, String      # DEPRECATED: Use period_end
    attribute :note_type, String           # DEPRECATED: Use type_code/type_display

    default_sort_by sort_date: :desc
    
    # Add validation
    validates :status, inclusion: { in: %w[current superseded entered-in-error] }
    validates :patient_id, :type_code, presence: true
  end
end
```

---

## Field Mapping Table

| Current Field | FHIR Element | New/Modified Field | Notes |
|--------------|--------------|-------------------|-------|
| `id` | `DocumentReference.id` | No change | ✓ |
| ❌ Missing | `DocumentReference.status` | `status` | **NEW - Required** |
| `note_type` | `DocumentReference.type.text` | `type_text` | Deprecated, use structured type |
| ❌ Missing | `DocumentReference.type.coding[0].code` | `type_code` | **NEW - Required** |
| ❌ Missing | `DocumentReference.type.coding[0].system` | `type_system` | **NEW** |
| ❌ Missing | `DocumentReference.type.coding[0].display` | `type_display` | **NEW** |
| `loinc_codes` | `DocumentReference.type.coding` | Restructure as Array[Hash] | **MODIFY** |
| ❌ Missing | `DocumentReference.subject` | `patient_id`, `patient_display` | **NEW - Required** |
| `name` | `DocumentReference.description` | No change | ✓ |
| `date` | `DocumentReference.date` | Clarify as creation date | **MODIFY** |
| `date_signed` | Custom extension or context | No change | ✓ |
| `written_by` | `DocumentReference.author[0].display` | Keep for legacy | Deprecated |
| ❌ Missing | `DocumentReference.author[0].reference` | `authors` array | **NEW** |
| `signed_by` | `DocumentReference.authenticator.display` | Keep for legacy | Deprecated |
| ❌ Missing | `DocumentReference.authenticator.reference` | `authenticator_reference` | **NEW** |
| `admission_date` | `DocumentReference.context.period.start` | `period_start` | **MODIFY** |
| `discharge_date` | `DocumentReference.context.period.end` | `period_end` | **MODIFY** |
| ❌ Missing | `DocumentReference.context.encounter` | `encounter_id` | **NEW** |
| `location` | `DocumentReference.context.facilityType.coding[0].display` | Keep for legacy | Deprecated |
| ❌ Missing | `DocumentReference.context.facilityType.coding[0].code` | `facility_type_code` | **NEW** |
| `note` | `DocumentReference.content[0].attachment.data` | Keep for legacy | **MODIFY structure** |
| ❌ Missing | `DocumentReference.content[0].attachment.contentType` | `content_type` | **NEW** |
| ❌ Missing | `DocumentReference.content` | `content_attachments` | **NEW** |
| `source` | `DocumentReference.custodian.display` | No change | ✓ |
| `sort_date` | N/A (internal) | No change | Internal only |

---

## Implementation Recommendations

### Phase 1: Add Required Fields (Critical)
1. Add `status` field with validation
2. Add `patient_id` / `subject` reference
3. Restructure `type` as CodeableConcept
4. Add `content` array structure

### Phase 2: Restructure References
1. Convert `written_by` / `signed_by` to proper references
2. Add `authors` array
3. Add `authenticator_reference`

### Phase 3: Clinical Context
1. Add `encounter_id`
2. Restructure dates as `period_start` / `period_end`
3. Add coded `facility_type`

### Phase 4: Advanced Mappings
1. Add `relates_to` for amendments/addenda
2. Add `category_codes` array
3. Add content format codes

### Phase 5: Deprecation
1. Mark old fields as deprecated
2. Create migration path
3. Update consumers

---

## Compliance Checklist

- [ ] **Status field** added and validated
- [ ] **Subject/Patient reference** implemented
- [ ] **Type** restructured as CodeableConcept
- [ ] **Content** restructured as array of attachments
- [ ] **Author references** properly structured
- [ ] **Authenticator reference** added
- [ ] **Clinical context** (encounter, period) implemented
- [ ] **Facility type** coded properly
- [ ] **Date fields** use ISO 8601 format
- [ ] **LOINC codes** structured with system/code/display
- [ ] **Document relationships** (relates_to) supported
- [ ] **Backward compatibility** maintained during migration
- [ ] **FHIR serializer** updated to handle new structure
- [ ] **Tests** updated for FHIR compliance

---

## References

- [VA FHIR Map Set Implementation Guide](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/)
- [DocumentReference Profile](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-DocumentReferenceDocumentReference.html)
- [FHIR R4 DocumentReference Resource](https://hl7.org/fhir/R4/documentreference.html)
- [VistA TIU DOCUMENT File #8925 Documentation](https://www.va.gov/vdl/documents/Infrastructure/Text_Integration_Utility_(TIU)/tiuum.pdf)

---

## Document History

| Date | Author | Changes |
|------|--------|---------|
| 2026-03-04 | MarciMcGuire | Initial analysis |

---

**Status:** 🔴 **Non-Compliant** - Significant changes required for FHIR compliance
