Storing the results of the discovery from this ticket here: https://github.com/department-of-veterans-affairs/va.gov-team/issues/135814

### CHAMPVA Beneficiary Correlation POC - Completed

I was able to get the POC working end-to-end for sponsor-to-beneficiary correlation at the application level.

### What I implemented

1. Added a new correlation table: `ivc_champva_beneficiary_correlations`.
2. Wired CHAMPVA submission flow to persist sponsor ICN (`submitted_by_icn`) and process beneficiary correlation.
3. Built a correlation service that:
   - parses submitted form payload (`request_json`)
   - iterates `applicants[]`
   - attempts MPI lookup per beneficiary
   - writes one row per beneficiary (`form_uuid + beneficiary_index`)
4. Implemented two-phase status handling in the table:
   - `resolved` with `beneficiary_icn`
   - `not_found` when MPI has no match yet
   - `error` for lookup/attribute issues
   - default `pending` for unresolved states
5. Added a reconciliation task:
   - `bundle exec rails ivc_champva:reconcile_beneficiary_correlations`
   - retries MPI resolution for existing form records and updates statuses/ICNs.

### How I validated it

1. Submitted new CHAMPVA forms and confirmed `ivc_champva_forms` records were created.
2. Verified correlation rows were created per beneficiary:
   - single-beneficiary form created one row (`beneficiary_index=0`)
   - multi-beneficiary form created multiple rows (`beneficiary_index=0,1,...`)
3. Confirmed repeated processing of the same `form_uuid` replaces rows (no duplicate growth per form UUID).
4. Ran reconciliation task successfully after migration/query fixes.

### Current observed behavior

- In local environment, MPI mock records were missing for test SSNs, so rows correctly landed as `mpi_status='not_found'` with `beneficiary_icn=NULL`.
- This is expected and confirms the fallback path is working.

### Key design outcome

This validates that we can perform application-level correlation without waiting on VES changes:
- We maintain our own mapping from `form_uuid` to beneficiaries.
- ICN resolution is driven by MPI.
- VES can then be queried only for beneficiaries tied to that application once ICNs are resolved.

Sequence Diagram 
<img width="7308" height="4188" alt="image" src="https://github.com/user-attachments/assets/caed1370-0e1f-49dd-851a-525db445207f" />

PR: https://github.com/department-of-veterans-affairs/vets-api/pull/27648/changes
