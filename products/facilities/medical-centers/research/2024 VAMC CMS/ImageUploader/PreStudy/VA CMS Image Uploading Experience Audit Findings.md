---
title: "VA Drupal CMS Image Uploading Experience Audit - Research Findings"
product: "VA Medical Centers (VAMC) CMS"
team: "Sitewide Facilities"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2024-06-01"
researchers:
  - "VAMC CMS Research Team"
research_goals:
  - "Evaluate the current image uploading experience in VA Drupal CMS"
  - "Identify usability issues and friction points in the image upload workflow"
  - "Provide actionable recommendations to improve the image management interface"
methodology:
  - "Heuristic evaluation"
  - "UX audit"
  - "Interface analysis"
devices_used:
    desktop: 1
    tablet: 0
    smartphone: 0
    assistive_technology: 0
participants_total: 0
demographics:
  veterans: 0
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: "N/A - Desk research"
  age:
    "25-34": 0
    "35-44": 0
    "45-54": 0
    "55-64": 0
    "65+": 0
    unknown: 0
  education:
    high_school: 0
    some_college: 0
    associates: 0
    bachelors: 0
    masters: 0
    doctorate: 0
    unknown: 0
  location:
    urban: 0
    rural: 0
    unknown: 0
  race:
    white: 0
    black: 0
    hispanic: 0
    biracial: 0
    asian: 0
    native: 0
  disability:
    cognitive: 0
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 0
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "Inconsistent cropping communication requires users to remember specific sizes and select from various options"
  - "Shared button for adding and selecting media creates confusion in the interface"
  - "Lack of upload preview causes uncertainty about successful upload"
  - "Large and prominent description field is not mandatory and may not be useful for all content types"
  - "Determining managing section for images creates unnecessary friction"
  - "Image ratio toggle functionality lacks clear header explanation"
  - "Accordions for image ratio selection can be overwhelming"
  - "Distinction between Save and Select vs Save and Insert is unclear for single image uploads"
  - "Uploading an image while another is selected prompts unnecessary warning message"
  - "Error messages lack specific details making it difficult to identify problems"
  - "Uploaded image preview does not reflect chosen or automatically applied aspect ratio"
  - "Wording for high resolution photo download option is cumbersome"
  - "Image resolution requirements are unclear and users cannot verify uploaded image resolution"
  - "Placement of image next to alt text field is helpful (positive finding)"
recommendations:
  - "Implement automatic cropping based on chosen content type"
  - "Create separate buttons for Add Media (new upload) and Select Existing Media"
  - "Integrate preview window after image selection to confirm upload success"
  - "Remove description field and replace with alternative text field"
  - "Simplify image management by automatically assigning images to relevant section based on content type"
  - "Include clear header explaining purpose of image ratio toggle"
  - "Replace accordions with simple toggle switch for image ratio selection"
  - "Explore automatic selection of best aspect ratio based on content type"
  - "Simplify upload options with single clear button like Insert or Upload for single image uploads"
  - "Disable upload button or automatically deselect previously chosen image when new image is selected"
  - "Provide clear and actionable error messages indicating specific missing requirements"
  - "Ensure image preview reflects chosen or automatically applied aspect ratio"
  - "Rephrase download option to Make image downloadable for better clarity"
  - "Display image resolution details after upload and provide clear error messages or guidance for required resolutions"
kpi_alignment:
  - "Improve CMS editor efficiency"
  - "Reduce help desk tickets related to image uploads"
outcomes:
  user: "CMS editors can upload and manage images with less confusion and fewer errors"
  business: "Reduced support burden and improved content publishing efficiency across VAMC sites"
opportunity_areas:
  - "Streamline image upload workflow to reduce steps and cognitive load"
  - "Improve error handling and user feedback throughout upload process"
  - "Better align interface language and controls with user mental models"
further_research_needed:
  - "Usability testing with actual VAMC CMS editors"
  - "Validation of automatic aspect ratio selection with real content types"
underserved_groups_missing:
  - "Actual CMS editor user testing not yet conducted"
secondary_research:
  - "CMS interface audit"
  - "Comparative analysis of image upload patterns"
synthesis_tools_used:
  - "Heuristic evaluation framework"
  - "UX audit methodology"
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
