#!/usr/bin/env node
/**
 * Extract lightweight findings from research YAML frontmatter.
 *
 * Reads the knowledge graph to find research studies with findings files,
 * parses YAML frontmatter from each, and extracts key_findings, themes
 * (from tags), and impact (from outcomes).
 *
 * Outputs
 * -------
 *   scripts/research-findings-data.json   – all extracted findings
 *   scripts/sample-findings-output.json   – 10 sample extractions with source YAML
 *
 * Usage
 * -----
 *   node scripts/extract-research-findings.js
 */

"use strict";

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// ─── configuration ───────────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname, "..");
const KG_PATH = path.join(ROOT, ".github", "knowledge-graph.json");
const OUTPUT_PATH = path.join(ROOT, "scripts", "research-findings-data.json");
const SAMPLE_OUTPUT_PATH = path.join(ROOT, "scripts", "sample-findings-output.json");

// Character limits for extracted fields
const LIMITS = {
  key_themes: 60,
  top_finding: 120,
  impact: 80
};

// Number of sample extractions to include in sample output
const SAMPLE_COUNT = 10;

// Tags with these prefixes are category markers, not thematic content
const TAG_CATEGORY_PREFIXES = [
  "AUD:", "BNFT:", "PRDT:", "DSC:", "DSP:", "HDW:", "VETJNY:", "RESRCH:", "MHV:"
];

// ─── helpers ─────────────────────────────────────────────────────────────────

/**
 * Check whether a tag is a meaningful theme (not a category prefix or placeholder).
 * @param {string} tag
 * @returns {boolean}
 */
function isMeaningfulTag(tag) {
  if (!tag || typeof tag !== "string") return false;
  var trimmed = tag.trim();
  if (!trimmed) return false;
  // Skip category-prefixed tags
  for (var i = 0; i < TAG_CATEGORY_PREFIXES.length; i++) {
    if (trimmed.toUpperCase().startsWith(TAG_CATEGORY_PREFIXES[i].toUpperCase())) return false;
  }
  // Skip placeholder tags
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) return false;
  return true;
}

/**
 * Truncate a string to the given limit, adding "…" if truncated.
 * @param {string} str
 * @param {number} limit
 * @returns {string}
 */
function truncate(str, limit) {
  if (!str || typeof str !== "string") return "";
  var trimmed = str.trim();
  if (trimmed.length <= limit) return trimmed;
  return trimmed.substring(0, limit - 1) + "…";
}

/**
 * Extract lightweight findings from parsed YAML frontmatter.
 * @param {Object} frontmatter - Parsed YAML frontmatter object
 * @returns {Object} - { key_themes, top_finding, impact } (any field may be null)
 */
function extractFromFrontmatter(frontmatter) {
  var findings = {};

  // ── Key Themes: from tags array (filtered for meaningful tags) ──────────
  if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
    var themes = frontmatter.tags.filter(isMeaningfulTag);
    if (themes.length > 0) {
      findings.key_themes = truncate(themes.join(", "), LIMITS.key_themes);
    }
  }

  // ── Also support explicit themes field if present ──────────────────────
  if (!findings.key_themes && frontmatter.themes) {
    var themesArray = Array.isArray(frontmatter.themes)
      ? frontmatter.themes
      : String(frontmatter.themes).split(",").map(function (t) { return t.trim(); });
    if (themesArray.length > 0) {
      findings.key_themes = truncate(themesArray.join(", "), LIMITS.key_themes);
    }
  }

  // ── Top Finding: first key_finding ─────────────────────────────────────
  if (frontmatter.key_findings && Array.isArray(frontmatter.key_findings) && frontmatter.key_findings.length > 0) {
    var first = frontmatter.key_findings[0];
    if (first && typeof first === "string") {
      // Clean up multi-line findings: collapse whitespace
      var cleaned = first.replace(/\s+/g, " ").trim();
      // Skip placeholder findings
      if (cleaned && !cleaned.match(/^Finding \d+$/i)) {
        findings.top_finding = truncate(cleaned, LIMITS.top_finding);
      }
    }
  }

  // ── Impact: from outcomes.user or explicit impact field ────────────────
  if (frontmatter.impact && typeof frontmatter.impact === "string") {
    var impact = frontmatter.impact.trim();
    if (impact) {
      findings.impact = truncate(impact, LIMITS.impact);
    }
  } else if (frontmatter.outcomes && typeof frontmatter.outcomes === "object") {
    var userOutcome = frontmatter.outcomes.user;
    if (userOutcome && typeof userOutcome === "string") {
      var trimmedOutcome = userOutcome.trim();
      // Skip placeholder outcomes
      if (trimmedOutcome && !trimmedOutcome.match(/^(Not specified|Desired user outcome)/i)) {
        findings.impact = truncate(trimmedOutcome, LIMITS.impact);
      }
    }
  }

  return findings;
}

