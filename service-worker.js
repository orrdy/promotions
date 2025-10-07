self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache01').then(cache => {
      return cache.addAll([
        'promotions/index.html',
        'promotions/icon.png',
        'promotions/snapshot-mobile.png',
        'promotions/snapshot-desktop.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
