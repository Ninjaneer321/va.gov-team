#!/usr/bin/env node
/**
 * Generate human-readable Markdown summaries from .github/knowledge-graph.json.
 *
 * These summary files live in .github/copilot-summaries/ and give GitHub
 * Copilot Chat a small, reliable set of documents to answer organisational
 * questions without having to parse the full 1,230-node JSON graph.
 *
 * Outputs
 * -------
 *   .github/copilot-summaries/teams.md
 *   .github/copilot-summaries/research-by-team.md
 *   .github/copilot-summaries/research-by-product.md
 *   .github/copilot-summaries/portfolios.md
 *   .github/copilot-summaries/research-findings-index.md
 *
 * Usage
 * -----
 *   node scripts/generate-copilot-summaries.js
 *
 * The script reads .github/knowledge-graph.json and rewrites every
 * summary file on every run.  Run it after (re)generating the knowledge graph.
 */

"use strict";

const fs = require("fs");
const path = require("path");

// ─── paths ───────────────────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname, "..");
const KG_PATH = path.join(ROOT, ".github", "knowledge-graph.json");
const TEAM_LOOKUP_PATH = path.join(ROOT, "team-lookup.json");
const FINDINGS_DATA_PATH = path.join(ROOT, "scripts", "research-findings-data.json");
const SUMMARIES_DIR = path.join(ROOT, ".github", "copilot-summaries");
const REPO_BASE_URL = "https://github.com/department-of-veterans-affairs/va.gov-team";

// ─── URL helpers ─────────────────────────────────────────────────────────────

/**
 * Convert a file path to a properly encoded GitHub URL.
 * @param {string} filePath - File system path (e.g., "products/ask-va/design/User research/2024-05 Study")
 * @param {string} type - URL type: 'tree' for directories, 'blob' for files
 * @returns {string} - Properly encoded GitHub URL
 */
function pathToGitHubURL(filePath, type) {
  if (!filePath) return "";
  // Handle arrays by taking the first element
  if (Array.isArray(filePath)) filePath = filePath[0];
  if (typeof filePath !== "string") return "";
  if (!type) type = "tree";
  var encodedPath = filePath.split("/").map(function (segment) {
    return encodeURIComponent(segment);
  }).join("/");
  return REPO_BASE_URL + "/" + type + "/master/" + encodedPath;
}

/**
 * Generate a GitHub search URL to find research by path and keywords.
 * @param {string} filePath - Partial path to search within
 * @param {string} keywords - Keywords from study title
 * @returns {string} - GitHub search URL
 */
function generateSearchURL(filePath, keywords) {
  var pathParts = (filePath || "").split("/").slice(0, 2).join("/");
  var yearMatch = (keywords || "").match(/\b(20\d{2})\b/);
  var year = yearMatch ? yearMatch[1] : "";
  var noise = ["research", "study", "usability", "testing"];
  var extraTerms = (keywords || "").split(/\s+/).filter(function (w) {
    return w.length > 3 && noise.indexOf(w.toLowerCase()) === -1;
  }).slice(0, 2);
  var parts = ["path:" + pathParts, year].concat(extraTerms).filter(Boolean);
  var q = parts.join(" ");
  return REPO_BASE_URL + "/search?q=" + encodeURIComponent(q);
}

// ─── helpers ─────────────────────────────────────────────────────────────────

function loadGraph() {
  if (!fs.existsSync(KG_PATH)) {
    console.error("ERROR: " + KG_PATH + " not found.");
    console.error("Run  node scripts/build-knowledge-graph.js  first.");
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(KG_PATH, "utf8"));
}

/**
 * Load team-lookup.json and build a Map keyed by team_id (number).
 * Returns an empty Map if the file is missing (graceful fallback).
 */
function loadTeamLookup() {
  if (!fs.existsSync(TEAM_LOOKUP_PATH)) {
    console.warn("WARNING: " + TEAM_LOOKUP_PATH + " not found. Sensitive-repo detection disabled.");
    return new Map();
  }
  var raw = JSON.parse(fs.readFileSync(TEAM_LOOKUP_PATH, "utf8"));
  var map = new Map();
  Object.keys(raw).forEach(function (id) {
    map.set(parseInt(id, 10), raw[id]);
  });
  return map;
}

