#!/usr/bin/env node
/**
 * ============================================================
 *  HOMELY — ГЕНЕРАТОР СТАТИЧЕСКИХ СТРАНИЦ
 * ============================================================
 *  Читает данные из homely-site/assets/js/:
 *    config.js, i18n-strings.js, icons.js, pages-content.js
 *  и пишет готовые HTML-страницы, в которых весь текст уже
 *  есть в разметке (Google видит его без выполнения JS):
 *
 *    homely-site/*.html             — сербская версия (основная)
 *    homely-site/services/*.html    — страницы услуг (sr)
 *    homely-site/en/**              — английская версия
 *    homely-site/sitemap.xml, robots.txt
 *
 *  Запуск (нужен только Node.js, без npm-пакетов):
 *    node tools/build-site.js
 *
 *  Папки en/ и services/ генерируются целиком и очищаются
 *  при каждой сборке — не кладите туда файлы вручную.
 * ============================================================
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE_DIR = path.resolve(__dirname, "..", "homely-site");
const JS_DIR = path.join(SITE_DIR, "assets", "js");

/* ---------------------------------------------------------
   Загрузка данных (файлы написаны как браузерные скрипты
   с top-level const, поэтому выполняем их в одном контексте)
--------------------------------------------------------- */
function loadData() {
  const files = ["config.js", "i18n-strings.js", "icons.js", "pages-content.js"];
  const code =
    files.map((f) => fs.readFileSync(path.join(JS_DIR, f), "utf8")).join("\n;\n") +
    "\n;globalThis.__data = { CONFIG, UI_STRINGS, icon, PAGES_CONTENT };";
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: "site-data.js" });
  return ctx.__data;
}

const { CONFIG, UI_STRINGS: UI, icon, PAGES_CONTENT: PC } = loadData();

const LANGS = ["sr", "en"];
const DEFAULT_LANG = "sr";
const SITE_URL = CONFIG.seo.siteUrl.replace(/\/+$/, "");
const BRAND = CONFIG.company.name;
const YEAR = new Date().getFullYear();

const PRICE_ITEMS = {};
CONFIG.priceList.forEach((cat) => cat.items.forEach((item) => {
  if (item.id) PRICE_ITEMS[item.id] = item;
}));
const AUTOMATIONS = Object.fromEntries(CONFIG.automations.map((a) => [a.id, a]));

/* ---------------------------------------------------------
   Утилиты
--------------------------------------------------------- */
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** "35–60" + "€" → "35–60 €" (sr) / "€35–60" (en) */
function money(currency, amount, lang) {
  return lang === "sr" ? `${amount} ${currency}` : `${currency}${amount}`;
}

/** Подстановка {{price:id}} и {{package:id}} из config.js */
function expand(str, lang) {
  return String(str).replace(/\{\{(price|package):([\w-]+)\}\}/g, (m, kind, id) => {
    if (kind === "price") {
      const item = PRICE_ITEMS[id];
      if (!item) throw new Error(`Неизвестный id цены в тексте: ${m}`);
      return money(item.currency, item.price, lang);
    }
    const pkg = CONFIG.packages.find((p) => p.id === id);
    if (!pkg) throw new Error(`Неизвестный id пакета в тексте: ${m}`);
    return money(pkg.currency, pkg.price, lang);
  });
}

/** Адрес страницы без "index.html": "en/index.html" → "en/" */
const cleanPath = (p) => p.replace(/(^|\/)index\.html$/, "$1");
const absUrl = (p) => `${SITE_URL}/${cleanPath(p)}`;
const langPrefix = (lang) => (lang === DEFAULT_LANG ? "" : `${lang}/`);

/** Контекст рендера одной страницы на одном языке */
function makeCtx(lang, outPath, { absolute = false } = {}) {
  const depth = outPath.split("/").length - 1;
  // 404 отдаётся на любом URL, поэтому там пути абсолютные
  const base = absolute ? "/" : "../".repeat(depth);
  const t = (obj) => {
    if (obj == null) return "";
    if (typeof obj === "string" || Array.isArray(obj)) return obj;
    return obj[lang] != null ? obj[lang] : obj.en;
  };
  return {
    lang,
    t,
    /** Текст из {en, sr}, с подстановкой цен и экранированием */
    tx: (obj) => esc(expand(t(obj), lang)),
    /** Ссылка на другую страницу сайта (путь от корня сайта) */
    link: (target) => {
      const href = base + cleanPath(target);
      return href === "" ? "./" : href;
    },
    asset: (p) => base + p
  };
}

/* ---------------------------------------------------------
   Реестр страниц
--------------------------------------------------------- */
const staticPage = (key, file, extra) => ({
  key,
  navKey: key,
  paths: Object.fromEntries(LANGS.map((l) => [l, langPrefix(l) + file])),
  seo: CONFIG.seo.pages[key],
  ...extra
});

const PAGES = {
  index: staticPage("index", "index.html", { render: renderHome }),
  services: staticPage("services", "services.html", { render: renderServicesPage }),
  pricing: staticPage("pricing", "pricing.html", { render: renderPricing }),
  automations: staticPage("automations", "automations.html", { render: renderAutomationsPage }),
  faq: staticPage("faq", "faq.html", { render: renderFaq }),
  contacts: staticPage("contacts", "contacts.html", { render: renderContacts }),
  region: {
    key: "region",
    navKey: null,
    paths: Object.fromEntries(LANGS.map((l) => [l, `${langPrefix(l)}${PC.region.slug[l]}.html`])),
    seo: { title: PC.region.title, description: PC.region.description },
    render: renderRegion
  }
};

