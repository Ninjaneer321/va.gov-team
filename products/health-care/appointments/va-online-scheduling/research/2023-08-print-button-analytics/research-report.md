---
title: "Print Button Analytics and Feedback - August 2023 Research Findings"
product: "VA Online Scheduling (VAOS)"
team: "VAOS Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2023-09-05"
researchers: 
  - "Not specified in report"
research_goals:
  - "Assess the usability of the print button feature released on 08/02/2023"
  - "Measure usage patterns of the print button across device types"
  - "Analyze user feedback related to printing functionality"
methodology:
  - "Google Analytics data analysis"
  - "Medallia feedback analysis"
  - "Comparative usage analysis"
devices_used:
    desktop: 0
    tablet: 0
    smartphone: 0
    assistive_technology: 0
participants_total: 0
demographics:
  veterans: 0
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age: 
    "25-34": 0
    "35-44": 0
    "45-54": 0
    "55-64": 0
    "65+": 0
    unknown: 0
  education: 
    high_school: 0
    some_college: 0
    associates: 0
    bachelors: 0
    masters: 0
    doctorate: 0
    unknown: 0
  location: 
    urban: 0
    rural: 0
    unknown: 0
  race:
    white: 0
    black: 0
    hispanic: 0
    biracial: 0
    asian: 0
    native: 0
  disability:
    cognitive: 0
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "Immediately on release, users started clicking the print button. Desktop users clicked it the most often, and most users printed the upcoming appointments page."
  - "August was the first month since November 2022 where no users left comments related to printing, which indicates the feature successfully addressed user needs."
  - "The print button was clicked approximately 4% as often as the Start scheduling button during the same time period"
  - "Veterans printed upcoming appointments most frequently, followed by past appointments and pending appointments"
  - "Print button clicks averaged between 1-200 per day from August 2-September 5, 2023"
  - "Desktop users clicked the print button most, followed by tablet and mobile users"
recommendations:
  - "Follow up with UAT that will include testing this button on production"
kpi_alignment: []
outcomes:
  user: "Not specified in report"
  business: "Not specified in report"
opportunity_areas: []
further_research_needed:
  - "User acceptance testing (UAT) of the print button on production"
underserved_groups_missing: []
secondary_research:
  - "Google Analytics web data"
  - "Medallia feedback analysis"
  - "Historical feedback trends (August 2022 - August 2023)"
synthesis_tools_used: []
tags:
  - "PRDT: VA-online-scheduling"
  - "MHV: Appointments"
  - "BNFT: Healthcare"
  - "AUD: Veterans"
  - "DSC: Button"
  - "HDW: Desktop"
  - "HDW: Tablet"
  - "HDW: Smartphone"
  - "web-analytics"
  - "evaluative"
  - "product-analytics"
---

# Print Button Analytics and Feedback - August 2023

## Background

On 08/02/2023 the VAOS team released a feature for users to print their appointments list. This added a print button the the appointment lists using a new tertiary style. To assess the usability of the style and whether it's meeting a need, we gathered user behavior data and feedback from Medallia for one month after the release.

[Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-08-print-button-analytics/research-plan.md)

## Findings