/**
 * Determine which repository a team's README is in based on team-lookup.json.
 * @param {Object} teamNode - Team node from knowledge graph
 * @param {Map} lookupById - team-lookup Map keyed by team_id
 * @returns {{ repo: string|null, url: string|null }}
 */
function getTeamReadmeInfo(teamNode, lookupById) {
  if (!teamNode.team_id) return { repo: null, url: null };

  var info = lookupById.get(teamNode.team_id);
  if (!info || !info.manifest_url) return { repo: null, url: null };

  if (info.manifest_url.indexOf("va.gov-team-sensitive") >= 0) {
    return { repo: "va.gov-team-sensitive", url: null };
  }
  if (info.manifest_url.indexOf("va.gov-team") >= 0) {
    return { repo: "va.gov-team", url: info.manifest_url };
  }
  return { repo: null, url: null };
}

/**
 * Check if a team's README is in the sensitive repo.
 * @param {Object} teamNode - Team node from knowledge graph
 * @param {Map} lookupById - team-lookup Map keyed by team_id
 * @returns {boolean}
 */
function isTeamInSensitiveRepo(teamNode, lookupById) {
  return getTeamReadmeInfo(teamNode, lookupById).repo === "va.gov-team-sensitive";
}

/**
 * Load research findings data (extracted from YAML frontmatter).
 * Returns an empty object if the file is missing (graceful fallback).
 */
function loadFindingsData() {
  if (!fs.existsSync(FINDINGS_DATA_PATH)) {
    console.warn("  ⚠ No findings data file found - summaries will only include metadata");
    return { studies: {} };
  }
  var data = JSON.parse(fs.readFileSync(FINDINGS_DATA_PATH, "utf8"));
  console.log("  ✓ Loaded findings for " + Object.keys(data.studies).length + " studies");
  if (data.metadata) {
    console.log("    Coverage: " + data.metadata.studies_extracted_from_frontmatter + "/" + data.metadata.studies_processed + " studies");
  }
  return data;
}

/**
 * Get lightweight findings for a research study if available.
 * @param {string} studyPath - Path to the research study
 * @param {Object} findingsData - Loaded findings data
 * @returns {Object|null} - { key_themes, top_finding, impact } or null
 */
function getStudyFindings(studyPath, findingsData) {
  if (!studyPath || !findingsData.studies) return null;
  var normalizedPath = studyPath.replace(/^\/+|\/+$/g, "");
  return findingsData.studies[normalizedPath] || null;
}

function writeSummary(filename, content) {
  fs.mkdirSync(SUMMARIES_DIR, { recursive: true });
  const dest = path.join(SUMMARIES_DIR, filename);
  fs.writeFileSync(dest, content, "utf8");
  console.log("  ✓ " + path.relative(ROOT, dest));
}

/** Build adjacency indexes for fast edge traversal. */
function buildIndex(graph) {
  const nodeById = new Map(graph.nodes.map(function (n) { return [n.id, n]; }));

  // source → [{target, relationship}]
  var outEdges = new Map();
  // target → [{source, relationship}]
  var inEdges = new Map();

  graph.edges.forEach(function (e) {
    if (!outEdges.has(e.source)) outEdges.set(e.source, []);
    outEdges.get(e.source).push(e);
    if (!inEdges.has(e.target)) inEdges.set(e.target, []);
    inEdges.get(e.target).push(e);
  });

  return {
    nodeById: nodeById,
    /** All nodes reachable via outgoing edges of a given relationship. */
    follow: function (sourceId, relationship) {
      return (outEdges.get(sourceId) || [])
        .filter(function (e) { return e.relationship === relationship; })
        .map(function (e) { return nodeById.get(e.target); })
        .filter(Boolean);
    },
    /** All nodes that have an incoming edge of a given relationship to targetId. */
    followIn: function (targetId, relationship) {
      return (inEdges.get(targetId) || [])
        .filter(function (e) { return e.relationship === relationship; })
        .map(function (e) { return nodeById.get(e.source); })
        .filter(Boolean);
    }
  };
}

