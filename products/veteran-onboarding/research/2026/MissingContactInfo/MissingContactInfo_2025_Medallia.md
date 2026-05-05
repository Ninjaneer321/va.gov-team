# VA.gov – Structured Findings: My VA → Contact Information (Missing Mobile/Email/Address)

**Executive Summary**  
**Overall satisfaction is low (29.4% satisfied across CSAT=4–5; n=327), with a median monthly CSAT typically at 2–4 depending on month.**  **Completion success is poor: only 5.4% reported success (Yes=411) vs 94.6% failure (No=7,154) among scoped responses (n=7,565).**  **The most acute, task‑blocking pain points are**: **(1) persistent “We’re sorry, we can’t update right now” errors** when saving contact info; **(2) email and mailing‑address validation failures**; **(3) authentication/login friction**; **(4) US‑only mobile field rejecting international numbers**; and **(5) mandatory mobile phone requirement for landline‑only users.**  **Primary drivers** are reliability issues (save failures/loops), input validation constraints (US‑only formats), and identity/MFA hurdles; these collectively block core account tasks (claims, prescriptions, secure messaging, profile updates). **Data range (Medallia Verbati ms): February 7, 2025 – December 31, 2025 (ET).** 

---

### Table of Contents

1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: System Error — “We can’t update right now”  
5. Category 2: Email/Mailing Address Validation Failures  
6. Category 3: Authentication & Login Friction (Login.gov/ID.me)  
7. Category 4: International Numbers Rejected (US‑Only Field)  
8. Category 5: No Mobile Phone / Landline‑Only Users Blocked  
9. Recommendations – Consolidated Priority Table  
10. Appendix: Data Overview, Metrics & Trends

---

## 1. Top‑Level Findings (Ranked by Relevance & Criticality)

Ranking factors: frequency, severity, task‑blocking impact, actionability.

1. **System error — update/save fails** (“We’re sorry. We can’t update…”) — **824 mentions (~9.3% of scoped data)**; blocks saving phone/email/address; widespread across months.   
2. **Email or mailing‑address validation failures** — **610 mentions (~6.9%)**; valid email/address rejected (AE/APO/FPO, foreign addresses, PO Box, formatting).   
3. **Authentication/Login friction (Login.gov/ID.me)** — **385 mentions (~4.3%)**; repeated verification loops, MFA codes, biometric complaints, lockouts.   
4. **International mobile numbers blocked (US‑only)** — **239 mentions (~2.7%)**; veterans overseas cannot proceed; no E.164 support.   
5. **No mobile phone / landline‑only users** — **142 mentions (~1.6%)**; “mobile required” blocks account access; no bypass. 

*(Counts and % reflect scoped dataset: URLs containing `/my-va/welcome-va-setup/contact-information` and subpaths.)* 

---

## 2. Customer Satisfaction Table

**CSAT Calculation Logic (Applied to Medallia)**  
**Inclusion**: rows with **CSAT ∈ {1–5}** and URL in scope (`/my-va/welcome-va-setup/contact-information` …). **Exclusions**: rows outside scope, non‑numeric CSAT, null CSAT. **Satisfaction** = % of CSAT in **{4,5}**. 

**Overall CSAT (2025, scoped)**  
| Metric | Value |
|---|---|
| CSAT sample size | **327**  |
| % satisfied (4–5) | **29.4%**  |
| Median CSAT (overall) | **3** (varies by month)  |

