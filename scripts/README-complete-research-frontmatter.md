# Research Frontmatter Completion Script

## Overview

The `complete_research_frontmatter.py` script automatically analyzes research findings markdown files and adds appropriate tags to their frontmatter based on content analysis and participant demographics.

## Purpose

This script helps maintain consistent, comprehensive metadata across all research findings files in the repository by:
- Analyzing file content and demographics to infer appropriate tags
- Following strict guardrails to prevent data fabrication or inference
- Using conservative tagging approach based only on explicit mentions
- Supporting the VA.gov research repository taxonomy

## Usage

### Process a Single File

```bash
python3 scripts/complete_research_frontmatter.py --file path/to/research-findings.md
```

### Process Multiple Files from a List

```bash
python3 scripts/complete_research_frontmatter.py --file-list /path/to/file-list.txt
```

### Dry Run (Preview Changes Without Modifying Files)

```bash
python3 scripts/complete_research_frontmatter.py --file path/to/research-findings.md --dry-run
```

### Verbose Output

```bash
python3 scripts/complete_research_frontmatter.py --file-list files.txt --verbose
```

## Tag Categories

The script can add tags from these categories based on explicit content mentions:

### Audience Tags (AUD:)
- Based on participant demographics in frontmatter
- Examples: `AUD: Veterans`, `AUD: Caregivers`, `AUD: VA Staff`

### Benefit Tags (BNFT:)
- Based on benefits mentioned in content
- Examples: `BNFT: Healthcare`, `BNFT: Disability`, `BNFT: Education`

### Product Tags (PRDT:)
- Based on product name and content
- Examples: `PRDT: My VA`, `PRDT: Accredited-Reps`, `PRDT: Facilities`

### MHV Tags
- For health-related research
- Examples: `MHV: Appointments`, `MHV: Pharmacy`, `MHV: Secure Messaging`

### Methodology Tags
- Based on research methods used
- Examples: `usability-testing`, `semi-structured-interviews`, `remote-research`

### Accessibility
- Only added when AT users explicitly participated or accessibility was tested
- Example: `Accessibility`

### Research Phase
- Based on research goals
- Examples: `discovery`, `evaluative`, `generative`

## Guardrails

The script strictly follows these guardrails to ensure data integrity:

1. ✅ **NO Fabrication** - Only tags what's explicitly mentioned in content or demographics
2. ✅ **Conservative Tagging** - When in doubt, doesn't add a tag
3. ✅ **Exact Counts Only** - Uses demographic counts exactly as stated in frontmatter
4. ✅ **No Inference** - Doesn't calculate, infer, or assume data not explicitly present
5. ✅ **Structure Preservation** - Maintains all existing frontmatter values
6. ✅ **Accessibility Rigor** - Only adds Accessibility tag when AT users participated OR accessibility explicitly tested

## How It Works

1. **Extracts frontmatter and content** from markdown file
2. **Checks if tags are needed** (missing, empty, or placeholder tags)
3. **Analyzes demographics** for audience tags
4. **Analyzes content** for benefit, product, and methodology mentions
5. **Generates tags** based only on explicit mentions
6. **Updates file** with new tags (or shows preview in dry-run mode)

## Example Output

### Before
```yaml
---
title: "Study Research Findings"
product: "My VA"
researchers:
  - "Researcher Name"
demographics:
  veterans: 10
  VA_staff: 0
methodology:
  - "Usability testing"
# ... other fields ...
---
```

### After
```yaml
---
title: "Study Research Findings"
product: "My VA"
researchers:
  - "Researcher Name"
demographics:
  veterans: 10
  VA_staff: 0
methodology:
  - "Usability testing"
# ... other fields ...
tags:
  - "AUD: Veterans"
  - "BNFT: Healthcare"
  - "PRDT: My VA"
  - "MHV: Appointments"
  - "usability-testing"
  - "remote-research"
  - "evaluative"
---
```

## Requirements

- Python 3.x
- PyYAML library

Install requirements:
```bash
pip install pyyaml
```

## Finding Files That Need Tags

To find research findings files that are missing tags:

```bash
# Find files with placeholder text
find products teams -name "*findings*.md" | while read file; do 
  if grep -q "placeholder\|TBD\|TODO" "$file" 2>/dev/null; then 
    echo "$file"
  fi
done

# Find files with missing or empty tags
find products teams -name "*findings*.md" | while read file; do
  if head -100 "$file" 2>/dev/null | grep -q "^---$"; then
    if ! grep -q "^tags:" "$file" 2>/dev/null; then
      echo "$file"
    fi
  fi
done
```

## Success Metrics

In the initial deployment (2025-02):
- **336 files** identified as needing frontmatter completion
- **331 files** (98.5%) processed successfully by script
- **5 files** required manual frontmatter creation (no frontmatter structure)
- **254 files** actually modified (77 already had complete tags)
- **~2,500 tags** added across all files
- **5-14 tags** per file on average

## Limitations

### Files That Cannot Be Processed
- Files with no YAML frontmatter structure at all (just `---` line)
- Files with malformed YAML that can't be parsed
- Files without enough content to determine appropriate tags

For these cases, manual frontmatter creation is required.

### Tag Selection Limitations
- Tags are based on keyword matching and explicit mentions only
- More sophisticated NLP analysis could identify additional relevant tags
- Some nuanced research findings may not map perfectly to existing taxonomy

## Future Enhancements

Potential improvements for future versions:
1. Integration with CI/CD to validate frontmatter on new research files
2. Machine learning model for more sophisticated tag inference
3. Support for creating complete frontmatter from scratch for files with none
4. Validation against full VA.gov research repository tag taxonomy
5. Automated suggestions for researchers creating new findings files
6. Tag usage analytics to refine taxonomy over time

## Support

For questions or issues with this script:
1. Review the guardrails section to understand tag selection logic
2. Test with `--dry-run` first to preview changes
3. Use `--verbose` to see detailed processing information
4. Check that files have valid YAML frontmatter structure
5. Verify demographic data is present for audience tag inference

## Related Documentation

- VA.gov Research Repository: https://github.com/department-of-veterans-affairs/va.gov-research-repository
- Tag Taxonomy: https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml
- Research Findings Template: `/teams/digital-experience/accessibility/research/accessibility-findings-template.md`
