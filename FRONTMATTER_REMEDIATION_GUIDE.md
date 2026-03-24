# Frontmatter Remediation Guide

## Overview

This guide explains how to fix the 884 files identified in the frontmatter audit.

## Automated Remediation Script

A Python script has been created to help: `scripts/remediate_frontmatter.py`

### Features
- Adds frontmatter templates to files with none
- Extracts team/product info from file paths
- Attempts to detect methodology and extract content
- Supports batch processing with limits
- Dry-run mode for testing

### Usage Examples

```bash
# Dry run to see what would happen (safe, no changes)
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --limit 10 \
  --dry-run

# Add frontmatter to research plans with none (limit 20)
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --filter-type research_plan \
  --limit 20

# Add frontmatter to conversation guides with none (limit 20)  
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --filter-type conversation_guide \
  --limit 20

# Process all files with no frontmatter (use with caution)
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter
```

## Recommended Phased Approach

Given the large scale (884 files), we recommend a phased approach:

### Phase 1: High Priority - Files with NO Frontmatter (87 files)

These need templates added:
- 13 research plans
- 74 conversation guides

**Action:**
```bash
# Add frontmatter to all research plans with none
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --filter-type research_plan

# Add frontmatter to all conversation guides with none
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --filter-type conversation_guide
```

**Post-Processing:**
- Review files for "TBD" values
- Use GitHub Copilot prompts to complete remaining fields
- Update team/product names if extraction was incorrect

### Phase 2: Medium Priority - Files with Placeholder Data (797 files)

These require more nuanced handling:
- 396 research plans
- 401 conversation guides

**Recommended Approach:**

1. **By Team/Product** - Teams should fix their own files:
   ```bash
   # Filter CSV by your directory
   grep "your-product-name" frontmatter_audit.csv
   ```

2. **Use GitHub Copilot** - For best results:
   - Open each file in VS Code with Copilot
   - Use the [Research Plan Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md)
   - Use the [Conversation Guide Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md)
   - Review and refine Copilot's suggestions

3. **Common Replacements:**
   - `[Team, Product, Date]` → Extract from context
   - `YYYY-MM-DD` → Use actual dates from file content or git history
   - `[Team Name]` → Your team name
   - `[AUTHOR NAME]` → Actual author (check git blame)
   - `"N/A"` → Either remove or replace with actual values
   - Tags → Select from [research repository labels](https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml)

### Phase 3: Validation

After remediation, re-run the audit:

```bash
python3 /tmp/audit_frontmatter.py
```

This will generate a new report showing progress.

## What the Script Does

### For Files with NO Frontmatter

The script adds a complete frontmatter template with:
- **Extracted from path:** team, product
- **Auto-populated:** current date
- **Set to TBD:** fields requiring content review
- **Default values:** common settings (remote, moderated, etc.)

### Example Output

Before (no frontmatter):
```markdown
## My Research Plan

This is content...
```

After (frontmatter added):
```markdown
---
# Research Plan Metadata
title: "Research Plan for health-care, checkin, 2026-03-23"
date: 2026-03-23
team: "health-care"
product: "checkin"
# ... full template ...
---

## My Research Plan

This is content...
```

## Important Notes

### The Script Creates TBD Values

The automated script intentionally uses "TBD" for fields that require human judgment:
- Problem statements
- Research questions
- Hypotheses
- Tags

**You must review and complete these fields** after running the script.

### Not a Complete Solution

This script is a **starting point**, not a complete solution. It:
✅ Adds structure (frontmatter templates)
✅ Extracts basic info from paths
✅ Sets reasonable defaults
❌ Cannot understand research context
❌ Cannot select appropriate tags
❌ Cannot extract all metadata accurately

### Quality Over Speed

It's better to fix files properly than quickly. Consider:
- Fixing files for your product/team area
- Using Copilot prompts for intelligent completion
- Reviewing changes carefully before committing

## Teams Should Own Their Files

The best approach is for each team to:
1. Filter the audit CSV for their directory
2. Run the script with `--limit` to process a few files at a time
3. Review and complete the TBD values
4. Commit in small batches
5. Use the directory checker to validate

## Getting Help

- **Script Issues:** Check scripts/README.md
- **Frontmatter Questions:** See platform/research/research-plan-frontmatter-completion-guide.md
- **Research Ops Support:** #research-ops (Slack)

---

**Remember:** The goal is complete, accurate frontmatter - not just having frontmatter. Take time to do it right!
