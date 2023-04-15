// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVSSs5h4sWv-1z8qveghep5CJUiWhQl-A",
  authDomain: "project-auth-c0a5d.firebaseapp.com",
  projectId: "project-auth-c0a5d",
  storageBucket: "project-auth-c0a5d.appspot.com",
  messagingSenderId: "97997118798",
  appId: "1:97997118798:web:81dd01d84e647509ca121f",
  measurementId: "G-QCBZKG7TTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);