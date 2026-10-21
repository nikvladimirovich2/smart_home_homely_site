/**
 * ============================================================
 *  HOMELY — ТЕКСТЫ СТРАНИЦ УСЛУГ И СТРАНИЦЫ НИША
 * ============================================================
 *  Ключи в `services` совпадают с `id` услуг в config.js.
 *  Адрес страницы задаётся там же (`slug`).
 *
 *  В текстах можно писать {{price:id}} и {{package:id}} —
 *  при сборке это заменяется на цену из config.js
 *  (priceList[].items[].id и packages[].id), так что цены в
 *  текстах не расходятся с прайсом.
 *
 *  После правки — перезапустите сборку: node tools/build-site.js
 * ============================================================
 */

const PAGES_CONTENT = {

  services: {

    // ---------------------------------------------------------
    lighting: {
      title: {
        sr: "Pametno osvetljenje — ugradnja u Nišu i Srbiji | Homely",
        en: "Smart lighting installation in Niš & Serbia | Homely"
      },
      description: {
        sr: "Pametno osvetljenje za kuće i stanove: scene, svetla na pokret, upravljanje telefonom i prekidačem. Ugradnja na Home Assistant-u, bez obaveznog oblaka. Niš i Srbija.",
        en: "Smart lighting for houses and apartments: scenes, motion-activated lights, control by phone or wall switch. Installed on Home Assistant, no mandatory cloud. Niš and Serbia."
      },
      h1: {
        sr: "Pametno osvetljenje za kuću i stan",
        en: "Smart lighting for houses and apartments"
      },
      intro: {
        sr: "Svetla koja se pale kada uđete u prostoriju, gase kada svi izađu i menjaju atmosferu jednim dodirom. Pametno osvetljenje je najčešći prvi korak ka pametnoj kući — i onaj koji se u svakodnevnom životu najviše oseti.",
        en: "Lights that turn on when you walk in, switch off when everyone leaves and change the mood with a single tap. Smart lighting is the most common first step towards a smart home — and the one you notice most every day."
      },
      sections: [
        {
          h: { sr: "Kako radi", en: "How it works" },
          p: {
            sr: [
              "U postojeće razvodne kutije ugrađujemo male pametne releje (najčešće Shelly) ili postojeće prekidače menjamo pametnim modelima. Prekidač na zidu i dalje radi kao i do sada, a svetlom sada možete da upravljate i preko telefona, glasom ili potpuno automatski.",
              "Sve uređaje povezujemo u Home Assistant, koji radi lokalno, u vašem domu. Zato svetla na pokret i scene rade i kada nestane interneta, a reakcija je trenutna jer komande ne idu preko tuđih servera."
            ],
            en: [
              "We fit small smart relays (usually Shelly) into your existing junction boxes or replace switches with smart models. The wall switch works exactly as before, and you can now also control the light from your phone, by voice or fully automatically.",
              "All devices are connected to Home Assistant, which runs locally in your home. That is why motion lighting and scenes keep working when the internet goes down, and the response is instant because commands don't travel through someone else's servers."
            ]
          }
        },
        {
          h: { sr: "Šta sve može", en: "What it can do" },
          p: {
            sr: [
              "Tipični scenariji su svetlo u hodniku i kupatilu koje se noću prigušeno pali na pokret, scena „Film“ koja priguši dnevnu sobu, spoljna rasveta koja se pali u sumrak i gasi u ponoć i jedno dugme kod ulaza koje gasi sva svetla kada izlazite iz kuće.",
              "Na stepeništu i u garaži senzor pokreta zamenjuje traženje prekidača u mraku, a noćno svetlo u dečjoj sobi samo se gasi posle zadatog vremena."
            ],
            en: [
              "Typical scenarios: hallway and bathroom lights that come on dimmed at night when you move, a “Movie” scene that dims the living room, outdoor lighting that switches on at dusk and off at midnight, and one button by the front door that turns off every light when you leave.",
              "On staircases and in garages a motion sensor replaces fumbling for a switch in the dark, and a night light in a child's room turns itself off after a set time."
            ]
          }
        },
        {
          h: { sr: "Novogradnja ili postojeći stan", en: "New build or existing home" },
          p: {
            sr: [
              "Kod novogradnje i renoviranja osvetljenje je najbolje isplanirati pre malterisanja — tada predviđamo dublje razvodne kutije i nulti provodnik kod prekidača. U postojećim stanovima i kućama većinu posla obavljamo kroz postojeće kutije, bez štemovanja zidova."
            ],
            en: [
              "For new builds and renovations it is best to plan lighting before plastering — that is when we allow for deeper junction boxes and a neutral wire at the switch. In existing apartments and houses most of the work is done through the existing boxes, without chasing walls."
            ]
          }
        }
      ],
      includes: {
        sr: [
          "Obilazak objekta i plan rasporeda svetala i senzora",
          "Ugradnja pametnih releja, prekidača ili panela",
          "Senzori pokreta za hodnike, stepeništa i kupatila",
          "Scene i rasporedi po vašoj želji",
          "Povezivanje u Home Assistant i mobilnu aplikaciju",
          "Obuka za korišćenje i beleške o instalaciji"
        ],
        en: [
          "Site visit and a plan for lights and sensors",
          "Installation of smart relays, switches or panels",
          "Motion sensors for hallways, staircases and bathrooms",
          "Scenes and schedules set up to your preferences",
          "Connection to Home Assistant and the mobile app",
          "A walkthrough of the system and installation notes"
        ]
      },
      prices: ["light-point", "motion-sensor", "scene-panel"],
      automations: ["motion-light-camera", "door-light-notification"],
      faq: [
        {
          q: { sr: "Da li moram da menjam postojeće prekidače?", en: "Do I have to replace my existing switches?" },
          a: {
            sr: "Najčešće ne. Pametni relej se ugrađuje iza postojećeg prekidača, pa izgled zida ostaje isti. Prekidače menjamo samo ako želite drugačiji dizajn ili ako u kutiji nema dovoljno mesta.",
            en: "Usually not. The smart relay goes behind your existing switch, so the wall looks the same. We only replace switches if you want a different design or if there isn't enough room in the box."
          }
        },
        {
          q: { sr: "Šta se dešava ako nestane interneta ili Wi-Fi mreže?", en: "What happens if the internet or Wi-Fi goes down?" },
          a: {
            sr: "Prekidači u svakom slučaju rade normalno. Automatizacije na pokret i scene rade lokalno preko Home Assistant-a, pa nestanak interneta na njih ne utiče — jedino upravljanje van kuće čeka da se internet vrati.",
            en: "Switches always work normally. Motion automations and scenes run locally on Home Assistant, so an internet outage doesn't affect them — only remote control from outside the home waits for the internet to come back."
          }
        },
        {
          q: { sr: "Koliko košta pametno osvetljenje za stan?", en: "How much does smart lighting cost for an apartment?" },
          a: {
            sr: "Jedna pametna tačka osvetljenja okvirno košta {{price:light-point}}, a senzor pokreta {{price:motion-sensor}}. Paket Starter (do 6 tačaka osvetljenja, senzor pokreta i osnovne automatizacije) počinje od {{package:starter}}. Tačnu cenu dajemo posle besplatnog obilaska.",
            en: "One smart lighting point costs roughly {{price:light-point}} and a motion sensor {{price:motion-sensor}}. The Starter package (up to 6 lighting points, a motion sensor and basic automations) starts from {{package:starter}}. We confirm the exact price after a free site visit."
          }
        }
      ]
    },

    // ---------------------------------------------------------
    cctv: {
      title: {
        sr: "Video nadzor — ugradnja kamera u Nišu i Srbiji | Homely",
        en: "CCTV & video surveillance installation in Niš & Serbia | Homely"
      },
      description: {
        sr: "Ugradnja video nadzora za kuće, stanove, zgrade i firme: IP kamere, lokalno snimanje bez pretplate, pregled preko telefona i pametna detekcija ljudi. Niš i Srbija.",
        en: "CCTV installation for houses, apartments, buildings and businesses: IP cameras, local recording with no subscription, phone access and smart person detection. Niš and Serbia."
      },
      h1: {
        sr: "Video nadzor za kuće, zgrade i firme",
        en: "CCTV and video surveillance for homes, buildings and businesses"
      },
      intro: {
        sr: "Postavljamo sisteme video nadzora sa IP kamerama koji snimaju lokalno — na snimač ili server u vašem objektu, bez mesečne pretplate na oblak. Snimke gledate uživo i unazad preko telefona, a obaveštenje dobijate samo kada je zaista važno.",
        en: "We install IP camera systems that record locally — to a recorder or server on your premises, with no monthly cloud subscription. You watch live and recorded footage from your phone, and you only get notified when it actually matters."
      },
      sections: [
        {
          h: { sr: "Lokalno snimanje, bez pretplate", en: "Local recording, no subscription" },
          p: {
            sr: [
              "Snimci se čuvaju na NVR snimaču ili lokalnom serveru sa diskom odgovarajućeg kapaciteta, koji biramo prema broju kamera i željenom periodu čuvanja. Snimci ne napuštaju vaš objekat ako to sami ne želite, a sistem nastavlja da snima i kada nestane interneta."
            ],
            en: [
              "Footage is stored on an NVR or a local server with a disk sized for the number of cameras and how long you want to keep recordings. Your footage doesn't leave your property unless you want it to, and the system keeps recording when the internet goes down."
            ]
          }
        },
        {
          h: { sr: "Pametna detekcija umesto lažnih uzbuna", en: "Smart detection instead of false alarms" },
          p: {
            sr: [
              "Obična detekcija pokreta reaguje na senke, kišu i lišće. Zato koristimo detekciju objekata — kamera ili Frigate na lokalnom serveru razlikuje osobu, automobil i životinju, a zone detekcije podešavamo tako da vas sistem obaveštava samo za ulaz, dvorište ili parking, a ne za ulicu ispred kuće.",
              "Kamere povezujemo sa ostatkom pametne kuće: pokret kod ulaza noću može da upali svetlo na tremu i pošalje vam snimak na telefon, a režim odsustva pojačava osetljivost dok niste kod kuće."
            ],
            en: [
              "Basic motion detection reacts to shadows, rain and leaves. That's why we use object detection — the camera or Frigate on a local server tells a person from a car or an animal, and we set detection zones so you're only alerted about the entrance, yard or parking spot, not the street outside.",
              "Cameras are connected to the rest of the smart home: motion at the entrance at night can switch on the porch light and send a clip to your phone, and vacation mode raises sensitivity while you're away."
            ]
          }
        },
        {
          h: { sr: "Za koga je", en: "Who it's for" },
          p: {
            sr: [
              "Radimo video nadzor za porodične kuće i vikendice, ulaze i garaže stambenih zgrada, lokale, kancelarije i magacine. Za zgrade predlažemo rešenje u kome stanari imaju pristup samo kamerama zajedničkih prostorija, uz jasna pravila o čuvanju snimaka.",
              "Kamere postavljamo tako da pokrivaju vaš posed, a ne susedne prozore i javnu površinu više nego što je neophodno — to je pitanje privatnosti drugih, ali i propisa o zaštiti podataka o ličnosti."
            ],
            en: [
              "We install CCTV for family houses and weekend homes, apartment building entrances and garages, shops, offices and warehouses. For buildings we propose a setup where residents can only access cameras covering shared areas, with clear rules on how long footage is kept.",
              "We position cameras to cover your property rather than neighbours' windows or public space beyond what's necessary — that's about other people's privacy as well as data protection rules."
            ]
          }
        }
      ],
      includes: {
        sr: [
          "Obilazak i plan pozicija kamera i uglova snimanja",
          "Unutrašnje i spoljne IP kamere (IP66) sa noćnim snimanjem",
          "Kabliranje, napajanje preko mreže (PoE) i uredna montaža",
          "Snimač (NVR) ili lokalni server sa diskom",
          "Zone detekcije i obaveštenja na telefon",
          "Pregled snimaka uživo i unazad iz aplikacije"
        ],
        en: [
          "Site visit and a plan for camera positions and angles",
          "Indoor and outdoor IP cameras (IP66) with night vision",
          "Cabling, Power over Ethernet (PoE) and tidy mounting",
          "A recorder (NVR) or local server with storage",
          "Detection zones and phone notifications",
          "Live and recorded footage in the app"
        ]
      },
      prices: ["cam-indoor", "cam-outdoor", "nvr"],
      automations: ["motion-light-camera", "smoke-alarm-camera"],
      faq: [
        {
          q: { sr: "Koliko dugo se čuvaju snimci?", en: "How long is footage kept?" },
          a: {
            sr: "Zavisi od broja kamera, rezolucije i veličine diska. Najčešće se podešava čuvanje od 7 do 30 dana uz neprekidno snimanje, ili duže ako se snima samo kada postoji detekcija. Period dogovaramo pre ugradnje.",
            en: "It depends on the number of cameras, the resolution and the disk size. Most setups keep 7 to 30 days of continuous recording, or longer when recording only on detection. We agree on the period before installation."
          }
        },
        {
          q: { sr: "Mogu li da gledam kamere preko telefona?", en: "Can I watch the cameras on my phone?" },
          a: {
            sr: "Da. Snimke uživo i arhivu gledate iz aplikacije, kod kuće i van nje. Daljinski pristup podešavamo bezbedno, bez izlaganja kamera direktno internetu.",
            en: "Yes. You can watch live and recorded footage in the app, at home and away. Remote access is set up securely, without exposing the cameras directly to the internet."
          }
        },
        {
          q: { sr: "Koliko košta video nadzor za kuću?", en: "How much does CCTV for a house cost?" },
          a: {
            sr: "Unutrašnja kamera sa ugradnjom okvirno košta {{price:cam-indoor}}, spoljna {{price:cam-outdoor}}, a snimač sa podešavanjem {{price:nvr}}. Paket Home sa do 4 kamere i lokalnim snimanjem počinje od {{package:home}}.",
            en: "An indoor camera with installation costs roughly {{price:cam-indoor}}, an outdoor one {{price:cam-outdoor}}, and a recorder with setup {{price:nvr}}. The Home package with up to 4 cameras and local recording starts from {{package:home}}."
          }
        }
      ]
    },

    // ---------------------------------------------------------
    climate: {
      title: {
        sr: "Pametno grejanje i klima — termostati i automatizacija | Homely",
        en: "Smart heating & climate control — thermostats and automation | Homely"
      },
      description: {
        sr: "Pametni termostati, termostatske glave za radijatore i automatizacija klime na osnovu prisustva i rasporeda. Prijatna temperatura i manja potrošnja. Niš i Srbija.",
        en: "Smart thermostats, radiator valves and air-conditioning automation based on presence and schedules. A comfortable temperature and lower energy use. Niš and Serbia."
      },
      h1: {
        sr: "Pametno grejanje i upravljanje klimom",
        en: "Smart heating and climate control"
      },
      intro: {
        sr: "Grejanje i klima su najveći potrošači energije u većini domova. Kada rade prema rasporedu i prisustvu, umesto ceo dan, kuća je topla kada ste tu, a račun manji kada niste.",
        en: "Heating and air conditioning are the biggest energy users in most homes. When they follow your schedule and presence instead of running all day, the house is warm when you're there and the bill is lower when you're not."
      },
      sections: [
        {
          h: { sr: "Grejanje po prostorijama", en: "Room-by-room heating" },
          p: {
            sr: [
              "Na radijatore ugrađujemo pametne termostatske glave (TRV), a u prostorije senzore temperature i vlažnosti. Svaka soba dobija svoj raspored: spavaća soba se zagreva pred spavanje, kancelarija samo radnim danima, a sobe u kojima niko ne boravi drže se na nižoj temperaturi.",
              "Ako imate kotao na gas ili struju ili toplotnu pumpu, pametni termostat u većini slučajeva može da upravlja i samim izvorom grejanja, tako da se kotao ne uključuje kada nijedna prostorija ne traži toplotu."
            ],
            en: [
              "We fit smart thermostatic radiator valves (TRVs) and add temperature and humidity sensors to rooms. Each room gets its own schedule: the bedroom warms up before bedtime, the home office only on weekdays, and unused rooms are kept cooler.",
              "If you have a gas or electric boiler or a heat pump, a smart thermostat can in most cases control the heat source itself, so the boiler doesn't fire up when no room is asking for heat."
            ]
          }
        },
        {
          h: { sr: "Klima uređaji i ventilacija", en: "Air conditioning and ventilation" },
          p: {
            sr: [
              "Klima uređaje povezujemo preko infracrvenih kontrolera ili Wi-Fi modula, zavisno od modela. Klima se uključuje kada temperatura pređe zadati prag i gasi kada se postigne željena vrednost ili kada se otvori prozor. Ventilator u kupatilu može da radi prema vlažnosti, a ne samo dok je svetlo upaljeno."
            ],
            en: [
              "Air conditioners are connected through infrared controllers or Wi-Fi modules, depending on the model. The AC turns on when the temperature crosses a threshold and off when the target is reached or a window is opened. A bathroom fan can run based on humidity rather than only while the light is on."
            ]
          }
        },
        {
          h: { sr: "Prisustvo i režim odsustva", en: "Presence and away mode" },
          p: {
            sr: [
              "Sistem zna kada niko nije kod kuće — preko telefona ukućana ili senzora prisustva — i prebacuje grejanje u eko režim. Kada krenete kući, grejanje se ponovo uključuje. Tokom dužeg odsustva sistem drži minimalnu temperaturu i štiti instalacije od smrzavanja."
            ],
            en: [
              "The system knows when nobody is home — from household members' phones or presence sensors — and switches heating to eco mode. As you head home, the heating comes back on. During longer absences it keeps a minimum temperature and protects the pipes from freezing."
            ]
          }
        }
      ],
      includes: {
        sr: [
          "Procena sistema grejanja i klima uređaja",
          "Pametne termostatske glave za radijatore",
          "Senzori temperature i vlažnosti po prostorijama",
          "Upravljanje klimom preko IR ili Wi-Fi modula",
          "Rasporedi po prostorijama i režim odsustva",
          "Pregled temperature po prostorijama u aplikaciji"
        ],
        en: [
          "Assessment of your heating system and AC units",
          "Smart thermostatic radiator valves",
          "Temperature and humidity sensors per room",
          "AC control via IR or Wi-Fi modules",
          "Per-room schedules and away mode",
          "Room-by-room temperature overview in the app"
        ]
      },
      prices: ["thermostat", "temp-sensor"],
      automations: ["temperature-ac", "vacation-mode"],
      faq: [
        {
          q: { sr: "Da li pametne termostatske glave odgovaraju mojim radijatorima?", en: "Will smart valves fit my radiators?" },
          a: {
            sr: "Termostatske glave odgovaraju većini standardnih radijatorskih ventila, uz odgovarajući adapter. Model ventila proveravamo na licu mesta, pre ponude.",
            en: "Smart radiator valves fit most standard radiator valves with the right adapter. We check your valve model on site before quoting."
          }
        },
        {
          q: { sr: "Koliko može da se uštedi?", en: "How much can I save?" },
          a: {
            sr: "Ušteda zavisi od objekta, izolacije i navika, pa je ne obećavamo unapred. Najveći efekat daje to što se prazne prostorije više ne greju i što grejanje ne radi dok niko nije kod kuće.",
            en: "Savings depend on the property, insulation and habits, so we don't promise a number up front. The biggest effect comes from no longer heating empty rooms and not heating the house while nobody is home."
          }
        },
        {
          q: { sr: "Koliko košta pametno grejanje?", en: "How much does smart heating cost?" },
          a: {
            sr: "Pametni termostat ili termostatska glava okvirno košta {{price:thermostat}}, a senzor temperature i vlažnosti {{price:temp-sensor}}. Paket Home uključuje automatizaciju klime za do 3 zone i počinje od {{package:home}}.",
            en: "A smart thermostat or radiator valve costs roughly {{price:thermostat}}, and a temperature and humidity sensor {{price:temp-sensor}}. The Home package includes climate automation for up to 3 zones and starts from {{package:home}}."
          }
        }
      ]
    },

    // ---------------------------------------------------------
    access: {
      title: {
        sr: "Pametne brave, video interfoni i automatizacija kapije | Homely",
        en: "Smart locks, video intercoms & gate automation | Homely"
      },
      description: {
        sr: "Kontrola pristupa za kuće, zgrade i firme: pametne brave, video interfon, otvaranje kapije i garaže telefonom, privremeni kodovi za goste i majstore. Niš i Srbija.",
        en: "Access control for homes, buildings and businesses: smart locks, video intercom, opening gates and garages by phone, temporary codes for guests and tradespeople. Niš and Serbia."
      },
      h1: {
        sr: "Kontrola pristupa: pametne brave, interfoni i kapije",
        en: "Access control: smart locks, intercoms and gates"
      },
      intro: {
        sr: "Ključevi se gube, a kopije dele. Pametna brava, video interfon i automatizovana kapija daju vam pregled ko ulazi i kada, i mogućnost da otvorite vrata i kada niste kod kuće.",
        en: "Keys get lost and copies get handed around. A smart lock, video intercom and automated gate show you who comes in and when, and let you open the door even when you're not home."
      },
      sections: [
        {
          h: { sr: "Pametne brave", en: "Smart locks" },
          p: {
            sr: [
              "Ugrađujemo pametne brave i cilindre koji se otključavaju kodom, karticom, otiskom prsta ili telefonom, a mehanički ključ ostaje kao rezerva. Gostima, dadilji ili majstoru možete da date privremeni kod koji važi samo određenim danima, a u aplikaciji vidite svako otključavanje."
            ],
            en: [
              "We install smart locks and cylinders that unlock with a code, card, fingerprint or phone, with a mechanical key kept as a backup. You can give guests, a babysitter or a tradesperson a temporary code valid only on certain days, and every unlock shows up in the app."
            ]
          }
        },
        {
          h: { sr: "Video interfon, kapija i garaža", en: "Video intercom, gate and garage" },
          p: {
            sr: [
              "Video interfon prikazuje na telefonu ko zvoni, gde god da se nalazite, i omogućava da jednim dodirom otvorite kapiju ili ulazna vrata. Postojeće motore kapije i garažnih vrata najčešće povezujemo pametnim relejem, bez zamene motora.",
              "Kapija može da se otvori automatski kada se vaš automobil približi kući, a sistem vas obaveštava ako garažna vrata ostanu otvorena duže nego što treba."
            ],
            en: [
              "A video intercom shows who's ringing on your phone wherever you are and lets you open the gate or front door with one tap. Existing gate and garage door motors can usually be connected with a smart relay, without replacing the motor.",
              "The gate can open automatically as your car approaches home, and the system tells you if the garage door has been left open too long."
            ]
          }
        },
        {
          h: { sr: "Bezbednost na prvom mestu", en: "Security first" },
          p: {
            sr: [
              "Bravu biramo prema vratima i nivou zaštite koji vam je potreban, a pristup sistemu, kad god je moguće, podešavamo tako da ne zavisi od servera proizvođača. Kada nestane struje, brave rade na baterije, a mehanički ključ uvek otvara vrata."
            ],
            en: [
              "We choose the lock to suit your door and the level of protection you need, and wherever possible set up access so it doesn't depend on the manufacturer's servers. During a power cut the locks run on batteries, and the mechanical key always opens the door."
            ]
          }
        }
      ],
      includes: {
        sr: [
          "Procena vrata, kapije i postojeće instalacije",
          "Pametna brava ili cilindar sa rezervnim ključem",
          "Video interfon sa prikazom na telefonu",
          "Povezivanje motora kapije i garažnih vrata",
          "Privremeni kodovi i istorija ulazaka",
          "Povezivanje sa svetlima, alarmom i kamerama"
        ],
        en: [
          "Assessment of doors, gate and existing wiring",
          "Smart lock or cylinder with a backup key",
          "Video intercom with phone view",
          "Connecting gate and garage door motors",
          "Temporary codes and entry history",
          "Integration with lights, alarm and cameras"
        ]
      },
      prices: ["smart-lock", "intercom"],
      automations: ["door-light-notification"],
      faq: [
        {
          q: { sr: "Šta ako se isprazni baterija u bravi?", en: "What if the lock's battery runs out?" },
          a: {
            sr: "Brava na vreme upozorava na slabu bateriju, a većina modela ima i kontakt za rezervno napajanje spolja ili mehanički ključ, tako da zbog prazne baterije ne ostajete ispred zaključanih vrata.",
            en: "The lock warns you about a low battery well in advance, and most models also have an external emergency power contact or a mechanical key, so a flat battery won't leave you locked out."
          }
        },
        {
          q: { sr: "Mogu li da zadržim postojeći interfon u zgradi?", en: "Can I keep my building's existing intercom?" },
          a: {
            sr: "Često da. Zavisi od sistema interfona u zgradi — neke možemo da povežemo tako da poziv stiže na telefon, a za druge predlažemo zamenu. To proveravamo pri obilasku.",
            en: "Often yes. It depends on the building's intercom system — some can be connected so the call reaches your phone, others we'd recommend replacing. We check this during the site visit."
          }
        },
        {
          q: { sr: "Koliko košta pametna brava?", en: "How much does a smart lock cost?" },
          a: {
            sr: "Pametna brava sa ugradnjom okvirno košta {{price:smart-lock}}, a video interfon {{price:intercom}}. Paket Premium uključuje pametne brave, video interfon i automatizaciju kapije i počinje od {{package:premium}}.",
            en: "A smart lock with installation costs roughly {{price:smart-lock}}, and a video intercom {{price:intercom}}. The Premium package includes smart locks, a video intercom and gate automation and starts from {{package:premium}}."
          }
        }
      ]
    },

    // ---------------------------------------------------------
    network: {
      title: {
        sr: "Mreža i Wi-Fi za pametnu kuću i video nadzor | Homely",
        en: "Networking & Wi-Fi for smart homes and CCTV | Homely"
      },
      description: {
        sr: "Pouzdana kućna i poslovna mreža: Wi-Fi bez mrtvih zona, kablovi za kamere i odvojena mreža za pametne uređaje. Projektovanje i ugradnja u Nišu i Srbiji.",
        en: "Reliable home and business networks: Wi-Fi without dead zones, cabling for cameras and a separate network for smart devices. Design and installation in Niš and Serbia."
      },
      h1: {
        sr: "Mreža i Wi-Fi bez mrtvih zona",
        en: "Networking and Wi-Fi without dead zones"
      },
      intro: {
        sr: "Pametna kuća i video nadzor pouzdani su onoliko koliko je pouzdana mreža na kojoj rade. Ruter od provajdera retko pokriva celu kuću, dvorište i garažu — i retko podnosi desetine uređaja i nekoliko kamera istovremeno.",
        en: "A smart home and CCTV system are only as reliable as the network they run on. An ISP router rarely covers the whole house, yard and garage — and rarely copes with dozens of devices and several cameras at once."
      },
      sections: [
        {
          h: { sr: "Wi-Fi koji pokriva ceo objekat", en: "Wi-Fi that covers the whole property" },
          p: {
            sr: [
              "Umesto pojačivača signala koji prepolovljavaju brzinu, postavljamo pristupne tačke povezane kablom, na plafon ili zid, raspoređene prema rasporedu prostorija i debljini zidova. Telefon i laptop prelaze sa jedne tačke na drugu bez prekida, a signal stiže i do terase i dvorišta."
            ],
            en: [
              "Instead of range extenders that halve your speed, we install cable-connected access points on ceilings or walls, placed according to your room layout and wall thickness. Phones and laptops roam between them without dropping, and the signal reaches the terrace and yard."
            ]
          }
        },
        {
          h: { sr: "Kablovi za kamere i uređaje", en: "Cabling for cameras and devices" },
          p: {
            sr: [
              "Kamere, pristupne tačke i server najbolje rade na kablu. Postavljamo strukturno kabliranje sa obeleženim kablovima i PoE svičem, tako da jedan kabl kameri donosi i mrežu i napajanje. Ormarić sa opremom ostaje uredan i dokumentovan."
            ],
            en: [
              "Cameras, access points and the server work best on a cable. We install structured cabling with labelled cables and a PoE switch, so a single cable gives a camera both network and power. The equipment cabinet stays tidy and documented."
            ]
          }
        },
        {
          h: { sr: "Odvojena i bezbedna mreža", en: "A separate, secure network" },
          p: {
            sr: [
              "Pametne uređaje i kamere smeštamo u posebnu mrežu (VLAN), odvojenu od računara i telefona. Tako jeftin pametni uređaj sa slabom zaštitom ne može da pristupi vašim ličnim podacima, a kamere nisu direktno izložene internetu. Za goste pravimo posebnu Wi-Fi mrežu."
            ],
            en: [
              "Smart devices and cameras go on a separate network (VLAN), isolated from computers and phones. That way a cheap smart gadget with weak security can't reach your personal data, and cameras aren't exposed directly to the internet. Guests get their own Wi-Fi network."
            ]
          }
        }
      ],
      includes: {
        sr: [
          "Merenje signala i plan pokrivenosti",
          "Pristupne tačke (najčešće Ubiquiti) povezane kablom",
          "Strukturno kabliranje i PoE svič",
          "Odvojene mreže za uređaje, kamere i goste",
          "Bezbedan daljinski pristup sistemu",
          "Dokumentacija mreže i lozinki"
        ],
        en: [
          "Signal survey and coverage plan",
          "Cable-connected access points (usually Ubiquiti)",
          "Structured cabling and a PoE switch",
          "Separate networks for devices, cameras and guests",
          "Secure remote access to the system",
          "Network and password documentation"
        ]
      },
      prices: ["network-ap"],
      automations: [],
      faq: [
        {
          q: { sr: "Da li mi treba novi internet paket?", en: "Do I need a new internet plan?" },
          a: {
            sr: "Najčešće ne. Problem je obično u pokrivenosti i opremi unutar kuće, a ne u brzini paketa. Postojeći priključak provajdera zadržavamo, a mrežu iza njega gradimo kako treba.",
            en: "Usually not. The problem is usually coverage and the equipment inside the house, not the speed of the plan. We keep your existing ISP connection and build the network behind it properly."
          }
        },
        {
          q: { sr: "Može li dobar Wi-Fi bez novih kablova?", en: "Can I get good Wi-Fi without new cables?" },
          a: {
            sr: "Može, uz mesh sistem koji se povezuje bežično, ali je kablovska veza između pristupnih tačaka uvek stabilnija i brža. Kablove često provlačimo kroz postojeće kanale ili spušteni plafon.",
            en: "Yes, with a wireless mesh system, but a cable link between access points is always more stable and faster. We often run cables through existing conduits or a suspended ceiling."
          }
        },
        {
          q: { sr: "Koliko košta podešavanje mreže?", en: "How much does a network setup cost?" },
          a: {
            sr: "Podešavanje mreže okvirno košta {{price:network-ap}} po pristupnoj tački. Broj tačaka određujemo merenjem signala na licu mesta.",
            en: "A network setup costs roughly {{price:network-ap}} per access point. We determine how many access points you need by measuring the signal on site."
          }
        }
      ]
    },

    // ---------------------------------------------------------
    homeassistant: {
      title: {
        sr: "Home Assistant instalacija i podešavanje u Srbiji | Homely",
        en: "Home Assistant installation & setup in Serbia | Homely"
      },
      description: {
        sr: "Instalacija i podešavanje Home Assistant-a: lokalni server, Zigbee uređaji, automatizacije, kontrolna tabla i daljinski pristup. Pametna kuća koja radi i bez interneta.",
        en: "Home Assistant installation and setup: local server, Zigbee devices, automations, dashboards and remote access. A smart home that keeps working without the internet."
      },
      h1: {
        sr: "Home Assistant instalacija i podešavanje",
        en: "Home Assistant installation and setup"
      },
      intro: {
        sr: "Home Assistant je otvorena platforma koja povezuje uređaje različitih proizvođača u jedan sistem i pokreće automatizacije lokalno, u vašem domu. Na njemu gradimo svaku instalaciju — a podešavamo ga i onima koji već imaju uređaje i žele da sve proradi zajedno.",
        en: "Home Assistant is an open platform that brings devices from different manufacturers into one system and runs automations locally, in your home. Every installation we do is built on it — and we also set it up for people who already own devices and want everything to work together."
      },
      sections: [
        {
          h: { sr: "Zašto lokalno", en: "Why local" },
          p: {
            sr: [
              "Većina pametnih uređaja iz prodavnice radi preko oblaka proizvođača: kada nestane interneta ili proizvođač ugasi servis, aplikacija prestaje da radi. Home Assistant radi na malom serveru u vašem objektu, pa svetla na pokret, alarmi i rasporedi rade i bez interneta, a podaci ostaju kod vas."
            ],
            en: [
              "Most off-the-shelf smart devices run through the manufacturer's cloud: when the internet drops or the manufacturer shuts the service down, the app stops working. Home Assistant runs on a small server on your premises, so motion lights, alarms and schedules work without the internet, and your data stays with you."
            ]
          }
        },
        {
          h: { sr: "Jedan sistem za sve uređaje", en: "One system for every device" },
          p: {
            sr: [
              "Shelly releji, Aqara i Xiaomi senzori, Sonoff utičnice, kamere, klima uređaji i televizori — sve se vidi u jednoj aplikaciji i može da se poveže u zajedničke automatizacije. Zigbee uređaje povezujemo preko Zigbee2MQTT-a, bez posebnog haba za svaki brend."
            ],
            en: [
              "Shelly relays, Aqara and Xiaomi sensors, Sonoff plugs, cameras, air conditioners and TVs — everything shows up in one app and can be linked into shared automations. Zigbee devices are connected through Zigbee2MQTT, with no separate hub for each brand."
            ]
          }
        },
        {
          h: { sr: "Šta podešavamo", en: "What we set up" },
          p: {
            sr: [
              "Instaliramo Home Assistant na namenski uređaj, povezujemo vaše uređaje, pravimo preglednu kontrolnu tablu za telefon i zidni panel i podešavamo automatizacije prema vašim navikama, kao i bezbedan daljinski pristup. Postavljamo i automatske rezervne kopije, da se podešavanja nikada ne izgube.",
              "Ako ste sa Home Assistant-om već počeli sami, možemo da preuzmemo postojeću instalaciju, sredimo je i dodamo ono što nedostaje."
            ],
            en: [
              "We install Home Assistant on dedicated hardware, connect your devices, build a clear dashboard for your phone and wall panel, and set up automations around your routines along with secure remote access. We also configure automatic backups so your setup is never lost.",
              "If you've already started with Home Assistant yourself, we can take over the existing installation, tidy it up and add what's missing."
            ]
          }
        }
      ],
      includes: {
        sr: [
          "Namenski server za Home Assistant",
          "Zigbee koordinator i povezivanje uređaja (Zigbee2MQTT)",
          "Kontrolna tabla za telefon, tablet ili zidni panel",
          "Automatizacije prema vašim navikama",
          "Bezbedan daljinski pristup i obaveštenja",
          "Automatske rezervne kopije podešavanja"
        ],
        en: [
          "Dedicated Home Assistant server",
          "Zigbee coordinator and device pairing (Zigbee2MQTT)",
          "Dashboard for phone, tablet or wall panel",
          "Automations built around your routines",
          "Secure remote access and notifications",
          "Automatic configuration backups"
        ]
      },
      prices: ["ha-base", "automation"],
      automations: ["motion-light-camera", "vacation-mode"],
      faq: [
        {
          q: { sr: "Da li se za Home Assistant plaća pretplata?", en: "Do I have to pay a subscription for Home Assistant?" },
          a: {
            sr: "Ne. Home Assistant je besplatan softver otvorenog koda. Postoji i opciona plaćena usluga Home Assistant Cloud za jednostavniji daljinski pristup, ali nije obavezna — daljinski pristup možemo da podesimo i bez nje.",
            en: "No. Home Assistant is free, open-source software. There is an optional paid Home Assistant Cloud service for easier remote access, but it isn't required — we can set up remote access without it."
          }
        },
        {
          q: { sr: "Mogu li da zadržim uređaje koje već imam?", en: "Can I keep the devices I already have?" },
          a: {
            sr: "U većini slučajeva da. Home Assistant podržava hiljade uređaja različitih proizvođača. Pre početka proveravamo vašu opremu i kažemo šta može da se poveže lokalno, a šta samo preko oblaka.",
            en: "In most cases, yes. Home Assistant supports thousands of devices from different manufacturers. Before we start we check your equipment and tell you what can be connected locally and what only works through the cloud."
          }
        },
        {
          q: { sr: "Koliko košta podešavanje Home Assistant-a?", en: "How much does a Home Assistant setup cost?" },
          a: {
            sr: "Osnovna konfiguracija Home Assistant-a košta {{price:ha-base}}, a svaki dodatni prilagođeni scenario automatizacije {{price:automation}}. Podešavanje Home Assistant-a uključeno je u sve pakete.",
            en: "A base Home Assistant configuration costs {{price:ha-base}}, and each additional custom automation scenario {{price:automation}}. Home Assistant setup is included in every package."
          }
        }
      ]
    },

    // ---------------------------------------------------------
    leak: {
      title: {
        sr: "Zaštita od curenja vode — senzori i automatski ventil | Homely",
        en: "Water leak protection — sensors and automatic shut-off valve | Homely"
      },
      description: {
        sr: "Senzori curenja vode i motorni ventil koji automatski zatvara dovod vode. Zaštita kuhinje, kupatila, kotlarnice i vikendice od poplave. Ugradnja u Nišu i Srbiji.",
        en: "Water leak sensors and a motorised valve that automatically shuts off the water supply. Protects kitchens, bathrooms, boiler rooms and holiday homes from flooding. Installed in Niš and Serbia."
      },
      h1: {
        sr: "Zaštita od curenja vode i poplave",
        en: "Water leak and flood protection"
      },
      intro: {
        sr: "Pukla cev ispod sudopere ili crevo veš-mašine mogu za nekoliko sati da unište parket, nameštaj i plafon komšije ispod. Senzor curenja sa automatskim ventilom zatvara vodu za nekoliko sekundi — i kada niste kod kuće.",
        en: "A burst pipe under the sink or a split washing machine hose can ruin floors, furniture and the ceiling of the neighbour below within hours. A leak sensor with an automatic valve shuts off the water within seconds — even when you're not home."
      },
      sections: [
        {
          h: { sr: "Kako radi", en: "How it works" },
          p: {
            sr: [
              "Male bežične senzore postavljamo na mesta gde voda najčešće curi: ispod sudopere, veš-mašine i mašine za sudove, bojlera, kotla i u kupatilu. Na glavni dovod vode ugrađujemo motorni ventil. Kada senzor oseti vodu, ventil se zatvara, oglašava se sirena, a vi dobijate obaveštenje na telefon."
            ],
            en: [
              "We place small wireless sensors where leaks usually start: under the sink, washing machine and dishwasher, by the water heater and boiler, and in the bathroom. A motorised valve is fitted on the main water supply. When a sensor detects water the valve closes, a siren sounds and you get a notification on your phone."
            ]
          }
        },
        {
          h: { sr: "Vikendice i stanovi za izdavanje", en: "Holiday homes and rentals" },
          p: {
            sr: [
              "Najveća šteta nastaje kada niko nije tu da primeti curenje. U vikendicama i stanovima za izdavanje sistem može i da zatvori vodu automatski kada objekat ostane prazan, i da prati temperaturu kako bi vas zimi upozorio na opasnost od smrzavanja cevi."
            ],
            en: [
              "The worst damage happens when nobody is there to notice. In holiday homes and rental flats the system can also shut off the water automatically when the property is empty, and monitor temperature to warn you about the risk of frozen pipes in winter."
            ]
          }
        },
        {
          h: { sr: "Radi i bez interneta", en: "Works without the internet" },
          p: {
            sr: [
              "Senzori i ventil komuniciraju lokalno preko Home Assistant-a, pa zaštita radi i kada nestane interneta. Sistem redovno proverava baterije senzora i na vreme vam javlja kada neku treba zameniti."
            ],
            en: [
              "Sensors and the valve talk locally through Home Assistant, so protection works even when the internet is down. The system checks sensor batteries regularly and tells you in good time when one needs replacing."
            ]
          }
        }
      ],
      includes: {
        sr: [
          "Procena mesta sa rizikom od curenja",
          "Bežični senzori curenja vode",
          "Motorni ventil na glavnom dovodu vode",
          "Sirena i obaveštenje na telefon",
          "Automatsko zatvaranje vode u režimu odsustva",
          "Praćenje baterija i ispravnosti senzora"
        ],
        en: [
          "Assessment of leak-risk spots",
          "Wireless water leak sensors",
          "Motorised valve on the main water supply",
          "Siren and phone notification",
          "Automatic shut-off in away mode",
          "Battery and sensor health monitoring"
        ]
      },
      prices: ["leak-valve"],
      automations: ["vacation-mode"],
      faq: [
        {
          q: { sr: "Da li za ugradnju ventila treba vodoinstalater?", en: "Do I need a plumber to fit the valve?" },
          a: {
            sr: "Motorni ventil se najčešće postavlja na postojeći ventil glavnog dovoda. Ako je potrebna izmena cevi, radove usklađujemo sa vodoinstalaterom, a ventil sami povezujemo i podešavamo.",
            en: "The motorised valve is usually mounted on the existing main shut-off valve. If the pipework needs changing, we coordinate with a plumber, and we connect and configure the valve ourselves."
          }
        },
        {
          q: { sr: "Šta ako senzor javi lažnu uzbunu?", en: "What if a sensor raises a false alarm?" },
          a: {
            sr: "Senzori reaguju samo na direktan dodir sa vodom, pa su lažne uzbune retke. Posle provere ventil se ponovo otvara iz aplikacije ili ručno.",
            en: "The sensors only react to direct contact with water, so false alarms are rare. After checking, you reopen the valve from the app or by hand."
          }
        },
        {
          q: { sr: "Koliko košta zaštita od curenja?", en: "How much does leak protection cost?" },
          a: {
            sr: "Senzor curenja sa motornim ventilom okvirno košta {{price:leak-valve}}. Paket Home uključuje senzore curenja u kuhinji i kupatilu i počinje od {{package:home}}.",
            en: "A leak sensor with a motorised valve costs roughly {{price:leak-valve}}. The Home package includes leak sensors in the kitchen and bathroom and starts from {{package:home}}."
          }
        }
      ]
    },

    // ---------------------------------------------------------
    support: {
      title: {
        sr: "Održavanje i podrška za pametnu kuću i video nadzor | Homely",
        en: "Maintenance & support for smart homes and CCTV | Homely"
      },
      description: {
        sr: "Daljinski nadzor sistema, ažuriranja, rezervne kopije i pomoć kada nešto ne radi. Podrška za pametne kuće i video nadzor, kao i za postojeće Home Assistant sisteme.",
        en: "Remote system monitoring, updates, backups and help when something stops working. Support for smart homes and CCTV, as well as existing Home Assistant setups."
      },
      h1: {
        sr: "Održavanje i podrška posle instalacije",
        en: "Maintenance and support after installation"
      },
      intro: {
        sr: "Pametna kuća nije uređaj koji se kupi i zaboravi. Softver se ažurira, baterije se troše, a navike ukućana menjaju. Održavanje znači da sistem i posle godinu ili dve radi jednako pouzdano kao prvog dana.",
        en: "A smart home isn't something you buy and forget. Software gets updated, batteries run down and household routines change. Maintenance means the system works as reliably after a year or two as it did on day one."
      },
      sections: [
        {
          h: { sr: "Šta obuhvata", en: "What's covered" },
          p: {
            sr: [
              "Stanje sistema pratimo na daljinu: da li su server i kamere dostupni, da li se snimci čuvaju, da li neki senzor ima slabu bateriju. Ažuriranja Home Assistant-a i uređaja instaliramo kontrolisano, posle provere, kako ažuriranje ne bi pokvarilo postojeće automatizacije."
            ],
            en: [
              "We monitor the system remotely: whether the server and cameras are reachable, whether recordings are being saved, whether any sensor has a low battery. Home Assistant and device updates are installed in a controlled way, after checking, so an update doesn't break existing automations."
            ]
          }
        },
        {
          h: { sr: "Kada nešto ne radi", en: "When something stops working" },
          p: {
            sr: [
              "Većinu problema rešavamo na daljinu, bez dolaska. Ako je potrebna zamena uređaja ili intervencija na licu mesta, dogovaramo termin. Pišite nam na email ili Telegram — odgovaramo u toku radnog vremena."
            ],
            en: [
              "Most issues are resolved remotely, without a visit. If a device needs replacing or someone needs to come out, we arrange a time. Email us or message us on Telegram — we respond during working hours."
            ]
          }
        },
        {
          h: { sr: "Izmene i proširenja", en: "Changes and extensions" },
          p: {
            sr: [
              "Možemo da napravimo i manje izmene: novi raspored grejanja, drugačiju scenu osvetljenja ili dodatno obaveštenje. Kada poželite novu sobu, kameru ili senzor, sistem proširujemo bez zamene postojeće opreme."
            ],
            en: [
              "We can also make smaller changes: a new heating schedule, a different lighting scene or an extra notification. When you want to add a room, camera or sensor, we extend the system without replacing existing equipment."
            ]
          }
        }
      ],
      includes: {
        sr: [
          "Daljinski nadzor servera, kamera i senzora",
          "Kontrolisana ažuriranja softvera i uređaja",
          "Redovne rezervne kopije podešavanja",
          "Upozorenja na slabe baterije i kvarove",
          "Pomoć preko emaila i Telegrama",
          "Proširenje sistema po potrebi"
        ],
        en: [
          "Remote monitoring of server, cameras and sensors",
          "Controlled software and device updates",
          "Regular configuration backups",
          "Alerts for low batteries and faults",
          "Help by email and Telegram",
          "System extensions when you need them"
        ]
      },
      prices: ["monitoring"],
      automations: [],
      faq: [
        {
          q: { sr: "Da li je podrška uključena u pakete?", en: "Is support included in the packages?" },
          a: {
            sr: "Da. Paket Home uključuje godinu dana daljinskog nadzora i podrške, a paket Premium dve godine. Posle toga podrška može da se nastavi na mesečnom nivou.",
            en: "Yes. The Home package includes one year of remote monitoring and support, and the Premium package two years. After that, support can continue on a monthly basis."
          }
        },
        {
          q: { sr: "Da li održavate sisteme koje niste vi instalirali?", en: "Do you maintain systems you didn't install?" },
          a: {
            sr: "Da, ako je sistem zasnovan na Home Assistant-u ili na uređajima koje možemo lokalno da povežemo. Prvo pregledamo postojeću instalaciju i kažemo šta treba srediti.",
            en: "Yes, if the system is based on Home Assistant or on devices we can connect locally. We review the existing installation first and tell you what needs sorting out."
          }
        },
        {
          q: { sr: "Koliko košta održavanje?", en: "How much does maintenance cost?" },
          a: {
            sr: "Mesečni daljinski nadzor košta {{price:monitoring}}. Intervencije na licu mesta i proširenja dogovaramo posebno.",
            en: "Monthly remote monitoring costs {{price:monitoring}}. On-site visits and extensions are quoted separately."
          }
        }
      ]
    }
  },

  // ---------------------------------------------------------
  // СТРАНИЦА НИША (локальное SEO)
  // ---------------------------------------------------------
  region: {
    slug: { sr: "pametna-kuca-nis", en: "smart-home-nis" },
    title: {
      sr: "Pametna kuća i video nadzor u Nišu | Homely",
      en: "Smart home & CCTV installation in Niš, Serbia | Homely"
    },
    description: {
      sr: "Ugradnja pametne kuće i video nadzora u Nišu i okolini: pametno osvetljenje, kamere, grejanje, brave i Home Assistant. Besplatan obilazak objekta i jasna ponuda.",
      en: "Smart home and CCTV installation in Niš and the surrounding area: smart lighting, cameras, heating, locks and Home Assistant. Free site visit and a clear quote."
    },
    h1: {
      sr: "Pametna kuća i video nadzor u Nišu",
      en: "Smart home and CCTV installation in Niš"
    },
    intro: {
      sr: "Homely je iz Niša. Projektujemo i ugrađujemo pametne kuće, video nadzor i kućne mreže za stanove, porodične kuće, vikendice i firme u Nišu i okolini — a za veće projekte radimo i u ostatku Srbije.",
      en: "Homely is based in Niš. We design and install smart homes, CCTV and home networks for apartments, family houses, weekend homes and businesses in Niš and the surrounding area — and for larger projects, elsewhere in Serbia too."
    },
    sections: [
      {
        h: { sr: "Lokalno — i doslovno", en: "Local — literally" },
        p: {
          sr: [
            "Pošto smo u Nišu, obilazak objekta je besplatan i lako ga zakazujemo, a kada nešto zatreba posle ugradnje, ne čekate da majstor dođe iz drugog grada.",
            "Lokalni smo i u tehničkom smislu: sistemi koje ugrađujemo rade na Home Assistant-u u vašem objektu, a ne preko stranih servera. Svetla, grejanje i alarmi rade i kada nestane interneta."
          ],
          en: [
            "Because we're in Niš, the site visit is free and easy to arrange, and if you need anything after installation you're not waiting for someone to come from another city.",
            "We're local in the technical sense too: the systems we install run on Home Assistant on your premises, not on foreign servers. Lights, heating and alarms keep working when the internet goes down."
          ]
        }
      },
      {
        h: { sr: "Stan u novogradnji ili starija kuća", en: "New-build flat or older house" },
        p: {
          sr: [
            "Ako kupujete stan u novogradnji, to je idealan trenutak da se pametno osvetljenje, mreža i kamere isplaniraju pre završnih radova — tada je ugradnja najjednostavnija i najjeftinija.",
            "U starijim kućama i stanovima biramo bežična rešenja i koristimo postojeće razvodne kutije, kako bi štemovanja bilo što manje. Mnogo toga može da se uradi bez ikakvih građevinskih radova."
          ],
          en: [
            "If you're buying a new-build apartment, that's the ideal moment to plan smart lighting, networking and cameras before the finishing works — that's when installation is simplest and cheapest.",
            "In older houses and apartments we choose wireless solutions and use the existing junction boxes to keep wall chasing to a minimum. A lot can be done without any building work at all."
          ]
        }
      }
    ],
    areasTitle: { sr: "Gde radimo", en: "Where we work" },
    areasLead: {
      sr: "Dolazimo na teritoriji grada Niša i u okolna mesta:",
      en: "We cover the city of Niš and nearby towns:"
    },
    // Проверьте и поправьте список под свой реальный район работы
    areas: {
      sr: ["Niš — Medijana, Palilula, Pantelej, Crveni Krst", "Niška Banja", "Aleksinac", "Doljevac", "Merošina", "Gadžin Han", "Svrljig"],
      en: ["Niš — Medijana, Palilula, Pantelej, Crveni Krst", "Niška Banja", "Aleksinac", "Doljevac", "Merošina", "Gadžin Han", "Svrljig"]
    },
    areasNote: {
      sr: "Za veće projekte dogovaramo dolazak i u druge delove Srbije.",
      en: "For larger projects we also travel to other parts of Serbia."
    },
    faq: [
      {
        q: { sr: "Da li je obilazak objekta u Nišu besplatan?", en: "Is the site visit in Niš free?" },
        a: {
          sr: "Da. Dolazimo, pogledamo objekat i razgovaramo o tome šta vam je potrebno, bez obaveze. Posle obilaska u roku od 48 sati dobijate pisanu ponudu sa spiskom uređaja i cenama.",
          en: "Yes. We come over, look at the property and talk through what you need, with no obligation. Within 48 hours of the visit you receive a written proposal with a device list and prices."
        }
      },
      {
        q: { sr: "Koliko traje ugradnja?", en: "How long does installation take?" },
        a: {
          sr: "Paket Starter obično se ugradi za jedan dan. Paketi Home i Premium obično traju 2–4 dana, u zavisnosti od veličine objekta i potrebe za novim kablovima.",
          en: "A Starter package is usually installed in one day. Home and Premium packages usually take 2–4 days, depending on the size of the property and whether new cabling is needed."
        }
      },
      {
        q: { sr: "Da li radite i za firme?", en: "Do you work with businesses too?" },
        a: {
          sr: "Da. Za lokale, kancelarije i magacine radimo video nadzor, kontrolu pristupa, mrežu i automatizaciju osvetljenja i grejanja.",
          en: "Yes. For shops, offices and warehouses we install CCTV, access control, networking and lighting and heating automation."
        }
      }
    ]
  }
};
