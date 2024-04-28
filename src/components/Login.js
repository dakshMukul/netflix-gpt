import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidteData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  // const name = useRef(null);
  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    const errorMessage = checkValidteData(
      // name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMsg(errorMessage);
    if (errorMessage !== null) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentail) => {
          //sign up
          const user = userCredentail.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
          console.log(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col text-white bg-black opacity-85 w-4/12 my-36 right-0 left-0 m-auto 
      p-12 rounded-lg"
      >
        <h1 className="text-3xl mb-6 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </h1>
        {!isSignInForm && (
          <input
            // ref={name}
            className="bg-gray-700 p-3 rounded-md text-white mb-5 border border-white"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          className="bg-gray-700 p-3 rounded-md text-white mb-5 border border-white"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="bg-gray-700 p-3 rounded-md text-white mb-5 border border-white"
          type="password"
          placeholder="Password"
        />
        <div>
          {errorMsg && (
            <p className="text-red-500 font-bold text-lg">{errorMsg}</p>
          )}
        </div>
        <button
          className="bg-red-700 p-3 rounded-md mt-3 "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign UP"}
        </button>
        <p className="py-3 mt-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
