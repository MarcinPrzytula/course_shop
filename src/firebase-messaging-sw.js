// Scripts for firebase and firebase messaging
importScripts(
	"https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
	"https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
	apiKey: "AIzaSyDnaUsBATCV3SVn1iVLzyjkQpU3R0EAATQ",
	authDomain: "testproject-502f9.firebaseapp.com",
	projectId: "testproject-502f9",
	storageBucket: "testproject-502f9.appspot.com",
	messagingSenderId: "466929510153",
	appId: "1:466929510153:web:cc0745370df1f76b1c95d8",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log("Received background message ", payload);

	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
