---
name: Internal ADE + Ticket
about: Template for ADE members to utilize, when assisting with a staging review artifact this template also incorporates ADE's testing methods for an enhanced review.
title: Internal ADE +  Ticket
labels: ADE, ADE CC, ADE CC AN, ADE Audit (Staging), ADE CC - STG
assignees: artsymartha68, lakper, sara-amanda

---

# ADE Plus + Testing

- **Product/Feature:** [Name]
- **Product Team:** [Team Name]
- **Test Date:** YYYY-MM-DD
- **Tester(s):** [Name(s)]
- **Environments:** Reference the table below.

 | AT | Browser | OS | AT Version |
 |---|---------|-----|------------|
 | No AT (keyboard) | | | — |
 | JAWS | | | |
 | iOS VoiceOver | | | |
 | Other AT SR | | | |
 | Voice Input | | | |


## How to use this template
### Testing
For each test, check one box per assistive technology column:
- [x] **Pass** — meets the requirement
- [x] **Fail** — does not meet the requirement
- [x] **N/A** — not applicable to this product/flow
#### Documenting
If a test **fails**, expand the Details section below the table and fill in the defect template.

---

## Automated Testing

### [Automated-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-AutomatedtestingwithaxebyDequeaxe): Axe DevTools has been executed for every page

* **Severity**: `Critical`
* **Current Agreement Score**: `5`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for Automated Testing</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., Automated-001] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 1.1 — Non-text Content

### [WEB-111-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-111-001-Meaningfuldescriptionsareprovidedforinformativeimages(Required)): Meaningful descriptions are provided for informative images

* **Severity**: `High-Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `1.1.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-111-002](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-111-002-Briefanddetaileddescriptionsareprovidedforcompleximages(Recommended)): Brief and detailed descriptions are provided for complex images

* **Severity**: `Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `1.1.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-111-003](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-111-003-Decorativeimagesarehiddenfromscreenreaders(Recommended)): Decorative images are hidden from screen readers

* **Severity**: `Medium-Critical`
* **Current Agreement Score**: `5.5`
* **WCAG**: `1.1.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-111-004](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-111-004-Backgroundimagesarenotusedforinformativecontent(Recommended)): Background images are not used for informative content

* **Severity**: `Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `1.1.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-111-005: Brief descriptions are provided for videos and audio files

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.1.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 1.1 — Non-text Content</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-111-001] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 1.2 — Time-based Media

### [WEB-121](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-121-Texttranscriptsareprovidedforaudioandvideo-onlycontent(Recommended)): Text transcripts are provided for audio and video-only content

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.2.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-122](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-122-Captionsareprovidedforallprerecordedvideos(Required)): Captions are provided for all prerecorded videos

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.2.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-123](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-123-Transcriptsoraudiodescriptionsareincludedforvideoswithaudio(Required)): Transcripts or audio descriptions are included for videos with audio

* **Severity**: `High`
* **Current Agreement Score**: `4`
* **WCAG**: `1.2.3`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-124](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-124-Real-timecaptionsareprovidedforlivevideos(Recommended)): Real-time captions are provided for live videos

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.2.4`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-125: Audio descriptions are provided for videos with important visual information

* **Severity**: `High`
* **Current Agreement Score**: `4`
* **WCAG**: `1.2.5`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 1.2 — Time-based Media</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-121] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 1.3 — Adaptable

### [WEB-131-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-001-HeadingsmatchthecontenthierarchyanduseproperHTMLtags(Required)): Headings match the content hierarchy and use proper HTML tags

* **Severity**: `Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `1.3.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-131-002](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-002-Headingsfollowalogicalorderwithoutskippinglevels(Required)): Headings follow a logical order without skipping levels

* **Severity**: `High`
* **Current Agreement Score**: `4.5`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-131-003](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-003-ThereisoneH1perpage/screen(Required)): There is one H1 per page/screen

* **Severity**: `High`
* **Current Agreement Score**: `5.75`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-131-004](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-004-Listsuseproperlistformatting(Recommended)): Lists use proper list formatting

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.3.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-131-005](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-005-Relatedformelementsaregroupedtogether(Recommended)): Related form elements are grouped together

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.3.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-131-006: Form labels, description, help text, and errors are connected to the field in the code

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.3.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-131-007](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-131-007-Requiredfieldsareclearlymarkedwithtextandincode(Recommended)): Required fields are identified programmatically

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.3.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-131-008: Landmarks are correctly used