/** Format a single research study as a Markdown bullet (compact, for teams.md). */
function studyBullet(s) {
  var label = s.name || path.basename(s.path || s.id);
  var datePart = s.date ? " (" + s.date + ")" : "";
  var methodPart = "";
  if (s.methodology) {
    methodPart = " — " + (Array.isArray(s.methodology) ? s.methodology.join(", ") : s.methodology);
  }
  var participantPart = "";
  if (s.participant_types && s.participant_types.length) {
    participantPart = " [" + s.participant_types.join(", ") + "]";
  }
  var linkPart = s.path ? " · [view](" + pathToGitHubURL(s.path, "tree") + ")" : "";
  return "  - **" + label + "**" + datePart + methodPart + participantPart + linkPart;
}

/** Format a research study as a detailed Markdown block (for research-by-team/product). */
function studyBlock(s, findingsData) {
  var lines = [];
  var label = s.name || path.basename(s.path || s.id);
  var date = s.date || "Date unknown";
  var methodology = s.methodology
    ? (Array.isArray(s.methodology) ? s.methodology.join(", ") : s.methodology)
    : "Methodology not specified";
  var studyUrl = s.path ? pathToGitHubURL(s.path, "tree") : "";
  var searchUrl = s.path ? generateSearchURL(s.path, label) : "";

  // Hyperlinked heading
  if (studyUrl) {
    lines.push("### [" + label + "](" + studyUrl + ")");
  } else {
    lines.push("### " + label);
  }
  lines.push("");

  lines.push("- **Date**: " + date);

  // Methodology with inline participant types
  if (s.participant_types && s.participant_types.length) {
    lines.push("- **Methodology**: " + methodology + " (" + s.participant_types.join(", ") + ")");
  } else {
    lines.push("- **Methodology**: " + methodology);
  }

  // Add findings if available
  var findings = findingsData ? getStudyFindings(s.path, findingsData) : null;
  if (findings) {
    if (findings.key_themes) {
      lines.push("- **Key Themes**: " + findings.key_themes);
    }
    if (findings.top_finding) {
      lines.push("- **Top Finding**: " + findings.top_finding);
    }
    if (findings.impact) {
      lines.push("- **Impact**: " + findings.impact);
    }
  }

  if (s.participant_types && s.participant_types.length && !findings) {
    lines.push("- **Participants**: " + s.participant_types.join(", "));
  }

  if (s.path) {
    lines.push("- **Path**: `" + s.path + "`");
    var linkLine = "- **Direct link**: [View directory](" + studyUrl + ")";
    if (searchUrl) linkLine += " | [Search for this research](" + searchUrl + ")";
    lines.push(linkLine);
  }

  if (s.files) {
    var fileLinks = [];
    if (s.files.plan) {
      fileLinks.push("  - [Research Plan](" + pathToGitHubURL(s.files.plan, "blob") + ")");
    }
    if (s.files.findings) {
      fileLinks.push("  - [Findings](" + pathToGitHubURL(s.files.findings, "blob") + ")");
    }
    if (s.files.conversation_guide) {
      fileLinks.push("  - [Conversation Guide](" + pathToGitHubURL(s.files.conversation_guide, "blob") + ")");
    }
    if (fileLinks.length) {
      lines.push("- **Files**:");
      lines.push.apply(lines, fileLinks);
    }
  }

  lines.push("");
  return lines;
}

function byName(a, b) {
  return (a.name || a.id).localeCompare(b.name || b.id, undefined, { sensitivity: "base" });
}

// ─── generators ──────────────────────────────────────────────────────────────

