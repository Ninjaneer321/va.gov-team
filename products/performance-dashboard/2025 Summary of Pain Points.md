# **VA.gov – Structured Findings: Performance Dashboard**


## **Executive Summary**

Across **Jan 1–Dec 31, 2025**, the VA.gov Performance Dashboard attracted **≈60,468 page views** and **≈36,885 sessions** with **~43s average engagement per session** and an **~88% engagement rate**. **~2,655** of these were **new users**, indicating steady but modest acquisition into the dashboard experience. .pdf).pdf).pdf).pdf).pdf)  
User pathing reveals a strong tendency to **move into authentication from the dashboard**: **/sign-in was the top Step +1 destination (≈7,097)**, with additional flows to **/auth/login/callback (≈849)** and account‑oriented pages such as **/my‑va (≈1,466)**. This suggests the dashboard is functioning as a **launch point into account workflows** rather than a content exploration destination. .pdf)  
Engagement depth appears **shallow**, with **outbound_link events ≈439** for the year and **average engagement ~40–50 seconds**, indicating **skim-level interaction** with limited deeper navigation. .pdf).pdf).pdf)  
Segment analysis shows **authenticated (LOA3) users spend longer (~1:03)** than unauthenticated (~0:51), supported by consistent **98–99% engagement rates**, suggesting **value density increases post-auth**. .pdf)  

**Data Range & Source:** GA4 – VA.gov Production, **Jan 1–Dec 31, 2025** (filter: page path contains **/performance-dashboard**).pdf)


# **Table of Contents**

1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: Authentication‑Leaning Navigation From Dashboard  
5. Category 2: Limited Content Exploration & Outbound Link Engagement  
6. Category 3: Engagement‑Rate Variability & New‑User Fluctuations  
7. Category 4: Segment (LOA) Differences  
8. Recommendations – Consolidated Priority Table  
9. Appendix: Data Overview, Metrics & Trends


# **1. Top‑Level Findings (Ranked by Relevance & Criticality)**

Ranking factors: frequency, severity, task‑blocking impact, and actionability.

1. **Dashboard → Authentication is the dominant path** — **/sign‑in ≈7,097**, **/my‑va ≈1,466**, **/auth/login/callback ≈849**; users primarily transition to account workflows instead of exploring dashboard content. .pdf)  
2. **Shallow engagement depth** — **~40–50s engagement** and **~439 outbound links** indicate scanning behavior rather than insight‑seeking. .pdf).pdf).pdf)  
3. **Engagement rate variability** — monthly rates vary **~86–93%**, with inconsistent new‑user peaks (up to **363**) suggesting seasonal/campaign effects. .pdf).pdf).pdf)  
4. **LOA3 users show deeper engagement** — **~1:03 average engagement**, **~99% engagement rate**, hinting at greater value density after login. .pdf)


# **2. Customer Satisfaction Table**

**CSAT Not Available (GA-only dataset).** No 1–5 CSAT values were present, so satisfaction could not be computed under rules A–D. .pdf).pdf).pdf)

| Month (2025) | % Satisfied | Median Score | Primary Issue |
|--------------|-------------|---------------|----------------|
| Jan–Dec      | —           | —             | **N/A (no CSAT captured)** |

**Filtering method:** Included rows only where **page path contains /performance-dashboard**; CSAT fields absent → excluded per rule D.


# **3. Issue Category Breakdown**


# **Category 1: Authentication‑Leaning Navigation From Dashboard**

**Mentions / Volume:**  
- **Step +1 destinations:** **/sign‑in ≈7,097**, **/my‑va ≈1,466**, **/auth/login/callback ≈849**. .pdf)

### **Description**  
Users frequently exit the dashboard to authenticate or access account‑specific pages, implying the dashboard functions as a **gateway** rather than an informational hub. .pdf).pdf).pdf)

### **Representative Metrics**  
- **Initial dashboard loads:** **/performance‑dashboard ≈36,952** (alternate: **≈36,460 views / 6,554 sessions**).  
- **Step +1 flows:** **/sign‑in ≈7,097**, **/my‑va ≈1,466**, **/auth/login/callback ≈849**, **/mhv-portal-web/home ≈580–771**, **/find‑locations ≈391–694**, **/resources/getting-started ≈235–849**. .pdf).pdf).pdf)  

### **Impact**  
If the dashboard is intended to deliver transparency or performance insight, then **rapid diversion into authentication** reduces its informational reach and may create **unnecessary friction** for public users.  

### **Patterns**  
- Behavior remains **consistent across months**.  
- **LOA3 users** show notably higher retention after logging in.  

### **Critical Observations**  
- Authentication appears to be the **default next action**.  
- **Value proposition pre‑auth is unclear**.  
- Dashboard content may appear **insufficient or incomplete** to unauthenticated users.  

### **Recommendations**  
- Provide **clear pre‑auth value overview** with key KPIs available publicly.  
- Add **dual CTAs** (“Explore public metrics” + “Sign in for personalized insights”).  
- Consider **ungating non‑sensitive charts**.  
- Place key informational links **above the fold**.


