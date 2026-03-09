# March, 5, 2026
### Agenda Items

**1. Credentials / Staging Environment Connection**
- Credentials received this morning; connect our staging to VASS QA environment
- Confirmed that we'll have credentials configured by tomorrow morning at the latest

**2. Cancellation Functionality Update**
- VASS team is implementing two separate fields — on cancellation, start/end dates will be moved to new fields rather than cleared
- API will return start/end dates based on appointment status (canceled vs. scheduled)
- Currently in testing on VASS side; will be pushed to QA shortly after
- Phil confirmed our side can handle this — just needs the finalized object structure

---

### Discussion

- **Email templates:** Steve sent updated templates to Priya via Teams chat; testing connectivity to VA Notify on their end and will flag any issues
- **VASS UAT:** VASS team plans to begin UAT with their business users the week of March 16; office hours will be set up during that period
- **QA email issue:** Emails in QA are showing as sent/pending but not being received — VASS team troubleshooting; no resolution update yet
- **Pre-prod environment:** VASS team will move to pre-prod after UAT is complete, ahead of our staging review
- **Shaimun / TestRail:** Test cases are built from Figma designs; Shaimun feels set to go once staging credentials are in place. Cancellation flow may need extra attention given recent changes

---

### Action Items / Next Steps

- [ ] **Lee** — Configure staging credentials by tomorrow morning (03/06/2026)
- [ ] **VASS team (Tyler)** — Send Phil finalized cancellation object structure/template
- [ ] **VASS team (Tyler)** — Send Phil full list of potential appointment statuses
- [ ] **VASS team** — Resolve QA email delivery issue (troubleshooting in progress)
- [ ] **Shaimun** — Review cancellation test cases once object structure is confirmed
