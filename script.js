// Typing effect
  // Typing effect using plain JavaScript
    const textArray = [
      "Computer Science Student",
      "Aspiring Developer",
      "Automation Enthusiast"
    ];
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const typedText = document.getElementById("typed-text");

    function type() {
      if (index >= textArray.length) index = 0;
      currentText = textArray[index];

      if (!isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length + 10) isDeleting = true;
      } else {
        typedText.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          index++;
        }
      }
      setTimeout(type, isDeleting ? 50 : 150);
    }

    window.addEventListener("load", type);
// Fade in about section on scroll
function fadeInOnScroll() {
  const about = document.querySelector('#about .about-container');
  if (!about) return;
  const rect = about.getBoundingClientRect();
  if(rect.top < window.innerHeight - 100) {
    about.classList.add('visible');
  }
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Smooth scroll for "See My Work"
document.querySelector('.see-work-btn').addEventListener('click', e => {
  e.preventDefault();
  const projects = document.querySelector('#projects');
  if(projects) projects.scrollIntoView({behavior: 'smooth'});
});

// Scroll arrow click
document.querySelector('.scroll-down').addEventListener('click', () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
});
// Intersection Observer for project cards and contact heading
// This will reveal project cards and the contact heading when they come into view
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = { threshold: 0.3 };

  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, observerOptions);

  document.querySelectorAll(".project-card").forEach(card => observer.observe(card));
  const contactHeading = document.querySelector(".animated-heading");
  if (contactHeading) observer.observe(contactHeading);
});



const cursor = document.getElementById('custom-cursor');
const trail = document.getElementById('cursor-trail');

let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

// Smooth trail following
function animateTrail() {
  trailX += (mouseX - trailX) * 0.15;
  trailY += (mouseY - trailY) * 0.15;
  trail.style.left = trailX + 'px';
  trail.style.top = trailY + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
  // Optional: flip on keyboard "Enter" for accessibility
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
});

