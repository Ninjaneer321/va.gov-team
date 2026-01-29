// .github/scripts/diversity-data-extraction.js
//
// Diversity Data Extraction Script
// Extracts participant demographic data from research findings reports
// and aggregates for quarterly diversity reporting.

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
  if (!value || typeof value !== 'string') return true;
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
  const date = new Date(dateStr);
  if (!isNaN(date.getTime())) {
    return date;
  }
  const mmYyyyMatch = dateStr.match(/^(\d{1,2})-(\d{4})$/);
  if (mmYyyyMatch) {
    return new Date(`${mmYyyyMatch[2]}-${mmYyyyMatch[1].padStart(2, '0')}-01`);
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

// Create a horizontal bar using Unicode blocks
const createBar = (value, maxValue, barWidth = 20) => {
  if (maxValue === 0) return '░'.repeat(barWidth);
  const filledWidth = Math.round((value / maxValue) * barWidth);
  const emptyWidth = barWidth - filledWidth;
  return '█'.repeat(filledWidth) + '░'.repeat(emptyWidth);
};

// Create a percentage bar with label
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

// Generate a table row
const tableRow = (cells, widths) => {
  return '| ' + cells.map((cell, i) => {
    const width = widths[i] || 10;
    const str = String(cell);
    return str.padEnd(width);
  }).join(' | ') + ' |';
};

// Generate table separator
const tableSeparator = (widths) => {
  return '|' + widths.map(w => '-'.repeat(w + 2)).join('|') + '|';
};

// Generate a simple data table
const generateTable = (headers, rows, widths) => {
  const lines = [];
  lines.push(tableRow(headers, widths));
  lines.push(tableSeparator(widths));
  for (const row of rows) {
    lines.push(tableRow(row, widths));
  }
  return lines.join('\n');
};

// Generate Mermaid pie chart
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

// Generate Mermaid bar chart (using xychart)
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

// ============================================
// QUARTER CALCULATION
// ============================================

const getQuarterInfo = (inputQuarter) => {
  const now = new Date();
  let year, quarter, startDate, endDate;

  if (inputQuarter && /^\d{4}-Q[1-4]$/.test(inputQuarter)) {
    year = parseInt(inputQuarter.substring(0, 4));
    quarter = parseInt(inputQuarter.substring(6));
  } else {
    const month = now.getMonth();
    year = now.getFullYear();

    if (month >= 0 && month < 3) {
      quarter = 4;
      year = year - 1;
    } else if (month >= 3 && month < 6) {
      quarter = 1;
    } else if (month >= 6 && month < 9) {
      quarter = 2;
    } else {
      quarter = 3;
    }
  }

  const quarterStartMonths = { 1: 0, 2: 3, 3: 6, 4: 9 };
  startDate = new Date(year, quarterStartMonths[quarter], 1);
  endDate = new Date(year, quarterStartMonths[quarter] + 3, 0, 23, 59, 59, 999);

  return {
    year,
    quarter,
    label: `${year}-Q${quarter}`,
    startDate,
    endDate
  };
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
// SUMMARY GENERATION
// ============================================

const generateSummary = (aggregated, quarterInfo, isFirstRun, newlyProcessedFiles, skippedFiles, allDemographics) => {
  const lines = [];
  
  // Header
  lines.push('# 📊 Diversity Data Extraction Summary');
  lines.push('');
  lines.push(`> **Quarter:** ${quarterInfo.label} | **Period:** ${quarterInfo.startDate.toISOString().split('T')[0]} to ${quarterInfo.endDate.toISOString().split('T')[0]}`);
  lines.push(`> **Generated:** ${aggregated.extraction_date}`);
  if (isFirstRun) {
    lines.push('> ⚠️ **Note:** This is the baseline report including all historical data.');
  }
  lines.push('');

  // Quick Stats Cards (using table for alignment)
  lines.push('## 📈 Quick Stats');
  lines.push('');
  lines.push('| Metric | Value |');
  lines.push('|--------|-------|');
  lines.push(`| 📚 **Total Studies** | ${aggregated.total_studies} |`);
  lines.push(`| 👥 **Total Participants** | ${aggregated.total_participants} |`);
  lines.push(`| ♿ **AT Inclusion Rate** | ${aggregated.at_inclusion.studies_with_at}/${aggregated.total_studies} studies (${aggregated.total_studies > 0 ? ((aggregated.at_inclusion.studies_with_at / aggregated.total_studies) * 100).toFixed(1) : 0}%) |`);
  lines.push(`| 📁 **Files Processed** | ${newlyProcessedFiles.length} new, ${skippedFiles.length} skipped |`);
  lines.push('');

  // Participant Types - Pie Chart
  lines.push('---');
  lines.push('## 👥 Participant Types');
  lines.push('');
  
  const participantTotal = Object.values(aggregated.participant_types).reduce((a, b) => a + b, 0);
  if (participantTotal > 0) {
    lines.push(generatePieChart('Participant Types', aggregated.participant_types));
    lines.push('');
  }
  
  // Participant types table
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
  
  // AT Summary box
  lines.push('| Metric | Value |');
  lines.push('|--------|-------|');
  lines.push(`| Studies with AT Users | **${aggregated.at_inclusion.studies_with_at}** of ${aggregated.total_studies} (${atRate}%) |`);
  lines.push(`| Total AT Participants | **${aggregated.at_inclusion.total_at_participants}** |`);
  lines.push('');

  // AT Details breakdown
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
  
  // Visual comparison
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
  lines.push('| Study | Date | Participants |');
  lines.push('|-------|------|-------------:|');
  
  const sortedStudies = [...allDemographics].sort((a, b) => {
    if (!a.date_parsed && !b.date_parsed) return 0;
    if (!a.date_parsed) return 1;
    if (!b.date_parsed) return -1;
    return b.date_parsed - a.date_parsed;
  });

  for (const study of sortedStudies) {
    const dateStr = study.date_formatted || 'N/A';
    const title = study.title.length > 60 ? study.title.substring(0, 57) + '...' : study.title;
    lines.push(`| [${title}](${study.file_url}) | ${dateStr} | ${study.participants_total} |`);
  }
  lines.push('');
  lines.push('</details>');
  lines.push('');

  // Footer
  lines.push('---');
  lines.push(`_Report generated automatically by the [Diversity Data Extraction Workflow](https://github.com/department-of-veterans-affairs/va.gov-team/actions/workflows/diversity-data-extraction.yml)_`);

  return lines.join('\n');
};

// ============================================
// MAIN FUNCTION
// ============================================

async function run(params) {
  const { globModule, core, fullScan, inputQuarter } = params;
  
  const quarterInfo = getQuarterInfo(inputQuarter);

  console.log(`Processing quarter: ${quarterInfo.label}`);
  console.log(`Quarter range: ${quarterInfo.startDate.toISOString()} to ${quarterInfo.endDate.toISOString()}`);
  console.log(`Full scan mode: ${fullScan}`);

  // Load processed files manifest
  let manifest = { processed_files: [], last_updated: null, quarters_processed: [] };
  const manifestPath = 'research-repo/reports/quarterly-reports/diversity-reports/processed-files.json';

  try {
    const manifestContent = fs.readFileSync(manifestPath, 'utf8');
    manifest = JSON.parse(manifestContent);
    console.log(`Loaded manifest with ${manifest.processed_files.length} previously processed files`);
  } catch (err) {
    console.log('No existing manifest found or error reading it, starting fresh');
  }

  const isFirstRun = manifest.processed_files.length === 0;
  console.log(`First run (baseline): ${isFirstRun}`);

  // Find all findings files
  const files = await globModule.glob('**/research/**/*findings*.md', {
    ignore: ['node_modules/**', '.git/**', 'research-repo/**', '**/*.doc', '**/*.docx', '**/*.pptx', '**/*.pdf']
  });

  console.log(`Found ${files.length} total research findings files`);

  const allDemographics = [];
  const skippedFiles = [];
  const newlyProcessedFiles = [];
  const errors = [];

  const repoOwner = 'department-of-veterans-affairs';
  const repoName = 'va.gov-team';
  const defaultBranch = 'master';

  for (const file of files) {
    try {
      if (!fullScan && !isFirstRun && manifest.processed_files.includes(file)) {
        skippedFiles.push({ file, reason: 'Already processed in previous quarter' });
        continue;
      }

      const fileModDate = getFileModifiedDate(file);

      if (!fullScan && !isFirstRun && fileModDate) {
        if (fileModDate < quarterInfo.startDate || fileModDate > quarterInfo.endDate) {
          if (fileModDate < quarterInfo.startDate) {
            skippedFiles.push({ file, reason: 'File predates current quarter and not previously processed' });
            continue;
          }
        }
      }

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

        const record = {
          file: file,
          file_url: fileUrl,
          file_modified: fileModDate ? fileModDate.toISOString() : null,
          date: frontMatter.date || 'unknown',
          date_parsed: parseDate(frontMatter.date),
          date_formatted: formatDate(frontMatter.date),
          product: frontMatter.product || 'unknown',
          team: frontMatter.team || 'unknown',
          title: title,
          participants_total: toInt(frontMatter.participants_total),
          demographics: frontMatter.demographics || {},
          devices_used: frontMatter.devices_used || {},
          methodology: frontMatter.methodology || []
        };

        allDemographics.push(record);
        newlyProcessedFiles.push(file);
      }
    } catch (err) {
      errors.push({ file, error: err.message });
    }
  }

  console.log(`Extracted demographics from ${allDemographics.length} files`);
  console.log(`Newly processed files: ${newlyProcessedFiles.length}`);
  console.log(`Skipped files: ${skippedFiles.length}`);
  console.log(`Errors: ${errors.length}`);

  // ============================================
  // AGGREGATION
  // ============================================

  const aggregated = {
    extraction_date: new Date().toISOString(),
    quarter: quarterInfo.label,
    quarter_start: quarterInfo.startDate.toISOString(),
    quarter_end: quarterInfo.endDate.toISOString(),
    is_baseline: isFirstRun,
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
      product: r.product,
      team: r.team,
      participants: r.participants_total
    })),

    skipped_files: skippedFiles,
    newly_processed_files: newlyProcessedFiles
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

  // ============================================
  // UPDATE MANIFEST
  // ============================================

  const updatedProcessedFiles = [...new Set([...manifest.processed_files, ...newlyProcessedFiles])];
  const updatedQuarters = [...new Set([...manifest.quarters_processed, quarterInfo.label])];

  const updatedManifest = {
    processed_files: updatedProcessedFiles,
    last_updated: new Date().toISOString(),
    quarters_processed: updatedQuarters.sort(),
    last_quarter: quarterInfo.label,
    total_files_processed: updatedProcessedFiles.length
  };

  fs.writeFileSync(manifestPath, JSON.stringify(updatedManifest, null, 2));
  console.log(`Updated manifest with ${newlyProcessedFiles.length} new files (total: ${updatedProcessedFiles.length})`);

  // ============================================
  // GENERATE SUMMARY
  // ============================================

  core.setOutput('aggregated', JSON.stringify(aggregated, null, 2));
  core.setOutput('study_count', allDemographics.length);
  core.setOutput('participant_count', aggregated.total_participants);
  core.setOutput('skipped_count', skippedFiles.length);
  core.setOutput('quarter_label', quarterInfo.label);

  // Generate the visual summary
  const summary = generateSummary(aggregated, quarterInfo, isFirstRun, newlyProcessedFiles, skippedFiles, allDemographics);

  // Write files with quarter-based naming
  fs.writeFileSync(`diversity-summary-${quarterInfo.label}.md`, summary);
  fs.writeFileSync(`diversity-data-${quarterInfo.label}.json`, JSON.stringify(aggregated, null, 2));

  // Also write generic names for artifact upload
  fs.writeFileSync('diversity-summary.md', summary);
  fs.writeFileSync('diversity-data.json', JSON.stringify(aggregated, null, 2));

  return { quarterInfo, aggregated };
}

module.exports = { run };
