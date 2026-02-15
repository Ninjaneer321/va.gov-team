// .github/scripts/historical-participant-data-report.js
//
// Historical Participant Data Report Script
// Extracts participant demographic data from research findings reports
// for the years 2017 to end of 2025 to build a comprehensive historical report.
// Based on participant-data-extraction.js

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { execSync } = require('child_process');

// ============================================
// CONFIGURATION AND HELPERS
// ============================================

const toInt = (value) => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? 0 : parsed;
};

const encodeFilePath = (filePath) => {
  return filePath.split('/').map(segment => encodeURIComponent(segment)).join('/');
};

const isPlaceholder = (value) => {
  if (!value) return true;
  // Date objects are not placeholders
  if (value instanceof Date) return false;
  // Non-string, non-Date values are considered placeholders
  if (typeof value !== 'string') return true;
  const placeholders = [
    'YYYY-MM-DD', 'yyyy-mm-dd', '[Study]', '[study]', '[Team]', '[team]',
    '[Product]', '[product]', 'TBD', 'tbd', 'N/A', 'n/a',
    'TODO', 'todo', 'PLACEHOLDER', 'placeholder'
  ];
  return placeholders.some(p => value.includes(p));
};

const isValidDemographicKey = (key) => {
  if (/^\d+$/.test(key)) return false;
  if (key.endsWith('_rate')) return false;
  if (key === 'rate') return false;
  return true;
};

const parseDate = (dateStr) => {
  if (!dateStr || dateStr === 'unknown' || isPlaceholder(dateStr)) {
    return null;
  }
  // If already a Date object, return it
  if (dateStr instanceof Date) {
    return isNaN(dateStr.getTime()) ? null : dateStr;
  }
  // Convert to string if needed
  const dateString = typeof dateStr === 'string' ? dateStr : String(dateStr);
  
  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    return date;
  }
  // Handle MM/YYYY format (e.g., 08/2024)
  const mmSlashYyyyMatch = dateString.match(/^(\d{1,2})\/(\d{4})$/);
  if (mmSlashYyyyMatch) {
    return new Date(`${mmSlashYyyyMatch[2]}-${mmSlashYyyyMatch[1].padStart(2, '0')}-01`);
  }
  // Handle MM-YYYY format
  const mmYyyyMatch = dateString.match(/^(\d{1,2})-(\d{4})$/);
  if (mmYyyyMatch) {
    return new Date(`${mmYyyyMatch[2]}-${mmYyyyMatch[1].padStart(2, '0')}-01`);
  }
  // Handle YYYY-MM format (year-month only)
  const yyyyMmMatch = dateString.match(/^(\d{4})-(\d{1,2})$/);
  if (yyyyMmMatch) {
    return new Date(`${yyyyMmMatch[1]}-${yyyyMmMatch[2].padStart(2, '0')}-01`);
  }
  return null;
};

// Extract date from folder path when frontmatter date is invalid
// e.g., "products/dependents/research/2025-08-continuous-discovery-pilot/..." -> 2025-08
const extractDateFromPath = (filePath) => {
  // Look for YYYY-MM pattern in path
  const yyyyMmMatch = filePath.match(/\/(\d{4})-(\d{1,2})[^\/]*\//);
  if (yyyyMmMatch) {
    return `${yyyyMmMatch[1]}-${yyyyMmMatch[2].padStart(2, '0')}`;
  }
  // Look for YYYY-MM without trailing content
  const yyyyMmMatch2 = filePath.match(/\/(\d{4})-(\d{1,2})\//);
  if (yyyyMmMatch2) {
    return `${yyyyMmMatch2[1]}-${yyyyMmMatch2[2].padStart(2, '0')}`;
  }
  return null;
};

const formatDate = (dateStr) => {
  const parsed = parseDate(dateStr);
  if (!parsed) return null;
  return parsed.toISOString().split('T')[0];
};

const hasCompletedData = (frontMatter) => {
  const hasValidDate = frontMatter.date && !isPlaceholder(frontMatter.date) && parseDate(frontMatter.date) !== null;
  const hasParticipants = toInt(frontMatter.participants_total) > 0;

  if (!hasValidDate && !hasParticipants) return false;

  if (frontMatter.title && isPlaceholder(frontMatter.title)) {
    return hasValidDate && hasParticipants;
  }

  return hasValidDate || hasParticipants;
};

const formatLabel = (key) => {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/^At /i, 'AT ')
    .replace(/ At /gi, ' AT ')
    .replace(/^Va /i, 'VA ')
    .replace(/ Va /gi, ' VA ');
};

const safeExtractObject = (data) => {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return {};
  }
  const result = {};
  for (const [key, value] of Object.entries(data)) {
    if (isValidDemographicKey(key) && typeof value === 'number') {
      result[key] = value;
    } else if (isValidDemographicKey(key) && typeof value === 'string') {
      const numVal = toInt(value);
      if (!isNaN(numVal)) {
        result[key] = numVal;
      }
    }
  }
  return result;
};

