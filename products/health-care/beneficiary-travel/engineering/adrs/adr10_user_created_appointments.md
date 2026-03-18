# User Created Appointments Investigation and Analysis
Throughout this document we will discuss various user created appointment issues that we have ran into, our investigation of those issues and how we have chosen to resolve them.

## Investigation into how we will show a list of facilities to the user for a user created appointment

### Status
In Progress - 2026-03-17

### Context
In order for a veteran to create a user created appointment via the BTSSS API they have to select a facility. There are several ways that we can go about getting a list of facilities.

---
### Findings from Stakeholder Alignment Meeting (3/16/2026)

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
### Findings from BTSSS Cross-Functional Working Session Meeting (3/17/2026)

Through the cross-functional discussions, the team identified several key decisions, assumptions, and open questions related to user-created appointments.

#### Appointment Type Handling

- **Current Direction**
  - Do **not display appointment type in the FE**
  - Default to sending `"Other"` as the appointment type in the BE

- **Open Concern**
  - Users may want to enter a specific appointment type
  - Could impact **auto-adjudication rates**
  - Daryl will discuss with leadership before finalizing

- **Clarifications**
  - Labs appointments → `"Other"` in backend

#### Appointment Name Guidance

- **Appointment Name** field should contain:
  - A **description of the appointment**

#### Facility Knowledge & Veteran Experience

- Veterans **should know** their:
  - Facility name (from official VA letters)
  - Facility zip code (from official VA letters)
- Veterans **do not know** their facility station number
  - This is not shown in the FE dropdown

#### Facility Selection Constraints

- Every veteran has:
  - A **home facility**
  - A **preferred facility**
- These values **may differ**
  - Clerks must manually correct records in a monthly check
  - Corrections are based on BTSSS portal investigation
- **Current Direction**
  - Only show **child facilities and the home facility** associated with the veterans home facility
  - Do not expose all facilities
- **Open Question**
  - How do we programmatically get the home facility?  
    - API Team investigated this afterwards and they do not currently return the home facility to us. Ken said that they could update the user contact endpoint to return the  home facility

#### Timing & Process Notes

- Facilities are added for veterans **immediately when clerks save them**
- Veterans should know facility name and zip code; station number is hidden

#### Risks / Considerations

- Hiding appointment type may:
  - Simplify the FE experience
  - Negatively impact auto-adjudication rates

