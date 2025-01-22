// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_API_KEY } from "./constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "moviesgpt-a74e3.firebaseapp.com",
  projectId: "moviesgpt-a74e3",
  storageBucket: "moviesgpt-a74e3.firebasestorage.app",
  messagingSenderId: "587974738649",
  appId: "1:587974738649:web:03d04685c21021e6aab4c8",
  measurementId: "G-CLFGPJ4JX3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
