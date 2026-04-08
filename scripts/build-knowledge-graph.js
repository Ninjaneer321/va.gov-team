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

// ─── 6. Discover and ingest research studies ─────────────────────────────────

/** Parse proper ---...--- YAML frontmatter from Markdown content */
function parseYamlFrontmatter(content) {
  const result = {};
  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!fmMatch) return result;
  const fmText = fmMatch[1];

  // Walk line-by-line tracking indent depth for arrays and objects
  const lines = fmText.split("\n");
  let i = 0;

  function parseLines(minIndent) {
    const obj = {};
    while (i < lines.length) {
      const raw = lines[i];
      // Strip inline comments (but only outside quotes)
      const line = raw.replace(/\s+#[^"']*$/, "");
      const indent = raw.search(/\S/);
      if (indent < 0) { i++; continue; } // blank line
      if (indent < minIndent) break; // dedented — return to parent

      // Sequence item at this indent
      const seqMatch = line.match(/^(\s*)-\s+(.*)/);
      if (seqMatch && indent === minIndent) {
        i++;
        // Look ahead for nested object items on next lines
        const val = seqMatch[2].trim();
        if (val === "") {
          // Block sequence item — skip
        } else if (val.includes(":")) {
          // Could be a key:val on same line — treat as string
          obj[`_seq_${Object.keys(obj).length}`] = val.replace(/^["']|["']$/g, "");
        } else {
          obj[`_seq_${Object.keys(obj).length}`] = val.replace(/^["']|["']$/g, "");
        }
        continue;
      }

      // Key: value pair
      const kvMatch = line.match(/^(\s*)([\w][\w\-. ]*):\s*(.*)/);
      if (!kvMatch) { i++; continue; }
      const key = kvMatch[2].trim();
      let val = kvMatch[3].trim().replace(/^["']|["']$/g, "");
      i++;

      if (val === "" || val === "|" || val === ">") {
        // Next lines may be block scalar or nested — peek ahead
        if (i < lines.length) {
          const nextLine = lines[i];
          const nextIndent = nextLine.search(/\S/);
          if (nextIndent > indent && nextLine.trimStart().startsWith("- ")) {
            // Array block
            const arr = [];
            while (i < lines.length) {
              const al = lines[i];
              const ai = al.search(/\S/);
              if (ai < 0) { i++; continue; }
              if (ai <= indent) break;
              const am = al.match(/^\s*-\s*(.*)/);
              if (am) {
                const av = am[1].trim().replace(/^["']|["']$/g, "");
                // Handle goal_N: "text" format
                const goalM = av.match(/^goal_\d+:\s*"?([^"]+)"?$/);
                arr.push(goalM ? goalM[1].trim() : av);
                i++;
              } else {
                i++;
              }
            }
            obj[key] = arr;
          } else if (nextIndent > indent) {
            // Nested object — recurse
            const nested = parseLines(nextIndent);
            obj[key] = nested;
          }
        }
      } else {
        obj[key] = val;
      }
    }
    return obj;
  }

  return parseLines(0);
}

/** Classify a research file by its name into plan/findings/conversation_guide */
function classifyResearchFile(fileName) {
  const name = fileName.toLowerCase();
  if (/research[-_. ]?plan|researchplan/.test(name)) return "plan";
  if (/findings|readout|topline|report/.test(name)) return "findings";
  if (/conversation[-_. ]?guide|conversationguide|discussion[-_. ]?guide|discussionguide/.test(name)) return "conversation_guide";
  return null;
}

/** Recursively find directories named 'research' or 'user research' (case-insensitive) */
function findResearchDirs(baseDir, maxDepth = 6, depth = 0) {
  const results = [];
  if (depth > maxDepth) return results;
  let entries;
  try { entries = fs.readdirSync(baseDir, { withFileTypes: true }); } catch { return results; }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (e.name.startsWith(".") || e.name === "node_modules" || e.name === "_archive") continue;
    const nameLower = e.name.toLowerCase();
    if (nameLower === "research" || nameLower === "user research") {
      results.push(path.join(baseDir, e.name));
    } else {
      results.push(...findResearchDirs(path.join(baseDir, e.name), maxDepth, depth + 1));
    }
  }
  return results;
}

/** Extract research metadata from a Markdown file using frontmatter or heading-based parsing */
function extractResearchMetadata(content, dirName) {
  const meta = {};

  // ── Format A / C: YAML frontmatter ──────────────────────────────────────────
  const fm = parseYamlFrontmatter(content);

  if (fm.title) meta.title = fm.title;
  if (fm.team) meta.team_hint = fm.team;
  if (fm.methodology) meta.methodology = fm.methodology;
  if (fm.date) meta.fm_date = String(fm.date);

  // Research goals — may be array of strings or array of {goal_N: text} objects
  const goals = fm.research_goals;
  if (Array.isArray(goals) && goals.length) {
    meta.research_goals = goals.map(g => {
      if (typeof g === "string") return g;
      if (typeof g === "object") return Object.values(g)[0] || "";
      return String(g);
    }).filter(Boolean);
  }

  // Tags — flat array of strings
  const tags = fm.tags;
  if (Array.isArray(tags) && tags.length) {
    meta.tags = tags.filter(t => typeof t === "string");
  }

  // Participant types from demographics or key fields
  const participantTypes = [];
  const checkFields = [
    fm.demographics,
    fm.recruitment,
    fm.participants,
  ];
  const ptKeywords = { veterans: "Veterans", service_members: "Service Members",
    caregivers: "Caregivers", dependents: "Dependents", VA_staff: "VA Staff" };
  for (const block of checkFields) {
    if (block && typeof block === "object") {
      for (const [k, label] of Object.entries(ptKeywords)) {
        if (block[k] !== undefined) participantTypes.push(label);
      }
    }
  }

  // ── Format B: heading-based fallback ────────────────────────────────────────
  if (!meta.title) {
    const h1 = content.match(/^#\s+(.+)/m);
    if (h1) meta.title = h1[1].trim();
  }

  if (!meta.methodology) {
    const methSection = content.match(/##\s+(?:Methodology|Method)\s*\n+([\s\S]*?)(?=\n##|\n---|\n\*\*|\s*$)/i);
    if (methSection) {
      const firstPara = methSection[1].split(/\n\n/)[0].replace(/\n/g, " ").trim();
      if (firstPara && firstPara.length < 300) meta.methodology = firstPara;
    }
  }

  if (!meta.research_goals) {
    const goalsSection = content.match(/##\s+(?:Research Goals?|Goals?)\s*\n+([\s\S]*?)(?=\n##|\n---|\s*$)/i);
    if (goalsSection) {
      const bullets = [...goalsSection[1].matchAll(/[-*]\s+(.+)/g)].map(m => m[1].trim());
      if (bullets.length) meta.research_goals = bullets;
    }
  }

  // Participant types from headings content
  if (!participantTypes.length) {
    const ptSection = content.match(/##\s+(?:Participants?|Recruitment)\s*\n+([\s\S]*?)(?=\n##|\n---|\s*$)/i);
    if (ptSection) {
      const s = ptSection[1].toLowerCase();
      if (s.includes("veteran")) participantTypes.push("Veterans");
      if (s.includes("caregiver")) participantTypes.push("Caregivers");
      if (s.includes("dependent")) participantTypes.push("Dependents");
      if (s.includes("family member")) participantTypes.push("Family Members");
      if (/\bvso\b/.test(s)) participantTypes.push("VSOs");
      if (s.includes("service member")) participantTypes.push("Service Members");
    }
  }

  // Also scan whole content for participant keywords if still empty
  if (!participantTypes.length) {
    const c = content.toLowerCase();
    if (/\bveterans?\b/.test(c)) participantTypes.push("Veterans");
    if (/\bcaregivers?\b/.test(c)) participantTypes.push("Caregivers");
    if (/\bdependents?\b/.test(c)) participantTypes.push("Dependents");
    if (/\bservice members?\b/.test(c)) participantTypes.push("Service Members");
  }
  if (participantTypes.length) meta.participant_types = [...new Set(participantTypes)];

  // ── Date from directory name ─────────────────────────────────────────────────
  if (!meta.fm_date) {
    const dateMatch = dirName.match(/^(\d{4}-\d{2}(?:-\d{2})?)/);
    if (dateMatch) meta.date = dateMatch[1];
  } else {
    // Use frontmatter date but trim to YYYY-MM if it's a full date
    const d = String(meta.fm_date);
    const m = d.match(/^(\d{4}-\d{2})/);
    meta.date = m ? m[1] : d;
    delete meta.fm_date;
  }

  // ── VA form references ───────────────────────────────────────────────────────
  const formNums = content.match(/\b(?:VA\s*)?(?:Form\s*)?(?:10-\d{2,5}[A-Z]?|2[0-6]-\d{3,5}[A-Za-z]?|40-\d{4})\b/gi);
  if (formNums) {
    meta.form_references = [...new Set(formNums.map(f => f.replace(/^(VA\s*)?Form\s*/i, "").trim()))].slice(0, 5);
  }

  return meta;
}

/** Resolve team ownership using team-lookup.json data, in priority order */
function resolveTeamForResearch(teamHint, parentProductId, studyContent, teamLookupData) {
  if (!teamLookupData) return null;

  const teams = [...nodes.values()].filter(n => n.type === "team");

  // Priority 1: YAML frontmatter team: hint → fuzzy match
  if (teamHint) {
    const hint = teamHint.toLowerCase().trim();
    for (const t of teams) {
      const nm = (t.name || "").toLowerCase();
      const sn = (t.short_name || "").toLowerCase();
      if (nm === hint || sn === hint || nm.includes(hint) || hint.includes(nm) ||
          sn.includes(hint) || hint.includes(sn)) {
        return t.id;
      }
    }
    // Fuzzy: check if first word of hint matches any team name word
    const hintWords = hint.split(/[\s-]+/).filter(w => w.length > 3);
    for (const t of teams) {
      const nm = (t.name || "").toLowerCase();
      if (hintWords.some(w => nm.includes(w))) return t.id;
    }
  }

  // Priority 2: parent product's github_label → match against team short_name
  if (parentProductId && nodes.has(parentProductId)) {
    const prod = nodes.get(parentProductId);
    if (prod.github_label) {
      const gl = prod.github_label.toLowerCase();
      for (const t of teams) {
        const sn = (t.short_name || "").toLowerCase();
        if (sn && gl.includes(sn)) return t.id;
      }
    }
    // Also follow existing owns_product / works_on_product edges
    for (const e of edges) {
      if ((e.relationship === "owns_product" || e.relationship === "works_on_product") &&
          e.target === parentProductId) {
        return e.source;
      }
    }
  }

  // Priority 3: explicit teams/{portfolio}/{team} mentions in content
  if (studyContent) {
    const teamRefs = studyContent.match(/teams\/[a-z-]+\/([a-z][a-z0-9_-]+)/gi);
    if (teamRefs) {
      for (const ref of teamRefs) {
        const parts = ref.split("/").filter(Boolean);
        if (parts.length >= 3) {
          const slug = slugify(parts[2]);
          for (const t of teams) {
            if (t.id === `team-${slug}` || slugify(t.short_name || "") === slug) {
              return t.id;
            }
          }
        }
      }
    }
  }

  // Priority 4: product folder name matches team short_name (e.g. product-ask-va → team-ask-va)
  if (parentProductId) {
    const prodSlug = parentProductId.replace(/^product-/, "");
    for (const t of teams) {
      const sn = slugify(t.short_name || "");
      if (sn && sn === prodSlug) return t.id;
    }
    // Also try matching product name words against team short_name
    const prodWords = prodSlug.split("-").filter(w => w.length > 2);
    for (const t of teams) {
      const sn = slugify(t.short_name || "");
      if (sn && prodWords.every(w => sn.includes(w))) return t.id;
    }
  }

  return null;
}

/** Main research study ingestion */
function ingestResearchStudies() {
  // Load team-lookup data for team resolution
  let teamLookupData = null;
  try {
    const raw = readTextSafe(TEAM_LOOKUP);
    if (raw) teamLookupData = JSON.parse(raw);
  } catch { /* ignore */ }

  const SKIP_DIRS = new Set(["images", "assets", "screenshots", "files"]);

  // Collect all research base directories from both products/ and teams/
  const researchDirs = [
    ...findResearchDirs(PRODUCTS_DIR),
    ...findResearchDirs(TEAMS_DIR),
  ];

  for (const researchDir of researchDirs) {
    const relResearchDir = path.relative(ROOT, researchDir);

    // Determine parent product (for products/ path) or team (for teams/ path)
    const isProductsPath = researchDir.startsWith(PRODUCTS_DIR);
    let parentProductId = null;

    if (isProductsPath) {
      const rel = path.relative(PRODUCTS_DIR, researchDir);
      const topFolder = rel.split(path.sep)[0];
      parentProductId = `product-${slugify(topFolder)}`;
      if (!nodes.has(parentProductId)) parentProductId = null;
    }

    // Read study subdirectories (each = one study node)
    let entries;
    try { entries = fs.readdirSync(researchDir, { withFileTypes: true }); } catch { continue; }

    const studyDirs = entries.filter(e => e.isDirectory() && !e.name.startsWith(".") &&
      !SKIP_DIRS.has(e.name.toLowerCase()));
    const directMdFiles = entries.filter(e => e.isFile() && e.name.endsWith(".md") &&
      !isBinary(path.join(researchDir, e.name)));

    // If only markdown files directly in the research/ dir (no study subdirs), treat folder itself as one study
    if (studyDirs.length === 0 && directMdFiles.length > 0) {
      processStudy(researchDir, relResearchDir, parentProductId, teamLookupData);
    } else {
      for (const sd of studyDirs) {
        const studyPath = path.join(researchDir, sd.name);
        const relStudyPath = path.relative(ROOT, studyPath);
        processStudy(studyPath, relStudyPath, parentProductId, teamLookupData);
      }
    }
  }
}

/** Process a single study directory: create node and edges */
function processStudy(studyDir, relStudyPath, parentProductId, teamLookupData) {
  const dirName = path.basename(studyDir);

  // Collect .md files in this study directory (non-recursive)
  let entries;
  try { entries = fs.readdirSync(studyDir, { withFileTypes: true }); } catch { return; }
  const mdFiles = entries.filter(e => e.isFile() && e.name.endsWith(".md") &&
    !isBinary(path.join(studyDir, e.name)));

  if (mdFiles.length === 0) return; // No markdown content — skip

  // Build files classification
  const fileMap = { plan: null, findings: null, conversation_guide: null };
  for (const mf of mdFiles) {
    const category = classifyResearchFile(mf.name);
    if (!category) continue;
    const relFile = path.join(relStudyPath, mf.name).replace(/\\/g, "/");
    if (fileMap[category] === null) {
      fileMap[category] = relFile;
    } else if (Array.isArray(fileMap[category])) {
      fileMap[category].push(relFile);
    } else {
      fileMap[category] = [fileMap[category], relFile];
    }
  }

  // Extract metadata by reading and merging all classified md files
  let combinedMeta = {};
  let combinedContent = "";
  for (const mf of mdFiles) {
    const content = readTextSafe(path.join(studyDir, mf.name));
    if (!content) continue;
    combinedContent += "\n" + content;
    const meta = extractResearchMetadata(content, dirName);
    // Merge: first wins for most fields, arrays accumulate
    for (const [k, v] of Object.entries(meta)) {
      if (!combinedMeta[k]) {
        combinedMeta[k] = v;
      } else if (k === "tags" && Array.isArray(v)) {
        combinedMeta.tags = [...new Set([...(combinedMeta.tags || []), ...v])];
      } else if (k === "research_goals" && Array.isArray(v) && !combinedMeta.research_goals) {
        combinedMeta.research_goals = v;
      }
    }
  }

  // Generate stable node ID from relative path
  const nodeId = `research-${slugify(relStudyPath)}`;

  // Build node
  const nodeProps = {
    path: relStudyPath.replace(/\\/g, "/"),
    files: fileMap,
  };
  if (combinedMeta.date) nodeProps.date = combinedMeta.date;
  if (combinedMeta.title) nodeProps.name = combinedMeta.title;
  if (combinedMeta.methodology) nodeProps.methodology = combinedMeta.methodology;
  if (combinedMeta.participant_types) nodeProps.participant_types = combinedMeta.participant_types;
  if (combinedMeta.research_goals) nodeProps.research_goals = combinedMeta.research_goals.slice(0, 5);
  if (combinedMeta.tags) nodeProps.tags = combinedMeta.tags;

  addNode(nodeId, "research_study", nodeProps);

  // Edge: parent product → has_research → study
  if (parentProductId) {
    addEdge(parentProductId, nodeId, "has_research");
  }

  // Edge: team → conducted_research → study
  const teamId = resolveTeamForResearch(
    combinedMeta.team_hint, parentProductId, combinedContent, teamLookupData
  );
  if (teamId) {
    addEdge(teamId, nodeId, "conducted_research");
  }

  // Edges: study → research_references_product → product
  const productRefs = combinedContent.match(/products\/([a-z][a-z0-9_/-]+)/gi);
  if (productRefs) {
    for (const ref of new Set(productRefs)) {
      const parts = ref.split("/").filter(Boolean);
      if (parts.length >= 2) {
        const targetId = `product-${slugify(parts[1])}`;
        if (targetId !== parentProductId && nodes.has(targetId)) {
          addEdge(nodeId, targetId, "research_references_product");
        }
      }
    }
  }

  // Edges: study → research_for_form → form
  if (combinedMeta.form_references) {
    for (const fn of combinedMeta.form_references) {
      const fid = `form-${slugify(fn)}`;
      if (nodes.has(fid)) {
        addEdge(nodeId, fid, "research_for_form");
      }
    }
  }
}

// ─── 7. Deduplicate edges ────────────────────────────────────────────────────
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

// ─── 8. Compute graph statistics ─────────────────────────────────────────────
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

  console.log("  [1/7] Ingesting team-lookup.json ...");
  ingestTeamLookup();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [2/7] Discovering products ...");
  ingestProducts();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [3/7] Scanning team documentation ...");
  ingestTeamDocs();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [4/7] Extracting cross-product links ...");
  ingestCrossProductLinks();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [5/7] Linking form entities ...");
  linkFormEntities();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [6/7] Discovering research studies ...");
  ingestResearchStudies();
  console.log(`         → ${nodes.size} nodes, ${edges.length} edges`);

  console.log("  [7/7] Deduplicating edges ...");
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
