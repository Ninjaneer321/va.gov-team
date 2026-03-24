# Repo Migration scripts

## Frontmatter Scripts

### 1. Frontmatter Checking Script

Checks research plans and conversation guides for frontmatter issues.

**Location:** `scripts/check_directory_frontmatter.py`

**Usage:**
```bash
python3 scripts/check_directory_frontmatter.py <directory_path>
```

**Examples:**
```bash
# Check a specific product directory
python3 scripts/check_directory_frontmatter.py products/health-care/checkin

# Check a team directory
python3 scripts/check_directory_frontmatter.py teams/vsa
```

**Output:**
- Total files checked
- Files with no frontmatter
- Files with placeholder data (with examples)
- Valid files with complete frontmatter

### 2. Frontmatter Remediation Script

Adds frontmatter templates to files and helps replace placeholders.

**Location:** `scripts/remediate_frontmatter.py`

**Usage:**
```bash
# Dry run (shows what would happen, no changes)
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --dry-run

# Add frontmatter to files with none (limit to 10)
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --limit 10

# Filter by file type
python3 scripts/remediate_frontmatter.py --mode batch \
  --csv frontmatter_audit.csv \
  --status no_frontmatter \
  --filter-type research_plan
```

**Features:**
- Adds complete frontmatter templates
- Extracts team/product from file paths
- Sets reasonable defaults
- Marks fields requiring review as "TBD"
- Supports dry-run mode for testing
- Batch processing with limits

### Related Documentation
- `FRONTMATTER_AUDIT_REPORT.md` - Audit executive summary
- `FRONTMATTER_AUDIT_DETAILED.md` - Complete audit listings  
- `FRONTMATTER_REMEDIATION_GUIDE.md` - How to fix frontmatter issues
- `FRONTMATTER_REMEDIATION_PROGRESS.md` - Current remediation status
- `frontmatter_audit.csv` - Filterable audit data

---

## Deprecation Script
This is the script to deprecate old files that have been moved over to va.gov-team's repo. It requires a `repo-deprecation.csv` file. This will be input data for the script. This file should be provided by the IA team after files have been migrated over to va.gov-team's. The columns names need to be formatted like so.

### Example `repo-deprecation.csv`

| url | messagingToBeAdded |
| --- | ------------------ |
|https://github.com/department-of-veterans-affairs/vets.gov-team/platform/research/research-plan-template.md | This page is no longer maintained and likely outdated. Please see the most current research documentation in the va.gov-team repo.

### Script Location

```
scripts/repo-replace-url.js
```

### Run the script
```
$ npm run repo-deprecation
```

### Logs and reports
Once the script is done running it will output a `repo-deprecation.log.csv` file. This will show a report of success and errors relating to each file that is modified.

## Url Find and Replace Script
This is the script to find old url's and replace it with the new url's in va.gov-team's repo. It requires a `repo-replace-url.csv` file. This will be input data for the script. This file should be provided by the IA team after files have been migrated over to va.gov-team's repo. The columns names need to be formatted like so.

### Example `repo-replace-url.csv`

| oldUrl | newUrl |
| ------ | ------ |
| https://github.com/department-of-veterans-affairs/vets.gov-team/platform/research/research-plan-template.md | https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md |

### Script Location

```
scripts/repo-replace-url.js
```

### Run the script
```
$ npm run repo-replace-url
```

### Logs and reports
Once the script is done running it will output a `repo-replace-url.log.csv` file. This will show a report of success and errors relating to each file that is modified.
