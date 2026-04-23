# Investigation into User Created Appointment Search, Selection, and Claim Handling

## Status
In Progress

## Context

As part of the User Created Appointment flow and claim submission flow, we need to determine how to:
1. Search for existing appointments
2. Associate claims with existing appointments
3. Handle edge cases when multiple appointments and/or claims exist
4. Create new appointments when an appointment was not found in the search
5. Create a new 

There are two primary backend systems involved:
- **BTSSS** (includes VAOS appointments + user-created "phantom" appointments)
- **VAOS** (only includes VA.gov / VAOS appointments)

Key considerations:
- BTSSS is a superset of VAOS but may include appointments not visible to users in VA.gov
- VAOS may be less reliable and lacks certain metadata (e.g., appointment source, station ID)
- Using multiple systems introduces inconsistency and complexity
- The legacy `find-or-add` endpoint introduces redundant searches and is not preferred

## Decision

### Appointment Search Strategy
- Use **BTSSS search endpoint** as the primary source for appointment discovery
- Do **not** use `find-or-add` during this stage of the flow
- Only perform a **search** initially; create appointments only if none are found

---

### Appointment Handling Scenarios

#### Scenario 1: One Appointment Found
- Use the found appointment
- Do **not** allow the user to create a new appointment

---

#### Scenario 2: Multiple Appointments Found (No Claims)
- Surface a single appointment to the user
- Default to the **first appointment returned** by the API
  - Note: Ideally, this should be the **most recently created appointment**
  - Future improvement: request `created_at` from API to support deterministic selection
- Require the user to use this appointment to file a claim

---

#### Scenario 3: Multiple Appointments Found (One Has a Claim)

- If the claim is **not submitted**:
  - Prompt:
    > "We found an appointment with an in-progress claim. Do you want to continue that claim or create a new appointment and claim?"

- If the claim is **submitted**:
  - Prompt:
    > "We found an appointment with a submitted claim. Do you want to review it or create a new appointment and claim?"

---

#### Scenario 4: Multiple Appointments Found (Multiple Have Claims)
- UX to be determined
- संभावित approaches:
  - Allow user to select from multiple claims
  - Show modal:
    > "You have multiple claims for this appointment. Please visit your claims list to review or continue one of them, or continue here."
- Further design work required

---

### No Appointment Found
- Create a new appointment using a **POST endpoint**
- Then create a claim associated with that appointment
- If the POST request fails:
  - Show error message:
    > "Something went wrong. Please try again."

---

## Rationale

### Why BTSSS Only?
**Pros:**
- Contains both VAOS and user-created ("phantom") appointments
- More complete dataset
- Avoids duplicate appointment creation when retrying

**Cons:**
- May return appointments not visible in VA.gov UI, potentially confusing users
- May return multiple similar appointments (same facility/date/time)

---

### Why Not VAOS Only?
**Cons:**
- Missing metadata (e.g., appointment source, station ID)
- Limited search capabilities (date/time only)
- Does not include phantom appointments
- Risk of duplicate appointment creation on retries
- Reliability concerns (frequent downtime)

---

### Why Not `find-or-add`?
- Performs redundant search operations
- Obscures flow clarity (implicit create behavior)
- Explicit separation of search and create improves maintainability

---

## Consequences

### Positive
- Simplifies backend interaction model (single system for search)
- Reduces risk of duplicate appointments
- Provides clearer, more predictable UX flows
- Enables future improvements (e.g., sorting by creation date)

### Negative
- Potential user confusion if appointments found in BTSSS are not visible in VA.gov
- Requires additional UX work for multi-claim scenarios
- Relies on BTSSS completeness and correctness

---

## Future Considerations
- Add `created_at` field to appointment API for deterministic selection
- Improve UX for multiple claims across appointments
- Re-evaluate combining BTSSS and VAOS if data inconsistencies become problematic
- Enhance messaging when appointments are not visible in VA.gov
