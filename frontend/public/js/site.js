/* My Wealth Media | site.js
   Rail and mobile nav, scroll progress, count-up numerals, gentle reveals.
   Everything that moves is skipped when the visitor prefers reduced motion. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Year in the footer */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Mobile menu */
  var menuBtn = document.querySelector(".menu-btn");
  var menu = document.getElementById("mmenu");
  if (menuBtn && menu) {
    var open = false;
    var setMenu = function (state) {
      open = state;
      menu.hidden = !open;
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    };
    menuBtn.addEventListener("click", function () { setMenu(!open); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && open) { setMenu(false); menuBtn.focus(); } });
  }

  /* Scroll progress: fills the rail on desktop and the thin bar on mobile */
  var railFill = document.querySelector(".rail-fill");
  var progBar = document.querySelector(".mprog span");
  var ticking = false;
  function progress() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (railFill) railFill.style.height = (p * 100) + "%";
    if (progBar) progBar.style.width = (p * 100) + "%";
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(progress); }
  }, { passive: true });
  progress();

  /* Active section in the rail and mobile menu (homepage only) */
  var sections = Array.prototype.slice.call(document.querySelectorAll("[data-nav-section]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav-link]"));
  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var setActive = function (id) {
      navLinks.forEach(function (a) {
        if (a.getAttribute("data-nav-link") === id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) setActive(en.target.getAttribute("data-nav-section"));
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* Count-up numerals. data-count="1000" data-prefix="~" data-suffix="%" */
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  function render(el, value) {
    var pre = el.getAttribute("data-prefix") || "";
    var suf = el.getAttribute("data-suffix") || "";
    el.textContent = pre + value.toLocaleString("en-US") + suf;
  }
  if (counters.length) {
    if (reduce || !("IntersectionObserver" in window)) {
      counters.forEach(function (el) { render(el, parseInt(el.getAttribute("data-count"), 10)); });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target;
          cio.unobserve(el);
          var target = parseInt(el.getAttribute("data-count"), 10);
          var start = null;
          var dur = 1100;
          var step = function (ts) {
            if (!start) start = ts;
            var t = Math.min(1, (ts - start) / dur);
            var eased = 1 - Math.pow(1 - t, 3);
            render(el, Math.round(target * eased));
            if (t < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
        });
      }, { threshold: 0.4 });
      counters.forEach(function (el) { render(el, 0); cio.observe(el); });
    }
  }

  /* Gentle reveal on scroll */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reveals.length) {
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("in"); });
    } else {
      var rio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); rio.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { rio.observe(el); });
    }
  }
})();
