## Investigation into how we will know that an appointment is user created appointment from the API

### Status
Complete - 4/21/2026

### Context
We need a reliable way to indicate that an appointment was manually created by a user. 

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
---

### Proposed solutions for being able to tell that an appointment is user created

1. 🔵 Option 1: Add `isManuallyCreated` to the `find-or-add` response
  - Add a boolean field to the `find-or-add` endpoint response:

    ```txt
    isManuallyCreated: true | false
    ```

  - If `isManuallyCreated` is `true`, then `appointmentSource` would be set to `VAGov`.

  - Pros:
    - Simple and easy to understand
    - Low implementation complexity
    - Directly supports the immediate UI need

  - Cons:
    - Limited flexibility for future use cases
    - Creates overlap or coupling with `appointmentSource`
    - May not scale well if we need to represent more nuanced creation paths later

2. 🔵 Option 2: Add `appointmentSourceDetail` to the `find-or-add` response
Add a new field, `appointmentSourceDetail`, to provide more detail about how the appointment was created.

  2a. Free-form text

  Example:
    
    ```txt
    appointmentSourceDetail: "user-created"
    ```

  - Pros:
    - Lower LOE for BTSSS
    - Flexible for future use cases
    - Consumers of the endpoint can provide whatever value they need without requiring additional API coordination

  - Cons:
    - Not standardized
    - Harder to validate and maintain over time
    - Greater risk of inconsistent values across systems

  2b. Enum-based values

  Example:
  
  ```txt
  appointmentSourceDetail: USER_CREATED
  appointmentSourceDetail: MAP
  appointmentSourceDetail: ORACLE_HEALTH
  appointmentSourceDetail: VIA
  ```

  - Pros:
    - Standardized and enforceable at the API layer
    - Easier to scale and maintain
    - Reduces risk of downstream data inconsistencies

  - Cons:
    - Higher LOE for BTSSS
    - Requires coordination whenever new values need to be introduced

3. 🔵 Option 3: Add a `tag` or `tags` field
  Add a new field such as `tag` or `tags`, represented as either:
  - a string, or
  - an array of strings

4. 🔵 Option 4: Update the POST appointment endpoints so that we can set the `appointmentSource` field 
  The BTSSS API could update the following POST appointments endpoints:
  - `POST api/v3/appointments`
  - `POST api/v2/appointments/find-or-add`

So that we can pass in the `appointmentSource` field in the request body and set the field to something specific to user generated appointment like `uga` or `uca`. Its my understanding the API team would have to update these endpoints and they would have to allow for a new enum option for the `appointmentSource` field.

### Decision
- Complete - 4/21/2026

### Notes Post ADR Presentation to Stakeholders and API Team and the above meetings

- 4/16/2026 - During the Product Checkin meeting we determined that we would determine a user created appointment is community care based off of the facility station number that the user selected. If the facility is community care, it will have a station number that has a `CC` in it EX: `986CC19876`. Stakeholders decided to move forward with this so that we wont have to ask the "Is this appointment for community care?" question in the user created appointment flow.

  We also talked about how to tell that an appointment was user created. We discussed that based on BTSSS API records there are around 50 appointments created a day that look like user created appointments that actually are not and are created due to the API not being able to get the vaos data. We talked about this with stakeholders.

- 4/21/2026 - We confirmed in the Technical Sync meeting that we will determine an appointment is user created by the `appointmentSource` being API and the `claimSource` being VaGov. This will mean that the appointments made in the regular complex claim flow that we are calling "phanton appointments"; meaning the find-or-add endpoint was called and didnt find the vaos appointment when it should have, so it creates a new appointment in BTSSS, will be considered user created as well. (NOTE: Stakeholders are aware that this will occur and we will attempt to monitor how many of these are created. There will be onese with `appointmentSource` being API and the `claimSource` being VaGov and ones from Mobile with `appointmentSource` being API and the `claimSource` being Mobile.

