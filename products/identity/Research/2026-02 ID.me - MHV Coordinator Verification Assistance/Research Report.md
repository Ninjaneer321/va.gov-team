# 2026-02 MHV Coordinator Verification Assistance

**Office of the CTO - Digital Experience (OCTO-DE), Sign in, Identity**

**Date:** 03/2026

**Contacts:** Clayton Zook, Charlye Tran, Megan Driscoll

## Summary

Coordinators across all five sites are shouldering a significant, daily burden helping Veterans navigate the ID.me identity verification and troubleshooting processes. The volume is high, ranging from 2 to 12+ Veterans per coordinator per day with each case taking 20 minutes to 60+ minutes. Half or more of the cases they help with directly relate to ID.me. Coordinators often run into issues beyond their ability or permissions level to help. Many issues they see recur consistently across regions, including:

Common issues include:
- Personal email access problems
- Verify failures with certain phone carriers
- Technical problems with devices
- Escalation wait times
- Perceived inconsistencies in ID.me flows
- Policy gaps for caregivers or POA

Coordinators are very knowledgeable of the process, since they help veterans through it dozens of times a week. They have developed effective workarounds like knowing when to move to video verification flow, create Veteran help guides like checklists, conduct pre-screening for device and carrier compatibility, and offer FaceTime coaching for those who can’t come in. These practices are inconsistent across sites and place a heavy individual burden on a small number of dedicated staff. 
Coordinators help with ID.me issues because a credential is needed to access VA online services. Most of the Coordinators we talked with actually steer Veterans to ID.me feeling it’s easier to sign up and verify with in most cases. Still there are many reoccurring issues, and some of those could be helped or solved by either ID.me or the VA.gov Identity team.


## Major Themes

### Coordinators Make It Work the Best They Can

#### Coordinators Are at Capacity
All coordinators report helping Veterans with ID.me needs every single day, making up half or more of the Veterans they see. They can sometimes help 10 more Veterans daily, or 15-20 during a planned outreach event. Help sessions with ID.me issues can take as little as 20 minutes but often stretch to an hour or longer. Coordinators often guide veterans to ID.me, over Login.gov, because they find it easier to help Veterans with ID.me

| Coordinator | Estimated Daily Volume |
| --- | --- |
| C1 (Baltimore) | 8–12 in-person + 3–7 calls |
| C2 (Kansas City) | ~10/day; 15–20 outreach |
| C3 (Minneapolis) | 2–3 ID.me-specific; HRC sees ~20/day |
| C4 (New Hampshire) | 2–10/day |
| C5 (Maine) | 5–9/day; 10–15 outreach |

Critically, four of the five coordinators are the sole support person for their facility. Many cover multiple facilities across an entire region. There is no backup when they are out
> "I'm the only one that helps veterans with va.gov ID.me throughout all the 6-7 facilities in this hub of Maryland."  — C1, Baltimore

The absence of redundancy means any coordinator absence creates a complete gap in service - one coordinator often helps veterans even on his PTO days. Knowledge, workarounds, and best practices are held by individuals rather than systems.


#### Coordinator Workflows Are Improvised
Coordinators have developed effective personal workflows, but these are not standardized or shared across sites. The general pattern follows a triage-and-escalation model, but the steps and decision points differ by coordinator.

| Stage | What Happens | Variation |
| --- | --- | --- |
| Pre-check | Check for existing accounts | Only C4 uses MPI consistently |
| Pre-screen | Phone carrier, device, docs | Only C2 formalizes this |
| Attempt 1 | Self-service verification | Universal |
| Attempt 2 | Video verification | Veteran willingness varies |
| Attempt 3 | UPS in-person | Often unavailable |
| Escalation | ID.me help desk | Wait times vary |
| Unresolved | Veteran leaves | No tracking |

