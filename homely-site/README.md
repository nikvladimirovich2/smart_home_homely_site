# Homely — сайт компании (Smart Home & CCTV Integration)

Статический двуязычный (EN/SR) сайт-визитка. Чистый HTML5 + CSS3 + Vanilla JS,
без сборщиков, фреймворков и бэкенда. Все переменные данные (цены, контакты,
услуги, FAQ, отзывы, автоматизации, бренды, соцсети, SEO) хранятся в одном
файле — `assets/js/config.js`.

## Структура проекта

```
├── index.html            Главная
├── services.html         Услуги + процесс работы
├── pricing.html           Пакеты + полный прайс-лист
├── automations.html      Примеры автоматизаций (схемы)
├── portfolio.html        Портфолио проектов
├── contacts.html         Контакты + форма (демо, без бэкенда)
├── faq.html               Частые вопросы
├── 404.html                Страница "не найдено"
├── robots.txt
├── sitemap.xml
├── nginx.conf              Пример конфигурации Nginx
├── README.md
└── assets/
    ├── css/style.css      Все стили (токены, компоненты, адаптив)
    ├── js/
    │   ├── config.js       ЕДИНЫЙ источник данных — см. ниже
    │   ├── i18n-strings.js Тексты интерфейса (не данные) на EN/SR
    │   ├── icons.js         Встроенная библиотека SVG-иконок
    │   └── main.js          Логика: язык, тема, рендер секций, формы
    ├── img/                 SVG-заглушки (портфолио, OG-обложка, иллюстрации)
    └── icons/               favicon.svg
```

## 1. Публикация на сервере с Nginx

1. Скопируйте содержимое папки проекта на сервер, например:
   ```bash
   scp -r ./* user@server:/var/www/html/
   ```
   или клонируйте/распакуйте архив прямо в `/var/www/html`.

2. Убедитесь, что права на файлы корректны:
   ```bash
   sudo chown -R www-data:www-data /var/www/html
   sudo find /var/www/html -type d -exec chmod 755 {} \;
   sudo find /var/www/html -type f -exec chmod 644 {} \;
   ```

3. Подключите конфигурацию из `nginx.conf`:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/homely
   sudo ln -s /etc/nginx/sites-available/homely /etc/nginx/sites-enabled/
   sudo nginx -t          # проверка синтаксиса
   sudo systemctl reload nginx
   ```

4. Для тестовой среды конфиг уже настроен минимально: только HTTP на
   порту 80, без IPv6-listener и без HTTPS. `server_name` можно оставить
   как есть или заменить на IP/домен тестового сервера. Когда сайт
   перейдёт в продакшен — добавьте HTTPS, например через
   `sudo certbot --nginx -d ваш-домен`.

5. Проверьте сайт в браузере: `http://ваш-домен/`.

Сайт полностью статический — никакой базы данных, PHP или Node.js на
сервере не требуется, только сам Nginx.

## 2. Изменение цен

Все цены находятся в `assets/js/config.js`:

- **Пакеты** (карточки на главной и странице `pricing.html`) — блок
  `packages: [...]`. У каждого пакета есть `price` (число) и `currency`.
- **Полный прайс-лист** (детальные позиции по категориям) — блок
  `priceList: [...]`. У каждой позиции — `price` (строка, можно диапазон
  вроде `"70–110"`) и `currency`.

Просто отредактируйте нужные числа/строки и сохраните файл — HTML менять
не нужно, все страницы подтянут новые значения автоматически.

## 3. Изменение контактов

Блок `contact: {...}` в `assets/js/config.js`:

```js
contact: {
  phone: "+381 60 000 0000",       // используется в tel: ссылках
  phoneDisplay: "+381 60 000 0000",// как отображается на сайте
  whatsappNumber: "381600000000",  // без + и пробелов
  viberNumber: "381600000000",
  email: "info@homely.example",
  addressLine: { en: "...", sr: "..." },
  addressFull: { en: "...", sr: "..." },
  workingHours: { en: "...", sr: "..." },
  mapEmbedSrc: ""                  // ссылка на Google Maps embed (iframe src)
}
```

Соцсети и мессенджеры — блок `social: {...}` там же (Instagram, Facebook,
Telegram, WhatsApp, Viber, YouTube).

Чтобы добавить карту на страницу контактов — вставьте ссылку встраивания
Google Maps (Share → Embed a map → скопировать `src` из iframe) в
`mapEmbedSrc`.

