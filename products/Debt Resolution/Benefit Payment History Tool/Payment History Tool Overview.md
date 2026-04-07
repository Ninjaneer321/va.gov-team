Payment History Tool Overview
Payment History Tool

Main Goal

The payment history tool enables Veterans to view their VA benefit payments and any returned payments. It provides:

* Historical payment records (amounts, dates, types)
* Bank account information (masked)
* Payment method details (Direct Deposit vs Paper Check)
* Returned payment tracking with reasons
* Filtering by date ranges and pagination for mobile

Architecture

Frontend

* Entry Point: /va-payment-history/payments
* Key Parts:
    * ViewPaymentList.jsx - Container that fetches data
    * Payments.jsx - Renders paginated payment tables
    * Redux - getAllPayments (calls API)
    * DowntimeNotification - Displays downtime
    * RequiredLoginView - Auth

Backend API (vets-api)

* Payment Endpoint: /v0/profile/payment_history
* Controller: v0/profile/payment_history_controller.rb
* Authorization: BGS access via BGSPolicy (ICN, SSN, participant_id required)
* Flow:
    * Auth: BGSPolicy
    * Look up person: BGS::People::Request.find_person_by_participant_id
    * Fetch payment data: BGS::PaymentService.payment_history
    * Transform: Adapters::PaymentHistoryAdapter
    * Serialize: PaymentHistorySerializer

Mobile Endpoint

* Mobile Payment Endpoint: /v0/payment-history
* Additional Features: Year filtering, recurring payment detection, pagination

BGS Integration Layer

* BGS (Benefits Gateway Service) - Critical Upstream Dependency
    * BGS::PaymentService
    * SOAP Operation
    * Required Params:
        * participant_id
        * file_number
        * payee_code (hardcoded 00)
        * ssn_number
    * Connection
        * BGS::Services.new (establish soap client)

Constraints

Auth:

* LOA3 auth required
* Valid ICN, SSN, participant id
* Uses BGS Policy

Data filter:

* Filters out payments from third parties or recipients not the beneficiary

Feature Flag:

* payment_history feature flag

Cache:

* Person lookup is cached in redis
* Payment data is not cached

Pagination

* Web: No
* Mobile: Yes

Irreversible Risks

Data Security:

* PII - Contains SSN, back account numbers, payment amounts
* Account numbers are masked

Third Party Payment:

* Third party payments are filtered

BGS Service:

* No fallback datasource

Authorization:

* BGS policy

SOAP

* Schema changes can break integration

Expected performance

Exceptions

* BGS::PaymentService catches exceptions and returns empty responses
* Frontend handles error alerts (server / client)
* Monitored with StatsD metrics: api.bgs.policy.success/failure

Cache

* Used to reduce lookups

Data

* Payment History Adapter for normalization
* Account masking

Monitoring

* Event tracking on frontend
* BGS::Monitor for error logging
* VCR cassettes for testing BGS

Graceful Degradation:

* Empty state handling (no payments)
* Downtime notifications
* Feature flag to disable on issues

Perfect operations looks like

1. User Experience:

    * Veteran logs in → navigates to payment history page
    * Page loads within 2-3 seconds
    * Sees chronological list of payments with clear details
    * Can distinguish between received and returned payments
    * Bank account info shown securely (masked)
    * No errors or loading indicators stuck

1. Technical Health:

    * BGS response time
    * Cache hits
    * Error rate: < 1%
    * Authorization success: 100% 
    * Data accuracy: 100% match with BGS source records

1. Data Quality:

    * All payments have valid dates, amounts, types
    * No third-party payments appear in veteran's view
    * Returned payments correctly matched with original payments
    * Payment types properly categorized (including hardship recategorization)
    * Bank information matches latest records

1. Monitoring Shows:

    * api.bgs.policy.success increments steadily
    * No payment_history_error events in BGS::Monitor
    * VCR cassettes pass all test scenarios
    * Mobile pagination works correctly with year filters
    * No timeout errors from BGS::Services connection

1. Edge Cases Handled:

    * Veterans with no payment history see friendly "no payments found" message
    * BGS temporary unavailability shows downtime alert (not error page)
    * Feature flag disabled → graceful empty response
    * Invalid participant IDs → proper error logging without crashes

Dependency Chain

Veteran User (LOA3)
  ↓
vets-website (React/Redux)
  ↓ HTTP GET /v0/profile/payment_history
vets-api Rails Controller
  ↓ authorize :bgs
BGSPolicy (validates ICN/SSN/participant_id)
  ↓
BGS::People::Request (Redis cached)
  ↓ SOAP call
BGS::Services → People Web Service
  ↓ returns file_number
BGS::PaymentService
  ↓ SOAP call: retrieve_payment_summary_with_bdn
BGS::Services → Payment Information Web Service
  ↓ returns raw payment data
PaymentHistoryAdapter (transforms/filters)
  ↓
PaymentHistorySerializer (JSON API format)
  ↓
Frontend renders tables


Critical Single Points of Failure:


* BGS availability (SOAP endpoints)
* Redis availability (person lookup cache)
* User's participant_id validity

Tests

Tests:

* spec/controllers/v0/profile/payment_history_controller_spec.rb
* spec/services/bgs/payment_service_spec.rb
* spec/services/bgs/people/request_spec.rb

Staging Test User

User: vets.gov.user+228@gmail.com
Staging users: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv

To view on Staging
    * Login as user 228
    * Visit VA.gov homepage and click on "Review your payment history" under Top Pages
    * You are signed in but will be taken to a "preview" page that reads 
    * "What VA payment information can I view when I sign in?". Other sections include information that is usually included on the Resources and Support section of VA.gov:
        * When can I expect my first disability compensation payment?
        * Can I get a notification every time I receive a recurring VA payment?
        * What should I do if I need to change my direct deposit or contact information?
        * Should I contact VA if I have other changes to my information?
        * And links to the Debt Portal and to verify GI Bill enrollment
    * Click the View your VA payment history action link.
    * You will see the Your VA payments page with
        * Payments you received
        * What if I find a check that I reported missing?
        * What if I need to change my direct deposit or contact information?
        * What if I’m missing a payment?



Handy Links

* Slack channel: https://slack.com/archives/C04KHCT3ZMY
* Figma: https://www.figma.com/design/AMsEAbhbHtrahQTp6GzVkQ/Payment-History?node-id=0-1&p=f&t=dXvnpLQbZbYJCfDd-0
* More information about the type of benefits displayed available: https://www.va.gov/va-payment-history/
* https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/payment-history
* https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/payment-history/engineering/payment-history-architecture.md
* https://github.com/department-of-veterans-affairs/vets-website/tree/f6766025601416fbac183c30edcf5b024e43cd26/src/applications/disability-benefits/view-payments
