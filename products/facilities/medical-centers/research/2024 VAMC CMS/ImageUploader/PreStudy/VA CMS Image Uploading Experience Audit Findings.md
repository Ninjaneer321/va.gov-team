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

# VA Drupal CMS Image Uploading Experience Audit Findings

**Finding 1: Inconsistent Cropping Communication**

- **Issue:** The text states automatic cropping to specific sizes, but users need to remember these sizes and select them from various options.
- **Recommendation:**
    - Automatic cropping based on the chosen content type.

**Finding 2: Confusing "Add" and "Select" Media Button**

- **Issue:** Sharing a common button for adding and selecting media can be confusing.
- **Recommendation:** Implement separate buttons for "Add Media" (uploading a new image) and "Select Existing Media".

**Finding 3: Lack of Upload Preview**

- **Issue:** Uploading an image skips directly to the name input, causing uncertainty about successful upload.
- **Recommendation:** Integrate a preview window after image selection to confirm upload success before proceeding.

**Finding 4: Unnecessary Description Field**

- **Issue:** The large and prominent description field is not mandatory and may not be useful for all content types.
- **Recommendation:** Remove description field and replace with alternative text field.

**Finding 5: Unnecessary Friction in Image Management**

- **Issue:** Determining the managing section for an image creates unnecessary friction.
- **Recommendation:** Consider simplifying image management by automatically assigning the image to the relevant section based on the content type.

**Finding 6: Positive Aspects**

- The placement of the image next to the alt text field is helpful!

**Finding 7: Missing Ratio Toggle Information**

- **Issue:** The header explaining the image ratio toggle functionality is missing.
- **Recommendation:** Include a clear header explaining the purpose of the image ratio toggle.

**Finding 8: Image Ratio Toggle Improvement**

- **Issue:** Accordions for image ratio selection can be overwhelming.
- **Recommendation:** Replace accordions with a simple toggle switch.
- **Further Recommendation:** Explore automatic selection of the best aspect ratio based on content type.

**Finding 9: Confusing "Save" Options**

- **Issue:** The distinction between "Save and Select" and "Save and Insert" is unclear for uploading a single image.
- **Recommendation:** Simplify upload options. For single image uploads, use a single, clear button like "Insert" or "Upload".

**Finding 10: Redundant Image Selection Check**

- **Issue:** Uploading an image while another image is selected prompts a warning message.
- **Recommendation:** Disable the upload button or automatically deselect the previously chosen image when a new image is selected.

**Finding 11: Unclear Error Messages**

- **Issue:** Error messages lack specific details, making it difficult to identify the problem (e.g., Alternative text).
- **Recommendation:** Provide clear and actionable error messages. For example, instead of just "Alternative text", indicate "Missing: Alternative Text" to guide the user towards the required correction.

**Finding 12: Inconsistent Image Preview**

- **Issue:** The uploaded image doesn't preview in the adjusted aspect ratio.
- **Recommendation:** Ensure the image preview reflects the chosen or automatically applied aspect ratio.

**Finding 13: Cumbersome Download Option**

- **Issue:** The wording "High resolution photo should be available for download by site visitors" is cumbersome.
- **Recommendation:** Rephrase the option to "Make image downloadable" for better clarity.

**Finding 14: Missing Image Resolution Information**

- **Issue:** Image resolution requirements are unclear, and users cannot verify their uploaded image's resolution.
- **Recommendation:** Display image resolution details after upload. If specific resolutions are required, provide clear error messages or guidance on adjusting the image before upload.
