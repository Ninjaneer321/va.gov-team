# VA.gov – Structured Findings: IRS 1095-B Download Page

## **Executive Summary**
Across **52 in-scope Medallia responses** for the VA.gov 1095-B page (A11 + VFS), **overall satisfaction is 72.7%** (32/44 CSAT ≥4 among rows with valid 1–5 CSAT). **27.3%** are dissatisfied (12/44 CSAT ≤3). **Task completion signals are sparse and skew negative**: 4 users explicitly reported **“No”** to completing their task; **0** reported “Yes.”\
The **primary pain points** are (1) **login/ID.me verification barriers** (camera/smartphone requirements), (2) **tax-year availability confusion** (seeing 2024 content when expecting 2025 or being told to “wait until January”), and (3) **content clarity/wayfinding** (needing a “simple answer,” encountering a “maze”). **Positive drivers** center on ease of use and clear instructions.\
**Data range (Medallia A11 + VFS): April 9, 2025 – December 30, 2025 (ET)**. December concentrates the majority of activity (**35 CSAT entries**, **77.1% satisfied**, **median CSAT = 5**). 

***

**Table of Contents**

1. Top-Level Findings (Ranked by Relevance & Criticality) 

2. Customer Satisfaction Table 

3. Issue Category Breakdown 

4. Category 1: Login/ID.me Verification Barrier 

5. Category 2: Tax-Year Availability Mismatch 

6. Category 3: Content Clarity & Wayfinding 

7. Category 4: Access VA/VHIC SSO & URL Errors 

8. Category 5: Historical Copies / Back Years 

9. Category 6: Change in Auto-Mailing of 1095-B 

10. Recommendations – Consolidated Priority Table 

11. Appendix: Data Overview, Metrics & Trends

***

## **1. Top-Level Findings (Ranked by Relevance & Criticality)**

Ranking factors: frequency, severity, task-blocking impact, and actionability (CSAT-scoped where counts are available).

1\) **Login/ID.me verification barrier** — **4 mentions (9.1% of CSAT rows)**; camera/smartphone requirement prevents access to the document; **high task-blocking severity**.\
2\) **Tax-year availability mismatch** — **4 mentions (9.1%)**; users encountering 2024 when expecting 2025 or being told content is unavailable until January; **medium/high severity at tax time**.\
3\) **Content clarity & wayfinding** — **2 mentions (4.5%)**; “simple answer” hard to find; perceived “maze” and heavy acronyms; **medium severity**, particularly for older users.\
4\) **Access VA/VHIC SSO & URL errors** — **1 CSAT-scoped instance**; session/handshake failures (“URL request rejected”) and OAuth/SAML shifts; **high severity for affected flow**. (Additional verbatims without CSAT reinforce this theme.)\
5\) **Change in auto-mailing of 1095-B** — **1 mention (2.3%)**; expectation misalignment and burden shift to self-service; **low/medium frequency, medium frustration**.\
6\) **Historical copies / back years** — **1 CSAT-scoped mention (2.3%)**; plus at least one non-CSAT verbatim requesting forms from 2015–2019; **medium actionability via content & tooling**. 

***

## **2. Customer Satisfaction Table**

**CSAT inclusion & filtering method**\
_Included rows:_ URL/Path contains **“/records/download-your-irs-1095-b”** and CSAT present as numeric **1–5**. _Excluded:_ rows outside scope; missing or non-numeric CSAT. **% satisfied = count(CSAT ∈ {4,5}) / count(CSAT ∈ {1..5})**. **Median CSAT computed per month**. The “Primary Issue” reflects the highest issue-category count that month (CSAT-scoped; if positive dominates, we note secondary issues). 

| Month (2025) | CSAT Rows | % Satisfied | Median CSAT | Primary Issue (by mentions)                                                |
| ------------ | --------- | ----------- | ----------- | -------------------------------------------------------------------------- |
| Apr          | 1         | **100%**    | 5.0         | None observed                                                              |
| May          | 1         | **0%**      | 2.0         | **Tax-year availability mismatch**                                         |
| Sep          | 3         | **100%**    | 5.0         | Positive sentiment (no predominant issue)                                  |
| Oct          | 3         | **0%**      | 2.0         | Tie: **Historical copies** & **Login barrier**                             |
| Nov          | 1         | **100%**    | 4.0         | None observed                                                              |
| Dec          | 35        | **77.1%**   | 5.0         | Positive sentiment (secondary: **Login** and **Tax-year** equally present) |

