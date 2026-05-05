#!/usr/bin/env node
/**
 * Aggregate Copilot Chat Research Testing Feedback
 *
 * Reads all GitHub issues with label "copilot-research-testing"
 * and generates an analysis report.
 *
 * Usage: node scripts/aggregate-copilot-feedback.js
 *
 * Requires: GITHUB_TOKEN environment variable
 */

"use strict";

const fs = require("fs");
const path = require("path");

async function fetchFeedbackIssues() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error("Error: GITHUB_TOKEN environment variable required");
    process.exit(1);
  }

  console.log("Fetching feedback issues from GitHub...\n");

  const response = await fetch(
    "https://api.github.com/repos/department-of-veterans-affairs/va.gov-team/issues?labels=copilot-research-testing&state=all&per_page=100",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const issues = await response.json();
  return issues;
}

function parseIssueBody(body) {
  const feedback = {
    tester_name: null,
    tester_team: null,
    date_tested: null,
    copilot_model: null,
    test1_rating: null,
    test1_worked_well: null,
    test1_improve: null,
    test2_rating: null,
    test2_worked_well: null,
    test2_improve: null,
    test3_rating: null,
    test3_warning: null,
    test3_worked_well: null,
    test3_improve: null,
    most_useful: null,
    least_useful: null,
    missing_features: null,
    would_use: null,
    workflow_impact: null,
    other_comments: null,
  };

  if (!body) return feedback;

  // Extract tester name (after "**Your name:**")
  const nameMatch = body.match(/\*\*Your name:\*\*\s*(.+)/);
  if (nameMatch) feedback.tester_name = nameMatch[1].trim();

  // Extract team
  const teamMatch = body.match(/\*\*Your team\/portfolio:\*\*\s*(.+)/);
  if (teamMatch) feedback.tester_team = teamMatch[1].trim();

  // Extract date
  const dateMatch = body.match(/\*\*Date tested:\*\*\s*(.+)/);
  if (dateMatch) feedback.date_tested = dateMatch[1].trim();

  // Extract model (look for checked box)
  if (/- \[x\] Claude Sonnet/i.test(body)) {
    feedback.copilot_model = "Claude Sonnet";
  } else if (/- \[x\] GPT-4o/i.test(body)) {
    feedback.copilot_model = "GPT-4o";
  } else if (/- \[x\] GPT-5\.2/i.test(body)) {
    feedback.copilot_model = "GPT-5.2";
  }

  // Extract ratings (count stars in checked boxes)
  const ratingMatches = body.matchAll(/- \[x\] (⭐+)/gi);
  const ratings = Array.from(ratingMatches, (m) => m[1].length);

  if (ratings[0]) feedback.test1_rating = ratings[0];
  if (ratings[1]) feedback.test2_rating = ratings[1];
  if (ratings[2]) feedback.test3_rating = ratings[2];

  // Extract deep research warning
  if (/- \[x\] Yes - Copilot warned me before starting/i.test(body)) {
    feedback.test3_warning = "Yes";
  } else if (/- \[x\] No - It just started without warning/i.test(body)) {
    feedback.test3_warning = "No";
  } else if (/- \[x\] Not applicable/i.test(body)) {
    feedback.test3_warning = "N/A";
  }

  // Extract "would use" (look for checked box)
  if (/- \[x\] Yes - I would use this regularly/i.test(body)) {
    feedback.would_use = "Yes";
  } else if (/- \[x\] Maybe - I would use it occasionally/i.test(body)) {
    feedback.would_use = "Maybe";
  } else if (/- \[x\] No - I wouldn't use this/i.test(body)) {
    feedback.would_use = "No";
  }

  // Extract text sections (basic pattern matching)
  const sections = {
    test1_worked_well:
      /## Test 1:[\s\S]*?### What worked well\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n### What could improve/,
    test1_improve:
      /## Test 1:[\s\S]*?### What could improve\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n---/,
    test2_worked_well:
      /## Test 2:[\s\S]*?### What worked well\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n### What could improve/,
    test2_improve:
      /## Test 2:[\s\S]*?### What could improve\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n---/,
    test3_worked_well:
      /## Test 3:[\s\S]*?### What worked well\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n### What could improve/,
    test3_improve:
      /## Test 3:[\s\S]*?### What could improve\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n---/,
    most_useful:
      /### Most useful feature\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n### Least useful/,
    least_useful:
      /### Least useful feature\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n### Missing features/,
    missing_features:
      /### Missing features or capabilities\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n### Would you use/,
    workflow_impact:
      /### How would this change your research workflow\?\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n### Other comments/,
    other_comments:
      /### Other comments\s*<!--.*?-->\s*\n\n([\s\S]*?)\n\n---/,
  };

  for (const [key, pattern] of Object.entries(sections)) {
    const match = body.match(pattern);
    if (match) {
      const text = match[1].trim();
      if (text && text !== "") {
        feedback[key] = text;
      }
    }
  }

  return feedback;
}

