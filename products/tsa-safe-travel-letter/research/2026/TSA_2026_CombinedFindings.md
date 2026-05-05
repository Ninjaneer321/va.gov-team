# **TSA Safe Travel Letter — 2025 Insights (Usability Testing, Staging Review Artifacts, VA Research Archives)**  


## **TL;DR (what matters)**

- **Baseline CSAT (measured):** *Not available* (pre-launch; no CSAT data).   
- **CSAT/feedback timeframe:** June–August 2025 usability study (n=11); December 2025 staging review.   

**Top pain points (task-blocking, highest impact):**
1. **Mailing address gate blocks access** — Veterans without a valid address cannot access any letters; 5 of 11 questioned this requirement.   
2. **Silent eligibility suppression** — Ineligible Veterans see no TSA letter and receive no explanation.   
3. **Extreme latency + low placement** — TSA letter appears at the bottom of the accordion and loads **20–30 seconds** after page render.   

**What analytics adds (GA4):**
- Track **render latency**, **scroll visibility**, **downloads**, and **eligibility/address gate events**.  
- Identify **device/network patterns** affecting performance.  
- Quantify **where** drop-offs occur and connect them to root causes.  


---

# **1) Data source inventory (timeframe + frequency)**

## **A) Usability Testing – “Your VA Benefit Letters and Documents” (Proxy for TSA Letter)**  
- **Timeframe:** June–August 2025.   
- **Scoped volume:** 11 Veterans (5 AT users).   
- **CSAT sample size:** n=0 (study did not collect numeric scores).   
- **CSAT baseline:** Not available.  
- **Theme counts:**  
  - Navigation path variability: **11/11 (100%)**.   
  - Letter-name confusion: **6/11 (55%)**.   
  - Mailing address concerns: **5/11 (45%)**.   
  - Assistive tech failures: **5/11 (45%)**.   

---

## **B) Staging Review Artifacts (Pre-launch engineering/design signals)**  
- **Timeframe:** December 2025.   
- **Volume:** Qualitative artifact review; no production telemetry.  
- **Theme counts:**  
  - TSA letter load latency: **20–30s**. (~100% of eligible users).   
  - Eligibility suppression with no messaging. (~100% of ineligible users).   

---

## **C) GA4 (planned)**  
- **Timeframe:** TBD (feature not launched).   
- **What GA4 represents:**  
  - Sessions vs users  
  - Event-driven interactions (expand → visible → download)  
  - Funnels show sequential task completion  
- **Funnel signals needed:**  
  - Page view → accordion expand → TSA visible → download  
  - Device + connection patterns  

---

# **2) Consolidated “what’s going wrong”**

**Access inequity and blockers:**  
Veterans without a valid mailing address cannot access *any* letters, including digital-only ones like the TSA letter. This disproportionately affects Veterans experiencing homelessness (5/11 spoke about address concerns).   
Ineligible Veterans see no letter and no explanation — a silent failure causing confusion and support calls.   

**Performance and placement failure mode:**  
The TSA letter loads **20–30 seconds** after the page appears and sits at the bottom of a long accordion list. Most users reasonably assume the page is complete after 2–3 seconds, meaning many never see the letter at all.   

**Findability and comprehension gaps:**  
Participants had **100% variability** in how they tried to find letters; 55% were confused by similar letter names. “Safe Travel” does not clearly communicate “TSA PreCheck Eligibility.”   

**Accessibility failures:**  
AT users (5/11) could not reliably navigate accordions, alerts, or interactive elements. This will disproportionately impact Veterans with disabilities since the TSA letter is inside an accordion and triggers a download interaction.   

---

# **3) Pain points + fixes**

---

## **1) Mailing address gate blocks access**  
**(task-blocking, equity)**

### **Evidence**
- 5/11 questioned or objected to address requirement.   
- TSA letter inherits global address gating (staging).   

### **Fixes**
1. Remove mailing-address requirement for TSA letter.  
2. Add message: “You can download this letter even if you don’t have a current mailing address.”  
3. Long-term: Split digital vs mailed letter requirements.  
  

