
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDa2lvBwdSA4ilNWcmnUK53PVFPoBSSuBs",
  authDomain: "islagourmet-b6e99.firebaseapp.com",
  projectId: "islagourmet-b6e99",
  storageBucket: "islagourmet-b6e99.appspot.com",
  messagingSenderId: "620957636374",
  appId: "1:620957636374:web:9b3e44535a8405e981a237"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);