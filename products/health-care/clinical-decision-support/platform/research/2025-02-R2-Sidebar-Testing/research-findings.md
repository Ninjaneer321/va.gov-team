---
title: "Sidebar Navigation Round 2 Research Findings"
product: "CDS Console"
team: "Platform Team"
office: "Office of Information and Technology & Veterans Health Administration"
date: "2025-03-19"
researchers:
  - "Liz Blasi, UX Design & Research"
research_goals:
  - "Validate recent improvements to sidebar navigation design based on Round 1 feedback"
  - "Identify any remaining usability adjustments before finalizing V1/MVP design"
  - "Ensure patient demographic details presentation aligns with patient safety standards"
  - "Refine navigation information architecture for clear and intuitive hierarchical structure"
methodology:
  - "Usability testing with interactive prototypes (Prototype A and Prototype B)"
  - "Scenario-based task testing"
  - "Comparative feedback sessions"
  - "Scenario mapping workshop"
devices_used:
    desktop: 5
    tablet: 0
    smartphone: 0
    assistive_technology: 0
participants_total: 5
Primary role:
  Clinical dietician: 0
  MSA: 0
  Nurse Practitioner: 0
  Nursing (RN, LPN): 0
  Pharmacist: 0
  Physician: 5
  Physician Assistant: 0
  Resident, Intern, or Fellow: 0
  Other: 0
Specialty:
  Cardiology: 0
  Dermatology: 0
  Emergency Medicine: 0
  Endocrine: 0
  Hematology: 0
  Hepatology/Gastroenterology: 0
  Infectious Disease: 0
  Informatics: 0
  Mental Health: 0
  Nephrology: 0
  Neurology: 0
  Oncology: 0
  Pain Management: 0
  Palliative Medicine: 0
  Pharmacy: 0
  Primary Care: 5
  Pulmonology: 0
  Surgery: 0
  Other: 0
Care setting:
  Outpatient: 5
  Inpatient: 0
  Emergency Department: 0
  Other: 0
EHR:
 CPRS: 5
 Oracle: 0

key_findings:
  - "V1 sidebar navigation approach validated - expand/collapse functionality is findable and valuable"
  - "Patient identifiers in expanded and collapsed views meet clinician expectations"
  - "Last name, first name, and last 4 of SSN are must-have identifiers in collapsed view"
  - "Console 'Home' is findable but renaming to 'CDS Applications' recommended"
  - "Closing applications feature aligns with clinician expectations"
  - "Opportunities identified for future enhancements: full app list, favorites, enhanced close feature"
recommendations:
  - "Proceed with V1/MVP implementation as designed"
  - "Consider renaming 'Home' to 'CDS Applications' or 'Clinical Decision Support Applications'"
  - "Ensure patient name and last 4 SSN are always visible in navigation (patient safety requirement)"
  - "Prioritize future enhancements: full app list in sidebar, ability to favorite apps"
  - "Revisit prominence of 'Close' feature as app volume grows"
  - "Combine duplicate navigation items (e.g., 'Report a Problem' and 'Feedback')"
kpi_alignment:
  - "Reduced navigation time between CDS applications"
  - "Increased clinician confidence in patient identification across systems"
  - "Reduced cognitive load during multi-application workflows"
outcomes:
  user: "Clinicians can navigate between CDS tools more efficiently with reduced workflow interruptions and clear patient identification at all times"
  business: "V1 sidebar navigation ready for Q2 2025 implementation with validated design approach and clear roadmap for future enhancements"
opportunity_areas:
  - "Full list of apps in sidebar to reduce navigation back to Console Home"
  - "Ability to favorite apps for quick access"
  - "Enhanced prominence of 'Close' feature as application volume grows"
  - "Streamlined duplicate navigation items"
further_research_needed:
  - "Post-launch usability validation with V1 implementation"
  - "Testing of future enhancement features (favorites, full app list)"
  - "Evaluation of navigation patterns as CDS application ecosystem grows"
underserved_groups_missing:
  - "Oracle Health users"
  - "Clinical specialties beyond primary care"
  - "Inpatient and emergency department settings"
secondary_research:
  - "Round 1 sidebar navigation testing (December 2024)"
  - "Patient safety standards review"
synthesis_tools_used:
  - "Mural"
  - "Scenario mapping workshop"
  - "Affinity mapping"
