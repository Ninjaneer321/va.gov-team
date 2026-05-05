


# Connected forms

## Hypothesis
We believe that veterans lack a clear mental model of the 526 as a potentially multi-form submission, which leads to abandonment at the ancillary form entry point, poor data quality, and post-submission confusion, as evidenced by page-level abandonment rates, qualitative friction findings in the evidence, and nested form flow and call center contact patterns.

## Objective
Establish clear, consistent visibility of the relationship between the 21-526EZ and its ancillary forms at every critical touchpoint, from the landing page through post-submission confirmation, so that veterans can make informed decisions, submit complete and accurate information, and understand what they signed.

## Goals
- Reduce abandonment at ancillary form triggers.
- Reduce preventable support contact related to form confusion and post-submission questions.
- Increase veteran confidence and trust through the submission experience.


## Scope
- 21-526EZ landing page: setting expectation for potential multi-form scope.
- Ancillary form entry points within form, in flow moments where ancillary forms are triggered.
- Review and submit page list forms that will be submitted.
- Confirmation page and follow-up emails; plain-language summary of what was submitted and which forms failed.
- Research synthesis mapping existing abandonment, qualitative and call center data to specific flow touch points


## Research and Discovery

##### 🟢 Connected Forms with extensive research (3 forms)

| Form | Name | Research Studies |
| :---- | :---- | :---- |
| 21-526EZ | Disability Compensation | <ul><li>[11/25: Side Navigation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2025-11%20Side%20Navigation)</li><li>[09/25: Copy of Submission](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2025-09-Copy%20of%20Submission)</li><li>[08/25: Document Submission](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2025-08-Document-Submission)</li><li>[07/24: Submission Status](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2024-07-Submission-Status)</li><li>[03/24: Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2024-03-526-Analytics)</li><li>[11/23: Shadowing Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2023-11-Shadowing-Research)</li><li>[05/23: Landing Page Redesign](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2023-05-526ezLandingPagesRedesign)</li><li>[02/23: Medallia Survey](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2023-03-Medallia-Survey)</li><li>[Research before 2023](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-02-Research-Review/Research%20index%20Feb%202023.md)</li></ul> |
| 21-0781/0781a | PTSD Statement | <ul><li>[10/25: Evidence Upload](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-10-0781-EvidenceUpload/0781%20Evidence%20Upload%20Research%20Report.md)</li><li>[06/24: 0781 Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2024-06%200781%20Research)</li></ul> |
| [21-0966](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/Forms/21-0966) | Intent to File | <ul><li>[10/24: ITF Comprehension](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2024-10%20Intent%20to%20File%20Comprehension/research-findings.md)</li><li>[02/24: ITF Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/526ez/research/2024-02-ITF-Research)</li></ul> |
 
 
##### 🟡 Connected Forms with limited research (2 forms)

| Form | Name | Research Studies |
| :---- | :---- | :---- |
| [21-4138](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/Forms/21-4138) | Statement Support | <ul><li>[03/24: Reduce Submissions](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2024-03-reduce-4138-submissions/Findings.md)</li></ul> |
| [21-10210](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/Forms/21-10210) | Lay/Witness Statement | <ul><li>Indirect evidence only (Medallia, VSO interviews)</li></ul> |

##### 🔴 Forms with research gaps (6 forms)

| Form | Name | Research Studies | Status | Notes |
| :---- | :---- | :---- | :---- | :---- |
| [21-4142/4142a](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/Forms/21-4142\(a\)) | Medical Records Authorization | No research | Launched 2024-09 | High usage, privacy implications, evidence confusion |
| [21-0972](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/Forms/21-4142\(a\)) | Alternate Signer | No research | Launched 2023 | Legal/ethical signing authority, 111K downloads |
| [26-4555](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/Forms/26-4555) | Adapted Housing | No research | Active | High-dollar benefit |


### 21-526EZ metrics

