# Results Pg 2.0 - Accessibility Staging Review Prep

For additional reference see [Accessibility staging review prepartion documentation](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review).

## Foundational Accessibility Tests
| Test | Additional info about test | Test Complete (yes/no) | Pass/Fail | Findings | Test Performed By |
| -------------------------- | ------------------------------- |----------------------------- | ------------------ | ---------------------------------- |------------------ |
|Axe scans in daily development | [read more about the axe browser plugin](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-AutomatedtestingwithaxebyDequeaxe)| yes  | pass | 0 issues in full-page scan  | Theo |
|Axe scans included in end-to-end (e2e) tests | [read more about e2e tests with axe checks](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-axescansinend-to-endtests)| yes | pass | [Confirmation page E2E test](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/discover-your-benefits/tests/e2e/discover-your-benefits.cypress.spec.js) includes Axe scans | Theo |
| Color tests for proper contrast and colorblindness | [read more about contrast and colorblindness](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Useofcolorandcolorcontrastuse-of-color)| yes | pass | The confirmation page has proper contrast and color blindness. The UI of the form istelf is maintained by the design system, which also has proper contrast. This was confirmed from axe browser plugin as well. | Theo  |
| Content zoomed to 200%, 300%, 400% | [read more about zoomed layouts](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Contentzoomandreflowcontent-zoom)| yes | pass | Content does not overlap when zoomed in.  | Theo  |
| Keyboard navigation | [read more about navigating with the keyboard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Keyboardnavigationkeyboard-nav)| yes  | pass | No issues found with keyboard navigation | Theo   |


## Advanced Accessibility Tests (optional)

| Test | Additional info about test | Test Complete (yes/no) | Pass/Fail | Findings | Test Performed By |
| ------------------------------- | ------------------------------ | ----------------------- | --------------------------- |------------------ |------------------ |
| Screen reader tests (VoiceOver + Safari or NVDA + Firefox) | [read more about getting started with screen readers](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Screenreadersscreen-readers). _Teams are encouraged to conduct their own screen reader tests as part of the software development lifecycle (SDC). DEPO Platform acknowledges this testing is aspirational._| yes | pass | No issues found using voiceover | Theo  |
WAVE tool spot checks | [read more about the WebAIM WAVE tool](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-WAVEspotcheckswave)|  yes | pass | No issues found | Theo  |

