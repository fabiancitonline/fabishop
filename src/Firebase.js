import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAlaS5xECy1DY-qAQwcrbLavsJgkzGkBEo",
  authDomain: "fabishop-cd113.firebaseapp.com",
  projectId: "fabishop-cd113",
  storageBucket: "fabishop-cd113.appspot.com",
  messagingSenderId: "677932108628",
  appId: "1:677932108628:web:55a45065e37193fe1556c1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);