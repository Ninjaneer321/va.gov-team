#!/usr/bin/env node
/**
 * Extract lightweight findings from research YAML frontmatter.
 *
 * Uses a three-tier extraction strategy for topical themes:
 *   Tier 1: LLM extraction via GitHub Models API (best quality)
 *   Tier 2: Keyword matching against predefined theme keywords (fallback)
 *   Tier 3: Filtered themes from existing tags/themes fields (last resort)
 *
 * Reads the knowledge graph to find research studies with findings files,
 * parses YAML frontmatter from each, and extracts key_findings, themes,
 * and impact (from outcomes).
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
 * Join theme strings, only including themes that fully fit within key_themes limit.
 * Prevents truncating theme names mid-word.
 * @param {Array} themes - Array of theme strings
 * @returns {string|null} - Comma-separated themes or null
 */
function safeJoinThemes(themes) {
  var result = [];
  var currentLength = 0;
  for (var i = 0; i < themes.length; i++) {
    var separator = result.length > 0 ? ", " : "";
    if (currentLength + separator.length + themes[i].length <= LIMITS.key_themes) {
      result.push(themes[i]);
      currentLength += separator.length + themes[i].length;
    }
  }
  return result.length > 0 ? result.join(", ") : null;
}

// ─── Methodology terms to filter out ─────────────────────────────────────────

var METHODOLOGY_TERMS = [
  'usability testing', 'usability-testing',
  'remote research', 'remote-research',
  'interviews', 'semi-structured interviews', 'semi-structured-interviews',
  'evaluative research', 'evaluative',
  'survey', 'surveys',
  'shadowing',
  'concept testing', 'concept-testing',
  'card sorting', 'card-sorting',
  'tree testing', 'tree-testing',
  'moderated', 'moderated-research',
  'unmoderated', 'unmoderated-research',
  'remote-sessions',
  'contextual-inquiry', 'contextual inquiry'
];

/**
 * Extract topical themes from key findings using LLM (GitHub Models API).
 * @param {Object} frontmatter - Parsed YAML frontmatter
 * @returns {Promise<string|null>} - Comma-separated themes or null
 */
async function extractThemesWithLLM(frontmatter) {
  if (!frontmatter.key_findings || !Array.isArray(frontmatter.key_findings) || frontmatter.key_findings.length === 0) {
    return null;
  }

  var findingsText = frontmatter.key_findings
    .slice(0, 5)
    .map(function (f) { return "- " + f; })
    .join("\n");

  var prompt = "Analyze these research key findings and extract 2-4 topical themes (NOT research methods).\n\nKey findings:\n" + findingsText + "\n\nExtract only TOPICAL themes like:\n- Navigation confusion\n- Evidence submission\n- Trust issues\n- Form complexity\n- Timeline expectations\n- Status clarity\n- Accessibility\n- Mobile usability\n- Search functionality\n- Communication gaps\n- Error handling\n\nDo NOT include research methods like:\n- Usability testing\n- Remote research\n- Interviews\n- Evaluative research\n- Surveys\n\nOutput format: comma-separated list, max 60 characters total\n\nExample good output: \"Navigation, Evidence submission, Trust\"\nExample bad output: \"Usability Testing, Remote Research\"\n\nOutput only the comma-separated theme list, nothing else.";

  try {
    var themes = await callGitHubModels(prompt);

    if (!themes || themes.trim().length === 0) {
      return null;
    }

    var trimmed = themes.trim();

    // Ensure themes fit within limit without cutting mid-theme
    if (trimmed.length > LIMITS.key_themes) {
      var lastComma = trimmed.lastIndexOf(",", LIMITS.key_themes);
      trimmed = lastComma > 0 ? trimmed.substring(0, lastComma).trim() : trimmed.substring(0, LIMITS.key_themes);
    }

    // Basic validation - reject if it looks like methodology
    var lowerThemes = trimmed.toLowerCase();
    var methodologyCheck = ['usability', 'testing', 'remote', 'interview', 'survey', 'evaluative'];
    if (methodologyCheck.some(function (term) { return lowerThemes.includes(term); })) {
      console.warn("    \u26A0 LLM returned methodology terms, rejecting: " + trimmed);
      return null;
    }

    return trimmed;
  } catch (error) {
    // Silent failure, will fall back to keywords
    return null;
  }
}