**Monthly CSAT (2025)**  
| Month | n | % Satisfied | Median CSAT | Primary issue (by category count) |
|---|---:|---:|---:|---|
| Feb | 104 | **11.5%** | 1 | **System error — can’t update now** (count 491)  |
| Mar | 54 | **16.7%** | 1 | **System error — can’t update now** (count 271)  |
| Apr | 12 | **75.0%** | 4 | **International numbers blocked** (count 15)  |
| May | 8 | **25.0%** | 2.5 | **International numbers blocked** (count 16)  |
| Jun | 13 | **30.8%** | 3 | **International numbers blocked** (count 39)  |
| Jul | 10 | **70.0%** | 4.5 | **International numbers blocked** (count 20)  |
| Aug | 18 | **44.4%** | 3 | **International numbers blocked** (count 17)  |
| Sep | 19 | **63.2%** | 4 | **International numbers blocked** (count 19)  |
| Oct | 20 | **45.0%** | 2.5 | **International numbers blocked** (count 11)  |
| Nov | 47 | **36.2%** | 2 | **Email/address validation** (count 16)  |
| Dec | 22 | **31.8%** | 2 | **International numbers blocked** (count 16)  |

---

## 3. Issue Category Breakdown

| Category | Mentions | Share of Scoped Data |
|---|---:|---:|
| **System error / can’t update now** | **824** | **9.3%**  |
| **Email or mailing address validation** | **610** | **6.9%**  |
| **Authentication / login friction** | **385** | **4.3%**  |
| **International number blocked (US‑only)** | **239** | **2.7%**  |
| **No mobile / landline only** | **142** | **1.6%**  |
| Accessibility/Preference/Privacy objections | 37 | 0.4%  |
| Inconsistent data (“you already have it”) | 24 | 0.3%  |
| International address/banking restrictions | 6 | 0.1%  |

---

## 4. Category 1: System Error — “We can’t update right now”

**Mentions / Volume**: **824** (**9.3%**) of scoped feedback. 

**Description**  
Users attempting to save mobile, email, or address frequently receive “We’re sorry. We can’t update your information right now. We’re working to fix this problem. Try again later.” The error appears across subpages (mobile, email, mailing address) and forces repeated retries or abandonment. 

**Representative quotes**  
- “I’ve received at least 3 emails… when I finally have a few minutes to do it, I receive an error that says it **can’t be updated right now**.” (/contact-information/edit-email-address)   
- “It just keeps telling me something **went wrong** and to refresh the page or try again.” (/contact-information/edit-mobile-phone)   
- “You ask me to update my information and then give me a message saying **you can’t**.” (/contact-information/edit-mobile-phone) 

**Impact**  
Critical task‑blocking: prevents updating required contact info, cascades into blocked access to claims, prescription refills, secure messaging, and profile changes. Users report months of failure, repeated loops, and loss of trust. 

**Temporal or segment patterns**  
- **Feb–Mar 2025**: System error dominates the month’s primary issue.   
- Error strings appear across pages and devices; retries seldom succeed within session. 

**Critical Observations**  
- Error handling lacks resilience (no queued writes, no offline confirmation).  
- Messaging gives no workaround or timeline, increasing repeated attempts and frustration.  
- Errors surface on both create and edit flows (mobile/email/address). 

**Recommendations**  
- **Stabilize profile update writes**: implement idempotent, queued updates; return server‑side confirmation; retry with backoff.   
- **Improve error messaging**: provide status page link, expected resolution window, and alternative channels (call center, mail update form).   
- **Capture telemetry**: log failed requests by field and validation reasons to prioritize fixes. 

---

## 5. Category 2: Email/Mailing Address Validation Failures

**Mentions / Volume**: **610** (**6.9%**) of scoped feedback. 

**Description**  
Valid emails are rejected (“enter a valid email”), capitalization forced (ALL CAPS), stray characters inserted, or field too short; addresses (AE/APO/FPO/PSC, PO Box, non‑US) flagged as invalid or unrecognized by USPS reference. Users can’t update or verify, even when the VA already mails to the correct address. 

**Representative quotes or metrics**  
- “**Update page would not accept street address.**” (/edit-mailing-address)   
- “Your form says **not a valid email**… how do you expect me to receive correspondence…?” (/edit-email-address)   
- “Box‑style street name is flagged as **PO Box**… rejects.” (/edit-mailing-address) 