const SERVICE_PAGES = CONFIG.services.map((s) => {
  const content = PC.services[s.id];
  if (!content) throw new Error(`Нет текста страницы для услуги "${s.id}" в pages-content.js`);
  return {
    key: `service-${s.id}`,
    navKey: "services",
    service: s,
    content,
    paths: Object.fromEntries(LANGS.map((l) => [l, `${langPrefix(l)}services/${s.slug[l]}.html`])),
    seo: { title: content.title, description: content.description },
    render: renderServiceDetail
  };
});

const PAGE_404 = {
  key: "404",
  navKey: null,
  paths: { sr: "404.html" },
  langLinks: { sr: "index.html", en: "en/index.html" },
  seo: {
    title: { sr: `404 — ${BRAND}`, en: `404 — ${BRAND}` },
    description: { sr: UI.error404.lead.sr, en: UI.error404.lead.en }
  },
  noindex: true,
  render: render404
};

const servicePageFor = (id) => SERVICE_PAGES.find((p) => p.service.id === id);

/* ---------------------------------------------------------
   Общие блоки
--------------------------------------------------------- */
const NAV = [
  { key: "index", label: UI.nav.home },
  { key: "services", label: UI.nav.services },
  { key: "pricing", label: UI.nav.pricing },
  { key: "automations", label: UI.nav.automations },
  { key: "faq", label: UI.nav.faq },
  { key: "contacts", label: UI.nav.contacts }
];

const SOCIAL_LABELS = { instagram: "Instagram", facebook: "Facebook", telegram: "Telegram", youtube: "YouTube" };

const pageLink = (ctx, page) => ctx.link(page.paths[ctx.lang]);

/** Ссылка на соцсеть; если адреса нет — серая неактивная кнопка */
function socialLink(ctx, key, cls, inner, { withLabel = true } = {}) {
  const url = CONFIG.social[key];
  const aria = withLabel ? ` aria-label="${SOCIAL_LABELS[key]}"` : "";
  if (!url) {
    return `<a class="${cls} disabled" aria-disabled="true" title="${ctx.tx(UI.social.soon)}"${aria}>${inner}</a>`;
  }
  return `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener"${aria}>${inner}</a>`;
}

const socialIconBtn = (ctx, key, extraCls = "") =>
  socialLink(ctx, key, `icon-btn ${extraCls}`.trim(), icon(key));

const socialTextBtn = (ctx, key, label) =>
  socialLink(ctx, key, "btn btn-ghost", `<span class="btn-ico">${icon(key)}</span><span>${label}</span>`, { withLabel: false });

function header(ctx, page) {
  const navLinks = NAV.map((n) => {
    const active = page.navKey === n.key;
    return `<a href="${pageLink(ctx, PAGES[n.key])}"${active ? ' class="active" aria-current="page"' : ""}>${ctx.tx(n.label)}</a>`;
  }).join("\n      ");

  const langTargets = page.langLinks || page.paths;
  const langSwitch = LANGS.filter((l) => langTargets[l])
    .map((l) => {
      const current = l === ctx.lang;
      return `<a href="${ctx.link(langTargets[l])}" hreflang="${l}" lang="${l}"${current ? ' class="active" aria-current="true"' : ""}>${l.toUpperCase()}</a>`;
    })
    .join("");

  const contacts = pageLink(ctx, PAGES.contacts);
  return `<header class="navbar">
  <div class="container nav-inner">
    <a href="${pageLink(ctx, PAGES.index)}" class="brand">
      <span class="brand-mark">${icon("house")}</span>
      <span>${esc(BRAND)}</span>
    </a>
    <nav class="nav-links">
      ${navLinks}
      <a href="${contacts}" class="nav-cta-mobile">${ctx.tx(UI.nav.ctaBtn)}</a>
    </nav>
    <div class="nav-actions">
      <div class="lang-switch" role="group" aria-label="${ctx.tx(UI.common.language)}">${langSwitch}</div>
      ${socialIconBtn(ctx, "instagram", "nav-social")}
      ${socialIconBtn(ctx, "telegram", "nav-social")}
      <button class="icon-btn" data-theme-toggle type="button" aria-label="${ctx.tx(UI.common.themeToggle)}"><span class="theme-ico theme-ico-sun">${icon("sun")}</span><span class="theme-ico theme-ico-moon">${icon("moon")}</span></button>
      <a href="${contacts}" class="btn btn-primary btn-sm">${ctx.tx(UI.nav.ctaBtn)}</a>
      <button class="icon-btn nav-toggle" type="button" aria-label="${ctx.tx(UI.common.menu)}"><span class="hamburger"><span></span><span></span><span></span></span></button>
    </div>
  </div>
</header>`;
}

