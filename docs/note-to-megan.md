# Note to Megan: the new site is built (v1 preview)

Nov 12, 2026. Nothing is deployed. Your live site is untouched.

Preview link: https://deploy-preview-1--mywealthmedia.netlify.app (updates on its own every time I push).

## Update, same day: font and headline

Headline font is now Newsreader (your pick, option 5), light weight, with "keeps growing" in italic as the accent. Headline reads "Build the business that keeps growing when you step away." The font options page is gone. Gloock is out of the site entirely.

## Update, same day: the tightening pass

You said the first cut felt loose with no path for the eye. Changes made:

- A thin gold line runs down the left margin of the homepage with the big section numerals sitting on it, from the proof strip to the closing push. That is the path.
- Every "why" sits next to a "do": Sound familiar beside the quiz card, the report contents beside a Book button, the FAQ beside a "Still deciding?" card that stays in view as you scroll.
- Section heights roughly halved, text columns narrower, headline-to-body contrast stronger. The homepage is about a fifth shorter.
- The closing push and footer are one dark band now instead of two in a row.
- Hero: dead space and the "scroll" cue removed so the proof strip shows on a laptop screen without scrolling.
- Client result cards lead with the result number (placeholder for now), the way proof cards should.

Scores after the pass (Lighthouse, mobile): Homepage 99 performance, 95 accessibility. Resources 100 and 95. Diagnostic 100 and 100. The only accessibility flag anywhere is the gold numerals on cream (see decisions below).

## How to see it

- Quickest: open the pictures in `docs/screenshots/`. There is a desktop and a phone shot of every page, plus the quiz mid-way and the quiz result.
- Live in a browser: say the word and I will open a pull request. Netlify then makes a private preview link for the branch on its own, without touching the live site. I have not opened one because you asked me to check first.
- On your own computer, from the repo folder:

```bash
npx serve frontend/public
```

## What is built

- Homepage with the rail (01 to 06), proof strip with count-up numerals, Sound familiar, the quiz, Where to start, what's in the report, client results, your story, how it works, the free guide band, FAQ, the closing push and the footer.
- Free Resources with search, topic pills, the featured START HERE card and the grid. Only the TEAM guide shows.
- The TEAM guide opt-in page with its thank-you state.
- Diagnostic page with a marked box where the calendar goes.
- Privacy and Terms with placeholder text marked for your lawyer or a template.
- A matching 404 page.
- Mobile: ink header, petal progress bar, menu, and the sticky Book the Diagnostic bar.

## Scores (Lighthouse, mobile, measured Nov 12)

Targets were Performance 90+ and Accessibility 95+.

| Page | Performance | Accessibility |
| --- | --- | --- |
| Homepage | 99 | 95 (gold numerals, see below) |
| Free Resources | 100 | 95 |
| TEAM guide page | 99 | 98 |
| Diagnostic | 99 | 98 |
| Privacy | 99 | 98 |

These were measured on a local copy, so the live numbers will differ a little once it is on Netlify. The only flag left is the gold numerals on light cards (see decisions below).

Checked by script at 375, 768 and 1440 wide: no sideways scroll on any page, no script errors, quiz scores correctly, both forms validate and show their thank-you state, the menu opens and closes, the resources filters work.

## Placeholders still open (every one is visibly marked on the page)

1. Portrait photo in the hero, and the working photo in your story.
2. Result numbers on the three client cards.
3. The fourth client: role, industry and result. The card is in the code, hidden, ready for it.
4. TEAM guide: real title, one-line promise, cover image, three points from the PDF, read time.
5. FAQ: business size range, the San Diego answer (draft is in), how soon they see a change.
6. Calendar embed on the Diagnostic page.
7. Which CRM the forms go to. Until then forms store nothing.
8. Privacy and Terms: the whole text, plus last-updated dates.
9. New high-res MWM mark. The site uses a text MWM monogram in Gloock for now, including the browser icon.

## Things I decided that you should check

- **Quiz answer choices.** The handoff had the 9 questions but not the four answers under each. I drafted them (0 to 3 points each). They live at the top of `frontend/public/js/quiz.js`, easy to rewrite. The three result bands each have one extra sentence of mine under your band title.
- **"Running my chair like a business" line.** Left in as the handoff drafted it. You said you may rewrite it.
- **Gold numerals on light backgrounds.** Gold on cream is about 2.7 to 1. That is fine for decoration and the numerals are hidden from screen readers, but it is under the 3 to 1 mark for large text in the accessibility rules. Options: keep it as the mockups show, or switch numerals on light backgrounds to bronze. I kept gold.
- **Share image and browser icon.** The old ones were rose-gold. I made simple new ones in the new palette with the headline. Replace them whenever the real mark arrives.
- **Fonts are hosted in the site** rather than loaded from Google each visit. Same fonts, faster. The license files sit next to them.
- **Old React scaffolding.** Still in the repo, unused. Removing it is a separate small cleanup when you say so.
- **Not built from the mockups:** Products, Substack, the mockup proof numbers and step names, the red button.

## Copy

All copy is from your handoff, built as written. It is a draft until you approve it. The draft rules were followed in anything I added: no em dashes, no "not X but Y", plain words.

## What I need from you next

1. A look at the screenshots and anything you want changed.
2. Yes or no on opening a pull request for the Netlify preview link.
3. The items in the placeholder list, in any order, whenever you have them.
