/* =============================================================
   script.js
   Minimal, dependency-free JS. Three jobs only:
   1. Toggle the mobile nav menu
   2. Highlight the current section in the nav (scroll-spy)
   3. Fill in the footer year
   ============================================================= */

(function () {
  "use strict";

  /* -----------------------------------------------------------
     1. Mobile nav toggle
     ----------------------------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var navList = document.getElementById("navList");

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after a link is tapped (mobile)
    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -----------------------------------------------------------
     2. Scroll-spy: highlight the nav link for the visible section
     ----------------------------------------------------------- */
  var sections = document.querySelectorAll("main .section");
  var navLinks = document.querySelectorAll("[data-nav]");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var linkFor = function (id) {
      return document.querySelector('[data-nav][href="#' + id + '"]');
    };

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              link.classList.remove("is-active");
            });
            var activeLink = linkFor(entry.target.id);
            if (activeLink) {
              activeLink.classList.add("is-active");
            }
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* -----------------------------------------------------------
     3. Footer year
     ----------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