function generateTeams(graph, idx, lookupById) {
  var teams = graph.nodes.filter(function (n) { return n.type === "team"; }).sort(byName);
  var lines = [
    "# VA.gov Teams Directory",
    "",
    "> Auto-generated from `.github/knowledge-graph.json` on " + graph._meta.generated.slice(0, 10) + ".",
    "> Edit the source data, not this file.",
    "",
    teams.length + " teams across all portfolios.",
    "",
    "**Legend:**",
    "- 🔒 = Team documentation in va.gov-team-sensitive (private repo, requires access)",
    "",
    "---",
    ""
  ];

  teams.forEach(function (team) {
    var sensitive = isTeamInSensitiveRepo(team, lookupById);
    var heading = sensitive ? team.name + " 🔒" : team.name;
    lines.push("## " + heading);
    lines.push("");

    if (team.team_id) lines.push("- **Team ID**: " + team.team_id);
    if (team.short_name) lines.push("- **Short name**: `" + team.short_name + "`");

    var portfolios = idx.follow(team.id, "belongs_to_portfolio");
    if (portfolios.length) {
      lines.push("- **Portfolio**: " + portfolios.map(function (p) { return p.name; }).join(", "));
    }
    var crews = idx.follow(team.id, "belongs_to_crew");
    if (crews.length) {
      lines.push("- **Crew**: " + crews.map(function (c) { return c.name; }).join(", "));
    }
    if (team.readme_path) {
      var readmeInfo = getTeamReadmeInfo(team, lookupById);
      if (readmeInfo.repo === "va.gov-team-sensitive") {
        lines.push("- **README**: `" + team.readme_path + "` *(in va.gov-team-sensitive — requires access)*");
      } else if (readmeInfo.url) {
        lines.push("- **README**: [" + team.readme_path + "](" + readmeInfo.url + ")");
      } else {
        var readmeUrl = pathToGitHubURL(team.readme_path, "blob");
        lines.push("- **README**: [" + team.readme_path + "](" + readmeUrl + ")");
      }
    }
    lines.push("");

    // Products
    var owned = idx.follow(team.id, "owns_product");
    var worksOn = idx.follow(team.id, "works_on_product");
    var productMap = new Map();
    owned.concat(worksOn).forEach(function (p) { productMap.set(p.id, p); });
    var products = Array.from(productMap.values()).sort(byName);
    if (products.length) {
      lines.push("**Products (" + products.length + "):**");
      products.forEach(function (p) {
        var name = p.display_name || p.name;
        var link = p.path ? "[" + name + "](" + p.path + ")" : name;
        lines.push("- " + link);
      });
      lines.push("");
    }

    // Research
    var studies = idx.follow(team.id, "conducted_research").sort(byName);
    if (studies.length) {
      lines.push("**Research (" + studies.length + " " + (studies.length === 1 ? "study" : "studies") + "):**");
      studies.forEach(function (s) { lines.push(studyBullet(s)); });
      lines.push("");
    }

    lines.push("---");
    lines.push("");
  });

  return lines.join("\n");
}

function generateResearchByTeam(graph, idx, findingsData) {
  var teams = graph.nodes.filter(function (n) { return n.type === "team"; }).sort(byName);
  var lines = [
    "# Research Studies by Team",
    "",
    "> Auto-generated from `.github/knowledge-graph.json` on " + graph._meta.generated.slice(0, 10) + ".",
    "> Edit the source data, not this file.",
    "",
    "Use this file to quickly find all research a team has conducted.",
    "For detailed team information (portfolio, README, products), see [teams.md](teams.md).",
    ""
  ];

  teams.forEach(function (team) {
    var studies = idx.follow(team.id, "conducted_research").sort(byName);
    if (!studies.length) return;

    var portfolios = idx.follow(team.id, "belongs_to_portfolio");
    var suffix = portfolios.length ? " *(" + portfolios[0].name + ")*" : "";
    lines.push("## " + team.name + suffix);
    lines.push("");
    lines.push(studies.length + " " + (studies.length === 1 ? "study" : "studies") + ":");
    lines.push("");
    studies.forEach(function (s) { lines.push.apply(lines, studyBlock(s, findingsData)); });
    lines.push("");
  });

  return lines.join("\n");
}

function generateResearchByProduct(graph, idx, findingsData) {
  var productsWithResearch = graph.nodes
    .filter(function (n) { return n.type === "product" || n.type === "category"; })
    .map(function (p) {
      return { product: p, studies: idx.follow(p.id, "has_research") };
    })
    .filter(function (item) { return item.studies.length > 0; })
    .sort(function (a, b) { return byName(a.product, b.product); });

  var lines = [
    "# Research Studies by Product",
    "",
    "> Auto-generated from `.github/knowledge-graph.json` on " + graph._meta.generated.slice(0, 10) + ".",
    "> Edit the source data, not this file.",
    "",
    productsWithResearch.length + " products have documented research studies.",
    ""
  ];

  productsWithResearch.forEach(function (item) {
    var p = item.product;
    var displayName = p.display_name || p.name;
    lines.push("## " + displayName);
    if (p.path) lines.push("*Path: [" + p.path + "](" + p.path + ")*");
    lines.push("");

    // Owning teams
    var ownerTeams = idx.followIn(p.id, "owns_product");
    var workerTeams = idx.followIn(p.id, "works_on_product");
    var teamMap = new Map();
    ownerTeams.concat(workerTeams).forEach(function (t) { teamMap.set(t.id, t); });
    var teams = Array.from(teamMap.values());
    if (teams.length) {
      lines.push("**Team(s)**: " + teams.map(function (t) { return t.name; }).join(", "));
      lines.push("");
    }

    lines.push("**Research (" + item.studies.length + " " + (item.studies.length === 1 ? "study" : "studies") + "):**");
    lines.push("");
    item.studies.sort(byName).forEach(function (s) { lines.push.apply(lines, studyBlock(s, findingsData)); });
    lines.push("");
  });

  return lines.join("\n");
}

