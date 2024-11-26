import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"
        alt=""
      />
      <div
        className="bg-[rgba(0,0,0,0.8)]
       px-8 py-4 w-[30%] mx-auto rounded-md absolute left-0 right-0 top-[20%]"
      >
        <h2 className="font-semibold text-2xl text-white mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <form>
          {!isSignInForm && (
            <div className="mb-4">
              <input
                className="w-full bg-transparent text-white border rounded-md h-11 px-4 py-2  bg-opacity-70"
                type="text"
                placeholder="Full Name"
              />
            </div>
          )}
          <div className="mb-4">
            <input
              className="w-full bg-transparent text-white border rounded-md h-11 px-4 py-2  bg-opacity-70"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-8">
            <input
              className="w-full bg-transparent border text-white rounded-md h-11 px-4 py-2 bg-opacity-70"
              type="password"
              placeholder="Password"
            />
          </div>

          <button className="bg-red-700 text-white h-12 rounded-md w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="cursor-pointer text-white mt-10" onClick={toggleForm}>
            {isSignInForm
              ? "New to netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
