// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmKf2Pf0dfEmiutLjLvU8o3bXgEt-Hbpo",
  authDomain: "ig-clone-6c0ad.firebaseapp.com",
  projectId: "ig-clone-6c0ad",
  storageBucket: "ig-clone-6c0ad.appspot.com",
  messagingSenderId: "989226866666",
  appId: "1:989226866666:web:4090fe91297794acc38493"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage };