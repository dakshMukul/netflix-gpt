import React, { useEffect } from "react";
import UserLogo from "../img/netflix-logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { Supported_languages } from "../utils/languageConstants";

const Header = ({ isSignInForm }) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/ErrorPage");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="fixed top-0 z-50 flex justify-between px-8 w-full py-3 bg-gradient-to-b from-black">
      <img className="w-40" src={logo} alt="logo" />
      {user && (
        <div className="flex items-center gap-2">
          <select>
            {Supported_languages.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="text-white bg-purple-800 rounded-lg p-2 m-2"
            onClick={handleGptSearchClick}
          >
            GPT Search: {showGptSearch ? "on" : "off"}
          </button>
          <h1 className="text-white">welcome {user.displayName}</h1>
          <img className="h-10" src={UserLogo} />
          <button className="text-white font-bold" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
