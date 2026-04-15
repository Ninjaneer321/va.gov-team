# Form Validation and Error Messages on VA.gov

How form validation works across the front end (vets-website) and back end (vets-api), including the exact error messages Veterans see in each scenario.

**Audience:** Engineers onboarding to the VA.gov forms system.

## Table of Contents

1. [Overview](#overview)
2. [Front End Validation](#front-end-validation)
3. [Back End Validation](#back-end-validation)
4. [What Veterans See](#what-veterans-see)
5. [The Gap: 422 Errors Are Not Surfaced](#the-gap-422-errors-are-not-surfaced)
6. [Source Code References](#source-code-references)

## Overview

VA.gov forms go through two layers of validation before a submission is accepted:

1. **Front end validation** in the browser (vets-website), which runs JSON Schema checks and custom `ui:validations` against all form pages before any network request is made.
2. **Back end validation** on the server (vets-api), which re-validates the submitted JSON payload against the same JSON Schema (from `vets-json-schema`) before persisting or forwarding the claim.

Each layer produces different error messages for the Veteran. Importantly, the back-end returns specific, actionable validation details in its 422 responses, but the front end never parses or displays those details. Veterans see a generic server error message instead.

## Front End Validation

### Submission Flow

When a Veteran reaches the review page and clicks **Submit**, the forms system runs through a sequence managed by `SubmitController.jsx`:

```
┌─────────────────────────────────────┐
│  Veteran clicks "Submit" button     │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Pre-submit check                   │
│  (Statement of Truth / agreement    │
│   checkbox must be checked)         │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  isValidForm(form, pageList)        │
│                                     │
│  Runs JSON Schema validation plus   │
│  custom ui:validations across all   │
│  active pages                       │
└──────┬──────────────────┬───────────┘
       │                  │
   PASS ✓             FAIL ✗
       │                  │
       ▼                  ▼
┌──────────────┐  ┌───────────────────────────┐
│  submitForm  │  │  setSubmission('status',  │
│  POST to API │  │    'validationError')     │
└──────────────┘  │                           │
                  │  Shows ValidationError    │
                  │  or ErrorLinks component  │
                  └───────────────────────────┘
```

### What Happens When Validation Fails

If `isValidForm()` returns false, the system dispatches `setSubmission('status', 'validationError')` and the Veteran stays on the review page. The exact message depends on whether the form has `showReviewErrors` enabled.

#### Default Mode (`showReviewErrors = false`)

Rendered by `ValidationError.jsx`:

> **Title:** "We're sorry. Some information in your application is missing or not valid."
>
> **Body:** "Please check each section of your application to make sure you've filled out all the information that is required."

The word "application" comes from `APP_TYPE_DEFAULT` and can be overridden per form via `formConfig.customText.appType`.

#### Enhanced Mode (`showReviewErrors = true`)

Rendered by `ErrorLinks.jsx`:

> **Title:** "Your application is missing some information"
>
> **Body:** "You'll need to fill in the missing information before you can submit your application"
>
> Then: "Please return to the following N parts of the form:" followed by clickable links to each field that has errors.

This enhanced mode provides a much better experience because it tells the Veteran exactly which fields need attention.

In both modes, a DataDog log is emitted with the message `"Validation issue not displayed"` along with error details for monitoring.

### What Happens After Validation Passes

When front end validation passes, `submitForm(formConfig, form)` fires a POST request to the API endpoint. There are two submission paths:

#### Path A: Default (`submitToUrl`)

Forms that do not define a custom `formConfig.submit` function use `submitToUrl()` inside `actions.js`, which classifies errors:

```
┌──────────────────────────────────────┐
│  POST to API via submitToUrl()       │
└──────────┬───────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│  HTTP Response                       │
├──────────┬───────────┬───────┬───────┤
│ 200-299  │   403     │  429  │ Other │
│          │           │       │(incl. │
│          │           │       │ 422)  │
└────┬─────┴─────┬─────┴───┬───┴───┬───┘
     │           │         │       │
     ▼           ▼         ▼       ▼
  Success    Token      Throttle  Server
  (saved)    refresh    error     error
              attempt
```

The `submitForm()` function then maps internal error types to display categories:

| Internal Error Type     | Display Category   | Component Shown    |
|-------------------------|--------------------|--------------------|
| (success)               | `setSubmitted`     | Confirmation page  |
| `vets_throttled_error`  | `throttledError`   | ThrottledError     |
| `vets_server_error`     | `serverError`      | GenericError *     |
| (anything else)         | `clientError`      | ClientError        |

\* There is no explicit case for `serverError` in `SubmitButtons.jsx`, so it falls through to the `GenericError` component.

#### Path B: Custom Submit Function (e.g., 686c/674)

Some forms define a custom `formConfig.submit` function that bypasses `submitToUrl()`. For example, the 686c/674 form uses `src/applications/dependents/686c-674/config/submit.js`, which calls `apiRequest()` (the platform's fetch wrapper) directly.

In this path, a 422 response flows differently:

1. `apiRequest` rejects with the parsed error response object (not a string)
2. It is not a 429, so `onFailure` calls `Promise.reject(respOrError)`
3. Back in `submitForm()`, the rejected value is not an `Error` instance, so it gets wrapped: `new Error(errorReceived)`, producing a message like `"[object Object]"`
4. Since the message does not start with `vets_server_error` or `vets_throttled_error`, it is classified as **`clientError`**
5. The Veteran sees the **`ClientError`** component: **"We're sorry, there was an error connecting to VA.gov."**

This means that for forms with a custom submit function, a 422 error shows the network error message rather than the generic server error message. This is the current behavior for the 686c/674 form.

## Back End Validation

### How It Works

When the front end POSTs a form submission to vets-api, the controller creates a `SavedClaim` (or a subclass such as `SavedClaim::DependencyClaim`). The model runs two validators:

1. **`form_must_be_string`**: Ensures the form data is a valid JSON string.
2. **`form_matches_schema`**: Validates the form data against the corresponding JSON Schema from the `vets-json-schema` gem.

If either validator fails, `claim.save` returns `false` and the controller raises `Common::Exceptions::ValidationErrors`.

### The 422 Response

`ValidationErrors` is defined in `lib/common/exceptions/validation_errors.rb`. It uses	 data from `config/locales/exceptions.en.yml`:

```yaml
validation_errors:
  title: Validation error
  code: 100
  status: 422
```

The response body follows this structure:

```json
{
  "errors": [
    {
      "title": "Validation error",
      "detail": "veteran-address - can't be blank",
      "code": "100",
      "status": "422",
      "source": {
        "pointer": "data/attributes/veteran-address"
      }
    }
  ]
}
```

The `detail` field contains specific, actionable information about what failed (for example, `"veteran-address - can't be blank"` or `"form - did not pass schema validation"`). However, as described in [The Gap](#the-gap-422-errors-are-not-surfaced), these details are never shown to the Veteran.

## What Veterans See

This table summarizes every error scenario, the component that renders it, and the exact message displayed:

### Scenario 1: Front End Validation Failure (Default Mode)

| Field            | Value |
|------------------|-------|
| **Trigger**      | `isValidForm()` returns false; `showReviewErrors` is false |
| **Component**    | `ValidationError.jsx` |
| **Alert Title**  | "We're sorry. Some information in your application is missing or not valid." |
| **Alert Body**   | "Please check each section of your application to make sure you've filled out all the information that is required." |

### Scenario 2: Front End Validation Failure (Enhanced Mode)

| Field            | Value |
|------------------|-------|
| **Trigger**      | `isValidForm()` returns false; `showReviewErrors` is true |
| **Component**    | `ErrorLinks.jsx` |
| **Alert Title**  | "Your application is missing some information" |
| **Alert Body**   | "You'll need to fill in the missing information before you can submit your application" |
| **Additional**   | "Please return to the following N parts of the form:" followed by clickable links to each field with errors |

### Scenario 3: Network or Client Error

| Field            | Value |
|------------------|-------|
| **Trigger**      | Network failure, request abort, or timeout |
| **Component**    | `ClientError.jsx` |
| **Alert Title**  | "We're sorry, there was an error connecting to VA.gov." |
| **Alert Body**   | "Please check your Internet connection and try again." |

### Scenario 4: Rate Limiting (HTTP 429)

| Field            | Value |
|------------------|-------|
| **Trigger**      | API returns HTTP 429 |
| **Component**    | `ThrottledError.jsx` |
| **Alert Title**  | "We've run into a problem" |
| **Alert Body**   | "We're sorry. Your submission didn't go through because we received too many requests from you. Please wait [time] and submit your request again." |

### Scenario 5: Server Error with Save in Progress Enabled

| Field            | Value |
|------------------|-------|
| **Trigger**      | API returns any error status (including 422); `formConfig.disableSave` is false |
| **Component**    | `GenericError.jsx` rendering `FormSaveErrorMessage.jsx` |
| **Alert Title**  | "We're sorry. We can't submit your application right now." |
| **Alert Body**   | "We're working to fix the problem. Please make sure you're connected to the internet, and then try saving your application again." |
| **If logged in** | Shows a "Save your application" link |
| **If not logged in** | "If you don't have an account, you'll have to start over. Try submitting your application again tomorrow." |
| **Footer**       | "If it still doesn't work, please call the VA.gov Help Desk..." (rendered via the CallHRC component) |

### Scenario 6: Server Error with Custom Error Handler

| Field            | Value |
|------------------|-------|
| **Trigger**      | API returns an error; `formConfig.submissionError` is set |
| **Component**    | `GenericError.jsx` rendering the custom component defined in `formConfig.submissionError` |
| **Alert Content** | Varies per form |

### Scenario 7: Server Error Fallback (No Save, No Custom Handler)

| Field            | Value |
|------------------|-------|
| **Trigger**      | API returns an error; `formConfig.disableSave` is true and no `submissionError` handler |
| **Component**    | `GenericError.jsx` fallback path |
| **Alert Title**  | "We're sorry, the application didn't go through." |
| **Alert Body**   | "You'll have to start over. We suggest you wait 1 day while we fix this problem." |

### Quick Reference Table

| Scenario | HTTP Status | Alert Title (abbreviated) |
|----------|-------------|--------------------------|
| Front end validation (default) | N/A (no request made) | "Some information...is missing or not valid" |
| Front end validation (enhanced) | N/A (no request made) | "Your application is missing some information" |
| Network/client error | No response | "Error connecting to VA.gov" |
| Rate limiting | 429 | "We've run into a problem" |
| Server error (save enabled, default submit) | 4xx/5xx (not 429) | "We can't submit your application right now" |
| Server error (fallback) | 4xx/5xx (not 429) | "The application didn't go through" |
| **422 via custom submit (e.g., 686c/674)** | **422** | **"Error connecting to VA.gov"** |

## The Gap: 422 Errors Are Not Surfaced

There is a significant gap between what the back end returns and what the Veteran sees.

**What the back end sends:**

```json
{
  "errors": [
    {
      "title": "Validation error",
      "detail": "veteran-address - can't be blank",
      "code": "100",
      "status": "422"
    }
  ]
}
```

**What the Veteran sees:**

The exact message depends on the submission path:

- **Forms using the default `submitToUrl()`:** "We're sorry. We can't submit your application right now."
- **Forms using a custom submit function (e.g., 686c/674):** "We're sorry, there was an error connecting to VA.gov." (the `ClientError` message, because the rejected response object is not classified as a `vets_server_error`)

In both cases, the specific validation error details in the response body are never parsed, never logged to the UI, and never shown to the Veteran.

### Why This Matters

1. **Veterans cannot self-correct.** If the back end rejects a submission because of a specific field (for example, a missing address or an invalid date format), the Veteran has no way of knowing what to fix. They see a generic "try again later" message.

2. **This should be rare in practice.** Because the front end validates against the same JSON Schema before submitting, a 422 from the back end usually indicates a discrepancy between the front end schema and the back end schema, or a transformation error in the data before it reaches the API.

3. **Debugging requires server logs.** When a 422 does occur, engineers must look at server side logs or Sentry to find the actual validation error details. The front end does not log the response body for 422 errors in a way that is easily discoverable.

### Potential Improvements

- Parse 422 responses and surface the `detail` field to the Veteran, either inline or as a list of specific field errors (similar to how `ErrorLinks.jsx` works for front end validation failures).
- At minimum, log the 422 response body to DataDog on the front end so engineers can correlate client side error reports with server side validation details.
- Ensure schema versions stay synchronized between `vets-website` and `vets-api` to minimize the chance of 422 errors occurring after front end validation passes.

## Source Code References

### Front End (vets-website)

| File | Description |
|------|-------------|
| [SubmitController.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/SubmitController.jsx) | Orchestrates the submit flow: pre-submit check, validation, and API call |
| [actions.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/actions.js) | Contains `submitForm()` and `submitToUrl()` which handle API responses and error classification |
| [validation.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/validation.js) | Contains `isValidForm()` and JSON Schema validation logic |
| [SubmitButtons.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/SubmitButtons.jsx) | Routes to the correct error component based on `submission.status` |
| [ValidationError.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/submit-states/ValidationError.jsx) | Default validation error alert (no field links) |
| [ErrorLinks.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/submit-states/ErrorLinks.jsx) | Enhanced validation error alert with clickable links to each invalid field |
| [ClientError.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/submit-states/ClientError.jsx) | Network failure / timeout error alert |
| [ThrottledError.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/submit-states/ThrottledError.jsx) | Rate limiting (429) error alert |
| [GenericError.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/review/submit-states/GenericError.jsx) | Catch all server error component with three sub paths |
| [FormSaveErrorMessage.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms/components/review/FormSaveErrorMessage.jsx) | Error message shown when save in progress is enabled |
| [ErrorMessage.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms/components/common/alerts/ErrorMessage.jsx) | Base error message component |
| [686c/674 submit.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/dependents/686c-674/config/submit.js) | Custom submit function for 686c/674; bypasses `submitToUrl()`, uses `apiRequest()` directly |

### Back End (vets-api)

| File | Description |
|------|-------------|
| [SavedClaim model](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/saved_claim.rb) | Model with `form_must_be_string` and `form_matches_schema` validators |
| [ValidationErrors](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/exceptions/validation_errors.rb) | Exception class that generates the 422 response |
| [exceptions.en.yml](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/locales/exceptions.en.yml) | i18n strings for error responses including the "Validation error" title and code |