* **Severity**: `Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `1.3.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-131-009: Tables are used for tabular data

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.3.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-131-010: Child and parent relationships are clear to assistive technology

* **Severity**: `Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `1.3.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-132: Content appears in a logical order in the code

* **Severity**: `High`
* **Current Agreement Score**: `4`
* **WCAG**: `1.3.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-133](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-133-Instructionsdon'trelyonlyoncolor,shape,size,orsound(Required)): Instructions don't rely only on color, shape, size, or sound

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.3.3`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-134](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-134-Contentworksinbothportraitandlandscapemode(Recommended)): Content works in both portrait and landscape mode

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.3.4`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-135: Form fields use autocomplete attributes appropriately

* **Severity**: `High`
* **Current Agreement Score**: `5.5`
* **WCAG**: `1.3.5`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 1.3 — Adaptable</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-131-001] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 1.4 — Distinguishable

### [WEB-141](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-141-Informationisnotcommunicatedbycoloralone(Required)): Information is not communicated by color alone

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.4.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-142](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-142-Auto-playingaudiocanbepausedorhasvolumecontrols(Required)): Auto-playing audio can be paused or has volume controls

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.4.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-143](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-143-Texthassufficientcontrastagainstitsbackground(Required)): Text has sufficient contrast against its background

* **Severity**: `High`
* **Current Agreement Score**: `5.5`
* **WCAG**: `1.4.3`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-144](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-144-Textcanbeenlargedto200%withoutbreakingthepage(Required)): Text can be enlarged to 200% without breaking the page

* **Severity**: `High`
* **Current Agreement Score**: `4.5`
* **WCAG**: `1.4.4`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-145](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-145-Noimagesoftext(Required)): No images of text

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `1.4.5`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-1410](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-1410-Contentfitsonsmallscreenswithouthorizontalscrolling(Required)): Content fits on small screens without horizontal scrolling

* **Severity**: `Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `1.4.10`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-1411-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-1411-001-Interactiveelementsarevisuallydistinctfromsurroundings(Required)): Interactive elements are visually distinct from surroundings

* **Severity**: `Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `1.4.11`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-1411-002](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-1411-002-Importantgraphicsandiconshavesufficientcontrast(Required)): Important graphics and icons have sufficient contrast

* **Severity**: `High`
* **Current Agreement Score**: `4`
* **WCAG**: `1.4.11`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-1412](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-1412-Textremainsreadablewhenspacingisadjusted(Recommended)): Text remains readable when spacing is adjusted

* **Severity**: `High`
* **Current Agreement Score**: `4`
* **WCAG**: `1.4.12`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-1413: Content triggered by hover or focus is dismissible by other means

* **Severity**: `Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `1.4.13`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 1.4 — Distinguishable</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-141] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 2.1 — Keyboard Accessible

### [WEB-211](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-211-Allfunctionalityworkswithkeyboardonly(Required)): All functionality works with keyboard only

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `2.1.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-212](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-212-Nokeyboardtrap(Required)): No keyboard trap

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `2.1.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-214: Single-key shortcuts can be turned off or customized

* **Severity**: `Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `2.1.4`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 2.1 — Keyboard Accessible</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-211] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 2.2 — Enough Time

### WEB-221: Time limits can be turned off or extended

* **Severity**: `High`
* **Current Agreement Score**: `5.75`
* **WCAG**: `2.2.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-222](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-222-Automaticallymovingcontentcanbepausedorstopped(Required)): Automatically moving content can be paused or stopped

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `2.2.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 2.2 — Enough Time</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-221] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 2.3 — Seizures & Physical Reactions

### WEB-231: Nothing flashes more than three times per second

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `2.3.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 2.3 — Seizures & Physical Reactions</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-231] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 2.4 — Navigable

### [WEB-241](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-241-Userscanskiprepeatedcontentlikeheadersandnavigation(Required)): Users can skip repeated content like headers and navigation

* **Severity**: `High`
* **Current Agreement Score**: `5.75`
* **WCAG**: `2.4.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-242](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-242-Eachpagehasaunique,descriptivetitle(Required)): Each page has a unique, descriptive title

* **Severity**: `Low`
* **Current Agreement Score**: `3`
* **WCAG**: `2.4.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-243](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-243-Taborderfollowsalogicalsequence(Recommended)): Tab order follows a logical sequence

