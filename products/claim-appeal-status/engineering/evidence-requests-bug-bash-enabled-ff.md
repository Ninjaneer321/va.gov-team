# Claims Status Tool — Alert Improvements: Flag Enabled (Regression Testing)

## Test Case 1: Claim card with documentsNeeded only

### Key Data

- documentsNeeded: true
- Failed evidenceSubmissions: none
- Open NEEDED_FROM_YOU requests: 3

### Steps to Reproduce

1. On the claims landing page, find the "Claim 1" card

### Intended Outcomes (flag enabled)

- [x] A yellow warning va-tag-status reading "ACTION MAY BE NEEDED" appears on the card below the step info and above the "Details" link
- [x] No blue info alert appears

## Test Case 2: Claim card with failed submissions only

### Key Data

- documentsNeeded: false
- Failed evidenceSubmissions: 1 (uploadStatus: FAILED)
- Open NEEDED_FROM_YOU requests: 0

### Steps to Reproduce

1. On the claims landing page, find the "Claim 2" card

### Intended Outcomes (flag enabled)

- [x] A yellow warning va-tag-status reading "ACTION MAY BE NEEDED" appears on the card
- [x] No red error alert appears

## Test Case 3: Claim card with both conditions shows single status tag (no stacked alerts)

### Key Data

- documentsNeeded: true
- Failed evidenceSubmissions: 1 (uploadStatus: FAILED)
- Open NEEDED_FROM_YOU requests: 1

### Steps to Reproduce

1. On the claims landing page, find the "Claim 3" card

### Intended Outcomes (flag enabled)

- [x] A single yellow warning va-tag-status reading "ACTION MAY BE NEEDED" appears on the card
- [x] No blue info alert appears
- [x] No red error alert appears
- [x] Only one tag is shown — the two former alerts are consolidated into a single status indicator

## Test Case 4: Claim card without evidence requests or failed submissions shows no status tag

### Key Data

- documentsNeeded: false
- Failed evidenceSubmissions: none
- Open NEEDED_FROM_YOU requests: 0

### Steps to Reproduce

1. On the claims landing page, find the "Claim 4" card

### Intended Outcomes (flag enabled)

- [x] No "ACTION MAY BE NEEDED" tag appears on the card
- [x] The card shows only the standard info: title, received date, step, last updated, and "Details" link

## Test Case 5: Claim status intro text

### Key Data

- No specific data — tests intro text on Status tab (any claim works)

### Steps to Reproduce

1. Click "Details" on any claim card to navigate to the claim detail page
2. Observe the intro text below the "Claim status" heading

### Intended Outcomes (flag enabled)

- [x] The intro text reads "Review the latest status of your claim."

## Test Case 6: "What you need to do" empty state with no open requests

### Key Data

- documentsNeeded: false
- Failed evidenceSubmissions: none
- Open NEEDED_FROM_YOU requests: 0

### Steps to Reproduce

1. On the claims landing page, find the "Claim 4" card and click "Details"
2. Observe the "What you need to do" section on the Status tab

### Intended Outcomes (flag enabled)

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

### Intended Outcomes (flag enabled)

- [x] The empty state message appears: "There's nothing we need from you right now. We'll let you know when there's an update."
- [x] Below the message, a va-additional-info dropdown appears with trigger text: "Why we still say "Action may be needed" after you've responded"
- [x] Expanding the dropdown shows two paragraphs:
  - (bold) "We're still reviewing your response to an information request." (normal) "The message will go away when we're done."
  - (bold) "You resubmitted files by mail or in person." (normal) "Because we can't track offline submissions, this message stays for 30 days after the last failed submission."

## Test Case 8: "What you need to do" with failed submissions and documentsNeeded but no open requests

### Key Data

- documentsNeeded: true
- Failed evidenceSubmissions: 1 (uploadStatus: FAILED)
- Open NEEDED_FROM_YOU requests: 0 (1 closed/NO_LONGER_REQUIRED)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 6" card and click "Details"
2. Observe the "What you need to do" section on the Status tab

### Intended Outcomes (flag enabled)

- [x] The UploadType2ErrorAlert shows at the top of the "What you need to do" section (error about resubmitting files)
- [x] The empty state message ("There's nothing we need from you right now...") does NOT appear
- [x] The va-additional-info dropdown ("Why we still say 'Action may be needed' after you've responded") DOES appear below the error alert

## Test Case 9: "What you need to do" with open evidence requests shows intro text

### Key Data

- 3 NEEDED_FROM_YOU tracked items (hasOpenRequests = true)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 1" card and click "Details"
2. Observe the "What you need to do" section on the Status tab

