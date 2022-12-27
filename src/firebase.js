import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDcNSPQidDGJFKezk6YsbODRohHZg11MpQ",
    authDomain: "chatify-61055.firebaseapp.com",
    projectId: "chatify-61055",
    storageBucket: "chatify-61055.appspot.com",
    messagingSenderId: "519907436309",
    appId: "1:519907436309:web:d63a183c80c655c0ad6b1c"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()