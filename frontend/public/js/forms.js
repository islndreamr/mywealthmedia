/* My Wealth Media | forms.js
   ONE place every lead form on the site posts to.

   Connected to GoHighLevel on Nov 12, 2026 through netlify/functions/lead.js.
   The honeypot field named "company" must stay empty; bots that fill it are dropped.

   Every form that uses this has:
     data-lead-form="guide" | "quiz" | "diagnostic"   what kind of lead it is
     data-guide="team-prompts-guide"                   (guide forms only)
     a [data-thanks] element right after it            the thank-you state
*/
(function () {
  "use strict";

  /* ---- The one swappable handler ---------------------------------- */
  function sendLead(lead) {
    // Posts to a small Netlify function (netlify/functions/lead.js) that forwards to GoHighLevel.
    return fetch("/.netlify/functions/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    }).then(function (res) {
      if (!res.ok) throw new Error("Lead not accepted: " + res.status);
    });
  }

  /* ---- Wiring ----------------------------------------------------- */
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  document.querySelectorAll("form[data-lead-form]").forEach(function (form) {
    var err = form.querySelector("[data-error]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (err) { err.hidden = true; err.textContent = ""; }

      var first = form.querySelector('[name="firstName"]');
      var email = form.querySelector('[name="email"]');
      var problems = [];
      if (first && !first.value.trim()) problems.push("Add your first name.");
      if (email && !validEmail(email.value.trim())) problems.push("Check the email address.");
      if (problems.length) {
        if (err) { err.textContent = problems.join(" "); err.hidden = false; }
        (first && !first.value.trim() ? first : email).focus();
        return;
      }

      var hp = form.querySelector('[name="company"]');
      var lead = {
        company: hp ? hp.value : "",
        kind: form.getAttribute("data-lead-form"),
        guide: form.getAttribute("data-guide") || null,
        firstName: first ? first.value.trim() : null,
        email: email ? email.value.trim() : null,
        score: form.getAttribute("data-quiz-score") ? Number(form.getAttribute("data-quiz-score")) : null,
        page: window.location.pathname
      };

      var btn = form.querySelector('[type="submit"]');
      if (btn) { btn.disabled = true; btn.setAttribute("aria-busy", "true"); }

      sendLead(lead).then(function () {
        var thanks = form.parentElement.querySelector("[data-thanks]") || document.querySelector("[data-thanks]");
        if (thanks) {
          thanks.querySelectorAll("[data-thanks-email]").forEach(function (el) { el.textContent = lead.email; });
          form.hidden = true;
          thanks.hidden = false;
          var h = thanks.querySelector("h3, h2");
          if (h) { h.setAttribute("tabindex", "-1"); h.focus(); }
        }
      }).catch(function () {
        if (err) { err.textContent = "Something went wrong. Please try again, or email megan@mywealthmedia.com."; err.hidden = false; }
      }).then(function () {
        if (btn) { btn.disabled = false; btn.removeAttribute("aria-busy"); }
      });
    });
  });

  window.MWM = window.MWM || {};
  window.MWM.sendLead = sendLead;
})();
