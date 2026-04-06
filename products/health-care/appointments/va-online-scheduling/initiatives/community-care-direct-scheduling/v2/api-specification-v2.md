# Community Care & VA Direct Schedule API Specification

This document describes the API specifications for CC & VA direct scheduling expansion, defining the request/response structures between vets-website and vets-api. All endpoints serve both VA and community care (CC) scheduling. The backend routes to the appropriate upstream service based on the referral and provider type.

**Design Principles:**
- All endpoints serve both VA and CC care. Responses include a `careType` field (`"VA"` or `"CC"`) so the frontend knows which scheduling path applies.
- Consistent JSON:API-style envelope: `{ data: { id, type, attributes } }` for single resources, `{ data: [...] }` for collections.
- Standard error envelope: `{ errors: [{ title, detail, code, status }] }`.
- All requests require standard VA.gov session authentication (SSOe / IAM).

## Endpoint Summary

| Method | Path | Description | Status |
|--------|------|-------------|--------|
| [GET](#get-vaosv2referrals) | `/vaos/v2/referrals` | Fetches the list of active referrals for the authenticated Veteran | Exists -- v2 adds `careType` |
| [GET](#get-vaosv2referralsreferralid) | `/vaos/v2/referrals/{referralId}` | Fetches full details for a single referral | Exists -- v2 adds `careType` |
| [GET](#get-vaosv2referralsreferralidproviders) | `/vaos/v2/referrals/{referralId}/providers` | Fetches available VA and CC providers for a referral | **New** |
| [POST](#post-vaosv2appointmentsdraft) | `/vaos/v2/appointments/draft` | Creates a draft appointment and returns available slots for a provider | Modified -- now takes `referral_id` + `provider_id` |
| [POST](#post-vaosv2appointmentssubmit) | `/vaos/v2/appointments/submit` | Submits a draft appointment for booking | Exists -- now serves VA and CC |
| [GET](#get-vaosv2appointmentsappointmentid) | `/vaos/v2/appointments/{appointmentId}` | Fetches appointment details or polls for booking status | Exists -- unified for VA and CC |

---

## API Endpoints

### GET /vaos/v2/referrals

Retrieves the list of active referrals for the authenticated Veteran. Used on the "Referrals and requests" page to display schedulable and non-schedulable referrals.

**Frontend Usage:**
- `useGetPatientReferralsQuery()` in `ReferralsAndRequests.jsx`
- Side effect: triggers `fetchPendingAppointments()` to load active appointment requests in parallel
- Results are filtered on the frontend by `categoryOfCare` (allowed: `optometry`, `chiropractic` behind feature flag)

**Request:**
- Method: `GET`
- Headers:
  - `Content-Type: application/json`

**Response (Success):**
```json
{
  "data": [
    {
      "id": "add2f0f4-a1ea-4dea-a504-a54ab57c6801",
      "type": "referrals",
      "attributes": {
        "uuid": "add2f0f4-a1ea-4dea-a504-a54ab57c6801",
        "categoryOfCare": "OPTOMETRY",
        "careType": "CC",
        "referralNumber": "VA0000005682",
        "stationId": "659",
        "expirationDate": "2026-10-06",
        "onlineSchedule": true,
        "referralConsultId": "12345"
      }
    },
    {
      "id": "b7c8d9e0-f1a2-3b4c-5d6e-7f8a9b0c1d2e",
      "type": "referrals",
      "attributes": {
        "uuid": "b7c8d9e0-f1a2-3b4c-5d6e-7f8a9b0c1d2e",
        "categoryOfCare": "CHIROPRACTIC",
        "careType": "VA",
        "referralNumber": "VA0000007123",
        "stationId": "648",
        "expirationDate": "2026-09-15",
        "onlineSchedule": false,
        "referralConsultId": "67890"
      }
    }
  ]
}
```

- `uuid`: Unique identifier for the referral, used as the `?id=` query parameter throughout the scheduling flow.
- `categoryOfCare`: Type of care (e.g. `OPTOMETRY`, `CHIROPRACTIC`). Frontend filters by this field.
- `careType`: `"VA"` or `"CC"` -- indicates whether this referral routes to VA or community care scheduling.
- `referralNumber`: The referral tracking number displayed to the Veteran.
- `stationId`: The VA station ID associated with the referral. Used for pilot eligibility checks.
- `expirationDate`: Date in `YYYY-MM-DD` format. Displayed as "Expiration date: Month D, YYYY" on the referral card.
- `onlineSchedule`: Boolean. When `true`, the "Schedule an appointment" CTA is shown. When `false`, the "Why you can't schedule online?" message is shown instead.
- `referralConsultId`: Identifier for the consult associated with the referral.

**Response (No referrals):**
```json
{
  "data": []
}
```

**Response (Server Error):**
```json
{
  "errors": [
    {
      "title": "Internal Server Error",
      "detail": "An error occurred while retrieving referrals",
      "code": "500",
      "status": "500"
    }
  ]
}
```

---

### GET /vaos/v2/referrals/{referralId}

Retrieves full details for a single referral. Loaded by the referral scheduling shell (`index.jsx`) when the Veteran enters the scheduling flow via `?id=<referralId>`. The response is passed as `currentReferral` to all child pages.

**Frontend Usage:**
- `useGetReferralByIdQuery(id)` in `ReferralAppointments` (index.jsx)
- `referral.attributes` is destructured as `currentReferral` in `ScheduleReferral`, `ChooseDateAndTime`, `ReviewAndConfirm`, and `CompleteReferral`
- `hasAppointments` triggers a redirect to `/referrals-requests` if the Veteran is past the initial schedule page

**Request:**
- Method: `GET`
- Headers:
  - `Content-Type: application/json`
- Path Parameters:
  - `referralId`: The unique identifier of the referral (same as `uuid`).

**Response (Success):**
```json
{
  "data": {
    "id": "add2f0f4-a1ea-4dea-a504-a54ab57c6801",
    "type": "referrals",
    "attributes": {
      "uuid": "add2f0f4-a1ea-4dea-a504-a54ab57c6801",
      "categoryOfCare": "OPTOMETRY",
      "careType": "CC",
      "status": "ACTIVE",
      "referralNumber": "VA0000005681",
      "referralConsultId": "12345",
      "expirationDate": "2026-10-06",
      "referralDate": "2026-04-06",
      "serviceName": "Referral",
      "hasAppointments": false,
      "stationId": "659",
      "onlineSchedule": true,
      "facilityName": "VAMC Facility",
      "facilityPhone": "555-555-5555",
      "timezone": "America/New_York",
      "provider": {
        "name": "Dr. Moreen S. Rafa",
        "npi": "1346206547",
        "phone": "(937) 236-6750",
        "facilityName": "South Melbourne Medical Complex",
        "address": {
          "street1": "76 Veterans Avenue",
          "city": "BATH",
          "state": "NY",
          "zip": "14810"
        }
      },
      "referringFacility": {
        "name": "Batavia VA Medical Center",
        "phone": "(585) 297-1000",
        "code": "528A4",
        "address": {
          "street1": "222 Richmond Avenue",
          "city": "BATAVIA",
          "state": "NY",
          "zip": "14020"
        }
      }
    },
    "relationships": {}
  }
}
```

- `uuid`: Unique identifier, matches `id`.
- `categoryOfCare`: Type of care. Displayed as title-cased text (e.g. "Optometry referral").
- `careType`: `"VA"` or `"CC"`.
- `status`: Referral status (e.g. `ACTIVE`).
- `referralNumber`: Displayed to the Veteran on the schedule referral page.
- `referralConsultId`: Used alongside `referralNumber` when creating draft appointments.
- `expirationDate`: `YYYY-MM-DD`. Shown as "All appointments for this referral must be scheduled by [date]".
- `hasAppointments`: When `true`, the Veteran is redirected away from the scheduling flow (only the first appointment can be directly scheduled).
- `stationId`: Used for pilot station eligibility validation.
- `onlineSchedule`: Boolean. Must be `true` (along with `provider.npi` and `!hasAppointments` and valid `stationId`) for the "Schedule your appointment" CTA to appear.
- `provider`: The assigned community care or VA provider. Contains `name`, `npi`, `phone`, and `address`. May be `null` if no provider is pre-assigned.
- `provider.address`: Object with `street1`, `street2` (optional), `street3` (optional), `city`, `state`, `zip`.
- `referringFacility`: The VA facility that created the referral.
- `facilityName` / `facilityPhone`: The Veteran's associated VA facility, shown in "call your facility" messaging.
- `timezone`: IANA timezone string for the referring facility.

**Response (Not Found):**
```json
{
  "errors": [
    {
      "title": "Referral not found",
      "detail": "Referral with ID add2f0f4-a1ea-4dea-a504-a54ab57c6801 was not found",
      "code": "404",
      "status": "404"
    }
  ]
}
```

**Response (Server Error):**
```json
{
  "errors": [
    {
      "title": "Internal Server Error",
      "detail": "An error occurred while retrieving the referral details",
      "code": "500",
      "status": "500"
    }
  ]
}
```

---

### GET /vaos/v2/referrals/{referralId}/providers

Retrieves the list of available VA and CC providers for a given referral. Used on the "Provider Selection" page where the Veteran chooses which provider to schedule with.

**Frontend Usage:**
- New RTK Query hook (to be created) in `ProviderSelection.jsx`
- Currently `ProviderSelection.jsx` uses hardcoded mock data; this endpoint replaces it
- `PendingReferralCard.jsx` links to `schedule-referral/provider-selection?id=<referralId>`
- `ProviderSelectionCard.jsx` renders each provider with name, type, facility, drive time, and next available date

**Request:**
- Method: `GET`
- Headers:
  - `Content-Type: application/json`
- Path Parameters:
  - `referralId`: The unique identifier of the referral.
- Query Parameters (optional):
  - `page`: Page number for pagination (default: `1`).
  - `perPage`: Number of providers per page (default: `10`).
  - `sort`: Sort order. Accepted values: `distance` (default), `nextAvailable`.

**Response (Success):**
```json
{
  "data": [
    {
      "id": "9mN718pH",
      "type": "provider",
      "attributes": {
        "name": "Dr. Bones",
        "careType": "CC",
        "facilityName": "FHA South Melbourne Medical Complex",
        "driveTime": "45 min",
        "driveTimeInSeconds": 2700,
        "distanceInMiles": 28.5,
        "nextAvailableDate": "2026-04-15",
        "address": {
          "street1": "1105 Palmetto Ave",
          "city": "Melbourne",
          "state": "FL",
          "zip": "32901"
        },
        "phone": "(321) 555-0100",
        "latitude": 28.08061,
        "longitude": -80.60322
      }
    },
    {
      "id": "va-provider-001",
      "type": "provider",
      "attributes": {
        "name": "Portland VA Eye Clinic",
        "careType": "VA",
        "facilityName": "Portland VA Medical Center",
        "driveTime": "20 min",
        "driveTimeInSeconds": 1200,
        "distanceInMiles": 12.3,
        "nextAvailableDate": "2026-04-10",
        "address": {
          "street1": "3710 SW US Veterans Hospital Rd",
          "city": "Portland",
          "state": "OR",
          "zip": "97239"
        },
        "phone": "(503) 220-8262",
        "latitude": 45.4957,
        "longitude": -122.6847
      }
    }
  ],
  "meta": {
    "pagination": {
      "currentPage": 1,
      "perPage": 10,
      "totalPages": 2,
      "totalEntries": 15
    }
  }
}
```

- `id`: Unique identifier for the provider. Passed as `provider_id` to the draft appointment endpoint.
- `name`: Provider or clinic name. Displayed as the card heading.
- `careType`: `"VA"` or `"CC"`. Displayed as the provider type (e.g. "Community care" or "VA care").
- `facilityName`: Organization or facility name.
- `driveTime`: Human-readable drive time string (e.g. "45 min").
- `driveTimeInSeconds`: Drive time in seconds for sorting and computation.
- `distanceInMiles`: Distance from the Veteran's home address.
- `nextAvailableDate`: `YYYY-MM-DD` of the earliest open slot. Displayed as "Next available: [date]".
- `address`: Provider location address object.
- `phone`: Provider phone number.
- `latitude` / `longitude`: Coordinates for mapping.
- `meta.pagination`: Supports the "Show N more providers" button on the frontend.

**Response (No providers found):**
```json
{
  "data": [],
  "meta": {
    "pagination": {
      "currentPage": 1,
      "perPage": 10,
      "totalPages": 0,
      "totalEntries": 0
    }
  }
}
```

**Response (Referral Not Found):**
```json
{
  "errors": [
    {
      "title": "Referral not found",
      "detail": "Referral with ID add2f0f4-a1ea-4dea-a504-a54ab57c6801 was not found",
      "code": "404",
      "status": "404"
    }
  ]
}
```

**Response (Server Error):**
```json
{
  "errors": [
    {
      "title": "Internal Server Error",
      "detail": "An error occurred while retrieving providers",
      "code": "500",
      "status": "500"
    }
  ]
}
```

---

### POST /vaos/v2/appointments/draft

Creates a draft appointment for a specific referral and provider combination. Returns the provider details, available time slots, and drive time information. The frontend calls this when the Veteran navigates to the "Choose a date and time" page after selecting a provider.

**Frontend Usage:**
- `useGetDraftReferralAppointmentQuery({ referralId, providerId })` in `ChooseDateAndTime.jsx` and `ReviewAndConfirm.jsx`
- Response provides slots for the `CalendarWidget`, provider details for the info header, and drive time for display
- The returned `id` is used as the `draftAppointmentId` when submitting the appointment

**Request:**
- Method: `POST`
- Headers:
  - `Content-Type: application/json`
- Body:
```json
{
  "referral_id": "add2f0f4-a1ea-4dea-a504-a54ab57c6801",
  "provider_id": "9mN718pH"
}
```

- `referral_id`: The unique identifier of the referral being scheduled.
- `provider_id`: The unique identifier of the selected provider (from the provider list endpoint).

**Response (Success):**
```json
{
  "data": {
    "id": "appointment-for-VA0000005681",
    "type": "draft_appointment",
    "attributes": {
      "referralNumber": "VA0000005681",
      "careType": "CC",
      "provider": {
        "id": "9mN718pH",
        "name": "Dr. Bones @ FHA South Melbourne Medical Complex",
        "isActive": true,
        "individualProviders": [
          {
            "name": "Dr. Bones",
            "npi": "91560381x"
          }
        ],
        "providerOrganization": {
          "name": "Meridian Health"
        },
        "location": {
          "address": "1105 Palmetto Ave, Melbourne, FL, 32901, US",
          "latitude": 28.08061,
          "longitude": -80.60322,
          "timezone": "America/New_York"
        },
        "networkIds": [
          "sandboxnetwork-5vuTac8v"
        ],
        "appointmentTypes": [
          {
            "id": "ov",
            "name": "Office Visit",
            "isSelfSchedulable": true
          }
        ],
        "specialties": [
          {
            "id": "208800000X",
            "name": "Urology"
          }
        ],
        "visitMode": "phone",
        "features": {
          "isDigital": true,
          "directBooking": {
            "isEnabled": true,
            "requiredFields": ["phone", "address", "name", "birthdate", "gender"]
          }
        }
      },
      "slots": [
        {
          "id": "slot-001|2026-04-15T14:00:00Z|30m",
          "providerServiceId": "9mN718pH",
          "appointmentTypeId": "ov",
          "start": "2026-04-15T14:00:00Z",
          "remaining": 1
        },
        {
          "id": "slot-002|2026-04-15T15:00:00Z|30m",
          "providerServiceId": "9mN718pH",
          "appointmentTypeId": "ov",
          "start": "2026-04-15T15:00:00Z",
          "remaining": 1
        },
        {
          "id": "slot-003|2026-04-16T10:00:00Z|30m",
          "providerServiceId": "9mN718pH",
          "appointmentTypeId": "ov",
          "start": "2026-04-16T10:00:00Z",
          "remaining": 1
        }
      ],
      "drivetime": {
        "origin": {
          "latitude": 40.7128,
          "longitude": -74.006
        },
        "destination": {
          "distanceInMiles": 313,
          "driveTimeInSecondsWithoutTraffic": 19096,
          "driveTimeInSecondsWithTraffic": 19561,
          "latitude": 44.475883,
          "longitude": -73.212074
        }
      }
    }
  }
}
```

- `id`: Draft appointment identifier. Used as `draftAppointmentId` when submitting.
- `careType`: `"VA"` or `"CC"`.
- `provider`: Full provider details for the selected provider.
  - `provider.id`: Used as `providerServiceId` when submitting.
  - `provider.name`: Displayed on the date/time and review pages.
  - `provider.providerOrganization.name`: Organization name shown below the provider name.
  - `provider.location.timezone`: IANA timezone string. Used by the calendar widget and time formatting.
  - `provider.location.address`: Can be a string or an object. The `ProviderAddress` component normalizes both formats.
  - `provider.networkIds`: Array of network identifiers. `networkIds[0]` is sent as `networkId` when submitting.
- `slots`: Array of available appointment time slots.
  - `slots[].id`: Unique slot identifier. Sent as `slotId` when submitting.
  - `slots[].start`: ISO 8601 UTC datetime. Used for calendar display and slot selection.
  - `slots[].providerServiceId`: Provider service identifier associated with this slot.
  - `slots[].appointmentTypeId`: Type of appointment for this slot.
  - `slots[].remaining`: Number of remaining openings for this slot.
- `drivetime`: Drive time and distance information from the Veteran's address to the provider.
  - `drivetime.destination.driveTimeInSecondsWithoutTraffic`: Used to compute display string (e.g. "5 hours, 18 minutes").
  - `drivetime.destination.distanceInMiles`: Shown as distance to provider.

**Response (No slots available):**
```json
{
  "data": {
    "id": "appointment-for-VA0000005681",
    "type": "draft_appointment",
    "attributes": {
      "referralNumber": "VA0000005681",
      "careType": "CC",
      "provider": { },
      "slots": [],
      "drivetime": { }
    }
  }
}
```

The frontend displays a "We couldn't find any open time slots" warning when `slots` is an empty array.

**Response (Referral Not Found):**
```json
{
  "errors": [
    {
      "title": "Referral not found",
      "detail": "Referral with ID add2f0f4-a1ea-4dea-a504-a54ab57c6801 was not found",
      "code": "404",
      "status": "404"
    }
  ]
}
```

**Response (Server Error):**
```json
{
  "errors": [
    {
      "title": "Internal Server Error",
      "detail": "An error occurred while retrieving the draft appointment",
      "code": "500",
      "status": "500"
    }
  ]
}
```

**Response (Missing referral_id):**
```json
{
  "errors": [
    {
      "title": "Missing parameter",
      "detail": "param is missing or the value is empty: referral_id",
      "code": "422",
      "status": "422"
    }
  ]
}
```

**Response (Missing provider_id):**
```json
{
  "errors": [
    {
      "title": "Missing parameter",
      "detail": "param is missing or the value is empty: provider_id",
      "code": "422",
      "status": "422"
    }
  ]
}
```

---

### POST /vaos/v2/appointments/submit

Submits a draft appointment for booking. The backend finalizes the appointment with the appropriate upstream service (EPS for CC, VistA/HSRM for VA) based on the referral and provider context.

**Frontend Usage:**
- `usePostReferralAppointmentMutation()` in `ReviewAndConfirm.jsx`
- Called when the Veteran clicks "Confirm" after reviewing appointment details
- On success, the frontend navigates to the complete/confirmation page
- The returned `id` is used for polling the appointment status

**Request:**
- Method: `POST`
- Headers:
  - `Content-Type: application/json`
- Body:
```json
{
  "id": "appointment-for-VA0000005681",
  "referralNumber": "VA0000005681",
  "slotId": "slot-001|2026-04-15T14:00:00Z|30m",
  "networkId": "sandboxnetwork-5vuTac8v",
  "providerServiceId": "9mN718pH"
}
```

- `id`: The draft appointment ID returned by `POST /vaos/v2/appointments/draft`.
- `referralNumber`: The referral tracking number.
- `slotId`: The `id` of the selected slot from the draft appointment response.
- `networkId`: The first entry from `provider.networkIds` in the draft appointment response.
- `providerServiceId`: The `provider.id` from the draft appointment response.

**Response (Success):**
```json
{
  "data": {
    "id": "EEKoGzEf"
  }
}
```

- `id`: The appointment identifier. Used to poll for booking status on the confirmation page.

**Response (Missing required field):**
```json
{
  "errors": [
    {
      "title": "Missing parameter",
      "detail": "param is missing or the value is empty: slotId",
      "code": "422",
      "status": "422"
    }
  ]
}
```

**Response (Appointment Not Found):**
```json
{
  "errors": [
    {
      "title": "Appointment not found",
      "detail": "Appointment with ID appointment-for-VA0000005681 was not found",
      "code": "404",
      "status": "404"
    }
  ]
}
```

**Response (Server Error):**
```json
{
  "errors": [
    {
      "title": "Internal Server Error",
      "detail": "An error occurred while submitting the appointment",
      "code": "500",
      "status": "500"
    }
  ]
}
```

---

### GET /vaos/v2/appointments/{appointmentId}

Retrieves the details and booking status of an appointment. Used for two purposes:

1. **Polling (post-submit):** After the Veteran submits an appointment, `CompleteReferral.jsx` polls this endpoint every 1 second for up to 30 seconds until `status` transitions from `draft` to `booked`.
2. **Details (appointment view):** Retrieves full appointment details for the appointment details page.

The `X-Page-Type` header distinguishes the two use cases, allowing the backend to optimize response behavior (e.g., lighter response for polling).

This endpoint serves both VA and CC appointments. The backend routes to the appropriate upstream system based on the appointment record.

**Frontend Usage:**
- `usePollAppointmentInfoQuery(appointmentId)` in `CompleteReferral.jsx` (polling mode)
- `useGetAppointmentInfoQuery(appointmentId)` in appointment details pages (details mode)
- Polling: `refetch()` called on a 1-second interval; stops when `attributes.status === 'booked'` or 30-second timeout
- On timeout, a warning is shown: "We're having trouble scheduling this appointment"
- On error, an error alert is shown with the provider phone number from the parent referral

**Request (Polling):**
- Method: `GET`
- Headers:
  - `Content-Type: application/json`
  - `X-Page-Type: polling`
- Path Parameters:
  - `appointmentId`: The appointment identifier returned by the submit endpoint.

**Request (Details):**
- Method: `GET`
- Headers:
  - `Content-Type: application/json`
  - `X-Page-Type: details`
- Path Parameters:
  - `appointmentId`: The appointment identifier.

**Response (Polling -- Draft/Pending):**
```json
{
  "data": {
    "id": "EEKoGzEf",
    "type": "appointment",
    "attributes": {
      "id": "EEKoGzEf",
      "status": "draft",
      "careType": "CC",
      "start": "2026-04-15T14:00:00Z",
      "isLatest": true,
      "lastRetrieved": "2026-04-06T18:30:00Z",
      "referralId": "add2f0f4-a1ea-4dea-a504-a54ab57c6801",
      "past": false
    }
  }
}
```

**Response (Polling/Details -- Booked):**
```json
{
  "data": {
    "id": "EEKoGzEf",
    "type": "appointment",
    "attributes": {
      "id": "EEKoGzEf",
      "status": "booked",
      "careType": "CC",
      "start": "2026-04-15T14:00:00Z",
      "isLatest": true,
      "lastRetrieved": "2026-04-06T18:30:05Z",
      "referralId": "add2f0f4-a1ea-4dea-a504-a54ab57c6801",
      "past": false,
      "modality": "communityCareEps",
      "provider": {
        "id": "9mN718pH",
        "name": "Dr. Smith @ Acme Cardiology - Anywhere, USA",
        "practice": "Acme Cardiology",
        "phone": "555-555-0001",
        "location": {
          "name": "Meridian Health",
          "address": "7500 CENTRAL AVE, STE 108, PHILADELPHIA, PA 19111-2430",
          "latitude": 40.06999,
          "longitude": -75.08770,
          "timezone": "America/New_York"
        }
      },
      "location": {
        "id": "test-location-id",
        "type": "appointments",
        "attributes": {
          "name": "Meridian Health",
          "timezone": {
            "timeZoneId": "America/New_York"
          }
        }
      }
    }
  }
}
```

- `id`: Appointment identifier.
- `status`: `"draft"` (pending confirmation) or `"booked"` (confirmed). The frontend polls until `booked`.
- `careType`: `"VA"` or `"CC"`.
- `start`: ISO 8601 UTC datetime for the appointment start. Displayed on the confirmation card.
- `modality`: Appointment modality. Present when `status` is `booked`. Possible values:
  - `communityCareEps` -- In-person community care
  - `communityCare` -- In-person community care (legacy)
  - `vaInPerson` -- In-person VA
  - `vaPhone` -- VA phone appointment
  - `vaVideoCareAtHome` -- VA video at home
  - `vaVideoCareAtAnAtlasLocation` -- VA video at Atlas location
- `provider`: Provider details. Present when `status` is `booked`.
  - `provider.location.timezone`: Used for formatting the appointment time.
  - `provider.location.name`: Organization name shown on the confirmation card.
  - `provider.location.address`: Address shown on the confirmation card. Can be a string or object.
- `location`: VAOS-style location object with timezone information.
- `referralId`: Link back to the originating referral.
- `isLatest` / `lastRetrieved`: Metadata for caching and freshness.
- `past`: Boolean indicating whether the appointment date has passed.

**Response (Appointment Not Found):**
```json
{
  "errors": [
    {
      "title": "Appointment not found",
      "detail": "Appointment with ID EEKoGzEf was not found",
      "code": "404",
      "status": "404"
    }
  ]
}
```

**Response (Server Error):**
```json
{
  "errors": [
    {
      "title": "Internal Server Error",
      "detail": "An error occurred while retrieving appointment details",
      "code": "500",
      "status": "500"
    }
  ]
}
```

---

### Common Error Responses

These error responses may be returned by any endpoint.

**Response (Unauthorized):**
```json
{
  "errors": [
    {
      "title": "Unauthorized",
      "detail": "Not authorized",
      "code": "401",
      "status": "401"
    }
  ]
}
```

**Response (Bad Gateway -- upstream service failure):**
```json
{
  "errors": [
    {
      "title": "Bad Gateway",
      "detail": "Unable to connect to scheduling service",
      "code": "502",
      "status": "502"
    }
  ]
}
```

**Response (Service Unavailable):**
```json
{
  "errors": [
    {
      "title": "Service Unavailable",
      "detail": "Service temporarily unavailable",
      "code": "503",
      "status": "503"
    }
  ]
}
```

The frontend uses the `DowntimeNotification` component with the `communityCareDS` external service dependency to display maintenance messaging when the backend signals downtime.
