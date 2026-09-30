// Guarda la app en el celular para que ande sin internet.
// Si cambiás index.html, subí también este archivo con otro número de versión.
const VERSION = "placard-v5";
const APP = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "icon-512-maskable.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Primero intenta la red (para tomar cambios); si no hay internet, usa lo guardado.
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok || r.type === "opaque") { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
