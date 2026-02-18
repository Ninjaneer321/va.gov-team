# Profile 2.0 – Test Plan  

---

## 1. Overview

Profile 2.0 is primarily an information architecture and content update that reorganizes existing sections, updates navigation, and standardizes shared editing patterns. The Scheduling Preferences page is the only net-new functional experience introduced in this release.

To verify quality, we developed formal test cases covering new and materially changed functionality (focused on Scheduling Preferences) and regression test cases that validate core user journeys and happy path scenarios across existing Profile features to ensure no previously integrated functionality was impacted.

In addition to documented test cases, the team conducted internal QA to review content accuracy, layout, link behavior, visual consistency, and shared editing interactions.

---

## 2. Testing Strategy

We opted to use a structured spreadsheet format rather than TestRail for documenting QA artifacts.

Each test case includes:

- Test Case ID  
- Feature / Section  
- Test Description  
- Preconditions  
- Test Steps  
- Expected Results  
- Actual Results  
- Pass / Fail Status  

Regression tests focus on happy path scenarios to confirm existing functionality remains intact.  
Test cases focus on new or materially changed functionality.

---

## 3. Test Users

| Email | Password |
|-------|----------|
| vets.gov.user+78@gmail.com | 476SsNrLgPv5 |
| VANCE.IPOACEVEDA@id.me | Passwo1! |
| judy.morrison@id.me | Password1234! |

---

## 4. Regression Test Plan

The Regression Test Plan verifies that existing Profile functionality continues to work as expected after the 2.0 updates.

**Artifact:**  
[Link to Regression Test Spreadsheet]

---

## 5. Test Cases (New / Material Changes)

The Test Plan verifies new and materially changed functionality, primarily focused on the Scheduling Preferences page.

**Artifact:**  
[Link to Test Case Spreadsheet]

---

## 6. Traceability Reports

### 6.1 Coverage for References

- **41 / 41 user stories covered**  
- **100% coverage**

**Artifact:**  
[Link to Coverage Report]

This report demonstrates that all user stories are mapped to at least one corresponding test case.

---

### 6.2 Summary of Defects

#### Test Execution Summary

- **31 / 32 Regression Tests Passed**  
- **15 / 15 Test Cases Passed**

One regression test is currently blocked due to a known external dependency issue.

#### Blocked Test

| Test Case ID | Profile Section | Test Description | Status | Notes |
|--------------|-----------------|-----------------|--------|-------|
| Reg-HCC-01 | Health care contacts | View Health care contacts | Blocked | Known issue: the personal healthcare contacts endpoint is currently not functioning. The feature is temporarily turned off so contacts do not display. |

---

## 7. Additional QA Validation

Beyond documented regression and test cases, the team conducted manual validation for:

**Artifact:**  
[[Link to internal QA]](https://github.com/orgs/department-of-veterans-affairs/projects/1174/views/48?pane=issue&itemId=3622390537&issue=department-of-veterans-affairs%7Cva.gov-team%7C125148)

- Content accuracy and punctuation  
- Alphabetical ordering updates  
- Section reorganization  
- Link behavior  
- Alert messaging consistency  
- Visual and layout verification

## 8. Notes

- **Contact Information Testing Scope:** Governance may add or remove contact information fields for testing purposes, with the exception of the Mailing Address field.

- **Connected Apps Testing Limitation:** Connected Apps disconnect functionality test case ID Reg-AS-01 was validated in a single browser only. There are currently six remaining connected apps available in the test account, and we do not have a mechanism to add additional apps once disconnected. To preserve the limited test data set, we recommend limiting disconnect testing volume or leveraging a cross-browser testing tool where possible.
