# Research Plan YAML Frontmatter Completion Guide

## Overview

This guide explains how to complete the YAML frontmatter section that has been added to research plan files in the `/products` and `/teams` directories. The frontmatter provides structured metadata that enables better organization, searchability, and tracking of research across the VA.gov ecosystem.

## What Was Done

All research plan markdown files (760 total) in the `/products` and `/teams` folders have been updated with a YAML frontmatter template structure that matches the [research plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md).

Files that already had YAML frontmatter (26 files) were preserved as-is. Files without frontmatter (734 files) now have the complete template structure ready to be populated.

## How to Complete the Frontmatter

### Option 1: Using GitHub Copilot (Recommended)

If you have GitHub Copilot access, you can use the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md) to automatically analyze your research plan content and generate appropriate frontmatter values.

**Steps:**
1. Open your research plan file in your editor
2. Navigate to the YAML frontmatter section at the top
3. Use GitHub Copilot with the frontmatter completion prompt
4. Review and adjust the generated values as needed
5. Ensure all placeholder values are replaced with actual data

### Option 2: Manual Completion

You can also manually fill in the frontmatter by:

1. Reading through your research plan content
2. Extracting relevant information for each field
3. Consulting the [tags taxonomy](https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml) to select appropriate tags
4. Replacing all placeholder text with actual values

## Frontmatter Structure

The frontmatter is organized into the following sections:

### Research Plan Metadata
- `title`: Format as "Research Plan for [Team, Product, Date]"
- `date`: Today's date in YYYY-MM-DD format
- `last_updated`: Today's date in YYYY-MM-DD format
- `team`: Extract from your plan or your team name
- `product`: The specific product being researched
- `product_area`: Either "authenticated" or "unauthenticated"

### Background Context
- `problem_statement`: What problem is the product solving?
- `product_location`: Where on VA.gov (e.g., authenticated experience, benefits hub)
- `user_familiarity`: Is this a new product or iteration on existing?
- `product_brief_url`: Link to product brief if available

### Research Design
- `methodology`: Type of research (e.g., usability testing, semi-structured interviews, card sort)
- `research_format`: Location (remote/in-person/hybrid) and moderation status

### Research Goals & Questions
- `research_goals`: List up to 3 primary research goals
- `research_questions`: List research questions from your plan
- `hypotheses`: List hypotheses from your plan
- `expected_outcomes`: How findings will advance the product

### Recruitment & Participants
- `recruitment`: Recruiting partner, approach, criteria, screener questions
- `participants`: Numbers for veterans, caregivers, dependents, total recruited, and completed sessions goal

### Timeline & Sessions
- `timeline`: Pilot date, participant, research dates, review submission date
- `session_details`: Duration, buffer time, max sessions per day

### Strategic Alignment
- `octo_priorities`: List relevant OCTO objectives with their key results
- `veteran_journey_phases`: List relevant journey phases (e.g., Getting Out, Starting Up, Taking Care of Myself)

### Research Repository Tracking
- `related_research`: Links to previous related studies
- `tags`: **CRITICAL** - Use natural language processing to identify all relevant tags based on research content, context, and intent

## Tags Taxonomy

Tags are organized into several categories:

- **AUDIENCE TAGS (AUD:)** - Who the research involves (Veterans, Caregivers, etc.)
- **BENEFIT TAGS (BNFT:)** - What benefits are covered (Disability, Education, Healthcare, etc.)
- **DESIGN SYSTEM COMPONENT TAGS (DSC:)** - Specific UI components being tested
- **DESIGN SYSTEM PATTERN TAGS (DSP:)** - Specific patterns being tested
- **HARDWARE TAGS (HDW:)** - Devices used (Desktop, Smartphone, Tablet, etc.)
- **PRODUCT TAGS (PRDT:)** - Specific products being researched
- **MY HEALTH / MHV TAGS** - My HealtheVet related tags
- **INITIATIVE TAGS** - Major initiatives (CX Executive Order, PACT Act, etc.)
- **OTHER TAGS** - Accessibility, methodology tags, etc.

For the complete list of available tags, see: https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml

## Important Notes

1. **Don't leave placeholders**: All fields with `[placeholder text]` should be replaced with actual values or removed if not applicable.

2. **Use accurate dates**: Replace `YYYY-MM-DD` with actual dates in the correct format.

3. **Be specific with tags**: The more accurate your tags, the more discoverable your research will be.

4. **Maintain YAML formatting**: Ensure proper indentation and syntax. YAML is whitespace-sensitive.

5. **Review for completeness**: Before finalizing, ensure all required fields are populated and make sense in context.

## Example: Before and After

### Before (Template)
```yaml
title: "Research Plan for [Team, Product, Date]"
date: YYYY-MM-DD
team: "[Team Name]"
product: "[Product Name]"
```

### After (Completed)
```yaml
title: "Research Plan for Authenticated Experience, My VA, January 2024"
date: 2024-01-15
team: "Authenticated Experience"
product: "My VA"
```

## Getting Help

- For questions about research planning: #research-ops (Slack)
- For YAML formatting issues: Consult YAML documentation or ask in #vfs-platform-support
- For tag selection guidance: Review the [research repository labels](https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml)

## Next Steps

After completing your frontmatter:
1. Validate the YAML syntax (many editors have YAML validation plugins)
2. Review that all placeholder text has been replaced
3. Ensure tags are selected from the approved taxonomy
4. Commit your changes following normal git workflow
5. Submit for research review as part of the Collaboration Cycle

---

*For more information about research planning at VA.gov, see the [Platform Research Documentation](https://depo-platform-documentation.scrollhelp.site/research-design/).*
