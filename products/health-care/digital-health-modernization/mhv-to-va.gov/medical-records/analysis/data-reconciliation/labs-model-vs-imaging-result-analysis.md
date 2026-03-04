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
