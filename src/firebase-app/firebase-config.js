import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkiPvM4RneomoM4bncOBDvEXQ9B59pItg",
  authDomain: "monkey-blogging-d943e.firebaseapp.com",
  projectId: "monkey-blogging-d943e",
  storageBucket: "monkey-blogging-d943e.appspot.com",
  messagingSenderId: "500050579938",
  appId: "1:500050579938:web:4069cd31e023c2a26069bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
