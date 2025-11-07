function setLanguage(lang) {
  localStorage.setItem("siteLang", lang);

  // Loop semua element yg punya data-key
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

window.addEventListener("load", () => {
  const saved = localStorage.getItem("siteLang") || "id";
  document.getElementById("languageSwitcher").value = saved;
  setLanguage(saved);
});

document.getElementById("languageSwitcher").addEventListener("change", e => {
  setLanguage(e.target.value);
});

document.getElementById("scrollTopBtn").addEventListener("click", function(e) {
  // biar link default gak nge-reload
  e.preventDefault();

  let start = window.scrollY;
  let startTime = null;

  function easeOutBounce(t) {
    const n1 = 7.5625, d1 = 2.75;
    if (t < 1 / d1) return n1 * t * t;
    else if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
    else if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
    else return n1 * (t -= 2.625 / d1) * t + 0.984375;
  }

  function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / 800, 1);
    const ease = easeOutBounce(progress);

    window.scrollTo(0, start - start * ease);

    if (progress < 1) requestAnimationFrame(animateScroll);
  }

  requestAnimationFrame(animateScroll);
});
