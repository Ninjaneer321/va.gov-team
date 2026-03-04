# FHIR Vital Signs Compliance Analysis

## Overview

**Analysis Date:** 2026-03-04  
**Analyzed File:** `lib/unified_health_data/models/vital.rb`  
**Commit:** `d3a74807c58b15ab0a66882e5aa4f214216e0947`  
**Reference Standard:** [VA FHIR Map Set - Vital Signs Profile](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VitalSigns.html)

This document identifies conflicts between the current `UnifiedHealthData::Vital` model implementation and the VA FHIR Community of Practice (CoP) Map Set Implementation Guide for Vital Signs.

---

## Executive Summary

The current `Vital` model implementation **cannot properly represent FHIR Vital Signs Observations** and would fail FHIR validation. Critical missing elements include:

- ❌ **No `status` field** (required by FHIR)
- ❌ **No `category` field** (must include "vital-signs")
- ❌ **No `subject` reference** (patient reference required)
- ❌ **No structured `code` field** (must be CodeableConcept with LOINC)
- ❌ **No `component` structure** (required for multi-value vitals like Blood Pressure)
- ⚠️ **Incorrect `ValueQuantity` structure** (includes non-FHIR `type` field, missing `system`)

**Impact:** The model lacks the structure needed for proper interoperability with VA health systems and FHIR-based applications.

---

## Critical Missing Elements

### 1. Missing FHIR Observation Core Fields

#### Current Implementation

```ruby
class Vital
  include Vets::Model

  attribute :id, String
  attribute :name, String
  attribute :type, String # based on LOINC code
  attribute :date, String
  attribute :sort_date, String # Normalized date for sorting (internal use only)
  attribute :measurement, String
  attribute :location, String
  attribute :notes, String, array: true
end
```

#### Missing Required FHIR Fields

| FHIR Field | Status | Description | Example Value |
|------------|--------|-------------|---------------|
| `status` | ❌ **Missing** | Observation status | `"final"`, `"amended"`, `"preliminary"` |
| `category` | ❌ **Missing** | Must include vital-signs category | `[{coding: [{system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "vital-signs"}]}]` |
| `subject` | ❌ **Missing** | Reference to patient | `"Patient/12345"` |
| `effectiveDateTime` | ⚠️ **Partial** | Date/time of observation | `"2024-01-15T10:30:00Z"` (exists as `date` but not properly named) |
| `code` | ⚠️ **Incorrect Structure** | LOINC code for vital type | Must be CodeableConcept, not String |

---

### 2. ValueQuantity Structure Issues

#### Current Implementation

```ruby
class ValueQuantity
  include Vets::Model

  attribute :type, String # e.g. "Diastolic" or "Height"
  attribute :code, String # e.g. "mm[Hg]"
  attribute :value, Float # e.g. 120.0
  attribute :unit, String # e.g. "mmHg"
end
```

#### Problems Identified

| Field | Current | FHIR Requirement | Issue |
|-------|---------|------------------|-------|
| `type` | `String` (e.g., "Diastolic") | **Not a FHIR field** | This should be in `component.code`, not `Quantity` |
| `code` | `String` (e.g., "mm[Hg]") | UCUM code | ✅ Correct value, but... |
| `unit` | `String` (e.g., "mmHg") | Human-readable unit | ⚠️ Redundant with `code` |
| `system` | ❌ Missing | URI (e.g., "http://unitsofmeasure.org") | **Required for FHIR** |
| `value` | `Float` | decimal | ✅ Correct |

**Critical Issue:** The `type` field ("Diastolic", "Systolic", "Height") does **not** belong in the Quantity structure. In FHIR, multi-component observations like Blood Pressure use the `component` array, where each component has its own `code` and `valueQuantity`.

---

### 3. Missing Component Structure for Multi-Component Vitals

#### FHIR Blood Pressure Structure

Blood Pressure requires **two components** (Systolic and Diastolic) per the FHIR specification:

```ruby
# FHIR Structure (conceptual Ruby representation):
{
  resourceType: "Observation",
  status: "final",
  category: [{
    coding: [{
      system: "http://terminology.hl7.org/CodeSystem/observation-category",
      code: "vital-signs"
    }]
  }],
  code: {
    coding: [{
      system: "http://loinc.org",
      code: "85354-9",
      display: "Blood pressure panel"
    }]
  },
  component: [
    {
      code: {
        coding: [{
          system: "http://loinc.org",
          code: "8480-6",
          display: "Systolic blood pressure"
        }]
      },
      valueQuantity: {
        value: 120,
        unit: "mmHg",
        system: "http://unitsofmeasure.org",
        code: "mm[Hg]"
      }
    },
    {
      code: {
        coding: [{
          system: "http://loinc.org",
          code: "8462-4",
          display: "Diastolic blood pressure"
        }]
      },
      valueQuantity: {
        value: 80,
        unit: "mmHg",
        system: "http://unitsofmeasure.org",
        code: "mm[Hg]"
      }
    }
  ]
}
```

#### Current Implementation

**❌ No `component` array exists in the current model.**

This means multi-component vitals (Blood Pressure, Blood Pressure Panel with Mean Arterial Pressure) cannot be properly represented.

---

### 4. Code/Type Field Confusion

#### Current Implementation

```ruby
attribute :type, String # based on LOINC code
```

**Issue:** The comment says "based on LOINC code," but FHIR requires a structured `CodeableConcept`:

#### Required FHIR Structure

```ruby
class Coding
  include Vets::Model
  attribute :system, String  # e.g., "http://loinc.org"
  attribute :code, String    # e.g., "85354-9"
  attribute :display, String # e.g., "Blood pressure panel"
end

class CodeableConcept
  include Vets::Model
  attribute :coding, Coding, array: true
  attribute :text, String
end

# In Vital model:
attribute :code, CodeableConcept
```

**Current `type` field is a simple string**, which cannot capture:
- The coding system URI (`http://loinc.org`)
- Multiple codings (LOINC + SNOMED CT)
- Display text separate from code

---

### 5. Missing Optional But Common FHIR Fields

While not always required, VA FHIR mappings often include:

| Field | Status | Purpose |
|-------|--------|---------|
| `performer` | ❌ Missing | Reference to who took the measurement (Practitioner, Organization) |
| `device` | ❌ Missing | Medical device used (e.g., blood pressure cuff model) |
| `interpretation` | ❌ Missing | Clinical interpretation (high, low, normal) as CodeableConcept |
| `bodySite` | ❌ Missing | Body location (e.g., left arm for BP) |

---

### 6. Notes Array Structure Issue

#### Current Implementation

```ruby
attribute :notes, String, array: true
```

#### FHIR `note` Structure

```ruby
class Annotation
  include Vets::Model
  attribute :text, String
  attribute :time, String # ISO 8601 datetime
  attribute :author_string, String # or author_reference for Practitioner
end

# In Vital model:
attribute :note, Annotation, array: true
```

**Issue:** Current implementation only stores strings, missing:
- **Author** (who wrote the note)
- **Timestamp** (when the note was added)

---

### 7. Non-Standard `sort_date` Field

#### Current Implementation

```ruby
attribute :sort_date, String # Normalized date for sorting (internal use only)
default_sort_by sort_date: :desc
```

#### Issues

1. **Not a FHIR field** - FHIR has no "sort_date" concept
2. **Data inconsistency risk** - Having separate `date` and `sort_date` fields can lead to synchronization issues
3. **FHIR alternative** - Sorting should use `effectiveDateTime` or `issued` timestamp

**Recommendation:** Remove `sort_date` and use `effective_date_time` for sorting. Handle date normalization in application logic, not data model.

---

## Complete Conflict Matrix

| Field | Current Code | FHIR/VA Requirement | Conflict Type | Severity |
|-------|--------------|---------------------|---------------|----------|
| `status` | ❌ Missing | ✅ Required | Missing Required Field | **Critical** |
| `category` | ❌ Missing | ✅ Required (must include "vital-signs") | Missing Required Field | **Critical** |
| `subject` | ❌ Missing | ✅ Required | Missing Required Field | **Critical** |
| `code` | String (`type`) | CodeableConcept with LOINC | Incorrect Type | **Critical** |
| `effectiveDateTime` | `date` (String) | `effectiveDateTime` (ISO 8601) | Naming/Format Issue | **High** |
| `value[x]` | `measurement` (String) | Quantity or Components | Incorrect Type | **Critical** |
| `component` | ❌ Missing | ✅ Required for multi-value vitals (BP) | Missing Required Field | **Critical** |
| `ValueQuantity.type` | Present (String) | Not in FHIR Quantity | Extra Non-Standard Field | **High** |
| `ValueQuantity.system` | ❌ Missing | ✅ Required (URI) | Missing Required Field | **Critical** |
| `ValueQuantity.code` | String | String (UCUM) | ✅ Correct | None |
| `ValueQuantity.value` | Float | decimal | ✅ Correct | None |
| `ValueQuantity.unit` | String | String | ✅ Correct (but redundant with code) | Low |
| `performer` | ❌ Missing | Optional but common | Missing Optional Field | Medium |
| `device` | ❌ Missing | Optional but common | Missing Optional Field | Medium |
| `interpretation` | ❌ Missing | Optional but common | Missing Optional Field | Medium |
| `note` | String array | Annotation array (text, time, author) | Incorrect Structure | **High** |
| `sort_date` | Present (String) | Not in FHIR | Extra Non-Standard Field | Medium |
| `name` | Present (String) | Not standard FHIR (display text in `code`) | Extra Non-Standard Field | Low |
| `location` | Present (String) | Not standard FHIR (VA-specific extension?) | Possibly Non-Standard | Low |

