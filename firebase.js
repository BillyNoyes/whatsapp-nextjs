import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA-eYCIOmnS59K3RCbJyo0v1znAqXdkCn8",
    authDomain: "whatsapp-37c4e.firebaseapp.com",
    projectId: "whatsapp-37c4e",
    storageBucket: "whatsapp-37c4e.appspot.com",
    messagingSenderId: "847880703144",
    appId: "1:847880703144:web:aebd054851f5bb58fa869d"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };