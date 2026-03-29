# Veteran Onboarding / My VA – Structured Findings: First‑Login Onboarding (Modal + Task List + Profile Completion)

**Executive Summary**  
Across two evaluative studies (n=26), satisfaction improves when Veterans receive **direct, benefit‑application pathways** at first login; **88%** preferred the Apply‑focused modal and **100%** said it “would have been helpful.” However, completion success is constrained by **decision paralysis** on dense benefit pages, **misalignment between verification-first prompts and benefit-first intent** (**10/10** immediately looked for benefits), and **low visual salience** of the task list (**3/10** needed prompting). Major UX breakdowns include: eligibility as a **psychological prerequisite** (Phase 1: **8/8 overwhelmed**, **6/8** couldn’t quickly find eligibility), confusing “Discover Your Benefits” (perceived as a **questionnaire, not a personalized list**), and **pop‑up fatigue** (product tours universally rejected). The strongest drivers of satisfaction and completion are **clear first‑action guidance**, **integrated eligibility**, **personalized content using existing profile data**, and **trust‑building UI that reflects saved status and next steps**.

---

## Table of Contents

- Top‑Level Findings (Ranked by Relevance & Criticality)  
- Issue Category Breakdown  
  - Category 1: First‑Login Wayfinding & Decision Paralysis  
  - Category 2: Verification vs. Benefits Mental Model  
  - Category 3: Task List & Profile Completion UX  
  - Category 4: Benefits Content Architecture & Eligibility Clarity  
  - Category 5: Personalization & Data Utilization  
  - Category 6: Messaging & Tone  
  - Category 7: Modal Behavior, Re‑access & Pop‑up Fatigue  
- Recommendations – Consolidated Priority Table  
- Appendix: Data Overview, Metrics & Trends

---

# Top‑Level Findings (Ranked)

**Ranking factors:** frequency, severity (task‑blocking), and actionability.

1. **Unclear first action at login creates decision paralysis**  
   - Evidence strength: **16/16** could articulate modal purpose; **14/16 (88%)** preferred Apply‑focused paths; **100%** said it “would have been helpful.”

2. **Verification-first prompts conflict with benefit-first mental model**  
   - Evidence strength: **10/10** immediately sought benefits; **0/10** wanted verification first.

3. **Task list lacks visual prominence, alignment, and completion behavior**  
   - Evidence strength: **3/10 needed prompting**; **7/10** expected the list to disappear upon completion.

4. **Dense “Get [benefit]” pages overwhelm; eligibility hard to find**  
   - Evidence strength: Phase 1 **8/8 overwhelmed**, **6/8** couldn’t find eligibility; Phase 2 “How‑to” improved findability (**7/8**).

5. **“Discover Your Benefits” fails expectations for personalized results**  
   - Evidence strength: Veterans expected **personalized lists**, not **more questions**.

6. **Personalization expectations unmet despite known profile data**  
   - Evidence strength: Consistent requests for **dynamic content** based on enrollment, disability rating, family details.

7. **Pop‑up fatigue; product tours rejected; re‑access to guidance needed**  
   - Evidence strength: Strong universal rejection of tours; desire for **first‑time-only modal** + **easy re‑access**.

8. **Trust & clarity issues in data entry (redundant prompts / save confirmation)**  
   - Evidence strength: Veterans questioned why email must be re‑entered; wanted **save confirmations**.

9. **Language framing (“most people…”) reduces perceived personalization**  
   - Evidence strength: Veteran sentiment strongly against crowd‑based framing.

---

# Issue Category Breakdown

---

## Category 1: First‑Login Wayfinding & Decision Paralysis

**Short narrative:**  
Veterans arrive seeking **direct paths to Healthcare, Disability, and Education**. Without clear wayfinding, they freeze or wander through dense pages. The Apply‑focused modal provides the clarity missing from current onboarding.

**Representative evidence:**  
- “**There is literally nothing more important than applying for benefits.**”  
- “**88% preferred** the left… I'm here for healthcare, disability, training.”  
- “**Having that direct path**… would have saved me time.”

**Impact:**  
Lack of direction causes **delayed applications, frustration, and abandonment**.

**Critical Observations:**  
1. Apply‑focused modal matches **Veterans’ mental model**.  
2. Veterans want a **personalized fourth option** (Discover).  
3. “About/How‑to” structures reduce overwhelm.  
4. Re‑access to guidance reduces anxiety.

**Recommendations:**  
- **P0:** Implement Apply‑focused modal.  
- **P1:** Add Discover only if **personalized**.  
- **P2:** Provide persistent “Getting Started” entry.

---

## Category 2: Verification vs. Benefits Mental Model

**Short narrative:**  
Veterans do not want verification first; they want **benefit orientation immediately**.

**Representative evidence:**  
- “Zero out of ten wanted to verify first.”  
- “How do I feel welcome if there is **another door** to walk through?”

**Impact:**  
Verification-first sequencing **blocks momentum**, discourages exploration.

**Critical Observations:**  
1. Verification is tolerated when **blocking a desired task**.  
2. Simple welcome messaging performs best.  
3. Value explanation is essential.

**Recommendations:**  
- **P0:** Do **not** gate benefits behind verification.  
- **P1:** Trigger verification **contextually**.  
- **P2:** Include clear “why this matters” microcopy.

---

## Category 3: Task List & Profile Completion UX

**Short narrative:**  
Task list is strong but **under‑emphasized**, mislabeled, and unclear in completion behavior.

**Representative evidence:**  
- “Checklist should **stand out** more.”  
- “**Complete/Finish Profile**” preferred over “Get Started.”  
- “Participants immediately noticed the task change to **completed**.”

