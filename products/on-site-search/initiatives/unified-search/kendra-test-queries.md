---
# Document Metadata
title: "Kendra Test Queries: Kendra vs. Search.gov Comparison"
date: 2026-03-30
last_updated: 2026-03-30
document_type: "test-artifacts"
category: "Research Discovery & Analysis"
purpose: "30-query set for scoring Kendra vs. Search.gov on documented failure cases — covers high-volume baseline, natural-language, poor-relevancy, and edge-case queries to distinguish ranking problems from indexing gaps"

# Context
team: "On-site Search"
product: "VA.gov Global Search (Unified Search)"
product_area: "Unauthenticated experience — VA.gov global search (sitewide)"

# Related Resources
related_files:
  - file: "Problematic Search Queries"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/problematic-search-queries.md"
    description: "Source for documented failure cases in this query set"
  - file: "Top queries and CTR — 2025"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/2025.md"
    description: "Source for high-volume baseline queries"
  - file: "VA.gov Search Feedback — Combined Qualitative Analysis"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md"
    description: "Source for Medallia-documented failure cases"
  - file: "Analysis for design decisions: Kendra transition"
    url: "output/analysis-for-design-decisions-Kendra-transition.md"
    description: "Research synthesis that contextualizes these queries within broader search findings"

# Maintenance
status: "active"

tags:
  - "Veterans"
  - "Disability"
  - "Healthcare"
  - "Education"
  - "Finances"
  - "Records"
  - "Housing"
  - "Desktop"
  - "Smartphone"
  - "Find-a-va-form"
  - "Facilities"
  - "Claim-status-tool"
  - "Caregivers"
  - "CHAMPVA"
  - "test-artifacts"
---

# Kendra vs. Search.gov — test query set

This list is drawn from documented failures in [Analysis for design decisions: Kendra transition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/Analysis%20for%20design%20decisions%3A%20Kendra%20transition.md).

Each entry notes the failure type and expected top result — use these to experiment whether Kendra produces a meaningfully better result than Search.gov.

---

## Test queries

### High-volume top queries (baseline relevancy)

These represent the most common searches by volume. Both engines should handle them well; use as a baseline and to catch regressions.


| #   | Query                        | Why it's in the list                                                                            | Failure type                       | Expected top result                               |
| --- | ---------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------- |
| 1   | `travel pay`                 | Top keyword query by volume; documented in Medallia as failing to surface the travel pay portal | Poor relevancy                     | BTSSS travel pay portal                           |
| 2   | `disability claim`           | Highest-volume topic overall (10.67% of benefit queries)                                        | Poor relevancy                     | Online disability claim filing tool (526EZ)       |
| 3   | `dd214`                      | Top form number query (11.56% of form searches)                                                 | Relevancy                          | Military records request page (eVetRecs / SF-180) |
| 4   | `champva`                    | Top general keyword; 188K queries; misspellings ("champ va", "champsva") also common            | Spelling variant handling          | CHAMPVA benefits overview page                    |
| 5   | `certificate of eligibility` | High volume; acronym variant "coe" also common                                                  | Acronym / full-phrase equivalence  | COE application page                              |
| 6   | `form 22-1990`               | Top education form query                                                                        | Form number lookup                 | VA Form 22-1990 directly                          |
| 7   | `add dependents`             | Top action-oriented phrase (5.61% of action queries)                                            | Action intent                      | Add/remove dependents tool (686c)                 |
| 8   | `upload evidence`            | Top action phrase (3.61%); veterans documented that the link 404s                               | Action intent + broken destination | Evidence upload tool or claims portal             |


---

### Natural-language queries (semantic understanding)

Search.gov is documented as keyword-only; these are real NL queries from 2025 data that should benefit most from Kendra's semantic capabilities.