# **Category 2: Limited Content Exploration & Outbound Link Engagement**

**Mentions / Volume:**  
- **Outbound links: ≈439** vs **~36k views** (≈1% conversion).  
- Average time on page: **~40–50s**. .pdf)

### **Description**  
Users show **quick‑scan behavior** and rarely navigate deeper from the dashboard.

### **Representative Metrics**  
- High engagement rates (**98–99%**) despite low exploration.  
- Step +2 flows to **/resources**, **/profile**, **/search** remain relatively low.  

### **Impact**  
Limited exploration reduces the likelihood that users gain **context**, **insight**, or **actionable understanding** from dashboard content.

### **Patterns**  
- Consistent throughout the year.  
- LOA3 users stay longer but still do not significantly increase outbound engagement.  

### **Critical Observations**  
- Dashboard may feel **static** or lacking deeper link cues.  
- Outbound links may be **buried**, unprominent, or perceived as low-value.  

### **Recommendations**  
- Improve **content hierarchy** and surface **deep‑link CTAs**.  
- Add **“Learn more”** links near KPIs.  
- Introduce **sticky sub-navigation** for deeper metrics and resources.  
- A/B test **card density** and content order.


# **Category 3: Engagement‑Rate Variability & New‑User Fluctuations**

**Mentions / Volume:**  
- Engagement rates vary **~86–93%**.  
- New users range **~170–363** month to month. .pdf)

### **Description**  
Variation suggests **seasonality**, **traffic source differences**, or **content update cycles** influencing engagement stability.

### **Representative Metrics (Month Examples)**  
- **~5,135 views / ~2,969 sessions / ~41s / ~92.56% engagement / ~205 new users**  
- **~4,686 views / ~2,867 sessions / ~45s / ~86.19% engagement / ~195 new users**  
- **~4,345 views / ~2,592 sessions / ~50s / ~88.27% engagement / ~195 new users** .pdf)  

### **Impact**  
Inconsistent engagement complicates **longitudinal trend analysis** and may obscure UX signals.

### **Critical Observations**  
- High engagement does not always correlate with time on page.  
- New‑user surges present opportunities for **onboarding**.  

### **Recommendations**  
- Add **monthly “What’s new on the dashboard”** module.  
- Provide **lightweight onboarding** during high‑new‑user periods.  
- Align **dashboard updates** with communication channels.


# **Category 4: Segment (LOA) Differences**

**Mentions / Volume:**  
- **LOA3 users:** ~1:03 average engagement.  
- **LOA1 users:** ~0:51 average engagement.  
- Both segments: **98–99% engagement rates**. .pdf).pdf).pdf)

### **Description**  
Authenticated users consistently show **deeper engagement**, likely due to **personalized or expanded content**.

### **Impact**  
Heavy reliance on post‑auth value may under‑serve **public / unauthenticated** users.

### **Recommendations**  
- Expand **public insights** and **ungate non‑sensitive data**.  
- Use **transparent “locked tile” explanations** showing incentive to sign in.  
- Provide cross-links from authenticated views to related public info.


# **8. Recommendations – Consolidated Priority Table**

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---------|----------------|------------------|------------------|
| **P0** | Clarify & separate **pre‑auth vs post‑auth value**; dual CTAs; public KPIs above the fold. | Cat 1, 4 | **High** |
| **P0** | Elevate **outbound discovery** (inline “Learn more”, sticky nav, CTA instrumentation). | Cat 2 | **High** |
| **P1** | Monthly **highlights module** + onboarding for new‑user surges. | Cat 3 | **Medium–High** |
| **P1** | **A/B test** card hierarchy and density. | Cat 2 | **Medium** |
| **P2** | Audit and **ungate non‑sensitive charts**; label “locked” ones with benefits of signing in. | Cat 1, 4 | **Medium** |


# **9. Appendix: Data Overview, Metrics & Trends**

### **Data Overview**

- **Source:** GA4 – VA.gov Production (page path contains **/performance-dashboard**).  
- **Timeframe:** **Jan 1–Dec 31, 2025**.  
- **Totals:** **~60,468 views**, **~36,885 sessions**, **~43s engagement**, **~87.99% engagement rate**, **~2,655 new users**. .pdf).pdf).pdf).pdf).pdf)  
- **Top Step +1:** **/sign‑in (≈7,097)**, **/my‑va (≈1,466)**, **/auth/login/callback (≈849)**.  

### **Theme & Task Counts**

- **Authentication transitions** highly prevalent.  
- **Exploration low** via ~439 outbound links.  
- **LOA3 segment** shows significantly higher dwell time.

### **Trends**

- Engagement rates fluctuate **~86–93%**.  
- Dwell time generally **40–50s**.  
- New users fluctuate **~170–363**.  
- LOA3 users consistently exhibit **higher retention**.


# **END OF REPORT**
