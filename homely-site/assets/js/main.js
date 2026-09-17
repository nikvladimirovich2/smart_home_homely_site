/**
 * ============================================================
 *  HOMELY — MAIN.JS
 *  Логика: язык (EN/SR) без перезагрузки, тема, навигация,
 *  подстановка данных из config.js, рендер динамических блоков,
 *  FAQ-аккордеон, "наверх", SEO/OG/Schema.org, lazy loading.
 * ============================================================
 */
(function () {
  "use strict";

  const STORAGE_LANG = "homely_lang";
  const STORAGE_THEME = "homely_theme";

  const state = {
    lang: localStorage.getItem(STORAGE_LANG) || "en",
    theme: localStorage.getItem(STORAGE_THEME) || "dark"
  };

  /* ---------------------------------------------------------
     Утилиты
  --------------------------------------------------------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const t = (obj) => (obj && (obj[state.lang] || obj.en)) || "";

  function formatPrice(pkg) {
    return `${pkg.currency}${pkg.price.toLocaleString("en-US")}`;
  }

  /* ---------------------------------------------------------
     ТЕМА
  --------------------------------------------------------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    $$("[data-theme-icon]").forEach((el) => {
      el.innerHTML = icon(state.theme === "dark" ? "sun" : "moon");
    });
  }
  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_THEME, state.theme);
    applyTheme();
  }

  /* ---------------------------------------------------------
     ЯЗЫК
  --------------------------------------------------------- */
  function applyLanguage() {
    document.documentElement.setAttribute("lang", state.lang);

    // Статичные UI-строки: data-i18n="ui.key"
    $$("[data-i18n]").forEach((el) => {
      const path = el.getAttribute("data-i18n").split(".");
      const isCompany = path[0] === "company";
      let val = path[0] === "company" ? CONFIG.company : UI_STRINGS;
      const rest = isCompany ? path.slice(1) : path;
      rest.forEach((p) => (val = val ? val[p] : null));
      //path.forEach((p) => (val = val ? val[p] : null));
      if (val) el.textContent = t(val);
    });

    // Переключатель языка — активная кнопка
    $$(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });

    applySEO();
    renderDynamicSections(); // перерисовываем контент на текущем языке
  }

  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    applyLanguage();
  }

  /* ---------------------------------------------------------
     SEO / OpenGraph / Schema.org — подставляем из CONFIG
  --------------------------------------------------------- */
  function applySEO() {
    const page = document.body.dataset.page || "index";
    const seo = CONFIG.seo.pages[page];
    if (!seo) return;

    const title = t(seo.title);
    const desc = t(seo.description);

    document.title = title;
    setMeta("description", desc);
    setMeta("keywords", t(CONFIG.seo.defaultKeywords));
    setMeta("og:title", title, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:url", CONFIG.seo.siteUrl + "/" + (page === "index" ? "" : page + ".html"), "property");
    setMeta("og:image", CONFIG.seo.siteUrl + "/" + CONFIG.seo.ogImage, "property");
    setMeta("og:locale", state.lang === "sr" ? "sr_RS" : "en_US", "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", desc);

    injectSchema(page, title, desc);
  }

  function setMeta(name, content, attr) {
    attr = attr || "name";
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function injectSchema(page, title, desc) {
    let script = document.getElementById("schema-org");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "schema-org";
      document.head.appendChild(script);
    }
    const base = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: CONFIG.company.name,
      description: desc,
      telephone: CONFIG.contact.phone,
      email: CONFIG.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: t(CONFIG.contact.addressFull),
        addressCountry: "RS"
      },
      url: CONFIG.seo.siteUrl,
      sameAs: Object.values(CONFIG.social)
    };
    script.textContent = JSON.stringify(base, null, 2);
  }

  /* ---------------------------------------------------------
     НАВИГАЦИЯ, ПОДВАЛ, КОНТАКТЫ — подстановка контактов
  --------------------------------------------------------- */
  function fillGlobalPlaceholders() {
    $$("[data-brand-name]").forEach((el) => (el.textContent = CONFIG.company.name));
    $$("[data-contact-phone]").forEach((el) => {
      el.textContent = CONFIG.contact.phoneDisplay;
      if (el.tagName === "A") el.href = "tel:" + CONFIG.contact.phone.replace(/\s+/g, "");
    });
    $$("[data-contact-email]").forEach((el) => {
      el.textContent = CONFIG.contact.email;
      if (el.tagName === "A") el.href = "mailto:" + CONFIG.contact.email;
    });
    $$("[data-contact-hours]").forEach((el) => (el.textContent = t(CONFIG.contact.workingHours)));
    $$("[data-contact-address]").forEach((el) => (el.textContent = t(CONFIG.contact.addressFull)));
    $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

    // Соцсети
    const socialTargets = $$("[data-social]");
    socialTargets.forEach((el) => {
      const key = el.dataset.social;
      if (CONFIG.social[key]) el.href = CONFIG.social[key];
    });

    // WhatsApp / Viber быстрые ссылки
    $$("[data-whatsapp-link]").forEach((el) => (el.href = CONFIG.social.whatsapp));

    // Карта
    const mapWrap = $("#map-embed");
    if (mapWrap) {
      if (CONFIG.contact.mapEmbedSrc) {
        mapWrap.innerHTML = `<iframe src="${CONFIG.contact.mapEmbedSrc}" width="100%" height="260" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      } else {
        mapWrap.innerHTML = `<div class="map-placeholder">${icon("mapPin")}<br>Map embed placeholder — add CONFIG.contact.mapEmbedSrc</div>`;
      }
    }
  }

  /* ---------------------------------------------------------
     ДИНАМИЧЕСКИЙ РЕНДЕР СЕКЦИЙ ПО ДАННЫМ CONFIG
  --------------------------------------------------------- */
  function renderDynamicSections() {
    renderServices();
    renderPackages();
    renderPriceList();
    renderAutomations();
    renderBrands();
    renderTestimonials();
    renderFAQ();
    renderPortfolio();
    renderHeroFlow();
    initFAQToggle();
    initScrollReveal();
  }

  function renderServices() {
    const wrap = $("[data-render='services']");
    if (!wrap) return;
    wrap.innerHTML = CONFIG.services
      .map(
        (s) => `
      <div class="service-card glass reveal">
        <div class="service-icon">${icon(s.icon)}</div>
        <h3>${t(s.title)}</h3>
        <p>${t(s.desc)}</p>
      </div>`
      )
      .join("");
  }

  function renderPackages() {
    const wrap = $("[data-render='packages']");
    if (!wrap) return;
    wrap.innerHTML = CONFIG.packages
      .map(
        (p) => `
      <div class="package-card glass reveal ${p.highlighted ? "highlighted" : ""}">
        ${p.highlighted ? `<span class="badge-popular">${t(UI_STRINGS.pricingHome.popular)}</span>` : ""}
        <div class="package-name">${t(p.name)}</div>
        <p class="package-desc">${t(p.description)}</p>
        <div class="package-price">
          <span class="amount">${p.currency}${p.price}</span>
          <span class="period">/ ${t(p.period)}</span>
        </div>
        <ul class="package-features">
          ${t(p.features)
            .map((f) => `<li>${icon("check")}<span>${f}</span></li>`)
            .join("")}
        </ul>
        <a href="contacts.html" class="btn ${p.highlighted ? "btn-primary" : "btn-ghost"} btn-block">${t(UI_STRINGS.pricingHome.cta)}</a>
      </div>`
      )
      .join("");
  }

  function renderPriceList() {
    const wrap = $("[data-render='price-list']");
    if (!wrap) return;
    wrap.innerHTML = CONFIG.priceList
      .map(
        (cat) => `
      <div class="price-category reveal">
        <h3>${t(cat.category)}</h3>
        ${cat.items
          .map(
            (i) => `
          <div class="price-row">
            <span class="name">${t(i.name)}</span>
            <span class="value mono">${i.currency}${i.price}</span>
          </div>`
          )
          .join("")}
      </div>`
      )
      .join("");
  }

  function renderAutomations() {
    const wrap = $("[data-render='automations']");
    if (!wrap) return;
    const limit = wrap.dataset.limit ? parseInt(wrap.dataset.limit, 10) : CONFIG.automations.length;
    wrap.innerHTML = CONFIG.automations
      .slice(0, limit)
      .map((a) => {
        const nodes = a.steps
          .map(
            (s, idx) => `
          ${idx > 0 ? `<div class="diagram-arrow">${icon("arrowRight")}</div>` : ""}
          <div class="diagram-node">
            <div class="node-circle">${icon(s.icon)}</div>
            <span>${t(s.label)}</span>
          </div>`
          )
          .join("");
        return `
        <div class="automation-block glass reveal">
          <div class="automation-head">
            <div>
              <h3>${t(a.title)}</h3>
              <p>${t(a.description)}</p>
            </div>
          </div>
          <div class="automation-diagram">${nodes}</div>
        </div>`;
      })
      .join("");
  }

  function renderHeroFlow() {
    const wrap = $("[data-render='hero-flow']");
    if (!wrap) return;
    const demo = CONFIG.automations[0];
    wrap.innerHTML = demo.steps
      .map(
        (s, idx) => `
      ${idx > 0 ? '<div class="flow-connector"></div>' : ""}
      <div class="flow-node ${idx === 0 ? "active" : ""}">
        <div class="node-icon">${icon(s.icon)}</div>
        <div>
          <div class="node-label">${t(s.label)}</div>
          <div class="node-sub">${idx === 0 ? t(UI_STRINGS.hero.flowLive) : ""}</div>
        </div>
      </div>`
      )
      .join("");
  }

  function renderBrands() {
    const wraps = $$("[data-render='brands']");
    if (!wraps.length) return;
    wraps.forEach((wrap) => {
      const isStrip = wrap.classList.contains("brand-track");
      if (isStrip) {
        const list = CONFIG.brands.concat(CONFIG.brands); // дублируем для бесшовной прокрутки
        wrap.innerHTML = list.map((b) => `<span>${b.name}</span>`).join("");
      } else {
        wrap.innerHTML = CONFIG.brands
          .map(
            (b) => `
          <div class="glass reveal" style="padding:20px; text-align:center;">
            <div style="font-family:var(--font-display); font-weight:600; margin-bottom:4px;">${b.name}</div>
            <div style="font-size:.78rem; color:var(--text-faint);">${t(b.category)}</div>
          </div>`
          )
          .join("");
      }
    });
  }

  function renderTestimonials() {
    const wrap = $("[data-render='testimonials']");
    if (!wrap) return;
    wrap.innerHTML = CONFIG.testimonials
      .map(
        (r) => `
      <div class="testimonial-card glass reveal">
        <div class="stars">${Array.from({ length: r.rating }).map(() => icon("star")).join("")}</div>
        <p class="testimonial-text">"${t(r.text)}"</p>
        <div class="testimonial-who">
          <b>${r.name}</b>
          <span>${t(r.role)}</span>
        </div>
      </div>`
      )
      .join("");
  }

  function renderFAQ() {
    const wrap = $("[data-render='faq']");
    if (!wrap) return;
    wrap.innerHTML = CONFIG.faq
      .map(
        (f, idx) => `
      <div class="faq-item reveal" data-idx="${idx}">
        <div class="faq-q"><span>${t(f.q)}</span>${icon("plus")}</div>
        <div class="faq-a"><div class="faq-a-inner">${t(f.a)}</div></div>
      </div>`
      )
      .join("");
  }

  function renderPortfolio() {
    const wrap = $("[data-render='portfolio']");
    if (!wrap) return;
    wrap.innerHTML = CONFIG.portfolio
      .map(
        (p) => `
      <div class="portfolio-card glass reveal">
        <div class="portfolio-img"><img src="${p.img}" alt="${t(p.title)}" loading="lazy" width="480" height="360"></div>
        <div class="portfolio-body">
          <span class="portfolio-tag">${t(p.tag)}</span>
          <h3>${t(p.title)}</h3>
        </div>
      </div>`
      )
      .join("");
  }

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
     SCROLL REVEAL
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
     NAVBAR: активная ссылка, скролл, мобильное меню
  --------------------------------------------------------- */
  function initNavbar() {
    const nav = $(".navbar");
    if (nav) {
      window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 12);
      });
    }
    const page = document.body.dataset.page || "index";
    $$(".nav-links a").forEach((a) => {
      a.classList.toggle("active", a.dataset.page === page);
    });

    const toggle = $(".nav-toggle");
    const links = $(".nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        links.classList.toggle("open");
      });
      $$(".nav-links a").forEach((a) =>
        a.addEventListener("click", () => {
          toggle.classList.remove("open");
          links.classList.remove("open");
        })
      );
    }
  }

  /* ---------------------------------------------------------
     BACK TO TOP
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
     ФОРМА КОНТАКТОВ (демо, без бэкенда)
  --------------------------------------------------------- */
  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = $("#form-success");
      if (note) {
        note.textContent = t(UI_STRINGS.contacts.formSuccess);
        note.style.display = "block";
      }
      form.reset();
    });
  }

  /* ---------------------------------------------------------
     ИНИЦИАЛИЗАЦИЯ
  --------------------------------------------------------- */
  function initStaticIcons() {
    $$("[data-icon]").forEach((el) => {
      el.innerHTML = icon(el.dataset.icon);
    });
  }

  function initLangSwitch() {
    $$(".lang-switch button").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
  }

  function initThemeToggle() {
    $$("[data-theme-toggle]").forEach((btn) => btn.addEventListener("click", toggleTheme));
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    initStaticIcons();
    fillGlobalPlaceholders();
    initNavbar();
    initLangSwitch();
    initThemeToggle();
    initBackToTop();
    initContactForm();
    applyLanguage(); // тянет за собой renderDynamicSections()
  });
})();
