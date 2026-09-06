const CACHE="rlcs-manager-v1";
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","./index.html","./style.css","./app.js","./manifest.webmanifest"]))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request))));
