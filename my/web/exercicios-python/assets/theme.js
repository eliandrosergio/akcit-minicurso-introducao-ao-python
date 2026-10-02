(function () {
  "use strict";

  var STORAGE_KEY = "py-exercicios-tema";

  function getPreferredTheme() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "light" || saved === "dark") return saved;
    var prefersLight = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      var icon = btn.querySelector("[data-theme-icon]");
      var label = btn.querySelector("[data-theme-label]");
      if (theme === "light") {
        if (icon) icon.textContent = "\u2600";
        if (label) label.textContent = "Tema claro";
      } else {
        if (icon) icon.textContent = "\u263D";
        if (label) label.textContent = "Tema escuro";
      }
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    var next = current === "light" ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  }

  applyTheme(getPreferredTheme());

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) btn.addEventListener("click", toggleTheme);

    var copyButtons = document.querySelectorAll(".copy-btn");
    copyButtons.forEach(function (b) {
      b.addEventListener("click", function () {
        var block = b.closest(".code-block");
        var codeEl = block ? block.querySelector("code") : null;
        if (!codeEl) return;
        var text = codeEl.textContent;
        var done = function () {
          var original = b.textContent;
          b.textContent = "Copiado!";
          setTimeout(function () { b.textContent = original; }, 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(function () {});
        } else {
          var ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); } catch (e) {}
          document.body.removeChild(ta);
          done();
        }
      });
    });
  });
})();
