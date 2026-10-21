# Homely — сайт компании (Smart Home & CCTV Integration)

Статический двуязычный сайт (сербский — основной, английский — `/en/`).
Чистый HTML5 + CSS3 + Vanilla JS, без фреймворков и бэкенда.

Все данные (цены, контакты, услуги, FAQ, автоматизации, бренды, соцсети,
SEO) хранятся в `assets/js/config.js`, длинные тексты страниц услуг и
страницы Ниша — в `assets/js/pages-content.js`. Из них небольшой
скрипт **`tools/build-site.js`** генерирует готовые HTML-страницы, в
которых весь текст уже есть в разметке — так Google видит и сербскую, и
английскую версию без выполнения JavaScript.

## 0. Главное правило: после правок — пересобрать

```bash
node tools/build-site.js     # из корня репозитория
```

Нужен только Node.js (любая современная версия), никаких `npm install`.
Скрипт перезаписывает HTML-страницы, `sitemap.xml` и `robots.txt`.
**Не редактируйте `.html` вручную** — изменения пропадут при следующей
сборке. Сгенерированные файлы коммитятся в репозиторий, поэтому на
хостинге (Netlify) никакой сборки не требуется.

Для локального просмотра нужен любой статический сервер (открытие файлов
двойным кликом работает частично — ссылки вида `../en/` указывают на
папки), например:

```bash
npx serve homely-site        # или: python -m http.server -d homely-site
```

## Структура проекта

```
tools/build-site.js            Генератор страниц (вне папки сайта, не публикуется)
homely-site/                   ← эта папка публикуется
├── index.html                 Главная (sr)              ┐
├── services.html              Услуги (sr)               │
├── services/*.html            Страница каждой услуги    │
├── pametna-kuca-nis.html      Страница Ниша (sr)        │ генерируются
├── pricing.html, automations.html, faq.html, contacts.html
├── 404.html                                             │
├── en/…                       Те же страницы на английском
├── sitemap.xml, robots.txt                              ┘
├── nginx.conf                 Пример конфигурации Nginx
├── README.md
└── assets/
    ├── css/style.css          Все стили
    ├── js/
    │   ├── config.js          Данные сайта (источник для сборки)
    │   ├── pages-content.js   Тексты страниц услуг и Ниша (источник для сборки)
    │   ├── i18n-strings.js    Тексты интерфейса на SR/EN (источник для сборки)
    │   ├── icons.js           SVG-иконки (источник для сборки)
    │   └── main.js            Единственный скрипт в браузере: тема, меню,
    │                          FAQ, анимации, форма
    ├── img/                   SVG-заглушки (OG-обложка, иллюстрации)
    └── icons/                 favicon.svg
```

Папки `en/` и `services/` генерируются целиком и очищаются при каждой
сборке — не кладите туда файлы вручную.

## 1. Публикация

**Netlify** (текущий хостинг): опубликуйте папку `homely-site` как есть
(Publish directory = `homely-site`, Build command — пусто). Перед
публикацией не забудьте пересобрать и закоммитить страницы.

**Nginx**: скопируйте содержимое `homely-site` на сервер и подключите
`nginx.conf`:

