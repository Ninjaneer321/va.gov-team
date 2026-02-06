# Design Brief | Embedding the 0969 into the 527EZ
## Background
In order to embed the 0969 form into the 527 flow, we've scoped a potential MVP with features that fall into three buckets: **Definitely Do**, **Maybe Do**, and **Don't Do**. The strategy focuses on a high-impact, low-friction integration that balances clarity for the Veteran and technical feasibility.

## Approach
Review our discovery Mural for more details, as well as meeting notes from other product teams that have successfully implemented forms-within-forms, which have informed the selection of features below. 

* Audit and open questions for VBA
	* [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1742317253841/97b5418bfc632a580dcc642e3275900a98e743e3?wid=0-1767812712233)
	* [Github ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/128016)
* Learnings from other product teams
	* 526
		* [Meeting notes](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1742317253841/97b5418bfc632a580dcc642e3275900a98e743e3?wid=0-1768255359828)
		* [Figma](https://www.figma.com/design/uffC3A5H3rwEtjSybqG84G/526ez---Source-of-truth-updated-5.2025?node-id=4110-15655&t=RIDL6orcbLXc8ql1-11)
	* 1010D
		* [Meeting notes](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1742317253841/97b5418bfc632a580dcc642e3275900a98e743e3?wid=1-1768323215467)
		* [Figma](https://www.figma.com/design/hHsrfXGDiR7lQ7kEsxFyNe/Application-and-OHI-for-CHAMPVA-SOT?node-id=10084-60093&t=lOS17oT1Bg4tJu78-4)
	* [Github ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/129016)
* Scope and prioritization
	* [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1742317253841/97b5418bfc632a580dcc642e3275900a98e743e3?wid=0-1769466388784)
	* [Github ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130038)

## Recommended Scope
### Definitely Do (MVP)
- **Require the 0969 when applicable, but keep separate PDFs**
    - **Impact**: Veterans only have to navigate one seamless flow, which – we hypothesize – is more likely to result in complete submissions, and will prevent the claim from going into development.
    - **Risk:** Results in two separate documents on the backend, requiring careful management of data mapping and investigating how to handle the front-end payload. 
- **Reduce steps from the 0969 when embedding**
	- **Impact**: Removing steps such as Veteran information, reporting period, and transferred assets reduces redundant inputs that the user already submitted earlier in the flow.
	- **Risk**: Increases complexity for engineering.
- **Mention the 0969 in submission emails**
    - **Impact:** Increases Veteran confidence in submitting a complete application with no (or fewer) action items.
    - **Risk:** Requires getting new email templates through a long approval process.
- **Explore surfaces to append the 0969 form name**
	- **Impact:** Sets expectations for Veterans that two forms may be submitted, in case something goes wrong for either one. This form name may be added on the introduction page, minimal header, review and submit page, or confirmation page. 
	- **Risk:** Potentially confuses users if the 0969 is not relevant and will not be submitted in their pension application.
- **Add 0969 user input onto "Review and submit" page**
    - **Impact:** Allows Veterans to verify all data for both the 527 and 0969 forms in a single location before final submission.
    - **Risk:** The page may become quite long, potentially leading to "scroll fatigue" if not designed with clear headers.        
- **Link to 0969 PDF in help text**
    - **Impact:** Provides a necessary "escape hatch" or alternative for Veterans who prefer to fill out the paper form or want to see the official document layout.
    - **Risk:** If promoted too heavily, it might inadvertently encourage users to abandon the more efficient digital flow.
- **Add 0969 to pension's "How to apply" resource and support pages.**
	- **Impact:** Increases comprehension of pension requirements and options, beyond the middle of the application flow. 

### Maybe Do (Future Scope / Stretch)

These features offer value but require more investigation or have a higher LOE.
- **Combine forms into one card in MyVA and one CST submission**
	- **Impact**:
	- **Risk:**
- **Add 0969 details onto the confirmation page** 
	- **Impact:** Veterans have a receipt of what they submitted, potentially including a separate confirmation ID or two confirmations on the same page.
	* **Risk:** May require a custom build for the confirmation page and complicate messaging approach regarding zero-silent failures.
- **Alert users in the standalone 0969 form if they've already started or submitted an 0969 in their pension application**
	- **Impact:** Reduces possibility of redundant form submissions, where discrepancies in financial information may lead the claim to go into development.
	- **Risk:** By introducing API calls, there may be content churn for failure messaging, and this may not be a problem depending on user behavior. 
### Don't Do (Out of Scope)
The following features were rejected to avoid Veteran cognitive burden or technical bloat.

- **Prompt Veterans that they are entering a separate form in the middle of the application:** Research from the 1010D team has indicated that Veterans don't care about whether or not they're working on a different flow, just whether or not VA needed additional information. We think this may introduce more confusion rather than clarity for the user. 
    
- **Inform the user what documents may need to gather in order to answer the 0969:** The information a user would need to gather likely overlaps with the existing bullet points we mention on the pension introduction page.
    
- **Share a UI schema for 0969, rather than 2 (between the standalone and embedded form)**: Avoided to keep the back-end mapping simple, without risking things breaking, given that this is a non-standard way to code the form.
