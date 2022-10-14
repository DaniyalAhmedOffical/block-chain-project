import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyARSqD5vEzz2ByV_t-jDW_qANR_mW0XnD8",
    authDomain: "block-chain-project-cf111.firebaseapp.com",
    projectId: "block-chain-project-cf111",
    storageBucket: "block-chain-project-cf111.appspot.com",
    messagingSenderId: "111616061058",
    appId: "1:111616061058:web:a7bdeaed79727e08024e9b",
    measurementId: "G-8NHQX6YRZL"
  };

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}