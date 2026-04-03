# Product Outline: Decision Reviews Onramp Tool

**Last updated:** 2026-04-02

---

## Overview

The Decision Reviews Onramp is an interactive, unauthenticated questionnaire on VA.gov that helps Veterans determine which decision review pathway is most appropriate for their disability compensation claim. By asking a series of branching questions about the Veteran's specific situation — such as whether they have a decision, the type of prior claim, and whether they have new evidence — the tool provides a personalized recommendation for one of three decision review options (Supplemental Claim, Higher-Level Review, or Board Appeal) or redirects Veterans to other appropriate next steps.

- **VA.gov URL:** https://www.va.gov/decision-reviews/explore-disability-claim-options/
- **Staging:** https://staging.va.gov/decision-reviews/explore-disability-claim-options/
- **No physical form equivalent** — this is a guidance tool, not a submission form

---

## Team Communications

- **Government lead:** Amy Lai
- **Slack channel:** [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- **GitHub labels:** `team-DRAGONS`, `Decision-Reviews-Team`, `onramp`

### Core Team

| Name | Role | Email |
|------|------|-------|
| Amy Lai | Product Owner, Gov't Lead | amy.lai2@va.gov |
| Christian Crumlish | Product Manager | ccrumlish@kindsys.us |
| Grace Xu | Engineering Lead | gxu@kindsys.us |
| Jerry Sea | Full Stack Engineer | jsea@kindsys.us |
| Randi Mays | Full Stack Engineer | rmays@kindsys.us |
| Kyra Berman-Gestring | UX Researcher/Designer | kyra.berman-gestring@agile6.com |
| Lauren Dawson | UX Researcher/Designer | lauren.dawson@agile6.com |
| Tracy Tran | Accessibility Engineer | tracy.tran@agile6.com |
| Cindy Lackey | Content Designer/Strategist | cindy.lackey@coa.solutions |
| Pam Macalintal | Delivery Manager | pam.macalintal@agile6.com |

---

## Problem

Veterans who disagree with a VA disability compensation decision must choose between three decision review pathways — Supplemental Claim, Higher-Level Review, or Board Appeal — each with different evidence requirements, timelines, and eligibility criteria. Today, Veterans struggle to make this choice confidently, leading to measurable negative outcomes:

- **Pathway switching:** 4.8% of Veterans submit more than one type of decision review, suggesting they chose the wrong pathway initially
- **High form abandonment:** 43.9% aggregate abandonment rate across all three decision review forms (54.3% for Supplemental Claims alone)
- **Confusion about differences:** Qualitative feedback indicates Veterans have difficulty understanding the distinctions between options, with some leaving claim narratives in CSAT surveys out of frustration
- **Duplicate submissions:** Veterans sometimes submit the same review through multiple channels because they are unsure whether their submission was received or appropriate

**How might we** help Veterans independently identify the most appropriate decision review pathway for their specific situation before they begin a form?

### Evidence

- Veterans start multiple types of decision reviews within short time windows (7-, 30-, 90-, 180-day analysis)
- Form abandonment occurs disproportionately at key decision-making points in the form flow
- Call centers field questions from Veterans confused about which pathway to choose
- Prior research (2020–2025) consistently identified pathway selection as a pain point ([Prior Research Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/research/decision-reviews-onramp-2025/prior-research-copilot-summary.md))

---

## Desired User Outcomes

- Veterans understand the purpose and requirements of each decision review pathway before starting a form
- Veterans feel confident in their eligibility for the pathway they choose
- Veterans have a clear understanding of expected timelines for each option
- Veterans know their immediate next steps after receiving a recommendation
- Veterans who are not eligible for a decision review are redirected to appropriate alternatives (e.g., filing an initial claim, filing a claim for increase)

## Undesired User Outcomes

- Veterans feel overwhelmed by the complexity of the questionnaire
- Veterans choose an option that is wrong for their situation based on the tool's recommendation
- Veterans waste time navigating a tool when they already know what they need
- Veterans are confused by VA terminology used in the questions

---

## Desired Business Outcomes

- Reduction in Veterans submitting claims and appeals for which they do not qualify
- Reduction in disability claims submitted when a Supplemental Claim would have been more appropriate
- Reduction in duplicate submissions across decision review pathways
- Increase in Veteran satisfaction with the online decision review experience (CSAT)
- Reduction in confusion-driven call center contacts about pathway selection

## Undesired Business Outcomes

- Increase in incorrect or duplicate claims due to tool recommendations
- Negative impact to CSAT scores
- Increased burden on call centers from tool-related questions
- Veterans bypassing the tool and proceeding with incorrect pathway selection anyway

---

## Measuring Success

### Key Performance Indicators (KPIs)

| KPI | Baseline | Target | Data Source |
|-----|----------|--------|------------|
| Pathway Switching Rate (PSR) — % of users who submit >1 DR type within 90 days | 4.8% | Reduce by 10–20% | GA4 segments |
| Form Abandonment Rate (FAR) — aggregate across all three DR forms | 43.9% | Improve by 15–25% at decision points | GA4 funnels |
| First-Attempt Success Rate (FASR) — % completing chosen pathway without switching | 92% | Increase | End-to-end journey tracking |
| Tool completion rate — % of users who start the questionnaire and reach a result | TBD (establish post-launch) | TBD | GA4 |
| Tool-to-form conversion rate — % of users who click through from result to form | TBD (establish post-launch) | TBD | GA4 |

#### Baseline KPI Values

**Form Abandonment Rate by pathway (pre-onramp):**
- 0995 (Supplemental Claim): 54.3% abandonment (27,348 starts → 12,491 completions)
- 0996 (Higher-Level Review): 37.1% abandonment (36,918 starts → 23,231 completions)
- 10182 (Board Appeal): 40.9% abandonment (11,060 starts → 6,540 completions)

**First-Attempt Success Rate by pathway (pre-onramp):**
- 0995: 89% (31k submissions → 27.5k without switching)
- 0996: 82% (21k submissions → 17.3k without switching)
- 10182: 98% (56k submissions → 55k without switching)

### Objectives and Key Results (OKRs)

- **Objective:** Veterans confidently select the right decision review pathway on the first attempt
  - Key result: Reduce pathway switching rate by 10–20%
  - Key result: Improve form completion rates at decision points by 15–25%
  - Key result: Decrease same-day duplicate submissions by 20–35%

---

## Assumptions

1. **Veterans' primary barrier is understanding, not access** — Veterans struggle to choose the right pathway because the differences are unclear, not because they can't find the forms *(most risky — validated through user research)*
2. Veterans will trust and act on recommendations from an automated tool
3. A branching questionnaire can capture enough situational nuance to make accurate recommendations
4. The tool will be discoverable from existing VA.gov navigation and decision letters

## Solution Approach

### What we built

An interactive, unauthenticated questionnaire that:
- Uses plain-language, yes/no questions to guide Veterans through decision points
- Employs branching logic to show only relevant questions based on previous answers
- Terminates in a personalized recommendation with explanation and direct link to the appropriate form
- Provides contextual help text for complex VA terminology (service connection, contested claims, PACT Act, etc.)
- Redirects Veterans who aren't eligible for decision review to appropriate alternatives (file initial claim, file claim for increase, check claim status)

### Why this approach

- **Questionnaire format** was chosen over comparison tables or static content because Veterans' situations vary significantly — the right pathway depends on multiple interacting factors (timeline, evidence, prior decision type, service connection status)
- **Unauthenticated** to minimize friction — no login barrier for a guidance tool
- **Mobile-first, accessible design** because many Veterans access VA.gov from mobile devices
- **Clear exit points** to human assistance (accredited representatives, contact center) for Veterans who prefer or need personal guidance

### What we explicitly decided not to include

- **Authenticated features** (e.g., pre-populating Veteran data) — guidance tool should have zero friction
- **Saving progress** — the questionnaire is short enough (5–10 minutes) to complete in one sitting
- **Non-disability benefit types** — scoped to disability compensation decision reviews only

### Supporting research

- [Research Strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/research/decision-reviews-onramp-2025/research-strategy.md)
- [Usability Evaluation Research Plan (2025-08)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/research/decision-reviews-onramp-2025/2025-08%20Decision%20review%20options%20tool%20usability%20evaluation%20Research%20Plan.md)
- [Research Findings (2025-10)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/research/decision-reviews-onramp-2025/2025-10%20Explore%20disability%20claim%20decision%20review%20options%20Research%20Findings.md) — Usability testing with 7 Veteran participants
- [Prior Research Summary (2020–2025)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/research/decision-reviews-onramp-2025/prior-research-copilot-summary.md)

Key research findings:
- Starting the guide was not always intuitive; users struggled to find the entry point
- Veterans appreciated the yes/no question format and plain language
- Timeframes were critical in evaluating options — shorter timelines influenced pathway choice
- Many Veterans would not take immediate action despite expressing confidence in the recommendation; many prefer human guidance (VSOs, attorneys)

### Initiatives

- Initiative: Decision Reviews Onramp Tool | [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Enhanced-DR-Onramp-Initiative%20Brief.md)

---

## Launch Strategy

- **Entry points:** Links added to the Decision Reviews hub page, hub side navigation, and crosslinked from individual pathway pages (Supplemental Claims, Higher-Level Review, Board Appeals) and the Decision Reviews R&S page
- **No marketing campaign required** — tool is discoverable through existing VA.gov navigation
- **Contact center preparation:** Product guide provided to contact center staff ([Product Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/product/onramp/product-guide/decision-reviews-onramp-product-guide.md))
- [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/product/onramp/release-plan.md)

## Launch Dates

- **Target Launch Date:** TBD
- **Actual Launch Date:** TBD
- **Impact Review Date:** TBD

---

## Solution Narrative

### Current Status

<!-- Update this section as the product progresses -->

Tool is in pre-launch. Product guide, release plan, and contact center documentation are in preparation. Staging environment is available for review.

### Key Decisions

| Date | Decision | Rationale |
|------|----------|-----------|
| | Unauthenticated experience | Minimize friction — guidance tool should not require login |
| | Disability compensation only | Scope to highest-volume, highest-confusion area first |
| | No progress saving | Questionnaire is short enough (5–10 min) to complete in one session |
| | Branching questionnaire format | Veterans' situations are too varied for static comparison content |

---

## Technical Architecture

### How it works

The tool is a client-side React application with no backend dependencies:
- **No API calls** — all logic runs in the browser
- **No authentication** — fully unauthenticated experience
- **No data storage** — no Veteran data is collected or persisted
- **Branching logic** — display conditions determine which questions appear based on previous answers
- **Two result page templates** — "Your decision review options" (DR results) and "Your available options" (non-DR results), with dynamic content based on the Veteran's path through the questionnaire

### Question flow

The tool contains 23 unique question pages organized into two sections:
1. **Section 1 (Eligibility Screening):** 10 questions covering decision status, timeline, contested claims, service connection, and evidence
2. **Section 2 (Situation-Specific):** 13 questions covering claim type, law/policy changes, new evidence, and hearing preferences

Many questions share content but appear in different path contexts (e.g., "Service-connected condition" is asked on both the >1 year and <1 year paths).

### Result types

- **10 Decision Review results:** Supplemental Claim, HLR, Board Appeal (with variants for hearing/no hearing, evidence/direct, and claim-for-increase combinations)
- **9 Non-Decision Review results:** File initial claim, wait for decision, claim for increase, court of appeals, contested deadline passed, and combined variants

---

## Screenshots

<!-- Add screenshots from the product guide screenshot capture plan -->

### Introduction page

[PLACEHOLDER]

### Example question

[PLACEHOLDER]

### Example result — Decision Review recommendation

[PLACEHOLDER]

### Example result — Non-Decision Review guidance

[PLACEHOLDER]

---

## Related Documentation

- [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Enhanced-DR-Onramp-Initiative%20Brief.md)
- [Product Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/product/onramp/product-guide/decision-reviews-onramp-product-guide.md)
- [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/product/onramp/release-plan.md)
- [Contact Center Reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/product/onramp/product-guide/decision-reviews-contact-center-reference.md)
- [Quick Reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/product/onramp/product-guide/onramp-tool-quick-reference.md)
- [Decision Tree](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/product/onramp/product-guide/onramp-decision-tree.md)
- [IA Design Doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/benefits-portfolio/onramp-decision-review-disability-options.md)
