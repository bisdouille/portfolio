const translations = {
  fr: {
    "gate.title": "Travaux sélectionnés",
    "gate.copy": "L’accès à cette page est restreint.",
    "gate.password": "Mot de passe",
    "gate.placeholder": "Saisir le mot de passe",
    "gate.access": "Accéder",
    "gate.error": "Mot de passe incorrect",
    "hero.eyebrow": "PERFORMANCE MARKETING · CREATIVE STRATEGY",
    "hero.title": "JE PRODUIS.<br>JE TESTE.<br><span>J’ITÈRE.</span>",
    "hero.sub": "Meta Ads · E-commerce · Creative testing · Automatisation",
    "hero.bio": "Depuis plus de 5 ans, je pilote l’acquisition et la production créative pour des apps, des jeux et des produits e-commerce. Je gère les campagnes, j’analyse les résultats et j’organise les itérations.",
    "metric.spend": "de budget UA hebdomadaire",
    "metric.roas": "ROAS e-commerce",
    "metric.creatives": "créatives / semaine",
    "metric.years": "ans d’expérience",
    "noka.title": "JE TRANSFORME LE PRODUIT<br><span>EN ANGLES CRÉATIFS.</span>",
    "noka.intro": "Je pars des qualités du produit pour construire des angles simples à produire et à tester.",
    "noka.taste": "Goût",
    "noka.color": "Couleur",
    "noka.ritual": "Rituel",
    "noka.tasteCopy": "Texture, préparation, gourmandise.",
    "noka.colorCopy": "Le produit lui-même devient le hook visuel.",
    "noka.ritualCopy": "Calme, préparation, habitude quotidienne.",
    "method.title": "JE PILOTE LES CAMPAGNES.<br><span>J’ITÈRE SUR LES CRÉAS.</span>",
    "method.copy": "Je reste directement impliqué dans les campagnes, l’analyse et les itérations créatives.",
    "flow.analyse": "Analyser",
    "flow.hypothesis": "Formuler",
    "flow.create": "Produire",
    "flow.launch": "Lancer",
    "flow.decide": "Décider",
    "cap.structure": "Structure & lancement",
    "cap.structureCopy": "Je structure les campagnes pour lire clairement ce qui fonctionne.",
    "cap.read": "Lecture des performances",
    "cap.readCopy": "Je relie dépenses, créatives et conversions pour choisir la suite.",
    "cap.budget": "Allocation du budget",
    "cap.budgetCopy": "Je renforce les signaux solides et je coupe ce qui ne tient pas.",
    "cap.testing": "Creative testing",
    "cap.testingCopy": "Je décline les hooks et j’isole les variables qui font la différence.",
    "velocity.title": "JE PRODUIS PLUS.<br><span>J’APPRENDS PLUS VITE.</span>",
    "velocity.creators": "créateurs actifs",
    "velocity.languages": "langues",
    "automation.title": "JE RÉDUIS LA FRICTION.<br><span>JE TESTE DAVANTAGE.</span>",
    "automation.copy": "J’ai construit cet outil interne pour produire rapidement des variantes localisées prêtes à tester.",
    "contact.phone": "Téléphone"
  },
  en: {
    "gate.title": "Selected work",
    "gate.copy": "This page is access-restricted.",
    "gate.password": "Password",
    "gate.placeholder": "Enter password",
    "gate.access": "Access",
    "gate.error": "Incorrect password",
    "hero.eyebrow": "PERFORMANCE MARKETING · CREATIVE STRATEGY",
    "hero.title": "I CREATE.<br>I TEST.<br><span>I ITERATE.</span>",
    "hero.sub": "Meta Ads · E-commerce · Creative testing · Automation",
    "hero.bio": "For 5+ years, I have led acquisition and creative production for apps, games and e-commerce products. I run campaigns, analyse results and organise the next iterations.",
    "metric.spend": "weekly UA spend",
    "metric.roas": "e-commerce ROAS",
    "metric.creatives": "creatives / week",
    "metric.years": "years of experience",
    "noka.title": "I TURN THE PRODUCT<br><span>INTO CREATIVE ANGLES.</span>",
    "noka.intro": "I use the product’s qualities to build simple angles that can be produced and tested.",
    "noka.taste": "Taste",
    "noka.color": "Color",
    "noka.ritual": "Ritual",
    "noka.tasteCopy": "Texture, preparation, indulgence.",
    "noka.colorCopy": "The product itself becomes the visual hook.",
    "noka.ritualCopy": "Calm, preparation, daily habit.",
    "method.title": "I RUN THE CAMPAIGNS.<br><span>I ITERATE ON CREATIVE.</span>",
    "method.copy": "I stay directly involved in campaign execution, analysis and creative iteration.",
    "flow.analyse": "Analyse",
    "flow.hypothesis": "Frame",
    "flow.create": "Create",
    "flow.launch": "Launch",
    "flow.decide": "Decide",
    "cap.structure": "Structure & launch",
    "cap.structureCopy": "I structure campaigns so I can clearly read what works.",
    "cap.read": "Performance analysis",
    "cap.readCopy": "I connect spend, creative and conversion data to choose the next move.",
    "cap.budget": "Budget allocation",
    "cap.budgetCopy": "I back strong signals and cut what does not hold up.",
    "cap.testing": "Creative testing",
    "cap.testingCopy": "I vary hooks and isolate the variables that make a difference.",
    "velocity.title": "I PRODUCE MORE.<br><span>I LEARN FASTER.</span>",
    "velocity.creators": "active creators",
    "velocity.languages": "languages",
    "automation.title": "I REMOVE FRICTION.<br><span>I TEST MORE.</span>",
    "automation.copy": "I built this internal tool to produce localized variants that are ready to test, faster.",
    "contact.phone": "Phone"
  }
};

