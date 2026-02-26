# Topline Report priority impact: Medications management improvements

## Summary

9 Veterans participated in moderated usability sessions evaluating new medication management pages (Medications Page, Medication History Page, In-Progress Medications Page). Overall, participants responded positively to the designs and found them intuitive once they understood the page structure. However, **two critical usability issues emerged that could undermine task completion and should be addressed before April implementation:**

1. **The filter "Update list" button causes silent failures** - Users select filters but don't click "Update list," believing the list has changed when it hasn't
2. **Wayfinding between pages is fragile** - Users frequently struggled to find the right page for their task, and the cross-links designed to connect pages were often overlooked or misunderstood

**The central tension:** The new design separates medications across three distinct pages, but users don't arrive with a mental model of this three-page structure. They expect "Medications" or "Refill VA medications" to show them everything. When it doesn't, they need to find their way to another page and the mechanisms for doing so are not working reliably.

---

## Research questions answered

### RQ1: Can users understand the VA's medication processes well enough to complete their key tasks?

**Answer: Yes, with significant caveats around navigation.**

- **The In-Progress page's three-phase tracker (Request Submitted → Fill in Progress → Medication Shipped) was well understood** by 7 of 8 participants who viewed it. Users correctly mapped these phases to their mental model of medication processing.
- **The "Too early to refill" grey card was correctly interpreted** by most participants as meaning their request was acknowledged and would ship automatically when eligible.
- **Filter categories (Active, Inactive, All, Renewal needed) were understood** - users could articulate what each meant.
- **The challenge is not comprehension—it's getting to the right page.** Users who reached the correct page could complete tasks. Users who couldn't find the right page gave up or said they'd call the pharmacy.

### RQ2: Can users accurately locate information about where a medication is in the process?

**Answer: Mixed results depending on entry point and wayfinding success.**

- **"Refill VA medications" was the dominant first click** regardless of task, routing users to the Medications Page (refillable meds only). When their medication wasn't there, recovery depended on noticing cross-links.
- **Users relied on "Last filled" date and "Refills remaining" as primary status indicators** on medication cards, not status labels.
- **The In-Progress page provided status information users valued** - P7: "When I've called, sometimes I'm not sure, did I place this order? So that's good, so I can check it on my own."
- **When status wasn't easy to find, users turned to non-digital channels** - P12 immediately said she'd message the pharmacy; P15 said he'd call.

### RQ3: How do users move between the different interfaces? What navigational tactics do they notice and use?

**Answer: Cross-links are the primary mechanism, but discoverability is inconsistent and this is the biggest risk in the current design.**

- **Two navigation strategies emerged:** MHV landing page links (most common) vs. secondary nav/breadcrumbs
- **Cross-links ("Go to your in-progress medications," "Review and print list of medications") were missed by 3-4 participants** across tasks, requiring backtracking to the landing page or abandonment
- **The green success alert after refill submission was the most reliable pathway** to the In-Progress page - all 7 participants who submitted a refill noticed it
- **When users missed cross-links, they either:** went back to the MHV landing page, used secondary nav, or said they'd call/message the pharmacy
- **The term "in-progress medications" was not intuitive before users experienced the page** - P8: "Go to your in-progress medications. Now I'm confused, because I'm not sure what that one means."

---

## Critical Findings for April implementation

### CRITICAL FINDING 1: Wayfinding between pages is fragile and high-risk

**Severity: High - address before launch**

**The core problem:** The new design distributes medications across three pages, but users don't understand this structure when they arrive. They expect "Medications" or "Refill VA medications" to show them everything. When it doesn't, they need to find their way to another page—and the mechanisms for doing so are not working reliably.

#### Part A: Users start on the wrong page for their task

**"Refill VA medications" functions as a catch-all entry point regardless of task.** Across Tasks 1 and 2, most participants selected "Refill VA medications" or "Medications" from the secondary nav as their starting point—even when the task did not involve refilling.

**Evidence:**
- In Task 1 (find refill status of Lipitor), **P1, P5, P7, P8, P12, P13, and P15** all started by selecting either "Refill VA medications" or "Medications." Lipitor was not on this page because it was too early to refill.
- P1: "Because I anticipate that if I click on it, it will give me all of my medications, and hopefully the ones that might need... are probably pending in that regard." He was surprised when it only showed refillable medications.
- P7 appeared to interpret the Medications Page as a comprehensive list: "That's what I don't like. When there's no refills left, it takes it out of your list."

