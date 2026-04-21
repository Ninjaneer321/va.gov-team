## CHAMPVA App Status MVP - Pain Point Severity Matrix (Corrected)

**Analysis based on 9 participants: P01, P02, P03, P04, P06, P07, P08, P09, P11**

---

### **CRITICAL (Showstoppers)**

| Pain Point | Frequency | User Impact | Business Impact | Effort to Fix |
|---|---|---|---|---|
| **Delayed paper mail notification delays action (2-3 weeks)** | 8/9 participants (89%) | HIGH: Users cannot take timely action; anxiety/stress while waiting for physical mail. Participants repeatedly mentioned mail delays of 2-3 weeks in rural areas. | HIGH: Leads to support calls; delays approvals; increases user anxiety | LOW: Implement email/SMS notifications |
| **Ineligibility reasons not visible/accessible** | 6/9 participants (67%) | CRITICAL: Users cannot understand denials or take corrective action; must dig through interface or wait for postal mail. P03, P06, P07, P08, P09, P11 all expressed frustration. | CRITICAL: High support call volume; frustration drives escalations; affects appeal decisions | MEDIUM: Provide link to decision letter PDF |
| **Confusing app relocation when moved to "Closed" tab** | 6/9 participants (67%) | HIGH: Users lose app when moved to "Closed" tab; believe it's lost/missing. P06 expressed panic: "Where did it go?" Causes emotional distress. | HIGH: Support calls asking "where's my application?"; user anxiety; operational burden | MEDIUM: Persist completed status on MyVA temporarily; improve tab labeling |
| **No notification mechanism for status changes** | 8/9 participants (89%) | HIGH: Users don't know to check status; miss action items until prompted. P01, P04, P06, P07, P08, P11 explicitly requested email/text notifications. | HIGH: Incomplete applications; delayed approvals; drives support calls | MEDIUM: Implement notification system (email/SMS) |

---

### **HIGH (Significant Friction)**

| Pain Point | Frequency | User Impact | Business Impact | Effort to Fix |
|---|---|---|---|---|
| **Unclear distinction between Claims, Forms, Applications sections** | 6/9 participants (67%) | MEDIUM-HIGH: Confusion about where to find things; duplicative info creates mental model conflicts. P03, P07, P09, P11 struggled with terminology. | MEDIUM: Users may miss information; potential duplicated effort | LOW: Clearer labeling; consistent terminology |
| **Multi-person applications show unclear per-person status** | 5/9 participants (56%) | HIGH: Users unsure which step applies to which person; confusing when one approved, one denied. P01, P03, P06, P07, P08 noted this explicitly. | MEDIUM: Misunderstanding application status; more support calls about individual eligibility | MEDIUM: Separate visual per-person step tracking |
| **Steps 2 & 3 appear redundant/unclear** | 5/9 participants (56%) | MEDIUM: Users question why multiple review/information steps; P03, P06, P08 felt processes were unnecessarily duplicative. | MEDIUM: Undermines confidence in VA efficiency; raises concerns | LOW: Better step naming & descriptions |
| **Finding closed applications requires tab switching** | 6/9 participants (67%) | MEDIUM-HIGH: Extra step; less intuitive. P06, P07, P08, P09, P11 all struggled finding closed applications. | MEDIUM: Time spent searching; potential support calls | MEDIUM: Add "recently completed" section to MyVA or improve tab visibility |
| **Closed tab not obviously clickable/interactive** | 2/9 participants (22%) | MEDIUM: Design confusion; P11 specifically noted didn't realize "Closed" was clickable | LOW: Affects older users/less tech-savvy; P11 noted button styling could be clearer | LOW: Add button styling/border to make interactive |

---

### **MEDIUM (Inconvenience)**

| Pain Point | Frequency | User Impact | Business Impact | Effort to Fix |
|---|---|---|---|---|
| **No access to electronic copies of letters/decision documents** | 5/9 participants (56%) | MEDIUM-HIGH: Cannot take immediate action; stuck waiting for postal mail. P04, P06, P07, P08, P09 all noted wanting PDF/digital copies of decision letters. | MEDIUM: Delays next steps; support calls; user frustration | MEDIUM-HIGH: Store & display scanned letters in system; requires backend integration |
| **File upload UX confusion - unclear if document uploaded** | 4/9 participants (44%) | MEDIUM: Users unsure if document uploaded successfully; P03, P07, P09 clicked multiple times to confirm. "Change file" button unclear. | MEDIUM: Potential duplicate submissions; user uncertainty | MEDIUM: Add clearer confirmation states; rename "Change file" to "Select file" |
| **"Request to add/remove dependent" card confusion** | 5/9 participants (56%) | MEDIUM: Participants think it's part of CHAMPVA app; creates mental model conflict. P07, P08, P09, P11 confused by this card's relationship to CHAMPVA. | MEDIUM: Confusion about application status; support calls | MEDIUM: Better visual separation; rename or provide context |
| **Marriage certificate upload different from birth certificate upload** | 2/9 participants (22%) | MEDIUM: Inconsistent experience; P08 noted marriage cert flow wasn't as streamlined as birth cert. | LOW: Minor friction; affects specific workflow | LOW: Standardize document upload flows |
| **Steps shown at application level, not per-person** | 4/9 participants (44%) | MEDIUM: P03, P06, P07 wanted to see step progress per person (e.g., "Jane at step 4, John at step 2") | MEDIUM: Confusion; reassessment needed | MEDIUM: Separate step tracking per applicant |
| **"Review request" terminology odd/unclear** | 2/9 participants (22%) | LOW-MEDIUM: P09 noted phrasing is odd; would prefer "Submit requested documents". | LOW: Minor wording issue | LOW: Change to "Submit requested documents" |

