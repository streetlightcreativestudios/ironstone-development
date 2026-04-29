/* =====================
   SCROLL REVEAL
===================== */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));


/* =====================
   STICKY NAV
===================== */
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});


/* =====================
   ACTIVE NAV LINK
===================== */
const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage ||
     (currentPage === '' && linkPage === 'index.html')) {
    link.classList.add('active');
  }
});

/* =====================
   HAMBURGER MENU
===================== */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('nav-open');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('nav-open');
  });
});