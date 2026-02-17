## CCD (VHIE) vs. CCD (Oracle Health) vs. Blue Button Report — Comparison Matrix

### Overview

| Feature | CCD from VHIE (VistA) | CCD from Oracle Health | Blue Button Report |
|---------|----------------------|----------------------|-------------------|
| **Data Source** | Veterans Health Information Exchange (VHIE) / VistA | Oracle Health Millennium (FHIR R4 API) | VistA + Self-Reported Data |
| **Format** | XML (CDA/CCD), PDF | XML (C-CDA), base64 via FHIR Binary | PDF, TXT |
| **Standard** | HITSP C32 V2.5 / CCD v1.0 (tweaked, does not fully follow CCDA standard) | C-CDA standard (no VA tweaks) | VA-specific format |
| **Customizable** | ❌ No — fixed sections, fixed date ranges | ❌ No — fixed sections per C-CDA standard | ✅ Yes — user selects date range & data categories |
| **User-Selectable Date Range** | ❌ No | ❌ No (API supports `start`/`end` params but not user-facing) | ✅ Yes — 3 months, 6 months, 1 year, or custom |
| **Includes Self-Reported Data** | ❌ No | ❌ No | ✅ Yes |
| **Includes DoD Military Service Info** | ❌ No | ❌ No | ✅ Yes |
| **Standard for Provider Exchange** | ✅ Partially (VA-tweaked CCDA) | ✅ Yes (standard C-CDA) | ❌ No |
| **API** | VHIE service (proprietary) | [FHIR R4 `$autogen-ccd-if`](https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/op-binary-autogen-ccd-if-get.html) | MHV PHR APIs |
| **When shown to Veterans** | All users (VistA data pre-cutover) | Users at OH facilities (data post-cutover) | All users |

### Data Section Comparison

| Data Category | VHIE CCD: Included? | VHIE CCD: How Far Back | VHIE CCD: Max Records | OH CCD: Included? | OH CCD: How Far Back | BB: Included? | BB: How Far Back |
|---|:-:|---|---|:-:|---|:-:|---|
| **Allergies** (VA) | ✅ | **All time** (excl. deleted/entered-in-error) | No limit | ✅ | **All active** allergies | ✅ | User-selected range¹ |
| **Allergies** (Self-Reported) | ❌ | — | — | ❌ | — | ✅ | User-selected range |
| **Problems/Conditions** | ✅ | **All time** (active & inactive; excl. deleted) | No limit | ✅ | **All active/relevant** conditions | ✅ | User-selected range¹ |
| **Medications** (VA) | ✅ | **15 months** (dispense date) | Active Rx only | ✅ | **Active + recent** (~12 months typical) | ✅ | User-selected range |
| **Medications** (Self-Reported) | ❌ | — | — | ❌ | — | ✅ | User-selected range |
| **Vital Signs** | ✅ | **12 months** (panel Date Taken) | 10 most recent panels² | ✅ | **Recent** (configurable, typically 12 months) | ✅ | User-selected range |
| **Vitals** (Self-Reported) | ❌ | — | — | ❌ | — | ✅ | User-selected range |
| **Lab Results** (Chem/Heme) | ✅ | **12 months** (result date) | 5 most recent panels | ✅ | **Recent** (typically up to 12 months)³ | ✅ | User-selected range⁴ |
| **Pathology Reports** | ❌ | — | — | ⚠️ May appear under Results | Configurable | ✅ | Available 36 hrs after completion |
| **Radiology Reports** | ❌ | — | — | ⚠️ May appear under Results | Configurable | ✅ | Available 36 hrs after completion |
| **EKG Historical Dates** | ❌ | — | — | ❌ | — | ✅ | Historical (no longer updated) |
| **Labs & Tests** (Self-Reported) | ❌ | — | — | ❌ | — | ✅ | User-selected range |
| **Immunizations** (VA) | ✅ | **All time** | No limit | ✅ | **All time** (longitudinal) | ✅ | User-selected range |
| **Immunizations** (Self-Reported) | ❌ | — | — | ❌ | — | ✅ | User-selected range |
| **Encounters** (Outpatient) | ✅ | **36 months** (encounter date) | 25 most recent⁵ | ✅ | **Recent** (typically 12–36 months; configurable) | ❌⁶ | — |
| **Procedures** | ✅⁷ | **12 months** (procedure date) | 25 most recent | ✅ | **Recent** (typically 12 months; configurable) | ❌⁶ | — |
| **Plan of Care** | ❌ | — | — | ✅ | Current/active plans | ❌ | — |
| **Social History** | ❌ | — | — | ✅ | Current | ❌ | — |
| **Advance Directives** | ❌ | — | — | ✅ | Current | ❌ | — |
| **Functional Status** | ❌ | — | — | ✅ | Current | ❌ | — |
| **Care Team** | ❌ | — | — | ✅ | Current | ❌ | — |
| **Medical Equipment** | ❌ | — | — | ✅ | Current | ❌ | — |
| **Appointments** (Future) | ❌ | — | — | ❌ | — | ✅ | Upcoming |
| **Appointments** (Past) | ❌ | — | — | ❌ | — | ✅ | Past 2 years |
| **Admissions & Discharges** | ❌ | — | — | ❌⁸ | — | ✅ | User-selected range |
| **VA Notes** (Care Summaries) | ❌ | — | — | ❌⁸ | — | ✅ | Available 36 hrs after completion⁹ |
| **VA Wellness Reminders** | ❌ | — | — | ❌ | — | ✅ | No longer updated |
| **Self-Reported Health History** | ❌ | — | — | ❌ | — | ✅ | User-selected range |
| **Food & Activity Journals** | ❌ | — | — | ❌ | — | ✅ | User-selected range |
| **Goals** | ❌ | — | — | ❌ | — | ✅ | User-selected range |
| **Demographics** (VA) | Header only¹⁰ | — | — | Header + section | — | ✅ | Past 3 years |
| **Demographics** (Self-Reported) | ❌ | — | — | ❌ | — | ✅ | User-selected range |
| **Health Insurance** (Self-Reported) | ❌ | — | — | ❌ | — | ✅ | User-selected range |
| **DoD Military Service Info** | ❌ | — | — | ❌ | — | ✅ | All time |

