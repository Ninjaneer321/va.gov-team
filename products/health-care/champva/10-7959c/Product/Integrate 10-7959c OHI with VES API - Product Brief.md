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

This effort directly supports Health Applications and VES Program OKRs focused on faster benefit delivery, improved data quality, and reliable digital operations.

### Supports Objective 1: All form experiences help Veterans and family members get benefits faster
- Measurable reduction in manual OHI processing volume, supporting removal of mailroom- and scanner-dependent workflows (Objective 1, KR1)
- Decreased end-to-end CHAMPVA application processing time through faster digital intake and earlier issue detection (Objective 1, KR2)

### Supports Objective 3: Ensure accurate transaction status for Veterans and family members
- Less than 1% error rate on OHI-related API submissions, reducing errors introduced by manual and handwritten handling (Objective 3, KR1)
- Reduced rework caused by incomplete or misrouted OHI data, enabling processing teams to focus on remaining non-digital submissions (Objective 3, KR2)

### Supports VES FY26 Objective 2: Operate products with high reliability
- Real-time monitoring and reporting of OHI submission volume, latency, and error rates in alignment with VES “golden signals” expectations (Objective 2, KR2.1)
- Reliable API performance that meets or exceeds VES availability and incident-free time targets (Objective 2, KR2.2)

### Operational Visibility
- Availability of dashboards showing:
  - OHI submission success and failure rates
  - API error rates
  - Latency and throughput trends


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
