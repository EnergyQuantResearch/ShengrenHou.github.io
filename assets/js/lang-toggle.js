(function () {
  var STORAGE_KEY = "site-language";
  var root = document.documentElement;

  function normalizeLanguage(value) {
    return value === "zh" ? "zh" : "en";
  }

  function detectLanguage() {
    var current = root.getAttribute("data-site-lang");
    if (current) {
      return normalizeLanguage(current);
    }

    var stored = "";
    try {
      stored = window.localStorage.getItem(STORAGE_KEY) || "";
    } catch (error) {
      stored = "";
    }

    if (stored) {
      return normalizeLanguage(stored);
    }

    var browserLanguage = navigator.language || navigator.userLanguage || "en";
    return /^zh/i.test(browserLanguage) ? "zh" : "en";
  }

  function applyLanguage(language) {
    var resolvedLanguage = normalizeLanguage(language);

    root.setAttribute("data-site-lang", resolvedLanguage);
    root.setAttribute("lang", resolvedLanguage === "zh" ? "zh-CN" : "en");

    var options = document.querySelectorAll("[data-lang-option]");
    options.forEach(function (option) {
      var isActive = option.getAttribute("data-lang-option") === resolvedLanguage;
      option.classList.toggle("is-active", isActive);
      option.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function persistLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, normalizeLanguage(language));
    } catch (error) {
      // Ignore browsers that disable localStorage.
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(detectLanguage());

    var options = document.querySelectorAll("[data-lang-option]");
    options.forEach(function (option) {
      option.addEventListener("click", function () {
        var selectedLanguage = this.getAttribute("data-lang-option");
        persistLanguage(selectedLanguage);
        applyLanguage(selectedLanguage);
      });
    });
  });
})();
