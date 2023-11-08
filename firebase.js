// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuZnefpWeLWnLu59Bc85TT-Kbc3E7JJLg",
  authDomain: "appchat-b6f89.firebaseapp.com",
  projectId: "appchat-b6f89",
  storageBucket: "appchat-b6f89.appspot.com",
  messagingSenderId: "580235797110",
  appId: "1:580235797110:web:0ae6deef990e4f5cbc7557",
  measurementId: "G-PEK8930EG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);