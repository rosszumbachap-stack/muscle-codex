const CACHE_NAME = 'muscle-codex-shell-v13';
const APP_FILES = [
  './manifest.webmanifest',
  './icons/favicon-32.png',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/muscle-codex.svg',
  './images/paused-romanian-deadlift-bottom.webp',
  './images/hero-dynamic.webp',
  './images/movements/incline-start.webp',
  './images/movements/incline-finish.webp',
  './images/movements/pulldown-start.webp',
  './images/movements/pulldown-finish.webp',
  './images/movements/rdl-start.webp',
  './images/movements/rdl-finish.webp',
  './images/movements/lateral-start.webp',
  './images/movements/lateral-finish.webp',
  './images/movements/hack-start.webp',
  './images/movements/hack-finish.webp',
  './images/movements/curl-start.webp',
  './images/movements/curl-finish.webp',
  './images/movements/triceps-start.webp',
  './images/movements/triceps-finish.webp',
  './images/atlas-character-front.webp',
  './images/atlas-character-back.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  if (event.request.method !== 'GET' || requestUrl.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./')))
  );
});
