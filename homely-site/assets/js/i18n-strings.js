/**
 * UI_STRINGS — статичные тексты интерфейса (не данные из CONFIG):
 * навигация, заголовки секций, кнопки, подвал.
 * Используется через data-i18n="section.key" в HTML.
 */
const UI_STRINGS = {
  nav: {
    home: { en: "Home", sr: "Početna" },
    services: { en: "Services", sr: "Usluge" },
    pricing: { en: "Pricing", sr: "Cenovnik" },
    automations: { en: "Automations", sr: "Automatizacija" },
    portfolio: { en: "Portfolio", sr: "Portfolio" },
    faq: { en: "FAQ", sr: "Pitanja" },
    contacts: { en: "Contact", sr: "Kontakt" },
    ctaBtn: { en: "Get a quote", sr: "Zatražite ponudu" }
  },
  hero: {
    eyebrow: { en: "Local smart home integration", sr: "Lokalna integracija pametnog doma" },
    ctaPrimary: { en: "Get a free consultation", sr: "Besplatna konsultacija" },
    ctaSecondary: { en: "See automation examples", sr: "Pogledajte primere" },
    stat1Label: { en: "Projects delivered", sr: "Realizovanih projekata" },
    stat2Label: { en: "Avg. install time", sr: "Prosečno vreme instalacije" },
    stat3Label: { en: "Support rating", sr: "Ocena podrške" },
    flowTitle: { en: "Live automation", sr: "Automatizacija uživo" },
    flowStatus: { en: "Running locally", sr: "Radi lokalno" },
    flowLive: { en: "just now", sr: "upravo sada" },
    statUnit: { en: "days", sr: "dana" }
  },
  brandStrip: {
    label: { en: "Works with the hardware you already trust", sr: "Radi sa hardverom kom već verujete" }
  },
  services: {
    eyebrow: { en: "What we do", sr: "Šta radimo" },
    title: { en: "Everything your home needs, one system", sr: "Sve što vašem domu treba, jedan sistem" },
    lead: { en: "We design each system around your property, then install, configure and support it — no generic templates.", sr: "Svaki sistem projektujemo prema vašem objektu, zatim ga instaliramo, podešavamo i održavamo — bez generičkih šablona." }
  },
  why: {
    eyebrow: { en: "Why local", sr: "Zašto lokalno" },
    title: { en: "Why choose a local, open system", sr: "Zašto izabrati lokalan, otvoren sistem" },
    item1Title: { en: "Works without internet", sr: "Radi bez interneta" },
    item1Text: { en: "Core automations run on a local Home Assistant instance in your home — no dependency on a manufacturer's servers.", sr: "Ključne automatizacije rade na lokalnoj Home Assistant instanci u vašem domu — bez zavisnosti od servera proizvođača." },
    item2Title: { en: "Your data stays home", sr: "Vaši podaci ostaju kod vas" },
    item2Text: { en: "Camera footage and automation logic are stored on your own hardware by default.", sr: "Snimci kamera i logika automatizacije podrazumevano se čuvaju na vašem sopstvenom hardveru." },
    item3Title: { en: "No forced subscriptions", sr: "Bez prisilnih pretplata" },
    item3Text: { en: "Pick devices from any supported brand — you're never locked into one manufacturer's app or plan.", sr: "Birate uređaje bilo kog podržanog brenda — nikada niste vezani za aplikaciju ili plan jednog proizvođača." },
    item4Title: { en: "Grows with your home", sr: "Raste zajedno sa vašim domom" },
    item4Text: { en: "Add rooms, cameras or automations any time — the system was built to be extended, not replaced.", sr: "Dodajte sobe, kamere ili automatizacije bilo kada — sistem je napravljen da se proširuje, a ne menja." }
  },
  automationsHome: {
    eyebrow: { en: "In action", sr: "U akciji" },
    title: { en: "A few automations we build often", sr: "Nekoliko automatizacija koje često gradimo" },
    lead: { en: "Real logic chains from real installs — see the full list on the Automations page.", sr: "Stvarni lanci logike iz stvarnih instalacija — pun spisak pogledajte na stranici Automatizacija." },
    cta: { en: "See all automation examples", sr: "Pogledajte sve primere automatizacije" }
  },
  pricingHome: {
    eyebrow: { en: "Pricing", sr: "Cene" },
    title: { en: "Straightforward packages", sr: "Jasni paketi" },
    lead: { en: "Fixed-scope packages for common properties, plus a full price list for custom builds.", sr: "Paketi fiksnog obima za tipične objekte, plus pun cenovnik za prilagođena rešenja." },
    popular: { en: "Most popular", sr: "Najpopularniji" },
    cta: { en: "Choose package", sr: "Izaberite paket" }
  },
  testimonialsHome: {
    eyebrow: { en: "Reviews", sr: "Recenzije" },
    title: { en: "What clients say", sr: "Šta kažu klijenti" }
  },
  ctaBand: {
    title: { en: "Ready for a quieter, smarter home?", sr: "Spremni za tiši, pametniji dom?" },
    lead: { en: "Tell us about your property and we'll put together a free, no-obligation proposal within 48 hours.", sr: "Recite nam o vašem objektu i pripremićemo besplatnu ponudu bez obaveze u roku od 48 sati." },
    ctaPrimary: { en: "Request a proposal", sr: "Zatražite ponudu" },
    ctaSecondary: { en: "Message us on WhatsApp", sr: "Pišite nam na WhatsApp" }
  },
  servicesPage: {
    eyebrow: { en: "Services", sr: "Usluge" },
    title: { en: "Every layer of a modern smart home", sr: "Svaki sloj savremenog pametnog doma" },
    lead: { en: "From a single motion sensor to a fully integrated property, each service below can stand alone or combine into one system.", sr: "Od jednog senzora pokreta do potpuno integrisanog objekta, svaka usluga ispod može stajati samostalno ili se kombinovati u jedan sistem." },
    processEyebrow: { en: "Process", sr: "Proces" },
    processTitle: { en: "How a project runs", sr: "Kako izgleda projekat" },
    step1Title: { en: "Free site visit", sr: "Besplatna poseta objektu" },
    step1Text: { en: "We walk the property, discuss priorities and sketch a system that fits how you actually live.", sr: "Obilazimo objekat, razgovaramo o prioritetima i skiciramo sistem koji odgovara vašem načinu života." },
    step2Title: { en: "Design & quote", sr: "Projekat i ponuda" },
    step2Text: { en: "You receive a clear proposal with device list, pricing and timeline — no vague line items.", sr: "Dobijate jasnu ponudu sa spiskom uređaja, cenama i rokovima — bez nejasnih stavki." },
    step3Title: { en: "Installation", sr: "Instalacija" },
    step3Text: { en: "Clean cabling, labeled wiring, and a working system tested with you before we leave.", sr: "Uredno kabliranje, obeležena instalacija i sistem testiran zajedno sa vama pre nego što odemo." },
    step4Title: { en: "Ongoing support", sr: "Kontinuirana podrška" },
    step4Text: { en: "Remote monitoring, firmware updates and a direct line to your installer.", sr: "Daljinski nadzor, ažuriranje softvera i direktna linija sa vašim instalaterom." }
  },
  pricingPage: {
    eyebrow: { en: "Pricing", sr: "Cenovnik" },
    title: { en: "Packages & full price list", sr: "Paketi i pun cenovnik" },
    lead: { en: "Prices below are typical ranges for the Belgrade/Novi Sad area and depend on property size and device selection. Final pricing is always confirmed after a free site visit.", sr: "Cene ispod su tipični rasponi za Beograd/Novi Sad i zavise od veličine objekta i izbora uređaja. Konačna cena se uvek potvrđuje nakon besplatne posete objektu." },
    priceListTitle: { en: "Full price list", sr: "Pun cenovnik" },
    priceListLead: { en: "Building something custom? Here's what individual components typically cost.", sr: "Gradite nešto prilagođeno? Evo koliko obično koštaju pojedinačne komponente." }
  },
  automationsPage: {
    eyebrow: { en: "Automation examples", sr: "Primeri automatizacije" },
    title: { en: "Logic we build into real homes", sr: "Logika koju ugrađujemo u prave domove" },
    lead: { en: "Each diagram below is a simplified version of an automation running in a Homely-installed system today.", sr: "Svaki dijagram ispod je pojednostavljena verzija automatizacije koja danas radi u sistemu koji je instalirao Homely." }
  },
  portfolioPage: {
    eyebrow: { en: "Portfolio", sr: "Portfolio" },
    title: { en: "Recent projects", sr: "Nedavni projekti" },
    lead: { en: "A sample of properties across Serbia where we've installed smart home and CCTV systems. Photos are placeholders — replace with real project photos in assets/img.", sr: "Primer objekata širom Srbije gde smo instalirali sisteme pametnog doma i video nadzora. Fotografije su privremene — zamenite ih pravim fotografijama projekata u assets/img." }
  },
  faqPage: {
    eyebrow: { en: "FAQ", sr: "Česta pitanja" },
    title: { en: "Frequently asked questions", sr: "Često postavljana pitanja" },
    lead: { en: "Can't find your answer here? Reach out and we'll respond within a business day.", sr: "Ne pronalazite odgovor? Javite nam se i odgovorićemo u roku od jednog radnog dana." }
  },
  contacts: {
    eyebrow: { en: "Contact", sr: "Kontakt" },
    title: { en: "Let's talk about your property", sr: "Razgovarajmo o vašem objektu" },
    lead: { en: "Fill in the form or reach us directly — a free, no-obligation site visit is the usual first step.", sr: "Popunite formular ili nas kontaktirajte direktno — besplatna poseta objektu bez obaveze je uobičajen prvi korak." },
    phoneLabel: { en: "Phone", sr: "Telefon" },
    emailLabel: { en: "Email", sr: "Email" },
    addressLabel: { en: "Address", sr: "Adresa" },
    hoursLabel: { en: "Working hours", sr: "Radno vreme" },
    formTitle: { en: "Send us a message", sr: "Pošaljite nam poruku" },
    nameLabel: { en: "Full name", sr: "Ime i prezime" },
    phoneFieldLabel: { en: "Phone", sr: "Telefon" },
    emailFieldLabel: { en: "Email", sr: "Email" },
    propertyLabel: { en: "Property type", sr: "Tip objekta" },
    messageLabel: { en: "What are you looking for?", sr: "Šta vam je potrebno?" },
    submitBtn: { en: "Send message", sr: "Pošaljite poruku" },
    formNote: { en: "This is a demo form — no data is sent anywhere. Connect it to your own email/CRM endpoint.", sr: "Ovo je demo formular — podaci se nikuda ne šalju. Povežite ga sa sopstvenim email/CRM sistemom." },
    formSuccess: { en: "Thanks! This is a demo — connect the form to your backend to actually receive messages.", sr: "Hvala! Ovo je demo — povežite formular sa svojim sistemom da biste zaista primali poruke." }
  },
  footer: {
    about: { en: "Local smart home and CCTV integration for homes and businesses across Serbia, built on open platforms like Home Assistant.", sr: "Lokalna integracija pametnog doma i video nadzora za domove i firme širom Srbije, zasnovana na otvorenim platformama poput Home Assistant-a." },
    company: { en: "Company", sr: "Kompanija" },
    resources: { en: "Resources", sr: "Resursi" },
    getInTouch: { en: "Get in touch", sr: "Kontakt" },
    rights: { en: "All rights reserved.", sr: "Sva prava zadržana." }
  },
  error404: {
    eyebrow: { en: "404", sr: "404" },
    title: { en: "This page went offline", sr: "Ova stranica je van mreže" },
    lead: { en: "Like a sensor with a flat battery — the page you're looking for isn't reporting in. Let's get you back home.", sr: "Kao senzor sa praznom baterijom — stranica koju tražite se ne javlja. Vratimo vas na početnu." },
    cta: { en: "Back to homepage", sr: "Nazad na početnu" }
  },
  common: {
    backToTop: { en: "Back to top", sr: "Nazad na vrh" }
  }
};
