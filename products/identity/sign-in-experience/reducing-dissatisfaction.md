# Reducing dissatisfaction

When sign in fails or creates friction, Veterans may be blocked from accessing earned benefits, support costs increase through call centers and escalations, and repeated failures erode trust in VA’s ability to reliably serve them.

---
## Objective
Veterans experience less friction when accessing their benefits and services.

---

## Active projects

| Project | Description | Measurement |
|-----------|--------|--------|
| Quarterly sign-in pulse | Analyze qualitative and quantitative data to measure dissatisfaction with sign-in. | Negative sentiment |
| Data discrepancy errors | Fix system issues contributing to sign-in errors. |  Error 113 vs Error 007  |
| [Sign in looping](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sign-in-experience/sign-in-looping.md) | Fix technical issues contributing to sign-in looping errors. | Sessions <10 seconds |

---
## Related components
| Component | How it relates to the initiative |
|-----------|--------|
| Unified Sign-in Page | User experience with the sign-in process on VA.gov |
| Verify | User experience with the  identity verification process |
| Sign-in errors | Improving the experience with error messaging and working with integration partners to fix specific issues |

---
## Release notes
| What changed | Related project | Description of impact |
|-----------|--------|--------|
| Error 113 shipped | [Insights-informed error improvements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sign-in-experience/error-improvements.md) | Added a new error type specifically for data mismatch errors. This provides more accurate and actionable information to the user while we work with integration partners on a long-term solution. |
|Prevent sign-in looping) | [Insights-informed error improvements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sign-in-experience/error-improvements.md) | Disabled pointer events to prevent clicks on VA.gov before the user object finishes loading. This prevents unintended logouts without impacting the user experience or accessibility. |

---
## Related research

- [January 2026 - Dissatisfaction discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2026-01%20dissatisfaction%20discovery/2026-01%20Dissatisfaction%20Discovery%20-%20Research%20Findings.md)
