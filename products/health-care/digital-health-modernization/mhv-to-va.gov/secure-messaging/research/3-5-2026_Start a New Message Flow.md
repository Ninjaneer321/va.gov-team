# Secure Messaging: Recent Care Teams Flow — Research Summary (Nov 2025–Mar 2026)

## Background
The **“Start a new message”** flow was redesigned to streamline care-team selection and improve accessibility through a **single-feature-per-page** approach. Since launch (**November 2025**), veterans have reported consistent usability issues:

- **Information loss:** Only **6 months of contact history** is shown, making it difficult to find previously messaged providers.
- **Flow complexity:** Extra steps and multi-page interactions feel “over-engineered” and slow message composition.
- **Unmet needs:** A large share of users immediately click **“Select a different care team”**, indicating the initial options often don’t match expectations.

---

## Web Analytics (DataDog): User Behavior at Message Start

### Key metric
**% of users who advance to Page 2 (“Select a different care team”)** — a signal that Page 1 did not contain the care team they needed.

### Nov 10 – Dec 10
- New messages started: **628,344**
- Selected a recent care team: **333.84K**
- Went to page 2: **140.92K**
- **Page-two rate: 22.4%**

Additional activity:
- **21.47K** clicked **Update your contact list**
- **122K** toggled care systems

### Dec 10 – Jan 10
- New messages started: **591,688**
- Selected a recent care team: **337.76K**
- Went to page 2: **138.76K**
- **Page-two rate: 23.5%**

Additional activity:
- **21.24K** clicked **Update your contact list**
- Care-system toggle data unavailable

### Jan 10 – Feb 10
- New messages started: **674,802**
- Selected a recent care team: **435.19K**
- Went to page 2: **196.65K**
- **Page-two rate: 29.1%**

Additional activity:
- **32.16K** clicked **Update your contact list**
- **23.92K** toggled care systems

### Feb 10 – Mar 28
- New messages started: **409,075**
- Selected a recent care team: **271.91K**
- Went to page 2: **122.39K**
- **Page-two rate: 29.9%**

Additional activity:
- **21.6K** clicked **Update your contact list**
- **51.72K** toggled care systems

---

## Analytics takeaways
Across all periods, **22–30%** of all new message attempts advance to Page 2. This indicates:

- The initial **“Recent Care Teams”** list often does not contain the care team veterans intend to message.
- High **contact-list update** activity suggests confidence in system-provided contacts is low.
- Frequent **care-system toggling** signals mismatches between displayed care facilities and where users actually receive care.

---

## VA Health & Benefits App (VAHB) feedback
VAHB currently lacks analytics for this specific feature, but user feedback shows clear themes:

- Irrelevant facilities shown by default.
- Old or unrelated providers clutter lists with no way to remove them.
- Difficulty locating care teams such as **Community Care**, **Pharmacy**, **Mental Health**, and others.
- Subject line limited to **50 characters** makes communication difficult.
- Overall messaging interface perceived as outdated, clunky, and hard to navigate.

---

## Medallia insights (Nov 2025 – Feb 2026)
Medallia comments were filtered for mentions of: contact lists, number of steps/screens, Recent Care Teams issues, difficulty finding providers, and replying/addressing messages.

### February 2026
- **10×** contact-list issues  
- **6×** too many pages / non-urgent interstitial complaints  
  - “Too many steps… have to tap ‘START A NEW MESSAGE’ 10×10³ times… ridiculous.”
- **6×** Recent Care Teams issues  
  - “I need to send messages to other departments—what happened to them?”

### January 2026
- **6×** contact list / adding care team issues  
- **9×** too many steps  
  - “Too many steps to simply send a message.”  
  - “Start New Message page only shows Crisis Line—can’t send a non-urgent message.”
- **3×** missing care teams  
  - “17 people on my list, only 4 appear in Recent Care Teams.”

### December 2025
- **11×** flow frustration (multiple screens)  
  - “EXTREMELY STUPID… I shouldn’t have to click Start a New Message twice.”
- **8×** Recent Care Teams issues  
- **2×** contact-list issues  

### November 2025 (launch month)
- **20×** Recent Care Teams problems  
- **7×** too many pages  
- **24×** contact-list or finding-contact issues  

---

## Cross-source synthesis
1. **The first page often fails user intent**  
   About a quarter to a third of all users must navigate to Page 2 to find the right team.
2. **Contact-list maintenance is excessively high**  
   Veterans attempt to manually fix incorrect or missing care-team data.
3. **Multi-screen workflow is widely criticized**  
   The flow adds friction and slows down message creation.
4. **Limiting contact history to 6 months harms usability**  
   Many specialists and intermittent providers disappear, making them unreachable.
5. **Care-system mismatches remain common**  
   High toggle rates reflect incorrect default facility selection.

---

## Recommendations
1. **Restore full contact history or provide one-stop access to all care teams**  
   Reducing reliance on “Recent” lists decreases dead-ends.
2. **Collapse or simplify the multi-page flow**  
   Fewer screens → lower friction.
3. **Improve care-team accuracy**
   - Auto-filter active providers
   - Allow users to hide/remove outdated contacts
   - Reduce care-system mismatches
4. **Address core usability blockers**
   - Remove redundant “Start a new message” screens
   - Increase messaging subject-line character limit (VAHB)
   - Improve performance and reduce loading delays

---

## Summary
Across analytics and user feedback, the redesigned flow increases friction for many veterans. Loss of historical contacts, confusing navigation, and extra steps before message composition form a consistent pattern. Restoring discoverability of care teams and simplifying the message-start experience offer clear paths to improvement.
