# Discovery: Facilities, Community Care, and Veteran-Created Appointments

## TL;DR

When creating a community care appointment via `POST /api/v5/appointments/find-or-add`, pass the **community care facility's station number** (e.g., `688CC00001`) as `FacilityStationNumber` -- not the veteran's home facility or the parent/obligation facility.

| Field | What to pass | Why |
|-------|-------------|-----|
| `FacilityStationNumber` | The CC facility (e.g., `688CC00001`) | Links the appointment to the correct facility. Drives payment routing via the facility's `ObligationFacility` in CRM. |
| `FacilityName` | The CC facility's name | Required for the facility lookup (`GetFacilityByStationNumberOrNameAsync` matches on either). |
| `IsCommunityCare` | `true` | Triggers the naming convention: `"Customer created appointment {homeFacilityCode} Community Care"`. The home facility code is fetched from the veteran's contact record -- the consumer does not need to provide it. |

- **`IsCommunityCare`** only affects the appointment **name**. It does not affect facility linkage or payment routing.
- **Payment routing** is determined by the appointment's facility -> `ObligationFacility` chain in CRM. If the CC facility in Florida (`688CC00001`) has `ObligationFacility` pointing to the Florida VAMC (`688`), the Florida VAMC is the payment facility -- regardless of where the veteran's home facility is.
- **The consumer must know the specific CC facility.** The current `/api/v3/facilities` endpoint provides no way to filter by station number pattern, identify CC facilities, or discover parent-child relationships.

---

## Context

In order for a veteran to create a user-created appointment via the BTSSS API, they have to select a facility. This document explores how facilities, community care, and appointments relate in the current API, identifies gaps, and documents findings for downstream consumers.

---

## 1. Community Care and the "CC" Station Number Pattern

### Finding: "CC" does not appear in station number logic anywhere in the codebase

The expected convention for community care child facilities is a station number matching the pattern `^\d{3}CC\d{5}$` (e.g., `688CC00001`), where the first 3 digits are the parent VA facility's station number. However, **the BTSSS API has no awareness of this pattern**.

- **`Facility` entity** (`src/VA.BTSSS.Entities/Facility.cs`): `StationNumber` is a plain `string` with no validation, parsing, or pattern matching.
- **`FacilitySummaryDto`** and **`FacilityDto`**: No community care flag or parent facility reference is exposed.
- **`FacilityService`**: All queries treat station numbers as opaque strings with exact-match lookups. No prefix/pattern filtering exists.

### Where "Community Care" DOES appear: Appointment names

Community care is identified at the **appointment level**, not the facility level:

- **`Appointment.IsCommunityCareAppointment`** (`src/VA.BTSSS.Entities/Appointment.cs:92-98`):
  ```csharp
  public bool IsCommunityCareAppointment
  {
      get
      {
          return AppointmentName.Contains("Comm", StringComparison.OrdinalIgnoreCase)
                  || AppointmentName.Contains("CC", StringComparison.OrdinalIgnoreCase);
      }
  }
  ```
  This is a **string-based heuristic on the appointment name**, not the station number. It checks if the appointment name contains "Comm" or "CC". This means:
  - A facility with station number `688CC00001` would **not** be flagged as community care by this logic (it checks the appointment name, not the station number).
  - Any appointment whose name happens to contain "CC" or "Comm" (even coincidentally) would be flagged as community care.

- **Appointment naming convention** (`src/Api/Endpoints/Appointments/v5/AppointmentsController.cs:141-142`): When `IsCommunityCare` is `true` on the request, the appointment name is set to:
  ```
  "Customer created appointment {homeFacilityCode} Community Care"
  ```
  Where `homeFacilityCode` is the veteran's **home facility station number** (e.g., `688`), not the community care facility's station number.

### Summary