* **Severity**: `High`
* **Current Agreement Score**: `5.75`
* **WCAG**: `2.4.3`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-244](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-244-Linksaredescriptive(Recommended)): Links are descriptive

* **Severity**: `High`
* **Current Agreement Score**: `5.75`
* **WCAG**: `2.4.4`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-245](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-245-Pagescanbefoundinmultipleways(Recommended)): Pages can be found in multiple ways

* **Severity**: `Low`
* **Current Agreement Score**: `2`
* **WCAG**: `2.4.5`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-246-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-246-001-Headingsaredescriptive(Required)): Headings are descriptive

* **Severity**: `Medium`
* **Current Agreement Score**: `4`
* **WCAG**: `2.4.6`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-246-002](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-246-002-Formlabelsclearlydescribewhattoenter(Required)): Form labels clearly describe what to enter

* **Severity**: `Medium`
* **Current Agreement Score**: `5.75`
* **WCAG**: `2.4.6`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-247](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-247-Everyfocusableelementhasavisiblefocusindicator(Required)): Every focusable element has a visible focus indicator

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `2.4.7`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-2410](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-2410-Contentisorganizedintosections(Required)): Content is organized into sections

* **Severity**: `High`
* **Current Agreement Score**: `4`
* **WCAG**: `2.4.10`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-2411](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-2411-Theelementwithfocusisalwaysvisible(Recommended)): The element with focus is always visible

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `2.4.11`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 2.4 — Navigable</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-241] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 2.5 — Input Modalities

### WEB-251: All actions work with simple taps or clicks

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `2.5.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-252: Actions happen on release and can be cancelled

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `2.5.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-253: Visual labels match what screen readers announce

* **Severity**: `High`
* **Current Agreement Score**: `4`
* **WCAG**: `2.5.3`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-254](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-254-Featuresdon'trequireshakingortiltingthedevice(Required)): Features don't require shaking or tilting the device

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `2.5.4`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-257: Drag-and-drop actions have click-based alternatives

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `2.5.7`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-258: Clickable elements are at least 24x24 pixels

* **Severity**: `High`
* **Current Agreement Score**: `5`
* **WCAG**: `2.5.8`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 2.5 — Input Modalities</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-251] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 3.1 — Readable

### [WEB-311](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-311-Thepagelanguageisidentified(Recommended)): The page language is identified

* **Severity**: `Medium`
* **Current Agreement Score**: `5.75`
* **WCAG**: `3.1.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-312](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-312-Contentinanotherlanguageisidentified(Recommended)): Content in another language is identified

* **Severity**: `Low`
* **Current Agreement Score**: `4.5`
* **WCAG**: `3.1.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 3.1 — Readable</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-311] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 3.2 — Predictable

### [WEB-321](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-321-Focusingonanelementdoesn'ttriggerunexpectedchanges(Recommended)): Focusing on an element doesn't trigger unexpected changes

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `3.2.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-322](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-322-Interactingwithformfieldsdoesn'ttriggerunexpectedchanges(Recommended)): Interacting with form fields doesn't trigger unexpected changes

* **Severity**: `High`
* **Current Agreement Score**: `5.75`
* **WCAG**: `3.2.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-323](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-323-Navigationstructureisthesameacrosspages(Recommended)): Navigation structure is the same across pages

* **Severity**: `High`
* **Current Agreement Score**: `4`
* **WCAG**: `3.2.3`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-324: Similar features have the same labels across pages

* **Severity**: `Medium-High`
* **Current Agreement Score**: `4.5`
* **WCAG**: `3.2.4`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-326](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-326-Helpoptionsappearinthesamelocationonallpages(Recommended)): Help options appear in the same location on all pages

* **Severity**: `High`
* **Current Agreement Score**: `4`
* **WCAG**: `3.2.6`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 3.2 — Predictable</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-321] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 3.3 — Input Assistance

