## Product Name
**CHAMPVA OHI Integration with VES**

## Problem Statement
CHAMPVA beneficiaries currently submit Other Health Insurance (OHI) information digitally via VA Form 10-7959c, either as a standalone submission or embedded within VA Form 10-10d. While 10-10d submissions are nearing integration with the Veteran Enrollment System (VES), OHI data is excluded from that integration and routed through separate, PDF-based workflows.

This results in manual reconciliation by processing teams, increased risk of errors, and longer processing times—undermining the efficiency gains VES is designed to deliver.

## Opportunity
By transmitting OHI data directly into VES via API, CHAMPVA can reduce reliance on manual workflows, accelerate application processing, and improve data accuracy. Completing this integration unlocks a more fully automated enrollment experience and advances VA’s broader digital modernization goals.

## Target Users
- **Primary:** CHAMPVA beneficiaries submitting OHI information
- **Secondary:** CHAMPVA claims processors and operations staff using VES
- **Internal partners:** VES platform teams, OCTO stakeholders

## Goals & Outcomes

### User Outcomes
- OHI information is processed without delays caused by manual handling
- Reduced likelihood of errors or missing data
- Faster end-to-end CHAMPVA application processing

### Business / Platform Outcomes
- Reduced operational burden on processing teams
- Decreased error rates related to OHI handling
- Increased automation and reliability of CHAMPVA intake workflows

## Scope

### In Scope
- Transmit OHI data from standalone VA Form 10-7959c submissions to VES
- Transmit OHI data embedded within VA Form 10-10d v2 submissions to VES
- Make OHI submissions available to claims processors directly in VES
- Implement API monitoring for errors, latency, and submission success
- Surface submission and error metrics via dashboards

### Out of Scope
- Changes to OHI business rules or eligibility logic
- Non-VES downstream systems beyond CHAMPVA processing

## Success Metrics
Aligned to OCTO, Portfolio, and Team OKRs:
- Reduction in manual OHI processing volume
- Less than 1% error rate on OHI-related API endpoints
- Improved processing time for CHAMPVA applications
- Availability of real-time metrics for:
  - Submission success and failure
  - Error rates
  - Latency

## Dependencies & Risks

### Key Dependencies
- Finalized VES API Swagger documentation for OHI
- Confirmed OHI data specifications
- Authentication and authorization details from VES
- Ongoing coordination with VES platform teams

### Risks
- Delays in API or specification finalization could impact delivery timelines
- Misalignment on data contracts may introduce integration rework

## Stakeholders
- David Fennell – Director of Integrated External Networks
- Natalie Cole – Deputy VFMP
- Delaney Heffner – CHAMPVA Director
- Nadia Afifi – VFMP PMO Director
- Katrina Fluss – Supervisor Program Analyst, CHAMPVA
- Richard Holmes – Portfolio Manager

## Monitoring & Reporting
- Error and submission monitoring aligned with existing VES integrations
- Performance and reliability tracked via established dashboards
- Monthly project updates shared with VA stakeholders
