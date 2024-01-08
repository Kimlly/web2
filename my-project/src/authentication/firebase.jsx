// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Firebase configuration for the main app
const firebaseConfig = {
  apiKey: "AIzaSyBzce1WsJ5wF3DS2wZUJakVWPOBtEq0S6k",
  authDomain: "web-auth-9bc19.firebaseapp.com",
  projectId: "web-auth-9bc19",
  storageBucket: "web-auth-9bc19.appspot.com",
  messagingSenderId: "281931385980",
  appId: "1:281931385980:web:943f7ccd97c0b7b4300df9"
};

// Firebase configuration for the second app (image-related services)
const imageFirebaseConfig = {
  apiKey: "AIzaSyDpfA5VR6ziQg2r6ONbWBoPNNjN2GpO6RQ",
  authDomain: "imageupload-f08f9.firebaseapp.com",
  projectId: "imageupload-f08f9",
  storageBucket: "imageupload-f08f9.appspot.com",
  messagingSenderId: "325438646480",
  appId: "1:325438646480:web:15911ff3004d8ef8b1d6d5"
};

// Initialize the main Firebase app
const mainApp = initializeApp(firebaseConfig);

// Uncomment the following lines if you want to initialize a second Firebase app
const imageApp = initializeApp(imageFirebaseConfig, "imageApp");

firebase.initializeApp(firebaseConfig);
const db2 = firebase.firestore();
export const {Users} = db.collection("Users");


export const db = getDatabase(imageApp);
export const storage = getStorage();

// Initialize Firebase Authentication and get a reference to the main app's service
export const auth = getAuth(mainApp);

// Uncomment the following line if you want to get a reference to the second app's authentication service
export const imageAuth = getAuth(imageApp);
