import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBHsrJWN9hIq3ZEe8kvUm6BHlBUekPpcBI",
  authDomain: "netflix-39588.firebaseapp.com",
  projectId: "netflix-39588",
  storageBucket: "netflix-39588.appspot.com",
  messagingSenderId: "503834225964",
  appId: "1:503834225964:web:bc65c96996db62fca3d089",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
