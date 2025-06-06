# Access to Care implementation README

**Note 4/1/25**
Access to Care is not retrieved directly by any Sitewide product. We retrieve processed access to care data from Lighthouse which consolidates that information. Satisfaction scores and wait times are retrieved by VAMC facilities for services via 2 requests to Lighthouse (1 request to the post endpoint of facilities-api makes the 2 requests). The first is to the main LH Facilities API endpoint that gives satisfaction scores. We make a secondary request internally to Lighthouse's services endpoint for that facility to request the wait times for particular services. 

Last updated: 2024-01-02

Access to Care provides information about wait times and satisfaction scores for various services offered by VHA facilities. These scores are also used to understand which services VHA facilities provide. This source is not used to determine Dental services.
* Accessible via the public internet
* Satisfaction: https://www.accesstopwt.va.gov/
* Wait times: https://www.accesstocare.va.gov/

## Owners
Project Manager: Theresa Baamonde (Theresa.Baamonde@microsoft.com) - this may be out of date

## Usage in the Facility Locator
Is specific to Facility Locator Detail pages. 

Most facility pages on VA.gov are generated by the CMS. Access to Care data for wait times / satisfaction will appear on the CMS-generated facility page, and will _not_ appear in that facility's Facility Locator record.

Some facility types do **not** yet have CMS-generated pages (e.g. a new facility opens and doesn't yet have a published CMS page). If a Facility doesn't have a CMS-generated Facility page, and _does_ offer Services, the Facility Locator record will point to a Facility Locator Detail page (e.g. https://www.va.gov/find-locations/facility/vha_691GD). These pages included Access to Care data (wait times, satisfaction scores). 


Access to Care may no longer be relevant to the Facility Locator when all Facility types have CMS-generated facility pages, and Facility Locator detail pages are no longer necessary.
