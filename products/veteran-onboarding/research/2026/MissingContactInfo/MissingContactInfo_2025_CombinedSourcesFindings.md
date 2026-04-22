# Contact Information Update (Missing Contact Info flow)** — **2025** Insights (**GA4, Medallia, Call Center**)

### TL;DR (what matters)

- **Baseline CSAT (measured):** **29.4% satisfied (CSAT 4–5), n=327**.   
- **CSAT/feedback timeframe:** **Feb 7–Dec 31, 2025 (Medallia); Jan 2–Jul 18, 2025 (Call Center)**.   
- **Top pain points (task-blocking, highest impact):**
  1. **Save/confirmation fails (“We can’t update right now”)** — widespread write-path errors block updates after users make edits; **824 Medallia mentions** and **74 call cases**; GA shows **~63K (11%)** drop at save/confirmation. **High-severity, high-frequency.** 
  2. **Edit-step friction (mobile-heavy)** — the largest attrition point occurs at **Step 3: Edit Contact Info** with **~137K abandonments (19.3%)**, disproportionately on **mobile/tablet (~19%) vs desktop (~4.8%)**; indicates form ergonomics/validation issues. **Task-blocking and confirmed by analytics.** 
  3. **Rigid validation & exclusion rules** — valid email/address rejected; **US-only** mobile field; **mobile required** even for landline-only users; **610 + 239 + 142 Medallia mentions**. **Blocks completion, affects overseas/older users.** 

- **What analytics adds (GA4):**
  - **Clear “where” users leave**: largest drop at **Edit** (Step 3, ~19.3%) and secondary drop at **Save/Confirmation** (Step 4, ~11%), quantifying impact and prioritization. 
  - **Device/platform pattern**: **mobile/tablet abandonment ~19%** vs **desktop ~4.8%** at Edit, isolating touch-device UX risk. 
  - **Measurement gaps**: **duplicated event taxonomy** (e.g., multiple “profile saved” variants) and **no field-level error codes**, limiting root-cause attribution. 

---

## 1) Data source inventory (timeframe + frequency for each source)

### A) **Medallia (CSAT & verbatims)**

- **Timeframe:** **Feb 7–Dec 31, 2025 (ET)**.   
- **Scoped volume:** **8,873** responses.   
- **CSAT sample size:** **n=327** (numeric 1–5 only).   
- **CSAT baseline:** **29.4% satisfied (CSAT 4–5)**.   
- **Theme counts (mentions within scope):**
  - **System error / can’t update now:** **824** (9.3%).   
  - **Email or mailing address validation:** **610** (6.9%).   
  - **Authentication/login friction:** **385** (4.3%).   

### B) **Call Center (Tier‑1/Tier‑2 cases)**

- **Timeframe:** **Jan 2–Jul 18, 2025**.   
- **Volume:** **206** cases.   
- **Theme counts (cases):**
  - **Update‑save failures:** **74** (**~36%**).   
  - **Profile missing / “can’t show information”:** **34** (**~17%**).   
  - **MFA/verification/outdated phone:** **31** (**~15%**).   

### C) **GA4 (behavioral analytics)**

- **Timeframe:** **Jan 1–Dec 31, 2025**.   
- **What GA4 represents (important):** Funnel steps reflect **user-level progression** through **Alert Click → Contact Info Page → Edit Contact Info → Contact Info Saved → Confirmation Page**; event totals (e.g., **“profile saved”** variants) count **interaction events**, not unique users.   
- **Funnel drop-offs (behavioral signals):**
  - **Step 2 (Contact Info Page):** **~30K; 4% abandon**.   
  - **Step 3 (Edit Contact Info):** **~137K; 19.3% abandon**.  
    - **Device pattern:** **mobile ~19.33%**, **tablet ~18.56%**, **desktop ~4.8%**.   
  - **Step 4 (Contact Info Saved):** **~63K; 11% abandon**.   
- **Additional signals:** **“profile saved”** events total **~3,107,462** across field variants (home address ~518,412; mobile phone ~449,831; mailing address ~428,616; work phone ~247,789; email ~244,472) — indicating repeated saves and **duplicate event labels** across entry paths.   

---

## 2) Consolidated “what’s going wrong”

Across sources, two **reliability failures** dominate: (1) **save/update errors** that prevent writing changes (“We’re sorry, we can’t update right now”), and (2) **state reversion**/inconsistent confirmation that leaves users unsure whether updates persisted. This is evident in **824 Medallia mentions** and **74 call-center cases**, and corroborated by GA’s **~11% drop at the save/confirmation step**. The qualitative evidence points to **server-side instability** and ambiguous error handling; GA quantifies the loss but cannot attribute a specific backend failure without **error-code instrumentation**. 

