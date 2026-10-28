
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import projects from "../src/data/projects.js";

// ============================================================
// CONFIGURATION
// ============================================================

const SITE_URL = "https://indaobanyi.vercel.app";
const SITE_NAME = "Inda Obanyi Portfolio";
const AUTHOR_NAME = "Inda Obanyi";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");

const DEFAULT_DESCRIPTION =
  "Explore machine learning, AI engineering, and software development projects by Inda Obanyi.";

const DEFAULT_IMAGE = "/images/portfolio-preview.png";

// ============================================================
// HTML UTILITIES
// ============================================================

function escapeHtml(value = "") {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeJsonForHtml(value) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function escapeRegex(value) {
  return String(value).replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}

function insertIntoHead(html, content) {
  if (!/<\/head\s*>/i.test(html)) {
    throw new Error(
      "SEO generation failed: closing </head> tag not found."
    );
  }

  return html.replace(
    /<\/head\s*>/i,
    `  ${content}\n</head>`
  );
}

function replaceTitle(html, title) {
  const tag = `<title>${escapeHtml(title)}</title>`;

  const pattern =
    /<title\b[^>]*>[\s\S]*?<\/title\s*>/i;

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return insertIntoHead(html, tag);
}

// ============================================================
// META TAG MANAGEMENT
// ============================================================

function removeMeta(html, attribute, key) {
  const safeAttribute = escapeRegex(attribute);
  const safeKey = escapeRegex(key);

  const pattern = new RegExp(
    `<meta\\b(?=[^>]*\\b${safeAttribute}\\s*=\\s*["']${safeKey}["'])[^>]*>\\s*`,
    "gi"
  );

  return html.replace(pattern, "");
}

function replaceMeta(
  html,
  attribute,
  key,
  content
) {
  const cleaned = removeMeta(
    html,
    attribute,
    key
  );

  const tag =
    `<meta ${attribute}="${escapeHtml(key)}" ` +
    `content="${escapeHtml(content)}" />`;

  return insertIntoHead(cleaned, tag);
}

function replaceCanonical(html, url) {
  const pattern =
    /<link\b(?=[^>]*\brel\s*=\s*["']canonical["'])[^>]*>\s*/gi;

  const cleaned = html.replace(pattern, "");

  const tag =
    `<link rel="canonical" ` +
    `href="${escapeHtml(url)}" />`;

  return insertIntoHead(cleaned, tag);
}

// ============================================================
// IMAGE UTILITIES
// ============================================================

function getProjectImage(project) {
  // Preserve the actual image path from projects.js.
  // Never rename a .webp reference to .png.
  return project.image || DEFAULT_IMAGE;
}

function getImageType(imagePath) {
  const pathname = new URL(
    imagePath,
    `${SITE_URL}/`
  ).pathname.toLowerCase();

  if (pathname.endsWith(".webp")) {
    return "image/webp";
  }

  if (pathname.endsWith(".png")) {
    return "image/png";
  }

  if (
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg")
  ) {
    return "image/jpeg";
  }

  if (pathname.endsWith(".gif")) {
    return "image/gif";
  }

  return "application/octet-stream";
}

async function validateProjectImage(imagePath) {
  const imageUrl = new URL(
    imagePath,
    `${SITE_URL}/`
  );

  // Check local project images against the build output.
  // External image URLs cannot be validated here.
  if (imageUrl.origin !== SITE_URL) {
    return;
  }

  const relativePath =
    decodeURIComponent(imageUrl.pathname)
      .replace(/^\/+/, "");

  const resolvedPath = path.resolve(
    DIST_DIR,
    relativePath
  );

  const relativeToDist = path.relative(
    DIST_DIR,
    resolvedPath
  );

  if (
    relativeToDist.startsWith("..") ||
    path.isAbsolute(relativeToDist)
  ) {
    throw new Error(
      `Unsafe image path: ${imagePath}`
    );
  }

  try {
    await fs.access(resolvedPath);
  } catch {
    console.warn(
      `Warning: Image not found in dist: ${imagePath}`
    );
  }
}

// ============================================================
// STRUCTURED DATA
// ============================================================

function getProgrammingLanguages(technologies = []) {
  const knownLanguages = new Set([
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Java",
    "C",
    "C++",
    "C#",
    "Go",
    "Rust",
    "R",
  ]);

  return technologies.filter((item) =>
    knownLanguages.has(item)
  );
}

function buildStructuredData(
  project,
  description,
  url,
  imageUrl
) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",

    name: project.title,
    description,
    url,
    image: imageUrl,

    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: `${SITE_URL}/`,
    },

    ...(project.github
      ? {
          codeRepository: project.github,
        }
      : {}),

    ...(project.demo
      ? {
          relatedLink: project.demo,
        }
      : {}),

    programmingLanguage:
      getProgrammingLanguages(
        project.technologies || []
      ),
  };

  return schema;
}

