// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBaDdBDPfGi6i0bezyj2hIBFNbHMdfbjEo",
    authDomain: "facebook-clone-22f4e.firebaseapp.com",
    projectId: "facebook-clone-22f4e",
    storageBucket: "facebook-clone-22f4e.appspot.com",
    messagingSenderId: "19077083986",
    appId: "1:19077083986:web:cb1ea59d6da96b6cd2408b",
    measurementId: "G-WT05NSNJBM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;