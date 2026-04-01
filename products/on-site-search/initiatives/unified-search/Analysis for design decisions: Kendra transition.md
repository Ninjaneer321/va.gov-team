---
# Document Metadata
title: "Research Synthesis: VA.gov Search — Design Analysis for Kendra Transition"
date: 2026-03-30
last_updated: 2026-03-30
document_type: "research-synthesis"
category: "Research Discovery & Analysis"
purpose: "Synthesizes existing sources to identify documented failures in the current Search.gov experience, surface design implications for the Kendra SERP transition, and prioritize research gaps that need to be addressed before launch"

# Context
team: "On-site Search"
product: "VA.gov Global Search (Unified Search)"
product_area: "Unauthenticated experience — VA.gov global search (sitewide)"

# Related Resources
related_files:
  - file: "R&S Search and Filtering — Research Findings"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/research-report.md"
    description: "Remote moderated usability study, R&S filter UI, 12 participants, March 2024"
  - file: "VA.gov Search Feedback — Combined Qualitative Analysis"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md"
    description: "Qualitative thematic analysis of ~3,815 Medallia survey responses"
  - file: "VA.gov Search Feedback — Medallia Qualitative Analysis"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/medallia-search-findings-031226.md"
    description: "Earlier or parallel version of the combined Medallia analysis"
  - file: "Problematic Search Queries"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/problematic-search-queries.md"
    description: "QA / editorial audit of specific queries with documented failures"
  - file: "Top queries and CTR — 2025"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/2025.md"
    description: "Full-year 2025 query analytics (14.17M events)"
  - file: "On-site search product outline"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/unified-search-product-outline.md"
    description: "Product context and initiative scope"
  - file: "Initiative brief: Unified Search"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/initiative-brief.md"
    description: "Business case, KPIs, and desired outcomes for unified search"
  - file: "2025 On-Site Search Query Analysis"
    url: ""
    description: "Internal Slack only — no public URL"

# Maintenance
status: "active"

tags:
  - "Veterans"
  - "Caregivers"
  - "Family Member"
  - "Disability"
  - "Healthcare"
  - "Education"
  - "Finances"
  - "Records"
  - "Smartphone"
  - "Desktop"
  - "Accessibility"
  - "Content Presentation"
  - "Facilities"
  - "Find-a-va-form"
  - "secondary-analysis"
  - "research-synthesis"
---

# Analysis for design decisions: Kendra transition

## Documents used...

### 1. Mikki's 2025 On-Site Search Query Analysis (in Slack)

- **Product:** VA.gov global search (Search.gov backend)
- **Method:** Analytics / quantitative query analysis
- **Timeframe:** 2025 full year (14.17M search events)
- **Key findings:**
  - 97% keyword queries; only 2.86% natural-language
  - Top query categories: benefits (30%), acronyms/app names (19%), personalized content (11%), form numbers (8%)
  - Most-searched topics: disability, health care, education, claims, dependents
  - Top natural-language queries: "how to file a disability claim," "how do I add my wife as a dependent," "how much GI bill do I have left"
- **Gaps:** No data on CTR, task completion rates, or post-search session outcomes (did the Veteran find what they needed?)

---

### 2. [R&S Search and Filtering: Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/research-report.md)

- **Product:** Resources & Support (R&S) search + filter UI
- **Method:** Remote moderated usability testing, Figma prototype, 12 participants (10 on smartphones, 0 desktop)
- **Date:** March 31, 2024
- **Key findings:**
  - 10/12 completed all tasks via browsing or search; filters were largely ignored without prompting
  - Only 3/12 opened the filter modal unprompted; most appreciated filters once shown
  - 7/12 expressed frustration or confusion with "tags" terminology and behavior
  - 10/12 understood filter labels once engaged
  - 7/12 wanted to sign in for personalized results
- **Gaps:** No AT users tested; no Asian or transgender participants; filter behavior in prototype was limited vs. production logic

---

### 3. [VA.gov Search Feedback: Combined Qualitative Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md)

- **Product:** VA.gov site search, Facility Locator, Find a VA Form
- **Method:** Qualitative thematic analysis of ~3,815 Medallia survey responses
- **Timeframe:** Survey data from around March 2026 (source file: search-survey-030926)
- **Key themes (ranked by frequency):**


