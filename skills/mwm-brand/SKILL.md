---
name: mwm-brand
description: The My Wealth Media brand system for Megan Lemay. Use it for anything that carries the MWM name or goes on mywealthmedia.com, even when Megan does not say brand. That means website pages and edits, PDF guides and field manuals, lead-magnet covers, emails and email sequences, social graphics, slide decks, one-pagers and proposals. It holds the colors, the two fonts, the layout rules that made the site feel designed, the writing rules, the photo rules, and the bank of approved facts and numbers. Load it before the first line of copy or code, alongside megan-writing for voice and mwm-field-manual for PDF build steps. Do not use it for 7FCC, A-List Media or other companies.
---

# MWM brand system

One brand, every medium. The website (relaunched Nov 12, 2026) is the reference. When something here and an older skill disagree, this file wins, because it records the decisions Megan made on the site.

Megan makes every decision. When a choice is open, lay out two or three options and let her pick. Never invent a number, name, quote, price, award or client result. Everything factual comes from the facts bank at the end of this file or from Megan directly.

## 1. Colors

All colors by name. Change them in one place only.

| Name | Hex | Where it goes |
| --- | --- | --- |
| cream | #F6F0E6 | page and paper background, about 60 percent of any piece |
| paper | #FBF8F2 | a lighter surface on cream, used sparingly |
| sand | #D9C7A7 | fills, write-in lines, photo placeholder tone |
| line | #E3D7C3 | hairlines on cream |
| gold | #B8924A | large numerals and rules only. Never small text on cream (2.6:1 contrast fails) |
| bronze | #7A5A26 | small links, labels and small text that needs a gold feel on cream (5.6:1) |
| muted | #4A3F37 | secondary text on cream |
| espresso | #2B2420 | dark bands, table headers, outlined buttons |
| ink | #141110 | body text, the darkest bands, the rail |
| hot peony | #E0457B | the one accent. Once per screen or spread, usually the primary button. Text on it is ink |
| petal | #F49AB4 | tiny highlights on dark surfaces only: one label, one dot. Never on cream |
| rail text | #CDBFA8 | body text on ink or espresso |

No red anywhere. No gradients. No purple. Dark surfaces may carry a faint paper grain (an SVG noise at about 8 percent opacity); cream carries a fainter one (about 5 percent).

## 2. Type

Two families, self-hosted from Fontsource, both under the SIL Open Font License.

- Headlines, pull quotes, big numerals, the MWM monogram: **Newsreader**, weight 300 for display sizes, 400 for smaller headings. Italic 300 is the accent style.
- Everything else: **Hanken Grotesk**, 400 body, 600 for emphasis and labels, 700 for buttons.

Newsreader replaced Gloock on Nov 12, 2026. Use Newsreader for new manuals too, so the guide and the site match. Never use Inter, Roboto, Arial, Poppins, Montserrat, Open Sans, DM Sans, Space Grotesk, Plus Jakarta, Fraunces, Playfair or Gloock.

Four sizes plus one label size, and that is the whole scale:

| Role | Web | Print |
| --- | --- | --- |
| Display | about 7 percent of viewport width, light, line-height 1 | 64pt cover, 44pt section opener |
| Heading | 2.0 to 2.75rem, light | 30pt |
| Standfirst and subheads | 1.5rem, italic for standfirsts | 16pt |
| Body | 1.0625rem, line-height 1.55, measure 55 to 65 characters | 10.5pt, line-height 1.55 |
| Label | 0.8rem, 600 weight, sentence case | 7.5pt |

The accent is one italic phrase inside a headline, at most once per screen. "Build a business that doesn't *depend on you* to run." Nothing else is italic in a headline.

## 3. Layout rules that make it feel designed

These came from three tiers of design research done for the site (evidence, peer teardowns, award-level craft) and from Megan rejecting two earlier versions as "loose" and "blah". They apply to every medium.

1. **One idea per screen or spread.** If a screen needs a heading, a subline, two buttons, a photo, a badge and a stat strip, it has no idea. Cut until one thing is clearly the point.
2. **One oversized element per screen.** A headline, a numeral or a photograph. Everything else small. Small size differences read as tentative.
3. **Empty space is the luxury material.** A quarter of a layout empty is normal. Do not fill it.
4. **Nothing in boxes unless the box does work.** Hairlines instead of borders. Text columns instead of cards. The site has zero cards.
5. **Uneven columns.** A lead column wider than its neighbours, or a narrow empty column. Three equal columns read as a template.
6. **Let things overlap or bleed.** A photograph runs off the edge. A headline sits over the edge of an image. Nothing floats in the middle with a margin on every side.
7. **Pink once per screen.** The primary button, or one highlighted word. Secondary buttons are outlined espresso. Repeated pink turns an accent into interface chrome.
8. **Numerals only where they index something real.** Steps 1, 2, 3 in a process, section numbers in a manual with a progress rail. Not on service cards, not on a grid of guides.
9. **No all-caps tracked labels above headings.** At most one small label per screen, in sentence case. Labels on dark surfaces may be petal.
10. **No arrows glued to links, no middle-dot strings, no hover lifts, no fade-in on every section.** Motion is one moment per page: the proof numerals counting up. Nothing moves on its own otherwise.
11. **Vary the rhythm.** Sections of different heights. One full-width module per page as the slow moment, usually the story with a photograph.
12. **Photographs of Megan only.** Real photos from the Nov 2026 shoot, shown large, rectangular, unmasked, looking at the lens or into the headline. No arch masks, no drop shadows, no frames, no stock, no AI images. Files live in the site repo at `frontend/public/assets/img/` (`megan-1-full.jpg` to `megan-4-full.jpg`; `megan-hero-smile.jpg` is the current hero).

