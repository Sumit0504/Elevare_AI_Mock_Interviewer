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
  apiKey: "AIzaSyD7I3we_SU1Q8gZYv5EgRbUmOiq7G0zfsM",
  authDomain: "elevare-6d121.firebaseapp.com",
  projectId: "elevare-6d121",
  storageBucket: "elevare-6d121.firebasestorage.app",
  messagingSenderId: "411853399129",
  appId: "1:411853399129:web:e6d918dcea562808793d48",
  measurementId: "G-WXYB7NK08X"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp() ;
export const auth = getAuth(app);
export const db = getFirestore(app);