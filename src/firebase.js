import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAb5iX9rPE8i1Yf5vFEu2JTX2R_GL2VzG8",
    authDomain: "chat-ec569.firebaseapp.com",
    projectId: "chat-ec569",
    storageBucket: "chat-ec569.appspot.com",
    messagingSenderId: "879351208128",
    appId: "1:879351208128:web:988e229cc3a5ad2086b525"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()