A distinct **usability/accessibility problem** emerges at the **Edit step**: GA shows **~137K (19.3%)** abandonments, concentrated on **mobile/tablet (~19%) vs desktop (~4.8%)**. This pattern suggests touch-device **form ergonomics**, validation messaging, or responsiveness issues (e.g., focus management, tap targets, inline errors) that disproportionately hinder completion on smaller screens. Qualitative feedback on **invalid email/address** and **blocked international phone formats** likely contributes to these edit-stage exits. 

A cluster of **validation/exclusion rules** blocks users outright: valid email/address rejected (**610 mentions**), **US-only** phone input (**239 mentions**), and **mobile required** even for landline-only users (**142 mentions**). These constraints disproportionately affect **overseas Veterans** and **older/rural users**, and they surface alongside **MFA/login friction** (**385 mentions** and **31 call cases**). Together, they form a **policy/validation** barrier that compounds UX friction and reliability gaps. 

Finally, **profile entitlement gating** (“We can’t show your information”) prevents any contact updates for some users (**34 call cases**). GA can’t detect this because it’s a **pre-funnel access block**; call logs indicate cross-system data parity issues. 

---

## 3) Pain points (with a specific fix recommendation for each)

### [Priority #1] Save/confirmation fails (“We can’t update right now”)  
*(Impact tags: task‑blocking, high‑stakes, reliability)*

**Evidence (timeframe + frequency):**  
- **Medallia (Feb 7–Dec 31, 2025):** **824 mentions (~9.3%)** of save/update failure across mobile, email, mailing-address pages.   
- **Call Center (Jan 2–Jul 18, 2025):** **74 cases (~36%)** reporting server-side error and state reversion.   
- **Analytics signal (GA4):** **Step 4 (Contact Info Saved) → Confirmation** drop of **~63K (11%)** indicates late-stage failure/ambiguity. 

**How to fix it (specific):**  
- **Fix category/approach:** **Harden write path + consolidate confirmation**  
  1. Implement **idempotent, transactional saves** with **server-confirmed outcomes**; expose **error_code** and **field_name** to the UI for targeted guidance.   
  2. **Merge “Save” + “Confirm”** into a single atomic interaction with **persistent success state** (banner + “last updated” timestamp), avoiding page transitions.   
  3. Add **retry with backoff + queued updates**; preserve typed data on error; provide **support token** for Tier‑2 diagnostics and an alternate submission channel. 

**Representative quotes:**  
- “**I’ve received at least 3 emails… when I finally have a few minutes to do it, I receive an error that says it can’t be updated right now.**” — **CSAT Comment**   
- “**It just keeps telling me something went wrong and to refresh the page or try again.**” — **CSAT Comment** 

---

### [Priority #2] Edit-step form friction (mobile‑heavy)  
*(Impact tags: task‑blocking, accessibility, mobile UX)*

**Evidence (timeframe + frequency):**  
- **Analytics signal (GA4, Jan–Dec 2025):** **Step 3 (Edit Contact Info)** shows **~137K abandonments (19.3%)**; **mobile ~19.33%**, **tablet ~18.56%**, **desktop ~4.8%**.   
- **Medallia (Feb–Dec 2025):** Edit pages frequently referenced in error reports (e.g., **/contact-information/edit-mobile-phone**), with users encountering generic failures and validation rejections. 

**How to fix it (specific):**  
- **Fix category/approach:** **Responsive form redesign + resilient validation**  
  1. **Re-layout mobile/tablet forms**: reduce required fields, increase tap-target sizes, fix focus management, and add accessible inline hints; instrument **field-level error telemetry**.   
  2. **Real-time, non-blocking validation** with actionable microcopy; avoid disruptive modals; **defer non-critical checks** until save.   
  3. **Autosave/progressive save** + draft restoration to minimize loss on refresh/back; prefetch edit modules after alert click. 

**Representative quotes:**  
- “**It just keeps telling me something went wrong and to refresh the page or try again.**” — **CSAT Comment (edit-mobile-phone)**   
- “**Update has been saved… then the Home section shows the wrong address again.**” — **Agent Note** 

---

### [Priority #3] Rigid validation & exclusion (email/address rejects; US‑only mobile; mobile required)  
*(Impact tags: task‑blocking, accessibility, international users)*

