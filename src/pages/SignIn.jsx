import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  auth,
} from "../utils/firebase/firebase.utils";
import { UserContext } from "../context/GlobalState";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  /* Log with Facebook Provider requires APP Id from faceboook for developers */
  // const facebookLogin = async () => {
  //   const { user } = await signInWithFacebookPopup();

  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  /* Set form with userDetails */
  const handleOnChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  /* Sign in with goggle button */
  const googleLogin = async () => {
    try {
      await signInWithGooglePopup();
      toast.success(`Login Success`);
      navigate("/");
    } catch (error) {
      toast.error("Error trying to login using google account");
    }
  };

  /* Sign In with Email and Password */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(form);

      if (user !== null) {
        toast.success(`Welcome Back ${user.displayName}`);
        navigate("/");
      }
    } catch (error) {
      toast.error("Your email or password is incorrect. Please, try again.");
    }
  };

  const { email, password } = form;
  return (
    <div>
      <Helmet>
        <title>Sign In | Dibs</title>
      </Helmet>
      <section id="signin" className="">
        <div className="container mx-auto mt-16 flex items-center justify-center">
          <div className="w-96 mx-2 rounded-lg  bg-slate-900">
            <form className="flex flex-col items-center px-8 py-4" onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold  mb-3 w-full text-center py-6 text-amber-50">
                Sign In
              </h1>
              <div className="mb-6 min-w-full">
                <button
                  type="button"
                  className="p-3 w-full rounded-md flex items-center justify-center gap-2 text-slate-900 bg-slate-300 hover:bg-slate-200 active:scale-95"
                  onClick={googleLogin}
                >
                  <FcGoogle className="text-2xl" />
                  Continue with Google
                </button>
              </div>
              <div className="flex flex-col gap-2 min-w-full mb-6">
                <label htmlFor="email" className="text-amber-50">
                  Enter Email
                </label>
                <input
                  className="p-2 w-full rounded-md border-black border-x border-y"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email..."
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 min-w-full mb-6">
                <label htmlFor="password" className="text-amber-50">
                  Enter Password
                </label>
                <input
                  className="p-2 w-full rounded-md border-black border-x border-y"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Password..."
                  onChange={handleOnChange}
                  required
                />
              </div>
              <input
                className="min-w-full mt-4 mb-2 rounded-md bg-amber-50 font-semibold text-slate-900 uppercase py-4 hover:cursor-pointer hover:bg-slate-200 active:scale-95"
                type="submit"
                value="Submit"
              />
              <div className="min-w-full text-center text-amber-50">
                <p>Don't have an account?</p>
                <Link to="/signup" className="underline text-blue-500 hover:text-blue-300">
                  Click Here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
