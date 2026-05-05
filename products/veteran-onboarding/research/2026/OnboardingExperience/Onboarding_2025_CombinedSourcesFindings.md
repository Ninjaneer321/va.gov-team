# **Veteran Onboarding / My VA — First‑Login Onboarding (Modal + Task List + Profile Completion) — 2025 Insights (User Research & Usability Testing)**

---

## **TL;DR (what matters)**

- **Baseline CSAT (measured):** *No numeric CSAT captured (n=0)*
- **CSAT/feedback timeframe:** Qualitative studies across **2024–2025** (no CSAT survey deployed)
- **Top pain points (task-blocking, highest impact):**
  1. **Decision paralysis at first login** — 88% preferred an Apply‑focused modal; 100% said it “would have been helpful”
  2. **Verification-first gating conflicts with benefit-first intent** — 10/10 sought benefits first; 0/10 wanted verification first
  3. **Dense “Get [benefit]” pages overwhelm; eligibility hard to find** — 8/8 overwhelmed; 6/8 couldn’t find eligibility

- **What analytics adds (GA4):**
  - Likely elevated drop-off on post‑login hub & “Get [benefit]” pages
  - Device patterns matter; need instrumentation to confirm mobile vs. desktop differences
  - Major measurement gaps: modal impressions, task list events, eligibility discovery, verification sequencing

---

# **1) Data source inventory (timeframe + frequency for each source)**

## **A) User Research & Usability Testing (Qualitative)**

- **Timeframe:**
  - Welcome to My VA (2024)
  - Onboarding Modal Study (2025)
- **Scoped volume:** n = **26** total participants
- **CSAT sample size:** n = **0** (no numerical CSAT)
- **CSAT baseline:** *Not available*
- **Theme counts (mentions within scope):**
  - First‑login decision paralysis: ≥14/16
  - Verification-first misalignment: 10/10 wanted benefits first
  - Benefit page overwhelm & eligibility issues: 8/8 overwhelmed; 6/8 couldn’t find eligibility

## **B) Call Center Logs**
*(No dataset provided)*  
- **Timeframe:** N/A  
- **Volume:** N/A  
- **Theme counts:** N/A  

## **C) Google Analytics (GA4)**  
*(No dataset provided; expectations only)*

- **Timeframe:** N/A  
- **What GA4 represents (important):**
  - **Sessions vs users**  
  - **Events vs outcomes**  
  - **Funnel definitions**  
- **Expected funnel drop-offs (behavioral signals):**
  - Post‑login hub exits  
  - “Get [benefit]” page exits  
  - Verification prompt drop-offs  
- **Device patterns:**  
  - Must measure desktop vs mobile behavior  
- **Technical/measurement gaps:**
  - Missing modal impressions/selections
  - Missing task list exposure → completion funnel
  - Missing eligibility discovery tracking
  - Missing verification context tracking

---

# **2) Consolidated “what’s going wrong”**

Veterans log in primarily to **apply for benefits**, but the current experience does not provide a clear first step. Without an Apply‑focused starting point, users fall into **decision paralysis**, wandering dense pages with no clear path. Research shows that an Apply‑focused modal is strongly preferred (88% of participants) and universally rated as helpful.

**Verification is sequenced too early**, breaking momentum. Veterans want to explore benefits first; verification is only acceptable when it is a necessary step in a task they already chose. This mismatch likely causes drop‑offs if measured in GA4.

Benefit pages—especially the “Get [benefit]” pages—are **dense and overwhelming**. Eligibility is hard to find, even though it is psychologically essential before starting an application. When pages were rewritten in an “About/How‑to” structure, eligibility findability and clarity improved dramatically (7/8 found it easily).

Finally, the **task list** suffers from **low visibility**, unclear naming, and an unclear “success” pattern. Veterans expect the list to reduce effort through personalization and pre‑population—yet these expectations are not met.

---

# **3) Pain points (with a specific fix recommendation for each)**

---

## **Priority #1 — Verification‑first gating blocks momentum**  
**Impact labels:** task-blocking, high-stakes

### Evidence
- 10/10 sought benefits first  
- 0/10 wanted to verify first  
- Verification acceptable only when blocking a chosen task  
- Expected GA4 signal: high exits on early verification prompts

### How to fix it (specific)
1. Remove **global verification gate** at first login  
2. Trigger verification **contextually** when required for a chosen application  
3. Preserve task progress after verification with explicit “Saved” indicators  

### Representative quotes
> “How do I feel welcome if there is another door to walk through?”  
> “Zero out of ten wanted to verify first.”