Key observations:
- No coordinator has a formal case tracking system for unresolved verifications. Veterans who leave without completing verification may or may not return.
- The UPS in-person option is largely non-functional as a fallback due to geographic inaccessibility (one UPS store serving a multi-state area, with kiosks frequently reported as broken).
- All coordinators prefer ID.me over Login.gov for its help desk support capability — but that advantage is eroded by long wait times.
- There is no documented decision tree or escalation playbook shared across coordinators. Best practices are learned by doing and by informal coordinator networks.
> "I feel like I've helped probably thousands of people with it, so I can diagnose the issue pretty fast. But I'm sure there are a lot of coordinators that struggle and I could probably resolve their issue within seconds."  -- C1, Baltimore


#### Advance Preparation Improves Outcomes
All coordinators provide some form of advance preparation to Veterans before a verification session. However, the quality and formality of this preparation varies significantly.
| Coordinator | Preparation Method |
| --- | --- |
| C1 | Verbally tells Veterans to bring state ID/passport, Veterans Health ID card, and Social Security card. Reports ~95% success rate when Veterans comply |
| C2 | Shares a written checklist with every Veteran before their visit that includes what to bring, and what information to have ready. |
| C3 | Verbally tells Veterans to bring IDs, listing specific options, to have phone charged, to have username and passwords ready. |
| C4 | Verbally tells Veterans to 'bring everything in the kitchen sink' since accepted options are unpredictable. |
| C5 | Verbally tells veterans to bring as much as possible, esp driver’s licenses or unexpired ID, passport, SSC, DD214, and VHIC since accepted options are unpredictable |

> “Do you have a driver's license … do you have a passport or passport card. Bring it. Do you have a DD214?... Bring it. Do you have a Social Security card? Bring it. Do you have a birth certificate? Bring it. And a veteran's health identification card? Bring it” – C5, Maine

C1’s high success rate may be linked to his consistent pre-briefing about documentation. C2's written checklist represents the most formalized approach and could serve as a model for standardization across sites.
> "I'm glad you asked. This is the exact verbiage shared with every patient from this facility."  — C2, Kansas City (presenting her pre-visit checklist)

The 'bring everything' instruction (C4 and C5) reflects frustration with what feels like unpredictable document options in the flow. This undermines their ability to give precise guidance.
> “It would seem like you'd show everything, and then in the second one you'd show everything again. But no, you show this list and after you put one of those in, it changes in the second list. – C5, Maine


#### Coordinator Concerns About Direct Verification
All coordinators expressed interest in principle to having the ability to directly verify a Veteran's identity (attesting on ID.me's behalf). However, two raised unprompted concerns about personal liability and fraud risk if something were to go wrong (C1 and C3).
C4 and C2 expressed the strongest enthusiasm for this capability. C1 and C3 were more cautious, noting that they are not trained identity verification officers. While coordinators  did similar work for the VA with the MHV account, there’s some hesitancy that ID.me has a stronger verification process than MHV had, the credentials are used outside of VA settings, and the verification process is owned by an entity outside the VA.
This ambivalence is important for any future coordinator-attestation design: coordinators want to help but need a clear liability framework, not just technical access.

## Recurring Failures Drive Most of the Support Burden

### 1. Existing ID.me Accounts Veterans Cannot Access
Many Veterans already have an ID.me account. For these folks, it was likely created years prior without their awareness in order to force MFA enforcement of a deprecated CSP. Some veterans may have previously created one for themselves, through other government services or to gain discounts from private companies, and later lost access or forgot about having that account.
> "They go in and they’re like, oh, I already got an ID.me account. When did this happen? It happened a long time ago."  — C4, New Hampshire

Veterans with existing accounts need help with account access and recovery:
- Lost access to the personal email address linked to the ID.me account
- Can't remember the password
- Two password reset emails sent from ID.me cause a reset loop – see “Inconsistent ID.me flows” section
- MFA phone number changed
C4 checks for an existing ID.me account via the VA admin portal (MPI) before attempting any password reset or new registration. This could be a best practice but was not mentioned by other coordinators.
C4 notes that for Veterans without a verified account showing in MPI, it is sometimes faster to start a new registration than to attempt recovery, because the system will surface the existing account when the email is entered. It’s possible this method could lead to multiple accounts created for a Veteran if they changed emails since last using ID.me
> "It's a lot faster, in my opinion, to go through the registration process and I'll get that little blurb — oh, hey, look, you already have an account with this email."  — C4, New Hampshire