function generatePortfolios(graph, idx, lookupById) {
  var portfolios = graph.nodes.filter(function (n) { return n.type === "portfolio"; }).sort(byName);
  var lines = [
    "# VA.gov Portfolio Hierarchy",
    "",
    "> Auto-generated from `.github/knowledge-graph.json` on " + graph._meta.generated.slice(0, 10) + ".",
    "> Edit the source data, not this file.",
    "",
    "Organisational hierarchy: Portfolio → Crew → Team → Products.",
    "",
    "**Legend:**",
    "- 🔒 = Team documentation in va.gov-team-sensitive (private repo, requires access)",
    "",
    "---",
    ""
  ];

  portfolios.forEach(function (portfolio) {
    lines.push("## " + portfolio.name);
    lines.push("");

    // All teams in this portfolio
    var allTeams = graph.nodes
      .filter(function (n) { return n.type === "team"; })
      .filter(function (t) {
        return idx.follow(t.id, "belongs_to_portfolio").some(function (p) { return p.id === portfolio.id; });
      });

    // Group by crew
    var crewMap = new Map();
    var noCrew = [];
    allTeams.forEach(function (team) {
      var crews = idx.follow(team.id, "belongs_to_crew");
      if (crews.length) {
        var crew = crews[0];
        if (!crewMap.has(crew.id)) crewMap.set(crew.id, { crew: crew, teams: [] });
        crewMap.get(crew.id).teams.push(team);
      } else {
        noCrew.push(team);
      }
    });

    var sortedCrews = Array.from(crewMap.values()).sort(function (a, b) { return byName(a.crew, b.crew); });

    sortedCrews.forEach(function (entry) {
      lines.push("### " + entry.crew.name);
      lines.push("");
      entry.teams.sort(byName).forEach(function (team) {
        var sensitive = isTeamInSensitiveRepo(team, lookupById);
        var teamHeading = sensitive ? team.name + " 🔒" : team.name;
        lines.push("#### " + teamHeading);
        if (team.readme_path) {
          var readmeInfo = getTeamReadmeInfo(team, lookupById);
          if (readmeInfo.repo === "va.gov-team-sensitive") {
            lines.push("*README: `" + team.readme_path + "` (in va.gov-team-sensitive — requires access)*");
          } else if (readmeInfo.url) {
            lines.push("*README: [" + team.readme_path + "](" + readmeInfo.url + ")*");
          } else {
            lines.push("*README: [" + team.readme_path + "](" + team.readme_path + ")*");
          }
        }
        lines.push("");

        var owned = idx.follow(team.id, "owns_product");
        var worksOn = idx.follow(team.id, "works_on_product");
        var productMap = new Map();
        owned.concat(worksOn).forEach(function (p) { productMap.set(p.id, p); });
        var products = Array.from(productMap.values()).sort(byName);
        if (products.length) {
          lines.push("**Products:**");
          products.forEach(function (p) {
            var name = p.display_name || p.name;
            var link = p.path ? "[" + name + "](" + p.path + ")" : name;
            lines.push("- " + link);
          });
          lines.push("");
        }

        var researchCount = idx.follow(team.id, "conducted_research").length;
        if (researchCount) {
          lines.push("*" + researchCount + " research " + (researchCount === 1 ? "study" : "studies") + " — see [research-by-team.md](research-by-team.md)*");
          lines.push("");
        }
      });
    });

    if (noCrew.length) {
      lines.push("### (No crew assigned)");
      lines.push("");
      noCrew.sort(byName).forEach(function (team) {
        var sensitive = isTeamInSensitiveRepo(team, lookupById);
        var teamName = sensitive ? team.name + " 🔒" : team.name;
        lines.push("- **" + teamName + "**");
        if (team.readme_path) {
          var readmeInfo = getTeamReadmeInfo(team, lookupById);
          if (readmeInfo.repo === "va.gov-team-sensitive") {
            lines.push("  *README: `" + team.readme_path + "` (in va.gov-team-sensitive — requires access)*");
          } else if (readmeInfo.url) {
            lines.push("  *README: [" + team.readme_path + "](" + readmeInfo.url + ")*");
          } else {
            lines.push("  *README: [" + team.readme_path + "](" + team.readme_path + ")*");
          }
        }
      });
      lines.push("");
    }

    lines.push("---");
    lines.push("");
  });

  return lines.join("\n");
}

