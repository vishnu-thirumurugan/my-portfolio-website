function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close menu when a link is clicked (for mobile)
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu-links').classList.remove('open');
    document.querySelector('.hamburger-icon').classList.remove('open');
  });
});

// Reveal on scroll
(function revealSetup(){
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('reveal'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

// Optional: Smooth scroll for in-page links on mobile closing menu
(function linkEnhance(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      const menu = document.querySelector('.menu-links');
      const icon = document.querySelector('.hamburger-icon');
      if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon && icon.classList.remove('open');
      }
    });
  });
})();