**Why this matters:** Users arrive expecting a single medications list. When they don't see what they're looking for, they assume the medication isn't in the system rather than recognizing they're on a filtered view.

#### Part B: Cross-links are the primary recovery mechanism, but they are frequently missed

**The text-based links that connect the three pages were frequently overlooked, misunderstood, or ignored.** These links are doing critical work in the design—they're how users are supposed to move between pages—but their current visual treatment is not prominent enough.

**Evidence of links being missed:**

| Link | Missed/Ignored by | Context |
|---|---|---|
| "Go to your in-progress medications" | P1 (initially), P7, P12 | P12 did not notice either cross-link on the Medications Page during Task 1; P7 was on the page for several minutes and did not see it |
| "Review and print list of medications" | P7, P8, P12 | P7 was on the Medications Page talking about printing and PDFs for several minutes without noticing the link; P8 needed moderator direction; P12 needed prompting |
| "Refill medications" (from other pages) | Multiple participants | Several navigated via secondary nav or landing page instead of using the cross-link |

**Direct quotes showing the problem:**

> **P7** was on the Medications page with the "Review and print list of medications" link visible on screen for several minutes, talking about printing and PDFs, and *still did not notice the link.*

> **P8:** "Go to your in-progress medications. Now I'm confused, because I'm not sure what that one means."

> **P12** did not notice the "Go to your in-progress medications" link or the "Review and print list of medications" link on the Medications Page at all during Task 1. The moderator had to redirect her.

> **P7**, when probed about the "Go to in-progress medications" link on the Lipitor med card: "I don't know what that is... I'm guessing that means you've placed the order."

**P8 expressed confusion about the distinction between links:**
> "Maybe I have it wrong, but refill medication basically tells me the same thing, that if it's a refill medication, then I go into it. And it'll show me what the, what refills are available or not."

#### Part C: When cross-links are missed, users take inefficient paths or abandon the task

**When users didn't notice the cross-links, they employed these recovery strategies:**

1. **Backtracking to the MHV landing page** - P5, P7, P12, P13, P16 all went back to the landing page at some point to start over with a different link
2. **Using secondary nav or breadcrumbs** - P4, P7, P13, P16 used these as alternatives, sometimes landing back on the same page they started on
3. **Abandoning the digital experience entirely** - P7, P12, P15 said they would call the pharmacy or send a secure message when they couldn't find information

**Evidence:**
> **P12's** immediate reaction when she couldn't find Lipitor on the Medications Page was to say she would go to "Messages" to contact the pharmacy—not to look for another way to navigate within the medications experience.

> **P15** stated he would call the pharmacy rather than use the website to request an urgent refill: "Actually, I wouldn't, I probably wouldn't go here. I would probably look on the bottle. Call to the pharmacy and tell them what the situation is."

> **P4** stated she would go to Messages to ask her doctor about an old medication rather than use the filters to find it.

#### Part D: When users DID notice cross-links, navigation was smooth

The cross-links work well when users see them. The problem is visibility, not functionality.

> **P4** quickly noticed the "in-progress medications" link below the heading and clicked it, completing Task 1 efficiently.

> **P13** quickly found the "Review In-Progress Medications" link and clicked it with minimal friction.

> **P1** noticed the "Go to your in-progress medications" link after scanning the Medications Page and used it to find Lipitor.

#### Part E: The success alert was the most reliable pathway to the In-Progress page

**All 7 participants who submitted a refill noticed the green success alert, and 6 of 7 clicked the "Go to your in-progress medications" link within it.** This is a significantly higher engagement rate than the page cross-links.

**Why it works:** The success alert appears at the moment a user is most motivated to check status—right after taking an action. It's contextual, timely, and visually prominent.

> **P1:** Clicked the link in the success alert, landed on the In-Progress page, and stated "this is exactly what I would be hoping to see."

> **P16:** "Just wanting to make sure that there's no glitch in system, I would probably click on that in-progress medication."

> **P13** clicked the link to check status and said "Like I said, I want to make sure I know what's coming, when it's about to be filled. I try to stay on top of my mail."

**Implication:** The success alert pattern—contextual, appears at moment of motivation, visually distinct—should inform how other navigational pathways are designed.

#### Recommendations for wayfinding

