# Investigation: MHV Credential Users and Blue Button / Care Summaries Access Issues

**Date:** 2026-03-24
**Investigator:** @MarciMcGuire
**Repositories examined:** `department-of-veterans-affairs/vets-api`, `department-of-veterans-affairs/vets-website`

---

## Problem Statement

Users who sign in with an MHV credential (instead of ID.me or Login.gov) may encounter errors when trying to:
- Download Blue Button reports
- Access care summaries and notes

**Common error messages reported:**
- "No records found"
- "We can't access your care summaries and notes records right now"

---

## Summary of Findings

**Yes, MHV credential users are more likely to encounter access issues** than ID.me/Login.gov users. However, once a user passes authentication and authorization, the actual data fetching is credential-agnostic.

| Scenario | Impact | MHV-Credential-Specific? |
|---|---|---|
| MHV account not "Premium" | Blocked from medical records entirely (403) | ✅ Yes |
| MHV unverified (error 108) | Blocked at sign-in when LOA3 is required | ✅ Yes |
| Missing `mhv_correlation_id` | 403 on all MHV API calls → "can't access records" error | ⚠️ Mostly |
| Missing MPI record for MHV account | Blocked at sign-in (`MHVMissingMPIRecordError`) | ✅ Yes |
| ICN mismatch between MHV and MPI | Blocked at sign-in (error 103) | ✅ Yes |
| "No records found" in Blue Button | Date range/filter mismatch | ❌ No |
| Backend API failure → "can't access records" | System error | ❌ No |

---

## Detailed Analysis

### 1. MHV Correlation ID Validation — The Critical Gate

**File:** [`modules/my_health/app/controllers/concerns/my_health/mhv_controller_concerns.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/866d3dfd6d29407ade335e25ee30e87b75926f94/modules/my_health/app/controllers/concerns/my_health/mhv_controller_concerns.rb)

Every MHV-related medical records API request passes through this `before_action` filter:

```ruby
included do
  before_action :validate_mhv_correlation_id
  before_action :authorize
  before_action :authenticate_client
end

def validate_mhv_correlation_id
  return if current_user.mhv_correlation_id.present?

  Rails.logger.error(
    'MHV correlation ID missing for authenticated user',
    user_uuid: current_user.uuid,
    icn: current_user.icn,
    sign_in_service: current_user.identity&.sign_in&.dig(:service_name),
    loa: current_user.loa,
    controller: self.class.name,
    action: action_name
  )

  raise Common::Exceptions::Forbidden,
        detail: 'Unable to access MHV services. Please try signing in again.'
end
```

**Impact:** If a user's `mhv_correlation_id` is missing or blank, **every medical records API call returns 403 Forbidden**. This surfaces as the "we can't access your records right now" error on the frontend. ID.me/Login.gov users can also lack this value, but it's less common since their MPI lookups typically populate it.

**What to look for in logs:** `MHV correlation ID missing for authenticated user` — the log includes `sign_in_service` which will tell you which credential type hit this error.

---

### 2. MHV Account Level / Premium Check

**File:** [`app/policies/mhv_medical_records_policy.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/866d3dfd6d29407ade335e25ee30e87b75926f94/app/policies/mhv_medical_records_policy.rb)

```ruby
MHVMedicalRecordsPolicy = Struct.new(:user, :mhv_medical_records) do
  MR_ACCOUNT_TYPES = %w[Premium].freeze

  def access?
    if Flipper.enabled?(:mhv_medical_records_new_eligibility_check)
      user.loa3? && mhv_user_account&.patient
    else
      MR_ACCOUNT_TYPES.include?(user.mhv_account_type) && user.va_patient?
    end
  end
end
```

There are **two code paths** depending on the `mhv_medical_records_new_eligibility_check` feature flag:

- **Old path (flag OFF):** Requires `mhv_account_type == "Premium"` AND `va_patient?`. MHV credential users with **Basic** or **Advanced** accounts would be denied access.
- **New path (flag ON):** Requires `loa3?` AND `mhv_user_account.patient`. This is credential-agnostic but still requires identity verification (LOA3).

**Recommendation:** Verify which path is active in production by checking the Flipper state of `mhv_medical_records_new_eligibility_check`.

---

### 3. MHV Unverified Credential Blocking (Error Code 108)

