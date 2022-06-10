// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCXv8tyGx2aBFbCYjPJf_bqgsOBOnxwoE",
  authDomain: "chat-49118.firebaseapp.com",
  projectId: "chat-49118",
  storageBucket: "chat-49118.appspot.com",
  messagingSenderId: "776423265723",
  appId: "1:776423265723:web:5a4db24d8014768af4e09e",
  measurementId: "G-963J6DXJ5T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
