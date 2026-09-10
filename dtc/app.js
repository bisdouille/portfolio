const translations = {
  fr: {
    "gate.title": "Travaux sélectionnés",
    "gate.copy": "L’accès à cette page est restreint.",
    "gate.password": "Mot de passe",
    "gate.placeholder": "Saisir le mot de passe",
    "gate.access": "Accéder",
    "gate.error": "Mot de passe incorrect",
    "hero.eyebrow": "PERFORMANCE MARKETING · CREATIVE STRATEGY",
    "hero.title": "J’IDENTIFIE<br>CE QUI VEND.<br><span>PUIS JE LE SCALE.</span>",
    "hero.sub": "Meta Ads · E-commerce · Creative testing · Automatisation",
    "hero.bio": "Growth Lead hands-on avec plus de 5 ans d’expérience en acquisition et creative strategy. Je transforme les signaux de performance en créatives, campagnes et itérations actionnables.",
    "metric.spend": "de budget UA hebdomadaire",
    "metric.roas": "ROAS e-commerce",
    "metric.creatives": "créatives / semaine",
    "metric.years": "ans d’expérience",
    "noka.title": "DU PRODUIT<br><span>À LA PERFORMANCE.</span>",
    "noka.intro": "Transformer les attributs sensoriels du produit en angles créatifs testables.",
    "noka.taste": "Goût",
    "noka.color": "Couleur",
    "noka.ritual": "Rituel",
    "noka.tasteCopy": "Texture, préparation, gourmandise.",
    "noka.colorCopy": "Le produit lui-même devient le hook visuel.",
    "noka.ritualCopy": "Calme, préparation, habitude quotidienne.",
    "method.title": "DE LA CRÉA<br><span>AU SCALING.</span>",
    "method.copy": "Je reste directement impliqué dans les campagnes, l’analyse et les itérations créatives.",
    "flow.analyse": "Analyser",
    "flow.hypothesis": "Formuler",
    "flow.create": "Produire",
    "flow.launch": "Lancer",
    "flow.decide": "Décider",
    "cap.structure": "Structure & lancement",
    "cap.structureCopy": "Des campagnes lisibles, conçues pour apprendre autant que pour performer.",
    "cap.read": "Lecture des performances",
    "cap.readCopy": "Relier spend, créatives et signaux de conversion pour trouver le prochain levier.",
    "cap.budget": "Allocation du budget",
    "cap.budgetCopy": "Renforcer les signaux solides, limiter les faux positifs et couper rapidement.",
    "cap.testing": "Creative testing",
    "cap.testingCopy": "Décliner les hooks et isoler les variables qui expliquent la performance.",
    "decision.title": "TESTER. LIRE.<br><span>DÉCIDER.</span>",
    "decision.scale": "Le signal se confirme sur plusieurs créatives et fenêtres d’analyse.",
    "decision.iterate": "L’angle fonctionne, mais l’exécution laisse encore une variable à améliorer.",
    "decision.stop": "Le test ne crée pas assez de valeur : on documente, on coupe, on avance.",
    "velocity.title": "PRODUIRE PLUS.<br><span>APPRENDRE PLUS VITE.</span>",
    "velocity.creators": "créateurs actifs",
    "velocity.languages": "langues",
    "automation.title": "MOINS DE FRICTION.<br><span>PLUS DE TESTS.</span>",
    "automation.copy": "Un outil interne construit pour transformer les idées en variantes localisées, prêtes à tester.",
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
    "hero.title": "I FIND<br>WHAT SELLS.<br><span>THEN I SCALE IT.</span>",
    "hero.sub": "Meta Ads · E-commerce · Creative testing · Automation",
    "hero.bio": "Hands-on Growth Lead with 5+ years in acquisition and creative strategy. I turn performance signals into actionable creative, campaigns and iterations.",
    "metric.spend": "weekly UA spend",
    "metric.roas": "e-commerce ROAS",
    "metric.creatives": "creatives / week",
    "metric.years": "years of experience",
    "noka.title": "FROM PRODUCT<br><span>TO PERFORMANCE.</span>",
    "noka.intro": "Turning sensory product attributes into testable creative angles.",
    "noka.taste": "Taste",
    "noka.color": "Color",
    "noka.ritual": "Ritual",
    "noka.tasteCopy": "Texture, preparation, indulgence.",
    "noka.colorCopy": "The product itself becomes the visual hook.",
    "noka.ritualCopy": "Calm, preparation, daily habit.",
    "method.title": "FROM CREATIVE<br><span>TO SCALE.</span>",
    "method.copy": "I stay directly involved in campaign execution, analysis and creative iteration.",
    "flow.analyse": "Analyse",
    "flow.hypothesis": "Frame",
    "flow.create": "Create",
    "flow.launch": "Launch",
    "flow.decide": "Decide",
    "cap.structure": "Structure & launch",
    "cap.structureCopy": "Readable campaigns designed to learn as much as they perform.",
    "cap.read": "Performance analysis",
    "cap.readCopy": "Connect spend, creative and conversion signals to find the next lever.",
    "cap.budget": "Budget allocation",
    "cap.budgetCopy": "Back strong signals, limit false positives and cut quickly.",
    "cap.testing": "Creative testing",
    "cap.testingCopy": "Vary hooks and isolate the variables that explain performance.",
    "decision.title": "TEST. READ.<br><span>DECIDE.</span>",
    "decision.scale": "The signal holds across multiple creatives and analysis windows.",
    "decision.iterate": "The angle works, but the execution still leaves a variable to improve.",
    "decision.stop": "The test does not create enough value: document it, cut it, move on.",
    "velocity.title": "SHIP MORE.<br><span>LEARN FASTER.</span>",
    "velocity.creators": "active creators",
    "velocity.languages": "languages",
    "automation.title": "LESS FRICTION.<br><span>MORE TESTS.</span>",
    "automation.copy": "An internal tool built to turn ideas into localized variants ready to test.",
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
