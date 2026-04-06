# **VA.gov Profile – Structured Findings: Missing Contact Information**

## **Executive Summary**
Across the dataset of **10,977** case records covering **January–December 2025**, we isolated **1,494** verbatims that specifically concern **missing or uneditable contact information** (address, phone, email, emergency contact/next‑of‑kin) within VA.gov and related sign‑in experiences. Users most frequently report **profile data not displaying (“we can’t show your information”)**, **blocked updates to phone/email**, and **emergency/next‑of‑kin changes that cannot be made online**. These issues often **block task completion** for dependent updates, care coordination, appointment confirmations, and identity verification for secure sign‑in, creating repeat calls and handoffs to the National Call Center (NCC). While many cases ultimately show a final **Closed** status, the **effort and repeated failures** reflected in call notes are high, indicating **low satisfaction** and **elevated operational load**.

---

## **Table of Contents**
1. Top‑Level Findings (Ranked by Relevance & Criticality)  
2. Issue Category Breakdown  
   - Category 1: Profile Not Displayed / “Cannot Show Your Information”  
   - Category 2: Phone/Email Updates Blocked  
   - Category 3: Emergency Contact / Next‑of‑Kin Updates  
   - Category 4: Address Updates (Mailing/Home/Foreign)  
   - Category 5: Identity Verification Dependencies (Login.gov / ID.me)  
3. Recommendations – Consolidated Priority Table  
4. Appendix: Data Overview, Metrics & Trends

---

## **Top‑Level Findings (Ranked)**  
**Ranking factors:** frequency, severity, task‑blocking impact, and actionability.

1. **Profile Not Displayed / “Cannot Show Your Information”** — most frequent within the 1,494‑case subset; users encounter profile panels that won’t load or show data, preventing any contact edits and driving repeat calls/transfers.  
2. **Phone/Email Updates Blocked** — widespread reports of phone/email fields that **reject edits** or **revert to old values**, often tied to sign‑in partners; users cannot receive MFA codes or appointment messages.  
3. **Emergency Contact / Next‑of‑Kin Changes** — many callers attempt to change emergency contact/next‑of‑kin online but find **no edit option** or receive **errors**, forcing clinic/NCC escalation.  
4. **Address Updates (Domestic & Foreign)** — failures saving address lines or foreign numbers; users see “**we’re sorry… try again later**” and **validation constraints** (e.g., foreign formats).  
5. **Identity Verification Dependencies (Login.gov / ID.me)** — contact editing often appears **gated by verification loops** (MFA, recovery flows), producing circular paths that **block contact changes**.

---

# **Issue Category Breakdown**

---

## **Category 1: Profile Not Displayed / “Cannot Show Your Information”**

**Mentions / Volume:** High within the missing‑contact subset; numerous notes reflect “we can’t show your information,” “cannot show your profile,” or “account security only.”

**Description:**  
Users reach the profile or contact‑information page, but **no fields load**, or they see an **account‑security panel only**. Without visible fields, they **cannot edit** phone, email, address, next‑of‑kin, or emergency contacts.

**Representative quotes:**  
- “We’re sorry we cannot update your information right now… please try again later.”  
- “It says ‘We can’t show your information’… only shows account security.”  
- “We are unable to show your profile based on your records.”

**Impact:**  
This issue **completely blocks** contact‑info tasks, drives repeated login attempts, and increases reliance on NCC agents. It also contributes to missed appointment reminders and identity‑verification failures.

**Temporal or segment patterns:**  
Appears consistently across **January–December 2025** and persists despite basic troubleshooting (cache clear, browser changes).

**Critical Observations:**  
- Generic error text leaves users without clear next actions.  
- Sometimes triggered after Login.gov/ID.me redirects, suggesting state or eligibility‑check failures.  
- High NCC escalation rate increases operational load.

**Recommendations:**  
- **P0:** Fix profile‑visibility gating; implement fallback UI and allow read‑only fields when edits are blocked.  
- **P0:** Provide actionable error codes and guidance (e.g., “Re‑verify identity,” “Contact NCC with case ID”).  
- **P1:** Add resilience patterns such as retry and delayed‑load for profile panels.

---

## **Category 2: Phone/Email Updates Blocked**

**Mentions / Volume:** High; many users report **failed updates**, **validation errors**, or **silent reverts**.

**Description:**  
Users attempt to change their phone number or email, but the system rejects changes, reverts them, or errors out. Many cannot receive MFA codes due to outdated contact info, locking them out.

**Representative quotes:**  
- “It won’t take the new number… code goes to the old phone.”  
- “Change email shows as updated, then returns to the old email later.”  
- “I’m unable to update the telephone to authenticate.”

**Impact:**  
Users cannot authenticate, access their account, or receive reminders. Many require NCC warm transfers or manual resets.

**Critical Observations:**  
- Save flows lack integrity; changes appear successful but later revert.  
- MFA recovery loops send users back to sign‑in rather than to the edit form.  
- Standard troubleshooting (cache/cookies) does not resolve the issue.

