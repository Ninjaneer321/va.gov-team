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