---

## Recommended FHIR-Compliant Model Structure

```ruby
# frozen_string_literal: true

require 'vets/model'

module UnifiedHealthData
  # FHIR Coding structure
  class Coding
    include Vets::Model

    attribute :system, String  # e.g., "http://loinc.org"
    attribute :code, String    # e.g., "85354-9"
    attribute :display, String # e.g., "Blood pressure panel"
  end

  # FHIR CodeableConcept structure
  class CodeableConcept
    include Vets::Model

    attribute :coding, Coding, array: true
    attribute :text, String # Human-readable text
  end

  # FHIR Quantity structure (corrected)
  class Quantity
    include Vets::Model

    attribute :value, Float    # e.g., 120.0
    attribute :unit, String    # e.g., "mmHg"
    attribute :system, String  # e.g., "http://unitsofmeasure.org" (REQUIRED)
    attribute :code, String    # e.g., "mm[Hg]" (UCUM code)
  end

  # FHIR Observation.component structure
  class Component
    include Vets::Model

    attribute :code, CodeableConcept      # LOINC code for component (e.g., Systolic BP)
    attribute :value_quantity, Quantity   # The measured value
    attribute :data_absent_reason, CodeableConcept # If value is absent
  end

  # FHIR Annotation structure
  class Annotation
    include Vets::Model

    attribute :text, String         # Note content
    attribute :time, String         # ISO 8601 datetime
    attribute :author_string, String # Name of author (or use author_reference)
  end

  # FHIR-compliant Vital Signs Observation
  class Vital
    include Vets::Model

    # ============================================
    # REQUIRED FHIR FIELDS
    # ============================================
    attribute :id, String
    attribute :status, String                    # "final", "amended", "preliminary", etc.
    attribute :category, CodeableConcept, array: true # Must include "vital-signs"
    attribute :code, CodeableConcept             # LOINC code for vital type
    attribute :subject, String                   # Patient reference (e.g., "Patient/12345")
    attribute :effective_date_time, String       # ISO 8601 datetime

    # ============================================
    # VALUE FIELDS (use ONE of these)
    # ============================================
    attribute :value_quantity, Quantity          # For simple vitals (height, weight)
    attribute :component, Component, array: true # For multi-component vitals (BP)
    attribute :data_absent_reason, CodeableConcept # If no value available

    # ============================================
    # OPTIONAL BUT COMMON FHIR FIELDS
    # ============================================
    attribute :performer, String, array: true    # References to Practitioner/Organization
    attribute :device, String                    # Device reference
    attribute :interpretation, CodeableConcept, array: true # Clinical interpretation
    attribute :body_site, CodeableConcept        # Body location
    attribute :note, Annotation, array: true     # Clinical notes

    # ============================================
    # VA-SPECIFIC OR LEGACY FIELDS
    # ============================================
    attribute :location, String  # VA-specific (may need extension)
    attribute :name, String      # Display name (legacy, consider removing)
    attribute :measurement, String # Human-readable (legacy, consider removing)

    # Use FHIR-standard field for sorting
    default_sort_by effective_date_time: :desc
  end
end
```

---

## Migration Considerations

### Breaking Changes

Implementing FHIR compliance will introduce **breaking changes** to the API and data model:

1. **Field Renames:**
   - `date` → `effective_date_time`
   - `type` → `code` (and change from String to CodeableConcept)
   - `measurement` → `value_quantity` or `component`
   - `notes` → `note` (and change structure)

2. **Removed Fields:**
   - `sort_date` (use `effective_date_time` instead)
   - `ValueQuantity.type` (move to `component.code`)

3. **New Required Fields:**
   - `status`, `category`, `subject` must be populated

### Migration Strategy

1. **Phase 1: Additive Changes (Non-Breaking)**
   - Add new FHIR fields alongside existing fields
   - Populate new fields in parallel with old fields
   - Update serializers to support both formats

2. **Phase 2: Deprecation**
   - Mark old fields as deprecated
   - Log warnings when old fields are used
   - Update API documentation

3. **Phase 3: Breaking Change Release**
   - Remove deprecated fields
   - Update all consumers to use new FHIR-compliant structure

### Data Migration

