/* My Wealth Media | quiz.js
   "How much is your business running on you?"
   9 questions, each answer scores 0 to 3, total out of 27.
   Higher means the business leans on the owner more.

   DRAFT: the questions and bands are from Megan's handoff. The four answer
   choices under each question are drafts for Megan to approve or rewrite.
   Edit the QUESTIONS list below; nothing else needs to change. */
(function () {
  "use strict";

  var QUESTIONS = [
    { q: "If you took a full week off with no phone, what would happen?",
      a: ["Nothing. The team would run it.",
          "A few things would slip, nothing serious.",
          "Clients would notice and someone would call me.",
          "I honestly can't picture it."] },
    { q: "How many decisions a day still come to you?",
      a: ["Almost none.",
          "A few big ones.",
          "Most of them.",
          "All of them, down to the small stuff."] },
    { q: "Could a new hire learn their job from something written down?",
      a: ["Yes. It's written down and we use it.",
          "Mostly. Some of it is written.",
          "A little. Most of it lives in people's heads.",
          "No. I'd have to train them myself."] },
    { q: "When a lead comes in, does it get followed up without you checking?",
      a: ["Yes, every time.",
          "Usually.",
          "Sometimes.",
          "Only if I do it or chase someone."] },
    { q: "Do you know your numbers for last week without digging?",
      a: ["Yes. I can see them any time.",
          "Mostly, with a quick look.",
          "I'd need an hour to pull them.",
          "No, not really."] },
    { q: "How much of your week goes to tasks someone else could do?",
      a: ["Hardly any.",
          "A few hours.",
          "About half.",
          "Most of it."] },
    { q: "Are you using any AI tools for writing, scheduling or follow-up?",
      a: ["Yes, every day, and they're set up well.",
          "Some, here and there.",
          "I've tried, but nothing stuck.",
          "Not yet."] },
    { q: "When something goes wrong with a client, who fixes it?",
      a: ["The team. I hear about it after.",
          "The team, but they loop me in.",
          "Me, with help.",
          "Me, always."] },
    { q: "How often do you work evenings or weekends just to catch up?",
      a: ["Rarely.",
          "Once or twice a month.",
          "Most weeks.",
          "Every week."] }
  ];

  var BANDS = [
    { max: 9,  title: "Your business can breathe without you.",
      body: "You have real systems in place. The next step is usually making them tighter and handing off the last few things that still land on your desk." },
    { max: 18, title: "You're the glue, and it's starting to show.",
      body: "Things work because you keep them working. A few written processes and the right tools would give you back hours every week." },
    { max: 27, title: "Everything runs through you right now.",
      body: "The business depends on you being there. That's fixable, and the Diagnostic is built for exactly this." }
  ];

  var root = document.getElementById("quiz");
  if (!root) return;

  var intro = root.querySelector(".quiz-intro");
  var form = root.querySelector(".quiz-form");
  var result = root.querySelector(".quiz-result");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Build the questions */
  var prog = document.createElement("div");
  prog.className = "quiz-prog";
  prog.setAttribute("aria-hidden", "true");
  QUESTIONS.forEach(function () { prog.appendChild(document.createElement("i")); });
  form.appendChild(prog);

  var live = document.createElement("p");
  live.className = "sr-only";
  live.setAttribute("aria-live", "polite");
  form.appendChild(live);

  var sets = QUESTIONS.map(function (item, i) {
    var fs = document.createElement("fieldset");
    fs.hidden = true;
    var lg = document.createElement("legend");
    lg.innerHTML = '<span class="qnum">Question ' + (i + 1) + " of " + QUESTIONS.length + "</span>" + item.q;
    fs.appendChild(lg);
    item.a.forEach(function (text, score) {
      var id = "q" + i + "a" + score;
      var label = document.createElement("label");
      label.className = "choice";
      label.setAttribute("for", id);
      var input = document.createElement("input");
      input.type = "radio"; input.name = "q" + i; input.value = String(score); input.id = id; input.required = true;
      var span = document.createElement("span");
      span.textContent = text;
      label.appendChild(input); label.appendChild(span);
      fs.appendChild(label);
    });
    form.appendChild(fs);
    return fs;
  });

  var nav = document.createElement("div");
  nav.className = "quiz-nav";
  var back = document.createElement("button");
  back.type = "button"; back.className = "btn btn-outline"; back.textContent = "Back";
  var next = document.createElement("button");
  next.type = "button"; next.className = "btn btn-primary"; next.textContent = "Next";
  var errEl = document.createElement("p");
  errEl.className = "form-error"; errEl.hidden = true; errEl.setAttribute("role", "alert");
  nav.appendChild(back); nav.appendChild(next);
  form.appendChild(errEl);
  form.appendChild(nav);

  var current = 0;
  function show(i) {
    current = i;
    sets.forEach(function (fs, k) { fs.hidden = k !== i; });
    Array.prototype.forEach.call(prog.children, function (bar, k) { bar.className = k <= i ? "on" : ""; });
    back.hidden = i === 0;
    next.textContent = i === sets.length - 1 ? "See my score" : "Next";
    errEl.hidden = true;
    live.textContent = "Question " + (i + 1) + " of " + QUESTIONS.length;
    var first = sets[i].querySelector("input");
    if (first) first.focus({ preventScroll: true });
    if (!reduce) root.scrollIntoView({ block: "nearest" });
  }

  function answered(i) { return !!sets[i].querySelector("input:checked"); }

  function finish() {
    var score = 0;
    sets.forEach(function (fs) { score += Number(fs.querySelector("input:checked").value); });
    var band = BANDS.filter(function (b) { return score <= b.max; })[0];
    result.querySelector("[data-score]").textContent = String(score);
    result.querySelector("[data-band-title]").textContent = band.title;
    result.querySelector("[data-band-body]").textContent = band.body;
    var emailForm = result.querySelector("form[data-lead-form]");
    if (emailForm) emailForm.setAttribute("data-quiz-score", String(score));
    form.hidden = true;
    result.classList.add("show");
    var h = result.querySelector("h3");
    if (h) { h.setAttribute("tabindex", "-1"); h.focus(); }
  }

  next.addEventListener("click", function () {
    if (!answered(current)) { errEl.textContent = "Pick one to keep going."; errEl.hidden = false; return; }
    if (current < sets.length - 1) show(current + 1); else finish();
  });
  back.addEventListener("click", function () { if (current > 0) show(current - 1); });
  form.addEventListener("submit", function (e) { e.preventDefault(); next.click(); });

  var startBtn = intro.querySelector("[data-quiz-start]");
  startBtn.addEventListener("click", function () {
    intro.hidden = true;
    form.hidden = false;
    show(0);
  });

  var again = result.querySelector("[data-quiz-again]");
  if (again) again.addEventListener("click", function () {
    form.reset();
    result.classList.remove("show");
    form.hidden = false;
    show(0);
  });
})();
