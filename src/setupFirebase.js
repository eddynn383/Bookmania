import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBowmUOz5eDu9s3neZMn6d-xzB0yuuoz70",
    authDomain: "bookmania-dev-bde85.firebaseapp.com",
    projectId: "bookmania-dev-bde85",
    storageBucket: "bookmania-dev-bde85.appspot.com",
    messagingSenderId: "51027255061",
    appId: "1:51027255061:web:1ea5d88450f1c7abeb531c",
    measurementId: "G-7LSBP9NSRD"
});

const db = getFirestore();
const collectionRef = collection(db, "books");

export { firebaseApp, collectionRef }