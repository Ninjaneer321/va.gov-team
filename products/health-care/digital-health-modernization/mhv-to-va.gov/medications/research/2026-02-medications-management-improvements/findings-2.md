# Topline Summary 2: Medications management improvements

9 Veterans participated in moderated usability sessions evaluating new medication management pages on MHV on VA.gov, including the Medications Page, Medication History Page, and In-Progress Medications Page. Sessions focused on wayfinding, comprehension of medication statuses, and whether users could move between pages to complete key tasks. P7's screen froze during the session, so Tasks 3-5 were not completed for that participant. Task 5 was added after P1 and P15 had already completed their interviews, so data for that task is limited to 7 participants.

---

## Finding 1: "Refill VA medications" on the MHV landing page was the most common first click across tasks, and it often sent users down the wrong path.

**Bottom line:** Across Tasks 1 and 2, most participants gravitated toward "Refill VA medications" from the MHV landing page as their starting point, regardless of whether the task involved refilling a medication or not. This routed them to the Medications Page, which only shows medications currently eligible for refill, creating an immediate dead end for tasks that required finding non-refillable medications.

In Task 1 (find refill status of Lipitor), **P1, P5, P7, P8, P12, P13, and P15** all selected either "Refill VA medications" or "Medications" from the 2nd nav bar. Lipitor was not listed on the Medications Page because it was too early to refill.

> **P1:** *"Because I anticipate that if I click on it, it will give me all of my medications, and hopefully the ones that might need... are probably pending in that regard."*

> **P7** appeared to interpret the Medications Page as a comprehensive list: *"That's what I don't like. When there's no refills left, it takes it out of your list."*

This pattern repeated in Task 2 (find an old rash cream). P8 navigated to the Medications Page first looking for a medication history:

> **P8:** *"I don't know why I wanted to go to records, but it's not as clear with medications. I'm not sure what it's going to tell me. It doesn't sound like medications you have gotten in the past."*

In Task 3 (refill Metformin), this default behavior actually worked in users' favor since Metformin was a refillable medication and did appear on the Medications Page. P8, P12, P13, and P16 all found Metformin quickly this way.

**Implication:** "Refill VA medications" appears to function as a primary entry point for users regardless of their actual task. When their task does not involve a currently refillable medication, this starting point creates an immediate dead end that requires recovery.

---

## Finding 2: Cross-links were the primary way users moved between pages, but they were not consistently noticed.

**Bottom line:** The text-based links ("Go to your in-progress medications," "Review and print list of medications," "Refill medications") were critical for helping users navigate between the three medication pages. When users noticed them, they worked well. When users didn't, they got stuck.

In Task 1, after landing on the Medications Page and not seeing Lipitor, **P1, P4, P8, P13, and P15** noticed the "Go to your in-progress medications" link and used it to recover. But **P5, P7, and P12** did not notice the link and instead went back to the MHV landing page to try a different entry point.

> **P12** did not notice the "Go to your in-progress medications" link or the "Review and print list of medications" link on the Medications Page at all.

In Task 2, **P13 and P15** used the "Review and print list of medications" link from the Medications Page to navigate to the Medication History Page. But P8 had difficulty locating it when the moderator directed him to it:

> **P8:** *"I don't have a whole lot of faith that this site will have all my medications, that's the problem."*

In Task 4 (print medications list), **P4, P5, P13, P15, and P16** all found and used the "Review and print list of medications" link. P8 hesitated and considered the "Medications" breadcrumb first before noticing the link.

The green success alert after submitting a refill in Task 3 also contained a "Go to your in-progress medications" link, and this was widely noticed and used by **P1, P4, P5, P8, P12, P13, and P16.**

> **P16:** *"Just wanting to make sure that there's no glitch in system, I would probably click on that in-progress medication."*

P12 suggested making the cross-links more prominent:

> **P12:** *"Like this, the blue section, if you can make that bigger? You know, most people are probably older now, and we really can't see anything."*

