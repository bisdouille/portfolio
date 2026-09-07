const translations = {
  en: {
    "gate.title": "Selected work",
    "gate.copy": "This page is access-restricted.",
    "gate.password": "Password",
    "gate.placeholder": "Enter password",
    "gate.access": "Access",
    "gate.error": "Incorrect password",
    "nav.contact": "Contact",
    "hero.eyebrow": "GROWTH LEAD · PERFORMANCE CREATIVE",
    "hero.title": "I BUILD<br><span>CREATIVE SYSTEMS.</span>",
    "hero.sub": "Performance creative strategy · UGC · Paid growth",
    "metric.creators": "active creators",
    "metric.videos": "videos / week",
    "metric.languages": "languages",
    "metric.spend": "weekly UA spend at Homa",
    "rivrs.title": "CREATIVE PRODUCTION<br><span>AT SCALE.</span>",
    "rivrs.games": "live games",
    "hooks.title": "MULTIPLE HOOKS.<br><span>SAME JOB.</span>",
    "hooks.question": "Question-led",
    "hooks.progression": "Progression",
    "hooks.contrarian": "Contrarian",
    "balance.eyebrow": "CREATIVE BALANCE",
    "balance.viral": "Virality",
    "balance.conversion": "Conversion",
    "balance.result": "I <small>(try)</small> to do both.",
    "tool.title": "BUILT TO<br><span>MOVE FASTER.</span>",
    "tool.copy": "Internal production tool built to increase creative testing velocity.",
    "tool.timeLabel": "Video production time",
    "tool.point1Title": "One script, more variants",
    "tool.point1Copy": "Reusable templates turn ideas into multiple executions quickly.",
    "tool.point2Title": "Localization built in",
    "tool.point2Copy": "Languages, voices and subtitles live in the same production flow.",
    "tool.point3Title": "Designed for the team",
    "tool.point3Copy": "Clear presets reduce handoffs and make production easier to operate.",
    "tool.point4Title": "Faster learning cycles",
    "tool.point4Copy": "Less production time means more creative hypotheses tested.",
    "noka.title": "SELLING<br><span>A FEELING.</span>",
    "noka.taste": "Taste",
    "noka.color": "Color",
    "noka.ritual": "Ritual",
    "noka.tasteCopy": "Texture, preparation, indulgence.",
    "noka.colorCopy": "The product becomes the visual hook.",
    "noka.ritualCopy": "Calm, preparation, daily habit.",
    "noka.average": "average ROAS",
    "data.title": "DATA-LED.<br><span>NEVER DATA-TRAPPED.</span>",
    "data.copy": "Performance data decides what scales. Instinct, cultural signals and a little creative mischief decide what gets tested next.",
    "data.signal1": "Read the signal",
    "data.signal2": "Trust the hunch",
    "data.signal3": "Test the edge",
    "data.tools": "ANALYTICS & ATTRIBUTION",
    "contact.phone": "Phone"
  },
  fr: {
    "gate.title": "Travaux sélectionnés",
    "gate.copy": "L’accès à cette page est restreint.",
    "gate.password": "Mot de passe",
    "gate.placeholder": "Saisir le mot de passe",
    "gate.access": "Accéder",
    "gate.error": "Mot de passe incorrect",
    "nav.contact": "Contact",
    "hero.eyebrow": "GROWTH LEAD · PERFORMANCE CRÉATIVE",
    "hero.title": "JE CONSTRUIS DES<br><span>SYSTÈMES CRÉATIFS.</span>",
    "hero.sub": "Stratégie créative · UGC · Acquisition payante",
    "metric.creators": "créateurs actifs",
    "metric.videos": "vidéos / semaine",
    "metric.languages": "langues",
    "metric.spend": "de budget UA hebdo chez Homa",
    "rivrs.title": "PRODUCTION CRÉATIVE<br><span>À GRANDE ÉCHELLE.</span>",
    "rivrs.games": "jeux actifs",
    "hooks.title": "PLUSIEURS HOOKS.<br><span>UN MÊME OBJECTIF.</span>",
    "hooks.question": "Question",
    "hooks.progression": "Progression",
    "hooks.contrarian": "Contre-pied",
    "balance.eyebrow": "ÉQUILIBRE CRÉATIF",
    "balance.viral": "Viralité",
    "balance.conversion": "Conversion",
    "balance.result": "I <small>(try)</small> to do both.",
    "tool.title": "CONSTRUIT POUR<br><span>ALLER PLUS VITE.</span>",
    "tool.copy": "Outil interne développé pour accélérer la production et multiplier les tests créatifs.",
    "tool.timeLabel": "Temps de production vidéo",
    "tool.point1Title": "Un script, plus de variantes",
    "tool.point1Copy": "Des templates réutilisables transforment rapidement une idée en plusieurs exécutions.",
    "tool.point2Title": "Localisation intégrée",
    "tool.point2Copy": "Langues, voix et sous-titres sont réunis dans un même flux de production.",
    "tool.point3Title": "Pensé pour l’équipe",
    "tool.point3Copy": "Des réglages clairs réduisent les allers-retours et simplifient la prise en main.",
    "tool.point4Title": "Des cycles d’apprentissage plus courts",
    "tool.point4Copy": "Moins de temps de production permet de tester davantage d’hypothèses créatives.",
    "noka.title": "VENDRE<br><span>UNE SENSATION.</span>",
    "noka.taste": "Goût",
    "noka.color": "Couleur",
    "noka.ritual": "Rituel",
    "noka.tasteCopy": "Texture, préparation, gourmandise.",
    "noka.colorCopy": "Le produit devient lui-même le hook visuel.",
    "noka.ritualCopy": "Calme, préparation, habitude quotidienne.",
    "noka.average": "ROAS moyen",
    "data.title": "GUIDÉ PAR LA DATA.<br><span>JAMAIS BRIDÉ PAR ELLE.</span>",
    "data.copy": "La performance décide de ce qui scale. L’instinct, les signaux culturels et un peu de malice créative décident de ce qu’on teste ensuite.",
    "data.signal1": "Lire le signal",
    "data.signal2": "Suivre l’intuition",
    "data.signal3": "Tester la limite",
    "data.tools": "ANALYSE & ATTRIBUTION",
    "contact.phone": "Téléphone"
  }
};

