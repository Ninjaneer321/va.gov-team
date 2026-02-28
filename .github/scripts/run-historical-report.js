#!/usr/bin/env node

// Standalone runner for historical participant data report
// This script can be run directly without GitHub Actions

const { run } = require('./historical-participant-data-report.js');
const { glob } = require('glob');

// Mock core object for standalone execution
const mockCore = {
  setOutput: (name, value) => {
    console.log(`Output: ${name} =`, typeof value === 'string' && value.length > 100 ? `${value.substring(0, 100)}...` : value);
  }
};

// Mock glob module interface
const globModule = {
  glob: async (pattern, options) => {
    return await glob(pattern, options);
  }
};

console.log('='.repeat(60));
console.log('Historical Participant Data Report Generator');
console.log('Period: 2017 - 2025');
console.log('='.repeat(60));
console.log('');

run({ globModule, core: mockCore })
  .then((result) => {
    console.log('');
    console.log('='.repeat(60));
    console.log('✅ Report generation completed successfully!');
    console.log('='.repeat(60));
    console.log('');
    console.log('Generated files:');
    console.log('  - reports/quarterly-reports/participant-data/historical-reports/historical-participant-data-report-2017-2025.md');
    console.log('  - reports/quarterly-reports/participant-data/historical-reports/historical-participant-data-2017-2025.json');
    console.log('');
    process.exit(0);
  })
  .catch((error) => {
    console.error('');
    console.error('='.repeat(60));
    console.error('❌ Report generation failed!');
    console.error('='.repeat(60));
    console.error('');
    console.error('Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  });
