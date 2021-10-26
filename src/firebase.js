import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsMFCgdv72ExUYoWoPaMeEZv12NUOfsug",
  authDomain: "clone-d8c00.firebaseapp.com",
  projectId: "clone-d8c00",
  storageBucket: "clone-d8c00.appspot.com",
  messagingSenderId: "675945251306",
  appId: "1:675945251306:web:74f8066d3a49a1d6d93293",
  measurementId: "G-Y7Q0BWE6RB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