---

### **LOW (Minor Annoyance)**

| Pain Point | Frequency | User Impact | Business Impact | Effort to Fix |
|---|---|---|---|---|
| **Redundancy between "Check status details" and "Track claims" links** | 3/9 participants (33%) | LOW: Some confusion about which link to use. P07, P09 questioned if these were redundant. | LOW: Users figure it out quickly | LOW: Consolidate or clarify distinction |
| **File upload animation/confirmation state unclear** | 2/9 participants (22%) | LOW-MEDIUM: P07, P09 weren't sure if upload succeeded; expected traditional file picker. | LOW: Doesn't block completion | MEDIUM: Add clearer confirmation states; familiar file picker UI |
| **Grammatical issues in instructional text** | 1/9 participant (11%) | LOW: P03 noted grammatical issues in instructional text. | NEGLIGIBLE: Cosmetic fix | LOW: Copyedit |
| **Overlapping disability rating between sections** | 1/9 participant (11%) | LOW: Visual flow issue; doesn't impact task completion. P08 noted. | NEGLIGIBLE: Cosmetic | LOW: Reorganize section layout |
| **Letter confirmation page confusing (for mail/fax submitters)** | 1/9 participant (11%) | LOW: P03 didn't understand how to confirm receipt of mailed documents. | LOW: Only affects mail/fax submitters | MEDIUM: Clarify language or combine with upload flow |

---

## **Cross-Cutting Themes & Research Insights**

### **Most Impactful Changes (Priority Order):**

1. **Implement Email/SMS Notifications for Status Changes** (Addresses critical pain points)
   - Frequency: 89% of users (8/9)
   - Impact: Prevents delays, reduces support calls, improves user confidence
   - Effort: LOW-MEDIUM
   - Key insight: P06 said "Benefits are literally a life line"; users want immediate, active notification, not passive checking

2. **Provide Digital Access to Decision Letters & Denial Reasons** (Addresses ineligibility barrier)
   - Frequency: 67% of users (6/9)
   - Impact: Enables corrective action; reduces escalations; allows immediate next steps
   - Effort: MEDIUM-HIGH
   - Key insight: P06, P07 expressed anxiety: without reason for denial, they cannot appeal or fix the issue; must wait for mail

3. **Improve Closed/Completed Status Visibility on MyVA** (Addresses app relocation confusion)
   - Frequency: 67% of users (6/9)
   - Impact: Reduces "where's my application?" support calls
   - Effort: MEDIUM
   - Key insight: P06 explicitly: "This should be on the first page"; users panic when things move; benefit for stability & routine

4. **Clarify Per-Person Application Status** (Addresses multi-applicant confusion)
   - Frequency: 56% of users (5/9)
   - Impact: Reduces misunderstanding for 2-6 person applications
   - Effort: MEDIUM
   - Key insight: When one applicant approved, one denied, users need clear visual distinction by person (not just by step)

5. **Improve Section Naming & Consistency** (Addresses terminology confusion)
   - Frequency: 67% of users (6/9)
   - Impact: Reduces mental model conflicts; improves findability
   - Effort: LOW
   - Key insight: P11 wanted distinct "CHAMPVA Benefits" section separate from general "Claims"; consistency matters

---

## **Participant Sentiment & Context**

| Participant | Likert Average | Key Quote | Stress Level |
|---|---|---|---|
| P01 | 5.0 | "This is very nice" / "Everything is right where I can see it easy" | Low (satisfied) |
| P02 | 5.0 | "Easy to use, all links were there" | Low (satisfied) |
| P03 | 2.7 | "Why are there 4 steps? I'm not applying to be a NASA astronaut" / "An application for CHAMPVA is a big deal. Why are they putting it 4 pages down?" | HIGH (frustrated) |
| P04 | 5.0 | "Clear, simple to find" / "Better than call center" | Low (satisfied) |
| P06 | 4.0 | "Decisions should be front and center" / "We live and die by these benefits" / "Oh hell, it's gone or lost!" | HIGH (anxious) |
| P07 | 2.0 | "Still needs some work" / "I just want to know about Jr., not travel claims" / "Tell me why and how to fix it!" | HIGH (frustrated) |
| P08 | 5.0 | "Likes the prototype, gives insight" | Low (satisfied) |
| P09 | 5.0 | "Easy to navigate" | Low (satisfied) |
| P11 | 5.0 | "Easy, self-explanatory" | Low (satisfied) |

---

## **Demographic Insights**

- **Tech comfort varies**: P11 (less tech-savvy) needed larger buttons/clearer design; P07, P03 (detail-oriented) wanted comprehensive information upfront
- **Mobile users**: P09, P11 on mobile had additional friction with file uploads and button visibility
- **High-stakes benefit**: P06 emphasized "we live and die by these benefits"; emotional investment drives anxiety
- **Past frustrations**: P03, P04, P06, P07 all had prior negative VA experiences (lost applications, months-long delays, fax requirements) informing their expectations

---

## **Key Success Factors**

Users rated the prototype highly (Likert 5/5) when:
- Information was discoverable without digging (P01, P02, P04, P08, P09, P11)
- File uploads were intuitive (P04, P08, P11)
- Yellow action needed badge was visible (P02, P08)

Users rated the prototype lower (Likert 2-3/5) when:
- Too many clicks to find closed applications (P03, P07)
- Denial reasons not visible (P03, P06, P07)
- Steps appeared redundant (P03)
- Multi-person status unclear (P03, P07)
