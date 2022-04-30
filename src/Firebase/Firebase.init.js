// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYFRkel0W1quByhsURvMvDnemmzq-yfgU",
  authDomain: "car-rev-68abf.firebaseapp.com",
  projectId: "car-rev-68abf",
  storageBucket: "car-rev-68abf.appspot.com",
  messagingSenderId: "34242778933",
  appId: "1:34242778933:web:00f558a9311204d2591e7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