### **Representative quotes**
- “You might be in between homes or homeless—those documents are still needed.”   
- “I would think that I could still access a benefit letter.”   

---

## **2) Silent eligibility suppression**  
**(task-blocking, trust)**

### **Evidence**
- Staging: no explanation for ineligible Veterans.   
- Veterans desired transparency (“only show letters that apply to me?”).   

### **Fixes**
1. Add an eligibility alert explaining criteria and next steps.  
2. Link to TSA eligibility criteria.  
3. Add “Not seeing a letter you expected?” helper content.  
  

### **Representative quote**
- “Is it possible to only show letters that apply to me?”   

---

## **3) Extreme latency + bottom-of-list placement**  
**(task-blocking, performance)**

### **Evidence**
- TSA letter loads in **20–30 seconds**; users told to refresh.   

### **Fixes**
1. Add loading indicator (“Checking for additional letters…”).  
2. Move TSA letter into the top 3 positions.  
3. Add timeout handling; prioritize backend performance repair.  
  

---

## **4) Accessibility failures**  
**(task-blocking, accessibility)**

### **Evidence**
- 5/11 AT users had difficulty with accordions/alerts.   
- No AT testing completed for TSA letter.   

### **Fixes**
1. Conduct AT testing (JAWS, NVDA, VoiceOver, Speechify).  
2. Add proper ARIA labels to the TSA accordion header.  
3. Provide skip link or keyboard shortcut to TSA letter.  
  

---

## **5) Findability & naming comprehension**  
**(high-frequency)**

### **Evidence**
- 100% navigation variability; 55% letter-name confusion.   

### **Fixes**
1. Rename to **“TSA PreCheck Eligibility Letter.”**  
2. Add plain-language purpose: “Use this letter to enroll in TSA PreCheck for free…”  
3. Add search synonyms (“TSA,” “PreCheck,” “airport”).  
  

---

## **6) Trust & document validity concerns**  
**(confidence issue)**

### **Evidence**
- Veterans questioned acceptance of self-printed PDFs.   

### **Fixes**
1. Add instruction: “TSA has been notified of this letter format.”  
2. Add link to TSA enrollment center locator.  
3. Coordinate with TSA to ensure acceptance.  
  

---

# **4) What to measure next (GA4) — and why**

Right now GA4 can’t tell us **why** Veterans leave — only that they leave. We need instrumentation that reveals whether users:  
- never saw the TSA letter,  
- were blocked by latency,  
- were blocked by address/eligibility,  
- or could not activate the download.  


---

## **A) Letter render latency & visibility (`tsa_letter_visible`)**
**Why:** Tells us whether abandonment happens before the letter appears.  
**Ties to:** Latency + placement; Findability.  


## **B) Scroll-to-letter depth (`scroll_depth_to_tsa_letter`)**
**Why:** Shows if users ever reach the accordion.  
**Ties to:** Placement; IA comprehension.  


## **C) Address-gate exposure (`address_gate_shown`)**
**Why:** Quantifies equity impact of address gating.  
**Ties to:** Address-gate pain point.  


## **D) Eligibility messaging (`ineligible_alert_shown`)**
**Why:** Validates fix for silent suppression.  
**Ties to:** Eligibility pain point.  


## **E) Download activation + input modality**
**Why:** Detects AT-related failures.  
**Ties to:** Accessibility.  


## **F) Retry/refresh loops**
**Why:** Distinguishes performance issues from comprehension issues.  
**Ties to:** Latency + eligibility confusion.  


---

# **If you only do 3 things (highest ROI)**

1. **Instrument visibility + latency** (`tsa_letter_visible`, scroll-depth).  
2. **Remove address gating** and track during transition.  
3. **Add and track eligibility messaging** (`ineligible_alert_shown`).  

These transform analytics from **descriptive** to **diagnostic**, revealing whether failure points are **performance**, **placement**, **eligibility**, or **access barriers**. 
