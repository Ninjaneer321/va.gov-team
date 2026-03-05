# Medications Management Improvements
## Design recommendations for stakeholder review

**Date:** March 4, 2026  
**Study:** Medications Management Improvements Usability Study (February 2026)  
**Participants:** 9 Veterans (moderated sessions)

**Meds UX Team:**  
Athena Bozak  
Anneka Van Garza  

---

# Purpose of this document

This document provides a **quick reference connecting each proposed design change to the research evidence or review feedback that informed it.**

Recommendations are organized by priority:

🔴 **Prioritize for May launch** — recommended before launch  
🟡 **Fast-follows** — improvements that can be addressed after launch

Each item identifies whether the recommendation emerged from:

- **Usability research**
- **Collaboration cycle review**
- **Both**

---

# 🔴 Prioritize for May launch (now)

---

# 1. Filter “Update list” interaction

**Source:** Usability research + collaboration cycle review

## What we observed

Participants frequently selected a radio button filter but **did not click the “Update list” button**, which meant the medication list did not change.

In several cases, participants continued interacting with the page without realizing the filter had not been applied.

## Evidence

- **7 of 9 participants** selected a filter but did not click **“Update list”** at least once.
- **P4 and P12** missed the button across multiple tasks.
- **P1** noticed the pattern during the session and said:

> “I keep forgetting that update list.”

- **P8**, when selecting a filter, commented:

> “I think the list should popup/change when he chooses ‘All meds’ without clicking the button.”

### Impact on the print task

During Task 4:

- **3 of 8 participants** selected filters but did **not apply them**, meaning the list they intended to print did not reflect the view they thought they had selected.

Participants affected: **P4, P12, P16**

## Collaboration cycle feedback

Collaboration cycle feedback recommended making filter behavior **dynamic**, so users are not presented with filter options that return **empty results**.

## Design recommendation

- Automatically apply filters when a radio button is selected.
- If a manual apply step must remain, make the **“Update list”** button more visually prominent and clearly indicate when filters are pending.
- Hide filter options that would return empty results.

---

# 2. Wayfinding between medications pages

**Source:** Usability research

## What we observed

Participants sometimes started on a page that did not contain the information they were looking for. Cross-links intended to help users move between medication pages were not always noticed or used.

## Evidence

### Starting point confusion

**6 of 9 participants started on “Refill VA medications” from the MHV landing page when trying to check the status of a refill request that had already been submitted.**

The medication did not appear there because the refill request was already **in progress**.

P1:

> “Because I anticipate that if I click on it, it will give me all of my medications.”

### Refill page interpreted as a full medication list

Some participants expected the refill page to contain **all medications**, not just medications available to refill.

When Lipitor was not visible, participants assumed it had been removed from their list.

P7:

> “That’s what I don’t like. When there’s no refills left, it takes it out of your list.”

### Cross-link discoverability

Two cross-links intended to help Veterans navigate between medication pages were frequently missed.

#### “Review and print list of medications”

**5 of 9 participants did not use the link.**

- **3 did not notice the link until the moderator pointed it out** (P7, P8, P12)  
- **2 were on the page but navigated away without using it** (P4, P16)

P7 discussed printing medication information while the link was visible on the page but did not notice it.

#### “Go to your in-progress medications”

**3 of 9 participants did not successfully use the link.**

- **2 did not notice the link without moderator prompting** (P7, P12)  
- **1 noticed the link but was unsure what it meant** (P8)

P8:

> “Go to your in-progress medications. Now I'm confused, because I'm not sure what that one means.”

### Navigation recovery behavior

Participants often restarted navigation when they could not find the medication they expected.

**5 participants returned to the MHV landing page** to try a different path after realizing the page did not contain what they were looking for.

### Escalation to offline channels

When participants did not find what they were looking for, **3 of 9 participants** said they would call the pharmacy or send a secure message instead.

P15:

> “Actually, I probably wouldn't go here. I would look on the bottle and call the pharmacy.”

### Encouraging note

When participants noticed the cross-links, navigation between pages was generally smooth.

Participants **P4, P13, and P1** quickly located the In-Progress page using the link and completed the task efficiently.

## Design recommendations

- Increase visual prominence of cross-links.
- Consider **button-style treatments** rather than inline text links.
- Evaluate whether link text clearly communicates the destination.
- Provide contextual guidance when users land on a page that may not contain the information they need.

