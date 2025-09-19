// sw.js
self.addEventListener('install', event => {
  // força ativação imediata
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // assume controle das abas já abertas
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // pode interceptar requisições (aqui só repassa)
  event.respondWith(fetch(event.request).catch(() => new Response("Offline")));
});