(Overall, **44** CSAT-eligible rows → **72.7% satisfied**, **27.3% dissatisfied**.) 

***

## **3. Issue Category Breakdown**

**Distribution (CSAT-scoped):** 

- **Login/ID.me verification barrier:** **4** (9.1%) 

- **Tax-year availability mismatch:** **4** (9.1%) 

- **Content clarity & wayfinding:** **2** (4.5%) 

- **Access VA/VHIC SSO & URL errors:** **1** (2.3%) 

- **Historical copies / back years:** **1** (2.3%) 

- _(Positive drivers:_ **_12_** _(27.3%); Uncoded/blank:_ **_20_** _(45.5%))_ 

**Observed completion signals:** 

- “Were you able to do your task today?” → **No: 4**, **Yes: 0**, **Blank: 48** (in-scope). 

***

## **4. Category 1: Login/ID.me Verification Barrier**

**Mentions / Volume:** **4/44 CSAT rows (9.1%)**; additional corroboration in non-CSAT verbatims. 

**Description:** Users attempting to download the 1095-B are blocked by **identity verification flows requiring a camera/smartphone** or real-time video calls. For older or disabled Veterans, these steps are **not feasible**, producing abandonment and strong negative sentiment. 

**Representative quotes:**\
• “I’ve been trying to access my ebenefits page for over 6 hours now with this IDMe absurdity… they want a video camera meeting… I’m a 70 year old… I don’t have a damn camera… I desperately need a copy of my 1095B.” (CSAT **1**, 12/30/2025)\
• “Trying to access VA.Gov **without a smart phone is impossible**, and makes me very angry. I need a 1095B form.” (CSAT **1**, 12/24/2025)\
• “Camera on document to **verify ID was very challenging**.” (CSAT **2**, 10/2/2025) 

**Impact:** **Task-blocking** for document access; disproportionately affects **older users** and those without devices that meet verification requirements; acute during **tax season**. 

**Temporal or segment patterns:** 

- **Concentrated in December 2025** (peak traffic), with earlier instances in **October**. 

**Critical Observations:** 

- Barrier is **independent of page comprehension**—users understand what they need (1095-B) but cannot pass the gate. 

- References to OAuth/SAML/SSO indicate **underlying auth transitions** that may change user expectations (e.g., single sign-on vs. re-verify). 

**Recommendations:** 

- **P0:** Provide **camera-less verification alternatives** (mail-in verification, in-person verification, or knowledge-based checks) and clearly surface these as **equally valid** paths on the 1095-B page. 

- **P0:** Add a **“No smartphone or camera?” banner** with step-by-step fallback that ends at **document retrieval** without creating dead ends. 

- **P1:** Instrument and monitor **verification failure reasons** (device capability, wait time) to reduce friction hotspots during **January–April**. 

***

## **5. Category 2: Tax-Year Availability Mismatch**

**Mentions / Volume:** **4/44 (9.1%)**. 

**Description:** Users arrive expecting the **current tax year** (e.g., 2025 availability) and encounter **2024 content** or instructions indicating **availability in January**, creating confusion and eroding trust. 

**Representative quotes:**\
• “Getting an Email about **downloading 1095-B**, only to find that download was for **2024**.” (CSAT **2**, 12/12/2025)\
• “Don’t tell us today that something **won’t be available until January**, and bury the link inside the email…” (CSAT **2**, 12/11/2025)\
• “Your 1095-B form is for **tax year 2024, not 2025**.” (CSAT **2**, 12/10/2025) 

**Impact:** **Expectations mismatch** during time-sensitive tasks; users may **abandon** or call support; contributes to **lower CSAT** for months preceding availability. 

**Temporal or segment patterns:** 

- **May & December** show explicit mentions of year confusion; December is the **peak** with multiple incidents. 

**Critical Observations:** 

- Email campaigns and page copy **lack synchronized year cues**; users need **explicit status** (“2025 available on X date”) and **last-year access** visibility. 

**Recommendations:** 

- **P0:** Add a **Tax-Year Status module** at page top: “**Current year (2025) available on Jan X**; 2024 and prior available here.” Include **year selector** and **availability badge**. 

- **P1:** Align **email templates** to the same module (deep-link with selected year) and include a **calendar reminder** for availability dates. 

- **P2:** Provide **tooltips** clarifying why certain years appear (IRS timelines, processing cadence). 

***

## **6. Category 3: Content Clarity & Wayfinding**

**Mentions / Volume:** **2/44 (4.5%)**. 

