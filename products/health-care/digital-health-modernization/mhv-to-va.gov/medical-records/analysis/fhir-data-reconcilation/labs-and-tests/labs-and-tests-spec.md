# MHV VA.gov Medical Records - _Lab and Test Results_ Specification
Labs and Test results feature several different types of tests/procedures/studies.  Each type may contain many different test names.

## References
[Labs and test results Phase 1 Figma source of truth mockups](https://www.figma.com/design/SGP1z2LejUWqDZyT61po5J/Medical-Records---Phase-1?node-id=5525-60665&t=nAMzqpWI66fwuxxn-4)

[Lab and test results domain brief](https://dvagov.sharepoint.com/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7B2CD0CD54-AD57-42B8-B2C1-2D4F145AA2EA%7D&file=Domain%20Brief%20-%20Lab%20results.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1)

[Lab SME review document](https://dvagov.sharepoint.com/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7BFEDC587C-450B-4D79-AFED-A296AC1CC29A%7D&file=Lab%20results%20information%20on%20VA.gov.docx&action=default&mobileredirect=true&DefaultItemOpen=1)

[Imaging results domain brief](https://dvagov.sharepoint.com/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7BBED70000-FA45-44E0-8B91-9CDF5CE0FBE5%7D&file=Domain%20Brief%20-%20Imaging%20results.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1)

[Imaging results SME review document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Imaging%20results/Imaging%20results%20information%20on%20VA.gov.docx?d=w0887da3bbedb4994b48d7f90c9d93461&csf=1&web=1&e=2LzHvD)

[EKG results SME review document](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/SME%20Reviews/Primary%20care/Clinical%20test%20results%20(EKG%20Historical%20Dates).docx?d=wad54be52d012410587c287c1dd610f4f&csf=1&web=1&e=2zKd2G)

[Medical Records decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/decision-log.md)





## Sub-domains (types)
- Chemistry and Hematology
- Microbiology
- Pathology (also called Surgical Pathology in Vista and Anatomical Pathology in OH)
- Cardiology (EKG)
- Cytology
- Radiology (will be moving to its own _Imaging_ domain in future enhancement)
- Blood Bank (future ehnancement])

## Labs and Tests List View
[List View Figma prototype](https://www.figma.com/proto/SGP1z2LejUWqDZyT61po5J/Medical-Records---Phase-1?node-id=5523-26649&t=nAMzqpWI66fwuxxn-1)

[List view Figma protype - mobile PNG](https://github.com/user-attachments/assets/26b674a0-3f1b-46fc-8714-6b53a8da3d33) (right-click & view in new tab)

## Cosmic vs. Atomic 

### Cosmic Test (VistA) / Orderable test (Oracle)
    
Each chem/hem lab test has “top-level” information that describes the metadata for the test. Each Cosmic/Orderable test may have one or more structured results. 

Chem/hem examples with _multiple results_ are panels like CBC, Chem-7 (test for seven different chemicals), Chem-12 (test for 12 different chemicals, ABG (Artial Blood Gas - test for levels of different gasses in the blood) where multiple assays or analytes are tested.  Assays measure or analyze the presence, quantity, or activity of a substance, like enzyme tests, presence of diseases like HIV, Covid-19. 

Chem/hem examples with a _single result_: Vitamin B12, SARS-CoV-2, or hematocrit

<img width="772" height="704" alt="image" src="https://github.com/user-attachments/assets/c95e06a6-715c-4904-b94a-28bfcc40a43c" />

### Atomic Test (VistA) / Discrete Task Assay (Cerner): 

Each lab test may have one or more results. In FHIR, these would be represented by a Resource called Observation. Observations may be returned as a set of structured data or as an unstructured report.

<img width="775" height="718" alt="image" src="https://github.com/user-attachments/assets/c2eb6c6c-4f7c-4562-a895-80e8c63b4a00" />


## Test Type: Chemistry and Hematology

### Chemistry and Hematology fields to include in UI based on FHIR R4 specification

#### Cosmic
<img width="2515" height="2147" alt="labs-chem-hem-cosmic-fields" src="https://github.com/user-attachments/assets/c4cba64f-9343-4410-851c-ce4fd65596c3" />

#### Atomic
<img width="2515" height="1714" alt="labs-chem-hem-atomic-fields" src="https://github.com/user-attachments/assets/71be54a4-3102-43cd-8281-df48414d9ec7" />

### Chemistry and Hematology VA.gov UI design, based on FHIR R4 specification

Note that `Interpretation` in this mockup is incorrect.  Based on data we see returned in FHIR R4; `Interpretation` is the flag that describes if a result was normal, high, critically high, low, critically low. 

(click to view image; click again to enlarge)

<img width="206" height="900" alt="chem-hem-vagov" src="https://github.com/user-attachments/assets/3309395e-8c24-4bae-93b5-5305c4f96d29" />



### Chemistry and Hematology VistA data as displayed in MHV Classic (example of a Hemogram + Platelet test)

(click to view image; click again to enlarge)

<img width="300" height="1780" alt="chem-hem-classic" src="https://github.com/user-attachments/assets/2f5afec3-2129-4ddf-ac6e-c235cd89b0fa" />



### Relevant Chemistry and Hematology decisions


N/A




## Microbiology
 

### Microbiology Fields to include in UI based on FHIR R4 specification
<img width="2515" height="3674" alt="labs-micro-fields" src="https://github.com/user-attachments/assets/88646ca7-3425-4498-a84d-5854efee1941" />


### Microbiology VA.gov UI design, based on FHIR R4 specification

<img width="323" height="3566" alt="labs-micro-vagov" src="https://github.com/user-attachments/assets/984d2cf4-f521-40b0-acd2-b620b503f4cd" />


### VistA data as displayed in MHV Classic

<img width="1127" height="1882" alt="labs-surg-path-classic-bb" src="https://github.com/user-attachments/assets/693a20f9-53c1-4ccf-a2ad-cb7a6146ce5c" />

### Relevant Microbiology decisions
N/A


## Pathology


### Pathology fields to include in UI based on FHIR R4 specification

<img width="2515" height="2220" alt="labs-surg-path-fields" src="https://github.com/user-attachments/assets/654011f8-1cab-4edd-8be6-15e9122436d4" />


### Pathology VA.gov UI design, based on FHIR R4 specification
<img width="369" height="3117" alt="labs-surg-path-vagov" src="https://github.com/user-attachments/assets/046a875a-3e36-4cf4-898d-c464267a2221" />


### VistA data as displayed in MHV Classic


<img width="1127" height="1882" alt="labs-surg-path-classic-bb" src="https://github.com/user-attachments/assets/3fcde52a-ed3c-4fbf-874f-610a5652b700" />



### Relevant Pathology decisions
N/A


## Radiology

### Radiology fields to include in UI based on FHIR R4 specification
<img width="2515" height="2554" alt="SME Review Imaging results on VA gov_2026-03-31_20-48-26" src="https://github.com/user-attachments/assets/cc799ed7-36a5-4319-95a4-b015ad91f014" />


### Radiology UI design for VA.gov based on FHIR R4 specification

#### Detail/imaging report
<img width="213" height="5402" alt="radiology-vagov" src="https://github.com/user-attachments/assets/8899d6f8-3cba-4c36-b836-41568155e2d1" />

#### Imaging report with image thumbnails
<img width="1280" height="1984" alt="radiology-thumbnails-vagov" src="https://github.com/user-attachments/assets/f0e1a1eb-93c2-461c-bba6-da1e07d704ca" />

### VistA data as displayed in MHV Classic

As listed in Blue Button report
<img width="1610" height="2062" alt="radiology-classic-bb" src="https://github.com/user-attachments/assets/ed955bbb-198e-416a-b0a6-2f9dd500c596" />

Image in Classic UI
<img width="5120" height="5113" alt="radiology-image-classic-UI" src="https://github.com/user-attachments/assets/7699552b-6a1b-4cdd-9e67-be2b8d90ebb5" />


### Relevant Radiology decisions
- Decision: For Phase 0 we will continue to link back to MHV website for users to retrive images, blue button report, and health summary.
- Reasoning: These are complex areas that take a lot of additional time to design, develop and test. We want to get more veterans using the domains in the browser to give us feedback on the functionality.



## Cytology
Designs follow the same pattern as Pathology

### Cytology Report in Classic Blue Button 
<img width="1128" height="770" alt="labs-cytology-classic-bb" src="https://github.com/user-attachments/assets/6331c57b-77f3-4750-be61-797d2c226c4b" />


## Cardiology/EKG
Note: EKG data for VistA stopped being in 2022 and SME decision was not to include that data.   Oracle DOES have EKG reports that can be displayed in place of the "Not available in this tool" text shown in the VA.gov design below.

### Cardiology fields to include in UI based on FHIR R4 specification
<img width="770" height="581" alt="image" src="https://github.com/user-attachments/assets/79833c95-6496-45fc-a3e7-562a676a2979" />

### Cardiology UI design for VA.gov based on FHIR R4 specification

<img width="1721" height="1665" alt="labs-ekg-vagov" src="https://github.com/user-attachments/assets/3c7cc362-fbf4-48b2-b3d2-2dee9b84cb18" />

## Blood Bank (future enhancement)


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
    




