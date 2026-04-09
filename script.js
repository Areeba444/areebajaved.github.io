// ============================================
// AREEBA JAVED PORTFOLIO — JS 2025
// ============================================

// ===== HEADER SCROLL EFFECT =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (mobileNav.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ===== TYPING EFFECT =====
const roles = [
  "Full Stack Developer",
  "Automation Builder",
  "CS Student @ FAST",
  "Social Work Minor",
  "Problem Solver"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeEffect() {
  if (!typedEl) return;
  const current = roles[roleIndex];
  if (!isDeleting) {
    typedEl.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length + 8) isDeleting = true;
  } else {
    typedEl.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 40 : 120);
}
window.addEventListener('load', typeEffect);

// ===== PROJECT CARD SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project-card').forEach(card => observer.observe(card));

// ===== SMOOTH SCROLL HINT =====
const scrollHint = document.querySelector('.scroll-hint');
if (scrollHint) {
  scrollHint.addEventListener('click', () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a:not(.nav-resume-btn)');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.background = '';
        link.style.color = '';
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.style.background = 'var(--blush-100)';
          link.style.color = 'var(--ink)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
