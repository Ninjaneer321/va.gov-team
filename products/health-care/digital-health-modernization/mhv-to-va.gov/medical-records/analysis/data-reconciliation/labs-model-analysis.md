# FHIR Mapping Analysis: LabOrTest Model vs FHIR DiagnosticReport/Observation

**Analysis Date:** 2026-03-04 18:44:33  
**Analyzed By:** MarciMcGuire  
**Model Location:** `lib/unified_health_data/models/lab_or_test.rb`  
**Commit:** d3a74807c58b15ab0a66882e5aa4f214216e0947

---

## Executive Summary

The `UnifiedHealthData::LabOrTest` model is a **simplified internal representation** that consolidates FHIR `DiagnosticReport` data for labs and tests. While functional for current use cases, it has several conflicts with standard FHIR R4 specifications, primarily around:

1. **Missing required FHIR elements** (code, subject, issued)
2. **Loss of reference integrity** (References converted to Strings)
3. **Collapsed structured data** (CodeableConcept → String, Quantity → text)
4. **Non-standard custom fields** (source, facility_timezone, sort_date)

---

## Model Overview

### Current Structure

```ruby
module UnifiedHealthData
  class ObservationValue
    attribute :text, String    # Custom simplified value
    attribute :type, String    # Tracks FHIR value[x] type
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
