
## **Copilot Analysis: On-Site Search & Resources & Support Research**

Created with the [past research discovery prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/copilot-research-prompts/research-discovery/past-research-discovery-prompt.md)

### **Primary Research Artifacts Found**

#### **1. 2024 Search Filters Research (Resources & Support)**

- **Source:** [2024-search-filters](https://github.com/department-of-veterans-affairs/va.gov-team/tree/489c577d3775734302b25df28c7ef0040ee03fa2/products/resources-and-support/research/2024-search-filters)
- **Scope:** User testing of new filter design for Resources & Support section (R&S)
- **Sample:** 12 participants (9 Veterans, 3 caregivers/family members)
- **Methodology:** Remote moderated usability testing with Figma prototype

**Key Findings:**

- **Success Metric:** 10 of 12 participants successfully found desired information via browsing or searching
- **Major Challenge:** Only 3 of 12 participants opened the filter modal WITHOUT prompting—indicating low visibility
- **Mixed Results:** Users understood filter labels well (10 of 12), but struggled with tag terminology and functionality (7 of 12 frustrated/confused)
- **Mobile Concerns:** 6 of 12 participants noted severe screen size limitations on mobile devices
- **Authentication Gap:** 7 participants wanted to sign in for personalized content—suggests opportunity for authenticated experience

**Critical Issues with Filters & Tags:**

- Tags were perceived as confusing and taking up excessive screen space, especially on mobile
- Many users were unclear about the distinction between filters and tags
- One participant didn't scroll below tags to see content, indicating they created a UX barrier

📄 **Reference Links:**

- [Topline Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/topline-summary.md)
- [Full Research Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/research-report.md)
- [Data Synthesis Spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/data_synthesis.xlsx)

---

#### **2. Medallia Search Feedback Analysis (Unified Search)**

- **Source:** [products/on-site-search/initiatives/unified-search/medallia-search-findings-031226.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/medallia-search-findings-031226.md)
- **Scale:** ~3,815 Veteran survey responses analyzed
- **Timeframe:** Extensive historical dataset spanning over a year
- **Data Type:** Qualitative feedback from VA.gov search experience surveys

**Six Major Problem Themes (Ranked by Frequency & Severity):**


| Theme                                         | Response Count      | Core Issue                                                            | Life-Safety Risk                                   |
| --------------------------------------------- | ------------------- | --------------------------------------------------------------------- | -------------------------------------------------- |
| **Theme 2: Info vs. Action**                  | 40+                 | Veterans get articles instead of direct tool access                   | Yes (clinical examples)                            |
| **Theme 3: Facilities & Contacts**            | 35+                 | Stale/inaccurate facility data; permanently closed clinics            | **YES—explicitly cited**                           |
| **Theme 1: Intent & Relevancy**               | 30+                 | Keyword matching fails; 999-result overload; zero-result queries      | No                                                 |
| **Technical Issues & Bugs**                   | 35+                 | Facility Locator outages (1+ year), broken links, 404s                | Yes (appointment scheduling blocked)               |
| **Theme 4: Fragmentation**                    | 20+                 | Multiple disconnected search tools (VA.gov, My HealtheVet, eBenefits) | Yes (Veterans in ER can't access medication lists) |
| **Theme 6: Tax & Financial Docs**             | 8+ (seasonal spike) | 1099-R, tax statements not findable                                   | Financial deadlines                                |
| **Theme 5: Accessibility & Digital Literacy** | 10+                 | Older/visually impaired Veterans blocked by complexity                | Yes (accessibility barriers)                       |


**Most Critical Findings:**

**Immediate Action Items:**

1. **Data Quality Crisis:** Veterans report stale facility data, permanently closed clinics listed, cancelled contracts still active, provider listings 7+ years out of date
2. **Intent Mismatch:** Veterans search for "how do I refill medications" and get 14 pages of articles instead of direct access to medication management
3. **Zero/999 Results Problem:** Same keyword-based search returns completely different results on repeat attempts (non-deterministic)
4. **Multi-Source Fragmentation:** Veterans don't know about separate search tools; assume site search covers everything

**Behavioral Data:**

- **Generic queries fail:** "quick submit" = 3% CTR vs. "supplemental claim" = 37% CTR
- **Users won't page through results:** Only look at first 3-5 results; then abandon search
- **Context collapse:** Veterans in ER trying to access spouse's medication list; can't find authenticated pathway through search

**Reference:** [Full Medallia Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/medallia-search-findings-031226.md)

---

#### **3. Unified Search Initiative Brief & Design Reference**

- **Source:** [products/on-site-search/initiatives/unified-search/](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/on-site-search/initiatives/unified-search)

**Initiative Goal:** Create single, semantic-powered search experience across:

- General web content
- Facility location data
- Forms database
- Authenticated information
- R&S FAQs

**Technical Approach Being Explored:**

- Proof-of-concept (POC) using **Amazon Kendra** (semantic/NLP-based search)
- Potential alternatives: Elasticsearch, Azure Cognitive Search
- Goal: Replace current keyword-based Search.gov with intent-aware engine

**Design Challenges Identified:**

1. **Intent Classification Problem**
  - Need to distinguish: Informational ("What are claims?") vs. Navigational ("Take me to my claims") vs. Transactional ("File my claim now")
  - Current system treats all as informational
2. **Blended Results Architecture**
  - Veterans expect single search to return mixed content types (pages, forms, locations)
  - Current fragmentation requires knowing which tool to use upfront
3. **Query Understanding**
  - Generic terms ("benefits") need clarification—system should ask or surface top categories
  - Natural language queries need semantic matching, not exact token match

📄 **References:**

- [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/initiative-brief.md)
- [Search Design Reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/search-design-reference.md)

---

## **Key Outcomes & Gaps**

### **What's Working:**

✅ Users CAN find information when they browse or search (10/12 R&S participants successful)  
✅ Filter labels align with user mental models (10/12 understood)  
✅ Semantic search approach is validated as a necessary solution  
✅ Clear design patterns identified for modern search (facets, blended results, direct answers)

### **What's Broken:**

❌ Facility data is systematically stale (7-year-old provider listings, permanently closed clinics still active)  
❌ Search returns information when users need action (appointment scheduling, form submission)  
❌ Multiple disconnected search tools create confusion and increase task failure  
❌ Mobile experience severely constrained by screen size (tags/filters consume critical space)  
❌ Older Veterans + visually impaired users cannot navigate complexity  
❌ Facility Locator has been in extended outage (complaints span 1+ year)

### **Research Gaps Requiring Follow-Up:**


| Gap                                 | Priority | Suggested Action                                                                             |
| ----------------------------------- | -------- | -------------------------------------------------------------------------------------------- |
| **Assistive Technology Testing**    | HIGH     | No AT users (screen readers, magnification, speech input) tested in R&S or Medallia research |
| **Authenticated Search**            | HIGH     | 7 R&S participants wanted personalized content; no research on authenticated search behavior |
| **Intent Ranking Validation**       | HIGH     | Design concepts exist but need user testing with intent-classified results                   |
| **Facility Data SLA**               | CRITICAL | Need to establish data governance pipeline; implement "Last Verified" date display           |
| **Mobile-First Results UI**         | MEDIUM   | Current mobile experience breaks with filter/tag content; need responsive design validation  |
| **Natural Language Query Patterns** | MEDIUM   | Need larger semantic search study with Veterans across diverse literacy levels               |
| **Post-Launch Monitoring**          | MEDIUM   | R&S report recommends Medallia monitoring for tags—establish baseline metrics                |


---

## **Standards & Guidelines to Inform Your Work**

### **From VA.gov Platform:**

1. **KPI Framework** (referenced in Initiative Brief): Products measured on Ease of Use, Service Completion, Trust/Satisfaction, Health
2. **Analytics Priority:** CTR, relevancy of top 10 results, "no results" query rates
3. **Performance Targets:** Response time, indexing latency (Search.gov currently pauses 1-5 seconds per page)

### **From Research Findings:**

1. **Search Result Best Practices:**
  - Surface "Best Bet" / featured snippet for top 3 queries
  - Suppress press releases when query indicates transactional intent
  - Treat multi-word phrases as units, not independent tokens
  - Add date sorting for all result pages
  - Implement deterministic results (same query = same results)
2. **Mobile-First Constraints:**
  - Reduce filter/tag on-page presence OR move to collapsible
  - Don't require scrolling past search box to see key actions
  - Test with 12+ participants on actual smartphone devices (10/12 R&S testing was mobile)
3. **Accessibility Requirements:**
  - WCAG 2.1 AA audit (one Veteran reported "NOT VISUALLY IMPAIRED ACCOMMODATING")
  - Direct-answer layer reduces cognitive load for older/less digitally literate users
  - Avoid multi-step navigation for high-frequency tasks
4. **Data Quality SLAs:**
  - Facility data verified/refreshed at least quarterly
  - Display "Last Verified" date on all facility listings
  - Implement user "Report Incorrect Information" button with structured intake form
  - Community care contracts require continuous verification (contracts change frequently)

---

## **Suggested Areas for Additional Research**

### **High Priority:**

1. **Semantic Search Validation Study** – Test Kendra POC results with Veterans; compare CTR vs. current Search.gov
2. **Intent Classification Testing** – Present same query with different result types; measure task completion by intent
3. **Facility Data Audit** – Sampling study of Facility Locator accuracy across community care, urgent care, pharmacy
4. **Authenticated Experience Research** – Design & test personalized search for logged-in Veterans (7 in R&S wanted this)

### **Medium Priority:**

1. **Mobile Results Page Testing** – Validate responsive design for blended results across content types
2. **Older Veteran Digital Literacy Study** – Qualitative research on how 65+ users interact with semantic results
3. **Post-Launch KPI Baseline** – Establish pre-launch metrics for R&S filters & tags before monitoring in Medallia

### **Monitoring & Long-Term:**

1. **Set up Medallia Dashboard** – Track tag usability post-launch; use Medallia thematic analysis to feed continuous improvement
2. **Query Analytics Dashboard** – Monitor zero-result queries, intent classification accuracy, CTR by query type
3. **Facility Data Health Metrics** – Track staleness, accuracy complaints, provider contract currency

---

## **Quick Navigation Summary**


| Resource                    | Best For                           | Link                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quick Findings Overview** | 7-minute read on filter/tag issues | [Topline Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/topline-summary.md)                                                                                                                                                                                                 |
| **Detailed User Quotes**    | Understanding Veteran frustrations | [Research Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/research-report.md) + [Medallia Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/medallia-search-findings-031226.md)          |
| **Design Direction**        | Architecture for semantic search   | [Search Design Reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/search-design-reference.md)                                                                                                                                                                                          |
| **Business Context**        | Why initiative exists + KPIs       | [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/initiative-brief.md)                                                                                                                                                                                                        |
| **Raw Data**                | Analyze patterns yourself          | [Data Synthesis Spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/data_synthesis.xlsx) + [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/research/2024-search-filters/conversation-guide.md) |



