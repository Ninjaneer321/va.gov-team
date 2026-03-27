# Claims Status Tool — Alert Improvements: Flag Disabled (Regression Testing)

## Test Case 1: Claim card with documentsNeeded only

### Key Data

- documentsNeeded: true
- Failed evidenceSubmissions: none
- Open NEEDED_FROM_YOU requests: 3

### Steps to Reproduce

1. On the claims landing page, find the "Claim 1" card

### Intended Outcomes (flag disabled)

- [x] A blue info alert appears: "We requested more information from you: Check the claim details to learn more."
- [x] No red error alert appears

## Test Case 2: Claim card with failed submissions only

### Key Data

- documentsNeeded: false
- Failed evidenceSubmissions: 1 (uploadStatus: FAILED)
- Open NEEDED_FROM_YOU requests: 0

### Steps to Reproduce

1. On the claims landing page, find the "Claim 2" card

### Intended Outcomes (flag disabled)

- [x] A red error alert appears: "We need you to resubmit files for this claim."
- [x] No blue info alert appears

## Test Case 3: Claim card with both conditions shows single status tag (no stacked alerts)

### Key Data

- documentsNeeded: true
- Failed evidenceSubmissions: 1 (uploadStatus: FAILED)
- Open NEEDED_FROM_YOU requests: 1

### Steps to Reproduce

1. On the claims landing page, find the "Claim 3" card

### Intended Outcomes (flag disabled)

- [x] A red error alert appears: "We need you to resubmit files for this claim."
- [x] A blue info alert appears: "We requested more information from you: Check the claim details to learn more."
- [x] Both alerts are stacked

## Test Case 4: Claim card without evidence requests or failed submissions shows no status tag

### Key Data

- documentsNeeded: false
- Failed evidenceSubmissions: none
- Open NEEDED_FROM_YOU requests: 0

### Steps to Reproduce

1. On the claims landing page, find the "Claim 4" card

### Intended Outcomes (flag disabled)

- [x] No alerts appear on the card
- [x] The card shows only the standard info: title, received date, step, last updated, and "Details" link

## Test Case 5: Claim status intro text

### Key Data

- No specific data — tests intro text on Status tab (any claim works)

### Steps to Reproduce

1. Click "Details" on any claim card to navigate to the claim detail page
2. Observe the intro text below the "Claim status" heading

### Intended Outcomes (flag disabled)

- [x] The intro text reads "Here's the latest information on your claim."

## Test Case 6: "What you need to do" empty state with no open requests

### Key Data

- documentsNeeded: false
- Failed evidenceSubmissions: none
- Open NEEDED_FROM_YOU requests: 0

### Steps to Reproduce

1. On the claims landing page, find the "Claim 4" card and click "Details"
2. Observe the "What you need to do" section on the Status tab

### Intended Outcomes (flag disabled)

- [x] The "What you need to do" section shows: "There's nothing we need from you right now. We'll let you know when there's an update."
- [x] No va-additional-info dropdown appears below the message

## Test Case 7: "What you need to do" empty state with documentsNeeded but no open requests

### Key Data

- documentsNeeded: true
- Failed evidenceSubmissions: none
- Open NEEDED_FROM_YOU requests: 0 (empty trackedItems array)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 5" card and click "Details"
2. Observe the "What you need to do" section on the Status tab

### Intended Outcomes (flag disabled)

- [x] The empty state message appears: "There's nothing we need from you right now. We'll let you know when there's an update."
- [x] No va-additional-info dropdown appears

## Test Case 8: "What you need to do" with failed submissions and documentsNeeded but no open requests

### Key Data

- documentsNeeded: true
- Failed evidenceSubmissions: 1 (uploadStatus: FAILED)
- Open NEEDED_FROM_YOU requests: 0 (1 closed/NO_LONGER_REQUIRED)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 6" card and click "Details"
2. Observe the "What you need to do" section on the Status tab

### Intended Outcomes (flag disabled)

- [x] The UploadType2ErrorAlert shows at the top of the "What you need to do" section (error about resubmitting files)
- [x] The empty state message ("There's nothing we need from you right now...") does NOT appear
- [x] No va-additional-info dropdown appears

## Test Case 9: "What you need to do" with open evidence requests shows intro text

### Key Data

- 3 NEEDED_FROM_YOU tracked items (hasOpenRequests = true)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 1" card and click "Details"
2. Observe the "What you need to do" section on the Status tab

### Intended Outcomes (flag disabled)

- [x] FilesNeeded cards (yellow warning alerts) render directly below the "What you need to do" heading
- [x] No intro paragraph appears above the cards

