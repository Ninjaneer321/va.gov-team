# Continuous Discovery- Keeping Disabled and Student Dependents Top-line Summary
[link research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/continuous-discovery-phase-2/Cohort%201/research-plan.md)
[link conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/research/continuous-discovery-phase-2/Cohort%201/conversation-guide.md)
[link interview transcripts]()
 
## Initial Findings

### Finding 1
Participants looking to make updates found the “Add or remove dependents” call to action to be incomplete.  

- _"I would be frustrated at this point if I were trying to add information about a disability as to why I would be in a form that says add or remove dependents . . . I'm just trying to provide more information to keep her on. I'm not trying to add her because she's already part of the benefit." - P8_

- _“[The Add/Remove link] looks like what I should click on but my goal is to add information about a dependent, not to add or remove one. That doesn't make sense to me" - P16_

- **Recommendation:** Update static content and content on My VA Dependents page to encompass the ‘update’ functionality of the 686 form. Ex: instead of “Add or remove dependents”, use the phrase “Add, remove, or update dependents”. This would apply to the form title, step titles, etc. We could also look at updating the paper form name as well

- **Effort:** Small - simple change to the CTA. Larger changes to VA as a whole could bump up the coordination effort, but we wouldn’t be directly responsible for those changes.
  
### Finding 2  
The link to start the 686/674 forms is at the bottom of a long intro page. Three participants felt that the content was overwhelming and made it difficult to find the link. 

- The intro page also emphasizes the info needed to add dependents. But if a user is making a change or removing, they don’t actually need all of this info. The intro page could lead users to over-prepare for the task and waste their time.

- _“I like to read all of [the content], but someone with significant PTSD might have trouble with it” - P17_

- **Recommendation:** Consider shortening the intro page content, hiding some content in accordions or other static pages on va.gov, or providing a link to start the form nearer the top of the page.

- **Effort:** Medium - This is a unique situation where the form does many things. The biggest effort would probably be coordinating with the content team since this page is an established VA pattern.

### Finding 3  
Participants' opinions were split on the prototype’s ‘check-in’ form structure.
- The 'check-in' structure involves asking users about removing, keeping, adding back, and adding on separate screens and then cycling them through the workflows for each change that they indicated that they needed to make. While no participants failed to complete the task with this design, some experienced confusion and friction. But others found the check-ins to be helpful reminders of possible dependent actions.

- Examples of friction
     - _“If I'm going into a form to add dependents, I don't want to be concerned with removing dependents also . . . now I'm trying to add my child and they're just trying to take more of my benefit away with these remove questions." - P8_

     - _“I prefer that you just ask about Jen because if you ask me this question [about removals] first . . . you'll lose me because I have to stay focused." - P17_

- Examples of confusion
     - _“Why is Porshia being brought up here while I'm in the middle of trying to make sure Jen is OK?" - P13_

     - _“It feels like I skipped a step, then I'm all of a sudden in Jen's questions again . . . I know this is what I want to do, but I'm confused as to why I jumped from "No, I don't want to delete anybody" to this question about Jen . . . I would have figured I'd go to a page with all three and it would be like, "What do you want to do with who" - P16_

     - _“How come it doesn’t give me options to add dependents? It asked me about removing, and now I have this random question about Jen – what is happening?” - P5_

- Examples of positive responses
     - _“I do like that even though you come here for one thing, it is checking whether the other things apply. If it don't pertain to you, just answer no. I’d rather have it asked versus not." - P14_

     - _“I think it's cool that they ask [about Porshia], just in case you might be able to get extra money and you didn’t realize.” - P14_

     - _"I guess they figured, well, since you're here managing your other dependents, you have any other changes? So I do like that they prompt you for that. . . . Thanks for checking in VA." - P15_

  - **Recommendation:** Weigh the pros and cons of this design vs other possibilities (See appendix) – it may decrease overpayments by catching removals, but it does add friction for the user to review each action. Are the potential avoided overpayments worth the additional friction for ½ of users? As a first pass, design team thinks maybe yes. Is there quant data we could look at or collect to help us make a decision? Additional testing? If we do decide to go with this design, we recommend changing the way the steps and questions are organized to alleviate the confusion users had.

### Finding 4  
On the Veteran address screen, participants had inconsistent understandings of what “I agree to receive electronic correspondence from VA about my claim” meant.

- Users were unclear on whether they would continue to receive paper correspondence if they check the box, or if this preference applies only to this submission, or to all VA correspondence moving forward.

- Context – this field was added to all PDF forms in 2024, but not all business lines actually use it. It is present on the 686c.

- **Recommendation:** Figure out what this checkbox actually does for the 686c and 674. If it IS necessary, clarify that users will continue to receive paper correspondence no matter what. Consider checking the box by default. If it is NOT necessary or does nothing, remove it!

- **Effort:** Small - inter-agency sleuthing could get us answers, but there might be OCTO-level coordination needed for what VA should do across teams, since this is a standard question.

### Finding 5  
Participants wanted more specific information about which medical records VA needs to determine a dependent’s disability status.

- The doctor's statement was clearer to users.

- _“Are they looking for when it first started? Over a period of time? The diagnosis codes? IEP records? Medications they’re on?...What do they actually need?” - P2_

- _“I am not sure what the difference is between a note from the doctor and the medical record. If I have the medical record, that is a statement from the doctor. If I need this doctors statement, I have to pay to go to the doctor and take a sick person’s appointment for this confusing reason.” - P8_