---

# Sidebar Navigation Round 2 Research Findings 

**Office of Information and Technology & Veterans Health Administration, CDS Console, Platform Team**

**Date:** 03/19/2025

**Contacts:** Liz Blasi, UX Design & Research

**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

## Research Goals

This research built on Round 1 sidebar navigation testing to refine the navigation information architecture and validate improvements before V1/MVP implementation scheduled for Q2 2025.

**Context:**  
The Clinical Decision Support (CDS) Console serves as the central hub for impactful clinical decision support tools, providing clinicians with critical insights at the point of care. The sidebar navigation plays a crucial role in offering quick access to essential tools, relevant information, and data visualizations that enhance and streamline clinician workflows.

**Key Objectives:**  
- Validate recent improvements to sidebar navigation based on Round 1 feedback
- Identify any remaining usability adjustments needed before finalizing V1/MVP design
- Ensure patient demographic details presentation aligns with patient safety standards
- Refine navigation information architecture for clear and intuitive hierarchical structure

The study focused on three key areas identified in Round 1:
1. Patient demographic details presentation across user journey milestones
2. Streamlining navigation interaction behavior
3. Navigation interactions as they pertain to clinician workflow

## Research Questions

**Primary Focus Questions:**
* Does the refined sidebar navigation address usability issues identified in Round 1?
* Can clinicians easily navigate between CDS applications and tools?
* Are navigational elements organized intuitively for clinical workflows?
* Do interactions (expand/collapse, launching apps, closing apps) align with clinician expectations?

**Secondary Focus Questions:**
* What patient demographic information must be visible at all times for patient safety?
* How do patient identifier expectations differ between expanded and collapsed sidebar views?
* Does the presentation of patient demographics reduce cognitive load and support cross-system verification?

## Methodology 

This study employed prototype-based usability testing with scenario mapping:

- **Prototype Testing**: Participants interacted with two sidebar navigation prototypes (Prototype A and Prototype B) featuring refined designs based on Round 1 feedback
- **Scenario-Based Tasks**: Clinicians completed realistic workflow scenarios including navigating between applications, expanding/collapsing sidebar, selecting patients, and closing applications
- **Comparative Feedback**: Participants provided feedback on navigation organization, patient demographic display, and overall usability
- **Scenario Mapping Workshop**: Collaborative session to map navigation patterns to clinical workflows
- **Participants**: 5 CPRS primary care physicians

## Hypotheses and Conclusions

### Primary Hypothesis: Sidebar Navigation Usability

**Hypothesis:** We believe that addressing usability issues identified in Round 1 testing will improve the effectiveness of the V1/MVP sidebar navigation implementation, making it easier for clinicians to navigate between clinical decision support applications and tools.

- **Status: Definitely True**  
- **Supporting evidence:** All major navigation elements tested positively. The expand/collapse functionality was findable and valuable for managing screen space. Console "Home" was easily found (with suggestion to rename to "CDS Applications"). Launched items in sidebar, closing applications, and feedback/account features all met clinician expectations. Participants confirmed the V1 approach is "pretty fine" and "fairly self-explanatory."

### Secondary Hypothesis: Patient Demographics for Safety

**Hypothesis:** We believe that standardizing the display of patient demographic details across the user journey will enhance usability and ensure alignment with patient safety standards. By improving consistency and gathering user expectations, we expect to reduce cognitive load, minimize errors, and improve clinician confidence in accessing critical patient information.

- **Status: Definitely True**  
- **Supporting evidence:** Participants consistently identified last name, first name, and last 4 of SSN as must-have identifiers. They emphasized the importance of these details being visible when making clinical decisions or interacting with patient data, and for cross-checking identity across multiple systems. Patient demographics serve as a "fail-safe mechanism" to validate data pertains to the right individual, especially when multitasking across applications.

## Key Findings

### Validated V1 Approach for Sidebar Navigation

1. **Expand/Collapse Sidebar functionality is findable and valuable for managing screen space** - Participants easily located the expand/collapse control and saw clear value in the ability to maximize content viewing area while maintaining access to navigation.

2. **Console "Home" is findable, with suggested renaming to "CDS Applications" or "Clinical Decision Support Applications"** - The home navigation was easily understood, though participants suggested more descriptive naming.

