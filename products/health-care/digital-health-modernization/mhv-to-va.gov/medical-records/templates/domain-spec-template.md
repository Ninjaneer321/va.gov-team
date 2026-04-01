# My HealtheVet on VA.gov Medical Records Domain Specification

## Domain: [Domain Name]

<details>
    
### Sub-domains/types:
- [ ] None

- [ ] Has subdomains/types:
    - Chemistry and Hematology
    - Microbiology
    - Pathology
  
</details>

## Subdomain 1

<details>

### [domain/subdomain] Fields to include in UI based on FHIR R4 specification

[field grid]

### VistA data as displayed in MHV Classic

[image here]


### [domain/subdomain] UI design, based on FHIR R4 specification


### Relevant subdomain 1 decisions

</details>


## Subdomain 2

<details>

### [domain/subdomain] Fields to include in UI based on FHIR R4 specification

[field grid]

### VistA data as displayed in MHV Classic

[image here]


### [domain/subdomain] UI design, based on FHIR R4 specification


### Relevant subdomain 2 decisions

</details>


## Subdomain 3

<details>

### [domain/subdomain] Fields to include in UI based on FHIR R4 specification

[field grid]

### VistA data as displayed in MHV Classic

[image here]


### [domain/subdomain] UI design, based on FHIR R4 specification


### Relevant subdomain 3 decisions

</details>


## Subdomain 4

<details>

### [domain/subdomain] Fields to include in UI based on FHIR R4 specification

[field grid]

### VistA data as displayed in MHV Classic

[image here]


### [domain/subdomain] UI design, based on FHIR R4 specification


### Relevant subdomain 3 decisions

</details>

## FHIR Resources

<details>
Use the current version of US Veterans Health Administration FHIR Map Set Implmentation Guide (first link below) as the authoritiative source for FHIR mapping.   The deprecated version is provided for reference only since some mappings in the MHV code may still be based on that.   Where there is conflict, use the authoritative source.   

If there is no clear path forward or extensions are needed to accomodate attributes, please make the OCT/DSD Product Owner aware.   The Product Lead will work with OCC/VCHIO Product Owner, clinicial subject matter experts and the FHIR Community of Practice to reach an agreement and document the decision.

- [US Veterans Health Administration FHIR Map Set Implementation Guide](https://software-va-fhir-cop-mapset-ig.pages.va.ghe.com/)
- [ FHIR Community of Practice SharePoint site](https://dvagov.sharepoint.com/sites/FHIRCommunityofPractice/SitePages/CollabHome.aspx)
- [Deprecated] [My HealtheVet PHR FHIR API 0.6.1](https://software-mhv-fhir-phr-mapping.pages.va.ghe.com/)

</details>


## API Endpoints

<details>
The unified (Spring Cloud Data Flow (SCDF)) endpoints combine VistA data from HDR VPR endpoints with Oracle Health data returned by Oracle FHIR endpoints and return a unified FHIR response to be consumed by the front end and displayed in the user interface. 

### Troubleshooting FHIR data
When is missing, not correctly displayed, or not properly formatted in the user interface, the following steps need to be taken:

  1. Check the Unified Response to determine if the missing/incorrect data is actually being returned for Oracle and VistA
  2. If the data is present for Oracle:
      2.1. Identify any differences in the way the Oracle and VistA data is formatted in the unified response
      2.2  Determine if the front end is accounting for Oracle vs. VistA differences when consuming the data
      2.3  Determine if the front end is accounting for Oracle vs. VistA differences when displaying the data
  4. Check the HDR VPR endpoint to determine if it's being returned in the HDR VPR response
  5. Check the the Oracle endpoint to see if it's being returned for Oracle.

</details>

### Unified FHIR data end points for [domain]

<details>

unified endpoints here
    
</details>

### HDR VPR JSON VistA data end points for [domain]

<details>
    
List HDR VPR endpoints here
    
</details>

### Oracle Ignite FHIR data end points for [domain]

<details>

List Oracle endpoints here
    
</details>

</details>

## References

<details>

[domain] SME review document
[domain] Mural designs

</details>
