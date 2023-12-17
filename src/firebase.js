import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD88t2T7FLv-GzMoHxLOW_dC_MJtSvukRA",
  authDomain: "chatify-1.firebaseapp.com",
  projectId: "chatify-1",
  storageBucket: "chatify-1.appspot.com",
  messagingSenderId: "798592906962",
  appId: "1:798592906962:web:acf3b7c473eb8129b99f0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
