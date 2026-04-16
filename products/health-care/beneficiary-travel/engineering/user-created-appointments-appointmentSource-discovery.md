# Representing User-Created Appointment Source in Appointment Data

## Context
Currently, VA.gov does not provide a dedicated or explicit mechanism for creating user-generated appointments. However, there is an existing system behavior that effectively enables this under certain conditions.

When a user is viewing an appointment and attempts to add a new travel pay claim, the backend (BE) performs the following sequence:
1. Attempt to Locate Appointment
  - A POST request is made to:
    `/api/v2/appointments/find-or-add`
  - This endpoint attempts to locate the existing appointment in the system.
2. Fallback: Create Appointment
  - If the appointment cannot be found, a new appointment is created.
  - This scenario may occur due to:
    - VAOS service downtime
    - Connectivity issues between BTSSS API and VAOS
  - The newly created appointment is assigned:
    `appointmentSource = "API"`
3. Return Appointment
  - The endpoint returns either:
    - The existing appointment (if found), or
    - The newly created appointment (fallback case)
4. Claim Creation
  - The BE then uses the returned appointment_id to create a travel pay claim by calling:
    `POST /api/v2/claims`

## Problem

We need a reliable way to indicate that an appointment was manually created by a user.

## Why this matters

In the user-created appointment flow, the UI will need to reference this data to support product behavior and user messaging.

For example, on the claim details page, we conditionally show messaging that explains:

> This appointment was manually created, so it will not appear on the Past Appointments page.

This data may also support additional product or engineering use cases in the future, so the solution should be durable and easy to extend.

## Proposed solutions

### 🔵 Option 1: Add `isManuallyCreated` to the `find-or-add` response

Add a boolean field to the `find-or-add` endpoint response:

```txt
isManuallyCreated: true | false
```

If `isManuallyCreated` is `true`, then `appointmentSource` would be set to `VAGov`.

#### Pros

- Simple and easy to understand
- Low implementation complexity
- Directly supports the immediate UI need

#### Cons

- Limited flexibility for future use cases
- Creates overlap or coupling with `appointmentSource`
- May not scale well if we need to represent more nuanced creation paths later

### 🔵 Option 2: Add `appointmentSourceDetail` to the `find-or-add` response

Add a new field, `appointmentSourceDetail`, to provide more detail about how the appointment was created.

#### 2a. Free-form text

Example:

```txt
appointmentSourceDetail: "user-created"
```

##### Pros

- Lower LOE for BTSSS
- Flexible for future use cases
- Consumers of the endpoint can provide whatever value they need without requiring additional API coordination

##### Cons

- Not standardized
- Harder to validate and maintain over time
- Greater risk of inconsistent values across systems

#### 2b. Enum-based values

Example:

```txt
appointmentSourceDetail: USER_CREATED
appointmentSourceDetail: MAP
appointmentSourceDetail: ORACLE_HEALTH
appointmentSourceDetail: VIA
```

##### Pros

- Standardized and enforceable at the API layer
- Easier to scale and maintain
- Reduces risk of downstream data inconsistencies

##### Cons

- Higher LOE for BTSSS
- Requires coordination whenever new values need to be introduced

### 🔵 Option 3: Add a `tag` or `tags` field

Add a new field such as `tag` or `tags`, represented as either:

- a string, or
- an array of strings
