# ADR: Adding Metadata to the Claims File Uploader

## Status
**Proposed** - Pending team review

## Context

The claims-status tool file uploader (`AddFilesForm.jsx`) currently collects a file, a document type, and an optional PDF password per file. There is a need to attach additional metadata to each upload — either a data-driven list of labels (checkboxes populated from an API) or a freeform text note — and include that data in the payload sent to the file submission endpoint.

This document should be read alongside **ADR-Multi-Provider-Document-Uploads-Architecture.md**, which proposes routing uploads to different backend providers (Lighthouse, CHAMPVA, etc.) based on claim type. That ADR is directly relevant here: the metadata design must work across all current and future providers, not just Lighthouse.

---

## Current Upload Flow

```
AddFilesForm.jsx
  └─ handleSubmit() builds formattedFiles:
       [{ file, docType: { value }, password: { value } }]
  └─ calls onSubmit(formattedFiles)
       └─ AdditionalEvidencePage.onSubmitFiles()
            └─ submitFiles() Redux action  (actions/index.js)
                 └─ FineUploader.addFiles(file, params)
                      └─ POST /v0/benefits_claims/:claimId/benefits_documents
                           multipart fields: tracked_item_ids, document_type, password
```

The extension point is `actions/index.js` — the extra params object passed to `uploader.addFiles()` becomes additional multipart form fields that vets-api receives. Each file triggers a **separate POST**, so metadata is sent once per file.

---

## How Multi-Provider Changes the Metadata Story

The multi-provider ADR introduces a `provider_id` field that will travel alongside the file payload to tell the backend registry which provider (Lighthouse, CHAMPVA, etc.) should handle the upload. This has three implications for metadata:

### 1. Different providers may need different metadata

Lighthouse may only need `document_type` and `labels`. CHAMPVA may require an authorization code, a member ID, or an entirely different categorization scheme. A metadata design that hardcodes Lighthouse-specific fields will break down as providers are added.

### 2. The generic `metadata` blob is the right answer — and more so now

A single JSON-serialized `metadata` field lets each provider in the registry extract only the keys it understands and ignore the rest. The frontend never needs to know which fields a given provider cares about. This directly supports the multi-provider ADR's goal that "new providers can be added without controller changes."

### 3. Scenario 1 (API-driven checkboxes) should be provider-aware

If labels are data-driven from an API, that API endpoint should accept an optional `provider_id` so it can return the label options relevant to the provider handling the upload. CHAMPVA might surface different categories than Lighthouse. The frontend fetches the right list once it knows the provider.

---

## Payload Design: Generic `metadata` + `provider_id` as Siblings

The final multipart POST payload should carry both the routing hint and the metadata as peer fields:

```
tracked_item_ids: "[null]"
document_type:    "L023"
password:         ""
provider_id:      "lighthouse"          ← (lighthouse, champva, ...)
metadata:         '{"labels":["buddy_statement"],"note":"See attached"}'
```

**Why `metadata` is a separate field from `provider_id`:**
- `provider_id` is a routing instruction for the registry — it affects which provider runs
- `metadata` is business data that the selected provider processes
- Keeping them separate preserves the registry's clean separation of concerns

**Why a single JSON blob for metadata (not individual fields):**
- Adding a new metadata field for a new provider requires zero frontend changes — just update what the provider parses
- The vets-api controller stays thin: it parses `metadata` once and hands the hash to the provider
- Each provider extracts what it needs and ignores the rest
- Easy to version: add `"version": 1` to the blob if the shape needs a breaking change

**vets-api provider interface (conceptual):**
```ruby
# In the provider base class / shared interface
def upload(file, params)
  metadata = JSON.parse(params[:metadata] || '{}')
  # Each provider extracts what it understands:
  #   Lighthouse: metadata['labels'], metadata['note']
  #   CHAMPVA:    metadata['auth_code'], metadata['member_id']
  #   Future:     whatever they need
end
```

---

## Difficulty Assessment

| Area | Effort |
|---|---|
| Scenario 2 — text input | Low — one state var, one `va-text-input`, pipe through payload |
| Scenario 1 — API-driven checkboxes | Medium — fetch (with provider_id), loading/error states, checkbox state |
| Provider-aware label API endpoint | Medium — new vets-api endpoint, keyed by provider |
| `metadata` param in benefits_documents endpoint | Low — parse JSON, hand to provider |
| Per-provider metadata handling in vets-api | Varies per provider implementation |

The metadata work is largely independent of the multi-provider infrastructure work. It can be merged before the provider registry is complete — `metadata` just goes unused until providers are wired to consume it.

---

## Scenario 1: Data-Driven Checkboxes from an API

### Overview

A `fieldset` of checkboxes rendered below the file input, populated from an API endpoint. Selection applies **form-level** (same labels for all files in one submission) to avoid the shadow DOM complexity of per-file custom fields.

In a multi-provider world, the hook accepts a `providerId` so it fetches labels relevant to the provider handling this claim's uploads.

### Step 1 — Custom hook to fetch label options

