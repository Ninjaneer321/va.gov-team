# Topline Findings: Medications Management Improvements

---

## Study Overview

**Method:** Moderated usability testing (9 sessions)
**Participants:** P1, P4, P5, P7, P8, P12, P13, P15, P16
**Note:** P7's screen froze during Tasks 3-5; P1 did not complete Task 5 (added after their session); P15 did not complete Task 5.

---

## Finding 1: The 'In-progress medications page' is conceptually clear, once users get there

**Bottom line:** Users who reached the In-Progress Medications page generally understood the three-phase tracking system (Request Submitted → Fill in Progress → Medication Shipped) and found it valuable. The real challenge is *getting* users there in the first place.

**7 of 8 participants** who viewed the In-Progress page correctly interpreted the status phases and mapped them to a logical mental model of medication processing:

> **P8:** *"Immediately, the first thing I thought of when I saw in-progress medications is, We're working on it."*

> **P13:** *"It's right there in front of me, request submitted."* He assumed the medication would arrive within 3-4 days, indicating he understood the pipeline.

> **P16:** *"I'm confident it went through, and until it drops down here on the shipped label, I'm mildly confident it's going through the steps."*

> **P12:** *"This lets me know everything I need to know at the present time."*

The **"Too Early to Refill" grey card** was also well understood by most. Users correctly interpreted it as meaning their request was acknowledged but the medication wasn't eligible yet and would ship automatically:

> **P1:** *"It's kind of reassuring that once we're able to, we'll ship these medications to you, you don't have to do anything. So, I like that part."*

> **P13:** *"I guess I requested it too soon. Because I... According to the prescribed dosages and everything that the pharmacist calculates, I shouldn't have run out of that medication yet, so When that calculation is made, and that date is hit, they'll ship it out."*

> **P4:** *"So, they're not gonna send it... they're not gonna ship it yet. I don't need to do anything, because it's already in progress."*

### Where it breaks down

- **P8** found the grey card language *"confusing"* and suggested the design should include an estimated refill window so users know when to expect their medication.
- **P1** similarly suggested the grey card should include an estimated date for when he can expect to receive the medication.
- **P7** did not know what "in-progress medications" meant until the moderator walked her through it. She reacted positively (*"Oh, well, that's nice"*) but would not have found it on her own.

**Implication:** The In-Progress page works well as a conceptual model. The problem is discoverability, not comprehension. (See Finding 3.)

---

## Finding 2: Removing In-progress statuses from medication cards is viable, with caveats

**Bottom line:** This research provides *moderate* support for removing in-progress status labels from individual medication cards, but only if the navigational pathways to the In-Progress page are strengthened significantly.

Users did not rely on or expect in-progress status labels on individual cards. When users found a medication card (e.g., Lipitor on the Medication History page), they noted **"Last filled" date** and **"Refills remaining"** as their primary status indicators, not a status label.

> **P5** interpreted the Lipitor card and noted there was not much he could do from there and said he would *"just leave the website and come back another time."*

> **P16** found the Lipitor card on the Medication History page and called out specific medication progress information: *"1 refill is too early to fill..Refill remaining 2, last filled date"* and stated that based on the last filled date he knew it was filled recently.

When users needed to understand *where* a medication was in the processing pipeline, the In-Progress page gave them what they needed in a way that card labels could not:

> **P8:** *"It says submitted December 13-25, let's say that I... I did submit it on December 13-25, and it says 2 ready to refill, no action needed. I wouldn't... I would just go on to something else, because I already know that when it tells me no action needed, that means it's already on the computer to be shipped to me."*

> **P7** (after seeing the In-Progress page for the first time): *"When I've called, sometimes I'm not sure, did I...I've asked the pharmacist, you know, I don't know, did I place this order, you know? So that's good, so I can check it on my own."*

### The critical caveat

Removing labels only works if users can reliably find the In-Progress page. Currently, they can't. If labels are removed *and* users can't find the page, there will be a significant information gap.

