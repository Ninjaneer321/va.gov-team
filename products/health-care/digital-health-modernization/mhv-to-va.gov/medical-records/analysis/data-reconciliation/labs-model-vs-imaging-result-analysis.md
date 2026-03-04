# FHIR Compliance Analysis: LabOrTest Model

**File:** `lib/unified_health_data/models/lab_or_test.rb`  
**Analysis Date:** 2026-03-04  
**FHIR Specification:** [ObservationImagingResult](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-ObservationImagingResult.html)

## Overview

This document analyzes the `UnifiedHealthData::LabOrTest` model against the VA FHIR ObservationImagingResult structure definition to identify conflicts and missing elements.

## Current Model Structure

```ruby
module UnifiedHealthData
  class ObservationValue
    attribute :text, String
    attribute :type, String
  end

  class Observation
    attribute :test_code, String
    attribute :value, UnifiedHealthData::ObservationValue
    attribute :reference_range, String
    attribute :status, String
    attribute :comments, String, array: true
    attribute :body_site, String
    attribute :sample_tested, String
  end

  class LabOrTest
    attribute :id, String
    attribute :type, String
    attribute :display, String
    attribute :test_code, String
    attribute :test_code_display, String
    attribute :date_completed, String
    attribute :sort_date, String
    attribute :sample_tested, String
    attribute :encoded_data, String
    attribute :location, String
    attribute :ordered_by, String
    attribute :body_site, String
    attribute :comments, String, array: true
    attribute :status, String
    attribute :source, String
    attribute :facility_timezone, String
    attribute :observations, UnifiedHealthData::Observation, array: true
  end
end
```

## Critical Conflicts

### 1. Missing Required FHIR Elements

| FHIR Element | Status | Current Mapping | Issue |
|--------------|--------|-----------------|-------|
| `status` | **Required** | Present in `Observation` but NOT in `LabOrTest` | LabOrTest should have status (registered\|preliminary\|final\|amended+) |
| `category` | **Required** | Missing entirely | Must include category to identify as "imaging" result |
| `code` | **Required** | Exists as `test_code`/`test_code_display` | Not structured as FHIR CodeableConcept |
| `subject` | **Required** | Missing | Must reference Patient resource |
| `effective[x]` | **Required** | `date_completed` | Not properly typed (should be effectiveDateTime or effectivePeriod) |

### 2. Data Type Mismatches

#### Value Representation

**Current:**
```ruby
class ObservationValue
  attribute :text, String
  attribute :type, String
end
```

**FHIR Expectation:**
FHIR uses polymorphic `value[x]` which can be:
- `valueString`
- `valueCodeableConcept`
- `valueQuantity`
- `valueBoolean`
- `valueInteger`
- etc.

**Issue:** Custom `ObservationValue` class doesn't align with FHIR's polymorphic value approach.

#### CodeableConcept vs String

| Current Field | Type | Should Be |
|---------------|------|-----------|
| `test_code` | String | CodeableConcept with system, code, display |
| `body_site` | String | CodeableConcept (coded body site) |
| `reference_range` | String | Complex ReferenceRange object with low/high/type |

### 3. Array Handling Issues

#### Comments
**Current:** `comments` as `String, array: true`  
**FHIR:** Uses `note` as array of Annotation objects containing:
- `authorReference` or `authorString`
- `time`
- `text`

#### Observations Array
**Current:** `observations` array in `LabOrTest`  
**Issue:** Suggests panel/group structure, but FHIR separates concerns:
- Use `DiagnosticReport` resource to group multiple `Observation` resources
- Or use `Observation.hasMember` to reference component observations

## Structural Issues

### Missing FHIR Standard Elements

| FHIR Element | Purpose | Current Equivalent | Notes |
|--------------|---------|-------------------|-------|
| `performer` | Who performed the observation | `ordered_by` (loosely) | Should be Reference to Practitioner/Organization |
| `issued` | When observation was released | Missing | ISO 8601 instant |
| `interpretation` | High/low/normal flags | Missing | CodeableConcept array |
| `method` | How observation was performed | Missing | CodeableConcept |
| `referenceRange` | Normal ranges | `reference_range` (String) | Should be complex object with low/high/type/appliesTo |

### Non-Standard Fields

Fields that don't map to FHIR Observation:

| Field | Issue | Recommendation |
|-------|-------|----------------|
| `display` | Not a FHIR Observation field | May belong in `code.display` |
| `type` | Ambiguous, appears in multiple places | Clarify purpose or remove |
| `sort_date` | Internal use only | Keep as internal field, don't map to FHIR |
| `facility_timezone` | Not standard FHIR | Use ISO 8601 datetime with timezone offset instead |
| `source` | Not standard FHIR field | Use `meta.source` or Provenance resource |
| `encoded_data` | Unclear purpose | May belong in Media attachment or DocumentReference |
| `location` | Ambiguous | Use `performer` with Organization/Location reference |
| `sample_tested` | Not standard for imaging | May belong in specimen reference |

