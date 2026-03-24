# Frontmatter Audit - Quick Reference

**Last Updated:** March 23, 2026  
**Total Files:** 1,851

---

## At a Glance

| Status | Research Plans | Conversation Guides | Total | % of Total |
|--------|----------------|---------------------|-------|------------|
| ✅ **Valid** | 380 | 382 | **762** | **41.2%** |
| ⚠️ **Has Placeholders** | 385 | 233 | **618** | **33.4%** |
| ❌ **No Frontmatter** | 426 | 31 | **457** | **24.7%** |
| 📊 **Total** | 1,196 | 655 | **1,851** | **100%** |

---

## Quick Stats

### Overall Health
- **Valid Files:** 762 (41.2%) ✅
- **Files Needing Attention:** 1,075 (58.1%) ⚠️
- **Critical Issues (No FM):** 457 (24.7%) ❌

### By File Type

**Research Plans:**
- Total: 1,196
- Valid: 380 (31.8%)
- Need Attention: 811 (67.8%)
  - No Frontmatter: 426 (35.6%)
  - Has Placeholders: 385 (32.2%)

**Conversation Guides:**
- Total: 655
- Valid: 382 (58.3%)
- Need Attention: 264 (40.3%)
  - No Frontmatter: 31 (4.7%)
  - Has Placeholders: 233 (35.6%)

---

## What Changed from Previous Audit

### Previous Audit (Too Strict)
- **Method:** Flagged files with ANY placeholder, including "N/A" in optional fields
- **Results:** 884 files with issues (71.9%)
- **Problem:** Many completed files incorrectly flagged

### Current Audit (Correct - Strict Detection)
- **Method:** Only flags files with placeholders in PRIMARY fields (title, date, team, product, author)
- **Results:** 1,075 files with issues (58.1%)
- **Improvement:** Files with complete primary metadata marked as valid

**Net Effect:** ~200+ files moved from "has_placeholder" to "valid" status ✅

---

## Common Actions Needed

### High Priority (457 files)
**No Frontmatter** - Add templates:
```bash
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --filter-type research_plan
```

### Medium Priority (618 files)
**Has Placeholders** - Replace with real values:
- Use GitHub Copilot with completion prompts
- Replace `[Team, Product, Date]` → actual values
- Replace `YYYY-MM-DD` → real dates like `2024-03-11`
- Replace `[Team Name]` → actual team name

---

## What Counts as Placeholder?

### ⚠️ Flagged (Primary Fields)
- `title: "Research Plan for [Team, Product, Date]"`
- `date: YYYY-MM-DD` (literal)
- `team: "[Team Name]"`
- `product: "[Product Name]"`
- `author: "[AUTHOR NAME]"`

### ✅ NOT Flagged (Optional Fields)
- `facility: "N/A"` (optional field)
- `related_prototype: "N/A"` (optional field)
- `date: 2024-03-11` (real date)
- `team: "Authenticated Experience"` (real name)

---

## Quick Commands

### Check Your Directory
```bash
python3 scripts/check_directory_frontmatter.py products/your-product
```

### Find Your Files
```bash
grep "your-product" frontmatter_audit.csv
```

### Add Frontmatter (Dry Run)
```bash
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --limit 5 \
  --dry-run
```

---

## Documentation

- 📊 **Full Report:** `FRONTMATTER_AUDIT_REPORT.md`
- 📋 **Detailed Lists:** `FRONTMATTER_AUDIT_DETAILED.md`
- 📁 **CSV Data:** `frontmatter_audit.csv` (1,851 records)
- 🛠️ **Remediation Guide:** `FRONTMATTER_REMEDIATION_GUIDE.md`
- 📈 **Progress Tracker:** `FRONTMATTER_REMEDIATION_PROGRESS.md`

---

**Script:** `scripts/audit_frontmatter_improved.py`  
**Contact:** Research Operations (#research-ops)