**Implication:** Cross-links are doing the heavy lifting for page-to-page navigation, but their current visual treatment is not prominent enough to be reliably noticed by all users. When users miss them, they either backtrack to the MHV landing page or leave the medications experience entirely.

---

## Finding 3: The radio button filter on the Medication History Page was repeatedly attempted but rarely applied successfully, creating a risk of silent failure.

**Bottom line:** Across all tasks that involved the Medication History Page, no participant consistently used the radio button filter as intended. The two-step interaction (select a radio button, then click "Update list") broke down repeatedly, and users believed the list had changed when it had not. This creates a silent failure with no error message or visual cue to alert the user.

The pattern repeated across multiple participants and tasks:

- **P16** selected "All medications" in Task 1 but did not click "Update list." He believed he was viewing all medications when the list had not actually changed.
- **P5** selected "Inactive medications" in Task 2 but could not locate the "Update list" button even after moderator instruction.
- **P8** selected "Inactive medications" in Task 2 but did not click "Update list." The moderator had to direct him to the button.
- **P12** selected "Inactive medications" in Task 2 but did not click "Update list," so the page remained on Active medications. She then selected "Renewal needed before refill" and this time did click "Update list," but it was the wrong filter for the task. She needed additional moderator probing to re-select Inactive and apply it.
- **P15** selected "Inactive medications" in Task 2 but did not click "Update list" and appeared confused as to why the list did not change.
- **P4** selected "All medications" in Task 4 but did not click "Update list." She believed the filter had been applied.
- **P16** selected "All medications" in Task 4 but again did not click "Update list." This prevented him from seeing the full list he expected to print.
- **P1** initially forgot to click "Update list" in Task 3 but caught himself: *"I keep forgetting that update list."*

P8 expected the list to change automatically when selecting a radio button and stated he thinks the list should "popup/change when he chooses 'All meds' without clicking the button."

**Implication:** Users who select a filter but do not click "Update list" believe the list has changed when it hasn't. They then make decisions based on incomplete or incorrect information without realizing it. In Task 2, this led multiple participants to believe the rash cream wasn't in the system. In Task 4, this could lead to users printing an incomplete medications list to bring to a doctor's appointment. There is no feedback mechanism to prevent this.

---

## Finding 4: The In-Progress Medications Page was well understood and valued by users, but the label "in-progress medications" was not intuitive before users experienced the page.

**Bottom line:** Once participants arrived on the In-Progress Medications Page, they consistently understood its purpose and found the three-status tracker (Request submitted, Fill in progress, Medication shipped) clear and useful. The challenge was not comprehension of the page. It was getting there.

**7 of 8 participants** who viewed the In-Progress Medications Page correctly interpreted the status phases:

> **P8:** *"Immediately, the first thing I thought of when I saw in-progress medications is, we're working on it."*

> **P7:** *"That it's being worked on... what's been submitted."*

> **P15:** *"It tells me which ones I've already requested, and it has been submitted... And then it tells me if the fill's in progress, so it tells me what's on the way... tells me which ones, if any, have been already, shipped."*

> **P12:** *"This lets me know everything I need to know at the present time."*

> **P13** said the page helps him confirm what he's requested and track the status of each order.

However, before visiting the page, the term "in-progress medications" was not meaningful to all users:

> **P8:** *"Go to your in-progress medications. Now I'm confused, because I'm not sure what that one means."*

> **P7**, when probed about the "Go to in-progress medications" link on the Lipitor med card: *"I don't know what that is... I'm guessing that means you've placed the order."*

But after seeing the page, P7 responded positively:

> **P7:** *"Oh, well, that's nice. Because when I've called, sometimes I'm not sure, did I place this order? So that's good, so I can check it on my own."*

P8 also had difficulty distinguishing between "refill" and "in-progress" as concepts:

> **P8:** *"Refill medication basically tells me the same thing... Go to your in-progress medications. Now I'm confused, because I'm not sure what that one means."*

