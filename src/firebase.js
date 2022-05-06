// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwsbT0OpNsmfK7hZqHG43FcEr-nuWQfAw",
  authDomain: "nwitter-f1799.firebaseapp.com",
  projectId: "nwitter-f1799",
  storageBucket: "nwitter-f1799.appspot.com",
  messagingSenderId: "141941302611",
  appId: "1:141941302611:web:5cbbd020c8b72fa74f2da6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export firebase
export default app;