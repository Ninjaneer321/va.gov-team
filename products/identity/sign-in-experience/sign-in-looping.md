# Reduce sign-in looping

"Looping" was identified as a top source of sign-in dissatisfaction in [Q1 2026 dissatisfaction discovery research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2026-01%20dissatisfaction%20discovery/2026-01%20Dissatisfaction%20Discovery%20-%20Research%20Findings.md). The purpose of this project is to investigate, understand, and measurably reduce dissatisfaction related to looping.

---

## Related initiative
[Reducing dissatisfaction](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sign-in-experience/reducing-dissatisfaction.md)

---

## Objective
Veterans experience less friction when accessing their benefits and services.

---

## Related epics

| Ticket | Description | 
|--------|-------------|
| [#1054](https://github.com/department-of-veterans-affairs/identity-documentation/issues/1054) | Discovery research and technical investigations |
| [#1107](https://github.com/department-of-veterans-affairs/identity-documentation/issues/1107)) | Race conditions with v0 /user response |

---

## Analytics
- [SSOe <10 second User Sessions](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/3q8-hsf-yiw)
- [SiS <10 second User Sessions](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/iiv-urw-k63)
- Metric: Number of sessions on VA.gov lasting less than 10 seconds
- Baseline: [starting value]

---

## Related research

- [2026-01-Dissatisfaction-discovery-research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2026-01%20dissatisfaction%20discovery/2026-01%20Dissatisfaction%20Discovery%20-%20Research%20Findings.md)
- [Sign-in looping issue summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2026-01%20Sign-in%20Looping/Call%20Center%20Deep%20Dive.md)

---

## Technical reference

No technical reference yet.

---

## Release notes

| Ticket | Description | 
|--------|-------------|
|[Prevent sign-in looping](https://github.com/department-of-veterans-affairs/vets-website/pull/43734#event-24155021756) | Disabled pointer events to prevent clicks on VA.gov before the user object finishes loading. This prevents unintended logouts without impacting the user experience or accessibility. |
