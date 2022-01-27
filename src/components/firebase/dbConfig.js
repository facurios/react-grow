// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFsBWdO8Ka9OgoPsWvVJmADpYXUPCkxkE",
  authDomain: "waldos-a5d71.firebaseapp.com",
  projectId: "waldos-a5d71",
  storageBucket: "waldos-a5d71.appspot.com",
  messagingSenderId: "526069205614",
  appId: "1:526069205614:web:9f1e31cbd98325a683347f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const getFirestoreApp= () =>{
        return app

}
    