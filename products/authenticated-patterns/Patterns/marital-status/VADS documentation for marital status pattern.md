Ask users for…


# **Marital Status**

Use with caution: Available

Follow this pattern to ask a user for their marital status. 

### Resources

[Research](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=state%3Aopen%20label%3A%22DSP%3A%20Help%20users%20to%20manage%20benefits%20and%20tools%22) | [Figma](https://www.figma.com/design/ZIGDfSb8D5YLBdJavzDdqi/AE-Design-Patterns---Benefits-Card?node-id=1-129&p=f&t=FYZaidBZC5z1Xnts-0) | Code

### Contributors

Lynn Stahl (Agile Six)

Adam Whitlock (Ad Hoc)

Belle Poopongpanit (Agile Six)

Christine Rose Steiffer (Agile Six)

Kristen Faiferlick (Ad Hoc)

### On this page

Usage

Examples

How to design and build

Code usage

Content considerations

Accessibility considerations

Research findings


### **Usage**

#### **When to use this pattern**

* **When you need to collect a person’s marital status.** This applies to a  Veteran, spouse, or dependent who may be applying for benefits.

#### **Design principles**

* **Take a trauma-informed approach.** Although commonly asked, this question can bring up complex feelings and memories in respondents. Explain why we ask the question with an [Additional Info](https://design.va.gov/components/additional-info) component. Limit data collection to necessary data only for your form. 


### **How to design and build**

#### **How this pattern works**

##### “What is your marital status?” question

* **This question is the only required part of this pattern.**  Use the other questions in this pattern if your form needs more information.
* **Include an explanation for why we ask this question.** Place this explanation in an [Additional Info](https://design.va.gov/components/additional-info) component to give users the option to learn more if necessary.

Use these following questions in this pattern if your form needs more information. 


##### Spouse information

This optional section includes questions about the spouse, including:

* Name
* Date of birth
* Social Security number (SSN)
* If they are a Veteran
    * If yes, their VA file number and military service number


##### Marriage information

This optional section includes questions about the marriage, such as:

* Date and place of marriage
* Type of marriage
* Reason for termination, if applicable
* Date and place of termination or spouse’s death, if applicable


##### Living arrangement information

This optional section asks if the user lives with their spouse. If not, it also asks why and how much financial support the user provided their spouse over the past 12 months. 


##### Previous marriage information

This optional section features the [Multiple Responses](https://design.va.gov/patterns/ask-users-for/multiple-responses) (also known as: List & Loop) pattern to ask questions about previous marriages, including:

* Names of former spouse(s)
* Veteran status of former spouse(s)
* Date and place of marriage(s)
* Date and place of marriage termination(s)
* Method of marriage termination(s)


#### **Patterns and components used in this pattern**

* [Radio Button](https://design.va.gov/components/form/radio-button)
* [Select](https://design.va.gov/components/form/select)
* [Multiple Responses](https://design.va.gov/patterns/ask-users-for/multiple-responses)
* [Additional Info](https://design.va.gov/components/additional-info)

#### **Additional considerations**
* If you are asking only one question on a page, the question label should be an h3, as shown in the [Ask Users for... a Single Response](https://design.va.gov/patterns/ask-users-for/a-single-response#annotated) pattern. However, if you are asking multiple questions per page, give the page a descriptive page title as an h3 and use standard (non-header) labels for questions.


### **Examples**

[Will add examples once designs are complete]

*[Alt text: A form asking for the marital status of the user.]*


### **Code usage**

(Link to the page.code-link, when available)


### **Content considerations**

#### **Respondent role**

Veterans, their spouse, or a dependent can complete forms. Depending on who is completing the form, some slight alterations to the text content may need to shift. Update content as needed. For example…


### **Accessibility considerations**

#### Radio button accessibility considerations

* **VoiceOver on Safari has accessibility issues.** VoiceOver on Safari reads out the fieldset legend for each radio item. It should only read out the legend at the end of the first radio option. There's no workaround right now. Learn more in the [Radio Button component](https://design.va.gov/components/form/radio-button) page.


### **Research findings**

A [secondary research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/Discovery%20Research%20Report.md) from April 2025 explores which VA forms ask questions related to an applicant's marital status and how they phrase these quesitons. It also provides recommendations that influenced the creation of this pattern. 
