/* My Wealth Media | resources.js
   Search box and topic pills on the Free Resources page.
   The cards themselves come from site/data/guides.json at build time. */
(function () {
  "use strict";
  var grid = document.getElementById("res-grid");
  var empty = document.getElementById("res-empty");
  var search = document.getElementById("res-search");
  var pills = Array.prototype.slice.call(document.querySelectorAll(".pill"));
  if (!grid) return;
  var cards = Array.prototype.slice.call(grid.querySelectorAll(".res-card"));
  var topic = "";

  function apply() {
    var q = (search ? search.value : "").trim().toLowerCase();
    var shown = 0;
    cards.forEach(function (c) {
      var ok = (!topic || c.getAttribute("data-topic") === topic) &&
               (!q || (c.getAttribute("data-search") || "").indexOf(q) !== -1);
      c.hidden = !ok;
      if (ok) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  }
  pills.forEach(function (p) {
    p.addEventListener("click", function () {
      topic = p.getAttribute("data-topic") || "";
      pills.forEach(function (o) { o.setAttribute("aria-pressed", o === p ? "true" : "false"); });
      apply();
    });
  });
  if (search) search.addEventListener("input", apply);
})();
