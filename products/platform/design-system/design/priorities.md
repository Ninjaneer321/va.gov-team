# Design System & Forms — 2x2 (Impact vs Effort)
*(Unspecified Priority treated as “Needs triage”. Effort is inferred.)*

|  | **Low Effort** | **High Effort** |
|---|---|---|
| **High Impact** | **Quick wins**<br><br>**P1**<br>- 5634 “Your form is missing some information” UX/a11y<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5634<br><br>**P2**<br>- 4679 Focus state consistency<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4679<br><br>**P3**<br>- 5151 Fieldset/legend spacing inconsistency<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5151<br>- 4756 va-date wrapping at small / high zoom<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4756<br><br>**Needs triage**<br>- 3684 “Use my location” inconsistency across products<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3684 | **Big bets**<br><br>**P3**<br>- 5840 Prefill without minimal workflow (pattern)<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5840<br><br>**Needs triage**<br>- 5842 Save & Progress: cancel/delete saved form<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5842<br>- 3813 Pattern to Request Multiple Signatures<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3813<br>- 5224 Mock form re-design<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5224<br>- 1006 20-10206 Prefill<br>  https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1006 |
| **Low Impact** | **Fill-ins / hygiene**<br><br>**P4**<br>- 1743 Add USWDS Button - Accent to Figma<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1743<br><br>**Needs triage**<br>- 3314 Guidance for destructive button variant use<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3314<br>- 5275 Add [content-copy] icon button<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5275<br>- 392 Postal Code Placement<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/392<br>- 5435 Checkbox tile description spacing (Mobile)<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5435 | **Defer unless strategic (design-ops heavy)**<br><br>**P3**<br>- 3339 Add form components to Figma Pattern Library<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3339<br>- 2983 Updates from Example Library Figma Audit<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2983<br>- 3512 Show primitive tokens as spacing vars in Figma<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3512<br>- 3639 Add full width banner to Figma<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3639<br>- 3203 “Need Help?” boilerplate content in Figma<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3203<br><br>**Needs triage**<br>- 5507 Patterns library: Annotations mode<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5507<br>- 2544 Templates rebuild + a11y annotations<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2544<br>- 5285 Color tokens missing from VADS (experimental)<br>  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5285 |

## “Place after triage” (could move quadrants depending on whether this is production behavior vs Figma-only)
- 5859 Accordion missing hover state in Figma — https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5859
- 5741 Select/Combo chevron interaction — https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5741

## Blocked (excluded from “do next”)
- 4308 Marital Information pattern w/ VA marriage link — https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4308
- 4471 Confirmation submission page — https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4471


## 2x2 prioritization (treating **Unspecified Priority** = **Needs triage**)

**Axes**
- **Impact (User impact):** High ↔ Low
- **Effort (Design effort):** Low ↔ High  
  (Effort is inferred from the title/scope; consider it a starting hypothesis for triage.)

---

# 2x2 Matrix

## 1) High impact / Low effort (Quick wins)
These look like they can reduce user friction/accessibility issues with relatively contained design changes.

- **5634 — Evaluate UX / design for "Your form is missing some information" at the bottom of review page (P1)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5634  
  Why here: accessibility-tagged defect + likely copy/layout/placement fix.

- **4679 — Make focus state consistent (P2)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4679  
  Why here: consistency fix; likely defined criteria + limited surface area.

- **5151 — Fieldset/legend spacing inconsistency (P3)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5151  
  Why here: targeted spacing rule; likely narrow.

- **4756 — va-date wrapping on small/high zoom (P3)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4756  
  Why here: responsive/zoom behavior fix; contained component scope.

- **3684 — “Use my location” inconsistency across products (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3684  
  Why here: high learnability gain; could be mostly guidance + a preferred standard (implementation may vary).

---

## 2) High impact / High effort (Big bets)
These are likely to materially improve form completion and workflows, but could involve broader patterns, research, or multiple touchpoints.

- **5842 — Save & Progress: cancel/delete already saved form (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5842  
  Why here: high user need; likely workflow + content + edge cases.

- **3813 — Pattern to Request Multiple Signatures (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3813  
  Why here: net-new pattern with many constraints.

- **5840 — Prefill without minimal workflow (P3)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5840  
  Why here: affects major workflow; likely needs pattern decisions + examples.

- **5224 — Mock form re-design (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5224  
  Why here: broad redesign scope.

- **1006 — 20-10206 Prefill (Needs triage)**  
  https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1006  
  Why here: form-level work can be large and dependency-heavy.

---

## 3) Low impact / Low effort (Fill-ins / hygiene)
Good to do when there’s capacity; mostly polish, completeness, or enablement.

- **1743 — Add USWDS Button - Accent to Figma (P4)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1743

- **3314 — Guidance for destructive button variant use (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3314  
  (Low direct impact unless there’s active misuse, but relatively straightforward guidance work.)

- **5275 — Add [content-copy] icon button (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5275  
  (Likely small; impact depends on demand.)

- **392 — Postal Code Placement (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/392  
  (Potentially useful, but often a “preference” unless tied to completion errors.)

- **5435 — Checkbox tile description spacing (Mobile) (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5435

---

## 4) Low impact / High effort (Defer unless strategic)
Mostly design-ops or broad library work that can be worthwhile, but should usually be sequenced behind user-impact items unless it unblocks many teams.

- **3339 — Add form components to patterns in Figma Pattern Library (P3)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3339

- **2983 — Updates based on Example Library Figma Audit (P3)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2983

- **3512 — Show primitive tokens as spacing variables in Figma (P3)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3512

- **5507 — Update Patterns library to use Annotations mode (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5507

- **2544 — Templates rebuild + a11y annotations (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2544

- **5285 — Color tokens missing from VADS (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5285  
  (Could move to “higher impact” if token gaps are causing inconsistent production UI right now.)

- **3639 — Add full width banner to Figma (P3)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3639

- **3203 — “Need Help?” boilerplate content in Figma (P3)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3203

---

## Items I’d explicitly “triage to place” (category depends on whether it reflects production behavior)
These are ambiguous from the export alone:

- **5859 — Accordion missing hover state in Figma (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5859  
  If it’s Figma-only → Design-ops quadrant. If it indicates shipped behavior mismatch → User impact quadrant.

- **5741 — Select/Combo chevron interaction (Needs triage)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/5741  
  Same: library-only vs product behavior.

---

## Blocked items (kept out of the 2x2 “do next” recommendations, but still tracked)
- **4308 — Marital Information pattern w/ VA link (Blocked)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4308
- **4471 — Confirmation submission page (Blocked)**  
  https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4471

---

### If you want, I can turn this into a ranked “next triage queue”
Tell me whether your team’s immediate goal is:
1) **Reduce a11y/usability defects in shipped UI**, or  
2) **Unblock multiple teams via patterns/Figma/tokens**.

That determines whether quadrant (1) or quadrant (4) gets the next investment.
