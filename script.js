// Simple interactions "façon SaaS"

const demoBtn = document.getElementById("cta-demo");
const docsBtn = document.getElementById("cta-docs");
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

function smoothScrollTo(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  window.scrollTo({
    top: el.offsetTop - 80,
    behavior: "smooth",
  });
}

demoBtn?.addEventListener("click", () => {
  smoothScrollTo("#contact");
  statusEl.textContent = "Parlez-nous de votre projet, on vous répond vite.";
  statusEl.style.color = "#a0a3b1";
});

docsBtn?.addEventListener("click", () => {
  alert("Ici tu pourrais rediriger vers ta doc ou un Notion. 😉");
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!email) {
    statusEl.textContent = "Merci d’indiquer une adresse email.";
    statusEl.style.color = "#ff4d6a";
    return;
  }

  // Simulation d’envoi
  statusEl.textContent = "Envoi en cours...";
  statusEl.style.color = "#a0a3b1";

  setTimeout(() => {
    statusEl.textContent =
      "Merci ! Votre message a été enregistré (simulation côté front).";
    statusEl.style.color = "#4ade80";
    form.reset();
  }, 900);
});