---

## **Priority #2 — First‑login decision paralysis (no clear Apply path)**  
**Impact labels:** task-blocking, high-stakes

### Evidence
- 88% preferred Apply‑focused modal  
- 100% said it “would have been helpful”  
- Veterans consistently expect direct Healthcare/Disability/Education pathways  
- Expected GA4: low click‑through from hub → applications

### How to fix it (specific)
1. Implement **Apply‑focused first‑login modal**  
2. Provide a **persistent “Getting Started”** link for re‑access  
3. A/B test modal options across devices  

### Representative quotes
> “There is literally nothing more important than applying for benefits.”  
> “Having that direct path… would have saved me time.”

---

## **Priority #3 — Dense ‘Get [benefit]’ pages overwhelm; eligibility buried**  
**Impact labels:** task-blocking, confidence, comprehension

### Evidence
- 8/8 overwhelmed by dense pages  
- 6/8 couldn’t find eligibility  
- “How‑to” version dramatically improved findability (7/8)  
- Expected GA4: low scroll depth, high pogo‑sticking

### How to fix it (specific)
1. Convert all “Get [benefit]” pages → **About/How‑to** structure  
2. Surface **eligibility at the top** in a simple checklist  
3. Reduce link overload; use step-based progressive disclosure  

### Representative quotes
> “This page is too cluttered.”  
> “The ‘How to’ explains what you need… then assists you.”

---

## **Priority #4 — Task list lacks prominence & clear completion behavior**  
**Impact labels:** trust, progression friction

### Evidence
- 3/10 needed prompting to notice it  
- 7/10 expected it to disappear or clearly confirm success  
- Expected GA4: low task starts; incomplete sequences  

### How to fix it (specific)
1. Increase visibility & rename to **“Complete Your Profile”**  
2. Add **review‑and‑edit hub** + field‑level save confirmations  
3. Define **completion behavior** (collapse, badge, or next step)

### Representative quotes
> “Checklist should stand out more.”  
> “Participants immediately noticed the task change to completed.”

---

## **Priority #5 — Personalization expectations unmet**  
**Impact labels:** relevance, trust, accessibility

### Evidence
- Veterans expect VA.gov to use known data  
- DYB perceived as a questionnaire, not personalized results  
- Expected GA4: need variant tagging for personalized vs generic results

### How to fix it (specific)
1. Build **personalized DYB** with instant results  
2. Add **eligibility indicators** (“Likely eligible”, etc.)  
3. Pre‑populate forms using known profile data  

### Representative quotes
> “Tell me if I’m eligible right off the rip.”  
> “Use my info to show everything I qualify for.”

---

# **4) What to measure next (high value) — and WHY**

Right now, GA4 tells us **where** users drop off, but not **why**. Without field‑level and interaction‑level instrumentation, analytics cannot identify whether abandonment comes from **confusion**, **overwhelm**, or **verification sequencing**.

Below are the measurements that convert GA4 from **descriptive → diagnostic**.

---

## **A) First‑login modal impressions & selections**
**Why this matters:**  
Shows whether the modal reduces decision paralysis and increases application starts.

**Ties to:**
- First‑login decision paralysis  
- Verification‑first misalignment  

---

## **B) Eligibility discovery interactions (clicks, reveals, time-to-eligibility)**
**Why this matters:**  
Eligibility is a psychological prerequisite; this exposes where users get stuck.

**Ties to:**
- Benefit page overwhelm  
- Personalization unmet  

---

## **C) Task list funnel (exposure → click → save → completion)**
**Why this matters:**  
Separates users who never noticed the task list from those who noticed but got stuck.

**Ties to:**
- Task list prominence  
- Personalization unmet  

---

## **D) Contextual verification triggers (prompt → continue/exit)**
**Why this matters:**  
Verifies that verification is happening at the right moment—not prematurely.

**Ties to:**
- Verification-first misalignment  
- First-login wayfinding  

---

## **E) Content variants (“Get” vs “How‑to”)**
**Why this matters:**  
Quantifies impact of content architecture on clarity and application starts.

**Ties to:**
- Benefit page overwhelm  
- Eligibility findability  

---

# **If you only do 3 things (highest ROI)**

1. **Instrument first‑login modal → application start**  
2. **Track eligibility discovery interactions**  
3. **Instrument task list funnel with save confirmations**

**Together, they convert analytics from basic drop-off charts into actionable diagnostics that show *why* Veterans are getting stuck and which design changes remove the friction.**
