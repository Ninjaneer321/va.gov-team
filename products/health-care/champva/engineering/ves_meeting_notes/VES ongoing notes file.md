VES + VA.gov Sync

## Meeting date: 01.29.26

## OHI Ingestion + Linking Scenarios (VES / 1010D)

## Main question
How should OHI be ingested/handled in VES when:

1. OHI is submitted at the same time as a 1010D submission  
2. OHI is submitted when there is no 1010D and no person on file in VES  
3. OHI is submitted when there is no 1010D on file, but the person exists in VES  
4. OHI is submitted and there is a previous 1010D on file  

---

## Scenario 1: OHI submitted at the same time as 1010D

**Problem:** OHI + 1010D must be linked reliably in VES.

**Options discussed:**

- **Option A: Match identifiers so VES can link automatically**
  - Person UUID (Beni-level)
  - Transaction UUID (application-level)

- **Option B: Add a “Reference Transaction UUID” on the OHI**
  - This would tie back to the related 1010D transaction UUID

**Note:** Both the VES team and VA.gov team need to verify whether both options are feasible and which approach is preferred.

---

## Scenario 2: OHI submitted with no 1010D and no person on file in VES

**VES team preference (not final / not yet agreed):** reject/fail the OHI submission.

**Reason:** VES does not want to retain outdated/orphaned OHI submissions indefinitely.

### Important clarification
- VES will always accept the OHI submission from VA.gov initially.
- Any reject/fail would happen **after ingestion** (not at the point of receipt).
- If the submission is ultimately rejected/failed, it would trigger a workflow to notify the user that their submission has been rejected (with potential to include details such as: rejected because there was no person and no 1010D application on file at that time).

**Concern:** Even if we encourage users to submit 1010D + OHI together (or within a short window), users may not follow that flow. If they’re asked to resubmit OHI later because it wasn’t successfully tied to a 1010D enrollment, they’ll likely be frustrated to resend the same info.

### Retry logic discussed
- VES could retry looking for either a person record or a 1010D submission for up to **3 days** before formally rejecting/failing.

---

## Scenario 3: OHI submitted with no 1010D on file, but person exists in VES

**VES would accept/keep the OHI submission.**

**Note:** VA.gov has no issues with this.

---

## Scenario 4: OHI submitted and a previous 1010D is already on file

**VES would accept/keep the OHI submission and process it as an addition/update to insurance on file.**

**Note:** VA.gov has no issues with this.

---

## Clarification needed (VA.gov question)

For scenarios **2–4** (OHIs sent separately from 1010D):

- Will the linking be handled on **VES’s side**?
- In other words, **VA.gov does not need to send any linking UUIDs** as part of a standalone OHI submission.