## Test Case 10: Evidence request cards

### Key Data

- 3 NEEDED_FROM_YOU items:
  - friendlyName: "Authorization to disclose information", suspenseDate: 2025-09-21 (renders as "Sept. 21, 2025")
  - friendlyName: "Witness or corroboration statements", suspenseDate: 2025-10-31 (renders as "Oct. 31, 2025")
  - friendlyName: null (renders as "Request for evidence"), suspenseDate: 2025-01-21 (renders as "Jan. 21, 2025" -- past date, item is overdue)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 1" card and click "Details"
2. Observe the evidence request cards under "What you need to do"

### Intended Outcomes (flag disabled)

- [x] Each evidence request renders as a yellow va-alert with status="warning"
- [x] The alert contains a title (h4) with the request name (e.g. "Provide authorization to disclose information" or "Request for evidence")
- [x] A "Respond by [date]" paragraph appears below the title
- [x] A description appears below the date
- [x] An "About this request" link action appears at the bottom
- [x] Clicking the link navigates to the evidence request detail page without a full page reload

## Test Case 11: Recent Activity item labels and third-party request content

### Key Data

- 3 NEEDED_FROM_OTHERS items:
  - "Notice - VA is contacting provider for med rcds (Kaiser Permanente)" -- no enrichment fields, renders default message: "You don't need to do anything. We asked someone outside VA for documents related to your claim."
  - "DBQ AUDIO Hearing Loss and Tinnitus" (isDbq: true, friendlyName: "Disability exam for hearing") -- renders DBQ message: "We've requested an exam related to your claim. The examiner's office will contact you to schedule this appointment."
  - "Employer (21-4192)" -- renders activityDescription: "We requested your proof of service on your behalf. No action is needed."
- 3 NEEDED_FROM_YOU items (open requests with "Request for you" label)
- Phase change entries (no label or alert)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 1" card and click "Details"
2. Scroll to the Recent Activity section on the Status tab

### Intended Outcomes (flag disabled)

- [x] Each "We made a request" item shows a blue va-alert (slim, info) with body text and an "About this notice" link
- [x] The item without enrichment fields (default message path) shows alert body: "You don't need to do anything. We asked someone outside VA for documents related to your claim."
- [x] The DBQ item (exam request path) shows alert body: "We've requested an exam related to your claim. The examiner's office will contact you to schedule this appointment."
- [x] The item with activityDescription (override message path) shows the activityDescription as the alert body: "We requested your proof of service on your behalf. No action is needed."
- [x] "We opened a request" items show "Request for you" as a plain text
- [x] Phase change items (e.g. "Your claim moved into...") show no label or alert

## Test Case 12: Files tab with open evidence requests

### Key Data

- Open NEEDED_FROM_YOU tracked items: 3
- NEEDED_FROM_OTHERS tracked items: 3 (third-party requests)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 1" card and click "Details"
2. Click the "Files" tab

### Intended Outcomes (flag disabled)

- [x] The "Claim files" intro text reads: "If you need to add evidence, you can do that here. You can also review the files associated with this claim."
- [x] Under the "Upload additional evidence" heading, 3 FilesNeeded cards (yellow warning alerts) appear for each open NEEDED_FROM_YOU item
- [x] FilesOptional cards (blue info alerts) appear for the NEEDED_FROM_OTHERS items
- [x] The upload form (file input + "Submit files for review" button) appears below the cards
- [x] No "Review your requests" warning alert appears

## Test Case 13: Files tab without open evidence requests

### Key Data

- Open NEEDED_FROM_YOU tracked items: 0
- NEEDED_FROM_OTHERS tracked items: 0
- No failed submissions

### Steps to Reproduce

1. On the claims landing page, find the "Claim 4" card and click "Details"
2. Click the "Files" tab

### Intended Outcomes (flag disabled)

- [x] No FilesNeeded cards appear (none exist)
- [x] No FilesOptional cards appear (none exist)
- [x] The upload form appears directly under the "Upload additional evidence" heading

## Test Case 14: Files tab with open requests and failed submissions

### Key Data

- Open NEEDED_FROM_YOU tracked items: 1
- Failed evidenceSubmissions: 1 (uploadStatus: FAILED)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 3" card and click "Details"
2. Click the "Files" tab

### Intended Outcomes (flag disabled)

- [x] The UploadType2ErrorAlert (red error alert about resubmitting files) appears at the top
- [x] Under the "Upload additional evidence" heading, 1 FilesNeeded card (yellow warning alert) appears
- [x] The upload form appears below the card