const AT_DISABILITY_KEYS = [
  'AT_beginner',
  'AT_advanced',
  'screen_reader_desktop',
  'screen_reader_mobile',
  'magnification_zoom',
  'speech_input',
  'hearing_aids',
  'sighted_keyboard',
  'captions'
];

const calculateATParticipants = (disabilityData) => {
  if (!disabilityData || typeof disabilityData !== 'object') {
    return 0;
  }

  const atBeginner = toInt(disabilityData.AT_beginner);
  const atAdvanced = toInt(disabilityData.AT_advanced);

  if (atBeginner > 0 || atAdvanced > 0) {
    return atBeginner + atAdvanced;
  }

  let maxAT = 0;
  for (const key of AT_DISABILITY_KEYS) {
    const value = toInt(disabilityData[key]);
    if (value > maxAT) {
      maxAT = value;
    }
  }

  return maxAT;
};

const hasATParticipants = (record) => {
  const deviceAT = toInt(record.devices_used?.assistive_technology);
  if (deviceAT > 0) return true;

  const disabilityData = record.demographics?.disability;
  if (disabilityData) {
    for (const key of AT_DISABILITY_KEYS) {
      if (toInt(disabilityData[key]) > 0) return true;
    }
  }

  return false;
};

const getATParticipantCount = (record) => {
  const deviceAT = toInt(record.devices_used?.assistive_technology);
  if (deviceAT > 0) return deviceAT;

  return calculateATParticipants(record.demographics?.disability);
};

// ============================================
// VISUALIZATION HELPERS
// ============================================

const createBar = (value, maxValue, barWidth = 20) => {
  if (maxValue === 0) return '░'.repeat(barWidth);
  const filledWidth = Math.round((value / maxValue) * barWidth);
  const emptyWidth = barWidth - filledWidth;
  return '█'.repeat(filledWidth) + '░'.repeat(emptyWidth);
};

const createPercentageBar = (value, total, barWidth = 15) => {
  if (total === 0) return { bar: '░'.repeat(barWidth), percent: '0.0%' };
  const percent = ((value / total) * 100).toFixed(1);
  const filledWidth = Math.round((value / total) * barWidth);
  const emptyWidth = barWidth - filledWidth;
  return {
    bar: '█'.repeat(filledWidth) + '░'.repeat(emptyWidth),
    percent: `${percent}%`
  };
};

const tableRow = (cells, widths) => {
  return '| ' + cells.map((cell, i) => {
    const width = widths[i] || 10;
    const str = String(cell);
    return str.padEnd(width);
  }).join(' | ') + ' |';
};

const tableSeparator = (widths) => {
  return '|' + widths.map(w => '-'.repeat(w + 2)).join('|') + '|';
};

