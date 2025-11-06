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
