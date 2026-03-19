
# Enhanced Application Flow Call 03/19/2026

**Attendees:** 
Premal B. Shah,
Katrina R. Fluss,
Jessica Stump,
Elizabeth Sauer,
Renata Keck,
Andrea M,
Angela D. Pinon,
Mary H. Lynch (Trilogy Federal)

**Notes:**
* Went through the screens for the advanced flow.
* May need to update the text about what it means to update an application.  The language may need to be tweaked.
* There is a question about OHI uploads, and if we want to push them to the standalone OHI or allow folks to upload it. The suggestion was to change the language on updating health insurance, something like please go to the OHI form.
* There's discussion on updating the sendback letters to point to online application.
* Note that we don't call the CHAMPVA enrollment card, an "A card". We should call it an ID card.
**Decision**  Remove OHI from the dropdown list of doctypes for uploading.
**Follow up**:
No major concerns, but the CHAMPVA team wants to meet internally to talk through some things. Will schedule a call.





# Enhanced Application Flow Call 03/11/2026

**Attendees:** Rebecca B, Katrina F, Angela P, Anne R., Hieu, Jessica, Renata, Andrea

**Doctype for marrying submissions**

* When someone submits supplemental or missing information, what we've heard is that's faxed or mailed, and indicate on a coversheet who the doc is for. Once that gets into Pega, how is it getting marked as supplemental?
    * It's not currently, there's no supplemental doc tab. We can flag something in a batch or flag supplemental (records maintenance, or independent documents)
    * Andrea: advocates for a doctype for supplemental information so that it's properly routed and tied back to a previous submission
* Anne: currently working on a doctype for updating a case. We could feasibly add it as supplemental information as an original batch.
    * What does that look like in Pega?
    * Hasn't been built yet, so idk
    * It's a top priority in the next PI
* We could ask for the new doctype and marry up to the old application
    * No one's opposed to this process, but Angela says that there's just so many doctypes. Is it an issue to add another one?
    * That's a separate conversation we need to have. Making those less confusing and easier to select would be a different conversation. 
* Wait for business input on the doctype label


**UX questions**

* Katrina confirms that use cases are accurate:
    * Applicant receives a CCL on their application and needs to send something in
    * Bene has a periodic update like a school cert, name change, etc.
* Is our assumption about minimum information for these use cases accurate?
    * Sponsor/applicant basic info is accurate 
        * CCL ID not required, optional for additional data matching
    * If an existing bene is submitting docs, the bene information more important than sponsor info

**OHI scenarios**

* If there's a request for an OHI, they need to fill out the entire form as a standalone
* Insurance card scenario:
    * It's dependent on matching back to the original OHI submission. If it doesn't match back to the OG submission, it creates duplicate work for the OHI team.
    * I don't think we do sendbacks for missing a health insurance card
    * Andrea asks if OHI issues prevent a user from enrolling (SMEs confirm that's not the case - enrollment goes through)
         * When we receive an application there's the checkbox that asks about health insurance. If they say they don't health insurance, no action on the business end. If they check that box but submit nothing, they receive a CCL and OHI at the time of enrollment. 
* **Decision:** Katrina and Andrea agree on updating the CCLs:
    * OHI CCL should point directly to the standalone OHI
    * All other CCLs should point to this new flow inside the 10-10D
    * Will work together to update that content to point to the right experience

**AI:** Angela to provide the whole list of supplemental documents that applicants/benes have to provide for the dropdown in this new flow
