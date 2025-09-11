// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnc-SAtV5gSD0V1MKoZ25ARv4cVR6UZQ0",
  authDomain: "expedia-clone-62b5d.firebaseapp.com",
  projectId: "expedia-clone-62b5d",
  storageBucket: "expedia-clone-62b5d.firebasestorage.app",
  messagingSenderId: "1050295288716",
  appId: "1:1050295288716:web:07b83fc7d0641075e8cca9",
  measurementId: "G-DPNBP06MVB"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);

export default firebase_app