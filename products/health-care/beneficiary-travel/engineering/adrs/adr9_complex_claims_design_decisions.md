# Travel Pay Design History and Decisions

## Background and timeline

* In 2025, SMOC (simple-mileage only claims) was released on VA.gov and in VAHB. Users can easily file SMOC by answering three brief questions. SMOC is typically auto-adjudicated and does not require manual review by a travel clerk, but complex claims, which include documentation for additional expenses, go into manual review. 
* In August 2025, Travel Pay conducted [research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/08-2025--Travel%20Complex%20Claims%20Concept%20Study/09-2025%20Travel%20Pay%20Complex%20Claims%20Concept%20Study%20Research%20Findings.md) using a conceptual prototype to get a better understanding of Veterans’ mental model around complex claims.
* In January 2026, Travel Pay conducted User Acceptance Testing ([UAT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/2025-12%20Complex%20Claims%20UAT/research%20report.md)) to assess if users could successfully use the core functionality of complex claims, such as adding expenses, editing and deleting them, and submitting claims. 
* Over the week of February 9, 2026, complex claims was released to Veterans, reaching 100% of Veterans on Thursday, February 12, 2026. 
* The initial release of complex claims does not include scenarios for caregivers, community care appointments, alternative routes, or challenging mileage. See the [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/beneficiary-travel/product) and [Complex claims initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/product/initiatives/complex-claims/complex-claims-initiative-brief.md) for more information. 

## Design decisions made August 2025-February 2026

### Adding expenses with radio buttons vs checkboxes

After synthesis of August research study, we came up with initial concepts for complex claims. These early-stage designs incorporated a series of checkboxes, from which the user would select all the expense types they wanted to add to the claim. This decision was based on a desire expressed by users to be able to select their expenses at the start of the flow. However, the BTSSS portal has no way of storing the checkbox selections without the time-intensive work of creating a separate table to store the selection. (See [this Engineering ADR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/adrs/adr7_complex_claim_save_in_progress.md) for more details.) Given that we can’t store checkbox selections, we pivoted to using radio buttons instead of checkboxes. The user proceeds to the corresponding expense page after their selection, but nothing is saved until the user chooses to continue. When the user hits the continue button, the API call is made and the users’ input is stored in the claim. If the user enters information and does not hit continue and leaves the page, or goes back via breadcrumb or back button, the user is warned that any information they entered will not be saved. 

