import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZrfrqtyBp0ncfBC7s6Ga-ETrt3fWi0xo",
  authDomain: "nwitter-f6c39.firebaseapp.com",
  projectId: "nwitter-f6c39",
  storageBucket: "nwitter-f6c39.appspot.com",
  messagingSenderId: "623349251474",
  appId: "1:623349251474:web:67d7b0b7ce3a1b130f954b",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
