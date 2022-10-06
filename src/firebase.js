// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXclI1XAm-0FUehZS_avaCwWq5ydolohU",
  authDomain: "where-is-waldo-9fa31.firebaseapp.com",
  projectId: "where-is-waldo-9fa31",
  storageBucket: "where-is-waldo-9fa31.appspot.com",
  messagingSenderId: "875658765445",
  appId: "1:875658765445:web:660ff372bf6e11f5e8b5ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("firebase working");