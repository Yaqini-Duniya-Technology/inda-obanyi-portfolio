import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import projects from "../src/data/projects.js";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const publicDir = path.join(root, "public");
const config = JSON.parse(readFileSync(path.join(root, "vercel.json"), "utf8"));
const errors = [];
const note = (msg) => errors.push(msg);
const ids = new Set();

function checkLocalAsset(value, context) {
  if (!value) return;
  if (/^https?:\/\//i.test(value)) {
    try { new URL(value); } catch { note(`${context}: invalid external URL`); }
    return;
  }
  if (!value.startsWith("/") || value.startsWith("//") || value.includes("?")) {
    note(`${context}: expected a root-relative asset path`);
    return;
  }
  const asset = path.resolve(publicDir, "." + value);
  if (!asset.startsWith(publicDir + path.sep) || !existsSync(asset)) {
    note(`${context}: missing public asset ${value}`);
  }
}

function checkExternalLink(value, context) {
  if (!value) return;
  try {
    const url = new URL(value);
    if (!["https:", "http:"].includes(url.protocol)) note(`${context}: unsupported protocol`);
  } catch { note(`${context}: malformed URL`); }
}

assert.ok(existsSync(path.join(dist, "index.html")), "dist/index.html is missing");
const template = readFileSync(path.join(dist, "index.html"), "utf8");
if (!/<html\b[^>]*\blang=["'][^"']+["']/i.test(template)) {
  note("Homepage missing HTML language");
}
if (!/<meta\b[^>]*\bname=["']viewport["']/i.test(template)) {
  note("Homepage missing viewport metadata");
}
if (!/<title\b[^>]*>.+<\/title>/i.test(template)) {
  note("Homepage missing title");
}

for (const project of projects) {
  if (!project.id || ids.has(project.id)) {
    note(`Invalid or duplicate project id: ${project.id}`);
    continue;
  }
  ids.add(project.id);
  const file = path.join(dist, "projects", project.id, "index.html");
  if (!existsSync(file)) {
    note(`${project.id}: generated page missing`);
    continue;
  }
  const html = readFileSync(file, "utf8");
  const canonical = `https://indaobanyi.vercel.app/projects/${project.id}`;
  if (!html.includes(canonical)) note(`${project.id}: canonical missing`);
  if (!html.includes("application/ld+json")) note(`${project.id}: structured data missing`);
  if (!html.includes('og:image:alt')) note(`${project.id}: image alt metadata missing`);
  checkLocalAsset(project.image, `${project.id} image`);
  checkExternalLink(project.github, `${project.id} GitHub`);
  checkExternalLink(project.demo, `${project.id} demo`);
  for (const item of project.engineeringEvidence || []) {
    if (!item.label?.trim()) note(`${project.id}: unlabeled evidence link`);
    if (!item.url) note(`${project.id}: evidence link missing URL`);
    else checkExternalLink(item.url, `${project.id} evidence`);
  }
}
for (const id of ["fraudguard-ai", "smart-farmai"]) {
  const project = projects.find(p => p.id === id);
  if (!project?.github || !project.engineeringEvidence?.length) {
    note(`${id}: missing verified evidence links`);
  }
}
for (const route of config.rewrites || []) {
  if (route.source === "/(.*)") continue;
  if (route.destination.startsWith("/projects/")) {
    const output = path.join(dist, route.destination);
    if (!existsSync(output)) note(`Vercel rewrite points to missing output: ${route.destination}`);
  }
}

// Source-level accessibility and navigation regressions.
// These checks supplement, but do not replace, a browser-based WCAG audit.
const navbar = readFileSync(path.join(root, "src/components/Navbar.jsx"), "utf8");
const projectCard = readFileSync(path.join(root, "src/components/ProjectCard.jsx"), "utf8");
const details = readFileSync(path.join(root, "src/pages/ProjectDetails.jsx"), "utf8");
if (navbar.includes('</button>src=')) note("Navbar contains stray image source text");
if (!/aria-expanded=\{mobileOpen\}/.test(navbar)) {
  note("Mobile menu is missing expanded-state semantics");
}
if (!/aria-label=\{[^}]*Open navigation menu/s.test(navbar)) {
  note("Mobile menu control needs an accessible label");
}
if (!/src="\/images\/navbar-logo.webp"/.test(navbar)) {
  note("Navbar logo source is missing");
}
if (!/aria-label=\{`View \$\{project.title\} case study`\}/.test(projectCard)) {
  note("Project card link is missing a meaningful accessible name");
}
if (!/rel="noopener noreferrer"/.test(details)) {
  note("External case-study actions must use safe new-tab relationship");
}
for (const segment of ["/#about", "/#skills", "/#projects", "/#experience", "/#contact"]) {
  if (!navbar.includes(segment)) note(`Missing navbar section link: ${segment}`);
}

if (errors.length) {
  console.error("Portfolio validation failed:\n" + errors.map(s => "- " + s).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Portfolio QA passed: ${ids.size} project routes, local images, link formats and HTML metadata validated.`);
  console.log("External destinations and live deployment are not verified by this check.");
}