- **Recommendation:** Talk to David Reis/VSRs to understand more specifically what the necessary elements of a medical record are. Include that information in static content on VA.gov, and contextually within the medical records upload section.

- **Effort:** Medium - inter-agency coordination w/ VSRs to understand policy, but then easy to implement as content changes on VA.gov

### Finding 6  
Three of five participants who saw the screen were confused by the informational page listing the required evidence types being separate from the upload screens.

- The card design and alert seemed to imply some kind of action, but there was actually no action on this page. 
For context – we designed this informational page for the edge-case situations where a user might need to provide 5+ different types of evidence. And, for a situation where a user might want to see what’s needed and go get it. In the user-research setting, users didn’t have to go find documents.

- **Recommendation:** Revisit the design of this page - we may have reached the limit of what the current design system affords us re: components for this complex task. Consider an alternate design like a task-list to upload evidence.

- **Effort:** Medium - We may need to redesign the UI for the page informing users of evidence requirements. This work could benefit the whole VA, so could be slowed down by collab cycle etc.

### Finding 7  
Three of five participants who saw the screens were unclear whether they could upload multiple files in each upload screen.

- **Recommendation:** Clarify whether they can add multiple files, and if the 99MB limit is total, or per file. Note: full limit for a single form is 5GB

- **Effort:** Small - We need to clarify the requirements and then add content that supports it.

### Finding 8
Six participants found content callouts about "Overpayments" and "Reasons to add/remove dependent helpful".

- _“A lot of Veterans struggle to understand the nuances of the benefits, so it’s helpful to explain some of this stuff” - P4_

- **Recommendations:** Continue to call out overpayments and add/removal reason reminders in dependents designs where appropriate.

- **Effort:** No action needed.

### Finding 9
Most users would want to know if their answer might trigger an automatic denial.

- Participants were split on whether they wanted the form to stop them from continuing despite the probable denial, or allow them to continue.

- _“If the system is going to automatically deny my application then don't let me continue now, but if there is a gray area then let me continue. I could take action like talking to my child about the school they are going to, or double-check that the school is accredited“ - P16_

- _“I would like to be notified [that my answer may result in a denial], but allowed to continue. That would help me make sure I didn’t make an error.” - P17_

- **Recommendations:** Continue with our plan to explain potential for denials based on answers in our various forms (content team is working on how to do this gracefully). 

- **Effort:** No action needed
  
---

## Additional Insights
*Include insights that do not represent patterns but are still valuable.*  

1. Participants want the ability to report the disability when the child acquires it, and not have to wait until the child turns 18.
   - Participants shared that needing to wait results in confusion, stress, and automated dependent removals that don’t need to happen.
     
   - **Recommendation:** Discuss possible procedure changes with David Reis. This may go along with the recommendation below about clarifying what medical records are required. We could consider changing the VBMS child types and accepted values in RBPS so that a user can report a child’s disability at any time.
     
   - **Effort:** Large - inter-agency coordination of service change affecting multiple procedures and data systems

2. Participants might benefit from examples of qualifying disabilities.
   - Only one participant mentioned this. Veterans may not realize that common conditions might qualify their child to remain on the benefit. 
  
   - **Recommendation:** Listen in future studies to see whether this comes up. Consider providing a list of common disabilities that meet the criteria for 18+ child dependency, both on VA.gov static content and the 686 form.
     
   - **Effort:** Medium - getting this type of data from VA has been really hard historically, it might not even exist. Beyond finding the data, simple content change on our end.
     
3. Participants wondered if the student needed to be in school full-time or not.
   - Two participants incorrectly assumed that the school would need to be full time, and the form doesn’t specify.
  
   - **Recommendation:** Add content to the website and 674 form clarifying that school doesn’t have to be full time. 
     
   - **Effort:** Small - quick content change, and we have already confirmed the accuracy of this with David Reis
   
4.  One participant mentioned wanting to be able to add dependent parents (or at least find out how to do so) in the 686c/674 flow.
   - They used the language “became a caregiver for your parent” to describe that life change.
     
   - **Recommendation:** Short term: Add some pathway for users in the 686c to add parents – it could be an additional info component directing them to the form, more content about dependent parents on the site, of an offramp to 509. Long term: incorporate 509 into the 686/674 flow.
     
   - **Effort:** Medium-Large - Adding an offramp or info component to the existing form would probably be easy. The 509 asks for complex financial info (similar to pension), so building out the form might be challenging (the 509 is not digitized as a standalone yet, either).

5. Two users assumed that dependents from military service will transfer over to VA dependents automatically, and reported delayed payments because of the misunderstanding.
   - **Recommendation:** Consider adding a FAQ about this to static content on the site.
  
   - **Effort:** Small - we could recommend this change to the content team at any time.

6. One participant mentioned that having the form in Spanish would be really important, especially for programs that would apply to caregivers or family members.
   - **Recommendation:** Check in on the Spanish translation situation of this form.
  
   - **Effort:** Small - checking in on where 686c falls in  translation prioritization would be a small lift in itself.

7. Having separate upload components for the different types of evidence was helpful, but two users didn’t realize that the second screen would appear, and would have uploaded all documents on the first one.

   - _“I would prefer [medical records] and [doctor’s letter] to be on different screens, so I can keep track of them easier.” - P13_
  
   - **Recommendation:** Keep a separate upload component per document type (whether they are on the same or different screens).
  
   - **Effort:** No action needed
