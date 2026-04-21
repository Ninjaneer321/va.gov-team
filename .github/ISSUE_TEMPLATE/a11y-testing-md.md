---
name: A11y Testing Artifact
title: "Accessibility Testing for [Team Name, Product Name, Feature Name]"
about: Accessibility testing artifact for Staging Reviews 
labels: a11y-testing
assignees: 'jasonday'
---

# Accessibility testing: Staging Review artifact

## 1. Introduction

This issue template will help walk you through [required and recommended accessibility testing](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review) and will generate a testing artifact you must submit as part of your Staging Review. Try to resolve as many issues as possible before your Staging Review. Then update this artifact with your progress. Log any issues you find. Guidance for logging issues is available in the "4. Next steps" section of this ticket.
        
### Why we ask VFS teams to do accessibility testing
The more you test and fix issues before your Staging Review, the less likely we are to find launch-blocking issues. This artifact helps document your accessibility testing efforts and any issues you found during testing. It also helps us understand your product better before we do our review.

## 2. Before you begin

The Required and Recommended checklists below are based on WCAG 2.2 and the [VA.gov Accessibility Standards](https://depo-platform-documentation.scrollhelp.site/accessibility/va-gov-accessibility-standards).

Complete all required checks and as many recommended checks as you can. If you can't complete a required check, please explain why as a comment on this ticket.

**Need help?** The Accessibility Digital Experience (ADE) team is available to assist with testing. Reach out in the #accessibility-help slack channel and tag @accessibility-de

### Product information
- [ ] Team name, product name, and feature name have been added to the title of this issue.
- [ ] Team label, product label and feature label (if applicable) have been added to this issue.

## 3. Accessibility Checklist (Required + Recommended Items)
- If you find an issue while performing a check, mark that item as `Fail`.
- You may find multiple issues while performing a single check. Every check should be tested on every page of your flow.
- For every fail, log the issue (see 4. Next steps)
- If the check is not applicable to your product, mark it as "N/A".
- Each checklist item includes a "How to test" link. Use this guidance to inform your testing. If you have additional questions, please post as a comment on this ticket and/or reach out to ADE or other accessibility specialists.
- The checklist does not cover every possible scenario or failure. An accessibility specialist may encounter an accessibility issue not represented by a checklist item, and will fail it against the relevant WCAG success criterion.
---

### Automated testing
#### Required
- **Axe DevTools has been run on every page**  
  Automated-001 | Severity: N/A   
  Axe Devtools has been run against every page in your flow, including page variations, interactive states of content, etc.  
    [Learn more about testing with Axe DevTools](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-AutomatedtestingwithaxebyDequeaxe)
  - [ ] Pass  
  - [ ] Fail
  - [ ] For each page in the flow (in a comment):
    - [ ] List the page URL or name
    - [ ] Record the number of AXE violations found
    - [ ] Create sub‑issues for each unique violation
    - [ ] Link those sub‑issues in the artifact

#### Recommended
- **Axe-core has been integrated in end to end testing**  
  Automated-002 | Severity: N/A  
  End to end testing with Cypress or other libraries includes Axe-core scanning.  
  [Learn more about integrating Axe-core in end-to-end testing](https://depo-platform-documentation.scrollhelp.site/developer-docs/end-to-end-testing-with-cypress). 
  - [ ] Pass  
  - [ ] Fail
  - [ ] Provide a link to, or evidence of, AXE integration in a comment on this ticket

---

### Images
#### Required
- **Meaningful descriptions are provided for informative images**  
  WEB-111-001 | Severity: High or Critical  
  All informative images have a text alternative that is meaningful and serves the equivalent purpose.  
  [Testing WEB-111-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-111-001-Meaningfuldescriptionsareprovidedforinformativeimages(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **No images of text**  
  WEB-145 | Severity: High or Critical  
  Images of text are not used when the same presentation can be made with native HTML/CSS. Logos and branding are excluded.  
  [Testing WEB-145](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-145-Noimagesoftext(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

#### Recommended
- **Brief and detailed descriptions are provided for complex images**  
  WEB-111-002 |  Severity: High or Critical  
  Complex images (graphs, maps, charts) have both alt text and longer descriptions that together accurately convey all relevant information.  
  [Testing WEB-111-002](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-111-002-Briefanddetaileddescriptionsareprovidedforcompleximages(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Decorative images are hidden from screen readers**  
  WEB-111-003 | Severity: Medium or High  
  All non-text content that is decorative, provides no contextual value, or is already defined by surrounding content is hidden from screen readers.  
  [Testing WEB-111-003](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-111-003-Decorativeimagesarehiddenfromscreenreaders(Recommended)) 
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Background images are not used for informative content**  
  WEB-111-004 | High or Critical  
  CSS background images must not be used to convey meaningful information unless that same information is also provided in an accessible form elsewhere.  
  [Testing WEB-111-004](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-111-004-Backgroundimagesarenotusedforinformativecontent(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

---

### Audio & video
#### Required
- **Captions are provided for all prerecorded videos**  
  WEB-122 | Severity: Critical  
  Prerecorded videos include synchronized captions for dialogue, sound effects, and relevant audio.  
  [Testing WEB-122](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-122-Captionsareprovidedforallprerecordedvideos(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Transcripts or audio descriptions are included for videos**  
  WEB-123 | Severity: High  
  Non‑live video includes a full descriptive transcript or an audio description.  
  [Testing WEB-123](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-123-Transcriptsoraudiodescriptionsareincludedforvideoswithaudio(Required)) 
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Auto-playing audio can be paused or has volume controls**  
  WEB-142 | Severity: Critical  
  Audio that plays automatically for more than 3 seconds can be paused OR has an independent volume control.  
  [Testing WEB-142](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-142-Auto-playingaudiocanbepausedorhasvolumecontrols(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

#### Recommended
- **Text transcripts are provided for audio and video-only content**  
  WEB-121 | Severity: Critical  
  For audio-only and video-only media, a transcript is provided which provides the same information as presented in the original media content.  
  [Testing Web-121](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-121-Texttranscriptsareprovidedforaudioandvideo-onlycontent(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Real-time captions are provided for live videos**  
  WEB-124 | Severity: Critical  
  Live video includes synchronized captions generated in real-time.  
  [Testing WEB-124](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-124-Real-timecaptionsareprovidedforlivevideos(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

---

### Structure & semantics
#### Required
- **Headings match the content hierarchy and use proper HTML tags**  
  WEB-131-001 | Severity: High or Critical  
  Headings accurately reflect content hierarchy and are semantically marked.  
  [Testing WEB-131-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-001-HeadingsmatchthecontenthierarchyanduseproperHTMLtags(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Headings follow a logical order without skipping levels ()**  
  WEB-131-002 | Severity: High  
  Heading levels follow a logical, sequential, hierarchy with no skipped heading levels.  
  [Testing WEB-131-002](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-002-Headingsfollowalogicalorderwithoutskippinglevels(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **There is one H1 per page/screen**  
  WEB-131-003 | Severity: High  
  A single H1 exists for every page or screen.  
  [Testing WEB-131-003](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-003-ThereisoneH1perpage/screen(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Each page has a unique, descriptive title**  
  WEB-242 | Severity: Low or Medium  
  Each web page, or screen, has a unique and descriptive title reflecting its purpose.  
  [Testing WEB-242](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-242-Eachpagehasaunique,descriptivetitle(Required)) 
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Headings are descriptive**  
  WEB-246-001 | Severity: Medium or High  
  Heading text accurately describes the topic or purpose of the content that follows.  
  [Testing WEB-246-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-246-001-Headingsaredescriptive(Required))  
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

#### Recommended
- **Lists use proper list formatting**  
  WEB-131-004 | Severity: High  
  All visually apparent lists are marked up using semantic list types.  
  [Testing WEB-131-004](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-004-Listsuseproperlistformatting(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Content is organized into sections**  
  WEB-2410 | Severity: Low or Medium  
  Content organized in sections includes section headings.  
  [Testing WEB-2410](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-2410-Contentisorganizedintosections(Required)) 
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **The page language is identified**  
  WEB-311 | Severity: Medium  
  The `<html>` element includes a valid `lang` attribute specifying the page’s primary language.  
  [Testing WEB-311](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-311-Thepagelanguageisidentified(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Content in another language is identified**  
  WEB-312 | Severity: Medium  
  Text in different languages from the page's primary language is marked with `lang` attributes.  
  [Testing WEB-312](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-312-Contentinanotherlanguageisidentified(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

---

### Color, contrast, & sensory
#### Required
- **Instructions don't rely only on color, shape, size, or sound**  
  WEB-133 | Severity: Critical  
  Instructions and cues do not rely exclusively on sensory characteristics.  
  [Testing WEB-133](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-133-Instructionsdon'trelyonlyoncolor,shape,size,orsound(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Information is not communicated by color alone**  
  WEB-141 | Severity: Critical  
  Color is never the sole visual means of conveying information.  
  [Testing WEB-141](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-141-Informationisnotcommunicatedbycoloralone(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Text has sufficient contrast against its background**  
  WEB-143 | Severity: Medium, High, or Critical  
  Text and images of text have a contrast ratio of at least 4.5:1 and large-scale text and images of large-scale text have a contrast ratio of at least 3:1.  
  [Testing WEB-143](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-143-Texthassufficientcontrastagainstitsbackground(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Interactive elements are visually distinct from surroundings**  
  WEB-1411-001 | Severity: High or Critical  
  Active UI components achieve a 3:1 contrast ratio against adjacent colors.  
  [Testing WEB-1411-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-1411-001-Interactiveelementsarevisuallydistinctfromsurroundings(Required))  
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Important graphics and icons have sufficient contrast**  
  WEB-1411-002 | Severity: High  
  Essential graphical objects have a 3:1 contrast ratio against adjacent colors.  
  [Testing WEB-1411-002](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-1411-002-Importantgraphicsandiconshavesufficientcontrast(Required)) 
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

---

### Layout & responsiveness
#### Required
- **Text can be enlarged to 200% without breaking the page**  
  WEB-144 | Severity: Medium or High  
  Text can be resized up to 200% without loss of content or functionality.  
  [Testing WEB-144](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-144-Textcanbeenlargedto200%withoutbreakingthepage(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Content fits on small screens without horizontal scrolling**  
  WEB-1410 | Severity: High or Critical  
  Content reflows to a single-dimension scroll at 320x256 CSS pixels and larger.  
  [Testing WEB-1410](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-1410-Contentfitsonsmallscreenswithouthorizontalscrolling(Required)) 
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

#### Recommended
- **Content works in both portrait and landscape mode**  
  WEB-134 | Severity: Critical  
  Content is viewable in portrait and landscape orientations unless essential otherwise.  
  [Testing WEB-134](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-134-Contentworksinbothportraitandlandscapemode(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Text remains readable when spacing is adjusted**  
  WEB-1412 | Severity: Low or Medium  
  No content or functionality may be lost when text is set to: line spacing of 1.5x font size, letter spacing at 0.12x font size, word spacing at 0.16x font size, and paragraph spacing 2x the font size and that styling does not prevent overrides.  
  [Testing WEB-1412](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-1412-Textremainsreadablewhenspacingisadjusted(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

---
### Pointer & motion
#### Required
- **Features don't require shaking or tilting the device**  
  WEB-254 | Severity: Critical  
  Motion-activated features have alternative input methods and can be disabled.  
  [Testing WEB-254](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-254-Featuresdon'trequireshakingortiltingthedevice(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A
 
 ---

### Keyboard & focus
#### Required
- **All functionality works with keyboard only**  
  WEB-211 | Severity: Critical  
  All interactive elements and features can be accessed and operated using only a keyboard.  
  [Testing WEB-211](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-211-Allfunctionalityworkswithkeyboardonly(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **No keyboard trap**  
  WEB-212 | Severity: Critical   
  Users can move keyboard focus away from any element using standard keys.  
  [Testing WEB-212](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-212-Nokeyboardtrap(Required)) 
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Every focusable element has a visible focus indicator**  
  WEB-247 | Severity: Critical  
  All interactive elements show a visible outline or indicator when receiving keyboard focus.  
  [Testing WEB-247](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-247-Everyfocusableelementhasavisiblefocusindicator(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A  

#### Recommended
- **Tab order follows a logical sequence**  
  WEB-243 | Severity: High or Critical  
  Keyboard focus moves through interactive elements in a meaningful order.  
  [Testing WEB-243](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-243-Taborderfollowsalogicalsequence(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **The element with focus is always visible**  
  WEB-2411 | Severity: Critical  
  The element with focus remains visible and on‑screen and is not obscured by other content.  
  [Testing WEB-2411](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-2411-Theelementwithfocusisalwaysvisible(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Focusing on an element doesn't trigger unexpected changes**   
  WEB-321 | Severity: Critical  
  Focusing an element does not trigger a change of context.  
  [Testing WEB-321](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-321-Focusingonanelementdoesn'ttriggerunexpectedchanges(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Interacting with form fields doesn't trigger unexpected changes**  
  WEB-322 | Severity: High or Critical  
  Changing form values does not automatically cause navigation or context changes without warning.  
  [Testing WEB-322](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-322-Interactingwithformfieldsdoesn'ttriggerunexpectedchanges(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

---

### Timing & interruptions
#### Required
- **Automatically moving content can be paused or stopped**   
  WEB-222 | Severity: Critical  
  All moving, blinking, scrolling, or auto-updating content provides mechanisms to pause, stop, hide, or control its frequency if it starts automatically and lasts over 5 seconds.  
  [Testing WEB-222](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-222-Automaticallymovingcontentcanbepausedorstopped(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

---

### Navigation & consistency
#### Required
- **Users can skip repeated content like headers and navigation**  
  WEB-241 | Severity: High  
  A mechanism is provided to bypass repeated blocks of content (e.g., navigation, headers) on multiple webpages such as a skip link, HTML5 landmarks, etc.  
  [Testing WEB-241](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-241-Userscanskiprepeatedcontentlikeheadersandnavigation(Required)) 
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

#### Recommended
- **Pages can be found in multiple ways**  
  WEB-245 | Severity: Low  
  Two or more mechanisms of finding a webpage are available, unless the page is accessed as part of a step in a process.  
  [Testing WEB-245](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-245-Pagescanbefoundinmultipleways(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Navigation structure is the same across pages**  
  WEB-323 | Severity: High  
  Navigation menus maintain consistent order and structure across multiple pages.  
  [Testing WEB-323](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-323-Navigationstructureisthesameacrosspages(Recommended)) 
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Help options appear in the same location on all pages**  
  WEB-326 | Severity: Medium  
  Help mechanisms such as contact details, messaging, chat, or self-help options must be in the same relative order on all pages where the information is present.  
  [Testing WEB-326](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-326-Helpoptionsappearinthesamelocationonallpages(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

---

### Forms & interactive controls
#### Required
- **Form labels clearly describe what to enter**  
  WEB-246-002 | Severity: High to Critical  
  Labels describe the purpose or function of form fields and controls.  
  [Testing WEB-246-002](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-246-002-Formlabelsclearlydescribewhattoenter(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Form fields have visible labels**  
  WEB-332-001 | Severity: Critical   
  Visible labels or instructions are available for all inputs and input groupings.  
  [Testing WEB-332-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-332-001-Formfieldshavevisiblelabels(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Fields with specific formats include instructions**  
  WEB-332-002 | Severity: Critical  
  Form fields that require specific formats provide instructions or examples.  
  [Testing WEB-332-002](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-332-002-Fieldswithspecificformatsincludeinstructions(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Required or optional fields are clearly marked**  
  WEB-332-003 | Severity: Critical  
  All required fields are identified with visible labels or instructions OR all optional fields are identified with visible labels or instructions.  
  [Testing WEB-332-003](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-332-003-Requiredoroptionalfieldsareclearlymarked(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Error messages explain how to fix the problem**  
  WEB-333 | Severity: Medium, High, or Critical  
  Users are provided with clear suggestions for correcting input errors, unless doing so would compromise security or the content's purpose.  
  [Testing WEB-333](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-333-Errormessagesexplainhowtofixtheproblem(Required)) 
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Links navigate to pages; buttons perform actions**  
  WEB-412-003 | Severity: High or Critical  
  User interface elements defined as links are used for navigation and elements defined as buttons perform in-page actions or submit forms.  
  [Testing WEB-412-003](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-412-003-Linksnavigatetopages;buttonsperformactions(Required))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

#### Recommended
- **Related form elements are grouped together**  
  WEB-131-005 | Severity: Medium, High, or Critical  
  Related form controls (e.g., radio buttons, checkboxes, multi-part text inputs) are semantically grouped to convey their relationships.  
  [Testing WEB-131-005](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-005-Relatedformelementsaregroupedtogether(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Required fields are identified programmatically**  
  WEB-131-007 | Severity: Critical  
  Required fields/controls are identified programmatically for assistive technology.  
  [Testing WEB-131-007](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-007-Requiredfieldsareclearlymarkedwithtextandincode(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Links are descriptive**  
  WEB-244 | Severity: High or Critical    
  Link text or its accessible name describes the link's destination or purpose.  
  [Testing WEB-244](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-244-Linksaredescriptive(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

- **Error messages are provided and are clear**  
  WEB-331 | Severity:  Critical  
  Whenever an input error is detected, the user is informed of the error and how to correct the error.  
  [Testing WEB-331](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-331-Errormessagesareprovidedandareclear(Recommended))
  - [ ] Pass  
  - [ ] Fail
  - [ ] N/A

---
## 4. Next Steps

### Update Collab cycle ticket
- [ ] Add a link to your completed accessibility testing ticket to the Staging Review artifacts section of your Collaboration Cycle ticket. You can close this ticket after you complete your Staging Review.

### Report identified issues
For any issues identified during your testing, please report them as part of your Staging Review. Note: the accessibility testing artifact should be completed when the product is ready for Staging Review (stable). If your team tracks issues in a different way, please provide that information as a comment on this ticket.
- [ ] Log the issue using the "Create sub-issue" button at the end of this ticket
- [ ] Select the "Accessibility Finding [Staging Review]" issue template. 
- [ ] Give the issue a clear and succinct title
- [ ] Add the `a11y-testing` label.
- [ ] Select the Collaboration Cycle milestone found in your collab cycle ticket.
