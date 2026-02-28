# CRM Payload Investigation: Missing `SubmitterProfile`

## Objective - What do we intend to accomplish?
* We need to confirm whether the `SubmitterProfile` field is ever missing in payload sent from `vets-api` to AVA CRM

## Current understanding of the flow
* `InquiryPayload` invokes `SubmitterProfile#call`, which sets the `SubmitterProfile` field
  [here](https://github.com/department-of-veterans-affairs/vets-api/blob/b3730f91e6c701a76f52327bcd8827e334a26b9b/modules/ask_va_api/app/lib/ask_va_api/inquiries/payload_builder/inquiry_payload.rb#L105).
  This method builds a hash by calling [SubmitterProfile#base_profile](https://github.com/department-of-veterans-affairs/vets-api/blob/b3730f91e6c701a76f52327bcd8827e334a26b9b/modules/ask_va_api/app/lib/ask_va_api/inquiries/payload_builder/submitter_profile.rb#L27-L39),
  which then has other hashes merged into it. It may be possible for the values for a given key to be `nil` but the `SubmitterProfile` object itself should not be `nil`
* No obvious drop off was identified in the payload builder/submission path within `ask_va_api`
* Could not reproduce missing `SubmitterProfile` field in payload when manipulating sample inquiry payloads locally
* However, it is possible for some fields within `SubmitterProfile` to be incomplete or `null`.  Further investigation is required to determine if a drop off is occurring downstream


## Resolution(s) discussed
* Instead of telemetry to log existence of the field, a more favorable approach may be to temporarily store the outbound payload in Postgres for investigation
* This requires understanding and alignment with any data retention policies (e.g., 30 or 60 days).
* As such we may want/need to:
  * Redact any PHI/PII
  * Encrypt sensitive data
  * Create and run an Ask VA owned scheudled job via Sidekiq to cleanup records in compliance with retention policy
* Other teams within `vets-api` already follow similar procecure for storing data temporarily

## Desired outcome
* If the CRM team reports missing `SubmitterProfile` we can:
  * Identify or narrow down the possibility of a downstream issue
  * Whether the payload is missing the `SubmitterProfile`

## TDB
* What data should be captured?
  * Full payload vs a compact record
* Retention duration
  * What is the retention policy and what is a reasonable window for us?
* Implementation
  * Define high level implementation and what done looks like

## Helpful links
* [Data retention policy](https://depo-platform-documentation.scrollhelp.site/developer-docs/data-retention-policy)
* [What is PII?](https://depo-platform-documentation.scrollhelp.site/research-design/what-is-pii)
* [How to encrypt PII in Vets API](https://depo-platform-documentation.scrollhelp.site/developer-docs/data-encryption-in-vets-api#DataEncryptioninVetsAPI-Howtosetupencryptioninyourmodel)
* [Structuring Migrations and Adding Database Tables](https://depo-platform-documentation.scrollhelp.site/developer-docs/vets-api-database-migrations#vets-apidatabasemigrations-StructuringSchemaMigrations)
* [Requesting Sidekiq Admin UI access](https://depo-platform-documentation.scrollhelp.site/developer-docs/sidekiq-ui-access)

> [!Note]
> Notably, this implementation can serve as the foundation for a more robust retention and auditing solution of our data flow
