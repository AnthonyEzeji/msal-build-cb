// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU8pxnVovP1m3Qa5G-etMJQUZSoGUrHCk",
  authDomain: "healthcare-risk-advisors.firebaseapp.com",
  databaseURL: "https://healthcare-risk-advisors-default-rtdb.firebaseio.com",
  projectId: "healthcare-risk-advisors",
  storageBucket: "healthcare-risk-advisors.appspot.com",
  messagingSenderId: "835832995133",
  appId: "1:835832995133:web:2386a74d56b4ff5928f954",
  measurementId: "G-GDPH5N21N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);