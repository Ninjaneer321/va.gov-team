# YAML Frontmatter Audit Report - Detailed Appendices
**Date Generated:** March 23, 2026
**Scope:** Research Plans and Conversation Guides in `/products` and `/teams` directories

---

## Summary Statistics

> **Note:** File paths are relative to their base directory (`products/` or `teams/`). 
> This audit uses STRICT placeholder detection - only flagging files with actual placeholder patterns in PRIMARY fields.

| Metric | Research Plans | Conversation Guides | Total |
|--------|---------------|---------------------|-------|
| **Total Files** | 1191 | 646 | 1837 |
| **No Frontmatter** | 426 (35.8%) | 31 (4.8%) | 457 (24.9%) |
| **Placeholder Data** | 385 (32.3%) | 233 (36.1%) | 618 (33.6%) |
| **Valid Frontmatter** | 380 (31.9%) | 382 (59.1%) | 762 (41.5%) |
| **Files with Issues** | 811 (68.1%) | 264 (40.9%) | **1075 (58.5%)** |

---

## What Counts as "Placeholder Data"

This audit uses **strict detection** for primary metadata fields only:

### PRIMARY Placeholders (Always Flagged):
- `title: "Research Plan for [Team, Product, Date]"` - Brackets in title
- `date: YYYY-MM-DD` - Literal "YYYY-MM-DD" (not a real date like 2024-03-11)
- `team: "[Team Name]"` - Brackets around team name
- `product: "[Product Name]"` - Brackets around product name
- `author: "[AUTHOR NAME]"` - Brackets around author name
- `[Enter date...]`, `[Enter name...]` - Instructional placeholders

### NOT Flagged as Placeholders:
- `facility: "N/A"` - N/A in optional fields
- `related_prototype: ""` - Empty optional fields
- Real dates: `date: 2024-03-11` ✅
- Real names: `team: "Authenticated Experience"` ✅

**Result:** Files with complete primary metadata are marked as "valid" even if some optional fields have "N/A" or are empty.

---

# Appendices

---

## Appendix A: Research Plans with NO FRONTMATTER

**Total:** 426 files