| Metric category | Hard metric (measurable) | How it’s defined in repo | Source  |
|---|---|---|---|
| Submission volume | **Overall submission volume** | Count of unique forms where a user hit “Submit” and reached confirmation (also includes “overall submission volume” for evidence pieces in the same doc). | [21-526ez-metrics.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/21-526ez-metrics.md) |
| Submission reliability | **% successful vs failed form submissions** | Explicit success/failure submission rate metric. | [21-526ez-metrics.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/21-526ez-metrics.md) |
| Silent/downstream failure | **Submission total failure error %** | % of submissions that appear successful on VA.gov (user gets confirmation) but never reach the next system. | [21-526ez-metrics.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/21-526ez-metrics.md) |
| Evidence uploads | **% successful vs failed evidence submissions** + **evidence submission volume** | Counts and error % for evidence uploads. | [21-526ez-metrics.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/21-526ez-metrics.md) |
| Time/effort | **Time to complete form** | Elapsed time from InProgressForm creation to submission (days/weeks). | [21-526ez-metrics.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/21-526ez-metrics.md) |
| Time/effort | **Number of sessions to complete a form** | Number of distinct sessions between start and submit. | [21-526ez-metrics.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/21-526ez-metrics.md) |
| Compliance freshness | **Digital vs paper out-of-date time** | # weeks/months the digital form and paper form are out of date. | [21-526ez-metrics.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/21-526ez-metrics.md) |
| Funnel behavior | **Exit rate** | users who exited at page ÷ users who viewed the page. | [MVP-Metrics-526.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/MVP-Metrics-526.md) |
| Funnel behavior | **Abandonment rate** | users who view a page and exit without returning in X time ÷ users who viewed the step. | [MVP-Metrics-526.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/MVP-Metrics-526.md) |
| Funnel behavior | **Completion rate** | users who view a page, fill required fields, continue successfully ÷ users who viewed the step. | [MVP-Metrics-526.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/MVP-Metrics-526.md) |
| Submission behavior | **Duplicate submissions (count by month)** | A tracked count; one doc sets a **target: reduce duplicates by 5% MoM**. | [New Confirmation Page.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/New%20Confirmation%20Page.md) |
| Submission behavior | **Duplicate submissions baseline (Sep–Nov 2024 run)** | A baseline exercise was done by running a query for those months (doc describes the method; not seeing the actual numeric baseline in the snippet I pulled). | [duplicate_submission_metrics.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/duplicate_submission_metrics.md) |
| Ops health (explicit number) | **~97% successful submission rate** | Stated as “Form 526 has around a 97% successful submission rate.” (This is 526 broadly; it’s in a transition doc, not a dashboard export.) | [transition-03-2022-frontend-engineering.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/benefits-memorials/transition/transition-03-2022-frontend-engineering.md) |
| Product pattern analytics (explicit range) | **~25–30% download/print interaction** | Stated as an analytics figure for “download and print… within the accordion” (used as a proxy/related metric for “copy of submission” work). | [526ez copy of submission.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/526ez%20copy%20of%20submission.md) |

#### Of the 11 forms reviewed: 
3 have extensive research (21-526EZ, 21-0781, 21-4138), 

2 have limited research (21-0966, 21-10210), and 

4 have no research — including high-impact forms like the 21-4142 (high usage, privacy implications), 21-0972 (111K downloads, legal signing authority), and 26-4555 (high-dollar benefit).


## Areas to explore 
<details>
<summary>
1. Setting expectations at the 21-526EZ Intro page
</summary>
 
