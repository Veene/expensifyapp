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

  const notes = [{
      id: '12',
      title: 'first note',
      body: 'this is my note'
  }, {
    id: '761ase',
    title: 'another note',
    body: 'this is my note'
  }];
  database.ref('notes').set(notes)

//   //need callback pattern now instead of promises because we want to subscribe to keep getting updates when change
//   const onValueChange = database.ref().on('value', (snapshot) => {
//       console.log(`${snapshot.val().name} is a ${snapshot.val().job} at ${snapshot.val().job.company}`)
//   }, (e) => {
//       console.log(e)
//   });

//   setTimeout(() => {
//     database.ref('age').set(28);
//   }, 3500);

//   database.ref().off(onValueChange);
//   database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('error fettching data', e)
//     })

//   //ref gives us a reference to database (you can pass arg to ref to reference diff nodes for diff things users/etc/etc)
//   database.ref().set({
//     name: 'John Pawlak',
//     age: 26,
//     isSingle: true,
//     location: {
//         city: 'Toronto',
//         country: 'Canada'
//     }
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((e) => {
//       console.log('error: ', e)
//   })
//   database.ref().set('This is my data');
// database.ref().set({ THIS WILL JUST OVERWRITE IT AGAIN LIKE THE LAST STRING
//     age: 27
// })
// database.ref('age').set(27)
// database.ref('location/city').set('Mississauga')

// database.ref('attributes').set({
//     height: '6feet',
//     weight: 190
// }).then(() => {
//     console.log('Data got saved,. second set call')
// }).catch((e) => {
//     console.log('error', e)
// })

// remove
// database.ref('isSingle')
//     .remove() //can also use set(null)
//     .then(()=>{
//         console.log('successfully removed')
//     }).catch((e) => e)

// update can also set new properties, it can also delete by updating to null
// database.ref().update({
//     name: 'Janek',
//     age: 30
// }).then(() => {
//     console.log('updated successfully')
// }).catch((e) => e)