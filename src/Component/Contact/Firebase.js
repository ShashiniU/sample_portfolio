
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCXtYPGCPq3xF4feEY337Gtt6QN7xxaI3c",
  authDomain: "myportfolio-contactform.firebaseapp.com",
  projectId: "myportfolio-contactform",
  storageBucket: "myportfolio-contactform.appspot.com",
  messagingSenderId: "333444863925",
  appId: "1:333444863925:web:a034efe92d0d5420312bfc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}