> **P12** did not see Lipitor on the Medications page and immediately said she would go to "Messages" to contact the pharmacy. This suggests that when status isn't easy to find, users turn to support channels instead.

**Recommendation:** Proceed with removing in-progress statuses from medication cards, **but pair this change with significant improvements to In-Progress page discoverability.**

---

## Finding 3: Cross-link navigation is the biggest usability risk

**Bottom line:** The text-based cross-links ("Go to your in-progress medications," "Review and print list of medications," "Refill medications") that serve as the *primary* mechanism for moving between pages were frequently overlooked, misunderstood, or ignored. This is the single most critical finding in the study.

### How often users missed the links

| Link | Missed/Ignored by | Noticed and used by |
|---|---|---|
| "Go to your in-progress medications" | P1 (initially), P7, P12 (initially) | P4, P8, P13, P15, P16, P5 (via success alert in Task 3) |
| "Review and print list of medications" | P8 (needed mod direction), P12 (needed mod prompting) | P4, P5, P7 (eventually, after several minutes), P13, P15, P16 |
| "Refill medications" (from other pages) | Several navigated via secondary nav or landing page instead | P8 |

### What happened when users missed them

Users who didn't notice the cross-links resorted to going back to the MHV landing page to start over (P7, P12, P16, P13), using the secondary nav or breadcrumbs (P4, P7, P13, P16), or saying they would call the pharmacy or send a secure message (P7, P12, P15).

> **P7** was on the Medications page with the "Review and print list of medications" link visible on screen for several minutes, talking about printing and PDFs, and *still did not notice the link.*

> **P8** expressed confusion about the difference between links. About refill medications, he said: *"Maybe I have it wrong, but refill medication basically tells me the same thing, that if it's a refill medication, then I go into it. And it'll show me what the, what refills are available or not."* Separately, about the in-progress link, he said: *"Go to your progress medications. Now I'm confused, because I'm not sure what that one means."*

> **P12** did not notice the links on the Medications page at all during Task 1 and had to be redirected by the moderator.

### When users *did* notice them, navigation was smooth

> **P4** quickly noticed the "in-progress medications" link below the heading and clicked it, completing Task 1 efficiently.

> **P13** quickly found the "Review In-Progress Medications" link and clicked it with minimal friction.

### The success alert was the most consistent pathway to the In-Progress page

All 7 participants who submitted a refill noticed the green success alert. Of those 7, 6 clicked the "Go to your in-progress medications" link within it (P1, P5, P8, P12, P13, P16). P4 saw and understood the alert as confirmation but did not click the link, staying on the page instead. This is a significantly higher engagement rate than the page cross-links, which were missed or ignored by multiple participants across tasks. The success alert works because it appears at the moment a user is most motivated to check status, right after taking an action.

> **P1:** Clicked the link in the success alert, landed on the In-Progress page, and stated *"this is exactly what I would be hoping to see."*

> **P16:** *"Just wanting to make sure that there's no glitch in system, I would probably click on that in-progress medication."*

> **P13** clicked the link to check status and said *"Like I said, I want to make sure I know what's coming, when it's about to be filled. I try to stay on top of my mail."*

**Implication:** The cross-links in their current visual treatment (blue text links within page content) are not prominent enough to serve as the primary navigation mechanism. The success alert pattern, where a link appears in context right after the user takes an action, should inform how other navigational pathways are designed. Consider making cross-links more visually prominent, especially for the older veteran population.

> **P12** specifically called this out: *"Like this, the blue section, if you can make that bigger? You know, most people are probably older now, and we really can't see anything."*

---

## Finding 4: The filter/radio buttons are understood, but the "Update list" button causes consistent silent failures

**Bottom line:** Users understood what the filter categories meant, but the two-step interaction pattern (select radio button → click "Update list") caused repeated errors that went undetected by participants.

