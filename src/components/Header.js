import React, { useState } from "react";
import UserLogo from "../img/netflix-logo.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = ({ isSignInForm }) => {
  const [logout, setLogout] = useState();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        setLogout(true);
        navigate("/");
      })
      .catch((error) => {
        navigate("/ErrorPage");
      });
  };
  return (
    <div className="absolute flex justify-between px-8 w-full py-3 bg-gradient-to-b from-black z-10">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex items-center gap-2">
          <h1>welcome {user.displayName}</h1>
          <img className="h-12" src={UserLogo} />
          <button className="text-white font-bold" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
