// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJpWDE6tSePN9ps5leydW5Tn-3wp0O14U",
  authDomain: "sitescoala-fc033.firebaseapp.com",
  projectId: "sitescoala-fc033",
  storageBucket: "sitescoala-fc033.firebasestorage.app",
  messagingSenderId: "796973442678",
  appId: "1:796973442678:web:249ee378f0bf4a673ee157",
  measurementId: "G-MEJLNJB939",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
