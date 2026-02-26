# Discover Your Benefits Results Page 2.0: QA Strategy & Artifacts 
**Last Updated: Feb 26, published**

## Test Case Documentation
QA was performed manually by team members.
* TK _Test cases (Github - sensitive repo)_
* TK _Test cases xls_


## Defect report
- _TK -- will be noted in the findings table below and in the attached spreadsheet above._

## Accessibility Staging Review Prep
- [A11y Staging review prep doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/vet-transition-support/results-page-2.0/launch-materials/results-pg-2.0-a11y-staging-review-prep.md)
- _A11y ticket: TK_

## Test URL
The application can be accessed directly at https://staging.va.gov/discover-your-benefits/goals

## QA Plan 
For QA of the Discover Your Benefits (DYB) results page we will be performing QA manually using a spreadsheet to track test cases and findings.

### Overview of Devices, Operating Systems & Browser

We need to test all 8 test cases across the devices, operating systems, and browsers outlined below. 

#### General Version-coverage Strategy
- **Operating Systems:** Windows 2nd-latest; MacOS/iOS latest
- **Browsers:** all latest 

##### Device + Operating System + Browser Combinations

|   |      Device        |  Operating System  | Browser  |
|---|--------------------|--------------------|----------|
|1. |      Macbook       |  Sequoia (v15.5)   | Chrome   |
|2. |      Macbook       |  Sequoia (v15.5)   | Firefox  |
|3. |     iphone 13      |    iOS (latest)    | Safari   |
|4. |         PC         |     Windows 10     | Chrome   |
|5. |         PC         |     Windows 10     | Edge     |
|6. | Samsung Galaxy S21 |      Android       | Chrome   |


### How We Will Test and Track
1. Use the spreadsheet in Test Case Documentation section to document test cases, browser/os/device combos and pass/fail
2. Leverage browserstack (or similar) for browser/os/device combos we don't have access to as needed
3. For any findings, team member will fill in a row for each item in the table below. 
4. PM will create the needed ticket(s) to resolve finding, mark it in the Findings table below, and link it in the spreadsheet where the corresponding failure occurred.

## Findings Summary
| Test case No. |    Finding       | Device  | Operating System| Browser |Reporter | Resolution Ticket(s)| Status |
|---------------|------------------|---------|-----------------|---------|---------|---------------------|--------|
| _In which test case was this problem found?_ | _Describe finding/problem_ | _On what device type was the problem found?_  | _On what operating system was the problem found?_  | _On what browser was the problem found?_  | _Who identified the problem?_  | _Link to resolving ticket(s)_ | _What is the status of the issue?_   |


