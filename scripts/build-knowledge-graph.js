#!/usr/bin/env node
/**
 * Knowledge Graph Builder for /products and /teams directories.
 *
 * Crawls markdown, YAML, and JSON documentation files (ignoring binaries),
 * extracts entities (products, teams, portfolios, crews, forms, categories)
 * and the relationships between them, then writes a single JSON knowledge graph.
 *
 * Usage:  node scripts/build-knowledge-graph.js
 * Output: knowledge-graph.json (written to repo root)
 */

const fs = require("fs");
const path = require("path");

// ─── configuration ────────────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname, "..");
const PRODUCTS_DIR = path.join(ROOT, "products");
const TEAMS_DIR = path.join(ROOT, "teams");
const TEAM_LOOKUP = path.join(ROOT, "team-lookup.json");
const OUTPUT = path.join(ROOT, "knowledge-graph.json");

const BINARY_EXTENSIONS = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".bmp", ".ico", ".svg",
  ".pdf", ".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx",
  ".zip", ".gz", ".tar", ".7z", ".rar",
  ".mp4", ".mov", ".avi", ".wmv", ".mp3", ".wav",
  ".sketch", ".fig", ".psd", ".ai",
  ".ttf", ".woff", ".woff2", ".eot",
  ".exe", ".dll", ".so", ".dylib",
  ".DS_Store",
]);

const TEXT_EXTENSIONS = new Set([
  ".md", ".yml", ".yaml", ".json", ".txt", ".csv", ".html", ".htm", ".rb", ".js", ".ts",
]);

// ─── helpers ──────────────────────────────────────────────────────────────────
function isBinary(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (BINARY_EXTENSIONS.has(ext)) return true;
  if (TEXT_EXTENSIONS.has(ext)) return false;
  // For unknown extensions, skip
  return true;
}

function readTextSafe(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    // Quick binary check: look for null bytes in first 512 bytes
    for (let i = 0; i < Math.min(buf.length, 512); i++) {
      if (buf[i] === 0) return null;
    }
    return buf.toString("utf-8");
  } catch {
    return null;
  }
}

/** Recursively collect text files under dir */
function walkTextFiles(dir, maxDepth = 6, depth = 0) {
  const results = [];
  if (depth > maxDepth) return results;
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return results; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    if (e.isDirectory()) {
      results.push(...walkTextFiles(full, maxDepth, depth + 1));
    } else if (e.isFile() && !isBinary(full)) {
      results.push(full);
    }
  }
  return results;
}

/** Slugify a string for use as node ID */
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// ─── graph data structures ───────────────────────────────────────────────────
const nodes = new Map();   // id → node object
const edges = [];          // { source, target, relationship, metadata? }

function addNode(id, type, props = {}) {
  if (!nodes.has(id)) {
    nodes.set(id, { id, type, ...props });
  } else {
    // merge in extra properties
    Object.assign(nodes.get(id), props);
  }
}

function addEdge(source, target, relationship, metadata) {
  edges.push({ source, target, relationship, ...(metadata ? { metadata } : {}) });
}

// ─── 1. Ingest team-lookup.json (canonical team registry) ────────────────────
function ingestTeamLookup() {
  const raw = readTextSafe(TEAM_LOOKUP);
  if (!raw) return;
  let data;
  try { data = JSON.parse(raw); } catch { return; }

  for (const [id, t] of Object.entries(data)) {
    const teamId = `team-${slugify(t.team_name)}`;
    addNode(teamId, "team", {
      name: t.team_name,
      short_name: t.short_name,
      team_id: t.team_id,
      readme_path: t.readme_path,
    });

    // Portfolio
    if (t.portfolio) {
      const pId = `portfolio-${slugify(t.portfolio)}`;
      addNode(pId, "portfolio", { name: t.portfolio });
      addEdge(teamId, pId, "belongs_to_portfolio");
    }

    // Crew / Pod
    if (t.crew_or_pod) {
      const cId = `crew-${slugify(t.crew_or_pod)}`;
      addNode(cId, "crew", { name: t.crew_or_pod });
      addEdge(teamId, cId, "belongs_to_crew");
      if (t.portfolio) {
        addEdge(cId, `portfolio-${slugify(t.portfolio)}`, "part_of_portfolio");
      }
    }
  }
}