function generateProductTeams(graph, idx) {
  // Products with team_roster data (extracted from their README.md)
  var withRoster = graph.nodes
    .filter(function (n) {
      return (n.type === "product" || n.type === "category") && n.team_roster && n.team_roster.length > 0;
    })
    .sort(byName);

  var lines = [
    "# Product Team Rosters",
    "",
    "> Auto-generated from product README files via `.github/knowledge-graph.json` on " + graph._meta.generated.slice(0, 10) + ".",
    "> Edit the source README, not this file.",
    "",
    withRoster.length + " products have team roster information in their public README.",
    "",
    "Use this file to quickly find who works on a specific product.",
    "For detailed team information (portfolio, crew, research), see [teams.md](teams.md).",
    ""
  ];

  withRoster.forEach(function (p) {
    var displayName = p.display_name || p.name;
    lines.push("## " + displayName);
    if (p.path) {
      lines.push("*README: [" + p.path + "/README.md](" + pathToGitHubURL(p.path + "/README.md", "blob") + ")*");
    }
    lines.push("");

    var roster = p.team_roster;
    for (var i = 0; i < roster.length; i++) {
      var entry = roster[i];
      if (entry.role) {
        lines.push("- **" + entry.role + "**: " + entry.name);
      } else {
        lines.push("- " + entry.name);
      }
    }

    // Slack channels
    if (p.slack_channels && p.slack_channels.length) {
      lines.push("- **Slack**: " + p.slack_channels.join(", "));
    }

    lines.push("");
    lines.push("---");
    lines.push("");
  });

  return lines.join("\n");
}

// ─── findings index ──────────────────────────────────────────────────────────

/**
 * Map common product slugs to human-readable display names.
 */
var PRODUCT_DISPLAY_NAMES = {
  "disability": "Disability Claims",
  "claim-appeal-status": "Claim Status Tool",
  "ask-va": "Ask VA",
  "identity-personalization": "Authenticated Experience",
  "identity": "Identity",
  "decision-reviews": "Decision Reviews",
  "health-care": "Health Care",
  "education-benefits": "Education Benefits",
  "education-careers": "Education & Careers",
  "burials-memorials": "Burials & Memorials",
  "pension": "Pension",
  "housing-assistance": "Housing Assistance",
  "accredited-representation-management": "Accredited Representation Management",
  "accredited-representative-facing": "Accredited Representative Facing",
  "combined_va_debt_portal": "Combined VA Debt Portal",
  "facilities": "Facilities",
  "login.gov-adoption": "Login.gov Adoption",
  "dependents": "Dependents",
  "home-page": "Home Page",
  "virtual-agent": "Virtual Agent",
  "vet-transition-support": "Vet Transition Support"
};

/**
 * Extract a human-readable product name from a study path.
 * @param {string} studyPath - e.g. "products/ask-va/research/2024-05-study"
 * @returns {string} - e.g. "Ask VA"
 */