1. `products/21-0779/TEST_PLAN.md`
2. `products/21-0779/collaboration-cycle/release-plan.md`
3. `products/21-2680/TEST_PLAN.md`
4. `products/21-2680/collaboration-cycle/release-plan.md`
5. `products/21-4192/TEST_PLAN.md`
6. `products/21-4192/collaboration-cycle/release-plan.md`
7. `products/21P-530a/TEST_PLAN.md`
8. `products/21P-530a/collaboration-cycle/release-plan.md`
9. `products/Debt Resolution/Financial-Status-Report/Release_Plan.md`
10. `products/Debt Resolution/Medical_Copays/release_plan.md`
11. `products/Debt Resolution/Repayment Plan for Medical Copayments/FAQ's - Product Decision & Change Log: Veteran Repayment Plan (RPP) Agreement for Medical Copayments.md`
12. `products/Debt Resolution/VHA Vista Account Information/Release-Plan.md`
13. `products/Debt Resolution/digital-dispute/regression-test-plan.md`
14. `products/Debt Resolution/digital-dispute/release-plan.md`
15. `products/Debt Resolution/fsr_enhancements/Release_Plan.md`
16. `products/Debt Resolution/one_va_debt_letter/Release_Plan.md`
17. `products/Debt Resolution/pay.gov/Pay.gov for Benefit Overpayment Debt Payments/frontend-implementation-plan.md`
18. `products/Reapers - Ch31 Eligibility_Entitlement/Phase 1 Release Plan.md`
19. `products/Reapers - Ch31 Eligibility_Entitlement/Phase II Release Plan.md`
20. `products/accredited-representation-management/product-documentation/accreditation-api/release-plan-accreditation-api.md`
21. `products/accredited-representation-management/product-documentation/appoint-a-representative/release-plan-appoint-a-representative-1.0.md`
22. `products/accredited-representation-management/product-documentation/appoint-a-representative/release-plan-appoint-a-representative-2.0.md`
23. `products/accredited-representation-management/product-documentation/appoint-a-representative/technical-documentation/product-playbook-incident-response-plan.md`
24. `products/accredited-representation-management/product-documentation/find-a-representative/Release Plan - Find a Representative V3.md`
25. `products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-1.0.md`
26. `products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-2.0.md`
27. `products/accredited-representation-management/product-documentation/find-a-representative/technical-documentation/product-playbook-incident-response-plan.md`
28. `products/accredited-representation-management/product-documentation/representative-status/release-plan-representative-status-1.0.md`
29. `products/accredited-representation-management/product-documentation/representative-status/release-plan-representative-status-2.0.md`
30. `products/accredited-representation-management/product-documentation/representative-status/technical-documentation/product-playbook-incident-response-plan.md`
31. `products/accredited-representative-facing/product-info/claimant-details/release-plan-claimant-details.md`
32. `products/accredited-representative-facing/product-info/manage-poa-requests/launch-materials/product-playbook-incident-response-plan.md`
33. `products/accredited-representative-facing/product-info/manage-poa-requests/release-plan-manage-poa-requests-v0.md`
34. `products/accredited-representative-facing/product-info/rep-claim-submissions/release-plan-bdd-sha.md`
35. `products/accredited-representative-facing/product-info/rep-claim-submissions/release-plan-intent-to-file.md`
36. `products/accredited-representative-facing/product-info/rep-claim-submissions/release-plan-rep-claim-submissions.md.md`
37. `products/accredited-representative-facing/product-info/self-service-auth/release-plan-self-service-auth-id-me.md`
38. `products/accredited-representative-facing/product-info/self-service-auth/release-plan-self-service-auth-login-gov.md`
39. `products/apply-for-home-loan-COE/Test and Launch/Release Plan.md`
40. `products/ask-va/design/Strategy/Phase 1/2024-07 Accessibility audit plan.md`
41. `products/ask-va/engineering/InfoSec/ask-va-incident-response-plan.md`
42. `products/ask-va/engineering/release-plan.md`
43. `products/ask-va/engineering/test-plans/ask-va form-dash-testing-plan.md`
44. `products/ask-va/engineering/test-plans/ask-va-test-plan.md`
45. `products/ask-va/product/Change Management Plan.md`
46. `products/ask-va/product/ask-va-transition-plan.md`
47. `products/benefit-letters/EVSS to Lighthouse Letters App API Migration Release Plan.md`
48. `products/benefits-discovery-service/bds-gateway-release-plan.md`
49. `products/burials-memorials/burial-allowance/530-release-plan-2024-updates.md`
50. `products/burials-memorials/pre-need/pre-need-integration-release-plan.md`
51. `products/burials-memorials/time-of-need/time-of-need-release-plan.md`
52. `products/campaign-landing-page/campaign-landing-page-templates/Summary of Release Plan Steps - CLP MVP 1.0.md`
53. `products/campaign-landing-page/campaign-landing-page-templates/content-requirements-spec/mvp-plan.md`
54. `products/caregivers/Improve Facility Selection/10-10CG Facility Selection - Release Plan.md`
55. `products/caregivers/Mulesoft Integration/MuleSoft Integration (Phase 1) Test Plan (markdown copy) March 2022.md`
56. `products/caregivers/Sign as a Rep/release-plan.md`
57. `products/claim-appeal-status/CST Product/5103 Letter Release Plan.md`
58. `products/claim-appeal-status/CST Product/Claim Details V2 Release Plan.md`
59. `products/claim-appeal-status/CST Product/Claim Phase Expansion Release Plan.md`
60. `products/claim-appeal-status/CST Product/Decision Letter Release Plan.md`
61. `products/claim-appeal-status/CST Product/EVSS to Lighthouse Claim Status End Point Migration Release Plan.md`
62. `products/claim-appeal-status/CST Product/Silent Failure Polling Release Plan.md`
63. `products/claim-appeal-status/CST Product/VA Benefits Letters EVSS to Lighthouse API Migration Release Plan.md`
64. `products/claim-appeal-status/CST Product/VA Claim Letters VBMS to Lighthouse API Migration Release Plan.md`
65. `products/claim-appeal-status/claims-status/file-claim/test-plan.md`
66. `products/claim-appeal-status/claims-status/iteration2-test-plan.md`
67. `products/claim-appeal-status/claims-status/track-claim-status/content-planning.md`
68. `products/claim-appeal-status/document-status/release-plan.md`
69. `products/claim-appeal-status/event-bus-notify/Release Plan.md`
70. `products/claim-appeal-status/evidence-requests-improvements/engineering/evidence-dictionary-migration-plan.md`
71. `products/claim-appeal-status/evidence-requests-improvements/release-plan.md`
72. `products/claim-appeal-status/evidence-requests-pattern/release-plan.md`
73. `products/claim-appeal-status/letters-and-documents/release-plan.md`
74. `products/combined_fsr/release_plan.md`
75. `products/combined_va_debt_portal/initiatives_enhancements/one_thing_per_page/release_plan.md`
76. `products/combined_va_debt_portal/mobile/Overpay Release Plan.md`
77. `products/combined_va_debt_portal/payment-history/release_plan.md`
78. `products/combined_va_debt_portal/release_plan.md`
79. `products/content-localization/LARP/release-plan-language-assistance-pages.md`
80. `products/content/audience-hubs/family-member-hub/implementation-plan.md`
81. `products/content/tier-2-content-IA-and-design/learning-center-mvp/collab-cycle-docs/release-plan-1-0-beta.md`
82. `products/cta-widget/initiatives/cms-source-of-truth/release-plan.md`
83. `products/decision-reviews/AMA-follow-up/AMA2-releaseplan.md`
84. `products/decision-reviews/Notice-of-Disagreement/NODv2 Test Plan DRAFT.md`
85. `products/decision-reviews/Notice-of-Disagreement/Product/NOD_V2_Release_Plan.md`
86. `products/decision-reviews/Notice-of-Disagreement/nod-confpage-release-plan-2024.md`
87. `products/decision-reviews/Notice-of-Disagreement/release-plan.md`
88. `products/decision-reviews/Supplemental-Claims/engineering/Incident-Response-Plan.md`
89. `products/decision-reviews/Supplemental-Claims/release-plan-draft.md`
90. `products/decision-reviews/Supplemental-Claims/sc-4142-update-release-plan-2025.md`
91. `products/decision-reviews/Supplemental-Claims/sc-confpage-release-plan-2025.md`
92. `products/decision-reviews/Supplemental-Claims/sc-updates-release-plan-2025.md`
93. `products/decision-reviews/engineering/2025_07_22_va_notify_callbacks_release_plan.md`
94. `products/decision-reviews/higher-level-review/HLR v2_release_plan.md`
95. `products/decision-reviews/higher-level-review/hlr-confpage-release-plan-2025.md`
96. `products/decision-reviews/higher-level-review/hlr-updates-release-plan-2024.md`
97. `products/decision-reviews/higher-level-review/release-plan-hlr.md`
98. `products/decision-reviews/higher-level-review/wizard_move_releaseplan.md`
99. `products/decision-reviews/product/onramp/release-plan.md`
100. `products/dependents/dependency_verification/DV MVP Release Plan.md`
101. `products/dependents/dependency_verification/annual-email/Release-Plan-Verification Email.md`
102. `products/dependents/form_updates/686-674-release-plan-2024-form-updates.md`
103. `products/dependents/form_updates/686c-674_V2_Release_Plan.md`
104. `products/dependents/form_updates/686c-674_V3_Picklist_Release_Plan.md`
105. `products/dependents/form_updates/general_testing_plan.md`
106. `products/disability/526ez/0781 Paper Sync/Staging Review/Regression Test Plan.md`
107. `products/disability/526ez/Initiatives/bdd-sha-workflow/technical-planning.md`
108. `products/disability/526ez/Initiatives/side-navigation/side-navigation-reset/technical-planning.md`
109. `products/disability/526ez/archive/design/claims-modernization-planning.md`
110. `products/disability/526ez/archive/disabilitywizardreleaseplan.md`
111. `products/disability/526ez/archive/uat/781-781a/781-&-781a-recruiting-plan.md`
112. `products/disability/526ez/archive/uat/781-781a/uat-plan.md`
113. `products/disability/526ez/product/CarbsPlanning/ApproachPlanTemplate.md`
114. `products/disability/526ez/product/CarbsPlanning/🥖 Team Carbs Planning .md`
115. `products/disability/526ez/product/EVSS to LH Migration Delivery Plan.md`
116. `products/disability/526ez/release-plan-template.md`
117. `products/disability/disability-compensation-claim/bdd/release-plan-bdd.md`
118. `products/disability/disability-compensation-claim/original-claims/release-plan-original-claims.md`
119. `products/ebenefits/apply-CH36-VRE-counseling/release-plan.md`
120. `products/ebenefits/apply-vre-ch31/release-plan.md`
121. `products/ebenefits/dependency-verification/modal/dep-ver-release-plan.md`
122. `products/ebenefits/view-payment-history/release-plan.md`
123. `products/ebenefits/view-rated-disabilities/UAT/release-plan.md`
124. `products/ebenefits/view-update-dependents/release-plan.md`
125. `products/education-careers/application/1990/discovery/content-planning.md`
126. `products/education-careers/application/1990/discovery/design-planning.md`
127. `products/education-careers/application/1995/testing-plan.md`
128. `products/education-careers/application/release-plan-IR-legislation.md`
129. `products/education-careers/application/vettec-0994/uat/uat-plan.md`
130. `products/education-careers/application/vettec-0994/uat/uat-recruiting-plan.md`
131. `products/education-careers/education-career-counseling/project-plan.md`
132. `products/education-careers/school-comparison-tool/Sec103/Sec103ReleasePlan.md`
133. `products/education-careers/school-comparison-tool/caution-flags/CFreleasePlan.md`
134. `products/education-careers/school-comparison-tool/estimate-your-benefits/analytics/kpi-planning.md`
135. `products/education-careers/school-comparison-tool/estimate-your-benefits/release-plan.md`
136. `products/education-careers/school-comparison-tool/redesign/ct-redesign_release-plan.md`
137. `products/education-careers/stem/stem-standalone-10203/10203_release_plan.md`
138. `products/education-careers/stem/stem-standalone-10203/automated-decision/automated-decision_release-plan.md`
139. `products/education-careers/vocational-rehab/project-plan.md`
140. `products/education-careers/vocational-rehab/release-plan.md`
141. `products/education-data-migration/edm-yellow-ribbon-program-information-in-comparison-tool-release-plan.md`
142. `products/education-data-migration/weams-public-in-comparison-tool-release-plan.md`
143. `products/facilities/archive/roadmaps/2021-quarterly-planning.md`
144. `products/facilities/facility-locator/initiatives/2020-facility-level-alerts/release-plan.md`
145. `products/facilities/facility-locator/initiatives/2020-urgent-care/mvp-release-plan.md`
146. `products/facilities/facility-locator/initiatives/2021-map-enhancements/phase-1-limit-search-to-250-miles/release-plan.md`
147. `products/facilities/facility-locator/process/release-plan-template.md`
148. `products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav/release-plan.md`
149. `products/facilities/medical-centers/initiatives/2020-vamc-upgrade/visn-4/Project_Plan_Outline_2021.md`
150. `products/facilities/medical-centers/initiatives/2021-vamc-vha-mobile-redesign/discovery/files/stakeholder-interview-plan.md`
151. `products/facilities/vet-centers/initiatives/2020-2021-modernization/release-plan.md`
152. `products/find-a-va-form/initiatives/2021-01-mvp/form-detail-landing-pages/release-plan.md`
153. `products/find-a-va-form/initiatives/2021-01-mvp/soft-launch/release-plan.md`
154. `products/find-a-va-form/initiatives/2021-post-mvp-releases/improve-search/release-plan.md`
155. `products/find-a-va-form/initiatives/2021-post-mvp-releases/pdf_modal/release_plan.md`
156. `products/find-a-va-form/initiatives/2021-post-mvp-releases/sort-by-last-updated/release-plan.md`
157. `products/find-a-yellow-ribbon-school/v1/yellow-ribbon-mvp/release-plan.md`
158. `products/find-a-yellow-ribbon-school/v2-IIR/q1-2024-completion-succession-plan.md`
159. `products/form confirmations/In Progress Release Plan.md`
160. `products/form confirmations/Rails App Release Plan.md`
161. `products/form confirmations/Release Plan Chapter 31 Form Confirmation.md`
162. `products/form confirmations/Release Plan Chapter 36 Form Confirmation.md`
163. `products/form confirmations/v1.2.0 Release Plan.md`
164. `products/header-footer/initiatives/2021-new-mobile-header/Release Plan Mobile Header.md`
165. `products/health-care/1095b-tax-form/product/1095b-release-plan.md`
166. `products/health-care/1095b-tax-form/product/incident-response-plan.md`
167. `products/health-care/1095b-tax-form/v2-IIR/mvp-release-plan.md`
168. `products/health-care/application/Team docs/10-10 EZ_CG_EZR Planning.md`
169. `products/health-care/application/Team docs/Archived/10-10 EZ_CG_EZR Planning 2025.md`
170. `products/health-care/application/Team docs/Archived/EZ-CG Planning 2025.md`
171. `products/health-care/application/Team docs/Archived/EZR Planning 2025.md`
172. `products/health-care/application/health-update-form/EZR Form MVP/EZR Release Plan.md`
173. `products/health-care/application/health-update-form/Household Section V2/Household section V2: Financials - Release Plan.md`
174. `products/health-care/application/health-update-form/Household Section V2/Household section V2: Spouse - Release Plan.md`
175. `products/health-care/application/health-update-form/Meeting Notes/2023-12-15 Mtg with Patrick for Release Plan review.md`
176. `products/health-care/application/health-update-form/NoK_EC/EC and NoK Release Plan.md`
177. `products/health-care/application/health-update-form/Print_Save completed form/Print_save PDF - Release Plan.md`
178. `products/health-care/application/health-update-form/TERA Question Feature Documents/TERA Questions Release Plan.md`
179. `products/health-care/application/va-application/American Indian question/product/Release Plan.md`
180. `products/health-care/application/va-application/Household section redesign/Product/Household section optimization - Release Plan.md`
181. `products/health-care/application/va-application/Insurance improvements/10-10EZ Insurance Improvements - Release Plan.md`
182. `products/health-care/application/va-application/Medicare Claim number/Release Plan.md`
183. `products/health-care/application/va-application/Printable application data/Print_save PDF - Release Plan.md`
184. `products/health-care/application/va-application/Registration/Registration Only - Release Plan.md`
185. `products/health-care/application/va-application/Self Identifying Gender Identity (SIGI)/Release Plan.md`
186. `products/health-care/application/va-application/Short Form/Re-release Plan.md`
187. `products/health-care/application/va-application/Short Form/Release Plan.md`
188. `products/health-care/application/va-application/Toxic Exposure/10-10EZ TERA Release Plan.md`
189. `products/health-care/application/va-application/Toxic Exposure/TERA content and logic updates/TERA Updates - Release Plan.md`
190. `products/health-care/application/va-application/design/old/samara-notes-and-design-plan.md`
191. `products/health-care/application/vets-application/product/meeting-notes/8.25-planning.md`
192. `products/health-care/application/vets-application/product/rollout/commsplan.md`
193. `products/health-care/application/vets-application/product/rollout/test-plan.md`
194. `products/health-care/appointments/appointment-reminders/vetext/working-drafts/2017-11-21-draft-v1-plan-of-action-and-milestones.md`
195. `products/health-care/appointments/appointment-reminders/vetext/working-drafts/outdated-plan-for-2017.md`
196. `products/health-care/appointments/va-online-scheduling/engineering/vaos_service_plan.md`
197. `products/health-care/appointments/va-online-scheduling/initiatives/2025-oracle-health-scheduling/test-plan.md`
198. `products/health-care/appointments/va-online-scheduling/initiatives/after-visit-summary/after-visit-summary-regression-test-plan.md`
199. `products/health-care/appointments/va-online-scheduling/initiatives/after-visit-summary/after-visit-summary-test-plan.md`
200. `products/health-care/appointments/va-online-scheduling/initiatives/appointment-details-redesign/appointment-details-redesign-regression-test-plan.md`
201. `products/health-care/appointments/va-online-scheduling/initiatives/appointment-details-redesign/appointment-details-redesign-release-plan.md`
202. `products/health-care/appointments/va-online-scheduling/initiatives/appointment-details-redesign/appointment-details-redesign-test-plan.md`
203. `products/health-care/appointments/va-online-scheduling/initiatives/appointment-list/appointment-list-redesign-regression-test-plan.md`
204. `products/health-care/appointments/va-online-scheduling/initiatives/appointment-list/appointment-list-redesign-test-plan.md`
205. `products/health-care/appointments/va-online-scheduling/initiatives/appointment-list/release-plan-appointment-list.md`
206. `products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/cc-direct-scheduling-qa-plan.md`
207. `products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/cc-direct-scheduling-release-plan.md`
208. `products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/functionality/referral/access-to-planatir.md`
209. `products/health-care/appointments/va-online-scheduling/initiatives/community-care-provider-selection/cc-provider-selection-release-plan.md`
210. `products/health-care/appointments/va-online-scheduling/initiatives/homepage-refresh/homepage-refresh-release-plan.md`
211. `products/health-care/appointments/va-online-scheduling/initiatives/medication-wording/medication-wording-regresstion-test-plan.md`
212. `products/health-care/appointments/va-online-scheduling/initiatives/medication-wording/medication-wording-release-plan.md`
213. `products/health-care/appointments/va-online-scheduling/initiatives/medication-wording/medication-wording-test-plan.md`
214. `products/health-care/appointments/va-online-scheduling/initiatives/navigation-link/appointments-mhv-on-va-gov-release-plan-tasks.md`
215. `products/health-care/appointments/va-online-scheduling/initiatives/navigation-link/url_breadcrumb_redirect_test_plan.md`
216. `products/health-care/appointments/va-online-scheduling/initiatives/oracle-health-cancelation/oracle-health-cancelation-regression-test-plan.md`
217. `products/health-care/appointments/va-online-scheduling/initiatives/oracle-health-cancelation/oracle-health-cancelation-test-plan.md`
218. `products/health-care/appointments/va-online-scheduling/initiatives/oracle-health-cancelation/release-plan-oracle-health-cancelation.md`
219. `products/health-care/appointments/va-online-scheduling/initiatives/print-appointment-list/print-list-regression-test-plan.md`
220. `products/health-care/appointments/va-online-scheduling/initiatives/print-appointment-list/print-list-release-plan.md`
221. `products/health-care/appointments/va-online-scheduling/initiatives/print-appointment-list/print-list-test-plan.md`
222. `products/health-care/appointments/va-online-scheduling/initiatives/solid-start-scheduling/vass-incident-response-plan.md`
223. `products/health-care/appointments/va-online-scheduling/initiatives/solid-start-scheduling/vass-scheduling-release-plan.md`
224. `products/health-care/appointments/va-online-scheduling/initiatives/travel-pay-past-appts/travel-pay-past-appts-qa-plan.md`
225. `products/health-care/appointments/va-online-scheduling/initiatives/travel-pay-past-appts/travel-pay-past-appts-release-plan.md`
226. `products/health-care/appointments/va-online-scheduling/initiatives/vaos-service-integration/vaos-service-integration-release-plan.md`
227. `products/health-care/appointments/va-online-scheduling/qa/vaos-r-testing-plan.md`
228. `products/health-care/appointments/va-online-scheduling/qa/vaos-regression-test-plan.md`
229. `products/health-care/appointments/va-online-scheduling/qa/vaos-test-plan.md`
230. `products/health-care/champva/10-7959a/CHAMPVA Claims Release Plan.md`
231. `products/health-care/champva/10-7959a/Product/Duty to Assist/Duty to Assist Release Plan.md`
232. `products/health-care/champva/10-7959a/Product/Enhanced Claims/10-7959a Enhanced Claims Release Plan.md`
233. `products/health-care/champva/10-7959c/10-7959c-release-plan.md`
234. `products/health-care/champva/10-7959c/Product/10-7959c 2026 PDF Update/10-7959c 2026 PDF Update - Release Plan.md`
235. `products/health-care/champva/1010D/10-10D Extended Release Plan v2.md`
236. `products/health-care/champva/1010D/10-10d-release-plan.md`
237. `products/health-care/checkin/discovery/cvt-appointments/modalities-plan.md`
238. `products/health-care/checkin/engineering/aws-migration/AWS migration plan.md`
239. `products/health-care/checkin/release-plan/45-minute-text-release-plan.md`
240. `products/health-care/checkin/release-plan/Check-in Release Plan.md`
241. `products/health-care/checkin/release-plan/Release_Plan_Template.md`
242. `products/health-care/checkin/release-plan/check-in-oh-travel-claim-release-plan.md`
243. `products/health-care/checkin/release-plan/check-in-travel-release-plan.md`
244. `products/health-care/checkin/release-plan/check-in-with-staff-release-plan.md`
245. `products/health-care/checkin/release-plan/new-landing-page-release-plan.md`
246. `products/health-care/digital-health-modernization/mhv-to-va.gov/avs/product/release_plan.md`
247. `products/health-care/digital-health-modernization/mhv-to-va.gov/help-support/phased-plan.md`
248. `products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/analysis/fhir-data-reconcilation/analysis-plan.md`
249. `products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/analysis/mr-phase-1-data-plan.md`
250. `products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/rollout/release-plan.md`
251. `products/health-care/digital-health-modernization/mhv-to-va.gov/medications/analytics/data-collection-and-analysis-plan.md`
252. `products/health-care/digital-health-modernization/mhv-to-va.gov/medications/engineering/202511--rx-bluesky-engineering-planning.md`
253. `products/health-care/digital-health-modernization/mhv-to-va.gov/medications/release.plan.md`
254. `products/health-care/digital-health-modernization/mhv-to-va.gov/medications/rollout-monitoring-coordination-Meds-SM-renewal-flow/meds-sm-renewal-monitoring-plan.md`
255. `products/health-care/digital-health-modernization/mhv-to-va.gov/rollout/integration-with-nav-release-plan-2024.md`
256. `products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/Release Plan-OHSMFlow-MVP.md`
257. `products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/Medical Renewal Flow Items/RXRenewal_ReleasePlan.md`
258. `products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/release-plan.md`
259. `products/health-care/digital-health-modernization/mhv-to-va.gov/transition/My-VA-health-OH-transition/vahb-routing-alerts-plan.md`
260. `products/health-care/digital-health-pathway/product/release-plan.md`
261. `products/health-care/foreign-medical-program/10-7959f-1/fmp-registration-release-plan.md`
262. `products/health-care/foreign-medical-program/10-7959f-2/10-7959f-2-release-plan.md`
263. `products/health-care/medical-records/vets-blue-button/product/discovery-planning-doc.md`
264. `products/health-care/questionnaire/discovery/project_brief_planning.md`
265. `products/health-care/questionnaire/release-plan/roadmap-planning-capabilities.md`
266. `products/health-care/secure-messaging/vets-secure-messaging/discovery/discoveryplanning.md`
267. `products/home-page/initiatives/2022-home-page-redesign-initiative/design/phased-design-plan.md`
268. `products/home-page/initiatives/2022-home-page-redesign-initiative/release-plan.md`
269. `products/home-page/issue-response-plan.md`
270. `products/identity-personalization/Profile2.0/releaseplan.md`
271. `products/identity-personalization/Profile2.0/test-plan.md`
272. `products/identity-personalization/authenticated-menu/add-dependents-letter/release-plan.md`
273. `products/identity-personalization/direct-deposit/edu-direct-deposit/initial-planning.md`
274. `products/identity-personalization/direct-deposit/edu-direct-deposit/product/Release Plan.md`
275. `products/identity-personalization/direct-deposit/evss-lighthouse-migration/direct-deposit-release-plan.md`
276. `products/identity-personalization/my-va-3.0/releaseplan.md`
277. `products/identity-personalization/my-va/2.0-redesign/product/Release-Plan.md`
278. `products/identity-personalization/my-va/2.0-redesign/product/project-plan.md`
279. `products/identity-personalization/my-va/2.0-redesign/product/v1-plan.md`
280. `products/identity-personalization/my-va/2022-audit/launch-materials/my-va-audit-improvements-release-plan.md`
281. `products/identity-personalization/my-va/claim-status-lighthouse-migration/launch-materials/claim-status-lighthouse-migration-release-plan.md`
282. `products/identity-personalization/my-va/forms-status-on-My-VA/launch-materials/forms-status-on-my-va-release-plan.md`
283. `products/identity-personalization/my-va/my-va-redirect/launch-materials/my-va-redirect-release-plan.md`
284. `products/identity-personalization/my-va/my-va-small-initiatives/LOA1-experience-updates/my-va-loa1-updates-release-plan.md`
285. `products/identity-personalization/my-va/my-va-small-initiatives/save-in-progress-configuration-enhancement/launch-materials/SiP-configuration-enhancement-release-plan.md`
286. `products/identity-personalization/my-va/payment-history/launch-materials/mvp-launch-materials/payment-info-mvp-release-plan.md`
287. `products/identity-personalization/my-va/payment-history/launch-materials/payment-info-v2-release-plan.md`
288. `products/identity-personalization/onsite-notifications/2018-notifications-work/Samara-planning.md`
289. `products/identity-personalization/onsite-notifications/2021-action-items-discovery/action-items-plan-and-questions-tressa.md`
290. `products/identity-personalization/onsite-notifications/dot-indicator/create-dot-indicator/launch-materials/dot-indicator-release-plan.md`
291. `products/identity-personalization/onsite-notifications/mvp/UAT/internal-testing-plan.md`
292. `products/identity-personalization/onsite-notifications/mvp/launch-materials/onsite-notifications-release-plan.md`
293. `products/identity-personalization/onsite-notifications/update-design-system-component/launch-materials/notification-component-release-plan.md`
294. `products/identity-personalization/profile/Combine Profile and Account/Profile 2.0 Release Plan.md`
295. `products/identity-personalization/profile/appointment- scheduling-preferences/releaseplan.md`
296. `products/identity-personalization/profile/contact-information/address-validation/learn-and-improve-plan.md`
297. `products/identity-personalization/profile/contact-information/address-validation/release-plan.md`
298. `products/identity-personalization/profile/contact-information/bad-address-indicator/product/release-plan.md`
299. `products/identity-personalization/profile/hub/mvp/QA/hub-qa-plan.md`
300. `products/identity-personalization/profile/hub/mvp/hubReleasePlan.md`
301. `products/identity-personalization/profile/nametag/evssMigrationToLH/releasePlan.md`
302. `products/identity-personalization/profile/notification-preferences/default-send/QA/qaPlan.md`
303. `products/identity-personalization/profile/notification-preferences/default-send/releasePlan/defaultSendReleasePlan.md`
304. `products/identity-personalization/profile/notification-preferences/mhv-notification-preferences-migration/product/migration-plan.md`
305. `products/identity-personalization/profile/notification-preferences/mhv-notification-preferences-migration/product/potential-migration-plan-approaches.md`
306. `products/identity-personalization/profile/notification-preferences/product/release-plan.md`
307. `products/identity-personalization/profile/notification-preferences/uat/mvp/notification-preferences-uat-plan.md`
308. `products/identity-personalization/profile/personal-health-care-contacts/release-plan/release-plan-mvp-mar-2024.md`
309. `products/identity-personalization/profile/personal-information/personal-information-revision/product/release-plan.md`
310. `products/identity-personalization/team/sprint-objectives/maternity-leave-plan-2023.md`
311. `products/identity-personalization/team/sprint-objectives/sprint-objectives-7.31.19-11.16.21/samara-leave-planning.md`
312. `products/identity/Frontend/2022-testing-plan.md`
313. `products/identity/Incident Response/System Recovery Procedures/System Recovery Plan Exercise Template.md`
314. `products/identity/Products/MHV account creation API/release plan.md`
315. `products/identity/Products/Sign-In Service/Identity Team Integrations/Release Plan.md`
316. `products/identity/Products/terms and conditions/Regression Test Plan.md`
317. `products/identity/Products/terms and conditions/Release Plan.md`
318. `products/identity/Support Process/slackbot release comms plan.md`
319. `products/identity/login/mhv/mhv-account-creation_2017/accountcreationplanning.md`
320. `products/identity/login/sso/staging-review/accessibility-plan-modal.md`
321. `products/identity/login/sso/staging-review/accessibility-plan-sign-out.md`
322. `products/identity/login/sso/staging-review/accessibility-plan-signin-page.md`
323. `products/identity/login/sso/staging-review/go_nogo_plan.md`
324. `products/identity/login/sso/staging-review/kpi-planning.md`
325. `products/identity/login/sso/staging-review/release-plan.md`
326. `products/identity/sign-in-transition/Test Plan & Regression Test Plan for Enabling MHV Exemptions.md`
327. `products/identity/sign-in-transition/regression-test-plan.md`
328. `products/identity/sign-in-transition/test-plan-and-traceability-report.md`
329. `products/identity/templates/release_plan.md`
330. `products/iris/transition-plan.md`
331. `products/login.gov-adoption/okay-to-delete/release-plan-template.md`
332. `products/login.gov-adoption/okay-to-delete/release-plan.md`
333. `products/medical-device-tool/Release Plan.md`
334. `products/my-education-benefits/Form 22-5490 Updates/ReleasePlan.md`
335. `products/my-education-benefits/TOE 22-1990e Updates/release-plan.md`
336. `products/my-education-benefits/VA Education Inbox/release-plan.md`
337. `products/my-education-benefits/education-benefits-form/release-plan.md`
338. `products/my-education-benefits/enrollment-verification/release-plan.md`
339. `products/on-site-search/initiatives/search-landing/release plan.md`
340. `products/outreach-events/initiatives/2021-filtering-recurring-events/Release Plan O&E Enhancements.md`
341. `products/paperless-delivery/paperless-delivery-release-plan.md`
342. `products/pension/0969MVP-release-plan.md`
343. `products/pension/ITFv1-release-plan.md`
344. `products/pension/form-deactivation/Release Plan-527EZ and 530 Temp Deactivation.md`
345. `products/pension/form-deactivation/UAT Plan-527EZ abd 530 Temp Deactivation.md`
346. `products/platform/contract-testing/pact-release-plan.md`
347. `products/platform/forms-system/review-page-refactor-product-outline-release-plan.md`
348. `products/platform/logging/release_plan.md`
349. `products/platform/platform-newsletter/platform-newsletter-release-plan.md`
350. `products/platform/platform-website/homepage-MVP-release-plan.md`
351. `products/platform/vsp-collaboration-cycle/release-plan.md`
352. `products/streamlined_waiver/release_plan.md`
353. `products/tsa-safe-travel-letter/tsa-safe-travel-letter-release-plan.md`
354. `products/typeahead/initiatives/POC_and_1.0/release plan.md`
355. `products/typeahead/initiatives/typeahead_2.0/release plan.md`
356. `products/va-gov-relaunch-2018/analytics-reports/cx-plan-for-dragons.md`
357. `products/va-gov-relaunch-2018/analytics-reports/ga360-plan.md`
358. `products/va-mobile-app/Teams/QA and Release/Quality Assurance and Testing/Accessibility Test Planning.md`
359. `products/va-mobile-app/Teams/QA and Release/Quality Assurance and Testing/Mobile App Test Plan.md`
360. `products/va-mobile-app/Teams/QA and Release/Quality Assurance and Testing/New OS test plan.md`
361. `products/va-mobile-app/features/Preferred Name & Gender Identity/Product/Implementation Plan.md`
362. `products/va-mobile-app/features/Preferred Name & Gender Identity/Product/UAT Test Plan.md`
363. `products/va-mobile-app/features/Preferred Name & Gender Identity/QA/Test-plan.md`
364. `products/va-mobile-app/features/Remote-Disaster-Mitigation/Availability framework measurement plan.md`
365. `products/va-mobile-app/features/design-personalization/data/archived-data-plans/data_project_plan_v1.md`
366. `products/va-mobile-app/features/design-personalization/data/data_project_plan.md`
367. `products/va-mobile-app/features/design-personalization/uat/test-plan-protocol.md`
368. `products/va-mobile-app/features/encouraged-update/encouraged-update-implementation-plan.md`
369. `products/va-mobile-app/features/identity/login.gov-test-plan.md`
370. `products/va-mobile-app/features/nav-and-IA-updates/nav-and-IA-implementation-plan.md`
371. `products/va-mobile-app/features/vets-api-unused-services/vets-api-unused-services-explanation.md`
372. `products/va-mobile-app/product/Global Operational Plan 1st Half 2024.md`
373. `products/va-mobile-app/product/planning/quarterly planning/MobileQuarterlyPlanningProcess.md`
374. `products/va-mobile-app/product/planning/quarterly planning/Q32024Planning.md`
375. `products/verify-your-enrollment/release-plan-May-2024.md`
376. `products/vet-transition-support/military-branch-title-10-vads-alignment-q3-2025/release-plan.md`
377. `products/vet-transition-support/results-page-2.0/launch-materials/results-pg-2.0-release-plan.md`
378. `products/veteran-education-benefits-tools/Forms/22-1919/release-plan.md`
379. `products/veteran-onboarding/release-plan.md`
380. `products/veteran-onboarding/test-plan.md`
381. `products/veteran-status/mobile/API Refactor Release Plan.md`
382. `products/veteran-status/v2-IIR/api-change-release-plan.md`
383. `products/veteran-status/v2-IIR/web-redesign-release-plan.md`
384. `products/virtual-agent/Floating Chatbot release plan.md`
385. `teams/_archive/DEPO/meeting-notes/incident-mitigation-planning.md`
386. `teams/_archive/vsa/engineering/qa/testrail/ptems-qa-testrail-plans.md`
387. `teams/benefits-portfolio/benefits-intake-optimization/staging-reviews/21p-0537/regression-test-plan.md`
388. `teams/benefits-portfolio/benefits-intake-optimization/staging-reviews/21p-0537/release-plan.md`
389. `teams/benefits-portfolio/benefits-intake-optimization/staging-reviews/21p-0537/test-plan.md`
390. `teams/benefits-portfolio/benefits-intake-optimization/staging-reviews/21p-601/regression-test-plan.md`
391. `teams/benefits-portfolio/benefits-intake-optimization/staging-reviews/21p-601/release-plan.md`
392. `teams/benefits-portfolio/benefits-intake-optimization/staging-reviews/21p-601/test-plan.md`
393. `teams/benefits-portfolio/benefits-memorials/Claims & Appeals Q1 2022 Quarterly Planning.md`
394. `teams/benefits-portfolio/benefits-memorials/Claims & Appeals Q3 Quarterly Planning.md`
395. `teams/benefits-portfolio/benefits-memorials/Claims & Appeals Q4 Quarterly Planning.md`
396. `teams/benefits-portfolio/benefits-memorials/Q2 Planning.md`
397. `teams/benefits-portfolio/disability-experience/team-docs/Regression Test Plans/confirmation-copy-of-submission-regression-plan.md`
398. `teams/benefits-portfolio/disability-experience/team-docs/Regression Test Plans/side-navigation-regression-plan.md`
399. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/Core Team - Copy of Submission Release Plan.md`
400. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/DBEX 0781 Paper Sync Release Plan.md`
401. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/DBEX 526ez Contact Info Pre-fill Migration Release Plan.md`
402. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/DBEX Benefits Reference Data Endpoint Migration Release Plan.md`
403. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/DBEX Claims Service Endpoint Migration Release Plan.md`
404. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/DBEX Document Upload Service Migration Release Plan.md`
405. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/DBEX Intent To File Endpoint Migration Release Plan.md`
406. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/DBEX PPIU-DirectDeposit Service Endpoint Migration Release Plan.md`
407. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/DBEX Rated Disability Endpoint Migration Release Plan.md`
408. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/DBEX Submit Migration Release Plan.md`
409. `teams/benefits-portfolio/disability-experience/team-docs/Release Plans/Toxic Exposure Release Plan.md`
410. `teams/digital-experience/_archive/ebenefits/analytics/kpi-setting-planning.md`
411. `teams/digital-experience/_archive/product-dev-support/VSP Product Support KPI Setting Pre-Workshop Planning.md`
412. `teams/digital-experience/_archive/product-dev-support/planning/VSA-Onboarding-Plan-v2.md`
413. `teams/digital-experience/_archive/product-dev-support/planning/VSA-Onboarding-Plan.md`
414. `teams/digital-experience/_archive/tools/backend/Product/Q3 Planning - Ideas.md`
415. `teams/digital-experience/accessibility/product/test-plan.md`
416. `teams/digital-experience/content-ia/vsp-repos/mtg-notes-repo-planning-leadership-091119.md`
417. `teams/digital-experience/facility-locator-2022/velocity/capacity-planning.md`
418. `teams/digital-experience/search-discovery-2022/quarterly-planning.md`
419. `teams/digital-experience/sitewide-content/translation-work/State Department translation work/FY2024 translation planning.md`
420. `teams/digital-experience/vamc-2022/Project_Plan_Outline.md`
421. `teams/health-products/caregiver/archive/release-plan.md`
422. `teams/health-products/caregiver/release-plan.md`
423. `teams/health-products/caregiver/team notes/archive/KPI-Pre-Workshop-Planning.md`
424. `teams/health-products/caregiver/team notes/archive/draft-long-term-plan.md`
425. `teams/health-products/caregiver/team notes/phase-0-release-plan.md`
426. `teams/health-products/caregiver/team notes/phase-2-working-plan.md`

