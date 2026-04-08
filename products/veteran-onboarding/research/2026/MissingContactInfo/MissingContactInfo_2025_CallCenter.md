# VA.gov Profile – Structured Findings: Contact & Personal Information Update Flow

---

## Executive Summary
Across **206 Tier‑1/Tier‑2 call‑center cases** (Jan 2–Jul 18, 2025), callers most frequently struggled to **save or update contact details** due to a recurring server‑side error (“*We’re sorry, something went wrong on our end*”), followed by **profile visibility issues** (“*We can’t show your information in your VA.gov profile*”). **CSAT was not captured** in this dataset; using an outcome proxy, **completion success** (explicitly resolved within the call) was **~16%** (33/206), with **escalations** at ~14% and **transfers** at ~10%. **Update‑save failures** accounted for **~36%** of all cases (74/206), **profile‑visibility errors** ~17% (34/206), and **MFA/verification/phone‑update problems** ~15% (31/206). Volume peaked **March (64 cases)** with a noticeable spike around **Mar 10**, then remained elevated **June (53 cases)**. **Data range:** Call‑center transcripts, **Jan 2–Jul 18, 2025**.  

---

### Table of Contents

1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Customer Satisfaction Table  
3. Issue Category Breakdown  
4. Category 1: Update Error (Cannot Save)  
5. Category 2: Profile Missing (Cannot Show Info)  
6. Category 3: MFA/Verification/Outdated Phone  
7. Category 4: Direct Deposit Update Error  
8. Category 5: Emergency Contact / Next‑of‑Kin  
9. Category 6: Proxy/Fiduciary Access  
10. Category 7: International Contact Constraint  
11. Category 8: Browser/Device Troubleshooting  
12. Recommendations – Consolidated Priority Table  
13. Appendix: Data Overview, Metrics & Trends

---

## 1) Top‑Level Findings (Ranked by Relevance & Criticality)
Ranking factors: frequency, severity, task‑blocking impact, and actionability.

1. **Update‑save failures on Contact/Personal Information** — **74 cases (~36%)** reporting “*We’re sorry, something went wrong on our end. Please refresh and try again later*.” Blocks address/phone/email updates needed for claims, letters, and communication.    
2. **Profile visibility gating (“We can’t show your information”)** — **34 cases (~17%)** where the Profile is partially or fully inaccessible despite successful sign‑in; users can often view benefits but **Profile tab** shows a blocking banner.    
3. **MFA/identity verification & outdated phone issues** — **31 cases (~15%)** involving **non‑receiving codes**, **outdated phone on Login.gov/ID.me**, or repeat verification loops preventing updates.    
4. **Direct deposit update errors** — **18 cases (~9%)** where banking info **fails to save** or loops users back to re‑auth, sometimes with “*We can’t show your information*.”    
5. **Emergency contact/next‑of‑kin missing or not editable** — **10 cases (~5%)** hindering medical coordination and caregiver setups.    
6. **Proxy/fiduciary access friction** — **8 cases (~4%)** report barriers when caregivers/POA attempt updates or view the profile; access model unclear even after identity verification.    
7. **International contact constraints** — **3 cases (~1.5%)** blocked when phone fields require **U.S. numbers**, affecting overseas Veterans.    
8. **Browser/device troubleshooting with limited efficacy** — **~34 mentions** of cache/cookies, Safari/Chrome/iOS/Android; issues persist cross‑device, suggesting **back‑end** rather than client problems.  

---

## 2) Customer Satisfaction Table
> **CSAT Calculation Note:** CSAT wasn’t provided in this call‑center dataset; per the universal rules, CSAT rows would require **non‑null numeric 1–5 values** and **in‑scope rows** filtered by product tags/URL. As **CSAT is absent**, % satisfied and median scores are **N/A**. We still list monthly primary issues (by highest category count).  

| Month (2025) | % Satisfied | Median Score | Primary Issue This Month |
|---|---:|---:|---|
| Jan | N/A | N/A | Update Error (Cannot Save)   |
| Feb | N/A | N/A | Update Error (Cannot Save)   |
| Mar | N/A | N/A | Update Error (Cannot Save)   |
| Apr | N/A | N/A | MFA/Verification/Outdated Phone   |
| May | N/A | N/A | Profile Missing (Cannot Show Info)   |
| Jun | N/A | N/A | Update Error (Cannot Save)   |
| Jul | N/A | N/A | N/A (low volume)   |

**CSAT Inclusion Rules Used (Generalized):**  
A) Would include only rows with non‑null numeric CSAT (1–5) tied to VA.gov Profile/Contact Information. B) **% satisfied = (count of 4–5) / (count of 1–5)**. C) Monthly CSAT = apply A, compute B, median score, and top issue by category count. D) Exclude rows outside scope, lacking CSAT, or non‑numeric CSAT. **Not applied here due to missing CSAT.**  

