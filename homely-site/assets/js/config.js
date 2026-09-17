/**
 * ============================================================
 *  HOMELY — ЕДИНЫЙ ФАЙЛ КОНФИГУРАЦИИ САЙТА
 * ============================================================
 *  Здесь и только здесь редактируются:
 *  название компании, контакты, цены, пакеты, услуги,
 *  FAQ, отзывы, автоматизации, бренды, соцсети, SEO.
 *
 *  HTML-файлы НЕ содержат зашитых цифр/контактов — всё
 *  подставляется скриптом assets/js/main.js из этого объекта.
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
    }
  },

  // ---------------------------------------------------------
  // 2. КОНТАКТЫ (placeholder — впишите свои)
  // ---------------------------------------------------------
  contact: {
    phone: "+381 61 145 2522",
    telegram: "nikvladimirovich",
    viberNumber: "381600000000",
    email: "nik@gmail.com",
    addressLine: {
      en: "Belgrade, Serbia",
      sr: "Beograd, Srbija"
    },
    addressFull: {
      en: "Nis, Serbia",
      sr: "Bulevar primer 1, 11000 Beograd"
    },
    workingHours: {
      en: "Mon–Sat, 09:00–19:00",
      sr: "Pon–Sub, 09:00–19:00"
    },
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7340.950535970596!2d20.46741382355035!3d44.81497812477127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aaf8eb12313%3A0xb5d1ff9ef988d573!2z0J3QsNGA0L7QtNC90LDRjyDRgdC60YPQv9GJ0LjQvdCwINCg0LXRgdC_0YPQsdC70LjQutC4INCh0LXRgNCx0LjRjw!5e0!3m2!1sru!2srs!4v1787060670424!5m2!1sru!2srs" // вставьте ссылку Google Maps embed, если нужна карта на странице контактов
  },

  // ---------------------------------------------------------
  // 3. СОЦСЕТИ И МЕССЕНДЖЕРЫ
  // ---------------------------------------------------------
  social: {
    instagram: "https://instagram.com/homely",
    facebook: "https://facebook.com/homely",
    telegram: "https://t.me/homely",
    whatsapp: "https://wa.me/381600000000",
    viber: "viber://chat?number=%2B381600000000",
    youtube: "https://youtube.com/@homely"
  },

  // ---------------------------------------------------------
  // 4. SEO / OPEN GRAPH ПО СТРАНИЦАМ
  // ---------------------------------------------------------
  seo: {
    siteUrl: "https://homely.example",
    ogImage: "assets/img/og-cover.svg",
    defaultKeywords: {
      en: "smart home Serbia, Home Assistant integrator, CCTV installation Belgrade, home automation, video surveillance",
      sr: "pametan dom Srbija, Home Assistant integrator, video nadzor Beograd, kućna automatizacija"
    },
    pages: {
      index: {
        title: { en: "Homely — Smart Home & CCTV Integration in Serbia", sr: "Homely — Pametan dom i video nadzor u Srbiji" },
        description: {
          en: "Local smart home and CCTV integrators in Serbia. Home Assistant-based automation, professional installation, and long-term support — no forced cloud subscriptions.",
          sr: "Lokalni integratori pametnog doma i video nadzora u Srbiji. Automatizacija zasnovana na Home Assistant-u, profesionalna instalacija i dugoročna podrška — bez prisilnih pretplata na oblak."
        }
      },
      services: {
        title: { en: "Services — Homely", sr: "Usluge — Homely" },
        description: {
          en: "From lighting and climate to access control and CCTV — explore the smart home and surveillance services Homely designs and installs.",
          sr: "Od osvetljenja i klime do kontrole pristupa i video nadzora — pogledajte usluge koje Homely projektuje i instalira."
        }
      },
      pricing: {
        title: { en: "Pricing — Homely", sr: "Cenovnik — Homely" },
        description: {
          en: "Transparent packages and a detailed price list for smart home automation and CCTV installation in Serbia.",
          sr: "Transparentni paketi i detaljan cenovnik za automatizaciju pametnog doma i instalaciju video nadzora u Srbiji."
        }
      },
      automations: {
        title: { en: "Automation examples — Homely", sr: "Primeri automatizacije — Homely" },
        description: {
          en: "Real automation scenarios we build on Home Assistant: motion-triggered lighting, leak protection, vacation mode, and more.",
          sr: "Stvarni scenariji automatizacije koje gradimo na Home Assistant-u: osvetljenje na pokret, zaštita od curenja, režim odsustva i drugo."
        }
      },
      portfolio: {
        title: { en: "Portfolio — Homely", sr: "Portfolio — Homely" },
        description: {
          en: "Selected smart home and CCTV projects delivered by Homely across Serbia.",
          sr: "Odabrani projekti pametnog doma i video nadzora koje je Homely realizovao širom Srbije."
        }
      },
      contacts: {
        title: { en: "Contact — Homely", sr: "Kontakt — Homely" },
        description: {
          en: "Get in touch with Homely for a free consultation on smart home or CCTV integration.",
          sr: "Kontaktirajte Homely za besplatnu konsultaciju o integraciji pametnog doma ili video nadzora."
        }
      },
      faq: {
        title: { en: "FAQ — Homely", sr: "Česta pitanja — Homely" },
        description: {
          en: "Answers to common questions about smart home automation and CCTV installation with Homely.",
          sr: "Odgovori na česta pitanja o automatizaciji pametnog doma i instalaciji video nadzora sa Homely."
        }
      }
    }
  },

  // ---------------------------------------------------------
  // 5. УСЛУГИ
  // ---------------------------------------------------------
  services: [
    {
      icon: "lightbulb",
      title: { en: "Smart lighting", sr: "Pametno osvetljenje" },
      desc: {
        en: "Scene-based and motion-aware lighting for every room, staircase and exterior area.",
        sr: "Osvetljenje po scenama i pokretu za svaku prostoriju, stepenište i eksterijer."
      }
    },
    {
      icon: "camera",
      title: { en: "CCTV & video surveillance", sr: "Video nadzor" },
      desc: {
        en: "Local-recording camera systems with motion zones, night vision and mobile access.",
        sr: "Sistemi kamera sa lokalnim snimanjem, zonama detekcije, noćnim vidom i pristupom preko telefona."
      }
    },
    {
      icon: "thermometer",
      title: { en: "Climate control", sr: "Kontrola klime" },
      desc: {
        en: "Automated heating, cooling and ventilation based on presence, weather and schedules.",
        sr: "Automatizovano grejanje, hlađenje i ventilacija na osnovu prisustva, vremena i rasporeda."
      }
    },
    {
      icon: "lock",
      title: { en: "Access control", sr: "Kontrola pristupa" },
      desc: {
        en: "Smart locks, video intercoms and gate automation integrated into one system.",
        sr: "Pametne brave, video interfoni i automatizacija kapije integrisani u jedan sistem."
      }
    },
    {
      icon: "network",
      title: { en: "Networking & Wi-Fi", sr: "Mreža i Wi-Fi" },
      desc: {
        en: "Reliable wired and wireless networks sized correctly for cameras and smart devices.",
        sr: "Pouzdane žične i bežične mreže dimenzionisane za kamere i pametne uređaje."
      }
    },
    {
      icon: "shield",
      title: { en: "Local-first automation", sr: "Automatizacija bez oblaka" },
      desc: {
        en: "Home Assistant-based logic that keeps working even if your internet goes down.",
        sr: "Logika zasnovana na Home Assistant-u koja radi i kada nestane interneta."
      }
    },
    {
      icon: "droplet",
      title: { en: "Leak & flood protection", sr: "Zaštita od curenja vode" },
      desc: {
        en: "Water sensors with automatic shut-off valves for kitchens, bathrooms and boiler rooms.",
        sr: "Senzori vode sa automatskim ventilima za kuhinje, kupatila i kotlarnice."
      }
    },
    {
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
  priceList: [
    {
      category: { en: "Lighting", sr: "Osvetljenje" },
      items: [
        { name: { en: "Smart light point (per switch/bulb)", sr: "Pametna tačka osvetljenja (prekidač/sijalica)" }, price: "35–60", currency: "€" },
        { name: { en: "Motion sensor", sr: "Senzor pokreta" }, price: "25–45", currency: "€" },
        { name: { en: "Scene controller / smart wall panel", sr: "Kontroler scena / pametni panel" }, price: "60–120", currency: "€" }
      ]
    },
    {
      category: { en: "CCTV & video surveillance", sr: "Video nadzor" },
      items: [
        { name: { en: "Indoor camera, installed", sr: "Unutrašnja kamera, instalirana" }, price: "70–110", currency: "€" },
        { name: { en: "Outdoor camera (IP66), installed", sr: "Spoljna kamera (IP66), instalirana" }, price: "110–180", currency: "€" },
        { name: { en: "Local NVR / storage setup", sr: "Lokalni NVR / podešavanje skladišta" }, price: "150–300", currency: "€" }
      ]
    },
    {
      category: { en: "Climate & sensors", sr: "Klima i senzori" },
      items: [
        { name: { en: "Smart thermostat / TRV", sr: "Pametni termostat / TRV ventil" }, price: "60–100", currency: "€" },
        { name: { en: "Temperature & humidity sensor", sr: "Senzor temperature i vlažnosti" }, price: "20–35", currency: "€" },
        { name: { en: "Water leak sensor + shut-off valve", sr: "Senzor curenja + zaporni ventil" }, price: "90–160", currency: "€" }
      ]
    },
    {
      category: { en: "Access & network", sr: "Pristup i mreža" },
      items: [
        { name: { en: "Smart lock, installed", sr: "Pametna brava, instalirana" }, price: "150–260", currency: "€" },
        { name: { en: "Video intercom", sr: "Video interfon" }, price: "180–320", currency: "€" },
        { name: { en: "Network setup (per access point)", sr: "Podešavanje mreže (po pristupnoj tački)" }, price: "50–90", currency: "€" }
      ]
    },
    {
      category: { en: "Software & support", sr: "Softver i podrška" },
      items: [
        { name: { en: "Home Assistant base configuration", sr: "Osnovna konfiguracija Home Assistant-a" }, price: "150", currency: "€" },
        { name: { en: "Custom automation scenario", sr: "Prilagođeni scenario automatizacije" }, price: "20–40", currency: "€" },
        { name: { en: "Monthly remote monitoring", sr: "Mesečni daljinski nadzor" }, price: "15", currency: "€" }
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
        en: "Installed CCTV and smart lighting for our building entrance. Clean cabling, no dashboard confusion, and support actually answers the phone.",
        sr: "Postavili su video nadzor i pametno osvetljenje za ulaz naše zgrade. Uredna instalacija, jasan sistem i podrška zaista odgovara na poziv."
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
  ],

  // ---------------------------------------------------------
  // 12. ПОРТФОЛИО (проекты — заглушки)
  // ---------------------------------------------------------
  portfolio: [
    {
      title: { en: "Family house, Vračar", sr: "Porodična kuća, Vračar" },
      tag: { en: "Full automation + CCTV", sr: "Puna automatizacija + video nadzor" },
      img: "assets/img/portfolio-1.svg"
    },
    {
      title: { en: "Apartment building entrance, Novi Sad", sr: "Ulaz stambene zgrade, Novi Sad" },
      tag: { en: "CCTV + access control", sr: "Video nadzor + kontrola pristupa" },
      img: "assets/img/portfolio-2.svg"
    },
    {
      title: { en: "Weekend house, Zlatibor", sr: "Vikendica, Zlatibor" },
      tag: { en: "Vacation mode + leak protection", sr: "Režim odsustva + zaštita od curenja" },
      img: "assets/img/portfolio-3.svg"
    },
    {
      title: { en: "Small office, Niš", sr: "Mala kancelarija, Niš" },
      tag: { en: "Lighting + CCTV + climate", sr: "Osvetljenje + video nadzor + klima" },
      img: "assets/img/portfolio-4.svg"
    },
    {
      title: { en: "Penthouse, Belgrade Waterfront", sr: "Penthaus, Beograd na vodi" },
      tag: { en: "Premium full-property system", sr: "Premium sistem za ceo objekat" },
      img: "assets/img/portfolio-5.svg"
    },
    {
      title: { en: "Retail store, Kragujevac", sr: "Maloprodajni objekat, Kragujevac" },
      tag: { en: "CCTV + smart access", sr: "Video nadzor + pametan pristup" },
      img: "assets/img/portfolio-6.svg"
    }
  ]

};
