// Scroll reveal
const reveals = document.querySelectorAll('section > *, .feature-card, .script-card, .plan-card');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
}

// Parallax / 3D scroll
const hero = document.querySelector('.hero');
const heroVisual = document.querySelector('.hero-visual');
const orbs = document.querySelectorAll('.orb, .hero-glow');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const height = window.innerHeight || 1;
  const progress = Math.min(scrollY / height, 1);

  if (hero) {
    hero.style.transform = `translateY(${progress * -20}px)`;
  }

  if (heroVisual) {
    const tiltX = progress * 6;
    const tiltY = -10 + progress * 6;
    heroVisual.style.transform = `translateZ(40px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  }

  orbs.forEach((orb, index) => {
    const offset = (index + 1) * 10;
    orb.style.transform = `translateY(${progress * offset}px) translateZ(-150px)`;
  });
});
