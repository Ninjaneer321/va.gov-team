# International phone numbers

Last updated: February 2026  

* [Product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/international-phone-numbers)  
* [User flow](https://www.figma.com/design/EK8SiPzsrQaHAXTu7gRQM3/International-phone-numbers--74562?node-id=67-5722&t=Uk8enGjVcR1mMdQ1-1)  
* [Figma files](https://www.figma.com/design/EK8SiPzsrQaHAXTu7gRQM3/International-phone-numbers--74562?node-id=1-22&t=r0HLKi40CJnYkIcu-1)

# Jump to

[Overview](#overview)

[Use cases](#use-cases)

- [Home or work phone number](#home-or-work-phone-number)

- [Mobile phone number](#mobile-phone-number)

- [Shared profile editing interactions](#shared-profile-editing-interactions)

[To reproduce](#to-reproduce)

- [Contact information page](#contact-information-page)

- [Email and text notifications page](#email-and-text-notifications-page)

# Overview 

The following documentation encompasses use of VADS [telephone](https://design.va.gov/components/telephone) and [telephone input](https://design.va.gov/components/form/telephone-input) components within profile. Specifically on the **Contact information** and **Email and text notification** pages, and within the **Edit-as-a-subtask** flow. The component follows VADS standards.

# Use cases 

## Home or work phone number 

* **Description:** The Home and Work phone number sections allow a user to enter their phone number along with an extension. The extension input is always provided along with the telephone input. Home and Work phone numbers cannot be used for text notifications.  
  * [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4605-13798&t=nIlo9IHij5CknAG0-1)  
* **Inline validation:** There is one custom inline validation use case. Otherwise, all inline validation is default to the VADS components.  
  * **Extension input:** Triggers if the field does not contain six or less digits.  
  * [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4605-13798&t=nIlo9IHij5CknAG0-1)

## Mobile phone number 

* **Description:** The Mobile phone number sections allow a user to enter their phone number only. There is no extension option. Mobile phone numbers are used for text notifications.  
  * [Link to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4605-13798&t=nIlo9IHij5CknAG0-1)  
* **Warning messaging:** When a user enters an international phone number into the mobile field they receive a warning message informing them that they cannot receive text messages with an international phone number. If editing inline the message appears as a modal. If editing as part of a flow it appears as its own page.  
  * [Link to modal designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=4598-32692&t=m4yKHGRokdocqFrz-1)  
  * [Link to inline messaging designs](https://www.figma.com/design/Byfu9NRKXCtXN3DuMYguKI/Authenticated-Experience-Team-Symbols?node-id=1561-4628&t=frPd7jfzElneHmFo-1)  
* **Inline validation:** There is no custom inline validation. All inline validation is default to the VADS component.  
* **Email and text notification page:** When an international Mobile phone number is entered the Email and text notifications page hides text notification options. What displays depends on whether the user has an email address on file. For full functionality please refer to the [Email and text notification use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/use-cases#readme).  
  * [Link to missing email and US based phone number designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Email-and-text-notifications?m=auto&node-id=5289-11969&t=G16JuLOlehedgAkc-1)  
  * [Link to missing US based phone number designs](https://www.figma.com/design/EK8SiPzsrQaHAXTu7gRQM3/International-phone-numbers--74562?node-id=18-9218&t=8muKYbOJOCEUR71H-1)

## Shared profile editing interactions 

There are several shared editing interactions that are used in profile. The linked documentation includes the following:

* Adding information  
* Inline editing and validation  
* Save in progress  
* Saving information: Success  
* Saving information: Error  
* Removing information  
* Canceling edit changes  
* Edit new information while editing  
* Edit-as-a-subtask flow

[Profile shared editing information use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-interactions)

# To reproduce 

## Contact information page 

1. Sign in with any verified test account.  
2. Navigate to **Profile** › **Contact information**  
3. **Home**, **Mobile**, and **Work** phone numbers are all able to be edited and removed.  
   1. Updating a **Mobile** phone number with an international number will trigger the text notification messaging.  
   2. System errors have to be tested locally.

## Email and text notifications page 

1. Sign in with any verified test account.  
2. Navigate to **Profile** › **Contact information**  
   1. Remove both **Contact email** and **Mobile phone**  
3. Navigate to **Profile** › **Email and text notifications**  
   1. You can now view the User doesn't have an email or US based mobile phone on file use case.  
4. Select **Add an email address to your profile**, and add an email address.  
   1. Select **Add your mobile phone number to your profile**, and add an international phone number.  
      1. Doing so will trigger the warning message page, and the dropdown alert on the Email and text notifications page for testing.  
   2. System errors have to be tested locally.