```ruby
# Example migration pseudocode
Vital.find_each do |vital|
  vital.status = "final" # Default to final
  vital.category = [
    CodeableConcept.new(
      coding: [
        Coding.new(
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs"
        )
      ]
    )
  ]
  vital.subject = "Patient/#{vital.patient_id}" # Assuming patient_id exists
  vital.effective_date_time = vital.date
  
  # Convert type string to CodeableConcept
  vital.code = map_type_to_codeable_concept(vital.type)
  
  # Convert measurement string to Quantity or Component
  if vital.type == "Blood Pressure"
    vital.component = parse_blood_pressure_components(vital.measurement)
  else
    vital.value_quantity = parse_quantity(vital.measurement)
  end
  
  vital.save!
end
```

---

## Validation Requirements

### FHIR Validation Rules

To ensure compliance, implement these validation rules:

```ruby
class Vital
  # Required fields
  validates :status, presence: true, inclusion: { in: %w[registered preliminary final amended corrected cancelled entered-in-error unknown] }
  validates :category, presence: true
  validates :code, presence: true
  validates :subject, presence: true, format: { with: /\APatient\/\d+\z/ }
  validates :effective_date_time, presence: true, format: { with: ISO8601_REGEX }

  # Must have either value or component or dataAbsentReason
  validate :must_have_value_or_component_or_absent_reason

  # Category must include vital-signs
  validate :category_includes_vital_signs

  def must_have_value_or_component_or_absent_reason
    if value_quantity.nil? && component.empty? && data_absent_reason.nil?
      errors.add(:base, "Must have either value_quantity, component, or data_absent_reason")
    end
  end

  def category_includes_vital_signs
    return if category.any? { |cat| 
      cat.coding.any? { |coding| 
        coding.code == "vital-signs" 
      } 
    }
    errors.add(:category, "Must include vital-signs category")
  end
end
```

---

## Testing Recommendations

### Unit Tests

```ruby
RSpec.describe UnifiedHealthData::Vital do
  describe "FHIR compliance" do
    it "requires status field" do
      vital = described_class.new
      expect(vital).not_to be_valid
      expect(vital.errors[:status]).to be_present
    end

    it "requires category with vital-signs code" do
      vital = described_class.new(category: [])
      vital.valid?
      expect(vital.errors[:category]).to include("Must include vital-signs category")
    end

    it "validates blood pressure has two components" do
      vital = described_class.new(
        code: blood_pressure_code,
        component: [systolic_component] # Missing diastolic
      )
      vital.valid?
      expect(vital.errors[:component]).to be_present
    end
  end
end
```

### Integration Tests

1. **FHIR Validator Testing:**
   - Use the official FHIR validator CLI
   - Test against VA FHIR profiles
   - Validate generated JSON against StructureDefinition

2. **Interoperability Testing:**
   - Test data exchange with VA FHIR servers
   - Verify data can be consumed by FHIR clients
   - Test round-trip conversion (Ruby → JSON → FHIR → Ruby)

---

## Resources

### Official Documentation

- [VA FHIR Map Set IG - Vital Signs](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VitalSigns.html)
- [FHIR R4 Observation Resource](http://hl7.org/fhir/R4/observation.html)
- [US Core Vital Signs Profile](http://hl7.org/fhir/us/core/StructureDefinition-us-core-vital-signs.html)
- [LOINC Vital Signs Codes](https://loinc.org/)

### Tools

- [FHIR Validator](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator)
- [Synthea - FHIR Test Data Generator](https://github.com/synthetichealth/synthea)
- [HAPI FHIR Library](https://hapifhir.io/) (for validation in Ruby)

---

## Appendix: Common LOINC Codes for Vital Signs

| Vital Sign | LOINC Code | Display |
|------------|------------|---------|
| Blood Pressure Panel | 85354-9 | Blood pressure panel with all children optional |
| Systolic BP | 8480-6 | Systolic blood pressure |
| Diastolic BP | 8462-4 | Diastolic blood pressure |
| Heart Rate | 8867-4 | Heart rate |
| Respiratory Rate | 9279-1 | Respiratory rate |
| Body Temperature | 8310-5 | Body temperature |
| Oxygen Saturation | 2708-6 | Oxygen saturation in Arterial blood |
| Body Height | 8302-2 | Body height |
| Body Weight | 29463-7 | Body weight |
| Body Mass Index | 39156-5 | Body mass index (BMI) [Ratio] |

---

## Change History

| Date | Author | Change |
|------|--------|--------|
| 2026-03-04 | MarciMcGuire | Initial analysis comparing vital.rb to VA FHIR Map Set |

---

**End of Document**
