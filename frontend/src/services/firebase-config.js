// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT-tOhSxfCeKh-Uo7MCJ2J83sy1g7AVok",
  authDomain: "trippal-travel.firebaseapp.com",
  projectId: "trippal-travel",
  storageBucket: "trippal-travel.appspot.com",
  messagingSenderId: "224667716760",
  appId: "1:224667716760:web:0a046c35dca0b8e6b194ed",
  measurementId: "G-ZPY5H71FY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };