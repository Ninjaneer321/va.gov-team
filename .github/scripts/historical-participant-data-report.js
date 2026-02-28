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
// STATISTICAL HELPERS
// ============================================

// Standard normal cumulative distribution function (Abramowitz & Stegun approximation)
// Bounds of ±6 are used because P(Z > 6) ≈ 10^-9, effectively 0 for practical purposes
const normalCDF = (z) => {
  if (z < -6) return 0;
  if (z > 6) return 1;
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
  const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const sign = z < 0 ? -1 : 1;
  const x = Math.abs(z) / Math.sqrt(2);
  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return 0.5 * (1.0 + sign * y);
};

// Wilson score interval for binomial proportion (recommended for small samples)
const wilsonInterval = (successes, total, zLevel = 1.96) => {
  if (total === 0) return { lower: 0, upper: 0, center: 0 };
  const p = successes / total;
  const z2 = zLevel * zLevel;
  const denominator = 1 + z2 / total;
  const center = (p + z2 / (2 * total)) / denominator;
  const margin = (zLevel * Math.sqrt((p * (1 - p) + z2 / (4 * total)) / total)) / denominator;
  return {
    lower: Math.max(0, center - margin),
    upper: Math.min(1, center + margin),
    center
  };
};

// Proportional z-test: tests whether observed proportion differs from expected
const proportionZTest = (observed, total, expectedProportion) => {
  if (total === 0) return { z: 0, pValue: 1 };
  const pHat = observed / total;
  const se = Math.sqrt(expectedProportion * (1 - expectedProportion) / total);
  if (se === 0) return { z: 0, pValue: 1 };
  const z = (pHat - expectedProportion) / se;
  const pValue = 2 * (1 - normalCDF(Math.abs(z)));
  return { z: parseFloat(z.toFixed(3)), pValue: parseFloat(pValue.toFixed(4)) };
};

// Simple linear regression for trend analysis
const linearRegression = (xs, ys) => {
  const n = xs.length;
  if (n < 2) return { slope: 0, intercept: 0, rSquared: 0, pValue: 1 };
  const sumX = xs.reduce((a, b) => a + b, 0);
  const sumY = ys.reduce((a, b) => a + b, 0);
  const sumXY = xs.reduce((acc, x, i) => acc + x * ys[i], 0);
  const sumX2 = xs.reduce((acc, x) => acc + x * x, 0);
  const sumY2 = ys.reduce((acc, y) => acc + y * y, 0);
  const denom = n * sumX2 - sumX * sumX;
  if (denom === 0) return { slope: 0, intercept: sumY / n, rSquared: 0, pValue: 1 };
  const slope = (n * sumXY - sumX * sumY) / denom;
  const intercept = (sumY - slope * sumX) / n;
  const yMean = sumY / n;
  const ssTotal = ys.reduce((acc, y) => acc + (y - yMean) ** 2, 0);
  const ssResidual = xs.reduce((acc, x, i) => acc + (ys[i] - (slope * x + intercept)) ** 2, 0);
  const rSquared = ssTotal === 0 ? 0 : 1 - ssResidual / ssTotal;
  // For n <= 2, slope significance cannot be tested (df = 0); return rSquared for reference
  if (n <= 2) return { slope, intercept, rSquared, pValue: 1 };
  const sResidual = Math.sqrt(ssResidual / (n - 2));
  const sXX = sumX2 - sumX * sumX / n;
  const tStat = sXX > 0 ? slope / (sResidual / Math.sqrt(sXX)) : 0;
  // Approximate p-value using normal distribution for large df
  const pValue = 2 * (1 - normalCDF(Math.abs(tStat)));
  return {
    slope: parseFloat(slope.toFixed(4)),
    intercept: parseFloat(intercept.toFixed(4)),
    rSquared: parseFloat(rSquared.toFixed(4)),
    pValue: parseFloat(pValue.toFixed(4))
  };
};

// Chi-square goodness-of-fit test
const chiSquareTest = (observed, expected) => {
  if (observed.length !== expected.length || observed.length === 0) return { chiSquare: 0, df: 0, pValue: 1 };
  let chiSquare = 0;
  for (let i = 0; i < observed.length; i++) {
    if (expected[i] > 0) {
      chiSquare += ((observed[i] - expected[i]) ** 2) / expected[i];
    }
  }
  const df = observed.length - 1;
  // Wilson-Hilferty approximation for chi-square p-value
  if (df <= 0) return { chiSquare, df: 0, pValue: 1 };
  const z = Math.pow(chiSquare / df, 1 / 3) - (1 - 2 / (9 * df));
  const denom = Math.sqrt(2 / (9 * df));
  const pValue = denom > 0 ? 1 - normalCDF(z / denom) : 1;
  return {
    chiSquare: parseFloat(chiSquare.toFixed(3)),
    df,
    pValue: parseFloat(Math.max(0, Math.min(1, pValue)).toFixed(4))
  };
};

// Cramér's V effect size for chi-square
const cramersV = (chiSquare, n, k) => {
  if (n === 0 || k <= 1) return 0;
  return parseFloat(Math.sqrt(chiSquare / (n * (k - 1))).toFixed(4));
};

// Significance label
const significanceLabel = (pValue) => {
  if (pValue < 0.001) return '***';
  if (pValue < 0.01) return '**';
  if (pValue < 0.05) return '*';
  return 'ns';
};

// Normalize methodology strings for categorization
const normalizeMethodology = (method) => {
  if (!method || typeof method !== 'string') return 'other';
  const lower = method.toLowerCase().trim();
  if (lower.includes('usability test') || lower.includes('usability stud')) return 'Usability Testing';
  if (lower.includes('interview') || lower.includes('semi-structured')) return 'Interviews';
  if (lower.includes('concept test')) return 'Concept Testing';
  if (lower.includes('card sort')) return 'Card Sorting';
  if (lower.includes('tree test')) return 'Tree Testing';
  if (lower.includes('survey') || lower.includes('questionnaire')) return 'Surveys';
  if (lower.includes('a/b test') || lower.includes('ab test')) return 'A/B Testing';
  if (lower.includes('accessibility') || lower.includes('a11y')) return 'Accessibility Testing';
  if (lower.includes('desk research') || lower.includes('secondary research') || lower.includes('literature review')) return 'Desk Research';
  if (lower.includes('diary') || lower.includes('journal')) return 'Diary Studies';
  if (lower.includes('heuristic') || lower.includes('expert review')) return 'Heuristic Evaluation';
  if (lower.includes('cognitive walkthrough')) return 'Cognitive Walkthrough';
  if (lower.includes('wayfinding') || lower.includes('navigation')) return 'Wayfinding';
  if (lower.includes('moderated') && lower.includes('remote')) return 'Remote Moderated Sessions';
  if (lower.includes('unmoderated')) return 'Unmoderated Testing';
  if (lower.includes('focus group')) return 'Focus Groups';
  if (lower.includes('workshop') || lower.includes('co-design')) return 'Workshops/Co-Design';
  if (lower.includes('uat') || lower.includes('acceptance test')) return 'UAT';
  if (lower.includes('prototype')) return 'Prototype Testing';
  if (lower.includes('comparative') || lower.includes('comparison')) return 'Comparative Evaluation';
  if (lower.includes('contextual inquiry') || lower.includes('field study')) return 'Contextual Inquiry';
  return 'Other';
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

  // Table of Contents
  lines.push('## Table of Contents');
  lines.push('');
  lines.push('1. [Overview Statistics](#-overview-statistics)');
  lines.push('2. [Year-by-Year Breakdown](#-year-by-year-breakdown)');
  lines.push('3. [Methodology Breakdown](#-methodology-breakdown)');
  lines.push('4. [Participant Types](#-participant-types-overall)');
  lines.push('5. [Devices Used](#-devices-used)');
  lines.push('6. [Assistive Technology Inclusion](#-assistive-technology-inclusion)');
  lines.push('7. [Age Distribution](#-age-distribution)');
  lines.push('8. [Education Levels](#-education-levels)');
  lines.push('9. [Geographic Location](#-geographic-location)');
  lines.push('10. [Race/Ethnicity](#-raceethnicity)');
  lines.push('11. [Disability & Accessibility Details](#-disability--accessibility-details)');
  lines.push('12. [Research Practice Gap Analysis](#-research-practice-gap-analysis)');
  lines.push('13. [Historical Pain Points by Product](#-historical-pain-points-by-product)');
  lines.push('14. [AT vs Non-AT User Pain Points](#-at-vs-non-at-user-pain-points)');
  lines.push('15. [Pain Point Resolution Analysis](#-pain-point-resolution-analysis)');
  lines.push('16. [Rubric for Tracking Unaddressed Pain Points](#-rubric-for-tracking-unaddressed-pain-points)');
  lines.push('17. [Statistical Methodology Notes](#-statistical-methodology-notes)');
  lines.push('18. [Appendix: Studies Included](#-appendix-studies-included)');
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
  lines.push(`| 🔬 **Avg Participants/Study** | ${aggregated.total_studies > 0 ? (aggregated.total_participants / aggregated.total_studies).toFixed(1) : 0} |`);
  lines.push('');

  // Year-by-Year Breakdown with trend analysis
  lines.push('---');
  lines.push('## 📅 Year-by-Year Breakdown');
  lines.push('');
  lines.push('| Year | Studies | Participants | Avg/Study | Studies with AT | AT Rate | AT Participants |');
  lines.push('|------|---------|--------------|-----------|----------------|---------|-----------------|');
  
  const sortedYears = Object.keys(byYear).sort();
  const yearStudyCounts = [];
  const yearParticipantCounts = [];
  const yearATRates = [];
  const yearNums = [];
  
  for (const year of sortedYears) {
    const yearStudies = byYear[year];
    const yearParticipants = yearStudies.reduce((sum, s) => sum + toInt(s.participants_total), 0);
    const yearATStudies = yearStudies.filter(s => hasATParticipants(s)).length;
    const yearATParticipants = yearStudies.reduce((sum, s) => sum + getATParticipantCount(s), 0);
    const avgPerStudy = yearStudies.length > 0 ? (yearParticipants / yearStudies.length).toFixed(1) : '0';
    const yearATRate = yearStudies.length > 0 ? ((yearATStudies / yearStudies.length) * 100).toFixed(1) : '0';
    lines.push(`| ${year} | ${yearStudies.length} | ${yearParticipants} | ${avgPerStudy} | ${yearATStudies} | ${yearATRate}% | ${yearATParticipants} |`);
    
    yearNums.push(parseInt(year));
    yearStudyCounts.push(yearStudies.length);
    yearParticipantCounts.push(yearParticipants);
    yearATRates.push(yearStudies.length > 0 ? yearATStudies / yearStudies.length : 0);
  }
  lines.push('');

  // Trend analysis for year-over-year data
  if (yearNums.length >= 3) {
    const studyTrend = linearRegression(yearNums, yearStudyCounts);
    const participantTrend = linearRegression(yearNums, yearParticipantCounts);
    const atRateTrend = linearRegression(yearNums, yearATRates);

    lines.push('### 📈 Year-over-Year Trend Analysis');
    lines.push('');
    lines.push('> Statistical test: Ordinary Least Squares linear regression with t-test for slope significance');
    lines.push('');
    lines.push('| Metric | Slope (per year) | R² | p-value | Significance |');
    lines.push('|--------|------------------|----|---------|--------------|');
    lines.push(`| Studies conducted | ${studyTrend.slope > 0 ? '+' : ''}${studyTrend.slope.toFixed(1)} | ${studyTrend.rSquared.toFixed(3)} | ${studyTrend.pValue.toFixed(4)} | ${significanceLabel(studyTrend.pValue)} |`);
    lines.push(`| Total participants | ${participantTrend.slope > 0 ? '+' : ''}${participantTrend.slope.toFixed(1)} | ${participantTrend.rSquared.toFixed(3)} | ${participantTrend.pValue.toFixed(4)} | ${significanceLabel(participantTrend.pValue)} |`);
    lines.push(`| AT inclusion rate | ${atRateTrend.slope > 0 ? '+' : ''}${(atRateTrend.slope * 100).toFixed(2)}pp | ${atRateTrend.rSquared.toFixed(3)} | ${atRateTrend.pValue.toFixed(4)} | ${significanceLabel(atRateTrend.pValue)} |`);
    lines.push('');
    lines.push('> *Significance: \\*\\*\\* p<0.001, \\*\\* p<0.01, \\* p<0.05, ns = not significant*');
    lines.push('');
    
    if (studyTrend.pValue < 0.05) {
      lines.push(`**Key finding:** Research volume is ${studyTrend.slope > 0 ? 'increasing' : 'decreasing'} at a rate of ~${Math.abs(studyTrend.slope).toFixed(1)} studies per year (R²=${studyTrend.rSquared.toFixed(3)}, p=${studyTrend.pValue.toFixed(4)}).`);
    }
    if (atRateTrend.pValue < 0.05) {
      lines.push(`**Key finding:** AT inclusion rate is ${atRateTrend.slope > 0 ? 'improving' : 'declining'} at ~${Math.abs(atRateTrend.slope * 100).toFixed(2)} percentage points per year (R²=${atRateTrend.rSquared.toFixed(3)}, p=${atRateTrend.pValue.toFixed(4)}).`);
    }
    lines.push('');
  }

  // ============================================
  // METHODOLOGY BREAKDOWN
  // ============================================
  lines.push('---');
  lines.push('## 🔬 Methodology Breakdown');
  lines.push('');
  
  // Aggregate methodologies
  const methodCounts = {};
  const methodByYear = {};
  let studiesWithMethods = 0;
  
  for (const study of allDemographics) {
    const methods = study.methodology;
    if (methods && ((Array.isArray(methods) && methods.length > 0) || typeof methods === 'string')) {
      studiesWithMethods++;
      const methodList = Array.isArray(methods) ? methods : [methods];
      for (const m of methodList) {
        const normalized = normalizeMethodology(m);
        methodCounts[normalized] = (methodCounts[normalized] || 0) + 1;
        
        const year = getYearFromDate(study.date);
        if (year) {
          if (!methodByYear[year]) methodByYear[year] = {};
          methodByYear[year][normalized] = (methodByYear[year][normalized] || 0) + 1;
        }
      }
    }
  }
  
  lines.push(`**Studies with methodology data:** ${studiesWithMethods} of ${allDemographics.length} (${((studiesWithMethods / allDemographics.length) * 100).toFixed(1)}%)`);
  lines.push('');
  
  const sortedMethods = Object.entries(methodCounts).sort((a, b) => b[1] - a[1]);
  const methodTotal = sortedMethods.reduce((sum, [, v]) => sum + v, 0);
  
  lines.push(generateBarChart('Research Methodologies Used', Object.fromEntries(sortedMethods.slice(0, 12))));
  lines.push('');
  
  lines.push('| Methodology | Count | % of Studies | 95% CI | Distribution |');
  lines.push('|-------------|------:|-------------|--------|--------------|');
  for (const [method, count] of sortedMethods) {
    const pct = ((count / allDemographics.length) * 100).toFixed(1);
    const ci = wilsonInterval(count, allDemographics.length);
    const ciStr = `[${(ci.lower * 100).toFixed(1)}%, ${(ci.upper * 100).toFixed(1)}%]`;
    const { bar } = createPercentageBar(count, allDemographics.length);
    lines.push(`| ${method} | ${count} | ${pct}% | ${ciStr} | ${bar} |`);
  }
  lines.push('');
  
  // Methodology trends by year
  if (Object.keys(methodByYear).length >= 3) {
    lines.push('### Methodology Trends Over Time');
    lines.push('');
    lines.push('| Methodology | ' + sortedYears.join(' | ') + ' |');
    lines.push('|-------------|' + sortedYears.map(() => '----:').join('|') + '|');
    for (const [method] of sortedMethods.slice(0, 8)) {
      const yearCells = sortedYears.map(y => methodByYear[y]?.[method] || 0);
      lines.push(`| ${method} | ${yearCells.join(' | ')} |`);
    }
    lines.push('');
  }

  // Methodology diversity analysis
  const methodCountsPerStudy = allDemographics.map(s => {
    const m = s.methodology;
    if (!m) return 0;
    return Array.isArray(m) ? m.length : 1;
  });
  const avgMethodsPerStudy = methodCountsPerStudy.length > 0 
    ? (methodCountsPerStudy.reduce((a, b) => a + b, 0) / methodCountsPerStudy.length).toFixed(2) 
    : 0;
  const singleMethodStudies = methodCountsPerStudy.filter(c => c === 1).length;
  const multiMethodStudies = methodCountsPerStudy.filter(c => c > 1).length;
  
  lines.push('### Methodology Diversity');
  lines.push('');
  lines.push(`- **Average methods per study:** ${avgMethodsPerStudy}`);
  lines.push(`- **Single-method studies:** ${singleMethodStudies} (${((singleMethodStudies / allDemographics.length) * 100).toFixed(1)}%)`);
  lines.push(`- **Multi-method studies:** ${multiMethodStudies} (${((multiMethodStudies / allDemographics.length) * 100).toFixed(1)}%)`);
  lines.push(`- **Unique methodology categories:** ${sortedMethods.length}`);
  lines.push('');
  
  // Methodology gap assessment
  const underusedMethods = ['Diary Studies', 'Contextual Inquiry', 'A/B Testing', 'Unmoderated Testing', 'Focus Groups', 'Cognitive Walkthrough'];
  const missingOrLow = underusedMethods.filter(m => (methodCounts[m] || 0) < 5);
  
  if (missingOrLow.length > 0) {
    lines.push('### ⚠️ Underutilized Methodologies');
    lines.push('');
    lines.push('The following established UX research methodologies are underrepresented (fewer than 5 studies each):');
    lines.push('');
    for (const m of missingOrLow) {
      const count = methodCounts[m] || 0;
      lines.push(`- **${m}:** ${count} studies`);
    }
    lines.push('');
    lines.push('> **Recommendation:** Consider expanding methodological repertoire to include longitudinal methods (diary studies), quantitative methods (A/B testing, unmoderated testing), and contextual methods (field studies) for more comprehensive insights.');
    lines.push('');
  }

  // ============================================
  // PARTICIPANT TYPES
  // ============================================
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
  lines.push('| Type | Count | Percentage | 95% CI | Distribution |');
  lines.push('|------|------:|------------|--------|--------------|');
  for (const [key, value] of Object.entries(aggregated.participant_types)) {
    if (isValidDemographicKey(key)) {
      const { bar, percent } = createPercentageBar(value, participantTotal);
      const ci = wilsonInterval(value, participantTotal);
      const ciStr = `[${(ci.lower * 100).toFixed(1)}%, ${(ci.upper * 100).toFixed(1)}%]`;
      lines.push(`| ${formatLabel(key)} | ${value} | ${percent} | ${ciStr} | ${bar} |`);
    }
  }
  lines.push('');
  lines.push('</details>');
  lines.push('');

  // ============================================
  // DEVICES USED
  // ============================================
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

  // ============================================
  // AT INCLUSION
  // ============================================
  lines.push('---');
  lines.push('## ♿ Assistive Technology Inclusion');
  lines.push('');
  
  const atRate = aggregated.total_studies > 0 
    ? ((aggregated.at_inclusion.studies_with_at / aggregated.total_studies) * 100).toFixed(1) 
    : 0;
  const atCI = wilsonInterval(aggregated.at_inclusion.studies_with_at, aggregated.total_studies);
  
  lines.push('| Metric | Value |');
  lines.push('|--------|-------|');
  lines.push(`| Studies with AT Users | **${aggregated.at_inclusion.studies_with_at}** of ${aggregated.total_studies} (${atRate}%, 95% CI: [${(atCI.lower * 100).toFixed(1)}%, ${(atCI.upper * 100).toFixed(1)}%]) |`);
  lines.push(`| Total AT Participants | **${aggregated.at_inclusion.total_at_participants}** |`);
  lines.push(`| AT Participant Rate | ${aggregated.total_participants > 0 ? ((aggregated.at_inclusion.total_at_participants / aggregated.total_participants) * 100).toFixed(1) : 0}% of all participants |`);
  lines.push('');

  // VA Section 508 target: 100% of usability studies should include AT users
  const atTarget = 1.0;
  const atZTest = proportionZTest(aggregated.at_inclusion.studies_with_at, aggregated.total_studies, atTarget);
  lines.push(`> **Section 508 Benchmark Test:** Against the target of 100% AT inclusion, the observed rate of ${atRate}% is ${atZTest.pValue < 0.05 ? 'significantly below target' : 'not significantly different from target'} (z=${atZTest.z}, p=${atZTest.pValue}).`);
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

  // AT inclusion trend by year
  if (sortedYears.length >= 3) {
    lines.push('### AT Inclusion Trend by Year');
    lines.push('');
    lines.push('| Year | Total Studies | AT Studies | AT Rate | 95% CI |');
    lines.push('|------|-------------|-----------|---------|--------|');
    for (const year of sortedYears) {
      const ys = byYear[year];
      const yATCount = ys.filter(s => hasATParticipants(s)).length;
      const yATRate = ys.length > 0 ? ((yATCount / ys.length) * 100).toFixed(1) : '0.0';
      const yCI = wilsonInterval(yATCount, ys.length);
      lines.push(`| ${year} | ${ys.length} | ${yATCount} | ${yATRate}% | [${(yCI.lower * 100).toFixed(1)}%, ${(yCI.upper * 100).toFixed(1)}%] |`);
    }
    lines.push('');
  }

  // ============================================
  // AGE DISTRIBUTION
  // ============================================
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

  // ============================================
  // EDUCATION LEVELS
  // ============================================
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

  // ============================================
  // GEOGRAPHIC LOCATION
  // ============================================
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

  // Rural veteran benchmark: ~25% of veterans live in rural areas (VA data)
  const knownLocation = aggregated.location.rural + aggregated.location.urban;
  if (knownLocation > 0) {
    const ruralProp = aggregated.location.rural / knownLocation;
    const ruralCI = wilsonInterval(aggregated.location.rural, knownLocation);
    const ruralZTest = proportionZTest(aggregated.location.rural, knownLocation, 0.25);
    lines.push(`> **Rural representation benchmark:** ~25% of Veterans live in rural areas (VA OIG). Observed rural rate among participants with known location: ${(ruralProp * 100).toFixed(1)}% (95% CI: [${(ruralCI.lower * 100).toFixed(1)}%, ${(ruralCI.upper * 100).toFixed(1)}%]). ${ruralZTest.pValue < 0.05 ? `This is significantly ${ruralProp > 0.25 ? 'above' : 'below'} the benchmark` : 'This is not significantly different from the benchmark'} (z=${ruralZTest.z}, p=${ruralZTest.pValue}).`);
    lines.push('');
  }

  // ============================================
  // RACE/ETHNICITY
  // ============================================
  lines.push('---');
  lines.push('## 🌍 Race/Ethnicity');
  lines.push('');
  lines.push(generatePieChart('Race/Ethnicity Distribution', aggregated.race));
  lines.push('');
  
  const raceTotal = Object.values(aggregated.race).reduce((a, b) => a + b, 0);
  lines.push('<details>');
  lines.push('<summary>View detailed breakdown</summary>');
  lines.push('');
  lines.push('| Race/Ethnicity | Count | Percentage | 95% CI | Distribution |');
  lines.push('|----------------|------:|------------|--------|--------------|');
  for (const [key, value] of Object.entries(aggregated.race)) {
    if (isValidDemographicKey(key)) {
      const { bar, percent } = createPercentageBar(value, raceTotal);
      const ci = wilsonInterval(value, raceTotal);
      const ciStr = `[${(ci.lower * 100).toFixed(1)}%, ${(ci.upper * 100).toFixed(1)}%]`;
      lines.push(`| ${formatLabel(key)} | ${value} | ${percent} | ${ciStr} | ${bar} |`);
    }
  }
  lines.push('');
  lines.push('</details>');
  lines.push('');

  // ============================================
  // DISABILITY & AT DETAILS
  // ============================================
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

  // ============================================
  // RESEARCH PRACTICE GAP ANALYSIS
  // ============================================
  lines.push('---');
  lines.push('## 🔍 Research Practice Gap Analysis');
  lines.push('');
  lines.push('This section analyzes systematic gaps in VA.gov research practices using statistical tests against known benchmarks and best practices.');
  lines.push('');
  
  // Gap 1: Demographic data completeness
  const studiesWithAge = allDemographics.filter(s => {
    const age = safeExtractObject(s.demographics?.age);
    return Object.values(age).some(v => v > 0);
  }).length;
  const studiesWithRace = allDemographics.filter(s => {
    const race = safeExtractObject(s.demographics?.race);
    return Object.values(race).some(v => v > 0);
  }).length;
  const studiesWithEducation = allDemographics.filter(s => {
    const edu = safeExtractObject(s.demographics?.education);
    return Object.values(edu).some(v => v > 0);
  }).length;
  const studiesWithLocation = allDemographics.filter(s => {
    const loc = safeExtractObject(s.demographics?.location);
    return Object.values(loc).some(v => v > 0);
  }).length;
  const studiesWithDisability = allDemographics.filter(s => {
    const dis = safeExtractObject(s.demographics?.disability);
    return Object.values(dis).some(v => v > 0);
  }).length;
  
  lines.push('### Gap 1: Demographic Data Completeness');
  lines.push('');
  lines.push('| Demographic Field | Studies Reporting | % | 95% CI | Status |');
  lines.push('|-------------------|------------------:|---|--------|--------|');
  const completenessData = [
    ['Age', studiesWithAge],
    ['Race/Ethnicity', studiesWithRace],
    ['Education', studiesWithEducation],
    ['Location', studiesWithLocation],
    ['Disability/AT', studiesWithDisability],
  ];
  for (const [field, count] of completenessData) {
    const pct = ((count / allDemographics.length) * 100).toFixed(1);
    const ci = wilsonInterval(count, allDemographics.length);
    const ciStr = `[${(ci.lower * 100).toFixed(1)}%, ${(ci.upper * 100).toFixed(1)}%]`;
    const status = parseFloat(pct) >= 75 ? '✅ Good' : parseFloat(pct) >= 50 ? '⚠️ Moderate' : '🔴 Low';
    lines.push(`| ${field} | ${count}/${allDemographics.length} | ${pct}% | ${ciStr} | ${status} |`);
  }
  lines.push('');
  
  // Chi-square test for uniform completeness
  const observedCompleteness = completenessData.map(([, c]) => c);
  const expectedUniform = observedCompleteness.map(() => allDemographics.length);
  const completenessChiSq = chiSquareTest(observedCompleteness, expectedUniform);
  lines.push(`> **Chi-square test for uniform completeness across fields:** χ²=${completenessChiSq.chiSquare}, df=${completenessChiSq.df}, p=${completenessChiSq.pValue}. ${completenessChiSq.pValue < 0.05 ? 'Demographic data collection is significantly uneven across fields.' : 'Demographic data collection is relatively uniform across fields.'}`);
  lines.push('');

  // Gap 2: Underserved populations
  lines.push('### Gap 2: Underserved Population Representation');
  lines.push('');
  
  // Check underserved_groups_missing data
  const underservedCounts = {};
  let studiesWithUnderservedData = 0;
  for (const study of allDemographics) {
    if (study.underserved_groups_missing) {
      studiesWithUnderservedData++;
      const groups = Array.isArray(study.underserved_groups_missing) ? study.underserved_groups_missing : [study.underserved_groups_missing];
      for (const g of groups) {
        if (g && typeof g === 'string') {
          underservedCounts[g] = (underservedCounts[g] || 0) + 1;
        }
      }
    }
  }
  
  if (studiesWithUnderservedData > 0) {
    const sortedUnderserved = Object.entries(underservedCounts).sort((a, b) => b[1] - a[1]);
    lines.push(`**Studies reporting underserved groups data:** ${studiesWithUnderservedData}`);
    lines.push('');
    lines.push('| Underserved Group | Times Identified as Missing | % of Reporting Studies |');
    lines.push('|-------------------|----------------------------:|----------------------:|');
    for (const [group, count] of sortedUnderserved.slice(0, 15)) {
      const pct = ((count / studiesWithUnderservedData) * 100).toFixed(1);
      lines.push(`| ${group} | ${count} | ${pct}% |`);
    }
    lines.push('');
  }
  
  // Gap 3: Participant type coverage gaps
  lines.push('### Gap 3: Participant Type Coverage');
  lines.push('');
  const totalTyped = Object.values(aggregated.participant_types).reduce((a, b) => a + b, 0);
  // VA beneficiary population approximation: ~70% Veterans, ~5% service members, ~15% dependents, ~5% caregivers, ~5% staff
  const expectedProportions = {
    veterans: 0.70,
    service_members: 0.05,
    caregivers: 0.05,
    dependents: 0.15,
    VA_staff: 0.05
  };
  
  if (totalTyped > 0) {
    lines.push('| Participant Type | Observed % | Expected % (approx) | z-statistic | p-value | Sig. |');
    lines.push('|-----------------|----------:|--------------------:|------------|---------|------|');
    for (const [type, expected] of Object.entries(expectedProportions)) {
      const observed = aggregated.participant_types[type] || 0;
      const obsPct = ((observed / totalTyped) * 100).toFixed(1);
      const zTest = proportionZTest(observed, totalTyped, expected);
      lines.push(`| ${formatLabel(type)} | ${obsPct}% | ${(expected * 100).toFixed(0)}% | ${zTest.z} | ${zTest.pValue} | ${significanceLabel(zTest.pValue)} |`);
    }
    lines.push('');
    lines.push('> *Expected proportions are approximate benchmarks based on VA beneficiary population composition. Deviations indicate potential over- or under-representation in research.*');
    lines.push('');
  }

  // Gap 4: Methodological diversity assessment
  lines.push('### Gap 4: Methodological Diversity');
  lines.push('');
  const topMethod = sortedMethods.length > 0 ? sortedMethods[0] : ['N/A', 0];
  const topMethodPct = methodTotal > 0 ? ((topMethod[1] / methodTotal) * 100).toFixed(1) : 0;
  lines.push(`- **Dominant methodology:** ${topMethod[0]} (${topMethodPct}% of all method instances)`);
  lines.push(`- **Top 3 methods account for:** ${methodTotal > 0 ? ((sortedMethods.slice(0, 3).reduce((s, [, v]) => s + v, 0) / methodTotal) * 100).toFixed(1) : 0}% of all method usage`);
  
  // Herfindahl-Hirschman Index for methodology concentration
  const hhi = methodTotal > 0 ? sortedMethods.reduce((sum, [, v]) => sum + Math.pow(v / methodTotal, 2), 0) : 0;
  const normalizedHHI = sortedMethods.length > 1 ? (hhi - 1 / sortedMethods.length) / (1 - 1 / sortedMethods.length) : 1;
  lines.push(`- **Herfindahl-Hirschman Index (HHI):** ${hhi.toFixed(4)} (normalized: ${normalizedHHI.toFixed(4)})`);
  lines.push(`  - HHI < 0.15 = unconcentrated (diverse), 0.15-0.25 = moderate, > 0.25 = highly concentrated`);
  lines.push(`  - **Assessment:** ${hhi < 0.15 ? '✅ Methodology portfolio is well-diversified' : hhi < 0.25 ? '⚠️ Moderate concentration; consider broader methods' : '🔴 Highly concentrated; methodological diversity should be prioritized'}`);
  lines.push('');

  // ============================================
  // HISTORICAL PAIN POINTS BY PRODUCT
  // ============================================
  lines.push('---');
  lines.push('## 📋 Historical Pain Points by Product');
  lines.push('');
  lines.push('This section aggregates key findings from research studies across product areas to identify recurring pain points.');
  lines.push('');
  
  // Group studies by product
  const productStudies = {};
  for (const study of allDemographics) {
    const product = study.product || 'unknown';
    if (!productStudies[product]) {
      productStudies[product] = [];
    }
    productStudies[product].push(study);
  }
  
  // Show top products by study count
  const topProducts = Object.entries(productStudies)
    .filter(([k]) => k !== 'unknown')
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 20);
  
  lines.push('### Product Research Volume');
  lines.push('');
  lines.push('| Product | Studies | Participants | Time Span | Avg Participants/Study |');
  lines.push('|---------|--------:|-------------:|-----------|----------------------:|');
  for (const [product, studies] of topProducts) {
    const totalP = studies.reduce((s, st) => s + toInt(st.participants_total), 0);
    const avgP = studies.length > 0 ? (totalP / studies.length).toFixed(1) : '0';
    const years = studies.map(s => getYearFromDate(s.date)).filter(Boolean);
    const minYear = years.length > 0 ? Math.min(...years) : 'N/A';
    const maxYear = years.length > 0 ? Math.max(...years) : 'N/A';
    const span = minYear !== 'N/A' ? `${minYear}-${maxYear}` : 'N/A';
    lines.push(`| ${product} | ${studies.length} | ${totalP} | ${span} | ${avgP} |`);
  }
  lines.push('');

  // Pain point analysis from key_findings
  lines.push('### Pain Point Concentration by Product');
  lines.push('');
  lines.push('Products with the highest study frequency may indicate persistent usability challenges or complexity that requires ongoing research investment.');
  lines.push('');
  
  // Analyze products with studies across multiple years (indicating ongoing work/issues)
  const productsMultiYear = topProducts.filter(([, studies]) => {
    const years = new Set(studies.map(s => getYearFromDate(s.date)).filter(Boolean));
    return years.size >= 3;
  });
  
  if (productsMultiYear.length > 0) {
    lines.push('**Products with 3+ years of research activity** (potential indicators of persistent challenges):');
    lines.push('');
    lines.push('| Product | Years Active | Total Studies | AT Studies | AT Rate |');
    lines.push('|---------|:-------------|-------------:|----------:|---------:|');
    for (const [product, studies] of productsMultiYear) {
      const years = [...new Set(studies.map(s => getYearFromDate(s.date)).filter(Boolean))].sort();
      const atStudies = studies.filter(s => hasATParticipants(s)).length;
      const atRatePct = studies.length > 0 ? ((atStudies / studies.length) * 100).toFixed(1) : '0.0';
      lines.push(`| ${product} | ${years.join(', ')} | ${studies.length} | ${atStudies} | ${atRatePct}% |`);
    }
    lines.push('');
  }

  // ============================================
  // AT vs NON-AT PAIN POINTS
  // ============================================
  lines.push('---');
  lines.push('## ♿ AT vs Non-AT User Pain Points');
  lines.push('');
  lines.push('This section compares research patterns between studies that included Assistive Technology (AT) users and those that did not.');
  lines.push('');
  
  const atStudies = allDemographics.filter(s => hasATParticipants(s));
  const nonATStudies = allDemographics.filter(s => !hasATParticipants(s));
  
  lines.push('### Study Comparison');
  lines.push('');
  lines.push('| Metric | AT Studies | Non-AT Studies | Difference |');
  lines.push('|--------|----------:|---------------:|------------|');
  lines.push(`| Number of studies | ${atStudies.length} | ${nonATStudies.length} | - |`);
  
  const atParticipantsTotal = atStudies.reduce((s, st) => s + toInt(st.participants_total), 0);
  const nonATParticipantsTotal = nonATStudies.reduce((s, st) => s + toInt(st.participants_total), 0);
  lines.push(`| Total participants | ${atParticipantsTotal} | ${nonATParticipantsTotal} | - |`);
  
  const atAvg = atStudies.length > 0 ? (atParticipantsTotal / atStudies.length).toFixed(1) : '0';
  const nonATAvg = nonATStudies.length > 0 ? (nonATParticipantsTotal / nonATStudies.length).toFixed(1) : '0';
  lines.push(`| Avg participants/study | ${atAvg} | ${nonATAvg} | ${(parseFloat(atAvg) - parseFloat(nonATAvg)).toFixed(1)} |`);
  lines.push('');

  // Methodology comparison AT vs non-AT
  const atMethods = {};
  const nonATMethods = {};
  for (const s of atStudies) {
    const methods = Array.isArray(s.methodology) ? s.methodology : (s.methodology ? [s.methodology] : []);
    for (const m of methods) {
      const norm = normalizeMethodology(m);
      atMethods[norm] = (atMethods[norm] || 0) + 1;
    }
  }
  for (const s of nonATStudies) {
    const methods = Array.isArray(s.methodology) ? s.methodology : (s.methodology ? [s.methodology] : []);
    for (const m of methods) {
      const norm = normalizeMethodology(m);
      nonATMethods[norm] = (nonATMethods[norm] || 0) + 1;
    }
  }
  
  lines.push('### Methodology Comparison: AT vs Non-AT Studies');
  lines.push('');
  const allMethodKeys = [...new Set([...Object.keys(atMethods), ...Object.keys(nonATMethods)])];
  lines.push('| Methodology | AT Studies | Non-AT Studies | AT % | Non-AT % |');
  lines.push('|-------------|----------:|---------------:|------:|---------:|');
  for (const method of allMethodKeys.sort()) {
    const atCount = atMethods[method] || 0;
    const nonATCount = nonATMethods[method] || 0;
    const atPct = atStudies.length > 0 ? ((atCount / atStudies.length) * 100).toFixed(1) : '0.0';
    const nonATPct = nonATStudies.length > 0 ? ((nonATCount / nonATStudies.length) * 100).toFixed(1) : '0.0';
    lines.push(`| ${method} | ${atCount} | ${nonATCount} | ${atPct}% | ${nonATPct}% |`);
  }
  lines.push('');

  // AT inclusion by product
  lines.push('### AT Inclusion by Product Area');
  lines.push('');
  lines.push('| Product | Total Studies | AT Studies | AT Rate | 95% CI |');
  lines.push('|---------|-------------:|----------:|--------:|--------|');
  for (const [product, studies] of topProducts.slice(0, 15)) {
    const productATStudies = studies.filter(s => hasATParticipants(s)).length;
    const productATRate = studies.length > 0 ? ((productATStudies / studies.length) * 100).toFixed(1) : '0.0';
    const ci = wilsonInterval(productATStudies, studies.length);
    const ciStr = `[${(ci.lower * 100).toFixed(1)}%, ${(ci.upper * 100).toFixed(1)}%]`;
    lines.push(`| ${product} | ${studies.length} | ${productATStudies} | ${productATRate}% | ${ciStr} |`);
  }
  lines.push('');
  
  // AT trend analysis
  if (sortedYears.length >= 3) {
    const atYearRates = sortedYears.map(y => {
      const ys = byYear[y];
      return ys.length > 0 ? ys.filter(s => hasATParticipants(s)).length / ys.length : 0;
    });
    const atTrend = linearRegression(sortedYears.map(Number), atYearRates);
    lines.push(`> **AT inclusion trend:** ${atTrend.slope > 0 ? 'Increasing' : 'Decreasing'} at ${Math.abs(atTrend.slope * 100).toFixed(2)} percentage points per year (R²=${atTrend.rSquared.toFixed(3)}, p=${atTrend.pValue.toFixed(4)}, ${significanceLabel(atTrend.pValue)}). ${atTrend.pValue < 0.05 ? 'This trend is statistically significant.' : 'This trend is not statistically significant at α=0.05.'}`);
    lines.push('');
  }

  // ============================================
  // PAIN POINT RESOLUTION ANALYSIS
  // ============================================
  lines.push('---');
  lines.push('## 📊 Pain Point Resolution Analysis');
  lines.push('');
  lines.push('This section examines whether identified research gaps and pain points have been addressed over time by comparing early-period data (2017-2021) vs. later-period data (2022-2025).');
  lines.push('');
  
  const earlyYears = sortedYears.filter(y => parseInt(y) <= 2021);
  const laterYears = sortedYears.filter(y => parseInt(y) >= 2022);
  
  const earlyStudies = earlyYears.flatMap(y => byYear[y] || []);
  const laterStudies = laterYears.flatMap(y => byYear[y] || []);
  
  if (earlyStudies.length > 0 && laterStudies.length > 0) {
    // Compare AT inclusion rates
    const earlyAT = earlyStudies.filter(s => hasATParticipants(s)).length;
    const laterAT = laterStudies.filter(s => hasATParticipants(s)).length;
    const earlyATRate = earlyAT / earlyStudies.length;
    const laterATRate = laterAT / laterStudies.length;
    
    // Compare demographic completeness
    const earlyWithAge = earlyStudies.filter(s => {
      const age = safeExtractObject(s.demographics?.age);
      return Object.values(age).some(v => v > 0);
    }).length;
    const laterWithAge = laterStudies.filter(s => {
      const age = safeExtractObject(s.demographics?.age);
      return Object.values(age).some(v => v > 0);
    }).length;
    
    const earlyWithRace = earlyStudies.filter(s => {
      const race = safeExtractObject(s.demographics?.race);
      return Object.values(race).some(v => v > 0);
    }).length;
    const laterWithRace = laterStudies.filter(s => {
      const race = safeExtractObject(s.demographics?.race);
      return Object.values(race).some(v => v > 0);
    }).length;

    const earlyWithLocation = earlyStudies.filter(s => {
      const loc = safeExtractObject(s.demographics?.location);
      return Object.values(loc).some(v => v > 0);
    }).length;
    const laterWithLocation = laterStudies.filter(s => {
      const loc = safeExtractObject(s.demographics?.location);
      return Object.values(loc).some(v => v > 0);
    }).length;

    lines.push('### Early Period (2017-2021) vs Later Period (2022-2025)');
    lines.push('');
    lines.push('| Metric | Early (2017-2021) | Later (2022-2025) | Δ Change | Improved? |');
    lines.push('|--------|------------------:|------------------:|---------:|-----------|');
    lines.push(`| Studies | ${earlyStudies.length} | ${laterStudies.length} | +${laterStudies.length - earlyStudies.length} | ${laterStudies.length > earlyStudies.length ? '✅' : '⚠️'} |`);
    lines.push(`| AT inclusion rate | ${(earlyATRate * 100).toFixed(1)}% | ${(laterATRate * 100).toFixed(1)}% | ${((laterATRate - earlyATRate) * 100).toFixed(1)}pp | ${laterATRate > earlyATRate ? '✅' : '🔴'} |`);
    lines.push(`| Age data reported | ${earlyStudies.length > 0 ? ((earlyWithAge / earlyStudies.length) * 100).toFixed(1) : 0}% | ${laterStudies.length > 0 ? ((laterWithAge / laterStudies.length) * 100).toFixed(1) : 0}% | ${(((laterWithAge / laterStudies.length) - (earlyWithAge / earlyStudies.length)) * 100).toFixed(1)}pp | ${(laterWithAge / laterStudies.length) > (earlyWithAge / earlyStudies.length) ? '✅' : '🔴'} |`);
    lines.push(`| Race data reported | ${earlyStudies.length > 0 ? ((earlyWithRace / earlyStudies.length) * 100).toFixed(1) : 0}% | ${laterStudies.length > 0 ? ((laterWithRace / laterStudies.length) * 100).toFixed(1) : 0}% | ${(((laterWithRace / laterStudies.length) - (earlyWithRace / earlyStudies.length)) * 100).toFixed(1)}pp | ${(laterWithRace / laterStudies.length) > (earlyWithRace / earlyStudies.length) ? '✅' : '🔴'} |`);
    lines.push(`| Location data reported | ${earlyStudies.length > 0 ? ((earlyWithLocation / earlyStudies.length) * 100).toFixed(1) : 0}% | ${laterStudies.length > 0 ? ((laterWithLocation / laterStudies.length) * 100).toFixed(1) : 0}% | ${(((laterWithLocation / laterStudies.length) - (earlyWithLocation / earlyStudies.length)) * 100).toFixed(1)}pp | ${(laterWithLocation / laterStudies.length) > (earlyWithLocation / earlyStudies.length) ? '✅' : '🔴'} |`);
    lines.push('');
    
    // Products that have had research in both periods
    lines.push('### Product-Level Pain Point Tracking');
    lines.push('');
    lines.push('Products researched in both time periods, showing whether AT inclusion improved:');
    lines.push('');
    lines.push('| Product | Early Studies | Early AT Rate | Later Studies | Later AT Rate | Δ AT Rate | Status |');
    lines.push('|---------|:-------------|:-------------|:-------------|:-------------|:---------|--------|');
    
    for (const [product, studies] of topProducts) {
      const earlyProd = studies.filter(s => {
        const y = getYearFromDate(s.date);
        return y && y <= 2021;
      });
      const laterProd = studies.filter(s => {
        const y = getYearFromDate(s.date);
        return y && y >= 2022;
      });
      if (earlyProd.length > 0 && laterProd.length > 0) {
        const earlyProdAT = earlyProd.filter(s => hasATParticipants(s)).length;
        const laterProdAT = laterProd.filter(s => hasATParticipants(s)).length;
        const earlyProdATRate = (earlyProdAT / earlyProd.length * 100).toFixed(0);
        const laterProdATRate = (laterProdAT / laterProd.length * 100).toFixed(0);
        const delta = (laterProdAT / laterProd.length - earlyProdAT / earlyProd.length) * 100;
        const status = delta > 0 ? '✅ Improved' : delta === 0 ? '➖ Unchanged' : '🔴 Declined';
        lines.push(`| ${product} | ${earlyProd.length} | ${earlyProdATRate}% | ${laterProd.length} | ${laterProdATRate}% | ${delta > 0 ? '+' : ''}${delta.toFixed(0)}pp | ${status} |`);
      }
    }
    lines.push('');
  }

  // Unresolved systematic issues
  lines.push('### Unresolved Systematic Issues');
  lines.push('');
  
  const unresolvedIssues = [];
  
  // Check AT inclusion
  const overallATRate = aggregated.total_studies > 0 ? aggregated.at_inclusion.studies_with_at / aggregated.total_studies : 0;
  if (overallATRate < 0.5) {
    unresolvedIssues.push({
      issue: 'Low AT inclusion across studies',
      severity: 'High',
      metric: `${(overallATRate * 100).toFixed(1)}% of studies include AT users`,
      target: '≥50% for Section 508 compliance alignment',
    });
  }
  
  // Check demographic completeness
  const ageReportRate = studiesWithAge / allDemographics.length;
  if (ageReportRate < 0.5) {
    unresolvedIssues.push({
      issue: 'Low age demographic reporting',
      severity: 'Medium',
      metric: `${(ageReportRate * 100).toFixed(1)}% of studies report age data`,
      target: '≥80% for comprehensive demographic coverage',
    });
  }
  
  const locationReportRate = studiesWithLocation / allDemographics.length;
  if (locationReportRate < 0.5) {
    unresolvedIssues.push({
      issue: 'Low geographic location reporting',
      severity: 'Medium',
      metric: `${(locationReportRate * 100).toFixed(1)}% of studies report location data`,
      target: '≥80% for rural/urban representation tracking',
    });
  }
  
  if (unresolvedIssues.length > 0) {
    lines.push('| Issue | Severity | Current Metric | Target |');
    lines.push('|-------|----------|---------------|--------|');
    for (const issue of unresolvedIssues) {
      lines.push(`| ${issue.issue} | **${issue.severity}** | ${issue.metric} | ${issue.target} |`);
    }
    lines.push('');
  } else {
    lines.push('All tracked metrics are meeting minimum thresholds.');
    lines.push('');
  }

  // ============================================
  // RUBRIC FOR TRACKING UNADDRESSED PAIN POINTS
  // ============================================
  lines.push('---');
  lines.push('## 📐 Rubric for Tracking Unaddressed Pain Points');
  lines.push('');
  lines.push('This rubric provides a statistically grounded framework for VA.gov product, design, research, and engineering teams to systematically track and manage addressing pain points as a cohesive organization.');
  lines.push('');
  
  lines.push('### Pain Point Severity Classification');
  lines.push('');
  lines.push('| Severity Level | Definition | Response SLA | Tracking Frequency |');
  lines.push('|:---------------|:-----------|:-------------|:-------------------|');
  lines.push('| 🔴 **Critical** (P0) | Blocks task completion for >25% of tested users OR any AT user unable to complete core task | Fix within current sprint | Weekly review |');
  lines.push('| 🟠 **High** (P1) | Causes significant confusion/delay for >15% of tested users; identified in ≥3 studies | Fix within current quarter | Bi-weekly review |');
  lines.push('| 🟡 **Medium** (P2) | Causes moderate friction for 5-15% of tested users; identified in 2 studies | Schedule for next quarter | Monthly review |');
  lines.push('| 🟢 **Low** (P3) | Minor usability issue affecting <5% of tested users; identified in 1 study | Backlog with annual review | Quarterly review |');
  lines.push('');

  lines.push('### Statistical Thresholds for Escalation');
  lines.push('');
  lines.push('The following statistical criteria should trigger escalation of a pain point:');
  lines.push('');
  lines.push('1. **Recurrence Test:** If a pain point appears in ≥3 independent studies across ≥2 different products, escalate by one severity level.');
  lines.push(`   - *Rationale:* Under a binomial model with baseline probability p=0.05 per study and n=${allDemographics.length} studies, P(X≥3) = 1 − Σ(k=0..2) C(n,k)·p^k·(1−p)^(n−k) < 0.001, indicating the recurrence is unlikely due to chance.`);
  lines.push('2. **AT Disparity Test:** If the pain point affects AT users at a rate ≥2x that of non-AT users (using Fisher\'s exact test, α=0.05), classify as Critical regardless of overall frequency.');
  lines.push('3. **Trend Persistence Test:** If linear regression of the pain point frequency over time shows no significant decrease (p≥0.10 for negative slope), the issue is classified as "unresolved."');
  lines.push('4. **Population Impact Threshold:** Apply Wilson score intervals (95% CI) to estimate true population impact. If the lower bound of the CI exceeds 10%, escalate by one severity level.');
  lines.push('');

  lines.push('### Organizational Tracking Framework');
  lines.push('');
  lines.push('```');
  lines.push('┌─────────────────────────────────────────────────────────────────┐');
  lines.push('│                  PAIN POINT LIFECYCLE MANAGEMENT                │');
  lines.push('├─────────────────────────────────────────────────────────────────┤');
  lines.push('│                                                                 │');
  lines.push('│  1. IDENTIFICATION (Research Team)                              │');
  lines.push('│     ├─ Extract from key_findings in YAML frontmatter            │');
  lines.push('│     ├─ Classify severity using rubric above                     │');
  lines.push('│     ├─ Tag with product area, user type (AT/non-AT)             │');
  lines.push('│     └─ Compute confidence interval for impact rate              │');
  lines.push('│                                                                 │');
  lines.push('│  2. TRIAGE (Product + Design)                                   │');
  lines.push('│     ├─ Cross-reference against existing backlog                 │');
  lines.push('│     ├─ Apply recurrence test: check for prior occurrences       │');
  lines.push('│     ├─ Assign owner and target resolution quarter               │');
  lines.push('│     └─ Add to organizational pain point registry                │');
  lines.push('│                                                                 │');
  lines.push('│  3. RESOLUTION (Engineering + Design)                           │');
  lines.push('│     ├─ Implement fix with measurable success criteria           │');
  lines.push('│     ├─ Define validation study requirements                     │');
  lines.push('│     └─ Schedule follow-up research to confirm resolution        │');
  lines.push('│                                                                 │');
  lines.push('│  4. VALIDATION (Research Team)                                  │');
  lines.push('│     ├─ Conduct follow-up study with comparable sample           │');
  lines.push('│     ├─ Apply proportional z-test: compare pre/post rates        │');
  lines.push('│     ├─ Require p<0.05 AND ≥50% reduction for "Resolved"        │');
  lines.push('│     └─ If not resolved, re-enter lifecycle at Step 2            │');
  lines.push('│                                                                 │');
  lines.push('│  5. MONITORING (All Teams - Quarterly)                          │');
  lines.push('│     ├─ Run automated extraction from YAML frontmatter           │');
  lines.push('│     ├─ Generate trend analysis with regression tests            │');
  lines.push('│     ├─ Flag any metric with negative or flat trend              │');
  lines.push('│     └─ Report to leadership with statistical summary            │');
  lines.push('│                                                                 │');
  lines.push('└─────────────────────────────────────────────────────────────────┘');
  lines.push('```');
  lines.push('');

  lines.push('### Key Performance Indicators (KPIs) for Pain Point Management');
  lines.push('');
  lines.push('| KPI | Current Value | Target | Measurement Method |');
  lines.push('|-----|:-------------|:-------|:-------------------|');
  lines.push(`| AT inclusion rate | ${(overallATRate * 100).toFixed(1)}% | ≥50% | Wilson CI on quarterly data |`);
  lines.push(`| Demographic completeness | ${((studiesWithAge / allDemographics.length) * 100).toFixed(1)}% (age) | ≥80% all fields | Proportion test per field |`);
  lines.push(`| Research volume trend | ${yearStudyCounts.length > 0 ? yearStudyCounts[yearStudyCounts.length - 1] : 0} studies/year | Maintain or increase | OLS regression on annual counts |`);
  lines.push(`| Methodology diversity (HHI) | ${hhi.toFixed(3)} | <0.15 | Herfindahl-Hirschman Index |`);
  lines.push(`| Rural representation | ${knownLocation > 0 ? ((aggregated.location.rural / knownLocation) * 100).toFixed(1) : 'N/A'}% | ≥25% | Proportional z-test vs 25% benchmark |`);
  lines.push(`| Pain point resolution rate | Track quarterly | ≥75% within SLA | Count resolved / total by SLA |`);
  lines.push('');

  lines.push('### Recommended Quarterly Review Process');
  lines.push('');
  lines.push('1. **Data Collection:** Run `node .github/scripts/run-historical-report.js` to generate updated metrics');
  lines.push('2. **Trend Analysis:** Compare current quarter KPIs against prior quarter using proportional z-tests');
  lines.push('3. **Gap Identification:** Flag any KPI below target with >95% confidence (Wilson CI lower bound below target)');
  lines.push('4. **Action Planning:** For each flagged KPI, assign responsible team and create OKR-aligned action items');
  lines.push('5. **Cross-Team Review:** Present findings at Team of Teams meeting for organizational alignment');
  lines.push('6. **Documentation:** Update pain point registry and archive quarterly report');
  lines.push('');

  // ============================================
  // STATISTICAL METHODOLOGY NOTES
  // ============================================
  lines.push('---');
  lines.push('## 📏 Statistical Methodology Notes');
  lines.push('');
  lines.push('All statistical analyses in this report use the following methods:');
  lines.push('');
  lines.push('| Method | Purpose | Application |');
  lines.push('|--------|---------|-------------|');
  lines.push('| **Wilson Score Interval** | 95% confidence intervals for proportions | All percentage-based metrics; preferred over Wald intervals for small samples and extreme proportions |');
  lines.push('| **Proportional z-test** | Compare observed proportion to known benchmark | Rural representation (vs 25%), AT inclusion (vs target), participant type distribution |');
  lines.push('| **OLS Linear Regression** | Detect year-over-year trends | Research volume, AT inclusion rate, methodology trends; t-test on slope for significance |');
  lines.push('| **Chi-square Goodness-of-Fit** | Test uniformity of categorical distributions | Demographic completeness across fields |');
  lines.push('| **Herfindahl-Hirschman Index** | Measure concentration/diversity | Methodology portfolio diversity; lower values indicate better diversification |');
  lines.push('| **Cramér\'s V** | Effect size for categorical associations | When chi-square tests are significant, quantifies strength of the relationship |');
  lines.push('');
  lines.push('### Significance Levels');
  lines.push('');
  lines.push('- \\*\\*\\* p < 0.001 (highly significant)');
  lines.push('- \\*\\* p < 0.01 (very significant)');
  lines.push('- \\* p < 0.05 (significant)');
  lines.push('- ns = not significant (p ≥ 0.05)');
  lines.push('');
  lines.push('### Limitations');
  lines.push('');
  lines.push('1. **Self-reported frontmatter data:** All data comes from researcher-completed YAML frontmatter. Data quality depends on completeness and accuracy of researcher input.');
  lines.push(`2. **Missing data:** Of ${aggregated.total_studies} total studies, demographic completeness varies by field (see Gap Analysis). Missing data is excluded from proportion calculations rather than imputed.`);
  lines.push('3. **Selection bias:** Only studies with valid frontmatter are included. Studies without frontmatter (especially older ones) may systematically differ from included studies.');
  lines.push('4. **Multiple comparisons:** This report conducts multiple statistical tests. Individual p-values should be interpreted cautiously; patterns across multiple tests are more reliable than single test results.');
  lines.push('5. **Ecological inference:** Aggregate trends across products do not necessarily apply to individual products. Product-level analysis should be conducted separately when making product-specific decisions.');
  lines.push('');

  // ============================================
  // STUDIES APPENDIX
  // ============================================
  lines.push('---');
  lines.push('## 📋 Appendix: Studies Included');
  lines.push('');
  lines.push(`<details>`);
  lines.push(`<summary>View all ${allDemographics.length} studies</summary>`);
  lines.push('');
  lines.push('| Study | Date | Year | Product | Participants | AT? |');
  lines.push('|-------|------|------|---------|-------------:|-----|');
  
  const sortedStudies = [...allDemographics].sort((a, b) => {
    if (!a.date_parsed && !b.date_parsed) return 0;
    if (!a.date_parsed) return 1;
    if (!b.date_parsed) return -1;
    return b.date_parsed - a.date_parsed;
  });

  for (const study of sortedStudies) {
    const dateStr = study.date_formatted || 'N/A';
    const year = getYearFromDate(study.date) || 'N/A';
    const title = study.title.length > 45 ? study.title.substring(0, 42) + '...' : study.title;
    const product = (study.product || 'unknown').length > 25 ? study.product.substring(0, 22) + '...' : (study.product || 'unknown');
    const hasAT = hasATParticipants(study) ? '♿ Yes' : 'No';
    lines.push(`| [${title}](${study.file_url}) | ${dateStr} | ${year} | ${product} | ${study.participants_total} | ${hasAT} |`);
  }
  lines.push('');
  lines.push('</details>');
  lines.push('');

  // Footer
  lines.push('---');
  lines.push(`_Historical report generated from ${aggregated.total_studies} research findings spanning 2017-2025_`);
  lines.push(`_${aggregated.total_participants} total participants across ${Object.keys(byYear).length} years_`);
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
          methodology: frontMatter.methodology || [],
          key_findings: frontMatter.key_findings || [],
          recommendations: frontMatter.recommendations || [],
          underserved_groups_missing: frontMatter.underserved_groups_missing || []
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

  // Write files to the reports directory
  const outputDir = path.join(process.cwd(), 'reports', 'quarterly-reports', 'participant-data', 'historical-reports');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const summaryPath = path.join(outputDir, 'historical-participant-data-report-2017-2025.md');
  const jsonPath = path.join(outputDir, 'historical-participant-data-2017-2025.json');
  
  fs.writeFileSync(summaryPath, summary);
  fs.writeFileSync(jsonPath, JSON.stringify(aggregated, null, 2));

  console.log('Historical report generated successfully!');
  console.log(`Output directory: ${outputDir}`);
  console.log(`Total studies: ${allDemographics.length}`);
  console.log(`Total participants: ${aggregated.total_participants}`);
  console.log(`Years covered: ${Object.keys(byYear).join(', ')}`);

  return { aggregated, byYear };
}

module.exports = { run };