const languageStorageKey = "selectedWorkLanguageV2";
let currentLanguage = localStorage.getItem(languageStorageKey) === "fr" ? "fr" : "en";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function setLanguage(language) {
  currentLanguage = language === "fr" ? "fr" : "en";
  document.documentElement.lang = currentLanguage;
  localStorage.setItem(languageStorageKey, currentLanguage);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === currentLanguage));
  });
  syncDynamicLabels();
}

function syncDynamicLabels() {
  const activeHook = document.querySelector("#hookSelector .is-active");
  const activeNoka = document.querySelector("#nokaSelector .is-active");
  if (activeHook) document.getElementById("hookVideoLabel").textContent = t(activeHook.dataset.nameKey);
  if (activeNoka) {
    document.getElementById("nokaAngleCopy").textContent = t(activeNoka.dataset.copyKey);
  }
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
setLanguage(currentLanguage);

const HASH = "7463f6b03b1a96e107176cfea31e2f32814021cfcf2ad0b2ca2122416ea1a116";
const gate = document.getElementById("gate");
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const gateError = document.getElementById("error");

function unlock() {
  sessionStorage.setItem("selectedWorkAccess", "1");
  gate.hidden = true;
  document.body.classList.remove("locked");
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

if (sessionStorage.getItem("selectedWorkAccess") === "1") unlock();

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  gateError.textContent = "";
  if (await sha256(passwordInput.value) === HASH) {
    unlock();
  } else {
    gateError.textContent = t("gate.error");
    passwordInput.select();
  }
});

