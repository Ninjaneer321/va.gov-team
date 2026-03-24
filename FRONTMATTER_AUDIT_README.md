# Research Documentation YAML Frontmatter Audit - March 2026

## Overview

This directory contains a comprehensive audit of research-plan and conversation-guide markdown files in the `/products` and `/teams` directories, identifying files with missing or placeholder YAML frontmatter.

## Audit Date
**March 23, 2026**

## Key Findings

📊 **1,230 total files audited**
- 613 research plans
- 617 conversation guides

🚨 **884 files (71.9%) need attention**
- 87 files have no frontmatter at all
- 797 files have placeholder data in their frontmatter

✅ **346 files (28.1%) have valid, complete frontmatter**

## Report Files

### 1. [FRONTMATTER_AUDIT_REPORT.md](FRONTMATTER_AUDIT_REPORT.md) ⭐ START HERE
**Executive Summary** - Best for understanding the issue and next steps
- Key findings and statistics
- Common placeholder patterns
- Recommendations for remediation
- Links to templates and guides

### 2. [FRONTMATTER_AUDIT_DETAILED.md](FRONTMATTER_AUDIT_DETAILED.md)
**Complete Listings** - All 884 files with issues organized by directory
- Appendix A: Research plans without frontmatter (13 files)
- Appendix B: Research plans with placeholder data (396 files)
- Appendix C: Conversation guides without frontmatter (74 files)
- Appendix D: Conversation guides with placeholder data (401 files)
- Includes placeholder examples for each file

### 3. [FRONTMATTER_AUDIT_QUICKREF.md](FRONTMATTER_AUDIT_QUICKREF.md)
**Quick Reference** - Fast lookup and action items
- Visual summary statistics
- Priority action items
- Common placeholder patterns table
- Step-by-step fixing guide

### 4. [frontmatter_audit.csv](frontmatter_audit.csv)
**Machine-Readable Data** - For filtering and analysis
- All 1,230 files with status indicators
- Columns: file_type, status, path, directory, placeholder_examples
- Import into Excel/Google Sheets for custom filtering
- Great for tracking remediation progress

## Tools

### Directory Checking Script
**Location:** `scripts/check_directory_frontmatter.py`

Check frontmatter status for a specific product or team directory:

```bash
# Check a specific directory
python3 scripts/check_directory_frontmatter.py products/health-care/checkin

# Check your team directory
python3 scripts/check_directory_frontmatter.py teams/digital-experience/ADE
```

See `scripts/README.md` for detailed usage instructions.

## What This Means

### Why Frontmatter Matters
YAML frontmatter provides structured metadata that:
- ✅ Enables research repository syncing and indexing
- ✅ Makes research discoverable and searchable
- ✅ Connects research to products, teams, and strategic objectives
- ✅ Supports cross-team collaboration and institutional knowledge
- ✅ Enables data-driven insights about research patterns

### Impact of Missing/Placeholder Data
- ❌ Research can't be properly indexed in research repository
- ❌ Makes it difficult to find related studies
- ❌ Prevents automated organization and tracking
- ❌ Reduces discoverability for other teams
- ❌ Loses connection to strategic initiatives

## How to Fix Your Files

### Priority Levels

**🔴 HIGH PRIORITY: Files with NO FRONTMATTER (87 files)**
- Add frontmatter using templates:
  - [Research Plan Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md)
  - [Conversation Guide Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

**🟡 MEDIUM PRIORITY: Files with PLACEHOLDER DATA (797 files)**
- Replace placeholder values with actual data
- Use GitHub Copilot prompts for automated completion:
  - [Research Plan Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md)
  - [Conversation Guide Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-completion-prompt.md)

### Step-by-Step Process

1. **Find your files** - Use the CSV or detailed report to locate files in your product/team area
2. **Choose completion method:**
   - **Recommended:** Use GitHub Copilot with the frontmatter completion prompts
   - **Alternative:** Manually complete using the [Frontmatter Completion Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-frontmatter-completion-guide.md)
3. **Validate** - Ensure no placeholder patterns remain (brackets, YYYY-MM-DD, etc.)
4. **Select tags** - Use appropriate tags from [research repository labels](https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml)
5. **Test** - Validate YAML syntax (use an editor with YAML validation)

## Questions or Support

- **Research Operations:** #research-ops (Slack)
- **Platform Support:** #vfs-platform-support (Slack)
- **Documentation:** [Platform Research Docs](https://depo-platform-documentation.scrollhelp.site/research-design/)

## Future Audits

Consider running periodic audits:
- **Quarterly** - Track progress on frontmatter completion
- **After major initiatives** - Ensure new research is properly documented
- **Before research repository syncs** - Maximize quality of synced content

The audit script can be re-run by teams at any time using the directory checking script in the `scripts/` folder.

---

**Generated by:** GitHub Copilot Coding Agent  
**Audit Date:** March 23, 2026  
**Repository:** department-of-veterans-affairs/va.gov-team