```js
// src/applications/claims-status/hooks/useDocumentLabels.js
import { useState, useEffect } from 'react';
import { apiRequest } from '@department-of-veterans-affairs/platform-utilities/exports';

export function useDocumentLabels(providerId = 0) {
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      const query = providerId !== 0 ? `?provider_id=${providerId}` : '';
      apiRequest(`/benefits_claims/document_labels${query}`)
        .then(res => setLabels(res.data))
        .catch(() => setError('Could not load document label options.'))
        .finally(() => setLoading(false));
    },
    [providerId],
  );

  return { labels, loading, error };
}
```

Expected API response shape (same structure regardless of provider — provider filters which labels are returned):
```json
{
  "data": [
    { "value": "buddy_statement", "label": "Buddy statement" },
    { "value": "medical_record",  "label": "Medical record" },
    { "value": "service_record",  "label": "Service record" }
  ]
}
```

### Step 2 — Add state and handler in `AddFilesForm.jsx`

`AddFilesForm` receives `providerId` as a prop (passed down from `AdditionalEvidencePage`, which derives it from the claim in Redux state — see the multi-provider ADR's `getProviderIdForClaim` helper).

```jsx
import { useDocumentLabels } from '../../hooks/useDocumentLabels';

// AddFilesForm receives providerId as a prop:
const AddFilesForm = ({ fileTab, onSubmit, uploading, progress, onCancel, providerId = 0 }) => {
  const { labels, loading: labelsLoading } = useDocumentLabels(providerId);
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleLabelChange = (value, checked) => {
    setSelectedLabels(prev =>
      checked ? [...prev, value] : prev.filter(v => v !== value),
    );
  };

  // ... rest of component
};
```

### Step 3 — Render the checkbox group (after `VaFileInputMultiple`, before `VaButton`)

```jsx
{!labelsLoading && labels.length > 0 && (
  <fieldset className="vads-u-margin-top--3">
    <legend className="vads-u-font-weight--bold">
      Document categories (optional)
    </legend>
    <p className="vads-u-margin-top--1 vads-u-margin-bottom--2 vads-u-color--gray-medium">
      Select all that apply to the files you're uploading.
    </p>
    {labels.map(({ value, label }) => (
      <va-checkbox
        key={value}
        label={label}
        name={`doc-label-${value}`}
        checked={selectedLabels.includes(value)}
        onVaChange={e => handleLabelChange(value, e.detail.checked)}
      />
    ))}
  </fieldset>
)}
```

### Step 4 — Include in `handleSubmit`

```jsx
// In handleSubmit(), update the formattedFiles mapping:
const formattedFiles = payload.map(item => ({
  file: item.file,
  docType: { value: item.docType },
  password: { value: item.password },
  metadata: {
    labels: selectedLabels,   // array of selected string values
  },
}));
```

### Step 5 — Pass through `submitFiles` in `actions/index.js`

Per the multi-provider ADR, `submitFiles` will gain a `providerId` param. `metadata` travels alongside it:

```js
// Updated submitFiles signature (aligns with multi-provider ADR):
export function submitFiles(
  claimId,
  trackedItem,
  files,
  showDocumentUploadStatus = false,
  timezoneMitigationEnabled = false,
  providerId = 0,           // ← from multi-provider ADR
  multiProviderEnabled = false, // ← feature flag from multi-provider ADR
) {
  // ...
  const effectiveProviderId = multiProviderEnabled ? providerId : 0;

  const endpoint =
    `${environment.API_URL}/v0/benefits_claims/${claimId}/benefits_documents` +
    (multiProviderEnabled ? `?provider_id=${effectiveProviderId}` : '');

  // ...

  /* eslint-disable camelcase */
  files.forEach(({ file, docType, password, metadata }) => {
    uploader.addFiles(file, {
      tracked_item_ids: JSON.stringify([trackedItemId]),
      document_type: docType.value,
      password: password.value,
      ...(metadata && { metadata: JSON.stringify(metadata) }),
    });
  });
  /* eslint-enable camelcase */
}
```

---

## Scenario 2: Simple Text Input

### Overview

A single freeform text input below the file uploader. Applies to all files in the submission. No API dependency, no provider-awareness required — a free-text note is useful regardless of which provider handles the upload.

### Step 1 — Add state in `AddFilesForm.jsx`

```jsx
const [submissionNote, setSubmissionNote] = useState('');
```

### Step 2 — Render the input (after `VaFileInputMultiple`, before `VaButton`)

```jsx
<va-text-input
  label="Note for reviewer (optional)"
  name="submissionNote"
  value={submissionNote}
  onInput={e => setSubmissionNote(e.target.value)}
  class="vads-u-margin-top--2"
/>
```

### Step 3 — Include in `handleSubmit`

```jsx
const formattedFiles = payload.map(item => ({
  file: item.file,
  docType: { value: item.docType },
  password: { value: item.password },
  metadata: {
    note: submissionNote.trim(),
  },
}));
```

### Step 4 — Pass through `submitFiles` in `actions/index.js`

Same `metadata` spread from Scenario 1 Step 5 handles this — no additional changes needed.

---

## Combining Both Scenarios

Both can be shipped together. The `metadata` object carries both fields and each provider extracts what it uses:

```js
metadata: {
  labels: selectedLabels,       // [] if none selected
  note: submissionNote.trim(),  // '' if empty
}
```

vets-api receives (example with CHAMPVA provider active):
```
provider_id: "champva"
metadata:    '{"labels":["buddy_statement","medical_record"],"note":"Dr. Smith records from 2023"}'
```

The CHAMPVA provider parses `metadata`, uses what it understands (`labels`), and ignores `note` if that field isn't part of its contract. Lighthouse does the same in reverse. Neither needs to know about the other.

---

## What vets-api Needs

### Current endpoint
`/v0/benefits_claims/:claim_id/benefits_documents` handles `tracked_item_ids`, `document_type`, and `password`.

### Changes needed

1. **Accept optional `metadata` param** (string, JSON-encoded) — parse it safely before handing to the provider:
   ```ruby
   metadata = JSON.parse(params[:metadata] || '{}')
   ```

2. **Pass parsed metadata into the provider interface** — the controller hands the hash to whichever provider the registry selected. Each provider extracts what it needs:
   ```ruby
   # Lighthouse provider
   def upload(file, document_type:, tracked_item_ids:, metadata: {}, **)
     labels = metadata['labels'] || []
     note   = metadata['note']   || ''
     # forward to Lighthouse API as appropriate
   end

   # CHAMPVA provider
   def upload(file, document_type:, tracked_item_ids:, metadata: {}, **)
     auth_code = metadata['auth_code']
     member_id = metadata['member_id']
     # forward to CHAMPVA API
   end
   ```

3. **No breaking changes** — `metadata` is optional. Requests without it (existing clients, other tools) continue working unchanged.

Because FineUploader sends each file as a separate multipart POST, vets-api receives `metadata` once per file. If a user uploads 3 files, 3 requests each carry the same `metadata` JSON — correct behavior.

---

## Scenario Comparison

| | Scenario 1 (Checkboxes) | Scenario 2 (Text Input) |
|---|---|---|
| Frontend complexity | Medium — fetch, loading state, checkbox state | Low — one `useState` |
| Provider-awareness needed | Yes — hook accepts `providerId` to fetch correct labels | No — free text is provider-agnostic |
| Per-file vs. form-level | Form-level recommended | Form-level natural |
| Required validation | Optional | Optional |
| vets-api surface | `metadata['labels']` (array of strings) | `metadata['note']` (string) |
| Extensibility | High — add options via API with no frontend change | Low — new fields need new inputs |
| Works before multi-provider lands | Yes — `metadata` ignored until providers consume it | Yes |
| Can be combined | Yes | Yes |

**Recommendation:** Ship Scenario 2 (text input) first as a quick end-to-end proof of the `metadata` pipeline. It requires no new API endpoint and no provider-awareness. Then layer in Scenario 1 once: (a) the multi-provider registry is in place and (b) the `document_labels` endpoint exists for at least one provider.

---

## Relationship to Multi-Provider ADR

| Concern | Multi-Provider ADR | This ADR |
|---|---|---|
| Routing | `provider_id` query param / header | n/a |
| Upload destination | Provider registry | n/a |
| Business data on upload | n/a | `metadata` JSON field |
| Feature flag | `cst_multi_document_provider` | Reuses same flag to gate `provider_id` in endpoint |
| vets-api controller change | Route to provider | Parse `metadata`, pass to provider |
| New provider support | Add provider class | Provider extracts its keys from `metadata` |

The two ADRs are additive. `provider_id` and `metadata` are peers in the multipart payload, governed by separate flags, and neither depends on the other being complete.

---

## Files to Change

| File | Change                                                                                                |
|---|-------------------------------------------------------------------------------------------------------|
| `src/applications/claims-status/components/claim-files-tab/AddFilesForm.jsx` | Add `providerId` prop, state for inputs, include `metadata` in `formattedFiles`                       |
| `src/applications/claims-status/actions/index.js` | Spread `metadata` into `uploader.addFiles()` params; align `providerId` param with multi-provider ADR |
| `src/applications/claims-status/hooks/useDocumentLabels.js` | New file — Scenario 1 only; accepts `providerId`                                                      |
| `src/applications/claims-status/components/claim-files-tab/AdditionalEvidencePage.jsx` | Pass `providerId` down to `AddFilesForm` and to `submitFiles`                                         |
| `vets-api` | Accept `metadata` param; parse and pass hash into provider `upload` interface                         |
| `vets-api` | New `document_labels` endpoint scoped by `type` — Scenario 1 only                                      |

---

## References

- **Related ADR**: `ADR-Multi-Provider-Document-Uploads-Architecture.md`
- **Upload action**: `src/applications/claims-status/actions/index.js:430-615`
- **Form component**: `src/applications/claims-status/components/claim-files-tab/AddFilesForm.jsx`
- **Page component**: `src/applications/claims-status/components/claim-files-tab/AdditionalEvidencePage.jsx`