function loadVideo(video, shouldPlay = true) {
  if (!video.src) {
    const startAt = Number(video.dataset.start || 0);
    const playbackRate = Number(video.dataset.rate || 1);
    const applyTiming = () => {
      video.playbackRate = playbackRate;
      if (startAt > 0 && video.duration && Math.abs(video.currentTime - startAt) > 2) {
        video.currentTime = Math.min(startAt, Math.max(0, video.duration - .25));
      }
    };
    video.addEventListener("loadedmetadata", applyTiming, { once: true });
    video.addEventListener("canplay", applyTiming, { once: true });
    video.src = video.dataset.src;
    video.load();
  }
  if (shouldPlay && !prefersReducedMotion.matches) video.play().catch(() => {});
}

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    if (entry.isIntersecting) loadVideo(video);
    else video.pause();
  });
}, { rootMargin: "220px 0px", threshold: .08 });

document.querySelectorAll(".lazy-video").forEach((video) => videoObserver.observe(video));

function setupSelector(selectorId, videoId, labelId, copyId) {
  const selector = document.getElementById(selectorId);
  const video = document.getElementById(videoId);
  const label = document.getElementById(labelId);

  selector.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-src]");
    if (!button || button.classList.contains("is-active")) return;
    selector.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-pressed", String(item === button));
    });
    video.classList.add("is-switching");
    video.pause();
    window.setTimeout(() => {
      video.poster = button.dataset.poster;
      video.dataset.src = button.dataset.src;
      video.removeAttribute("src");
      video.load();
      loadVideo(video);
      label.textContent = t(button.dataset.nameKey);
      const index = Array.from(selector.children).indexOf(button) + 1;
      label.previousElementSibling.textContent = String(index).padStart(2, "0");
      if (copyId) document.getElementById(copyId).textContent = t(button.dataset.copyKey);
      window.setTimeout(() => video.classList.remove("is-switching"), 80);
    }, 170);
  });
}

setupSelector("hookSelector", "hookVideo", "hookVideoLabel");

const balanceScale = document.getElementById("balanceScale");
const balanceRange = document.getElementById("balanceRange");
const balanceResult = document.getElementById("balanceResult");
let balanceResetFrame = 0;
let balanceIsDragging = false;

function updateBalance(value) {
  const progress = Number(value) / 100;
  const width = balanceScale.clientWidth;
  const isMobile = window.innerWidth <= 560;
  const viralWidth = balanceScale.querySelector(".balance-label--viral").offsetWidth;
  const conversionWidth = balanceScale.querySelector(".balance-label--conversion").offsetWidth;
  let viralShift = 0;
  let conversionShift = 0;
  let viralY = 0;
  let conversionY = 0;
  let viralRotate = 0;
  let conversionRotate = 0;

  if (progress > .5) {
    const amount = (progress - .5) * 2;
    const eased = amount * amount * (3 - 2 * amount);
    viralShift = eased * (isMobile ? width + 2 : width + viralWidth + conversionWidth + 70);
    viralY = Math.sin(amount * Math.PI) * 48;
    viralRotate = Math.sin(amount * Math.PI) * 7;
  } else if (progress < .5) {
    const amount = (.5 - progress) * 2;
    const eased = amount * amount * (3 - 2 * amount);
    conversionShift = -eased * (isMobile ? width + 2 : width + viralWidth + conversionWidth + 70);
    conversionY = Math.sin(amount * Math.PI) * 48;
    conversionRotate = -Math.sin(amount * Math.PI) * 7;
  }

  balanceScale.style.setProperty("--viral-shift", `${viralShift}px`);
  balanceScale.style.setProperty("--conversion-shift", `${conversionShift}px`);
  balanceScale.style.setProperty("--viral-y", `${viralY}px`);
  balanceScale.style.setProperty("--conversion-y", `${conversionY}px`);
  balanceScale.style.setProperty("--viral-rotate", `${viralRotate}deg`);
  balanceScale.style.setProperty("--conversion-rotate", `${conversionRotate}deg`);
}

function resetBalance() {
  if (!balanceIsDragging && Number(balanceRange.value) === 50) return;
  balanceIsDragging = false;
  balanceScale.classList.remove("is-dragging");
  balanceResult.classList.remove("is-visible");
  cancelAnimationFrame(balanceResetFrame);

  if (prefersReducedMotion.matches) {
    balanceRange.value = 50;
    updateBalance(50);
    return;
  }

  let position = Number(balanceRange.value);
  let velocity = 0;
  const settle = () => {
    velocity = (velocity + (50 - position) * .13) * .72;
    position += velocity;
    if (Math.abs(50 - position) < .05 && Math.abs(velocity) < .05) position = 50;
    balanceRange.value = position;
    updateBalance(position);
    if (position !== 50) balanceResetFrame = requestAnimationFrame(settle);
  };
  settle();
}

