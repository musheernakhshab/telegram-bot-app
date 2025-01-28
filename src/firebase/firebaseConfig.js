// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvXzUlENtZdi7L7COhCeNFGfYBwCiAQBI",
    authDomain: "timecoin-f2e73.firebaseapp.com",
    projectId: "timecoin-f2e73",
    storageBucket: "timecoin-f2e73.firebasestorage.app",
    messagingSenderId: "985790226451",
    appId: "1:985790226451:web:ef2ac4eb1abdf205261fe6",
    measurementId: "G-E5M25Q683E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export {db};