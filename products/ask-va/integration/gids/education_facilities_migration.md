# Ask VA Education Facilities Migration GIDS API v0 to v1

## Overview

The Ask VA API previously retrieved education facility data from the **GIDS v0 API**.  
This work migrates those integrations to the **GIDS v1 API** while preserving the response shape expected by the Ask VA frontend wherever possible.

The primary goals of this migration were:

- Transition Ask VA to the supported **GIDS v1 endpoints**
- Preserve the existing frontend response shape
- Identify and normalize field differences between v0 and v1
- Document upstream inconsistencies discovered during migration
- Validate compatibility through request specs, VCR cassette recordings, and manual response comparisons

---

## Architecture Flow

The following diagram shows the high-level flow of education facility data through the system after the GIDS v1 migration.

```mermaid
flowchart LR
    A[GIDS API v1] --> B[Ask VA Backend Integration]
    B --> C[Ask VA Response Normalization]
    C --> D[Ask VA API Response]
    D --> E[Frontend Data Normalization]
    E --> F[Education Facility UI Components]

    classDef upstream fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#1f2937;
    classDef backend fill:#6495ED,stroke:#4169e1,stroke-width:2px,color:#ffffff;
    classDef frontend fill:#dcfce7,stroke:#22c55e,stroke-width:2px,color:#1f2937;

    class A upstream;
    class B,C,D backend;
    class E,F frontend;
```

### Flow Details

1. **GIDS API v1** returns the upstream education facility payload.
2. **Ask VA backend integration** retrieves data from the appropriate GIDS v1 endpoint.
3. **Ask VA response normalization** preserves frontend compatibility by remapping or supplementing fields such as:
   - `state` → `physical_state`
   - missing `physical_zip` → `''` for search results
4. **Ask VA frontend data normalization** converts single-object responses into an array when necessary:
   ```javascript
   if (!Array.isArray(res.data)) res.data = [res.data];
   ```
5. **Education facility UI components** consume a consistent array-based structure for rendering.

### Summary

Compatibility is preserved in two layers:

- **Backend normalization** preserves the expected field contract.
- **Frontend normalization** ensures a consistent collection shape for rendering.

Together, these layers allow Ask VA to migrate from GIDS v0 to v1 without requiring changes to the existing frontend components.

---

## Scope

### Affected Ask VA Endpoints

| Ask VA Endpoint | Purpose |
|---|---|
| `/ask_va_api/v0/education_facilities/search` | Search for education facilities |
| `/ask_va_api/v0/education_facilities/:id` | Retrieve facility details |

### Upstream Service

The upstream data source is the **GI Bill Data Service (GIDS) API**.

| Version | Description |
|---|---|
| v0 | Original endpoints previously used by Ask VA |
| v1 | Updated endpoints used in this migration |

### In Scope

- Updating Ask VA education facilities integrations from GIDS v0 to v1
- Comparing v0 and v1 response shapes
- Preserving the Ask VA frontend contract where possible
- Documenting upstream inconsistencies
- Adding or updating tests to validate the normalized response shape

### Out of Scope

- Frontend contract redesign
- Removal of legacy Ask VA response fields
- Broader refactors unrelated to the GIDS version migration

---

## Motivation

The migration to GIDS v1 was performed to:

- Resolve discrepancies between Ask VA education facility results and those shown in the GI Bill Comparison Tool, which uses the GIDS v1 API
- Align Ask VA with the current upstream API version
- Reduce risk associated with continued reliance on legacy v0 endpoints
- Improve long-term maintainability of the integration
- Confirm that Ask VA can continue to serve the frontend without breaking the existing response contract

---

## v0 vs v1 API Differences

During migration, several differences were identified between GIDS v0 and GIDS v1 responses.

### Field Mapping Differences

| v0 Field | v1 Equivalent | Notes |
|---|---|---|
| `physical_state` | `state` | Present in v1 search results under a different name |
| `physical_zip` | Not present in search responses | Only available in some facility detail responses |
| `facility_code` | `facility_code` | No change |
| `name` | `name` | No change |

### Key Finding

GIDS v1 search responses do **not include `physical_zip`**, even though:

- v0 responses included it
- some v1 facility detail responses still include it

To preserve the Ask VA frontend contract, `physical_zip` is returned as an empty string (`''`) for search results.

---

## Frontend Response Contract

The Ask VA frontend consumes two related response shapes for education facilities, depending on whether the request returns a collection of facilities or a single facility record.

### Search Results Response Shape

When the endpoint returns a list of facilities, the response shape is:

