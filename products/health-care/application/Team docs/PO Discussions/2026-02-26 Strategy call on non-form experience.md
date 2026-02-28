##  Strategy for non-form experiences - moving from form to Profile
- 2/26/2026 
- Attendees: 
   * Premal Shah
   * Andrea Merrill
   * Heather Justice

### Notes

* **Main goal** of moving EZR data collection points to [VA.gov](VA.gov) profile is to:
    * Eliminate the need to fill out a form to update a piece of information that should/could reside in the profile.
* **We will start** with adding the ability to Add/Edit/Remove Emergency Contacts & Next of Kin in the Profile page
    * The AuthExp team is onboard with us doing this work
    * We will begin after their Profile 2.0 release (March)
    * Designs and UI already in place - possible minor changes needed
    * Will use the newer Associations API from VES for the edit/add/remove functions
* **Then** we can look into adding Spouse and Dependents info
    * Names
    * DOB
    * Date of marriage
* **Next steps**
    * Create Initiative/Product brief for EC/NOK work
        * Include How this aligns with our vision
            * *Creating a future where Veterans, families, and caregivers access health care benefits effortlessly through a trusted, transparent, and frictionless digital experience—without delays*
    * Audit EZR vs [VA.gov](VA.gov) Profile
        * Fields of data for each
        * Data mapping - where are we using the same data source?
        * Where are the gaps?
    * Determine value
        * Time savings for Veterans
        * Time savings for downstream staff
    * Discuss technical feasibility
        * Include Health Apps engineers
        * with AuthExp team on team feasibility
* **Future thoughts** that could impact VFMP tool and Health space
    * (VFMP team is considering some of this now - privacy concerns)
    * Non-Veteran profiles linking to Veterans via “relationship” (i.e. Spouse & Veteran, Caregiver & Veteran, Dependents & Veteran, etc)
        * How would profiles get linked together?
        * How would changes in one profile impact another that is linked?
        * How would Dependents who turn 18 impact the link?
        * How much information should be displayed if they add a Spouse or Dependent?
            * Name
            * DOB?
            * Other info?
* **Thoughts from the team to consider**
    * A few things to consider and add to the conversation:
        * The kin/family member profile would be an amazing add and would be useful to so many other benefits, including Champva.
        * The kin/family member info collected in EZR is not standalone, it is meant for the Household Financial.
        * I think all of the EZR can be broken down (and given to Profile) except for the Household Financial. Because it is related to how copay and travel reimbursement works, a form appoarch may still be required. This is not to say that the task-base or putting it in Profile is impossible, it just requires more thoughts then the other section.
            * Say we put financials in Profile somehow.  
                 * I wonder if Veterans report financials differently to different benefits programs, and how having a single data-point entry would impact that
                      * should it be different? 
                      * what reasons are there that the data reported would be different?
            * And then yeah, how would integration with Travel pay and copays work? 
            * Are we expanding va.gov profile too much?  
                 * What should live there?  
                 * What shouldn't?  
                 * Is there a separate space it should live? 
            * How does this compare/work with My-health dashboards & stuff?
