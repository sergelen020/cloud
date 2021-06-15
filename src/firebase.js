import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAYtsA_nl8Uin68ATQIhMt8Bz0c0Znx32E",
    authDomain: "project-1-aad15.firebaseapp.com",
    projectId: "project-1-aad15",
    storageBucket: "project-1-aad15.appspot.com",
    messagingSenderId: "447798768420",
    appId: "1:447798768420:web:8bcce32f34f0474f9f79b1",
    measurementId: "G-MFDNBN4VZM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const firestore = firebase.firestore()
  export default firebase;