import { chromium } from "playwright";
import { spawn } from "node:child_process";

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
  page.on("pageerror", err => errors.push(err.message));
  await page.goto(host, { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await page.getByRole("button", { name: "Close navigation menu" }).waitFor();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Open navigation menu" }).waitFor();
  const skip = page.getByRole("link", { name: "Skip to main content" });
  if (await skip.count() !== 1) throw new Error("Skip link missing");
  await page.goto(host + "/projects/fraudguard-ai", { waitUntil: "domcontentloaded" });
  await page.getByRole("heading", { level: 1, name: /FraudGuard AI/i }).waitFor();
  await page.getByRole("link", { name: /Architecture & limitations/i }).waitFor();
  await page.goto(host + "/projects/smart-farmai", { waitUntil: "domcontentloaded" });
  await page.getByRole("heading", { level: 1, name: /NEXUS/i }).waitFor();
  await page.getByRole("link", { name: /Automated Python tests/i }).waitFor();
  for (const width of [390, 768, 1280]) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto(host + "/projects", { waitUntil: "domcontentloaded" });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 2);
    if (overflow) throw new Error("Horizontal overflow on projects at " + width + "px");
  }
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
