// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "regform-58ceb.firebaseapp.com",
  projectId: "regform-58ceb",
  storageBucket: "regform-58ceb.appspot.com",
  messagingSenderId: "810331090788",
  appId: "1:810331090788:web:005159e9cdd464f8e79471"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

