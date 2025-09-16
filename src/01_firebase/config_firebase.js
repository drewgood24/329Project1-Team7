// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
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
const auth = getAuth(firebase_app);

// Connect to the Authentication emulator
if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099"); // Default port for Auth emulator
}

export default firebase_app