In a variation on this, C1 instead has veterans sign in and click forgot password. If ID.me sends an email to an account they have access to, it means they don’t need to set up a new account
> "I actually tell them not to click on create an account. I tell them to sign in first [on VA.gov] and then click ID.me and do the forgot password. "  — C1, Baltimore

> “They go in and say, ‘I already have an ID.me account… when did this happen?’” – C4

### 2. Account Recovery Barriers
Veterans frequently cannot access the email address linked to their ID.me account, either because they have forgotten the password, abandoned the account, or never used it regularly in the first place. Resolution requires contacting the ID.me help desk or chat option to update the email address. See more about help desk escalation.
> "I get a lot of veterans that come in that don't have access to their old email addresses."  —  C1, Baltimore

Several specific issues include:
- Yahoo, Hotmail, Comcast/Xfinity and even Gmail accounts: can see significant delays receiving emails from ID.me (C2, C4)
- Yahoo email in particular: may never get ID.me emails, which seems to be resolved by whitelisting ID.me emails from spam filtering (C2)
- Veterans with full email inboxes: can't receive any emails, a silent failure with no error message shown to the Veteran or coordinator (C3)
- Browser password manager causes issues if the Veteran doesn’t realize they are accidentally using it.
   - It can easily generate a new password and save. If it updates their ID.me password, and they don't realize, they might try to use their old password on next sign in, and the sign in will fail
   - In another case, if the manager generates a password but doesn't update with ID.me, the next time the Veteran will see the in-browser password manager prompt to sign in with its password. But it'll be incorrect and present as a sign-in failure.
> "Everyone does it — Edge, Chrome, DuckDuckGo. They get that pop-up that says 'do you want to save this password?' And they click save. And what does that do? It creates a new password. Now they're going back through: oh my God, I can't get signed in, I need to reset the password, oh look, I'm getting 2 emails from ID.me, which one do I pick? Oh look, I'm in a vicious loop."  —  C4, New Hampshire

### 3. Phone Carrier Incompatibility with Verify
This is the single, most frequently cited unresolvable blocker. Particularly Veterans who are older, lower-income, technology adverse, or rural, have a higher use of prepaid phone plans. Other Veterans with bundled phone services can also affected. ID.me cannot verify these phones via SMS. Additionally, VOIP type landline phones cannot get MFA codes by phone call. Coordinators have learned to pre-screen for this but have no fix.
> "If they say Consumer Cellular or Boost Mobile or Cricket or Jitterbug, we just don't even try anymore."  — C2, Kansas City

Affected carrier categories:
- Prepaid/MVNO carriers: Consumer Cellular, Boost Mobile, Cricket, Jitterbug
- VoIP/Internet bundled phones: Spectrum, United Fiber, and other cable-company phone services

C3 notes these carriers are disproportionately used by Veterans on fixed or limited income — precisely those who most need reliable, low-friction access to VA services. This is not just a technical problem; it is an equity issue.


### 4. Document Capture & Device Barriers
Many veterans don’t have newer mobile devices. Especially older Veterans and more cost conscious, but other Veterans use older or more limited devices as well. These Veterans face multiple technical barriers during the self-service verification flow.
- Flip phones and landlines cnnot upload photos. Veterans must come in-person or be assisted with a staff GFE (C3, C4, C5)
- Face scan / selfie issues: not understanding lighting basics, centering difficulties brought on by unfamiliarity with selfie mode, and motor accessibility differences that make it hard to hold the phone still or at all. Coordinators routinely hold the phone for Veterans (C1)
- Android camera permissions: Android phones block camera access by default; coordinators who are unfamiliar with the particular phone must then attempt to walk Veterans through settings to grant ID.me access (C4, C5)
> "I've had about eight of these, and they've all been [An]droids, and I cannot figure out how to unblock their camera"  —  C5, Maine


