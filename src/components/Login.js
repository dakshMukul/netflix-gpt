import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
        className="absolute flex flex-col text-white bg-black opacity-85 w-4/12 my-36 right-0 left-0 m-auto 
      p-12 rounded-lg"
      >
        <h1 className="text-3xl mb-6 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </h1>
        {!isSignInForm && (
          <input
            className="bg-gray-700 p-3 rounded-md text-white mb-5 border border-white"
            type="text"
            placeholder="Name"
          />
        )}

        <input
          className="bg-gray-700 p-3 rounded-md text-white mb-5 border border-white"
          type="text"
          placeholder="Email"
        />
        <input
          className="bg-gray-700 p-3 rounded-md text-white mb-5 border border-white"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-700 p-3 rounded-md mt-3 ">
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