function footer(ctx) {
  const serviceLinks = SERVICE_PAGES.map(
    (p) => `<li><a href="${pageLink(ctx, p)}">${ctx.tx(p.service.title)}</a></li>`
  ).join("\n          ");
  const email = esc(CONFIG.contact.email);
  return `<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${pageLink(ctx, PAGES.index)}" class="brand"><span class="brand-mark">${icon("house")}</span><span>${esc(BRAND)}</span></a>
        <p>${ctx.tx(UI.footer.about)}</p>
        <div class="social-row" style="margin-top:18px;">
          ${socialIconBtn(ctx, "instagram")}
          ${socialIconBtn(ctx, "facebook")}
          ${socialIconBtn(ctx, "telegram")}
        </div>
      </div>
      <div class="footer-col">
        <h4>${ctx.tx(UI.nav.services)}</h4>
        <ul>
          ${serviceLinks}
        </ul>
      </div>
      <div class="footer-col">
        <h4>${ctx.tx(UI.footer.company)}</h4>
        <ul>
          <li><a href="${pageLink(ctx, PAGES.pricing)}">${ctx.tx(UI.nav.pricing)}</a></li>
          <li><a href="${pageLink(ctx, PAGES.automations)}">${ctx.tx(UI.nav.automations)}</a></li>
          <li><a href="${pageLink(ctx, PAGES.faq)}">${ctx.tx(UI.nav.faq)}</a></li>
          <li><a href="${pageLink(ctx, PAGES.region)}">${ctx.tx(UI.region.footerLink)}</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>${ctx.tx(UI.footer.getInTouch)}</h4>
        <ul>
          <li><a href="mailto:${email}">${email}</a></li>
          <li><span>${ctx.tx(CONFIG.contact.addressFull)}</span></li>
          <li><span>${ctx.tx(CONFIG.contact.workingHours)}</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${YEAR} ${esc(BRAND)}. ${ctx.tx(UI.footer.rights)}</span>
      <span class="mono" style="color:var(--text-faint);">Built with HTML5 · CSS3 · Vanilla JS</span>
    </div>
  </div>
</footer>`;
}

/** Схема Schema.org: компания + (для страниц услуг) Service и хлебные крошки */
function schemaFor(ctx, page, title, description) {
  const businessId = `${SITE_URL}/#business`;
  const graph = [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": businessId,
      name: BRAND,
      url: `${SITE_URL}/`,
      email: CONFIG.contact.email,
      description: ctx.t(CONFIG.company.heroSubtitle),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Niš",
        addressCountry: "RS"
      },
      areaServed: [
        { "@type": "City", name: "Niš" },
        { "@type": "Country", name: "Serbia" }
      ],
      sameAs: Object.values(CONFIG.social).filter(Boolean)
    }
  ];
  if (!page.noindex) {
    graph.push({
      "@type": "WebPage",
      "@id": `${absUrl(page.paths[ctx.lang])}#webpage`,
      url: absUrl(page.paths[ctx.lang]),
      name: title,
      description,
      inLanguage: ctx.lang,
      about: { "@id": businessId }
    });
  }
  if (page.service) {
    graph.push({
      "@type": "Service",
      name: ctx.t(page.content.h1),
      description,
      url: absUrl(page.paths[ctx.lang]),
      provider: { "@id": businessId },
      areaServed: [
        { "@type": "City", name: "Niš" },
        { "@type": "Country", name: "Serbia" }
      ]
    });
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ctx.t(UI.nav.home), item: absUrl(PAGES.index.paths[ctx.lang]) },
        { "@type": "ListItem", position: 2, name: ctx.t(UI.nav.services), item: absUrl(PAGES.services.paths[ctx.lang]) },
        { "@type": "ListItem", position: 3, name: ctx.t(page.service.title), item: absUrl(page.paths[ctx.lang]) }
      ]
    });
  }
  // "<" экранируем, чтобы текст не мог закрыть тег <script>
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2).replace(/</g, "\\u003c");
}

function layout(ctx, page, bodyHtml) {
  const { lang } = ctx;
  const title = ctx.t(page.seo.title);
  const description = expand(ctx.t(page.seo.description), lang);
  const ogImage = `${SITE_URL}/${CONFIG.seo.ogImage}`;
  const verification = CONFIG.seo.googleSiteVerification;

  let seoLinks = "";
  if (!page.noindex) {
    const alternates = LANGS.filter((l) => page.paths[l])
      .map((l) => `<link rel="alternate" hreflang="${l}" href="${absUrl(page.paths[l])}">`)
      .join("\n");
    seoLinks = `<link rel="canonical" href="${absUrl(page.paths[lang])}">
${alternates}
<link rel="alternate" hreflang="x-default" href="${absUrl(page.paths[DEFAULT_LANG])}">
<meta property="og:url" content="${absUrl(page.paths[lang])}">`;
  }

  return `<!DOCTYPE html>
<html lang="${lang === "sr" ? "sr-Latn" : "en"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow"}">
${verification ? `<meta name="google-site-verification" content="${esc(verification)}">\n` : ""}${seoLinks}
<meta name="theme-color" content="#0A0D12">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(BRAND)}">
<meta property="og:locale" content="${lang === "sr" ? "sr_RS" : "en_US"}">
<meta property="og:locale:alternate" content="${lang === "sr" ? "en_US" : "sr_RS"}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${esc(ogImage)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/svg+xml" href="${ctx.asset("assets/icons/favicon.svg")}">
<link rel="apple-touch-icon" href="${ctx.asset("assets/icons/favicon.svg")}">
<link rel="stylesheet" href="${ctx.asset("assets/css/style.css")}">
<script>(function(d){var r=d.documentElement,t="dark";r.classList.add("js");try{t=localStorage.getItem("homely_theme")||t}catch(e){}r.setAttribute("data-theme",t)})(document);</script>
<script type="application/ld+json">
${schemaFor(ctx, page, title, description)}
</script>
</head>
<body data-page="${page.key}">

<a class="skip-link" href="#main" style="position:absolute;left:-999px;">${ctx.tx(UI.common.skipToContent)}</a>

${header(ctx, page)}

<main id="main">
${bodyHtml}
</main>

${footer(ctx)}

<button class="back-to-top" type="button" aria-label="${ctx.tx(UI.common.backToTop)}">${icon("arrowUp")}</button>

<script src="${ctx.asset("assets/js/main.js")}" defer></script>
</body>
</html>
`;
}

