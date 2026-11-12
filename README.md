# mywealthmedia.com

The website for My Wealth Media LLC (Megan Lemay). Plain HTML and CSS, no framework.

## How it fits together

```
site/                 the source you edit
  layout.html         the shell every page shares (rail, mobile header, footer)
  pages/              one file per plain page (homepage, diagnostic, privacy, terms, 404)
  templates/          the Free Resources page and the guide page template
  data/guides.json    the list of guides. Add a guide here, nowhere else.
tools/build.js        turns site/ into finished pages
frontend/public/      what Netlify serves. HTML in here is generated. Do not edit it by hand.
  css/site.css        all styling. Colors are named at the top of the file.
  js/                 site.js (rail, menu, progress, count-ups), forms.js (the one lead handler),
                      quiz.js (the quiz and its draft answers), resources.js (search and filters)
  assets/             fonts, favicon, share image, pictures
archive/              the old site, frozen on Nov 9, 2026
docs/                 the rebuild plan, the note to Megan, screenshots
```

## Making a change

1. Edit the file in `site/` (or `css/`, `js/`, `assets/` inside `frontend/public/`).
2. Run the build from the repo root:

```bash
node tools/build.js
```

3. Look at it locally:

```bash
npx serve frontend/public
```

4. Commit everything, including the generated pages in `frontend/public/`.

Netlify publishes `frontend/public` as-is. It never runs the build.

## Adding a guide

Add an entry to `site/data/guides.json`, run the build, commit. The guide gets its own page at `/resources/<slug>/` and a card on the Free Resources page. A guide shows only when `approved` is `true` (Megan's rule: she sees the real file first).

## Connecting the CRM

Every lead form posts to `sendLead()` in `frontend/public/js/forms.js`. That is the only place to change. Until it is connected, forms store nothing and just show their thank-you state.

## Writing placeholders

Anything typed as `[LIKE THIS]` in a page or in `guides.json` shows on the site as a visibly marked placeholder, so nothing made up can slip through as real.

## Leftovers

`frontend/src`, `frontend/package.json`, `backend/` and `tests/` are from the tool that built the old site. The site does not use them. They can be removed in a later cleanup.
