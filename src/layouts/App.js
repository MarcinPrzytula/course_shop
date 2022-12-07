import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../store/store.js';

import Page from './Page';
import Navigation from '../layouts/Navigation';
import LoginPanel from './LoginPanel';

import '../styles/App.scss';


import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
	apiKey: "AIzaSyDnaUsBATCV3SVn1iVLzyjkQpU3R0EAATQ",
	authDomain: "testproject-502f9.firebaseapp.com",
	projectId: "testproject-502f9",
	storageBucket: "testproject-502f9.appspot.com",
	messagingSenderId: "466929510153",
	appId: "1:466929510153:web:cc0745370df1f76b1c95d8",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

getToken(messaging, {
	vapidKey:
		"BH3u1epjM6rDvnD4tOFwYcsRabV-KB1Co9UK84EAwPMF6KiEdAQvlpTgAHzxfdWt615ifGT0qeH-1rz_Njen6Yo",
})
	.then((currentToken) => {
		if (currentToken) {
			// Send the token to your server and update the UI if necessary
			console.log("current token for client: ", currentToken);
		} else {
			// Show permission request UI

			console.log(
				"No registration token available. Request permission to generate one."
			);
			// ...
		}
	})
	.catch((err) => {
		console.log("An error occurred while retrieving token. ", err);
	});

export const onMessageListener = () => {
	console.log(messaging);
	// new Promise((resolve) => {
	// 	onMessage(messaging, (payload) => {
	// 		resolve(payload);
	// 	});
	// });
};


const App = () => {
  return (
    <Provider store={store}>
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Router basename={'/course_shop'}>
        <div className="app_wrapper">
          <div className="menu_wrapper">
            <Navigation />
            <LoginPanel />
          </div>
          <Page />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