---

## 3) Issue Category Breakdown
**Dataset size:** 206 calls; case categories: **“Unable to Update Information” (148)**; **“Inaccurate or Missing Information/Status” (33)**; **“Inability to Access Tool” (14)**; **“Navigation Issues” (11).**  

---

## 4) Category 1: Update Error (Cannot Save)
**Mentions / Volume:** **74 cases (~36% of all calls)**.  

**Description:**  
Callers attempt to **edit address, phone, or email** in Profile but encounter a repeatable server‑side failure: “*We’re sorry, something went wrong on our end. Please refresh this page and try again later.*” This affects both **web and app** experiences and persists **across browsers/devices**.  

**Representative quotes:**
- “*We’re sorry something went wrong on our end… Clearing cache/cookies did not fix the issue.*” (e.g., **13303384**, **13307926**)    
- “*Update has been saved*… then the **Home** section shows the **wrong address** again.” (3/13: **13382950**)    
- “*Unable to update… please try again later.*” (3/10 cluster, multiple cases)  

**Impact:**  
Blocks **critical tasks**: claims submissions (needing correct address), accessing **benefit letters**, appointment communications, and **identity verification** that depends on updated contact data; users report **weeks/months** of friction.  

**Temporal or segment patterns:**
| Period | Signals |
|---|---|
| **Mar 2025 (64 cases)** | Highest overall volume; multiple **error‑save** calls on **Mar 10** following recent site changes.   |
| **Jun 2025 (53 cases)** | Elevated recurrence despite troubleshooting across devices.   |

**Critical Observations:**
- Error persists **post‑troubleshooting** (cache/cookies/browser change), pointing to **back‑end or API** failure modes rather than client‑side only.    
- **Intermittent “saved” toast** followed by **state reversion** suggests **eventual consistency** or **write‑failure** silently failing.    
- **High Tier‑2 escalations/transfers** imply frontline agents lack effective remediation paths.  

**Recommendations:**
- **P0: Stabilize Contact Info write‑path** (transactional saves, idempotent retries, explicit error codes surfaced to UI; guard against partial writes).    
- **P0: Add “Save failed” inline diagnostics** with **actionable next steps** (try alternate channel; capture a **support token** for Tier‑2).    
- **P1: Instrumentation & alerts**: log failure reasons (schema validation, downstream timeouts), correlate by **auth provider** (Login.gov/ID.me).    
- **P2: UX improvements**: autosave drafts, clearer distinction between **mailing** vs **home** addresses; confirm‑state banner with **last updated timestamp**.  

---

## 5) Category 2: Profile Missing (Cannot Show Info)
**Mentions / Volume:** **34 cases (~17%)**.  

**Description:**  
After successful sign‑in, the **Profile tab** shows a yellow banner: “*We can’t show your information. We’re sorry, based on our records we can’t show your information in your VA.gov profile*.” Other areas (benefits, appointments) may remain visible, creating **inconsistent system state**.  

**Representative quotes or metrics:**
- “*We can’t show your information… account security page only*.” (e.g., **13135437**, **13703923**)    
- “*Profile is blank… Veteran can access disability info but not profile*.” (e.g., **13667724**, **13667724**)  

**Impact:**  
Blocks **all contact updates** and prevents downloading letters that require Profile integrity (address, name). **Caregivers/POA** cannot proceed even with the Veteran present.  

**Temporal or segment patterns:**
| Month | Pattern |
|---|---|
| **May 2025** | **Primary issue category** for the month.   |
| **Ongoing** | Seen across **Safari/Chrome/Edge** and mobile/desktop.   |

**Critical Observations:**
- Occurs with **both Login.gov and ID.me** sessions; indicates a **profile resolution**/entitlement check rather than auth failure.    
- Some cases mention **blocked or duplicate accounts** (rare) and past **deceased‑flag errors**, implying **data parity** issues across systems.  

**Recommendations:**
- **P0: Fix Profile entitlement gating** (deterministic rule‑set; show exact reason + recovery path).    
- **P1: Add fallback contact‑update channel** in‑UI when Profile is gated (secure form + verification check).    
- **P2: Cross‑system reconciliation job** to resolve **deceased flags/blocked markers/duplicates** with auditable trails.  

---

## 6) Category 3: MFA/Verification/Outdated Phone
**Mentions / Volume:** **31 cases (~15%)**.  

**Description:**  
Users cannot receive MFA codes or have **outdated numbers** on Login.gov/ID.me; identity verification loops occur, sometimes prompting **re‑verification** on the VA mobile app.  