function extractProductFromPath(studyPath) {
  if (!studyPath || !studyPath.startsWith("products/")) return "Other";
  var parts = studyPath.split("/");
  if (parts.length < 2) return "Other";
  var slug = parts[1];
  if (PRODUCT_DISPLAY_NAMES[slug]) return PRODUCT_DISPLAY_NAMES[slug];
  return slug.split("-").map(function (w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(" ");
}

/**
 * Find a research study node in the knowledge graph by its path.
 * @param {Array} nodes - graph.nodes array
 * @param {string} studyPath - normalized path
 * @returns {Object|null}
 */
function findStudyInKG(nodes, studyPath) {
  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
    if (n.type === "research_study" && n.path === studyPath) return n;
  }
  return null;
}

/**
 * Generate findings grouped by theme.
 * @param {Object} findingsData - loaded findings data
 * @param {Array} nodes - graph.nodes array
 * @returns {string} - markdown content
 */
function generateFindingsByTheme(findingsData, nodes) {
  var content = "## Findings by Theme\n\n";
  content += "Themes extracted from research YAML frontmatter, grouped across all products.\n\n";

  // Build theme index: theme -> [{ path, name, date, finding, product }]
  var themeIndex = new Map();

  Object.keys(findingsData.studies).forEach(function (studyPath) {
    var sf = findingsData.studies[studyPath];
    if (!sf.key_themes) return;

    var study = findStudyInKG(nodes, studyPath);
    if (!study) return;

    var themes = sf.key_themes.split(",").map(function (t) { return t.trim(); });
    themes.forEach(function (theme) {
      if (!theme) return;
      // Skip truncated themes (artifacts of data extraction)
      if (theme.endsWith("…") || theme === "…") return;
      if (!themeIndex.has(theme)) themeIndex.set(theme, []);
      themeIndex.get(theme).push({
        path: studyPath,
        name: study.name || path.basename(studyPath),
        date: study.date || "Date unknown",
        finding: sf.top_finding,
        product: extractProductFromPath(studyPath)
      });
    });
  });

  // Sort themes by study count (descending)
  var sortedThemes = Array.from(themeIndex.entries())
    .sort(function (a, b) { return b[1].length - a[1].length; });

  sortedThemes.forEach(function (entry) {
    var theme = entry[0];
    var studies = entry[1];

    // Skip themes with only 1 study
    if (studies.length < 2) return;

    var dates = studies.map(function (s) { return s.date; })
      .filter(function (d) { return d && d !== "Date unknown" && !d.match(/^YYYY/) && d !== "Not specified" && d.match(/^20/); });
    var mostRecent = dates.length > 0 ? dates.sort().reverse()[0] : "Unknown";

    content += "### " + theme + "\n\n";
    content += "**" + studies.length + " studies** | Most recent: " + mostRecent + "\n\n";

    // Group by product
    var byProduct = new Map();
    studies.forEach(function (s) {
      var prod = s.product || "Other";
      if (!byProduct.has(prod)) byProduct.set(prod, []);
      byProduct.get(prod).push(s);
    });

    byProduct.forEach(function (prodStudies, product) {
      if (prodStudies.length === 1) {
        var s = prodStudies[0];
        var url = pathToGitHubURL(s.path, "tree");
        var finding = s.finding || s.name;
        content += "- " + finding + " ([" + s.name + "](" + url + "))\n";
      } else {
        content += "- **" + product + "** (" + prodStudies.length + " studies)\n";
        var shown = prodStudies.slice(0, 3);
        shown.forEach(function (s) {
          var url = pathToGitHubURL(s.path, "tree");
          var finding = s.finding || s.name;
          content += "  - " + finding + " ([" + s.name + "](" + url + "))\n";
        });
        if (prodStudies.length > 3) {
          content += "  - _...and " + (prodStudies.length - 3) + " more studies_\n";
        }
      }
    });

    content += "\n";
  });

  return content;
}

/**
 * Generate findings grouped by product.
 * @param {Object} findingsData - loaded findings data
 * @param {Array} nodes - graph.nodes array
 * @returns {string} - markdown content
 */
function generateFindingsByProduct(findingsData, nodes) {
  var content = "## Findings by Product\n\n";
  content += "Findings organized by product area.\n\n";

  // Build product index
  var productIndex = new Map();

  Object.keys(findingsData.studies).forEach(function (studyPath) {
    var sf = findingsData.studies[studyPath];
    var study = findStudyInKG(nodes, studyPath);
    if (!study) return;

    var product = extractProductFromPath(studyPath);

    if (!productIndex.has(product)) {
      productIndex.set(product, { themes: new Map(), studies: [] });
    }

    var pd = productIndex.get(product);
    pd.studies.push({
      path: studyPath,
      name: study.name || path.basename(studyPath),
      date: study.date || "Date unknown",
      finding: sf.top_finding,
      impact: sf.impact
    });

    if (sf.key_themes) {
      sf.key_themes.split(",").map(function (t) { return t.trim(); }).forEach(function (theme) {
        if (!theme || theme.endsWith("…") || theme === "…") return;
        pd.themes.set(theme, (pd.themes.get(theme) || 0) + 1);
      });
    }
  });

  // Sort products by study count (descending)
  var sortedProducts = Array.from(productIndex.entries())
    .sort(function (a, b) { return b[1].studies.length - a[1].studies.length; });

  sortedProducts.forEach(function (entry) {
    var product = entry[0];
    var data = entry[1];
    var studyCount = data.studies.length;

    // Skip products with fewer than 3 studies
    if (studyCount < 3) return;

    var dates = data.studies.map(function (s) { return s.date; })
      .filter(function (d) { return d && d !== "Date unknown" && !d.match(/^YYYY/) && d !== "Not specified" && d.match(/^20/); })
      .sort();
    var dateRange = dates.length > 0
      ? dates[0] + " – " + dates[dates.length - 1]
      : "Unknown";

    content += "### " + product + "\n\n";
    content += "**" + studyCount + " studies** | Active: " + dateRange + "\n\n";

    // Top themes (up to 5)
    var topThemes = Array.from(data.themes.entries())
      .sort(function (a, b) { return b[1] - a[1]; })
      .slice(0, 5);

    if (topThemes.length > 0) {
      content += "**Top Themes:**\n";
      topThemes.forEach(function (te) {
        content += "- " + te[0] + " (" + te[1] + " studies)\n";
      });
      content += "\n";
    }

    // Key findings (most recent 5)
    var recentStudies = data.studies
      .filter(function (s) { return s.finding; })
      .sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); })
      .slice(0, 5);

    if (recentStudies.length > 0) {
      content += "**Key Findings:**\n";
      recentStudies.forEach(function (s) {
        var url = pathToGitHubURL(s.path, "tree");
        content += "- " + s.finding + "\n";
        content += "  - Source: [" + s.name + "](" + url + ")\n";
        if (s.impact) {
          content += "  - Impact: " + s.impact + "\n";
        }
      });
      content += "\n";
    }
  });

  return content;
}