## FHIR-Compliant Structure Recommendation

```ruby
module UnifiedHealthData
  class CodeableConcept
    include Vets::Model
    
    attribute :coding, Coding, array: true
    attribute :text, String
  end
  
  class Coding
    include Vets::Model
    
    attribute :system, String
    attribute :code, String
    attribute :display, String
    attribute :version, String
  end
  
  class Reference
    include Vets::Model
    
    attribute :reference, String
    attribute :type, String
    attribute :display, String
  end
  
  class Annotation
    include Vets::Model
    
    attribute :author_string, String
    attribute :author_reference, Reference
    attribute :time, String
    attribute :text, String
  end
  
  class Quantity
    include Vets::Model
    
    attribute :value, Float
    attribute :unit, String
    attribute :system, String
    attribute :code, String
  end
  
  class ReferenceRange
    include Vets::Model
    
    attribute :low, Quantity
    attribute :high, Quantity
    attribute :type, CodeableConcept
    attribute :applies_to, CodeableConcept, array: true
    attribute :age, Range
    attribute :text, String
  end

  class LabOrTest
    include Vets::Model

    # --- Required FHIR Elements ---
    attribute :id, String
    attribute :status, String # required: registered|preliminary|final|amended|corrected|cancelled|entered-in-error|unknown
    attribute :category, CodeableConcept, array: true # Must include imaging category
    attribute :code, CodeableConcept # What was observed
    attribute :subject, Reference # Reference to Patient (required)
    attribute :effective_date_time, String # ISO 8601 datetime with timezone
    
    # --- Common Optional FHIR Elements ---
    attribute :issued, String # ISO 8601 instant - when observation was released
    attribute :performer, Reference, array: true # Who performed (replaces ordered_by)
    attribute :value_string, String
    attribute :value_codeable_concept, CodeableConcept
    attribute :value_quantity, Quantity
    attribute :value_boolean, Boolean
    attribute :body_site, CodeableConcept # Coded body site
    attribute :method, CodeableConcept # How observation was performed
    attribute :interpretation, CodeableConcept, array: true # High/low/normal flags
    attribute :note, Annotation, array: true # Replaces comments array
    attribute :reference_range, ReferenceRange, array: true
    attribute :has_member, Reference, array: true # For panels - references to component Observations
    
    # --- Internal/Non-FHIR Fields ---
    attribute :sort_date, String # Internal use only
    attribute :source, String # Consider moving to meta.source
    
    default_sort_by sort_date: :desc
  end
end
```

## Migration Considerations

### Immediate Actions Required

1. **Add Required Fields**
   - Add `category` with imaging classification
   - Add `subject` patient reference
   - Ensure `status` is present in `LabOrTest`

2. **Refactor Data Types**
   - Replace String codes with `CodeableConcept`
   - Replace custom `ObservationValue` with FHIR `value[x]` polymorphism
   - Convert `reference_range` to proper `ReferenceRange` object

3. **Restructure Arrays**
   - Replace `comments` with `note` (Annotation array)
   - Evaluate `observations` array - consider using `DiagnosticReport` or `hasMember`

4. **Handle Non-Standard Fields**
   - Move `facility_timezone` info into ISO 8601 datetime values
   - Convert `source` to `meta.source`
   - Clarify purpose of `encoded_data` and `location`

### Backward Compatibility Strategy

Consider creating a transformation layer:

```ruby
module UnifiedHealthData
  class LabOrTestTransformer
    # Transform legacy LabOrTest to FHIR-compliant structure
    def self.to_fhir(legacy_lab_or_test)
      # Transformation logic here
    end
    
    # Transform FHIR structure back to legacy format (if needed)
    def self.from_fhir(fhir_observation)
      # Reverse transformation logic here
    end
  end
end
```

## Summary

The current `LabOrTest` model represents a **VA-specific internal representation** that is **not FHIR-compliant**. Key issues:

- ✗ Missing mandatory FHIR resource elements (`status`, `category`, `subject`)
- ✗ Data types don't match FHIR specifications (String vs. CodeableConcept)
- ✗ Custom value object doesn't align with FHIR's polymorphic `value[x]`
- ✗ Comments array structure incompatible with FHIR `note`
- ✗ Nested observations array suggests mixed concerns (DiagnosticReport vs Observation)

**Recommendation:** Implement a FHIR-compliant model alongside a transformation layer to maintain backward compatibility while achieving FHIR conformance.

## References

- [VA FHIR ObservationImagingResult Structure Definition](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-ObservationImagingResult.html)
- [FHIR R4 Observation Resource](https://hl7.org/fhir/R4/observation.html)
- [FHIR R4 DiagnosticReport Resource](https://hl7.org/fhir/R4/diagnosticreport.html)