**Impact**  
Blocks communications setup (email, postal), leads to misrouted notices, failure to receive benefits updates, and inability to proceed to dependent flows (claims, appointments). 

**Temporal or segment patterns**  
- **Nov 2025**: Email/address validation becomes primary monthly issue. 

**Critical Observations**  
- Rigid validation tied to US‑only reference data (USPS) misclassifies overseas and military‑mail formats.  
- Front‑end normalization (caps, characters) undermines user trust. 

**Recommendations**  
- **Adopt international‑aware validation** (E.164 for phone, global address libs; accept AE/APO/FPO/PSC patterns).  
- **Avoid destructive normalization**; show real‑time validations with actionable hints.  
- **Provide “Skip & save later”** with server‑side verification queue to prevent hard blocks. 

---

## 6. Category 3: Authentication & Login Friction (Login.gov/ID.me)

**Mentions / Volume**: **385** (**4.3%**) of scoped feedback. 

**Description**  
Users encounter repeated ID verification loops, forced MFA texts, biometric objections, and flows that contradict stored contact data (“you texted me a code but say you don’t have my phone”). Older and overseas users are disproportionately affected. 

**Representative quotes**  
- “How many times do I need to **verify** who I am…?” (/contact-information)   
- “**ID.me** and **login.gov** are ridiculously cumbersome… I don’t see how any older person can do this.” (/edit-mobile-phone)   
- “You sent me a **6‑digit code to my phone**, then say my phone is missing.” (/confirmation) 

**Impact**  
Prevents access to My VA, stalls contact‑update tasks, increases call‑center load, and erodes trust. 

**Temporal or segment patterns**  
- Spikes during mandated update notices; patterns consistent across months. 

**Critical Observations**  
- Identity flows assume US mobile availability for MFA.  
- Inconsistent cross‑system data sync causes contradictory prompts. 

**Recommendations**  
- **Offer MFA alternatives** (email OTP, TOTP apps, voice call to landlines, backup codes).  
- **Reduce verification loops** with clearer state reconciliation (“we already have your phone/email”).  
- **Consolidate login copy** to set expectations for acceptable contact methods (intl, landline). 

---

## 7. Category 4: International Numbers Rejected (US‑Only Field)

**Mentions / Volume**: **239** (**2.7%**) of scoped feedback. 

**Description**  
The mobile field accepts **US 10‑digit numbers only**; veterans abroad (Germany, UK, Japan, Philippines, Mexico, Canada, Costa Rica, Thailand, Australia, Ireland, Panama, Portugal, Italy) cannot enter their actual number or proceed. Many resort to entering incorrect US numbers or relatives’ numbers to continue. 

**Representative quotes**  
- “**Only US numbers** are accepted… I live in Germany.” (/contact-information)   
- “It’s impossible to add a phone number since I **live outside the US**.” (/edit-mobile-phone)   
- “My phone is **Panama +507‑…** Your website only accepts US numbers! **Unacceptable.**” (/edit-mobile-phone) 

**Impact**  
Hard stop for OCONUS veterans; blocks profile completion and downstream services (claims, care, messaging). 

**Temporal or segment patterns**  
- Dominates monthly primary issue **Apr–Oct, Dec 2025**. 

**Critical Observations**  
- The field lacks **E.164** support, country selector, or international formatting guidance.  
- Validation copies conflict with address fields that allow AE/APO/FPO/foreign addresses. 

**Recommendations**  
- **Enable E.164 international input** with country dropdown + formatting help; accept “+” prefix.  
- **Allow optional mobile** where email/landline suffice; remove hard dependency. 

---

## 8. Category 5: No Mobile Phone / Landline‑Only Users Blocked

**Mentions / Volume**: **142** (**1.6%**) of scoped feedback. 

**Description**  
Users without mobile phones (cost, accessibility, lack of coverage) are **blocked** because mobile is marked “required.” Many request **NA** option or landline entry and voice call MFA. 

