# Handoff prompt: build the TEAM prompts guide (PDF) for mywealthmedia.com

Paste everything below this line into a new chat.

---

You are building a free PDF guide for Megan Lemay (My Wealth Media LLC, San Diego). It is the first free guide on her rebuilt website and the lead magnet for her email list. Use the `mwm-field-manual` skill for the page system and build steps, and the `megan-writing` skill for voice. Read both before you start. Megan approves the outline before the full build, and she makes every decision. Lay out options, do not decide for her.

## What the guide is

- Working name: the TEAM prompts guide. The real title, the promise, and the content live in Megan's Notion. Find the master copy there first (search Notion for "TEAM", "prompts", "guide"). Do not invent a title or any content. If you cannot find it, ask Megan once.
- It has been delivered since Nov 4, 2026 through an Instagram keyword flow, so a version already exists. Your job is the designed, branded PDF version, plus the pieces the website needs.
- Audience: service business owners who run their business from their phone. Low tech comfort. Plain words.

## What the website needs back from you

The site is built and on a preview. Its Free Resources page and the guide opt-in page are generated from one data file, and the TEAM guide is the only entry. Right now every field is a marked placeholder. Deliver these, and Megan will drop them in (or you can, if you have the repo):

1. The real title.
2. A one-line promise (one sentence, what the reader gets).
3. Three points about what is inside, taken from the actual PDF. One line each.
4. Read time in minutes.
5. A cover image, portrait 3:4, at least 900 by 1200 pixels, JPEG, matching the brand below. The site shows it at about 320 pixels wide on desktop and full width on phones, with a hot pink shadow behind it.
6. The finished PDF. It is not linked from the site yet. The email tool that will send it has not been chosen, so give the file to Megan.

Repo: github.com/islndreamr/mywealthmedia, branch `claude/confident-fermi-x7t3ja`. The data file is `site/data/guides.json`. The cover goes in `frontend/public/assets/img/`. After editing the data file, run `node tools/build.js` from the repo root and commit the result. Megan's rule from Nov 4: a guide appears on the site only after she has seen and approved the real file, so leave `"approved": true` alone until she says so.

## Brand (match the website exactly)

Colors, single source of truth. Only Ink was confirmed from the old site; the rest are the Field Manual v3 palette Megan approved for the site.

| Token | Hex | Use |
| --- | --- | --- |
| cream | #F6F0E6 | page background |
| paper | #FBF8F2 | cards on cream |
| sand | #D9C7A7 | fills, write-in lines |
| line | #E3D7C3 | hairlines |
| gold | #B8924A | big numerals and rules only, never small text on cream |
| bronze | #7A5A26 | small links and labels on cream |
| muted | #4A3F37 | secondary text |
| espresso | #2B2420 | dark bands, table headers |
| ink | #141110 | rail, body text, darkest bands |
| hot peony | #E0457B | one accent per page at most, text on it is ink |
| petal | #F49AB4 | tiny highlights on dark panels only |

Fonts. The website now uses Newsreader (light, with italic) for headlines and Hanken Grotesk for everything else. The `mwm-field-manual` skill still says Gloock for headlines because it was written before Megan switched the site. Ask Megan once whether the guide should follow the site (Newsreader) or the skill (Gloock). Recommend Newsreader so the guide and the site match. Never use Inter, Roboto, Poppins, Montserrat, Open Sans, DM Sans, Space Grotesk, Plus Jakarta, Fraunces or Playfair. Self-host the fonts from fontsource, offline, as the skill describes.

Logo: there is no high-res mark yet. Use a text "MWM" monogram in the headline font, as the site does.

## Writing rules (Megan's, enforced)

- No em dashes or en dashes anywhere. Check with grep before rendering.
- No "not X but Y" or "it's not about X, it's about Y" sentences. Say what the thing is.
- No lists of three crammed into one sentence as a habit. No rule-of-three rhythm.
- No AI vocabulary: seamless, robust, elevate, empower, leverage, unlock, harness, streamline, cutting-edge, delve, journey, game-changer, "in today's fast-paced world."
- Recommend, never command. "We recommend X because Y." No "never," "always," "don't" aimed at the reader.
- Every number traces to a real source, shown as a small "Source: name, year" line. Every link opened and checked live before it goes in. Invent nothing: no names, numbers, quotes, prices or URLs.
- Tools over talk: every page hands the reader something to do.
- Plain words, like Megan talking to an owner. Some roughness is fine. Over-polished copy fails.

## Design rules learned from the website work (apply to the PDF)

Megan rejected the first site build as "blah" and "loose." Research on award-level editorial design fixed it. The same rules apply here:

- One idea per page. One oversized element per page (a numeral, a title, a photograph). Everything else small.
- Three type sizes plus one label size. Light display weight. Italic for the one accent phrase.
- Empty space is the luxury material. A quarter of a page empty is fine.
- Nothing in boxes unless the box does work. Hairlines instead of borders. Asymmetric columns.
- The accent pink once per spread at most. Gold for numerals and rules.
- Numerals only where they index something real (section numbers, step numbers). The Field Manual rail numerals are fine because sections are a sequence.
- No all-caps tracked labels above every heading. One eyebrow per page at most.
- Real photographs of Megan only. Three exist in the repo at `frontend/public/assets/img/megan-1-full.jpg`, `megan-2-full.jpg`, `megan-3-full.jpg` (photo 2 is the direct-gaze one used in the site hero). No stock, no AI images.

## Process

1. Find the content in Notion. Confirm the outline with Megan: sections, pages, worksheets, who the reader is.
2. Draft the cover, the title, the promise and the three points. Show Megan. Wait for her yes.
3. Build the PDF with the skill's build steps (HTML to PDF with Playwright, overflow check, contact sheet, link check).
4. Run the writing checks (dashes, banned fonts, commanding tone, no Confirmed/Inference labels in the reader-facing file).
5. Send Megan the PDF, the cover image, and the five website fields in one short message. Mark anything unverified.

## Hard limits

Do not deploy anything, touch DNS or Netlify production settings, create accounts, or spend money. Do not link the guide from the live site. Do not add "unsubscribe anytime" copy anywhere; the email tool is not chosen yet.
