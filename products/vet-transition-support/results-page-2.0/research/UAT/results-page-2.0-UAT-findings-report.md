# Results Page 2.0: UAT Findings Report
# UAT Findings Report: Discover Your Benefits (Results Page 2.0)

**Date:** March 17, 2026  
**Initiative:** Results Page 2.0

## Testing Methodology

This study was an internal User Acceptance Testing (UAT) session conducted on a product currently in staging. Participants were recruited internally rather than through standard external recruitment processes. Because the participants are technically savvy (developers and designers), we used an abbreviated usability testing process.

## What We Did

We conducted three sessions with internal staff who roleplayed specific personas:

* Persona 1 (RSV): An Army Veteran in their first year post-separation with a 50% disability rating.  
* Persona 2 (TSM): A transitioning service member in their last year of service, new to VA.gov.

Participants were asked to complete the Discover Your Benefits questionnaire then interact with the results page, specifically testing the visibility and functionality of filters, sorting, and recommended benefit logic.

## Tasks and Outcomes

* **Task:** Complete the "Discover Your Benefits" questionnaire.  
  * **Outcome:** All participants completed the questionnaire easily.   
* **Task:** Navigate and interact with the Sort function.   
  * **Outcome:** Mixed results. P2 and P3 easily found the Sort function and navigated as expected. P1 did not find the sort function independently, describing it as "subtle" and hard to notice.   
* **Task:** Find and use filters to refine benefit results.   
  * **Outcome:** Some friction. All participants easily and independently found the filters. P1 and P2 both missed the "Apply filters" button initially, expecting results to update automatically upon clicking a checkbox. P2 discovered a bug on mobile Safari where the filter menu collapses immediately after a single selection.  
* **Task:** Find and understand "Recommended" vs. "All" benefits.  
  * **Outcome:** All participants easily and independently found the filter. All participants correctly identified that they were now seeing more results after unclicking the filter.

## Bugs

* **Mobile filter interaction**  
  * On iPhone Safari, the filter menu collapses immediately after a selection is made without updating results or allowing the user to easily hit "Apply".

## Additional observations for future research

* **Review page headers**  
  * The review page appears to have missing headers for sections that do not have sub-sections, making the page look "broken" or unintentional to participants.  
* **Filter logic consistency**  
  * P1 expected the "After Separation" filter to be pre-checked automatically because his questionnaire answers already indicated he was post-separation.  
* **Adding context for recommendation logic**  
  * P3 (adopting a low-trust TSM persona) felt that limiting the initial view to 10 of 13 benefits felt like information was being withheld. P3 suggested adding text to explain why a benefit was recommended (e.g., "based on your selected goals").
