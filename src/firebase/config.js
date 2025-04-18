// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYQJ5VUW8Dwl7JyiCCfv2F3hoH4YllfU8",
  authDomain: "reactform-a309c.firebaseapp.com",
  projectId: "reactform-a309c",
  storageBucket: "reactform-a309c.firebasestorage.app",
  messagingSenderId: "82626840850",
  appId: "1:82626840850:web:4deaeaed90a254437f8bcb",
  measurementId: "G-DTNTPEEJM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

