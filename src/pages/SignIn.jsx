import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithFacebookPopup,
} from "../utils/firebase/firebase.utils";

function SignIn() {
  const googleLogin = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const facebookLogin = async () => {
    const { user } = await signInWithFacebookPopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button className="bg-red-500 p-2 rounded" onClick={googleLogin}>
        Sign In With Google
      </button>
      <button className="bg-red-500 p-2 rounded" onClick={facebookLogin}>
        Sign In With Facebook
      </button>
    </div>
  );
}

export default SignIn;
