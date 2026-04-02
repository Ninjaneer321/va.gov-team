# SBAR: Proceed with Plan B (V1 File Input)

- **Author(s):** @adlco
- **Reviewer(s):** @brentschneider, @linnjs, @JaneKimVA, @yurenanava
- **Approver:** @andaleliz
- **Approved date:** 2026-03-19


## Top Level Stakeholder Request
Approve launching with V1 File Input now, and aligning on a target milestone + approach for V3 adoption later (including whether to pursue the VADS multiple-response pattern).

## Situation
The Pathways team has been implementing the V3 File Input component in the 526ez claim workflow (which historically uses the V1 File Input component across the flow).
During end-to-end testing and accessibility testing in Sprint 25, our team and the ADE team identified multiple bugs tied to the V3 File Input implementation, and we’re now strongly considering proceeding with “Plan B”: launching with the existing V1 File Input component to reduce risk and keep launch timelines on track.
Context: Bugs and issues tracked in this V3 ticket.

## Background
- The broader DBC claim flow (526ez + incorporated forms) currently uses V1 File Input, while Pathways is the first to attempt adoption of V3 File Input and share findings with other DBC teams.
- Sprints 22 – 24 uncovered bugs during development and were submitted to VADS/Forms team
- Sprint 25 testing uncovered bugs that were first captured in an initial bug collection ticket and then broken out into individual bug tickets within a dedicated epic:

| Sprint | Work item | Link(s) |
|---|---|---|
| Sprint 22–24 | Bugs submitted to VADS/Forms | https://github.com/department-of-veterans-affairs/va.gov-team/issues/131043<br>https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5549 |
|  |  | https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5698 |
| Sprint 25 | Fix Bugs epic | https://github.com/department-of-veterans-affairs/va.gov-team/issues/135173 |
|  | A11y bugs identified by Will | https://docs.google.com/spreadsheets/d/1qNmvaB9Fy1GJX0bP9WmJ43pMl5hj-gnI/edit?gid=1163763529#gid=1163763529 |
|  | A11y bugs identified by ADE | https://github.com/department-of-veterans-affairs/va.gov-team/issues/134595 |

- Key bug themes from Sprint 25 testing:
    - handling of password-protected files
    - handling of unsupported files
    - handling of document type selection
    - multiple accessibility bugs, including issues related to focus and zoom
- On 2026-03-09, bugs were shared with Tricia Baker (VADS) for assessment of whether issues were implementation-specific vs component-level. VADS recommended a potential design/architecture change and presented on 2026-03-12:
    - Decouple the slot from the Multiple File Input component by using a combobox for document type selection instead.
    - This implies adopting a multiple response pattern (two-step flow): File Input on page 1, combobox (document type) on page 2; user loops back to add another file.
    - See visual reference: https://drive.google.com/file/d/1a7yDlszVAwUkMrtD2xSgtnpvOK1JDgDa/view?usp=drive_link 

## Assessment
- Current state suggests V3 adoption is not a simple swap from V1 → V3; the bug volume and themes indicate meaningful risk in:
    - Functional correctness (edge cases like password-protected / unsupported files)
    - Accessibility audit response (focus management, zoom behavior)
    - Delivery predictability (unknown time to resolution, potential dependency on upstream component fixes vs local changes)
- The VADS recommendation to restructure into a multi-page “multiple response pattern”:
    - Introduces additional UX flow work, implementation effort, and re-validation (including Review & Submit incorporation considerations),
    - May expand the scope beyond what’s feasible for the targeted launch window.
- Given these factors, launching with V1 appears to be the lowest-risk path to meet release commitments while continuing V3 remediation work in parallel.

| Risk Area | Option A: Launch with V3 File Input now | Option B (Plan B): Launch with V1 File Input |
|---|---|---|
| **Functional defects in production (file handling edge cases)** | Sprint 25 E2E testing identified bug themes around **password-protected files** and **unsupported filetypes** → risk of upload failures/confusing errors for Veterans. VADS is in progress with the fix; however, we would need to re-validate with testing. | V1 behavior is established in the 526ez flow → lower probability of new upload regressions tied to component adoption. |
| **Likelihood** | Medium | Low |
| **Impact** | High | High |
| **Accessibility compliance risk** | Multiple a11y bug themes reported (noted: **focus** and **zoom**) → risk of non-compliance and degraded experience for assistive tech users. | Known baseline in this workflow; risk mostly limited to incidental integration changes rather than new component behavior. |
| **Likelihood** | High | Low |
| **Impact** | High | High |
| **Schedule / launch predictability** | Bug volume + uncertainty (implementation vs component-level) may extend timeline; could require additional rounds of remediation and re-testing. | More predictable delivery because it avoids V3 stabilization work for launch. |
| **Likelihood** | High | Low |
| **Impact** | High | Medium |
| **Scope creep / re-architecture risk** | VADS suggested decoupling the multi-file pattern using a **combobox + multiple response pattern** (multi-page loop) → UX/implementation change. | Defers re-architecture; keeps launch scope closer to current production patterns. |
| **Likelihood** | Med-High | Low |
| **Impact** | High | Medium |
| **Review & Submit integration risk** | Acceptance criteria requires verifying Review & Submit incorporation; V3/multi-file changes may require custom display logic and increase formatting risk. | Fewer unknowns with established pattern; still requires verification but lower integration uncertainty. |
| **Likelihood** | Medium | Low |
| **Impact** | High | Medium |
| **Downstream team impact / scalability** | Pathways is first to implement V3; launching with unresolved issues, risks other DBC teams inheriting unstable guidance/patterns. | Enables a clearer cross-team message: V3 needs stabilization before broader adoption, reducing duplicate effort across teams. |
| **Likelihood** | Medium | Low |
| **Impact** | Med-High | Medium |
| **User trust risk (upload flow sensitivity)** | Upload failures or unclear errors can reduce trust and increase support burden; higher likelihood if known issues remain. | Lower chance of new upload-related failures, helping protect user trust at launch. |
| **Likelihood** | Med-High | Low |
| **Impact** | High | High |

- Impact to launch

|  | Option A: Launch with V3 File Input now | Option B (Plan B): Launch with V1 File Input |
|---|---|---|
| **Staging Review on April 2** | Delays by 2–3 sprints | On target |
| **Requirements** | Design, development, testing | Feature toggle already implemented to support launch |


## Recommendation

**Recommend adopting Plan B for launch:**
1. Launch with V1 File Input for the initial release to minimize functional/a11y risk and avoid schedule impact.
2. Treat V3 File Input adoption as post-launch follow-on work, gated by:
    - Resolution of the identified bug themes (password-protected, unsupported files, focus/zoom a11y),
    - A decision on the architecture approach (current integration vs VADS-recommended decoupled/multiple-response pattern).
3. Communicate to stakeholders and other DBC teams that Pathways’ V3 implementation has identified significant issues and that V1 is the recommended launch approach while V3 stabilizes.

**Decision requested from stakeholder:**
- Approve launching with V1 File Input now, and aligning on a target milestone + approach for V3 adoption later (including whether to pursue the VADS multiple-response pattern).