**Description:** A minority of users find the page **hard to navigate** or **overly complex**, asking for **“simple answers.”** Perceived **acronym density** and **maze-like** site structure increase cognitive load for some segments. 

**Representative quotes:**\
• “I need a **simple answer**. It takes a **long run around** to get to my answer.” (CSAT **3**, 12/11/2025)\
• “A maze of compartmentalized information… **abbreviations, acronyms**… the system they work in is a disaster.” (CSAT **3**, 12/13/2025)\
• “**Don’t know** what questions to ask.” (CSAT **4**, 12/11/2025) 

**Impact:** **Slows discovery** and can **erode confidence**; risk increases for users with limited time or lower digital fluency. 

**Temporal or segment patterns:** 

- Mentions cluster in **December** alongside overall traffic peaks. 

**Critical Observations:** 

- When clarity issues surface, CSAT tends to be **neutral or low** (median \~3). 

**Recommendations:** 

- **P1:** Introduce an **at-a-glance “How to get your 1095-B”** panel (3 steps, with a fallback for verification alternatives). 

- **P1:** Reduce acronyms and link to a **glossary**; add **FAQ shortcuts** for common scenarios (e.g., which year is needed). 

- **P2:** Add a **guided prompt** (“Tell us the year and your situation”) that returns a **direct action** or the right help-article. 

***

## **7. Category 4: Access VA/VHIC SSO & URL Errors**

**Mentions / Volume:** **1 CSAT-scoped**; additional **non-CSAT** verbatims detail OAuth/SAML changes and session behavior. 

**Description:** Users report **SSO handshakes not persisting**, encountering **“URL request rejected”** when trying to access VHIC via Access VA, and note that **headers no longer indicate SAML/SSO** during login. 

**Representative quotes:**\
• “Can no longer login to VHIC on Access VA, it returns an error message **‘URL request rejected’**… used to be when you login to VA.gov you were also automatically logged into Access VA… header no longer says **SAML or SSO**, it just says **OAuth**.” (12/27/2025) 

**Impact:** **Hard block** for related flows; undermines **cross-property trust**. 

**Temporal or segment patterns:** 

- Reports focus around **mid-December** during authentication pathway changes. 

**Critical Observations:** 

- This issue often **co-occurs** with login barriers, compounding friction. 

**Recommendations:** 

- **P1:** Stabilize **SSO session persistence** across VA.gov ↔ Access VA; monitor for **HTTP 4xx** “URL request rejected” spikes. 

- **P1:** Provide a **status ribbon** when SSO/OAuth systems are in transition, linking to workarounds. 

***

## **8. Category 5: Historical Copies / Back Years**

**Mentions / Volume:** **1 CSAT-scoped**, plus an additional non-CSAT request (2015–2019). 

**Description:** Users need **prior-year** 1095-B forms (e.g., **2022** due to state audits or tax penalties). Locating and retrieving older forms is **not obvious** from the main page. 

**Representative quotes:**\
• “I need my **1095-B from 2022**… The State of Massachusetts has seized my bank account…” (CSAT **2**, 10/22/2025)\
• “Want to download IRS 1095-B **tax forms from 2015-2019**.” (4/15/2025, non-CSAT) 

**Impact:** **High urgency** for affected individuals; absence of clear back-year pathways increases **support burden**. 

**Recommendations:** 

- **P2:** Add a **Back-Years** section with **year picker** and state-specific guidance (e.g., Massachusetts compliance notes). 

- **P2:** Provide a **contact fallback** for **archival requests** when self-service fails. 

***

## **9. Category 6: Change in Auto-Mailing of 1095-B**

**Mentions / Volume:** **1** explicit complaint. 

**Description:** Users perceive that VA **no longer automatically sends** 1095-B forms, increasing the **burden** to find and download annually. 

**Representative quote:**\
• “VA **no longer automaticaly sending 1095-B** form for veterans tax returns.” (CSAT **2**, 12/10/2025) 

**Impact:** Expectation misalignment and potential **late filings**; amplifies other friction (login, clarity). 

**Recommendations:** 

- **P2:** Clarify **mailing policy** prominently; add **opt-in** for mailed copies in **Preferences**. 

***

## **10. Recommendations – Consolidated Priority Table**

