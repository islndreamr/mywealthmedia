# Archive: mywealthmedia.com as it was on Nov 9, 2026 (before the rebuild)

This folder is a frozen copy of the site that was live at https://mywealthmedia.com on Nov 9, 2026.
It is kept for safety. Nothing in here is used by the new site.

What is in here
- public/            The exact files Netlify was serving (index.html, style.css, script.js, 404.html, assets, headers).
- netlify.toml       The Netlify settings that went with them (publish folder = frontend/public, no build step).
- live-index-as-served-2026-11-09.html   The homepage HTML downloaded from the live domain that day. It matched the repo file byte for byte.
- build-notes-PRD.md  The build notes from the tool that made the old site.
- screenshot-desktop-1440.png and screenshot-mobile-375.png   What the old site looked like.

How to bring the old site back
Option 1 (git): the commit before the rebuild is tagged `site-v1-before-rebuild`.
  git checkout site-v1-before-rebuild
Option 2 (files): copy everything in public/ back over frontend/public/ and put netlify.toml back at the repo root.
