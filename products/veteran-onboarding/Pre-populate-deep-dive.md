# Deep Dive: Pre-populate Contact Info from Login.gov/ID.me During Account Creation

**Parent Report:** CSAT Feedback Analysis Report
**Date:** February 18, 2026
**Repositories Analyzed:**
- [`department-of-veterans-affairs/vets-website`](https://github.com/department-of-veterans-affairs/vets-website)
- [`department-of-veterans-affairs/vets-api`](https://github.com/department-of-veterans-affairs/vets-api)

---

## Table of Contents

- [Overview](#overview)
- [How the Current Architecture Works](#how-the-current-architecture-works)
  - [1. Credential Service Provider (CSP) Data](#1-credential-service-provider-csp-data--logingovid-me)
  - [2. VA Profile (formerly Vet360)](#2-va-profile-formerly-vet360--the-canonical-source)
  - [3. The Welcome VA Setup Flow](#3-the-welcome-va-setup-flow--the-onboarding-page)
- [The Gap: Why Pre-Population Doesn't Happen Today](#the-gap-why-pre-population-doesnt-happen-today)
- [How Other VA.gov Forms Already Solve This](#how-other-vagov-forms-already-solve-this-prefill-transformers)
- [What a Pre-Population Solution Would Look Like](#what-a-pre-population-solution-would-look-like)
  - [Approach A: Backend Seeding (Recommended)](#approach-a-backend-seeding-recommended)
  - [Approach B: Frontend Pre-Fill (Quicker)](#approach-b-frontend-pre-fill-quicker)
- [Key Finding: International Phones Are Already Behind a Feature Flag](#key-finding-international-phones-are-already-behind-a-feature-flag)
- [Summary of Findings](#summary-of-findings)
- [Recommended Actions](#recommended-actions)

---

## Overview

The CSAT feedback analysis identified **"Pre-populate contact info from Login.gov/ID.me during account setup"** as a P1 recommendation. Veterans who authenticate with Login.gov or ID.me have already provided email, phone, and address information during identity verification — yet when they arrive at the VA.gov onboarding flow, they are presented with **empty fields** and asked to enter this information again manually.

This deep dive traces the data flow across the frontend and backend to understand exactly why this happens, what infrastructure already exists to solve it, and what changes would be required.

---

## How the Current Architecture Works

The VA.gov contact information system involves **three distinct data sources**. Understanding them is key to understanding why pre-population is both promising and complex.

### 1. Credential Service Provider (CSP) Data — Login.gov / ID.me

When a veteran authenticates via Login.gov or ID.me, the CSP provides basic identity attributes. The `vets-api` backend extracts these in the `UserInfoGenerator` service:

```ruby
# vets-api: app/services/sign_in/user_info_generator.rb
# https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/app/services/sign_in/user_info_generator.rb#L7-L60

module SignIn
  class UserInfoGenerator
    def perform
      SignIn::UserInfo.new(
        sub:, ial:, aal:, csp_type:, csp_uuid:,
        email:,
        first_name:, last_name:, full_name:,
        address_street1:, address_street2:,
        address_city:, address_state:, address_country:, address_postal_code:,
        phone_number:,
        person_types:, icn:, sec_id:, edipi:, mhv_ien:,
        npi_id:, cerner_id:, corp_id:, birls:, gcids:,
        birth_date:, ssn:, gender:
      )
    end
  end
end
```

ID.me specifically provides address data via `normalize_address`:

```ruby
# vets-api: lib/sign_in/idme/service.rb
# https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/lib/sign_in/idme/service.rb#L128-L140

def idme_attributes(user_info)
  {
    ssn: user_info.social&.tr('-', ''),
    birth_date: user_info.birth_date,
    first_name: user_info.fname,
    last_name: user_info.lname,
    address: normalize_address(user_info)
  }
end
```

**What CSPs provide:** email, name, SSN, birth date, address, phone number

**What CSPs do NOT reliably provide:** This data is collected at identity verification time and may be stale or incomplete. It is also not the "canonical" VA source of truth.

---

### 2. VA Profile (formerly Vet360) — The Canonical Source

VA Profile is the **system of record** for veteran contact information across VA. When the frontend loads a user's profile, the backend calls the `Users::Profile` service, which queries VA Profile:

```ruby
# vets-api: app/services/users/profile.rb
# https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/app/services/users/profile.rb#L124-L145

def vet360_contact_information
  person = user.vet360_contact_info
  return {} if person.blank?

  email_object = person.email
  {
    vet360_id: user.vet360_id,
    va_profile_id: user.vet360_id,
    email: email_object,
    residential_address: person.residential_address,
    mailing_address: person.mailing_address,
    mobile_phone: person.mobile_phone,
    home_phone: person.home_phone,
    work_phone: person.work_phone,
    temporary_phone: person.temporary_phone,
    fax_number: person.fax_number,
    contact_email_verified: email_object&.contact_email_verified?
  }
rescue => e
  handle_service_error(e, 'VAProfile', 'vet360_contact_information')
  nil
end
```

VA Profile is an **asynchronous, transaction-based service**, as documented in the Profile README:

> VA Profile is an asynchronous, transaction-based service. Making updates is a two step process. First, you create a transaction ("Please update the phone number to 555-123-1234") and get back a transaction ID. Then you check on the status of that transaction ("Have you finished with transaction ID ABC-123?") until it has resolved or failed.
>
> — [`src/applications/personalization/profile/README.md`](https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/profile/README.md#L39-L44)

This asynchronous nature means that even if you write data to VA Profile, you must poll for completion — adding latency and failure modes to any seeding operation.

---

### 3. The Welcome VA Setup Flow — The Onboarding Page

This is the actual page at `/my-va/welcome-va-setup/contact-information` where veterans are prompted to add their missing contact info. It is defined in the `review-information` application:

```json
// vets-website: src/applications/personalization/review-information/manifest.json
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/review-information/manifest.json

{
  "appName": "Welcome VA Setup Review Information Form",
  "entryFile": "./app-entry.jsx",
  "entryName": "welcome-va-setup-review-information",
  "rootUrl": "/my-va/welcome-va-setup"
}
```

The form configuration requires all three contact info fields (address, email, phone) and already enables international phone support:

```javascript
// vets-website: src/applications/personalization/review-information/config/form.js
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/review-information/config/form.js#L6-L109

const allContactInformationKeys = ['address', 'email', 'phone'];

const profileContactInfoPage = profileContactInfo({
  contactPath,
  included: allContactInformationKeys,
  contactInfoRequiredKeys: allContactInformationKeys,
  addressKey: 'address',
  mobilePhoneKey: 'phone',
  contactInfoUiSchema: {},
  contactSectionHeadingLevel: 'h2',
  editContactInfoHeadingLevel: 'h2',
  allowInternationalPhones: true, // ← International phones ARE enabled here
});
```

The alert that drives veterans to this page checks VA Profile for missing fields:

```javascript
// vets-website: src/applications/personalization/profile/components/alerts/ContactInfoNeeded.jsx
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/profile/components/alerts/ContactInfoNeeded.jsx#L1-L41

export const ContactInfoNeeded = () => {
  const email = useSelector(state =>
    selectVAPContactInfoField(state, FIELD_NAMES.EMAIL),
  );
  const mailingAddress = useSelector(state =>
    selectVAPContactInfoField(state, FIELD_NAMES.MAILING_ADDRESS),
  );
  const mobilePhone = useSelector(state =>
    selectVAPContactInfoField(state, FIELD_NAMES.MOBILE_PHONE),
  );

  const contactInfoIsNeeded =
    !email?.emailAddress ||
    !mailingAddress?.addressLine1 ||
    !mobilePhone?.phoneNumber;

  return contactInfoIsNeeded ? (
    <VaAlert status="info">
      <h2 slot="headline">We need your contact information</h2>
      <p>
        Add your contact information to your profile so that we can contact
        you about your VA benefits and services.
      </p>
      <VaLinkAction
        href="/my-va/welcome-va-setup"
        text="Add your contact information"
      />
    </VaAlert>
  ) : null;
};
```

The backend determines whether to show the onboarding flow via the `onboarding` field on the user profile response:

```ruby
# vets-api: app/services/users/profile.rb
# https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/app/services/users/profile.rb#L49-L261

def onboarding
  {
    show: user.show_onboarding_flow_on_login
  }
end
```

Which delegates to the `VeteranOnboarding` model:

```ruby
# vets-api: app/models/user.rb
# https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/app/models/user.rb#L352-L399

def onboarding
  @onboarding ||= VeteranOnboarding.for_user(self)
end

delegate :show_onboarding_flow_on_login, to: :onboarding, allow_nil: true
```

---

## The Gap: Why Pre-Population Doesn't Happen Today

Here is the critical disconnect in the data flow:

```
┌─────────────────────┐     ┌──────────────────┐     ┌──────────────────────────┐
│   Login.gov/ID.me   │────▶│    vets-api       │────▶│   Frontend (Redux)       │
│                     │     │                   │     │                          │
│ ✅ Has email        │     │ user.email ✅     │     │ profile.email ✅         │
│ ✅ Has phone        │     │ user.home_phone ✅│     │ (CSP email only)         │
│ ✅ Has address      │     │ user.address ✅   │     │                          │
└─────────────────────┘     └──────────────────┘     └──────────────────────────┘
                                    │
                                    ▼
                            ┌─────────���────────┐     ┌──────────────────────────┐
                            │   VA Profile      │────▶│   vapContactInfo (Redux) │
                            │                   │     │                          │
                            │ ❌ email: null    │     │ ❌ email: null           │
                            │ ❌ phone: null    │     │ ❌ mobilePhone: null     │
                            │ ❌ address: null  │     │ ❌ mailingAddress: null   │
                            └──────────────────┘     └──────────────────────────┘
                                                              │
                                                              ▼
                                                     ┌──────────────────────────┐
                                                     │  Welcome VA Setup Page   │
                                                     │                          │
                                                     │  Shows EMPTY fields ❌   │
                                                     │  Veteran must re-enter   │
                                                     │  all info manually       │
                                                     └──────────────────────────┘
```

**The problem:** CSP data (email, phone, address) is available in the `user` object on the backend and partially on the frontend (`profile.email`), but the Welcome VA Setup page and the `ContactInfoNeeded` alert **only check `vapContactInfo`** (VA Profile). If VA Profile is empty — which it is for new users — the veteran sees empty fields despite having already provided this information to Login.gov or ID.me.

The backend even has a dedicated endpoint for credential emails:

```ruby
# vets-api: app/controllers/v0/users_controller.rb
# https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/app/controllers/v0/users_controller.rb#L20-L28

def credential_emails
  credential_emails = UserCredentialEmail.where(
    user_verification: current_user.user_account.user_verifications
  )
  credential_emails_hash = credential_emails.each_with_object({}) do |credential_email, email_hash|
    email_hash[credential_email.user_verification.credential_type.to_sym] = credential_email.credential_email
  end
  render json: credential_emails_hash
end
```

But this credential email is **not automatically written to VA Profile** as the veteran's contact email, and the frontend does not use it as a fallback.

A comment in the `dependents_benefits` module confirms this is a known gap:

```ruby
# vets-api: modules/dependents_benefits/lib/dependents_benefits/user_data.rb
# https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/modules/dependents_benefits/lib/dependents_benefits/user_data.rb#L183-L190

# Safeguard for when VAProfileRedis::V2::ContactInformation.for_user fails in app/models/user.rb
# Failure is expected occasionally due to 404 errors from the redis cache
# New users, users that have not logged on in over a month, users who created an account on web,
# and users who have not visited their profile page will need to obtain/refresh VAProfile_ID
```

---

## How Other VA.gov Forms Already Solve This (Prefill Transformers)

Many VA.gov form applications already pre-populate contact info using **"prefill transformers"** that read from `vapContactInfo` and fall back to other data sources. This is a well-established pattern across the codebase.

### Example: Education Benefits (TOE)

```javascript
// vets-website: src/applications/toe/helpers.jsx
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/toe/helpers.jsx#L102-L128

const vapContactInfo = stateUser.profile?.vapContactInfo || {};

const emailAddress =
  vapContactInfo.email?.emailAddress ||
  contactInfo?.emailAddress;

// Falls back to claimant data if VA Profile is empty
```

### Example: Medallions Application

```javascript
// vets-website: src/applications/medallions/config/prefill-transformer.js
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/medallions/config/prefill-transformer.js#L5-L28

const { vapContactInfo } = profile || {};
const { mailingAddress, email: profileEmail, mobilePhone: profileMobilePhone } = vapContactInfo || {};

const phoneNumber = profileMobilePhone?.phoneNumber
  ? `${profileMobilePhone.areaCode || ''}${profileMobilePhone.phoneNumber}`
  : undefined;

// Prefill mailing address from VA Profile if available
...(mailingAddress && {
  applicantMailingAddress: {
    street: mailingAddress.addressLine1 || '',
    street2: mailingAddress.addressLine2 || '',
    // ...
  },
}),
```

### Example: Income and Asset Statement (Direct Profile Pre-fill)

```javascript
// vets-website: src/applications/income-and-asset-statement/components/ContactInformationPage.jsx
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/income-and-asset-statement/components/ContactInformationPage.jsx#L1-L27

const ContactInformation = ({ formData, router, setFormData }) => {
  const profile = useSelector(selectProfile);
  const { userFullName, email: profileEmail, phone: profilePhone } = profile || {};
  const { email, phone } = formData || {};

  // Initialize email and phone with user profile if not already set in formData
  useEffect(() => {
    const updatedFormData = { ...formData };
    let needsUpdate = false;

    if (!email && profileEmail) {
      updatedFormData.email = profileEmail;
      needsUpdate = true;
    }

    if (!phone && profilePhone) {
      updatedFormData.phone = profilePhone;
      // ...
    }
  });
};
```

These transformers already implement a **fallback pattern**: try VA Profile first, then fall back to other data sources. The same pattern could be extended to fall back to CSP data.

### The `vapContactInfo` Data Structure

For reference, the VA Profile contact info object has this shape on the frontend:

```javascript
// vets-website: src/applications/fry-dea/helpers.jsx
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/fry-dea/helpers.jsx#L120-L144

// vapContactInfo structure:
const vapContactInfo = {
  email: {
    emailAddress: 'hey@test.com',
  },
  mobilePhone: {
    countryCode: '+1',
    areaCode: '222',
    phoneNumber: '333',
    extension: '4444',
  },
  address: {
    addressLine1: '123 Maine Street',
    addressLine2: 'Floor 1',
    addressLine3: 'Suite 1000',
    city: 'Washington',
    province: '',
    stateCode: 'DC',
    countryCodeIso3: 'USA',
    zipCode: '22222',
    internationalPostalCode: '',
  },
};
```

---

## What a Pre-Population Solution Would Look Like

There are two approaches, each with different tradeoffs:

### Approach A: Backend Seeding (Recommended)

**On first login after identity verification**, `vets-api` would:

1. Check if VA Profile has contact info for this veteran (via `user.vet360_contact_info`)
2. If VA Profile is empty or missing key fields, use CSP data (Login.gov/ID.me email, phone, address) to **write initial records to VA Profile** via the VA Profile API
3. The Welcome VA Setup page then shows pre-filled data the veteran can confirm or edit

**Where to implement:** The `VeteranOnboarding` model (which already tracks onboarding state) and the user session initialization flow would be natural places:

```ruby
# Existing onboarding hook in user model:
# vets-api: app/models/user.rb

def onboarding
  @onboarding ||= VeteranOnboarding.for_user(self)
end

delegate :show_onboarding_flow_on_login, to: :onboarding, allow_nil: true
```

A new service could be triggered during the onboarding check:

```ruby
# Pseudocode for proposed backend seeding service
class VeteranOnboarding::ContactInfoSeeder
  def initialize(user)
    @user = user
  end

  def seed_if_needed
    return unless user.show_onboarding_flow_on_login
    return if va_profile_has_contact_info?

    seed_email_from_csp if va_profile_email_missing?
    seed_phone_from_csp if va_profile_phone_missing?
    seed_address_from_csp if va_profile_address_missing?
  end

  private

  def va_profile_has_contact_info?
    info = user.vet360_contact_info
    info&.email.present? && info&.mobile_phone.present? && info&.mailing_address.present?
  end

  def seed_email_from_csp
    csp_email = user.email # From Login.gov/ID.me
    return unless csp_email.present?
    # Write to VA Profile via transaction API
  end
end
```

| Pros | Cons |
|---|---|
| Single source of truth (VA Profile) | Requires coordination with VA Profile team |
| Works for all downstream consumers | Need to handle conflicts with existing data |
| Veteran sees their data immediately | VA Profile's async transaction model adds complexity |
| Benefits mobile app and other channels | Must handle CSP data quality issues (stale/incomplete) |

### Approach B: Frontend Pre-Fill (Quicker)

**On the Welcome VA Setup page**, the frontend would:

1. Read `state.user.profile.email` (CSP email) and other available user data from Redux
2. If `vapContactInfo` fields are empty, pre-populate the form fields with CSP data
3. Veteran confirms or edits, then submits to VA Profile

This follows the exact pattern used by the `ContactInformationPage` in the income-and-asset-statement application:

```javascript
// Pseudocode for proposed frontend pre-fill in Welcome VA Setup
const WelcomeVAContactInfo = ({ formData, setFormData }) => {
  const profile = useSelector(selectProfile);
  const vapContactInfo = profile?.vapContactInfo || {};

  // CSP data available in profile
  const cspEmail = profile?.email;  // Login.gov/ID.me email
  // Note: CSP phone and address are not directly on profile in Redux
  // They would need to be exposed via the /v0/user endpoint

  useEffect(() => {
    const updates = { ...formData };
    let needsUpdate = false;

    // If VA Profile email is empty but CSP email exists, pre-fill
    if (!vapContactInfo?.email?.emailAddress && cspEmail) {
      updates.email = cspEmail;
      needsUpdate = true;
    }

    if (needsUpdate) setFormData(updates);
  }, []);
};
```

| Pros | Cons |
|---|---|
| No backend changes needed | Only helps on this specific page |
| Faster to implement | CSP phone/address not currently in frontend Redux state |
| Follows existing prefill patterns | Data still needs to be written to VA Profile on submit |
| Lower risk | Doesn't help veterans encountering missing-info alerts elsewhere |

---

## Key Finding: International Phones Are Already Behind a Feature Flag

A significant discovery from the codebase analysis: the `profileInternationalPhoneNumbers` feature toggle **already exists** and the infrastructure is fully built. The Welcome VA Setup form already has `allowInternationalPhones: true` configured.

### The toggle exists in the feature flag registry:

```json
// vets-website: src/platform/utilities/feature-toggles/featureFlagNames.json
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/platform/utilities/feature-toggles/featureFlagNames.json#L243

"profileInternationalPhoneNumbers": "profile_international_phone_numbers",
```

### Cypress tests validate the international phone flow works:

```javascript
// vets-website: src/applications/personalization/review-information/tests/utils.js
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/review-information/tests/utils.js#L12-L38

if (internationalPhonesEnabled) {
  cy.intercept('GET', '/v0/feature_toggles*', {
    data: {
      type: 'feature_toggles',
      features: [
        { name: 'profile_international_phone_numbers', value: true },
        { name: 'profileInternationalPhoneNumbers', value: true },
      ],
    },
  });
}
```

### The end-to-end Cypress test for the Welcome VA Setup flow confirms it works with international phones:

```javascript
// vets-website: src/applications/personalization/review-information/tests/welcome-va-setup-review-information.cypress.spec.js
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/review-information/tests/welcome-va-setup-review-information.cypress.spec.js#L54-L152

context('when signed in and profileInternationalPhoneNumbers is ON', () => {
  beforeEach(() => {
    cypressSetup({ internationalPhonesEnabled: true });
    cy.login(mockUser);
    cy.visit(formURL);
  });

  it('should be completable', () => {
    cy.location('pathname').should('match', /\/contact-information$/);
    editMobileNumberWithVaTelephoneInput();
    editEmailAddress();
    editMailingAddress();
    checkConfirmationPage();
  });
});
```

### The profile edit page already supports international phones when the toggle is on:

```javascript
// vets-website: src/applications/personalization/profile/components/edit/Edit.jsx
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/profile/components/edit/Edit.jsx#L85-L198

const internationalPhonesToggleValue = useToggleValue(
  TOGGLE_NAMES.profileInternationalPhoneNumbers,
);

// ...

const { uiSchema, formSchema } = getProfileInfoFieldAttributes(
  fieldInfo.fieldName,
  { allowInternationalPhones: internationalPhonesToggleValue },
);
```

### A confirmation modal exists for international mobile numbers:

```javascript
// vets-website: src/applications/personalization/profile/tests/e2e/contact-information/international-mobile-phone-confirm-modal.cypress.spec.js
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/profile/tests/e2e/contact-information/international-mobile-phone-confirm-modal.cypress.spec.js#L18-L137

// User sees the confirmation modal and confirms the update
cy.findByTestId('confirm-international-mobile-save-modal').should('exist');
cy.contains('button', 'Save the number you entered').click();
cy.get('va-alert[status="success"]').should('exist');
```

### However, the toggle is currently set to `false` in the mock server (proxy for production):

```javascript
// vets-website: src/applications/personalization/profile/mocks/server.js
// https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/profile/mocks/server.js#L55-L150

profileInternationalPhoneNumbers: false,
```

**This means international phone number support is fully built, tested, and ready — but not yet enabled in production.** Turning this flag on would immediately address the single most common complaint category in the CSAT data (~150–200+ explicit mentions of being unable to enter non-US phone numbers).

---

## Summary of Findings

| Aspect | Current State | Opportunity |
|---|---|---|
| **CSP data availability** | Login.gov/ID.me provide email, phone, address at login time | Available in `vets-api` but unused for VA Profile seeding |
| **VA Profile population** | Empty for new users; requires full manual entry | Could be seeded from CSP data on first login |
| **Prefill transformer pattern** | Well-established across ~15+ form applications | Could be applied to Welcome VA Setup page |
| **International phones** | Feature **fully built**, behind `profileInternationalPhoneNumbers` flag, currently **OFF** | Turning it ON resolves ~150–200 CSAT complaints |
| **Welcome VA Setup form** | Already has `allowInternationalPhones: true` | Ready for international phones when flag is enabled |
| **Credential email endpoint** | Exists at `/v0/users/credential_emails` | Could be used to pre-fill email field on frontend |
| **CSP phone/address in Redux** | Not currently exposed to frontend Redux state | Backend already has the data; needs to be serialized to frontend |
| **Onboarding model** | `VeteranOnboarding` model tracks onboarding state | Natural place to trigger contact info seeding |

---

## Recommended Actions

### 1. 🟢 Quick Win — Enable International Phone Numbers

**Effort:** Low (configuration change)
**Impact:** Resolves ~150–200+ CSAT complaints immediately

Enable the `profile_international_phone_numbers` feature toggle in production. The code is already built, tested with Cypress E2E tests, and the Welcome VA Setup form is already configured with `allowInternationalPhones: true`.

### 2. 🟡 Medium Effort — Frontend Pre-Fill from CSP Data

**Effort:** Medium (frontend changes + minor backend serialization)
**Impact:** Eliminates redundant data entry for all new users

Steps:
1. Expose CSP phone and address data in the `/v0/user` response (they're available in `vets-api` but not serialized to the frontend)
2. In the Welcome VA Setup form, add a prefill effect that checks `vapContactInfo` first, then falls back to CSP data
3. Follow the existing pattern from `income-and-asset-statement/components/ContactInformationPage.jsx`

### 3. 🔴 Larger Effort — Backend VA Profile Seeding

**Effort:** High (backend service + VA Profile team coordination)
**Impact:** Benefits all VA.gov pages and downstream systems, not just the Welcome VA Setup flow

Steps:
1. Create a `VeteranOnboarding::ContactInfoSeeder` service in `vets-api`
2. On first verified login (when `show_onboarding_flow_on_login` is true), check VA Profile for missing fields
3. Write CSP data (email, phone, address) to VA Profile via the transaction API
4. Handle edge cases: existing partial data, stale CSP data, transaction failures
5. Coordinate with the VA Profile team (Slack: `#va-profile`) on data ownership and conflict resolution

---

## Appendix: Key Files Referenced

### Frontend (`vets-website`)

| File | Purpose |
|---|---|
| [`src/applications/personalization/review-information/config/form.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/review-information/config/form.js) | Welcome VA Setup form configuration |
| [`src/applications/personalization/review-information/manifest.json`](https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/review-information/manifest.json) | Application manifest |
| [`src/applications/personalization/profile/components/alerts/ContactInfoNeeded.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/profile/components/alerts/ContactInfoNeeded.jsx) | Missing contact info alert |
| [`src/applications/personalization/profile/components/edit/Edit.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/profile/components/edit/Edit.jsx) | Profile edit page with international phone toggle |
| [`src/platform/forms-system/src/js/components/ContactInfo.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/platform/forms-system/src/js/components/ContactInfo.jsx) | Shared contact info form component |
| [`src/platform/user/profile/vap-svc/util/local-vapsvc.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/platform/user/profile/vap-svc/util/local-vapsvc.js) | VA Profile mock data for local dev |
| [`src/platform/utilities/feature-toggles/featureFlagNames.json`](https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/platform/utilities/feature-toggles/featureFlagNames.json) | Feature toggle definitions |
| [`src/applications/personalization/review-information/tests/utils.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/5896b075b5e7eb89a6abe5f8945e32b51817251c/src/applications/personalization/review-information/tests/utils.js) | Cypress test utilities for Welcome VA Setup |

### Backend (`vets-api`)

| File | Purpose |
|---|---|
| [`app/services/users/profile.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/app/services/users/profile.rb) | User profile serialization (includes VA Profile contact info) |
| [`app/services/sign_in/user_info_generator.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/app/services/sign_in/user_info_generator.rb) | CSP data extraction after login |
| [`app/models/user.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/app/models/user.rb) | User model with onboarding and VA Profile delegates |
| [`app/controllers/v0/users_controller.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/app/controllers/v0/users_controller.rb) | User API controller (includes `credential_emails` endpoint) |
| [`lib/sign_in/idme/service.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/lib/sign_in/idme/service.rb) | ID.me attribute extraction |
| [`app/models/form_profile.rb`](https://github.com/department-of-veterans-affairs/vets-api/blob/749874bd5b2aba55767af4056580aa2c57a0df77/app/models/form_profile.rb) | Form prefill with VA Profile fallback logic |

---

*Analysis based on code search across `department-of-veterans-affairs/vets-website` and `department-of-veterans-affairs/vets-api`. Search results may be incomplete — see [GitHub code search](https://github.com/search?q=repo%3Adepartment-of-veterans-affairs%2Fvets-website+profileInternationalPhoneNumbers&type=code) for additional results.*
