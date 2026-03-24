# Frontmatter Remediation Progress Report

**Date:** March 23, 2026  
**Status:** Phase 1 Complete, Phase 2 Requires Team Action

---

## Executive Summary

### Phase 1: COMPLETE ✅

**Added frontmatter templates to 85 files that had NONE**
- 13 research plans
- 74 conversation guides

All files now have:
- Valid YAML frontmatter structure
- Team/product info extracted from paths  
- Current date populated
- Reasonable defaults for common fields
- "TBD" markers for fields requiring content review

### Phase 2: Requires Team Action ⚠️

**797 files still have placeholder data** that need to be replaced with actual values:
- 396 research plans
- 401 conversation guides

Common placeholders requiring replacement:
- `[Team, Product, Date]` - Template titles
- `[Team Name]`, `[AUTHOR NAME]` - Name fields
- `YYYY-MM-DD` - Date placeholders
- `[URL]`, `path/to/...` - URL/path placeholders
- `[Tag1]`, `[Tag2]` - Tag placeholders
- `"TBD"` - Fields added by automation script
- `"N/A"` - Generic placeholder values

---

## What Was Fixed in Phase 1

### Before (No Frontmatter)
```markdown
## My Research Plan

Content starts here...
```

### After (Frontmatter Added)
```markdown
---
# Research Plan Metadata
title: "Research Plan for health-care, checkin, 2026-03-23"
date: 2026-03-23
last_updated: 2026-03-23
team: "health-care"
product: "checkin"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "TBD - Please complete from research plan content"
  ...

# (Full template with sensible defaults and TBD markers)
---

## My Research Plan

Content starts here...
```

---

## Current Statistics

| Category | Before | After Phase 1 | Remaining |
|----------|--------|---------------|-----------|
| **Files with NO frontmatter** | 87 | 2* | 0 |
| **Files with PLACEHOLDER data** | 797 | 880** | 880 |
| **Files VALID** | 346 | 348 | Need final count |

\* 2 files were fixed in testing before bulk processing
\** Includes 85 files that now have "TBD" placeholders from automation

---

## Tools Provided

### 1. Remediation Script
**Location:** `scripts/remediate_frontmatter.py`

```bash
# Test what would happen (dry run)
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --dry-run

# Process files (for teams fixing their own files)
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --limit 10
```

### 2. Directory Checker
**Location:** `scripts/check_directory_frontmatter.py`

```bash
# Check your directory
python3 scripts/check_directory_frontmatter.py products/your-product

# Verify fixes
python3 scripts/check_directory_frontmatter.py products/ask-va
```

### 3. Remediation Guide
**Location:** `FRONTMATTER_REMEDIATION_GUIDE.md`

Complete instructions for:
- Understanding the automation script
- Fixing placeholder data
- Using GitHub Copilot prompts
- Team-by-team remediation approach

---

## Next Steps for Complete Remediation

### Recommended Approach: Team-by-Team

Given the scale (880 files with placeholders), the best approach is for **each team to fix their own files**:

1. **Identify your files:**
   ```bash
   grep "your-product-name" frontmatter_audit.csv > my-files.csv
   ```

2. **Check current status:**
   ```bash
   python3 scripts/check_directory_frontmatter.py products/your-product
   ```

3. **Fix placeholders:**
   - **Option A (Recommended):** Use GitHub Copilot with frontmatter completion prompts:
     - [Research Plan Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md)
     - [Conversation Guide Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md)
   
   - **Option B:** Manual completion using [Frontmatter Completion Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-frontmatter-completion-guide.md)

4. **Common replacements:**
   - Replace `"TBD"` with actual values from file content
   - Replace date templates with actual dates (check git history if needed)
   - Replace name placeholders with actual names (check git blame)
   - Select appropriate tags from [research repository labels](https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml)
   - Remove or replace `"N/A"` with meaningful values

5. **Validate:**
   ```bash
   python3 scripts/check_directory_frontmatter.py products/your-product
   ```

---

## Why Not Automated Placeholder Replacement?

Replacing placeholders requires:
- **Understanding research context** - What were the actual research goals?
- **Semantic analysis** - What methodology was actually used?
- **Domain knowledge** - What tags are appropriate?
- **Historical data** - When was this research conducted? By whom?

While automation added structure (frontmatter templates), **quality metadata requires human judgment**. The GitHub Copilot prompts are designed to assist with this semantic understanding.

---

## Files Modified in Phase 1

85 files across products and teams now have frontmatter:
- Products: ask-va, authenticated-patterns, benefit-letters, caregivers, claim-appeal-status, combined_va_debt_portal, content, dependents, disability, facilities, health-care, identity, identity-personalization, iris, login.gov-adoption, medical-device-tool, my-education-benefits, paperless-delivery, platform, va-mobile-app, va-notify, vet-transition-support, veteran-onboarding, virtual-agent
- Teams: benefits-portfolio, digital-experience

See full list in git commit `563307d0886`.

---

## Support and Resources

### Documentation
- `FRONTMATTER_REMEDIATION_GUIDE.md` - Complete remediation guide
- `FRONTMATTER_AUDIT_README.md` - Original audit overview
- `FRONTMATTER_AUDIT_DETAILED.md` - Detailed listings by directory
- `frontmatter_audit.csv` - Filterable data

### GitHub Copilot Prompts
- [Research Plan Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md)
- [Conversation Guide Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md)

### Platform Support
- **Research Operations:** #research-ops (Slack)
- **Platform Support:** #vfs-platform-support (Slack)
- **Frontmatter Guide:** [platform/research/research-plan-frontmatter-completion-guide.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-frontmatter-completion-guide.md)

---

## Measuring Success

After team remediation, success will be measured by:
1. **Zero files** with no frontmatter ✅ (Complete in Phase 1)
2. **Zero "TBD" values** in frontmatter (Requires team action)
3. **Zero placeholder patterns** (brackets, YYYY-MM-DD, etc.)
4. **Meaningful tags** selected from approved taxonomy
5. **Valid YAML** in all files

Use `scripts/check_directory_frontmatter.py` to track progress.

---

**Phase 1 Complete!** 🎉

All files now have frontmatter structure. Next: Teams complete the metadata with actual values.
