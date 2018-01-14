const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send('Hello from Firebase!');
});

// exports.onAuth = functions.auth().onCreate

// https://firebase.google.com/docs/reference/functions/functions.firestore.DocumentBuilder
// exports.onEveryWrite = functions.firestore().onWrite((writeResults) => {
//   console.log(`  writeResults`, writeResults);
// });