/**
 * Generate the research findings index organized by theme and product.
 * @param {Object} graph - loaded knowledge graph
 * @param {Object} findingsData - loaded findings data
 * @returns {string} - full markdown content for the index file
 */
function generateFindingsIndex(graph, findingsData) {
  console.log("\n  Generating research findings index...");

  if (!findingsData || !findingsData.studies || Object.keys(findingsData.studies).length === 0) {
    console.log("    ⚠ No findings data available - skipping index generation");
    return null;
  }

  var generatedDate = (graph._meta && graph._meta.generated)
    ? graph._meta.generated.slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  var lines = [];
  lines.push("# Research Findings Index");
  lines.push("");
  lines.push("**Auto-generated** from research YAML frontmatter | **Last updated:** " + generatedDate);
  lines.push("");
  lines.push("This index groups research findings by theme and by product for quick reference.");
  lines.push("For comprehensive cross-study analysis, use [deep research](../../platform/research/copilot-prompts/using-deep-research.md).");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(generateFindingsByTheme(findingsData, graph.nodes));
  lines.push("---");
  lines.push("");
  lines.push(generateFindingsByProduct(findingsData, graph.nodes));

  return lines.join("\n");
}

// ─── main ────────────────────────────────────────────────────────────────────

function main() {
  console.log("Generating Copilot summary files...\n");

  var graph = loadGraph();
  var idx = buildIndex(graph);
  var lookupById = loadTeamLookup();
  console.log("  Loaded team-lookup.json (" + lookupById.size + " teams)");
  var findingsData = loadFindingsData();

  writeSummary("teams.md", generateTeams(graph, idx, lookupById));
  writeSummary("research-by-team.md", generateResearchByTeam(graph, idx, findingsData));
  writeSummary("research-by-product.md", generateResearchByProduct(graph, idx, findingsData));
  writeSummary("product-teams.md", generateProductTeams(graph, idx));
  writeSummary("portfolios.md", generatePortfolios(graph, idx, lookupById));

  var findingsIndex = generateFindingsIndex(graph, findingsData);
  if (findingsIndex) {
    writeSummary("research-findings-index.md", findingsIndex);
  }

  console.log("\nDone.");
}

main();
