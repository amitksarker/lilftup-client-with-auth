// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCST1rS5MleM0Ls4GQFZGOcZTUoT-W4W3k",
  authDomain: "liftup-9cb5b.firebaseapp.com",
  projectId: "liftup-9cb5b",
  storageBucket: "liftup-9cb5b.firebasestorage.app",
  messagingSenderId: "144414217175",
  appId: "1:144414217175:web:f81c72fbb265f608d0b192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);