- Data inconsistencies between:
  - Home facility
  - Preferred facility
  - Must be monitored to prevent errors in facility selection
  - A parent facility cannot become a child facility of another parent facility.
    - Ex: If my home facility is `Idaho VAMC` and I go to New York for an appointment and the appointment is at a `New York VAMC`. Then the when I get home and make a user created appointment I will only see the children facilities for `Idaho VAMC` and not for  `New York VAMC` so I will have to call a clerk and they will change my home facility to the  `New York VAMC`. This is a temporary change so that I can make this appointment and claim.
    - Now if my appointment is instead in a New York child facility like `New York Test 123 CC` then when I get home to make a user created appointment I will only see the children facilities for `Idaho VAMC` and not for  `New York VAMC` so I will have to call a clerk and they will create a new child facility for my home facility called  ``New York Test 123 CC` and the station number will have the first 3 as my home facility (home: 550, new child: 550CC123nunfw. Then when I log back in to make an appointment I will see the new faciliity in my list.

---

### Findings from slack conversations

What is the largest count of "children" facilities for a given VAMC aka "parent" facility?
- NASHVILLE VA MEDICAL CENTER - 3123 records

What is the smallest count of "children" facilities for a given VAMC aka "parent" facility?
- Over 20 VAMCs have a count of 1 record

The BTSSS system has a field called `btsss_preferredfacility` which correlates to the `home facility` and `btsss_preferredfacility2` which correlates to the `preferred facility`.

What is the smallest character facility name?
- 2 characters

How many characters should be required for a filtering on facility name?
- at least 2 

___

### Options considered for how to determine the facilities list
Per our meeting on 3/17/2026 we now know that we will need to determine a given veterans home facility. The API Team will need to update their logic for the `GET Contact` endpoint so that the response returns a `homeFacility`.

```
// Example of desired response from /api/v3/contacts/{contactId}
{
  "correlationId": "string",
  "timeStamp": "2026-03-17T18:19:34.597Z",
  "statusCode": 0,
  "message": "string",
  "success": true,
  "data": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "firstName": "string",
    "lastName": "string",
    "isVeteran": true,
    "isCareGiver": true,
    "homeFacility": {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "string",
      "stationNumber": "string",
      "city": "string",
      "stateOrProvince": "string"
    }
  }
}
```

Once the above change occurs and we have a way to determine the home facility we can then consider the following approaches for getting the list of facilities:



1. **Leverage CXI Data (Preferred if feasible)**
   - Coordinate with CXI stakeholders to:
     - Provide equivalent data to the BTSSS `GET Facilities` endpoint
     - Potentially expose a new API endpoint
   - Pull all facilities (parent + children) from CXI.
   - Use the **veteran’s `homeFacility` as the starting point** as well as the ability to pass in a **facility name** to filter:
     - Only show child facilities for the home facility in the FE.
   - Pros:
     - Most accurate and complete dataset
     - Aligns with FE constraints (child facilities only)
     - Reduces reliance on zip code or veteran input
   - Cons:
     - Dependency on CXI team
     - Timeline uncertainty
   - **Outstanding Questions**:
     - Need to confirm that CXI has all children facilities; the CC and non-CC facilities

2. **Create a New API Endpoint in BTSSS API (Derived from new `GET Contact` endpoint that returns the home facility)**
   - Use home facility data that is returned from the new `GET Contact` endpoint
   - The API Team `builds a new API GET facilities endpoint` that:
     - Filters on **homeFacility station number**
     - Filters on **facility name** for the station that they are looking for
     - Returns related facilities (including children cc and non-cc) for the given home facility
     - Support paging up to 5000 records max, instead of 50 record max
   - Pros:
     - Tailored to veteran’s home facility
     - Avoids incomplete datasets
     - Could repurpose the current endpoint for `GET facilities` and just add new filter fields
   - Cons:
     - Requires API team effort
     - Still requires filtering by home facility
   - **Outstanding Questions**:
     - What is the smallest character facility name?
     - How many characters should be required for a filtering on facility name?
     - Regarding this option how often can we hit this endpoint? Should there be a limit on the data returned?

3. **Combine Lighthouse + PPMS (Home Facility Filtering Approach) – No Longer Viable**
   - Use both APIs together: Lighthouse + PPMS
    - Filter **only child facilities associated with veteran’s home facility**
    - Per investigation into PPMS found the following:
     - PPMS does **not have BTSSS station numbers**, so we cannot reliably map child facilities to a veteran’s home facility.
     - PPMS has a 10 digit id for facilities that looks like this `1144688854` where as BTSSS returns guids for the facility id that look like this `e5e2ca33-7f04-ee11-8f6d-001dd806ee99`. There is no way to match up PPMS data to BTSSS so that we could even get the station id
    - Return combined results to FE
   - Pros:
     - N/A
   - Cons:
     - Cannot ensure accurate child facility mapping
       -  ** Confirmed that this is an issue on 3/17/2026 and the BTSSS station number is not in PPMS**
     - Data inconsistencies make this approach unreliable
     - Increased FE/BE complexity without benefit

4. **Full Dataset Caching Strategy (Least Preferred)**
   - The API Team increases the `GET facilities` endpoint API response limit (e.g., 5000 records/page)
   - Run a scheduled job to:
     - Fetch all facilities daily
     - Cache locally keyed by name/station number
   - FE filters cached facilities by
     - **veteran’s home facility** and **facility name** to return child facilities only
   - Pros:
     - Fast FE lookup after caching
     - Allows pre-filtering by home facility
   - Cons:
     - High performance risk
     - Data staleness concerns (if a clerk adds a new facility it will take 24 hours for the veteran to see that change)
     - Increased maintenance burden
     - Must enforce child-only filtering in cache

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




