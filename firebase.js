
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBv3n0u3FBDASTo8cfczihMd93tMk9xZWQ",
  authDomain: "tax-consultant-fa9b3.firebaseapp.com",
  databaseURL: "https://tax-consultant-fa9b3-default-rtdb.firebaseio.com",
  projectId: "tax-consultant-fa9b3",
  storageBucket: "tax-consultant-fa9b3.firebasestorage.app",
  messagingSenderId: "980807430333",
  appId: "1:980807430333:web:de0a12067681d210ac47d4"
};

// Firebase Initialize
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); 

export { db, ref, push, onValue };