**File:** [`app/services/sign_in/credential_level_creator.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/866d3dfd6d29407ade335e25ee30e87b75926f94/app/services/sign_in/credential_level_creator.rb)

```ruby
def check_required_verification_level
  if unverified_account_with_forced_verification?
    case type
    when Constants::Auth::MHV
      raise_unverified_credential_blocked_error(code: Constants::ErrorCode::MHV_UNVERIFIED_BLOCKED)
    else
      raise_unverified_credential_blocked_error(code: Constants::ErrorCode::GENERIC_EXTERNAL_ISSUE)
    end
  end
end
```

**File:** [`lib/saml/errors.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/866d3dfd6d29407ade335e25ee30e87b75926f94/lib/saml/errors.rb)

```ruby
mhv_unverified_blocked: { code: MHV_UNVERIFIED_BLOCKED_CODE,
                          tag: :mhv_unverified_blocked,
                          message: 'MHV account is unverified for context requiring verified account' }.freeze,
```

**File:** [`app/controllers/v1/sessions_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/866d3dfd6d29407ade335e25ee30e87b75926f94/app/controllers/v1/sessions_controller.rb#L188-L197)

```ruby
def mhv_unverified_validation(user)
  if html_escaped_relay_state['type'] == 'mhv_verified' && user.loa[:current] < LOA::THREE
    mhv_unverified_error = SAML::UserAttributeError::ERRORS[:mhv_unverified_blocked]
    Rails.logger.warn("SessionsController version:v1 #{mhv_unverified_error[:message]}")
    raise SAML::UserAttributeError.new(message: mhv_unverified_error[:message],
                                       code: mhv_unverified_error[:code],
                                       tag: mhv_unverified_error[:tag])
  end
end
```

**Impact:** If an MHV credential user's `mhv_assurance` is not `"Premium"` and the requested ACR requires LOA3/verified identity, the user is **blocked at the authentication level** with error code `108`. They would never even reach the medical records pages.

---

### 4. MHV-Specific Attribute Validation at Sign-In

**File:** [`app/services/sign_in/attribute_validator.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/866d3dfd6d29407ade335e25ee30e87b75926f94/app/services/sign_in/attribute_validator.rb)

```ruby
def validate_credential_attributes
  if mhv_auth?
    credential_attribute_check(:icn, mhv_icn)
    credential_attribute_check(:mhv_uuid, mhv_credential_uuid)
  else
    # ... other credential checks
  end
end

def validate_mhv_mpi_record
  unless mpi_response_profile
    handle_error('No MPI Record for MHV Account',
                 Constants::ErrorCode::GENERIC_EXTERNAL_ISSUE,
                 error: Errors::MHVMissingMPIRecordError)
  end
  attribute_mismatch_check(:icn, mhv_icn, verified_icn)
end
```

**Impact:** MHV credential users have **additional validation checks** at sign-in:
- Must have a valid ICN in the credential
- Must have an `mhv_uuid` (MHV correlation ID)
- Must have a matching MPI record
- The ICN in the credential must match the ICN in MPI

If any of these fail, the user is blocked before reaching any medical records features.

---

### 5. Frontend Error Message Sources