balanceRange.addEventListener("pointerdown", () => {
  balanceIsDragging = true;
  cancelAnimationFrame(balanceResetFrame);
  balanceScale.classList.add("is-dragging");
  balanceResult.classList.add("is-visible");
});
balanceRange.addEventListener("input", () => {
  balanceResult.classList.add("is-visible");
  updateBalance(balanceRange.value);
});
balanceRange.addEventListener("pointerup", resetBalance);
balanceRange.addEventListener("pointercancel", resetBalance);
balanceRange.addEventListener("change", resetBalance);
balanceRange.addEventListener("blur", resetBalance);
window.addEventListener("resize", () => updateBalance(balanceRange.value));
updateBalance(50);

const nokaSelector = document.getElementById("nokaSelector");
const nokaDeck = document.getElementById("nokaDeck");
const nokaCards = Array.from(nokaDeck.querySelectorAll(".noka-card"));

function activateNokaAngle(angle) {
  const selectorButtons = Array.from(nokaSelector.querySelectorAll("button[data-angle]"));
  const activeButton = selectorButtons.find((button) => button.dataset.angle === angle);
  if (!activeButton) return;
  selectorButtons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.getElementById("nokaAngleCopy").textContent = t(activeButton.dataset.copyKey);

  const activeIndex = nokaCards.findIndex((card) => card.dataset.angle === angle);
  nokaCards.forEach((card, index) => {
    card.classList.remove("is-active", "is-back-left", "is-back-right");
    if (index === activeIndex) card.classList.add("is-active");
    else if ((index - activeIndex + nokaCards.length) % nokaCards.length === 1) card.classList.add("is-back-right");
    else card.classList.add("is-back-left");
  });
}

nokaSelector.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-angle]");
  if (button) activateNokaAngle(button.dataset.angle);
});

nokaDeck.addEventListener("click", (event) => {
  const card = event.target.closest("button[data-angle]");
  if (card) activateNokaAngle(card.dataset.angle);
});

document.querySelectorAll(".video-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const video = document.getElementById(button.dataset.video);
    if (video.paused) {
      loadVideo(video);
      button.textContent = "Ⅱ";
      button.setAttribute("aria-label", "Pause video");
    } else {
      video.pause();
      button.textContent = "▶";
      button.setAttribute("aria-label", "Play video");
    }
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const rivrsSection = document.querySelector(".rivrs-section");
const columns = Array.from(document.querySelectorAll(".creative-column"));
const toolSection = document.querySelector(".tool-section");
const toolScreenshot = document.getElementById("toolScreenshot");
let currentWallProgress = 0;
let targetWallProgress = 0;

function updateScrollTargets() {
  if (prefersReducedMotion.matches || window.innerWidth <= 900) return;
  const rect = rivrsSection.getBoundingClientRect();
  targetWallProgress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
  const toolRect = toolSection.getBoundingClientRect();
  const toolProgress = Math.min(1, Math.max(0, (window.innerHeight - toolRect.top) / (toolRect.height + window.innerHeight)));
  toolScreenshot.style.setProperty("--tool-shift", `${-toolProgress * 28}%`);
}

function animateWall() {
  currentWallProgress += (targetWallProgress - currentWallProgress) * .075;
  columns.forEach((column, index) => {
    const direction = Number(column.dataset.direction);
    const distance = 145 + index * 18;
    column.style.transform = `translate3d(0, ${direction * (currentWallProgress - .5) * distance}px, 0)`;
  });
  requestAnimationFrame(animateWall);
}

window.addEventListener("scroll", updateScrollTargets, { passive: true });
window.addEventListener("resize", updateScrollTargets);
updateScrollTargets();
if (!prefersReducedMotion.matches) animateWall();