// ─── 2. Discover product folders and build product nodes ─────────────────────
function ingestProducts() {
  let entries;
  try { entries = fs.readdirSync(PRODUCTS_DIR, { withFileTypes: true }); } catch { return; }

  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (e.name.startsWith(".") || e.name === "_archive") continue;

    const prodId = `product-${slugify(e.name)}`;
    const prodDir = path.join(PRODUCTS_DIR, e.name);
    const props = { name: e.name, path: `products/${e.name}` };

    // Try to extract info from README or product outline
    const readmePath = findReadme(prodDir);
    if (readmePath) {
      const content = readTextSafe(readmePath);
      if (content) {
        Object.assign(props, extractProductMetadata(content, e.name));
      }
    }

    // Check for YAML details files
    const yamlFiles = findYamlDetails(prodDir);
    for (const yf of yamlFiles) {
      const yContent = readTextSafe(yf);
      if (yContent) {
        const yamlMeta = parseSimpleYaml(yContent);
        if (yamlMeta.name) props.display_name = yamlMeta.name;
        if (yamlMeta.description) props.description = yamlMeta.description;
        if (yamlMeta.status) props.status = yamlMeta.status;
        if (yamlMeta["github-label"]) props.github_label = yamlMeta["github-label"];
        if (yamlMeta.team) props.team_ref = yamlMeta.team;

        // Create sub-product node for each YAML if inside a sub-folder
        const relYaml = path.relative(prodDir, yf);
        if (relYaml.includes(path.sep)) {
          const subName = yamlMeta.name || path.basename(yf, path.extname(yf));
          const subId = `product-${slugify(subName)}`;
          addNode(subId, "product", {
            name: subName,
            description: yamlMeta.description,
            status: yamlMeta.status,
            github_label: yamlMeta["github-label"],
            path: `products/${e.name}/${relYaml}`,
          });
          addEdge(subId, prodId, "sub_product_of");
          linkTeamFromYaml(yamlMeta, subId);
        } else {
          linkTeamFromYaml(yamlMeta, prodId);
        }
      }
    }

    addNode(prodId, "product", props);

    // Discover sub-product directories
    discoverSubProducts(prodDir, prodId, e.name);

    // Detect category (hub) products
    if (isHubProduct(prodDir)) {
      addNode(prodId, "category", { ...props, type: "category" });
    }
  }
}

function findReadme(dir) {
  for (const name of ["README.md", "readme.md", "Readme.md"]) {
    const p = path.join(dir, name);
    if (fs.existsSync(p)) return p;
  }
  // Also look for product outline
  for (const name of fs.readdirSync(dir).filter(n => /product[_-]?outline/i.test(n) && n.endsWith(".md"))) {
    return path.join(dir, name);
  }
  return null;
}

function findYamlDetails(dir, maxDepth = 3, depth = 0) {
  const results = [];
  if (depth > maxDepth) return results;
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return results; }
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory() && depth < maxDepth) {
      results.push(...findYamlDetails(full, maxDepth, depth + 1));
    } else if (e.isFile() && /details\.ya?ml$/i.test(e.name)) {
      results.push(full);
    }
  }
  return results;
}