| Priority | Recommendation | Rationale |
|---|---|---|
| **Must fix** | Increase visual prominence of cross-links significantly | Current text link treatment is not being seen; P12 specifically suggested making "the blue section" bigger |
| **Must fix** | Consider button-style treatment instead of text links | Buttons have higher visual weight and clearer affordance |
| **Should consider** | Add contextual guidance when users land on a page that may not have what they need | E.g., if Medications Page shows 0 results, prompt user toward Medication History or In-Progress |
| **Should consider** | Evaluate whether link labels clearly communicate destination | "In-progress medications" was not intuitive; "Review and print list of medications" was clearer |
| **Future** | Consider whether the three-page architecture needs clearer orientation | Users don't arrive understanding the structure; onboarding or persistent navigation could help |

---

### CRITICAL FINDING 2: The "Update list" filter button causes silent failures

**Severity: High - fix before launch**

**The problem:** 7 of 9 participants failed to click "Update list" after selecting a radio button filter at least once during the session. They believed the list had changed when it had not. This is a **silent failure**—there is no error message, no visual cue, and users proceed with confidence based on incorrect information.

**Evidence:**

| Participant | Task | What happened |
|---|---|---|
| P1 | Task 3 | Initially forgot to click "Update list," noticed list didn't change, self-corrected: "I keep forgetting that update list" |
| P4 | Tasks 3 & 4 | Selected filters but never clicked "Update list"; believed she was viewing filtered results when she was not |
| P5 | Task 2 | Selected "Inactive medications" but could not locate "Update list" button even after moderator instruction |
| P8 | Task 2 | Missed button twice; moderator had to direct him to click it both times |
| P12 | Task 2 | Selected "Inactive medications" but did not click "Update list"; then selected different filter and did click it, but wrong filter for task |
| P15 | Task 2 | Selected "Inactive medications" but did not click "Update list"; appeared confused as to why list did not change |
| P16 | Tasks 1 & 4 | Selected "All medications" without clicking "Update list"; saw default list instead of selected view |

**The most telling case:** P4 selected "Renewal needed before refill" but never clicked "Update list." The list stayed on Active medications (the default), and Metformin happened to be visible in that list. She interpreted this as confirmation that she had filtered correctly. If Metformin had not happened to be in the Active list, she would have concluded it wasn't in the system.

**User expectation:** P8 expected the list to update automatically when selecting a radio button: "I think the list should popup/change when he chooses 'All meds' without clicking the button."

**Downstream risks:**
- **Task 2 (find old medication):** Multiple participants believed the rash cream wasn't in the system because they thought they had filtered to Inactive medications when they had not
- **Task 4 (print medications list):** P4 and P16 both selected filters but did not apply them, meaning the list they intended to print did not reflect what they had selected. A user could bring an incomplete list to a doctor's appointment without knowing it.

**Recommendation:** Consider auto-applying filters on radio button selection (this matches user expectation). If a manual apply button must remain, make it visually unmissable—e.g., a prominent button that appears or animates when a filter is selected, or disable the list view until the filter is applied.

---

## Important findings (fast follows)

### FINDING 3: The "Too early to refill" grey card needs timing information

**Severity: Medium**

Users understood the card's meaning but multiple participants independently requested estimated dates for when the medication would become eligible.

**Evidence:**
- P1: "It would be helpful if the grey card included an estimated date for when he can expect to receive the medication."
- P8: "It's too early to refill... we will expect it to be refilled between a certain date and a certain date."
- P8 specifically called the current language "confusing" and wanted a clearer timeframe.

**Recommendation:** Add estimated eligibility date or refill window to the grey card to reduce uncertainty and prevent users from calling the pharmacy for status updates.

---

### FINDING 4: The print feature has discoverability and labeling issues

**Severity: Medium**

**Discoverability:** The print feature is located at the bottom of the Medication History Page, below the medication list. Several participants had difficulty finding it.

- P12 missed it entirely and said she would right-click to print instead. After the moderator directed her to it, she stated the print feature "did not pop out to her."
- P15 scrolled up and down the page and initially could not find it: "Let's see, is there a print capability in this? Don't see it."
- P4 scrolled to the bottom looking for it: "I would look for the print... which I don't see. Let me go down to the bottom. Oh, there it is!"
- P5 stated he would not normally scroll to the bottom of the page to print and would instead use the browser print function.

**Labeling:** P16 was confused by the "Submit" button within the print dropdown: "I assume that the submit was to submit the print request, but I don't know that an older veteran would understand that you're submitting a print request. They may be looking for a button that just says print."

