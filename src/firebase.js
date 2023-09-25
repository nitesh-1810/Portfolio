import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd8b033-Ay-EohnM5Y46w1cIzibZiLZbk",
  authDomain: "nitesh1810-portfolio.firebaseapp.com",
  projectId: "nitesh1810-portfolio",
  storageBucket: "nitesh1810-portfolio.appspot.com",
  messagingSenderId: "942170031880",
  appId: "1:942170031880:web:88850378d083dd43058ebd",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
