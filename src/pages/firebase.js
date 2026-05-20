// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBslw7MepVTG30Juuwsj0-uTX_XMuUl6gA",
  authDomain: "nexup-87c06.firebaseapp.com",
  databaseURL: "https://nexup-87c06-default-rtdb.firebaseio.com",
  projectId: "nexup-87c06",
  storageBucket: "nexup-87c06.firebasestorage.app",
  messagingSenderId: "789106353071",
  appId: "1:789106353071:web:531d92a0503d972476055a",
  measurementId: "G-Z4J8ENYMT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);