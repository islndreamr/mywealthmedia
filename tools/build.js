#!/usr/bin/env node
/* My Wealth Media | tools/build.js
   Turns the files in site/ into the finished pages in frontend/public/.
   Run it from the repo root:   node tools/build.js
   Netlify never runs this. The output is committed. */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = path.join(ROOT, "site");
const OUT = path.join(ROOT, "frontend", "public");
const V = String(Date.now()).slice(-7); // cache-busting number for css/js links

const layout = fs.readFileSync(path.join(SITE, "layout.html"), "utf8");
const guides = JSON.parse(fs.readFileSync(path.join(SITE, "data", "guides.json"), "utf8"));

/* Anything written as [LIKE THIS] becomes a visibly marked placeholder. */
function mark(text) {
  return String(text).replace(/\[([^\[\]]+)\]/g, '<span class="ph">[$1]</span>');
}
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

function render(page) {
  const isHome = page.path === "/";
  let html = layout
    .replace("{{BODY}}", () => page.body)
    .replace(/{{HEAD}}/g, () => page.head || "")
    .replace(/{{SCRIPTS}}/g, () => page.scripts || "")
    .replace(/{{TITLE}}/g, esc(page.title))
    .replace(/{{DESC}}/g, esc(page.desc))
    .replace(/{{PATH}}/g, page.path)
    .replace(/{{H}}/g, isHome ? "" : "/")
    .replace(/{{V}}/g, V)
    .replace(/{{BODYCLASS}}/g, page.bodyClass || "")
    .replace(/{{CUR_RES}}/g, page.path.startsWith("/resources") ? 'aria-current="page"' : "")
    .replace(/{{CUR_DIAG}}/g, page.path.startsWith("/diagnostic") ? 'aria-current="page"' : "");
  return html;
}

function write(relPath, html) {
  const file = path.join(OUT, relPath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log("wrote", path.relative(ROOT, file));
}

function readPage(name) {
  const raw = fs.readFileSync(path.join(SITE, "pages", name), "utf8");
  // front matter: lines of key: value until a line that is only ---
  const m = raw.match(/^([\s\S]*?)\n---\n([\s\S]*)$/);
  const meta = {};
  m[1].split("\n").forEach(line => {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  return { meta, body: mark(m[2]) };
}

/* ---- Cover block used on the homepage band, the resources page and guide pages ---- */
function coverHtml(g, cls) {
  if (g.cover) return `<div class="cover ${cls || ""}"><img src="${esc(g.cover)}" alt="Cover of ${esc(g.title)}"></div>`;
  return `<div class="cover ${cls || ""}" aria-hidden="true">
    <span class="mono">MWM</span><hr class="rule"><span class="tt">${mark(g.title)}</span><span class="ct">Free guide &middot; ${esc(g.topic)}</span>
  </div>`;
}

/* ---- Simple pages ---- */
const simple = ["index.html", "diagnostic.html", "privacy.html", "terms.html", "404.html", "font-options.html"];
simple.forEach(name => {
  const p = readPage(name);
  const featured = guides.filter(g => g.approved && g.featured)[0] || guides.filter(g => g.approved)[0];
  let body = p.body;
  if (featured) {
    body = body
      .replace(/{{GUIDE_COVER}}/g, coverHtml(featured))
      .replace(/{{GUIDE_TITLE}}/g, mark(featured.title))
      .replace(/{{GUIDE_PROMISE}}/g, mark(featured.promise))
      .replace(/{{GUIDE_SLUG}}/g, featured.slug)
      .replace(/{{GUIDE_POINTS}}/g, featured.points.map(pt => `<li>${mark(pt)}</li>`).join("\n"));
  }
  const out = p.meta.out || name;
  write(out, render({ title: p.meta.title, desc: p.meta.desc, path: p.meta.path, body, head: p.meta.head, scripts: p.meta.scripts || "", bodyClass: p.meta.bodyClass }));
});

/* ---- Resources page: grid built from guides.json ---- */
{
  const tpl = fs.readFileSync(path.join(SITE, "templates", "resources.html"), "utf8");
  const shown = guides.filter(g => g.approved);
  const featured = shown.filter(g => g.featured)[0] || shown[0];
  const others = shown.filter(g => g !== featured);
  const cards = shown.map((g, i) => `
      <article class="card res-card" data-topic="${esc(g.topic)}" data-search="${esc((g.title + " " + g.promise + " " + g.topic).toLowerCase())}">
        <span class="num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <div class="body">
          <div class="thumb">${g.cover ? `<img src="${esc(g.cover)}" alt="">` : `<span>${mark(g.title)}</span>`}</div>
          <h3><a href="/resources/${g.slug}/" class="linkmore" style="text-decoration:none;color:inherit">${mark(g.title)}</a></h3>
          <span><span class="tag-pill">${esc(g.topic)}</span></span>
          <span class="meta">${mark(g.readTime)} read</span>
          <a class="linkmore" href="/resources/${g.slug}/">Get the guide <span aria-hidden="true">&rarr;</span></a>
        </div>
      </article>`).join("\n");
  const featuredHtml = featured ? `
    <section class="featured dark" aria-labelledby="featured-title">
      ${coverHtml(featured)}
      <div>
        <p class="eyebrow">Start here</p>
        <h2 id="featured-title">${mark(featured.title)}</h2>
        <p class="lede">${mark(featured.promise)}</p>
        <a class="btn btn-primary" href="/resources/${featured.slug}/">Get the guide</a>
      </div>
    </section>` : "";
  const body = tpl.replace("{{FEATURED}}", featuredHtml).replace("{{CARDS}}", cards);
  write("resources/index.html", render({
    title: "Free Resources | My Wealth Media",
    desc: "Guides, prompts and playbooks for owners who run their business from their phone.",
    path: "/resources/", body,
    scripts: `<script src="/js/resources.js?v=${V}" defer></script>`
  }));
  void others;
}

/* ---- One page per approved guide ---- */
{
  const tpl = fs.readFileSync(path.join(SITE, "templates", "guide.html"), "utf8");
  guides.filter(g => g.approved).forEach(g => {
    const body = tpl
      .replace(/{{COVER}}/g, coverHtml(g))
      .replace(/{{TITLE}}/g, mark(g.title))
      .replace(/{{PROMISE}}/g, mark(g.promise))
      .replace(/{{TOPIC}}/g, esc(g.topic))
      .replace(/{{READTIME}}/g, mark(g.readTime))
      .replace(/{{SLUG}}/g, g.slug)
      .replace(/{{POINTS}}/g, g.points.map(pt => `<li>${mark(pt)}</li>`).join("\n"));
    write(`resources/${g.slug}/index.html`, render({
      title: `${g.title} | Free guide | My Wealth Media`,
      desc: g.promise, path: `/resources/${g.slug}/`, body,
      scripts: `<script src="/js/forms.js?v=${V}" defer></script>`
    }));
  });
}

/* ---- sitemap ---- */
{
  const urls = ["/", "/resources/", "/diagnostic/", "/privacy/", "/terms/"]
    .concat(guides.filter(g => g.approved).map(g => `/resources/${g.slug}/`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>https://mywealthmedia.com${u}</loc></url>`).join("\n") + "\n</urlset>\n";
  write("sitemap.xml", xml);
}
console.log("done");
