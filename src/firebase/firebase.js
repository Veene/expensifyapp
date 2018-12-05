import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


  //subscribed for any changes in expenses array and print arrays updated
// database.ref('expenses')
//   .on('value', (snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           })
//       })
//       console.log(expenses)
//   })
  

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     createdAt: 7586725434,
//     amount: 109500
// })

//   database.ref('notes/-LS_1-jr98WRutFvnY8r').remove();

//   database.ref('notes').push({
//       title: 'Course topics',
//       body: 'React Native, Angular, Vue'
//   })

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