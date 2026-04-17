# Instructions for Taking Ownership of Power BI Semantic Models

This document will detail the process for taking ownership of existing Power BI semantic models in a workspace. This will allow anybody in the workspace who has Admin or Contributor access in the workspace to select a semantic model and change themselves to an owner. After taking ownership of the model, the user will have to refresh their credentials to allow the scheduled refreshes to continue.

---

## Table of Contents

- **What is a semantic model?**
- **How to transfer ownership?**
- **How to update credentials and schedule refreshes?**

---

## What is a semantic model?

A Power BI semantic model is a data structure that contains the relationships from a query. The semantic model is established in Power BI desktop after connecting to an existing data source (Sharepoint excel files, Google Analytics, SQL, etc).  The semantic model will contain all of the logic for the ETL process including the query or connection, any transformations, and the final visualization-ready data.  After building the semantic model on Power BI desktop, the owner will publish this model to a workspace where additional configurations can be added. The most important configurations are the data source credentials and the refresh schedule to ensure that the data in the model stays up to date for visualizations. These are configured in the Power BI online workspace and can be set according to the needs of the teams. 

---

## How to transfer ownership? 

Transferring ownership of Power BI models requires the new owner to be an Admin or Contributor in the workspace that the model is published.  For UAE, the workspace is [MHV Patient Portal and Health Tools](https://app.powerbigov.us/groups/579eff14-3a9e-45e6-8cde-6770ee9ae2e4/list?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf). This stores all reports and semantic models built for UAE reporting. There are three main custom semantic models built for this team:
1. [GA4 Metrics](https://app.powerbigov.us/groups/579eff14-3a9e-45e6-8cde-6770ee9ae2e4/datasets/26c28379-0374-45bf-9c48-c0cc5411b2a6/details?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf) which pulls in Google Analytics events for the appointments metrics
2. [IVC Monthly Demo Metrics](https://app.powerbigov.us/groups/579eff14-3a9e-45e6-8cde-6770ee9ae2e4/datasets/c59f1df0-01c5-45de-9213-0d06ea2395dd/details?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf) that has the data for updating the monthly reporting slides
3. [UAE User Feedback](https://app.powerbigov.us/groups/579eff14-3a9e-45e6-8cde-6770ee9ae2e4/datasets/c25e0afd-5909-4532-9a52-58823890d9a2/details?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf) connects to the UAE User Feedback spreadsheets and visualizes feedback data

To transfer ownership of these roles, after selecting on the link and going to the model page in Power BI, the user should select File -> Settings in the toolbar. ![file_settings image](image-1.png)

After selecting settings, there will be a new screen and at the top of the page there should be an option to Take Over in the top of the page. After taking ownership of the model, the next step will be to reconfigure the credentials. 

---

## How to updated credentials and schedule refreshes?
After taking ownership of the model, you will need to update the credentials to your own to allow for automated refreshes for the given data sources. To update credentials, you will select `Edit Credentials` and then follow the steps to sign into the specific data source with your account. This semantic model will now use your credentials for all scheduled refreshes. 
![alt text](image-2.png)

The final step is to ensure that the refresh schedule is current and meets the team's needs. To view the current refresh schedule, expand the `Refresh` section and review the current schedule. Update any new preferences and after updating, the new refresh schedule will take effect. Any failures will now be sent to the new semantic model owner via email. 
![refresh schedule](image-3.png)

---