function calculateAverage(arr) {
  const validNumbers = arr.filter((n) => n && !isNaN(n));
  if (validNumbers.length === 0) return 0;
  return validNumbers.reduce((sum, n) => sum + n, 0) / validNumbers.length;
}

function generateAnalysisReport(issues) {
  console.log("Generating analysis report...\n");

  const feedbackData = issues.map((issue) => ({
    issue_number: issue.number,
    issue_url: issue.html_url,
    created_at: issue.created_at,
    ...parseIssueBody(issue.body),
  }));

  // Calculate statistics
  const stats = {
    total_responses: feedbackData.length,
    avg_test1_rating: calculateAverage(
      feedbackData.map((f) => f.test1_rating)
    ),
    avg_test2_rating: calculateAverage(
      feedbackData.map((f) => f.test2_rating)
    ),
    avg_test3_rating: calculateAverage(
      feedbackData.map((f) => f.test3_rating)
    ),
    would_use_yes: feedbackData.filter((f) => f.would_use === "Yes").length,
    would_use_maybe: feedbackData.filter((f) => f.would_use === "Maybe").length,
    would_use_no: feedbackData.filter((f) => f.would_use === "No").length,
    test3_warning_yes: feedbackData.filter((f) => f.test3_warning === "Yes")
      .length,
    test3_warning_no: feedbackData.filter((f) => f.test3_warning === "No")
      .length,
    models_used: {},
  };

  // Count models
  feedbackData.forEach((f) => {
    if (f.copilot_model) {
      stats.models_used[f.copilot_model] =
        (stats.models_used[f.copilot_model] || 0) + 1;
    }
  });

  // Generate report
  let report = `# Copilot Chat Research System: Feedback Analysis\n\n`;
  report += `**Generated:** ${new Date().toISOString()}\n\n`;
  report += `---\n\n`;

  // Quantitative summary
  report += `## Quantitative Summary\n\n`;
  report += `**Total responses:** ${stats.total_responses}\n\n`;

  report += `### Quality Ratings (1-5 stars)\n\n`;
  report += `| Test Type | Average Rating | Target | Pass/Fail |\n`;
  report += `|-----------|----------------|--------|----------|\n`;
  report += `| Quick lookup (Ask mode) | ${stats.avg_test1_rating.toFixed(1)}/5 | > 4.0 | ${stats.avg_test1_rating >= 4.0 ? "✅" : "❌"} |\n`;
  report += `| Thematic browse (Ask mode) | ${stats.avg_test2_rating.toFixed(1)}/5 | > 4.0 | ${stats.avg_test2_rating >= 4.0 ? "✅" : "❌"} |\n`;
  report += `| Deep analysis (Agent mode) | ${stats.avg_test3_rating.toFixed(1)}/5 | > 4.0 | ${stats.avg_test3_rating >= 4.0 ? "✅" : "❌"} |\n`;
  const overallAvg =
    (stats.avg_test1_rating + stats.avg_test2_rating + stats.avg_test3_rating) /
    3;
  report += `| **Overall** | **${overallAvg.toFixed(1)}/5** | **> 4.0** | **${overallAvg >= 4.0 ? "✅" : "❌"}** |\n\n`;

  report += `### Adoption Intent\n\n`;
  const adoptionPercent =
    stats.total_responses > 0
      ? ((stats.would_use_yes / stats.total_responses) * 100).toFixed(0)
      : 0;
  report += `- **Would use regularly:** ${stats.would_use_yes} (${adoptionPercent}%)\n`;
  report += `- **Would maybe use:** ${stats.would_use_maybe}\n`;
  report += `- **Would not use:** ${stats.would_use_no}\n\n`;
  report += `**Target:** > 70% "would use regularly" - ${adoptionPercent >= 70 ? "✅ PASS" : "❌ NEEDS IMPROVEMENT"}\n\n`;

  report += `### Deep Research Warning Triggered\n\n`;
  report += `- **Yes (warned before starting):** ${stats.test3_warning_yes}\n`;
  report += `- **No (started without warning):** ${stats.test3_warning_no}\n\n`;

  report += `### Models Used\n\n`;
  for (const [model, count] of Object.entries(stats.models_used)) {
    report += `- ${model}: ${count}\n`;
  }
  report += `\n`;

  report += `---\n\n`;

  // Individual feedback
  report += `## Individual Feedback\n\n`;

  feedbackData.forEach((f, i) => {
    report += `### Tester ${i + 1}: ${f.tester_name || "Anonymous"}\n\n`;
    report += `- **Team:** ${f.tester_team || "Not specified"}\n`;
    report += `- **Date:** ${f.date_tested || "Not specified"}\n`;
    report += `- **Model:** ${f.copilot_model || "Not specified"}\n`;
    report += `- **Issue:** [#${f.issue_number}](${f.issue_url})\n\n`;

    report += `**Ratings:**\n`;
    report += `- Quick lookup: ${f.test1_rating || "N/A"}/5\n`;
    report += `- Thematic browse: ${f.test2_rating || "N/A"}/5\n`;
    report += `- Deep analysis: ${f.test3_rating || "N/A"}/5\n\n`;

    report += `**Would use regularly:** ${f.would_use || "Not specified"}\n\n`;

    if (f.most_useful) {
      report += `**Most useful:** ${f.most_useful}\n\n`;
    }

    if (f.workflow_impact) {
      report += `**Workflow impact:** ${f.workflow_impact}\n\n`;
    }

    report += `---\n\n`;
  });

  // Qualitative themes
  report += `## Qualitative Themes\n\n`;

  report += `### What Worked Well\n\n`;
  feedbackData.forEach((f, i) => {
    if (f.test1_worked_well)
      report += `- **Tester ${i + 1} (Quick lookup):** ${f.test1_worked_well}\n`;
    if (f.test2_worked_well)
      report += `- **Tester ${i + 1} (Thematic browse):** ${f.test2_worked_well}\n`;
    if (f.test3_worked_well)
      report += `- **Tester ${i + 1} (Deep analysis):** ${f.test3_worked_well}\n`;
  });
  report += `\n`;

  report += `### What Could Improve\n\n`;
  feedbackData.forEach((f, i) => {
    if (f.test1_improve)
      report += `- **Tester ${i + 1} (Quick lookup):** ${f.test1_improve}\n`;
    if (f.test2_improve)
      report += `- **Tester ${i + 1} (Thematic browse):** ${f.test2_improve}\n`;
    if (f.test3_improve)
      report += `- **Tester ${i + 1} (Deep analysis):** ${f.test3_improve}\n`;
  });
  report += `\n`;

  report += `### Missing Features\n\n`;
  feedbackData.forEach((f, i) => {
    if (f.missing_features)
      report += `- **Tester ${i + 1}:** ${f.missing_features}\n`;
  });
  report += `\n`;

  report += `---\n\n`;

  // Raw data
  report += `## Raw Data\n\n`;
  report += `\`\`\`json\n`;
  report += JSON.stringify(feedbackData, null, 2);
  report += `\n\`\`\`\n`;

  return report;
}

async function main() {
  console.log("Copilot Chat Research Feedback Aggregation");
  console.log("===========================================\n");

  try {
    const issues = await fetchFeedbackIssues();

    console.log(`Found ${issues.length} feedback issues\n`);

    if (issues.length === 0) {
      console.log(
        "No feedback issues found yet. Testers should submit feedback using:"
      );
      console.log(
        "https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=copilot-chat-research-feedback.md\n"
      );
      return;
    }

    const report = generateAnalysisReport(issues);

    // Write report
    const outputPath = path.join(__dirname, "copilot-chat-research-analysis.md");
    fs.writeFileSync(outputPath, report, "utf-8");

    console.log(`✓ Analysis report generated: ${outputPath}\n`);
    console.log("Summary:");
    console.log(`- Total responses: ${issues.length}`);
    console.log("- Report ready for review");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