### Where it breaks down

Of the three statuses, **"Fill in progress" was the least clear:**

> **P8:** *"I don't know if I'm acquainted with this."* He read the description and interpreted the status as meaning he'd be notified when it's ready to ship.

> **P13** interpreted it loosely as "medications that will arrive soon."

"Request submitted" and "Medication shipped" were understood consistently across participants.

**Implication:** The In-Progress Medications Page works well as a conceptual model. The problem is discoverability, not comprehension. Users who found the page valued it. Users who didn't find it had no way of knowing it existed.

---

## Finding 5: The "too early to refill" grey card was generally understood, but its visual treatment and missing information are risks.

**Bottom line:** Most participants who found the Lipitor grey card on the In-Progress Medications Page correctly interpreted it. But the card's muted styling made it easy to miss, and multiple participants independently asked for timing information that isn't currently included.

Participants correctly interpreted the card to mean the refill was requested early, no action was needed, and the medication would ship automatically when eligible:

> **P13:** *"I guess I requested it too soon. Because I, according to the prescribed dosages and everything that the pharmacist calculates, I shouldn't have run out of that medication yet, so when that calculation is made, and that date is hit, they'll ship it out."*

> **P4:** *"They're not gonna send it, they're not gonna ship it yet. I don't need to do anything, because it's already in progress."*

> **P1:** *"It's kind of reassuring that once we're able to, we'll ship these medications to you, you don't have to do anything. So, I like that part. I think, for me, that's very helpful."*

> **P8:** *"When it tells me no action needed, that means it's already on the computer to be shipped to me."*

### Where it breaks down

**Visibility:** P1 scrolled past the grey Lipitor card on the In-Progress Medications Page and did not see it on his first pass:

> **P1:** *"Oh, wait, yeah, Lipitor is there. Oh my god, I missed it. Wow, maybe I need to put on my extra goggles."*

**Missing timing information:** P1 and P8 both independently wanted an estimated date for when the medication would be eligible to ship:

> **P8:** *"It's too early to refill... we will expect it to be refilled between a certain date and a certain date."*

> **P1** suggested "it would be helpful if the grey card included an estimated date for when he can expect to receive the medication."

**Implication:** The grey card's content is effective, but its visual treatment risks being overlooked. Adding estimated timing information could reduce uncertainty and prevent users from calling the pharmacy for status updates.

---

## Finding 6: The print feature on the Medication History Page was findable for most but not all users, and the filter issue compounds the risk.

**Bottom line:** Most participants eventually located the print feature at the bottom of the Medication History Page, but it did not stand out to everyone. Combined with the filter activation issue (Finding 3), there is a risk of users printing an incomplete medications list without realizing it.

> **P12** missed the print feature entirely and said she would right-click to print instead. After the moderator directed her to it, she stated the print feature "did not pop out to her."

> **P15** scrolled up and down the page and initially could not find it: *"Let's see, is there a print capability in this? Don't see it."*

> **P4** scrolled to the bottom looking for it: *"I would look for the print... which I don't see. Let me go down to the bottom. Oh, there it is!"*

P16 found the print dropdown but was confused by the "Submit" button within the print feature:

> **P16:** *"I assume that the submit was to submit the print request, but I don't know that an older veteran would understand that you're submitting a print request. They may be looking for a button that just says print."*

### The compounding risk

In Task 4, **P4 and P16** both selected a filter option but did not click "Update list," meaning the list they intended to print did not reflect what they had selected. If a user prints what they believe is "All medications" but the filter was never applied, they would bring an incomplete list to a doctor's appointment without knowing it.

**Implication:** The print feature's location at the bottom of the page makes it less discoverable. The "Submit" label within the print dropdown adds confusion. And when combined with the filter activation issue, there is a compounding risk of users printing the wrong list.

---

## Finding 7: Refilling medications (Tasks 3 and 5) was the most straightforward experience, and the Medications Page worked well for its intended purpose.

