import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcnabZknhfV_tFTcnhzLzvA36f6whMfdk",
  authDomain: "bells-mirror.firebaseapp.com",
  databaseURL: "https://bells-mirror.firebaseio.com",
  projectId: "bells-mirror",
  storageBucket: "bells-mirror.appspot.com",
  messagingSenderId: "883720188554",
  appId: "1:883720188554:web:c69718547a3c31fe4df373",
  measurementId: "G-06588TCNHS"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
