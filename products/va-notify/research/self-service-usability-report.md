---
title: "[Study] Research Findings"
product: "Product Name"
team: "Team Name"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "YYYY-MM-DD"
researchers:
  - "Researcher/Designer 1"
  - "Researcher/Designer 2"
research_goals:
  - "Goal 1"
  - "Goal 2"
methodology:
  - "Method 1"
  - "Method 2"
devices_used:
    desktop: X
    tablet: X
    smartphone: X
    assistive_technology: X
participants_total: X
demographics:
  veterans: X
  service_members: X
  caregivers: X
  dependents: X
  VA_staff: X
  age:
    "25-34": X
    "35-44": X
    "45-54": X
    "55-64": X
    "65+": X
    unknown: X
  education:
    high_school: X
    some_college: X
    associates: X
    bachelors: X
    masters: X
    doctorate: X
    unknown: X
  location:
    urban: X
    rural: X
    unknown: X
  race:
    white: X
    black: X
    hispanic: X
    biracial: X
    asian: X
    native: X
  disability:
    cognitive: X
    AT_beginner: X
    AT_advanced: X
    screen_reader_desktop: X
    screen_reader_mobile: X
    magnification_zoom: X
    speech_input: X
    hearing_aids: X
    sighted_keyboard: X
    captions: X
key_findings:
  - "Finding 1"
  - "Finding 2"
  # etc.
recommendations:
  - "Recommendation 1"
  - "Recommendation 2"
kpi_alignment:
  - "KPI 1"
  - "KPI 2"
outcomes:
  user: "Desired user outcome"
  business: "Desired business outcome"
opportunity_areas:
  - "Unmet need 1"
  - "Research gap 1"
further_research_needed:
  - "Area 1"
  - "Area 2"
underserved_groups_missing:
  - "Group 1"
  - "Group 2"
secondary_research:
  - "Web analytics"
  - "SME interviews"
synthesis_tools_used:
  - "Mural"
  - "Affinity Mapping"
---

# Self Service Portal Usability Research

## Summary
This study focused on the initial feature set for the VANotify Self Service portal. Features assessed included viewing, creating, editing, and sending notifications as well as service management. The majority of tasks participants were asked to complete were done so successfully with minor areas for improvement identified. The most challenging tasks for participants to complete involved service management as the terminology was not familiar.

## Goals
- Validate if participants are able to successfully navigate the interface and perform the requested tasks.
- Validate if the necessary features are available at the right time.
- Assess if participants are comfortable using the interface to self service their notification needs.

## Methodology
One-on-one 30 minute sessions were conducted over Zoom. Participants were sent a link to a clickable prototype and given a series of tasks to complete. Six individuals from internal VA teams who have worked with VANotify participated in this study.

## Findings and Recommendations
### Participants were successful and comfortable navigating the interface to view and send notification templates.
- All participants were able to click into a notification template and perform actions (send and edit) on the template.
- The template details page was understood to contain a preview, metadata, and performance.
- Some participants desired more details about the performance metrics and the ability to view the data by different timeframes.
- Most participants did not understand they could only send a test notification to users on the service whitelist. The service whitelist did not mean anything to the participants.
- Participants with smaller screens expected the action buttons to be at the bottom of the screen on edit/preview screens.

**Recommendations**
- More explicitly call out that only members of the service whitelist can receive notifications.
- Move all buttons during the edit, creation, and send workflows to the bottom of the screen.
- Use a button with text instead of just an icon for copying the template ID.
- Consider providing links to additional performance data in other tools such as Google Analytics.
- Provide timeframes to view the performance metrics by (ex: all time, last 7 days, last 30 days).

### The editor for creating and editing notification templates introduced friction for some participants.
- All participants had basic knowledge of markdown formatting and were generally comfortable editing in this format.
- Most participants did not recognize the formatting for creating a card as this differed from standard markdown.
- Most participants desired the ability to see a preview before moving to the next step. Several participants mentioned their experience with editing in github and the ability to toggle a preview.
- Some participants were unlikely to view the formatting documentation because it looked like it may navigate them away from their current screen.

**Recommendations**
- Consider adding a preview of the notification on the same page as the editor.
- Bring formatting documentation onto the page instead of a link off to another resource.
- Reconsider icons for some of the formatting options including cards, horizontal line, and personalizations.

### All participants did not know what to expect when clicking on the “service” navigation item.
- All participants were unable to verify the permissions of another team member. After being directed to the “service” page, the task was completed by all participants.
- All participants were unsure what the “service” navigation item would contain.

**Recommendations**
- Consider renaming “service”. Some participants used terms such as “team” or “group” when referring to the concept of a service.

## Additional recommendations
- Provide explicit next steps in confirmation messages (ex: after a template is created). Specifically for first time users.
- Provide more context about what the status mean for notification templates
