# Allergy Model Analysis

## Overview
This document provides an analysis of the Allergy model used in the `vets-api` repository compared to the VA FHIR AllergyIntolerance profile. The goal is to identify conflicts between the two models and provide recommended fixes where necessary.

## Conflicts Identified

### 1. Conflict in Data Structure
- **vets-api Allergy Model:**
  - Contains fields: `substance`, `reaction`, `severity`
- **VA FHIR AllergyIntolerance Profile:**
  - Contains fields: `code`, `reaction`, `severity`, `status`

**Recommendation:**
- Add `code` field to the Allergy model in the `vets-api` to enhance compatibility with FHIR standards.

### 2. Conflict in Severity Value Sets
- **vets-api Allergy Model:**
  - Severity values may differ.
- **VA FHIR AllergyIntolerance Profile:**
  - Severity is defined as `low`, `moderate`, `high`.

**Recommendation:**
- Standardize severity definitions across both models.

### 3. Missing Status Field
- **vets-api Allergy Model:**
  - No status field exists.
- **VA FHIR AllergyIntolerance Profile:**
  - Status field indicates whether the allergy is active, inactive, etc.

**Recommendation:**
- Introduce a `status` field to the Allergy model to track the current state of the allergy.

## Conclusion
To ensure that the `vets-api` Allergy model conforms to VA FHIR standards, the recommendations must be implemented. This will improve interoperability and data integrity.
