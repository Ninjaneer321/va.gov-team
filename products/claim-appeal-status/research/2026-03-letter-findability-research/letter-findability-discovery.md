# Benefit Letter Findability  
## Preliminary Discovery Summary

**Office of the CTO - Digital Experience (OCTO-DE), Notifications, BMT 3**

**Date:** 03/03/2026

**Contacts:**  Naomi Howe, Melissa Lefevre, Guy Schmidt

---


## Executive Summary

This discovery reviewed prior research, usability findings, public forum signals, external how-to guides, and a task-based heuristic walkthrough was performed to assess the current state of benefit letter findability on VA.gov.

**Overall finding:**  
Benefit letters are accessible and generally findable. Usability testing shows high task success, and there is no strong public signal of widespread navigation failure. However, the experience relies on multiple navigation paths and user interpretation. Opportunities remain to improve clarity, search precision, and terminology alignment.

This appears to be an optimization opportunity rather than a major structural IA issue.

---

## Summary of Existing Research (2021–2026)

### 1) Multiple Paths, No Single Dominant Route
Veterans locate benefit letters through:
- Homepage shortcuts (e.g., popular/top links)
- Profile (User Name)
- Records section
- Search
- Claim Status Tool (in some cases)

This indicates multiple viable paths, but not one clearly dominant “obvious” route across users.

### 2) Task Success Is High in Usability Testing
Homepage redesign usability testing included a “Show you’re a Veteran” (benefit letter) task:
- **9/10 participants successfully completed** the task.
- No strong participant feedback indicated they were unable to find benefit letters.

### 3) Navigation Missteps Occur, But Are Recoverable
Research indicates:

> Users may not clearly distinguish between letters accessed through the Claim Status Tool (e.g., claim decisions) and letters accessed through Profile/Records (e.g., benefit verification letters), leading to navigation missteps.

These missteps may introduce extra steps, but do not appear to prevent task completion in testing.

### 4) Terminology Confusion Persists
Research highlights confusion between similarly named letters (e.g., benefit verification/summaries/award terminology), impacting confidence and search effectiveness.

### 5) Search Reliance (Historic + Current Signal)
- “Letters” has historically appeared among top internal search queries.
- Broad search queries (“letter,” “letters,” “benefit letters”) generally perform well.
- Some specific letter-type queries (e.g., “commissary letter”) **do not surface the benefit letters download page** clearly.

---

## Public Signals Review

A scan of Reddit, veteran forums, Facebook, and Quora found:
- No widespread or recurring public complaints explicitly stating benefit letters are hard to find on VA.gov.
- Some discussion about missing/expected letters or specific letter types.
- Numerous third-party step-by-step guides explaining how to download letters.

The presence of detailed guides suggests the task has multiple steps/decisions, but does not indicate systemic failure.

---

## Task-Based Heuristic Walkthrough (Starting from VA.gov)

Goal: “Find and download a benefit letter” without a deep link.

### Pathway A: Homepage → Top Pages / Popular Links
- **Observed:** Easy access when benefit letters are surfaced in homepage shortcut areas.
- **Implication:** When promoted, the task is low-effort and highly discoverable.

### Pathway B: Homepage → Global Navigation (Dropdown)
- **Observed:** A user may intuitively look under **Benefits** first rather than Profile/Records.
- **Implication:** This is not a dead-end (letters are findable), but may require extra interpretation/backtracking.

### Pathway C: Profile (Current State)
- **Observed:** Benefit letters are now accessible via Profile, aligning with user expectations that personal documents live there.
- **Implication:** This likely resolves a historical expectation gap noted in prior research.

### Pathway D: Search
- **Observed:** Searching “letter/letters/benefit letters” returns relevant results.
- **Observed:** Searching for a specific letter type (example tested: “commissary letter”) returns other results and **does not clearly surface the benefit letters download page**.
- **Implication:** Search works well for broad intent, but may need tuning for task-specific queries.

---

## Current State Assessment

Benefit letters are:
- Accessible via Profile (improved alignment with expectations)
- Findable through multiple viable paths
- Supported by broad search queries
- Generally discoverable in usability testing

However, the experience:
- Requires interpretation of where different letter-related tasks live (Profile/Records vs claim tools)
- Contains terminology that may not match user language
- Relies on search precision for task-specific queries

---
## Analytics Findings

Google Analytics was used to evaluate how Veterans discover and navigate to the **Download VA benefit letters** page.

### Search Behavior

Search query analysis shows that users regularly search for terms related to benefit letters. Queries include both **broad terms** (e.g., “letters,” “benefit letters”) and **specific letter types** (e.g., “commissary letter,” “award letter,” etc.). This indicates that search is an important discovery pathway for users who may not know where to locate benefit letters through navigation.

Testing also showed that some **task-specific queries** (for example, “commissary letter”) do not clearly surface the benefit letters download page in search results. This suggests a potential opportunity to improve search result ranking or intent matching for specific letter-type queries.

### Navigation Pathways

Path exploration analysis was conducted using the benefit letters download page (`/records/download-va-benefit-letters`) as the ending point. The analysis shows that users reach the page through several primary pathways:

- **Homepage → Benefit letters page**
- **Site search → Benefit letters page**
- **Records section → Benefit letters page**
- **Authentication flow → Benefit letters page**

The data indicates that users successfully reach the page through multiple entry points. Notably, **site search accounts for a substantial portion of visits**, confirming that search is a commonly used method for locating benefit letters.

### Interpretation

These findings suggest that the benefit letters page is **discoverable through multiple pathways**, and users are generally able to complete the task successfully. However, the reliance on search and the variety of navigation paths indicate that users approach this task with different mental models. Some users appear to rely on search when they are unsure where to locate benefit letters through navigation.

---
## Key Opportunities (Optimization-Focused)

While the current experience appears to support successful task completion, the findings highlight a few opportunities to improve clarity and reduce reliance on search.

1. **Improve Search Precision**
   - Ensure that queries for specific letter types (e.g., “commissary letter”) clearly surface the benefit letters download page in search results.

2. **Support Mental Model Alignment (If Needed)**
   - If analytics indicate that users frequently navigate to the Benefits section when looking for letters, consider adding a clear link directing users to the benefit letters download page.

---

## Conclusion

The combined findings from prior research, heuristic review, public signals, and analytics suggest that benefit letters are **generally discoverable and accessible**, and there is no clear evidence of a widespread failure in the current experience.

Users reach the benefit letters page through multiple pathways, including the homepage, the Records section, and site search. Analytics also shows that search is a meaningful discovery pathway, with users searching both broad terms (e.g., “benefit letters”) and specific letter types.

However, testing indicates that some task-specific queries do not clearly surface the benefit letters download page. Addressing these targeted search gaps—and continuing to monitor navigation and search patterns—would help ensure that users can reliably locate benefit letters regardless of how they approach the task.