### 5. Escalation Pathway Burdens
For cases requiring ID.me help desk intervention (email updates, account unlocks, merges), C3 reports consistent wait times of 30–40+ minutes on the priority coordinator line. C4 reports 2–4 hours sessions when an account email merge is required.
> "That is the hardest part of my job working virtually with a Veteran and ID.me — all the time spent on the phone waiting to get through."  — C4, Minneapolis
- Coordinators acknowledge ID.me support agents are patient and helpful when reached. The issue is volume and wait time, not quality.
- Human chat feature times out before assistance is complete
> When seeking help through the human-backed, chat-based process, C4 mentioned the chat can time out, losing progress towards a resolution.
> "Yesterday I had a person come in at 2:00. They left at 4:00, waiting on the trusted referees and the merge and the chat. The chat timed out on your end."  —  C4, New Hampshire
- AI Chatbot inconsistencies decrease trust
> 'Roy,' ID.me's AI chatbot, gives inconsistent answers and is not reliably useful as a first-line support tool.  C3 uses it as a first attempt before calling the help desk, but finds it unreliable enough that she does not rely on it,

### 6. Perceived inconsistent ID.me Flows
Both C3 (remote) and C4 observed that the ID.me verification flow behaves inconsistently in ways that undermine coordinator confidence and planning:
- Recovery code not consistently prompted with password change of verified accounts: sometimes it’s asked, sometimes not, with no clear logic (C3)
- UPS in-person verify option doesn't show up from some Veteran’s without explanation (C4, C3)
- Multiple back-to-back sign ins lock MFA: after signing into ID.me for VA.gov, then choosing the 'verify your account' button on VA.gov, ID.me website then requires Veterans to sign in again. Coordinators have noticed that a third sign-in within five minutes can cause MFA lockout errors (C4)
- Better error messaging: when a lockout occurs. It should tell the Veteran why it happened and how long to wait before retrying (C4)
> "I'm signing in three times within five minutes. Eventually I'm gonna get red flagged. And then there's no good error message."  —  C4, New Hampshire

- Document options can change dramatically between sessions: some Veterans see 3–9 secondary document choices, others seem many more (C4)
- Photo submission UI variability: after taking a photo, different devices show different confirmation indicators. Some show a checkmark, some say 'add photo,' some say 'submit.' Veterans do not know they still need to take an action to confirm, and coordinators working with a Veteran over the phone cannot see which interface the Veteran is looking at (C3)
- Temporary driver's licenses: not accepted by ID.me, even though they are legitimate government-issued and often the only ID a recently discharged or recently moved Veteran has (C4)
- Post-submission page stall: after photos are successfully uploaded, the verification flow sometimes freezes entirely. No buttons appear, or the button is present but does nothing when clicked. ID.me's backend has received the photos, but the Veteran's screen does not advance.  C3 avoids advising refresh (it may boot the Veteran out) and instead calls ID.me support, which typically pivots the case to video verification (C3)
> "They will submit the photos and then it will just not do anything. It won't advance. No buttons to click — or the button is clicked and it doesn't go anywhere. It just sits there."  —  C4 Minneapolis

### 7. Veteran Resistance to Video Verification
C2 surfaced that a meaningful subset of Veterans, primarily Vietnam-era, refuse to complete video verification due to privacy concerns, distrust of being recorded, or general discomfort with the technology.
> "Why do I have to be on your video? Are they recording me? These types of things. They will choose just not to move forward."  — C2, Kansas City

C2 described one incident where she had assured a Veteran that he would not be recorded. Then the ID.me trusted referee opened the call by asking for consent to record. This broke the Veteran's trust, and he did not complete verification.
Since coordinators are not aware of how the video verification call is scripted on the ID.me side, they can accidentally create misaligned expectations.