function parseSimpleYaml(content) {
  const result = {};
  const lines = content.split("\n");
  for (const line of lines) {
    const m = line.match(/^(\w[\w-]*):\s*"?([^"#\n]+)"?\s*(?:#.*)?$/);
    if (m) {
      result[m[1].trim()] = m[2].trim().replace(/^"|"$/g, "");
    }
  }
  return result;
}

function linkTeamFromYaml(yamlMeta, nodeId) {
  if (!yamlMeta.team) return;
  // Extract team short-name from URL
  const m = yamlMeta.team.match(/teams\/[^/]+\/([^/]+)\//);
  if (m) {
    const teamSlug = slugify(m[1]);
    // Try to find matching team node
    for (const [tid, tnode] of nodes) {
      if (tnode.type === "team" && (slugify(tnode.short_name || "") === teamSlug || tid === `team-${teamSlug}`)) {
        addEdge(tid, nodeId, "owns_product");
        return;
      }
    }
    // Create a placeholder team node
    const tid = `team-${teamSlug}`;
    addNode(tid, "team", { name: m[1], short_name: m[1] });
    addEdge(tid, nodeId, "owns_product");
  }
}

function extractProductMetadata(content, folderName) {
  const props = {};

  // Extract title from first H1
  const h1 = content.match(/^#\s+(.+)/m);
  if (h1) props.display_name = h1[1].trim();

  // Extract description (first substantive paragraph)
  const paras = content.split(/\n\n/).filter(p => p.trim() && !p.trim().startsWith("#"));
  if (paras.length > 0) {
    const desc = paras[0].replace(/\n/g, " ").trim();
    if (desc.length > 10 && desc.length < 500) props.description = desc;
  }

  // Detect Slack channels
  const slackMatches = content.match(/#[a-z][a-z0-9_-]{2,}/g);
  if (slackMatches) {
    props.slack_channels = [...new Set(slackMatches)].slice(0, 5);
  }

  // Detect GitHub labels
  const labelMatch = content.match(/(?:github[\s-]*label|label):\s*[`"]?([^`"\n]+)/i);
  if (labelMatch) props.github_label = labelMatch[1].trim();

  // Detect related VA.gov URLs
  const vaUrls = content.match(/https?:\/\/(?:www\.)?va\.gov\/[^\s)>"]+/g);
  if (vaUrls) props.va_urls = [...new Set(vaUrls)].slice(0, 5);

  // Detect team references (links to team folders or team-sensitive repo)
  const teamRefs = content.match(/teams\/[a-z-]+\/[a-z][a-z0-9_-]+/gi);
  if (teamRefs) props.team_references = [...new Set(teamRefs)];

  // Detect cross-product references
  const productRefs = content.match(/products\/[a-z][a-z0-9_/-]+/gi);
  if (productRefs) {
    props.product_references = [...new Set(productRefs)]
      .map(r => r.replace(/\/$/, ""))
      .filter(r => r !== `products/${folderName}`);
  }

  // Detect VA form numbers
  const formNums = content.match(/\b((?:VA\s*)?(?:Form\s*)?(?:10-\d{2,5}[A-Z]?|2[0-6]-\d{3,5}[A-Za-z]?|40-\d{4}))\b/gi);
  if (formNums) {
    props.form_numbers = [...new Set(formNums.map(f => f.replace(/^(VA\s*)?Form\s*/i, "").trim()))].slice(0, 10);
  }

  return props;
}

function isHubProduct(dir) {
  const readme = findReadme(dir);
  if (!readme) return false;
  const content = readTextSafe(readme);
  if (!content) return false;
  return (content.length < 1500 && /browse.*sub-?folders|sub-?folders|hub/i.test(content));
}

function discoverSubProducts(parentDir, parentId, parentFolder) {
  let entries;
  try { entries = fs.readdirSync(parentDir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (e.name.startsWith(".") || e.name === "_archive" || e.name === "node_modules") continue;
    // Skip common non-product subdirs
    if (["engineering", "design", "research", "images", "assets", "files", "screenshots",
         "collaboration-cycle", "quarterly", "templates", "team-docs", "onboarding",
         "team-meetings", "meeting-notes", "sprint-objectives"].includes(e.name.toLowerCase())) continue;

    const subDir = path.join(parentDir, e.name);
    const readme = findReadme(subDir);
    if (readme) {
      const content = readTextSafe(readme);
      if (content && content.length > 200) {
        // Looks like a real sub-product
        const subId = `product-${slugify(parentFolder)}-${slugify(e.name)}`;
        const meta = extractProductMetadata(content, e.name);
        addNode(subId, "product", {
          name: meta.display_name || e.name,
          path: `products/${parentFolder}/${e.name}`,
          ...meta,
        });
        addEdge(subId, parentId, "sub_product_of");
      }
    }
  }
}

// ─── 3. Scan team folder READMEs for additional relationships ────────────────
function ingestTeamDocs() {
  const textFiles = walkTextFiles(TEAMS_DIR, 4);
  const readmes = textFiles.filter(f => /readme\.md$/i.test(f));

  for (const readmePath of readmes) {
    const content = readTextSafe(readmePath);
    if (!content) continue;

    const relPath = path.relative(ROOT, readmePath);
    const dirName = path.basename(path.dirname(readmePath));

    // Try to match this README to an existing team node
    let teamNode = null;
    for (const [tid, n] of nodes) {
      if (n.type === "team" && n.readme_path && relPath.endsWith(n.readme_path.replace(/^\//, ""))) {
        teamNode = n;
        break;
      }
    }
    if (!teamNode) {
      // Try matching by directory name
      for (const [tid, n] of nodes) {
        if (n.type === "team" && slugify(n.short_name || "") === slugify(dirName)) {
          teamNode = n;
          break;
        }
      }
    }

    // Extract product mentions from team READMEs
    const productRefs = content.match(/products\/[a-z][a-z0-9_\/-]+/gi);
    if (productRefs && teamNode) {
      for (const ref of new Set(productRefs)) {
        const cleanRef = ref.replace(/\/$/, "").replace(/\/readme\.md$/i, "");
        const parts = cleanRef.split("/").filter(Boolean);
        if (parts.length >= 2) {
          const pSlug = slugify(parts[1]);
          const pId = `product-${pSlug}`;
          if (nodes.has(pId)) {
            addEdge(teamNode.id, pId, "works_on_product");
          }
        }
      }
    }

    // Extract Slack channels mentioned
    const slackChannels = content.match(/#[a-z][a-z0-9_-]{2,}/g);
    if (slackChannels && teamNode) {
      teamNode.slack_channels = [...new Set(slackChannels)].slice(0, 10);
    }

    // Extract team-to-team mentions (collaborates with)
    const teamMentions = content.match(/teams\/[a-z-]+\/[a-z][a-z0-9_-]+/gi);
    if (teamMentions && teamNode) {
      for (const ref of new Set(teamMentions)) {
        const parts = ref.split("/").filter(Boolean);
        if (parts.length >= 3) {
          const otherSlug = slugify(parts[2]);
          for (const [tid, n] of nodes) {
            if (n.type === "team" && tid !== teamNode.id &&
                (slugify(n.short_name || "") === otherSlug || tid === `team-${otherSlug}`)) {
              addEdge(teamNode.id, tid, "collaborates_with");
            }
          }
        }
      }
    }
  }
}

// ─── 4. Scan product docs for cross-product links ───────────────────────────
function ingestCrossProductLinks() {
  const textFiles = walkTextFiles(PRODUCTS_DIR, 3);
  const mdFiles = textFiles.filter(f => f.endsWith(".md"));

  for (const mdPath of mdFiles) {
    const content = readTextSafe(mdPath);
    if (!content) continue;

    const relPath = path.relative(PRODUCTS_DIR, mdPath);
    const topFolder = relPath.split(path.sep)[0];
    const sourceId = `product-${slugify(topFolder)}`;
    if (!nodes.has(sourceId)) continue;

    // Find references to OTHER product folders
    const refs = content.match(/products\/([a-z][a-z0-9_-]+)/gi);
    if (!refs) continue;

    for (const ref of new Set(refs)) {
      const parts = ref.split("/").filter(Boolean);
      if (parts.length >= 2) {
        const targetSlug = slugify(parts[1]);
        const targetId = `product-${targetSlug}`;
        if (targetId !== sourceId && nodes.has(targetId)) {
          addEdge(sourceId, targetId, "references_product");
        }
      }
    }

    // Find references to external systems (Lighthouse, vets-api, etc.)
    const extSystems = [];
    if (/lighthouse/i.test(content)) extSystems.push("Lighthouse API");
    if (/vets-api/i.test(content)) extSystems.push("vets-api");
    if (/vets-website/i.test(content)) extSystems.push("vets-website");
    if (/datadog/i.test(content)) extSystems.push("Datadog");
    if (/\bCMS\b/.test(content)) extSystems.push("CMS");

    for (const sys of extSystems) {
      const sysId = `system-${slugify(sys)}`;
      addNode(sysId, "external_system", { name: sys });
      addEdge(sourceId, sysId, "integrates_with");
    }
  }
}

// ─── 5. Detect form entities and link them ──────────────────────────────────
function linkFormEntities() {
  // VA form numbers from product folder names
  for (const [nid, n] of nodes) {
    if (n.type !== "product") continue;
    const formMatch = (n.name || "").match(/^(\d{1,2}-\d{3,5}[A-Za-z]?)$/);
    if (formMatch) {
      const formId = `form-${slugify(formMatch[1])}`;
      addNode(formId, "form", { form_number: formMatch[1] });
      addEdge(nid, formId, "implements_form");
    }
    if (n.form_numbers) {
      for (const fn of n.form_numbers) {
        const fid = `form-${slugify(fn)}`;
        addNode(fid, "form", { form_number: fn });
        addEdge(nid, fid, "implements_form");
      }
    }
  }
}

// ─── 6. Deduplicate edges ────────────────────────────────────────────────────
function deduplicateEdges() {
  const seen = new Set();
  const unique = [];
  for (const e of edges) {
    const key = `${e.source}|${e.target}|${e.relationship}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(e);
    }
  }
  edges.length = 0;
  edges.push(...unique);
}

// ─── 7. Compute graph statistics ─────────────────────────────────────────────
function computeStats() {
  const typeCounts = {};
  for (const [, n] of nodes) {
    typeCounts[n.type] = (typeCounts[n.type] || 0) + 1;
  }
  const relCounts = {};
  for (const e of edges) {
    relCounts[e.relationship] = (relCounts[e.relationship] || 0) + 1;
  }
  return {
    total_nodes: nodes.size,
    total_edges: edges.length,
    nodes_by_type: typeCounts,
    edges_by_relationship: relCounts,
  };
}

// ─── main ────────────────────────────────────────────────────────────────────
function main() {
  console.log("Building knowledge graph...\n");

  console.log("  [1/6] Ingesting team-lookup.json ...");
  ingestTeamLookup();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [2/6] Discovering products ...");
  ingestProducts();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [3/6] Scanning team documentation ...");
  ingestTeamDocs();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [4/6] Extracting cross-product links ...");
  ingestCrossProductLinks();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [5/6] Linking form entities ...");
  linkFormEntities();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [6/6] Deduplicating edges ...");
  deduplicateEdges();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges (deduped)\n`);

  const stats = computeStats();
  console.log("Graph statistics:");
  console.log(`  Nodes: ${stats.total_nodes}`);
  for (const [t, c] of Object.entries(stats.nodes_by_type).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${t}: ${c}`);
  }
  console.log(`  Edges: ${stats.total_edges}`);
  for (const [r, c] of Object.entries(stats.edges_by_relationship).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${r}: ${c}`);
  }

  const graph = {
    _meta: {
      generated: new Date().toISOString(),
      description: "Knowledge graph of VA.gov products and teams",
      source_directories: ["products/", "teams/", "team-lookup.json"],
    },
    statistics: stats,
    nodes: [...nodes.values()],
    edges,
  };

  fs.writeFileSync(OUTPUT, JSON.stringify(graph, null, 2));
  console.log(`\nKnowledge graph written to: ${path.relative(ROOT, OUTPUT)}`);
}

main();
