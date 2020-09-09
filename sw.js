self.addEventListener("Install", e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll([
                'app.js',
                'sw.js',
                'manifest.js',
                'style.css'
            ])
        })
    )
})