// import firebase from 'firebase/compat/app'
import 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRNEJRNkdpqwLIyV7DXN7cVXyKzo1fzEY",
    authDomain: "olx-clone-52046.firebaseapp.com",
    projectId: "olx-clone-52046",
    storageBucket: "olx-clone-52046.appspot.com",
    messagingSenderId: "333679913890",
    appId: "1:333679913890:web:4d7e4490139f0e6f2260fb",
    measurementId: "G-MQ1MLFKPEX"
  };

//   export const db = getFirestore()
  
  const app = initializeApp(firebaseConfig) 
   export const db = getFirestore(app);
  export const auth = getAuth(app)
  export default app;
