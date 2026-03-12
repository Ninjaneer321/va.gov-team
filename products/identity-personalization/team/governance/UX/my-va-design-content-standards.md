# My VA design and content standards

Last updated: March 2026  

# Jump to

[Overview](#overview)

[My VA files](#my-va-files)

[My VA Section guidance](#my-va-section-guidance)

[Claims and appeals](#claims-and-appeals)

[What the claim and appeals section is NOT …](#what-the-claim-and-appeals-section-is-not-…)

[Content standards](#content-standards)

[Subsections](#subsections)

[Claims and appeals Card](#claims-and-appeals-card)

[Disability rating card](#disability-rating-card)

[Forms and applications](#forms-and-applications)

[What the forms and applications section is NOT …](#what-the-forms-and-applications-section-is-not-…)

[Content standards](#content-standards-1)

[Subsections](#subsections-1)

[In-progress cards](#in-progress-cards)

[Completed forms cards](#completed-forms-cards)

[Health care](#health-care)

[Content standards](#content-standards-2)

[Subsections](#subsections-2)

[Appointments cards](#appointments-cards)

[Messages cards](#messages-card)

[Payments and debts](#payments-and-debts)

[Content standards](#content-standards-3)

[Subsections](#subsections-3)

[Benefit payment card](#benefit-payment-card)

[Overpayment and copay bill cards](#benefit-overpayment-and-copay-bill-cards)

[Universal My VA standards](#universal-my-va-standards)

[Design](#design)

[Components](#components)

[Alerts](#alerts)

[Cards](#cards)

[Headers](#headers)

[Links](#links)

[Components](#components-1)

[Alerts](#alerts-1)

[Warning alerts](#warning-alerts)

[System down, page level error](#system-down,-page-level-error)

[System down, page section error](#full-api-system-down,-page-section-error)

# 

# Overview 

The following usability best practices should be kept in mind when adding or updating features to My VA.

Designs should be created mobile first, with at least a single desktop view for reference, and follow VADS guidelines. Information on My VA should be dynamic and personalized to the user, not static. If your features include static information it might be better suited for the profile or an unauthenticated informational page. Please reach out to the Authenticated Experience Team if you have any questions about the best place for your feature. 

## My VA files 

* [Product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va)  
* [Figma files](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=9183-86997&t=swc2fouOH2jiLvkW-0)  
* [Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/research)  
* [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases)

# My VA Section guidance 

Below are sections that have individual guidance. [Universal standards](#universal-my-va-standards) are further down the page.

## Claims and appeals 

**Claims and appeals overview:** This section highlights claims and appeals currently in-progress and includes a direct link to the comprehensive claims tracker for managing all activity. [For full functionality refer to our use case documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/claims-and-appeals-use-cases) 

### What the claim and appeals section is NOT … 

* A forms tracker. The section follows the users claim or appeal process, which can include underwriting, additional documentation gathering, and more. Following the form or application is completed in the Forms and applications section of the experience. 

### Content standards 

#### Subsections  

* **Claims and appeals**: A detail card that shows information about the users active claims and appeals. Only 1 card shows at a time.  
* **Disability rating:** Summary card that displays the users combined disability rating. 

#### Claims and appeals card  

Cards are made up of 3 sections:

1. (Required) Card header to include  
   1.  Claim or appeal title  
   2. Date  
2. (Required) Card body text to include  
   1. Status of claim or appeal   
3. (Required) Link text   
   1. Links user to claim or appeal details

#### Disability rating card 

The card in the Disability rating section appears with the most up to date disability rating on file for the user. The card is made up of 2 sections:

1. (Required) Card header (Your combined disability rate is \_\_\_%)   
2. (Required) Link text   
   1. Links to user to view their disability rating va.gov/disability/view-disability-rating/rating

## Forms and applications 

**Forms and applications overview**: Managed by our team, this tool displays a form status directly linked to the digital or paper form, visible to both verified and unverified users. [For full functionality refer to our use case documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/README.md).

### What the forms and applications section is NOT … 

* Claim or appeals status. Think of it as a way for users to pick back up on in-progress forms and track forms that have been sent, but not yet filed. There is no additional tracking once the form is received. All claim tracking is handled in the Claims status tool (CST).

### Content standards 

#### Subsections  

* **In-progress forms section**: All user forms or applications that have the **DRAFT** or **ACTION NEEDED** status are displayed in this section.  
* **Completed forms section**: All user forms or applications that have the **SUBMISSION IN PROGRESS** or **RECEIVED** status are displayed in this section.

#### In-progress cards 

Cards appear in chronological order within this subsection, with the newest information presented first. Cards have 4 sections:

1. (Required) Card status tag (DRAFT or ACTION NEEDED)  
2. (Required) Card header (Form name)  
3. (Required) Card body text to include  
   1. Form number   
   2. Application expiration date  
   3. Last save date  
4. (Required) Link text   
   1. Links user to in progress application or form

#### Completed forms cards  

Cards appear in chronological order within this subsection, with the newest information presented first. Cards have 4 sections:

1. (Required) Card status tag (SUBMISSION IN PROGRESS or RECEIVED)  
2. (Required) Card header (Form name)  
3. (IF form is in LH BH API) PDF link  
   1. Links to user to view their completed form in a new window   
   2. The PDF link expires after 30 minutes of inactivity. The link automatically renews at 29 minutes. No actions are required from the user to update the link.    
4. (Required) Card body text to include  
   1. Submitted on date  
   2. Received on date  
   3. Download available date  
   4. Next step  
   5. Help desk number

## Health care 

**Health care overview:** This feature on My VA integrates with My HealtheVet and the VA online scheduling tool (VAOS or Appointments) to give the user dynamic content updates for upcoming appointments and unread messages. [For full functionality refer to our use case documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/health-care-use-cases)

### Content standards 

#### Subsections  

1. **Appointments**: Medical appointments that pertain to the user are displayed in this section. The Appointments subsection is limited to 2 cards.   
2. **Messages**: The amount of unread secure medical messages are displayed in this section. The Messages subsection is limited to 1 card.

#### Appointments cards  

2 cards appear in chronological order within this subsection, with the newest information presented first and are made up of 4 sections:

1. (Required) Card header (Upcoming appointment)   
2. (Required) Card body text to include  
   1. Date of appointment  
   2. Time of appointment  
   3. Location of appointment  
3. (Required) Link text   
   1. Links the user to appointment details

#### Messages card 

1 card in the section appears with the most up to date amount of unread messages for the user. The card is made up of 2 sections:

1. (Required) Card header (\# unread messages)  
2. (Required) Link text   
   1. Links the user to their secure messages inbox

## Payments and debts 

**Payments and debts:** Benefit payments include payments from the VA to the Veteran. Benefit overpayments are when a Veteran is paid more VA benefits than entitled. Copay bills include amounts Veterans must pay for VA health care services. [For full functionality refer to our use case documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/benefit-payments-use-cases) 

### Content standards 

#### Subsections  

* **Benefit payments**: Displays the Veterans most recent benefit payment. This section is limited to 1 dynamic card.  
* **Overpayments and copay bills:**  Displays the Veterans most recent benefit overpayment. Displays the Veterans most recent copay bill which is an amount Veterans must pay for VA health care services, similar to private insurance copays. This section is limited to 2 cards. 1 card for benefit overpayments and 1 card for copay bills. 

#### Benefit payment card 

Card content appears based on the most recent benefit payment information, and are made up of 3 sections:

1. (Required) Card header (Dynamic benefit payment type)  
2. (Required) Card body text to include  
   1. Monetary amount of deposit   
   2. Deposit date  
3. (Required) Link text   
   1. Links user to review their payment history 

#### Benefit overpayment and copay bill cards  

The card in the benefit overpayment section displays the number of the most recent benefit overpayments on file for the user. The card is made up of 2 sections:

1. (Required) Card header (\# benefit overpayments)  
2. (Required) Link text   
   1. Links user to the overpayment balances summary page 

The copay bills card displays the most up to date number of copay bills. The card is made up of 3 sections:

1. (Required) Card header (\# copay bills)  
2. (Required) Card body copy to include  
   1. Update date  
3. (Required) Link text   
   1. Links user to copay balances summary page 

# Universal My VA standards 

# Design 

* There are shared spacing rules across My VA that should be followed when creating new content. [Link to spacing Figma file.](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1327-12487&t=0pVANx1yZnv3PGBG-1)  
* When designing make sure to create all states of information for the feature, including, but not limited to:  
  * When the feature is available;  
  * when the feature is not available;  
  * all error states, including system errors.  
    * If error states have a dedicated status code, provide the status code.

## Components 

### Alerts 

* Page level alerts and messages should be a [standard alert](https://design.va.gov/components/alert/#examples---standard), and appear directly below the page header.  
* Alerts within the page, such as in a section or card, should be [slim alert](https://design.va.gov/components/alert/#web-2), and appear below the header or sub header of that section or card.

### Cards 

* Each datapoint available to the user should be within a card.  
* Cards should be grouped based on section.  
  * Sections include Claims and appeals, Forms and applications, Health care, and Payments and debts.  
    * *Examples such as Messages and Appointments under the Health care section.*

### Headers 

* Header content   
  * Do not use the words “VA”, “your”, or “my” in the H2, H3, H4 headers.   
    * The only time the term your is used on My VA is in the disability rating section of My VA and in the Common task section.   
* Header length   
  * H2 headers should be no more than 22-25 characters max.  
    * This is to meet magnification accessibility requirements.  
  * H3 subsection headers should be no more than 25-30 characters max.  
    * Note: H3 headers in the form and application card may be longer than 25-30 characters as the header is aligned type of claim/appeal and  to the date of when the claim or appeal was received.   
    * A good rule of thumb is to follow is if the H2 or H3 subsection header when viewed on the mobile web view runs on to two lines of text then it is too long.  When users who use magnification use their tool it is important that we keep the headers one line for accessibility. 

### Links 

* Link destinations  
  * If a card is showing specifics (specific claim details or appointment details) then that link in the card should link the user to the relevant detail page, if there is one.   
  * If a card is a summary card (Disability rating or Copay bills) then that card should link to the high level tool or that page. 

#### Link content

* Do not use the words “your”, “my”, or “VA” in the link text.   
  * Note: The Disability rating card link is an exception to this rule.   
* Links on My VA either begin with the word Review or Manage.  
  * If a user can take action on the content in the card, the word manage will be utilized (ex: Overpayments or Appointments).  
  * If the user cannot take action the word review will be used (ex: Benefit payments).  
  * Note: The Messages card and In-progress forms are an exception to this rule.   
* Links in cards and on the My VA page should be kept to one line especially when viewing on mobile.   
  * Links in cards have a character limit of 29-31 characters.  
  * Links on the My VA page have a character limit of 25-38 characters  
  * Note: the links in the Common tasks and Get help section are exceptions to the one line rule due to content. 

## Components 

### Alerts 

#### Warning alerts 

##### System down, page level error 

| Component | Warning alert standard |
| :---- | :---- |
| File | [Link to Figma file](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1548-2689&t=WZAzpvHJHwM6oqlz-1) |
| When to use | When the  entire page of My VA is down. |
| Content | Header: This page isn't working right now Body: We're sorry. Something went wrong on our end. Refresh this page or try again later. |

##### Full API system down, page section error {#full-api-system-down,-page-section-error}

| Component | Warning alert slim |
| :---- | :---- |
| File | [Link to Figma file](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1119-2228&t=WZAzpvHJHwM6oqlz-1) |
| When to use | When all APIs of a section or subsection is down. |
| Content | We can't show your \[dynamic header\] right now. Refresh this page or try again later. |

##### Partial API system down, page section error

| Component | Warning alert slim |
| :---- | :---- |
| File | [Link to Figma file](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1119-2228&t=WZAzpvHJHwM6oqlz-1) |
| When to use | When there are multiple APIs in a section or subsection, and all are not down. |
| Content | We can't show some of your \[dynamic header\] right now. Refresh this page or try again later. |