3. **Launched items in sidebar meet clinician expectations** - The display of currently open applications in the sidebar aligned with how clinicians expect to track and switch between active tools.

4. **Closing applications aligns with clinician expectations** - The close functionality was understood, though participants noted it may become more important as the number of available applications grows.

5. **Patient identifiers meet expectations in both expanded and collapsed views** - Participants confirmed that the demographic information displayed provides sufficient detail for patient identification and safety verification.

### Patient Safety and Demographics

6. **Last name, first name, and last 4 of SSN are must-have identifiers in collapsed view** - These three elements were consistently identified as the minimum required information, with birthday, gender, and address considered "nice to have."

7. **Patient demographics enable cross-verification with CPRS and other systems** - Participants emphasized using the Console's patient display to verify they're viewing the correct patient across multiple open systems.

## Details of Findings 

### Finding 1: Expand/Collapse Functionality is Valuable

**The ability to collapse the sidebar was consistently praised as valuable for managing screen real estate**, particularly for applications that benefit from more horizontal space.

_Supporting data:_ "Making it collapsible is a very good idea because you do need more space for some applications - like My Workweek."

_Supporting data:_ "I mean the patient name is going to show up there as well (horizontally). If this is collapsed…I mean, you could use this space up a little bit more (on the right), but really if we could navigate from the sidebar and we had the option to collapse it, I think that is good use of that space - making it collapsable."

### Finding 2: Console "Home" Findability is Confirmed

**Participants easily located and understood the Console Home navigation**, though some suggested more descriptive labeling.

**Key insights:**
- "Home" function was clear and intuitive
- Suggested alternative names: "CDS Applications" or "Clinical Decision Support Applications"
- Would help clarify the purpose of this navigation element

### Finding 3: V1 Design is "Pretty Fine" Overall

**Participants expressed satisfaction with the overall V1 sidebar navigation design**, with minimal suggestions for improvement before launch.

_Supporting data:_ "Me personally, I don't think anything. I think it's pretty fine."

_Supporting data:_ "I think it's fairly self-explanatory at home as with the task manager is what my work week are."

_Supporting data:_ "I like the way the navigation is set up."

### Finding 4: Patient Name and Last 4 SSN Must Always Be Visible

**Patient safety standards and clinician feedback confirm that patient name and last 4 of SSN must always be shown in navigation**, regardless of sidebar state.

**Minimum Information Expected:**
- Last name
- First name  
- Last 4 digits of SSN

_Supporting data:_ "Usually we just expect a last name and last four at a minimum."

_Supporting data:_ "First and last name and last four of the social would be important."

_Supporting data:_ "I think I'd be pretty confident with this (references prototype) - last name, first name, and last four of the social."

### Finding 5: Demographics Are Critical When Making Clinical Decisions

**Visible patient identifiers become especially important when viewing patient information or making clinical decisions**, serving as a verification mechanism.

_Supporting data:_ "If it's patient information that I'm looking at, then I would want to see that it's corresponding to my specific patient."

_Supporting data:_ "If I'm using information in an app to populate a patient's chart or make decisions with it (demographics are more important)…"

_Supporting data:_ "I want to see that it's (the application is) pulling in my patient's data and not the patient before my patient."

### Finding 6: Demographics Enable Cross-System Verification

**Patient demographics in the Console sidebar support cross-checking with CPRS and other systems** to ensure the correct patient is selected across all open applications.

_Supporting data:_ "I want to make sure that I actually have the correct person linked on both of them CPRS & VistA...Occasionally, you may have left one (screen/app) up with a different person and then you might have changed people on the other screen... You want to make sure they're (both correct)...I usually try and completely exit out of somebody, but occasionally I forget that… I think it's good to have multiple things that you can always double check that you have the correct person."

_Supporting data:_ "Once I'm in the chart and I'm interacting with different programs, just at least if the last four showed, I could verify across the systems that yep, that's the same patient."

_Supporting data:_ "I don't expect ever to have just CDS applications as the only program to be open… so I think just last four of social is enough. You'll have CPRS open. You can verify your other demographics from there too."

### Finding 7: Safety Risks Exist Without Clear, Consistent Demographics

**Participants described real scenarios where lack of visible patient identifiers led to or could have led to patient safety issues**, emphasizing the importance of consistent demographic display.