function replaceJsonLd(html, schema) {
  // The homepage template may already contain
  // structured data for the main portfolio.
  // Remove those blocks from project pages.
  const pattern =
    /<script\b(?=[^>]*\btype\s*=\s*["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script\s*>\s*/gi;

  const cleaned = html.replace(pattern, "");

  const json = escapeJsonForHtml(schema);

  const tag =
    `<script type="application/ld+json">` +
    `${json}` +
    `</script>`;

  return insertIntoHead(cleaned, tag);
}

// ============================================================
// PROJECT VALIDATION
// ============================================================

function validateProject(project) {
  if (!project || typeof project !== "object") {
    throw new Error(
      "Invalid project entry in projects.js."
    );
  }

  if (
    typeof project.id !== "string" ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(
      project.id
    )
  ) {
    throw new Error(
      `Invalid project ID: ${project.id}`
    );
  }

  if (
    typeof project.title !== "string" ||
    !project.title.trim()
  ) {
    throw new Error(
      `Project ${project.id} is missing a title.`
    );
  }
}

// ============================================================
// PROJECT PAGE GENERATION
// ============================================================

async function generate() {
  const templatePath = path.join(
    DIST_DIR,
    "index.html"
  );

  let template;

  try {
    template = await fs.readFile(
      templatePath,
      "utf8"
    );
  } catch {
    throw new Error(
      "dist/index.html not found. Run the Vite build first."
    );
  }

  if (!Array.isArray(projects)) {
    throw new Error(
      "Expected projects.js to export an array."
    );
  }

  const processedIds = new Set();

  for (const project of projects) {
    validateProject(project);

    if (processedIds.has(project.id)) {
      throw new Error(
        `Duplicate project ID: ${project.id}`
      );
    }

    processedIds.add(project.id);

    // --------------------------------------------------------
    // PAGE IDENTITY
    // --------------------------------------------------------

    const url =
      `${SITE_URL}/projects/${project.id}`;

    const title =
      `${project.title} | AI/ML Project | ${AUTHOR_NAME}`;

    const description =
      project.shortDescription ||
      project.description ||
      DEFAULT_DESCRIPTION;

    // --------------------------------------------------------
    // PROJECT IMAGE
    // --------------------------------------------------------

    const imagePath = getProjectImage(project);

    const imageUrl = new URL(
      imagePath,
      `${SITE_URL}/`
    ).href;

    const imageType = getImageType(imagePath);

    const imageAlt =
      `${project.title} - AI/ML project by ${AUTHOR_NAME}`;

    await validateProjectImage(imagePath);

    // --------------------------------------------------------
    // DOCUMENT TITLE
    // --------------------------------------------------------

    let html = template;

    html = replaceTitle(
      html,
      title
    );

    // --------------------------------------------------------
    // PRIMARY SEO METADATA
    // --------------------------------------------------------

    html = replaceMeta(
      html,
      "name",
      "description",
      description
    );

    html = replaceCanonical(
      html,
      url
    );

    // --------------------------------------------------------
    // OPEN GRAPH METADATA
    // --------------------------------------------------------

    const ogTags = {
      "og:type": "article",
      "og:site_name": SITE_NAME,
      "og:title": title,
      "og:description": description,
      "og:url": url,
      "og:image": imageUrl,
      "og:image:secure_url": imageUrl,
      "og:image:type": imageType,
      "og:image:alt": imageAlt,
    };

    for (const [key, value] of Object.entries(
      ogTags
    )) {
      html = replaceMeta(
        html,
        "property",
        key,
        value
      );
    }

    // Remove dimensions inherited from the homepage.
    // Project screenshots may have different sizes.
    html = removeMeta(
      html,
      "property",
      "og:image:width"
    );

    html = removeMeta(
      html,
      "property",
      "og:image:height"
    );

    // --------------------------------------------------------
    // TWITTER / X METADATA
    // --------------------------------------------------------

    const twitterTags = {
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": imageUrl,
      "twitter:image:alt": imageAlt,
    };

    for (const [key, value] of Object.entries(
      twitterTags
    )) {
      html = replaceMeta(
        html,
        "name",
        key,
        value
      );
    }

    // --------------------------------------------------------
    // STRUCTURED DATA
    // --------------------------------------------------------

    const schema = buildStructuredData(
      project,
      description,
      url,
      imageUrl
    );

    html = replaceJsonLd(
      html,
      schema
    );

    // --------------------------------------------------------
    // OUTPUT DIRECTORY
    // --------------------------------------------------------

    const outputDirectory = path.join(
      DIST_DIR,
      "projects",
      project.id
    );

    await fs.mkdir(
      outputDirectory,
      {
        recursive: true,
      }
    );

    const outputPath = path.join(
      outputDirectory,
      "index.html"
    );

    await fs.writeFile(
      outputPath,
      html,
      "utf8"
    );

    console.log(
      `Generated: /projects/${project.id}`
    );
  }

  const sitemapUrls = [
    `${SITE_URL}/`,
    `${SITE_URL}/projects`,
    ...projects.map((project) => `${SITE_URL}/projects/${project.id}`),
  ];
  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapUrls.map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`),
    '</urlset>',
    '',
  ].join("\n");
  await fs.writeFile(path.join(DIST_DIR, "sitemap.xml"), sitemapXml, "utf8");
  console.log(`Generated sitemap with ${sitemapUrls.length} URLs.`);

  console.log(
    `Successfully generated ${processedIds.size} project pages.`
  );
}

// ============================================================
// EXECUTION
// ============================================================

generate().catch((error) => {
  console.error(
    "Project page generation failed:",
    error
  );

  process.exitCode = 1;
});