const generatePieChart = (title, data) => {
  const lines = ['```mermaid', `pie showData title ${title}`];
  for (const [label, value] of Object.entries(data)) {
    if (value > 0 && isValidDemographicKey(label)) {
      lines.push(`    "${formatLabel(label)}" : ${value}`);
    }
  }
  lines.push('```');
  return lines.join('\n');
};

const generateBarChart = (title, data, xLabel = '', yLabel = 'Count') => {
  const entries = Object.entries(data).filter(([k, v]) => isValidDemographicKey(k) && v >= 0);
  if (entries.length === 0) return '';
  
  const lines = [
    '```mermaid',
    'xychart-beta horizontal',
    `    title "${title}"`,
    `    x-axis [${entries.map(([k]) => `"${formatLabel(k)}"`).join(', ')}]`,
    `    bar [${entries.map(([, v]) => v).join(', ')}]`,
    '```'
  ];
  return lines.join('\n');
};

const getFileModifiedDate = (filePath) => {
  try {
    const result = execSync(`git log -1 --format="%aI" -- "${filePath}"`, { encoding: 'utf8' }).trim();
    return result ? new Date(result) : null;
  } catch (err) {
    return null;
  }
};

// ============================================
// YEAR-BASED GROUPING
// ============================================

const getYearFromDate = (dateStr) => {
  const parsed = parseDate(dateStr);
  if (!parsed) return null;
  return parsed.getFullYear();
};

const groupStudiesByYear = (allStudies) => {
  const byYear = {};
  for (const study of allStudies) {
    const year = getYearFromDate(study.date);
    if (year && year >= 2017 && year <= 2025) {
      if (!byYear[year]) {
        byYear[year] = [];
      }
      byYear[year].push(study);
    }
  }
  return byYear;
};

// ============================================
// SUMMARY GENERATION
// ============================================

