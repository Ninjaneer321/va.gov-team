# Authenticated Experience UX decision log

**Template**
#### Date, What was the decision?
- What products does it affect? (optional, if applicable)
- Link to the conversation (GitHub, Slack, other)

---

## My VA

### All My VA
#### 11/07/2025 Direction on the List item component for Notifications
- Platform team verfied that using "Shift + return" to create two lines of text in the simple content version of the List item component instead of two seperape text box comomponents. 
- [Link to the conversation](https://dsva.slack.com/archives/C01DBGX4P45/p1762530150287459)

#### 05/04/2025 Make header content more specific and actionable
- Feedback provided during Design intent.
- Original designs followed mobile, but it was determined that since we have more real estate we can provide more context to our users.
- Headers were updated to be more specific and actionable with C&IA team after recieving feedback.
- [Link to Design intent ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109779)

### Forms and applications
#### 03/20/2026 Two alerts in ACTION NEEDED card is okay
- Met with VADS team and confirmed that including two alerts in the ACTION NEEDED card is ok because:
   - Alerts in close proximity are allowed in some use cases.
   - The second alert only appears after a user action and is a small segment of users.
- [Link to conversation](https://dsva.slack.com/archives/C01DBGX4P45/p1773882473013899)

#### 03/13/2026 ACTION NEEDED having the PDF link
- Identified that the current PDF link on the ACTION NEEDED status does not work. Additional work would be needed to make the link functional.
- PO confirmed that having the PDF generate on ACTION NEEDED is not mission critical. If it's a low lift fix, continue with fix, if it's high lift, add to backlog.
- Verbal confirmation in team meeting.

#### 02/23/2026 Updating Forms and Applications Download Button to Link 
- Platform team gave direction on utilizing the loading spinner on the download loading link
-  [Link to conversation](https://dsva.slack.com/archives/C01DBGX4P45/p1769091910696729)
- Content team recommended removing the success message for downloads and allowing for the users device to relay successful download messaging
- [Link to conversation](https://dsva.slack.com/archives/C01K37HRUAH/p1769114498797679)

#### 07/08/2025 Naming convention for form and application cards for cards that are not in SiP
- Content team approved using the form number as a title in the Forms and applications cards when no name is available from SiP. This is to support efforts with allowing uploaded forms onto My VA.
- [Link to conversation](https://dsva.slack.com/archives/C01K37HRUAH/p1751978322068579)

---

## Profile
### All profile
#### 10/07/2025 Direction on standard 401 and 403 messaging with VA.gov
- Content team provided direction on 401 and 403 messsaging on VA.gov.
- [Link to conversation](https://dsva.slack.com/archives/C01K37HRUAH/p1759839092543589)

#### 08/26/2025 Alerts can appear below subheader content in profile cards
- Approval from Platform design team that alerts can appear below subheader information in profile cards. Rather than directly below the header per VADS guidance.
- [Link to conversation](https://dsva.slack.com/archives/C01DBGX4P45/p1756232152336819)


### Contact information
#### 10/23/2025 Phone number area code inline validation messaging
- Content team approved custom inline validation messaging for phone number area codes (Enter a valid 3-digit area code) as there is no standard messaging for incorrect area codes.
- [Link to the conversation 1](https://dsva.slack.com/archives/C01K37HRUAH/p1761248776740019), [Link to conversation 2](https://dsva.slack.com/archives/C01DBGX4P45/p1761240995946859)

#### 07/22/2025 Change 'State' to 'States and territories' when a US state is selected during address editing
- Content team approved swapping State to States and territories with the removal of US Territories as countries from the address fields.
- [Link to conversation](https://dsva.slack.com/archives/C01K37HRUAH/p1753189539164579)

### Service history information
#### 01/14/2026 VSC alert updates
- Mobile team is updating VSC alerts to direct to the VA call center. Determined Service history information will not be changing to match at this time.
   - [Link to conversation](https://dsva.slack.com/archives/C01K37HRUAH/p1767895127894269)
- Phone numbers will appear on their own line to allow for dynamic back end updates as needed.
   - [Link to conversation](https://dsva.slack.com/archives/C07SD9P7XB9/p1770052636490629?thread_ts=1769792008.698649&cid=C07SD9P7XB9)

### Email and text notifications
#### 08/25/2025 Email and text notifications content standards
- C&IA team provided content standards for the Email and text notifications page in anticipation of Profile 2.0 and new notification asks.
- [Link to ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/113398)

---

## Shared projects
### Email verification

#### 11/06/2025 Alignment post midpoint review
- Met with governance team on 11/6 to discuss email verification alerts
- Decided to move forward with informational modal when the user selects "Resend confirmation link" button. This is due to technology constraints so the on page alert can change real time to reflect if the email bounced or was non deliverable at the same time of the send.
- Slim vs standard alert. In profile we typically use standard alerts for page level communications and slim alerts for card level communications. So the slim alert will show only inline with the Contact email card, and the standard alerts will show at page level on My VA and Notification settings. Aligned during this call that using the slim alert inline with Contact email card is ok due to all context being within the alert itself.
- [Link to the conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/124421#issuecomment-3498934884)
