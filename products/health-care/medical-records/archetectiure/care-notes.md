# Care Notes

## Overview

This document describes the architecture and filtering logic for clinical care notes in the Medical Records application.

### Key Terms

| Term | Description                    |
| ---- | ------------------------------ |
| v1   | Current production API         |
| v2   | Next-generation API using SCDF |

## Architecture Diagram

![Care Notes Architecture](./assets/MR-notes.drawio.png)

## Filtering Rules

### LOINC Code Mapping

The [Clinical Notes Adapter](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/unified_health_data/adapters/clinical_notes_adapter.rb#L12-L17) maps LOINC codes to note types:

```ruby
LOINC_CODES = {
  '11506-3' => 'physician_procedure_note',
  '11488-4' => 'consult_result',
  '18842-5' => 'discharge_summary'
}.freeze
```

Notes with unmapped LOINC codes are categorized as `other`.

**Version differences:**

- **v1:** Notes categorized as `other` are not displayed
- **v2:** All note types are displayed pending further analysis of the `other` category

### Document Status

SCDF normalizes statuses to a `docStatus` field with the following possible values:

- `final`
- `amended`
- `preliminary`
- `entered-in-error`

**Display rules:**

- Only notes with `final` or `amended` status are shown (allowlist)
- Notes without a `docStatus` value are excluded

### SCDF-Specific Filters

| Filter         | Retention Period |
| -------------- | ---------------- |
| C&P exam notes | 30 days          |
| Signed notes   | Displayed        |

### Jan 1, 2013 filter

from Carnetta

>Sure, before MHV went live with “Progress notes”, VA Physicians had to attend a “training” on what to not include in “Progress note” because patients will be able to easily review it online.
Although, patients could request a paper copy, it was rare and ROI can (although not supposed to) omit personal remarks that may hold the VA liable.

So .. VHA agreed with MHV to have all current and new doctors trained on writing proper notes by the end of 2012. This allowed notes going forward from Jan 2013 to display.
Progress Notes completed before 2013 were not modified.

This is covered in the UI by only allowing the user to select a date range starting from Jan 1, 2013. This is a hard cutoff and notes with a `dateTime` value before this date are not displayed.

This will have to be revisited if that ever changes, but for now it is a hard cutoff.
