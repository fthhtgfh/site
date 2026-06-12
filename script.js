gsap.registerPlugin(ScrollTrigger);

// Reveal animations
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    }
  });
});

// Parallax floating cards
gsap.to("#card1", { y: -40, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to("#card2", { y: -60, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to("#card3", { y: -50, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });

// Hero parallax on scroll
gsap.to(".hero-visual", {
  y: 80,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
