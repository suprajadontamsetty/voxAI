// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDb8VDy8q1IzZreVk0TAHbGTa1xlr6WEx8",
  authDomain: "voxai-3c747.firebaseapp.com",
  projectId: "voxai-3c747",
  storageBucket: "voxai-3c747.firebasestorage.app",
  messagingSenderId: "170325984246",
  appId: "1:170325984246:web:55afcaee7f54a0ad4ffdd7",
  measurementId: "G-P9K27TW19T"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)