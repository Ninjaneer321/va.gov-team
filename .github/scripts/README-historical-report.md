# Historical Participant Data Report (2017-2025)

This directory contains scripts for generating comprehensive historical reports of participant demographics from VA.gov research findings.

## Overview

The historical participant data report script extracts and aggregates participant demographic information from research findings reports that have completed YAML frontmatter, covering the period from 2017 to the end of 2025.

## Scripts

### `historical-participant-data-report.js`

The main report generation script that:
- Searches for research findings files with completed YAML frontmatter in `/products/` and `/teams/` directories
- Includes files with various naming conventions (findings.md, report.md, summary.md, readout.md, etc.)
- Filters studies by date range (2017-01-01 to 2025-12-31)
- Extracts participant demographics including:
  - Participant types (Veterans, Service Members, Caregivers, etc.)
  - Devices used (Desktop, Tablet, Smartphone, Assistive Technology)
  - Age distribution
  - Education levels
  - Geographic location (Urban/Rural)
  - Race/Ethnicity
  - Disability and Assistive Technology usage
- Extracts methodology data and key findings for analysis
- Aggregates data across all years with year-over-year trend analysis
- Performs statistical analysis including:
  - Wilson score confidence intervals for all proportions
  - Linear regression trend analysis with significance testing
  - Proportional z-tests against population benchmarks
  - Chi-square goodness-of-fit tests for data completeness
  - Herfindahl-Hirschman Index for methodology diversity
- Generates sections for:
  - Methodology breakdown and diversity analysis
  - Research practice gap analysis (underserved populations, data completeness)
  - Historical pain points by product area
  - AT vs non-AT user comparison
  - Pain point resolution tracking over time
  - Rubric and framework for systematic pain point management
- Generates both a detailed Markdown summary report and JSON data file

### `run-historical-report.js`

A standalone runner script that executes the historical report generation outside of GitHub Actions.

### `participant-data-extraction.js`

The quarterly participant data extraction script (existing) that processes data on a quarter-by-quarter basis with incremental file tracking.

## Usage

### Prerequisites

Install required dependencies:

```bash
npm install js-yaml glob
```

### Running the Historical Report

From the repository root:

```bash
node .github/scripts/run-historical-report.js
```

This will generate two files in the output directory:
- `reports/quarterly-reports/participant-data/historical-reports/historical-participant-data-report-2017-2025.md` - Comprehensive markdown report with visualizations and statistical analysis
- `reports/quarterly-reports/participant-data/historical-reports/historical-participant-data-2017-2025.json` - Raw aggregated data in JSON format

### Report Contents

The generated report includes:

1. **Overview Statistics** - Total studies, participants, years covered, AT inclusion rate
2. **Year-by-Year Breakdown** - Studies per year with trend analysis (OLS regression)
3. **Methodology Breakdown** - Research methods used with diversity analysis (HHI)
4. **Demographics Analysis** - Participant types, devices, age, education, location, race/ethnicity
5. **Assistive Technology Inclusion** - AT rates with Wilson confidence intervals and trend analysis
6. **Research Practice Gap Analysis** - Data completeness, underserved populations, methodology gaps
7. **Historical Pain Points by Product** - Multi-year research patterns by product area
8. **AT vs Non-AT User Pain Points** - Comparative analysis of AT and non-AT research
9. **Pain Point Resolution Analysis** - Early vs later period comparison with improvement tracking
10. **Rubric for Tracking Unaddressed Pain Points** - Severity classification, statistical escalation criteria, organizational framework, KPIs
11. **Statistical Methodology Notes** - Methods used, significance levels, and limitations
12. **Appendix** - Complete list of all studies with links to GitHub

## Statistical Methods

| Method | Purpose |
|--------|---------|
| Wilson Score Interval | 95% CIs for proportions (preferred over Wald for small samples) |
| Proportional z-test | Compare observed proportions to benchmarks |
| OLS Linear Regression | Detect year-over-year trends with t-test for slope significance |
| Chi-square Goodness-of-Fit | Test uniformity of categorical distributions |
| Herfindahl-Hirschman Index | Measure methodology diversity/concentration |

## Data Source

The script searches for markdown files matching these patterns in `/products/` and `/teams/`:
- `*findings*.md` (e.g., research-findings.md, Findings.md)
- `*report*.md` (e.g., research-report.md, Research Report.md)
- `*readout*.md` (e.g., readout.md)
- `*summary*.md` (e.g., topline-summary.md)

File matching is case-insensitive to capture various naming conventions.

### YAML Frontmatter Fields Extracted

- `date`: Study completion date
- `participants_total`: Total number of participants
- `demographics`: Object containing demographic breakdowns
- `devices_used`: Object containing device usage data
- `methodology`: Array or string of research methods used
- `key_findings`: Array of key research findings
- `recommendations`: Array of recommendations
- `underserved_groups_missing`: Array of underserved groups not included

### Date Range Filtering

Only studies with dates between **2017-01-01** and **2025-12-31** are included in the report.

Studies are excluded if:
- Date is outside the 2017-2025 range
- Frontmatter contains placeholder values (e.g., "YYYY-MM-DD", "TBD", "N/A")
- Missing required data fields
- Incomplete or template frontmatter

## Differences from Quarterly Report

Unlike the quarterly `participant-data-extraction.js` script:

1. **No file tracking**: Processes all eligible files every time (no manifest)
2. **Fixed date range**: Always covers 2017-2025
3. **Year-based grouping**: Organizes data by year instead of quarter
4. **Standalone execution**: Designed to run independently, not just in GitHub Actions
5. **Comprehensive scope**: Captures full historical perspective rather than incremental quarterly updates
6. **Statistical analysis**: Includes regression, hypothesis testing, and confidence intervals
7. **Gap analysis**: Identifies systematic gaps in research practices
8. **Pain point tracking**: Provides framework for organizational pain point management

## Related Files

- `.github/workflows/participant-data-extraction.yml` - GitHub Actions workflow for quarterly reports
- `platform/research/sharing-research/research-findings-template.md` - Research findings template
- `reports/quarterly-reports/participant-data/historical-reports/` - Generated report output directory
- Research findings files across `products/` and `teams/` directories
