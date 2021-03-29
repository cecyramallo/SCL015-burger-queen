import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDHXxM4dEwAolJl6JG4aqPLRA5xm_E1h5g",
    authDomain: "burger-queen-58ac6.firebaseapp.com",
    projectId: "burger-queen-58ac6",
    storageBucket: "burger-queen-58ac6.appspot.com",
    messagingSenderId: "675893814903",
    appId: "1:675893814903:web:e8826a34a8f12602960872"
  };

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();

export { db };