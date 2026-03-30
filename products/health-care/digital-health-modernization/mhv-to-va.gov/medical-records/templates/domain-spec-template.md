# My HealtheVet on VA.gov Medical Records Domain Specification

## Domain: [Domain Name]

### Sub-domains/types:
- [ ] None

- [ ] Has subdomains/types:
    - Chemistry and Hematology
    - Microbiology
    - Pathology

## FHIR Resources
Use the current version of US Veterans Health Administration FHIR Map Set Implmentation Guide (first link below) as the authoritiative source for FHIR mapping.   The deprecated version is provided for reference only since some mappings in the MHV code may still be based on that.   Where there is conflict, use the authoritative source.   

If there is no clear path forward or extensions are needed to accomodate attributes, please make the OCT/DSD Product Owner aware.   The Product Lead will work with OCC/VCHIO Product Owner, clinicial subject matter experts and the FHIR Community of Practice to reach an agreement and document the decision.

- [US Veterans Health Administration FHIR Map Set Implementation Guide](https://software-va-fhir-cop-mapset-ig.pages.va.ghe.com/)
- [ FHIR Community of Practice SharePoint site](https://dvagov.sharepoint.com/sites/FHIRCommunityofPractice/SitePages/CollabHome.aspx)
- [Deprecated] [My HealtheVet PHR FHIR API 0.6.1](https://software-mhv-fhir-phr-mapping.pages.va.ghe.com/)

## API Endpoints
The unified (Spring Cloud Data Flow (SCDF)) endpoints combine VistA data from HDR VPR endpoints with Oracle Health data returned by Oracle FHIR endpoints and return a unified FHIR response to be consumed by the front end and displayed in the user interface. 

### Troubleshooting FHIR data
When is missing, not correctly displayed, or not properly formatted in the user interface, the following steps need to be taken:


  1. Check the Unified Response to determine if the missing/incorrect data is being returned for Oracle and VistA
  2. If the data is present for Oracle
     eIdentify any differences in the way the Oracle and VistA data is formatted in the unified response
  4. Check the HDR VPR endpoint to determine if it's being returned in the HDR VPR response
  5. Check the the Oracle endpoint to see if it's being returned for Oracle. 

### Unified FHIR data end points for [domain]

### HDR VPR JSON VistA data end points for [domain]

### Oracle Ignite FHIR data end points for [domain]