const storageKey = "dtcPortfolioLanguage";
let currentLanguage = localStorage.getItem(storageKey) === "en" ? "en" : "fr";
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function t(key) {
  if (Object.prototype.hasOwnProperty.call(translations[currentLanguage], key)) return translations[currentLanguage][key];
  return translations.fr[key] ?? key;
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "fr";
  document.documentElement.lang = currentLanguage;
  localStorage.setItem(storageKey, currentLanguage);
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = t(element.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-lang]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === currentLanguage)));
  const activeAngle = document.querySelector("#nokaSelector .is-active")?.dataset.angle;
  if (activeAngle) updateNokaCopy(activeAngle);
}

document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
setLanguage(currentLanguage);

const HASH = "b71386fb95b9ace8198f6d26d149d5659933b410be0c99dfdeec018c6bab7115";
const gate = document.getElementById("gate");
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const gateError = document.getElementById("error");

function unlock() {
  sessionStorage.setItem("dtcPortfolioAccess", "1");
  gate.hidden = true;
  document.body.classList.remove("locked");
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

if (sessionStorage.getItem("dtcPortfolioAccess") === "1") unlock();
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  gateError.textContent = "";
  if (await sha256(passwordInput.value) === HASH) unlock();
  else { gateError.textContent = t("gate.error"); passwordInput.select(); }
});

function loadVideo(video) {
  if (!video.src) {
    video.src = video.dataset.src;
    video.load();
  }
  if (!reducedMotion.matches) video.play().catch(() => {});
}

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting ? loadVideo(entry.target) : entry.target.pause());
}, { rootMargin: "180px 0px", threshold: .08 });
document.querySelectorAll(".lazy-video").forEach((video) => videoObserver.observe(video));

const nokaSelector = document.getElementById("nokaSelector");
const nokaDeck = document.getElementById("nokaDeck");
const nokaCards = Array.from(nokaDeck.querySelectorAll(".noka-card"));

function updateNokaCopy(angle) {
  document.getElementById("nokaCopy").textContent = t(`noka.${angle}Copy`);
}

function activateNoka(angle) {
  const buttons = Array.from(nokaSelector.querySelectorAll("button[data-angle]"));
  const activeIndex = nokaCards.findIndex((card) => card.dataset.angle === angle);
  buttons.forEach((button) => {
    const active = button.dataset.angle === angle;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  nokaCards.forEach((card, index) => {
    card.classList.remove("is-active", "is-back-left", "is-back-right");
    if (index === activeIndex) card.classList.add("is-active");
    else if ((index - activeIndex + nokaCards.length) % nokaCards.length === 1) card.classList.add("is-back-right");
    else card.classList.add("is-back-left");
  });
  updateNokaCopy(angle);
}

nokaSelector.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-angle]");
  if (button) activateNoka(button.dataset.angle);
});
nokaDeck.addEventListener("click", (event) => {
  const card = event.target.closest("button[data-angle]");
  if (card) activateNoka(card.dataset.angle);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
  });
}, { threshold: .1 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
