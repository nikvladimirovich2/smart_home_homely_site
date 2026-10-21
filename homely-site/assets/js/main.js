/**
 * ============================================================
 *  HOMELY — MAIN.JS
 *  Весь текст страниц уже есть в HTML (его генерирует
 *  tools/build-site.js). Этот скрипт отвечает только за
 *  интерактив: тема, мобильное меню, FAQ-аккордеон,
 *  появление блоков при прокрутке, "наверх", форма (mailto:).
 * ============================================================
 */
(function () {
  "use strict";

  const STORAGE_THEME = "homely_theme";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------------------------------------------------
     ТЕМА (начальное значение ставит inline-скрипт в <head>)
  --------------------------------------------------------- */
  function initThemeToggle() {
    const root = document.documentElement;
    $$("[data-theme-toggle]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        try {
          localStorage.setItem(STORAGE_THEME, next);
        } catch (e) {
          /* приватный режим — тема просто не запомнится */
        }
      })
    );
  }

  /* ---------------------------------------------------------
     NAVBAR: тень при прокрутке, мобильное меню
  --------------------------------------------------------- */
  function initNavbar() {
    const nav = $(".navbar");
    if (nav) {
      window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 12);
      });
    }

    const toggle = $(".nav-toggle");
    const links = $(".nav-links");
    if (toggle && links) {
      toggle.setAttribute("aria-expanded", "false");
      const setOpen = (open) => {
        toggle.classList.toggle("open", open);
        links.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
      };
      toggle.addEventListener("click", () => setOpen(!links.classList.contains("open")));
      $$(".nav-links a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    }
  }

  /* ---------------------------------------------------------
     FAQ-АККОРДЕОН
  --------------------------------------------------------- */
  function initFAQToggle() {
    $$(".faq-item").forEach((item) => {
      const q = $(".faq-q", item);
      const a = $(".faq-a", item);
      q.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        $$(".faq-item.open").forEach((other) => {
          if (other !== item) {
            other.classList.remove("open");
            $(".faq-a", other).style.maxHeight = null;
          }
        });
        item.classList.toggle("open", !isOpen);
        a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
      });
    });
  }

  /* ---------------------------------------------------------
     ПОЯВЛЕНИЕ БЛОКОВ ПРИ ПРОКРУТКЕ
  --------------------------------------------------------- */
  function initScrollReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------
     НАВЕРХ
  --------------------------------------------------------- */
  function initBackToTop() {
    const btn = $(".back-to-top");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 500);
    });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------------------------------------------------
     ФОРМА КОНТАКТОВ — открывает почтовый клиент посетителя
     с предзаполненным письмом (mailto:), без бэкенда/сервиса.
     Адрес и текст подтверждения берутся из data-атрибутов формы.
  --------------------------------------------------------- */
  function buildMailtoLink(to, data) {
    const subject = `New inquiry from ${data.name || "website"} — Homely`;
    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.property ? `Property type: ${data.property}` : null,
      "",
      "Message:",
      data.message
    ].filter((l) => l !== null);
    const body = lines.join("\n");
    return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = {
        name: $("#f-name", form).value.trim(),
        email: $("#f-email", form).value.trim(),
        property: $("#f-property", form).value.trim(),
        message: $("#f-message", form).value.trim()
      };
      window.location.href = buildMailtoLink(form.dataset.email, data);
      const note = $("#form-success");
      if (note) {
        note.textContent = form.dataset.success || "";
        note.style.display = "block";
      }
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initNavbar();
    initFAQToggle();
    initScrollReveal();
    initBackToTop();
    initContactForm();
  });
})();
