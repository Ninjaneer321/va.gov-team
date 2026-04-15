# **Mobile: Overpay MVP Release Plan**

## **Step 1: Development**

List the feature toggles here.

| Toggle name | Description |
| ----- | ----- |
| FE: `overpayments` | When enabled, Veterans will be able to view and take actions on their Overpayments within the mobile App. Veterans will see the Overpayments tile on the Home tab under the Activity tile, and in the Payments tab. Once a user clicks on Overpayments they will have a new page displaying the debts list and can access the debt detail page as well as resolve an overpayment. New pages will open if a Veteran makes a payment, requests help, or disputes an Overpayment.|
| BE: `mobile_debts_enabled` | This is the BE feature flag and is **currently enabled** due to the direction of the Financial Management PO, Denise Coveyduc.|

## **Step 2: Validation**

---

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).  
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.  
- [ ] Work any downstream or dependent systems proactively to ensure that the feature is ready for use once it hits production.  
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:  
  - [ ] Review the plan with your DEPO/OCTO representative.  
  - [ ] Review the release plan with your team.

## **Step 3: Production rollout**

---

## **Define the Rollback process** 

* Matt Guest and Natalie Gibbons will monitor analytics and logging at each rollout phase and loop in the Financial Management team. Denise Coveyduc will be responsible for coordinating with the Debt Management Center (DMC) to ensure the Overpayment API keeps up with the volume of requests.
* The MFS team will coordinate with the VA Mobile App Tech Lead, Jon Bindbeutel, to move to the next release phases or roll back the feature on the VAHB app, as the Mobile App team is the only authorized team to make those adjustments. 
* If there is a significant increase in overpayment API errors or unexpected behavior, the team will disable the feature flag for all users if the success criteria is not met. These conditions include:
  * Rollback if the success rate drops below 99% during the review window
  * Rollback if failure rate exceeds 1%
  * Rollback if latency exceeds the agreed threshold
  * Rollback immediately if there’s a severe user-facing issue

### **Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)**

#### **Planning**

1. Working with Denise Coveyduc on finding Veterans to test in production builds for TestFlight (iOS) or Firebase App Tester (Android).  
2. Work with the VA Mobile App Lead, Jon Bindbeutel to create a UAT group with the Veterans' emails within TestFlight (iOS) or Firebase App Tester (Android).  
3. iOS testers will need to install Test Flight, build #3718 (Version 2.71.1) and toggle on the “overpayments” remote configuration.
4. Android testers will need to install Firebase App Tester, select build #3460 (Version 2.71.0) and toggle on the "overpayments" remote configuration. 
5. The MFS team worked with Perigean to find participants for UAT testing. These sessions are scheduled from Monday, April 13th - Friday, April 17th. Testing for the empty state was conducted Monday, April 6th and Tuesday, April 7th. 
6. Refer to our [UAT documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/combined_va_debt_portal/mobile/uat-overpayment) to find more details on documentation and recruitment criteria.

#### **Results**

* Number of users: **Need to update**  
* Number of bugs identified/fixed: **Need to update**   
* Was any downstream service affected by the change?: **Need to update**  
* Any changes necessary based on the logs, feedback on user challenges, or VA challenges? **Need to update**  

### **Phase II: Staged Rollout (also known as unmoderated production testing)**

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### **Rollout Planning**

* Desired date range: **May 19, 2026 \- May 26, 2026**  
  * **Note**: For the mobile release to occur on May 19th, 2026 all work needs to be finalized by the release branch of **May 6th, 2026\.**  
* How will you make the product available in production while limiting the number of users who can find/access it:   
  * We will be turning on the feature flag for a small percentage of users and increasing every few days as long if metrics meet our success criteria.   
  * We will plan to check the metrics around 10:00am ET and then determine to increase at that time, so that the MFS and FM team can immediately identify any issues.   
* **What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")**?: 
  * Debts controller latency (measure of time for when the debts come through and when they are able to respond): Average latency under 2 seconds over the last 24 hours
  * DMC Get Debts Endpoint Success (Mobile equivalent) %: 99% or better
  * DMC Get Debts Endpoint Failure (Mobile equivalent) %: Less than 1%
  * **Note**: When we review success/failure %, we should also look at the total request volume behind those numbers. That gives us better context, since early in rollout, a small amount of traffic can make those percentages look noisier than the actual trend.
* Who is monitoring the dashboard(s)?: Natalie Gibbons, Matt Guest, and FM Management Team BE 

### **Stage A: Canary**

#### **Planning**

* Length of time: **May 19, 2026**  
* Percentage of Users: 10% of users

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Debts controller latency index(measure of time for when the debts come through and when they are able to respond): 
  * DMC Get Debts Endpoint Success (Mobile equivalent) %: 
  * DMC Get Debts Endpoint Failure (Mobile equivalent) %:
  * **Note**: When we review success/failure %, we should also look at the total request volume behind those numbers. That gives us better context, since early in rollout, a small amount of traffic can make those percentages look noisier than the actual trend. 
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage B: 25% of users**

#### **Planning**

* Length of time: **May 20, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 25%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Debts controller latency index(measure of time for when the debts come through and when they are able to respond): 
  * DMC Get Debts Endpoint Success (Mobile equivalent) %: 
  * DMC Get Debts Endpoint Failure (Mobile equivalent) %:
  * **Note**: When we review success/failure %, we should also look at the total request volume behind those numbers. That gives us better context, since early in rollout, a small amount of traffic can make those percentages look noisier than the actual trend.  
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage C: 50% of users**

#### **Planning**

* Length of time: **May 21, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 50%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Debts controller latency index(measure of time for when the debts come through and when they are able to respond): 
  * DMC Get Debts Endpoint Success (Mobile equivalent) %: 
  * DMC Get Debts Endpoint Failure (Mobile equivalent) %:
  * **Note**: When we review success/failure %, we should also look at the total request volume behind those numbers. That gives us better context, since early in rollout, a small amount of traffic can make those percentages look noisier than the actual trend.   
* Was any downstream service affected by the change?:   
* Types of errors logged:  
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage D: 75% of users**

#### **Planning**

* Length of time: **May 22, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 75%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Debts controller latency index(measure of time for when the debts come through and when they are able to respond): 
  * DMC Get Debts Endpoint Success (Mobile equivalent) %: 
  * DMC Get Debts Endpoint Failure (Mobile equivalent) %:  
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage E: 100% of users**

#### **Planning**

* Length of time: **May 26, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 100%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Debts controller latency index(measure of time for when the debts come through and when they are able to respond): 
  * DMC Get Debts Endpoint Success (Mobile equivalent) %: 
  * DMC Get Debts Endpoint Failure (Mobile equivalent) %:    
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

## **Post Launch metrics**

---

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### **1-week results post 100% rollout**

  * Debts controller latency index(measure of time for when the debts come through and when they are able to respond): 
  * DMC Get Debts Endpoint Success (Mobile equivalent) %: 
  * DMC Get Debts Endpoint Failure (Mobile equivalent) %: 

### **1-month results post 100% rollout**

  * Debts controller latency index(measure of time for when the debts come through and when they are able to respond): 
  * DMC Get Debts Endpoint Success (Mobile equivalent) %: 
  * DMC Get Debts Endpoint Failure (Mobile equivalent) %: 

## **Post-launch Questions**

---

## *To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?  
2. What qualitative feedback have you gathered from users or other stakeholders?  
3. Which assumptions you listed in your product outline were/were not validated?  
4. How might your product evolve now or in the future based on these results?  
5. What technical tasks are needed to clean up (i.e., removal of feature toggles) 

