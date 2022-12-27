import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBYbqQQSV01wjE6Taxz4lah82We2RpR6w",
  authDomain: "chatify-e6623.firebaseapp.com",
  projectId: "chatify-e6623",
  storageBucket: "chatify-e6623.appspot.com",
  messagingSenderId: "532122930071",
  appId: "1:532122930071:web:49005dde65ae037b6a92d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
