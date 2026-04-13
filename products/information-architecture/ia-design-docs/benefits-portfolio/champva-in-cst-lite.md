# Mini IA Design for CHAMPVA app status in claims status tool

**STATUS: IN PROGRESS**

**Team:** BMT 1

**CAIA Intake ticket:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/130609

**IA Tracker:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/136565 

**Files:**
- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1773786513769/a471d78fd6ed5cdc5b804c589309139108d2a8f8)
- [Figma](https://www.figma.com/design/OpAuMgHwnh6BNkKpW3FyqF/CHAMPVA-in-Status-Tool?node-id=508-6955)

**On this page:**
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Launch coordination activities](#launch)

## <a name="map"></a>Page structure<br>




## <a name="url"></a>Page URLs and breadcrumbs
Follow the [VA Design System](https://design.va.gov/) for URL, breadcrumb, and page title guidance.  
- [URLs](https://design.va.gov/components/url-standards/)
- [H1s (Page titles and section titles)](https://design.va.gov/content-style-guide/page-titles-and-section-titles)
- [Breadcrumbs](https://design.va.gov/components/breadcrumbs)
- [Title tags](https://design.va.gov/content-style-guide/title-tags)

Approach
- The new CHAMPVA pages will live behind authentication
- URLs do not need to be SEO optimized (because they are behind authentication) and can be a bit shorter and less descriptive, but should still be readable and understandable - no abbreviations or shortened words

**1) CST landing page - existing**
- URL: va.gov/track-claims/your-claims/
- H1: Your VA benefits claims and applications (REVISED, PENDING FINAL COPY)
- Breadcrumb (desktop): VA.gov home > Your VA benefits claims and applications (REVISED, should match final H1 copy)
- Browser title: [H1 in initial case] | Veterans Affairs

**2) CHAMPVA application pages - new**
- URL: va.gov/track-claims/your-claims/[UUID number]/
- H1: Application for CHAMPVA benefits
- Breadcrumb: VA.gov home > Check your claims and appeals > Application for CHAMPVA benefits
- Browser title: Application For CHAMPVA Benefits | Veterans Affairs

  URL and breadcrumb should remain the same regardless of the tab selected (Status, Files, Overview).
  

**Structuring URLs for individual screens within the flows**
- Tabular information should not change the URL or breadcrumbs
- For evidence requests (called "information requests" when related to CHAMPVA), use the UUID: for example, va.gov/track-claims/your-claims/[UUID number]/needed-from-you/[UUID number for type of evidence]/
- Noting that there are two known empty subdirectories: /track-claims/ and /needed-from-you/. Recommend following this pattern until these issues can be fixed.
- Also noting that there is a known issue of not being able to get back to /claim-or-appeal-status/ post authentication

## <a name="nav"></a>Entry points <br>

Teams must launch with at least one entry point that allows site visitors to navigate to the new content or feature. 

**Please note:** The Governance Team requires preview links of updated entry points as a part of staging review in the Collaboration Cycle. It may be a launch-blocking issue. Updates that will be done by the Content and IA team, as noted below, should be requested a minimum of one week before the staging review cutoff (four days prior to scheduled review). Two weeks of advanced knowledge is preferred when possible. Please communicate the staging review date as soon as it is scheduled to your main Content and IA contact. 

### Required entry point(s)

1. **xxx**
  - Entry page URL: va.gov/xxx
  - Placement description: xxx
  - Link details
    - Link label: TBD by content
    - Link destination: va.gov/xxx
  - Notes:
    - Who will update: Content will add the link
    - When will this entry point go live: at launch
    - **Note: If the form will be released incrementally (aka not at 100%) or if the launch plan includes taking the form down temporarily after launch to check submission quality, a widget will be required. This requires coordination between the product engineer to create the widget and content to provide text for the widget. This can take some time. Please plan for at least 2 weeks ahead of staging review.** 

### Additional key entry points
None at this point

## <a name="launch"></a>Launch coordination <br>
*Communication when preparing for launch is critical to ensuring all supporting content, links, and messaging are implemented in a timely manner to ensure a good experience. Missing any of these steps can result in findability challenges, incorrect or misleading information, duplicate content, etc. *

| Key task | Responsibility | When to complete | Additional info |
| ------------- | ------------- | ------------- | ------------- |
| Communicate if staged/incremental launch is planned | xxx | ASAP | initiates coordination of widget creation |
| Communicate date of staging review | xxx | Once scheduled | Allows OCTO to prepare entry point preview links |
| Communicate launch date | xxxx | Once scheduled | Allows OCTO to plan for updates to About and static pages |


<hr>
<hr>

