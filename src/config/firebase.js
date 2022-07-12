// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDECGyLs9DK4yGbFbOIoeT67gncA33n1EM",
  authDomain: "mood-meter-17992.firebaseapp.com",
  projectId: "mood-meter-17992",
  storageBucket: "mood-meter-17992.appspot.com",
  messagingSenderId: "451261733499",
  appId: "1:451261733499:web:c911fd9d78bb4fce96e0de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
