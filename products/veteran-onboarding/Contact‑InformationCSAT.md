# VA.gov Medalia CSAT – Structured Findings: Contact‑Information Flow

## Executive Summary
User satisfaction with the **VA.gov contact‑information step** is extremely low: only **~6%** of scored responses are satisfied (4–5/5), and **~79%** of users report they **could not complete their task**. The primary drivers of dissatisfaction are **profile‑update errors**, **address validation failures for foreign/APO/FPO/PSC addresses**, **US‑only mobile number validation**, and **authentication loops with ID.me/Login.gov**. Feedback spiked in **Feb–Mar 2025**, coinciding with changes in sign‑in and profile flows, then stabilized at lower volumes. Immediate priorities: **stabilize update APIs**, **globalize phone/address inputs**, and **offer non‑SMS/landline verification** to restore access and increase successful completions.

---

## Table of Contents
1. Top‑Level Findings (Ranked by Relevance & Criticality)
2. Issue Category Breakdown
   - Category 1: International Phone Number Rejection
   - Category 2: Profile‑Update Errors
   - Category 3: Address Validation Failures
   - Category 4: Authentication Loops
   - Category 5: Email Validation Errors
   - Category 6: Mandatory Mobile Excludes Landline Users
   - Category 7: Input Formatting & Guidance Gaps
3. Recommendations – Consolidated Priority Table
4. Appendix: Data Overview, Metrics & Trends

---

## Top‑Level Findings (Ranked)
**Ranking factors:** frequency, severity (task‑blocking), and actionability.

1. **Profile‑Update Errors (task‑blocking)** — **1,062** mentions: users cannot save phone/email/address; see “We’re sorry / Something went wrong / try again later.”  
2. **Address Validation Failures** — **798** mentions: foreign/APO/FPO/PSC/PO Box addresses rejected.  
3. **Authentication Loops (ID.me/Login.gov)** — **756** mentions: repeated verification, failed sign‑in.  
4. **Email Validation Issues** — **730** mentions: legitimate addresses flagged invalid.  
5. **US‑Only Mobile Input** — **201** explicit mentions (+67 “overseas/OCONUS” mentions).  
6. **Cannot Update Contact (generic)** — **96** mentions.  
7. **No Mobile / Landline Only** — **27** explicit mentions of exclusion.

---

## Issue Category Breakdown

### Category 1: International Phone Number Rejection
**Estimated explicit mentions:** ~201 (plus 67 “overseas/OCONUS” signals; combined ~268).  
Veterans overseas cannot enter non‑US phone numbers; the mobile field only accepts US 10‑digit numbers, blocking the contact‑info step.

**Countries explicitly mentioned:**
| Region       | Countries |
|--------------|-----------|
| Europe       | Germany (Spangdahlem, Ramstein), UK/England, Italy, Portugal, Spain |
| Asia-Pacific | Japan, South Korea, Thailand, Philippines, Australia |
| Americas     | Mexico, Costa Rica, Panama, Canada |
| Other        | Israel |

**Representative quotes:**
- “You require US numbers only, but I have a Mexican cell phone.”  
- “I live in Germany… Contact info will not accept a German number.”  
- “I live outside the United States and only have a UK phone.”  
- “Your website accepts foreign address but will not allow me to add foreign phone number.”

**Impact:** Blocks OCONUS veterans from completing required contact info, preventing downstream tasks (claims, messaging, travel pay).

**Temporal patterns:**
| Period | Approx. Volume | Primary Issue |
|--------|---------------:|---------------|
| Feb    | 41             | US-only mobile rejects |
| Mar    | 23             | Same |
| Apr    | 13             | Same |
| Jun    | 34             | Second peak |
| Jul–Dec| 8–15/mo        | Persistent baseline |

**Critical Observations:**
- Accepts foreign addresses but rejects foreign phones → inconsistent global experience.
- No bypass (email-only verification) for users without US mobile.

**Recommendations:**
| Priority | Recommendation | Issue Addressed | Estimated Impact |
|----------|---------------|-----------------|------------------|
| P0       | Enable E.164 international phone format (+country code) with country selector | US-only mobile rejection | Unblocks ~200+ failures |
| P0       | Allow email-based and voice-call OTP alternatives | Mandatory US mobile | Immediate access for overseas & landline-only users |
| P1       | Inline country examples (+49 DE, +44 UK, +81 JP) | Input clarity | Reduces format errors |

---

### Category 2: Profile‑Update Errors
**Mentions:** 1,062  
Most frequent complaint: contact‑info updates fail with “We’re sorry / Something went wrong,” preventing saves across phone/email/address fields.

**Representative quotes:**
- “We’re sorry. We can’t update your information right now.”  
- “Something went wrong on our end.”  
- “YOUR SAYING MY CONTACT INFORMATION IS MISSING… THEN GET THE ‘WERE SORRY…’”

**Impact:** Directly blocks contact completion; contributes to 79% “No” on task completion.

**Recommendations:**
- P0: Stabilize update APIs (retries, transactional writes, diagnostic error IDs).  
- P0: Graceful fallback: save drafts, queue writes, notify users.  
- P1: Status banner when update services are degraded.

---

