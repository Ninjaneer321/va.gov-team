## **EZR Management in VA.gov Profile - Product Brief**


# Product Vision:

Creating a future where Veterans, families, and caregivers access health care benefits effortlessly through a trusted, transparent, and frictionless digital experience—without delays.


# Problem Statement:

Veterans currently struggle to update essential contact information like Emergency Contacts and Next of Kin because this data is collected via the full VA.gov 10-10EZR form. This mandatory form-filling process for simple, granular updates creates friction and delays in maintaining accurate health care benefit data.


# Metrics:

How do you know whether you are making progress towards your vision? What qualitative and quantitative key performance indicators (KPIs) indicate whether the product is successful in meeting user needs? This might include KPIs from the following categories:



* Usability: How intuitive and easy to use is the product? Customer satisfaction scores?
* Effectiveness: how well does this product help users accomplish the task or desired outcome?
* Performance: availability and reliability - latency, error rate, saturation, etc

**Mark your top 3 KPIs with an asterisk – which KPIs are the most important to indicate whether you have made measurable progress towards achieving your vision and goals?**

|Category|KPI|Baseline (if avail)|Target|Description/Purpose|
|-----------|---|---------------|-------|-------------------|
|Effectiveness*|Monthly EC/NOK updates via Profile|TBD|10% increase over form-only baseline|Target indicates that Veterans are able to complete the task directly in the Profile, eliminating unnecessary form completion.|
|Effectiveness*|Time savings for Veterans|TBD|70% reduction|Target indicates the new non-form experience significantly reduces the time required for a Veteran to make a simple update compared to completing the full EZR form.|
|Effectiveness*|Data quality and completeness of EC/NOK records in Profile|TBD|85%|Target indicates that the easier, more intuitive experience leads to a higher rate of keeping contact information current and accurate.|
|Performance|API error rate|TBD|1%|Target indicates that the Veteran can rely on the data to be available when they need it, leading to increase trust|
|Performance|Profile page load time|TBD|No increase|Target indicates that the Veteran can quickly access the information they need, keeping task completion times low|

Usage and scale: contextual metrics around number of users, repeat usage, etc. (1-3 bullets)
* Track the number of Veterans who successfully use the Profile page to Add/Edit/Remove EC/NOK information post-launch.
* Monitor the number of support inquiries related to updating Emergency Contacts/Next of Kin.
* Measure time savings for downstream staff due to fewer manual data updates required from EZR forms.


# Key Product Features:

What are the core features and functionality that your product includes? (1-5 bullets)



* *MVP*
    * *Add/Edit/Remove Emergency Contact functionality directly within the VA.gov Profile.*
    * *Add/Edit/Remove Next of Kin functionality directly within the VA.gov Profile.*
* *Subsequent iterations*
    * ***Add/edit/remove health insurance coverage information***
        * *Provider name, policy number, group code*
            * ***Considerations:***
                * *More complex data structure than EC/NOK*
                * *May require additional VES API endpoints*
                * *Privacy considerations for insurance data*
    * ***Add/edit spouse demographic information***
        * *Name, SSN, date of birth, date of marriage*
        * *Address (if different from Veteran)*
            * ***Considerations:***
                * *Relationship to dependent management*
                * *Coordination with VBA benefits systems*
                * *Potential dependency on marital status verification*
    * ***Add/edit/remove dependent information***
        * *Name, SSN, date of birth, relationship*
        * *Financial dependency determination*
            * ***Considerations:***
                * *More complex workflows (multiple dependents)*
                * *Stronger integration with VBA benefits*
                * *Financial documentation requirements*
                * *Higher compliance and verification requirements*
    * ***Add/edit/remove dependent information***
        * *Veteran income, deductibles*
            * *Considerations:*
                * *Should this be on Profile?*
                * *How does this impact other programs reliant on income information?*
                * 


# Technical Strategy

Briefly describe or include a diagram of the system architecture of this product. Describe any major upcoming architectural changes to the product planned or needed. What major integrations or dependencies does your product have? Is it custom development or built using a SaaS/COTS system?   



* **System Architecture:** 
    * The work will integrate directly into the existing VA.gov Profile.
* **Key Integrations/Dependencies:** 
    * MVP will utilize the newer **Associations API from VES** to manage the edit/add/remove functions for EC/NOK data.
        * Only write new/changed data through API
    * Additional iterations will require different APIs
* **Timeline:** 
    * Work will begin following the AuthExp team's Profile 2.0 release (estimated for March).
* **Design:** 
    * Designs and UI are already largely in place, with only minor changes anticipated.
* **Technical Feasibility:** 
    * Collaboration with Health Apps engineers and the AuthExp team is required to ensure technical feasibility and successful integration.


### System Integration

**Primary Integration:** VES Associations API



* Read existing EC/NOK data
* Write new/updated EC/NOK data
* Delete/remove EC/NOK data

**Data Flow:**



1. User authenticates to VA.gov
2. Profile page loads, calls VES API to retrieve current EC/NOK
3. User initiates edit
4. User makes changes with inline validation
5. User saves, data validated against 10-10EZR rules
6. API call to VES Associations API
7. Success/error handling and user feedback
8. Page refreshes with updated data


### Data Validation Rules

**Must match 10-10EZR form validation:**



* Name fields: Required, max character limits
* Phone: 10-digit format validation
* Address: Standard USPS validation patterns
* Relationship: Restricted dropdown options
* All required fields must be completed


### Error Handling Strategy

**Legacy Data Considerations:** Given that some VES data is old and not properly formatted:

**Option 1: Data Validation & Re-entry**



* Attempt to load legacy data for display
* If data fails validation, prompt user to re-enter
* Clear messaging: "We need you to confirm this information"

**Option 2: Systematic Legacy Data Stripping**



* Identify improperly formatted legacy records
* Clear invalid data from display
* Prompt user to enter fresh data
* Treat as "net new" entry

**Option 3: Best Effort Display + Validated Save (RECOMMENDED FOR MVP)**



* Display legacy data as-is (read-only)
* Allow user to edit
* Only validate on save (new data must meet standards)
* Progressive improvement of data quality

**Recommendation:** Start with Option 3 for MVP, evaluate Option 1 or 2 based on error rates


### Performance Considerations



* API response time target: &lt;2 seconds
* Page load impact: &lt;10% increase
* Caching strategy for frequently accessed data
* Lazy loading for EC/NOK section if needed
