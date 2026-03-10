# Secure Messaging: Recent Care Teams Flow — Research Summary (Nov 2025–Mar 2026)

## Background
The **“Start a new message”** flow was redesigned to streamline care-team selection and improve accessibility through a **single-feature-per-page** approach. Since launch (**November 2025**), veterans have reported consistent usability issues:

- **Flow complexity:** Extra steps and multi-page interactions feel “over-engineered” and slow message composition.
- **Unmet "recent care team" needs:** A large share of users immediately click **“Select a different care team”**, indicating the initial options often don’t match expectations.
- **Provider confusion:** Users are still finding it difficult to find previously messaged providers.

<img width="594" height="434" alt="Screenshot 2026-03-09 at 1 03 13 PM" src="https://github.com/user-attachments/assets/82d91b95-9568-4742-ac06-f9a6cf9239b5" />

_(potential steps to start a new message for users)_

---

## Recommendations

1. **Collapse or simplify the multi-page flow**  
   - A high number of users go onto the second page for care team selection.
   - Remove the screen only for recent care teams → combine it with the "select a different care team" page **or** on the compose message page itself.
3. **Improve care-team accuracy**
   - Maybe look at the option of adding other tools like the contacts list, especially as the contact list is being phased out.
4. **Address other usability suggestions**
   - Examine redundant “only use message for urgent needs” screens that users may not be understanding
   - Add the ability to add more than one recipient or forward messages
4. **Conducting a research study**
   - **Hypothesis**
      - Users can more easily send a message when all fields are on a single page, including AT users if there are minimal dynamic updates on the single page.
      - Users are not paying attention to the interstitial content
      - Users struggle with the care system → care team selection hierarchy and don't understand the distinction between these two step
   - **Draft Research Goals**
   - Determine optimal information architecture and design of whether addressing and composing a message is easier for veterans on two separate pages or on a unified single-page flow. 
    - Validate accessibility by gathering feedback from AT users about what flow is most accessible and intuitive
    - Clarify mental models by assessing user understanding of care system vs. care team concepts and their perceived relationship
    - Measure whether users notice, read, and understand the interstitial content
    - Identify new and existing pain points in the message creation flow.

---

The following data highlights web analytics, app comments, and Medallia (web) comments for Nov - February. 

---

## Web Analytics (DataDog): User Behavior at Message Start

### Nov 10 – Dec 10
- New messages started: **628,344**
- Selected a recent care team: **333.84K**
- Went to page 2: **140.92K**
- **Page-two rate: 22.4%**

Additional activity:
- **21.47K** clicked **Update your contact list** (15.2% of the 140.92K people who made it to this page) 
- **122K** toggled care systems (counts of a single user clicking on unique care systems - doesn't involve re-clicking a care system)

### Dec 10 – Jan 10
- New messages started: **591,688**
- Selected a recent care team: **337.76K**
- Went to page 2: **138.76K**
- **Page-two rate: 23.5%**

Additional activity:
- **21.24K** clicked **Update your contact list** (15.3% of the 138.76K people who made it to this page) 
- Care-system toggle data unavailable

### Jan 10 – Feb 10
- New messages started: **674,802**
- Selected a recent care team: **435.19K**
- Went to page 2: **196.65K**
- **Page-two rate: 29.1%**

Additional activity:
- **32.16K** clicked **Update your contact list** (16.3% of the 196.65K people who made it to this page) 
- **23.92K** toggled care systems (counts of a single user clicking on unique care systems - doesn't involve re-clicking a care system)

### Feb 10 – Mar 8
- New messages started: **409,075**
- Selected a recent care team: **271.91K**
- Went to page 2: **122.39K**
- **Page-two rate: 29.9%**

Additional activity:
- **21.6K** clicked **Update your contact list** (17.6% of the 122.39K people who made it to this page) 
- **51.72K** toggled care systems (counts of a single user clicking on unique care systems - doesn't involve re-clicking a care system). 

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
- **10×** Contact-list challenges (updating contact lists, trying to control relevant or non-relevant care teams in lists)
- **6×** Too many pages / non-urgent interstitial complaints  
  - “Too many steps… have to tap ‘START A NEW MESSAGE’ 10×10³ times… ridiculous.”
- **6×** Recent Care Teams issues  
  - “Your app is still too cumbersome.. I need to send a message to members of my care team other than primary care. What happened to all the other departments?”

### January 2026
- **6×** Contact list / adding care team issues  
- **9×** Too many steps  
  - “Too many steps to simply send a message.”  
  - “Start New Message page only shows Crisis Line—can’t send a non-urgent message.”
- **3×** Missing care teams (Recent care team challenges)  
  - “17 people on my list, only 4 appear in Recent Care Teams.”

### December 2025
- **2×** Contact-list issues (updating contact lists, trying to control relevant or non-relevant care teams in lists)  
- **11×** Flow frustration / Too many steps  
  - “EXTREMELY STUPID… I shouldn’t have to click Start a New Message twice.”
- **8×** Recent Care Teams issues  

### November 2025 (launch month)
- **24×** contact-list or finding-contact issues
- **7×** Too many pages/steps   
- **20×** Recent Care Teams problems  

---

## Cross-source synthesis
1. **The first page often fails user intent**  
   About a quarter to a third of all users must navigate to Page 2 to find the right team.
2. **Contact-list maintenance occurs**  
   Veterans attempt to manually fix incorrect or missing care-team data.
3. **Multi-screen workflow is criticized**  
   The flow adds friction and slows down message creation.
4. **The number of complaints about missing providers has decreased since the flow launched**  
   Less users are confused about having to go to another screen, but confusion still persists.
5. **Care-system mismatches remain common**  
   High toggle rates reflect incorrect default facility selection.

---


---


  ## Summary
Across analytics and user feedback, the redesigned flow still has friction for many veterans. Confusing navigation, only some initially visible care teams (web) and extra steps before message composition form a consistent pattern. Restoring discoverability of care teams and simplifying the message-start experience offer clear paths to improvement.