**Evidence (timeframe + frequency):**  
- **Medallia (Feb–Dec 2025):** **Email/address validation failures: 610 mentions (6.9%)**; **international numbers blocked: 239 (2.7%)**; **no mobile/landline-only: 142 (1.6%)**.   
- **Call Center (Jan–Jul 2025):** **US-only numbers** cited in **3 cases (~1.5%)**; additional MFA/phone issues in **31 cases (~15%)**.   
- **Analytics signal (GA4):** Large **Edit-step drop (~19.3%)** aligns with validation friction but GA **can’t confirm root cause** without field-level outcomes. 

**How to fix it (specific):**  
- **Fix category/approach:** **International-aware input + flexible requirements**  
  1. Enable **E.164 international phone input** with **country selector** and “+” prefix support; provide SMS/voice availability by region.   
  2. Adopt **global address/email validation libraries**, support **AE/APO/FPO/PSC** formats; remove **destructive normalization** (forced caps/character insertion).   
  3. Make **mobile optional** where **email/landline** suffice; provide **voice call OTP / email OTP / backup codes**; add “**I don’t have a mobile phone**” path. 

**Representative quotes:**  
- “**Not a valid email — but it is.**” — **CSAT Comment**   
- “**Only US numbers are accepted… I live overseas.**” — **CSAT Comment** 

---

## 4) What to measure next (high value) to connect GA4 to root cause — and WHY (plain language)

**Right now GA4 is telling us WHERE people leave, but not WHY.** We see big drops at **Edit** and **Save/Confirmation**, yet we can’t tie abandonments to **specific fields, error codes, or validation outcomes**. Duplicate event names and missing **attempt-level IDs** prevent us from distinguishing **retry loops** from **successful saves**. The following changes convert analytics from **descriptive** (where drop occurs) to **diagnostic** (what failed and why). 

### A) Canonical **field_outcome** event with **error_code**, **field_name**, **validation_result**, **device**

**Why this matters:** It tells us whether users are **stuck in retry loops** on a specific field (e.g., **mobile phone E.164 reject** vs **email format**) or **successfully updating**, so we can prioritize fixes by **true failure mode** rather than guesswork. It also eliminates **duplicate taxonomy** that obscures comparisons. 

**Directly ties to these pain points:**  
- **Save/confirmation fails** (Priority #1)  
- **Rigid validation & exclusion** (Priority #3)

### B) **save_attempt_id** to stitch **Edit → Save → Confirm** and classify outcomes (success/fail/retry)

**Why this matters:** A unique **attempt_id** lets us count **attempts per user**, detect **retry loops**, and link **errors to the final outcome**. We’ll learn whether users abandon due to **persistent server failure** vs **validation blocks**, enabling targeted reliability fixes. 

**Directly ties to:**  
- **Save/confirmation fails** (Priority #1)  
- **Edit-step friction** (Priority #2)

### C) Device-focused **UX timing & interaction telemetry** (e.g., input-to-error latency, focus change, tap-target misses, layout shift) on edit pages

**Why this matters:** It explains mobile/tablet friction by showing whether users struggle with **tap targets**, **focus jumps**, or **slow validation**—pinpointing the specific UI behaviors driving the **~19%** mobile/tablet abandon rate. 

**Directly ties to:**  
- **Edit-step friction** (Priority #2)  
- **Rigid validation & exclusion** (Priority #3)

---

### If you only do 3 things (highest ROI)

1. **Ship the canonical `field_outcome` event** with **error_code/field_name/validation_result/device** (replace duplicate “profile saved” variants).   
2. **Implement `save_attempt_id`** across **Edit → Save → Confirm** to classify **success vs retry loops**.   
3. **Capture mobile/tablet UX telemetry** (input-to-error latency, tap-target metrics, layout shift) specifically on **Edit** forms. 

**These three changes turn GA4 from a map of drop-offs into a diagnostic system that explains failures field-by-field and attempt-by-attempt.** 

---

*Notes on ranking & weighting:* We prioritized **task-blocking** issues with **high frequency** and **multi-source support** (Medallia, Call Center, GA4). GA validates **where** attrition occurs (Edit, Save), while Medallia/Call Center clarify **why** (save errors, validation rules, authentication). Where causation isn’t proven, we call it out explicitly and recommend **measurement** to close the gap. 

If you’d like, I can convert this into a one‑pager or slide outline for stakeholders (including visuals of the funnel with device splits) and a Jira‑ready checklist for engineering.
