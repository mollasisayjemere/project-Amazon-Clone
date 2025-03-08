


// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from 'firebase/auth';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAa6B4hxZwY6yIFGdlI4Jyv-a-GingreX4",
    authDomain: "project-e-clone-8aa77.firebaseapp.com",
    projectId: "project-e-clone-8aa77",
    storageBucket: "project-e-clone-8aa77.firebasestorage.app",
    messagingSenderId: "298670414474",
    appId: "1:298670414474:web:8432130cddc34878ae6b73",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); // Use firebase.initializeApp

export const auth = getAuth(firebase.app()); // Pass firebase.app() to getAuth
export const db = firebase.firestore(); // Correct typo and use firebase.firestore();