| Theme                                | Responses           | Core Issue                                                            | Life-safety risk                                   |
| ------------------------------------ | ------------------- | --------------------------------------------------------------------- | -------------------------------------------------- |
| Info vs. Action                      | 40+                 | Veterans get articles instead of direct tool access                   | Yes (clinical examples)                            |
| Facilities & Contacts                | 35+                 | Stale/inaccurate facility data; permanently closed clinics            | Explicitly cited                                   |
| Technical Issues & Bugs              | 35+                 | Broken links, 404s, Facility Locator outages spanning 1+ year         | Yes (blocks appointment scheduling)                |
| Intent & Relevancy                   | 30+                 | Keyword matching fails; 999-result overload; zero-result queries      | No                                                 |
| Fragmentation                        | 20+                 | Disconnected systems (VA.gov, MHV, eBenefits) with circular redirects | Yes (Veterans in ER can't access medication lists) |
| Accessibility & Digital Literacy Gap | 10+                 | Older/visually impaired Veterans blocked by complexity                | Yes (accessibility barriers)                       |
| Tax & Financial Documents            | 8+ (seasonal spike) | 1099-R, tax statements, benefit verification letters not findable     | Financial deadlines                                |


- **Gaps:** Data is self-selected (survey respondents skew frustrated); no frequency weighting per theme

---

### 4. [Problematic Search Queries](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/problematic-search-queries.md)

- **Product:** VA.gov global search (Search.gov)
- **Method:** QA / editorial audit — specific queries documented with expected vs. actual results
- **Key findings:**
  - Specific pages fail to rank even when the query directly matches the page title (e.g., "schedule a burial," "ptsd treatment," "military sexual trauma") — in some cases, sibling or child pages do appear, but the intended target does not
  - Low-level page content (H4s in related-forms sections) surfaces as result descriptions, creating misleading snippets (e.g., FOIA query returning non-FOIA "About form" pages)
- **Gaps:** Appears to be a living document with limited entries — likely an incomplete catalog, not exhaustive

---

## Synthesis

The Medallia data, query analytics, and usability study point to consistent patterns in how the current search experience falls short. Because the Medallia data is self-selected, the themes below reflect where Veterans encountered enough friction to leave feedback — not a representative sample of all search sessions.

### 1. Relevancy failures are the most-reported problem

The [Combined analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md) (30+ responses on this theme) and the [problematic queries audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/problematic-search-queries.md) point to the same core issue: **the engine matches tokens, not intent.**

Patterns documented in the data:

- Veterans report that multi-word queries return results matching individual words rather than the full phrase — e.g., results for "pharmacy hours" had nothing to do with the query ([Combined analysis, Theme 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md))
- Natural-language queries fail because the engine tokenizes them — common words like "of," "contact," or "information" match broadly, producing overload rather than relevant results. Documented examples: "how do I edit my next of kin contact information" returned results for any page containing those words individually; "How to Correct Date of Birth" returned 999 results ([Combined analysis, Theme 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md))
- At least one Veteran reported the same verbatim query returning different results on repeat attempts ([Combined analysis, Theme 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md))
- Specific pages on subdomains (ptsd.va.gov, cem.va.gov, publichealth.va.gov) fail to rank even when the query directly matches the page title — in some cases sibling pages appear, but the target page does not ([Problematic queries audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/problematic-search-queries.md))
- Low-level page content (H4s in related-forms sections) surfaces as result descriptions, creating misleading snippets — e.g., a FOIA query returns non-FOIA "About form" pages ([Problematic queries audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/problematic-search-queries.md))

> "Terrible search just throws up anything that has one matching word rather than the combination of words." — [Combined analysis, Theme 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md)

**Kendra implication:** The combined analysis frames these failures as characteristic of keyword matching without semantic fallback. The [problematic queries list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/problematic-search-queries.md) can serve as a regression test suite — queries that fail today should be re-run against Kendra to distinguish indexing gaps from ranking gaps.

---

### 2. Veterans often come to do, not to read, and search returns informational content regardless

The [combined analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md) Theme 2 (40+ responses — the highest-frequency theme) documents a recurring mismatch: Veterans arrive with a specific task and receive informational articles rather than a path to complete it.

Failures documented directly in the Medallia data ([Combined analysis, Theme 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md)):

- Searching to upload evidence or documents → returns articles about uploading, not the upload tool
- Searching for medication refill → returns information about the refill process, not the refill tool
- Searching for CHAMPVA application → redirects to homepage
- Searching for QuickSubmit → tool does not surface in results

> "Everything on this website just leads to an article or some kind of request form. I already did your forms and got approved — just give me my health card information." — [Combined analysis, Theme 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md)

**Kendra implication:** Kendra's semantic ranking will improve relevancy, but distinguishing transactional from informational intent requires deliberate SERP design decisions — surfacing deep task links or CTAs for high-confidence task-oriented queries. This is not addressed in any existing research.

---

### 3. Query behavior is mostly noun-based, but natural language is a small but meaningful slice

From the 2025 query analysis:

- 97.14% of queries are keyword-based; 2.86% are natural-language (405,490 queries)
- Natural-language queries concentrate in: claims/appeals (10% of NL queries), survivor/dependent benefits (6%), health care tasks (6%), education (4%)
- Most common words across all queries: claim, letter, form, benefits, disability, travel, file, dependent, rating

The data suggests Veterans lean toward short noun phrases over full sentences, which has implications for how much the SERP should prioritize conversational UI patterns vs. type-ahead and query suggestions for high-frequency terms.

---

### 4. The R&S study surfaces two findings relevant to global search

[R&S Search and Filtering study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/research-report.md) (12 participants, mobile-heavy, 2024) tested filtering and browsing within R&S specifically — filters are out of scope for the global search SERP. However, two findings carry over:

- **Browsing and search dominate.** 7/12 participants navigated primarily by browsing, 4/12 by search. Neither group reached for filters as a first instinct, suggesting Veterans approach search with a specific task in mind and want a direct path.
- **Personalization expectation is present.** 7/12 wanted to sign in to see results relevant to them specifically. This also surfaces in the Medallia data. Authenticated search is out of scope for this initiative but worth tracking as a future need.

**Note:** Tag terminology and filter behavior findings from this study apply to R&S only and should not be used to inform global SERP decisions.

---

### 5. No assistive technology users have been included in any study

- [R&S study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/research-report.md): 0 AT users tested; explicitly flagged as a gap
- [Combined analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md) Theme 5 includes the response "NOT VISUALLY IMPAIRED ACCOMMODATING," indicating at least one Veteran found the experience inaccessible
- No screen reader, voice input, or magnification testing appears in any document in this corpus

Section 508 / WCAG 2.1 AA is a platform requirement. Kendra's SERP will introduce result types that render differently from standard blue-link results — keyboard navigation and screen reader behavior for these components needs to be validated before launch.

---

### 6. Platform fragmentation is out of scope for search, but it affects what search returns

[Combined analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md) Theme 4 (20+ responses): Veterans describe VA.gov, My HealtheVet, eBenefits, and Login.gov as disconnected systems with separate logins and, in some cases, circular redirects between them.

Resolving fragmentation isn't part of this initiative. The relevant design consideration is that Kendra results will link into these sub-systems — if a result destination requires a separate login or is behind a broken redirect, the result may be technically correct but not actionable. Deep-link destinations for high-frequency queries should be audited before indexing.

---

## Standards and Guidelines to Inform This Work

### Platform requirements

- WCAG 2.1 AA / Section 508 compliance required — Kendra's new result types (featured snippets, document excerpts) need accessibility validation before launch
- USWDS design system components must be used throughout the SERP
- KPI framework: products are measured on Ease of Use, Service Completion, Trust/Satisfaction, and Health
- Analytics priority: CTR on top queries, relevancy of top 10 results, task completion rate

### Design ideas suggested by the research

The following are ideas the data points toward — they represent areas to explore and test, not validated solutions:

- Best bets that are more action-oriented for Veterans trying to complete specific tasks  — supported by the volume of task-oriented queries in the 2025 search query analysis and the intent/action mismatch in the [Medallia data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md)
- De-ranking press releases and news articles for queries that signal task intent — supported by direct Veteran feedback in the [Combined analysis, Theme 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md)
- Signaling authenticated vs. unauthenticated content in results — supported by fragmentation feedback in [Theme 4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md)

### Mobile constraints

- 10/12 R&S participants were on smartphones ([R&S study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/research-report.md)); no equivalent device data exists for the global SERP
- Results and primary actions should be reachable without extensive scrolling — supported by mobile usability feedback in the [R&S study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/research-report.md)

### Facility Locator data quality (adjacent, but consequential if Facility data is included in Kendra index)

- The [Combined analysis, Theme 3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/va-search-feedback-combined-analysis.md) documents stale addresses, disconnected phone numbers, closed clinics, and expired community care contracts across 35+ responses
- If Facility Locator data is indexed in Kendra, its accuracy should be assessed before inclusion

---

## Research Gaps and Recommended Next Steps


| Gap                                                                                  | Priority | Why it matters                                                                                                      | Suggested action                                                               |
| ------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| No direct studies of how Veterans interpret AI-ranked or featured-snippet results    | High     | Kendra's direct answers are new affordances — Veterans may not understand why one result is elevated or trust it    | Concept test Kendra result types with 6–8 Veterans before launch               |
| No AT / screen reader testing on any search UI                                       | High     | Platform requirement; new Kendra components render differently from standard blue-link results                      | Usability test with screen reader and keyboard-only users pre-launch           |
| No CTR or task completion baseline by query type                                     | High     | Can't measure Kendra improvement without a baseline                                                                 | Pull CTR and abandonment data from Search.gov by query category now            |
| No global SERP usability testing (only R&S, a scoped sub-search)                     | High     | R&S findings are adjacent but don't transfer directly to sitewide search                                            | Conduct moderated testing of the Kendra SERP with Veterans across device types |
| Authenticated search / personalization untested                                      | High     | 7/12 R&S participants expected personalized results; no research on how this should work in global search           | Design and test authenticated search as a post-MVP initiative                  |
| No research on intent classification in results ("Did you mean?", query suggestions) | Medium   | Kendra can surface these; unknown if Veterans trust or use them                                                     | Include in SERP usability test                                                 |
| No caregiver / family member search behavior distinct from Veterans                  | Medium   | 8.33% of searches are family-oriented; mental models may differ                                                     | Recruit caregivers and family members in upcoming usability studies            |
| Facility Locator data quality is a separate system with known accuracy issues        | Medium   | If global search surfaces Facility Locator results, stale data enters Kendra results                                | Audit Facility Locator data currency before including in Kendra index          |
| Mobile-first SERP for blended result types untested                                  | Medium   | Global SERP will surface more content types across a small screen; no mobile usability data exists for this context | Validate responsive SERP design on actual devices                              |


**Recommended sequence before Kendra launch:**

1. **Baseline metrics now:** CTR on top 25 queries and abandonment rate by query type; needed to demonstrate post-Kendra improvement
2. **Audit deep-link destinations:** confirm high-frequency transactional targets (upload evidence, claim status, medication refill) don't 404 or redirect to login walls before indexing
3. **Use [problematic queries](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/problematic-search-queries.md) as a regression test suite:** if known-broken queries still fail post-migration, diagnose as an indexing problem, not a ranking problem
4. **Concept test Kendra result types with Veterans:** featured snippets, document excerpts, and promoted results are unfamiliar; test comprehension and trust before launch
5. **AT usability test on the new SERP:** keyboard navigation and screen reader behavior for new result components must be validated against WCAG 2.1 AA

---

## External References


| Resource                                                                                                                                                                           | Purpose                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [On-site search product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/unified-search-product-outline.md)              | Product context and initiative scope                                                      |
| [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/initiative-brief.md)               | Business case, KPIs, and desired outcomes for unified search                              |
| [Search design reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/search-design-reference.md) | Architecture concepts for blended results and intent classification                       |
| [R&S research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/research-plan.md)        | Recruitment criteria and methodology for the 2024 filter study                            |
| [R&S topline summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/topline-summary.md)    | Quick read on filter/tag findings                                                         |
| [Top no-results queries — 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/2025.md#top-queries-with-no-results)   | Indexing coverage check; zero results are rare so less useful as a primary success metric |
| [Top queries and CTR — 2025](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/analytics/2025.md#top-queries)                      | Baseline CTR data for measuring Kendra improvement                                        |


