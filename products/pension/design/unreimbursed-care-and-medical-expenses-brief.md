# Design Brief | Unreimbursed care and medical expenses
## Background

**What is the relationship between the 8416 and 527?**
There are two use cases for using the 21-8416, similar to 0969. 
1. It is submitted alongside **initial pension applications (21P‑527EZ)** when the user needs to report more than 3 expenses, which is the maximum the 527 paper form affords. 
2. And also used as a **standalone form**, especially to report increases in medical expenses after an initial claim. This has been digitized by the BIO Huntridge team as of January 2026.
We don’t know which use case is more common.

In Step 5, **Unreimbursed medical expenses** is a high-impact section; it's the **#2 reason** pension claims go into development, making it challenging and time-consuming for Veterans to receive financial aid. It could be due to a mismatch between what applicants say they have in expenses, and what is actually itemized or attached.

Because the 8416 has been recently digitized and effectively functions as an overflow form for the pension form, there are some plain language changes that could be applied to 527EZ, and some potential improvements grounded in previous research.

This document is a summary of:
* [our pension usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024%2002%20Pension%20Usability%20Evaluation/research-findings.md), 
* [VSO research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-09%20527EZ%20VSO%20Research/research-findings.md,
* [527 design explorations](https://www.figma.com/design/9JKK5Eo43uJWEr66JPiebc/WIP---21P-527EZ---Pension-Benefits?node-id=5699-15179)
* [8416's MVP design](https://www.figma.com/design/UhrXwPHN1bDJwjmp6rJ3bB/VA-Form-21P-8416?node-id=755-31693&t=MqpTXuqS06JNAqm4-0).

---

## Recommendations

### 1. Clarify terms and evaluate comprehension

**Current state:**
- In our pension usability study, participants did not seem to understand the distinction between care expenses and medical expenses. 
	- Instead, they tried to enter co-payments for medication and/or medical appointments under ‘Unreimbursed care expenses’ or ‘Medical and other unreimbursed expenses’ which according to VBA representatives are not retroactively reimbursed, not considered recurring, and in many cases are not eligible for reimbursement.
* The 8416 form provides examples of eligible care expenses, but doesn't detail examples for medical expenses, such as:
	* **Recurring medical expenses** like monthly Medicare deduction, prescriptions/non-prescription drug costs, and insurance premiums
	- **One-time medical expenses** like doctor office fees, hearing aid expenses, dental fees, expenses related to transportation to hospital/doctor’s office, and vision care costs
	- **Educational or vocational rehabilitation expenses** such as tuition and materials for educational courses or vocational rehabilitation over the past year
	- **Burial expenses** for a spouse or a child over the past year
	- **Legal expenses** over the past year that resulted in a financial settlement or award (like Social Security disability benefits)
- We also still lack a clear VBA definition of “constructive member of the household” vs. “dependent” to clarify whose expenses are eligible. 

**Recommended action:**
- Work with VBA to:
    - Clarify **medical vs. care expense** categories in policy and in plain language.
    - Clarify **dependents vs. constructive household members** and align definitions across forms and help content.
- Conduct research to test whether users understand these categories, and can reliably place real‑world expenses into the right buckets.

### 2. Evaluate and prioritize enhancements

#### Enable applicants to provide context
**Current state:** 
* Many VSOs avoid filing an 8416 with the initial claim. They report only the high‑impact expenses such as care facility costs on the 527EZ if those alone secure the maximum benefit. VSOs often add a buddy statement (21-4138) to explain unusual or complex expenses in narrative form, and to preempt development letters asking for clarification.

**Recommended action:**
- Explore adding a structured free‑text area or a streamlined way to attach a buddy statement, in order to provide additional context in the 527EZ (for initial claims), and/or 8416 (for updates).
#### Guide applicants through calculations
**Current state:** 
* The 527EZ asks for payment frequency and estimated cost per month or per year. But one-time expenses are also eligible, making it challenging for Veterans to provide accurate amounts to be reimbursed.
* Entering unreimbursed co-payments for medication and doctor visits under unreimbursed expenses is not intuitive, and participants in our pension usability study found their responses did not clearly align with the choices on the form (e.g. date of payment, frequency).

**Recommended action**
 * Consider a dynamic expenses calculator to estimate costs based on recurrence and frequency, and apply the results to the generated PDF. 

#### Clarify requirements for supporting evidence
**Current state:**
* Both forms show a static list of potential documents required for the claim to be processed, such as provider worksheets, nursing home information, and an Aid and Attendance form. It does not dynamically communicate to the user which documents are required based on their use case. 

**Recommended action:**
* Conditionally inform in the flow the user what documents, forms, or records they'll need to submit based on their input. 