**At least 7 of 9 participants** failed to click "Update list" at some point after selecting a radio button filter. In most cases, they believed they had successfully filtered when they had not.

| Participant | Missed "Update list"? | Consequence |
|---|---|---|
| P1 | Yes (Task 3, initially) | Noticed list didn't change, then self-corrected |
| P4 | Yes (Tasks 3 & 4) | Believed she was viewing filtered results when she was not |
| P5 | Yes (Task 2) | Needed moderator instruction to locate button |
| P8 | Yes (Task 2, twice) | Missed button twice; moderator had to direct him to click it |
| P12 | Yes (Task 2) | Incorrectly believed inactive meds were showing |
| P15 | Yes (Task 2) | List did not change; appeared confused |
| P16 | Yes (Tasks 1 & 4) | Did not apply filter; saw default list instead of selected view |

> **P4** is the most telling case: She selected "Renewal needed before refill" but never clicked "Update list." The list stayed on Active medications, and Metformin happened to be visible. She interpreted this as confirmation that she had filtered correctly. This is a **silent failure** where the user believes the system worked when it did not.

> **P1:** *"I keep forgetting that update list."*

> **P8** expected the list to update automatically when selecting a radio button, without needing to click a separate button. He missed the button twice during Task 2, and the moderator had to direct him to click "Update list" each time.

### Filter category comprehension was solid

When asked what the filter categories meant, users were generally consistent and accurate:

- **Active medications:** Current medications being taken now *(understood by all asked)*
- **Inactive medications:** Old medications no longer being taken *(understood by most)*
- **All medications:** Complete history *(understood by most)*
- **Renewal needed before refill:** Needed doctor involvement *(understood with some confusion)*

> **P1:** Active = *"medications I'm taking right now or medication that has at least 1 refill remaining."* Inactive = *"medications that have expired or maybe I'm no longer using."*

> **P8:** Active medications = *"Active medications is what they're currently sending, and I can just click on to get it sent."* Inactive medications = *"inactive medications, stuff I don't take anymore."* All medications = *"I just need the whole list, all, all active renewal, whatever, maybe something I took a couple of years ago, all would be included in all medications."*

**Implication:** Consider auto-applying filters on radio button selection, or at minimum making the "Update list" button more prominent. The silent failure mode is particularly dangerous because users won't know to seek help.

---

## Finding 5: Two distinct navigation strategies emerged

**Bottom line:** Users split into two camps: those who used MHV landing page links as their entry point, and those who used the secondary navigation bar. Both eventually led to task completion, but the landing page links created more direct paths.

**Strategy 1: MHV Landing Page Links.** Most participants started from the landing page. "Refill VA medications" was selected for action-oriented tasks; "Review medications" was selected for information-seeking tasks.

> **P1** gravitated toward "Refill VA medications" because *"I anticipate that if I click on it, it will give me all of my medications, and hopefully the ones that, might need... are probably pending in that regard."* He was surprised when it only showed refillable ones.

**Strategy 2: Secondary Navigation / Breadcrumbs.** Several participants (P4, P13) defaulted to the "Medications" tab, which landed them on the refillable meds page and required cross-links to navigate further.

> **P13:** *"Well, I'd... what I would start off, I always go back to medications."*

### Common struggles

1. **Confusion between the Medications page (refillable only) and Medication History page (all meds).** Multiple participants expected the Medications page to show everything.

2. **Falling back to non-digital channels when stuck.** When users couldn't find information, their instinct was to call or message rather than explore further.

> **P15:** *"Actually, I wouldn't... I probably wouldn't go here. I would probably, look, on the bottle. Call to the... call to the pharmacy and tell them what the situation is and get their help in getting a new prescription."*

---

## Finding 6: The refill workflow was the strongest part of the experience

**Bottom line:** Requesting refills (both single and multiple) was the most intuitive and successful workflow. Users who reached the Medications page completed refill tasks with high confidence and minimal friction.

