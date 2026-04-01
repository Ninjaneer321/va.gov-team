# Proposed research for VHIC: Veteran Healthcare Identification Card

Mobile Feature Support team | March 2026
* UX Researcher: Emily DeWan
* UX Designer: Natasha Huckleberry
* Product Owner: Michelle Middaugh
* Product Manager: Natalie Gibbons


## Background

The Veteran Health Identification Card (VHIC) is a photo ID currently issued in physical form to Veterans enrolled in VA healthcare, used for check-ins, commissary/exchange access, and proving Veteran status. The Digital VHIC project aims to create a mobile app version of this card within the VA Health Benefits app to address issues with lost, forgotten, or damaged physical cards, which currently require 7-14 days for replacement.

[Product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/digital-vhic/product-brief.md)


## Purpose

The digital VHIC will only succeed if two things happen:
1. VA staff can use it as easily as the physical card
2. Veterans trust it enough to leave the physical card at home.

Without testing these assumptions, we risk building something that creates long lines at check-in or fails when Veterans need it most. This research tells us what to build before development starts, saving time and rework.


## Research goals

### Goal 1: Making sure the digital card works at VA locations
To ensure the digital card fits VA staff’s daily tools and habits, we must understand how they use the physical card today—otherwise it could create long lines and frustrate Veterans.

What we want to learn:

* How do different locations use the card?
    * Self-service kiosk, manually swiping, visual check. The designs need to work for all use cases.
* Can scanners read the phone screens?
    * See if the barcode in potential designs can be read by the scanners at VA front desks. (Phone screens are shiny and can be hard for older scanners to read.)
* What are staff members looking for at a glance?
    * What do they need to find quickly (e.g., Service Connected status, Branch seal, or Expiration date) to verify benefits without scanning?
    * Show them potential designs to see if these specific "priority markers" are as easy to find as they are on the physical cards.
* What might slow things down?
    * What if they can’t swipe? Would they ever need to manually type an ID number? Would they ever need to ask the Veteran questions?


### Goal 2: Veteran Trust & Reliability
Ensure Veterans feel confident using the digital card and know exactly what to do if the technology fails.

What we want to learn:

* How will Veterans handle technical failures?
    * Determine how they will check in with no cell service or the app crashes.
* Do Veterans trust a digital-only ID?
    * Do they feel safe leaving the physical card at home (or not having one at all)?
    * Do they trust that the digital card is official?
* Is the guidance clear when things go wrong?
    * When the app shows a system error or inactive status, do Veterans know what to do?



## Research approach

* In-person observations at NYC-area VA facilities: See how the card actually works in real conditions with real equipment
    * See how staff are interacting with the physical cards now.
    * Testing digital designs with the staff and local hardware.
    * See how Veterans currently use their phones in dead zones (elevators, basements).
    * Watch the physical hand-off to see how Veterans naturally hold or present their phones to staff.
* Remote interviews with staff nationwide: get feedback from different facility types
    * Learn how staff are interacting with physical cards now.
    * Show staff digital designs for feedback.
* Remote interviews with Veterans
    * Interview Veterans for feedback on language for technical issues.
    * Ask about thoughts on trust and security of digital card designs.


## Timeline

We recommend starting this research while designs are still being worked on, and finishing before developers build the card in the mobile app.

If we wait until development starts and then discover the barcode doesn't scan on phones, or Veterans don't trust it, we'll need expensive rework.


# Potential project: applying for new/replacement card

Veterans need a clear place to apply for a new or replacement VHIC. One option is to add this request flow to the existing self-service platform, but that platform is currently very verbose. The team wants a more streamlined experience that helps Veterans request a VHIC with fewer steps and less reading.

Research that supports Veterans wanting simplification:

* [2025-10 Supplemental Claims Design Directions Research Findings - Mental Model](https://va.ghe.com/software/va.gov-team-debug/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Research%20Findings%20-%20Mental%20Model.md) (whole report)
    * Finding 2: [Veterans must translate VA terminology to navigate the process](https://va.ghe.com/software/va.gov-team-debug/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Research%20Findings%20-%20Mental%20Model.md#finding-2-veterans-must-translate-va-terminology-to-navigate-the-process)
    * Participants consistently described their actions in plain, goal-oriented terms… rather than using VA terminology.

* [2025-05 VA Health and Benefits App - Pre-Need Burial Eligibility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/mobile/research/research-report.md#key-findings)
    * Finding 5: [Existing burial content on VA.gov is generally understandable, but there is desire for clearer and simple communication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/mobile/research/research-report.md#finding-5-existing-burial-content-on-vagov-is-generally-understandable-but-there-is-desire-for-clearer-and-simple-communication).
    * The differences between Eligibility and Pre-need eligibility sections were not always clear.
    * 4 of 13 were confused by eligibility criteria (“Veteran who didn’t receive a dishonorable discharge”).


<!-----

NOTE: below is the original document written for proposed research.

## Archive
<details><summary>Initial draft of proposed research: August 2025</summary>



* Accessibility research
    * Review designs with ADE
        * Especially with the mention I heard that this digital card has to be identical to the physical card. (during the recorded meeting I watched on the backend flow – I have not confirmed these details)
    * Conduct usability tests after it’s built in the app with users of various assistive technologies
    * Depending on how similar the two cards will be, we could do AT usability sessions on the VSC to find accessibility issues on the VHIC (to be done before VHIC is built)
    * 🗓️ Timeline: now/soon if we test on the VSC or after VHIC has designs started (for ADE review) or is built in the app (for testing with actual AT users)

* _(in scope?)_ How are locations using this card? e.g. healthcare centers
    * What types of locations use this card?
    * Are there differences among types of locations in how they use the cards?
        * Scanning bar code?
        * Viewing? If viewing, what exactly are they looking for? How quickly are they looking at the card? (i.e. how much could we deviate from the original physical card to still be recognizable?)
    * Can people at these locations be part of our research?
    * 🗓️ Timeline: ideally before designs have been started, to confirm what needs to be on these digital cards so that they will work in locations.

* _(in scope?)_ Where will this be stored?
    * Where will Veterans think to access it?
    * Where are easy + quick places to access it?
    * Would location of VSC relate to this at all?
    * 🗓️ Timeline: could be immediate, or after designs have been started

* _(in scope?)_ How are Veterans selecting the option of what version of the card to receive – physical and/or digital – can we test that communication?
    * Is the goal to have as few physical cards as possible? What communication would be best to achieve that?
    * What are reasons for Veterans requesting physical cards?
    * 🗓️ Timeline: could be immediate. Most likely not a blocker for any designs or development, unless that communication will be in the app.

* _(in scope?)_ Adding card to mobile digital wallet
    * Can this be done? (citing security concerns)
    * What information is needed on first screen, vs what can be in details? (i.e. front and back of card)
    * This would most likely not be in MVP
    * 🗓️ Timeline: could be immediate. Not a blocker for anything as it’s not going to happen for MVP.

Timeline options of each study within product process:
![Timeline options of each study within product process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/digital-vhic/supporting_files/VHIC%20proposed%20research%20timeline%20options.png)


## Additional notes



* Because of the similarities of VHIC and VSC (both being types of ID cards), I started to review previous research on Veteran Status Card (note: I have not yet done a deep dive into all the studies)
    * It looks like there was not any testing with users of assistive technology
    * Findability with the current location on the app tested well
        * Using the card in the test also tested well
    * Privacy concerns for showing disability rating – it’s possible there would be similar concerns for info on the VHIC

</details>

----->
