import { readdir, stat, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { gzipSync } from "node:zlib";

const dist = new URL("../dist/", import.meta.url).pathname;
const files = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.isFile()) files.push({ path: relative(dist, full), size: (await stat(full)).size, full });
  }
}
await walk(dist);
const js = files.filter(f => f.path.endsWith(".js"));
const css = files.filter(f => f.path.endsWith(".css"));
let assetBytes = 0;
for (const file of [...js, ...css]) {
  const gzip = gzipSync(await readFile(file.full)).length;
  assetBytes += file.size;
  console.log(`${file.path}: ${(file.size / 1024).toFixed(1)} KiB / gzip ${(gzip / 1024).toFixed(1)} KiB`);
}
const max = 5 * 1024 * 1024;
console.log(`Total JS/CSS: ${(assetBytes / 1024 / 1024).toFixed(2)} MiB, budget ${max / 1024 / 1024} MiB`);
if (assetBytes > max) throw new Error("Compiled JS/CSS exceeds the 5 MiB conservative budget");
