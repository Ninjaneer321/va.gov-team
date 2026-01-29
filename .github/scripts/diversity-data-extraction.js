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

// Helper function to safely parse integers
const toInt = (value) => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? 0 : parsed;
};

// Helper function to encode file path for URLs
const encodeFilePath = (filePath) => {
  return filePath.split('/').map(segment => encodeURIComponent(segment)).join('/');
};

// Helper function to check if a value is a placeholder/template value
const isPlaceholder = (value) => {
  if (!value || typeof value !== 'string') return true;
  const placeholders = [
    'YYYY-MM-DD', 'yyyy-mm-dd', '[Study]', '[study]', '[Team]', '[team]',
    '[Product]', '[product]', 'TBD', 'tbd', 'N/A', 'n/a',
    'TODO', 'todo', 'PLACEHOLDER', 'placeholder'
  ];
  return placeholders.some(p => value.includes(p));
};

// Helper function to check if a key is valid (not numeric index or rate)
const isValidDemographicKey = (key) => {
  if (/^\d+$/.test(key)) return false;
  if (key.endsWith('_rate')) return false;
  if (key === 'rate') return false;
  return true;
};

// Helper function to validate and parse date
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

// Helper function to format date for display
const formatDate = (dateStr) => {
  const parsed = parseDate(dateStr);
  if (!parsed) return null;
  return parsed.toISOString().split('T')[0];
};

// Helper function to check if frontmatter has real data
const hasCompletedData = (frontMatter) => {
  const hasValidDate = frontMatter.date && !isPlaceholder(frontMatter.date) && parseDate(frontMatter.date) !== null;
  const hasParticipants = toInt(frontMatter.participants_total) > 0;

  if (!hasValidDate && !hasParticipants) return false;

  if (frontMatter.title && isPlaceholder(frontMatter.title)) {
    return hasValidDate && hasParticipants;
  }

  return hasValidDate || hasParticipants;
};

// Helper to format label for display
const formatLabel = (key) => {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/^At /i, 'AT ')
    .replace(/ At /gi, ' AT ')
    .replace(/^Va /i, 'VA ')
    .replace(/ Va /gi, ' VA ');
};

// Helper to safely extract object data
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

// AT-related keys in demographics.disability that indicate AT usage
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

// Helper to calculate AT participants from disability data
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

// Helper to check if a study has any AT participants
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