**Impact:**  
Insufficient visual emphasis causes **low initiation**; unclear save feedback **erodes trust**.

**Critical Observations:**  
1. Ordered tasks + status changes = **strong motivation**.  
2. **Pre‑populated** information reduces friction.  
3. Veterans expect the list to **disappear** or show **success**.

**Recommendations:**  
- **P0:** Increase prominence; relabel tasks.  
- **P1:** Implement review‑and‑edit hub.  
- **P2:** Define post‑completion behavior.

---

## Category 4: Benefits Content Architecture & Eligibility Clarity

**Short narrative:**  
“Get [benefit]” pages overwhelm. “About/How‑to” pages provide clarity and reduce cognitive load.

**Representative evidence:**  
- “This page is **too cluttered**.”  
- “The ‘How to’ explains what you need… then **assists you**.”

**Impact:**  
Cognitive overload → **decision paralysis** and fewer application starts.

**Critical Observations:**  
1. Eligibility is a **psychological prerequisite**.  
2. **How‑to** pages outperform “Get” pages.  
3. Progressive disclosure reduces overwhelm.

**Recommendations:**  
- **P0:** Convert to “About/How‑to” structure.  
- **P1:** Surface eligibility inline.  
- **P2:** Reduce anchor‑link density.

---

## Category 5: Personalization & Data Utilization

**Short narrative:**  
Veterans expect VA.gov to use the data it already has to **personalize recommendations, eligibility, and next steps**.

**Representative evidence:**  
- “Tell me if I'm eligible **right off the rip**.”  
- “Use my info to show **everything I qualify for**.”

**Impact:**  
Static content feels **irrelevant**, increases effort, and causes mistrust.

**Critical Observations:**  
1. DYB must be **personalized**, not a questionnaire.  
2. Veterans want **filtered** benefit lists.  
3. Healthcare is best starting place for **dynamic content**.

**Recommendations:**  
- **P0:** Build personalized DYB with instant results.  
- **P1:** Implement dynamic content variants.  
- **P2:** Add eligibility indicators.

---

## Category 6: Messaging & Tone

**Short narrative:**  
Veterans reject non‑personalized language and unclear reasoning behind data prompts.

**Representative evidence:**  
- “I don't care what **most people** are doing.”  
- “Why is my **email missing**?”

**Impact:**  
Messaging misalignment reduces trust and increases friction.

**Critical Observations:**  
1. Personal framing works better than crowd‑based norms.  
2. Veterans want **why** information matters.  
3. Welcome should be brief.

**Recommendations:**  
- **P0:** Use “What would you like to do first?”  
- **P1:** Add purpose microcopy for data fields.  
- **P2:** Keep welcome messaging minimal.

---

## Category 7: Modal Behavior, Re‑access & Pop‑up Fatigue

**Short narrative:**  
Veterans want onboarding **once**, not repeatedly—but they need a way to get it back.

**Representative evidence:**  
- “Stop with the **damn pop ups**.”  
- “If this comes up **every time**, I’d be annoyed.”

**Impact:**  
Repeated pop‑ups reduce satisfaction and cause site abandonment.

**Critical Observations:**  
1. First-login-only is preferred.  
2. Persistent re‑access reduces anxiety.  
3. Multi‑step tours are rejected.

**Recommendations:**  
- **P0:** Show modal **first-time only**.  
- **P1:** Provide clear re‑access entry.  
- **P2:** Optional lightweight “Need help?” prompt.

---

# Recommendations – Consolidated Priority Table

| **Priority** | **Recommendation** | **Issue Addressed** | **Estimated Impact** |
|---|---|---|---|
| **P0** | Implement Apply‑focused modal | First‑login paralysis | ↑ first clicks; ↑ application starts |
| **P0** | Refactor benefit pages to How‑to | Dense content overwhelm | ↓ cognitive load; ↑ conversion |
| **P0** | Increase task list prominence; relabel | Low task initiation | ↑ task starts |
| **P0** | Do not gate benefits behind verification | Verification misalignment | ↑ benefit engagement |
| **P0** | Build personalized DYB | DYB mismatch | ↑ relevant discovery |
| **P1** | Implement review‑and‑edit hub | Save/confirmation issues | ↑ trust; ↓ friction |
| **P1** | Dynamic content variants | Unmet personalization | ↑ relevance |
| **P1** | Provide persistent modal re‑access | Re‑access anxiety | ↑ user confidence |
| **P1** | Replace “most people…” language | Tone misalignment | ↑ satisfaction |
| **P2** | Contextual verification triggers | Premature verification | ↓ abandonment |
| **P2** | Define task list completion behavior | Unclear success state | ↑ clarity |
| **P2** | Optional “Need help?” prompt | Re‑access without spam | ↑ voluntary guidance use |

---

# Appendix

## Data Overview
- **Welcome to My VA Study (2024)**: n=10 (desktop)  
- **Onboarding Modal Study (2025)**: n=16 (desktop/tablet/mobile)

## Evidence Summary
- **88%** preferred Apply‑focused modal  
- **100%** said modal would have helped  
- **0%** wanted verification first  
- Phase 1: **8/8 overwhelmed**, **6/8** eligibility findability issues  
- Phase 2: **7/8** improved findability  
- **8/10** willing to add contact info

## Trends or Patterns Across Research
- Veterans consistently prioritize **Healthcare, Disability, Education**  
- Eligibility must appear **early and inline**  
- Personalization expected everywhere  
- Task lists drive completion **when visible + status‑driven**  
- Avoid multi‑step product tours  
- Tone must be personalized  
- Data pre‑population increases trust
