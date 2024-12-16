import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const fName = useRef("");
  const email = useRef("");
  const password = useRef("");

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleSumbit = () => {
    const message = checkValidateData(
      email?.current?.value,
      password?.current?.value
      // fName?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fName?.current?.value,
            photoURL: "https://avatars.githubusercontent.com/u/35452218",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"
        alt=""
        className="h-[100vh]"
      />
      <div
        className="bg-[rgba(0,0,0,0.8)]
       px-8 py-4 w-[30%] mx-auto rounded-md absolute left-0 right-0 top-[20%]"
      >
        <h2 className="font-semibold text-2xl text-white mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {!isSignInForm && (
            <div className="mb-4">
              <input
                className="w-full bg-transparent text-white border rounded-md h-11 px-4 py-2  bg-opacity-70"
                type="text"
                placeholder="Full Name"
                ref={fName}
              />
            </div>
          )}
          <div className="mb-4">
            <input
              className="w-full bg-transparent text-white border rounded-md h-11 px-4 py-2  bg-opacity-70"
              type="email"
              placeholder="Email Address"
              ref={email}
            />
          </div>
          <div className="mb-8">
            <input
              className="w-full bg-transparent border text-white rounded-md h-11 px-4 py-2 bg-opacity-70"
              type="password"
              placeholder="Password"
              ref={password}
            />
          </div>
          {errorMessage && <p className="text-red-700">{errorMessage}</p>}

          <button
            onClick={handleSumbit}
            className="bg-red-700 text-white h-12 rounded-md w-full"
          >
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
