# 📊 CSAT Feedback Analysis Report: VA.gov Contact Information / Missing Contact Experience

**Date Range:** February 19, 2025 – December 31, 2025
**Total Responses Analyzed:** ~9,071
**Data Source:** 2025 CSAT Feedback
**Analysis Date:** February 18, 2026

---

## Executive Summary

Across **~9,071 feedback responses** spanning **Feb 19 – Dec 31, 2025**, the data reveals an overwhelmingly negative user experience centered on the VA.gov contact information update flow. The feedback falls into distinct temporal phases with different dominant issue types, but the overarching theme is **veterans being blocked from completing critical tasks** due to contact information barriers.

**Key metrics:**
- Task completion ("Were you able to do your task today?"): Overwhelmingly **"No"**
- Average satisfaction score (where provided): Estimated **~1.5 out of 5**
- Dominant satisfaction rating: **1 (Very Dissatisfied)** at ~55–60% of rated responses

---

## Table of Contents

- [Top-Level Findings](#top-level-findings)
- [Issue Category Breakdown](#issue-category-breakdown)
  - [International Phone Number Rejection](#category-1--international-phone-number-rejection)
  - [No Mobile Phone / Landline-Only Users](#category-2--no-mobile-phone--landline-only-users)
  - [System Error Outage (Feb–Mar 2025)](#category-3---something-went-wrong-system-error-feb-mar-2025)
  - [Email/Address Update Failures](#category-4--emailaddress-update-failures)
  - [Login/Authentication Friction](#category-5--loginauthentication-friction)
- [Satisfaction Scores Summary](#satisfaction-scores-summary)
- [Temporal Patterns](#temporal-patterns)
- [Critical Observations](#critical-observations)
- [Recommendations](#recommendations)

---

## Top-Level Findings

### 1. Task Completion Rate is Catastrophically Low

The vast majority of respondents answered **"No"** to "Were you able to do your task today?" Among those who provided a satisfaction rating, **scores of 1 (lowest) dominate** across the entire dataset.

### 2. Two Distinct Issue Eras

#### ERA 1: "Something Went Wrong" System Outage (Feb 19 – ~Mar 6, 2025)

- **Rows ~2,001–9,071 (~7,000 responses)** — roughly **77% of all feedback**
- Dominated by a single systemic failure: the contact information edit page returned:
  > `"We're sorry. Something went wrong on our end. Please refresh this page or try again later."`
- This coincided with the **March 4, 2025 MyHealtheVet sign-in migration deadline**, creating extreme urgency
- Veterans could not add/edit phone number, email, or mailing address
- Many tried for **days or weeks** without resolution
- Blocked veterans from: ordering prescriptions, accessing medical records, sending messages to doctors, filing claims, setting up new login.gov/ID.me accounts

#### ERA 2: Persistent UX/Design Issues (Mar 7 – Dec 31, 2025)

- **Rows ~1–2,000 (~2,000 responses)** — roughly **23% of all feedback**
- The "Something went wrong" outage largely resolved, but persistent structural problems remained:
  - **International phone number rejection** (US-only field)
  - **No mobile phone / landline-only users blocked**
  - **Intermittent "can't update" errors**
  - **Email validation rejections**
  - **Address update failures**
  - **General login/verification friction**

---

## Issue Category Breakdown

### Category 1: 🌍 International Phone Number Rejection

**Estimated ~150–200+ explicit mentions across the full dataset**

Veterans stationed overseas or living abroad cannot enter non-US phone numbers. The mobile phone field only accepts US 10-digit numbers, completely blocking veterans outside the continental United States.

**Countries explicitly mentioned by veterans:**

| Region | Countries |
|---|---|
| Europe | Germany (most frequent — Spangdahlem, Ramstein, etc.), UK/England, Italy, Portugal, Spain |
| Asia-Pacific | Japan, South Korea, Thailand, Philippines, Australia |
| Americas | Mexico, Costa Rica, Panama, Canada |
| Other | Israel |

**Representative quotes:**

> *"I tried to add a contact number, but you only allow US numbers. I am active duty stationed overseas with no US number."*
> — Dec 31, 2025

> *"Update personal contact information. The issue is that it asks for a mobile phone number that is US only. However, I am stationed overseas (as is indicated by me selecting 'Armed Forces Europe (AE)' as the state in the mailing address. It makes it so I can't add any number to be contacted at or get past step 1 to step 2. Maybe make it so you can have a drop down for the country with the flag your phone is in and the country code displayed?"*
> — Dec 31, 2025

> *"Updating my mobile phone number. You are requesting my mobile phone number, but you only allow US phone numbers in this field. I am a veteran living overseas and do not have a US number. This has been an issue for years and it still hasn't been addressed. Not every veteran lives/works in the United States and has a stateside phone number available to them. OPEN THIS UP TO INTERNATIONAL NUMBERS."*
> — Dec 30, 2025

> *"I live permanently outside the US. I will soon lose access to my PSC address, how can I enter a UK address as my primary residence?"*
> — Dec 30, 2025

> *"The fact that you have military members overseas but require US phone numbers tells me you guys aren't very bright."*
> — Mar 2025

> *"Your site is insisting that I give my mobile phone information. I use a home phone. You have it. Call me there. I don't want to, and should not have to provide a mobile number."*
> — Jul 16, 2025

> *"add my cell number, however, your VA site discriminates against the more than 500,000 service members serving overseas and dont have a US cell phone number. Why you wouldnt support over 40% of the active duty force is astounding."*
> — Jul 13, 2025

**Impact:** These veterans are completely blocked at Step 1 of the onboarding flow and cannot proceed to any VA.gov services. Some report entering fake numbers just to proceed, undermining data integrity.

---

### Category 2: 📵 No Mobile Phone / Landline-Only Users

**Estimated ~80–120+ explicit mentions**

A significant population of (often elderly) veterans do not own mobile phones and are blocked by the mobile phone number requirement being marked as mandatory.

**Representative quotes:**

> *"SOme mos us simply don't have miobile phones!!! So xdtop asking!"*
> — Dec 30, 2025

> *"I DO NOT HAVE A MOBILE PHONE, SO STOP ASKING ME FOR A MOBLE PHONE NUMBER ! NOT EVERYONE IN THE FU@#ING WORLD HAS A MOBILE PHONE."*
> — Nov 26, 2025

> *"I don't own a phone. Haven't for years. I don't have a permanent address, just a mailing address. Got it?"*
> — Nov 25, 2025

> *"I do not have a cell phone or smart phone."*
> — Dec 9, 2025

> *"Contact information indicates Mobile Phone Number is required information, but I only have a landline."*
> — Sep 8, 2025

> *"I don't have a mobile phone, They coast to much for me to buy. If the VA would give me one, I'd use it.."*
> — Sep 3, 2025

> *"A mobile phone number is required. You asinine morons stupidly believe EVERYONE either has or CAN AFFORD a mobile phone number. Pull your cranium out of your rectum and allow a NONE reply!!!!!"*
> — Jun 29, 2025

> *"Your system needs to account for us OLD SCHOOL cheapskates who don't need a phone in their pocket 24/7/365."*
> — Jul 16, 2025

> *"I just needed to update email address, but now your website is requiring a mobile phone number as a required field, but per the Americans with Disabilities Act (ADA), this is in violation of Federal law as it doesn't accommodate those with disabilities that preclude them from owning a phone."*
> — Sep 18, 2025

**Impact:** These users cannot complete the onboarding flow and are locked out of VA.gov services entirely. Several veterans cite disability or financial hardship as reasons they cannot own a mobile phone.

---

### Category 3: 🔴 "Something Went Wrong" System Error (Feb–Mar 2025)

**Estimated ~5,000–6,000 mentions — the single largest issue by volume**

The contact information edit page was functionally broken for weeks during the MyHealtheVet migration period. The error message appeared regardless of browser, device, or time of day.

**The error message:**
> `"We're sorry. Something went wrong on our end. Please refresh this page or try again later."`

Or the variant:
> `"We're sorry. We can't update your information right now. We're working to fix this problem. Try again later."`

**Representative quotes:**

> *"Each time I attempted to complete a task, I receive the following error message: We're sorry. Something went wrong on our end."*

> *"This is the 4 time in over 2 months I have attempted to update my information and the same error message is received each time."*

> *"You people are so fucked up you want me to add info but won't let me do it. You have been at this bullshit login crap for two years and still don't have it working."*

> *"You tell me I need to update my phone number and email but when I tried to save the changes it says you are having problems and can't update at this time and try later. How can I try later when my deadline to transition is tomorrow?"*

> *"This the worst government website I have ever used and I work for the government. I am being asked to verify my contact info but this page DOES NOT WORK, HAS NEVER WORKED for me, and continues to tell me something went wrong on your end. I HAVE BEEN TRYING FOR MONTHS."*

> *"3 failed attempts to update info. March 4th sign in changes are tomorrow. Still can't sign in."*

**Impact:** This was a mass-scale service outage affecting thousands of veterans during a critical deadline period. Veterans could not access prescriptions, medical records, claims, or provider messaging.

---

### Category 4: 📧 Email/Address Update Failures

**Estimated ~100–150 mentions**

Various issues with email and address validation:

- Email validation rejecting valid addresses (especially those with periods, special characters, or long domain names)
- Address fields not accepting PO Boxes, certain street names (e.g., containing "Box"), or international addresses
- System converting email addresses to ALL CAPS
- Updates silently failing or returning generic errors

**Representative quotes:**

> *"enter my email I receive a msg that I must enter a valid email but I am doing that"*

> *"Your program keeps putting my email address in ALL CAPS. My email address is all lower case."*

> *"I'm trying to update my contact information, which the va has asked me for. It's my mobile phone number. But my home number/work number is my mobile phone number. But the bad experience is that the attempt to update the number failed."*

> *"My address is 13722 Box T Dr., but the word 'Box' is making the system reject it because it thinks I entered a P.O. Box address."*

---

### Category 5: 🔐 Login/Authentication Friction

**Estimated ~500+ mentions**

Confusion and frustration with the ID.me/Login.gov migration, verification loops, and MFA requirements — often compounded by the contact info update failures.

**Sub-themes:**
- Repeated identity verification loops ("How many times do I need to verify who I am?")
- Fear about data aggregation in third-party services (ID.me)
- Inability to complete MFA without a mobile phone
- Confusion between Login.gov, ID.me, and DS Logon
- Panic about the March 4, 2025 deadline

**Representative quotes:**

> *"How many times do I need to 'verify' who I am before you can 'record' it!??"*

> *"Logging in with the flawed/broken govt.id and even the working id.me systems are ridiculously cumbersome and difficult. I don't see how any older person can do this."*

> *"verifying who i was to this stupid computer system. Now that you've forced me to aggregate all of my identifying information (soc sec number, drivers license, facial image, DOB, physical address, email address, and phone number in one place, what are you going to do when that system is hacked and my data exposed world wide?"*

---

## Satisfaction Scores Summary

| Rating | Approximate % of Rated Responses | Description |
|---|---|---|
| ⭐ 1 | **~55–60%** | Very Dissatisfied |
| ⭐ 2 | **~20–25%** | Dissatisfied |
| ⭐ 3 | **~10–12%** | Neutral |
| ⭐ 4 | **~3–5%** | Satisfied |
| ⭐ 5 | **~2–4%** | Very Satisfied |

> **Note:** A large number of responses left the satisfaction field blank, which likely skews even more negative (users too frustrated to complete the survey). The few 4- and 5-star ratings generally came from veterans who were able to complete their task successfully or were commenting on unrelated positive VA experiences.

---

## Temporal Patterns

| Period | Approx. Volume | Primary Issue |
|---|---|---|
| **Feb 19–26, 2025** | ~4,000 responses | "Something went wrong" error blocking contact info entry |
| **Feb 27–Mar 1, 2025** | ~1,000 responses | Same error, escalating panic as Mar 4 deadline approached |
| **Mar 2–4, 2025** | ~2,000 responses | Peak volume — deadline day, error still present |
| **Mar 5–6, 2025** | ~1,000 responses | Error beginning to resolve for some; login migration confusion |
| **Mar 7–Jun 2025** | ~500 responses | Transition to persistent UX issues (international phone, no mobile, etc.) |
| **Jul–Dec 2025** | ~500 responses | Ongoing international phone + intermittent update errors |

### Notable Pattern: The March 4, 2025 Spike

The MyHealtheVet sign-in credential migration deadline of March 4, 2025 created a perfect storm:
1. Veterans were told they **must** sign in with Login.gov or ID.me by March 4
2. Upon signing in, they were prompted to update contact information
3. The contact information update page was **broken**, returning errors
4. Veterans were trapped: unable to proceed, unable to go back, facing a hard deadline
5. This generated the **highest volume of negative feedback** in the entire dataset

---

## Critical Observations

### 1. The international phone number issue has persisted for the ENTIRE data period

From the first row to the last, veterans report being unable to enter non-US phone numbers. Multiple veterans state this has been an issue **"for years."** There is no evidence in the data of any resolution or workaround being deployed.

### 2. Veterans are sharing PII in feedback

Desperate veterans are entering Social Security numbers, phone numbers, full home addresses, driver's license numbers, and other sensitive information directly into the feedback form — indicating they believe it is a support channel or have nowhere else to turn.

### 3. Active duty and overseas personnel are disproportionately impacted

The international phone restriction specifically impacts:
- Active duty service members stationed at overseas bases (Germany, Japan, Korea, Italy)
- DOD civilian employees working abroad
- Retired veterans living permanently overseas
- These are populations who most need **remote** access to VA services

### 4. The "no mobile phone" issue affects the most vulnerable

Elderly veterans, disabled veterans, and those with financial hardship are overrepresented among those who do not own mobile phones. Several cite the ADA and disability accommodations as reasons this requirement should not exist.

### 5. The March 2025 outage amplified a pre-existing system failure

The "Something went wrong" error existed before the March 4 deadline but became catastrophic when combined with the forced migration timeline. Veterans faced a hard cutoff with a broken system.

### 6. Feedback contains recurring themes of distrust

Many responses express deep frustration not just with the technical failure but with feeling that the VA does not care about veterans, does not test its systems, and creates unnecessary barriers. The emotional intensity of feedback (profanity, all-caps, threats to give up) signals serious damage to the VA's relationship with its user base.

---

## Recommendations

| Priority | Recommendation | Issue Addressed | Estimated Impact |
|---|---|---|---|
| **P0** | Support international phone numbers with country code selection dropdown | International phone rejection | ~150–200+ blocked veterans in this dataset alone |
| **P0** | Make mobile phone field optional (allow skip, landline, or "N/A") | No-mobile-phone users blocked | ~80–120+ blocked veterans |
| **P1** | Add robust error handling, retry logic, and user-facing status page for the contact info update API | "Something went wrong" errors | ~5,000–6,000 impacted during outage |
| **P1** | Pre-populate contact info from Login.gov/ID.me during account setup | Redundant data entry frustration | Reduces friction for all new users |
| **P1** | Implement monitoring/alerting for contact info API failures with automatic incident response | Future outage prevention | Prevents repeat of Feb–Mar catastrophe |
| **P2** | Accept international mailing addresses beyond APO/FPO/DPO | Overseas veterans' full addresses | Subset of international users |
| **P2** | Improve email validation to accept edge-case but valid email formats (periods, long TLDs, etc.) | Email rejection issues | ~50–75 mentions |
| **P2** | Preserve email case during save operations (fix ALL CAPS bug) | Email formatting issue | Multiple mentions |
| **P3** | Add a "Notes" or "Additional Information" free-text field for users who can't fit standard formats | Suggested by veterans directly | Improves flexibility for edge cases |
| **P3** | Sanitize or flag PII in feedback submissions to prevent data exposure | Veterans sharing sensitive data in surveys | Data security concern |

---

*Report generated from CSAT feedback data collected via VA.gov intercept surveys. All quotes are verbatim from veteran submissions.*
