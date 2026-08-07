(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // ---- On-load hero reveal ----
  function markLoaded() {
    requestAnimationFrame(function () {
      document.body.classList.add("loaded");
    });
  }
  if (document.readyState === "complete") {
    markLoaded();
  } else {
    window.addEventListener("load", markLoaded);
  }

  // ---- Section reveal (IntersectionObserver) ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  // ---- Hero parallax (rAF loop) ----
  var heroImg = document.querySelector(".hero-img");
  if (heroImg && !reduce) {
    var ticking = false;
    function update() {
      var y = window.scrollY || window.pageYOffset;
      if (y < window.innerHeight) {
        heroImg.style.transform = "translate3d(0," + (-y * 0.4) + "px,0)";
      }
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ---- About paragraphs: line-by-line highlight on scroll ----
  var aboutParas = document.querySelectorAll(".about .body:not(.body--feature)");
  if (aboutParas.length && !reduce) {
    var hlTicking = false;
    function updateHighlight() {
      var trigger = window.innerHeight * 0.72;
      aboutParas.forEach(function (p) {
        var r = p.getBoundingClientRect();
        if (r.top > window.innerHeight || r.bottom < 0) return;
        var progress = (trigger - r.top) / r.height;
        p.style.setProperty("--p", Math.min(1, Math.max(0, progress)).toFixed(3));
      });
      hlTicking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!hlTicking) {
          requestAnimationFrame(updateHighlight);
          hlTicking = true;
        }
      },
      { passive: true }
    );
    updateHighlight();
  }

  // ---- Testimonial rotation ----
  var rotor = document.getElementById("testimonial-rotor");
  if (rotor && !reduce) {
    var quotes = [
      {
        text: "Megan found the money we were losing and built the systems that stopped it.",
        cite: "Joseph Ortega\u2002\u00b7\u2002CEO, 7FCC"
      },
      {
        text: "Our CRM finally tells the truth. So does our P&L.",
        cite: "Founder\u2002\u00b7\u2002Online education company"
      },
      {
        text: "She rebuilt our delivery while we were still selling. No client felt a thing.",
        cite: "COO\u2002\u00b7\u2002High ticket coaching company"
      }
    ];
    var qi = 0;
    var quoteText = document.getElementById("quote-text");
    var quoteCite = document.getElementById("quote-cite");
    setInterval(function () {
      rotor.classList.add("is-fading");
      setTimeout(function () {
        qi = (qi + 1) % quotes.length;
        quoteText.textContent = quotes[qi].text;
        quoteCite.textContent = quotes[qi].cite;
        rotor.classList.remove("is-fading");
      }, 520);
    }, 7500);
  }

  // ---- Custom cursor (desktop pointer only) ----
  if (finePointer) {
    var dot = document.createElement("div");
    var ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add("has-cursor");

    var mx = -100, my = -100, rx = -100, ry = -100, cursorRaf = null;

    function cursorLoop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)";
      dot.style.transform = "translate3d(" + mx + "px," + my + "px,0)";
      cursorRaf = requestAnimationFrame(cursorLoop);
    }

    document.addEventListener("mousemove", function (e) {
      mx = e.clientX;
      my = e.clientY;
      document.body.classList.add("cursor-visible");
      if (cursorRaf === null) {
        rx = mx;
        ry = my;
        cursorRaf = requestAnimationFrame(cursorLoop);
      }
    });
    document.addEventListener("mouseleave", function () {
      document.body.classList.remove("cursor-visible");
    });

    var softTargets = document.querySelectorAll("a, button, .card");
    softTargets.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        document.body.classList.add("cursor-soft");
      });
      el.addEventListener("mouseleave", function () {
        document.body.classList.remove("cursor-soft");
      });
    });
  }

  // ---- Card tilt (desktop pointer only) ----
  if (finePointer && !reduce) {
    var cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
      card.classList.add("tilt");
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        var rotY = px * 8;   // up to ~4deg each side
        var rotX = -py * 8;
        card.style.transform =
          "perspective(900px) translateY(-6px) rotateX(" +
          rotX.toFixed(2) +
          "deg) rotateY(" +
          rotY.toFixed(2) +
          "deg)";
        card.style.borderColor = "rgba(224,165,130,0.4)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
        card.style.borderColor = "";
      });
    });
  }
})();