### Category 3: Address Validation Failures
**Mentions:** 798  
Foreign and APO/FPO/PSC addresses rejected by USPS-based validation.

**Representative quotes:**
- “Home address. Update page would not accept street address.”  
- “Enter my local Japanese address. Not accepted due to non-verification.”

**Impact:** Blocks overseas and military users from completing contact info.

**Recommendations:**
- P0: Expand validators beyond USPS; add country-aware schemas and APO/FPO/PSC rules.  
- P0: Manual override path with human review.  
- P1: Inline format examples for APO/FPO/PSC.

---

### Category 4: Authentication Loops (ID.me/Login.gov)
**Mentions:** 756  
Repeated verification steps, biometric prompts, and failed sign-ins.

**Representative quotes:**
- “Logging in with the flawed/broken govt.id and even the working id.me systems are ridiculously cumbersome.”  
- “JUST TO GET ACCESS first!!! ... 'text to verify' over and over.”

**Impact:** Blocks entry to contact flow entirely.

**Recommendations:**
- P0: Reduce duplicate challenges; add progress indicator; status page for auth providers.  
- P0: Offer non-SMS alternatives (email/voice codes, video-ID).  
- P1: Privacy-forward copy explaining third-party use.

---

### Category 5: Email Validation Errors
**Mentions:** 730  
Legitimate emails rejected; issues with case sensitivity and format constraints.

**Representative quotes:**
- “Update my email address and the site continues to tell me that my email address is not valid.”  
- “App would not accept my email as a valid option.”

**Recommendations:**
- P0: Adopt RFC-compliant validation (case-insensitive, common special characters).  
- P1: Real-time hints and normalize casing.  
- P1: Log rejected patterns for rule hardening.

---

### Category 6: Mandatory Mobile Excludes Landline Users
**Mentions:** 27 explicit  
Seniors and rural veterans often rely on landlines, not mobile/SMS.

**Representative quotes:**
- “I don't have a mobile phone to receive one time code for signon.”  
- “I DO NOT HAVE A MOBILE PHONE, SO STOP ASKING ME FOR A MOBILE PHONE NUMBER!”

**Recommendations:**
- P0: Voice call OTP to landlines; email-based verification.  
- P1: “No mobile phone” toggle to enable alternative paths.

---

### Category 7: Input Formatting & Guidance Gaps
**Mentions:** recurring  
Users guess formats (e.g., dashes in phone) or encounter odd behaviors (email forced to all caps).

**Representative quotes:**
- “I tried again, this time putting dashes in the phone number, and the update worked.”  
- “Your program keeps putting my email address in ALL CAPS.”

**Recommendations:**
- P1: Auto-format phone inputs; normalize email casing; inline examples.  
- P2: Country-aware masks once country is selected.

---

## Recommendations – Consolidated Priority Table
| Priority | Recommendation | Issue Addressed | Estimated Impact |
|----------|---------------|-----------------|------------------|
| P0 | Stabilize contact-update APIs; add retries & diagnostic error IDs | Profile-update errors | Removes top task blocker |
| P0 | Enable E.164 international phone format + country selector | US-only mobile | Unblocks ~200+ failures |
| P0 | Offer landline voice OTP and email-only verification | Mobile-only gating | Restores access for landline cohort |
| P0 | Expand address validation to non-US/APO/FPO/PSC; add manual overrides | Address failures | Addresses 798 complaints |
| P1 | Simplify ID.me/Login.gov flows (reduce loops; show progress; alternatives) | Auth loops | Decreases 756 sign-in failures |
| P1 | Adopt RFC-compliant email validator; normalize casing | Email errors | Resolves 730 rejection complaints |
| P2 | Input UX polish (auto-format, inline examples; country masks) | Formatting/guidance | Reduces avoidable errors |

---

## Appendix

### Data Overview
- Total responses: 9,070  
- Date range: Feb 7–Dec 31, 2025  
- CSAT scale: 1–5  
- Satisfied (4–5): ~6.0% of 6,854 scored entries  
- Task completion: Yes 5.52% / No 79.35% / Blank 15.13%

### Theme & Task Counts
- Themes: Errors 1,062; Address 798; ID/Login 756; Email 730; Intl phone 201; OCONUS 67; Landline 27; Generic “cannot update” 96  
- Tasks: Login 1,168; Update contact 965; Add mobile 900; Update address 803; Apply benefits 154; Rx refill 65; Education/GI/CHAMPVA 37; Direct deposit 35

### Trends
- Monthly volume: Feb 5,037 | Mar 2,580 | Apr 154 | May 128 | Jun 289 | Jul 150 | Aug 134 | Sep 107 | Oct 109 | Nov 214 | Dec 168  
- International-phone monthly mentions: Feb 41 | Mar 23 | Apr 13 | Jun 34 | Jul–Dec: 8–15/mo

### Representative Quotes
- “You require US numbers only, but I have a Mexican cell phone.”  
- “I live in Germany… Contact info will not accept a German number.”  
- “We’re sorry. We can’t update your information right now.”  
- “Enter my local Japanese address. Not accepted due to non-verification.”  
- “Logging in with the flawed/broken govt.id… ridiculously cumbersome.”  
- “App would not accept my email as a valid option.”  
- “I don't have a mobile phone… I only have a landline.”
