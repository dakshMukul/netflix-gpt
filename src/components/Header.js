import React, { useEffect, useState } from "react";
import UserLogo from "../img/netflix-logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { changeLanguage } from "../utils/configSlice";
import { logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { Supported_languages } from "../utils/languageConstants";

const Header = ({ isSignInForm }) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/ErrorPage");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    const selectedaLanguage = e.target.value;
    dispatch(changeLanguage(selectedaLanguage));
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

    document.addEventListener("mousedown", toggleMenu);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 flex justify-between  md:px-8 h-16 md:h-20 py-1 bg-black md:bg-transparent md:bg-gradient-to-b md:from-black">
      <div className="flex justify-between items-center">
        <img
          className="w-32 md:w-40 cursor-pointer"
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      {user && (
        <nav className="flex items-center  p-4 gap-2">
          <button
            className="text-white bg-purple-800  p-2 m-2 none hover:scale-95"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          <div onClick={toggleMenu}>
            <img
              className="h-10 cursor-pointer hover:scale-95"
              src={UserLogo}
            />
          </div>
        </nav>
      )}

      {isMenuOpen && (
        <div className="sideBar absolute right-3 md:right-8 top-20 text-white bg-gray-800 rounded-md p-4">
          <h1>Welcome {user?.displayName}</h1>
          <nav className="list-none flex flex-col gap-2 mt-2">
            <li>Watchlist</li>
            <li>
              <select className="bg-gray-800" onClick={handleLanguageChange}>
                {Supported_languages.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </li>
            <li className="cursor-pointer" onClick={handleLogout}>
              Log out
            </li>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
