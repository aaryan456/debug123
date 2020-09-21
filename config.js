import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyD3e6tlZdGZMXNzPxlAnjTpCxDcTH3pQLk",
    authDomain: "booksantaapp-f2eb9.firebaseapp.com",
    databaseURL: "https://booksantaapp-f2eb9.firebaseio.com",
    projectId: "booksantaapp-f2eb9",
    storageBucket: "booksantaapp-f2eb9.appspot.com",
    messagingSenderId: "107456797114",
    appId: "1:107456797114:web:1e60da9c1d5e991337e583"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();