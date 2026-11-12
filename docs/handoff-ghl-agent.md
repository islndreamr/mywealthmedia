# Handoff prompt: build the GoHighLevel side of mywealthmedia.com

Paste everything below this line to the GoHighLevel agent working inside the My Wealth Media subaccount.

---

You are setting up the My Wealth Media subaccount in GoHighLevel so the new website at mywealthmedia.com can send it leads and book calls. The website is finished and waiting on you. It has three lead forms and one booking page. Nothing on the site posts to GoHighLevel yet; the site's developer will connect it the moment you hand back the items in the last section.

Megan Lemay owns the account and makes every decision. Where something needs a choice (sender address, email wording, calendar hours), lay out the options and let her pick. Do not send any email to a real contact while testing; use Megan's own address.

## What the website sends

The site has one JavaScript function that every form posts through. It will send one JSON object per submission to a URL you provide. The object looks like this:

```
{
  "kind": "guide" | "quiz" | "diagnostic",
  "guide": "team-prompts-guide" | null,
  "firstName": "Sam",
  "email": "sam@example.com",
  "score": 17 | null,
  "page": "/resources/team-prompts-guide/"
}
```

- `kind` says which form it came from.
- `guide` is set only for guide forms. The only guide today is `team-prompts-guide`.
- `score` is set only for the quiz, a whole number from 0 to 27. Higher means the business leans on the owner more.
- `page` is the page the visitor was on.

The site never collects a phone number. First name and email only.

## What to build

### 1. One inbound webhook that receives all three kinds

Create a workflow whose trigger is an inbound webhook. Give its URL to the developer. The workflow should:

1. Create or update the contact by email, setting first name.
2. Save `page` to a custom field `website_source_page` (text).
3. Add the tag `website-lead`.
4. Branch on `kind`:
   - `guide`: add tag `guide-team-prompts`, then send the guide email (section 2).
   - `quiz`: save `score` to a custom field `quiz_score` (number), add tag `quiz`, then send the quiz breakdown email (section 3).
   - `diagnostic`: add tag `diagnostic-request` and create an opportunity in the Diagnostic pipeline (section 5) at the first stage. This kind is reserved for later; the booking page itself uses the calendar in section 4.

If a single webhook cannot branch cleanly, make three webhooks instead and hand back three URLs labelled by kind. Confirm that inbound webhook triggers are available on this account's plan before building around them; if they are not, say so and propose the closest alternative (for example a GoHighLevel form per lead kind with the form's embed code).

### 2. The guide delivery email

- Upload the PDF `The-TEAM-Prompts.pdf` to the media library. Megan has the file; the developer also has it in the website repo at `site/guides/The-TEAM-Prompts.pdf`. It is 9 pages, about 280 KB.
- Create an email that sends the guide as a link to that file. Subject and body are for Megan to approve. Draft them plainly, in her voice: short, warm, no hype. Suggested first draft, subject: "Your TEAM Prompts guide". Body: a one-line hello, the link, one sentence on what to do first (page 3 is a one-minute self-check), and her sign-off.
- Send from an address on mywealthmedia.com. Set up the sending domain with the proper DNS records so it lands in inboxes. Report the records that need to be added at the domain registrar; DNS is at GoDaddy, and Megan or the developer will add them.
- Every email must carry the unsubscribe link. Confirm that it does. The website's privacy page already promises it.

### 3. The quiz breakdown email

The quiz is "How much is your business running on you?" Nine questions, each answer scores 0 to 3, total out of 27. The site shows the score on screen; the email is the fuller breakdown the visitor asked for.

Result bands:
- 0 to 9: "Your business can breathe without you."
- 10 to 18: "You're the glue, and it's starting to show."
- 19 to 27: "Everything runs through you right now."

The nine questions, for writing the breakdown:
1. If you took a full week off with no phone, what would happen?
2. How many decisions a day still come to you?
3. Could a new hire learn their job from something written down?
4. When a lead comes in, does it get followed up without you checking?
5. Do you know your numbers for last week without digging?
6. How much of your week goes to tasks someone else could do?
7. Are you using any AI tools for writing, scheduling or follow-up?
8. When something goes wrong with a client, who fixes it?
9. How often do you work evenings or weekends just to catch up?

Build one email per band (three emails) with a short paragraph per band on what the score means and what to fix first, ending with a link to book the Diagnostic. Draft them for Megan to approve. Keep to plain words. No em dashes, no "it's not X, it's Y" sentences, no words like unlock, elevate, leverage, seamless.

### 4. The Diagnostic calendar

- Create a calendar for the free 30-minute Diagnostic call on video. Megan sets the hours and buffer. Confirmation and reminder emails should match the site's promise: 30 minutes, no pitch, no prep, you leave with clear next steps.
- The booking form on the calendar should ask for first name, email, and one optional question: "What's the one thing in your business that still runs through you?" No phone number unless Megan wants one.
- Hand back the calendar's embed code and its direct booking link. The site will embed it on the /diagnostic/ page and link to it from every "Book the Diagnostic" button.
- A booking should tag the contact `diagnostic-booked` and move or create its opportunity to the "Call booked" stage.

### 5. Pipeline, tags and fields

Pipeline "Diagnostic" with stages: New request, Call booked, Call held, Report sent, Client, Not now.

Tags used above: `website-lead`, `guide-team-prompts`, `quiz`, `diagnostic-request`, `diagnostic-booked`.

Custom fields: `website_source_page` (text), `quiz_score` (number).

### 6. Spam

The webhook URL will sit in the site's public JavaScript, which is normal for inbound webhooks. Add a filter step at the top of the workflow that drops submissions where the email is empty or malformed, and ignore any payload that includes a field named `company` (the site will add that as a hidden honeypot field; real visitors leave it blank, bots fill it).

## What to hand back to the developer

Send these in one message. The site cannot go live with working forms until all four are in hand.

1. The inbound webhook URL (or three URLs labelled guide, quiz, diagnostic), plus the exact JSON field names it expects if they differ from the ones above.
2. The Diagnostic calendar embed code and direct booking link.
3. Confirmation that the guide email sends with the PDF link and an unsubscribe link, tested to Megan's own address.
4. The DNS records needed for the sending domain, so they can be added at GoDaddy.

Also tell Megan which of the drafted emails are waiting on her approval.

## Do not

Do not send email to anyone but Megan during setup. Do not import contacts. Do not change anything in other subaccounts. Do not connect the website yourself; the developer does that once the items above arrive.
