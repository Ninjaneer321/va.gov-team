# YAML Frontmatter Audit Report

**Date:** March 23, 2026  
**Scope:** Research Plans and Conversation Guides in `/products` and `/teams` directories  
**Total Files Audited:** 1,851

---

## Executive Summary

This audit identifies research plans and conversation guides with missing or placeholder YAML frontmatter using **strict placeholder detection**. Only files with placeholder patterns in PRIMARY metadata fields (title, date, team, product, author) are flagged.

### Key Findings

| Category | Research Plans | Conversation Guides | Total |
|----------|----------------|---------------------|-------|
| **Total Files** | 1,196 | 655 | **1,851** |
| **No Frontmatter** | 426 (35.6%) | 31 (4.7%) | **457 (24.7%)** |
| **Has Placeholder Data** | 385 (32.2%) | 233 (35.6%) | **618 (33.4%)** |
| **Valid Frontmatter** | 380 (31.8%) | 382 (58.3%) | **762 (41.2%)** |
| **Files Needing Attention** | 811 (67.8%) | 264 (40.3%) | **1,075 (58.1%)** |

### Improvement from Previous Audit

The audit has been corrected to use **strict placeholder detection**:

**Previous Audit (Too Strict):**
- Total: 1,230 files
- Issues: 884 files (71.9%)
- Valid: 346 files (28.1%)

**Current Audit (Correct):**
- Total: 1,851 files  
- Issues: 1,075 files (58.1%)
- Valid: 762 files (41.2%)

**What Changed:** Many files previously flagged as having "placeholder data" actually have complete frontmatter with real values. The new audit only flags files with actual placeholder patterns like `[Team, Product, Date]`, `YYYY-MM-DD`, `[Team Name]`, etc.

---

## What Counts as "Placeholder Data"

### PRIMARY Placeholders (Always Flagged) ⚠️

These patterns in title, date, team, product, or author fields indicate incomplete frontmatter:

- `title: "Research Plan for [Team, Product, Date]"` - Bracketed placeholders
- `date: YYYY-MM-DD` - Literal "YYYY-MM-DD" (not actual dates)
- `team: "[Team Name]"` - Bracketed team placeholder
- `product: "[Product Name]"` - Bracketed product placeholder  
- `author: "[AUTHOR NAME]"` - Bracketed author placeholder
- `[Enter date...]`, `[Enter name...]` - Instructional placeholders

### NOT Considered Placeholders ✅

These do NOT flag a file if primary metadata is complete:

- `facility: "N/A"` - N/A in optional fields
- `related_prototype: "N/A"` - N/A in optional fields
- Empty optional fields like `related_research: ""`
- Real dates: `date: 2024-03-11` ✅ VALID
- Real team names: `team: "Authenticated Experience"` ✅ VALID
- Real product names: `product: "My VA"` ✅ VALID

**Result:** Files with complete primary metadata are correctly marked as "valid" even if some optional fields contain "N/A" or are empty.

---

## Priority Issues

### 1. Files with NO Frontmatter (457 files)

**HIGH PRIORITY** - These files need frontmatter templates added:

| File Type | Count | Percentage |
|-----------|-------|------------|
| Research Plans | 426 | 35.6% of all research plans |
| Conversation Guides | 31 | 4.7% of all conversation guides |

**Action Required:**
- Add appropriate frontmatter template
- Use `scripts/remediate_frontmatter.py` for batch processing
- See templates at:
  - [Research Plan Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md)
  - [Conversation Guide Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

### 2. Files with Placeholder Data (618 files)

**MEDIUM PRIORITY** - These files have frontmatter but with placeholder values:

| File Type | Count | Percentage |
|-----------|-------|------------|
| Research Plans | 385 | 32.2% of all research plans |
| Conversation Guides | 233 | 35.6% of all conversation guides |

**Action Required:**
- Replace bracketed placeholders with actual values
- Convert `YYYY-MM-DD` to real dates
- Use GitHub Copilot prompts for intelligent completion
- See [Research Plan Frontmatter Completion Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-frontmatter-completion-guide.md)

---

## Files with Valid Frontmatter (762 files - 41.2%)

These files have complete, properly formatted frontmatter with real values:

| File Type | Count | Percentage |
|-----------|-------|------------|
| Research Plans | 380 | 31.8% of all research plans |
| Conversation Guides | 382 | 58.3% of all conversation guides |

These files serve as good examples of properly completed frontmatter.

---

## How to Use This Audit

### 1. Identify Your Files

```bash
# Filter CSV for your product
grep "your-product-name" frontmatter_audit.csv

# Or check a specific directory
python3 scripts/check_directory_frontmatter.py products/your-product
```

### 2. Fix Issues

**For files with NO frontmatter:**
```bash
# Use remediation script (dry run first)
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --limit 10 \
  --dry-run

# Actually process files
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --filter-type research_plan
```

**For files with placeholders:**
- Use GitHub Copilot with completion prompts:
  - [Research Plan Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md)
  - [Conversation Guide Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md)

### 3. Validate Fixes

```bash
python3 scripts/check_directory_frontmatter.py products/your-product
```

---

## Related Documentation

- **Detailed Appendices:** `FRONTMATTER_AUDIT_DETAILED.md` - Complete file listings
- **Quick Reference:** `FRONTMATTER_AUDIT_QUICKREF.md` - Quick statistics
- **CSV Data:** `frontmatter_audit.csv` - Filterable data (1,851 records)
- **Remediation Guide:** `FRONTMATTER_REMEDIATION_GUIDE.md` - How to fix issues
- **Progress Tracker:** `FRONTMATTER_REMEDIATION_PROGRESS.md` - Current status

---

## Audit Methodology

### File Discovery
- Scanned `/products` and `/teams` directories recursively
- Identified files by naming patterns:
  - Research plans: `*research-plan*.md`, `*research_plan*.md`, `*-plan.md`
  - Conversation guides: `*conversation-guide*.md`, `*conversation_guide*.md`

### Frontmatter Analysis
- Extracted YAML frontmatter from each file
- Checked for presence of frontmatter block
- Validated YAML syntax
- **Strict placeholder detection in PRIMARY fields only:**
  - title, date, last_updated, date_created, last_modified
  - team, product, author
- Ignored minor placeholders in optional fields

### Classification
- **No Frontmatter:** Missing YAML block or invalid YAML
- **Has Placeholder:** PRIMARY fields contain placeholder patterns
- **Valid:** Complete frontmatter with real values in PRIMARY fields

---

**Audit Script:** `scripts/audit_frontmatter_improved.py`  
**Generated:** March 23, 2026  
**Contact:** Research Operations Team (#research-ops)