**File:** [`src/applications/mhv-medical-records/components/shared/AccessTroubleAlertBox.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/a69a92e0076ad26495e1c4104a126b47248416fd/src/applications/mhv-medical-records/components/shared/AccessTroubleAlertBox.jsx)

```javascript
<h2 slot="headline" data-testid="expired-alert-message">
  {alertType === accessAlertTypes.DOCUMENT
    ? `We can't download your ${documentType} right now`
    : `We can't access your ${alertType} records right now`}
</h2>
```

- **"We can't access your care summaries and notes records right now"** → triggered when the API call to `/my_health/v1/medical_records/clinical_notes` fails (4xx/5xx)
- The `accessAlertTypes.CARE_SUMMARIES_AND_NOTES` value is `'care summaries and notes'`, which gets interpolated into the error message

**File:** [`src/applications/mhv-medical-records/components/DownloadRecords/DownloadFileType.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/a69a92e0076ad26495e1c4104a126b47248416fd/src/applications/mhv-medical-records/components/DownloadRecords/DownloadFileType.jsx#L547-L560)

```javascript
{isDataFetched && recordCount === 0 && (
  <va-alert data-testid="no-records-alert" status="error">
    <h2 slot="headline" id="no-records-found">No records found</h2>
    <p>We couldn't find any records that match your selection. Go back
       and update the date range or select more record types.</p>
  </va-alert>
)}
```

- **"No records found"** → appears when the API call succeeds but returns zero records for the selected date range and record types. This is **not credential-specific**.

---

### 6. MHV Backend Session Authentication Is Credential-Agnostic

**File:** [`lib/common/client/concerns/mhv_jwt_session_client.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/866d3dfd6d29407ade335e25ee30e87b75926f94/lib/common/client/concerns/mhv_jwt_session_client.rb#L104-L114)

```ruby
def auth_body
  {
    'appId' => '103',
    'appToken' => config.app_token,
    'subject' => icn,
    'userType' => 'PATIENT',
    'authParams' => {
      'PATIENT_SUBJECT_ID_TYPE' => 'ICN'
    }
  }
end
```

Once a user passes authentication + authorization, the actual MHV API calls use **ICN** to identify the patient. The MHV backend doesn't know or care whether the user logged in with MHV, ID.me, or Login.gov. The data returned is identical.

---

## Diagnostic Checklist for Engineers

When investigating a specific user's access issue:

1. **Check the credential type:** What `sign_in_service` did the user use? (look in logs)
2. **Check for `MHV correlation ID missing` logs:** Search for the user's UUID in logs with message `MHV correlation ID missing for authenticated user`
3. **Check the Flipper flag:** Is `mhv_medical_records_new_eligibility_check` enabled?
   - If **OFF**: user needs `mhv_account_type == "Premium"` and `va_patient? == true`
   - If **ON**: user needs `loa3? == true` and `mhv_user_account.patient == true`
4. **Check MHV assurance level:** Is the user's `mhv_assurance` set to `"Premium"`? If not, they may be blocked with error code `108`.
5. **Check MPI record:** Does the user have a valid MPI record with matching ICN?
6. **Check for "no records found" vs "can't access":** These are different failure modes:
   - "No records found" = API succeeded, but no data in selected date range (not credential-related)
   - "Can't access" = API call failed (likely auth/policy failure)

---

## Relevant Code Paths (Quick Reference)

| Component | File | Purpose |
|---|---|---|
| MHV Correlation ID check | `modules/my_health/app/controllers/concerns/my_health/mhv_controller_concerns.rb` | Gates all MHV API calls |
| Medical Records access policy | `app/policies/mhv_medical_records_policy.rb` | Premium/patient check |
| Credential level creator | `app/services/sign_in/credential_level_creator.rb` | Unverified MHV blocking (108) |
| MHV attribute validation | `app/services/sign_in/attribute_validator.rb` | ICN/UUID checks at sign-in |
| Sessions controller | `app/controllers/v1/sessions_controller.rb` | MHV unverified validation |
| SAML error codes | `lib/saml/errors.rb` | Error code definitions |
| Sign-in error codes | `app/services/sign_in/constants/error_code.rb` | Error code constants |
| Frontend error alerts | `src/applications/mhv-medical-records/components/shared/AccessTroubleAlertBox.jsx` | "Can't access records" message |
| Frontend no records | `src/applications/mhv-medical-records/components/DownloadRecords/DownloadFileType.jsx` | "No records found" message |
| Blue Button data fetching | `src/applications/mhv-medical-records/actions/blueButtonReport.js` | BB report API calls |
| Care summaries actions | `src/applications/mhv-medical-records/actions/careSummariesAndNotes.js` | Notes API calls |
| MHV JWT session client | `lib/common/client/concerns/mhv_jwt_session_client.rb` | ICN-based auth to MHV backend |
| MHV account type service | `app/services/mhv_account_type_service.rb` | Determines Premium/Advanced/Basic |

---

## Conclusion

The credential type **does matter** for access to Blue Button and care summaries, but primarily at the **authentication and authorization layers**, not at the data-fetching layer. The most actionable items to investigate for affected users are:

1. Whether their MHV account is Premium-level
2. Whether they have a valid `mhv_correlation_id`
3. Whether their MPI record exists and has matching ICN
4. Which eligibility code path is active (check the Flipper flag)