/* ---------------------------------------------------------
   Секции
--------------------------------------------------------- */
function serviceCards(ctx) {
  return SERVICE_PAGES.map(
    (p) => `
      <a class="service-card glass reveal" href="${pageLink(ctx, p)}">
        <div class="service-icon">${icon(p.service.icon)}</div>
        <h3>${ctx.tx(p.service.title)}</h3>
        <p>${ctx.tx(p.service.desc)}</p>
        <span class="more">${ctx.tx(UI.common.learnMore)} ${icon("arrowRight")}</span>
      </a>`
  ).join("");
}

function packageCards(ctx) {
  const contacts = pageLink(ctx, PAGES.contacts);
  return CONFIG.packages.map(
    (p) => `
      <div class="package-card glass reveal${p.highlighted ? " highlighted" : ""}">
        ${p.highlighted ? `<span class="badge-popular">${ctx.tx(UI.pricingHome.popular)}</span>` : ""}
        <div class="package-name">${ctx.tx(p.name)}</div>
        <p class="package-desc">${ctx.tx(p.description)}</p>
        <div class="package-price">
          <span class="from">${ctx.tx(UI.pricingHome.from)}</span>
          <span class="amount">${esc(money(p.currency, p.price, ctx.lang))}</span>
          <span class="period">/ ${ctx.tx(p.period)}</span>
        </div>
        <ul class="package-features">
          ${ctx.t(p.features).map((f) => `<li>${icon("check")}<span>${esc(f)}</span></li>`).join("\n          ")}
        </ul>
        <a href="${contacts}" class="btn ${p.highlighted ? "btn-primary" : "btn-ghost"} btn-block">${ctx.tx(UI.pricingHome.cta)}</a>
      </div>`
  ).join("");
}

const priceRow = (ctx, item) => `
          <div class="price-row">
            <span class="name">${ctx.tx(item.name)}</span>
            <span class="value mono">${esc(money(item.currency, item.price, ctx.lang))}</span>
          </div>`;

function priceList(ctx) {
  return CONFIG.priceList.map(
    (cat) => `
      <div class="price-category reveal">
        <h3>${ctx.tx(cat.category)}</h3>${cat.items.map((i) => priceRow(ctx, i)).join("")}
      </div>`
  ).join("");
}

function automationBlocks(ctx, list) {
  return list.map((a) => {
    const nodes = a.steps.map(
      (s, idx) => `${idx > 0 ? `<div class="diagram-arrow">${icon("arrowRight")}</div>` : ""}
            <div class="diagram-node">
              <div class="node-circle">${icon(s.icon)}</div>
              <span>${ctx.tx(s.label)}</span>
            </div>`
    ).join("\n            ");
    return `
      <div class="automation-block glass reveal">
        <div class="automation-head">
          <div>
            <h3>${ctx.tx(a.title)}</h3>
            <p>${ctx.tx(a.description)}</p>
          </div>
        </div>
        <div class="automation-diagram">
            ${nodes}
        </div>
      </div>`;
  }).join("");
}

function faqItems(ctx, list) {
  return list.map(
    (f) => `
      <div class="faq-item reveal">
        <div class="faq-q"><span>${ctx.tx(f.q)}</span>${icon("plus")}</div>
        <div class="faq-a"><div class="faq-a-inner">${ctx.tx(f.a)}</div></div>
      </div>`
  ).join("");
}

function pageHero(ctx, { eyebrow, title, lead, before = "", after = "" }) {
  return `
  <section class="page-hero container">
    ${before}<div class="eyebrow">${eyebrow}</div>
    <h1>${title}</h1>
    <p>${lead}</p>${after}
  </section>`;
}

/** Блок призыва. secondary: "email" | "pricing" | null */
function ctaBand(ctx, secondary) {
  let second = "";
  if (secondary === "email") {
    second = `<a href="mailto:${esc(CONFIG.contact.email)}" class="btn btn-ghost">${ctx.tx(UI.ctaBand.ctaSecondary)}</a>`;
  } else if (secondary === "pricing") {
    second = `<a href="${pageLink(ctx, PAGES.pricing)}" class="btn btn-ghost">${ctx.tx(UI.nav.pricing)}</a>`;
  }
  const telegram = CONFIG.social.telegram
    ? `<a href="${esc(CONFIG.social.telegram)}" target="_blank" rel="noopener" class="btn btn-ghost">${ctx.tx(UI.ctaBand.ctaTelegram)}</a>`
    : "";
  return `
  <section class="container section-sm">
    <div class="cta-band reveal">
      <h2>${ctx.tx(UI.ctaBand.title)}</h2>
      <p>${ctx.tx(UI.ctaBand.lead)}</p>
      <div class="cta-actions">
        <a href="${pageLink(ctx, PAGES.contacts)}" class="btn btn-primary">${ctx.tx(UI.ctaBand.ctaPrimary)}</a>
        ${second}
        ${telegram}
      </div>
    </div>
  </section>`;
}

function followCard(ctx, leadKey) {
  return `
  <section class="container section-sm">
    <div class="follow-card glass reveal">
      <h3>${ctx.tx(UI.follow.title)}</h3>
      <p>${ctx.tx(UI.follow[leadKey])}</p>
      <div class="follow-links">
        ${socialTextBtn(ctx, "instagram", "Instagram")}
        ${socialTextBtn(ctx, "telegram", "Telegram")}
        ${socialTextBtn(ctx, "facebook", ctx.tx(UI.follow.facebook))}
      </div>
    </div>
  </section>`;
}

