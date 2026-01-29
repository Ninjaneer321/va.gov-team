# Continuity of Care Document (CCD)

## Overview
- The CCD used on CCD on MHV Classic and VA.gov MVP was created by calling a service hosted by Veterans Health Information Exchange (VHIE).
- CCDA is standard with a clearly defined structure and data categories. 
- Oracle Health has a FHIR API for CCD. [FHIR R4 APIs for Oracle Health Millennium - CCD](https://docs.oracle.com/en/industries/health/millennium-platform-apis/mfrap/op-binary-autogen-ccd-if-get.html)

## CCD-related Documents from MHV Classic
- [mhv_VA_CCD_MHVZZVISNONE_20210601_1411.pdf](https://github.com/user-attachments/files/24940891/mhv_VA_CCD_MHVZZVISNONE_20210601_1411.pdf)
- [mhv_VA_CCD_MHVTESTVETERAN_20170512_1032.pdf](https://github.com/user-attachments/files/24940892/mhv_VA_CCD_MHVTESTVETERAN_20170512_1032.pdf)

## VHIE Current State / Proposed future states (PRE-DECISIONAL)
[VHIEConceptDiagram_MHV_AggCCD_10082025.pptx](https://github.com/user-attachments/files/24941763/VHIEConceptDiagram_MHV_AggCCD_10082025.pptx)
- Current state:
   - VA Admin & clinical staff use VA Direct, which derives data from jHIE Agg CCD
- Future state
  - To-Be Option 1:  MHV uses the same jHIE Agg CCD service and applies any hold periods needed (currently only applies to C&P exam notes)
  - To-Be Option 2: MHV uses DOD-FHER Millennium from Oracle + VA VDIF-EP service, maps the XML to FHIR aggregate the FHIR API data with VistA FHIR data and combine into a single EHR

