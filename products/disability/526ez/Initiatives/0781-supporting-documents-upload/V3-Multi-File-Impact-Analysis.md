# V3 File Input Component Impact Analysis

## Implementation Trade-offs

### What Worked Out of Box

- Basic file upload functionality with drag-and-drop capability  
- Standard file type validation (PDF, JPEG, JPG, PNG, TXT, BMP, GIF)  
- Native accessibility features for keyboard navigation  
- Visual feedback for file upload progress

### What Required Customization

- Integration of document type selection within the upload area  
- Error message styling to match existing visual standards  
- Validation messaging for unsupported file types  
- Password-protected file handling  
- Handling multiple file states within complex form lists  
- Flattening the attachment file type to match the expected backend structure (see [example](https://github.com/department-of-veterans-affairs/vets-website/blob/1c709cbeaaa9043a595fd64b33cddc1e9027aa6d/src/applications/disability-benefits/all-claims/utils/submit.js#L921))

### What Still Needs Updating

- Document type selection flow (current embedded design creates usability hurdles)  
- Focus management during file operations under zoom conditions  
- Error recovery flows for edge cases (password-protected, unsupported files)  
- Transitioning to a multi-step process for clearer user tasks
- **.HEIC file format support** - Component accepts .HEIC files, but the 526EZ upload endpoint does not support this format (see [#132043](https://github.com/department-of-veterans-affairs/va.gov-team/issues/132043))
  
## Accessibility and Compliance

### Known Issues Identified

- Focus management bugs during file upload operations, particularly at 400% zoom  
- Keyboard navigation hurdles when selecting document types within the same field  
- Screen reader announcements for error states need refinement  
- Navigation difficulties when combining file upload and dropdown menus in one step

### VADS Assessment Findings

Design System team assessment (3/09/26) identified **component-level issues**. VADS primary recommendation is to decouple document file type selection from file input using combo box component

### Recommended Pattern

Implement [multiple response pattern](https://design.va.gov/patterns/ask-users-for/multiple-responses):

- Page 1: File Input (v3 component) and Document type selection (combo box component)  
- Page 2: Review files uploaded with a checkbox to add more files  
- Loop pattern for multiple file uploads

This approach:

- Separates concerns for cleaner accessibility  
- Improves focus management  
- Aligns with VADS established patterns

## Schema and System Compatibility Updates

### Current Schema Requirements

- File metadata structure must include document type field  
- Array patterns for multiple file uploads need state management updates  
- Validation schemas require alignment with V3 component error structure

### Suggested Schema Updates

1. **Separate file details from document type**: Treat as two-step data collection  
2. **Update validation logic**: Ensure compatibility with V3 error message structure  
3. **Review array item structure**: Confirm compatibility with multiple response pattern  
4. **Backend integration**: Verify file upload API handles decoupled data structure

### Forms-System Integration Points

- Update [fileInputUI](https://github.com/department-of-veterans-affairs/vets-website/blob/7672a8f045ddbea41f281a9fb8ffa73e0cfa00ab/src/platform/forms-system/src/js/web-component-patterns/fileInputPattern.jsx) and  [fileInputSchema](https://github.com/department-of-veterans-affairs/vets-website/blob/3673a4346629378eaca210faf37a07068be7b2c1/src/platform/forms-system/src/js/web-component-patterns/fileInputMultiplePattern.jsx) patterns in platform/forms-system.
   Note: this component may be deprecated in the future due to ongoing accessibility and usability issues.
- Coordinate with platform team on web-component-patterns catalog updates  
- Document new patterns for future form implementations
  
## Upstream and Downstream Compatibility Recommendations

### Discovery Areas to Explore

#### 1\. Form Submission Flow

- **Question**: How does multiple response pattern affect form progress tracking?  
- **Action**: Verify chapter/page navigation, progress bar updates within fileInput Component, review page data display  
- **Risk**: User confusion if file appears "incomplete" before document type selection

#### 2\. Validation State Persistence

- **Question**: Can validation state persist across page transitions in multiple response pattern?  
- **Action**: Test required field validation, error state retention during navigation  
- **Risk**: With the introduction of the side nav, User may bypass required fields if validation timing is unclear.

#### 3\. Other Forms Using File Upload

- **Question**: What is the migration path for other forms (21-0538, pension, burial)?  
- **Action**: Document pattern differences, create migration guide  
- **Risk**: Inconsistent user experience across VA forms if patterns vary
 Why "Other Forms Using File Upload" Discovery Matters
  - **The Problem**: Multiple VA forms (21-0538, pension, burial) use V1 File Input. Without a migration guide, each team will:
    - **Repeat your mistakes** - Re-encounter the same bugs and waste time solving already-solved problems
    - **Create inconsistent experiences** - Veterans will face different upload patterns across forms, increasing confusion and eroding trust
    - **Risk compliance failures** - Teams may launch with the same a11y issues you found, creating Section 508 violations
    - **Increase technical debt** - Platform must support multiple implementation patterns indefinitely
  - **The Solution**: Document your findings so other teams can adopt the recommended patterns (multiple response pattern, a11y testing) from day one, ensuring consistent, accessible experiences across all VA forms.

#### 4\. Analytics and Monitoring

- **Question**: Do current analytics capture multi-page file upload events correctly?  
- **Action**: Review event tracking for file upload, document selection, and errors using analytics tools (e.g., DataDog Real User Monitoring)
- **Risk**: Incomplete data for understanding user behavior and error rates

## Bug Ticket Summary

### Initial Discovery and Features

- Discovery: [\#127545](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127545)  
- Feature implementation: [\#129738](https://github.com/department-of-veterans-affairs/va.gov-team/issues/129738), [\#129622](https://github.com/department-of-veterans-affairs/va.gov-team/issues/129622)  
- File formatting: [\#131043](https://github.com/department-of-veterans-affairs/va.gov-team/issues/131043), [\#133908](https://github.com/department-of-veterans-affairs/va.gov-team/issues/133908)  
- Toggle management: [\#130603](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130603), [\#134023](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134023), [\#134024](https://github.com/department-of-veterans-affairs/va.gov-team/issues/134024)

### Testing and Bug Identification

- Comprehensive testing summary: [\#133402](https://github.com/department-of-veterans-affairs/va.gov-team/issues/133402)  
- Bug epic: [\#135173](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135173)

### Specific Bug Categories

**Password-protected and unsupported files**: [\#135438](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135438), [\#135502](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135502), [\#135503](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135503)   
**Accessibility issues**: [\#135505](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135505), [\#135518](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135518), [\#135539](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135539), [\#135544](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135544), [\#135792](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135792), [\#135795](https://github.com/department-of-veterans-affairs/va.gov-team/issues/135795), [\#136079](https://github.com/department-of-veterans-affairs/va.gov-team/issues/136079)

## Recommendations for Other Teams

### Before Implementation

1. Review if V3 multi-file Component is still the recommendation (There were conversations around deprecating V3 File Input Component)
2. Review if there are any accessibility bugs that are launch blocking
3. Review Design System documentation for multi-file upload patterns  
4. Plan for multiple response pattern integration from the start  
5. Budget time for accessibility PR review and testing

### A11y Testing Steps for V3 File Input Component

1. Keyboard Navigation Testing
   - [ ] **Tab through the component** - Ensure all interactive elements (file input, document type dropdown, delete buttons) are reachable via `Tab` key
   - [ ] **Tab order is logical** - Focus moves in expected sequence (upload → document type → delete/cancel)
   - [ ] **Focus is visible** - Each focused element has a clear visual indicator
   - [ ] **All actions work with keyboard**:
      - `Enter` or `Space` to activate file browser
      - `Arrow` keys to navigate dropdown options
      - `Enter` to select document type
      - `Enter` or `Space` to delete files
2. Screen Reader Testing
   - [ ] **Test with NVDA (Windows)** or **VoiceOver (Mac)**
   - [ ] **File input announces its purpose** - "Upload your file" or similar
   - [ ] **Document type selection is announced** - Combobox role and selected value
   - [ ] **File upload progress/success announced** - Use `aria-live` regions
   - [ ] **Error messages are read aloud** - Invalid file type, password-protected file errors
   - [ ] **Delete actions are announced** - "File removed" confirmation
3. Zoom Level Testing (WCAG 1.4.4)
   - [ ] **Test at 200% zoom** - Layout remains intact, no horizontal scrolling required
   - [ ] **Test at 400% zoom** - Critical test level where bugs were found
   - All buttons/controls remain clickable
   - Focus indicator still visible
   - Error messages don't overlap with controls
   - [ ] **Text scaling** - Increase browser font size; text should reflow without breaking layout
4. Component-Specific Tests
   - [ ] **Drag-and-drop with keyboard** - Ensure keyboard users have alternative method
   - [ ] **Multiple file uploads** - Focus management when adding/removing files from list
   - [ ] **Error recovery** - Can user easily fix errors (wrong file type, password-protected file)?
   - [ ] **Required field validation** - Error announced when trying to proceed without file
5. Tools to Use
   - **Automated**: axe DevTools browser extension
   - **Manual Screen Reader**: NVDA (free, Windows) or VoiceOver (built-in, Mac)
   - **Zoom**: Browser zoom (`Ctrl/Cmd +`)
   - **Contrast**: Use axe or WAVE to verify error message contrast
Quick Test Flow
   1. **Run axe DevTools** on the page → Fix any automatic violations
   2. **Keyboard-only test** → Use only your keyboard, complete the full upload flow
   3. **Screen reader test** → Turn on NVDA/VoiceOver, upload a file without looking at the screen
   4. **Zoom to 400%** → Verify you can still upload, select document type, and delete files

This should catch the majority of issues you encountered during your V3 implementation!

### During Implementation

1. Avoid overly complex nested designs within the upload component  
2. Implement progressive enhancement for error states  
3. Test password-protected and unsupported file scenarios  
4. Include keyboard-only and screen reader testing

### After Implementation

1. Conduct thorough E2E testing before feature toggle activation  
2. Monitor analytics for drop-off rates during file upload flows  
3. Document lessons learned for platform team and future implementers  
4. Consider contributing improved patterns back to forms-system library

## Additional Resources

- [Multi-file input array pattern PDF](https://github.com/user-attachments/files/26027874/Multi-file.input.array.pattern.pdf)  
- [Multiple response pattern guidance](https://design.va.gov/patterns/ask-users-for/multiple-responses)  
- VADS team consultation
- Review with Accessability Specialist