_Supporting data:_ "Some applications… they'll get frozen… and if you don't look to see that, you won't know and you might get mixed up with whose records you're looking at."

_Supporting data:_ "There's another patient with my same last name and last four... I just automatically clicked on the one that popped up and it was the wrong one."

### Finding 8: Patient Photos Provide Helpful Visual Confirmation

**While not required, patient photos were seen as a valuable additional verification method**, particularly appreciated by participants.

_Supporting data:_ "I do like all these photos of our patients in here, by the way. That's not an option these days that I know of."

_Supporting data:_ "That's kind of nice (references prototype). I can check and make sure everything matches."

### Finding 9: Age and DOB Are Contextually Useful

**Date of birth and age were viewed as helpful contextual information but not essential for patient identification** in most scenarios.

_Supporting data:_ "We see a date of birth… but we don't usually use that to identify patients in these kinds of apps."

_Supporting data:_ "Some people might find it helpful to have age easily accessible… you might pay more attention if they're 60 vs 18 years old."

_Supporting data:_ "When it's shrunk down (collapsed sidebar), like I said, maybe that date of birth or something up here to (have) as another identifier of who 'Sheba' is, just because if I wasn't on this patient summary tab Medcalc) with this date of birth and stuff, I wouldn't actually see that (information displayed that) we're currently on right now."

_Supporting data:_ "(collapsed view) Date of birth and age would be handy too. Age is good for context."

### Finding 10: Duplicate Navigation Items Should Be Consolidated

**Participants identified redundant navigation elements** that could be streamlined to reduce confusion and simplify the interface.

_Supporting data:_ "Now the other thing just wanted to mention so up here it says 'report a problem' Medcalc nav) and here (within the sidebar) it says 'feedback.' I mean those could be combined...Because it's like, OK, I'm giving feedback, but it's related to a problem - you know? So those those two (nav items) could be combined as just one common way to do that one (feedback) form."

### Finding 11: Closing Applications Is Less Important with Easy Navigation

**With improved sidebar navigation, the need to actively close applications is reduced**, though it may become more relevant as the application ecosystem grows.

_Supporting data:_ "If the navigation is easier, I would not want to do that (close an application). I would want to be able to go back and forth between different applications. You know, I might be using five (applications) at a time, but if I needed to close it in order for me to get around the others easier, I might close it. Otherwise, I would just want to use the applications I need, move on to the next patient and pull up whatever I need for the next patient. I would not want to have to close (the CDS application), and open new ones CDS applications). Just having an easier navigation will help - Not even needing to close them (apps)."

## Additional Insights

### Future Navigation Needs

As the CDS application ecosystem grows, participants identified potential future needs:

- **Full app list in sidebar**: Reduce need to navigate back to Console Home by showing all available applications directly in the sidebar
- **Favorites functionality**: Allow clinicians to mark frequently-used applications for quick access
- **Enhanced close feature**: As the number of open applications increases, more prominent close/management features may be needed

### Navigation and Header Evolution

The platform is following a phased approach to implementing sidebar navigation with patient safety considerations:

**Phase 1 (May 2025)**: Platform creates Design System Header with app title and patient demographics (first name, last name, last 4 SSN) always visible. Sidebar expands/collapses while maintaining patient information visibility.

**Phase 2 (June 2025)**: Add functionality to Design System Header with logic to orchestrate show/hide of patient demographics based on sidebar state. Add space for in-app navigation.

**Phase 3 (July 2025)**: CDS applications adopt Design System Header. Platform updates configurations per app as needed.

## Recommendations

### 1. Proceed with V1/MVP Sidebar Navigation Implementation
**Recommendation:** Move forward with V1 implementation as designed, incorporating the expand/collapse functionality, current patient identifier display, and validated navigation patterns.

_Supporting evidence:_ All core navigation elements tested positively. Participants confirmed the design is "pretty fine" and "fairly self-explanatory," with only minor enhancement suggestions for future releases.

### 2. Consider Renaming "Home" to "CDS Applications"
**Recommendation:** Rename the Console "Home" navigation to "CDS Applications" or "Clinical Decision Support Applications" for clearer communication of purpose.

_Supporting evidence:_ While "Home" was findable, participants suggested more descriptive naming would improve clarity about what this navigation element represents.