**Representative quotes:**
- “*Not receiving the MFA code… outdated phone number; needs to update to verify identity.*” (e.g., **13466424**, **13552498**)    
- “*Outdated phone on Login.gov… created a new account but system still says account exists.*” (6/16: **13722756**)  

**Impact:**  
Blocks **sign‑in and contact updates**; delays appointment access and messaging; increases **help‑desk load**.  

**Temporal or segment patterns:**  
Seen **post‑MyHealtheVet migration notices**; affects **mobile** and **desktop** across providers.  

**Critical Observations:**
- Support often **redirects** to Login.gov/ID.me ticketing rather than resolving in VA.gov flow.    
- **De‑duplicating accounts** or **MFA method reset** is not discoverable in‑flow.  

**Recommendations:**
- **P0: Inline MFA recovery** (Alternate delivery paths, voice call, backup codes, postal code option with status).    
- **P1: Unified “Update phone/email”** flow that synchronizes **VA.gov ↔ Login.gov/ID.me** with clear confirmation and retry logic.    
- **P2: Proactive prompts** to validate contact info after successful sign‑in (non‑blocking banners).  

---

## 7) Category 4: Direct Deposit Update Error
**Mentions / Volume:** **18 cases (~9%)**.  

**Description:**  
Updating **banking information** triggers errors or **login loops** (e.g., re‑prompt to ID.me), sometimes tied to **entitlement checks** (“you do not receive disability compensation”) despite ongoing payments.  

**Representative quotes:**
- “*When trying to update direct deposit… error ‘We can’t show your information’*.” (3/4: **13348047**)    
- “*Reverts back to old information… iPhone + Safari.*” (1/29: **13217017**)  

**Impact:**  
Critical for **benefit continuity**; creates anxiety and repeated contacts; pushes users to **NCC transfers**.  

**Temporal or segment patterns:**  
Appears across **Android/iOS** and multiple browsers; persists after cache/cookie clearing.  

**Critical Observations:**
- Messaging implies entitlement mismatch; **state synchronization** may be lagging.  

**Recommendations:**
- **P0: Stabilize Direct Deposit update path** with explicit **eligibility checks** and actionable remediation (confirm entitlement source + support token).    
- **P1: Add “pending update” status** and post‑save confirmation banner with last 4 of account masked.  

---

## 8) Category 5: Emergency Contact / Next‑of‑Kin
**Mentions / Volume:** **10 cases (~5%)**.  

**Description:**  
Callers report **missing emergency contacts** or inability to update next‑of‑kin, often redirected to **DMDC/HEC** without resolution on VA.gov.  

**Representative quotes:**
- “*Trying to update emergency contact… still not letting him.*” (2/12: **13277125**)    
- “*Next of kin and emergency contact information updated—cannot do it on VA.gov.*” (1/6: **13120888**)  

**Impact:**  
Delays **care coordination** and caregiver setup; undermines confidence in Profile completeness.  

**Recommendations:**
- **P1: Add/manage Emergency Contacts** directly in Profile with clear **data‑source provenance** (HEC/DEERS) and sync status.    
- **P2: Guided handoff** (contextualized, not generic phone numbers) when data ownership lies outside VA.gov.  

---

## 9) Category 6: Proxy/Fiduciary Access
**Mentions / Volume:** **8 cases (~4%)**.  

**Description:**  
Caregivers/POA encounter **profile visibility errors** or unclear permissions even after identity verification; tasks like **address updates** and **letter downloads** stall.  

**Representative quotes:**
- “*Caregiver/POA… direct deposit change blocked by ‘we can’t show your information’ banner.*” (4/25: **13545313**)    
- “*Father (POA) can’t access son’s profile… TBI; created Login.gov last year.*” (6/13: **13716085**)  

**Impact:**  
High‑stakes scenarios (medical, payments) with **additional user stress**; multiple calls and escalations.  

**Recommendations:**
- **P1: Explicit proxy UX** (role badges, permitted actions, secure approval flow) and **contextual help** on Profile.    
- **P2: Audit trail & shared status** (Veteran + proxy both see what changed, when, by whom).  

---

## 10) Category 7: International Contact Constraint
**Mentions / Volume:** **3 cases (~1.5%)**.  

**Description:**  
Phone fields **require U.S. numbers**, blocking Veterans in **Australia/Germany/Japan**.  

**Representative quotes:**
- “*Website asks for US numbers only… living in Australia; cannot add US contact.*” (3/3: **13342744**)  

**Impact:**  
**Task‑blocking** for overseas Veterans; prevents verification and contact updates.  

**Recommendations:**
- **P0: Support E.164 international phone formats** + country selector; clarify SMS vs voice availability by region.  