**Immediately on release, users started clicking the print button.** Desktop users clicked it the most often, and most users printed the upcoming appointments page. We believe this indicates that the print button is findable/usable.
[Go to the detailed finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-08-print-button-analytics/research-report.md#google-analytics-usage-data)

**August was the first month since November 2022 where no users left comments related to printing.** We believe that, because Medallia feedback trends negative, receiving no feedback is an indicator that the print button may be meeting the intended need. 
[Go to the detailed finding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-08-print-button-analytics/research-report.md#medallia-feedback)

## Next steps

We plan to follow up with UAT that will include testing this button on production.

## Google Analytics Usage Data
Veterans immediately started clicking the print button when it was released on 08/02/2023. Clicks continued at a steady pace throughout the month, averaging between 1-200 per day.

Veterans on desktop computers clicked the print button the most, followed by tablet and mobile users. This chart shows the number of clicks from August 1st to September 5th, 2023 across those device types:

<img width="1620" alt="A chart showing the number of clicks of the print button from August 1st to September 5th, 2023. A table below the chart shows Desktop users clicked the feature the most, followed by tablet and mobile users." src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/2536801/bae4c432-7038-4c76-af09-cbe5352a9ef4">

## What they printed

Most Veterans printed the upcoming appointments screen, followed by past appointments and pending. This chart shows the number of clicks from August 1st to September 5th, 2023 across different pages:

<img width="1495" alt="A table showing clicks of the print button from August 1st to September 5th, 2023 by page. Most users clicked on the print button from the upcoming appointments page followed by past and pending" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/2536801/02ae50bf-a9d8-4c97-b9a8-4bd0d1c31aca">

## Comparative usage

In the same time period the Print button was clicked about 4% as often as the "Start scheduling" button, which is one of the most-used features in VAOS.

<img width="1619" alt="A chart showing clicks of the Start scheduling button from July 28th to August 21st 2023. A table below the chart shows that there were 179,763 clicks in the same time period" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/2536801/d971e2ce-b353-4b6b-b0ab-f1cd304c9bb1">

## Medallia Feedback
Since August 2022, the number of comments around printing has been minimal, with the highest number in August 2022 and March 2023. In the month after the print button was released, no users left comments about printing.

| Month | Total Comments | Negative | Positive | Neutral |
| --    | -- | -- | -- | -- |
| August 2023   | **0** | - | - | - |
| July          | **2**  | 1 | 1 | 0 |
| June          | **3**  | 3 | 0 | 0 |
| May           | **1**  | 0 | 0 | 1 |
| April         | **2**  | 1 | 1 | 0 |
| March         | **7**  | 5 | 2 | 0 |
| February      | **2**  | 2 | 0 | 0 |
| January       | **3**  | 2 | 1 | 0 |
| December 2022 | **3**  | 3 | 0 | 0 |
| November      | **0**  | 0 | 0 | 0 |
| October       | **1**  | 1 | 0 | 0 |
| September     | **2**  | 1 | 1 | 0 |
| August        | **7**  | 4 | 0 | 3 |
| Totals        | **33** | **23** | **6** | **4** |


### Comments in 2023 Related to Printing

**August** 

No mention of printing. 


**July** 

(POS)  
_What task were you trying to do today?_  
Print my appointments  
_Were you able to do your task today?_   
Yes  


(NEG)  
_What task were you trying to do today?_   
Get a printout of my recent lab results  
_Were you able to do your task today?_  
No  

**June**  

(NEG)  
Wanted to print out my appointment list but I see no way to do that. There used to be a small printer icon but that appears to have disappeared. 

(NEG)  
(I want to) print a list of my appointments.  I don't want to print each appointment individually 

(NEG)  
(I) need a way to print a list of appointments with details. 

**May** 

(NEUT)  
Requested a community care audiology appmt for the second time. First one a few days ago seems to have been deleted. This time I printed the appmt reaquest. 


**April** 

(POS) 
What task were you trying to do today?  
Print appt  
Were you able to do your task today?  
Yes  

(NEG)  
You need to be able to print out a list so that it can easily be added to a calendar and/or given to caregivers to add to their calendars. 

**March** 

(NEG) 
Took too much time to print my appointments  

(NEG) 
I cannot print my appointments and I get signed out every time I change to a different appointment.  Horrible experience. 

(POS) 
What task were you trying to do today?  
print out my appointments  
Were you able to do your task today?  
Yes  

(NEG)  
Find and print all VA appointments on a single sheet. I did not find where any this function was available. This helps me to see the overall picture of upcoming appointments. If this function is not available it would be nice to have. 

(POS)  
What task were you trying to do today?  
Print Appointments  
Were you able to do your task today?  
Yes  

(NEG)  
What task were you trying to do today?   
Tried to print my appointments. The kiosks have been taken away at the VA. Continuously coming up with ways to inconvenience the veterans so the VA can save money is why we commit suicide. You people don't give a fuck about us.  
Were you able to do your task today?   
No.  

(NEG) 
What task were you trying to do today?  
print upcoming appointmets  
Were you able to do your task today?   
No.  

**February**  

(NEG)  
NEED PRINTER FRIENDLY VERSION for appointments  

(NEG)  
Need information on Date Page so we can Print. 

**January** 


(NEG) 
I was unable to print my February appoinment . Also the login is to involved and you keep changing it!  I am also a patient at Mass. The VA should copy their system. 

(POS) 
What task were you trying to do today?   
print  
Were you able to do your task today?   
Yes  


(NEG)  
I only had five  small appointments.  Why did the font's  printout "Extra Large"  take up an ENTIRE page.  I would have given you a very satisfied MARK instead of  the Neither satisfied Mark. 