---

# 3. “In-progress medications” language

**Source:** Usability research

## What we observed

Some participants hesitated before selecting **“In-progress medications”** because the label did not clearly communicate what information would appear on that page.

## Evidence

### Pre-click confusion

**2 of 9 participants** expressed confusion about the label before selecting the link.

P8:

> “Go to your in-progress medications. Now I'm confused, because I'm not sure what that one means.”

P7:

> “I don't know what that is… I'm guessing that means you've placed the order.”

P8 also compared the wording to **“refill medications”**:

> “Refill medication basically tells me the same thing.”

### Post-click clarity

Once participants arrived on the page, **7 of 8 participants who viewed it correctly interpreted the information shown.**

P12:

> “This lets me know everything I need to know at the present time.”

P7:

> “Oh, well, that's nice. Because when I've called, sometimes I'm not sure, did I place this order?”

## Design recommendation

Consider more descriptive link text such as:

- **Track your refill requests**
- **Check refill status**

The page content itself was well understood once participants arrived.

---

# 4. Collaboration cycle items

The following items were identified during **collaboration cycle review**. Supporting research observations are included where relevant.

---

## 4a. Content consistency: “medications” vs “meds”

Ensure consistent terminology across pages.

Participants moved between pages labeled:

- Refill VA medications  
- In-progress medications  
- Review and print list of medications

Consistency in terminology may help reduce friction when navigating across these pages.

---

## 4b. Cross-links should appear on their own line

Links should appear on their own line with clearer call-to-action styling.

Supporting research context:

Cross-links were sometimes missed during testing.

For example, **P12 did not notice either cross-link on the Medications page during Task 1.**

---

## 4c. Links opening new tabs should communicate behavior

Links such as **“Get tracking info”** that open in a new tab should clearly communicate this behavior (e.g., “opens in a new tab”).

Supporting context:

Participants mentioned the importance of designing for **older Veterans**.

P12:

> “Most people are probably older now, and we really can't see anything.”

Unexpected context changes can make navigation harder to follow.

---

# 🟡 Fast-follows (after launch)

---

# 5. Discoverability of the print feature

**Source:** Usability research

## What we observed

The print feature appears **below the medication list**, requiring users to scroll through the list before reaching it.

## Evidence

**5 of 8 participants** attempting the print task had difficulty finding the feature.

P15:

> “Let's see, is there a print capability in this? Don't see it.”

P12 initially missed the feature and said she would **right-click to print instead**.

P4:

> “I would look for the print… which I don't see. Let me go down to the bottom. Oh, there it is!”

P5 also stated he would typically use the browser print function rather than scroll to the bottom of the page.

### Label confusion

P16 questioned the **“Submit”** button used for printing.

> “I assume that the submit was to submit the print request, but I don't know that an older veteran would understand that.”

### Filter selection differences

Participants differed in what they considered their **current medications** when printing.

- **5 of 8 selected “Active medications”**  
- **3 of 8 selected “All medications”**

P16:

> “Yeah, because I want them to see what I was on… just for me being thorough.”

## Design recommendation

- Move the print feature higher on the page or make it persistent.
- Replace **“Submit”** with **“Print”** or **“Download.”**

---

# 6. “Too early to refill” card visual prominence

**Source:** Usability research

## What we observed

The grey **“Too early to refill – no action needed”** card was sometimes overlooked during scanning.

## Evidence

**3 of 9 participants** initially scrolled past the card before realizing it was on the page.

P1:

> “Oh, wait, yeah, Lipitor is there. Oh my god, I missed it.”

The grey card has **lower visual prominence than the colored status sections**, making it easier to overlook during quick scanning.

Importantly, **all participants who noticed the card correctly understood its meaning.**

Participants recognized that the medication had already been requested and that **no action was required yet.**

## Design recommendation

Evaluate whether the grey card could have slightly stronger visual prominence while maintaining its distinction from other medication status states.

---

# Overall sentiment

Despite the areas for improvement above, participants responded positively to the overall experience.

P1:

> “Very intuitive… Very pleasant experience.”

P4:

> “I'm a technophile, and I love when things are done in decency and in order. This is really great.”

P13:

> “Fairly easy… this is more or less what I do every month.”

---

# Research artifacts

- Topline report  
- Task analysis report  
- Findings summary
