# What gives away an AI-made website, and how ours scores

Researched Nov 12, 2026 for Megan. Sources are listed at the end with their tier (primary document, vendor or practitioner blog, social post). Nothing here is a number I measured myself unless it says so.

The short version: no single tell proves anything, and human designers use every one of them. What reads as "AI-made" is a cluster of defaults showing up together with nothing specific to the business underneath. Our site hits more of the cluster than I would like, and a fair share of that came in through the brief, because the mockups themselves were AI-generated images.

## 1. The tells, grouped

### Visual defaults

Confirmed from a primary source (Anthropic's own write-up on its design skill): left to itself, the model "will almost always conform to Inter fonts, purple gradients on white backgrounds, and minimal animations," and when one font is banned it drifts to the next common one (it names Space Grotesk).

Confirmed from Anthropic's public design skill file, which lists these as the generic defaults to avoid:

- One headline word set in italic, bold or a different color as the accent.
- All-caps tracked labels, and labels sitting above content for no reason.
- A big number with a small label under it as the stat treatment.
- Numbered markers (01 / 02 / 03) where the content is not really a sequence.
- Fade-and-slide-up entrance on every section, hover effect on every card.
- Identical rounded cards, one radius for everything, the same grey shadow.
- Middle-dot strings like "A · B · C," an arrow glued to every link, hairline rules everywhere.
- And a whole named cluster: warm cream background, serif display type, one warm accent. It even cites a cream hex, #F4F1EA, that is a near twin of ours.

Repeated across practitioner blogs (secondary, consistent with each other):

- Purple or indigo gradient, often on the headline text. Several trace it to Tailwind's default indigo. I could not find a primary source for that origin story, so treat it as folklore.
- Centred hero with a pill badge, then a title, then two buttons.
- Three or four icon-topped feature cards in a row. One blog says it counted this on 63% of 120 AI-built pages. That is their count, not mine, and I could not verify the method.
- Frosted-glass cards and blurry purple glows for no reason.
- One long scrolling page with nothing else behind it.

### Copy tells

Secondary sources (copywriting and editing blogs), broadly agreeing:

- The vocabulary: seamless, robust, elevate, empower, leverage, unlock, harness, streamline, cutting-edge, innovative, "your trusted partner," "more than just."
- The constructions: "It's not X, it's Y." "No X. No Y. Just Z." "We don't just do X, we Y."
- Em dashes, which tend to travel with the vocabulary above.
- Numbers nobody can source: 10x, 99%, "thousands of happy customers."
- Testimonials with no real person, no company, no specific result.
- Everything in the same even, upbeat register with no opinion in it.

### Image tells

Secondary sources (image-detection vendors and guides):

- Hands and fingers, especially where hands touch objects or each other.
- Text in the picture that is almost words.
- Plastic skin, repeating textures, foliage that tiles.
- The same glossy "stock" look everywhere, nobody who actually works at the company.
- A reverse image search that finds nothing, because the image never existed before.

### Structure and content tells

- The page could be any company's. Swap the logo and nothing breaks.
- No product screenshot, no real office, no real client, no real number.
- Placeholder leftovers: dummy Latin, "[Company Name]," "Lorem."
- A "generator" tag in the page source, or a near-empty page that is all script.

## 2. How our preview scores

I went through the list against the preview as of today. "Brief" means the handoff or the mockups asked for it. These are my judgments.

| Tell | On our site? | Where it came from | My recommendation |
| --- | --- | --- | --- |
| Inter, Roboto, system fonts | No | Brief banned them | Keep as is |
| Purple gradient, glass, glow | No | | Keep as is |
| Cream background + serif display + warm accent | Yes, fully | Brand palette, Field Manual | Keep. This is the brand. The pink accent and the ink panels pull it away from the stock version of this look |
| One italic word in the headline | Yes | Your pick, today | Your call. It is on the list, and it is also a classic editorial move. I would keep it because it is the only one on the page |
| All-caps tracked eyebrow labels | Yes, six on the homepage and five more across the other pages | Mockups | Cut most. Keep the hero eyebrow and the START HERE tag. Drop "2-minute check," "Your score," "My story," "Still deciding?", "Free guide" on the band, "Legal," "The Diagnostic" |
| Big number, small label stat strip | Yes | Handoff | Keep the numbers, change the treatment. Write them into one sentence each, or set them as a line of running text with the numeral large inside it |
| 01 / 02 / 03 markers | Yes, three places | Mockups, Field Manual rail | Keep on the rail, where sections really are a sequence. Remove from the three "Where to start" cards (not a sequence) and from the resources grid |
| Fade-in on every section | Yes | My default | Remove. Keep one moment: the proof numerals counting up |
| Hover lift on every button | Yes | My default | Remove the lift, keep a plain color change |
| Identical rounded cards, one radius, one shadow | Mostly | My default | Vary. Flat cards with a single rule on light sections, no radius on the ink panels |
| "→" on links | Yes, three on the homepage and one per card on the resources page | Mockups | Remove all |
| "A · B · C" middle-dot strings | Yes, three | My default | Rewrite as sentences |
| Hairline rules | Yes, many | Field Manual | Keep, but fewer. They are doing work in the FAQ and lists; cut them from the cards |
| Three equal cards in a row | Yes, twice | Handoff | Keep the content, break the symmetry. Lead card wider than the other two, since you said most owners start there |
| Centred hero, pill badge, two buttons | No (left aligned, one button, one link) | | Keep as is |
| Copy vocabulary | Clean. One "journey," in the agency client card, which is yours | Handoff copy | Leave it |
| "Not X, it's Y" constructions | None found | Writing rules | Keep enforcing |
| Em dashes | None | Writing rules | Keep enforcing |
| Unsourced numbers | None. Every number is yours | | Keep it that way when the result numbers arrive |
| Testimonials with no person | Partly. Role and industry only, by your choice | Handoff | Fine, but the result number on each card is what makes it believable |
| AI stock images | None yet, placeholders only | | The portrait and working photo need to be real photos of you. Not generated, not stock |
| Swap the logo test | Weak. The hero copy is specific, but sections 03 to 06 could belong to any operator | | The fix is content, not layout: your result numbers, your photo, one line in your voice per section |
| Placeholder leftovers | Yes, on purpose, all marked | | Clear before launch, obviously |
| Generator tag, script-only page | No. Plain HTML, nothing in the source | | Keep as is |

## 3. What I'd change, in order of payoff

1. Real photos of you, two of them. Nothing on this list matters more.
2. The three result numbers.
3. Cut the eyebrow labels down to two.
4. Remove the arrows, the fade-ins and the hover lifts.
5. Rework the proof strip into sentences with large numerals inside them.
6. Break the three-card symmetry in "Where to start."
7. Drop the 01 / 02 / 03 from the cards and the resources grid.
8. One line of your actual opinion in each section, in your words. For example, under "How it works," what you think most owners get wrong. That is the thing no template has.

Items 3 to 7 are about an hour of work and change nothing in the copy or the brand. Say which ones you want and I will do them.

## 4. One honest note about the mockups

The four Higgsfield images we built from were AI-generated, and they carry the defaults above: numbered rail, all-caps eyebrows, big-number strip, three cards, a timeline. Building faithfully to them pulled those patterns into the site. That is part of why it reads "blah" even with the right colors and a good font. The brand decisions in the brief (palette, two fonts, the pink) are not the problem. The template furniture around them is.

## Sources

Primary documents
- Anthropic, "Improving frontend design through Skills" (claude.com/resources/articles/improving-frontend-design-through-skills). Quotes on Inter, purple gradients, minimal animation and Space Grotesk are from this page, read Nov 12, 2026.
- Anthropic's public frontend-design skill file (github.com/anthropics/skills, skills/frontend-design/SKILL.md), read Nov 12, 2026. The list of generic patterns in section 1 is quoted or closely paraphrased from it.

Practitioner and vendor blogs (secondary; consistent with each other, none measured)
- buildtolaunch.substack.com, "AI Slop Website Design: How to Stop Looking AI-Generated" (the 63% of 120 pages count is theirs)
- noqode.fr, "AI slop design: 10 signs your website was made by AI"
- 925studios.co, "AI Slop Web Design: Complete Guide" and "AI Slop Fonts and Gradients"
- developersdigest.tech, "AI Design Slop: 16 Patterns That Mark a Site as Vibe-Coded"
- tenex.studio, "AI slop: 8 signs a website was generated by AI"
- clouddigital.solutions, "How to Spot an AI Website: 15 Tell-Tale Signs"
- illos.dev, "Why vibe-coded websites look the same, and the fix"
- theadminbar.com, "How to Edit AI Website Copy Like a Copywriter"
- contentbeta.com, "List of 300+ AI Words, Phrases and Sentences to Avoid"
- matthewvollmer.substack.com, "A Field Guide to AI Tells"
- isitai.com and eweek.com guides on spotting AI images

Social
- A post on X by Vaibhav Sisinty summarising the "purple gradients, Inter, glassmorphism" complaint. Opinion only.
