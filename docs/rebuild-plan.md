# Rebuild plan for mywealthmedia.com (v1)

Written Nov 9, 2026 for Megan to approve before any site code is written.
Short version: six pages, plain HTML and CSS, no framework, nothing deployed.

## What I found first

- The live site's code is this GitHub repo. Netlify serves the folder `frontend/public` as-is, with no build step. I downloaded the live homepage and it matches the repo file byte for byte.
- The React app around that folder (the `frontend/src` files and the long package list) is never used. The old build tool left it there. I will leave it alone for now and suggest removing it later as its own small step.
- The old site is saved in `archive/site-v1-2026-11-09` with screenshots and a README on how to bring it back.
- Both fonts exist on Google Fonts (I checked the font server; a made-up font name was rejected, these two were accepted).

## How I suggest building it

Plain static pages: HTML, one CSS file, a little JavaScript. No React, no framework, no build step on Netlify. Same setup the current site uses, so nothing about hosting changes.

Why: it is the fastest to load (good for the Lighthouse targets), the easiest to roll back, and there is nothing to install or keep updated. Six pages is small enough that this stays tidy.

One small helper: guide pages come from a single data file (`guides.json`). A tiny script turns that file into the guide pages. I run it by hand and commit the result, so Netlify still has no build step. Adding a guide later means adding one entry to the data file and running the script.

Fonts: I would like to host the Gloock and Hanken Grotesk files inside the site instead of loading them from Google each visit. Same fonts, same look, faster first paint and one less outside request. Both are open-licensed fonts and I will keep the license files next to them. If you would rather load from Google, say so and I will do that instead.

Forms: every form posts to one small function in `forms.js` with a clear TODO. Until a CRM is chosen it stores nothing and just shows the thank-you state. Swapping in the CRM later is a one-place change.

## Pages and the sections on each

### 1. Homepage `/`
Left rail numerals 01 to 06 on desktop. Each numeral jumps to a part of the page and lights up as you scroll past it.

- 01 Start: hero (eyebrow, headline, subline, Book the Diagnostic button, Get the free guide link, portrait placeholder) and the espresso proof strip with gold count-up numerals.
- 02 Sound familiar: the four lines, then the quiz block (9 questions, score on screen, email asked only for the full breakdown).
- 03 Where to start: the three cards (Diagnostic, Operations, Sales and Delivery) and "What's in the Diagnostic report". No price anywhere.
- 04 Results: client results (three filled cards, fourth hidden until you send it) and "My story".
- 05 How it works: the three steps. Then the free guide feature on an ink band with the first name and email form.
- 06 Questions: the FAQ, the closing push ("If nothing changes, where is your business next November?") and the footer.

Mobile: slim ink header with the MWM monogram and a menu, a thin petal progress bar under it, and a sticky bottom bar with a full-width Hot Peony "Book the Diagnostic" button.

### 2. Free Resources `/resources`
Title and line, search box, topic pills (All, AI Tools, Operations, Sales, Launch), the featured ink card with the petal START HERE label and a Hot Peony button, then the grid of paper cards. At launch the grid shows the TEAM guide only. Everything on this page is drawn from `guides.json`.

### 3. Guide opt-in page `/resources/team-prompts-guide/`
First guide page, made from the template: eyebrow FREE GUIDE, cover image placeholder, title, one-line promise, three points, the first name and email form, "Check your inbox in the next few minutes", and the on-page thank-you state with the link to the quiz. The slug `team-prompts-guide` is my placeholder until you confirm the real title.

### 4. Diagnostic `/diagnostic`
What the free call is, what the written report includes, how it works in three steps, a clearly marked box where the calendar embed goes, and the FAQ.

### 5. Thank-you state
Built into the guide forms as an on-page state, not a separate page. Also used for the quiz email form.

### 6. Privacy `/privacy` and Terms `/terms`
Placeholder text clearly marked for your lawyer or template, plus the results-vary line in every footer.

Also: a 404 page restyled to match, and the small files search engines expect (sitemap, robots) updated for the new pages.

## What is in the mockups that I will NOT build

The mockup images came from an AI tool, so some of what is in them is not from you. I will use your copy from the handoff and skip these:

- The Products and Substack sections and the rail items for them. Both are on hold until the store and the newsletter are ready.
- Mockup proof numbers like "Teams of ~70" and "8 yrs master stylist". I use the four proof points from the handoff.
- The mockup's "How it works" wording (Diagnose, Build, Hand off). I use yours (Talk, Get the plan, Build it).
- The red button on the resources mockup. It becomes Hot Peony, as you asked.

## Files, in plain terms

```
frontend/public/
  index.html                       homepage
  resources/index.html             free resources
  resources/team-prompts-guide/    first guide page (made by the script)
  diagnostic/index.html
  privacy/index.html
  terms/index.html
  404.html
  css/site.css                     all styling, colors as named tokens at the top
  js/site.js                       rail, scroll progress, count-ups, menu
  js/forms.js                      the one form handler (TODO: CRM)
  js/quiz.js                       the quiz
  data/guides.json                 the list of guides
  assets/fonts/                    Gloock and Hanken Grotesk files
  assets/img/                      covers and portrait placeholders
tools/build-guides.js              turns guides.json into guide pages
archive/site-v1-2026-11-09/        the old site, frozen
docs/rebuild-plan.md               this file
```

## Order of work, one commit each

1. Design tokens, fonts, base layout, rail and mobile header.
2. Homepage sections, top to bottom.
3. Free Resources page and the guides data file.
4. Guide page template and the TEAM guide page.
5. Quiz.
6. Diagnostic, Privacy, Terms, 404.
7. Accessibility and Lighthouse pass at 375, 768 and 1440 wide.
8. Note to you with screenshots and the open placeholder list.

## Two things I need from you to start

1. A yes on this plan, or changes to it.
2. The quiz: the handoff has the 9 questions and the scoring (0 to 3 each) but not the four answer choices per question. I will draft them, mark them as draft, and you approve or rewrite. Tell me if you would rather write them yourself first.

Everything in section 5 of the handoff (photos, result numbers, guide title and points, FAQ answers, calendar link, CRM) can arrive while I build. Each one has a visibly marked placeholder until then.
