# Check-in Experience Documentation

## Overview

The Check-in Experience allows Veterans to confirm their demographics are up to date and check into appointments.

## Platform Documentation

- [Platform Getting Started](https://depo-platform-documentation.scrollhelp.site/getting-started/welcome)
- [Developer Documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs)

## Applications

### Check-in (Day-of)
- **System**: VistA systems only
- **Features**:
  - Confirm demographics
  - File for simple mileage-only travel reimbursement
  - Check into appointments

### Pre-check-in
- **System**: VistA systems only
- **Features**:
  - Confirm demographics in advance of appointment
  - Demographics include: personal contact information, next-of-kin, emergency contact

### Travel-pay (LoROTA Standalone)
- **System**: Oracle Health systems only
- **Features**:
  - File travel reimbursement for appointments that occurred on the same day
  - Integrates with Oracle Health systems

## Code Repositories

### Vets-Website (Frontend)
Monorepo containing all frontend applications. Check-in is divided into 3 apps:
- `day-of` - Check-in
- `pre-check-in` - Pre-check-in
- `travel-claim` - LoROTA Standalone Travel Pay

[Repository](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/check-in)

### Vets-API (Backend)
Ruby on Rails API that handles check-in business logic.

[Repository](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/check_in)

### CHIP
Authentication layer between vets-api and temporary Veteran/appointment data for low-risk, one-time authentication purposes.

[Repository](https://github.com/department-of-veterans-affairs/chip)

### LoROTA
Data persistence layer between CHIP and the database.

[Repository](https://github.com/department-of-veterans-affairs/lorota)

## Product Documentation

### Root Documentation
[Product Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin#metrics-and-veteran-feedback)

### Architecture
- [Architecture Diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/architecture-diagrams/containerDiagram_checkInExp.png)
- [Sequence Diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/architecture-diagrams/sequenceDiagram_checkInExp.md)

### Analytics
[Analytics Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/analytics#readme)

## Monitoring

### DataDog Dashboards
- [Check-in Vets-API Dashboard](https://vagov.ddog-gov.com/dashboard/zps-5fk-azw/check-in-vets-api?fromUser=false&refresh_mode=sliding&from_ts=1770983043659&to_ts=1770997443659&live=true)
- [CHIP Technical Dashboard](https://tevi.ddog-gov.com/dashboard/5jy-mz3-53p/technical-dashboard---chip-prod?fromUser=false&refresh_mode=sliding&from_ts=1770984078715&to_ts=1770998478715&live=true)

### Daily Summary
Python script that generates daily check-in summaries.

[Script](https://github.com/department-of-veterans-affairs/checkin-devops/blob/main/scripts/summary.py)

## Testing

### Staging Environment

**Set up test data and schedule appointments:**
- [CIE Staging Scheduler](https://vigilant-couscous-ab7fb4a4.pages.github.io/?baseUrl=https%3A%2F%2Fstaging.va.gov)
- [Repository](https://github.com/department-of-veterans-affairs/cie-staging-scheduler)

## Operations

### Holiday Freeze
During federal holidays, alerts should be silenced.

[Holiday Alerting Freeze Documentation](https://github.com/department-of-veterans-affairs/checkin-devops/blob/main/docs/holiday-alerting-freeze.md)
