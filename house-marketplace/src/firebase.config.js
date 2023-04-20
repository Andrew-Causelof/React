import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7uAIDdi0QuFptMF80CVWiAx5TV46gqbw",
  authDomain: "house-marketplace-f380e.firebaseapp.com",
  projectId: "house-marketplace-f380e",
  storageBucket: "house-marketplace-f380e.appspot.com",
  messagingSenderId: "852825431977",
  appId: "1:852825431977:web:23e58f89f0ebdd9c69aeb8"
};

initializeApp(firebaseConfig)

export const db = getFirestore()