const generateSummary = (aggregated, allDemographics, byYear) => {
  const lines = [];
  
  // Header
  lines.push('# 📊 Historical Participant Data Report (2017-2025)');
  lines.push('');
  lines.push(`> **Report Period:** 2017 - 2025 | **Total Years:** ${Object.keys(byYear).length}`);
  lines.push(`> **Generated:** ${aggregated.extraction_date}`);
  lines.push('> 📖 **Purpose:** Comprehensive historical analysis of participant demographics from VA.gov research findings');
  lines.push('');

  // Quick Stats Cards
  lines.push('## 📈 Overview Statistics');
  lines.push('');
  lines.push('| Metric | Value |');
  lines.push('|--------|-------|');
  lines.push(`| 📚 **Total Studies** | ${aggregated.total_studies} |`);
  lines.push(`| 👥 **Total Participants** | ${aggregated.total_participants} |`);
  lines.push(`| 📅 **Years Covered** | 2017-2025 (${Object.keys(byYear).length} years with data) |`);
  lines.push(`| ♿ **AT Inclusion Rate** | ${aggregated.at_inclusion.studies_with_at}/${aggregated.total_studies} studies (${aggregated.total_studies > 0 ? ((aggregated.at_inclusion.studies_with_at / aggregated.total_studies) * 100).toFixed(1) : 0}%) |`);
  lines.push('');

  // Year-by-Year Breakdown
  lines.push('---');
  lines.push('## 📅 Year-by-Year Breakdown');
  lines.push('');
  lines.push('| Year | Studies | Participants | Studies with AT | AT Participants |');
  lines.push('|------|---------|--------------|----------------|-----------------|');
  
  const sortedYears = Object.keys(byYear).sort();
  for (const year of sortedYears) {
    const yearStudies = byYear[year];
    const yearParticipants = yearStudies.reduce((sum, s) => sum + toInt(s.participants_total), 0);
    const yearATStudies = yearStudies.filter(s => hasATParticipants(s)).length;
    const yearATParticipants = yearStudies.reduce((sum, s) => sum + getATParticipantCount(s), 0);
    lines.push(`| ${year} | ${yearStudies.length} | ${yearParticipants} | ${yearATStudies} | ${yearATParticipants} |`);
  }
  lines.push('');

  // Participant Types - Pie Chart
  lines.push('---');
  lines.push('## 👥 Participant Types (Overall)');
  lines.push('');
  
  const participantTotal = Object.values(aggregated.participant_types).reduce((a, b) => a + b, 0);
  if (participantTotal > 0) {
    lines.push(generatePieChart('Participant Types', aggregated.participant_types));
    lines.push('');
  }
  
  lines.push('<details>');
  lines.push('<summary>View detailed breakdown</summary>');
  lines.push('');
  lines.push('| Type | Count | Percentage | Distribution |');
  lines.push('|------|------:|------------|--------------|');
  for (const [key, value] of Object.entries(aggregated.participant_types)) {
    if (isValidDemographicKey(key)) {
      const { bar, percent } = createPercentageBar(value, participantTotal);
      lines.push(`| ${formatLabel(key)} | ${value} | ${percent} | ${bar} |`);
    }
  }
  lines.push('');
  lines.push('</details>');
  lines.push('');

  // Devices Used - Bar Chart
  lines.push('---');
  lines.push('## 💻 Devices Used');
  lines.push('');
  lines.push(generateBarChart('Devices Used in Research', aggregated.devices));
  lines.push('');
  
  const deviceTotal = Object.values(aggregated.devices).reduce((a, b) => a + b, 0);
  lines.push('| Device | Count | Percentage | Distribution |');
  lines.push('|--------|------:|------------|--------------|');
  for (const [key, value] of Object.entries(aggregated.devices)) {
    if (isValidDemographicKey(key)) {
      const { bar, percent } = createPercentageBar(value, deviceTotal);
      lines.push(`| ${formatLabel(key)} | ${value} | ${percent} | ${bar} |`);
    }
  }
  lines.push('');

  // AT Inclusion Section
  lines.push('---');
  lines.push('## ♿ Assistive Technology Inclusion');
  lines.push('');
  
  const atRate = aggregated.total_studies > 0 
    ? ((aggregated.at_inclusion.studies_with_at / aggregated.total_studies) * 100).toFixed(1) 
    : 0;
  
  lines.push('| Metric | Value |');
  lines.push('|--------|-------|');
  lines.push(`| Studies with AT Users | **${aggregated.at_inclusion.studies_with_at}** of ${aggregated.total_studies} (${atRate}%) |`);
  lines.push(`| Total AT Participants | **${aggregated.at_inclusion.total_at_participants}** |`);
  lines.push('');

  const atDetails = {};
  for (const key of AT_DISABILITY_KEYS) {
    if (aggregated.disability[key] > 0) {
      atDetails[key] = aggregated.disability[key];
    }
  }
  
  if (Object.keys(atDetails).length > 0) {
    lines.push('### AT Types Used');
    lines.push('');
    lines.push(generateBarChart('Assistive Technology Types', atDetails));
    lines.push('');
  }

  // Age Distribution
  lines.push('---');
  lines.push('## 📅 Age Distribution');
  lines.push('');
  lines.push(generatePieChart('Age Groups', aggregated.age));
  lines.push('');
  
  const ageTotal = Object.values(aggregated.age).reduce((a, b) => a + b, 0);
  lines.push('<details>');
  lines.push('<summary>View detailed breakdown</summary>');
  lines.push('');
  lines.push('| Age Group | Count | Percentage | Distribution |');
  lines.push('|-----------|------:|------------|--------------|');
  for (const [key, value] of Object.entries(aggregated.age)) {
    if (isValidDemographicKey(key)) {
      const { bar, percent } = createPercentageBar(value, ageTotal);
      lines.push(`| ${key} | ${value} | ${percent} | ${bar} |`);
    }
  }
  lines.push('');
  lines.push('</details>');
  lines.push('');

  // Education Levels
  lines.push('---');
  lines.push('## 🎓 Education Levels');
  lines.push('');
  lines.push(generateBarChart('Education Distribution', aggregated.education));
  lines.push('');
  
  const eduTotal = Object.values(aggregated.education).reduce((a, b) => a + b, 0);
  lines.push('<details>');
  lines.push('<summary>View detailed breakdown</summary>');
  lines.push('');
  lines.push('| Education Level | Count | Percentage | Distribution |');
  lines.push('|-----------------|------:|------------|--------------|');
  for (const [key, value] of Object.entries(aggregated.education)) {
    if (isValidDemographicKey(key)) {
      const { bar, percent } = createPercentageBar(value, eduTotal);
      lines.push(`| ${formatLabel(key)} | ${value} | ${percent} | ${bar} |`);
    }
  }
  lines.push('');
  lines.push('</details>');
  lines.push('');

  // Geographic Location
  lines.push('---');
  lines.push('## 🗺️ Geographic Location');
  lines.push('');
  
  const locationTotal = aggregated.location.rural + aggregated.location.urban + (aggregated.location.unknown || 0);
  
  const ruralBar = createPercentageBar(aggregated.location.rural, locationTotal, 20);
  const urbanBar = createPercentageBar(aggregated.location.urban, locationTotal, 20);
  
  lines.push('| Location | Count | Percentage | Distribution |');
  lines.push('|----------|------:|------------|--------------|');
  lines.push(`| 🏙️ Urban | ${aggregated.location.urban} | ${urbanBar.percent} | ${urbanBar.bar} |`);
  lines.push(`| 🌾 Rural | ${aggregated.location.rural} | ${ruralBar.percent} | ${ruralBar.bar} |`);
  if (aggregated.location.unknown > 0) {
    const unknownBar = createPercentageBar(aggregated.location.unknown, locationTotal, 20);
    lines.push(`| ❓ Unknown | ${aggregated.location.unknown} | ${unknownBar.percent} | ${unknownBar.bar} |`);
  }
  lines.push('');

  // Race/Ethnicity
  lines.push('---');
  lines.push('## 🌍 Race/Ethnicity');
  lines.push('');
  lines.push(generatePieChart('Race/Ethnicity Distribution', aggregated.race));
  lines.push('');
  
  const raceTotal = Object.values(aggregated.race).reduce((a, b) => a + b, 0);
  lines.push('<details>');
  lines.push('<summary>View detailed breakdown</summary>');
  lines.push('');
  lines.push('| Race/Ethnicity | Count | Percentage | Distribution |');
  lines.push('|----------------|------:|------------|--------------|');
  for (const [key, value] of Object.entries(aggregated.race)) {
    if (isValidDemographicKey(key)) {
      const { bar, percent } = createPercentageBar(value, raceTotal);
      lines.push(`| ${formatLabel(key)} | ${value} | ${percent} | ${bar} |`);
    }
  }
  lines.push('');
  lines.push('</details>');
  lines.push('');

  // Disability & AT Details
  lines.push('---');
  lines.push('## ♿ Disability & Accessibility Details');
  lines.push('');
  
  const disabilityTotal = Object.values(aggregated.disability).reduce((a, b) => a + b, 0);
  if (disabilityTotal > 0) {
    lines.push('| Category | Count | Distribution |');
    lines.push('|----------|------:|--------------|');
    for (const [key, value] of Object.entries(aggregated.disability)) {
      if (isValidDemographicKey(key) && value > 0) {
        const bar = createBar(value, Math.max(...Object.values(aggregated.disability)), 15);
        lines.push(`| ${formatLabel(key)} | ${value} | ${bar} |`);
      }
    }
    lines.push('');
  } else {
    lines.push('_No disability/accessibility data reported for this period._');
    lines.push('');
  }

  // Studies Appendix
  lines.push('---');
  lines.push('## 📋 Appendix: Studies Included');
  lines.push('');
  lines.push(`<details>`);
  lines.push(`<summary>View all ${allDemographics.length} studies</summary>`);
  lines.push('');
  lines.push('| Study | Date | Year | Participants |');
  lines.push('|-------|------|------|-------------:|');
  
  const sortedStudies = [...allDemographics].sort((a, b) => {
    if (!a.date_parsed && !b.date_parsed) return 0;
    if (!a.date_parsed) return 1;
    if (!b.date_parsed) return -1;
    return b.date_parsed - a.date_parsed;
  });

  for (const study of sortedStudies) {
    const dateStr = study.date_formatted || 'N/A';
    const year = getYearFromDate(study.date) || 'N/A';
    const title = study.title.length > 50 ? study.title.substring(0, 47) + '...' : study.title;
    lines.push(`| [${title}](${study.file_url}) | ${dateStr} | ${year} | ${study.participants_total} |`);
  }
  lines.push('');
  lines.push('</details>');
  lines.push('');

  // Footer
  lines.push('---');
  lines.push(`_Historical report generated from research findings spanning 2017-2025_`);
  lines.push(`_Generated on: ${new Date().toISOString().split('T')[0]}_`);

  return lines.join('\n');
};

