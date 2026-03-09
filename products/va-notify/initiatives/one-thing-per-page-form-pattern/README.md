# One-Thing-Per-Page Form Pattern

## Overview

Redesign the template creation flow in VA Notify Portal to follow the VA Design System (VADS) One-Thing-Per-Page pattern. The current flow displays multiple fields on a single page; this initiative breaks it into clear, sequential steps that improve accessibility, usability, and scalability.

## Problem Statement

The current template creation flow places multiple fields on a single page, which creates accessibility, usability, and scalability challenges. This does not align with VA Design System standards and increases cognitive load for users.

## Why This Matters

- Reduces cognitive load and potential user errors.
- Improves accessibility for screen reader and keyboard users.
- Aligns with [VA Design System](https://design.va.gov/templates/forms/) standards and patterns.
- Supports scalability for future enhancements.
- Easier for mobile users and those using assistive technologies.

## Solution

Redesign the template creation flow to follow the VADS One-Thing-Per-Page pattern, breaking the process into clear, sequential steps:

1. Name Template
2. Select Reply-To Inbox
3. Enter Subject Line
4. Write Template Body (or choose a sample template and optionally add UTM tags)
5. Review & Confirm Before Creation

Use VA form guidance with proper page headers, step indicators, field-level error messaging, and back/continue buttons.

## User Stories

**As a** template editor  
**I want to** create a new template using a clear, guided form experience  
**So that I** can complete the process accurately, without confusion or accessibility issues

## Desired Outcomes

- Improved accessibility and Section 508 compliance.
- Alignment with VA Design System standards.
- Enhanced clarity, reduced error rates, and better scalability as more complexity is added.

## Acceptance Criteria

- [ ] Template creation is split into a multi-step, one-thing-per-page flow
- [ ] Each step includes only one core decision or input field
- [ ] Users can navigate back and forth and see progress
- [ ] Error messages are provided inline and per VADS guidelines
- [ ] Final confirmation screen summarizes inputs before saving/creating
- [ ] Flow created for editing existing templates
- [ ] Flow uses VA form components where applicable

## Reference Links

- [VA Design System — Forms](https://design.va.gov/templates/forms/)

## Known Risks or Challenges

_To be documented as the initiative progresses._

## Monthly Updates

_Add brief status updates here or as comments on the tracking issue._
