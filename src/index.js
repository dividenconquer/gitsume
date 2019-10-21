import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyAAWm8leiB9-dYh08fucOgf737q89yipEo",
    authDomain: 'auth.gitsu.me',
    databaseURL: "https://gitsume-6e1a1.firebaseio.com",
    projectId: "gitsume-6e1a1",
    storageBucket: "gitsume-6e1a1.appspot.com",
    messagingSenderId: "1053911731598",
    appId: "1:1053911731598:web:fff7f7187bfb356db0a8df",
    measurementId: "G-WTDKG7151Q"
});
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