```json
{
  "data": [
    {
      "id": "123",
      "attributes": {
        "facility_code": "ABC123",
        "name": "Example University",
        "physical_state": "CA",
        "physical_zip": ""
      }
    }
  ],
  "links": {
    "self": "/ask_va_api/v0/education_facilities/search"
  },
  "meta": {
    "count": 1
  }
}
```

### Facility Detail Response Shape

When the request returns a single facility record, the response shape is:

```json
{
  "data": {
    "id": "123",
    "attributes": {
      "facility_code": "ABC123",
      "name": "Example University",
      "physical_state": "CA",
      "physical_zip": ""
    }
  },
  "links": {
    "self": "/ask_va_api/v0/education_facilities/123"
  }
}
```

### Important Contract Expectations

| Response Type | `data` Shape | Required Top-Level Fields |
|---|---|---|
| Search results | Array | `data`, `links`, `meta` |
| Facility detail | Object | `data`, `links` |

### Required Facility Attributes

In both response shapes, the frontend expects each facility record to include:

| Field | Required | Notes |
|---|---|---|
| `facility_code` | Yes | Used to identify facilities |
| `name` | Yes | Displayed in the UI |
| `physical_state` | Yes | Preserved for compatibility with the existing contract |
| `physical_zip` | Yes | Included to avoid `undefined` behavior in the frontend |

## Frontend Normalization of `data`

Although the Ask VA API returns two different shapes for the `data` field (an array for search results and an object for single facility detail), the frontend normalizes this difference before rendering.

Within `EducationFacilitySearch.jsx`, the API response is converted to an array when necessary:

```javascript
if (!Array.isArray(res.data)) res.data = [res.data];
```

This normalization ensures that downstream components such as `EducationSearchItem` always receive facility data in a consistent array format regardless of whether the original API response contained a single object or a collection.

As a result, frontend components do not need to branch logic based on response shape.

### Raw API Contract vs Frontend-Consumed Shape

The raw Ask VA API response may return:

- `data: []` when returning search results
- `data: {}` when returning a single facility record

However, before the data is used by UI components, it is normalized into a consistent array format:

```json
{
  "data": [
    {
      "id": "123",
      "attributes": {
        "facility_code": "ABC123",
        "name": "Example University",
        "physical_state": "CA",
        "physical_zip": ""
      }
    }
  ]
}
```

This allows the frontend to treat both search results and individual facility lookups uniformly.

## Note on Payload Size

The example payloads shown in this document include only a subset of the fields returned by the API.

The upstream GIDS API responses contain significantly more attributes than those shown here, and Ask VA passes through a much larger payload to the frontend. The examples above highlight only the fields that are relevant to the Ask VA frontend contract and the fields validated in request specs.

Similarly, request specs assert only the fields required by the frontend rather than validating the full upstream payload.

---

## Route Usage Notes

During investigation of the education facilities integration, only two of the four Ask VA routes appear to be actively used by the frontend.

### Ask VA Route Usage

| Route | Controller Action | Used by Frontend |
|---|---|---|
| `/education_facilities/search` | `education_facilities#search` | ✅ Yes |
| `/education_facilities/:id` | `education_facilities#show` | ✅ Yes |
| `/education_facilities/autocomplete` | `education_facilities#autocomplete` | ⚠️ Not observed |
| `/education_facilities/:id/children` | `education_facilities#children` | ⚠️ Not observed |

Further investigation may be required to determine whether the unused routes are still required by other consumers or can be safely removed.

### Ask VA → GIDS Integration Mapping

The following table summarizes how Ask VA controller actions map to the underlying GIDS client implementations and whether their payloads were validated during the migration.

| Ask VA Method | GIDS Client | Frontend Usage | Payload Validated |
|---|---|---|---|
| `search` | `.../gi/search_client.rb` | ✅ Yes | ✅ Confirmed |
| `show` | `.../gi/client.rb` | ✅ Yes | ✅ Confirmed |
| `autocomplete` | `.../gi/client.rb` | ⚠️ Not observed | ⛔ Not validated |
| `children` | `.../gi/client.rb` | ⚠️ Not observed | ⛔ Not validated |

---

## Frontend Pagination Limitation

During investigation, an additional frontend behavior was identified that affects how education facility search results are presented to users.

Although the backend may return enough results to support many pages of facilities, the frontend currently caps pagination to **5 pages maximum**.

This limit is implemented in `EducationSearchItem.jsx`:

