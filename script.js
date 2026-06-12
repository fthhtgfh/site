// Smooth scroll animations on load
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all feature cards and service items
document.querySelectorAll('.feature-card, .service-item, .pricing-card').forEach(el => {
    observer.observe(el);
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-cube, .gradient-orb');
    
    parallaxElements.forEach(el => {
        el.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

// 3D Tilt Effect
VanillaTilt.init(document.querySelectorAll('.feature-card'), {
    max: 25,
    speed: 400,
    scale: 1.05
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Counter animation for numbers
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Intersection observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate form
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (isValid) {
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }
    });
}

// Active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.flexDirection = 'column';
        navMenu.style.gap = '0';
        navMenu.style.background = 'white';
        navMenu.style.borderBottom = '1px solid #e2e8f0';
    });
}

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.style.display = 'none';
    });
});

// Intersection observer for fade-in animation
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Button hover effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Scroll to top button
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
        // Show scroll to top button if needed
    }
});

// Initial animations
window.addEventListener('load', () => {
    // Trigger entrance animations
    document.querySelectorAll('.feature-card, .service-item').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.animation = 'slideInUp 0.6s ease forwards';
        }, index * 100);
    });
});

// Mouse tracking effect for hero
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        const orbs = heroSection.querySelectorAll('.gradient-orb');
        orbs.forEach(orb => {
            const xMove = (x - 50) * 0.1;
            const yMove = (y - 50) * 0.1;
            orb.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
}

// Lazy loading for images (when added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('🚀 Zefium Hub loaded successfully! Welcome to the future of web design.');