/* ---------------------------------------------------------
   Страницы
--------------------------------------------------------- */
function renderHome(ctx) {
  const heroFlow = CONFIG.automations[0].steps.map(
    (s, idx) => `${idx > 0 ? '<div class="flow-connector"></div>' : ""}
          <div class="flow-node${idx === 0 ? " active" : ""}">
            <div class="node-icon">${icon(s.icon)}</div>
            <div>
              <div class="node-label">${ctx.tx(s.label)}</div>
              <div class="node-sub">${idx === 0 ? ctx.tx(UI.hero.flowLive) : ""}</div>
            </div>
          </div>`
  ).join("\n          ");

  const facts = CONFIG.company.heroFacts.map(
    (f) => `<div class="hero-stat"><b>${esc(f.title)}</b><span>${ctx.tx(f.text)}</span></div>`
  ).join("\n          ");

  const brands = CONFIG.brands.concat(CONFIG.brands) // дублируем для бесшовной прокрутки
    .map((b, i) => `<span${i >= CONFIG.brands.length ? ' aria-hidden="true"' : ""}>${esc(b.name)}</span>`).join("");

  const why = [1, 2, 3, 4].map((n) => `
          <div class="why-item"><span class="num">0${n}</span><div><h3 class="why-title">${ctx.tx(UI.why[`item${n}Title`])}</h3><p>${ctx.tx(UI.why[`item${n}Text`])}</p></div></div>`).join("");

  return `
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-grid"></div>
    <div class="container hero-content">
      <div>
        <div class="hero-eyebrow">
          <span class="pulse-dot"></span>
          <span class="eyebrow" style="margin:0;">${ctx.tx(UI.hero.eyebrow)}</span>
        </div>
        <h1>${ctx.tx(CONFIG.company.heroTitle)}</h1>
        <p class="hero-lead">${ctx.tx(CONFIG.company.heroSubtitle)}</p>
        <div class="hero-cta">
          <a href="${pageLink(ctx, PAGES.contacts)}" class="btn btn-primary">${ctx.tx(UI.hero.ctaPrimary)}</a>
          <a href="${pageLink(ctx, PAGES.automations)}" class="btn btn-ghost">${ctx.tx(UI.hero.ctaSecondary)}</a>
        </div>
        <div class="hero-stats">
          ${facts}
        </div>
      </div>
      <div class="flow-card glass">
        <div class="flow-card-title">
          <span>${ctx.tx(UI.hero.flowTitle)}</span>
          <span style="color:var(--accent);">${ctx.tx(UI.hero.flowStatus)}</span>
        </div>
        <div class="flow-chain">
          ${heroFlow}
        </div>
      </div>
    </div>
  </section>

  <div class="brand-strip">
    <div class="container" style="margin-bottom:14px;">
      <span class="mono" style="font-size:.78rem;color:var(--text-faint);">${ctx.tx(UI.brandStrip.label)}</span>
    </div>
    <div class="brand-track">${brands}</div>
  </div>

  <section class="section container">
    <div class="section-head">
      <div class="eyebrow">${ctx.tx(UI.services.eyebrow)}</div>
      <h2>${ctx.tx(UI.services.title)}</h2>
      <p>${ctx.tx(UI.services.lead)}</p>
    </div>
    <div class="grid grid-4">${serviceCards(ctx)}
    </div>
  </section>

  <section class="section container">
    <div class="why-grid">
      <div>
        <div class="eyebrow">${ctx.tx(UI.why.eyebrow)}</div>
        <h2>${ctx.tx(UI.why.title)}</h2>
        <div class="why-list">${why}
        </div>
      </div>
      <div class="why-visual glass">
        <img src="${ctx.asset("assets/img/why-local.svg")}" alt="${ctx.tx(UI.common.whyImgAlt)}" loading="lazy" width="640" height="520">
      </div>
    </div>
  </section>

  <section class="section-sm container">
    <div class="region-teaser glass reveal">
      <div>
        <div class="eyebrow">${ctx.tx(UI.region.homeEyebrow)}</div>
        <h2>${ctx.tx(UI.region.homeTitle)}</h2>
        <p>${ctx.tx(UI.region.homeLead)}</p>
      </div>
      <a class="btn btn-ghost" href="${pageLink(ctx, PAGES.region)}">${ctx.tx(UI.region.homeCta)} ${icon("arrowRight")}</a>
    </div>
  </section>

  <section class="section container">
    <div class="section-head">
      <div class="eyebrow">${ctx.tx(UI.automationsHome.eyebrow)}</div>
      <h2>${ctx.tx(UI.automationsHome.title)}</h2>
      <p>${ctx.tx(UI.automationsHome.lead)}</p>
    </div>
    <div>${automationBlocks(ctx, CONFIG.automations.slice(0, 3))}
    </div>
    <div style="text-align:center; margin-top:8px;">
      <a href="${pageLink(ctx, PAGES.automations)}" class="btn btn-ghost">${ctx.tx(UI.automationsHome.cta)}</a>
    </div>
  </section>

  <section class="section container">
    <div class="section-head center">
      <div class="eyebrow">${ctx.tx(UI.pricingHome.eyebrow)}</div>
      <h2>${ctx.tx(UI.pricingHome.title)}</h2>
      <p>${ctx.tx(UI.pricingHome.lead)}</p>
    </div>
    <div class="grid grid-3">${packageCards(ctx)}
    </div>
  </section>
${ctaBand(ctx, "email")}
${followCard(ctx, "leadDefault")}`;
}