```javascript
const numberOfPages = facilityData?.meta?.count / 10;
const numberOfPaginationPages =
  numberOfPages > 5 ? 5 : Math.round(numberOfPages);
```

That value is then passed to the pagination component:

```javascript
<VaPagination
  onPageSelect={e => onPageChange(e.detail.page)}
  page={currentPage(facilityData.links?.self)}
  pages={numberOfPaginationPages}
  maxPageListLength={5}
  showLastPage
/>
```

### Impact

This means Ask VA users can navigate through at most **5 pages** of search results in the current frontend implementation, even when the underlying result set is much larger.

Because results are displayed at **10 results per page**, the UI effectively limits discoverability to roughly the first **50 facilities** returned for a search.

This is significantly more restrictive than the GI Bill Comparison Tool, which can expose many more result pages for the same query.

There can also be a difference in results shown to the submitter compared to v0 results.

### Relevance to the Migration

This pagination cap is not introduced by the GIDS v1 migration itself, but it is relevant to understanding why Ask VA search behavior may still differ from the GI Bill Comparison Tool even after aligning both systems to GIDS v1.

In other words:

- Migrating Ask VA from GIDS v0 to v1 helps align the underlying data source
- But frontend pagination limits may still prevent users from seeing the full set of available results

### Follow-Up Consideration

If result parity with the GI Bill Comparison Tool is an important product goal, the frontend pagination cap should be reviewed separately from the backend migration work.

## Sample Payloads

