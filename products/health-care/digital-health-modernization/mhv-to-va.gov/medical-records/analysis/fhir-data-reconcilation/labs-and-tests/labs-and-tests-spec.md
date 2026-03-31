# MHV VA.gov Medical Records - _Lab and Test Results_ Specification

Labs and Test results feature several different types of tests/procedures/studies.  

## Sub-domains (types)
- Chemistry and Hematology
- Microbiology
- Surgical Pathology
- Cardiology
- Cytology
- Radiology (will be moving to its own _Imaging_ domain in future enhancement)
- Blood Bank (future ehnancement])

------

## Cosmic vs. Atomic 

### Cosmic Test (VistA) / Orderable test (Oracle)
    
Each chem/hem lab test has “top-level” information that describes the metadata for the test. Each Cosmic/Orderable test may have one or more structured results. 

Chem/hem examples with _multiple results_ are panels like CBC, Chem-7 (test for seven different chemicals), Chem-12 (test for 12 different chemicals, ABG (Artial Blood Gas - test for levels of different gasses in the blood) where multiple assays or analytes are tested.  Assays measure or analyze the presence, quantity, or activity of a substance, like enzyme tests, presence of diseases like HIV, Covid-19. 

Chem/hem examples with a _single result_: Vitamin B12, SARS-CoV-2, or hematocrit

<img width="772" height="704" alt="image" src="https://github.com/user-attachments/assets/c95e06a6-715c-4904-b94a-28bfcc40a43c" />

### Atomic Test (VistA) / Discrete Task Assay (Cerner): 

Each lab test may have one or more results. In FHIR, these would be represented by a Resource called Observation. Observations may be returned as a set of structured data or as an unstructured report.

<img width="775" height="718" alt="image" src="https://github.com/user-attachments/assets/c2eb6c6c-4f7c-4562-a895-80e8c63b4a00" />

------

## Test Type: Chemistry and Hematology

### Chemistry and Hematology fields to include in UI based on FHIR R4 specification

### VistA data as displayed in MHV Classic (example of a Hemogram + Platelet test)

(click to view image; click again to enlarge)

<img width="300" height="1780" alt="chem-hem-classic" src="https://github.com/user-attachments/assets/2f5afec3-2129-4ddf-ac6e-c235cd89b0fa" />

------

### Chemistry and Hematology VA.gov UI design, based on FHIR R4 specification

Note that `Interpretation` in this mockup is incorrect.  Based on data we see returned in FHIR R4; `Interpretation` is the flag that describes if a result was normal, high, critically high, low, critically low. 

(click to view image; click again to enlarge)

<img width="206" height="900" alt="chem-hem-vagov" src="https://github.com/user-attachments/assets/3309395e-8c24-4bae-93b5-5305c4f96d29" />



### Relevant Chemistry and Hematology decisions







## Microbiology
 


### [domain/subdomain] Fields to include in UI based on FHIR R4 specification

[field grid]

### VistA data as displayed in MHV Classic

[image here]


### [domain/subdomain] UI design, based on FHIR R4 specification


### Relevant Microbiology decisions



## Surgical Pathology


### [domain/subdomain] Fields to include in UI based on FHIR R4 specification

[field grid]

### VistA data as displayed in MHV Classic

[image here]


### [domain/subdomain] UI design, based on FHIR R4 specification


### Relevant Surgical Pathology decisions



## Radiology



### [domain/subdomain] Fields to include in UI based on FHIR R4 specification

[field grid]

### VistA data as displayed in MHV Classic

[image here]


### [domain/subdomain] UI design, based on FHIR R4 specification


### Relevant Radiology decisions

## Blood Bank (future enhancement)



### [domain/subdomain] Fields to include in UI based on FHIR R4 specification

[field grid]

### VistA data as displayed in MHV Classic

[image here]


### [domain/subdomain] UI design, based on FHIR R4 specification


### Relevant Blood Bank decisions




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

  1. Check the Unified Response to determine if the missing/incorrect data is actually being returned for Oracle and VistA
  2. If the data is present for Oracle:
      2.1. Identify any differences in the way the Oracle and VistA data is formatted in the unified response
      2.2  Determine if the front end is accounting for Oracle vs. VistA differences when consuming the data
      2.3  Determine if the front end is accounting for Oracle vs. VistA differences when displaying the data
  4. Check the HDR VPR endpoint to determine if it's being returned in the HDR VPR response
  5. Check the the Oracle endpoint to see if it's being returned for Oracle.



### Unified FHIR data end points for [domain]



unified endpoints here
    


### HDR VPR JSON VistA data end points for [domain]


    
List HDR VPR endpoints here
    


### Oracle Ignite FHIR data end points for [domain]



List Oracle endpoints here
    




## References

Lab and test results domain brief

Lab SME review document

Lab Mural designs


