import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCFLF493Rxuh5B-S_RNWIfe6LHi_XrGtnM",
    authDomain: "hostimage-8f942.firebaseapp.com",
    databaseURL: "https://hostimage-8f942.firebaseio.com",
    projectId: "hostimage-8f942",
    storageBucket: "hostimage-8f942.appspot.com",
    messagingSenderId: "656704638697",
    appId: "1:656704638697:web:4fbbdd77b80c87378f6a78",
    measurementId: "G-RQD141BX5L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {storage, firestore, timestamp};
