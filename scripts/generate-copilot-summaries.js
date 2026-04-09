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
const SUMMARIES_DIR = path.join(ROOT, ".github", "copilot-summaries");

// ─── helpers ─────────────────────────────────────────────────────────────────

function loadGraph() {
  if (!fs.existsSync(KG_PATH)) {
    console.error("ERROR: " + KG_PATH + " not found.");
    console.error("Run  node scripts/build-knowledge-graph.js  first.");
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(KG_PATH, "utf8"));
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

/** Format a single research study as a Markdown bullet. */
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
  var linkPart = s.path ? " · [view](" + s.path + ")" : "";
  return "  - **" + label + "**" + datePart + methodPart + participantPart + linkPart;
}

function byName(a, b) {
  return (a.name || a.id).localeCompare(b.name || b.id, undefined, { sensitivity: "base" });
}

// ─── generators ──────────────────────────────────────────────────────────────

function generateTeams(graph, idx) {
  var teams = graph.nodes.filter(function (n) { return n.type === "team"; }).sort(byName);
  var lines = [
    "# VA.gov Teams Directory",
    "",
    "> Auto-generated from `.github/knowledge-graph.json` on " + graph._meta.generated.slice(0, 10) + ".",
    "> Edit the source data, not this file.",
    "",
    teams.length + " teams across all portfolios.",
    ""
  ];

  teams.forEach(function (team) {
    lines.push("## " + team.name);
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
      lines.push("- **README**: [" + team.readme_path + "](" + team.readme_path + ")");
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

function generateResearchByTeam(graph, idx) {
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
    studies.forEach(function (s) { lines.push(studyBullet(s)); });
    lines.push("");
  });

  return lines.join("\n");
}

function generateResearchByProduct(graph, idx) {
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
    item.studies.sort(byName).forEach(function (s) { lines.push(studyBullet(s)); });
    lines.push("");
  });

  return lines.join("\n");
}

function generatePortfolios(graph, idx) {
  var portfolios = graph.nodes.filter(function (n) { return n.type === "portfolio"; }).sort(byName);
  var lines = [
    "# VA.gov Portfolio Hierarchy",
    "",
    "> Auto-generated from `.github/knowledge-graph.json` on " + graph._meta.generated.slice(0, 10) + ".",
    "> Edit the source data, not this file.",
    "",
    "Organisational hierarchy: Portfolio → Crew → Team → Products.",
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
        lines.push("#### " + team.name);
        if (team.readme_path) lines.push("*README: [" + team.readme_path + "](" + team.readme_path + ")*");
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
        lines.push("- **" + team.name + "**");
        if (team.readme_path) lines.push("  *README: [" + team.readme_path + "](" + team.readme_path + ")*");
      });
      lines.push("");
    }

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

  writeSummary("teams.md", generateTeams(graph, idx));
  writeSummary("research-by-team.md", generateResearchByTeam(graph, idx));
  writeSummary("research-by-product.md", generateResearchByProduct(graph, idx));
  writeSummary("portfolios.md", generatePortfolios(graph, idx));

  console.log("\nDone.");
}

main();
