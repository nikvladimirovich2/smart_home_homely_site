/**
 * ============================================================
 *  HOMELY — ЕДИНЫЙ ФАЙЛ КОНФИГУРАЦИИ САЙТА
 * ============================================================
 *  Здесь и только здесь редактируются:
 *  название компании, контакты, цены, пакеты, услуги,
 *  FAQ, отзывы, автоматизации, бренды, соцсети, SEO.
 *
 *  HTML-страницы генерируются из этого файла скриптом
 *  tools/build-site.js (запуск: node tools/build-site.js).
 *  После правки этого файла — перезапустите сборку.
 *
 *  Инструкция по редактированию — см. README.md
 * ============================================================
 */

const CONFIG = {

  // ---------------------------------------------------------
  // 1. КОМПАНИЯ
  // ---------------------------------------------------------
  company: {
    name: "Homely",
    legalNote: "Homely Smart Systems d.o.o.",
    founded: 2026,
    tagline: {
      en: "Smart home & CCTV integration, done locally",
      sr: "Integracija pametnog doma i video nadzora, lokalno"
    },
    heroTitle: {
      en: "Your home, quietly automated",
      sr: "Vaš dom, tiho automatizovan"
    },
    heroSubtitle: {
      en: "We design, install and support local, privacy-respecting smart home and CCTV systems for homes and businesses across Serbia — built on open standards like Home Assistant, not locked to one manufacturer's cloud.",
      sr: "Projektujemo, instaliramo i održavamo lokalne sisteme pametnog doma i video nadzora za domove i firme širom Srbije — zasnovane na otvorenim standardima poput Home Assistant-a, bez zavisnosti od tuđeg oblaka."
    },
    // Три факта под заголовком на главной
    heroFacts: [
      { title: "Home Assistant", text: { en: "The brain — automation & control", sr: "Mozak — automatizacija i upravljanje" } },
      { title: "Zigbee", text: { en: "The nervous system — sensors & devices", sr: "Nervni sistem — senzori i uređaji" } },
      { title: "Frigate", text: { en: "The eyes — intelligent security", sr: "Oči — pametna zaštita" } }
    ]
  },

  // ---------------------------------------------------------
  // 2. КОНТАКТЫ (placeholder — впишите свои)
  // ---------------------------------------------------------
  contact: {
    telegram: "https://t.me/smarthome_soul", // канал; из него можно перейти в чат обсуждения
    email: "nikvladimirovich2@gmail.com",
    addressLine: {
      en: "Niš, Serbia",
      sr: "Niš, Srbija"
    },
    addressFull: {
      en: "Niš, Serbia",
      sr: "Niš, Srbija"
    },
    workingHours: {
      en: "Mon–Sat, 09:00–19:00",
      sr: "Pon–Sub, 09:00–19:00"
    },
    mapEmbedSrc: "https://www.google.com/maps?q=Ni%C5%A1,+Serbia&output=embed" // карта Ниша; можно заменить на точный адрес
  },

  // ---------------------------------------------------------
  // 3. СОЦСЕТИ И МЕССЕНДЖЕРЫ
  // ---------------------------------------------------------
  social: {
    instagram: "https://www.instagram.com/engineersmarthome?exln=YjV6dHF2bTl1ZHJ0",
    facebook: "https://fb.me/g/kBNzn8M65/JlnvYZSd?ref=share", // ссылка на группу
    telegram: "https://t.me/smarthome_soul",
    youtube: "" // канала пока нет — иконка отображается серой и неактивной
  },

  // ---------------------------------------------------------
  // 4. SEO / OPEN GRAPH ПО СТРАНИЦАМ
  // ---------------------------------------------------------
  seo: {
    siteUrl: "https://homely-smart.netlify.app",
    ogImage: "assets/img/og-cover.svg",
    // Подтверждение владения сайтом в Google Search Console
    googleSiteVerification: "7iob2t19lpfKmrOElSlKmvdwsWTPRnaEz8b1yM8SKlc",
    // Тексты <title> и description для основных страниц.
    // Для страниц услуг и страницы Ниша — см. assets/js/pages-content.js
    pages: {
      index: {
        title: { en: "Smart Home & CCTV Installation in Niš, Serbia | Homely", sr: "Pametna kuća i video nadzor u Nišu i Srbiji | Homely" },
        description: {
          en: "Smart home and CCTV installation in Niš and across Serbia: smart lighting, cameras, heating and locks built on Home Assistant. Works without the internet, no forced subscriptions.",
          sr: "Instalacija pametne kuće i video nadzora u Nišu i Srbiji: pametno osvetljenje, kamere, grejanje i brave na Home Assistant-u. Radi i bez interneta, bez obaveznih pretplata."
        }
      },
      services: {
        title: { en: "Smart home & CCTV services | Homely", sr: "Usluge pametne kuće i video nadzora | Homely" },
        description: {
          en: "From lighting and climate to access control and CCTV — explore the smart home and surveillance services Homely designs and installs in Niš and Serbia.",
          sr: "Od osvetljenja i grejanja do kontrole pristupa i video nadzora — pogledajte usluge pametne kuće koje Homely projektuje i ugrađuje u Nišu i Srbiji."
        }
      },
      pricing: {
        title: { en: "Smart home & CCTV prices — packages and price list | Homely", sr: "Cene pametne kuće i video nadzora — paketi i cenovnik | Homely" },
        description: {
          en: "Transparent packages and a detailed price list for smart home automation and CCTV installation in Serbia.",
          sr: "Koliko košta pametna kuća? Transparentni paketi i detaljan cenovnik za automatizaciju doma i ugradnju video nadzora u Srbiji."
        }
      },
      automations: {
        title: { en: "Smart home automation examples (Home Assistant) | Homely", sr: "Primeri automatizacije pametne kuće (Home Assistant) | Homely" },
        description: {
          en: "Real automation scenarios we build on Home Assistant: motion-triggered lighting, leak protection, vacation mode, and more.",
          sr: "Stvarni scenariji automatizacije pametne kuće koje gradimo na Home Assistant-u: osvetljenje na pokret, zaštita od curenja, režim odsustva i drugo."
        }
      },
      contacts: {
        title: { en: "Contact — free smart home consultation | Homely", sr: "Kontakt — besplatna konsultacija za pametnu kuću | Homely" },
        description: {
          en: "Get in touch with Homely in Niš for a free consultation on smart home or CCTV installation.",
          sr: "Kontaktirajte Homely iz Niša za besplatnu konsultaciju o pametnoj kući ili ugradnji video nadzora."
        }
      },
      faq: {
        title: { en: "Smart home & CCTV FAQ | Homely", sr: "Česta pitanja o pametnoj kući i video nadzoru | Homely" },
        description: {
          en: "Answers to common questions about smart home automation and CCTV installation with Homely.",
          sr: "Odgovori na česta pitanja o pametnoj kući, automatizaciji i ugradnji video nadzora."
        }
      }
    }
  },

  // ---------------------------------------------------------
  // 5. УСЛУГИ
  // ---------------------------------------------------------
  // id — ключ текста страницы в pages-content.js; slug — адрес страницы услуги
  services: [
    {
      id: "lighting",
      slug: { sr: "pametno-osvetljenje", en: "smart-lighting" },
      icon: "lightbulb",
      title: { en: "Smart lighting", sr: "Pametno osvetljenje" },
      desc: {
        en: "Scene-based and motion-aware lighting for every room, staircase and exterior area.",
        sr: "Osvetljenje po scenama i pokretu za svaku prostoriju, stepenište i eksterijer."
      }
    },
    {
      id: "cctv",
      slug: { sr: "video-nadzor", en: "cctv-video-surveillance" },
      icon: "camera",
      title: { en: "CCTV & video surveillance", sr: "Video nadzor" },
      desc: {
        en: "Local-recording camera systems with motion zones, night vision and mobile access.",
        sr: "Sistemi kamera sa lokalnim snimanjem, zonama detekcije, noćnim vidom i pristupom preko telefona."
      }
    },
    {
      id: "climate",
      slug: { sr: "pametno-grejanje-i-klima", en: "smart-heating-climate-control" },
      icon: "thermometer",
      title: { en: "Climate control", sr: "Kontrola klime" },
      desc: {
        en: "Automated heating, cooling and ventilation based on presence, weather and schedules.",
        sr: "Automatizovano grejanje, hlađenje i ventilacija na osnovu prisustva, vremena i rasporeda."
      }
    },
    {
      id: "access",
      slug: { sr: "kontrola-pristupa", en: "access-control" },
      icon: "lock",
      title: { en: "Access control", sr: "Kontrola pristupa" },
      desc: {
        en: "Smart locks, video intercoms and gate automation integrated into one system.",
        sr: "Pametne brave, video interfoni i automatizacija kapije integrisani u jedan sistem."
      }
    },
    {
      id: "network",
      slug: { sr: "mreza-i-wifi", en: "networking-wifi" },
      icon: "network",
      title: { en: "Networking & Wi-Fi", sr: "Mreža i Wi-Fi" },
      desc: {
        en: "Reliable wired and wireless networks sized correctly for cameras and smart devices.",
        sr: "Pouzdane žične i bežične mreže dimenzionisane za kamere i pametne uređaje."
      }
    },
    {
      id: "homeassistant",
      slug: { sr: "home-assistant-instalacija", en: "home-assistant-installation" },
      icon: "shield",
      title: { en: "Local-first automation", sr: "Automatizacija bez oblaka" },
      desc: {
        en: "Home Assistant-based logic that keeps working even if your internet goes down.",
        sr: "Logika zasnovana na Home Assistant-u koja radi i kada nestane interneta."
      }
    },
    {
      id: "leak",
      slug: { sr: "zastita-od-curenja-vode", en: "water-leak-protection" },
      icon: "droplet",
      title: { en: "Leak & flood protection", sr: "Zaštita od curenja vode" },
      desc: {
        en: "Water sensors with automatic shut-off valves for kitchens, bathrooms and boiler rooms.",
        sr: "Senzori vode sa automatskim ventilima za kuhinje, kupatila i kotlarnice."
      }
    },
    {
      id: "support",
      slug: { sr: "odrzavanje-i-podrska", en: "maintenance-support" },
      icon: "wrench",
      title: { en: "Maintenance & support", sr: "Održavanje i podrška" },
      desc: {
        en: "Ongoing monitoring, firmware updates and priority support after installation.",
        sr: "Kontinuirano praćenje, ažuriranje softvera i prioritetna podrška nakon instalacije."
      }
    }
  ],

  // ---------------------------------------------------------
  // 6. ПАКЕТЫ (PRICING PACKAGES)
  // ---------------------------------------------------------
  packages: [
    {
      id: "starter",
      name: { en: "Starter", sr: "Starter" },
      price: 490,
      currency: "€",
      period: { en: "one-time", sr: "jednokratno" },
      highlighted: false,
      description: {
        en: "A first step into a smarter home — lighting and one entry point covered.",
        sr: "Prvi korak ka pametnijem domu — osvetljenje i jedna ulazna tačka."
      },
      features: {
        en: [
          "Up to 6 smart lighting points",
          "1 motion sensor",
          "1 smart plug group",
          "Home Assistant setup & mobile app",
          "Basic automations (up to 3 scenarios)"
        ],
        sr: [
          "Do 6 tačaka pametnog osvetljenja",
          "1 senzor pokreta",
          "1 grupa pametnih utičnica",
          "Podešavanje Home Assistant-a i mobilne aplikacije",
          "Osnovne automatizacije (do 3 scenarija)"
        ]
      }
    },
    {
      id: "home",
      name: { en: "Home", sr: "Home" },
      price: 1290,
      currency: "€",
      period: { en: "one-time", sr: "jednokratno" },
      highlighted: true,
      description: {
        en: "Our most popular package — whole-home automation with CCTV included.",
        sr: "Naš najtraženiji paket — automatizacija celog doma sa video nadzorom."
      },
      features: {
        en: [
          "Everything in Starter",
          "Up to 4 CCTV cameras with local recording",
          "Climate automation (up to 3 zones)",
          "Leak sensor in kitchen & bathroom",
          "Up to 10 custom automation scenarios",
          "1 year of remote monitoring & support"
        ],
        sr: [
          "Sve iz Starter paketa",
          "Do 4 kamere sa lokalnim snimanjem",
          "Automatizacija klime (do 3 zone)",
          "Senzor curenja u kuhinji i kupatilu",
          "Do 10 prilagođenih scenarija automatizacije",
          "1 godina daljinskog nadzora i podrške"
        ]
      }
    },
    {
      id: "premium",
      name: { en: "Premium", sr: "Premium" },
      price: 2690,
      currency: "€",
      period: { en: "one-time", sr: "jednokratno" },
      highlighted: false,
      description: {
        en: "Full-property coverage — access control, up to 8 cameras and unlimited scenarios.",
        sr: "Potpuna pokrivenost objekta — kontrola pristupa, do 8 kamera i neograničeni scenariji."
      },
      features: {
        en: [
          "Everything in Home",
          "Up to 8 CCTV cameras + video intercom",
          "Smart locks & gate automation",
          "Unlimited custom automation scenarios",
          "Dedicated local server (no third-party cloud)",
          "2 years of remote monitoring & support"
        ],
        sr: [
          "Sve iz Home paketa",
          "Do 8 kamera + video interfon",
          "Pametne brave i automatizacija kapije",
          "Neograničen broj prilagođenih scenarija",
          "Namenski lokalni server (bez tuđeg oblaka)",
          "2 godine daljinskog nadzora i podrške"
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // 7. ПОЛНЫЙ ПРАЙС (по категориям)
  // ---------------------------------------------------------
  // id позиции используется на страницах услуг (блок «Okvirne cene»)
  // и в текстах как {{price:id}} — так цена в тексте всегда совпадает с прайсом.
  priceList: [
    {
      category: { en: "Lighting", sr: "Osvetljenje" },
      items: [
        { id: "light-point", name: { en: "Smart light point (per switch/bulb)", sr: "Pametna tačka osvetljenja (prekidač/sijalica)" }, price: "35–60", currency: "€" },
        { id: "motion-sensor", name: { en: "Motion sensor", sr: "Senzor pokreta" }, price: "25–45", currency: "€" },
        { id: "scene-panel", name: { en: "Scene controller / smart wall panel", sr: "Kontroler scena / pametni panel" }, price: "60–120", currency: "€" }
      ]
    },
    {
      category: { en: "CCTV & video surveillance", sr: "Video nadzor" },
      items: [
        { id: "cam-indoor", name: { en: "Indoor camera, installed", sr: "Unutrašnja kamera, instalirana" }, price: "70–110", currency: "€" },
        { id: "cam-outdoor", name: { en: "Outdoor camera (IP66), installed", sr: "Spoljna kamera (IP66), instalirana" }, price: "110–180", currency: "€" },
        { id: "nvr", name: { en: "Local NVR / storage setup", sr: "Lokalni NVR / podešavanje skladišta" }, price: "150–300", currency: "€" }
      ]
    },
    {
      category: { en: "Climate & sensors", sr: "Klima i senzori" },
      items: [
        { id: "thermostat", name: { en: "Smart thermostat / TRV", sr: "Pametni termostat / TRV ventil" }, price: "60–100", currency: "€" },
        { id: "temp-sensor", name: { en: "Temperature & humidity sensor", sr: "Senzor temperature i vlažnosti" }, price: "20–35", currency: "€" },
        { id: "leak-valve", name: { en: "Water leak sensor + shut-off valve", sr: "Senzor curenja + zaporni ventil" }, price: "90–160", currency: "€" }
      ]
    },
    {
      category: { en: "Access & network", sr: "Pristup i mreža" },
      items: [
        { id: "smart-lock", name: { en: "Smart lock, installed", sr: "Pametna brava, instalirana" }, price: "150–260", currency: "€" },
        { id: "intercom", name: { en: "Video intercom", sr: "Video interfon" }, price: "180–320", currency: "€" },
        { id: "network-ap", name: { en: "Network setup (per access point)", sr: "Podešavanje mreže (po pristupnoj tački)" }, price: "50–90", currency: "€" }
      ]
    },
    {
      category: { en: "Software & support", sr: "Softver i podrška" },
      items: [
        { id: "ha-base", name: { en: "Home Assistant base configuration", sr: "Osnovna konfiguracija Home Assistant-a" }, price: "150", currency: "€" },
        { id: "automation", name: { en: "Custom automation scenario", sr: "Prilagođeni scenario automatizacije" }, price: "20–40", currency: "€" },
        { id: "monitoring", name: { en: "Monthly remote monitoring", sr: "Mesečni daljinski nadzor" }, price: "15", currency: "€" }
      ]
    }
  ],

  // ---------------------------------------------------------
  // 8. ПРИМЕРЫ АВТОМАТИЗАЦИЙ (для схем)
  // ---------------------------------------------------------
  automations: [
    {
      id: "motion-light-camera",
      title: { en: "Motion → Light → Camera → Notification", sr: "Pokret → Svetlo → Kamera → Obaveštenje" },
      description: {
        en: "At night, motion near the entrance turns on the porch light, starts recording on the nearest camera, and sends a push notification to your phone.",
        sr: "Noću, pokret kod ulaza pali svetlo na tremu, pokreće snimanje na najbližoj kameri i šalje push obaveštenje na telefon."
      },
      steps: [
        { icon: "motion", label: { en: "Motion detected", sr: "Detektovan pokret" } },
        { icon: "lightbulb", label: { en: "Porch light on", sr: "Svetlo na tremu" } },
        { icon: "camera", label: { en: "Camera records", sr: "Kamera snima" } },
        { icon: "bell", label: { en: "Push notification", sr: "Push obaveštenje" } }
      ]
    },
    {
      id: "door-light-notification",
      title: { en: "Door → Light → Notification", sr: "Vrata → Svetlo → Obaveštenje" },
      description: {
        en: "Opening the front door after dark turns on the hallway light automatically and lets you know the door was opened while you were away.",
        sr: "Otvaranje ulaznih vrata nakon mraka automatski pali svetlo u hodniku i javlja vam da su vrata otvorena dok ste odsutni."
      },
      steps: [
        { icon: "door", label: { en: "Door opened", sr: "Vrata otvorena" } },
        { icon: "lightbulb", label: { en: "Hallway light on", sr: "Svetlo u hodniku" } },
        { icon: "bell", label: { en: "Notification sent", sr: "Obaveštenje poslato" } }
      ]
    },
    {
      id: "smoke-alarm-camera",
      title: { en: "Smoke → Alarm → Camera", sr: "Dim → Alarm → Kamera" },
      description: {
        en: "A smoke sensor immediately triggers the siren, switches nearby cameras to continuous recording, and calls the emergency contact list.",
        sr: "Senzor dima odmah aktivira sirenu, prebacuje obližnje kamere na neprekidno snimanje i poziva listu kontakata za hitne slučajeve."
      },
      steps: [
        { icon: "flame", label: { en: "Smoke detected", sr: "Detektovan dim" } },
        { icon: "alarm", label: { en: "Siren triggered", sr: "Aktivirana sirena" } },
        { icon: "camera", label: { en: "Cameras record", sr: "Kamere snimaju" } }
      ]
    },
    {
      id: "temperature-ac",
      title: { en: "Temperature → AC / Fan", sr: "Temperatura → Klima / Ventilator" },
      description: {
        en: "When a room crosses a comfort threshold, the AC or fan switches on automatically and stops once the target temperature is reached.",
        sr: "Kada prostorija pređe prag komfora, klima ili ventilator se automatski uključuju i gase kada se dostigne željena temperatura."
      },
      steps: [
        { icon: "thermometer", label: { en: "Temp. threshold hit", sr: "Dostignut prag temp." } },
        { icon: "fan", label: { en: "AC / fan turns on", sr: "Klima / ventilator uključeni" } },
        { icon: "check", label: { en: "Target reached, off", sr: "Cilj dostignut, isključeno" } }
      ]
    },
    {
      id: "vacation-mode",
      title: { en: "Vacation Mode", sr: "Režim odsustva" },
      description: {
        en: "When everyone leaves for an extended trip, the house arms itself: lights simulate presence at random intervals, climate drops to eco mode, and cameras switch to high-sensitivity recording.",
        sr: "Kada svi odu na duži put, kuća se sama aktivira: svetla simuliraju prisustvo u nasumičnim intervalima, klima prelazi u eko režim, a kamere prelaze na snimanje visoke osetljivosti."
      },
      steps: [
        { icon: "suitcase", label: { en: "Vacation mode on", sr: "Uključen režim odsustva" } },
        { icon: "lightbulb", label: { en: "Simulated presence", sr: "Simulirano prisustvo" } },
        { icon: "thermometer", label: { en: "Eco climate", sr: "Eko klima" } },
        { icon: "camera", label: { en: "High-sensitivity CCTV", sr: "Osetljiviji video nadzor" } }
      ]
    }
  ],

  // ---------------------------------------------------------
  // 9. ПОДДЕРЖИВАЕМЫЕ БРЕНДЫ
  // ---------------------------------------------------------
  brands: [
    { name: "Home Assistant", category: { en: "Automation platform", sr: "Platforma automatizacije" } },
    { name: "Shelly", category: { en: "Switches & sensors", sr: "Prekidači i senzori" } },
    { name: "Aqara", category: { en: "Zigbee sensors", sr: "Zigbee senzori" } },
    { name: "Sonoff", category: { en: "Relays & plugs", sr: "Releji i utičnice" } },
    { name: "Hikvision", category: { en: "CCTV", sr: "Video nadzor" } },
    { name: "Dahua", category: { en: "CCTV", sr: "Video nadzor" } },
    { name: "Reolink", category: { en: "CCTV", sr: "Video nadzor" } },
    { name: "Ubiquiti", category: { en: "Networking", sr: "Mreža" } },
    { name: "Xiaomi", category: { en: "Sensors & devices", sr: "Senzori i uređaji" } },
    { name: "Zigbee2MQTT", category: { en: "Device bridge", sr: "Most za uređaje" } }
  ],

  // ---------------------------------------------------------
  // 10. ОТЗЫВЫ
  // ---------------------------------------------------------
  testimonials: [
    {
      name: "Marko J.",
      role: { en: "Homeowner, Belgrade", sr: "Vlasnik kuće, Beograd" },
      rating: 5,
      text: {
        en: "They explained everything in plain language and never pushed us toward a subscription we didn't need. The automations just work, even during internet outages.",
        sr: "Sve su objasnili jednostavnim jezikom i nikada nas nisu gurali ka pretplati koja nam ne treba. Automatizacije jednostavno rade, čak i kada nestane interneta."
      }
    },
    {
      name: "Ivana P.",
      role: { en: "Apartment owner, Novi Sad", sr: "Vlasnica stana, Novi Sad" },
      rating: 5,
      text: {
        en: "Installed CCTV and smart lighting for our building entrance. Clean cabling, no dashboard confusion, and support actually replies to email.",
        sr: "Postavili su video nadzor i pametno osvetljenje za ulaz naše zgrade. Uredna instalacija, jasan sistem i podrška zaista odgovara na email."
      }
    },
    {
      name: "Nikola S.",
      role: { en: "Small business owner, Niš", sr: "Vlasnik male firme, Niš" },
      rating: 4,
      text: {
        en: "Good value compared to quotes from larger companies. The leak sensor in our server room already paid for itself once.",
        sr: "Dobar odnos cene i kvaliteta u poređenju sa ponudama većih firmi. Senzor curenja u serverskoj sobi se već jednom isplatio."
      }
    }
  ],

  // ---------------------------------------------------------
  // 11. FAQ
  // ---------------------------------------------------------
  faq: [
    {
      q: { en: "Do I need internet for my automations to work?", sr: "Da li mi je potreban internet da bi automatizacije radile?" },
      a: {
        en: "No. We build on Home Assistant running locally in your home, so motion-activated lights, alarms and other core automations keep working even if your internet connection drops. Internet is only needed for remote access and notifications.",
        sr: "Ne. Gradimo sistem na Home Assistant-u koji radi lokalno u vašem domu, tako da svetla na pokret, alarmi i druge ključne automatizacije nastavljaju da rade i kada nestane interneta. Internet je potreban samo za daljinski pristup i obaveštenja."
      }
    },
    {
      q: { en: "Will my data be sent to a manufacturer's cloud?", sr: "Da li se moji podaci šalju u oblak proizvođača?" },
      a: {
        en: "By default, no. We prioritize local-first devices and keep camera footage and automation logic on hardware inside your home. Cloud features are only enabled if you specifically want them.",
        sr: "Podrazumevano ne. Prioritet dajemo uređajima koji rade lokalno i čuvamo snimke kamera i logiku automatizacije na hardveru unutar vašeg doma. Funkcije oblaka se uključuju samo ako to izričito želite."
      }
    },
    {
      q: { en: "Can I add more devices later?", sr: "Mogu li kasnije dodati još uređaja?" },
      a: {
        en: "Yes. Every system we install is modular — you can start with a Starter package and add cameras, sensors or automations at any point without replacing existing hardware.",
        sr: "Da. Svaki sistem koji instaliramo je modularan — možete početi sa Starter paketom i u bilo kom trenutku dodati kamere, senzore ili automatizacije bez zamene postojeće opreme."
      }
    },
    {
      q: { en: "How long does installation take?", sr: "Koliko traje instalacija?" },
      a: {
        en: "A Starter package typically takes 1 day. Home and Premium packages usually take 2–4 days depending on property size and whether new cabling is required.",
        sr: "Starter paket obično traje 1 dan. Home i Premium paketi obično traju 2–4 dana, u zavisnosti od veličine objekta i potrebe za novim kablovima."
      }
    },
    {
      q: { en: "Do you offer support after installation?", sr: "Da li nudite podršku nakon instalacije?" },
      a: {
        en: "Yes, every package includes a support period with remote monitoring and firmware updates. Extended support plans are available afterward.",
        sr: "Da, svaki paket uključuje period podrške sa daljinskim nadzorom i ažuriranjem softvera. Nakon toga su dostupni prošireni planovi podrške."
      }
    },
    {
      q: { en: "Can I control the system without a smartphone?", sr: "Mogu li da upravljam sistemom bez pametnog telefona?" },
      a: {
        en: "Yes. Wall-mounted panels, physical switches and voice assistants can all be configured alongside or instead of the mobile app.",
        sr: "Da. Zidni paneli, fizički prekidači i glasovni asistenti mogu se podesiti uz mobilnu aplikaciju ili umesto nje."
      }
    }
  ]

};
