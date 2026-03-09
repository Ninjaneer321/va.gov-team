# Secure Messaging: Recent Care Teams Flow — Research Summary (Nov 2025–Mar 2026)

## Background
The **“Start a new message”** flow was redesigned to streamline care-team selection and improve accessibility through a **single-feature-per-page** approach. Since launch (**November 2025**), veterans have reported consistent usability issues:

- **Flow complexity:** Extra steps and multi-page interactions feel “over-engineered” and slow message composition.
- **Unmet "recent care team" needs:** A large share of users immediately click **“Select a different care team”**, indicating the initial options often don’t match expectations.
- **Provider confusion:** Users are still finding it difficult to find previously messaged providers.

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
- **Contact-list update** activity suggests users are looking for more tools to control their visible care teams.
- Frequent **care-system toggling** signals users may not be familiar with their care system when looking for their care team.

---

## VA Health & Benefits App (VAHB) feedback
VAHB currently lacks analytics for this specific feature, but limited app user feedback shows themes:

- Old or unrelated providers and facilities clutter lists with no way to remove them.
- Difficulty locating care teams such as **Community Care**, **Pharmacy**, **Mental Health**, and others.
- Subject line limited to **50 characters** makes communication difficult.
- Overall messaging interface perceived as hard to navigate.
- A request for editable contact lists if the care teams can't reliably show only relevant facilities.

Slack thread about lack of app analytics: https://dsva.slack.com/archives/C01KBMKPJ95/p1766430040256259

---

## Medallia insights (Nov 2025 – Feb 2026)
Medallia comments were filtered for mentions of: contact lists, number of steps/screens, Recent Care Teams issues, difficulty finding providers, and replying/addressing messages.

### February 2026
- **10×** contact-list issues  
- **6×** too many pages / non-urgent interstitial complaints  
  - “Too many steps… have to tap ‘START A NEW MESSAGE’ 10×10³ times… ridiculous.”
- **6×** Recent Care Teams issues  
  - “Your app is still too cumbersome.. I need to send a message to members of my care team other than primary care. What happened to all the other departments?”

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
2. **Contact-list maintenance occurs**  
   Veterans attempt to manually fix incorrect or missing care-team data.
3. **Multi-screen workflow is widely criticized**  
   The flow adds friction and slows down message creation.
4. **The number of complaints about missing providers has decreased since the flow launched**  
   Less users are confused about having to go to another screen, but confusion still persists.
5. **Care-system mismatches remain common**  
   High toggle rates reflect incorrect default facility selection.

---

## Recommendations

1. **Collapse or simplify the multi-page flow**  
   - Fewer screens → lower friction.
   - A high number of users go onto the second page for care team selection.
3. **Improve care-team accuracy**
   - I'm not sure the process to do this, but it could be worth looking at other tools like the contacts list
4. **Address other usability suggestions**
   - Examine redundant “Start a new message” screens that users may not be understanding
   - Maybe increase subject-line character limit
   - Add the ability to add more than one recipient or forward messages 

---

## Summary
Across analytics and user feedback, the redesigned flow still has friction for many veterans. Confusing navigation, only some initially visible care teams (web) and extra steps before message composition form a consistent pattern. Restoring discoverability of care teams and simplifying the message-start experience offer clear paths to improvement.
