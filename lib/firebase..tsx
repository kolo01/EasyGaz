// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYidKTmXecRn2zYGll4kDEBwcfTmVFu3I",
  authDomain: "easygaz-24e1b.firebaseapp.com",
  databaseURL: "https://easygaz-24e1b-default-rtdb.firebaseio.com",
  projectId: "easygaz-24e1b",
  storageBucket: "easygaz-24e1b.firebasestorage.app",
  messagingSenderId: "713201686284",
  appId: "1:713201686284:web:94417185fc8136b6949b29",
  measurementId: "G-2QMLSP6GS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
auth.useDeviceLanguage();

export {analytics,db,firestore,auth}