var CACHE_NAME = 'pwa-zero-inside';
var urlsToCache = [
    '/',
    'static',
    'images/myProfile.png',
    'images/portfolio/gponbot/web-home.png',
    'images/portfolio/pettracker/IMG_20200530_181223.jpg',
    'images/portfolio/shap/IMG_2020-11-30-20-36-25-499.jpg',
    'images/portfolio/watermonitoring/ss1.png'
];

// Install a service worker
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});

// Update a service worker
self.addEventListener('activate', event => {
    var cacheWhitelist = ['pwa-zero-inside'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});