### Intended Outcomes (flag enabled)

- [x] Below the "What you need to do" heading, intro text reads: "We identified this information as needed to support your claim. We accept responses after the request date, but it may delay your claim."
- [x] The intro text appears between the heading and the first evidence request card

## Test Case 10: Evidence request cards

### Key Data

- 3 NEEDED_FROM_YOU items:
  - friendlyName: "Authorization to disclose information", suspenseDate: 2025-09-21 (renders as "Sept. 21, 2025")
  - friendlyName: "Witness or corroboration statements", suspenseDate: 2025-10-31 (renders as "Oct. 31, 2025")
  - friendlyName: null (renders as "Request for evidence"), suspenseDate: 2025-01-21 (renders as "Jan. 21, 2025" -- past date, item is overdue)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 1" card and click "Details"
2. Observe the evidence request cards under "What you need to do"

### Intended Outcomes (flag enabled)

- [x] Each evidence request renders as a white va-card (not a yellow warning alert)
- [x] The card contains a title (h4) with the request name
- [x] A description paragraph appears below the title (only when description exists)
- [x] A va-critical-action component at the bottom reads "Requested by [abbreviated date]" (e.g. "Requested by Sept. 21, 2025")
- [x] The date uses VA-style abbreviated months: Jan., Feb., Aug., Sept., Oct., Nov., Dec. (March, April, May, June, July are not abbreviated)
- [x] Clicking the va-critical-action navigates to the evidence request detail page without a full page reload

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

### Intended Outcomes (flag enabled)

- [x] Each "We made a request" item shows a REQUESTED FOR YOU tag below the date instead of a blue alert
- [x] The item without enrichment fields (default message path) shows plain text: "You don't need to do anything. We asked someone outside VA for documents related to your claim."
- [x] The DBQ item (exam request path) shows plain text: "We've requested an exam related to your claim. The examiner's office will contact you to schedule this appointment."
- [x] The item with activityDescription (override message path) shows the activityDescription as plain text
- [x] A "Learn more about this notice" link appears below each "We made a request" item
- [x] "We opened a request" items show "Request for you" as a plain paragraph (unchanged)
- [x] Phase change items show no label or alert (unchanged)

## Test Case 12: Files tab with open evidence requests

### Key Data

- Open NEEDED_FROM_YOU tracked items: 3
- NEEDED_FROM_OTHERS tracked items: 3 (third-party requests)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 1" card and click "Details"
2. Click the "Files" tab

### Intended Outcomes (flag enabled)

- [x] The "Claim files" intro text reads: "Add evidence or review files you've already uploaded for this claim."
- [x] No FilesNeeded cards (yellow warning alerts) appear anywhere on the Files tab
- [x] No FilesOptional cards (blue info alerts) appear anywhere on the Files tab
- [x] A warning alert appears between the "Claim files" header section and the "Upload additional evidence" heading with:
  - Headline: "Review your requests"
  - Body: "You may have evidence requests you haven't responded to yet. Review them before uploading additional evidence here."
  - A secondary "Review requests" action link
- [x] Clicking "Review requests" navigates to the Status tab without a full page reload
- [x] The upload form below the "Upload additional evidence" heading functions normally (file input + "Submit files for review" button are present and usable)

## Test Case 13: Files tab without open evidence requests

### Key Data

- Open NEEDED_FROM_YOU tracked items: 0
- NEEDED_FROM_OTHERS tracked items: 0
- No failed submissions

### Steps to Reproduce

1. On the claims landing page, find the "Claim 4" card and click "Details"
2. Click the "Files" tab

### Intended Outcomes (flag enabled)

- [x] No "Review your requests" warning alert appears
- [x] The upload form appears directly under the "Upload additional evidence" heading

## Test Case 14: Files tab with open requests and failed submissions

### Key Data

- Open NEEDED_FROM_YOU tracked items: 1
- Failed evidenceSubmissions: 1 (uploadStatus: FAILED)

### Steps to Reproduce

1. On the claims landing page, find the "Claim 3" card and click "Details"
2. Click the "Files" tab

### Intended Outcomes (flag enabled)

- [x] The UploadType2ErrorAlert (red error alert about resubmitting files) appears at the top
- [x] No FilesNeeded cards appear
- [x] The "Review your requests" warning alert appears between the header section and the "Upload additional evidence" heading
- [x] Both alerts (the red error and the yellow warning) are visible simultaneously
- [x] The upload form below the "Upload additional evidence" heading functions normally
