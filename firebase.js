import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAx2t3vtHBmYwcW3pfqORSZGcWl5i5aZpc",
    authDomain: "react-notes-app-25513.firebaseapp.com",
    projectId: "react-notes-app-25513",
    storageBucket: "react-notes-app-25513.appspot.com",
    messagingSenderId: "69436989107",
    appId: "1:69436989107:web:5deacdaa92ded384f41ac6",
    measurementId: "G-J3N07E5FEB"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

const analytics = getAnalytics(app);