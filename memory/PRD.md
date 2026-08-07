# My Wealth Media — Megan Lemay (Static Marketing Site)

## Original Problem Statement
Single-page static marketing site for "My Wealth Media", the personal brand of Megan Lemay (operator for founder-led companies). One page, no routing/CMS/backend/DB/auth. Quiet luxury editorial, dark luxury palette, cinematic hero. Deployable to Netlify. Images uploaded later by Megan; every image needs a CSS warm-gradient fallback. Pure CSS + IntersectionObserver + tiny rAF only — NO Three.js/WebGL/GSAP/Locomotive/framer-motion/lenis. WCAG AA, works at 360px, no external JS deps.

## Architecture
- Pure static site in `/app/frontend/public/`: `index.html`, `style.css`, `script.js`, `_headers`, `assets/`.
- Served on preview via CRA dev server (React runtime neutralized: `src/index.js` is a no-op).
- Netlify config: `/app/netlify.toml` publishes `frontend/public` as-is (no build step). `_headers` sets long cache on `/assets/*`.
- Three Google Fonts: Italiana (display, "OPERATOR" + numerals only), Jost (labels), Inter (body/headings). `--font-display` var for one-line swap.

## Core Requirements (static)
- 5 sections: Hero (100vh), About, What I Do (3 cards), Contact, Footer. Verbatim copy honored.
- Palette exact: ink #141110, surface #1C1917, cream #FFEDD7, rose-gold #E0A582, muted #A89B92, hairline #2E2724. Rose gold accent-only.
- Primary action mailto:megan@mywealthmedia.com; secondary Instagram @meganlemay.co.
- Every image referenced from `/assets/` with exact filenames + CSS warm-gradient fallback beneath. No stock/placeholder images.

## Implemented (2026-06)
- Full page build with all 5 sections, exact copy, palette, and typography.
- Motion (all wrapped in prefers-reduced-motion: no-preference): masked line-by-line hero reveal, hero image scale entry, rAF parallax (~40%), IntersectionObserver section reveals with 90ms card stagger, desktop-only pointer card tilt, looping scroll cue, editorial marquee.
- Accessibility: single h1, semantic sections w/ aria-labelledby, skip link, rose-gold focus rings, decorative card images alt="" aria-hidden, lazy-load below fold, hero preload + fetchpriority.
- SEO: title, description, OG + Twitter tags → /assets/og-image.png, theme-color, favicons.
- Netlify: netlify.toml + _headers. Verified: page renders, fallbacks intentional, contact stacks, no horizontal scroll at 360px. --muted on --ink checked ~6.9:1 (passes AA).

## Backlog
- P1: Megan uploads real assets (hero.jpg, icon-1..3.png, mwm-mark.png, og-image.png, favicons).
- P2: Optional Zaslia display-font swap via --font-display.

## Session 2 — June 2026 (Assets + Polish)
- Uploaded Megan's MWM logo mark (`/assets/mwm-mark.png`, 256px optimized) + generated favicons (32/180/512/ico) and og-image.png from it
- Hero headline changed OPERATOR → OPERATIONS, rendered as a generated Zaslia-style transparent PNG wordmark (`/assets/operations-wordmark.png`) since the paid font is unavailable; sr-only text kept for accessibility/SEO
- Generated on-brand imagery (rose-gold/sunset editorial): hero.jpg + icon-1/2/3.jpg for the three cards
- Added film grain overlay (SVG feTurbulence, body::after, subtle shimmer under prefers-reduced-motion guard)
- Added desktop-only custom cursor (dot + lerped ring, softens over links/buttons/cards, pure vanilla JS + CSS)
- Meta/OG titles updated to "Operations"
- Verified via screenshots: hero wordmark, card photos, cursor, grain all rendering

### Remaining backlog
- P2: Swap wordmark image for real licensed Zaslia webfont if Megan ever buys it
- P2: Netlify deploy when user is ready (netlify.toml + _headers already in place)
