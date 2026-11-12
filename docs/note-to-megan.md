# Note to Megan: the new site is built (v1 preview)

Nov 12, 2026. Nothing is deployed. Your live site is untouched.

Preview link: https://deploy-preview-1--mywealthmedia.netlify.app (updates on its own every time I push).

## Update, Nov 12: placeholder interview

Answers you gave, now applied: FAQ answers kept as written (tags off). Fourth client stays hidden. The $1M result stays unnamed. Button stays "Book the Diagnostic." Diagnostic page shows an email button until your calendar is built. Privacy: legal name confirmed, no address; GoHighLevel named as the CRM and email tool; no analytics today, Google Analytics may come later; unsubscribe by link or by email. Terms: governing-law line removed; paid work covered by a separate signed agreement; guide license line kept. Both legal pages dated November 12, 2026 and still marked as not lawyer-reviewed.

Open: the calendar link (reminder set for later today), the guide fields from the other chat, the GoHighLevel connection for the forms, and a lawyer's pass on Privacy and Terms.

## Update, Nov 12: your copy is in

Built from the text you sent (the "Build a business that doesn't depend on you to run" page). Where it went:

- Hero line under the button: "Operations. Automation. AI-powered systems. Built by someone who's actually run the business."
- Standfirst: "From the way leads enter your business to how your team delivers, gets paid and stays accountable, I build the infrastructure that makes growth manageable." Then your fractional COO plus technical capability line.
- The proof block now leads with $1M+ in 8 months on systems you built from the ground up, with the 20,000 leads and 48 team members underneath. It stays "CEO, online sales training company" with no company name, per your Nov 9 rule. Your own writing guide also lists 7FCC internal financials as private, so I kept the name off. If you want 7FCC named, say so and it is a one-word change.
- New section after services, "What I bring to the table," with your three areas and your "from strategy to execution" line as the closing thought.
- The story module is now your "I learned business from the inside out" text, signed "Founder, My Wealth Media. Fractional COO and AI Systems Architect."
- The booking block headline is your line: "You've already proven you can build a business. Let's build one that can scale."
- Footer reads "Fractional COO and AI Systems Architect."

Two choices I left to you:
1. Headline: switched to "Build a business that doesn't depend on you to run" on your say-so (Nov 12), with "depend on you" as the italic accent.
2. Button wording. Your text says "Book a Business Diagnostic." The site says "Book the Diagnostic" everywhere, per the handoff. Say if you want it changed.

The salon numerals (8 years, top 2%, dozens mentored, about 1,000 clients) stayed under the story, since your new text covers the same ground in prose.

## Update, Nov 12 evening: the research pass (groups A to D)

Built from the three-tier research in `docs/design-research-3-tiers.md`.

- Hero: one headline at about 7 percent of the screen width, your photo full height running off the right edge, one pink button, the guide as a text link, one proof sentence. The subline moved to an italic standfirst under the hero.
- The second block on the page is now a real result: 20,000 leads and 48 team members moved into one system (from your own copy for the sales training company). The other two results follow as pull quotes with their number placeholders.
- Services and results are out of boxes. The Diagnostic column is wider than the other two.
- Pink appears once per screen. Other buttons are outlined ink.
- Type scale cut to four sizes plus one label size.
- Rail is five words with no numerals: Start, Results, Services, How it works, Questions. The numerals now live only in "How it works," where 1, 2, 3 is a real sequence.
- Your story is the one full-width module, with the salon proof lines inside it.
- A booking block before the free guide, and a "Who I work with" block after the results.

Copy I drafted in your voice (all draft, change anything):
- Hero proof line: "8 years running my own book. Top 2% of stylists in the Pacific Northwest for revenue. Now I build the part of your business that runs without you."
- Under results: "Every result on this page is a real client. Names stay private because their numbers are their business."
- Under Sound familiar: "Most of this is a structure problem. The business was built around you, and the part that runs without you was never built."
- Under services: "I build it inside your business, with you, and you keep all of it."
- Under How it works: "Most owners wait until they're exhausted to fix this. The fix is faster when you still have some energy for it."
- Booking block: "30 minutes, with me. No pitch and no prep. You leave with clear next steps, whether we work together or not." and "If the Diagnostic is the wrong fit for you, I'll say so on the call."
- Who I work with: "Service businesses where the owner is still the one holding it together. Usually [TEAM SIZE RANGE] on the team and [REVENUE RANGE] a year. Salons, agencies, trades, training companies. If you run it from your phone, you're in the right place."
- FAQ, how soon: "The 30-day plan is written so the first changes land in the first week. Most owners feel the difference when the first thing they used to chase starts happening without them."

Result-number placeholders on the two pull quotes were removed on Megan's say-so (Nov 12). Still a placeholder: the fourth client. "Who I work with" is now written from facts already on the page (the 48-person team, remote teams of about 70, the $1M in 8 months, the construction office) with no invented ranges; "from a few people" is the one soft phrase, change it if you want a number. The $1M in 8 months line also appears in the proof block under the story.

## Update, same day: photos and the de-templating pass

- Photos are in. Photo 2 (direct gaze) in the hero arch, photo 3 (looking away) in the story section, photo 1 on the share image. All three originals are saved in `frontend/public/assets/img/` at web size.
- From the AI-tells list: eyebrow labels cut to two (hero and START HERE), arrows off every link, fade-ins and hover lifts removed, proof strip rewritten as sentences with the numeral large inside each, the Diagnostic card made wider and cream so it reads as the first choice, 01/02/03 removed from the cards and the resources grid, middle-dot strings rewritten, rail and footer labels in sentence case.
- Still open from that list: the three client result numbers (item 2), and one line of your own opinion per section (item 8).

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

1. Done: portrait and story photos are in.
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