// Helper to get total AT participants from a record
const getATParticipantCount = (record) => {
  const deviceAT = toInt(record.devices_used?.assistive_technology);
  if (deviceAT > 0) return deviceAT;

  return calculateATParticipants(record.demographics?.disability);
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

// Get file's last modified date from git
const getFileModifiedDate = (filePath) => {
  try {
    const result = execSync(`git log -1 --format="%aI" -- "${filePath}"`, { encoding: 'utf8' }).trim();
    return result ? new Date(result) : null;
  } catch (err) {
    return null;
  }
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

  // Calculate rates
  let atInclusionRate = '0.0%';
  if (aggregated.total_studies > 0) {
    atInclusionRate = (
      (aggregated.at_inclusion.studies_with_at / aggregated.total_studies) * 100
    ).toFixed(1) + '%';
  }

  const locationTotal = aggregated.location.rural + aggregated.location.urban;

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

  const summaryLines = [
    '# Diversity Data Extraction Summary',
    '',
    `**Quarter:** ${quarterInfo.label}`,
    `**Quarter Period:** ${quarterInfo.startDate.toISOString().split('T')[0]} to ${quarterInfo.endDate.toISOString().split('T')[0]}`,
    `**Extraction Date:** ${aggregated.extraction_date}`,
    isFirstRun ? '**Note:** This is the baseline report including all historical data.' : '',
    '',
    '## Overview',
    '- **Total Studies:** ' + aggregated.total_studies,
    '- **Total Participants:** ' + aggregated.total_participants,
    '- **New Files Processed:** ' + newlyProcessedFiles.length,
    '- **Files Skipped:** ' + skippedFiles.length,
    '',
    '---',
    '',
    '## Participant Types',
    ''
  ];

  for (const [key, value] of Object.entries(aggregated.participant_types)) {
    if (isValidDemographicKey(key)) {
      summaryLines.push(`- **${formatLabel(key)}:** ${value}`);
    }
  }
  summaryLines.push('');

  summaryLines.push('## Devices Used', '');
  for (const [key, value] of Object.entries(aggregated.devices)) {
    if (isValidDemographicKey(key)) {
      summaryLines.push(`- **${formatLabel(key)}:** ${value}`);
    }
  }
  summaryLines.push('');

  summaryLines.push('## Assistive Technology Inclusion', '');
  summaryLines.push(`- **Studies with AT Users:** ${aggregated.at_inclusion.studies_with_at} (${atInclusionRate})`);
  summaryLines.push(`- **Total AT Participants:** ${aggregated.at_inclusion.total_at_participants}`);
  summaryLines.push('');

  summaryLines.push('## Age Distribution', '');
  for (const [key, value] of Object.entries(aggregated.age)) {
    if (isValidDemographicKey(key)) {
      summaryLines.push(`- **${key}:** ${value}`);
    }
  }
  summaryLines.push('');

  summaryLines.push('## Education Levels', '');
  for (const [key, value] of Object.entries(aggregated.education)) {
    if (isValidDemographicKey(key)) {
      summaryLines.push(`- **${formatLabel(key)}:** ${value}`);
    }
  }
  summaryLines.push('');

  summaryLines.push('## Geographic Location', '');
  for (const [key, value] of Object.entries(aggregated.location)) {
    if (isValidDemographicKey(key)) {
      let rateStr = '';
      if ((key === 'rural' || key === 'urban') && locationTotal > 0) {
        const rate = ((value / locationTotal) * 100).toFixed(1);
        rateStr = ` (${rate}%)`;
      }
      summaryLines.push(`- **${formatLabel(key)}:** ${value}${rateStr}`);
    }
  }
  summaryLines.push('');

  summaryLines.push('## Race/Ethnicity', '');
  for (const [key, value] of Object.entries(aggregated.race)) {
    if (isValidDemographicKey(key)) {
      summaryLines.push(`- **${formatLabel(key)}:** ${value}`);
    }
  }
  summaryLines.push('');

  summaryLines.push('## Disability & Assistive Technology Details', '');
  for (const [key, value] of Object.entries(aggregated.disability)) {
    if (isValidDemographicKey(key)) {
      summaryLines.push(`- **${formatLabel(key)}:** ${value}`);
    }
  }
  summaryLines.push('');

  summaryLines.push('---', '');
  summaryLines.push('## Appendix: Studies Included in This Report', '');

  const sortedStudies = [...allDemographics].sort((a, b) => {
    if (!a.date_parsed && !b.date_parsed) return 0;
    if (!a.date_parsed) return 1;
    if (!b.date_parsed) return -1;
    return b.date_parsed - a.date_parsed;
  });

  for (const study of sortedStudies) {
    const dateStr = study.date_formatted ? ` (${study.date_formatted})` : '';
    const participantStr = study.participants_total > 0 ? ` - ${study.participants_total} participants` : '';
    summaryLines.push(`- [${study.title}](${study.file_url})${dateStr}${participantStr}`);
  }

  const summary = summaryLines.join('\n');

  // Write files with quarter-based naming
  fs.writeFileSync(`diversity-summary-${quarterInfo.label}.md`, summary);
  fs.writeFileSync(`diversity-data-${quarterInfo.label}.json`, JSON.stringify(aggregated, null, 2));

  // Also write generic names for artifact upload
  fs.writeFileSync('diversity-summary.md', summary);
  fs.writeFileSync('diversity-data.json', JSON.stringify(aggregated, null, 2));

  return { quarterInfo, aggregated };
}

module.exports = { run };
