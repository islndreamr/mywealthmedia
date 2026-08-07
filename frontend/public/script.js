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
