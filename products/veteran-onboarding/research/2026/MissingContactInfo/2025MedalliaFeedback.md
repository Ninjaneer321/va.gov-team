# CSAT Survey – Structured Findings (VA.gov Contact-Info Flow)

## Executive Summary
Across **9,070** survey responses collected **February 7–December 31, 2025**, user satisfaction with the VA.gov contact‑information step is **very low**: only **~6%** reported “satisfied” (scores **4–5** on a 1–5 scale), while **~80%** said they **could not complete their task**. The single biggest drivers of dissatisfaction are **system errors during profile updates**, **address validation failures (especially foreign/APO/FPO/PSC)**, and **authentication loops with ID.me/Login.gov**. Feedback volume **spiked in February–March 2025**, coinciding with changes to sign‑in/contact flows, and then stabilized at lower levels. Priorities: **stabilize the update APIs**, **globalize address/phone inputs**, and **provide landline + non‑SMS verification paths**. [1](blob:https://m365.cloud.microsoft/b15bfb79-bbf1-4134-a1ad-fc57bbae154c)[2](blob:https://m365.cloud.microsoft/52f98c50-32bb-41bc-a529-1dd4767fb3b4)

---

## Methodology
- **Data source:** `2025CSAT0FeedbackSCRUBBED.xlsx` (sheet: “2025 CSAT Miss Contact scrubbed”). I processed **all rows** and generated summary tables (counts, distributions, time trends, and theme clusters). [1](blob:https://m365.cloud.microsoft/b15bfb79-bbf1-4134-a1ad-fc57bbae154c)  
- **Quantitative:** Computed counts, percentages, and distributions for CSAT and operational questions; derived daily/monthly trends. [2](blob:https://m365.cloud.microsoft/52f98c50-32bb-41bc-a529-1dd4767fb3b4)[3](blob:https://m365.cloud.microsoft/a4dc9125-cd8e-4622-8619-132e39ef918e)[4](blob:https://m365.cloud.microsoft/12b99132-ef27-4e02-b945-7b3ce3c91ce1)  
- **Qualitative:** Thematic tagging of open‑text responses (e.g., “error”, “address”, “ID.me/login”, “international phone”), and clustering of attempted tasks (e.g., “login/sign‑in”, “update contact info”). [2](blob:https://m365.cloud.microsoft/52f98c50-32bb-41bc-a529-1dd4767fb3b4)

---

## Overall Results

### Data Overview
- **Total responses:** **9,070**  
- **Date range:** **2025‑02‑07** to **2025‑12‑31**  
- **Response rate:** Not present in the dataset  
- **CSAT scale:** **1–5** (1 = lowest, 5 = highest) [1](blob:https://m365.cloud.microsoft/b15bfb79-bbf1-4134-a1ad-fc57bbae154c)[2](blob:https://m365.cloud.microsoft/52f98c50-32bb-41bc-a529-1dd4767fb3b4)

### Core Outcome Metrics
- **Task completion:**  
  - No: **79.35%**  
  - Yes: **5.52%**  
  - Blank: **15.13%** (n=9,070) [2](blob:https://m365.cloud.microsoft/52f98c50-32bb-41bc-a529-1dd4767fb3b4)  
- **Overall CSAT score (satisfied %):**  
  - Scores 4–5 = **411** / **6,854** rated entries → **~6.0%** satisfied [2](blob:https://m365.cloud.microsoft/52f98c50-32bb-41bc-a529-1dd4767fb3b4)

#### CSAT Distribution (Overall Site Satisfaction; n=6,854)
| Score | Count | Approx. % |
|---|---:|---:|
| **1** | 3,830 | ~55.9% |
| **2** | 1,724 | ~25.2% |
| **3** | 889 | ~13.0% |
| **4** | 277 | ~4.0% |
| **5** | 134 | ~2.0% |
| **Satisfied (4–5)** | **411** | **~6.0%** |
| **Mean** | — | **1.71** |
| **Median** | — | **1** |

#### Additional Experience/Trust Metrics
- VA.gov Experience: mean **2.64** (n=362)  
- Understanding: mean **3.10** (n=303)  
- General Trust: mean **2.84** (n=300)  
- Trust in VA Commitment: mean **3.22** (n=295) [2](blob:https://m365.cloud.microsoft/52f98c50-32bb-41bc-a529-1dd4767fb3b4)

### Trends Over Time
- **Monthly volume:** Feb (5,037) → Mar (2,580) → sharp drop after April  
- **International-phone complaints:** 8–41 mentions/month; peaks in Feb & Jun  
- **Daily/Monthly trend tables:** See `daily_counts.csv` and `monthly_counts.csv` [3](blob:https://m365.cloud.microsoft/a4dc9125-cd8e-4622-8619-132e39ef918e)[4](blob:https://m365.cloud.microsoft/12b99132-ef27-4e02-b945-7b3ce3c91ce1)

---

## Thematic Analysis

### Negative Themes
| Theme | Description | Frequency |
|---|---|---:|
| Profile update errors | “We’re sorry / Something went wrong” blocking updates | **1,062** |
| Address validation failures | Foreign/APO/FPO/PSC/PO Box rejected | **798** |
| Authentication loops | ID.me/Login.gov repeated verification | **756** |
| Email validation issues | Valid emails flagged invalid | **730** |
| US-only mobile input | Non-US numbers rejected | **201** (+67 OCONUS mentions) |
| Cannot update contact info | Generic failures | **96** |
| No mobile / landline only | Mandatory mobile field excludes users | **27** |

### Positive Themes
- Ease of navigation (minority)  
- Helpful staff interactions  
- Successful completion reports (rare)  

**Top 3 Negative:** Profile update errors, Address validation failures, Authentication loops  
**Top 3 Positive:** Ease of navigation, Helpful staff, Successful completion reports [2](blob:https://m365.cloud.microsoft/52f98c50-32bb-41bc-a529-1dd4767fb3b4)

---

## Segment Analysis
- **OCONUS users:** ~268 mentions (international phone + overseas keywords)  
- **Landline-only users:** 27 explicit mentions  
- **Login/Sign-in cohort:** 1,168 attempts; high friction due to auth loops  
**Flagged segments:** OCONUS, landline-only, login attempts [2](blob:https://m365.cloud.microsoft/52f98c50-32bb-41bc-a529-1dd4767fb3b4)

---

## Recommendations

### Critical (Immediate)
1. **Fix profile-update errors** (API stability, retries, fallback)  
2. **Globalize inputs** (international phone/address, APO/FPO/PSC support)  
3. **Offer landline & non-SMS verification** (voice OTP, email fallback)

### High Impact (Near-Term)
4. **Simplify authentication flows** (reduce loops, add alternatives)  
5. **Improve input UX** (auto-format, inline guidance)

### Quick Wins
- Inline error transparency with diagnostic codes  
- “No mobile phone” toggle for alternate verification  
- Status banner for degraded services [2](blob:https://m365.cloud.microsoft/52f98c50-32bb-41bc-a529-1dd4767fb3b4)

---

## Appendix

### Data Summaries
- Total responses: 9,070  
- Task completion: No 7,197 | Yes 501 | Blank 1,372  
- CSAT distribution: 1=3,830 | 2=1,724 | 3=889 | 4=277 | 5=134  
- Theme counts: Errors 1,062 | Address 798 | ID/login 756 | Email 730 | Intl phone 201 | OCONUS 67 | Landline 27  
- Task clusters: Login 1,168 | Update contact 965 | Add mobile 900 | Update address 803  

### Trends
- Daily counts: `daily_counts.csv`  
- Monthly counts: `monthly_counts.csv`  

---

### Sample Trend Table
```
Monthly Feedback Volume (2025)
Feb: 5,037 | Mar: 2,580 | Apr: 154 | May: 128 | Jun: 289 | Jul: 150 | Aug: 134 | Sep: 107 | Oct: 109 | Nov: 214 | Dec: 168
```

### Top Themes by Frequency
```
1) Errors/“We’re sorry” (1,062)
2) Address validation failures (798)
3) ID.me/Login.gov auth loops (756)
4) Email validation issues (730)
5) US-only mobile input (201) [+ OCONUS 67]
```

---

Would you like me to **add visual charts** (CSAT distribution, monthly trend, theme frequency) and deliver this as a **downloadable Markdown report file**? Or keep it inline?
