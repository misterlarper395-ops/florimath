importScripts('https://jsdelivr.net');
const wispServer = 'wss://wisp.mercurywork.shop/'; 
const worker = new ScramjetWorker({
    prefix: '/service/',
    transport: new WispTransport(wispServer)
});
self.addEventListener('fetch', (event) => {
    if (event.request.url.includes(self.location.origin + '/service/')) {
        event.respondWith(
            worker.handle(event)
        );
    }
});
