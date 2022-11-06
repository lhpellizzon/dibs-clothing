// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
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

/*Google provider interface and how user will log in */
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

/*Facebook provider interface and how user will log in */
/*Requires Authentication from meta for developers facebook */
// const facebookProvider = new FacebookAuthProvider();

// export const signInWithFacebookPopup = () =>
//   signInWithPopup(auth, facebookProvider);

export const db = getFirestore();

/* Auth user with gmail */
export const createUserDocumentFromAuth = async (userAuth) => {
  createUserOnCollection(userAuth);
};

/* Auth user with email and password */
export const createUserFromEmail = async (userDetails) => {
  const { email, password } = userDetails;

  try {
    const createUser = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = await createUser;
    await createUserOnCollection({ ...userDetails, uid: user.uid });
  } catch (error) {
    return error.code;
  }
};

export const createUserOnCollection = async ({ displayName, email, uid }) => {
  /* Create a user doc reference*/
  const userDocRef = doc(db, "users", uid);

  /* Create a snapShot of the document to check on firebase if exists the userDocRef*/
  const userSnapShot = await getDoc(userDocRef);

  /*Create user if does not exist on database*/
  if (!userSnapShot.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      return error.code;
    }
  }
};
