// ============================================================
// Navigation toggle for mobile
// ============================================================
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isOpen);
    navList.classList.toggle('is-open');
  });

  // Close navigation when a link is clicked
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('is-open');
    });
  });
}

// ============================================================
// Active navigation link highlighting
// ============================================================
const navLinks = document.querySelectorAll('[data-nav]');

if (navLinks.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
  });
}

// ============================================================
// Update footer year
// ============================================================
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}