| Where | "CC" in station number? | Community care flag? |
|-------|------------------------|---------------------|
| `Facility` entity | No pattern matching | No flag |
| `FacilitySummaryDto` (list API) | No | No |
| `FacilityDto` (detail) | No | No |
| `Appointment` entity | Not checked | `IsCommunityCareAppointment` (checks appointment **name** for "Comm" or "CC") |
| `FindOrAddAppointmentRequestDto` | Not checked | `IsCommunityCare` boolean on request |

---

## 2. `POST /api/v5/appointments/find-or-add`

### Purpose

Finds an existing appointment or creates a new one for the authenticated veteran. This is the primary endpoint for veteran-created appointments.

### Flow

1. **Search** for an existing appointment matching the facility station number and appointment date.
2. If found, **return** the existing appointment(s).
3. If not found, **look up the facility** by station number or name (`GetFacilityByStationNumberOrNameAsync`).
4. **Generate the appointment name**:
   - If `IsCommunityCare == true`: fetches the veteran's contact record, gets their **home facility** station number, and names the appointment `"Customer created appointment {homeFacilityCode} Community Care"`.
   - If `IsCommunityCare == false` and no custom name provided: names it `"Customer created appointment at {facilityName}"`.
   - If a custom `AppointmentName` is provided: uses it as-is.
5. **Create** the appointment in CRM linked to the facility.
6. **Retrieve and return** the newly created appointment.

### Request

```
POST /api/v5/appointments/find-or-add
X-Correlation-ID: {uuid}
Authorization: Bearer {token}
```

Query parameters (via `FindOrAddAppointmentApiRequest`):

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `AppointmentData.AppointmentName` | string | Yes* | Name of the appointment (5-100 chars). If omitted, system-generated. |
| `AppointmentData.AppointmentDateTime` | datetime | Yes | Date/time of the appointment. |
| `AppointmentData.FacilityStationNumber` | string | Yes | Station number of the facility. |
| `AppointmentData.FacilityName` | string | Yes | Name of the facility. |
| `AppointmentData.AppointmentType` | enum | No | Defaults to `Other`. |
| `AppointmentData.IsComplete` | bool | No | Whether the appointment is completed. |
| `AppointmentData.IsCommunityCare` | bool | No | If true, appointment is named using veteran's home facility + "Community Care". |
| `pageNumber` | int | No | Default: 1. |
| `pageSize` | int | No | Default: 25, max: 50. |
| `sortField` | string | No | Field name to sort by. |
| `sortDirection` | enum | No | `None`, `Ascending`, `Descending`. |

### Key Observations