/**
 * Read a file and parse its YAML frontmatter.
 * @param {string} filePath - Absolute or relative path to the file
 * @returns {{ frontmatter: Object|null, error: string|null }}
 */
function parseFrontmatter(filePath) {
  try {
    var content = fs.readFileSync(filePath, "utf8");
    var parsed = matter(content);
    if (parsed.data && typeof parsed.data === "object" && Object.keys(parsed.data).length > 0) {
      return { frontmatter: parsed.data, error: null };
    }
    return { frontmatter: null, error: "no frontmatter found" };
  } catch (err) {
    return { frontmatter: null, error: err.message };
  }
}

// ─── main ────────────────────────────────────────────────────────────────────

function main() {
  console.log("Extracting research findings from YAML frontmatter...\n");

  // Load knowledge graph
  if (!fs.existsSync(KG_PATH)) {
    console.error("ERROR: " + KG_PATH + " not found.");
    console.error("Run  node scripts/build-knowledge-graph.js  first.");
    process.exit(1);
  }
  var kg = JSON.parse(fs.readFileSync(KG_PATH, "utf8"));
  var studies = kg.nodes.filter(function (n) { return n.type === "research_study"; });
  console.log("  Total studies in knowledge graph: " + studies.length);

  // Statistics tracking
  var stats = {
    total: studies.length,
    with_findings_file: 0,
    file_exists: 0,
    with_frontmatter: 0,
    extracted: 0,
    missing_frontmatter: 0,
    file_not_found: 0,
    parse_errors: 0,
    fields: { key_themes: 0, top_finding: 0, impact: 0 }
  };

  var results = {};
  var samples = [];
  var warnings = [];

  for (var i = 0; i < studies.length; i++) {
    var study = studies[i];
    var studyPath = study.path;
    if (!studyPath) continue;

    // Check if study has a findings file in the knowledge graph
    if (!study.files || !study.files.findings) continue;
    stats.with_findings_file++;

    var findingsFile = Array.isArray(study.files.findings) ? study.files.findings[0] : study.files.findings;
    var fullPath = path.join(ROOT, findingsFile);

    if (!fs.existsSync(fullPath)) {
      stats.file_not_found++;
      continue;
    }
    stats.file_exists++;

    // Parse frontmatter
    var result = parseFrontmatter(fullPath);
    if (result.error || !result.frontmatter) {
      if (result.error === "no frontmatter found") {
        stats.missing_frontmatter++;
      } else {
        stats.parse_errors++;
        warnings.push("Parse error in " + findingsFile + ": " + result.error);
      }
      continue;
    }
    stats.with_frontmatter++;

    // Extract findings
    var findings = extractFromFrontmatter(result.frontmatter);

    // Check if we extracted anything useful
    var hasContent = findings.key_themes || findings.top_finding || findings.impact;
    if (!hasContent) continue;
    stats.extracted++;

    // Track field statistics
    if (findings.key_themes) stats.fields.key_themes++;
    if (findings.top_finding) stats.fields.top_finding++;
    if (findings.impact) stats.fields.impact++;

    // Validate character limits
    if (findings.key_themes && findings.key_themes.length > LIMITS.key_themes) {
      warnings.push("key_themes exceeds " + LIMITS.key_themes + " chars in " + studyPath);
    }
    if (findings.top_finding && findings.top_finding.length > LIMITS.top_finding) {
      warnings.push("top_finding exceeds " + LIMITS.top_finding + " chars in " + studyPath);
    }
    if (findings.impact && findings.impact.length > LIMITS.impact) {
      warnings.push("impact exceeds " + LIMITS.impact + " chars in " + studyPath);
    }

    // Normalize study path (remove leading/trailing slashes)
    var normalizedPath = studyPath.replace(/^\/+|\/+$/g, "");

    results[normalizedPath] = {
      key_themes: findings.key_themes || null,
      top_finding: findings.top_finding || null,
      impact: findings.impact || null,
      source_file: findingsFile,
      extraction_method: "yaml-frontmatter"
    };

    // Collect samples (with source YAML for review)
    if (samples.length < SAMPLE_COUNT) {
      var sampleFrontmatter = {};
      var fm = result.frontmatter;
      if (fm.key_findings) sampleFrontmatter.key_findings = fm.key_findings;
      if (fm.themes) sampleFrontmatter.themes = fm.themes;
      if (fm.tags) sampleFrontmatter.tags = fm.tags.filter(isMeaningfulTag);
      if (fm.impact) sampleFrontmatter.impact = fm.impact;
      if (fm.outcomes) sampleFrontmatter.outcomes = fm.outcomes;

      samples.push({
        study_path: normalizedPath,
        study_name: study.name || path.basename(studyPath),
        source_file: findingsFile,
        source_frontmatter: sampleFrontmatter,
        extracted: results[normalizedPath]
      });
    }
  }

  // ── Build output ─────────────────────────────────────────────────────────
  var output = {
    metadata: {
      generated: new Date().toISOString(),
      studies_processed: stats.total,
      studies_with_findings_files: stats.with_findings_file,
      studies_files_found: stats.file_exists,
      studies_with_frontmatter: stats.with_frontmatter,
      studies_extracted_from_frontmatter: stats.extracted,
      studies_missing_frontmatter: stats.missing_frontmatter,
      extraction_method: "yaml-frontmatter"
    },
    studies: results
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf8");
  console.log("  ✓ " + path.relative(ROOT, OUTPUT_PATH));

  // ── Write sample output ──────────────────────────────────────────────────
  var sampleOutput = {
    description: "Sample extractions with source YAML for manual review",
    generated: new Date().toISOString(),
    sample_count: samples.length,
    samples: samples
  };

  fs.writeFileSync(SAMPLE_OUTPUT_PATH, JSON.stringify(sampleOutput, null, 2), "utf8");
  console.log("  ✓ " + path.relative(ROOT, SAMPLE_OUTPUT_PATH));

  // ── Report ───────────────────────────────────────────────────────────────
  console.log("\nFindings Extraction Report:");
  console.log("===========================");
  console.log("Total studies in knowledge graph: " + stats.total);
  console.log("Studies with findings files:      " + stats.with_findings_file);
  console.log("Findings files found on disk:     " + stats.file_exists);
  console.log("Files with YAML frontmatter:      " + stats.with_frontmatter);
  console.log("Successfully extracted:           " + stats.extracted);
  console.log("Missing frontmatter:              " + stats.missing_frontmatter);
  console.log("Parse errors:                     " + stats.parse_errors);
  console.log("File not found:                   " + stats.file_not_found);
  if (stats.file_exists > 0) {
    console.log("Coverage: " + Math.round(100 * stats.extracted / stats.file_exists) + "% of existing findings files");
  }
  console.log("");
  console.log("Frontmatter fields found:");
  console.log("  key_themes (from tags):  " + stats.fields.key_themes + "/" + stats.extracted);
  console.log("  top_finding:             " + stats.fields.top_finding + "/" + stats.extracted);
  console.log("  impact (from outcomes):  " + stats.fields.impact + "/" + stats.extracted);

  if (warnings.length > 0) {
    console.log("\nWarnings (" + warnings.length + "):");
    warnings.forEach(function (w) { console.log("  ⚠ " + w); });
  } else {
    console.log("\nCharacter limit violations: 0");
  }

  console.log("\nSample extractions (" + samples.length + "):");
  samples.forEach(function (s) {
    console.log("  ✓ " + s.study_path);
  });

  console.log("\nDone.");
}

main();