```bash
scp -r homely-site/* user@server:/var/www/html/
sudo cp nginx.conf /etc/nginx/sites-available/homely
sudo ln -s /etc/nginx/sites-available/homely /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Конфиг рассчитан на тестовую среду (только HTTP). Для продакшена добавьте
HTTPS: `sudo certbot --nginx -d ваш-домен`.

## 2. Изменение цен

В `assets/js/config.js`:

- **Пакеты** — блок `packages: [...]` (`price` — число, `currency`).
- **Полный прайс-лист** — блок `priceList: [...]`. У каждой позиции есть
  `id` — по нему цена выводится на страницах услуг и в их текстах.

В текстах `pages-content.js` цены пишутся как `{{price:cam-indoor}}` или
`{{package:home}}` — при сборке они заменяются на значения из прайса, так
что достаточно поменять цену в одном месте и пересобрать.

## 3. Изменение контактов

Блок `contact: {...}` в `assets/js/config.js` (email, город, часы работы,
ссылка на карту Google Maps). Соцсети — блок `social: {...}`; если ссылку
оставить пустой (`""`), кнопка будет показана серой и неактивной.

Сайт намеренно не показывает телефон и не использует WhatsApp/Viber —
каналы связи: email (кнопки `mailto:` и форма) и Telegram.

## 4. Страницы услуг и добавление новой услуги

1. В `config.js`, блок `services: [...]`, добавьте объект:
   ```js
   {
     id: "solar",                                    // ключ текста в pages-content.js
     slug: { sr: "solarni-paneli", en: "solar-panels" }, // адрес страницы
     icon: "sun",                                    // иконка из icons.js
     title: { en: "Solar monitoring", sr: "Praćenje solarnih panela" },
     desc:  { en: "Short card text", sr: "Kratak tekst kartice" }
   }
   ```
2. В `pages-content.js`, блок `services`, добавьте текст страницы с тем
   же ключом (`solar: { title, description, h1, intro, sections,
   includes, prices, automations, faq }`) — по образцу существующих.
3. Пересоберите. Страница появится на `/services/solarni-paneli.html` и
   `/en/services/solar-panels.html`, в меню услуг, подвале и `sitemap.xml`.

Список иконок — ключи `ICONS` в `assets/js/icons.js`.

## 5. SEO — что делает сборка

- **Отдельные адреса для языков**: сербский в корне, английский в `/en/`.
  На каждой странице — `canonical`, взаимные `hreflang` (`sr`, `en`,
  `x-default` → сербская версия) и правильный `<html lang>`.
- **Весь текст в HTML** — заголовки, услуги, цены, FAQ видны поисковикам
  без выполнения JavaScript.
- **`<title>` и `description`** — из `CONFIG.seo.pages` (основные
  страницы) и из `pages-content.js` (услуги и Ниш).
- **Schema.org (JSON-LD)**: компания (`HomeAndConstructionBusiness`, Ниш),
  а на страницах услуг — `Service` и хлебные крошки (`BreadcrumbList`).
- **`sitemap.xml`** со всеми страницами на обоих языках и ссылками
  `hreflang`.
- **Google Search Console**: код подтверждения хранится в
  `CONFIG.seo.googleSiteVerification` и выводится на всех страницах.

## 6. Добавление фотографий (вместо SVG-заглушек)

Положите сжатые `.jpg`/`.webp` (до ~200–400 КБ) в `assets/img/`. Для
OG-обложки (превью ссылки в соцсетях) нужен `og-cover.jpg` 1200×630 —
обновите путь в `CONFIG.seo.ogImage` и пересоберите.

## 7. Добавление нового языка

1. Добавьте ключ языка (например, `de`) во все объекты `{ en, sr }` в
   `config.js`, `i18n-strings.js` и `pages-content.js` (там, где перевода
   нет, будет использован английский текст).
2. В `tools/build-site.js` добавьте язык в `LANGS` и, при необходимости,
   настройте `<html lang>` и `og:locale` в функции `layout()`.
3. Пересоберите — появится папка `/de/`, переключатель языка и `hreflang`
   обновятся автоматически.

## Известные ограничения

- Форма на `contacts.html` отправляет данные через `mailto:` — открывается
  почтовый клиент посетителя с готовым письмом. Работает без бэкенда, но
  часть посетителей (с почтой только в браузере) не завершит отправку. Для
  надёжной доставки можно подключить Formspree или serverless-функцию в
  `initContactForm()` (`assets/js/main.js`).
- OG-обложка — SVG-заглушка, превью ссылок в соцсетях может не
  отображаться (см. раздел 6).
