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
- Profile (current state)
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

## Key Opportunities (Optimization-Focused)

1. **Improve Search Precision**
   - Ensure specific letter-type queries (e.g., “commissary letter”) surface the benefit letters download page clearly.

2. **Clarify Letter Terminology**
   - Add clearer descriptions or plain-language aliases for similarly named letters. **(Already in progress)**

3. **Support Mental Model Alignment (If Needed)**
   - Consider adding a clear link in the Benefits section that directs users to download benefit letters (only if analytics show frequent misnavigation).

4. **Validate Improvements with Analytics**
   - Confirm whether Profile placement has reduced search reliance.
   - Review search reformulation patterns for letter-type queries.

---

## Conclusion

The evidence does not suggest a major findability failure.

Benefit letter findability appears to have:
- Historically presented challenges,
- Improved over time (notably via Profile access),
- Become largely sufficient,
- With targeted opportunities for refinement in search and terminology.

Next steps should focus on validating these findings with analytics and sizing the impact of the identified optimization opportunities.
