# VA VistA → FHIR Mapping Bookmarks

This repository curates direct links to the **US Veterans Health Administration FHIR Map Set** Implementation Guide (IG) pages that document how **VistA** source data maps to **HL7® FHIR® (US Core)** resources. [1](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VAPractitionerRole.html)

---

## Quick Links (by domain)

### Core entry point
- **VA FHIR Map Set IG (Home)** – overview, navigation tips, and “Classes” table for file-to-resource correspondences  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/ [1](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VAPractitionerRole.html)

### Demographics
- **Patient** — VistA **PATIENT (2)** → **FHIR Patient (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VAPatient.html [2](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedicationRequestUnsigned.html)

### Vital Signs
- **Vital Signs** — VistA **GMRV VITAL MEASUREMENT (120.5)** → **FHIR Observation (US Core Vital Signs)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VitalSigns.html [3](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-DecisionPrecisionPlus.html)

### Clinical Notes (TIU)
- **DocumentReference (TIU)** — VistA **TIU DOCUMENT (8925)** → **FHIR DocumentReference (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-DocumentReferenceDocumentReference.html [4](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/changes.html)
- **Binary (TIU content)** — binary payloads associated with TIU notes  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-DocumentReferenceBinary.html [5](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedRefillRequestMHVTask.html)

### Laboratory
- **DiagnosticReport (Chem/Hem/Tox/RIA/Ser, 63.04)** — VistA **LAB 63.04** → **FHIR DiagnosticReport (US Core Lab)** (+ Observations, Specimen, ServiceRequest references)  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-LabObservationChemhemtoxriaserDiagnosticReport.html [6](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedicationRequestOutpatient.html)
- **Lab Observation (abstract)** — consolidates US Core Lab Observation “must support” clarifications for concrete maps  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-LabObservation.html [7](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedicationRequestNonVA.html)
- **Specimen (Pathology example)** — VistA **CYTOPATHOLOGY (63.09)** → **FHIR Specimen (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-DiagnosticReportNoteCytopathologySpecimen.html [8](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VitalSigns.html)

### Providers
- **Practitioner** — VistA **NEW PERSON (200)** → **FHIR Practitioner (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VAPractitioner.html [9](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedicationRequestPending.html)
- **PractitionerRole** — role associations (organization/location/specialty) for clinicians  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VAPractitionerRole.html [10](https://nhicore.nhi.gov.tw/pas/1.1.1/StructureDefinition-Claim-twpas.profile.json.html)

### Conditions
- **Condition: Problem (Problem List / Health Concerns)** — VistA **PROBLEM (9000011)** → **US Core Condition – Problems & Health Concerns**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-ConditionProblem.html [11](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-DebtPortalPatient.html)
- **Problem Clinical Status ConceptMap** — maps VistA problem status values (ACTIVE/INACTIVE) to FHIR **Condition.clinicalStatus**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/ConceptMap-VF-problemStatus.html [12](https://jpsys.com/hl7-fhir-cop-empowers-va/)
- **Problem Verification Status ConceptMap** — maps VistA verification indicators (e.g., HIDDEN, TRANSCRIBED) to FHIR **Condition.verificationStatus**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/ConceptMap-VF-problemVerificationStatus.html [13](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-DocumentReferenceBinary.html)
- **Profile hierarchy (FYI)** — US Core distinguishes persistent **Problem List** from per‑visit **Encounter Diagnosis**; VA IG mirrors that separation  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/profileHierarchy.html 
- **Classes (Condition-related sources)** — quick index showing VistA files mapped to Condition profiles (e.g., **ICD Diagnosis (80)**, **PTF (45)**)  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/classes.html [14](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-DiagnosticReportNoteCytopathologySpecimen.html)

### Allergies
- **AllergyIntolerance** — VistA **PATIENT ALLERGIES (120.8)** → **FHIR AllergyIntolerance (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VAAllergyIntolerance.html [15](https://department.va.gov/privacy/wp-content/uploads/sites/5/2025/02/FY25LighthouseFastHealthcareInteroperabilityResourcesAPIPIA.pdf)
- **Allergy Mechanism ConceptMap** — VistA 120.8-17 values to FHIR AllergyIntolerance.type (allergy vs. intolerance)  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/ConceptMap-VF-allergyMechanism.html [16](https://jpsys.com/lighthouse-fhir-api-development-platform-vadp-support/)
- **Allergy Verification Status ValueSet** — target values aligned to FHIR verification status  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/ValueSet-allergyVerificationStatus.html [17](https://github.com/tnguyen-va/health-apis-vista-fhir-query)

### Medications
- **MedicationRequest (Outpatient)** — VistA **PRESCRIPTION (52)** → **FHIR MedicationRequest (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedicationRequestOutpatient.html [18](https://www.krminc.com/portfolio_category/ops/)
- **MedicationRequest (Pending)** — VistA **PENDING OUTPATIENT ORDERS (52.41)** → **FHIR MedicationRequest (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedicationRequestPending.html [19](https://r4.fhir.space/documentreference.html)
- **MedicationRequest (Unsigned)** — VistA **ORDER (100)** → **FHIR MedicationRequest (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedicationRequestUnsigned.html [20](https://docs.nerve.run/fhir/resources/documentreference)
- **MedicationRequest (Non‑VA Meds)** — VistA **NON‑VA MEDS (55.05)** → **FHIR MedicationRequest (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedicationRequestNonVA.html [21](https://github.com/FHIR-IQ/MappingFHIR)
- **MedicationDispense (Original)** — mapped from **PRESCRIPTION (52)** → **FHIR MedicationDispense**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedicationDispenseOriginal.html [22](https://github.com/mdgeek/VistA-FHIR-CWF)
- **MedicationDispense (Refill)** — mapped from **PRESCRIPTION (52)** → **FHIR MedicationDispense**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-MedicationDispenseRefill.html [23](https://build.fhir.org/documentreference.html)
- **Classes (Pharmacy-related file → FHIR overview)** — quick lookup of **DRUG (50), CODING SYSTEM (50.65), VA PRODUCT (50.68), PRESCRIPTION (52), REFILL (52.1), NON‑VA MEDS (55.05)** and their target resources  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/classes.html [24](https://www.hcinnovationgroup.com/clinical-it/electronic-health-record-electronic-medical-record-ehr-emr/news/21124994/open-source-electronic-health-record-alliance-to-shut-down)

### Immunizations
- **Immunization** — VistA **V IMMUNIZATION (9000010.11)** → **FHIR Immunization (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VAImmunizationImmunization.html [25](https://r4.fhir.space/vitalsigns.html)
- **Immunization Reaction ConceptMap** — maps VistA reaction codes (e.g., fever, vomiting, local swelling) to SNOMED CT/LOINC Targets  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/ConceptMap-VF-ImmunizationReaction.html [26](https://flatiron.my.site.com/FHIR/s/article/Observation-Vital-Signs)
- **Terminology reference (CVX/NDC)** — public code sets used by US immunization programs  
  https://www.cdc.gov/iis/code-sets/index.html [27](https://build.fhir.org/observation.html)

### Encounters
- **Encounter (Visit)** — VistA **VISIT (9000010)** → **FHIR Encounter (US Core)**  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-EncounterVisit.html [28](https://build.fhir.org/observation-vitalsigns.html)
- **Encounter Class ConceptMap** — VistA encounter class values (IN/OUT) mapped to FHIR **IMP/AMB** (inpatient/ambulatory)  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/ConceptMap-VF-encounterClass.html [29](https://build.fhir.org/mappings.html)
- **Encounter Class ValueSet** — FHIR target codes for class (IMP, AMB)  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/ValueSet-encounterClass.html [21](https://github.com/FHIR-IQ/MappingFHIR)
- **Related Location mapping** — **HOSPITAL LOCATION (44)** → **FHIR Location (US Core)**, referenced by Encounter profiles  
  https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VALocation.html [12](https://jpsys.com/hl7-fhir-cop-empowers-va/)

---

## Mapping approach & design assumptions
For rationale on prioritizing FHIR core/US Core over extensions, preserving health-record semantics, and the use of extensions when required, see the IG’s **Design Patterns** page.  
https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/designPatterns.html [30](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VAPractitioner.html)

If you need **executable transforms**, review the **FHIR Mapping Language** and tools (StructureMap, validator).  
- Spec: https://build.fhir.org/mapping-language.html [31](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/ConceptMap-VF-problemVerificationStatus.html)  
- How-to: https://confluence.hl7.org/spaces/FHIR/pages/76158820/Using+the+FHIR+Mapping+Language [32](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/profileHierarchy.html)

---

## Related VA FHIR APIs (Lighthouse)
Many of these mappings are surfaced via VA’s **Lighthouse** FHIR APIs:

- **Patient Health API (R4)** — patient-facing data aligned with US Core  
  https://developer.va.gov/explore/api/patient-health/docs [33](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/ConceptMap-VF-allergyMechanism.html)
- **Clinical Health API (R4)** — clinician-facing data; returns FHIR sourced from legacy EHR/VistA (includes Condition, Immunization, Encounter, AllergyIntolerance, MedicationRequest/Dispense)  
  https://developer.va.gov/explore/api/clinical-health/docs [34](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-DocumentReferenceDocumentReference.html)

---

## How to use these bookmarks

- **GitHub**: Commit this file (e.g., `README.md`) to a repository; GitHub renders the links for easy browsing.  
- **SharePoint**: Paste these links into a “Quick Links” web part grouped by domain (Demographics, Vitals, Labs, Notes, Providers, **Conditions**, Allergies, Medications, Immunizations, Encounters).  
- **Teams/Docs**: Drop the relevant subsection into channel wikis or product specs.

---

## Contributing

- For new VistA domains/files you want added, open an issue or PR with:
  - VistA file number/name, target FHIR resource(s), and any required terminologies (LOINC, SNOMED CT, UCUM, RxNorm, CVX/NDC).  

Prefer linking to the **IG profile page** (StructureDefinition) and, when helpful, its **“Mappings”** tab.  
For a full index of artifacts, see the IG’s **Artifacts Summary** page.  
https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/artifacts.html [35](https://fhir.hl7.org/fhir/observation-vitalsigns.html)

---

## License

Content linked here is published by VA and HL7; please observe the respective licenses and terms of use on each source. [1](https://department-of-veterans-affairs.github.io/va-fhir-cop-mapset-ig/StructureDefinition-VAPractitionerRole.html)[36](https://r4.fhir.space/medicationrequest.html)