Note that we also [explored designs](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=7896-20612&t=CKTXtfIWlFar0BcQ-1) that more closely match the [Multiple responses (list & loop) pattern](https://design.va.gov/patterns/ask-users-for/multiple-responses), in which the user is asked if they want to add more expenses after creating every expense. We assessed that this unnecessarily extended the flow and resulted in too many unnecessary clicks. Our POs agreed and signed off on the decision to use the radio button design. 


### Expense and document association

As we were building the document attachment, we discovered that BTSSS has no way to associate a document (the attachment) with an expense (the metadata associated with the attachment). Without this association, the user is left with a set of documents that are unattached to any data, which makes re-entering a claim or editing expenses difficult. An early-stage solution was to add a document ID to the expense database; however, the final solution is actually the inverse: a unique ID is added to the document in the database. This allows us to connect the document to its correct expense data. However, this only works if the document was added on VA.gov, as adding expenses and documents in BTSSS will not populate the field that associates them. If the system finds an unassociated document for any reason, the user will be directed to finish the claim in BTSSS. Due to the ID being added to the single field in the database table, we cannot allow for multiple uploads at the time because there isn’t a place to put more than one ID in the table at this time. The user can combine receipts and upload them together, but right now we are constrained to one attachment per expense. See this [Engineering ADR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/adrs/adr7_complex_claim_save_in_progress.md) for additional details.


### Requiring receipts

BTSSS does not require receipts when adding them to a claim. However, any expenses without proof of the expense will not be approved. As Kristen McConnell notes in [this Slack thread](https://dsva.slack.com/archives/C05UTPZRZFY/p1767884029755979?thread_ts=1767728325.220989&cid=C05UTPZRZFY), a [core principle of VA.gov](https://design.va.gov/about/principles) is to “avoid dead ends” and set users up for success. Therefore, we decided to require receipts for all expenses except mileage (which has never required receipts). All stakeholders have approved this decision. 


### Removing the 30 day limit

During the work on complex claims, we were directed to remove an existing limitation that required users to submit claims within 30 days of their appointment. Per stakeholder guidelines, we should not prevent users from filing claims, but we can warn them that claims filed outside the recommended 30 day limit will most likely be rejected. We include the countdown on the appointments details page. The content changes to warn the user of this once the count hits 0 and we remove the top call to action from the appointment details page. If the user starts a new claim, they see a second warning on the intro page before they start. If the user wants to continue a claim they had started, but not submitted within 30 days, we warn them in a modal, before allowing them to return to the unsubmitted expenses page for that claim.


### Expense cards on Review and Confirmation pages

We decided to represent each expense on the Review page within a card. With the exception of mileage (discussed below), each expense type includes a minimum of:
* Date on receipt
* Amount requested
* Description
* File name

Some expenses, such as airfare, contain more fields. We had to determine which of these fields would be shown on the review card. We decided to keep the non-mileage cards consistent across expense types and display the 4 core data points above on all non-mileage cards. We also had to determine the header for each expense card. We originally designed the headers to include numbers (e.g. First parking expense, second parking expense, etc.) but this became potentially confusing if the user deleted the first parking expense. As such, we used the data and amount as the header for all non-mileage expenses. It's possible that some expenses will share the same header (if they have the same date and amount), but we suspect that users will understand that these represent the distinct expenses they uploaded. 

For mileage expenses, the user does not indicate a date, and we cannot safely assume the date of their travel. Therefore, we chose the header "Mileage expense".

Note that we originally formatted the expense cards as side-by-side [**Label**]: [value] (for example: “**Description:** Private parking lot”). However, we learned from engineering that this would require custom work, so we chose to stack the label and value vertically for the initial complex claims release. 


### Deleting expense cards

Once on the unsubmitted expense page, the user can choose to delete one of the expense cards. Because of the way we have done a workaround to associate an expense with a document (in part, to allow the user to have a scenario where they *can* edit or delete an expense and document all together), there are two separate API calls occurring when a user chooses to delete an expense card: one to delete the document, one to delete the data. We delete the expense data first, then the document. If either deletion fails, the user sees the same message informing them that their expense has not been deleted. However, the document deletion fails, there will be an unassociated document on the claim. The user will then be redirected to BTSSS if they leave and then return to continue their claim. 


### BTSSS redirect from appointment details

Aside from the mileage scenarios (the user starts from a different address or the trip is only one way), a user can be directed to BTSSS if:
* The user started their claim in BTSSS
* The user started their claim in VA.gov, went to BTSSS and added an expense, then came back to VA.gov, resulting in an unassociated document
* The user deleted an expense on VA.gov, and the delete document API call fails, resulting in a partially deleted expense (the expense data is deleted, but the document remains; see the ADR section "Deleting expense cards")
* (Unlikely) The clerk adds a document or edits the field where the document ID is stored

When any of these scenarios occur, we have logic in place to direct a user to BTSSS. Initially, we were going to direct them to BTSSS with language on appointment details and claims details; however, upon further examination, we realized that on the appointment detail view, we would not have the information necessary to determine if the BTSSS redirect was necessary. Due to this discovery, we now always direct users from appointment details to claims details for claims that are not submitted (i.e. with status "Saved" or "Incomplete"). From claims details, we can appropriately direct them to VA.gov or to BTSSS to continue their claim. 


### Mileage trip type on unsubmitted expenses page

When a user selects ‘mileage’ from the expense list, they will be asked whether the drive is one way or round trip. At this time, only round-trip mileage expenses can be filed on VA.gov; if a user selects, one way they will be directed to BTSSS with one of the established redirect scenarios. However, during testing we discovered that the API call that was supposed to be returning "tripType" and saving in the redux store was not performing properly. It was determined that "tripType" was a special field that could only be returned with the expense call for edit. The call would have to be made on each of the expenses on the unsubmitted expenses page, which would have large performance implications and would need to be addressed by the API team. Due to the performance issues, timing constraints, and input from the API team, we determined that trip type will not show on the review page card. If a user does hit the edit button, they will be returned to the page in order to change their selection, so there isn’t any UI functionality lost, although the ability to edit trip type isn’t as visually apparent as it was initially. 

*Note: If the user edits their selection to ‘one-way’ from ‘round-trip’ at this point, they will be directed to BTSSS and not returned to the unsubmitted expenses page.*


### Redirects 

A user might try to navigate to specific pages within the complex claims flow, perhaps because they have a URL bookmarked. In certain cases, we will redirect them to another page that better serves their needs. Depending on the case, that might be the Intro page, Expense selection page, Review page, or Claim detail page. See more details in [this Figma annotation](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=12532-83256&t=CKTXtfIWlFar0BcQ-1). 


### Don’t include “Save a copy of your form” section on Confirmation page

As noted in [this ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/129383), we are not including the “save” on the confirmation page in the initial release of complex claims. Users can save the content with a screenshot or by printing it in the “Print this page for your records” button. We will add this feature in a later iteration. 


### Summary of key decisions
1. No autosave. Everything is stored in BTSSS and the API call only occurs on ‘continue’ from the expense page. While a temporary storage solution was proposed, we did not move forward due to timing constraints, as well as concerns that if we built temporary storage, it would be out of sync with BTSSS and could lead to errors. 
2. Radio buttons over checkboxes, due to the portal not having a way to store the selection.
3. If there are any unassociated documents, due to a user adding them in BTSSS, or an issue in which a document has become unassociated, we re-direct the user back to BTSSS as we have no UI to show documents that are not attached to expense data.
4. Due to the way that we associate documents with expenses via a unique ID in a backend table, we have a 1-to-1 limitation at the moment and cannot allow multiple attachments on an expense. Users would need to include multi-page receipts in the same file.
5. Require receipts for all expense types except mileage expenses.
6. We allow for filing past 30 days, but warn users of the likely rejection and do not promote appointments past 30 days (i.e. limit the links indicating users should continue).
7. Consistently label non-mileage cards on Review and Confirmation pages with the date and amount of the expense.
8. Deleting an expense card can also result in an unassociated attachment if the API call to delete the attachment fails.
9. Users are directed from appointment details to claims details, as claims details is the only way we can tell if the BTSS is necessary.
10. Trip type on mileage does not appear on the unsubmitted expenses page card view due to API constraints and performance issues, but a user will still be able to edit mileage information. 
11. Redirect users who try to enter partway through a complex claims flow to a page that will better serve their needs. 
12. In the first iteration of complex claims, don’t include “Save a copy of your form” section on Confirmation page.


## Previous decisions

### Claims status language (early 2025)

Previous work was done to simplify statuses for the claims details pages (see Murals; [Descriptions](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741383202688/4275fca192314799dededc2a9aeae4fd383b0ace) and [Status Translation Layers](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1729029298796/b9c1bdc48809fbb04d73eed6f9d8c1e4474d56cb)). The stakeholders had concerns that users would call the help desk and the help desk would not know how to translate statuses. Staff would also need the mapping. Even though something similar has been done with disability claims, stakeholders did not want to change the staff side, which was not what the team was proposing. The work on statuses was paused. 

In 2026, the team at the time looked into this history and determined that due to timing constraints and other priorities, we would move forward with smaller improvements.


## Important Links

* [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/beneficiary-travel/research)
    * [Aug 2025 concept testing folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/beneficiary-travel/research/08-2025--Travel%20Complex%20Claims%20Concept%20Study) and [conceptual prototype](https://tfclkd.csb.app/)
    * [Jan 2026 UAT folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/beneficiary-travel/research/2025-12%20Complex%20Claims%20UAT)
* [Travel pay edge cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/product/initiatives/complex-claims/complex-claims-scenarios.md)
* [Collab Cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107829) and [associated Milestones/task](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1542)
* [Web Figma file ](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=250-9661&t=3zN6L98hKoz5rnFJ-1)
    * [Sandbox for complex claims](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=7585-78180&t=CKTXtfIWlFar0BcQ-1)
    * [Production/source of truth](https://www.figma.com/design/EM3ejHDOgnxaeOVRw6xnpf/Complex-travel-reimbursement-claims?node-id=11985-65116&t=CKTXtfIWlFar0BcQ-1)
* [Mobile app Figma file](https://www.figma.com/design/ZIHY63cFlD7pFjqQLA5rFN/Travel-Pay-Working---VA-Mobile?node-id=17-284&t=HydDibq6AercmzGs-1)