**Connected forms Epic:** Setting expectations at the 21-526EZ Intro page (https://github.com/department-of-veterans-affairs/va.gov-team/issues/135714)

Who we've talked with

Public Websites & Facilities (PW&F) team:
- Juliana Jara / Marcia Volpe (C&IA 🎉)
- Tim Shundo (tim.shundo@civicactions.com)
- Tina Kambil (tina.kambil@agile6.com)
- Dave Pickett (dave.pickett@civicactions.com)

PW&F is focused on the unauthenticated pages
DBC is focused on the disability claims forms and pages

While the public websites team is just upstream of our authenticated experience, they are re-architecting it to help users find forms more easily. (The VA has some fifteen hundred forms currently.) In our talks, we’ve covered how Veterans can access primary forms like the 10-10EZ and 526EZ by navigating to benefits, searching or using the Forms finder.

Connective tissue: 
[Public Website Figma Design](https://www.figma.com/design/k5j6J4x7HG8oiTIS5UHHUY/VA-forms-redesign?m=auto&t=hSLNFg8KUrWQX8WB-6)

Whether the veteran navigates the disability benefits menu or uses the global search/forms finder, both paths lead to the Form 21-526EZ Info page.

```text
    [ 1. VA.gov Home ]
    → (https://va.gov/)
              ↓
    [ 2a. Eligibility ]
    (https://staging.va.gov/disability/eligibility/)
              ↓
    [ 2b. Disability Benefits ]
    (https://www.va.gov/disability/)
              ↓
     ____________________________________________
    |                                            |
    [ 3a. Disability Hub ] [ 3b. VA Forms Finder ]
      (Benefits Navigation)     (Direct Search)
    |____________________________________________|
              ↓
    [ 4. Online Filing Tool Introduction ]
    (https://www.va.gov/disability/file-disability-claim-form-21-526ez/)
              ↓
    [ 5. Authentication / Login ]
    (https://api.idmelabs.com/en/session/new)
              ↓
    [ 6. Application Start ] 
    ✅ (https://staging.va.gov/disability/file-disability-claim-form-21-526ez/start)
```

### Design Opportunities

🔸 [Staging Review finding: Update intro page 138280](https://github.com/department-of-veterans-affairs/va.gov-team/issues/138280) 4/02/2026 EPIC 0781
**Platform stakeholder**: Shira Goodman
**Details**:
- VA.gov Experience Standard - issue: User encounters outdated design components or patterns.
- VA.gov Experience Standard - category: Consistency

<hr />
</details> 



<details>
<summary>
2. Bringing visibility to ancillary form entry points throughout the 21-526EZ flow</summary>
 
**Connected Forms:** Bringing visibility to ancillary form entry points throughout the 21-526EZ flow (https://github.com/department-of-veterans-affairs/va.gov-team/issues/135718)


#### Form entry points 526EZ and ancillary forms

By Scott Regenthal [Datadog 526 and ancelary form tool](https://vagov.ddog-gov.com/notebook/20250/permutations-of-526ez-and-ancillary-form-submissions?refresh_mode=paused&from_ts=1775234580000&to_ts=1775238180000) 

**6-month snapshot of 10/1/2025-4/6/2026**

| Forms | submissions | percent |
|---|---|---|
| 526 only | 286.07k | 67.37 % |
| 526 and 0781 | 86.93k | 20.47 % |
| 526 and 4142 | 29.39k | 6.92 % |
| 526, 0781 and 4142 | 13.34k | 3.14 % |
| 526 and BDD | 4.75k | 1.12 % |
| 526, 0781 and BDD | 4.05k | 0.95 % |
| 526, 0781, 4142 and BDD | 71 | 0.017 % |
| 526, 4142 and BDD | 40 | 9.4e-3 % |

 
**Comparison 1-month snapshot of 3/6/2026–4/6/2026**

| Forms | submissions | percent |
|---|---|---|
| 526 only | 51,484 | 69.40 % |
| 526 and 0781 | 13,550 | 18.26 % |
| 526 and 4142 | 5,129 | 6.91 % |
| 526, 0781 and 4142 | 2,136 | 2.88 % |
| 526 and BDD | 1,088 | 1.47 % |
| 526, 0781 and BDD | 781 | 1.05 % |
| 526, 0781, 4142 and BDD | 12 | 0.016 % |
| 526, 4142 and BDD | 9 | 0.012 % |

### Design opportunities
- Side nav research identified header recommendations to improve navigation forward and back through the form. This aligns with a sub-structure pattern that can be explored to bring transparency to the page structure that the Veteran is navigating. Figma Team 5 [526EZ Side Nav adds visibility using an eyebrow label](https://www.figma.com/design/pvrA4dBGYhgiRyI0cxN8vE/526---Side-Navigation?node-id=6186-10752&t=a2E2ypXCT3CBbDtK-11)

- Related to Headers, another opportunity was raised in the 0781 staging review bug log.
Conversation on [OCTO platform slack](https://dsva.slack.com/archives/C01DBGX4P45/p1774543407243069) and the associated [a11y bug](https://github.com/department-of-veterans-affairs/va.gov-team/issues/136089)

<hr /> 
</details> 


<details>
<summary>
3. Review and Submit page enumerates the ancillary forms (R&S of 21-526EZ flow)</summary>
 
**Connected Forms:** Review and Submit page enumerates the ancillary forms (R&S of 21-526EZ flow) (https://github.com/department-of-veterans-affairs/va.gov-team/issues/135720)
To support the user's comprehension and successful submission, set the expectation that multiple forms are available within the 21-526EZ flow.

### Pain Point
The Review and Submit page does not enumerate all submitted forms. Veterans are signing documents without a clear understanding of what those documents are. This creates a gap with direct downstream consequences.

## Design Opportunities
- Explore how users might understand what forms were submitted
- Explore how users are able to print out all the associated forms from the submission page prior to sending the data to downstream services

<hr />
</details> 



<details>
<summary>
4. Reduce post-submission confusion of ancillary forms within the 21-526EZ flow
</summary>  
Connected Forms: Reduce post-submission confusion of ancillary forms within the 21-526EZ flow (https://github.com/department-of-veterans-affairs/va.gov-team/issues/135721)

### Pain point
- Post-submission — confirmation page and emails do not clarify which forms were submitted or which failed.

### Inherited from KPI Metrics

| Inherited Form | Downloads (9/1/2021–9/1/2022, Find a Form) | Mail Submissions (Prior Year, Central Mail) |
|---|---|---|
| VA Form 21-4138 | — | — |
| VA Form 21-10210 | 47,074 | 28,877 |
| VA Form 21-0972 | 11,133 | — |
| VA Form 21-0966 | 220,463 | 407,570 |
| VA Form 26-4555 | 23,180 | 6,122 |

Comparison to 2025 paper submissions

| Paper 526EZ submissions that include inherited forms | Paper submission | Count |
|---|---|---:|
| **VA Form 21-4138** | Multiple combos (with exams, DD214, med records, correspondence, etc.) | **106,074** |
| **VA Form 21-10210** | Combo with `VA Form 21-10210, Lay Witness Statement` | **67** |
| **VA Form 21-0972** | **Not present**  | **0** |
| **VA Form 21-0966** | Combo with `21-0966; 21-526EZ` and/or `21-0966; 21-526EZ; 20-0995` | **518** |
| **VA Form 26-4555** | **Not present**  | **0** |



**Design opportunities**
- What pattern can notifications and confirmation pages show to help veterans clearly understand what they have submitted
- Metrics baseline: ~97% submission success rate, ~25–30% download/print interaction on confirmation, with duplicate submissions and abandonment rates tracked at the page level.


<hr />
</details>

