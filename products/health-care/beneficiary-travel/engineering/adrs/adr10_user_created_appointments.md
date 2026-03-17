# User Created Appointments Investigation and Analysis
Throughout this document we will discuss various user created appointment issues that we have ran into, our investigation of those issues and how we have chosen to resolve them.

## Investigation into how we will show a list of facilities to the user for a user created appointment

### Status
In Progress - 2026-03-17

### Context
In order for a veteran to create a user created appointment via the BTSSS API they have to select a facility. There are several ways that we can go about getting a list of facilities.

### Findings from Stakeholder Alignment Meeting

Through discussions with stakeholders and follow-up investigation, we identified the following key details about available data sources:

- **Lighthouse API**
  - Provides a facilities endpoint backed by multiple data sources.
  - Includes **all VA facilities**, not just parent facilities as initially assumed.
  - Covers both:
    - Parent VA facilities (~175)
    - Non–community care child facilities
  - This corrected our earlier understanding that it only returned parent facilities.

- **PPMS (Provider Profile Management System)**
  - A data warehouse containing **Community Care providers and services**.
  - Identified via stakeholder conversations.
  - Limitations:
    - Only returns community care providers (not all facilities)
    - Facility identifiers (station numbers) may **not map 1:1 with BTSSS**
  - Requires further validation before it can be relied upon; Peri and Steven are going to investigate further

- **CXI (BTSSS Data Source)**
  - The system currently used by BTSSS for facility data.
  - Likely contains the **most complete and accurate dataset**.
  - Risk:
    - Access may be difficult to obtain
    - No known public-facing API currently available to us
  - Mark is going to follow up with them
---

### Options Considered

1. **Leverage CXI Data (Preferred if feasible)**
   - Coordinate with CXI stakeholders to:
     - Provide equivalent data to the BTSSS `GET Facilities` endpoint
     - Potentially expose a new API endpoint
   - Pros:
     - Most accurate and complete dataset
   - Cons:
     - Dependency on external team
     - Uncertain feasibility and timeline

2. **Create a New API Endpoint in BTSSS API (Derived from Lighthouse Parent Facilities)**
   - Use Lighthouse to retrieve parent facilities
   - The API Team `builds a new API endpoint` that:
     - Accepts facility name or station number
     - Returns related facilities (including children cc and non-cc)
   - Pros:
     - Controlled and tailored to our needs
     - Avoids reliance on incomplete datasets
   - Cons:
     - Requires API team effort
     - May require additional data stitching

3. **Combine Lighthouse + PPMS (Zip Code Filtering Approach)**
   - Use both APIs together:
     - Filter by facility zip code
     - Return combined results to FE
   - Pros:
     - Leverages existing APIs
   - Cons:
     - Data inconsistency risk (non 1:1 identifiers)
       -  **Further confirmed that this is an issue on 3/17/2026 and the BTSSS station number is not in PPMS**
     - Incomplete facility coverage
     - Increased complexity in FE and BE

4. **Enhance Existing Facilities Endpoint in BTSSS API (Filtering Support)**
   - The API Team updates the current `GET facilities` endpoint to support:
     - Filtering by facility name
     - Filtering by station number
     - Returning pages of a 5000 record max, instead of 50 record max
   - Pros:
     - Minimal disruption to existing architecture
     - Improves usability of current API
   - Cons:
     - Depends on completeness of underlying dataset
     - Requires API team effort

5. **Full Dataset Caching Strategy (Least Preferred)**
   - The API Team increases the `GET facilities` endpoint API response limit (e.g., 5000 records/page)
   - Run a scheduled job to:
     - Fetch all facilities daily
     - Cache locally keyed by name/station number
   - Pros:
     - Fast FE lookup after caching
   - Cons:
     - High performance risk
     - Data staleness concerns
     - Increased maintenance burden
     - Not scalable

---

### Decision
_In progress_

We are currently evaluating the feasibility of obtaining facility data directly from CXI.  
If that is not viable, we will likely pursue enhancing or extending existing API capabilities to support filtering by facility name and station number.

---

### Consequences

- Additional coordination may be required with:
  - CXI stakeholders
  - Lighthouse/API teams
  - Discussions with additional stakeholders (Kay, Kristen, Daryl)
- Data consistency (especially around station numbers) remains a key risk
- Some solutions may introduce performance or maintenance overhead
- Final approach must balance:
  - Data completeness
  - Performance
  - Implementation complexity




