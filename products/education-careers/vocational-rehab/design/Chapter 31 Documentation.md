# **Chapter 31: Current Online Experience Use Cases**

Last updated: February 2026

- [User flow](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2576-3\&t=Yh6Ydlk9kueURf2p-1)

- [Figma screens](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2576-12715\&t=Yh6Ydlk9kueURf2p-1)

- [Product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers/vocational-rehab)

## **Chapter 31, current experience**

**The chapter 31 information page allows users to apply for Veteran Readiness & Employment benefits. All users, signed in and not signed in, will be able to search for and view the chapter 31 intro page. Only users signed in with a verified account (LOA3) will be able to fill out and submit the form.**


## **Common use cases**

**An unauthenticated user can access the Chapter 31 intro page but cannot access the form.**

- **Use case:** A user has not logged into va.gov and navigates to the Chapter 31 form to apply for Veteran Readiness and employment benefits.

  - Format & Content: [Link to designs](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2576-31076\&t=Yh6Ydlk9kueURf2p-1) 

**LOA1 authenticated users can access the Chapter 31 intro page but cannot access the form.**

- **Use case:** A user who has signed into [va.gov](http://va.gov) with an unverified account navigates to the Chapter 31 form to apply for Veteran Readiness and employment benefits.

  - Format & Content: [Link to designs ](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2576-12774\&t=Yh6Ydlk9kueURf2p-1)

**LOA3 (identify verified) users can access the form (application) and all other use cases.**

- **Use case:** Does not have any drafts or completed applications for Veteran Readiness and employment benefits.

  - Format & Content: [Link to designs ](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2576-34591\&t=Yh6Ydlk9kueURf2p-1)

- **Use case:** Has a benefit application or form draft saved but not yet submitted for Veteran Readiness and employment benefits.

  - Format & Content: [Link to designs ](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2578-35415\&t=Yh6Ydlk9kueURf2p-1)

- **Use case:** Has completed an application for Veteran Readiness and employment benefits.

  - The current state for this use case is the same for those who do not have any drafts. We recommend making the experience different.

  - Format & Content: [Link to designs ](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2576-34591\&t=Yh6Ydlk9kueURf2p-1)

**User has a VR\&E application in progress**

- **Use case:** When a verified user has a VR\&E application in progress they will see a card on MyVA with the following attributes:

  - The card will have a “draft” status.

  - The card only displays when it is in the in-progress/draft state. 

  - No other statuses are displayed on the card (eg. not submitted, in progress etc).

  * Format & Content: [Card component](https://design.va.gov/components/card)

  * [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16246\&t=KhCgIDPMpZ6FClDG-1)

  * [Link to code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md)

## **Edge cases**

### **Validation**

This feature has no validation use cases.

### **Flags**

- **Not signed in users attempt to access any section of an application**

  - If they enter a URL that leads directly to any specific page under careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ they're redirected to https\://www\.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/introduction.
 
- **LOA1 users attempt to access any section of an application**

  - If they enter a URL that leads directly to any specific page under careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ they are NOT redirected to the /introduction page and technically could still submit the form. This is how other VA.gov forms operate as well. Could be worth exploring ways to disallow.

### **Errors**

**Missing required content errors**

- **Use case:** If a user clicks continue before entering required content they will see an error next to the required content field. This is a pattern that is described on [design.va](http://design.va).

  - Format: Error [Link to design](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2617-9589&t=lrsFVJBXRAT5Mylc-1)

  - Links to va documentation

    - [Link to text field error pattern guidance](https://design.va.gov/components/form/text-input#forms-pattern---multiple) 

    - [Link to select error pattern guidance](https://design.va.gov/components/form/select#error) 

    - [Link to checkbox error pattern guidance](https://design.va.gov/components/form/checkbox#error)

**Saving Information Alerts**

- **Use case:** When a user has entered information on a page of an application and that information cannot be saved because of a connectivity issue.

  - Format: [Link to design](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2634-11081&t=lrsFVJBXRAT5Mylc-1)

- **Use case:** When a user has entered information into a new application and that information cannot be saved because of issues.

  - Format: [Link to design](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2634-24405&t=lrsFVJBXRAT5Mylc-1)
 
**Submission error**

- **Use case:** If a user has clicked submit on the review page and there are issues.

  - Format: [Link to design](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2608-18814&t=lrsFVJBXRAT5Mylc-1)
 
- **Use case:** If a user has clicked submit on the review page and there are connection issues.

  - Format: [Link to design](https://www.figma.com/design/gqBtkNOCslhEwes7TsBaQy/Ch31-VR-E--2024-Updates?node-id=2634-24427&t=lrsFVJBXRAT5Mylc-1)

**System errors & Maintainance Alerts**

  Note: There may be other system errors and maintenance alert. These need to be discovered by diving into the code.