**Bottom line:** When participants needed to refill medications, the Medications Page performed as designed. Users found refillable medications, selected checkboxes, and submitted requests with minimal confusion. The green success alert was widely noticed and used.

> **P4:** *"Oh, well, how wonderful it is, instead of having to hunt for it. I like that it's up front."* She also noted: *"I like the button that says you can select all three of them instead of going through each individual one."*

> **P8:** *"This is in the territory I'm acquainted with because I do this all the time."*

> **P13** immediately saw Metformin, checked the box, and also noticed other medications that appeared to be running low. He said he would select those as well.

> **P16:** *"That would be my first thought, is to just click all three."*

The green success alert after submitting a refill was widely noticed and understood:

> **P16:** *"Says it's good so it's not too early."*

Multiple participants (P1, P5, P13, P16) used the "Go to your in-progress medications" link within the success alert to confirm their request.

> **P5** noted he would not be 100% confident the request went through: *"Fairly confident 80-90%... but says he does not want to be 100% confident in case the request gets dropped."*

**Implication:** The refill flow is the strongest part of the current design. The Medications Page, the checkbox interaction, and the success alert all work as intended for this task.

---

## Finding 8: Users' existing habits and mental models shaped how they approached the new designs, sometimes creating friction.

**Bottom line:** Participants brought established routines and expectations from their current medication management practices that influenced how they navigated the new pages. When the design didn't align with those habits, some users left the medications experience entirely rather than continuing to explore.

Several participants' first instinct when encountering difficulty was to leave the medications experience:

> **P12's** immediate reaction when she couldn't find Lipitor on the Medications Page was to go to Messages to contact the pharmacy.

> **P15** stated he would call the pharmacy rather than use the website to request an urgent refill: *"Actually, I wouldn't, I probably wouldn't go here. I would probably look on the bottle. Call to the pharmacy and tell them what the situation is."*

> **P4** stated she would go to Messages to ask her doctor about an old medication rather than use the filters.

Some participants relied on familiar cues like the "last filled" date rather than the new status indicators. P7 used the last filled date as her primary signal for medication status. P16 called out the last filled date and stated that based on it, he knows it was filled recently.

P13 expected Lipitor to move through statuses over time, from "Too early to refill" to "Fill in progress," suggesting he views the In-Progress Medications Page as a live tracker.

> **P16** interpreted the Lipitor grey card through the lens of auto-refill logic: *"I'm thinking it's here because it's under an auto-refill... it probably auto-submitted as soon as I got my one just a few days ago."*

> **P8** reflected on his own learning curve during the session, noting he understood that it wouldn't make sense to find Lipitor on the refills page but didn't realize that at first. He "learned from using the app."

**Implication:** The design needs to account for the fact that many Veterans have deeply ingrained habits around medication management. When the new design doesn't match their expectations, some will default to phone calls or secure messaging rather than exploring further. Learnability appears high (P8's comment suggests users can adapt), but first-time discoverability is the gap.

---

## Overall sentiment

Despite wayfinding challenges, participants responded positively to the new designs overall.

> **P1:** *"Very intuitive... I am being given enough information to make a decision. Very pleasant experience, very good."*

> **P4:** *"I'm a technophile, and I love when things are done in decency and in order. This is really great."*

> **P13:** *"Fairly easy... this is all standard. This is more or less what I do every month when I'm looking at what meds I need. It's active medication management."*

> **P15:** *"It's very similar to what I'm used to using. Seems to be pretty intuitive."*

P8 offered a more nuanced reflection:

> **P8:** *"Really happy with what you did... I think that the VA, when they start working on a program like this, they also need to think of the elderly veterans, not the younger veterans, but the elderly as well. I haven't had a whole lot of problems with this one, but as you can see, I still have problems with it. If they can even simplify it, I would be so happy... But overall, I still think it would be a bit difficult for a veteran my age."*
