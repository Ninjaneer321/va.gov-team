# Historical Participant Data Report (2017-2025)

This directory contains scripts for generating comprehensive historical reports of participant demographics from VA.gov research findings.

## Overview

The historical participant data report script extracts and aggregates participant demographic information from research findings reports that have completed YAML frontmatter, covering the period from 2017 to the end of 2025.

## Scripts

### `historical-participant-data-report.js`

The main report generation script that:
- Searches for research findings files with completed YAML frontmatter
- Filters studies by date range (2017-01-01 to 2025-12-31)
- Extracts participant demographics including:
  - Participant types (Veterans, Service Members, Caregivers, etc.)
  - Devices used (Desktop, Tablet, Smartphone, Assistive Technology)
  - Age distribution
  - Education levels
  - Geographic location (Urban/Rural)
  - Race/Ethnicity
  - Disability and Assistive Technology usage
- Aggregates data across all years
- Groups studies by year for year-over-year analysis
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

This will generate two files in the repository root:
- `historical-participant-data-summary-2017-2025.md` - Comprehensive markdown report with visualizations
- `historical-participant-data-2017-2025.json` - Raw aggregated data in JSON format

### Report Contents

The generated report includes:

1. **Overview Statistics**
   - Total studies analyzed
   - Total participants across all studies
   - Years covered
   - Assistive Technology inclusion rate

2. **Year-by-Year Breakdown**
   - Studies per year
   - Participants per year
   - AT usage trends over time

3. **Demographics Analysis**
   - Participant types distribution
   - Devices used in research
   - Age distribution
   - Education levels
   - Geographic location (urban/rural)
   - Race/Ethnicity
   - Disability and AT details

4. **Appendix**
   - Complete list of all studies included with links to GitHub

## Data Source

The script searches for markdown files matching the pattern:
```
**/research/**/*findings*.md
```

And extracts data from YAML frontmatter that includes:
- `date`: Study completion date
- `participants_total`: Total number of participants
- `demographics`: Object containing demographic breakdowns
- `devices_used`: Object containing device usage data

### Date Range Filtering

Only studies with dates between **2017-01-01** and **2025-12-31** are included in the report.

Studies are excluded if:
- Date is outside the 2017-2025 range
- Frontmatter contains placeholder values (e.g., "YYYY-MM-DD", "TBD", "N/A")
- Missing required data fields
- Incomplete or template frontmatter

## Data Quality

The script validates data quality by:
- Checking for placeholder values in critical fields
- Parsing and validating date formats
- Filtering out invalid demographic keys
- Handling missing or incomplete data gracefully

## Output Format

### Markdown Report Features

- 📊 Mermaid charts for visual data representation (pie charts, bar charts)
- 📈 ASCII bar visualizations for quick scanning
- 🗂️ Collapsible details sections for detailed breakdowns
- 🔗 Direct links to source research findings on GitHub
- 📋 Comprehensive appendix with all studies listed

### JSON Data Structure

The JSON file contains:
- `extraction_date`: Timestamp of report generation
- `report_period`: Date range covered
- `total_studies`: Number of studies analyzed
- `total_participants`: Aggregate participant count
- Demographic breakdowns in nested objects
- `studies`: Array of all studies with metadata

## Differences from Quarterly Report

Unlike the quarterly `participant-data-extraction.js` script:

1. **No file tracking**: Processes all eligible files every time (no manifest)
2. **Fixed date range**: Always covers 2017-2025
3. **Year-based grouping**: Organizes data by year instead of quarter
4. **Standalone execution**: Designed to run independently, not just in GitHub Actions
5. **Comprehensive scope**: Captures full historical perspective rather than incremental quarterly updates

## Use Cases

- Annual diversity reporting
- Historical trend analysis
- Baseline establishment for future comparisons
- Comprehensive demographic assessment of VA.gov research
- Identifying gaps in participant representation over time

## Related Files

- `.github/workflows/participant-data-extraction.yml` - GitHub Actions workflow for quarterly reports
- `platform/research/sharing-research/research-findings-template.md` - Research findings template
- Research findings files across `products/` and `teams/` directories

## Support

For questions or issues with the historical report generation:
1. Check that all prerequisites are installed
2. Verify you're running from the repository root
3. Ensure research findings files have valid YAML frontmatter
4. Review the console output for specific error messages
