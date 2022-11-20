// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj5MVJGZh5xmDyJj7mNS62EE-1Ueg_Yy0",
  authDomain: "fire-contact-projectt.firebaseapp.com",
  databaseURL: "https://fire-contact-projectt-default-rtdb.firebaseio.com",
  projectId: "fire-contact-projectt",
  storageBucket: "fire-contact-projectt.appspot.com",
  messagingSenderId: "263207275543",
  appId: "1:263207275543:web:6e3bb6add1e67533b26052",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
