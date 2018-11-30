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

  const database = firebase.database();

  //ref gives us a reference to database (you can pass arg to ref to reference diff nodes for diff things users/etc/etc)
  database.ref().set({
    name: 'John Pawlak',
    age: 26,
    isSingle: true,
    location: {
        city: 'Toronto',
        country: 'Canada'
    }
  }).then(() => {
      console.log('Data is saved')
  }).catch((e) => {
      console.log('error: ', e)
  })
//   database.ref().set('This is my data');
// database.ref().set({ THIS WILL JUST OVERWRITE IT AGAIN LIKE THE LAST STRING
//     age: 27
// })
// database.ref('age').set(27)
// database.ref('location/city').set('Mississauga')

database.ref('attributes').set({
    height: '6feet',
    weight: 190
}).then(() => {
    console.log('Data got saved,. second set call')
}).catch((e) => {
    console.log('error', e)
})

//remove
// database.ref('isSingle')
//     .set(null)
//     .then(()=>{
//         console.log('successfully removed')
//     }).catch((e) => e)