import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbCSmo3fkcomQu8yZgWeYg3K3m14uJpis",
    authDomain: "react-bidding-app.firebaseapp.com",
    projectId: "react-bidding-app",
    storageBucket: "react-bidding-app.appspot.com",
    messagingSenderId: "524964136176",
    appId: "1:524964136176:web:ac765c18f00e2f683b6e35",
    measurementId: "G-STLFECP1K6"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);