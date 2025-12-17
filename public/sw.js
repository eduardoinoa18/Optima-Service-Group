// Service Worker for PWA functionality
// Provides offline capability and fast loading

const CACHE_NAME = 'optima-v1';
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/manifest.json'
];

// Install event - cache core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip caching for unsupported schemes
  const url = new URL(event.request.url);
  if (url.protocol === 'chrome-extension:' || url.protocol === 'moz-extension:' || url.protocol === 'safari-extension:') {
    return;
  }

  // Skip cross-origin requests that can't be cached
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            })
            .catch((err) => {
              console.log('Cache put error:', err);
            });
          
          return response;
        })
        .catch((error) => {
          // Network request failed, return a fallback if available
          console.log('Fetch failed; returning offline page instead.', error);
          
          // For navigation requests, could return an offline page
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          
          // For other requests, just reject
          return Promise.reject(error);
        });
      })
      .catch((error) => {
        console.log('Service worker error:', error);
        return Promise.reject(error);
      })
  );
});
