Payment History Tool HandoffGoal
Allow veterans and beneficiaries (family members or otherwise) to view any payments received from the VA.

Types of payments

* Generic payment feed from BGS — not limited to disability, pension, or education.
* Includes multiple payment programs tracked in BGS.


Impact

* ~10.5M requests per month
* ~10% (~1M/month) have no payment history
* ~5% (~500k/month) are missing a required data attribute
* ~0% result in errors
    * The main issue was swallowed errors, which is why logging was added.


User paths
Three possible paths:

* Payment history is shown
* No payment history → call center number displayed
* Error → alternate call center number displayed


How it works
Payment history depends on two services:

* BGS Person Service (user/person data)
* BGS Payment Service (payment data)

Access policies across these services — and within the payment history tool — are the main source of issues.

Status update

* Call center reported a user not receiving payment history.
* We wrote a script that can run on an ICN to show why payment history is missing:
    rake payment_history:check_empty_history[1234567890V123456]
* Example finding: user missing participant_id, a required attribute.
* We also added logging via a PR to help identify trends.
    * Logs are behind feature flags::flag-smiley:
        * payment_history_validation_logging
        * payment_history_detailed_logging
        * payment_history_exception_logging
    * Logging revealed ~500k requests/month missing attributes.
    * Based on three 15-minute samples with validation logging enabled:
        * ~10% had no payment history
        * ~5% had missing attributes


Next steps

* Improve messaging for users missing required attributes (file_number, participant_id) and point them to ways to resolve this (there appear to be claims/forms that populate this data).
* Reevaluate whether file_number is still required. It was replaced by participant_id, and far fewer users are missing that (~0%). This likely needs confirmation with BGS services.


Timeline

* Initial work started ~6 months ago.
* Investigation picked up after call center feedback a couple months ago.
* The path forward is now clearer, but the remaining work likely won’t fit this quarter, making this a reasonable point for handoff.