### 8. No Caregiver or POA Pathway
Two coordinators (C2 and C3) raised the absence of a formal caregiver or power-of-attorney pathway as a significant unresolved issue. Veterans with dementia, severe cognitive impairment, or mobility limitations cannot complete the biometric and identity verification steps independently, and no legal delegation pathway exists outside of court-appointed guardianship.
> "We were promised back when this all came into play that there would be something in place for those patients who have POA. Unfortunately, we still don't see that."  — C4, Minneapolis

C2 added that homebound Veterans, those who cannot travel to a VA facility or UPS store, are effectively locked out of the system entirely. Although C5 did go to Veteran’s homes to help them complete verification, coordinators in other areas did not make house calls. And medical providers who visit these Veterans in their homes are often not comfortable enough with the process to assist. 
A related privacy issue occurs when family members complete the verification process at home on a Veteran's behalf, but without the Veteran's full understanding or consent. Veterans later return to the VA confused or upset to find an account was registered in their name. When coordinators try to help Veterans report this to ID.me, Veterans often refuse, fearing it will reflect badly on their family or the VA or affect their care.
> "We run into issues where veterans later come back and say, 'I didn't mean for Shelley to set up an account. Why did she get to do that?' But we have no control over that because Shelley did that at home."  — C2, Kansas City

C2 also described an active impersonation attempt: a family member came to the VA presenting themselves as the Veteran, aware that DPOA is not accepted. C2's familiarity with the Veteran's record allowed her to catch the attempt through a knowledge-based question the impersonator could not answer correctly


## Next Steps
### Focus Area 1: Bug Fixes
- Verfiy submit button stalls and fails
- Decrease need for "Authorize VA" step for returning users

### Focus Area 2: UX Fixes
- Update language and nuances on temporary license acceptance
- Plain-language MFA error message + retry countdown
- Investigate password recovery communications through e-mail
- Investigate possible improvements on how to prompt Veterans to store recovery code

### Focus Area 3: Technical Investigations
- Reduce number of sign-ins during verification flow
- Increase verify compatability with email and cell phone providers
- Investigate work-arounds when e-mail is not being received (inbox full or other issues)
- Investigate browser-save warning at password creation (which can save the wrong password)

### Focus Area 4: Standardize Coordinator Preparation
- ID.me to share a standardized checklist to be vetted by Coordinators
- Promote pre-screening by coordinators using MPI
- Proactively update MHV coordinators of changes with sign in or verify.

## Requests for ID.me
### Share data on the identity document types that most frequently result in successful verification
- Problem: MHV Coordinators feel like the documents required for verification are not consistent or predictable, which makes it harder for Veterans to prepare. This ask can help us provide clearer recommendations in our checklist to help Coordinators feel more confident about the documents Veterans should come prepared with. Only if the Veteran doesn't have those documents, then they can move on to a "kitchen sink" approach
> "Do you have a driver's license, have you looked at it to see if it's expired? Do you have a passport or passport card. Bring it. Do you have add DD214? Bring it. Do you have a Social Security card? Bring it. Do you have a birth certificate? Bring it. And a a veteran's health identification card. Bring it and I'll say." - Coordinator from Maine
### Investigate verify document bug with the submit button, reported by MHV Coordinators
* Problem: When Veterans submit photos of their identity documents, the “Submit” button can become inactive which blocks them from moving forward in the process. This issue is reported most often with Android phones.
* We've asked the 5 VA coordinators we talked with to forward us info about these issues when they see them over the next couple weeks to help propel the investigation on IDme's side. The coordinator from Baltimore already responded that he's started seeing it more often since we spoke
> "I don't know if the system just gets stuck or if there's some reason why it's making us move out of the self-service realm and it's just not advancing... It just doesn't do anything or the button is clicked and it doesn't go anywhere. It just sits there." - Coordinator for Minneapolis