## 4. Добавление новой услуги

В `assets/js/config.js`, блок `services: [...]`, добавьте объект:

```js
{
  icon: "shield",              // имя иконки из assets/js/icons.js
  title: { en: "New service", sr: "Nova usluga" },
  desc:  { en: "Description in English", sr: "Opis na srpskom" }
}
```

Список доступных иконок — ключи объекта `ICONS` в `assets/js/icons.js`
(house, lightbulb, camera, thermometer, lock, network, shield, droplet,
wrench, motion, door, flame, alarm, fan, check, suitcase, bell, sun, moon,
и другие). Если нужной иконки нет — допишите новый SVG-путь в `ICONS`.

Пакеты (`packages`) и автоматизации (`automations`) редактируются
аналогично — по образцу уже существующих элементов массива.

## 5. Добавление фотографий (вместо SVG-заглушек)

Сейчас портфолио, OG-обложка и иллюстрация "почему локально" используют
SVG-заглушки из `assets/img/`. Чтобы заменить их на настоящие фото:

1. Положите фотографии в `assets/img/` (рекомендуется `.jpg`/`.webp`,
   заранее сжатые — до ~200–400 КБ на файл для скорости загрузки).
2. В `assets/js/config.js`, блок `portfolio: [...]`, поменяйте путь:
   ```js
   { title: {...}, tag: {...}, img: "assets/img/moj-proekt-1.jpg" }
   ```
3. Для OG-обложки замените файл `assets/img/og-cover.svg` на `og-cover.jpg`
   (рекомендуемый размер 1200×630) и обновите путь в
   `CONFIG.seo.ogImage` в `config.js`.
4. Изображения уже подключены с `loading="lazy"` — дополнительных действий
   не требуется.

## 6. Добавление нового языка (например, немецкого)

Сайт устроен так, что каждый текст — это объект вида `{ en: "...", sr: "..." }`.
Чтобы добавить, например, немецкий (`de`):

1. В `assets/js/config.js` и `assets/js/i18n-strings.js` добавьте ключ
   `de` в каждый такой объект:
   ```js
   title: { en: "Services", sr: "Usluge", de: "Dienstleistungen" }
   ```
   (Это единственная трудоёмкая часть — переводов много, добавляйте
   постепенно, можно начать с ключевых страниц.)

2. В `assets/js/main.js` функция `t()` уже поддерживает произвольный
   язык через `state.lang`, менять её не нужно.

3. В навигации (`.lang-switch` в каждом HTML-файле) добавьте кнопку:
   ```html
   <button data-lang="de" type="button">DE</button>
   ```

4. Готово — переключение по-прежнему работает без перезагрузки страницы,
   выбор языка сохраняется в `localStorage`.

## Технические детали

- **SEO**: `title`, `description`, `keywords`, canonical и Open Graph
  теги подставляются из `CONFIG.seo` для каждой страницы через
  `assets/js/main.js` (`applySEO()`), включая переключение `og:locale`
  при смене языка.
- **Schema.org**: на каждой странице автоматически внедряется JSON-LD
  разметка `HomeAndConstructionBusiness` с контактами и адресом.
- **Lazy loading**: все изображения (`<img loading="lazy">`) и карта
  Google Maps (`iframe loading="lazy"`) подгружаются лениво.
- **Тема**: переключатель светлой/тёмной темы сохраняет выбор в
  `localStorage`, тёмная — по умолчанию.
- **Доступность**: видимый фокус (`:focus-visible`), уважение
  `prefers-reduced-motion`, семантичная разметка форм.
- **Lighthouse**: нет внешних зависимостей кроме Google Fonts (можно
  самостоятельно захостить шрифты локально в `assets/` при необходимости
  максимального балла Performance), SVG-иконки инлайнятся без запросов,
  статика кэшируется на Nginx (см. `nginx.conf`).

## Известные ограничения (сделано намеренно, чтобы сайт оставался простым)

- Форма на `contacts.html` — фронтенд-демо: показывает сообщение об
  успехе, но никуда не отправляет данные. Подключите свой email/CRM
  сервис (например, Formspree, собственный backend или serverless
  функцию) в `initContactForm()` внутри `assets/js/main.js`.
- Карта на странице контактов — плейсхолдер, пока не задан
  `CONFIG.contact.mapEmbedSrc`.
- Фотографии портфолио и OG-обложка — SVG-заглушки, см. раздел 5 выше.
