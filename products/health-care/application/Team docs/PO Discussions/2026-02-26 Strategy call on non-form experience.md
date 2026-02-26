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
