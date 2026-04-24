/* ═══════════════════════════════════════════
   LEGADO 48° — Service Worker
   Strategy:
   - assets/  → Cache-first (images, CSS, JS — already immutable on CDN)
   - HTML     → Network-first with cache fallback
   - Offline  → Serve cached index.html
═══════════════════════════════════════════ */

const CACHE_NAME = 'legado48-v1';

const PRECACHE = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/js/main.js',
  '/assets/images/gomitas-trio-b.webp',
  '/assets/images/gomitas-sal-de-gusano.webp',
  '/assets/images/gomitas-tepextate.webp',
  '/assets/images/gomitas-maracuya.webp',
  '/assets/images/chocolates-con-mezcal.webp',
  '/assets/images/gomitas-trio-a.webp',
];

/* ── Install: pre-cache critical assets ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: remove old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

/* ── Fetch: route by request type ── */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  // assets/ → cache-first (they're immutable)
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // HTML → network-first with offline fallback
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstWithFallback(request));
    return;
  }

  // Everything else → network-first
  event.respondWith(networkFirst(request));
});

/* ── Strategies ── */

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }
  return response;
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return caches.match(request);
  }
}

async function networkFirstWithFallback(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    // Last resort: serve root from cache
    return caches.match('/') || caches.match('/index.html');
  }
}
