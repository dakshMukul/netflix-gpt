// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpg-4dyjj7qm2BV39pbwoIwq4mZ3J72xw",
  authDomain: "netflixgpt-b5df3.firebaseapp.com",
  projectId: "netflixgpt-b5df3",
  storageBucket: "netflixgpt-b5df3.appspot.com",
  messagingSenderId: "813283741934",
  appId: "1:813283741934:web:2487891a56d418316763ff",
  measurementId: "G-39QDTRZP2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