// ============================================
// MAIN FUNCTION
// ============================================

async function run(params) {
  const { globModule, core } = params;
  
  console.log('Starting historical participant data extraction (2017-2025)...');

  // Find all research findings files with various naming conventions
  // Search broadly for research documents with different naming patterns
  // Focus on products/ and teams/ folders to ensure relevant content
  const patterns = [
    'products/**/*findings*.md',     // e.g., research-findings.md, findings.md, 2024-findings.md
    'products/**/*report*.md',       // e.g., research-report.md, report.md, final-report.md
    'products/**/*readout*.md',      // e.g., readout.md
    'products/**/*summary*.md',      // e.g., topline-summary.md, findings-summary.md
    'teams/**/*findings*.md',        // Same patterns in teams folder
    'teams/**/*report*.md',
    'teams/**/*readout*.md',
    'teams/**/*summary*.md',
  ];
  
  const allFiles = [];
  for (const pattern of patterns) {
    const matchedFiles = await globModule.glob(pattern, {
      nocase: true,  // Case-insensitive matching for Findings.md vs findings.md
      ignore: [
        'node_modules/**',
        '.git/**', 
        'research-repo/**',
        '**/*.doc',
        '**/*.docx',
        '**/*.pptx',
        '**/*.pdf',
        '**/template*.md',  // Exclude template files
        '**/*template.md',  // Exclude template files
      ]
    });
    allFiles.push(...matchedFiles);
  }
  
  // Remove duplicates (in case a file matches multiple patterns)
  const uniqueFiles = [...new Set(allFiles)];
  
  // Exclude specific file (large survey without demographic breakdown)
  const excludedFile = 'products/health-care/appointments/va-online-scheduling/research/2021-08-facilities-ab-test/research-findings.md';
  const files = uniqueFiles.filter(file => !file.endsWith(excludedFile) && file !== excludedFile);

  console.log(`Found ${allFiles.length} total research files (${uniqueFiles.length} unique, ${files.length} after exclusions)`);

  const allDemographics = [];
  const skippedFiles = [];
  const errors = [];

  const repoOwner = 'department-of-veterans-affairs';
  const repoName = 'va.gov-team';
  const defaultBranch = 'master';

  // Date range filter: 2017-01-01 to 2026-03-31
  // Extended to include early 2026 to capture studies from late 2025
  const startDate = new Date('2017-01-01');
  const endDate = new Date('2026-03-31T23:59:59.999Z');

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');

      const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!yamlMatch) {
        continue;
      }

      const frontMatter = yaml.load(yamlMatch[1]);

      if (frontMatter.demographics || frontMatter.participants_total) {

        if (!hasCompletedData(frontMatter)) {
          skippedFiles.push({ file, reason: 'Incomplete or template frontmatter' });
          continue;
        }

        // Check date range - try frontmatter first, then extract from path
        let studyDate = parseDate(frontMatter.date);
        
        // If date is invalid or "Not specified", try to extract from folder path
        if (!studyDate && frontMatter.date) {
          const dateStr = typeof frontMatter.date === 'string' ? frontMatter.date : String(frontMatter.date);
          if (dateStr.toLowerCase().includes('not specified') || 
              dateStr === 'TBD' || 
              dateStr === 'N/A') {
            const pathDate = extractDateFromPath(file);
            if (pathDate) {
              studyDate = parseDate(pathDate);
            }
          }
        }
        
        if (!studyDate || studyDate < startDate || studyDate > endDate) {
          skippedFiles.push({ file, reason: 'Date outside 2017-2026 range' });
          continue;
        }

        const encodedPath = encodeFilePath(file);
        const fileUrl = `https://github.com/${repoOwner}/${repoName}/blob/${defaultBranch}/${encodedPath}`;

        let title = frontMatter.title || '';
        if (!title || isPlaceholder(title)) {
          const pathParts = file.split('/');
          const fileName = pathParts.pop().replace('.md', '').replace(/-/g, ' ');
          const folderName = pathParts.pop() || '';
          title = folderName.replace(/-/g, ' ').replace(/^\d{4}-\d{2}\s*/, '') || fileName;
          title = title.replace(/\b\w/g, c => c.toUpperCase());
        }

        const fileModDate = getFileModifiedDate(file);

        const record = {
          file: file,
          file_url: fileUrl,
          file_modified: fileModDate ? fileModDate.toISOString() : null,
          date: frontMatter.date || 'unknown',
          date_parsed: studyDate,
          date_formatted: studyDate ? studyDate.toISOString().split('T')[0] : null,
          product: frontMatter.product || 'unknown',
          team: frontMatter.team || 'unknown',
          title: title,
          participants_total: toInt(frontMatter.participants_total),
          demographics: frontMatter.demographics || {},
          devices_used: frontMatter.devices_used || {},
          methodology: frontMatter.methodology || []
        };

        allDemographics.push(record);
      }
    } catch (err) {
      errors.push({ file, error: err.message });
    }
  }

  console.log(`Extracted demographics from ${allDemographics.length} files`);
  console.log(`Skipped files: ${skippedFiles.length}`);
  console.log(`Errors: ${errors.length}`);

  // ============================================
  // AGGREGATION
  // ============================================

  const aggregated = {
    extraction_date: new Date().toISOString(),
    report_period: '2017-2025',
    total_studies: allDemographics.length,
    total_participants: 0,

    participant_types: {
      veterans: 0,
      service_members: 0,
      caregivers: 0,
      dependents: 0,
      VA_staff: 0
    },

    devices: {
      desktop: 0,
      tablet: 0,
      smartphone: 0,
      assistive_technology: 0
    },

    age: {
      '25-34': 0,
      '35-44': 0,
      '45-54': 0,
      '55-64': 0,
      '65+': 0,
      'unknown': 0
    },

    education: {
      high_school: 0,
      some_college: 0,
      associates: 0,
      bachelors: 0,
      masters: 0,
      doctorate: 0,
      unknown: 0
    },

    location: {
      urban: 0,
      rural: 0,
      unknown: 0
    },

    race: {
      white: 0,
      black: 0,
      hispanic: 0,
      biracial: 0,
      asian: 0,
      native: 0
    },

    disability: {
      cognitive: 0,
      AT_beginner: 0,
      AT_advanced: 0,
      screen_reader_desktop: 0,
      screen_reader_mobile: 0,
      magnification_zoom: 0,
      speech_input: 0,
      hearing_aids: 0,
      sighted_keyboard: 0,
      captions: 0
    },

    at_inclusion: {
      studies_with_at: 0,
      total_at_participants: 0
    },

    studies: allDemographics.map(r => ({
      title: r.title,
      file: r.file,
      url: r.file_url,
      date: r.date_formatted || r.date,
      year: getYearFromDate(r.date),
      product: r.product,
      team: r.team,
      participants: r.participants_total
    })),

    skipped_files: skippedFiles,
    errors: errors
  };

  // Aggregate all data
  for (const record of allDemographics) {
    aggregated.total_participants += toInt(record.participants_total);

    for (const type of ['veterans', 'service_members', 'caregivers', 'dependents', 'VA_staff']) {
      if (record.demographics?.[type] !== undefined) {
        aggregated.participant_types[type] += toInt(record.demographics[type]);
      }
    }

    const deviceData = safeExtractObject(record.devices_used);
    for (const device of ['desktop', 'tablet', 'smartphone', 'assistive_technology']) {
      if (deviceData[device] !== undefined) {
        aggregated.devices[device] += toInt(deviceData[device]);
      }
    }

    if (hasATParticipants(record)) {
      aggregated.at_inclusion.studies_with_at++;
      aggregated.at_inclusion.total_at_participants += getATParticipantCount(record);
    }

    const ageData = safeExtractObject(record.demographics?.age);
    for (const [key, value] of Object.entries(ageData)) {
      if (aggregated.age.hasOwnProperty(key)) {
        aggregated.age[key] += toInt(value);
      } else if (isValidDemographicKey(key)) {
        aggregated.age[key] = toInt(value);
      }
    }

    const educationData = safeExtractObject(record.demographics?.education);
    for (const [key, value] of Object.entries(educationData)) {
      if (aggregated.education.hasOwnProperty(key)) {
        aggregated.education[key] += toInt(value);
      } else if (isValidDemographicKey(key)) {
        aggregated.education[key] = toInt(value);
      }
    }

    const locationData = safeExtractObject(record.demographics?.location);
    for (const [key, value] of Object.entries(locationData)) {
      if (aggregated.location.hasOwnProperty(key)) {
        aggregated.location[key] += toInt(value);
      } else if (isValidDemographicKey(key)) {
        aggregated.location[key] = toInt(value);
      }
    }

    const raceData = safeExtractObject(record.demographics?.race);
    for (const [key, value] of Object.entries(raceData)) {
      if (aggregated.race.hasOwnProperty(key)) {
        aggregated.race[key] += toInt(value);
      } else if (isValidDemographicKey(key)) {
        aggregated.race[key] = toInt(value);
      }
    }

    const disabilityData = safeExtractObject(record.demographics?.disability);
    for (const [key, value] of Object.entries(disabilityData)) {
      if (aggregated.disability.hasOwnProperty(key)) {
        aggregated.disability[key] += toInt(value);
      } else if (isValidDemographicKey(key)) {
        aggregated.disability[key] = toInt(value);
      }
    }
  }

  // Sync devices.assistive_technology with calculated AT
  if (aggregated.devices.assistive_technology === 0) {
    aggregated.devices.assistive_technology = aggregated.at_inclusion.total_at_participants;
  }

  // Group studies by year
  const byYear = groupStudiesByYear(allDemographics);

  // ============================================
  // GENERATE SUMMARY
  // ============================================

  if (core) {
    core.setOutput('aggregated', JSON.stringify(aggregated, null, 2));
    core.setOutput('study_count', allDemographics.length);
    core.setOutput('participant_count', aggregated.total_participants);
    core.setOutput('skipped_count', skippedFiles.length);
    core.setOutput('error_count', errors.length);
  }

  // Generate the visual summary
  const summary = generateSummary(aggregated, allDemographics, byYear);

  // Write files
  fs.writeFileSync('historical-participant-data-summary-2017-2025.md', summary);
  fs.writeFileSync('historical-participant-data-2017-2025.json', JSON.stringify(aggregated, null, 2));

  console.log('Historical report generated successfully!');
  console.log(`Total studies: ${allDemographics.length}`);
  console.log(`Total participants: ${aggregated.total_participants}`);
  console.log(`Years covered: ${Object.keys(byYear).join(', ')}`);

  return { aggregated, byYear };
}

module.exports = { run };