function renderServicesPage(ctx) {
  const steps = [1, 2, 3, 4].map((n) => `
      <div class="glass reveal" style="padding:26px;">
        <span class="num mono" style="color:var(--accent);">0${n}</span>
        <h3 style="margin:14px 0 8px;">${ctx.tx(UI.servicesPage[`step${n}Title`])}</h3>
        <p style="font-size:.9rem;">${ctx.tx(UI.servicesPage[`step${n}Text`])}</p>
      </div>`).join("");

  return `${pageHero(ctx, {
    eyebrow: ctx.tx(UI.servicesPage.eyebrow),
    title: ctx.tx(UI.servicesPage.title),
    lead: ctx.tx(UI.servicesPage.lead)
  })}

  <section class="section container" style="padding-top:0;">
    <div class="grid grid-4">${serviceCards(ctx)}
    </div>
  </section>

  <section class="section container">
    <div class="section-head center">
      <div class="eyebrow">${ctx.tx(UI.servicesPage.processEyebrow)}</div>
      <h2>${ctx.tx(UI.servicesPage.processTitle)}</h2>
    </div>
    <div class="grid grid-4">${steps}
    </div>
  </section>
${ctaBand(ctx, "pricing")}
${followCard(ctx, "leadServices")}`;
}

function renderPricing(ctx) {
  return `${pageHero(ctx, {
    eyebrow: ctx.tx(UI.pricingPage.eyebrow),
    title: ctx.tx(UI.pricingPage.title),
    lead: ctx.tx(UI.pricingPage.lead)
  })}

  <section class="section container" style="padding-top:0;">
    <div class="grid grid-3">${packageCards(ctx)}
    </div>
  </section>

  <section class="section container">
    <div class="section-head">
      <h2>${ctx.tx(UI.pricingPage.priceListTitle)}</h2>
      <p>${ctx.tx(UI.pricingPage.priceListLead)}</p>
    </div>
    <div>${priceList(ctx)}
    </div>
  </section>
${ctaBand(ctx, "email")}
${followCard(ctx, "leadPricing")}`;
}

function renderAutomationsPage(ctx) {
  return `${pageHero(ctx, {
    eyebrow: ctx.tx(UI.automationsPage.eyebrow),
    title: ctx.tx(UI.automationsPage.title),
    lead: ctx.tx(UI.automationsPage.lead)
  })}

  <section class="section container" style="padding-top:0;">
    <div>${automationBlocks(ctx, CONFIG.automations)}
    </div>
  </section>
${ctaBand(ctx, "pricing")}
${followCard(ctx, "leadAutomations")}`;
}

function renderFaq(ctx) {
  return `${pageHero(ctx, {
    eyebrow: ctx.tx(UI.faqPage.eyebrow),
    title: ctx.tx(UI.faqPage.title),
    lead: ctx.tx(UI.faqPage.lead)
  })}

  <section class="section container" style="padding-top:0; max-width:820px;">
    <div>${faqItems(ctx, CONFIG.faq)}
    </div>
  </section>
${ctaBand(ctx, null)}
${followCard(ctx, "leadFaq")}`;
}