### 3. Ensure Patient Name and Last 4 SSN Always Visible
**Recommendation:** Maintain patient name (first and last) and last 4 of SSN as always-visible elements in both expanded and collapsed sidebar states to meet patient safety standards.

_Supporting evidence:_ Participants consistently identified these as must-have identifiers. Patient safety standards require this information for proper patient identification and verification across systems.

### 4. Consolidate Duplicate Navigation Items
**Recommendation:** Combine redundant navigation elements such as "Report a Problem" and "Feedback" into a single unified navigation item.

_Supporting evidence:_ Participants noted confusion about having multiple similar options and suggested consolidation would simplify the interface.

### 5. Prioritize Future Enhancement: Full App List in Sidebar
**Recommendation:** Add capability to view full list of available applications directly in the sidebar to reduce need to navigate back to Console Home.

_Supporting evidence:_ This was identified as a valuable enhancement to further streamline navigation between applications.

### 6. Prioritize Future Enhancement: Favorites Functionality
**Recommendation:** Develop ability for clinicians to favorite or pin frequently-used applications for quick access.

_Supporting evidence:_ This would support efficiency for clinicians who regularly use a core set of applications.

### 7. Revisit Close Feature Prominence as App Volume Grows
**Recommendation:** Monitor usage of the close application feature and consider making it more prominent as the number of available CDS applications increases.

_Supporting evidence:_ Participants noted that with easy navigation, closing apps is less important now, but may become more relevant as the ecosystem grows.

## Product User and Business Outcomes

### Desired User Outcome 

This research supports our desired user outcome by validating that the V1 sidebar navigation:

- **Reduces workflow interruptions**: Clinicians can navigate between CDS tools efficiently without leaving their clinical context
- **Ensures patient safety**: Critical patient identifiers (name and last 4 SSN) are always visible, enabling cross-system verification
- **Minimizes cognitive load**: Clear, intuitive navigation hierarchy reduces mental effort required to find and access tools
- **Provides flexibility**: Expand/collapse functionality allows clinicians to optimize screen space based on task needs

The research confirmed that the sidebar navigation approach addresses the "fragmented experience" identified in Round 1, creating a more cohesive and workflow-aligned interface for accessing CDS tools.

### Desired Business Outcome

This research supports our desired business outcome by:

- **Validating V1/MVP approach**: Design is ready for Q2 2025 implementation with high confidence in usability and safety
- **Establishing clear roadmap**: Future enhancements (full app list, favorites, enhanced close) are identified and prioritized
- **Ensuring compliance**: Patient safety standards for demographic display are met in both expanded and collapsed states
- **Enabling scalability**: Navigation pattern supports growing ecosystem of CDS applications
- **Reducing implementation risk**: Usability issues from Round 1 have been successfully addressed, minimizing need for post-launch corrections

The validated approach provides a solid foundation for the CDS Console to serve as the central hub for clinical decision support tools.

## Key Performance Indicators

### KPI 1: Reduced Navigation Time Between CDS Applications

This research supports measurement of this KPI by validating that the sidebar navigation provides intuitive, efficient access to CDS tools without requiring navigation back to Console Home for each application switch.

**Measurement opportunity:** Track time spent navigating between applications before and after V1 implementation. Monitor clicks required to switch between applications.

### KPI 2: Increased Clinician Confidence in Patient Identification

This research supports measurement of this KPI by confirming that always-visible patient identifiers (name and last 4 SSN) enable cross-system verification and reduce risk of patient misidentification errors.

**Measurement opportunity:** Survey clinicians on confidence in patient identification when using CDS applications. Track reported incidents of patient misidentification.

### KPI 3: Reduced Cognitive Load During Multi-Application Workflows

This research supports measurement of this KPI by validating that clear navigation hierarchy, launched items visibility, and consistent patient demographic display reduce mental effort required to manage multiple CDS tools.

**Measurement opportunity:** Measure task completion time for multi-application workflows. Survey clinicians on perceived ease of use and cognitive load.

## Next Steps

Based on the research findings, we recommend the following immediate actions:

1. **Proceed with V1/MVP Implementation (Q2 2025)**: Move forward with sidebar navigation implementation as designed, incorporating validated patterns for expand/collapse, patient demographics display, and navigation hierarchy.

2. **Implement Design System Header Evolution**: Follow the phased approach outlined:
   - May 2025: Platform creates Design System Header with always-visible patient demographics
   - June 2025: Add show/hide logic and in-app navigation space
   - July 2025: CDS applications adopt Design System Header