**Recommendations:**  
- **P0:** Decouple MFA from outdated contact information; allow alternate verification channels.  
- **P1:** Add transactional integrity and validation checks to prevent silent reverts.  
- **P1:** Implement a guided recovery wizard for phone/email tied to MFA resets.

---

## **Category 3: Emergency Contact / Next‑of‑Kin Updates**

**Mentions / Volume:** Common; editing emergency/next‑of‑kin info is a prominent pain point.

**Description:**  
Users see outdated emergency contacts in appointment confirmations but cannot update them online. The system often surfaces no edit controls, forcing users to call clinics or NCC.

**Representative quotes:**  
- “Unable to update emergency contact… provided number for local VAMC.”  
- “Emergency contact lists spouse but with old phone.”  
- “Next of kin information isn’t correct and won’t update.”

**Impact:**  
Incorrect emergency contacts pose **care‑coordination risks**, increase appointment confusion, and require extra manual work from clinics.

**Critical Observations:**  
- Emergency contact often lives in a different system, not the main profile, creating fragmentation.  
- Users lack clarity about which department controls which field.

**Recommendations:**  
- **P0:** Enable unified, in‑profile editing of emergency/next‑of‑kin fields.  
- **P1:** Display source‑of‑truth indicators (VAMC, VBA) and provide automated routing.

---

## **Category 4: Address Updates (Mailing/Home/Foreign)**

**Mentions / Volume:** Frequent, especially for foreign addresses or non‑U.S. phone numbers.

**Description:**  
Users encounter form constraints, character limits, and backend errors (“Try again later”) when saving addresses.

**Representative quotes:**  
- “Foreign address not accepted… also not allowed to put non‑US number.”  
- “Address will be updated soon… but doesn’t populate.”  
- “Cannot add an address; red error banner to try again later.”

**Impact:**  
Inability to update addresses jeopardizes receipt of VA correspondence, benefits, and claim updates; may force paper‑based updates.

**Critical Observations:**  
- Validation patterns are inconsistent across platforms.  
- Users lack guidance on formatting (APO/DPO/FPO, foreign addresses).

**Recommendations:**  
- **P1:** Improve internationalization and provide format guidance.  
- **P1:** Add queued updates and clearer status messaging.

---

## **Category 5: Identity Verification Dependencies (Login.gov / ID.me)**

**Mentions / Volume:** Recurring; contact‑info editing often blocked by verification loops.

**Description:**  
Users trying to update contact information are redirected into MFA or identity verification flows that require the *old* phone or email.

**Representative quotes:**  
- “MFA recovery puts him back to choose self‑service… then login screen, repeating cycle.”  
- “Cannot match phone number to Login.gov; needs contact update to verify.”

**Impact:**  
Creates circular paths that prevent updates and force reliance on NCC or partner support systems.

**Recommendations:**  
- **P0:** Provide alternate MFA routes (email link, backup codes, voice call) before requiring contact edits.  
- **P1:** Clarify authoritative data source across Login.gov/ID.me/VA.gov.

---

# **Recommendations – Consolidated Priority Table**

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---------|----------------|-----------------|------------------|
| **P0** | Fix profile‑visibility gating; add fallback UI and actionable errors | Profile not displaying | **High** — reduces repeat calls and escalations |
| **P0** | Decouple MFA from outdated contact info; add alternate verification paths | Phone/email update failures | **High** — unblocks sign‑in and updates |
| **P1** | Add save‑integrity checks and queued update confirmation | Silent reverts on saves | **Medium–High** — increases user trust |
| **P1** | Strengthen international address/phone validation & formatting guidance | Address update failures | **Medium** — critical for overseas users |
| **P2** | Add source‑of‑truth indicators and routing for emergency contacts | Emergency contact issues | **Medium** — reduces confusion and escalations |

---

# **Appendix: Data Overview, Metrics & Trends**

### **Data Overview**
- **Total dataset size:** 10,977 cases  
- **Time period:** **January–December 2025** (full‑year coverage)  
- **Missing Contact Information subset:** 1,494 cases  
- **Data types:** Call‑center notes + structured case metadata  
- **Status:** Many cases end as “Closed,” but user effort is high due to repeated failure loops.

---

### **Theme & Task Counts**
Major sub‑themes within Missing Contact Information:
- Profile not displayed  
- Phone/email save failures  
- Emergency/next‑of‑kin edit failures  
- Address validation issues  
- MFA/verification loops  

---

### **Trends**
- **Temporal:** Issues persist across the full year (Jan–Dec 2025), indicating systemic root causes rather than isolated outages.  
- **Channel/device:** Affects web (Edge/Chrome/Firefox) and mobile (iOS/Android), showing cross‑platform consistency.

---

### **Representative Quotes**
- “We’re sorry we cannot update your information right now… please try again later.”  
- “It only shows account security; contact info won’t load.”  
- “Code goes to the old phone; I can’t change the number.”  
- “Foreign address not accepted; can’t add non‑US phone.”  
- “Emergency contact is wrong, and there’s no edit option.”  
- “Change email looks saved, but later it’s the old one again.”

---

# **End of Report**

If you want the **full‑year monthly trend table**, **charts**, or **theme comparisons**, I can generate those next—just tell me!
