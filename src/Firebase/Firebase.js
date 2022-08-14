import React from "react";
import { initiallizeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp71TG4aMnJnaazlKdssofavsbkJyimw4",
  authDomain: "arte-mexicano.firebaseapp.com",
  projectId: "arte-mexicano",
  storageBucket: "arte-mexicano.appspot.com",
  messagingSenderId: "785173193918",
  appId: "1:785173193918:web:84c34c0f19725ff88f2aef",
  measurementId: "G-F2WTM99802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);