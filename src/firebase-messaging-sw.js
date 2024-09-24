importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBIbGbFT73NCpe0rN9xIdL0xIILar0g3pM",
    authDomain: "unicom-vendor.firebaseapp.com",
    databaseURL: "https://unicom-vendor.firebaseio.com",
    projectId: "unicom-vendor",
    storageBucket: "unicom-vendor.appspot.com",
    messagingSenderId: "994327206621",
    appId: "1:994327206621:web:66dfe8299a3a74151f5934",
    measurementId: "G-5SJ5P0TX5H"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
let notificationRes = {};
console.log(messaging);

messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    var data = payload.data;
    notificationRes = data;
});

self.addEventListener('push', function (event) {
    const data = JSON.parse(event.data.text());
    notificationRes = data;
    event.waitUntil(self.registration.showNotification(data.notification.title, { "body": data.notification.body}));    
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then((windowClients) => {
            console.log(notificationRes);
            let baseUrl = getLeftString(windowClients[0].url);
            let url = baseUrl + '#/dashboard';
            if (clients.openWindow) {
                return clients.openWindow(url);
              } else {
                return window.open(url);
              }
        })
    );
});

function getLeftString(str) {
    const index = str.indexOf("#");
    if (index === -1) {
      return str; // "#" character not found in string
    }
    return str.substring(0, index);
}