**Compounding risk:** When combined with the filter activation issue (Finding 2), there is a risk of users printing the wrong list. In Task 4, P4 and P16 both selected a filter option but did not click "Update list," meaning the list they intended to print did not reflect what they had selected.

**Recommendation:** Consider moving the print feature higher on the page or making it persistent. Relabel "Submit" to "Print" or "Download."

---

### FINDING 5: The grey "Too early to refill" card's visual treatment may cause it to be overlooked

**Severity: Medium**

The grey card's muted styling made it easy to miss on the In-Progress Medications Page.

**Evidence:**
- P1 scrolled past the grey Lipitor card on his first pass: "Oh, wait, yeah, Lipitor is there. Oh my god, I missed it. Wow, maybe I need to put on my extra goggles."

**Recommendation:** Evaluate contrast and prominence of grey cards relative to other content on the In-Progress page. Consider whether the "no action needed" status requires different visual treatment than active statuses.

---

### FINDING 6: The term "in-progress medications" is not intuitive before users experience the page

**Severity: Medium**

While users understood the In-Progress page once they arrived, the label "in-progress medications" did not clearly communicate what users would find there.

**Evidence:**
- P8: "Go to your in-progress medications. Now I'm confused, because I'm not sure what that one means."
- P7, when probed about the link: "I don't know what that is... I'm guessing that means you've placed the order."
- P8 had difficulty distinguishing between "refill" and "in-progress" as concepts: "Refill medication basically tells me the same thing..."

**However, once users saw the page, they reacted positively:**
- P7 (after seeing the page): "Oh, well, that's nice. Because when I've called, sometimes I'm not sure, did I place this order? So that's good, so I can check it on my own."

**Recommendation:** Consider whether link text could be more descriptive (e.g., "Track your refill requests" or "See refill status"). The current label requires users to already understand the concept it describes.

---

## Positive Findings (No changes needed)

### The In-Progress Medications page is conceptually sound

7 of 8 participants correctly interpreted the three-phase tracker once they arrived on the page. Users valued the page and found it helpful for understanding where their medications were in the process.

**Evidence:**
- P8: "Immediately, the first thing I thought of when I saw in-progress medications is, we're working on it."
- P12: "This lets me know everything I need to know at the present time."
- P13: Uses it to confirm what he's requested and track status of each order.
- P15: "It tells me which ones I've already requested, and it has been submitted... And then it tells me if the fill's in progress, so it tells me what's on the way... tells me which ones, if any, have been already, shipped."

**The three statuses were understood:**
- **Request submitted:** Understood consistently
- **Medication shipped:** Understood consistently
- **Fill in progress:** Least clear of the three; P8 said "I don't know if I'm acquainted with this" and P13 interpreted it loosely as "medications that will arrive soon"

### The refill workflow is strong

All 7 participants who attempted Task 3 successfully refilled Metformin. The checkbox pattern, "Select all" option, and success alert all worked as intended. This is the strongest part of the current design.

**Evidence:**
- P4: "Oh, well, how wonderful it is, instead of having to hunt for it. I like that it's up front." She also noted: "I like the button that says you can select all three of them instead of having to go through each individual one."
- P8: "This is in the territory I'm acquainted with because I do this all the time."
- P13 immediately saw Metformin, checked the box, and also noticed other medications that appeared to be running low.
- P16: "That would be my first thought, is to just click all three."

**The green success alert was universally effective:**
- P16: "Says it's good so it's not too early."
- P4 felt "very very confident" she successfully submitted a refill.

### Filter category comprehension was solid

Users accurately defined Active, Inactive, All, and Renewal needed when asked. The problem is the mechanical interaction (the "Update list" button), not the conceptual model.

**Evidence:**
- P1: Active = "medications I'm taking right now or medication that has at least 1 refill remaining." Inactive = "medications that have expired or maybe I'm no longer using."
- P8: Active = "what they're currently sending, and I can just click on to get it sent." Inactive = "stuff I don't take anymore." All = "the whole list, all active renewal, whatever, maybe something I took a couple of years ago."

---

## Contextual Finding: Users' existing habits shape their expectations

Participants brought established routines and expectations from their current medication management practices that influenced how they navigated the new pages. This context helps explain some of the wayfinding challenges.

**Expectation of a single medications list:** Multiple participants expected "Medications" or "Refill VA medications" to show them everything—not a filtered subset.
- P1 was surprised the Medications Page only showed refillable medications
- P7: "That's what I don't like. When there's no refills left, it takes it out of your list."

