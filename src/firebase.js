import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8nPaq2OkgG5amUJT12bwpk792qkdKphs",
  authDomain: "fintech-ff5aa.firebaseapp.com",
  projectId: "fintech-ff5aa",
  storageBucket: "fintech-ff5aa.appspot.com",
  messagingSenderId: "681892559066",
  appId: "1:681892559066:web:aea23a39c6add80a170de3"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()