import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD-LjUYnna-5n-M4fMsFtOK5CyFtmHlN3I",
    authDomain: "expensify-3b4ae.firebaseapp.com",
    databaseURL: "https://expensify-3b4ae.firebaseio.com",
    projectId: "expensify-3b4ae",
    storageBucket: "expensify-3b4ae.appspot.com",
    messagingSenderId: "69387181752"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set({
    name: 'John Pawlak'
  });