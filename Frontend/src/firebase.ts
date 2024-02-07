// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "organizesphere-40ff0.firebaseapp.com",
  projectId: "organizesphere-40ff0",
  storageBucket: "organizesphere-40ff0.appspot.com",
  messagingSenderId: "7251909130",
  appId: "1:7251909130:web:fe5d5fcce2e14ddca65df3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);