---

## Appendix B: Research Plans with PLACEHOLDER Data

**Total:** 385 files

1. `products/Comparison Tool Enhancements/Research_Plan_CT_SMF.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
2. `products/Comparison Tool Enhancements/research/Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
3. `products/Comparison Tool Enhancements/research/Research_Plan_CT_SMF.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
4. `products/Debt Resolution/one_va_debt_letter/mobile/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
5. `products/accredited-representation-management/research/2025-02-ARM-appointarep-live-usertest/Research Plan- Digital Submit.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
6. `products/accredited-representation-management/research/2025-06-ARM-Form21a-usertest/21a v4 Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
7. `products/accredited-representative-facing/research/Future -  21a research/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
8. `products/accredited-representative-facing/research/Future - Certifying Officials/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
9. `products/apply-for-home-loan-COE/research-design/discovery-interviews/coe-discovery-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
10. `products/apply-for-home-loan-COE/research-design/usability-testing-1/coe-usability-1-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
11. `products/apply-for-home-loan-COE/research-design/usability-testing-2/coe-researchplan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
12. `products/apply-for-home-loan-COE/research-design/usability-testing-3/COE-usability-3-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
13. `products/ask-va/design/User research/2024-01 Submit an inquiry/Research plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
14. `products/ask-va/design/User research/2024-04 Progress bar/Research plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
15. `products/ask-va/design/User research/2024-05 Dashboard/Research plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
16. `products/ask-va/design/User research/2024-07 Assistive technology - Form/Research plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
17. `products/ask-va/design/User research/2024-08 Assistive technology - Dashboard/Research plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
18. `products/ask-va/design/User research/2025-01 Automation concept testing/Research plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
19. `products/ask-va/design/User research/2025-10 Form and Inbox Usability Study/Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
20. `products/ask-va/design/User research/2025-12 Agent Process Research/Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
21. `products/authenticated-patterns/Design-and-research/2024-07-Research-Initiative-One-Prefill/Prefill Research Plan 08_19_2024.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
22. `products/authenticated-patterns/Design-and-research/2024-09-Research-Initiative-Two-Update-Prefill/Update Prefill Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
23. `products/authenticated-patterns/Templates/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
24. `products/benefit-letters/research/Your VA benefit letters and documents/Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
25. `products/burials-memorials/pre-need/mobile/research/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
26. `products/burials-memorials/pre-need/research/address-validation-research-april24/address-validation-research-plan-april24.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
27. `products/burials-memorials/pre-need/research/address-validation-research-jan24/address-validation-research-plan-jan24.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
28. `products/burials-memorials/time-of-need/research/Research-Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
29. `products/caregivers/1010cg-mvp/research-study-July2020/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
30. `products/caregivers/Improve Facility Selection/Research/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
31. `products/claim-appeal-status/appeals-status/v3/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
32. `products/claim-appeal-status/research/April-2020-dicovery-concept-usability/Research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
33. `products/claim-appeal-status/research/co-design-usability-June/Research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
34. `products/combined_fsr/research/enhanced_fsr/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
35. `products/combined_va_debt_portal/mobile/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
36. `products/combined_va_debt_portal/research/exploratory-2024/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
37. `products/content/audience-hubs/research/service-member/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
38. `products/content/content-strategy-ia-collaboration/content-placement-criteria/research-implementation-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
39. `products/content/content-strategy-ia-collaboration/content-placement-criteria/research-plan-r1.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
40. `products/content/spanish-translation/research/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
41. `products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/card-sort/card-sort-research-plan-sme.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
42. `products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/card-sort/card-sort-research-plan-veterans.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
43. `products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/iris/contact-center-interviews-1-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
44. `products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/usability-study-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
45. `products/copilot-research-prompts/research-discovery/past-research-analysis-for-new-research-plan-prompt.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
46. `products/copilot-research-prompts/research-review/research-plan-analysis-prompt.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
47. `products/debt-letters-mvp/research/uat-aug20/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
48. `products/debt-letters-mvp/research/usability-july20/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
49. `products/decision-reviews/Notice-of-Disagreement/NOD_UAT_Test_June2021/ResearchPlan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
50. `products/decision-reviews/Notice-of-Disagreement/Research/012024-accessible-submission-download/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
51. `products/decision-reviews/Notice-of-Disagreement/Research/032021-NOD-usability/ResearchPlanNOD.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
52. `products/decision-reviews/Supplemental-Claims/Research/0924-2024-SC-Updates/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
53. `products/decision-reviews/Supplemental-Claims/Research/1222-PACT-Act/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
54. `products/decision-reviews/Supplemental-Claims/Research/MVP Usability Research/researchplan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
55. `products/decision-reviews/Supplemental-Claims/Research/researchplan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
56. `products/decision-reviews/higher-level-review/research/Usability-HLR-Post-Launch/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
57. `products/decision-reviews/higher-level-review/research/UsabilityStudy/Researchplan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
58. `products/decision-reviews/research/ama-research/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
59. `products/decision-reviews/research/decision-reviews-onramp-2025/2025-08 Decision review options tool usability evaluation Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
60. `products/disability/526ez/engineering_research/0781_paper_sync_plannig.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
61. `products/disability/526ez/engineering_research/lighthouse_document_upload_migration_planning.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
62. `products/disability/526ez/research/2023-11-Shadowing-Research/Research-Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
63. `products/disability/526ez/research/2024-06 0781 Research/Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
64. `products/disability/526ez/research/2024-07-Submission-Status/Research-Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
65. `products/disability/526ez/research/2024-11-Toxic Exposure/AT- Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
66. `products/disability/526ez/research/2024-11-Toxic Exposure/Non-AT Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
67. `products/disability/526ez/research/2025-02 0781 Research/Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
68. `products/disability/526ez/research/2025-11 Side Navigation/Side Navigation Research Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
69. `products/disability/526ez/research/CC-Team-Research/2024-11 Conditions Info Entry/2024-11 Research Plan - Condition info entry.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
70. `products/disability/526ez/research/CC-Team-Research/202403 Improved Autosuggest/Research plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
71. `products/disability/526ez/research/CC-Team-Research/2025-06 New or Increase at Condition Level/Research Plan - 2025-06 New or Increase at Condition Level.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
72. `products/disability/526ez/research/archive/July-2021/ResearchPlan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
73. `products/disability/526ez/research/archive/jan-2018/meetings/in-person-plan-for-claims-for-increase-1-18-18.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
74. `products/disability/526ez/research/archive/mar-2021/ResearchPlan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
75. `products/disability/526ez/research/archive/nov-2020/ResearchPlan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
76. `products/disability/abd-vro/2024-01-Max-CFI-Refinements/2024-01-Max-CFI-Refinements-Research-Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
77. `products/disability/abd-vro/2024-7-Claim-Evidence/Research_Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
78. `products/disability/disability-compensation-claim/bdd/BDD Research/BDD-Usability-test-April2021/ResearchPlan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
79. `products/disability/disability-compensation-claim/bdd/BDD Research/BDD-usability-test-April/Research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
80. `products/disability/disability-compensation-claim/bdd/BDD Research/Initial-usability-March2020/BBD-Research-Plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
81. `products/disability/disability-compensation-claim/bdd/BDD Research/UAT-August-2020/uat-plan-bdd.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
82. `products/eFolders_Migration/research/discovery-sept20/research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
83. `products/ebenefits/apply-CH36-VRE-counseling/research-design/uat/ch36-uat-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
84. `products/ebenefits/apply-CH36-VRE-counseling/research-design/usability-testing/ch36-ch31-usability-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
85. `products/ebenefits/apply-vre-ch31/research-design/uat/ch31-uat-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
86. `products/ebenefits/dependency-verification/modal/research-design/UAT/dep-ver-uat-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
87. `products/ebenefits/dependency-verification/modal/research-design/usability-testing/dependent-verifiy-usability-1-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
88. `products/ebenefits/view-payment-history/research-design/payment-history-usability-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
89. `products/ebenefits/view-payment-history/research-design/uat/view-payments-uat-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
90. `products/ebenefits/view-update-POA/research-design/poa-payment-history-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
91. `products/ebenefits/view-update-POA/research-design/usability-testing/view-rep-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
92. `products/ebenefits/view-update-POA/research-design/usability-testing/view-search-appoint-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
93. `products/ebenefits/view-update-POA/research-design/vso-discovery-interviews/vso-interviews-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
94. `products/ebenefits/view-update-dependents/research-design/686-form-gating-0220/686-usability-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
95. `products/ebenefits/view-update-dependents/research-design/686-usability-staging-0520/686-usability-staging-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
96. `products/ebenefits/view-update-dependents/research-design/686-usability-study/disabilities-dependents-usability-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
97. `products/ebenefits/view-update-dependents/research-design/formlet-usability/formlet-usability-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
98. `products/ebenefits/view-update-dependents/research-design/uat/686-uat-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
99. `products/education-careers/application/vettec-0994/research/0994-research-plan-round-2-.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
100. `products/education-careers/application/vettec-0994/research/0994-research-plan.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD

_(285 more files with placeholders not shown - see CSV for complete list)_

---

## Appendix C: Conversation Guides with NO FRONTMATTER

**Total:** 31 files

1. `products/apply-for-home-loan-COE/research-design/usability-testing-2/coe-conversationguide.md`
2. `products/decision-reviews/Supplemental-Claims/Research/MVP Usability Research/conversationguide.md`
3. `products/decision-reviews/Supplemental-Claims/Research/conversationguide_SME.md`
4. `products/decision-reviews/Supplemental-Claims/Research/conversationguide_VSO.md`
5. `products/education-careers/school-feedback-tool/research/conversationguide.md`
6. `products/education-careers/vocational-rehab/research/conversationguide-formresearchjan2018.md`
7. `products/facilities/medical-centers/research/2024 VAMC CMS/ImageUploader/PreStudy/ConversationGuide.md`
8. `products/health-care/beneficiary-travel/research/08-2025--Travel Complex Claims Concept Study/ConversationGuide.md`
9. `products/health-care/beneficiary-travel/research/2024-04-Reimbursement-Status-Look-and-Feel-Study/ConversationGuide.md`
10. `products/health-care/beneficiary-travel/research/2024-06-Travel-Claim-Status-Language-Generative-Study/ConversationGuide.md`
11. `products/health-care/beneficiary-travel/research/2025-03-SMOC-UAT-Beta/ConversationGuide.md`
12. `products/health-care/beneficiary-travel/research/2025-05-Travel Claim Management Usability/ConversationGuide.md`
13. `products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/research/2025-08-Update Email Prompt/ConversationGuide.md`
14. `products/health-care/secure-messaging/vets-secure-messaging/discovery/past-user-testing/conversationguide-aug2016.md`
15. `products/identity/login/mhv/mhv-account-creation_2017/conversationguide-4-17-17.md`
16. `products/identity/login/mhv/mhv-account-creation_2017/conversationguide2.md`
17. `products/identity/login/mhv/mhv-account-creation_2017/research/conversationguide-4-17-17.md`
18. `products/identity/login/mhv/mhv-account-creation_2017/research/conversationguide2.md`
19. `products/login.gov-adoption/in-person-proofing/research/Co-Creation Cohort/conversationguide.md`
20. `products/va-mobile-app/platform/VA Mobile Docs site /conversationguide.md`
21. `products/veteran-status/v1/Research/2023-12-VetStatus-Use-Case-Discovery/2023-12-ConversationGuide.md`
22. `products/veteran-status/v2-IIR/Research/ConversationGuide.md`
23. `products/virtual-agent/research/2025-07-Chatbot User Testing/ConversationGuide.md`
24. `products/virtual-agent/research/2025-10-Chatbot User Testing Round 2/ConversationGuide(PerigeanVets).md`
25. `products/virtual-agent/research/non-auth to auth/conversationguide.md`
26. `products/virtual-agent/research/spanish speaking veterans/archive/conversationguide-ES.md`
27. `products/virtual-agent/research/spanish speaking veterans/archive/conversationguide.md`
28. `products/virtual-agent/research/spanish speaking veterans/conversationguide-ES-updated.md`
29. `products/virtual-agent/research/spanish speaking veterans/conversationguide-updated.md`
30. `teams/digital-experience/_archive/ebenefits/engineering/2018-prefill-docs/2018-prefill-docs/research/conversationguide.md`
31. `teams/digital-experience/_archive/ebenefits/engineering/2018-prefill-docs/research/conversationguide.md`

