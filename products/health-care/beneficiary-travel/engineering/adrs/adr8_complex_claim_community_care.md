# Complex Claims Community Care Investigation and Analysis

Throughout this document we will discuss various community care issues that we have ran into, our investigation of that issue and how we have chosen to resolve them.

## Investigation into how we will determine that a document is for Proof of Attendence (POA) and not an unassociated document

### Status
Proposed – 2026-02-17

### Context

In the initial release of the complex claims flow, any file included in a claim should be a receipt that is associated with a specific expense. If we see a file that is unassociated with an expense (which could happen from the user making edits to the claim in BTSSS), we direct them to BTSSS to edit and/or submit the claim.

However, we will soon be building the ability to file claims for community care appointments, which include a Proof of Attendence (POA) file. These files are not associated with any expense within the claim. As such, we need a way to differentiate POA files from other unassociated files.

The current API call for documents does not have the ability to determine if a document is for POA.
The POST document call expects the following fields:
```
{
  "contentType": "string",
  "length": 0,
  "fileName": "string",
  "fileData": "string"
}
```
The GET document call takes the `claimId` and returns the following fields:
```
  "data": [
    {
      "documentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "filename": "string",
      "mimetype": "string",
      "createdon": "2026-02-17T15:47:20.880Z"
    }
  ],
```
Based on the current API calls, there is currently no field that distinguishes POA documents from other uploaded documents.

### Investigation into options for capturing that a document is for POA

1. Request an API change
    - We asked the API team to add a boolean field to explicitly flag POA documents. Link to the ticket where we requested this change [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/133116).
    - We explained that this would be the cleanest long-term solution architecturally, unfortunately they made it sound like it would take them several months to implement, delaying the community care feature.
    - If they were able to add this change we would need to make frontend and backend changes to support the new POA field.

2. Change the filename of the document uploaded to `proof-of-attendance.[extension]` for all POA documents
    - We could change the filename that is uploaded in a structured way so that we could reliably identify it in the FE and determine that it is a POA document and not and unassociated.
    - There are several ways that we could change the filename:
      1. Change the filename in the frontend when a user uploads the file
          - This would be the easiest option. As soon as a document is uploaded for POA we could rename to the file to something like `proof-of-attendance.[extension]` and this is what the user would see.
          - This approach would require no backend changes and could be implemented quickly. However, this would impact a users experience and we'll want Design and Stakeholders to provide input before moving forward.
      2. Change the filename in the backend when a user clicks the 'Continue' button
          - In an effort to not confuse a user upon input of the file we could rename the filenmae in the backend when the user uploads a new file.
          - This would require us to make a frontend change (would neeed to send to the backend that this document is for POA) and a backend change (that renames the filename to something like `proof-of-attendance.[extension]`).
          - The filename wouldn't change immediately so it could reduce some confusion for users.
          - Users will still see a new filename later in complex claims on the review page, claim details page, and document edit page; so it could still cause confusion, we'll want Design and Stakeholders to provide input before moving forward.
      3. Change the filename to have `-poa` added to the end of it
          - When a file is uploaded we would append a suffix like `-poa` to the end of the filename (e.g., `document-name-poa.[extension]`) in the backend and send this filename to the API. This would allow us to reliably identify POA documents internally without fully replacing the original filename.
          - This approach would require frontend and backend changes. On the frontend, we would strip the `-poa` suffix before displaying the filename so that users would continue to see the original name they uploaded. this would required multiple frontend changes to remove the suffix when rendering the filename in the UI. We would also need to update the call that we make to the backend code to show that this is for a POA. In the backend we would append the `-poa` suffix upon upload.
          - This option would preserve the original filename for the user and be less visually disruptive/confusing.
          - It would introduce logic that we have to remember to strip whenever we want to use it and adds a risk of future bugs being introduced.
   
3. Add a database table in vets-api to track that the document is POA.
    - We could create a new database table in `vets-api` to explicitly track whether an uploaded document is a Proof of Attendance (POA).
    - This table would store a reference to the `document ID` along with a `flag indicating that it is a POA document`.
    - Creating our own tracking layer would give us full control over how POA documents are identified and queried, but it would introduce ongoing maintenance costs, added complexity, and potential data consistency issues with the API.
  
4. Cache the original filename in the user session.
    - We could cache the original filename in the frontend during the user’s active claims session while renaming the stored file to a structured value such as `proof-of-attendance.[extension]` for identification purposes.
    - The cached filename would be used only for display within the flow so that the user continues to see the original filename they uploaded.
    - This approach would avoid introducing a new database table, would not require suffix-stripping logic across all frontend surfaces and whould not require any backend changes.
    - This solution would rely on temporary session state and would not persist across page refreshes, navigation away from the flow, or returning to the claim at a later time.
    - If the session were interrupted, the user would see the renamed filename instead of the original one, creating inconsistent behavior.
    - Pages such as the Claim Detail page (which do not rely on session state) would display the renamed filename, resulting in a different user experience than what was shown during upload.
    - While this approach reduces some immediate UX disruption within a single session, it introduces fragile, session-dependent behavior and increases frontend complexity without resolving the underlying limitation of the API.

### Reccommendation

On February 13, 2026, Design, Product, and Engineering met to review the available options.

The preferred solution is **Option #1: Request an API change to add an explicit POA field** to the documents model and related API calls. This is the cleanest and most maintainable long-term solution, as it avoids encoding business logic in filenames or duplicating state.

However, because this solution depends on external prioritization and may not be delivered before the Community Care release date, **Option #2 (Filename-based identification)** will be prepared as a fallback strategy/techincal work around.

If the API change cannot be delivered in time, we will implement a filename-based approach and finalize the specific variant (2.1, 2.2, or 2.3) in collaboration with Stakeholders, Product and Design.

### Rationale

The API change is preferred because:

- It introduces structured metadata rather than relying on naming conventions.
- It avoids duplicating state in `vets-api`.
- It reduces long-term maintenance risk.
- It minimizes frontend presentation logic tied to business rules.
- It aligns ownership of document classification with the upstream API, which is the system of record.

Filename-based approaches are considered pragmatic short-term solutions but introduce technical debt by encoding meaning in string values.

### Consequences

#### Positive
- Establishes a clear long-term architectural direction.
- Avoids unnecessary database duplication.
- Documents a contingency plan if API prioritization fails.

#### Negative
- Delivery timeline may be impacted if API changes are delayed.
- If fallback is required, filename-based identification will introduce temporary technical debt.
- Future migration work may be required if a filename-based solution is implemented and later replaced by a structured API field.
- There is risk of inconsistency if filename conventions are not uniformly applied across all upload surfaces.

### Future Considerations

If a filename-based solution is implemented:

- We should migrate to the structured API field once available.
- We may need a backfill strategy for existing POA documents.
- We should remove any suffix-parsing or filename-based logic to reduce long-term complexity.

