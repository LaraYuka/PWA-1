var cacheName = 'NomeApp-v';
var filesToCache = [
  './',
  './index.html',
  './manifest.json'
];
self.addEvenListener('install',function(e) {
  e.waitUntil(
    caches.open(cacheName) . then(function(cache){
      return cache.adAll(filesToCache);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response){
    return response || fetch(e.request);
    })
  );
});