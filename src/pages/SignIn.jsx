import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";

function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const googleLogin = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  /* Log with Facebook Provider requires APP Id from faceboook for developers */
  // const facebookLogin = async () => {
  //   const { user } = await signInWithFacebookPopup();

  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };
  const handleOnChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  console.log(form);

  const { email, password } = form;
  return (
    <div>
      <Helmet>
        <title>Sign In | Dibs</title>
      </Helmet>
      <section id="signin" className="">
        <div className="container mx-auto mt-16 flex items-center justify-center">
          <div className="w-96 mx-2 rounded-lg  bg-amber-50">
            <form className="flex flex-col items-center px-8 py-4">
              <h1 className="text-3xl font-bold  mb-3 w-full text-center">Sign In</h1>
              <div className="flex flex-col mb-3 gap-2 min-w-full">
                <button
                  className="p-2 w-full rounded-md flex items-center justify-center gap-2 bg-slate-300"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email..."
                  onChange={handleOnChange}
                >
                  <FcGoogle className="text-2xl" />
                  Continue with Google
                </button>
              </div>
              <div className="flex flex-col mb-3 gap-2 min-w-full">
                <label htmlFor="email">Enter Email</label>
                <input
                  className="p-2 w-full rounded-md border-black border-x border-y"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email..."
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex flex-col mb-3 gap-2 min-w-full">
                <label htmlFor="password">Enter Password</label>
                <input
                  className="p-2 w-full rounded-md border-black border-x border-y"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Password..."
                  onChange={handleOnChange}
                />
              </div>
              <input className="min-w-full mt-4 rounded-md bg-black text-white py-4" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
