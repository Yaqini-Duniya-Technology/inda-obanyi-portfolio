import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import projects from "../src/data/projects.js";
const require = createRequire(import.meta.url);

const host = "http://127.0.0.1:4173";
const server = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", "4173", "--strictPort"], { stdio: "ignore", windowsHide: true });
let browser;
async function waitForServer() {
  for (let retry = 0; retry < 60; retry++) {
    try { const response = await fetch(host); if (response.ok) return; } catch {}
    await new Promise(r => setTimeout(r, 500));
  }
  throw new Error("Preview server failed to start");
}
async function main() {
  await waitForServer();
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  page.setDefaultTimeout(10000);
  page.setDefaultNavigationTimeout(15000);
  const errors = [];
  const audits = [];
  const missingLocalResources = [];
  page.on("response", response => {
    if (response.status() >= 400 && response.url().startsWith(host + "/")) {
      missingLocalResources.push(`${response.status()} ${response.url()}`);
    }
  });
  async function checkVisibleImages(label) {
    const invalid = await page.locator("img").evaluateAll(async images => {
      const visible = images.filter(img => img.getClientRects().length > 0);
      await Promise.all(visible.map(img => img.decode().catch(() => {})));
      return visible.filter(img => !img.naturalWidth).map(img => img.currentSrc || img.src);
    });
    if (invalid.length) errors.push(`${label}: broken visible images: ${invalid.join(", ")}`);
  }
  mkdirSync("test-artifacts", { recursive: true });
  async function audit(label) {
    await page.addScriptTag({ path: require.resolve("axe-core/axe.min.js") });
    const result = await page.evaluate(async () => window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] } }));
    audits.push({ page: label, violations: result.violations.map(v => ({
      id: v.id, impact: v.impact, description: v.description, help: v.help,
      helpUrl: v.helpUrl,
      nodes: v.nodes.map(n => ({ target: n.target, failureSummary: n.failureSummary }))
    })) });
    for (const violation of result.violations) {
      console.log(`A11Y ${label}: [${violation.impact}] ${violation.id} — ${violation.help}; elements: ${violation.nodes.map(n => n.target.join(" ")).join(", ")}`);
    }
    if (result.violations.length) errors.push(`${label}: accessibility findings: ${result.violations.map(v => v.id).join(", ")}`);
    console.log(`Accessibility ${label}: ${result.violations.length} findings`);
  }
  page.on("pageerror", err => errors.push(err.message));
  await page.goto(host, { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await page.screenshot({ path: "test-artifacts/mobile-menu.png", fullPage: false });
  await page.getByRole("button", { name: "Close navigation menu" }).waitFor();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Open navigation menu" }).waitFor();
  const skip = page.getByRole("link", { name: "Skip to main content" });
  if (await skip.count() !== 1) throw new Error("Skip link missing");
  await audit("home-mobile");
  await page.goto(host + "/projects/fraudguard-ai", { waitUntil: "domcontentloaded" });
  await page.getByRole("heading", { level: 1, name: /FraudGuard AI/i }).waitFor();
  await page.getByRole("link", { name: /Architecture & limitations/i }).waitFor();
  await audit("fraudguard-mobile");
  await page.goto(host + "/projects/smart-farmai", { waitUntil: "domcontentloaded" });
  await page.getByRole("heading", { level: 1, name: /NEXUS/i }).waitFor();
  await page.getByRole("link", { name: /Automated Python tests/i }).waitFor();
  await audit("nexus-mobile");
  await page.setViewportSize({ width: 1280, height: 800 });
  for (const [route, label] of [["/", "home-desktop"], ["/projects", "projects-desktop"], ["/projects/fraudguard-ai", "fraudguard-desktop"], ["/projects/smart-farmai", "nexus-desktop"]]) {
    await page.goto(host + route, { waitUntil: "domcontentloaded" });
    await page.locator("#main-content").waitFor();
    await audit(label);
    await checkVisibleImages(label);
  }
  for (const project of projects) {
    const response = await page.goto(host + "/projects/" + project.id, { waitUntil: "domcontentloaded" });
    if (!response?.ok()) errors.push(`Case study HTTP error: ${project.id}: ${response?.status()}`);
    await page.getByRole("heading", { level: 1, name: project.title, exact: true }).waitFor();
    await checkVisibleImages(project.id);
  }
  await page.goto(host, { waitUntil: "domcontentloaded" });
  await page.keyboard.press("Tab");
  const focused = await page.evaluate(() => document.activeElement?.textContent?.trim());
  if (focused !== "Skip to main content") errors.push("Keyboard tab must focus skip link first");
  await page.keyboard.press("Enter");
  const target = await page.evaluate(() => location.hash);
  if (target !== "#main-content") errors.push("Skip link does not target main content");
  await page.goto(host + "/does-not-exist", { waitUntil: "domcontentloaded" });
  await page.getByRole("heading", { level: 1, name: "This page does not exist" }).waitFor();
  await page.getByRole("link", { name: "View projects" }).waitFor();
  await audit("not-found-desktop");
  for (const width of [390, 768, 1280]) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto(host + "/projects", { waitUntil: "domcontentloaded" });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2);
    if (overflow) throw new Error("Horizontal overflow on projects at " + width + "px");
    if (width === 1280) await page.screenshot({ path: "test-artifacts/projects-desktop.png", fullPage: false });
  }
  if (missingLocalResources.length) errors.push("Failed local requests: " + [...new Set(missingLocalResources)].join(", "));
  writeFileSync("test-artifacts/accessibility-results.json", JSON.stringify(audits, null, 2));
  if (errors.length) throw new Error("Browser errors: " + errors.join("; "));
  console.log("Browser smoke checks passed: mobile navigation, project evidence and layouts");
}
try {
  await main();
} finally {
  try { await browser?.close(); } finally {
    server.kill("SIGTERM");
  }
}