3. **Consider "Home" Renaming**: Evaluate feasibility and timeline for renaming Console "Home" to "CDS Applications" or similar descriptor.

4. **Consolidate Duplicate Navigation Items**: Combine "Report a Problem" and "Feedback" into unified navigation element.

5. **Prioritize Future Enhancements**: Begin planning for:
   - Full app list display in sidebar
   - Favorites/pinning functionality for frequently-used applications
   - Enhanced close/application management features

6. **Plan Post-Launch Validation**: Schedule follow-up research after V1 implementation to validate design decisions in production environment and gather feedback on enhancement priorities.

## Further research needed

Based on themes and insights covered in this research round, additional research is recommended for the following topics:

**Post-Launch Usability Validation**: Conduct follow-up testing after V1 implementation to validate that the sidebar navigation performs as expected in real clinical workflows with production applications.

**Future Enhancement Feature Testing**: Test prototypes of identified enhancement opportunities (full app list, favorites functionality, enhanced close features) to validate design approaches before implementation.

**Navigation at Scale**: As the CDS application ecosystem grows, evaluate how navigation patterns and needs evolve with larger numbers of available applications.

**Broader Participant Demographics**: Include Oracle Health users, additional clinical specialties beyond primary care, and inpatient/emergency department settings to validate navigation patterns across diverse use cases.

## Appendix

