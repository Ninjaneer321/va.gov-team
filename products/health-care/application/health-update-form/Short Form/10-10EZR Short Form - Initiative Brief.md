# Initiative Brief - 10-10EZR Short Form

## Outcome Summary

Reduce time taken in completing the 10-10EZR update form for Veterans who are not required to provide household/financial information and increase the number of overall submissions.

### Figma Links to the 10-10EZ short form flow
| Purpose | Form | Figma Link |
|-----------------------------------------------------------|-----------------|-----------------| 
| Veteran information - short form flow | 10-10EZ | [Figma designs](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=894-62087&t=IpLg1IDdkWSE1NCM-1) |
| Military service - short form flow | 10-10EZ | [Figma designs](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=2241-138086&t=IpLg1IDdkWSE1NCM-1) |
| Insurance information - short form flow unauthenticated | 10-10EZ | [Figma designs](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=3529-98034&t=IpLg1IDdkWSE1NCM-1) |
| Insurance information - short form flow authenticated | 10-10EZ | [Figma designs](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=1014-67898&t=IpLg1IDdkWSE1NCM-1) |


**Related/Associated product(s)**
- Product | [10-10EZR product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Product%20Brief%20(standalone%20form).md)
- Product | [10-10EZ  product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- Initiative | [10-10EZ Short Form Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Short%20Form/readme.md)

## Problem
Veterans have shared feedback that they are frustrated at being asked to provide household (Spouse/Dependent and Financial (income and deductibles) information when they have a 50% or higher disability rating, which does not require this information to qualify for or maintain VA health care.
The introduction of the short form will remove questions that are not necessary for a given Veteran's circumstances, and reduce the amount of time and effort required to complete the form.

## Desired User Outcomes
- Shorten the amount of time taken to complete the form.
- Reduce the number of visits required to complete the form.

## Undesired User Outcomes
- Confusion about what information needs to be provided and what doesn't.

## Desired Business Outcomes
- Fewer forms are abandoned.

## Undesired Business Outcomes
- Confusion on what information needs to be filled out, leading to Veterans abandoning forms.

---
## Measuring Success

### Objective: More health care update forms submitted.

Data source - TBD


**Key Result 1:** Target 30% of total 10-10EZR forms submissions through Short Form flow

| KPI / Metric | Post-launch [Month]| Post-launch [Month] | Post-launch [Month] |
| ------------ | ------------- | ------------------ | ------------------- |
| Total applications submitted | TBD | TBD | TBD |
| Short Form applications submitted | TBD | TBD | TBD |
| Pct. Short Form Applications |  TBD% |  TBD%  | TBD%  |

**Key Result 1:** Increase number of application submissions
*Using last 6 months (TBD) to calculate Baselines*
| KPI / Metric | Baseline: TBD | Post-launch [Month] | Post-launch [Month] |
| ------------ | ------------- | ------------------ | ------------------- |
| Avg. Application starts per Month | TBD | TBD | TBD |
| Avg. Submissions per Month | TBD | TBD | TBD |
| Pct. Applications Completed | TBD% | TBD% | TBD% |

**Key Result 2:** Reduce Sesssions / Time taken to complete application 
| KPI / Metric | Baseline: TBD | Post-launch [Month] | Post-launch [Month] |
| ------------ | ------------- | ------------------ | ------------------- |
| Avg. Sesions per Submission | TBD | TBD | TBD |
| Avg. Single sessions per Month | TBD | TBD | TBD |
| Avg. 2 sessions per Month | TBD | TBD| TBD |
| Avg. 3 or more sessions per Month | TBD | TBD | TBD |
| Avg. Time per session per Month |TBD|TBD|TBD|

**Key Result 3:** Reduce abandoned applications

| KPI / Metric |Baseline: TBD | Post-launch November | Post-launch December |
| ------------ | ------------------ | ------------------- |------------------- |
|Applications Abandoned per month |TBD% ( TBD of TBD started)| TBD% (TBD of TBD started) | TBD% (TBD of TBD started) |

---


## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The value risk that Veterans may become confused when they transition to the short form, and spend time looking for where to input the information that is no longer necessary.
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that the incorrect disability rating will be selected, meaning they might not fill out the correct version of the form.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
   - None
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Increase in application submissions.


### Solution Summary
- In-scope:
     - Implementation of short form for users with a disability rating equal to or greater than 50% based on information stored in the user's profile.
     - Implementation of short form for users with a disability rating equal to or greater than 50% based on self-disclosed information.
     - Implementation of short form for users with a combat veteran status (TBD).
- Out of scope:
     - Implementation of the short form for any other reasons.
     - Any clean-up / changes to the existing form.
--- 

## Launch Planning

### Timeline 
- June 2022: Complete QA
- July 2022: Launched to users

#### Initiative Launch Dates
- *Target Launch Date*
  - 4/7/2022
  - 9/5/2022 - relaunch
- *Actual Launch Date* 
  - 7/25/2022 - 5%
  - 7/27/2022 - 100%
  - 7/29/2022 - 0% - disabled feature toggle due to [production issue](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Short%20Form/7-29-22%20-%20Prod%20Issue%20with%20Short%20Form.md)
  - 9/19/2022 - 5% (ES deployed their fix on 9/17)
  - 10/17/2022 - 25%
  - 10/24/2022 - 50%
  - 10/26/2022 - 75%
  - 10/31/2022 - 100%

---
   
## Screenshots
[Authenticated Workflow](https://preview.uxpin.com/acda277e33e9629a7ab817f6c93c251b4a60ac56#/pages/141488399/simulate/no-panels?mode=i)

[Unauthenticated Workflow](https://preview.uxpin.com/2a1ce93f62d447e101cfce3c803d20941fba7203#/pages/141808810/simulate/no-panels?mode=i)

### After

[Authenticated and UnAuthenticated workflow](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/A71F1C96-FF98-42A2-9ADD-6D4B7A1DDB20)

[Screenshots of all screens](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/4EEB69A5-43C1-45B3-B5B6-58D7DA435BD1)

---

#### Communications
*Where will you discuss this initiative?*

<details>

- [Short Form epic #27679](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/27679)
- Team Name: 10-10 Health Apps team
- GitHub Label(s): 1010-short-form
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice, Mark Fallows

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson, Patrick Bateman
 
</details>
