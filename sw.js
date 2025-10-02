---
---
// Service Worker for caching
const CACHE_NAME = 'aarti-sangrah-v1';
const urlsToCache = [
    '/',
    '/assets/css/critical.css',
    '/assets/js/search.js',
    '{{ "/assets/images/logo.png" | relative_url }}',
    'https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400;700&family=Inter:wght@400;500;600;700&display=swap'
];

// Install event
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            }
        )
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});