| Priority | Recommendation                                                                                                                                                           | Issue Addressed        | Estimated Impact                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ----------------------------------------------------------------------------------------- |
| **P0**   | **Camera-less verification path** (mail-in, in-person, knowledge-based) surfaced on the 1095-B page; “No smartphone/camera?” CTA with step-by-step fallback to download. | Login/ID.me barrier    | **High**: Removes hard block; improves completion & CSAT during tax season.               |
| **P0**   | **Tax-Year Status module** with explicit availability dates; **year selector** that deep-links to the correct resource; synchronized email templates.                    | Tax-year mismatch      | **High**: Reduces confusion; improves trust and conversion.                               |
| **P1**   | **SSO stabilization & monitoring** for Access VA/VHIC (session persistence, “URL request rejected” telemetry, OAuth/SAML transitions).                                   | Access VA/VHIC errors  | **Medium/High**: Restores cross-app continuity; mitigates login compounding.              |
| **P1**   | **At-a-glance 3-step panel** + glossary & FAQ shortcuts; reduce acronym density; guided prompt for common questions.                                                     | Clarity & wayfinding   | **Medium**: Faster discovery; reduces abandonment for lower-fluency users.                |
| **P2**   | **Back-Years retrieval** UX (year picker, state guidance, archival request contact).                                                                                     | Historical copies      | **Medium**: Addresses compliance cases; lowers support calls.                             |
| **P2**   | **Mailing policy visibility & opt-in** for paper 1095-B copies.                                                                                                          | Change in auto-mailing | **Low/Medium**: Aligns expectations; improves satisfaction for paper-preferring segments. |

***

## **11. Appendix: Data Overview, Metrics & Trends**

**Data Overview**

- **Dataset:** Medallia A11 Group B + VFS questionnaire verbatims for **/records/download-your-irs-1095-b**. **52 in-scope rows** (URL filter). 

- **CSAT rows:** **44** (valid 1–5). **Satisfied:** **32** (CSAT 4–5). **Dissatisfied:** **12** (CSAT 1–3). **Overall % satisfied:** **72.7%**; **% dissatisfied:** **27.3%**. 

- **Date range:** **Apr 9, 2025 – Dec 30, 2025 (ET)**. **December**: **35 CSAT entries**, **77.1% satisfied**, **median 5**. 

- **Task completion (self-report):** “Able to do task today?” → **No: 4**, **Yes: 0**, **Blank: 48** (in-scope). 

**Theme & Task Counts**

- **Login/ID.me barrier:** **4 (9.1%)** CSAT-scoped mentions. 

- **Tax-year mismatch:** **4 (9.1%)**. 

- **Clarity & wayfinding:** **2 (4.5%)**. 

- **Access VA/VHIC SSO & URL errors:** **1 (2.3%)** (plus non-CSAT support). 

- **Historical copies/back years:** **1 (2.3%)** CSAT; **+1** non-CSAT. 

- **Positive drivers:** **12 (27.3%)** CSAT mentions citing ease, usefulness, clear instructions. 

**Trends**

- **Monthly CSAT pattern:** Strong **satisfaction in April, September, November**, with **dissatisfaction spikes in May and October**; **December** shows high volume and solid satisfaction despite several issue mentions. 

- **Primary monthly issues:** **May → Tax-year mismatch**, **October → tie between Historical copies & Login barrier**, **December → Positive dominant; secondary Login & Tax-year**. 

**Representative Quotes (selected)**

- **Positive:** “Easy sight to use.” (CSAT **5**, 12/11/2025) | “Good Instructions.” (CSAT **5**, 12/11/2025) | “Got the document I needed.” (CSAT **5**, 9/17/2025) 

- **Login barrier:** “Without a smart phone is impossible…” (CSAT **1**, 12/24/2025) | “Camera… verify ID was very challenging.” (CSAT **2**, 10/2/2025) 

- **Tax-year confusion:** “Download was for **2024**.” (CSAT **2**, 12/12/2025) | “Won’t be available until **January**…” (CSAT **2**, 12/11/2025) 

- **Clarity:** “Need a **simple answer**… **long run around**.” (CSAT **3**, 12/11/2025) 

- **SSO/URL:** “**‘URL request rejected’**… header no longer says **SAML or SSO**… **OAuth**.” (12/27/2025) 

- **Back years:** “Need **1095-B from 2022**…” (CSAT **2**, 10/22/2025) | “Forms **2015-2019**.” (4/15/2025) 

**END OF REPORT**

**References**

\[1] [Medallia to create template 1095-B](https://dvagov-my.sharepoint.com/personal/raquel_eisele_va_gov/_layouts/15/Doc.aspx?sourcedoc=%7B3C6105B4-EFBA-49C5-8D5D-AC80F67997F2%7D\&file=Medallia%20to%20create%20template%201095-B.csv\&action=default\&mobileredirect=true) in CAG
