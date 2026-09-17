/**
 * Небольшая встроенная библиотека иконок (stroke-style, 24x24).
 * Без внешних зависимостей — просто словарь SVG-путей.
 */
const ICONS = {
  house: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/>',
  wifi: '<path d="M2 8.5a15 15 0 0 1 20 0"/><path d="M5.5 12a10 10 0 0 1 13 0"/><path d="M9 15.5a5 5 0 0 1 6 0"/><circle cx="12" cy="19" r="1"/>',
  lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z"/>',
  camera: '<path d="M3 8a2 2 0 0 1 2-2h1.5l1-1.5h5l1 1.5H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><circle cx="12" cy="13" r="3.5"/>',
  thermometer: '<path d="M14 14.76V4a2 2 0 0 0-4 0v10.76a4 4 0 1 0 4 0Z"/>',
  lock: '<rect x="4" y="10.5" width="16" height="10" rx="2"/><path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5"/>',
  network: '<rect x="4" y="4" width="6" height="6" rx="1.2"/><rect x="14" y="4" width="6" height="6" rx="1.2"/><rect x="9" y="14" width="6" height="6" rx="1.2"/><path d="M7 10v2a2 2 0 0 0 2 2"/><path d="M17 10v2a2 2 0 0 1-2 2"/>',
  shield: '<path d="M12 3 5 6v5.5c0 4.6 3 8 7 9.5 4-1.5 7-4.9 7-9.5V6Z"/><path d="m9 12 2 2 4-4"/>',
  droplet: '<path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-3-3-3 3 2 2Z"/>',
  motion: '<path d="M3 17c3-1 5-1 7 0s5 1 7 0"/><path d="M5 12c3-1.2 5-1.2 7 0s5 1.2 7 0"/><circle cx="12" cy="6" r="2.4"/>',
  door: '<rect x="5" y="3" width="12" height="18" rx="1"/><circle cx="14" cy="12" r="1"/><path d="M17 3h2v18h-2"/>',
  flame: '<path d="M12 2s5 5 5 10a5 5 0 1 1-10 0c0-1.3.6-2.4 1.3-3.4.4 1 1.2 1.6 2 1.2C9.7 7.4 10 4.6 12 2Z"/>',
  alarm: '<path d="M12 3a6 6 0 0 0-6 6v3.5L4 15h16l-2-2.5V9a6 6 0 0 0-6-6Z"/><path d="M9.5 18a2.5 2.5 0 0 0 5 0"/>',
  fan: '<circle cx="12" cy="12" r="1.6"/><path d="M12 10.4C10 6 6.5 5 4.7 6.8 3 8.5 4 12 8.4 12"/><path d="M13.6 12c4.4 0 5.4 3.5 3.7 5.2C15.5 19 12 18 12 13.6"/><path d="M10.4 12C6 14 5 17.5 6.8 19.3 8.5 21 12 20 12 15.6"/><path d="M13.6 12C18 10 19 6.5 17.2 4.7 15.5 3 12 4 12 8.4"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
  suitcase: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
  bell: '<path d="M6 9a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9Z"/><path d="M10 18a2 2 0 0 0 4 0"/>',
  sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>',
  menu: '', /* handled via .hamburger */
  arrowUp: '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  star: '<path d="m12 3 2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1L6.6 19.3l1.3-6-4.6-4.1 6.1-.6Z"/>',
  phone: '<path d="M6 3h3l1.5 4.5L8 9.5a12 12 0 0 0 6.5 6.5l2-2.5L21 15v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 6.5L20.5 6"/>',
  mapPin: '<path d="M12 21s7-6.4 7-11.5a7 7 0 1 0-14 0C5 14.6 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/>',
  facebook: '<path d="M14 21v-7h2.4l.4-3H14V9c0-1 .3-1.7 1.8-1.7H17V4.6C16.6 4.5 15.6 4.4 14.5 4.4 12.1 4.4 10.5 5.9 10.5 8.6V11H8v3h2.5v7Z"/>',
  telegram: '<path d="m3 11.5 17-7-3 15-6-4.3-2.7 2.6-.6-4.3Z"/><path d="m8 13.7 9-7.4"/>',
  whatsapp: '<path d="M6 18.5 3.5 21 5 16.7A8 8 0 1 1 8.3 19Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.5 0 1-.6.8-1.1l-.6-1.4a.9.9 0 0 0-1-.5l-1 .3c-.7-.4-1.6-1.3-2-2l.3-1a.9.9 0 0 0-.5-1L9.6 8c-.5-.2-1.1.3-1.1.8-.1.2-.5.5-.5.7Z"/>',
  youtube: '<rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="m10.5 9.5 5 2.5-5 2.5Z"/>',
  viber: '<path d="M6 18.5 3.5 21 5 16.7A8 8 0 1 1 8.3 19Z"/>',
  x: '<path d="m5 5 14 14"/><path d="m19 5-14 14"/>'
};

/** Возвращает готовый <svg> с указанной иконкой */
function icon(name, cls){
  const body = ICONS[name] || ICONS.check;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="${cls||''}">${body}</svg>`;
}
