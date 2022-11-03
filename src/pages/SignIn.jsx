import { signInWithGooglePopup } from "../utils/firebase/firebase.utils";

function SignIn() {
  const googleUser = async () => {
    const response = await signInWithGooglePopup();

    console.log(response);
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