**Default to non-digital channels when stuck:** When users encountered friction, their first instinct was often to leave the digital experience.
- P12's immediate reaction to not finding Lipitor was to message the pharmacy
- P15 stated he would call the pharmacy for an urgent refill
- P4 said she would message her doctor to ask about an old medication

**Reliance on familiar cues:** Users gravitated toward information they recognized from current experience.
- P7 and P16 used "last filled" date as their primary status indicator
- P16 interpreted the Lipitor grey card through auto-refill logic he was familiar with

**Learnability appears high:** P8 noted that he understood it wouldn't make sense to find Lipitor on the refills page but "didn't realize at first. Learned from using the app." This suggests users can adapt to the new structure with exposure—but first-time discoverability is the gap.

---

## Hypotheses evaluated

| Hypothesis | Supported? | Notes |
|---|---|---|
| Most Veterans will find and understand in-progress medication status | **Partially** | Understood once there; getting there was inconsistent |
| Most Veterans will understand different progress states and what happens next | **Yes** | Request submitted, Fill in progress, Shipped all understood |
| Veterans will use navigation cues, links, filtering, and sorting | **Partially** | Used when noticed; often missed cross-links and "Update list" |
| Most Veterans will locate medications when they don't know the name | **Partially** | Task 2 required moderator intervention for some |
| Veterans can determine whether they can request more from list view | **Yes** | Medication cards provided this information |
| Most Veterans will complete a refill request and understand what happens | **Yes** | Strong success across participants |
| Most Veterans will find a complete list of current medications | **Partially** | Filter issues created risk of incomplete lists |
| Veterans will recognize list can be printed/shared | **Partially** | Print feature not always discoverable |

---

## Participant characteristics

| ID | Tech comfort | Primary method | Years using VA for meds | Notable |
|---|---|---|---|---|
| P1 | High | VA.gov (laptop) | ~2 | Color-oriented; appreciates visual progress |
| P4 | High | VAHB + VA.gov | 10 | "Technophile"; found interface clear |
| P5 | Moderate | VA.gov | ~15 | Limited exploration |
| P7 | Lower | Phone calls | — | Screen froze; Tasks 3-5 incomplete |
| P8 | Moderate | VA.gov | ~5 | Wants simplification for elderly |
| P12 | Moderate | Secure messaging | ~10 | Missed several UI elements |
| P13 | High | VAHB app | — | Active manager; checks weekly |
| P15 | Moderate | VA.gov | ~10 | Prefers calling for urgent needs |
| P16 | High | VAHB app | Since 2018 | Thorough; verifies after every action |

---

## Summary of recommendations by priority

### Must address before April launch

| Issue | Recommendation | Finding |
|---|---|---|
| Cross-links not prominent enough | Increase visual prominence significantly; consider button-style treatment | Critical 1 |
| Users start on wrong page with no clear recovery path | Add contextual guidance when a page may not have what user needs; improve link labels | Critical 1 |
| "Update list" causes silent failures | Auto-apply filters or make button unmissable | Critical 2 |

### Fast follows (post-launch)

| Issue | Recommendation | Finding |
|---|---|---|
| "Too early to refill" lacks timing | Add estimated eligibility date | 3 |
| Print feature hard to find | Move higher on page; relabel "Submit" to "Print" | 4 |
| Grey card may be overlooked | Evaluate contrast/prominence | 5 |
| "In-progress medications" label unclear | Consider more descriptive link text | 6 |

### Future iterations

- Evaluate whether the three-page architecture needs clearer orientation or onboarding
- Monitor whether users continue to default to calling/messaging when they encounter friction
- Consider persistent navigation that shows users where they are in the medications experience

---

## Overall sentiment

Despite wayfinding challenges, participants responded positively overall:

> **P1:** "Very intuitive... I am being given enough information to make a decision. Very pleasant experience, very good."

> **P4:** "I'm a technophile, and I love when things are done in decency and in order. This is really great."

> **P13:** "Fairly easy... this is all standard. This is more or less what I do every month when I'm looking at what meds I need. It's active medication management."

> **P15:** "It's very similar to what I'm used to using. Seems to be pretty intuitive."

> **P8:** "Really happy with what you did... I think that the VA, when they start working on a program like this, they also need to think of the elderly veterans, not the younger veterans, but the elderly as well. I haven't had a whole lot of problems with this one, but as you can see, I still have problems with it. If they can even simplify it, I would be so happy... But overall, I still think it would be a bit difficult for a veteran my age."
