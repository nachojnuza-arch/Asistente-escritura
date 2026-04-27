const CACHE_NAME = 'escritura-pro-v1';
const urlsToCache = [
  './index.html',
  // Como ahora tienes todo en index.html, no necesitamos añadir styles.css ni scripts.js
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap',
  'https://unpkg.com/lucide@latest',
  'https://cdn.jsdelivr.net/npm/typo-js@1.3.1/typo.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve lo que está en caché o hace la petición a la red
        return response || fetch(event.request);
      })
  );
});