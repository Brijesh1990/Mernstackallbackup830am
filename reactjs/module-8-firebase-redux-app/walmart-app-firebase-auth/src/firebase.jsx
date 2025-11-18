// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVb8LzpWNXDfViw2U0Q5TkZDgr6lQ6btI",
  authDomain: "walmart-app-432b6.firebaseapp.com",
  projectId: "walmart-app-432b6",
  storageBucket: "walmart-app-432b6.firebasestorage.app",
  messagingSenderId: "1053155570935",
  appId: "1:1053155570935:web:e658fbb96ab1da4cf98ff2",
  measurementId: "G-Z83EJREGRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// const analytics = getAnalytics(app);