/**
 * Call GitHub Models API for theme extraction.
 * @param {string} prompt - The prompt to send
 * @returns {Promise<string>} - The model response content
 */
async function callGitHubModels(prompt) {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN not available");
  }

  // 15-second timeout to prevent hanging on network issues
  var controller = new AbortController();
  var timeout = setTimeout(function () { controller.abort(); }, 15000);

  try {
    var response = await fetch("https://models.inference.ai.azure.com/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + process.env.GITHUB_TOKEN,
        "Content-Type": "application/json"
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You extract topical themes from research findings. Output only comma-separated themes, nothing else."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        // Low temperature for consistent, deterministic theme extraction
        temperature: 0.3,
        // Short limit: we only need a comma-separated list (e.g. "Navigation, Trust, Forms")
        max_tokens: 50
      })
    });

    if (!response.ok) {
      throw new Error("GitHub Models API error: HTTP " + response.status + " " + response.statusText);
    }

    var data = await response.json();

    if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0 ||
        !data.choices[0].message || !data.choices[0].message.content) {
      throw new Error("GitHub Models API returned unexpected response structure");
    }

    return data.choices[0].message.content.trim();
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Extract themes from key findings using keyword matching (fallback).
 * @param {Object} frontmatter - Parsed YAML frontmatter
 * @returns {string|null} - Comma-separated themes or null
 */
function extractThemesWithKeywords(frontmatter) {
  if (!frontmatter.key_findings || !Array.isArray(frontmatter.key_findings)) {
    return null;
  }

  var themes = new Set();

  var themeKeywords = {
    'Navigation': ['navigation', 'navigate', 'lost', 'find', 'wayfinding', 'menu', 'tabs'],
    'Evidence submission': ['evidence', 'documentation', 'records', 'documents', 'submit', 'upload', 'proof'],
    'Trust': ['trust', 'distrust', 'suspicious', 'doubt', 'credibility', 'belief', 'confidence'],
    'Form complexity': ['complex', 'complicated', 'difficult', 'confusing', 'overwhelming', 'lengthy', 'long form'],
    'Timeline expectations': ['timeline', 'delay', 'wait', 'processing time', 'how long', 'duration', 'expect'],
    'Status clarity': ['status', 'tracking', 'updates', 'notification', 'progress', 'clarity', 'transparent'],
    'Accessibility': ['accessibility', 'screen reader', 'assistive', 'disability', 'a11y', 'wcag'],
    'Mobile': ['mobile', 'phone', 'responsive', 'small screen', 'touch'],
    'Search': ['search', 'find', 'lookup', 'query', 'discover', 'locate'],
    'Error handling': ['error', 'message', 'failed', 'broken', 'bug', 'issue', 'problem'],
    'Communication': ['communication', 'contact', 'notification', 'email', 'message', 'inform'],
    'Language clarity': ['language', 'wording', 'terminology', 'jargon', 'plain language', 'understand'],
    'Loading performance': ['loading', 'performance', 'slow', 'speed', 'wait time', 'latency']
  };

  for (var fi = 0; fi < frontmatter.key_findings.length; fi++) {
    var finding = frontmatter.key_findings[fi];
    if (!finding || typeof finding !== "string") continue;
    var findingLower = finding.toLowerCase();

    var themeEntries = Object.entries(themeKeywords);
    for (var ti = 0; ti < themeEntries.length; ti++) {
      var theme = themeEntries[ti][0];
      var keywords = themeEntries[ti][1];
      if (keywords.some(function (keyword) { return findingLower.includes(keyword); })) {
        themes.add(theme);
      }
    }
  }

  if (themes.size === 0) {
    return null;
  }

  // Build comma-separated string, only including themes that fully fit in 60 chars
  var themesArray = Array.from(themes);
  var result = [];
  var currentLength = 0;
  for (var ri = 0; ri < themesArray.length && result.length < 4; ri++) {
    var separator = result.length > 0 ? ", " : "";
    if (currentLength + separator.length + themesArray[ri].length <= LIMITS.key_themes) {
      result.push(themesArray[ri]);
      currentLength += separator.length + themesArray[ri].length;
    }
  }
  return result.length > 0 ? result.join(", ") : null;
}