Checklist before anything ships, counted on the first screen or the cover: elements under 8, exactly one large thing, pink once, no boxes, no eyebrow labels, no numerals that are not a sequence.

## 4. Writing rules

Load `megan-writing` for voice. These rules sit on top of it and are checked with grep before delivery.

- No em dashes or en dashes, anywhere, ever. Commas, periods, "and".
- No contrast framing: no "not X, but Y", "it's not about X, it's about Y", "you don't need X, you need Y". Say what the thing is.
- No rule-of-three phrasing and no lists of three crammed into one sentence as a habit.
- No AI vocabulary: seamless, robust, elevate, empower, leverage, unlock, harness, streamline, cutting-edge, innovative, delve, journey, game-changer, transformative, "in today's fast-paced world".
- Plain words, short sentences, numerals for numbers (23, not twenty-three). First person for Megan. "You" for the reader.
- Reader-facing manuals recommend, never command: "We recommend X because Y." No "never", "always", "don't" aimed at the reader. Every claim with a source line "Source: name, year", every link opened and checked, date noted.
- Buttons and links say what happens: "Book the Diagnostic", "Send me the guide", "Get the guide". The primary call to action is always "Book the Diagnostic", in those words.
- One line of real opinion per section, in Megan's words. Example on the site: "Most of this is a structure problem. The business was built around you, and the part that runs without you was never built."
- Cut copy that does not change what the reader does. Megan: "I don't want excess copy where it doesn't impact the viewing experience."

## 5. The facts bank (approved, Nov 2026)

Use these as written. Anything not here is a placeholder in [BRACKETS] until Megan supplies it. Never round, inflate or re-derive.

Positioning
- Megan Lemay, founder of My Wealth Media LLC, San Diego. Title: Fractional COO and AI Systems Architect.
- Headline: "Build a business that doesn't depend on you to run."
- Positioning line: "Operations. Automation. AI-powered systems. Built by someone who's actually run the business."
- Standfirst: "From the way leads enter your business to how your team delivers, gets paid and stays accountable, I build the infrastructure that makes growth manageable."
- Offer: a free 30-minute Diagnostic call on video, no pitch and no prep, then an optional written report (a written audit, a 30-day action plan in order, a short list of AI tools and what each is for, a straight answer on whether ongoing 1:1 support makes sense). No prices shown anywhere.
- Closing lines: "You've already proven you can build a business. Let's build one that can scale." and "If nothing changes, where is your business next November?"

Numbers
- $1M+ in 8 months, on systems Megan built from the ground up, for an online sales training company. Credited as "CEO, online sales training company". The company is not named on the site (Megan's rule: role and industry only).
- 20,000 leads and 48 team members moved into one system (same client).
- Remote teams of about 70 across sales, setting and fulfillment.
- A division responsible for roughly 1,000 clients.
- 8 years at a luxury salon. Top 2% of stylists in the Pacific Northwest for revenue. Dozens of stylists mentored. Six figures by her second year behind the chair.
- Works with several founder-led, 7-figure service businesses at a time: agencies, trades, salons, training companies, online businesses.

Clients on record (role and industry only): CEO, online sales training company; founder, Meta ads agency; owner, construction company. Their result lines were removed from the site on Nov 13, 2026 until real testimonials arrive. Do not reinstate without Megan's new copy.

What is not on the site and must not be linked yet: the Payhip store, the Substack. No "unsubscribe anytime" wording until the email tool is confirmed to add the link.

## 6. Per-medium notes

**Website.** Source lives in the GitHub repo `islndreamr/mywealthmedia`. Pages are written in `site/pages/`, the shared shell in `site/layout.html`, guides in `site/data/guides.json`, styles in `frontend/public/css/site.css` with every color named at the top. Run `node tools/build.js` from the repo root after any edit and commit the generated `frontend/public/` too; Netlify publishes that folder with no build step. Replaced images need new file names (assets are cached for a year). Forms post to `netlify/functions/lead.js`, which forwards to GoHighLevel. Read `README.md` in the repo before editing.

**PDF guides and manuals.** Use `mwm-field-manual` for the page system, build steps and checks, with these overrides: Newsreader instead of Gloock, the layout rules in section 3, and one numeral per page at most outside the rail. A guide's cover is portrait 3:4, at least 900 by 1200 pixels, with a real photo of Megan if a photo is used. The TEAM Prompts (Nov 2026) is the reference guide.

**Email.** Hanken Grotesk only (system sans fallback). Cream background, ink text, one pink button. Subject lines in sentence case, under 50 characters, no emoji. One idea per email. Sent from an address on mywealthmedia.com through GoHighLevel.

**Social graphics and slides.** Cream or ink background, one Newsreader line as the only large thing, Hanken for the rest, pink once. Photo rules from section 3. The MWM monogram is text in Newsreader until a real mark exists.

## 7. Before delivering anything

1. Run the grep checks: dashes, banned fonts, banned words, contrast framing.
2. Count the first screen: elements, large things, pink, boxes, labels, stray numerals.
3. Confirm every number against the facts bank and every link live.
4. Show Megan the draft with a plain-language note of what is placeholder and what is unverified. She decides.
