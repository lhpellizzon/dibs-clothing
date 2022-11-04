import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

function SignIn() {
  const googleUser = async () => {
    const { user } = await signInWithGooglePopup();

    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button className="bg-red-500 p-2 rounded" onClick={googleUser}>
        Sign In With Google
      </button>
    </div>
  );
}

export default SignIn;
