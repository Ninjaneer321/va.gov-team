# Topline report: Medications management improvements usability study, February 2026

**UX Team:** Athena Bozak, Anneka Van Garza, Florence McCafftery, Cara Frissel

---

## Table of contents

- [Summary](#summary)
- [Research questions](#research-questions)
- [Critical findings for implementation](#critical-findings-for-implementation)
  - [Critical Finding 1: Wayfinding between pages](#critical-finding-1-wayfinding-between-pages-is-fragile-and-high-risk)
  - [Critical Finding 2: Update list filter button](#critical-finding-2-the-update-list-filter-button-causes-silent-failures)
- [Important findings (fast follows)](#important-findings-fast-follows)
  - [Finding 3: Grey card needs timing information](#finding-3-the-too-early-to-refill-grey-card-needs-timing-information)
  - [Finding 4: Print feature discoverability](#finding-4-the-print-feature-has-discoverability-and-labeling-issues)
  - [Finding 5: Grey card visual treatment](#finding-5-the-grey-too-early-to-refill-cards-visual-treatment-may-cause-it-to-be-overlooked)
  - [Finding 6: In-progress medications label](#finding-6-the-term-in-progress-medications-is-not-intuitive-before-users-experience-the-page)
- [Positive findings](#positive-findings)
- [Contextual finding](#contextual-finding-users-existing-habits-shape-their-expectations)
- [Hypotheses evaluated](#hypotheses-evaluated)
- [Recommendations by priority](#recommendations-by-priority)
- [Overall sentiment](#overall-sentiment)
- [Participant characteristics](#participant-characteristics)

---

## Summary

9 Veterans participated in moderated usability sessions evaluating new medication management pages (Medications Page, Medication History Page, In-Progress Medications Page). Overall, participants responded positively to the conceptual design, describing it as "intuitive" and "easy" (8 of 8 who completed the full session; P7 excluded due to a screen freeze during Task 3). However, two critical usability issues emerged that risk undermining task completion in production:

1. **The filter "Update list" button causes silent failures.** 7 of 9 participants selected filters but didn't click "Update list" at least once during the session, believing the list had changed when it hadn't.
2. **Wayfinding between pages is fragile.** 6 of 9 participants started on the wrong page for Task 1, and cross-links designed to connect the three pages were missed by 3 to 4 participants per task.

**The central tension:** The new design separates medications across three distinct pages, but users don't arrive with a mental model of this three-page structure. They expect "Medications" or "Refill VA medications" to show everything. When users can't find what they need, their first instinct is often to leave the digital experience entirely — 3 of 9 participants (P7, P12, P15) said they would call the pharmacy or send a secure message rather than continue navigating.

---

## Research questions

### RQ1: Can users understand the VA's medication processes well enough to complete their key tasks?

**Yes, with significant caveats around navigation.**

- The In-Progress page's three-phase tracker (Request Submitted > Fill in Progress > Medication Shipped) was well understood by 7 of 8 participants who viewed it (P7 excluded due to screen freeze; P5 did not navigate to the In-Progress page during Task 1 but viewed it during Task 3). Users correctly described the sequential flow and what each status meant.
- The "Too early to refill" grey card was correctly interpreted by all 9 participants as meaning their request was acknowledged and would ship automatically when eligible.
- Filter categories (Active, Inactive, All, Renewal needed) were understood conceptually. When asked to define each, participants could articulate what each meant (e.g., P1: Active = "medications I'm taking right now"; P8: Inactive = "stuff I don't take anymore").
- The challenge is not comprehension, it's getting to the right page. Users who reached the correct page could complete tasks. Users who couldn't find the right page gave up or said they'd call the pharmacy (P7, P12, P15).

### RQ2: Can users accurately locate information about where a medication is in the process?

**Mixed results depending on entry point and wayfinding success.**

- "Refill VA medications" was the dominant first click regardless of task, routing users to the Medications Page (refillable meds only). 6 of 9 participants (P1, P5, P7, P8, P12, P15) started Task 1 by navigating there. When their medication wasn't there, recovery depended on noticing cross-links — which 3 to 4 participants missed per task.
- Users relied on "Last filled" date and "Refills remaining" as primary status indicators on medication cards, not status labels. P7 and P16 specifically used "last filled" date as their primary signal; P16 interpreted the Lipitor grey card partly through the lens of the last filled date.
- The In-Progress page provided status information users valued. 7 of 9 participants who viewed it found it helpful. P7: "When I've called, sometimes I'm not sure, did I place this order? So that's good, so I can check it on my own." P12: "This lets me know everything I need to know at the present time." P15: "Gives me everything I need to know about in-progress medications."
- When status wasn't easy to find, users turned to non-digital channels. P12 immediately said she'd message the pharmacy; P15 said he'd call; P4 said she'd message her doctor.

### RQ3: How do users move between the different interfaces?

**Cross-links are the primary mechanism, but discoverability is inconsistent and this is the biggest risk in the current design.**

- Two navigation strategies emerged: MHV landing page links (most common initial approach) vs. secondary nav/breadcrumbs (used as a fallback by P4, P7, P13, P16).
- Cross-links ("Go to your in-progress medications," "Review and print list of medications") were missed by 3 to 4 participants across tasks, requiring backtracking or abandonment. In Task 1, P7 and P12 did not notice the "Go to your in-progress medications" link on the Medications Page; P12 also missed the "Review and print list of medications" link entirely.
- The green success alert after refill submission was the most reliable pathway to the In-Progress page. All 7 participants who submitted a refill in Task 3 (P1, P4, P5, P8, P12, P13, P16) noticed it, and 6 of 7 (P1, P5, P8, P12, P13, P16) clicked the "Go to your in-progress medications" link within it. P4 did not click the link but understood the alert as confirmation.
- When users missed cross-links, they went back to the MHV landing page (P5, P7, P12, P13, P16), used secondary nav or breadcrumbs (P4, P7, P13, P16), or said they'd call/message the pharmacy (P7, P12, P15).
- The term "in-progress medications" was not intuitive before users experienced the page. P8: "Go to your in-progress medications. Now I'm confused, because I'm not sure what that one means." P7: "I don't know what that is... I'm guessing that means you've placed the order."

---

## Critical findings for implementation

### Critical Finding 1: Wayfinding between pages is fragile and high-risk

**Severity: High, address before implementation**

**The core problem:** The new design distributes medications across three pages, but users don't understand this structure when they arrive. They expect "Medications" or "Refill VA medications" to show them everything.

#### Part A: Users start on the wrong page for their task

"Refill VA medications" functions as a catch-all entry point regardless of task. In Task 1, 6 of 9 participants (P1, P5, P7, P8, P12, P15) started by navigating to "Refill VA medications" or the Medications Page. Only 3 of 9 (P4, P13, P16) took a different initial path — P4 clicked Medications in the secondary nav, P13 clicked the Medications tab, and P16 selected "Review medications."

**Evidence:**
- In Task 1 (find refill status of Lipitor), 6 of 9 participants (P1, P5, P7, P8, P12, P15) started by navigating to the refill page. Lipitor was not on this page because it had already been submitted and was in progress. Users had to find a path to the In-Progress Medications page or Medication History page to locate it.
- P1: "Because I anticipate that if I click on it, it will give me all of my medications, and hopefully the ones that might need... are probably pending in that regard." He was surprised when it only showed refillable medications.
- P7 appeared to interpret the Medications Page as a comprehensive list: "That's what I don't like. When there's no refills left, it takes it out of your list."

**Why this matters:** Users arrive expecting a single medications list. When they don't see what they're looking for, they assume the medication isn't in the system rather than recognizing they're on the wrong page. In Task 2, 6 of 9 participants (P4, P7, P8, P12, P13, P16) needed multiple attempts to reach the Medication History page.

#### Part B: Cross-links are the primary recovery mechanism, but they are frequently missed

The text-based links that connect the three pages were frequently overlooked, misunderstood, or ignored. These links are doing critical work in the design — they're how users are supposed to move between pages when they start on the wrong one.

| Link | Missed/ignored by | Context |
|---|---|---|
| "Go to your in-progress medications" (on Medications Page) | P7, P12 | P12 did not notice either cross-link on the Medications Page during Task 1; P7 was on the page and did not see it without moderator prompting |
| "Go to your in-progress medications" (on Lipitor med card) | P7 | P7 did not acknowledge or interact with the link on the Lipitor med card on the Medication History page; when probed, stated "I don't know what that is" |
| "Review and print list of medications" | P7, P8, P12 | P7 was on the Medications page talking about printing and PDFs for several minutes without noticing the link; P8 needed moderator direction; P12 did not notice it during Task 1 |
| "Refill medications" (from other pages) | Multiple participants | Several navigated via secondary nav or landing page instead of using the cross-link |

**Quotes:**

> **P7** was on the Medications page with the "Review and print list of medications" link visible on screen for several minutes, talking about printing and PDFs, and *still did not notice the link.*

> **P8:** "Go to your in-progress medications. Now I'm confused, because I'm not sure what that one means."

> **P12** did not notice the "Go to your in-progress medications" link or the "Review and print list of medications" link on the Medications Page at all during Task 1. The moderator had to redirect her to the MHV landing page to try a different path.

> **P7**, when probed about the "Go to in-progress medications" link on the Lipitor med card: "I don't know what that is... I'm guessing that means you've placed the order."

> **P8** on the distinction between links: "Maybe I have it wrong, but refill medication basically tells me the same thing, that if it's a refill medication, then I go into it. And it'll show me what refills are available or not."

#### Part C: When cross-links are missed, users take inefficient paths or abandon the task

When users didn't notice the cross-links, they employed these recovery strategies:

1. **Backtracking to the MHV landing page.** P5, P7, P12, P13, P16 all went back to the landing page at some point to start over with a different link.
2. **Using secondary nav or breadcrumbs.** P4, P7, P13, P16 used these as alternatives, sometimes landing back on the same page they started on.
3. **Abandoning the digital experience entirely.** P7, P12, P15 said they would call the pharmacy or send a secure message when they couldn't find information. P4 also said she would message her doctor about the old medication rather than use the filters to find it.

> **P12's** immediate reaction when she couldn't find Lipitor on the Medications Page was to say she would go to "Messages" to contact the pharmacy, not to look for another way to navigate within the medications experience.

> **P15:** "Actually, I wouldn't, I probably wouldn't go here. I would probably look on the bottle. Call to the pharmacy and tell them what the situation is."

> **P4** stated she would go to Messages to ask her doctor about an old medication rather than use the filters to find it.

#### Part D: When users DID notice cross-links, navigation was smooth

The cross-links work well when users see them. The problem is visibility, not functionality. 3 of 9 participants (P4, P13, P1) noticed cross-links relatively quickly during Task 1 and navigated efficiently.

> **P4** quickly noticed the "in-progress medications" link below the heading and clicked it, completing Task 1 efficiently.

> **P13** quickly found the "Review In-Progress Medications" link and clicked it with minimal friction.

> **P1** noticed the "Go to your in-progress medications" link after scanning the Medications Page and used it to find Lipitor.

#### Part E: The success alert was the most reliable pathway to the In-Progress page

All 7 participants who submitted a refill in Task 3 (P1, P4, P5, P8, P12, P13, P16; P7 excluded due to screen freeze, P15 did not complete Task 3 as designed) noticed the green success alert, and 6 of 7 (P1, P5, P8, P12, P13, P16) clicked the "Go to your in-progress medications" link within it. This is a significantly higher engagement rate than the static cross-links on the Medications Page. In Task 5, 4 of 6 participants (P5, P12, P13, P16) similarly used the success alert or the in-progress medications link to verify their bulk refill submissions.

**Why it works:** The success alert appears at the moment a user is most motivated to check status — right after taking an action. It's contextual, timely, and visually prominent.

> **P1:** Clicked the link in the success alert, landed on the In-Progress page, and stated "this is exactly what I would be hoping to see."

> **P16:** "Just wanting to make sure that there's no glitch in system, I would probably click on that in-progress medication."

> **P13** clicked the link to check status and said "Like I said, I want to make sure I know what's coming, when it's about to be filled. I try to stay on top of my mail."

**Implication:** The success alert pattern (contextual, appears at moment of motivation, visually distinct) should inform how other navigational pathways are designed.

#### Wayfinding recommendations

| Priority | Recommendation | Rationale |
|---|---|---|
| Must fix | Increase visual prominence of cross-links significantly | Current text link treatment is not being seen; P12 specifically suggested making "the blue section" bigger |
| Must fix | Consider button-style treatment instead of text links | Buttons have higher visual weight and clearer affordance |
| Should consider | Add contextual guidance when users land on a page that may not have what they need | E.g., if Medications Page shows 0 results, prompt user toward Medication History or In-Progress |
| Should consider | Evaluate whether link labels clearly communicate destination | "In-progress medications" was not intuitive; "Review and print list of medications" was clearer |
| Future | Consider whether the three-page architecture needs clearer orientation | Users don't arrive understanding the structure; onboarding or persistent navigation could help |

---

### Critical Finding 2: The "Update list" filter button causes silent failures

**Severity: High, fix before implementation**

7 of 9 participants failed to click "Update list" after selecting a radio button filter at least once during the session. They believed the list had changed when it had not. This is a silent failure: users proceeded with confidence based on incorrect information.

| Participant | Task | What happened |
|---|---|---|
| P1 | Task 3 | Initially forgot to click "Update list," noticed list didn't change, self-corrected: "I keep forgetting that update list" |
| P4 | Tasks 3 and 4 | Selected filters but never clicked "Update list"; believed she was viewing filtered results when she was not |
| P5 | Task 2 | Selected "Inactive medications" but could not locate "Update list" button even after moderator instruction |
| P8 | Task 2 | Missed button twice; moderator had to direct him to click it both times |
| P12 | Tasks 2 and 4 | Selected "Inactive medications" but did not click "Update list"; then selected different filter and did click it, but wrong filter for task |
| P15 | Task 2 | Selected "Inactive medications" but did not click "Update list"; appeared confused as to why list did not change |
| P16 | Tasks 2 and 4 | Selected "All medications" without clicking "Update list"; saw default list instead of selected view |

**The most telling case:** P4 selected "Renewal needed before refill" in Task 3 but never clicked "Update list." The list stayed on Active medications (the default), and Metformin happened to be visible because Active was the default view. P4 believed her filter had been applied correctly, so the error was invisible. If the filter had been applied, Metformin would not have appeared in the "Renewal needed" list, masking a conceptual misunderstanding about refill vs. renewal.

**User expectation:** P8 expected the list to update automatically: "I think the list should popup/change when he chooses 'All meds' without clicking the button."

**Repeat offenders:** P4 and P12 missed the button across multiple tasks, suggesting this is not a learning curve issue but a fundamental pattern expectation mismatch. P16 also missed it across Tasks 2 and 4.

**Downstream risks:**
- **Task 2 (find old medication):** 4 of 9 participants (P5, P8, P12, P15) who attempted to use the filter did not apply it correctly, leading some to believe the rash cream wasn't in the system because they thought they had filtered to Inactive medications when they had not.
- **Task 4 (print medications list):** 3 of 8 participants (P4, P12, P16) selected filters but did not apply them, meaning the list they intended to print did not reflect their selection. A user could bring an incomplete or inaccurate medication list to a doctor's appointment.

**Recommendation:** Consider auto-applying filters on radio button selection (this matches user expectation). If a manual apply button must remain, make it visually unmissable — e.g., a prominent button that changes state when a new radio button is selected, or disable the list view until the user confirms their selection.

---

## Important findings (fast follows)

### Finding 3: The "Too early to refill" grey card needs timing information

**Severity: Medium**

All 9 participants who encountered the grey card correctly understood its meaning. 5 of 9 participants (P1, P4, P7, P13, P15) expressed trust that the VA would automatically process and ship the medication once eligible. However, 3 participants (P1, P8, P16) explicitly wanted more timing specificity, such as an expected refill eligibility date or delivery window.

- P1: "It's kind of reassuring that once we're able to, we'll ship... we'll ship these medications to you, you don't have to do anything. So, I like that part." P1 also suggested it would be helpful if the grey card included an estimated date for when he can expect to receive the medication.
- P8: "It's too early to refill... we will expect it to be refilled between a certain date and a certain date."
- P16: "So depending on when I submitted that, December 20th, depending on what today is, if it's within 7 days, I'm gonna give it 7 days and then start calling and following up to figure out where it is."

Notably, P1 expressed both trust in the automatic process and a desire for a projected date, suggesting these sentiments are not mutually exclusive.

**Recommendation:** Add estimated eligibility date or refill window to the grey card to reduce uncertainty and prevent users from calling the pharmacy for status updates.

---

### Finding 4: The print feature has discoverability and labeling issues

**Severity: Medium**

**Discoverability:** The print feature is located at the bottom of the Medication History Page, below the medication list. 5 of 8 participants who attempted Task 4 had difficulty finding it (P7 excluded due to screen freeze). The print feature's placement below a potentially long medication list means Veterans must scroll through every entry before discovering it.

- P12 missed it entirely and said she would right-click to print instead. After the moderator directed her to it, she stated the print feature "did not pop out to her."
- P15 scrolled the page and initially could not find it: "Let's see, is there a print capability in this? Don't see it."
- P4 scrolled to the bottom looking for it: "I would look for the print... which I don't see. Let me go down to the bottom. Oh, there it is!"
- P5 stated he would not normally scroll to the bottom of the page to print and would instead use the browser print function.
- P8 scrolled to the bottom of the list looking for a way to print and found it, but stated he would not normally print because he expects his doctor would already have this information.

Of the 8 participants who attempted the task, 3 (P1, P13, P8) found the print feature with relative ease, while 5 (P4, P5, P8, P12, P15) had notable difficulty.

**Labeling:** P16 was confused by the "Submit" button within the print dropdown: "I assume that the submit was to submit the print request, but I don't know that an older veteran would understand that." P4 viewed print options and selected "Download PDF" before clicking "Submit."

**Active vs. All ambiguity:** Participants were split on which filter represented their "current medications" for printing. 5 of 8 selected "Active medications" (P1, P5, P8, P12, P15) while 3 of 8 selected "All medications" (P4, P13, P16), often to be thorough or because they wanted their doctor to see the full picture. P16 explained: "Yeah, because I want them to see what I was on... just for me being thorough, I would probably do that so he has the history." P16 also noted it depends on the goal: if only bringing current medications, would select Active; if wanting to be thorough, would print all.

**Compounding risk:** When combined with the filter activation issue (Finding 2), there is a risk of users printing the wrong list. In Task 4, 3 of 8 participants (P4, P12, P16) selected filters but did not click "Update list," meaning any printout would not reflect their intended selection.

**Recommendation:** Consider moving the print feature higher on the page or making it persistent. Relabel "Submit" to "Print" or "Download."

---

### Finding 5: The grey "Too early to refill" card's visual treatment may cause it to be overlooked

**Severity: Medium**

The grey card's muted styling made it easy to miss on the In-Progress Medications Page. While all 9 participants who encountered the card correctly interpreted its meaning, 3 of 9 (P1, P8, P13) had difficulty initially locating it on the page, scrolling past it before realizing it was there.

- P1 scrolled past the grey Lipitor card on his first pass through the In-Progress Medications page: "Oh, wait, yeah, Lipitor is there. Oh my god, I missed it. Wow, maybe I need to put on my extra goggles."
- P1 also noted: "Request submitted. Okay, so these are probably the medications that I've already submitted for. These are the ones that are in progress, and these are the ones that are heading to me, so that's helpful, but I still don't see my Lipitor." — indicating the grey card's visual separation from the colored status groupings contributed to it being overlooked.
- P13 attempted to scroll down to find Lipitor and initially had difficulty (partly due to prototype scrolling issues) but eventually located it.
- P8 found Lipitor on the In-Progress page but only after first navigating to other pages; the grey card was not immediately visually prominent to him.

**Recommendation:** Evaluate contrast and prominence of grey cards relative to other content on the In-Progress page. Consider whether the "no action needed" status requires different visual treatment to ensure it is not skipped while maintaining its semantic distinction from active progress states.

---

### Finding 6: The term "in-progress medications" is not intuitive before users experience the page

**Severity: Medium**

Users understood the In-Progress page once they arrived, but the label "in-progress medications" did not clearly communicate what they would find there. 2 of 9 participants (P7, P8) explicitly expressed confusion about the term before clicking the link.

- P8: "Go to your in-progress medications. Now I'm confused, because I'm not sure what that one means."
- P7, when probed about the link: "I don't know what that is... I'm guessing that means you've placed the order."
- P8 had difficulty distinguishing between "refill" and "in-progress": "Refill medication basically tells me the same thing..."

Once users saw the page, they reacted positively. 7 of 8 participants who viewed the page (P7 excluded due to screen freeze) correctly interpreted the content:
- P7 (after moderator navigated to the page): "Oh, well, that's nice. Because when I've called, sometimes I'm not sure, did I place this order? So that's good, so I can check it on my own."
- P8: "Immediately, the first thing I thought of when I saw in-progress medications is, We're working on it."
- P12: "This lets me know everything I need to know at the present time."

**Recommendation:** Consider more descriptive link text (e.g., "Track your refill requests" or "See refill status"). The current label requires users to already understand the concept it describes.

---

## Positive findings

### The In-Progress Medications page is conceptually sound

7 of 8 participants who viewed the page correctly interpreted the three-phase tracker (P7 excluded due to screen freeze). The 7 participants who interpreted the statuses were P1, P4, P8, P12, P13, P15, and P16. Users valued the page and found it helpful.

- P8: "Immediately, the first thing I thought of when I saw in-progress medications is, we're working on it."
- P12: "This lets me know everything I need to know at the present time."
- P13: Uses it to confirm what he's requested and track status of each order.
- P15: "It tells me which ones I've already requested, and it has been submitted... And then it tells me if the fill's in progress, so it tells me what's on the way... tells me which ones, if any, have been already, shipped."

**The three statuses were understood:**
- **Request submitted:** Understood consistently by all 7 participants who viewed it. P8: "Medication may not be here yet, but I know they're working on it." P15: "It tells me which ones I've already requested, and it has been submitted."
- **Medication shipped:** Understood consistently. P16: "This one's already been shipped. And if it's within a few days of that, then I can go in there and get my tracking info."
- **Fill in progress:** Least clear of the three; P8 said "I don't know if I'm acquainted with this" and P13 interpreted it loosely as "medications that will arrive soon." P15 interpreted it as "what's on the way." P16 interpreted it as an auto-ship.

### The refill workflow is strong

7 of 8 participants who attempted Task 3 successfully refilled Metformin (P1, P4, P5, P8, P12, P13, P16; P7 excluded due to screen freeze). P15 did not complete the task as designed due to task comprehension — he stated he would call the pharmacy rather than use the refill flow — but when the moderator redirected him, he demonstrated understanding of how to select a medication and click the refill button.

- P4: "Oh, well, how wonderful it is, instead of having to hunt for it. I like that it's up front."
- P8: "This is in the territory I'm acquainted with because I do this all the time."
- P13 immediately saw Metformin, checked the box, and also noticed other medications that appeared to be running low.
- P16: "That would be my first thought, is to just click all three."

The green success alert was universally effective among the 7 participants who submitted a refill:
- All 7 (P1, P4, P5, P8, P12, P13, P16) noticed the green success alert.
- P16: "Says it's good so it's not too early."
- P4 felt "very very confident" she successfully submitted a refill.
- P5: Feels "fairly confident 80-90%" the refill was submitted, but doesn't want to be 100% confident in case the request gets "dropped."

### The bulk refill flow is intuitive

All 6 participants who completed Task 5 (P4, P5, P8, P12, P13, P16; P1 and P15 excluded as task was added after their sessions; P7 excluded due to screen freeze) successfully used the "Select all" checkbox and "Request refills" button. No one required help understanding the pattern.

- P4: "I like the button that says you can select all three of them instead of going through each individual one."
- P8: "If I see anything else while I'm doing this, I'd click on that as well. That's why I like the list because there might be things there I didn't think of."
- P16: "That... that would be my first, thought, is to just click all three."

After submission, 4 of 6 participants (P5, P12, P13, P16) used the success alert or navigated to the In-Progress page to verify their bulk submissions appeared.

### Filter category comprehension was solid

Users accurately defined Active, Inactive, All, and Renewal needed when asked. The problem is the mechanical interaction (the "Update list" button), not the conceptual model. In Task 2, 7 of 9 participants (P1, P5, P7, P8, P12, P15, P16) correctly identified "Inactive medications" as the right filter for finding an old medication, though 3 of 9 (P1, P13, P16) ultimately chose "All medications" as a safer option.

- P1: Active = "medications I'm taking right now or medication that has at least 1 refill remaining." Inactive = "medications that have expired or maybe I'm no longer using."
- P8: Active = "what they're currently sending, and I can just click on to get it sent." Inactive = "stuff I don't take anymore." All = "the whole list, all active renewal, whatever, maybe something I took a couple of years ago."
- P16 (on choosing "All" over "Inactive" in Task 2): "Just didn't know what it was and I didn't want to miss it."

### After finding old medications, Veterans know next steps

5 of 9 participants who located the inactive rash cream in Task 2 (P4, P5, P8, P12, P16) understood they could not take action on it directly and would need to contact their doctor through messaging or at an appointment. P13 also demonstrated next-step understanding but was counted separately in the task-analysis as he arrived at the medication via the "All medications" filter rather than "Inactive."

- P5: Would either call his doctor or go to "Messages" to send a message requesting more of the cream.
- P13: "So, now I know the name. What I would do is I would write it down in my phone and email it to myself so that I had the name and whatever dosage, last filled date."
- P16: "Probably would just print this list and bring it to the doctor and would highlight the cream or circle it in pen."

---

## Contextual finding: Users' existing habits shape their expectations

Participants brought established routines from their current medication management practices that influenced how they navigated the new pages.

**Expectation of a single medications list:** Multiple participants (at least 3 of 9: P1, P7, P12) expected "Medications" or "Refill VA medications" to show them everything, not a filtered subset.
- P1 was surprised the Medications Page only showed refillable medications.
- P7: "That's what I don't like. When there's no refills left, it takes it out of your list."

**Default to non-digital channels when stuck:** When users encountered friction, their first instinct was often to leave the digital experience. 4 of 9 participants (P4, P7, P12, P15) expressed they would use non-digital or messaging channels as their primary fallback.
- P12's immediate reaction to not finding Lipitor was to message the pharmacy.
- P15 stated he would call the pharmacy for an urgent refill.
- P4 said she would message her doctor to ask about an old medication.
- P7 uses VA.gov at least 2 times per month but still calls to refill.

**Reliance on familiar cues:** Users gravitated toward information they recognized from current experience.
- P7 and P16 used "last filled" date as their primary status indicator.
- P16 interpreted the Lipitor grey card through auto-refill logic he was familiar with.

**Learnability appears high:** P8 noted he understood it wouldn't make sense to find Lipitor on the refills page but "didn't realize at first. Learned from using the app." P4 stated "I think once you understand how it works, it's very easy to use." P12 described the session as a "learning experience" and noted she'd never looked for some of the features before despite 10 years of use.

---

## Hypotheses evaluated

| Hypothesis | Supported? | Notes |
|---|---|---|
| Most Veterans will find and understand in-progress medication status | Partially | Understood once there (7 of 8 who viewed it); getting there was inconsistent (6 of 9 started on wrong page in Task 1) |
| Most Veterans will understand different progress states and what happens next | Yes | Request submitted, Fill in progress, Shipped all understood (7 of 8 who viewed the page; P7 excluded due to screen freeze) |
| Veterans will use navigation cues, links, filtering, and sorting | Partially | Used when noticed; cross-links missed by 3 to 4 participants per task; "Update list" missed by 7 of 9 at least once |
| Most Veterans will locate medications when they don't know the name | Partially | Task 2 required moderator intervention for some; 4 of 9 did not apply filter correctly (P5, P8, P12, P15) |
| Veterans can determine whether they can request more from list view | Yes | Medication cards provided this information via "Refills remaining" and refill button |
| Most Veterans will complete a refill request and understand what happens | Yes | 7 of 8 completed successfully (P15 exception due to task comprehension; P7 excluded due to screen freeze) |
| Most Veterans will find a complete list of current medications | Partially | Filter issues (4 of 9 in Task 2; 3 of 8 in Task 4 did not apply filter) and Active vs. All ambiguity (5 of 8 Active vs. 3 of 8 All in Task 4) created risk of incomplete lists |
| Veterans will recognize list can be printed/shared | Partially | Print feature not discoverable for 5 of 8 participants in Task 4 |

---

## Recommendations by priority

### Must address before implementation

| Issue | Recommendation | Finding |
|---|---|---|
| Cross-links not prominent enough (missed by 3–4 participants per task) | Increase visual prominence significantly; consider button-style treatment | Critical 1 |
| Users start on wrong page with no clear recovery path (6 of 9 in Task 1) | Add contextual guidance when a page may not have what user needs; improve link labels | Critical 1 |
| "Update list" causes silent failures (7 of 9 missed at least once) | Auto-apply filters or make button unmissable | Critical 2 |

### Fast follows (post-implementation)

| Issue | Recommendation | Finding |
|---|---|---|
| "Too early to refill" lacks timing (3 of 9 wanted a date) | Add estimated eligibility date | 3 |
| Print feature hard to find (5 of 8 had difficulty) | Move higher on page; relabel "Submit" to "Print" | 4 |
| Grey card may be overlooked (3 of 9 initially missed it) | Evaluate contrast and prominence | 5 |
| "In-progress medications" label unclear (2 of 9 confused before clicking) | Consider more descriptive link text | 6 |

### Future iterations

- Evaluate whether the three-page architecture needs clearer orientation or onboarding
- Monitor whether users continue to default to calling or messaging when they encounter friction (4 of 9 in this study)
- Consider persistent navigation that shows users where they are in the medications experience

---

## Overall sentiment

Despite wayfinding challenges, 8 of 8 participants who completed the full session (P7 excluded due to screen freeze) responded positively overall:

> **P1:** "Very intuitive... I am being given enough information to make a decision. Very pleasant experience, very good."

> **P4:** "I'm a technophile, and I love when things are done in decency and in order. This is really great."

> **P13:** "Fairly easy... this is all standard. This is more or less what I do every month when I'm looking at what meds I need. It's active medication management."

> **P15:** "It's very similar to what I'm used to using. Seems to be pretty intuitive."

> **P8:** "Really happy with what you did... I think that the VA, when they start working on a program like this, they also need to think of the elderly veterans, not the younger veterans, but the elderly as well."

> **P12:** "It wasn't difficult at all. As a matter of fact, it was a learning experience for me. Some of the things you went over, or tried to make me look for, I've never looked for before."

> **P16:** "I've really enjoyed being able to not have to call and submit prescriptions, or do the automated telephone number where you have to enter your prescription number. It's so much easier to go on the app."

---

## Participant characteristics

| ID | Primary method | Years using VA for meds | Refill frequency | Notable |
|----|---------------|------------------------|-----------------|---------|
| P1 | VA.gov (laptop) | ~2 | Weekly buffer check; refills as needed | Sets Outlook reminders; prefers laptop as more "official" |
| P4 | VAHB + VA.gov | 10 | Every 3 months | Self-described "technophile"; found interface clear |
| P5 | VA.gov | ~15 | Every 3 to 6 months (online and in-person) | Limited exploration; takes regular meds only |
| P7 | Phone calls | Not specified | ~1x per month | Uses VA.gov at least 2x per month but calls to refill; screen froze during Task 3 — Tasks 3–5 not completed |
| P8 | VA.gov | ~5 | Every 3 to 4 weeks | Wants one-stop service through VA; outside provider is a hassle |
| P12 | Secure messaging | ~10 | Every 90 days | Ongoing meds only; uses VA for hospitalization and prescriptions |
| P13 | VAHB app | Not specified | Monthly | Checks app weekly; ~95% of app use is for refills; hurricane withdrawal experience |
| P15 | VA.gov | ~10 | Every 3 months | Previously used MHV Classic |
| P16 | VAHB app | Since 2018 | ~3x per year (every 3 months) | Switched from calling to MHV to app over time |
