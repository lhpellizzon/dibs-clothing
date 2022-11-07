// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

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

export const auth = getAuth();

/*Facebook provider interface and how user will log in */
/*Requires Authentication from meta for developers facebook */
// const facebookProvider = new FacebookAuthProvider();

// export const signInWithFacebookPopup = () =>
//   signInWithPopup(auth, facebookProvider);

export const db = getFirestore();

/*Google provider interface and how user will log in */
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

/* Sign in with gmail */
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

/* Create User Doc on DB */
export const createUserDocumentFromAuth = async (userAuth, additionalDetails = {}) => {
  /* Create a user doc reference*/
  const userDocRef = doc(db, "users", userAuth.uid);

  /* Create a snapShot of the document to check on firebase if exists the userDocRef*/
  const userSnapShot = await getDoc(userDocRef);

  /*Create user if does not exist on database*/
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt: new Date(),
        ...additionalDetails,
      });
    } catch (error) {
      throw error;
    }
  }
};

/* Auth user with email and password */
export const createAuthUserFromEmail = async (userDetails) => {
  const { email, password, displayName } = userDetails;

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, {
      displayName,
    });
    return userCredentials;
  } catch (error) {
    throw error;
  }
};

export const signInUserWithEmailAndPassword = async (userDetails) => {
  const { email, password } = userDetails;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    return userCredentials;
  } catch (error) {
    throw error;
  }
};

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const signOutUser = async () => await auth.signOut();
