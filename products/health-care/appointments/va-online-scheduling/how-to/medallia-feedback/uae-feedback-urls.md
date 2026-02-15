# UAE Feedback URLs

URLs relevant to UAE tools that we request/review Medallia feedback from.

**Legend**
- `Sub-URLS?` - Indicates whether or not we should receive feedback from all SUB-urls under the URL
- `Auth or Public` - Indicates whether the user must be logged in/authorized by LoROTA (Auth) when viewing the page, or if it can be accessed by anyone (Public)
- `CSAT?` - Indicates whether the URL is included in the CSAT calculation in Domo (see [Domo dashboard](https://va-gov.domo.com/page/601491420?userId=917050460))

## Appointments
Data is sent **daily** (weekend data is sent Monday).

| URL                                                                             | Sub-URLs? | Auth or Public | CSAT? |
|---------------------------------------------------------------------------------|-----------|----------------|-------|
| va.gov/my-health/appointments                                                   |  YES      |  Auth          | YES   |
| va.gov/health-care/manage-appointments/                                         |  No       |  Public        | No    | 
| va.gov/resources/what-should-i-bring-to-my-health-care-appointments/            |  No       |  Public        | No    |              
| va.gov/resources/about-managing-health-appointments-online/                     |  No       |  Public        | No    | 
| va.gov/resources/how-to-get-community-care-referrals-and-schedule-appointments/ |  No       |  Public        | No    |   



## Travel
Data is sent **weekly on Monday** 

| URL                                                                              | Sub-URLs? | Auth or Public | CSAT? |
|----------------------------------------------------------------------------------|-----------|----------------|-------|
| va.gov/my-health/travel-pay/claims                                               | YES       | Auth           | YES   |
| va.gov/my-health/travel-pay/file-new-claim/                                      | YES (see below) | Auth     | YES   |
| va.gov/health-care/file-travel-pay-reimbursement/                                | No        | Public         | No    |
| va.gov/find-forms/about-form-10-3542/                                            | No        | Public         | No    |
| va.gov/resources/how-to-set-up-direct-deposit-for-va-travel-pay-reimbursement/   | No        | Public         | No    |
| va.gov/resources/reimbursed-va-travel-expenses-and-mileage-rate/                 | No        | Public         | No    | 
| va.gov/resources/how-to-file-a-va-travel-reimbursement-claim-online/             | No        | Public         | No    |

| Some sub-URLs you may find within va.gov/my-health/travel-pay/file-new-claim/                 | Notes       |
|---------------------------------------------------------------------------------------------- | ----------- |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId] | Intro page |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/choose-expense | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/mileage  | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/unsupported | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/toll | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/parking | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/common-carrier | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/air-travel | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/lodging | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/meal | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/other | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/review | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/[expenseType]/[expenseId] | Edit mode paths |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/travel-agreement | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/confirmation | |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/create-claim-error | API call fails when trying to create new claim |
| va.gov/my-health/travel-pay/file-new-claim/[appointmentId]/[claimId]/get-claim-error | API call fails upon entry to claim in progress |



## Patient check-in
Data is sent **weekly on Monday** 

| URL                                                                              | Sub-URLs? | Auth or Public | CSAT? |
|----------------------------------------------------------------------------------|-----------|----------------|-------|
| va.gov/health-care/appointment-pre-check-in                                      | YES       | Auth           | YES   |
| va.gov/health-care/appointment/check-in                                          | YES       | Auth           | YES   |
| va.gov/resources/how-to-check-in-with-your-smartphone-for-some-va-appointments/  | No        | Public         | No    |