**Representative quotes**  
- “I **do not have a mobile phone**, only a **landline**.” (/contact-information)   
- “No way to say I **don’t have a cellphone**… Give me a cell phone and I’ll give you the number.” (/contact-information)   
- “Mobile phone is **required**… I have **VOIP landline**.” (/contact-information) 

**Impact**  
Denies access to My VA tasks to specific populations (elderly, disabled, rural). Raises ADA concerns. 

**Critical Observations**  
- Design assumption that “everyone has mobile” is inaccurate and exclusionary. 

**Recommendations**  
- **Permit landline entry + voice call OTP**; add **“I don’t have a mobile”** path with alternate verification and **skip** option. 

---

## 9. Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | **Stabilize profile update transactions** (idempotent writes, retry queues, server‑confirmed saves, clearer error fallback) | System error — can’t update now | **High**: immediate reduction in failures; unlocks core flows (claims, care, messaging)  |
| **P0** | **Enable international phone support (E.164)** with country dropdown, format hints; accept “+” prefix | International numbers blocked | **High**: unblocks OCONUS veterans; improves global inclusivity  |
| **P0** | **Add “No mobile” path**: landline entry, voice OTP, email OTP/TOTP backup | No mobile / landline users; Auth friction | **High**: accessibility compliance; reduces lockouts and call volume  |
| **P1** | **International‑aware address/email validation** (AE/APO/FPO/PSC, foreign address libs; remove destructive normalization) | Email/address validation failures | **Medium–High**: fewer rejects, better data quality  |
| **P1** | **Identity flow simplification** (reduce re‑verification loops; reconcile “already have” data) | Authentication friction | **Medium**: fewer loops; improved satisfaction/trust  |
| **P2** | **Data consistency audit** (prevent auto‑removal of saved phones/emails; fix cross‑system sync) | Inconsistent data prompts | **Medium**: eliminates contradictory messages; lowers retries  |
| **P2** | **Status & help surfacing** (live status banner; guided troubleshooting; callback queue) | System reliability & support gaps | **Medium**: reduces churn and duplicate attempts  |

---

## 10. Appendix: Data Overview, Metrics & Trends

### Data Overview
- **Dataset**: Medallia verbatims (A11 Group B + VFS Questionnaire) scoped to `/my-va/welcome-va-setup/contact-information` and subpages.   
- **Time period**: **Feb 7, 2025 – Dec 31, 2025 (ET)**.   
- **Scoped volume**: **8,873** responses.   
- **Completion**: **Yes=411**, **No=7,154**, **(blank/NA=1,308)**; **success rate=5.4%** among Yes/No responses.   
- **Overall CSAT (inclusion rules)**: **n=327; % satisfied=29.4%; median CSAT≈3**. 

### Theme & Task Counts
- **System error / can’t update now**: **824 (9.3%)**.  
- **Email/mailing validation**: **610 (6.9%)**.  
- **Authentication/login friction**: **385 (4.3%)**.  
- **International numbers blocked**: **239 (2.7%)**.  
- **No mobile / landline only**: **142 (1.6%)**. 

### Trends
- **Early 2025 (Feb–Mar)**: **System errors** dominate; lowest monthly CSAT (median=1).   
- **Apr–Oct, Dec**: **International phone restriction** frequently the top monthly issue; CSAT improves when fewer save‑errors occur.   
- **Nov**: **Email/address validation failures** peak as primary monthly issue. 

### Representative Quotes
- “**We’re sorry. We can’t update your information right now.** Try again later.” (multiple pages)   
- “**Only US numbers** accepted… I live overseas.” (/contact-information/edit-mobile-phone)   
- “I **do not have a mobile phone**… only a **landline**.” (/contact-information)   
- “**Not a valid email** — but it is.” (/edit-email-address)   
- “How many times do I need to **verify** who I am?” (/contact-information) 

--- 

**End of Report**