| #   | Query                                            | Why it's in the list                                                                             | Failure type                                   | Expected top result                                   |
| --- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ----------------------------------------------------- |
| 9   | `how to file a disability claim`                 | Top NL query (2,160 events)                                                                      | NL query understanding                         | Online disability claim filing tool (526EZ)           |
| 10  | `how do i add my wife as a dependent`            | Top NL query (463 events)                                                                        | Conversational phrasing with relationship term | Add/remove dependents tool (686c)                     |
| 11  | `how much gi bill do i have left`                | Top NL query (309 events)                                                                        | Personalized/account query                     | GI Bill balance checker or VA education benefits page |
| 12  | `how to cancel appointment`                      | Top NL query (308 events); documented in Medallia as a failure                                   | Action intent in NL form                       | Appointment management tool                           |
| 13  | `how to transfer to another VA medical facility` | Medallia respondent reported no useful results; long-form NL query with no obvious keyword match | Poor relevancy for conversational query        | Patient transfer or change-of-facility process page   |
| 14  | `does a caregiver have to be a family member`    | Top NL query (231 events)                                                                        | Eligibility question in NL form                | PCAFC eligibility page                                |


---

### Documented poor-relevancy and mismatch failures

These are drawn directly from documented failures in the problematic query log and Medallia data. Medallia complaints about "no results" likely reflect poor result quality or a system outage at the time — not a reliable indicator that the query structurally returns nothing.


| #   | Query                                                  | Why it's in the list                                                                          | Failure type                                 | Expected top result                                      |
| --- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------- |
| 15  | `ptsd treatment`                                       | Documented: does not return ptsd.va.gov/understand_tx — returns sibling pages instead         | Subdomain indexing / primary page ranking    | ptsd.va.gov PTSD treatment basics page                   |
| 16  | `military sexual trauma`                               | Documented: does not return mentalhealth.va.gov/msthome                                       | Subdomain indexing                           | mentalhealth.va.gov MST home page                        |
| 17  | `foia`                                                 | Documented: surfaces non-FOIA "About form" pages with misleading FOIA snippet as description  | Low-level content match / misleading snippet | FOIA request page or Form 20-10206                       |
| 18  | `tax abatement letter`                                 | Documented Medallia response: returned "My Chemotherapy Treatment" page                       | Severe intent mismatch                       | Property tax exemption letter or disability verification |
| 19  | `chronic adjustment disorder`                          | Documented Medallia response: returned unrelated mental health content                        | Condition-specific query intent              | Mental health condition page for adjustment disorder     |
| 20  | `quicksubmit`                                          | Documented: tool does not appear in results at all                                            | Tool discoverability / alternate naming      | QuickSubmit evidence upload tool                         |
| 21  | `VA community care phone number`                       | Medallia respondent reported no useful results; navigational query with no clear landing page | Poor relevancy for navigational query        | Community care contact information page                  |
| 22  | `set up passkey`                                       | Medallia respondent reported no useful results for "passkey" and "setup passkey"              | New feature with limited content coverage    | Login.gov or ID.me passkey setup instructions            |
| 23  | `2026 service connected disability compensation rates` | Documented Medallia response: unable to find current-year rates                               | Date-sensitive / recency ranking             | Current-year VA disability compensation rates page       |
| 24  | `information share agreement`                          | Documented: returned 99 pages of general info, not the form                                   | Multi-word phrase / action vs. info intent   | VA Form 10-5345 or health information release form       |


---

### Tricky / edge-case query types

These stress-test behaviors that differentiate keyword from semantic engines.


| #   | Query                      | Why it's in the list                                                           | Failure type                                   | Expected top result                                     |
| --- | -------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------- |
| 25  | `coe`                      | Acronym-only query; "certificate of eligibility" is the full term              | Acronym expansion                              | COE application page (same target as #5)                |
| 26  | `chapter 35`               | Top general keyword (1.26%); specific program name, not a form number          | Program name resolution                        | Survivors' and Dependents' Educational Assistance page  |
| 27  | `priority 1 qualification` | Documented Medallia response: one hour of failed searching                     | Eligibility terminology                        | VA health care priority groups page                     |
| 28  | `get medical records`      | Top NL query (308 events) — "get" is an action verb, not a noun                | Action-verb query parsing                      | Request medical records tool                            |
| 29  | `will preparation`         | Documented: zero useful results; "will" is a stop word in many keyword engines | Stop-word / ambiguous term handling            | Veterans' estate planning or legal assistance resources |
| 30  | `cemetery grants program`  | Documented: does not return cem.va.gov/grants despite exact title match        | Subdomain indexing + exact-title match failure | cem.va.gov/grants — Veterans Cemetery Grants page       |

