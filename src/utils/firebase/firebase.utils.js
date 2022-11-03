// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD71sfz0sfm1_9aOLGdxFiVgcwMuSGQqSw",
  authDomain: "dibs-clothing.firebaseapp.com",
  projectId: "dibs-clothing",
  storageBucket: "dibs-clothing.appspot.com",
  messagingSenderId: "986164210847",
  appId: "1:986164210847:web:6a1670630562f8470246aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Google interface and how user will log in
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
