import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANtGudsL4UKPNKp7A7Wbkg_mQZhxr8l1A",
    authDomain: "product-catalog-efc42.firebaseapp.com",
    projectId: "product-catalog-efc42",
    storageBucket: "product-catalog-efc42.appspot.com",
    messagingSenderId: "416697351627",
    appId: "1:416697351627:web:efaa2c8db030387cc98a4e",
    measurementId: "G-97MNC5WW2X"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp as default, db, auth };