**All participants who attempted Task 3** (7 of 9) successfully located and refilled Metformin. The checkbox + "Request refills" button pattern was immediately understood.

> **P8:** *"This is in the territory I'm acquainted with because I do this all the time."*

The green success alert was universally noticed and understood:

> **P4:** Felt *"very very confident"* she successfully submitted a refill.

> **P16** saw the green success confirmation and stated *"Says it's good so it's not too early."*

The "Select all 3 refills" checkbox for bulk refills was discovered and appreciated:

> **P4:** *"I like the button that says you can select all three of them instead of having to go through each individual one."*

> **P16:** *"That... that would be my first, thought, is to just click all three."*

**Implication:** This workflow can serve as a design model for other pages. The key ingredients: a clear action button, immediate confirmation, and a link to check status.

---

## Finding 7: The print/download feature works but has discoverability issues

**Bottom line:** Users who found the print feature at the bottom of the Medication History page could use it, but its placement at the very bottom of a long page means several participants almost missed it.

> **P12** could not find it even after scrolling. The moderator had to direct her to the specific location. P12 stated the print feature *"did not pop out to her."*

> **P15** scrolled up and down and initially couldn't find it: *"Let's see, is there a print capability in this? Don't see it."*

> **P16** was confused by the "Submit" button label: *"I assume that the submit was to submit the print request, but I don't know that an older veteran would understand that you're submitting a print request. They may be looking for a button that just says print."*

> **P5** stated he would not normally scroll to the bottom of the page to print and would instead use the browser print function.

**Implication:** Consider moving the print feature higher on the page or making it persistent. Change the "Submit" button label to "Print" or "Download."

---

## Summary of key recommendations

| # | Finding | Confidence | Recommended action |
|---|---|---|---|
| 1 | In-Progress page is conceptually sound | **High** (7/8 understood) | Keep three-phase model; add estimated dates to "Too early" cards |
| 2 | Removing in-progress status from med cards is viable | **Moderate** (contingent on #3) | Proceed, but only alongside navigation improvements |
| 3 | Cross-links are frequently missed | **High** (6+ participants) | Increase visual prominence; consider button-style treatment; use the success alert pattern as a model |
| 4 | "Update list" button causes silent failures | **High** (7/9 failed at least once) | Auto-apply filters or make button unmissable |
| 5 | Two distinct navigation strategies exist | **Moderate** | Support both pathways equally |
| 6 | Refill workflow is strong | **High** (all who attempted succeeded) | Use as design model; no major changes needed |
| 7 | Print feature is hard to find | **Moderate** (3-4 struggled) | Move higher on page; relabel "Submit" to "Print" |

---

## Participants at a glance

| ID | Tech comfort | Primary method | VA meds experience | Notable characteristic |
|---|---|---|---|---|
| P1 | High (laptop) | VA.gov via laptop | ~2 years | Color-oriented; appreciates visual progress indicators |
| P4 | High ("technophile") | VAHB + VA.gov | 10 years | Found interface "clear and concise" |
| P5 | Moderate | VA.gov | ~15 years | Prefers simplicity; limited exploration |
| P7 | Lower | Phone calls | Not specified | Conceptualizes refills through call-in model; screen froze mid-session |
| P8 | Moderate | Va.gov | ~5 years | Wants simplification for elderly veterans |
| P12 | Moderate | VA.gov (secure message) | ~10 years | Familiar with MHV; missed several UI elements |
| P13 | High (app) | VAHB | Not specified | Active medication manager; checks weekly |
| P15 | Moderate | VA.gov | ~10 years | Prefers calling pharmacy for urgent needs |
| P16 | High (app) | VAHB | Since 2018 | Thorough verifier; checks in-progress after every action |

---

*This is a preliminary topline. A full analysis would include affinity diagramming of all quotes, severity ratings for each usability issue, and design-specific recommendations with annotated screenshots.*