---

## Appendix D: Conversation Guides with PLACEHOLDER Data

**Total:** 233 files

1. `products/Comparison Tool Enhancements/research/Conversation_Guide_CT_SMF.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
2. `products/Debt Resolution/Financial-Status-Report/research/mar-2021/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
3. `products/Debt Resolution/Financial-Status-Report/research/oct-2020/SME-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
4. `products/Debt Resolution/Financial-Status-Report/research/oct-2020/vso-conversations/vso-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
5. `products/Debt Resolution/Medical_Copays/research/apr-2021/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
6. `products/Debt Resolution/Medical_Copays/research/feb-2021/vahrc-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
7. `products/Debt Resolution/Medical_Copays/research/jun-2021/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
8. `products/Debt Resolution/Medical_Copays/research/uat-nov-2021/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
9. `products/Debt Resolution/digital-dispute/research/digital-dispute-wizard-study-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
10. `products/burials-memorials/pre-need/discovery/conversation-guide-1.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
11. `products/burials-memorials/pre-need/mobile/research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
12. `products/caregivers/1010cg-mvp/Sign-as-Rep-Round2-Usability-April 2021/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
13. `products/caregivers/1010cg-mvp/Sign-as-a Rep-Round3-Oct2021/Usability research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
14. `products/caregivers/1010cg-mvp/Usability Study-Sign as Representative- February 2021/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
15. `products/caregivers/1010cg-mvp/Usability-Test-Dec-2020/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
16. `products/caregivers/1010cg-mvp/research-study-July2020/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
17. `products/caregivers/1010cg-mvp/usability-testing-jan2020/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
18. `products/caregivers/Improve Facility Selection/Research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
19. `products/claim-appeal-status/research/co-design-usability-June/Conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
20. `products/combined_fsr/research/enhanced_fsr/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
21. `products/combined_va_debt_portal/mobile/conversation_guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
22. `products/content-localization/Research/multilingual-research-2021/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
23. `products/content/audience-hubs/research/service-member/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
24. `products/content/content-strategy-ia-collaboration/content-placement-criteria/research-conversation-guide-r1.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
25. `products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
26. `products/content/tier-2-content-IA-and-design/learning-center-mvp/discovery-and-research/iris/contact-center-interview-1-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
27. `products/copilot-research-prompts/research-review/conversation-guide-analysis-prompt.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
28. `products/debt-letters-mvp/research/discovery-may20/call-center-representatives-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
29. `products/debt-letters-mvp/research/discovery-may20/jodi-and-dawn-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
30. `products/debt-letters-mvp/research/uat-aug20/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
31. `products/debt-letters-mvp/research/usability-july20/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
32. `products/decision-reviews/Notice-of-Disagreement/Research/042023 NoD Evaluative Research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
33. `products/decision-reviews/Supplemental-Claims/Research/1222-PACT-Act/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
34. `products/decision-reviews/higher-level-review/research/UAT-October-2020/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
35. `products/decision-reviews/research/ama-research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
36. `products/dependents/research/2025-08-continuous-discovery-pilot/Round 7/conversation guide.md`
   - Placeholders: [Team, Product, Date], YYYY-MM-DD, [AUTHOR NAME]
37. `products/disability/526ez/archive/uat/781-781a/781-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
38. `products/disability/526ez/archive/uat/781-781a/781a-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
39. `products/disability/526ez/research/2023-11-Shadowing-Research/Conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
40. `products/disability/526ez/research/2024-07-Submission-Status/Conversation-Guide-A.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
41. `products/disability/526ez/research/2024-07-Submission-Status/Conversation-Guide-B.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
42. `products/disability/526ez/research/archive/2023_01_Benefits_Portfolio_Offsite_Conversation_Guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
43. `products/disability/abd-vro/2024-01-Max-CFI-Refinements/2024-01-Max-CFI-Refinements-Conversation-Guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
44. `products/disability/disability-compensation-claim/bdd/BDD Research/BDD-usability-test-April/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
45. `products/disability/disability-compensation-claim/bdd/BDD Research/UAT-August-2020/conversation-guide-uat.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
46. `products/eFolders_Migration/research/discovery-sept20/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
47. `products/ebenefits/view-update-POA/research-design/21-22-interview-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
48. `products/ebenefits/view-update-dependents/research-design/686-form-gating-0220/686-usability-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
49. `products/education-careers/application/1990e/2-conversation-guide-1990e-5490-feedback.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
50. `products/education-careers/application/1990e/gb-rr-participant2-conversation-guide-1990-feedback.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
51. `products/education-careers/application/1990e/jd-rr-participant1-conversation-guide-5490-feedback.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
52. `products/education-careers/application/1990n/2-conversation-guide-5495-1990n-feedback.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
53. `products/education-careers/application/1995/2-conversation-guide-1995-feedback.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
54. `products/education-careers/opt-out/research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
55. `products/education-careers/school-feedback-tool/research/conversation-guide-v2.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
56. `products/education-careers/school-feedback-tool/research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
57. `products/education-careers/statement-of-benefits/v1/research/conversation-guide-050117.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
58. `products/education-careers/statement-of-benefits/v1/research/conversation-guide-061917.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
59. `products/education-careers/statement-of-benefits/v1/research/conversation-guide-102318.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
60. `products/education-careers/statement-of-benefits/v1/research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
61. `products/education-careers/stem/stem-standalone-10203/SCO & Entitlement UAT/conversation-guide_eligible.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
62. `products/education-careers/stem/stem-standalone-10203/SCO & Entitlement UAT/conversation-guide_ineligible.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
63. `products/education-careers/stem/stem-standalone-10203/UAT/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
64. `products/education-careers/vocational-rehab/research/conversation-guide-veterans.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
65. `products/education-data-migration/research-folder-weamspublic/conversation-guide-weamspublic.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
66. `products/education-data-migration/research-folder-yrt/conversation-guide-yrt.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
67. `products/facilities/community-living-centers/discovery/clc-sme-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
68. `products/facilities/domiciliaries/discovery/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
69. `products/facilities/facility-locator/initiatives/2023-2025-search-improvements/research/mobile-map/2025-03-conversation-guide.md`
   - Placeholders: [AUTHOR NAME]
70. `products/facilities/facility-locator/initiatives/2023-2025-search-improvements/research/services-and-progressive-disclosure/conversation-guide.md`
   - Placeholders: [AUTHOR NAME]
71. `products/facilities/facility-locator/research/discovery-sprints/user-research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
72. `products/facilities/facility-locator/research/user-research/FL-Search-march2020/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
73. `products/facilities/facility-locator/research/user-research/benefits-taxonomy-research-SME/benefits-taxonomy-SME-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
74. `products/facilities/facility-locator/research/user-research/emergency-care-mashup/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
75. `products/facilities/facility-locator/research/user-research/facility-status/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
76. `products/facilities/facility-locator/research/user-research/screenreader-usability-study/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
77. `products/facilities/facility-locator/research/user-research/services-benefits-taxonomy-USERS/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
78. `products/facilities/facility-locator/research/user-research/services-taxonomy/services-taxonomy-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
79. `products/facilities/facility-locator/research/user-research/urgent-care-PDF/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
80. `products/facilities/facility-locator/research/user-research/urgent-care-mashup/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
81. `products/facilities/vaccination-taxonomy/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
82. `products/find-a-yellow-ribbon-school/v1/yellow-ribbon-mvp/research/jan-2020-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
83. `products/harassment-reporting/research/static-landing-page/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
84. `products/harassment-reporting/research/usability/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
85. `products/health-care/1095b-tax-form/research/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
86. `products/health-care/1095b-tax-form/research/round2/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
87. `products/health-care/1095b-tax-form/research/uat/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
88. `products/health-care/application/va-application/research/april-may-2021/end-user-discovery/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
89. `products/health-care/application/va-application/research/april-may-2021/sme-discovery/1-1conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
90. `products/health-care/application/va-application/research/user-testing/dashboard-updates/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
91. `products/health-care/appointments/mobile-app-discovery/research/access-usability/access-usability-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
92. `products/health-care/appointments/mobile-app-discovery/research/discoverability/discoverability-conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
93. `products/health-care/beneficiary-travel/research/2026-04 User Created Appointment Data Usability Study/conversation guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
94. `products/health-care/champva/10-7959a/research/user-research/2024-08-CHAMPVA-claim-usability/2024-08-Conversation-Guide-for-CHAMPVA-Claims-10-7959a-Usability-Interviews.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
95. `products/health-care/champva/1010D/status-tool/research/CHAMPVA Dependents Management/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
96. `products/health-care/checkin/discovery/telephone-appointments/staff-interviews/conversation-guide-pcp.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
97. `products/health-care/checkin/research/accessibility/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
98. `products/health-care/checkin/research/in-person-discovery/researchPlan-conversationGuide.md`
   - Placeholders: [Product Name], [Team, Product, Date], [Team Name], YYYY-MM-DD
99. `products/health-care/checkin/research/remote-discovery/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]
100. `products/health-care/checkin/research/staff-facing/bay-pines-in-person/conversation-guide.md`
   - Placeholders: YYYY-MM-DD, [TEAM NAME], [Team, Product, Date], [PRODUCT NAME], [AUTHOR NAME]

_(133 more files with placeholders not shown - see CSV for complete list)_

---

## How to Use This Report

1. **Find your files:** Search for your product/team name in the appendices above
2. **Check the CSV:** Use `frontmatter_audit.csv` for the complete, filterable list
3. **Fix issues:** Follow guidance in `FRONTMATTER_REMEDIATION_GUIDE.md`
4. **Validate:** Use `scripts/check_directory_frontmatter.py` to verify fixes

## Related Documentation

- `FRONTMATTER_AUDIT_REPORT.md` - Executive summary
- `FRONTMATTER_REMEDIATION_GUIDE.md` - How to fix frontmatter
- `frontmatter_audit.csv` - Complete data for filtering/analysis
- `scripts/audit_frontmatter_improved.py` - Audit script with strict detection

---

**Generated by:** `scripts/audit_frontmatter_improved.py`  
**Audit Date:** {datetime.now().strftime('%Y-%m-%d')}