### [WEB-331](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-331-Errormessagesareprovidedandareclear(Recommended)): Error messages are provided and are clear

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `3.3.1`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-332-001](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-332-001-Formfieldshavevisiblelabels(Required)): Form fields have visible labels

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `3.3.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-332-002](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-332-002-Fieldswithspecificformatsincludeinstructions(Required)): Fields with specific formats include instructions

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `3.3.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-332-003](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-332-003-Requiredoroptionalfieldsareclearlymarked(Required)): Required or optional fields are clearly marked

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `3.3.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-333](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-333-Errormessagesexplainhowtofixtheproblem(Required)): Error messages explain how to fix the problem

* **Severity**: `Medium`
* **Current Agreement Score**: `5`
* **WCAG**: `3.3.3`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-334: Important submissions can be reviewed or undone

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `3.3.4`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-336: Users can review and correct incorrect information

* **Severity**: `High`
* **Current Agreement Score**: `4`
* **WCAG**: `3.3.6`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-337: Users don't have to re-enter the same information

* **Severity**: `Medium-High`
* **Current Agreement Score**: `4.5`
* **WCAG**: `3.3.7`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-338: Login doesn't rely solely on remembering information

* **Severity**: `TBD`
* **Current Agreement Score**: `4`
* **WCAG**: `3.3.8`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 3.3 — Input Assistance</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-331] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## 4.1 — Compatible

### WEB-412-001: Every interactive element has a clear name and purpose

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `4.1.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-412-002: Element states are announced to screen readers

* **Severity**: `Critical`
* **Current Agreement Score**: `5`
* **WCAG**: `4.1.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### [WEB-412-003](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/accessibility-testing-manual#AccessibilityTestingManual-WEB-412-003-Linksnavigatetopages;buttonsperformactions(Required)): Links navigate to pages; buttons perform actions

* **Severity**: `Critical`
* **Current Agreement Score**: `5.75`
* **WCAG**: `4.1.2`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### WEB-413: Important updates are announced to screen readers automatically

* **Severity**: `High`
* **Current Agreement Score**: `5.75`
* **WCAG**: `4.1.3`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for 4.1 — Compatible</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., WEB-412-001] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## ADE+ — Additional Checks

### ADE+001: Able to complete entire flow using default screen reader settings

* **Severity**: `TBD`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### ADE+002: Able to complete entire flow using default voice input settings

* **Severity**: `TBD`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### ADE+003: Text can be enlarged to 400% without breaking the page

* **Severity**: `TBD`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### ADE+004: Font size can be set to "Very Large" or equivalent without breaking the page

* **Severity**: `TBD`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### ADE+005: Focus moves to modal when opened

* **Severity**: `TBD`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### ADE+006: Modal has an accessible name

* **Severity**: `TBD`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### ADE+007: Modal traps focus

* **Severity**: `TBD`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### ADE+008: Focus returns to trigger when modal is closed

* **Severity**: `TBD`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

### ADE+009: VADS components are used whenever possible

* **Severity**: `TBD`

| | No AT | JAWS | iOS VO | Other AT SR | Voice Input |
|---|:---:|:---:|:---:|:---:|:---:|
| **Pass** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **Fail** | [ ] | [ ] | [ ] | [ ] | [ ] |
| **N/A** | [ ] | [ ] | [ ] | [ ] | [ ] |

<details>
<summary><strong>Log defects for ADE+ — Additional Checks</strong></summary>

<!-- Copy this block for each defect -->
#### Defect: [Brief title]

| Field | Value |
|-------|-------|
| **Test case** | [e.g., ADE+001] |
| **AT** | [e.g., JAWS] |
| **GitHub issue** | # |

##### Expected
[What should happen]

##### Actual
[What happened instead]

##### Steps
[1. Go to... 2. Tab to... 3. Notice...]

##### Recommendation
[Suggested fix]

##### Evidence
[Screenshot/video link]

</details>

---

## Summary

| Metric | Count |
|--------|-------|
| Total tests | |
| Pass | |
| Fail | |
| N/A | |
| Launch-blocking defects (a11y-defect-0, a11y-defect-1) | |
| Post-launch defects (a11y-defect-2, a11y-defect-3, a11y-defect-4) | |

## Defect severity reference

| Category | VA Defect Level | Severity | Timeline | Description |
|----------|-----------------|----------|----------|-------------|
| **Launch-blocking** | a11y-defect-0 | Potentially harmful | Fix immediately | Could cause physical harm (seizures, vestibular) |
| **Launch-blocking** | a11y-defect-1 | Critical | Before launch | Blocks staging certification |
| Post-launch | a11y-defect-2 | High | 1–2 sprints post-launch | Degrades the user experience |
| Post-launch | a11y-defect-3 | Medium | 1–3 sprints post-launch | Disrupts the user experience |
| Post-launch | a11y-defect-4 | Low | 2–4 sprints post-launch | Friction, not a hurdle |