- The caller must provide **both** `FacilityStationNumber` and `FacilityName`. The facility lookup uses `GetFacilityByStationNumberOrNameAsync`, which matches on either field but requires both to be present.
- When `IsCommunityCare` is true, the **home facility code** (from the veteran's contact record) is embedded in the appointment name -- not the community care facility's station number.
- The facility used for the appointment is still the one matched by `FacilityStationNumber` / `FacilityName` (the community care facility), but the **naming** references the home facility.

---

## 3. `GET /api/v3/facilities`

### Purpose

Returns a paginated, sortable list of all active facilities.

### Request

```
GET /api/v3/facilities
X-Correlation-ID: {uuid}
Authorization: Bearer {token}
```

Query parameters:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `pageNumber` | int | No | 1 | Page number. |
| `pageSize` | int | No | 25 | Records per page (max 50). |
| `sortField` | string | No | `name` | Property name to sort by (`name`, `stationNumber`, `city`, `stateOrProvince`). |
| `sortDirection` | enum | No | `Ascending` | `None`, `Ascending`, `Descending`. |

### Response

```json
{
  "correlationId": "uuid",
  "timeStamp": "2026-03-18T12:00:00Z",
  "statusCode": 200,
  "message": "",
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "VA Medical Center - Washington",
      "stationNumber": "688",
      "city": "Washington",
      "stateOrProvince": "DC"
    }
  ],
  "pageNumber": 1,
  "pageSize": 25,
  "totalRecordCount": 100
}
```

### Limitations

- **No filtering**: There is no way to filter by station number, name, city, or any other field. The endpoint returns all facilities with pagination only.
- **No search**: No substring or pattern matching (e.g., cannot query "all facilities where station number starts with 688").
- **No community care indicator**: The `FacilitySummaryDto` does not include any flag or relationship indicating whether a facility is a community care child.
- **No parent/child relationship exposed**: The `ObligationFacility` (parent facility) relationship exists on the full `Facility` entity but is **not included** in the list endpoint's `FacilitySummary` query model.
- **No single-facility GET**: `IFacilityService` has `GetFacilityByIdAsync` and `GetFacilityByStationNumberAsync` methods, but these are not exposed as API endpoints. They are only used internally by other services (appointments, claims, expenses).

### Consequence for Consumers

A client that needs to present a facility picker for community care must:
1. Fetch all facilities by paging through the entire list.
2. Client-side filter for station numbers matching the `^\d{3}CC\d{5}$` pattern (or any other convention).
3. Client-side associate children to parents by matching the 3-digit prefix.

---

## 4. Home Facility, Community Care, and Appointments

### Home Facility (Preferred Facility)

- Stored on the veteran's **Contact** record in CRM as `btsss_PreferredFacility`.
- Mapped to `Contact.HomeFacility` in code (`src/VA.BTSSS.Entities/Contact.cs:79-80`).
- This is the veteran's primary VA medical center (e.g., station number `688`).
- Used when creating community care appointments to embed the home facility code in the appointment name.

### Obligation Facility (Parent Facility)

- Stored on the **Facility** record in CRM as `btsss_ObligationFacility`.
- A self-referential relationship: a facility's `ObligationFacility` points to its parent.
- **Primary use case -- claim payment routing** (`src/VA.BTSSS.Common/Claims/CrmModel/CrmCreateClaimContentFactory.cs:24-26`):
  ```csharp
  // use the appointment facility's obligation facility, if defined, as the claim's payment facility;
  //  otherwise, just use the appointment's facility
  ["btsss_PaymentFacility@odata.bind"] =
      $"/btsss_facilities({appointment.Facility?.ObligationFacility?.Id ?? appointment.Facility?.Id})"
  ```
  This means community care child facilities route payments back to their parent (obligation) facility.
- Queried via `$expand=btsss_ObligationFacility` in facility detail lookups, appointment queries, claim queries, and expense queries.
- **Not exposed** in the facilities list endpoint.

### How It All Connects

```
Veteran (Contact)
  |
  +-- HomeFacility (btsss_PreferredFacility) --> Facility (e.g., "688")
                                                    |
                                                    +-- ObligationFacility (self, for child facilities)

Appointment
  |
  +-- Facility --> e.g., "688CC00001" (community care child)
  |                  |
  |                  +-- ObligationFacility --> "688" (parent, used for payment routing)
  |
  +-- AppointmentName: "Customer created appointment 688 Community Care"
  |
  +-- IsCommunityCareAppointment: true (because name contains "Comm" or "CC")
```

### Gaps Identified

1. **No facility filtering endpoint**: Consumers cannot query for a specific facility or a set of facilities by station number pattern. The only option is full pagination.
2. **No community care flag on facilities**: The API does not expose whether a facility is a community care child. This must be inferred client-side from the station number pattern.
3. **No parent-child relationship in facility list**: `ObligationFacility` is not returned by `GET /api/v3/facilities`, so consumers cannot determine parent-child relationships from the list endpoint.
4. **Community care detection is fragile**: `IsCommunityCareAppointment` relies on substring matching ("Comm" or "CC") in the appointment name, which could produce false positives or miss appointments that don't follow the naming convention.
5. **No single-facility endpoint**: Despite service methods existing for `GetFacilityByIdAsync` and `GetFacilityByStationNumberAsync`, these are not exposed as API endpoints.
