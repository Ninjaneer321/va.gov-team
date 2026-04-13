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

  console.log("\nDone.");
}

main();
