//File-list to cache

const staticAssets=[
    '/',
    '/images/weather.png',
    '/src/app.js',
    '/src/index.js',
    '/src/style.css',
    '/index.html'

];

self.addEventListener("Install", async e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(staticAssets)
        })
        .catch(console.error)

    )
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response; 
        }
        return fetch(event.request);
      })
    );
  });