function mapEmbed(ctx) {
  let src = CONFIG.contact.mapEmbedSrc;
  if (!src) return "";
  // Язык интерфейса карты = язык страницы (иначе Google берёт язык браузера)
  if (!/[?&]hl=/.test(src)) src += `${src.includes("?") ? "&" : "?"}hl=${ctx.lang}`;
  return `<div class="map-embed"><iframe src="${esc(src)}" title="${ctx.tx(UI.common.mapTitle)}" width="100%" height="260" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
}

function renderContacts(ctx) {
  const email = esc(CONFIG.contact.email);
  const tg = CONFIG.social.telegram;
  const tgRow = tg
    ? `
        <div class="contact-row">
          <span class="icon-btn" aria-hidden="true">${icon("telegram")}</span>
          <div>
            <b>${ctx.tx(UI.contacts.telegramLabel)}</b>
            <span><a href="${esc(tg)}" target="_blank" rel="noopener">${esc(tg.replace(/^https?:\/\//, ""))}</a></span>
          </div>
        </div>`
    : "";
  const tgAlt = tg
    ? `<a href="${esc(tg)}" target="_blank" rel="noopener" class="btn btn-ghost btn-block" style="margin-top:10px;">${ctx.tx(UI.contacts.telegramAlt)}</a>`
    : "";

  return `${pageHero(ctx, {
    eyebrow: ctx.tx(UI.contacts.eyebrow),
    title: ctx.tx(UI.contacts.title),
    lead: ctx.tx(UI.contacts.lead)
  })}

  <section class="section container" style="padding-top:0;">
    <div class="contact-grid">

      <div class="contact-info-card glass reveal">
        <div class="contact-row">
          <span class="icon-btn" aria-hidden="true">${icon("mail")}</span>
          <div>
            <b>${ctx.tx(UI.contacts.emailLabel)}</b>
            <span><a href="mailto:${email}">${email}</a></span>
          </div>
        </div>
        <div class="contact-row">
          <span class="icon-btn" aria-hidden="true">${icon("mapPin")}</span>
          <div>
            <b>${ctx.tx(UI.contacts.addressLabel)}</b>
            <span>${ctx.tx(CONFIG.contact.addressFull)}</span>
          </div>
        </div>
        <div class="contact-row">
          <span class="icon-btn" aria-hidden="true">${icon("clock")}</span>
          <div>
            <b>${ctx.tx(UI.contacts.hoursLabel)}</b>
            <span>${ctx.tx(CONFIG.contact.workingHours)}</span>
          </div>
        </div>${tgRow}

        <div class="social-links">
          ${socialTextBtn(ctx, "instagram", "Instagram")}
          ${socialTextBtn(ctx, "telegram", "Telegram")}
          ${socialTextBtn(ctx, "facebook", ctx.tx(UI.follow.facebook))}
          ${socialTextBtn(ctx, "youtube", "YouTube")}
        </div>

        ${mapEmbed(ctx)}
      </div>

      <form id="contact-form" class="contact-form glass reveal" data-email="${email}" data-success="${ctx.tx(UI.contacts.formSuccess)}">
        <h2 class="form-title">${ctx.tx(UI.contacts.formTitle)}</h2>

        <div class="form-row">
          <div class="field">
            <label for="f-name">${ctx.tx(UI.contacts.nameLabel)}</label>
            <input id="f-name" name="name" type="text" required autocomplete="name">
          </div>
          <div class="field">
            <label for="f-email">${ctx.tx(UI.contacts.emailFieldLabel)}</label>
            <input id="f-email" name="email" type="email" required autocomplete="email">
          </div>
        </div>

        <div class="field">
          <label for="f-property">${ctx.tx(UI.contacts.propertyLabel)}</label>
          <input id="f-property" name="property" type="text" placeholder="${ctx.tx(UI.common.propertyPlaceholder)}">
        </div>

        <div class="field">
          <label for="f-message">${ctx.tx(UI.contacts.messageLabel)}</label>
          <textarea id="f-message" name="message" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary btn-block">${ctx.tx(UI.contacts.submitBtn)}</button>
        ${tgAlt}
        <p class="form-note">${ctx.tx(UI.contacts.formNote)}</p>
        <p id="form-success" class="mono" role="status" style="display:none; color:var(--accent); font-size:.85rem;"></p>
      </form>

    </div>
  </section>`;
}

function proseSections(ctx, sections) {
  return sections.map((sec) => `
        <h2>${ctx.tx(sec.h)}</h2>
        ${ctx.t(sec.p).map((p) => `<p>${esc(expand(p, ctx.lang))}</p>`).join("\n        ")}`).join("\n");
}

function renderServiceDetail(ctx, page) {
  const { service, content } = page;
  const crumbs = `<nav class="breadcrumbs" aria-label="${ctx.tx(UI.common.breadcrumb)}">
      <a href="${pageLink(ctx, PAGES.index)}">${ctx.tx(UI.nav.home)}</a><span aria-hidden="true">/</span>
      <a href="${pageLink(ctx, PAGES.services)}">${ctx.tx(UI.nav.services)}</a><span aria-hidden="true">/</span>
      <span aria-current="page">${ctx.tx(service.title)}</span>
    </nav>
    `;

  const includes = ctx.t(content.includes).map((i) => `<li>${icon("check")}<span>${esc(i)}</span></li>`).join("\n            ");

  const prices = (content.prices || []).map((id) => {
    const item = PRICE_ITEMS[id];
    if (!item) throw new Error(`Неизвестный id цены "${id}" у услуги "${service.id}"`);
    return priceRow(ctx, item);
  }).join("");

  const pricesCard = prices ? `
        <div class="aside-card glass">
          <h2 class="aside-title">${ctx.tx(UI.servicePage.pricesTitle)}</h2>${prices}
          <p class="aside-note">${ctx.tx(UI.servicePage.pricesNote)} <a href="${pageLink(ctx, PAGES.pricing)}">${ctx.tx(UI.servicePage.pricesLink)} →</a></p>
        </div>` : "";

  const autoList = (content.automations || []).map((id) => {
    if (!AUTOMATIONS[id]) throw new Error(`Неизвестная автоматизация "${id}" у услуги "${service.id}"`);
    return AUTOMATIONS[id];
  });
  const autoSection = autoList.length ? `
  <section class="section-sm container">
    <div class="section-head">
      <h2>${ctx.tx(UI.servicePage.automationsTitle)}</h2>
    </div>
    <div>${automationBlocks(ctx, autoList)}
    </div>
  </section>` : "";

  const others = SERVICE_PAGES.filter((p) => p !== page)
    .map((p) => `<a href="${pageLink(ctx, p)}">${icon(p.service.icon)}<span>${ctx.tx(p.service.title)}</span></a>`)
    .join("\n        ");

  return `${pageHero(ctx, {
    before: crumbs,
    eyebrow: ctx.tx(service.title),
    title: ctx.tx(content.h1),
    lead: ctx.tx(content.intro),
    after: `
    <div class="hero-cta" style="margin:28px 0 0;">
      <a href="${pageLink(ctx, PAGES.contacts)}" class="btn btn-primary">${ctx.tx(UI.hero.ctaPrimary)}</a>
    </div>`
  })}

  <section class="section container" style="padding-top:0;">
    <div class="service-layout">
      <div class="prose">${proseSections(ctx, content.sections)}
      </div>
      <aside class="service-aside">
        <div class="aside-card glass">
          <h2 class="aside-title">${ctx.tx(UI.servicePage.includesTitle)}</h2>
          <ul class="check-list">
            ${includes}
          </ul>
        </div>${pricesCard}
      </aside>
    </div>
  </section>
${autoSection}
  <section class="section-sm container">
    <div class="section-head">
      <h2>${ctx.tx(UI.servicePage.faqTitle)}</h2>
    </div>
    <div style="max-width:820px;">${faqItems(ctx, content.faq)}
    </div>
  </section>

  <section class="section-sm container">
    <h2 class="pill-title">${ctx.tx(UI.servicePage.otherTitle)}</h2>
    <div class="pill-links">
        ${others}
    </div>
  </section>
${ctaBand(ctx, "pricing")}
${followCard(ctx, "leadServices")}`;
}

function renderRegion(ctx) {
  const r = PC.region;
  const areas = ctx.t(r.areas).map((a) => `<li>${icon("mapPin")}<span>${esc(a)}</span></li>`).join("\n            ");
  return `${pageHero(ctx, {
    eyebrow: ctx.tx(UI.region.homeEyebrow),
    title: ctx.tx(r.h1),
    lead: ctx.tx(r.intro),
    after: `
    <div class="hero-cta" style="margin:28px 0 0;">
      <a href="${pageLink(ctx, PAGES.contacts)}" class="btn btn-primary">${ctx.tx(UI.hero.ctaPrimary)}</a>
    </div>`
  })}

  <section class="section container" style="padding-top:0;">
    <div class="service-layout">
      <div class="prose">${proseSections(ctx, r.sections)}
      </div>
      <aside class="service-aside">
        <div class="aside-card glass">
          <h2 class="aside-title">${ctx.tx(r.areasTitle)}</h2>
          <p class="aside-note" style="margin:0 0 14px;">${ctx.tx(r.areasLead)}</p>
          <ul class="check-list area-list">
            ${areas}
          </ul>
          <p class="aside-note">${ctx.tx(r.areasNote)}</p>
        </div>
        ${mapEmbed(ctx)}
      </aside>
    </div>
  </section>

  <section class="section container">
    <div class="section-head">
      <h2>${ctx.tx(UI.region.servicesTitle)}</h2>
    </div>
    <div class="grid grid-4">${serviceCards(ctx)}
    </div>
  </section>

  <section class="section-sm container">
    <div class="section-head">
      <h2>${ctx.tx(UI.servicePage.faqTitle)}</h2>
    </div>
    <div style="max-width:820px;">${faqItems(ctx, r.faq)}
    </div>
  </section>
${ctaBand(ctx, "email")}
${followCard(ctx, "leadDefault")}`;
}

function render404(ctx) {
  const tg = CONFIG.social.telegram;
  return `
  <section class="container" style="min-height:70vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:calc(var(--nav-h) + 40px) 24px 80px;">
    <div class="eyebrow">${ctx.tx(UI.error404.eyebrow)}</div>
    <h1 style="margin-bottom:16px;">${ctx.tx(UI.error404.title)}</h1>
    <p style="max-width:48ch; margin-bottom:32px;">${ctx.tx(UI.error404.lead)}</p>
    <div class="cta-actions">
      <a href="${pageLink(ctx, PAGES.index)}" class="btn btn-primary">${ctx.tx(UI.error404.cta)}</a>
      <a href="${ctx.link(PAGES.index.paths.en)}" class="btn btn-ghost" lang="en">${esc(UI.error404.english.en)}</a>
      ${tg ? `<a href="${esc(tg)}" target="_blank" rel="noopener" class="btn btn-ghost">${ctx.tx(UI.error404.telegram)}</a>` : ""}
    </div>
  </section>`;
}

/* ---------------------------------------------------------
   Сборка
--------------------------------------------------------- */
const written = [];

function writePage(relPath, html) {
  const out = path.join(SITE_DIR, relPath);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html, "utf8");
  written.push(relPath);
}

function buildPage(page, lang, opts) {
  const outPath = page.paths[lang];
  const ctx = makeCtx(lang, outPath, opts);
  writePage(outPath, layout(ctx, page, page.render(ctx, page)));
}

function buildSitemap(pages) {
  const urls = [];
  pages.forEach((page) => {
    LANGS.forEach((lang) => {
      const alternates = LANGS.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${absUrl(page.paths[l])}"/>`
      ).concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl(page.paths[DEFAULT_LANG])}"/>`);
      urls.push(`  <url>\n    <loc>${absUrl(page.paths[lang])}</loc>\n${alternates.join("\n")}\n  </url>`);
    });
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
}

function main() {
  // Полностью сгенерированные папки — очищаем, чтобы не оставались старые страницы
  ["en", "services"].forEach((dir) => fs.rmSync(path.join(SITE_DIR, dir), { recursive: true, force: true }));

  const indexable = [...Object.values(PAGES), ...SERVICE_PAGES];
  indexable.forEach((page) => LANGS.forEach((lang) => buildPage(page, lang)));
  buildPage(PAGE_404, "sr", { absolute: true });

  writePage("sitemap.xml", buildSitemap(indexable));
  writePage("robots.txt", `User-agent: *\nAllow: /\nDisallow: /404.html\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

  // Защита от опечаток: в латинском тексте не должно быть кириллицы
  const cyr = /[Ѐ-ӿ]/;
  written.filter((f) => f.endsWith(".html")).forEach((f) => {
    const html = fs.readFileSync(path.join(SITE_DIR, f), "utf8");
    const m = html.match(new RegExp(`.{0,30}${cyr.source}.{0,30}`));
    if (m) console.warn(`ВНИМАНИЕ: кириллица в ${f}: …${m[0]}…`);
  });

  console.log(`Готово: ${written.length} файлов в ${path.relative(process.cwd(), SITE_DIR) || "."}`);
}

main();
