# Mar 5, 2026 | Mtg with CARMA to Discuss Extending Timeout for Retry Logic


## Notes

* Dupe SSNs being received
* CG Team thinks it might be retry timing
  * [Old ticket #100713](https://github.com/department-of-veterans-affairs/va.gov-team/issues/100713) when we changed timeout timeing
* Suresh
    * Seeing dupe payloads being sent to Mulesoft
    * Dupe requests
    * Believe it is timeout is too short being retried
    * What is current timeout timing before retrying?
* Ray
    * Longer Timeout would not fix duplicate maybe
* Marla
    * We are middle of processing the payload, not sending a response right away to VA
    * Can we increase time between retries?
        * Test to see if this resolves the issue
    * Can MS send a conf quicker?
        * Maybe?
    * MS processing time?
        * Avg 2 minutes
* Srinivas
    * Time
        * 2/19/26 1:25:08.524 PM - initial received by MuleSoft
            * Doesn’t appear to be a timeout
        * 2/19/26 1:27:41.412 PM - error that a duplicate was received from VA
        * 2/19/26 1:27:46 - resp from SalesForce to VA - Success email from VAN to user
    * Claim GUID
        * 42b9249e-cff8-498b-94db-32fc69e677c9

Action items
- [ ] HJ - Check request timeout and response timeout timing to confirm 360 seconds
    * Expecting response timing to be longer
- [ ] No changes to be made at this time