/**
 * Filter methodology terms from themes field (last resort).
 * @param {string|Array} themesField - Themes from YAML frontmatter
 * @returns {Array} - Filtered themes array
 */
function filterMethodologyTerms(themesField) {
  var themesArray = Array.isArray(themesField)
    ? themesField
    : String(themesField).split(",").map(function (t) { return t.trim(); });

  return themesArray.filter(function (theme) {
    return !METHODOLOGY_TERMS.some(function (method) {
      return theme.toLowerCase().includes(method.toLowerCase());
    });
  });
}

/**
 * Extract lightweight findings from parsed YAML frontmatter.
 * Uses a three-tier strategy: LLM > Keywords > Filtered themes.
 * @param {Object} frontmatter - Parsed YAML frontmatter object
 * @returns {Promise<Object>} - { key_themes, top_finding, impact, extraction_method }
 */
async function extractFromFrontmatter(frontmatter) {
  var findings = {};

  // ── TIER 1: Try LLM extraction (GitHub Models API) ─────────────────────
  if (process.env.GITHUB_TOKEN) {
    try {
      var llmThemes = await extractThemesWithLLM(frontmatter);
      if (llmThemes) {
        findings.key_themes = llmThemes;
        findings.extraction_method = "llm";
      }
    } catch (error) {
      // Silent fallback to keywords
    }
  }

  // ── TIER 2: Fallback to keyword matching ───────────────────────────────
  if (!findings.key_themes) {
    var keywordThemes = extractThemesWithKeywords(frontmatter);
    if (keywordThemes) {
      findings.key_themes = keywordThemes;
      findings.extraction_method = "keywords";
    }
  }

  // ── TIER 3: Last resort - filter methodology from themes/tags field ────
  if (!findings.key_themes) {
    if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
      var meaningfulTags = frontmatter.tags.filter(isMeaningfulTag);
      var filtered = filterMethodologyTerms(meaningfulTags);
      if (filtered.length > 0) {
        findings.key_themes = safeJoinThemes(filtered);
        findings.extraction_method = "filtered";
      }
    }
    if (!findings.key_themes && frontmatter.themes) {
      var filteredThemes = filterMethodologyTerms(frontmatter.themes);
      if (filteredThemes.length > 0) {
        findings.key_themes = safeJoinThemes(filteredThemes);
        findings.extraction_method = "filtered";
      }
    }
  }

  // ── Top Finding: first key_finding ─────────────────────────────────────
  if (frontmatter.key_findings && Array.isArray(frontmatter.key_findings) && frontmatter.key_findings.length > 0) {
    var first = frontmatter.key_findings[0];
    if (first && typeof first === "string") {
      var cleaned = first.replace(/\s+/g, " ").trim();
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

async function main() {
  console.log("Research Findings Extraction");
  console.log("============================\n");

  // Check if GitHub token is available for LLM extraction
  if (process.env.GITHUB_TOKEN) {
    console.log("\u2713 GitHub Models API available (GITHUB_TOKEN found)");
  } else {
    console.log("\u26A0 GitHub Models API unavailable - will use keyword matching fallback");
  }
  console.log("");

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

  // Track extraction methods
  var llmCount = 0;
  var keywordCount = 0;
  var filteredCount = 0;

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

    // Extract findings (now async with three-tier strategy)
    var findings = await extractFromFrontmatter(result.frontmatter);

    // Check if we extracted anything useful
    var hasContent = findings.key_themes || findings.top_finding || findings.impact;
    if (!hasContent) continue;
    stats.extracted++;

    // Track extraction method
    if (findings.extraction_method === "llm") {
      llmCount++;
    } else if (findings.extraction_method === "keywords") {
      keywordCount++;
    } else if (findings.extraction_method === "filtered") {
      filteredCount++;
    }

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
      extraction_method: findings.extraction_method || "none"
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
      extraction_method: "hybrid",
      extraction_counts: {
        llm: llmCount,
        keywords: keywordCount,
        filtered: filteredCount
      }
    },
    studies: results
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf8");
  console.log("  \u2713 " + path.relative(ROOT, OUTPUT_PATH));

  // ── Write sample output ──────────────────────────────────────────────────
  var sampleOutput = {
    description: "Sample extractions with source YAML for manual review",
    generated: new Date().toISOString(),
    sample_count: samples.length,
    samples: samples
  };

  fs.writeFileSync(SAMPLE_OUTPUT_PATH, JSON.stringify(sampleOutput, null, 2), "utf8");
  console.log("  \u2713 " + path.relative(ROOT, SAMPLE_OUTPUT_PATH));

  // ── Report ───────────────────────────────────────────────────────────────
  console.log("\nFindings Extraction Report:");
  console.log("===========================");
  console.log("Total studies in knowledge graph: " + stats.total);
  console.log("Studies with findings files:      " + stats.with_findings_file);
  console.log("Findings files found on disk:     " + stats.file_exists);
  console.log("Files with YAML frontmatter:      " + stats.with_frontmatter);
  console.log("Successfully extracted:           " + stats.extracted);
  console.log("");
  console.log("Extraction methods:");
  console.log("- LLM extraction: " + llmCount + " (" + (stats.extracted > 0 ? Math.round(100 * llmCount / stats.extracted) : 0) + "%)");
  console.log("- Keyword matching: " + keywordCount + " (" + (stats.extracted > 0 ? Math.round(100 * keywordCount / stats.extracted) : 0) + "%)");
  console.log("- Filtered themes: " + filteredCount + " (" + (stats.extracted > 0 ? Math.round(100 * filteredCount / stats.extracted) : 0) + "%)");
  console.log("");
  console.log("Failed extractions:               " + (stats.with_frontmatter - stats.extracted));
  console.log("Missing frontmatter:              " + stats.missing_frontmatter);
  console.log("Parse errors:                     " + stats.parse_errors);
  console.log("File not found:                   " + stats.file_not_found);
  if (stats.file_exists > 0) {
    console.log("Coverage: " + ((100 * stats.extracted / stats.total).toFixed(1)) + "%");
  }
  console.log("");

  // Quality assessment
  if (llmCount > stats.extracted * 0.7) {
    console.log("\u2713 Quality: High (" + Math.round(100 * llmCount / stats.extracted) + "% LLM-extracted)");
  } else if (llmCount > 0) {
    console.log("\u26A0 Quality: Medium (" + Math.round(100 * llmCount / stats.extracted) + "% LLM, " + Math.round(100 * keywordCount / stats.extracted) + "% keywords)");
  } else {
    console.log("\u26A0 Quality: Good (keyword matching used - GitHub Models API unavailable)");
  }

  console.log("");
  console.log("Frontmatter fields found:");
  console.log("  key_themes:  " + stats.fields.key_themes + "/" + stats.extracted);
  console.log("  top_finding: " + stats.fields.top_finding + "/" + stats.extracted);
  console.log("  impact:      " + stats.fields.impact + "/" + stats.extracted);

  if (warnings.length > 0) {
    console.log("\nWarnings (" + warnings.length + "):");
    warnings.forEach(function (w) { console.log("  \u26A0 " + w); });
  } else {
    console.log("\nCharacter limit violations: 0");
  }

  console.log("\nSample extractions (" + samples.length + "):");
  samples.forEach(function (s) {
    console.log("  \u2713 " + s.study_path + " [" + (s.extracted.extraction_method || "none") + "]");
  });

  console.log("\nDone.");
}

main().catch(function (error) {
  console.error("Fatal error:", error);
  process.exit(1);
});
