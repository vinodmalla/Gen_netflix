// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbJry6FUVJrLidZDoHfQLHTaeChwsU9K4",
  authDomain: "gpt-netflix-67d49.firebaseapp.com",
  projectId: "gpt-netflix-67d49",
  storageBucket: "gpt-netflix-67d49.firebasestorage.app",
  messagingSenderId: "40555769165",
  appId: "1:40555769165:web:895e610d70485bb98a9b04",
  measurementId: "G-7HS6D3YJN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();