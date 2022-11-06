import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { createUserFromEmail } from "../utils/firebase/firebase.utils";

const SignUp = () => {
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkPassword2, setCheckPassword2] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
  });
  const navigate = useNavigate();

  const { userName, email, password, password2 } = form;

  const handleOnChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Make sure your password matches");
      return;
    }

    const response = await createUserFromEmail(form);

    console.log(response);
  };

  return (
    <div>
      <Helmet>
        <title>Sign In | Dibs</title>
      </Helmet>
      <section id="signin" className="">
        <div className="container mx-auto mt-16 flex items-center justify-center">
          <div className="w-96 mx-2 rounded-lg  bg-slate-900">
            <form className="flex flex-col items-center px-8 py-4" onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold  mb-3 w-full text-center py-6 text-amber-50">Create Account</h1>

              <div className="flex flex-col gap-2 min-w-full mb-6">
                <label htmlFor="userName" className="text-amber-50">
                  Name
                </label>
                <input
                  className="p-2 w-full rounded-md border-black border-x border-y"
                  type="text"
                  name="userName"
                  id="userName"
                  value={userName}
                  placeholder="Name..."
                  onChange={handleOnChange}
                  required
                />
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
                <div className="relative">
                  <input
                    className="p-2 w-full rounded-md border-black border-x border-y"
                    type={checkPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Password..."
                    onChange={handleOnChange}
                    required
                  />
                  <div
                    className="absolute text-xl top-3 right-3 hover:cursor-pointer"
                    onClick={() => setCheckPassword((prev) => !prev)}
                  >
                    {" "}
                    {checkPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-w-full mb-6">
                <label htmlFor="password" className="text-amber-50">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    className="p-2 w-full rounded-md border-black border-x border-y"
                    type={checkPassword2 ? "text" : "password"}
                    name="password2"
                    id="password2"
                    value={password2}
                    placeholder="Confirm..."
                    onChange={handleOnChange}
                    required
                  />
                  <div
                    className="absolute text-xl top-3 right-3 hover:cursor-pointer"
                    onClick={() => setCheckPassword2((prev) => !prev)}
                  >
                    {" "}
                    {checkPassword2 ? <BsEyeSlashFill /> : <BsEyeFill />}
                  </div>
                </div>
              </div>

              <input
                className="min-w-full mt-4 mb-2 rounded-md bg-amber-50 font-semibold text-slate-900 uppercase py-4 hover:cursor-pointer hover:bg-slate-200 active:scale-95"
                type="submit"
                value="Submit"
              />
              <div className="min-w-full text-center text-amber-50">
                <p>Already have an account?</p>
                <Link to="/login" className="underline text-blue-500 hover:text-blue-300">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
