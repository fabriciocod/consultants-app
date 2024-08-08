// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDen-dO0iyg0sKHhA9vkVMmTK_k_q4M0To",
    authDomain: "packages-app-ec87d.firebaseapp.com",
    projectId: "packages-app-ec87d",
    storageBucket: "packages-app-ec87d.appspot.com",
    messagingSenderId: "450520340746",
    appId: "1:450520340746:web:619bb8c480bc21fda5c2f3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// inicializar autenticação pelo Firebase Authentication
const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Inicialize Cloud Firestore and get
const db = getFirestore(firebaseApp)

export {auth, db}