> "Friday [March 20] I had some difficulty with the ID documents submission. It was with individuals who had Androids. I either had to take the photo multiple times before ID.me captured it OR attempt to attach it 3-4 times. It was never an issue until recently" - Coordinator for Baltimore
### Direct Veterans to the trusted referee video call process if they have specific cellular providers
* Problem: Some discount phone providers aren't compatible with ID.me's self-service identity verification process, but many Veterans rely on these providers.
* We encourage ID.me to continue exploring ways to integrate successfully with these cell providers since they are disproportionally used by Veterans. In the interim, it would be very helpful to direct users with phone plans from these providers to verify with an extended video call. Currently documentation specifies that VOIP phones can only be used with specific carriers, but it's more accurate to say that this limitation apply to all types of cell phones, not just VOIP phones.
    * [Verify your identity with self-service](https://help.id.me/hc/en-us/articles/9198013708439-Verify-your-identity-with-ID-me-Self-Service)
    * [Verifying with an extended video call](https://help.id.me/hc/en-us/articles/360052242853-Verifying-with-an-extended-video-call)
    * [Technical requirements to verify your identity](https://help.id.me/hc/en-us/articles/1500004615921-Technical-requirements-to-verify-your-identity)
> "That's one of those phones that that doesn't get verified. Now I just ask when they come in the office, I say, who is your phone service with? If they say Consumer Cellular or Boost Mobile or Cricket or Jitterbug, we know they're not. I just don't even try anymore" - Coordinator for Kansas City
### Send information on participating UPS locations
- Problem: Coordinators are not sure about the availability of participating UPS stores in their area, which drives confusion while they are trying to help a veteran
- Increased awareness of availability can help Coordinators direct Veterans in the best way
> "We don't have many participating UPS stores in the area to service our veterans...some have voiced they would like to use that option" - Coordinator for Kansas City

## Questions for ID.me
### SLA on call wait times
* Answered - wait times meet contractual obligations with VA
* Follow-up question - can we let Coordinators know average or max weight times to offer some expectations?
        > "I think it would be helpful to share their expected wait times with patients [to help set expectations] - Coordinator for Kansas City
* Follow-up question - one coordinator when working with veterans from afar, dials the Help Desk number in as a 3-way conference call. The hold music volume is loud enough they can't continue conversation - they sent a request for the music volume to be adjusted lower. -  Coordinator for Minneapolis
* All coordinators cited long wait times for the help desk, some mentioned specific amounts of time.
> "I try and teach myself all that stuff so they don't have to, you know, wait, you know, 30 plus minutes to talk to a help desk." - Coordinator for Baltimore
> "I'd say that the number one [blocker] is if we have to call in because because the wait time is so long. I mean, if if we if we get it on a good day we get somebody to answer in 10-15 minutes. That's wonderful. Most of the time it's, you know, 27 minutes to maybe 40 minutes." - Coordinator for Minneapolis
> "We're waiting 15 to 30 minutes. And hour later, we finally get a trusted referee." - Coordinator for NH
> "When he's waiting for the trusted agent, he's gotta keep his thumb on the screen and wiggle it so that he doesn't get kicked off." - Coordinator for Maine
### Support queues information
* Understanding that there can be different wait times based on the issue, coordinators still have a question about when the triage happens. Understanding escalation and triage pathways would help VA align expectations and improve planning.
* One coordinator mentioned that they press 1 to speak to a representative and then wait without any perceived triaging. If we know the happy path for the triage flow we can let the Coordinator know if they are misinterpreting or not understanding how it work.
## Did the password reset flow include 2 emails in the past? 
- One coordinator mentioned that in the reset flow veterans have gotten 2 emails, and that caused confusion. In our own testing, we only got 1 email that we felt was very clear on what action needed to be taken. If 2 emails were being sent in the past, the coordinator might have remembered it from the pasy, and we'd like to let them know that context to help clear up confusion.
> "ID me sends out two emails one an instructional one and the other one is the actual password reset. What happens is an individual will go through reset password, they're gonna get just the instructional e-mail and then they click on the link that says here request an e-mail or password reset. And then it takes them back to the login page and it's just this never ending loop." - Coordinator for NH
