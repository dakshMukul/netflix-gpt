import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidteData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bg_img } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    const errorMessage = checkValidteData(
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
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
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
          navigate("/browse");
          console.log("navgation executed");
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
      <Header isSignInForm={isSignInForm} />
      <img
        className="w-full h-screen object-cover"
        src={bg_img}
        alt="background"
      />

      <div className="absolute flex justify-center w-full items-center top-[20%]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col p-4 text-white bg-black opacity-85 rounded-lg w-10/12 md:w-4/12"
        >
          <h1 className="text-3xl mb-6 font-bold">
            {isSignInForm ? "Sign In" : "Sign Up "}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
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
            className="bg-red-900 p-3 rounded-md mt-3 "
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
    </div>
  );
};

export default Login;