---

## 11) Category 8: Browser/Device Troubleshooting
**Mentions / Volume:** **~34 mentions** (Safari, Chrome, Edge, iPhone/Android, cache/cookies).  

**Description:**  
Frontline scripts emphasize **cache/cookies clearing** and **browser changes**; issues typically **persist** across clients, indicating **back‑end failure** paths.  

**Representative metrics:**  
iPhone (4), Android (4), Safari (6), Chrome (6), Edge (4), Firefox (1), Mac (3), Windows (3), iPad (2).  

**Recommendations:**
- **P1: Reduce “try another browser” as primary guidance**; surface **service status** and **known‑issue banners** instead.    
- **P2: Add client‑side prechecks** (e.g., blocked cookies, private‑mode warnings) only when truly causal.  

---

## 12) Recommendations – Consolidated Priority Table

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | **Harden Contact Info save path** (transactional writes, retries, explicit error codes) | Update Error (Cannot Save) | **High**: unlocks core Profile updates; reduces repeat calls/escalations.   |
| **P0** | **Fix Profile entitlement gating + reason codes** (expose why Profile is hidden and how to recover) | Profile Missing | **High**: restores Profile access; clears major blocker.   |
| **P0** | **Enable international phone formats (E.164)** & alternate MFA delivery | International Constraint; MFA/Verification | **High** for overseas Veterans; broader MFA reliability.   |
| **P1** | **Unified contact‑sync** with Login.gov/ID.me & inline MFA recovery | MFA/Verification/Outdated Phone | **Medium‑High**: fewer provider‑hops, faster resolution.   |
| **P1** | **Direct Deposit update integrity + eligibility messaging** | Direct Deposit errors | **Medium**: payment continuity; reduced anxiety.   |
| **P1** | **Emergency Contact management** in VA.gov with provenance & sync | Emergency/Next‑of‑Kin | **Medium**: supports care coordination.   |
| **P1** | **Proxy/Fiduciary role clarity & permissions** | Proxy access friction | **Medium**: improves caregiver workflows.   |
| **P2** | **Status banners & support tokens** on errors, plus autosave drafts | Multiple categories | **Medium**: better guidance, fewer repeated steps.   |

---

## 13) Appendix: Data Overview, Metrics & Trends

### Data Overview
- **Dataset:** Call‑center transcripts (**206 rows**) covering **Jan 2–Jul 18, 2025**.    
- **Case types:** Contact Information (115), Profile (58), Personal Information (18), Direct Deposit (15).    
- **Categories:** Unable to Update (148), Inaccurate/Missing (33), Inability to Access Tool (14), Navigation Issues (11).    
- **Outcome proxy:** Success (33, **~16%**), Escalated (29, **~14%**), Transferred (20, **~10%**), Still Occurring (1, **~0.5%**); remainder lacked explicit resolution notes.    
- **CSAT:** **Not recorded** in the dataset.  

### Theme & Task Counts
- **Update Error (Cannot Save):** 74 (top theme).    
- **Profile Missing (Cannot Show Info):** 34.    
- **MFA/Verification/Outdated Phone:** 31.    
- **Direct Deposit Update Error:** 18.    
- **Emergency/Next‑of‑Kin:** 10.    
- **Proxy/Fiduciary Access:** 8.    
- **International Contact Constraint:** 3.    
- **Browser/Device Troubleshooting (mentions):** ~34.  

### Trends
| Month | Volume | Primary Issue |
|---|---:|---|
| **Jan 2025** | 24 | Update Error (Cannot Save)   |
| **Feb 2025** | 29 | Update Error (Cannot Save)   |
| **Mar 2025** | 64 | Update Error (Cannot Save); notable **Mar 10** spike   |
| **Apr 2025** | 13 | MFA/Verification/Outdated Phone   |
| **May 2025** | 21 | Profile Missing (Cannot Show Info)   |
| **Jun 2025** | 53 | Update Error (Cannot Save)   |
| **Jul 2025** | 2 | N/A (low volume)   |

### Representative Quotes
- “*We’re sorry, based on our records we can’t show your information in your VA.gov profile.*” (e.g., **13135437**; **13713257**)    
- “*Unable to update… please try again later.*” (e.g., **13303384**, **13307926**)    
- “*Not receiving the MFA code… outdated phone number.*” (e.g., **13466424**, **13552498**)    
- “*Direct deposit update reverts to old info… gets kicked out.*” (e.g., **13217017**, **13490987**)    
- “*US numbers only; living in Australia.*” (**13342744**)    
- “*Emergency contact missing; cannot edit on VA.gov.*” (**13277125**, **13120888**)  
