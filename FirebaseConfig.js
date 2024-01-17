// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNb1ddVuzuOiqPpSikFgdVd6C8GNBKJcM",
  authDomain: "expensetracker-2ab40.firebaseapp.com",
  projectId: "expensetracker-2ab40",
  storageBucket: "expensetracker-2ab40.appspot.com",
  messagingSenderId: "448393858563",
  appId: "1:448393858563:web:800834837de36f953c8836",
  measurementId: "G-DFHW22L0RW"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app)