### Research documents
- [Round 2 Insights Overview](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/Clinical%20Decision%20Support%20Platform%20Team%20(CDSP)/2.%20User%20Research/2025%20User%20Research/R2%20Sidebar%20Testing/QP%20Planning_Sidebar%20Navigation%20Discussion.pdf?csf=1&web=1&e=B9CKq1)
- [March 19th, 2025 Showcase Demo Overview](https://dvagov.sharepoint.com/:b:/r/sites/CDSProgramTeam/Shared%20Documents/Clinical%20Decision%20Support%20Platform%20Team%20(CDSP)/2.%20User%20Research/2025%20User%20Research/R2%20Sidebar%20Testing/Sidebar%20Navigation%20R2%20Overview%20-%20DEMO_3.19.2025.pdf?csf=1&web=1&e=eCCb4I)
- [Detailed notes in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741202577370/496aa048b7f148e4cf50796c3b71b980b05fc401)
- [User Testing Interview Clips for App Teams](https://dvagov.sharepoint.com/:x:/r/sites/CDSProgramTeam/Shared%20Documents/Clinical%20Decision%20Support%20Platform%20Team%20(CDSP)/2.%20User%20Research/2025%20User%20Research/R2%20Sidebar%20Testing/R2%20Sidebar%20Navigation%20User%20Testing%20Clips.xlsx?d=w627f36efd4c64f9ca4cfcf2606d64f70&csf=1&web=1&e=MGsbFZ) 
- [Prototype A - Sidebar across user flow](https://www.figma.com/proto/iRqkr3vqVQzY2dOMAmPMs7/WIP-CDS-Console-%22Sidebar%22-Header?page-id=3784%3A11142&node-id=4078-8923&viewport=732%2C-2193%2C0.15&t=3zn3uL0XoaD0zQj0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4078%3A8923&show-proto-sidebar=1)
- [Prototype B - Selecting a new patient](https://www.figma.com/proto/YhERBZMWoqvwRgDUo6OgCx/User-Testing-Prototypes?page-id=2001%3A18&node-id=2001-18292&viewport=15%2C-2650%2C0.16&t=BEXplhKHSj8cHFxH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2001%3A18292&show-proto-sidebar=1)
- [Quarterly Planning Cross-Team Workshop](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1738344337524/aee93b696019813d6e386f5731d5a3b428f9853e)

### Tools used for Synthesis

- **Mural**: Used for scenario mapping workshop and synthesizing insights [User Flow Mapping](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1719245879239/184926eade118410ac1ac5d8d45503dddceda5a3)
- **Affinity Mapping**: Organized findings into themes around navigation usability and patient safety

### Round 1 Testing Recap

**Round 1 Design Hypothesis (Validated):**
The current header navigation occupies too much vertical space, hindering the viewability of Clinical Decision Support (CDS) application content; therefore, a sidebar navigation pattern is preferred. Clinicians face significant challenges navigating between different CDS content and data across applications, resulting in a "fragmented" experience disconnected from the workflow-based approach they describe is needed to deliver clinical care effectively and enhance opportunities for care coordination.

**Round 1 Outcome:**
The sidebar navigation concept tested positively with clinicians but required minor adjustments in three areas:
1. Patient demographic details presentation across user journey milestones
2. Streamlining navigation interaction behavior  
3. Navigation interactions as they pertain to clinician workflow

These adjustments were incorporated into Round 2 testing and validated successfully.

### Navigation and Header Evolution Timeline

**May 2025 - Sidebar Navigation Release:**
- Platform co-creates Design System Header with Design System team
- Header shows app title, first name, last name, last 4 of SSN always visible
- Platform adopts Design System Header for both expanded and collapsed sidebar states
- Platform configures show/hide Console Header per application (determined by Program Leads)
- Applications retain current launch patterns

**June 2025 - Enhancements to Design System Header:**
- Add functionality with logic to orchestrate show/hide of demographics based on sidebar expand/collapse state - depriorized by Product Owner
- Add space to Design System Header for in-app navigation

**July 2025 - Design System Header Adoption:**
- CDS applications adopt Design System Header
- Platform updates configurations per app as needed

### Unique Challenges Across Application Types

The CDS ecosystem includes applications with different launching patterns and requirements:

**Clinical Decision Support Collaborative Developed Applications:**
- Medical Calculators (Embedded, Requires Patient Context)
- My Workweek (Browser Tab, Not currently dependent on Patient Context)
- Lung Cancer Screening Platform (Embedded, Not currently dependent on Patient Context)
- Task Manager (Overlay, Not currently dependent on Patient Context)
- Covid Patient Manager (Embedded, Requires Patient Context)
- Med Pic (Embedded, Requires Patient Context)

**Power BI Reports:**
- CRISTAL (Embedded, Can Search for Patient in App)
- STORM (Embedded, Can Search for Patient in App)
- Diabetes Dashboard (Browser Tab, Can Search for Patient in App)
- PGHD (Browser Tab, Can Search for Patient in App)
- PgX (Browser Tab, Requires Patient Context, Can Search for Patient in App)

**Field Developed & 3rd Party Applications:**
- Virtual Care Manager (Browser Tab, Requires Patient Context)
- Lung Cancer Screening Risk Calculator (Embedded, note: no patient name in app)
- Voogle (Browser Tab, Can Search for Patient in App)
- AiMedica (Embedded, Requires Patient Context)

### Secondary research

Round 1 Sidebar Navigation Testing (December 2024) informed the design refinements tested in Round 2.

### Research participants 

We talked to **5 participants.**

Primary role:
* Clinical dietician: 0
* MSA: 0
* Nurse Practitioner: 0
* Nursing (RN, LPN): 0
* Pharmacist: 0
* Physician: 5
* Physician Assistant: 0
* Resident, Intern, or Fellow: 0
* Other: 0

Specialty:
* Cardiology: 0
* Dermatology: 0
* Emergency Medicine: 0
* Endocrine: 0
* Hematology: 0
* Hepatology/Gastroenterology: 0
* Infectious Disease: 0
* Informatics: 0
* Mental Health: 0
* Nephrology: 0
* Neurology: 0
* Oncology: 0
* Pain Management: 0
* Palliative Medicine: 0
* Pharmacy: 0
* Primary Care: 5
* Pulmonology: 0
* Surgery: 0
* Other: 0

Care setting:
* Outpatient: 5
* Inpatient: 0
* Emergency Department: 0
* Other: 0

EHR:
* CPRS: 5
* Oracle: 0

Devices used during study: 
* Desktop: 5
* Tablet: 0
* Smart phone: 0
* Assistive Technology: 0

Geographic location:
* Urban: Unknown
* Rural: Unknown
* Unknown: 5

Disability and Assistive Technology (AT):
* Cognitive: Unknown
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* Speech Input Technology: 0
* Hearing aids: Unknown
* Sighted keyboard: Unknown
* Captions: 0

#### Recruitment criteria

Participants were recruited to represent CPRS primary care clinicians who would be using the CDS Console sidebar navigation in their daily workflows. All participants were physicians working in outpatient/primary care settings.
