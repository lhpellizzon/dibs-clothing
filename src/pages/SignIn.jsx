import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

function SignIn() {
  const googleLogin = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  /* Log with Facebook Provider requires APP Id from faceboook for developers */
  // const facebookLogin = async () => {
  //   const { user } = await signInWithFacebookPopup();

  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div>
      <button className="bg-red-500 p-2 rounded" onClick={googleLogin}>
        Sign In With Google
      </button>
    </div>
  );
}

export default SignIn;
