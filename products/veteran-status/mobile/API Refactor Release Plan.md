# **Mobile and Web: API Refactor Release Plan**

## Development

List the feature toggles here.

| Toggle name | Description |
| ----- | ----- |
| **Mobile:** `veteranStatusCardUpdate`| When enabled, Veterans will see their Veteran Status Card or ineligibility messages as to why they don’t have a Veteran Status Card on VA: Health and Benefits app. This work also enables the shared service to populate the Veteran Status Card and the messages for both web and mobile. |
| **Web:** `cve_veteran_status_new_service`| When enabled, Veterans will see their Veteran Status Card or ineligibility messages as to why they don’t have a Veteran Status Card on VA.gov. This work also enables the shared service to populate the Veteran Status Card and the messages for both web and mobile. |


## Production rollout

---

## **Define the Rollback process** 

* Developers and Product Managers will monitor analytics and logging at each rollout phase. The MFS team will coordinate with the VA Mobile App Tech Lead, Jon Bindbeutel, to move to the next release phases on the VAHB app, as the Mobile App team is the only authorized team to make those adjustments. The CVE team will be responsible for the phase release of this feature on VA.gov. 
* If there is a significant increase in API errors or unexpected behavior, the CVE team will disable the feature flag for all VA.gov users and Jon Bindbeutal will disable the feature flag on the VAHB app users.  

#### **Rollout Planning**

* Desired date range: **March 24, 2026 \- March 30, 2026**  
  * **Note**: For the mobile release to occur on March  24, 2026 all work needs to be finalized by the release branch of **March 11, 2026\.**  
* How will you make the product available in production while limiting the number of users who can find/access it:   
  * We will be turning on the feature flag for a small percentage of users and increasing every few days as long if metrics meet our success criteria.   
  * We will plan to check the metrics around 11:00am ET and then determine to increase at that time, so that the MFS and CVE team can immediately identify any issues.   
* What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")**?: **Work in Progress**  
  * Percentage of API errors: <1%
* Who is monitoring the dashboard: Natalie Gibbons, Matt Guest, Michael Harmer, Megan Commons, Janet Van, and Jesse Berman.  

### **Stage A: Canary**

#### **Planning**

* Length of time: **March 24, 2026**  
* Percentage of Users: 5% of users

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Percentage of API errors: 
  * Update once finalized  
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage B: 25% of users**

#### **Planning**

* Length of time: **March 25, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 25%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Percentage of API errors:
  * Update once finalized  
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage C: 50% of users**

#### **Planning**

* Length of time: **March 26, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 50%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Percentage of API errors:
  * Update once finalized  
* Was any downstream service affected by the change?:   
* Types of errors logged:  
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

### **Stage D: 100% of users**

#### **Planning**

* Length of time: **March 30, 2026**  
* Percentage of Users (and roughly how many users do you expect this to be): 100%

#### **Results**

* Number of unique users: \[FILL\_IN\]  
* Metrics at this stage (per your "success criteria"):  
  * Percentage of API errors:
  * Update once finalized  
* Was any downstream service affected by the change?:   
* Types of errors logged:   
* What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 