### Single Facility Response
`GET https://staging-api.va.gov/v1/gi/institutions/11902614`
```json
---
http_interactions:
- request:
    method: get
    uri: "<GIDS_URL>/v1/institutions/11902614"
    body:
      encoding: US-ASCII
      string: ''
    headers:
      Accept:
      - application/json
      Content-Type:
      - application/json
      User-Agent:
      - Vets.gov Agent
      Accept-Encoding:
      - gzip;q=1.0,deflate;q=0.6,identity;q=0.3
  response:
    status:
      code: 200
      message: OK
    headers:
      Date:
      - Tue, 10 Mar 2026 21:30:33 GMT
      Content-Type:
      - application/json; charset=utf-8
      Connection:
      - keep-alive
      Cache-Control:
      - no-store
      Expires:
      - 2025-03-10 21:30:22 UTC
      Pragma:
      - no-cache
      X-Content-Type-Options:
      - nosniff
      - nosniff
      X-Frame-Options:
      - SAMEORIGIN
      - SAMEORIGIN
      - deny
      X-Request-Id:
      - 1795c04c-1339-4b30-87ff-c2e06c04bea0
      X-Runtime:
      - '0.125038'
      Referrer-Policy:
      - no-referrer-when-downgrade
      Strict-Transport-Security:
      - max-age=31536000; includeSubDomains; preload
      X-Xss-Protection:
      - 1; report=/csp-report
      Transfer-Encoding:
      - chunked
    body:
      encoding: ASCII-8BIT
      string: '{"data":{"id":"4699898","type":"institutions","attributes":{"name":"PURDUE
        UNIVERSITY-MAIN CAMPUS","facility_code":"11902614","type":"PUBLIC","city":"WEST
        LAFAYETTE","state":"IN","zip":"47906","country":"USA","bah":1770.0,"cross":"243780","flight":false,"correspondence":false,"ope":"00182500","ope6":"01825","school_system_name":"Purdue
        University","school_system_code":118070,"alias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","highest_degree":4,"locale_type":"city","address_1":"101
        N Grant Street","address_2":"Purdue Memorial Union Rm 284","address_3":null,"student_count":1214,"undergrad_enrollment":39637,"yr":true,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"stem_offered":false,"dodmou":true,"sec_702":true,"vet_success_name":null,"vet_success_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":5503660.97,"p911_recipients":700,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"caution_flags":[],"complaints":{"facility_code":2,"financial_by_fac_code":1,"quality_by_fac_code":0,"refund_by_fac_code":0,"marketing_by_fac_code":0,"accreditation_by_fac_code":0,"degree_requirements_by_fac_code":0,"student_loans_by_fac_code":0,"grades_by_fac_code":0,"credit_transfer_by_fac_code":0,"credit_job_by_fac_code":null,"job_by_fac_code":0,"transcript_by_fac_code":0,"other_by_fac_code":2,"main_campus_roll_up":2,"financial_by_ope_id_do_not_sum":1,"quality_by_ope_id_do_not_sum":0,"refund_by_ope_id_do_not_sum":0,"marketing_by_ope_id_do_not_sum":0,"accreditation_by_ope_id_do_not_sum":0,"degree_requirements_by_ope_id_do_not_sum":0,"student_loans_by_ope_id_do_not_sum":0,"grades_by_ope_id_do_not_sum":0,"credit_transfer_by_ope_id_do_not_sum":0,"jobs_by_ope_id_do_not_sum":0,"transcript_by_ope_id_do_not_sum":0,"other_by_ope_id_do_not_sum":2},"school_closing":false,"school_closing_on":null,"school_closing_message":null,"yellow_ribbon_programs":[{"city":"West
        Lafayette","contribution_amount":"7000.0","correspondence":false,"country":"USA","degree_level":"All","display_degree_levels":["Other"],"distance_learning":true,"division_professional_school":"All","facility_code":"11902614","institution_id":4699898,"insturl":"https://www.purdue.edu/","latitude":40.428206,"longitude":-86.914435,"number_of_students":50,"name_of_institution":"PURDUE
        UNIVERSITY-MAIN CAMPUS","online_only":false,"state":"IN","student_veteran":true,"student_veteran_link":null,"ungeocodable":false,"year_of_yr_participation":null}],"independent_study":true,"priority_enrollment":true,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","physical_address_1":"101
        N Grant Street","physical_address_2":"Purdue Memorial Union Rm 284","physical_address_3":null,"physical_city":"WEST
        LAFAYETTE","physical_state":"IN","physical_country":"USA","online_only":false,"distance_learning":true,"dod_bah":1647,"physical_zip":"47906","parent_facility_code_id":null,"campus_type":"Y","vet_tec_provider":false,"preferred_provider":false,"stem_indicator":false,"facility_map":{"main":{"institution":{"id":4699898,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11902614","institution":"PURDUE
        UNIVERSITY-MAIN CAMPUS","city":"WEST LAFAYETTE","state":"IN","zip":"47906","country":"USA","flight":false,"correspondence":false,"bah":1770.0,"cross":"243780","ope":"00182500","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":1214,"undergrad_enrollment":39637,"yr":true,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":5503660.97,"p911_recipients":700,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":2,"complaints_financial_by_fac_code":1,"complaints_quality_by_fac_code":0,"complaints_refund_by_fac_code":0,"complaints_marketing_by_fac_code":0,"complaints_accreditation_by_fac_code":0,"complaints_degree_requirements_by_fac_code":0,"complaints_student_loans_by_fac_code":0,"complaints_grades_by_fac_code":0,"complaints_credit_transfer_by_fac_code":0,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":0,"complaints_transcript_by_fac_code":0,"complaints_other_by_fac_code":2,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":true,"online_only":false,"independent_study":true,"distance_learning":true,"address_1":"101
        N Grant Street","address_2":"Purdue Memorial Union Rm 284","address_3":null,"physical_address_1":"101
        N Grant Street","physical_address_2":"Purdue Memorial Union Rm 284","physical_address_3":null,"physical_city":"WEST
        LAFAYETTE","physical_state":"IN","physical_zip":"47906","physical_country":"USA","dod_bah":1647,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"Y","parent_facility_code_id":null,"version_id":106,"complies_with_sec_103":null,"solely_requires_coe":null,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"No","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        MAIN","rating_count":0,"rating_average":null,"latitude":40.428206,"longitude":-86.914435,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":null,"bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},"branches":[{"institution":{"id":4700036,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11918714","institution":"PURDUE
        POLYTECHNIC-ANDERSON","city":"ANDERSON","state":"IN","zip":"46016","country":"USA","flight":false,"correspondence":false,"bah":1617.0,"cross":"243780","ope":"00182501","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":4,"undergrad_enrollment":39637,"yr":false,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":7571.05,"p911_recipients":2,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":false,"online_only":false,"independent_study":false,"distance_learning":false,"address_1":"1920
        Purdue Parkway","address_2":null,"address_3":null,"physical_address_1":"1920
        Purdue Parkway","physical_address_2":null,"physical_address_3":null,"physical_city":"ANDERSON","physical_state":"IN","physical_zip":"46016","physical_country":"USA","dod_bah":1494,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"N","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":null,"solely_requires_coe":null,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"No","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        POLYTECHNICANDERSON","rating_count":0,"rating_average":null,"latitude":40.1053196,"longitude":-85.6802541,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":"https://www.purdue.edu/registrar/currentStudents/residency/militaryresidency.html","bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},"extensions":[]},{"institution":{"id":4700035,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11918614","institution":"PURDUE
        POLYTECHNIC-COLUMBUS","city":"COLUMBUS","state":"IN","zip":"47203","country":"USA","flight":false,"correspondence":false,"bah":1902.0,"cross":"243780","ope":"00182502","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":11,"undergrad_enrollment":39637,"yr":false,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":28721.31,"p911_recipients":7,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":false,"online_only":false,"independent_study":false,"distance_learning":false,"address_1":"4444
        KELLY ST","address_2":"Suite 1200","address_3":null,"physical_address_1":"4444
        KELLY ST","physical_address_2":"Suite 1200","physical_address_3":null,"physical_city":"COLUMBUS","physical_state":"IN","physical_zip":"47203","physical_country":"USA","dod_bah":1779,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"N","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":null,"solely_requires_coe":null,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"No","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        POLYTECHNICCOLUMBUS","rating_count":0,"rating_average":null,"latitude":40.428206,"longitude":-86.914435,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":"https://www.purdue.edu/registrar/currentStudents/residency/militaryresidency.html","bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},"extensions":[]},{"institution":{"id":4700044,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11919314","institution":"PURDUE
        POLYTECHNIC-INDIANAPOLIS","city":"INDIANAPOLIS","state":"IN","zip":"46241","country":"USA","flight":false,"correspondence":false,"bah":1983.0,"cross":"243780","ope":"00182504","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":4,"undergrad_enrollment":39637,"yr":false,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":4717.04,"p911_recipients":1,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":false,"online_only":false,"independent_study":false,"distance_learning":false,"address_1":"2175
        South Hoffman Road","address_2":null,"address_3":null,"physical_address_1":"2175
        South Hoffman Road","physical_address_2":null,"physical_address_3":null,"physical_city":"INDIANAPOLIS","physical_state":"IN","physical_zip":"46241","physical_country":"USA","dod_bah":1860,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"N","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":true,"solely_requires_coe":true,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"Yes","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        POLYTECHNICINDIANAPOLIS","rating_count":0,"rating_average":null,"latitude":40.428206,"longitude":-86.914435,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":null,"bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},"extensions":[]},{"institution":{"id":4700038,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11918914","institution":"PURDUE
        POLYTECHNIC-KOKOMO","city":"KOKOMO","state":"IN","zip":"46902","country":"USA","flight":false,"correspondence":false,"bah":1581.0,"cross":"243780","ope":"00182505","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":1,"undergrad_enrollment":39637,"yr":false,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":2864.45,"p911_recipients":1,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":false,"online_only":false,"independent_study":false,"distance_learning":true,"address_1":"700
        East Firmin Street","address_2":null,"address_3":null,"physical_address_1":"700
        East Firmin Street","physical_address_2":null,"physical_address_3":null,"physical_city":"KOKOMO","physical_state":"IN","physical_zip":"46902","physical_country":"USA","dod_bah":1458,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"N","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":null,"solely_requires_coe":null,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"No","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        POLYTECHNICKOKOMO","rating_count":0,"rating_average":null,"latitude":40.4682269,"longitude":-86.1231587,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":null,"bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},"extensions":[]},{"institution":{"id":4700037,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11918814","institution":"PURDUE
        POLYTECHNIC-LAFAYETTE","city":"LAFAYETTE","state":"IN","zip":"47905","country":"USA","flight":false,"correspondence":false,"bah":1770.0,"cross":"243780","ope":"00182512","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":1,"undergrad_enrollment":39637,"yr":false,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":null,"p911_recipients":null,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":false,"online_only":false,"independent_study":false,"distance_learning":false,"address_1":"5500
        State Rd 38E","address_2":null,"address_3":null,"physical_address_1":"5500
        State Rd 38E","physical_address_2":null,"physical_address_3":null,"physical_city":"LAFAYETTE","physical_state":"IN","physical_zip":"47905","physical_country":"USA","dod_bah":1647,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"N","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":null,"solely_requires_coe":null,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"No","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        POLYTECHNICLAFAYETTE","rating_count":0,"rating_average":null,"latitude":40.428206,"longitude":-86.914435,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":"https://www.purdue.edu/registrar/currentStudents/residency/militaryresidency.html","bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},"extensions":[]},{"institution":{"id":4700043,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11919214","institution":"PURDUE
        POLYTECHNIC-NEW ALBANY","city":"NEW ALBANY","state":"IN","zip":"47150","country":"USA","flight":false,"correspondence":false,"bah":2073.0,"cross":"243780","ope":"00182508","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":6,"undergrad_enrollment":39637,"yr":false,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":3562.85,"p911_recipients":2,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":false,"online_only":false,"independent_study":false,"distance_learning":true,"address_1":"3000
        Technology Ave","address_2":"Suite 100","address_3":null,"physical_address_1":"3000
        Technology Ave","physical_address_2":"Suite 100","physical_address_3":null,"physical_city":"NEW
        ALBANY","physical_state":"IN","physical_zip":"47150","physical_country":"USA","dod_bah":1950,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"N","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":null,"solely_requires_coe":null,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"No","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        POLYTECHNICNEW ALBANY","rating_count":0,"rating_average":null,"latitude":40.428206,"longitude":-86.914435,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":"https://www.purdue.edu/registrar/currentStudents/residency/militaryresidency.html","bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},"extensions":[]},{"institution":{"id":4700039,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11919014","institution":"PURDUE
        POLYTECHNIC-RICHMOND","city":"RICHMOND","state":"IN","zip":"47374","country":"USA","flight":false,"correspondence":false,"bah":1446.0,"cross":"243780","ope":"00182507","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":4,"undergrad_enrollment":39637,"yr":false,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":null,"p911_recipients":null,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":false,"online_only":false,"independent_study":false,"distance_learning":false,"address_1":"814
        East Main Street","address_2":null,"address_3":null,"physical_address_1":"814
        East Main Street","physical_address_2":null,"physical_address_3":null,"physical_city":"RICHMOND","physical_state":"IN","physical_zip":"47374","physical_country":"USA","dod_bah":1323,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"N","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":null,"solely_requires_coe":null,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"No","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        POLYTECHNICRICHMOND","rating_count":0,"rating_average":null,"latitude":39.8291651,"longitude":-84.8910574,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":"https://www.purdue.edu/registrar/currentStudents/residency/militaryresidency.html","bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},"extensions":[]},{"institution":{"id":4700041,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11919114","institution":"PURDUE
        POLYTECHNIC-SOUTH BEND","city":"SOUTH BEND","state":"IN","zip":"46601","country":"USA","flight":false,"correspondence":false,"bah":1644.0,"cross":"243780","ope":"00181310","ope6":"01813","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":2,"undergrad_enrollment":39637,"yr":false,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":12878.32,"p911_recipients":2,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":1,"complaints_financial_by_ope_id_do_not_sum":0,"complaints_quality_by_ope_id_do_not_sum":1,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":1,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":1,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":1,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":false,"online_only":false,"independent_study":false,"distance_learning":false,"address_1":"635
        South Lafayette Boulevard","address_2":"Suite 128","address_3":null,"physical_address_1":"635
        South Lafayette Boulevard S","physical_address_2":"Suite 128","physical_address_3":null,"physical_city":"SOUTH
        BEND","physical_state":"IN","physical_zip":"46601","physical_country":"USA","dod_bah":1521,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"N","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":null,"solely_requires_coe":null,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"No","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        POLYTECHNICSOUTH BEND","rating_count":0,"rating_average":null,"latitude":41.6682833,"longitude":-86.2554174,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":null,"bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},"extensions":[]},{"institution":{"id":4700045,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11919414","institution":"PURDUE
        POLYTECHNIC-VINCENNES","city":"VINCENNES","state":"IN","zip":"47591","country":"USA","flight":false,"correspondence":false,"bah":1431.0,"cross":"243780","ope":"00182515","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":1,"undergrad_enrollment":39637,"yr":false,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":null,"p911_recipients":null,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":false,"online_only":false,"independent_study":false,"distance_learning":false,"address_1":"1002
        N 1st Street Building TB10","address_2":null,"address_3":null,"physical_address_1":"1002
        N 1st Street Building TB10","physical_address_2":null,"physical_address_3":null,"physical_city":"VINCENNES","physical_state":"IN","physical_zip":"47591","physical_country":"USA","dod_bah":1308,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"N","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":true,"solely_requires_coe":true,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"Yes","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        POLYTECHNICVINCENNES","rating_count":0,"rating_average":null,"latitude":40.428206,"longitude":-86.914435,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":null,"bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},"extensions":[]}],"extensions":[{"id":4702510,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11X22814","institution":"PURDUE
        RESEARCH PARK- IMI- INDIANA MANUFACTURING INSTITUTE","city":"WEST LAFAYETTE","state":"IN","zip":"47906","country":"USA","flight":false,"correspondence":false,"bah":1770.0,"cross":"243780","ope":"00182500","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":null,"undergrad_enrollment":39637,"yr":true,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":null,"p911_recipients":null,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":true,"online_only":false,"independent_study":true,"distance_learning":true,"address_1":"101
        N Grant Street","address_2":"Purdue Memorial Union Rm 284","address_3":null,"physical_address_1":"1281
        WIN HENTSCHEL BLVD","physical_address_2":null,"physical_address_3":null,"physical_city":"WEST
        LAFAYETTE","physical_state":"IN","physical_zip":"47906","physical_country":"USA","dod_bah":1647,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"E","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":null,"solely_requires_coe":null,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"No","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        RESEARCH PARK IMI INDIANA MANUFACTURING","rating_count":0,"rating_average":null,"latitude":null,"longitude":null,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":null,"bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null},{"id":4702514,"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false},"institution_type_name":"PUBLIC","facility_code":"11X22914","institution":"PURDUE
        RESEARCH PARK- ROSS ENTERPRISE CENTER","city":"WEST LAFAYETTE","state":"IN","zip":"47906","country":"USA","flight":false,"correspondence":false,"bah":1770.0,"cross":"243780","ope":"00182500","ope6":"01825","insturl":"https://www.purdue.edu/","vet_tuition_policy_url":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","pred_degree_awarded":3,"locale":13,"gibill":null,"undergrad_enrollment":39637,"yr":true,"student_veteran":true,"student_veteran_link":null,"poe":true,"eight_keys":true,"dodmou":true,"sec_702":true,"vetsuccess_name":null,"vetsuccess_email":null,"credit_for_mil_training":true,"vet_poc":true,"student_vet_grp_ipeds":true,"soc_member":true,"va_highest_degree_offered":"4-year","retention_rate_veteran_ba":null,"retention_all_students_ba":0.9203,"retention_rate_veteran_otb":null,"retention_all_students_otb":null,"persistance_rate_veteran_ba":null,"persistance_rate_veteran_otb":null,"graduation_rate_veteran":null,"graduation_rate_all_students":0.8307,"transfer_out_rate_veteran":null,"transfer_out_rate_all_students":null,"salary_all_students":72424.0,"repayment_rate_all_students":0.7809330629,"avg_stu_loan_debt":19500.0,"calendar":"semesters","tuition_in_state":9992,"tuition_out_of_state":28794,"books":1030,"online_all":true,"p911_tuition_fees":null,"p911_recipients":null,"p911_yellow_ribbon":null,"p911_yr_recipients":null,"accredited":true,"accreditation_type":null,"accreditation_status":null,"caution_flag":null,"caution_flag_reason":null,"complaints_facility_code":null,"complaints_financial_by_fac_code":null,"complaints_quality_by_fac_code":null,"complaints_refund_by_fac_code":null,"complaints_marketing_by_fac_code":null,"complaints_accreditation_by_fac_code":null,"complaints_degree_requirements_by_fac_code":null,"complaints_student_loans_by_fac_code":null,"complaints_grades_by_fac_code":null,"complaints_credit_transfer_by_fac_code":null,"complaints_credit_job_by_fac_code":null,"complaints_job_by_fac_code":null,"complaints_transcript_by_fac_code":null,"complaints_other_by_fac_code":null,"complaints_main_campus_roll_up":2,"complaints_financial_by_ope_id_do_not_sum":1,"complaints_quality_by_ope_id_do_not_sum":0,"complaints_refund_by_ope_id_do_not_sum":0,"complaints_marketing_by_ope_id_do_not_sum":0,"complaints_accreditation_by_ope_id_do_not_sum":0,"complaints_degree_requirements_by_ope_id_do_not_sum":0,"complaints_student_loans_by_ope_id_do_not_sum":0,"complaints_grades_by_ope_id_do_not_sum":0,"complaints_credit_transfer_by_ope_id_do_not_sum":0,"complaints_jobs_by_ope_id_do_not_sum":0,"complaints_transcript_by_ope_id_do_not_sum":0,"complaints_other_by_ope_id_do_not_sum":2,"created_at":"2026-01-16T04:39:42.000Z","updated_at":"2026-01-16T04:39:42.000Z","f1sysnam":"Purdue
        University","f1syscod":118070,"ialias":"Purdue-West Lafayette|Purdue|PU|Purdue-WL","approval_status":null,"school_closing":false,"school_closing_on":null,"school_closing_message":null,"stem_offered":false,"priority_enrollment":true,"online_only":false,"independent_study":true,"distance_learning":true,"address_1":"101
        N Grant Street","address_2":"Purdue Memorial Union Rm 284","address_3":null,"physical_address_1":"3495
        KENT AVE","physical_address_2":null,"physical_address_3":null,"physical_city":"WEST
        LAFAYETTE","physical_state":"IN","physical_zip":"47906","physical_country":"USA","dod_bah":1647,"approved":true,"vet_tec_provider":false,"closure109":null,"preferred_provider":false,"stem_indicator":false,"campus_type":"E","parent_facility_code_id":"11902614","version_id":106,"complies_with_sec_103":null,"solely_requires_coe":null,"requires_coe_and_criteria":null,"count_of_caution_flags":0,"section_103_message":"No","poo_status":"APRVD","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"institution_search":"PURDUE
        RESEARCH PARK ROSS ENTERPRISE","rating_count":0,"rating_average":null,"latitude":null,"longitude":null,"employer_provider":false,"school_provider":true,"vrrap":null,"in_state_tuition_information":null,"bad_address":false,"high_school":null,"chief_officer":null,"ownership_name":null,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"ungeocodable":false,"distance":null}]}},"programs":[],"program_types":["IHL","NCD"],"versioned_school_certifying_officials":[{"id":287626,"facility_code":"11902614","institution_name":"PURDUE
        UNIVERSITY-MAIN CAMPUS","priority":"Primary","first_name":"REDACTED","last_name":"REDACTED","title":"Military
        Education Benefits Ma","phone_area_code":"000","phone_number":"000-0000","phone_extension":null,"email":"redacted1@example.com","version":null,"institution_id":4699898},{"id":287630,"facility_code":"11902614","institution_name":"PURDUE
        UNIVERSITY-MAIN CAMPUS","priority":"Secondary","first_name":"REDACTED","last_name":"REDACTED","title":"VA
        School Certifying Official","phone_area_code":"000","phone_number":"000-0000","phone_extension":null,"email":"redacted2@example.com","version":null,"institution_id":4699898},{"id":287629,"facility_code":"11902614","institution_name":"PURDUE
        UNIVERSITY-MAIN CAMPUS","priority":"Secondary","first_name":"REDACTED","last_name":"REDACTED","title":"Read
        Only SCO","phone_area_code":null,"phone_number":null,"phone_extension":null,"email":null,"version":null,"institution_id":4699898},{"id":287628,"facility_code":"11902614","institution_name":"PURDUE
        UNIVERSITY-MAIN CAMPUS","priority":"Secondary","first_name":"REDACTED","last_name":"REDACTED","title":"VA
        School Certifying Official","phone_area_code":"000","phone_number":"000-0000","phone_extension":null,"email":"redacted3@example.com","version":null,"institution_id":4699898},{"id":287627,"facility_code":"11902614","institution_name":"PURDUE
        UNIVERSITY-MAIN CAMPUS","priority":"Secondary","first_name":"REDACTED","last_name":"REDACTED","title":"VA
        School Certifying Official","phone_area_code":"000","phone_number":"000-0000","phone_extension":null,"email":"redacted4@example.com","version":null,"institution_id":4699898}],"count_of_caution_flags":0,"section_103_message":"No","hbcu":0,"hcm2":0,"menonly":0,"pctfloan":0.2321,"relaffil":null,"womenonly":0,"hsi":0,"nanti":0,"annhi":0,"aanapii":0,"pbi":0,"tribal":0,"institution_rating":null,"rating_average":null,"rating_count":0,"in_state_tuition_information":null,"vrrap":null,"ownership_name":null,"all_facility_code_complaints":[{"ope":"00182500","ope6":"01825","closed":"2023-06-06","facility_code":"11902614","categories":["financial","other"]},{"ope":"00182500","ope6":"01825","closed":"2023-09-13","facility_code":"11902614","categories":["other"]}],"all_ope6_complaints":[{"ope":"00182500","ope6":"01825","closed":"2023-06-06","facility_code":"11902614","categories":["financial","other"]},{"ope":"00182500","ope6":"01825","closed":"2023-09-13","facility_code":"11902614","categories":["other"]}]},"links":{"website":"https://www.purdue.edu/","scorecard":"https://collegescorecard.ed.gov/school/?243780-purdue-university-main-campus","vet_website_link":"https://www.purdue.edu/registrar/currentStudents/residency/index.html","self":"https://dev-platform-api.va.gov/gids/v0/institutions/11902614"}},"links":{"self":"https://dev-platform-api.va.gov/gids/v1/institutions/11902614"},"meta":{"version":{"number":79,"created_at":"2026-01-16T04:39:42.700Z","preview":false}}}'
  recorded_at: Tue, 10 Mar 2026 21:30:33 GMT
recorded_with: VCR 6.4.0
```