### Key Differences Between the Two CCDs

| Dimension | VHIE CCD (VistA) | OH CCD (Oracle Health) |
|-----------|-----------------|----------------------|
| **Standard compliance** | VA-tweaked CCDA; does not fully follow the standard | Standard C-CDA; no VA tweaks |
| **Additional sections** | None beyond core 8 | Plan of Care, Social History, Advance Directives, Functional Status, Care Team, Medical Equipment |
| **Date range behavior** | Fixed per VA Business Rules (e.g., 12 mo for vitals, 36 mo for encounters) | Configurable per site; API supports `start`/`end` params; defaults set by health system |
| **Record limits** | Hard caps (e.g., 5 lab panels, 10 vital panels, 25 encounters) | Generally no hard caps documented; governed by site config |
| **Data coverage** | Pre-cutover data for OH facilities; all data for VistA-only facilities | Post-cutover data only for OH facilities |
| **Retrieval** | Via VHIE proprietary service | Via FHIR R4 Binary `$autogen-ccd-if` endpoint |

### How Veterans Access These Reports (Current & Future State)

Per [`OH-integration-download-page-edits.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/805de17e2074176894b1f551f564c56eed4b3a0b/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/downloads/OH-integration-download-page-edits.md):

| User Type | VistA CCD | OH CCD | Blue Button |
|-----------|:-:|:-:|:-:|
| **VistA-only users** | ✅ | ❌ | ✅ |
| **Hybrid users** (VistA + OH) | ✅ (pre-cutover data) | ✅ (post-cutover data) | ✅ |
| **OH-only users** | ✅ (treated same as hybrid)¹¹ | ✅ | ✅ |

### Summary: Breadth, Depth, and Control

| Dimension | VHIE CCD | OH CCD | Blue Button |
|-----------|----------|--------|-------------|
| **Total clinical sections** | 8 | 12+ | 12+ selectable categories |
| **Date range control** | ❌ Fixed per section | ❌ Fixed (configurable by site) | ✅ Full user control |
| **Self-reported data** | ❌ | ❌ | ✅ |
| **DoD info** | ❌ | ❌ | ✅ |
| **Provider exchange standard** | ⚠️ Partial (tweaked) | ✅ Full C-CDA | ❌ |
| **Data freshness** | Updated once per 24 hrs | Near real-time from Millennium | Real-time from VistA (some 36-hr delays) |

### Footnotes

1. **Allergies & Problems in BB**: While the BB date range applies overall, allergies and problems are typically returned in full regardless of date range since they represent ongoing conditions.
2. **Vital Signs in VHIE CCD**: If more than one panel was taken on the same date, only the most recent panel for that date is included.
3. **OH CCD date ranges**: Oracle Health CCD date ranges are configurable per site implementation. The ranges listed (e.g., "typically 12 months") represent common defaults, but individual VA OH sites may be configured differently.
4. **Lab Results in BB**: VA laboratory results are available 36 hours after verification; COVID-19 results are available immediately.
5. **Encounters in VHIE CCD**: Ancillary visits are excluded. Associated note titles per encounter are limited to max 10.
6. **Encounters & Procedures in BB**: Blue Button does not have dedicated "Encounters" or "Procedures" sections in the same way as CCD. Related info may appear under Appointments, Notes, or other categories.
7. **Procedures in VHIE CCD**: Present in the XSL stylesheet and the `NWHINTHREE` mock data but not in the primary `NWHINONE` test fixture, suggesting conditional inclusion.
8. **Admissions/Discharges & Notes in OH CCD**: These may appear within Encounter entries in the OH CCD but are not standalone sections in the same way as Blue Button presents them.
9. **VA Notes in BB**: Excludes C&P (Compensation & Pension/claim exam) notes.
10. **Demographics in VHIE CCD**: The CCD header includes patient demographics (name, address, phone, gender, DOB, etc.) but not as a selectable body section.
11. **OH-only users**: Per the Feb 9, 2026 decision, OH-only users are treated the same as hybrid users because many attended their current OH facility before it cut over from VistA. Per the CARES Act, all Veterans must have access to ALL of their medical records.

### Source Documentation
- **VHIE CCD Business Rules**: Test fixtures in [`department-of-veterans-affairs/mhv-np-osccd-api`](https://github.com/department-of-veterans-affairs/mhv-np-osccd-api/tree/2d3f996d189247d64d0c20adfd4d4e8b8e012b32/mhv-osccd-das/mhv-osccd-das-main/src/test/resources)
- **OH CCD API**: [FHIR R4 `$autogen-ccd-if`](https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/op-binary-autogen-ccd-if-get.html)
- **CCD overview**: [`ccd.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/805de17e2074176894b1f551f564c56eed4b3a0b/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/downloads/ccd.md)
- **OH integration plan**: [`OH-integration-download-page-edits.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/805de17e2074176894b1f551f564c56eed4b3a0b/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/downloads/OH-integration-download-page-edits.md)
- **BB vs CCD overview**: [`engineering/README.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/312c5f45fcd2d63a349d4f318abb4c3b109d3f31/products/health-care/medical-records/va-blue-button/engineering/README.md)
- **Blue Button report structure**: [`downloadable-reports.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/5d252a3cf685b2cf9ec30f4ebf87673094e19057/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/data-domains/downloadable-reports/downloadable-reports.md)

> **Important note on OH CCD specifics**: The Oracle Health CCD section details and date ranges are based on the C-CDA standard and Oracle Health documentation. The exact sections included and date range defaults are **configurable per site** and may vary across VA Oracle Health facilities. The ranges noted above (e.g., "typically 12 months" for labs) represent common defaults but should be validated against the specific VA Oracle Health configuration. Search results may be incomplete — you can explore more in the [GitHub code search UI](https://github.com/search?q=repo%3Adepartment-of-veterans-affairs%2Fva.gov-team+%22Oracle+Health%22+CCD&type=code).
