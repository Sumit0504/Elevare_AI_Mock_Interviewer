// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8X5bHmGF238Rdo6evfb3Y-zlagW3YO68",
  authDomain: "elevare-2dbd7.firebaseapp.com",
  projectId: "elevare-2dbd7",
  storageBucket: "elevare-2dbd7.firebasestorage.app",
  messagingSenderId: "508921572213",
  appId: "1:508921572213:web:3af68e4772f6906bb3813c",
  measurementId: "G-NNCM4Y2M36"
};
// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp() ;
export const auth = getAuth(app);
export const db = getFirestore(app);