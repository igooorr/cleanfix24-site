// Builds static HTML for every route so each page has real content and meta tags
// for search engines and social previews. Run after `vite build` and the SSR build.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, ALL_PATHS, getMeta, canonicalUrl, NOT_FOUND_META } = await import(
  pathToFileURL(ssrEntry).href
);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function page(url, meta, { noindex = false } = {}) {
  const title = escape(meta.title);
  const description = escape(meta.description);
  const canonical = canonicalUrl(url);
  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`)
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
  if (noindex) {
    html = html
      .replace(/\s*<link rel="canonical"[^>]*>/, "")
      .replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>');
  }
  return html;
}

for (const url of ALL_PATHS) {
  const file = url === "/" ? path.join(dist, "index.html") : path.join(dist, `${url.replace(/^\//, "")}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(url, getMeta(url)));
}
fs.writeFileSync(path.join(dist, "404.html"), page("/404", NOT_FOUND_META, { noindex: true }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ALL_PATHS.map(
  (url) =>
    `  <url>\n    <loc>${canonicalUrl(url)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${
      url === "/" ? "1.0" : url.startsWith("/services/") ? "0.9" : "0.8"
    }</priority>\n  </url>`,
).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });

console.log(`Prerendered ${ALL_PATHS.length} pages + 404.html and sitemap.xml`);
