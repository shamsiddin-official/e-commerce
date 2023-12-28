import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// to save JSON
import { getFirestore } from "firebase/firestore";
// to save Files(images, videos, music)
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCZSpjDgUs9KGKTG6eimIzj73cVVkUp_8",
  authDomain: "e-commerce-5a9f9.firebaseapp.com",
  projectId: "e-commerce-5a9f9",
  storageBucket: "e-commerce-5a9f9.appspot.com",
  messagingSenderId: "425697174999",
  appId: "1:425697174999:web:09fe341adffbfae61e5792",
  measurementId: "G-KLPGTFRE3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);